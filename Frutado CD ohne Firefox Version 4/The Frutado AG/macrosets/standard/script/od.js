
var ImportBaseFolder = "";

var screendumps;

var cur_screen;
var cur_ctl_index;
var cur_screendump;

var screen_width = 800;
var screen_height = 600;

var screens_todo;
var screens_done;

var screens;

function as_int(somestring) {
    return somestring - 0;
}

function
Init(base) {
    screens_todo = new Array;
    screens_done = new Object;

    log("================== INIT =======================");
    cur_screen = null;
    cur_screendump = null;

    screendumps = new Object;
    screens = new Object;

    ImportBaseFolder = base;

    /*
    var dlg = CreateDialog();
    dlg.AddParam("bla", ParamType_TEXT_SINGLE, "Bla");
    dlg.AddParam("wh", ParamType_ENUM, "Größe");
    dlg.AddEnumValue("wh", 1, " 640 x  480");
    dlg.AddEnumValue("wh", 2, " 800 x  600");
    dlg.AddEnumValue("wh", 3, "1024 x  768");
    dlg.AddEnumValue("wh", 4, "1280 x 1024");
    dlg.SetParam("wh", 2);


    if (dlg.Show()) {
        var s = dlg.GetParam("wh");

        alert(typeof(s));

        switch (s) {
        case 1:
            width = 800;
            height = 600;
        case 2:
            width = 1024;
            height = 768;
        case 3:
            width = 640;
            height = 480;
        case 4:
            width = 1280;
            height = 1024;
        }
    }
    */

    Project.SetTourProperty(0, "recording_mode", "screendump");
    Project.SetTourProperty(1, "recording_mode", "screendump");
    Project.SetTourProperty(2, "recording_mode", "screendump");
    Project.SetTourProperty(3, "recording_mode", "screendump");

    AddTourstop("Start", Tourstop_HIDE_NOJUMP);
    var macInit = CreateMacro("start_unit");
    AppendEvent(macInit);
}

function
SetScreenSize(w, h) {
    screen_width = w;
    screen_height = h;
}

function
get_screendump(id) {
    var sc = screendumps[id];
    if (sc == null) {
        log("Create SC " + id);
        sc = new Object;
        screendumps[id] = sc;
        sc.id = id;
        sc.controls = new Object();
    }
    return sc;
}

function
handle_div(div_string) {
    var match_arr = div_string.match("<DIV id=\"hot(x[^\"]*)_(.)\".*left:([0-9-]*);top:([0-9-]*)\"><img .*width=\"([0-9-]*)\".*height=\"([0-9-]*)\"");
    if (match_arr != null) {
        log("## DIV ID: " + match_arr[1] + "\n" +
            "Sub: '" + match_arr[2] + "'\n" +
            "L: " + match_arr[3] + "\n" +
            "T: " + match_arr[4] + "\n" +
            "W: " + match_arr[5] + "\n" +
            "H: " + match_arr[6]
            );


        var id = match_arr[1];
        var subid = match_arr[2];
        var sc = get_screendump(id);

        var ctl = new Object;;
        ctl.type = "HotArea";
        ctl.left = as_int(match_arr[3]);
        ctl.top = as_int(match_arr[4]);
        ctl.width = as_int(match_arr[5]);
        ctl.height = as_int(match_arr[6]);


        sc.controls[subid] = ctl;
    } else {
        match_arr = div_string.match("<DIV id=\"hot(x[^\"]*)_(.)\".*left:([0-9-]*);top:([0-9-]*)\"><FORM");

        if (match_arr != null) {
            var id = match_arr[1];
            var subid = match_arr[2];
            var sc = get_screendump(id);


            var ctl = sc.controls[subid];
            if (ctl == null) {
                ctl = new Object;;
                sc.controls[subid] = ctl;
            }

            ctl.type = "Input";
            ctl.left = as_int(match_arr[3]);
            ctl.top = as_int(match_arr[4]);
        } else {
            log("NOMATCH: " + div_string);
        }
    }
    log ("--- end div ---");
}

function
handle_input_class(div_string) {
    var match_arr = div_string.match("\.inp(x[^\"]*)_(.).*width:([0-9-]*); height:([0-9-]*);");
    log("## INPUT ID: " + match_arr[1] + "\n" +
        "Sub: '" + match_arr[2] + "'\n" +
          "W: " + match_arr[3] + "\n" +
          "H: " + match_arr[4]
          );

    var ctl = new Object;;
    ctl.type = "Input";
    ctl.subid = match_arr[2];
    ctl.width = as_int(match_arr[3]);
    ctl.height = as_int(match_arr[4]);

    var id = match_arr[1];
    var sc = get_screendump(id);
    sc.controls[ctl.subid] = ctl;
    log ("--- end input_class  ---");
}

function
Action(id, nextframe, hotspots, bubpos, xpos, ypos,
       width, height, ctx, ecidarray, type, delay,
       par1, par2, par3, iconname, bubcolor,
       tryittext, knowittext, tmpl_text, fonttext, bubtextfirst,
       knowitflag)
{
    log("Action: " + id);
    if (cur_screen) {
        var action = new Object;

        action.id           = id;
        action.nextframe    = nextframe;
        action.hotspots     = hotspots;
        action.bubpos       = bubpos;
        action.xpos         = xpos;
        action.ypos         = ypos;
        action.width        = width;
        action.height       = height;
        action.ctx          = ctx;
        action.ecidarray    = ecidarray;
        action.type         = type;
        action.delay        = delay;
        action.par1         = par1;
        action.par2         = par2;
        action.par3         = par3;
        action.iconname     = iconname;
        action.bubcolor     = bubcolor;
        action.tryittext    = tryittext;
        action.knowittext   = knowittext;
        action.tmpl_text    = tmpl_text;
        action.fonttext     = fonttext;
        action.bubtextfirst = bubtextfirst;
        action.knowitflag   = knowitflag;

        cur_screen.actions.push(action);
    } else {
        alert("No Current Screen for Action " + id);
    }
}

function
InfoBlock(icon, // "inficon-conc.gif",
          link, // 'javascript:DoLink("../0200000C.htm",320,200,0,"M1L2T2C")',
          text, // 'Zusatzinfo',
          something, // 0,
          id //'M1L2T2C'
          )
{
}

// new in OD 8.7x
function
SetRemediationLevels() {
    // ignore
}



function
handle_decision(actions, first_index, last_action)
{
    var last_index = first_index;
    for (var i = first_index; i < actions.length; i++) {
        if (actions[i].type == "Decision") {
            last_index++;
        } else {
            break;
        }
    }

    var act = actions[first_index];

    log("handle_decision " + act.id);

    var sc_info = get_screendump(act.id);
    var ctl;
    if (sc_info == null) {
        log("No Screendump for: " + act.id);
    } else {
        ctl = sc_info.controls["0"];
    }

    var mac = CreateMacro("explanation");
    mac.SetParam("b_duration", 3000);

    var try_text = '';
    if (act.tryittext != null) {
        try_text = act.tryittext;
    }

    var know_text = '';
    if (act.knowittext != null) {
        know_text = act.knowittext;
    }

    var re1 = /<\/?[^>]*>/g;
    var know_text_2  = know_text.replace(re1, "");
    if (know_text_2 == "" || know_text_2 == " ") {
        know_text = try_text;
    } else {
        // alert(know_text_2);
    }

    for (var i = first_index; i < last_index; i++) {
        var pat = 'onClick="Decision(' + (i - first_index + 1) + ')';
        var replace = 'onClick="ctx_control.cfg_jumptitle(\'' + actions[i].nextframe + '\')';
        know_text = know_text.replace(pat, replace);
        know_text = know_text.replace('onMouseOver="OnLink()"', '');
        know_text = know_text.replace('onMouseOut="OffLink()"', '');
        know_text = know_text.replace('href="#"', 'href="javascript:void(0)"');


        try_text = know_text.replace(pat, replace);
        try_text = try_text.replace('onMouseOver="OnLink()"', '');
        try_text = try_text.replace('onMouseOut="OffLink()"', '');
        try_text = try_text.replace('href="#"', 'href="javascript:void(0)"');
        act.tmpl_text = act.tmpl_text.replace(pat, replace);
    }

    if (act.bubtextfirst) {
        mac.SetParam("explanation_d", try_text + act.tmpl_text);
        mac.SetParam("explanation_p", know_text + act.tmpl_text);
    } else {
        mac.SetParam("explanation_d", act.tmpl_text + try_text);
        mac.SetParam("explanation_p", act.tmpl_text + know_text);
    }

    var pos = CreatePosition();
    pos.WindowID = 0;
    pos.ElementPath = "0:0:0:0:1:0";
    if (act.bubpos != 0) {
        pos.X = (100 * act.xpos)/screen_width;
        pos.Y = (100 * act.ypos)/screen_height;
        pos.DocX = (100 * act.xpos)/screen_width;
        pos.DocY = (100 * act.ypos)/screen_height;
        switch (act.bubpos) {
        case 1: mac.SetParam("orientation", "NE"); break;
        case 2: mac.SetParam("orientation", "NW"); break;
        case 3: mac.SetParam("orientation", "SE"); break;
        case 4: mac.SetParam("orientation", "SW"); break;
        case 5: mac.SetParam("orientation", "E"); break;
        case 6: mac.SetParam("orientation", "W"); break;
        case 7: mac.SetParam("orientation", "E"); break;
        case 8: mac.SetParam("orientation", "W"); break;
        }
    } else {
        pos.DocX = 50;
        pos.DocY = 50;
        pos.X    = 50;
        pos.Y    = 50;
        mac.SetParam("orientation", "C");
    }

    if (ctl) {
        log("Found CTL: " + act.id + " " + ctl.left + " " + ctl.top + " " + ctl.width + " " + ctl.height);
        var hpos = CreatePosition(0xffff);
        hpos.WindowID = 0;
        hpos.ElementPath = "0:0:0:0:1:1:" + cur_ctl_index;
        if (act.type == "Input") {
            ctl.left += 4;
            ctl.top += 4;
            ctl.width -= 9;
            ctl.height -= 9;
        } else {
            ctl.left += 3;
            ctl.top += 3;
            ctl.width -= 1;
            ctl.height -= 1;
        }

        var scr = CreateRect(0, 0, 0, 0);
        scr.left = ctl.left;
        scr.top = ctl.top;
        scr.right = ctl.left + ctl.width;
        scr.bottom = ctl.top + ctl.height;


        log("HPOS: " + ctl.left + " " + ctl.top);
        log(" POS: " + hpos.X + " " + hpos.Y);

        if (mac.HasParam("position_h")) {
            mac.SetParam("position_h", hpos);
        }
        if (mac.HasParam("screenshot_rect")) {
            mac.SetParam("screenshot_rect", scr);
        }

    } else {
        // log("No CTL for " + act.id);
    }

    mac.SetParam("b_width", act.width);
    mac.SetParam("b_height", as_int(act.height) - 30);
    mac.SetParam("position_b", pos);
    if (mac.HasParam("position_bu")) {
        var u_pos = pos.Clone();
        if (u_pos.X < 50) {
            u_pos.X = 75
        } else {
            u_pos.X = 25
        }
        u_pos.DocX = u_pos.X;
        u_pos.Y = 75;
        u_pos.DocY = 75;

        mac.SetParam("position_bu", u_pos);
    }

    AppendEvent(mac);

    log("NEXT INDEX: " + last_index);
    return last_index;
}

function dgo_delay(delay) {
    return Math.floor(delay / 10);
}


function
handle_action(act, last_action)
{
    log("handle_action " + act.id);

    var sc_info = get_screendump(act.id);
    var ctl;
    if (sc_info == null) {
        log("No Screendump for: " + act.id);
    } else {
        ctl = sc_info.controls["0"];
    }

    var mac;
    if (act.type == "LBClick1") {
        mac = CreateMacro("click");
        mac.SetParam("action", "lclick");
        mac.SetParam("b_duration", dgo_delay(act.delay));
    } else if (act.type == "LBClick2") {
        mac = CreateMacro("click");
        mac.SetParam("action", "ldblclick");
        mac.SetParam("b_duration", dgo_delay(act.delay));
    } else if (act.type == "Point") {
        mac = CreateMacro("click");
        mac.SetParam("action", "enter");
        mac.SetParam("b_duration", dgo_delay(act.delay));
    } else if (act.type == "RBClick1") {
        mac = CreateMacro("click");
        mac.SetParam("action", "rclick");
        mac.SetParam("b_duration", dgo_delay(act.delay));
    } else if (act.type == "RBClick2") {
        mac = CreateMacro("click");
        mac.SetParam("action", "rdblclick");
        mac.SetParam("b_duration", dgo_delay(act.delay));
    } else if (act.type == "Input") {
        mac = CreateMacro("input_text");
        var text_d;
        if (typeof(act.par1) == 'object') {
            text_d = act.par1[1];
        } else if (typeof(act.par1) == 'string') {
            text_d = act.par1;
        } else {
            log("Par1 not object nor string: " + typeof(act.par1));
            text_d = '';
        }
        act.knowittext = act.knowittext.replace("#VALUE", "${text_d}");
        act.tryittext = act.tryittext.replace("#VALUE", "${text_d}");
        act.tmpl_text = act.tmpl_text.replace("#VALUE", "${text_d}");

        mac.SetParam("text_d", text_d);
        mac.SetParam("confirmation_tab", false);
        mac.SetParam("confirmation_enter", false);
        mac.SetParam("affirmation_button", false);
        mac.SetParam("set_focus", true);
        mac.SetParam("b_duration", dgo_delay(act.delay));
    } else if (act.type == "None") {
        mac = CreateMacro("explanation_long");
        mac.SetParam("b_duration", -1);
    } else if (act.type == "KeyPress") {
        mac = CreateMacro("key_press");
        var pos = CreatePosition();
        pos.WindowID = 0;
        mac.SetParam("position_h", pos);
        var key_name = String.fromCharCode(act.par1);
        var key_code = 0 + act.par1;
        if (key_code == 13) {
            key_name = "enter";
        } else if (key_code == 9) {
            key_name = "tab";
        } else if (key_code >= 112 && key_code < 124) {
            key_name = "f" + (key_code - 111);
        }
        if (act.par2 == "a") {
            key_name = "alt " + key_name;
        } else if (act.par2 == "c") {
            key_name = "ctrl " + key_name;
        }
        mac.SetParam("key_name", key_name);
        mac.SetParam("b_duration", dgo_delay(act.delay));
    } else {
        log("Unknown Action Type: " + act.type);
        mac = CreateMacro("explanation_long");
    }

    var try_text = '';
    if (act.tryittext != null) {
        try_text = act.tryittext;
    }

    var know_text = '';
    if (act.knowittext != null) {
        know_text = act.knowittext;
    }

    var re1 = /<\/?[^>]*>/g;
    var know_text_2  = know_text.replace(re1, "");
    if (know_text_2 == "" || know_text_2 == " ") {
        know_text = try_text;
    } else {
        // alert(know_text_2);
    }


    if (act.bubtextfirst) {
        mac.SetParam("explanation_d", try_text + act.tmpl_text);
        // if (knowitflag) {
            mac.SetParam("explanation_p", know_text + act.tmpl_text);
        // } else {
            // mac.SetParam("explanation_p", know_text);
        // }
    } else {
        mac.SetParam("explanation_d", act.tmpl_text + try_text);
        // if (knowitflag) {
            mac.SetParam("explanation_p", act.tmpl_text + know_text);
        // } else {
            // mac.SetParam("explanation_p", know_text);
        // }
    }

    if (mac.HasParam("element_type")) {
        mac.SetParam("element_type", act.type);
    }

    if (mac.HasParam("jump_target")){
        mac.SetParam("jump_target", act.nextframe);
    }

    if (mac.HasParam("wait_for_input")) {
        mac.SetParam("wait_for_input", last_action);
    }

    var pos = CreatePosition();
    pos.WindowID = 0;
    pos.ElementPath = "0:0:0:0:1:0";
    if (act.bubpos != 0) {
        pos.X = (100 * act.xpos)/screen_width;
        pos.Y = (100 * act.ypos)/screen_height;
        pos.DocX = (100 * act.xpos)/screen_width;
        pos.DocY = (100 * act.ypos)/screen_height;
        switch (act.bubpos) {
        case 1: mac.SetParam("orientation", "NE"); break;
        case 2: mac.SetParam("orientation", "NW"); break;
        case 3: mac.SetParam("orientation", "SE"); break;
        case 4: mac.SetParam("orientation", "SW"); break;
        case 5: mac.SetParam("orientation", "E"); break;
        case 6: mac.SetParam("orientation", "W"); break;
        case 7: mac.SetParam("orientation", "E"); break;
        case 8: mac.SetParam("orientation", "W"); break;
        }
    } else {
        pos.DocX = 50;
        pos.DocY = 50;
        pos.X = 50;
        pos.Y = 50;
        mac.SetParam("orientation", "C");
    }

    if (ctl) {
        log("Found CTL: " + act.id + " " + ctl.left + " " + ctl.top + " " + ctl.width + " " + ctl.height);
        var hpos = CreatePosition(0xffff);
        hpos.WindowID = 0;
        hpos.ElementPath = "0:0:0:0:1:1:" + cur_ctl_index;
        if (act.type == "Input") {
            ctl.left += 4;
            ctl.top += 4;
            ctl.width -= 9;
            ctl.height -= 9;
        } else {
            ctl.left += 3;
            ctl.top += 3;
            ctl.width -= 1;
            ctl.height -= 1;
        }

        var scr = CreateRect(0, 0, 0, 0);
        scr.left = ctl.left;
        scr.top = ctl.top;
        scr.right = ctl.left + ctl.width;
        scr.bottom = ctl.top + ctl.height;


        log("HPOS: " + ctl.left + " " + ctl.top);
        log(" POS: " + hpos.X + " " + hpos.Y);

        if (mac.HasParam("position_h")) {
            mac.SetParam("position_h", hpos);
        }
        if (mac.HasParam("screenshot_rect")) {
            mac.SetParam("screenshot_rect", scr);
        }


        if (cur_screendump) {
            var sctl;
            if (act.type == "LBClick1") {
                sctl = cur_screendump.AddControl("hrefarea");
                cur_ctl_index ++;
            } else if (act.type == "LBClick2") {
                sctl = cur_screendump.AddControl("hrefarea");
                cur_ctl_index ++;
            } else if (act.type == "Point") {
                sctl = cur_screendump.AddControl("hrefarea");
                cur_ctl_index ++;
            } else if (act.type == "RBClick1") {
                sctl = cur_screendump.AddControl("hrefarea");
                cur_ctl_index ++;
            } else if (act.type == "Input") {
                sctl = cur_screendump.AddControl("edit");
                cur_ctl_index ++;
            } else {
                sctl = cur_screendump.AddControl("hrefarea");
                cur_ctl_index ++;
            }
            if (sctl) sctl.SetParam("Position", scr);
        }


    } else {
        log("No CTL for " + act.id);
    }

    mac.SetParam("b_width", act.width);
    mac.SetParam("b_height", as_int(act.height) - 30);
    mac.SetParam("position_b", pos);
    if (mac.HasParam("position_bu")) {
        var u_pos = pos.Clone();
        if (u_pos.X < 50) {
            u_pos.X = 75
        } else {
            u_pos.X = 25
        }
        u_pos.DocX = u_pos.X;
        u_pos.Y = 75;
        u_pos.DocY = 75;

        mac.SetParam("position_bu", u_pos);
    }

    AppendEvent(mac);
}

function
Screen(name, screenshot_file) {
    log("Screen: " + name);

    cur_screen = new Object;
    cur_screen.file = screenshot_file;
    cur_screen.name = name;
    cur_screen.actions = new Array();
    screens[name] = cur_screen;
}


function
handle_screen(screen) {
    log("handle_screen " + screen.name);

    // PNGtoGIF(ImportBaseFolder + screen.file, Project.PagePath + screen.file + ".gif");
    CopyFile(ImportBaseFolder + screen.file, Project.PagePath + screen.file);

    var ts = AddTourstop("");
    ts.Name = screen.name;
    ts.Caption = screen.name;

    if (cur_screendump) cur_screendump.Save();

    var sd = CreateScreendumpFromFile(Project.PagePath + screen.file + ".xml",
                                      screen.file,
                                      InstallDirectory + "screendump_templates\\TemplateCentered.html");

    cur_screendump = sd;
    cur_ctl_index = 0;

    var mac = CreateMacro("new_page");

    mac.SetParam("dump_page", screen.file + ".html");
    mac.SetParam("screenshot_file", "..\\pages\\" + screen.file);

    var r = CreateRect(0, 0, screen_width, screen_height);
    mac.SetParam("screenshot_rect", r);

    mac.SetParam("new_step", screen.name);

    AppendEvent(mac);
}

function add_todo(nextframe) {
    if (typeof(screens_done[nextframe.name]) != 'undefined') {
        log("IGNORE TODO: " + nextframe.name);
        return;
    }

    screens_done[nextframe.name] = 1;
    screens_todo[screens_todo.length] = nextframe;
    log("ADD TODO " + nextframe.name);
}

function SetStrInputVariables(a, b, c, d) {
    log("SetStrInputVariables " + a + ", " + b + ", " + c + ", " + d);
}

function
Fini() {
    log("====== FINI =====");

    screens_todo[screens_todo.length] = screens[StartScreen];

    while (screens_todo.length) {
        log("TODO : " + screens_todo.length + " screens");
        var sc = screens_todo[screens_todo.length - 1];
        screens_todo.pop();

        while (sc) {
            var next_sc = null;

            handle_screen(sc);
            log("screen.actions[" + i + "]");
            for (var i = 0; i < sc.actions.length; i++) {
                log("screen.actions[" + i + "]");
                var act = sc.actions[i];
                var last_action = (i == sc.actions.length - 1);
                if (act.type == "Decision") {
                    var next_index = handle_decision(sc.actions, i, last_action);
                    for (var d = i; d < next_index; d++) {
                        if (d == 0) {
                            if (typeof(screens_done[sc.actions[d].nextframe]) == 'undefined') {
                                next_sc = screens[sc.actions[d].nextframe];
                                screens_done[sc.actions[d].nextframe] = 1;
                                log("NEXT: " + sc.actions[d].nextframe);
                            }
                        } else {
                            add_todo(screens[sc.actions[d].nextframe]);
                        }
                    }
                    i = next_index;
                } else {
                    handle_action(act, last_action);
                    if (i == 0) {
                        if (typeof(screens_done[act.nextframe]) == 'undefined') {
                            screens_done[act.nextframe] = 1;
                            log("NEXT: " + act.nextframe);
                            next_sc = screens[act.nextframe];
                        }
                    } else {
                        add_todo(screens[act.nextframe]);
                    }
                }
            }

            if (!next_sc) AppendEvent(CreateMacro("end_unit"));

            sc = next_sc;
        }
    }

    if (cur_screendump) {
        cur_screendump.Save();
        cur_screendump = null;
    }
}

function ConceptInfo(html,width,height,displayName,param1,param2) {
}
