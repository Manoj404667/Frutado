#use(ui_lang.js)
#use(relpos_helpers.js)

function test_deliver_enter() {
    var rp = RecordPosition(Position_ELEMENT_POS, ui_trans('msgSelectPosition') );


    var script = 
        "function fire_submit(e, w) {" + 
        "    try {\n" +
        "        e.value = 'SU01'; \n" + 
        "        var clicked = false; \n" + 
        "        for (var i = 0; i < e.form.length; i++) { \n" + 
        "            if(e.form[i].type == 'submit') { \n" + 
        "                clicked = true; \n" + 
        "                e.form[i].click(); \n" + 
        "                break; \n" + 
        "            }\n" + 
        "        } \n" + 
        "        if(!clicked) { \n" + 
        "            e.form.submit(); \n" + 
        "        }\n" + 
        "    } catch (e) {\n" +
        "       alert(e.message)\n" +
        "    }\n" +
        "}";

    var res = rp.ExecScript(script, true);

}

function activation_test() {
    var rp = RecordPosition(Position_ELEMENT_POS, ui_trans('msgSelectPosition') );

    var on_mousedown = rp.ExecScript("onmousedown");
    if (on_mousedown != "null") {
        rp.ExecScript("fireEvent('onmousedown')");
        page_changed = true;
    }

    var on_click = rp.ExecScript("onclick");
    if (on_click != "null") {
        rp.ExecScript("fireEvent('onclick')");
        page_changed = true;
    } else {
        rp.ExecScript("$click()");
    }
}

function update_window_id(mac, old_window_id, new_window_id) {
    for (var i = 0; i < mac.NumParams(); i++) {
        var par = mac.GetParam(i);

        if (typeof(par.WindowID) != undefined) {
            if (par.WindowID == old_window_id) {
                par.WindowID = new_window_id;
                mac.SetParam(i, par);

            }
        }
    }
}


function change_window_id_test() {
    for (i = 0; i < NumTourstops(); i++) {
        var ts_changed = false;
        var ts = GetTourstop(i);

        var mac = ts.NextMacro();

        while (mac != null) {
            var temp_name = mac.Template();

            if (temp_name == "new_window") {
                var ps = mac.GetParam("dump_win_relpos");
                log(typeof(ps));

                var id = ps.WindowID;

                log("ID: " + id);
                if (id == 1 && mac.GetParam("new_step") != "Value Help Selection") {
                    ps.WindowID = 0;
                    mac.SetParam("dump_win_relpos", ps);
                    ts_changed = true;
                }
            } if (ts_changed) {
                update_window_id(mac, 1, 0);
            }

            mac = ts.NextMacro(mac.TourPosition());
        }
    }
}


function replace_test() {
    var mac = NextMacro();

    var new_mac = CreateMacro("explanation_long");

    while (mac) {
        ReplaceEvent(mac.TourPosition(), new_mac);
        log(mac.TourPosition());
        mac = NextMacro(mac.TourPosition());
    }

    var new_mac = CreateMacro("goto_tourstop");

    var mac = NextMacro();
    while (mac) {
        ReplaceEvent(mac.TourPosition(), new_mac);
        log(mac.TourPosition());
        mac = NextMacro(mac.TourPosition());
    }

    var new_mac = CreateMacro("explanation");

    var mac = NextMacro();
    while (mac) {
        ReplaceEvent(mac.TourPosition(), new_mac);
        log(mac.TourPosition());
        mac = NextMacro(mac.TourPosition());
    }
}

var tthdl = {
REF : function(node) {
},
Extensions : function(node) { 
},
Section : function(node) { 
},
SummaryScreenShow : function(node) { 
},
SummaryScreenHide : function(node) { 
},
Simulation : function(node) { 
},
Anykey : function(node) { 
},
Quest : function(node) { 
},
HO : function(node) { 
},
SO : function(node) { 
},
CC : function(node) { 
},
RO : function(node) { 
},
CEBT : function(node) { 
},
ChangeEventBitmapPressL : function(node) { 
},
ChangeFocus : function(node) { 
},
DeleteCaret : function(node) { 
},
ButtonSummaryShow : function(node) { 
},
ButtonSummaryAddTopic : function(node) { 
},
Pool : function(node) { 
}
}

function t2html(txt) {
    txt = '' + txt;
    txt = txt.replace(/\\B/g, "<b>");
    txt = txt.replace(/\\b/g, "</b>");
    txt = txt.replace(/\\n/g, "<br>");
    return txt;
}

function
get_pos(rect, ctx) {
    var hpos = CreatePosition(Position_ELEMENT);
    hpos.WindowID = 0;
    hpos.ElementPath = "0:0:0:0:1:1:" + '0';

    hpos.DocX = (100 * rect.left)/ctx.screen_width;
    hpos.DocY = (100 * rect.top)/ctx.screen_height;

    return hpos;
}

function test() {
    var srcdir  = "C:\\Documents and Settings\\stefan.DATANGO\\Desktop\\Postbank\\_GroupWise_WBT_V101a\\l_1c457787096e456b9523cfafc1cab6b8\\";
    var filename  = srcdir + "l_1c457787096e456b9523cfafc1cab6b8.xml";
    var xmldoc = ReadXml(filename);

    if (!xmldoc) {
        log("Could not read " + filename);
        return;
    }

    var xml = xmldoc.baseNode();

    var story_node = xml.getChild(0);
    if (story_node.getName() != 'Story') {
        log("not a story!");
        return;
    }
    var story = [];

    var pool_by_id = {};
    var page_obj = {};


    for (var i = 0; i < story_node.numChildren(); i++) {
        var step_node = story_node.getChild(i);

        var tag = step_node.getName();

        if (tag == 'Extensions') {
            // do nothing
        } else if (tag == 'Section') {
            log('Section');
        } else if (tag == 'Pool') {
            log('Pool');
            for (var p = 0; p < step_node.numChildren(); p++) {
                var poolitem_node = step_node.getChild(p);

                var ptag = poolitem_node.getName();

                var poolitem = {tagName: ptag};

                var pool_id = '';
                var pool_oid = '';

                //log('Pool: ' + poolitem_node.numAttributes() + " atts");
                for (var pa = 0; pa < poolitem_node.numAttributes(); pa++) {
                    var patt = poolitem_node.getAttribute(pa);

                    poolitem[patt.getName()] = patt.getValue();

                    if (patt.getName() == 'ID') {
                        pool_id = patt.getValue();
                    }
                }
                if (pool_id.length) pool_by_id[pool_id] = poolitem;

            }
        } else {
            var step = {tagName: tag};

            // log(step_node.numAttributes() + " atts");
            for (var a = 0; a < step_node.numAttributes(); a++) {
                var satt = step_node.getAttribute(a);

                step[satt.getName()] = satt.getValue();
            }
            story.push(step);
        }

    }
    log('got it! :-)');

    var ctx = {};
    ctx.cur_page = "first.png";
    ctx.screen_width = 1024;
    ctx.screen_height = 768;

    for (var i = 0; i < story.length; i++) {
        var step = story[i];

        if (step.tagName == 'Simulation') {
            if (step.TI) AddTourstop(step.TI);
        } else if (step.tagName == 'REF') {
            if (step.ID) {
                // log('' + i + ' REF -> ' + step.ID);
                var ref_obj = pool_by_id[step.ID];
                if (ref_obj) {
                    page_obj[ref_obj.O] = ref_obj;
                    if (ref_obj.tagName == 'SB') {
                        if (ref_obj.PF) { 
                            var info = 'Step ' + step.ID;
                            if (typeof(ref_obj.L) == 'undefined') {
                                log("Copy: " + ctx.cur_page + " " + ref_obj.PF);    
                                DeleteFile(Project.PagePath + ctx.cur_page);
                                CopyFile(srcdir + ref_obj.PF, Project.PagePath + ctx.cur_page);
                            } else {
                                info += ' L: ' + ref_obj.L + ' T: ' + ref_obj.T;
                                var image = CreateImage(Project.PagePath + ctx.cur_page);
                                var overlay_img = CreateImage(srcdir + ref_obj.PF);
                                image.BeginPaint();
                                image.PutImage(overlay_img, ref_obj.L - 0, ref_obj.T - 0);
                                image.EndPaint();
                                image.Save(Project.PagePath + ctx.cur_page);
                                image.Destroy();
                                log("Put: " + ctx.cur_page + " " + ref_obj.PF);    
                            }

                        } else {
                            // overlay ...
                        }
                    } else if (ref_obj.tagName == 'CEB') {
                        /*
                        var mac = CreateMacro("click");
                        var scr = CreateRect(ref_obj.L - 0,
                                             ref_obj.T - 0,
                                             (ref_obj.L-0) + (ref_obj.W - 0),
                                             (ref_obj.T-0) + (ref_obj.H-0));
                        mac.SetParam("screenshot_rect", scr);
                        AppendEvent(mac);
                        */
                    } else if (ref_obj.tagName == 'NewComment') {
                        if (ctx.cur_comment && ctx.cur_comment.length) {
                            var mac = CreateMacro("explanation_long");
                            mac.SetParam("explanation_d", t2html(ctx.cur_comment));
                        } else {
                            ctx.cur_comment = ref_obj.TX;
                        }
                    } else {
                        // log("got REF " + ref_obj.tagName);
                        // for (var att in ref_obj) log("    " + att + ": " + ref_obj[att]);
                    }
                } else {
                    log("No Pool-Item with ID " + step.ID);
                }
            } else {
                log("No ID in REF");
            }
        } else if (step.tagName == 'Quest') {
            ctx.cur_screen = "Page" + i;
            var sd = CreateScreendumpFromFile(Project.PagePath + ctx.cur_screen + ".xml",
                                              ctx.cur_page,
                                              InstallDirectory + "screendump_templates\\TemplateCentered.html");

            var mac = CreateMacro("new_page");
            log("Use: " + ctx.cur_page); 
            mac.SetParam("dump_page", ctx.cur_screen + ".html");
            mac.SetParam("screenshot_file", "..\\pages\\" + ctx.cur_page);
            mac.SetParam("new_step", info);

            var dst = "img" + i + ".png";
            CopyFile(Project.PagePath + ctx.cur_page, Project.PagePath + dst);
            ctx.cur_page = dst;

            AppendEvent(mac);

            var mac = CreateMacro("click");

            mac.SetParam("explanation_d", t2html(ctx.cur_comment));
            mac.SetParam("explanation_p", t2html(ctx.cur_comment));
            ctx.cur_comment = '';

            mac.SetParam("fieldname", step.O);


            var ctl = page_obj[step.O];
            if (ctl) {
                var scr = CreateRect(ctl.L - 0,
                                     ctl.T - 0,
                                     (ctl.L-0) + (ctl.W - 0),
                                     (ctl.T-0) + (ctl.H-0));
                mac.SetParam("screenshot_rect", scr);

                var sctl = sd.AddControl("hrefarea");
                if (sctl) sctl.SetParam("Position", scr);

                set_positions(mac, get_pos(scr, ctx), true);

            }

            sd.Save();
            AppendEvent(mac);
        } else {
            // log('' + i + ': ' + step.tagName);
        }
    }

}
