#use(config.js)
#use(custom/config.js)
#use(ui_lang.js)
#use(lang.js)

#use(relpos_helpers.js)

var hmap = new Object;

// var lang_tbl = null;
// var lang_tbl_cur = '';

function action_info(name) {
    HistoryStartAction(name);
    SetStatus(ui_trans('msgStatusAction') + name);
    ProgressEnd();
}

function get_key_infotxt(tk) {
    var dt = '';
    var pt = '';
    if (typeof(lang_tbl[tk+'.demo']) == 'string') {
        dt = lang_tbl[tk+'.demo'];
    }

    if (typeof(lang_tbl[tk+'.prac']) == 'string') {
        pt = lang_tbl[tk+'.prac'];
    }

    res = {
        demo: dt,
        prac: pt
    };

    return res;
}

function get_infotxt(type) {
    log("get_infotxt(" + type + ")");
    var hdl = hmap[type];

    var res;
    var tk = '?';

    if (lang_tbl != null && typeof(hdl) == 'object') {
        tk = hdl.textkey;
        log("    textkey: " + tk);
        res = get_key_infotxt(tk);
    } else if (typeof(hdl) == 'object') {
        log("lang_tbl == null: " + hdl.textkey);
    } else if (lang_tbl != null) {
        log("typeof(hdl) == " + typeof(hdl));
    }

    if (typeof(res) != 'object') {
        res = {
            demo: "Click on ... (" + type + "/" + tk + "/" + Project.Language + ")",
            prac: "Please click on ... (" + type + "/" + tk + "/"  + Project.Language + ")",
        }
    }
    return res;
}

function is_array(obj) {
    return (typeof(obj) == 'object') && (typeof(obj.length) == 'number');
}

function insert_prop(infotxt, prop_name, prop_value) {
    // var pv = "<SPAN id=\"" + prop_name + "\" contenteditable=\"false\">" + prop_value + "</SPAN>";
    var pv = "${" + prop_name + "}";
    infotxt.demo = infotxt.demo.replace("%" + prop_name + "%", pv);
    infotxt.prac = infotxt.prac.replace("%" + prop_name + "%", pv);
}

function insert_props(infotxt, props) {
    var prop;
    for (prop in props) {
        insert_prop(infotxt, prop, props[prop]);
    }
}

function handle_prop(hdl, rp, infotxt) {
    var retval;
    if (hdl.propscript != null) {
        if (typeof(hdl.propscript) == 'object') {
            var fn;
            for (fn in hdl.propscript) {
                var ps = hdl.propscript[fn];
                if (is_array(ps)) {
                    for (var i = 0; i < ps.length; i++) {
                        var fn_res = rp.ExecScript(ps[i]);
                        if (fn_res == "<js-error>" || fn_res == "undefined" || fn_res == " ") {
                            fn_res = "";
                        }
                        if (fn_res != "") break;
                    }
                } else {
                    var fn_res = rp.ExecScript(ps);
                    if (fn_res == "<js-error>" || fn_res == "undefined" || fn_res == " ") {
                        fn_res = "";
                    }
                }
                if (fn == "fieldname") retval = fn_res;
                insert_prop(infotxt, fn, fn_res);
            }
        } else {
            var fieldname = rp.ExecScript(hdl.propscript);
            insert_prop(infotxt, 'fieldname', fieldname);
            retval = fieldname;
        }
    } else if (hdl.propfunction != null) {
        if (typeof(hdl.propfunction) == 'object') {
            var i;
            for (i in hdl.propfunction) {
                var fn = hdl.propfunction[i];
                var fn_res = fn(rp);
                insert_prop(infotxt, i, fn_res);
                if (i == "fieldname") retval = fn_res;
            }
        }
    }
    return retval;
}

function handle_field_icon(hdl, rp, mac) {
    if (hdl.imgscript != null) {
        var href = rp.ExecScript(hdl.imgscript);
        if (href.substring(0, 5) == 'url("') href = img_url_to_href(href);

        if (href != "<js-error>" && href != "undefined") {

            var dump = HtmlDumper.DumpResource(href, "images");
            if (dump.substr(0, 6) == 'pages/') {
                dump = dump.substr(6);
            }

            if (mac.HasParam("fieldicon")) mac.SetParam("fieldicon", dump);
        }
    }
}

/*
function handle_img(hdl, rp, infotxt) {
    if (hdl.imgscript != null) {
        if (typeof(hdl.imgscript) == 'object') {
            var img;
            for (img in hdl.imgscript) {
                var href = rp.ExecScript(hdl.imgscript[img]);
                if (href.substring(0, 5) == 'url("') href = img_url_to_href(href);
                var img_file = "";
                if (href != "<js-error>" && href != "undefined") {
                    var dump = HtmlDumper.DumpResource(href, "images");
                    if (dump != "") img_file = "<img src=\"" + dump + "\">";
                }
                insert_prop(infotxt, img, img_file);
            }
        } else {
            var href = rp.ExecScript(hdl.imgscript);
            if (href.substring(0, 5) == 'url("') href = img_url_to_href(href);
            var img_file = "";
            if (href != "<js-error>" && href != "undefined") {
                var dump = HtmlDumper.DumpResource(href, "images");
                if (dump != "") img_file = "<img src=\"" + dump + "\">";
            }
            insert_prop(infotxt, 'img', img_file);
        }
    }
}
*/



function handle_action(hdl, rp) {
    if (hdl.action != null) {
        if (is_array(hdl.action)) {
            for (var i = 0; i < hdl.action.length; i++) {
                var action = hdl.action[i];
                action = "$" + action;
                rp.ExecNavigationScript(action);
            }
        } else if (typeof(hdl.action) == 'string') {
            var action = hdl.action;
            // if (rp.WindowID != 0)
                  action = "$" + action;
            rp.ExecNavigationScript(action);
        }
    }
}

function std_create_click(hdl, type, rp, rp_rect, ctrl, rbutton) {
    var infotxt = get_infotxt(type);

    action_info(hdl.name);

    var fieldname;
    if (typeof(hdl.fieldname) == 'string' && 
        hdl.fieldname == 'standard') 
    {
        fieldname = standard_fieldname(rp);
    } else {
        fieldname = handle_prop(hdl, rp, infotxt);
    }

    var new_mac = CreateMacro("click");
    //handle_img(hdl, rp, infotxt);
    handle_field_icon(hdl, rp, new_mac);

    set_positions(new_mac, rp);

    if (typeof(fieldname) == 'string') {
        new_mac.SetParam("fieldname", fieldname);
    }
    new_mac.SetParam("explanation_d", infotxt.demo);
    new_mac.SetParam("explanation_p", infotxt.prac);
    new_mac.SetParam("element_type", type);
    new_mac.SetParam("action", rbutton ? "rclick" : "lclick");

    var sc_fn = GetUniqueFilename(Project.DocPath, "BUTTON_", ".gif");
    var sc = ImageScreenshot(Project.DocPath + sc_fn, rp);
    new_mac.SetParam("screenshot_file", sc_fn);
    new_mac.SetParam("screenshot_rect", sc.rect);

    if (new_mac.HasParam("b_duration")) {
        new_mac.SetParam("b_duration", cfg.standard.rec.default_bubble_duration);
    }

    append_event(new_mac);

    if (hdl.action) {
        handle_action(hdl, rp);
    } else {
        var on_mousedown = rp.ExecScript("onmousedown");
        if (on_mousedown != "null") {
            rp.ExecNavigationScript("$fireEvent('onmousedown')");
        }

        rp.ExecNavigationScript("$click()");
    }

    var dont_wait = false;
    if (typeof(hdl.dont_wait) == 'boolean') {
        dont_wait = hdl.dont_wait;
    }

    new_tourstop(ForegroundBrowser(), type, dont_wait);
}

function std_create_quick_click(hdl, type, rp, rp_rect, ctrl, rbutton) {
    var infotxt = get_infotxt(type);

    action_info(hdl.name);

    handle_prop(hdl, rp, infotxt);

    var new_mac = CreateMacro("quick_click");
    // handle_img(hdl, rp, infotxt);
    handle_field_icon(hdl, rp, new_mac);

    set_positions(new_mac, rp);

    new_mac.SetParam("explanation_p", infotxt.prac);
    new_mac.SetParam("element_type", type);
    new_mac.SetParam("action", rbutton ? "rclick" : "lclick");
    new_mac.SetParam("screenshot_rect", rp_rect);

    if (new_mac.HasParam("b_duration")) {
        new_mac.SetParam("b_duration", cfg.standard.rec.default_bubble_duration);
    }

    append_event(new_mac);

    handle_action(hdl, rp);

    var dont_wait = false;
    if (typeof(hdl.dont_wait) == 'boolean') {
        dont_wait = hdl.dont_wait;
    }

    new_tourstop(ForegroundBrowser(), type, dont_wait);
}

var std_create_select = function(hdl, type, rp, rp_rect, ctrl, rbutton) {
    action_info(hdl.name);

    var fieldname = standard_fieldname(rp);

    var txtDialog = CreateDialog();

    txtDialog.AddParam("fieldname", ParamType_TEXT_SINGLE, ui_trans('paramFieldname'));
    txtDialog.SetParam("fieldname", fieldname);

    txtDialog.AddParam("selection", ParamType_ENUM, ui_trans('paramValue'));
    var script = 
        "function select_list(e, w) {" + 
        "    var res = 'Array(';" +
        "    for (i = 0; i < e.options.length; i++) {" +
        "        if (i > 0) res = res + ', ';" +
        "        res = res + '\"' +  escape(e.options[i].text) + '\"';" +
        "    }" +
        "    res = res + ')'; " + 
        "    return res; "+
        "}";

    var res = rp.ExecScript(script, true);

    if (res == "<js-error>") return;

    var a = eval(res);
    for (i = 0; i < a.length; i++) {
        // add one, options counting starts at 1
        txtDialog.AddEnumValue("selection", i, unescape(a[i]));
    }
    var orig_sel = rp.ExecScript("selectedIndex");
    txtDialog.SetParam("selection", "" + orig_sel);

    if (txtDialog.Show()) {
        fieldname = txtDialog.GetParam("fieldname");
        var selected = txtDialog.GetParam("selection");
        var sel_text = rp.ExecScript("options(" + selected + ").text");

        var new_mac = CreateMacro("select_single");
        new_mac.SetParam("choose_nr", "" + selected);

        set_positions(new_mac, rp);

        var infotxt = get_infotxt("SELECT");
        insert_prop(infotxt, 'fieldname', fieldname);
        insert_prop(infotxt, 'choose_text', sel_text);

        new_mac.SetParam("fieldname", fieldname);
        new_mac.SetParam("choose_text", sel_text);
        new_mac.SetParam("explanation_d", infotxt.demo);
        new_mac.SetParam("explanation_p", infotxt.prac);
        new_mac.SetParam("element_type", type);

        rp.ExecScript("selectedIndex=" + selected);

        var sc_fn = GetUniqueFilename(Project.DocPath, "SELECT_", ".gif");
        var sc = ImageScreenshot(Project.DocPath + sc_fn, rp);
        new_mac.SetParam("screenshot_file", sc_fn);
        new_mac.SetParam("screenshot_rect", sc.rect);
        new_mac.SetParam("overlay_pos", sc.rect.topleft);

        if (new_mac.HasParam("b_duration")) {
            new_mac.SetParam("b_duration", cfg.standard.rec.default_bubble_duration);
        }

        append_event(new_mac);

        var on_change = rp.ExecScript("onchange");

        if (on_change != "null") {
            rp.ExecScript("$onchange()");

            new_tourstop(ForegroundBrowser(), type);
        }
    } else {
        ok = false;
    }
}
function get_info(rp) {

    var info_script = 
        "function dgo_get_info(e, w) {\n" + 
            "var l = 0;\n" + 
            "var t = 0;\n" + 
            "var c = e;\n" + 
            "var txt = ''\n" + 
            "if (e.tagName!='SELECT') txt = e.innerText;\n" + 
            "while (c && typeof(c.offsetLeft) != 'undefined') {\n" + 
                "l += c.offsetLeft;\n" + 
                "t += c.offsetTop;\n" + 
                "c = c.offsetParent;\n" + 
            "}\n" + 
            " return '{ l: ' +  l + ', t: ' + t + ', w: ' + e.offsetWidth + ', tag: \"' + e.tagName + '\", text: \"' + escape(txt) + '\"}'; } ";

    var res = rp.ExecScript(info_script, true);
    var r = eval("(" + res + ")");
    r.text = unescape(r.text);
    return r;
}

function get_fn(rp, x_item, y_item, w_item, rp2, version) {
    rp2.UpdateElementID();
    if (rp2.ID == "[Position not found]") {
        log('' + version + ' -> not found');
        return null;
    }

    var s_label = get_info(rp2);
    var x_label = s_label.l;
    var y_label = s_label.t;
    var fn = s_label.text;
    var tag = s_label.tag;

    if (fn == "[Position not found]" || fn == "<js-error>" || fn == "" || fn == "undefined" || fn == " ") {
        log('INVALID: ' + version);
        return null;
    }

    if (x_item < x_label) {
        log('' + version + ' X -> ' + x_item + '<' + x_label + ' ' + s_label.text);
        return null;
    }

    if (x_label > 10 + x_item + w_item) {
        log('' + version + ' X > X+W -> ' + x_label + '>' + (x_item + w_item) + ' ' + s_label.text);
        return null;
    }

    if (y_label > y_item + 7) {
        log('' + version + ' Y -> ' + y_label + '>' + y_item + ' ' + s_label.text + ' ' + s_label.text);
        return null;
    }

    if (tag == "SELECT" || tag == "TABLE") {
        log('' + version + 'is SELECT');
        return null;
    }

    if (fn.substr(0, 1) == '*') {
        fn = fn.substr(1);
    }

    if (fn.substr(fn.length - 1, 1) == ':') {
        fn = fn.substr(0, fn.length - 1);
    }

    while (fn.length > 0 && fn.substr(0, 1) == ' ') {
        fn = fn.substr(1);
    }

    while (fn.length > 0 && fn.substr(fn.length - 1, 1) == ' ') {
        fn = fn.substr(0, fn.length - 1);
    }
    log('OK: ' + version + '<' + fn + '>');
    return fn;
}

var std_create_input = function(hdl, type, rp, rp_rect, ctrl, rbutton) {
    action_info(hdl.name);
    if (type == "INPUTtext") {
        // rp.ExecScript("click()");
    } else if (type == "SPANlabelTable") {
        rp.ExecScript("click()");
        rp.ElementPathPop();
        rp.ID = "";
        rp.UpdateElementID();

        var mac = new_tourstop(rp.WindowID, type, true);
        mac.SetParam("doc_enable", false);
    }

    var txtDialog = CreateDialog();
    txtDialog.SetCaption(ui_trans('capEnterTextInput'));
    txtDialog.SetSize(300, 220);

    var fieldname = standard_fieldname(rp);

    txtDialog.AddParam("fieldname", ParamType_TEXT_SINGLE, ui_trans('paramFieldname'));

    if (typeof(fieldname) == 'string') {
        txtDialog.SetParam("fieldname", fieldname);
    }

    if (type == "TEXTAREA") {
        txtDialog.AddParam("newtext", ParamType_TEXT_SHORT, ui_trans('paramValue'));
    } else {
        txtDialog.AddParam("newtext", ParamType_TEXT_SINGLE, ui_trans('paramValue'));
        txtDialog.AddParam("valuehelp", ParamType_BOOL_0_1, ui_trans('paramValueHelp'));
        txtDialog.SetParam("valuehelp", false);
    }

    //md changed: Bestätigungsbutton und -tasten
    txtDialog.AddParam("d_tab", ParamType_BOOL_0_1, ui_trans('paramConfirmTab'));
    txtDialog.AddParam("d_enter", ParamType_BOOL_0_1, ui_trans('paramConfirmEnter'));
    txtDialog.AddParam("d_button", ParamType_BOOL_0_1, ui_trans('paramConfirmButton'));
    txtDialog.SetParam("d_tab", cfg.standard.rec.input_confirm_tab);
    txtDialog.SetParam("d_enter", cfg.standard.rec.input_confirm_enter);
    txtDialog.SetParam("d_button", cfg.standard.rec.input_confirm_button);
    // txtDialog.SetParam("fieldname", fieldname);

    ok = txtDialog.Show();
    if (ok) {
        if (type != "TEXTAREA" && txtDialog.GetParam("valuehelp") == "1") {

            type = "OpenValueHelp";
            var hdl = hmap[type];

            if (hdl != null) {
                hdl.handler(hdl, type, rp, rp_rect, ctrl, rbutton);
            } else {
                alert("no handler for " + type);
            }

            page_needs_fix = false;

        } else {
            fieldname = txtDialog.GetParam("fieldname");
            var newtext = txtDialog.GetParam("newtext");
            var d_tab = txtDialog.GetParam("d_tab");
            var d_enter = txtDialog.GetParam("d_enter");
            var d_button = txtDialog.GetParam("d_button");

            var new_mac = CreateMacro("input_text");
            new_mac.SetParam("text_d", newtext);

            set_positions(new_mac, rp);
            // Im Demo Modus ist bei Textfeldern der Hinweis auf den Beispielwert unsinnig.
            //var demo_msg = "In das Feld <b>" + fieldname + "</b> wird nun <b>" + newtext + "</b> eingegeben.";
            var infotxt = {};
            if (cfg.standard.rec.demo_text_with_value) {
                infotxt = get_infotxt("INPUTtextplusvalue");
            } else {
                infotxt = get_infotxt("INPUTtext");
            }

            var infotxt2 = input_infotxt(d_tab, d_enter, d_button);

            new_mac.SetParam("fieldname", fieldname);
            new_mac.SetParam("confirmation_tab", d_tab);
            new_mac.SetParam("confirmation_enter", d_enter);
            new_mac.SetParam("affirmation_button", d_button);

            new_mac.SetParam("explanation_d", infotxt.demo + infotxt2.demo);
            new_mac.SetParam("explanation_p", infotxt.prac + infotxt2.prac);
            new_mac.SetParam("element_type", type);

            rp.ExecScript("fireEvent('onfocus')");
            rp.ExecScript("click()");
            rp.ExecScript("value = unescape('" + escape(newtext) + "')");
            rp.ExecScript("fireEvent('onchange')");
            rp.ExecScript("fireEvent('onblur')");

            var sc_fn = GetUniqueFilename(Project.DocPath, "INPUT_", ".gif");
            var sc = ImageScreenshot(Project.DocPath + sc_fn, rp);
            new_mac.SetParam("screenshot_file", sc_fn);
            new_mac.SetParam("screenshot_rect", sc.rect);
            new_mac.SetParam("overlay_pos", sc.rect.topleft);

            if (d_button) {
                var rp2 = null;
                rp2 = RecordPosition(Position_ELEMENT_POS, ui_trans('msgConfirmButton'));
                if (rp2) {
                    new_mac.SetParam("position_af", rp2);

                    if (new_mac.HasParam("b_duration")) {
                        new_mac.SetParam("b_duration", cfg.standard.rec.default_bubble_duration);
                    }

                    append_event(new_mac);

                    rp2.ExecScript("click()");
                    new_tourstop(ForegroundBrowser(), type);
                } else {
                    ok = false;
                }
            } else if (d_enter) {
                    if (new_mac.HasParam("b_duration")) {
                        new_mac.SetParam("b_duration", cfg.standard.rec.default_bubble_duration);
                    }

                    append_event(new_mac);

                    deliver_enter_key(rp);

                    new_tourstop(ForegroundBrowser(), type);
            } else {
                if (new_mac.HasParam("b_duration")) {
                    new_mac.SetParam("b_duration", cfg.standard.rec.default_bubble_duration);
                }

                append_event(new_mac);
            }
        }
    }
}

var std_create_radio = function(hdl, type, rp, rp_rect, ctrl, rbutton) {
    var txtDialog = CreateDialog();

    var fieldname = RADIO_fieldname(rp, type);

    var value = (rp.ExecScript("checked") == "true");

    var new_value = !value;

    action_info(hdl.name);

    var new_mac = CreateMacro("input_radio");
    new_mac.SetParam("choose_bool", new_value ? "1" : "0");

    set_positions(new_mac, rp);

    var demo_msg, prac_msg;

    var subtype;
    if (type == "INPUTradio") {
        subtype = "INPUTradio";
    } else if (new_value) {
        subtype = "INPUTcheckboxOn";
    } else {
        subtype = "INPUTcheckboxOff";
    }

    var infotxt = get_infotxt(subtype);

    insert_prop(infotxt, 'fieldname', fieldname);

    new_mac.SetParam("fieldname", fieldname);
    new_mac.SetParam("explanation_d", infotxt.demo);
    new_mac.SetParam("explanation_p", infotxt.prac);
    new_mac.SetParam("element_type", type);
    rp.ExecScript("click()");

    var sc_fn = GetUniqueFilename(Project.DocPath, "RADIO_", ".gif");
    var sc = ImageScreenshot(Project.DocPath + sc_fn, rp);
    new_mac.SetParam("screenshot_file", sc_fn);
    new_mac.SetParam("screenshot_rect", sc.rect);
    new_mac.SetParam("overlay_pos", sc.rect.topleft);

    page_needs_fix = false;

    if (new_mac.HasParam("b_duration")) {
        new_mac.SetParam("b_duration", cfg.standard.rec.default_bubble_duration);
    }

    append_event(new_mac);

    var page_changed = false;
    var on_change = rp.ExecScript("onchange");
    if (on_change != "null") {
        rp.ExecScript("$onchange()");
        page_changed = true;
    }

    var on_click = rp.ExecScript("onclick");
    if (on_click != "null") {
        rp.ExecScript("$onclick()");
        page_changed = true;
    }

    if (page_changed) new_tourstop(ForegroundBrowser(), type);
}

var sap_create_status = function(hdl, type, rp, rp_rect, ctrl, rbutton) {
    action_info(hdl.name);

    if (type == "SPANWebguiStatusBarFont" || 
        type == "IMGTDWebguiMessageLine") {
        rp.ElementPathPop();
        rp.UpdateElementID();
    }

    var href = rp.ExecScript("firstChild.href");
    var dump = HtmlDumper.DumpResource(href, "images");
    var fieldname = "<img src=\"" + dump + "\">";
    fieldname = fieldname + "&nbsp;" + rp.ExecScript("innerText");

    var fn = GetUniqueFilename(Project.DocPath, "STATUS_", ".gif");

    var sc = ImageScreenshot(Project.DocPath + fn, rp);

    // crop off empty status line area
    var rect = rp.GetRect();
    var rpmsg = rp.Clone();
    rpmsg.ElementPathPush(1);
    rpmsg.ID = "";
    rpmsg.UpdateElementID();
    var rectmsg = rpmsg.GetRect();
    rect.right = rectmsg.right;

    rect.right -= rect.left;
    rect.bottom -= rect.top;
    rect.left = 0;
    rect.top = 0;

    sc.Crop(rect);
    sc.Save();

    var new_mac = CreateMacro("explanation");

    new_mac.SetParam("explanation_d", fieldname);
    new_mac.SetParam("explanation_p", fieldname);

    set_positions(new_mac, rp);

    new_mac.SetParam("screenshot_rect", rp.GetRect());

    append_event(new_mac);

    new_mac = null;
}

function get_sap_path(rp) {
    var sap_path_script = 
        "function tree_list(e, w)  { " + 
        "     var c = e; " + 
        "     while (c.nodeName != 'TR') { " + 
        "         c = c.parentNode; " + 
        "     } " + 
        "     var res = ''; " + 
        "     var path = ''; " + 
        "     var tname = ''; " + 
        "     var cur_w = 10000; " + 
        "     while (c.previousSibling != null) { " + 
        "         var cinfo = c.innerText + ':' + c.className; " +
        "         if (c.children.length > 0) { " + 
        "             var cc = c.firstChild; " +
        "             if (cc.children.length > 0) { " +
        "                 var w = cc.firstChild.width; " + 
        "                 if (w < cur_w) { " +
        "                     if (path == '') { " +
        "                         path = c.innerText; " +
        "                         tname = c.innerText; " +
        "                     } else { " +
        "                         path = c.innerText + '|' + path; " +
        "                     } " +
        "                     cur_w = w;" +
        "                 } " +
        "             } " +
        "         } " +
        "         res = cinfo + '\\n' + res; " + 
        "         c = c.previousSibling; " + 
        "     } " + 
        "     return path; " + 
        " }";

    var res = rp.ExecScript(sap_path_script, true);

    var sap_path = '';
    var match_arr;
    var tcode;

    tcode = res;
    while (match_arr = res.match('(.+)\\|(.+)')) {
        // alert(match_arr[0] + '\n' + match_arr[1] + '\n' + match_arr[2]);
        if (sap_path == '') {
            tcode = match_arr[2];
            sap_path = match_arr[2];
        } else {
            sap_path = match_arr[2] + '->' + sap_path;
        }
        res = match_arr[1];
    }
    sap_path = res + '->' + sap_path;

    if (match_arr = tcode.match('([^ ]*) -.*')) {
        tcode = match_arr[1];
    }

    return { sap_path: sap_path, tcode: tcode };
}

function append_tcode(rp) {
    var tcinfo = get_sap_path(rp);

    var mac = CreateMacro("transaction_info");
    mac.SetParam("tcode", tcinfo.tcode);
    mac.SetParam("sap_path", tcinfo.sap_path);

    append_event(mac);
    return tcinfo;
}

var sap_create_tcode = function(hdl, type, rp, rp_rect, ctrl, rbutton) {
    // ACT: click-dblclick/innerText + TCODE
    action_info("Choose Transaction");

    var fieldname = rp.ExecScript("innerText");

    var demo_msg, prac_msg, new_mac;

    if (ctrl) {
        var infotxt = get_infotxt("SAP_EA_Menu_Marked");
        insert_prop(infotxt, 'fieldname', fieldname);
        demo_msg = infotxt.demo;
        prac_msg = infotxt.prac;
        new_mac = CreateMacro("click");
    } else {
        var node_img = rp.ExecScript("previousSibling.firstChild.href");

        if ( node_img.match("s_wfwire.gif") || node_img.match("s_f_favo") ) {
            var tcinfo = append_tcode(rp);
            new_mac = CreateMacro("click_SAP");
            new_mac.SetParam("transaction_code", tcinfo.tcode);

            var infotxt = get_infotxt("SAP_EA_Menu");
            insert_prop(infotxt, 'fieldname', tcinfo.sap_path);
            insert_prop(infotxt, 'tcode', tcinfo.tcode);
            demo_msg = infotxt.demo;
            prac_msg = infotxt.prac;
        } else {
            var infotxt = get_infotxt("SAP_EA_Menu_GeneralAction");
            insert_prop(infotxt, 'fieldname', fieldname);
            demo_msg = infotxt.demo;
            prac_msg = infotxt.prac;
            new_mac = CreateMacro("click");
        }
    }

    set_positions(new_mac, rp);

    if (new_mac.HasParam("fieldname")) {
        new_mac.SetParam("fieldname", fieldname);
    }
    new_mac.SetParam("explanation_d", demo_msg);
    new_mac.SetParam("explanation_p", prac_msg);
    new_mac.SetParam("element_type", type);
    new_mac.SetParam("screenshot_rect", rp_rect);

    append_event(new_mac);

    if (ctrl) {
        rp.ExecScript("click()");
    } else {
        rp.ExecScript("click()");
        rp.ExecScript("fireEvent('ondblclick')");
    }

    new_tourstop(rp.WindowID, type);
}


function prev_ts_window_id() {
    var win_id = -1;
    var ts_id = CurrentTourstop();
    if (ts_id > 0) {
        var prev_ts = GetTourstop(ts_id - 1);
        var mac = prev_ts.NextMacro();
        while (mac) {
            if (mac.Template() == "new_page") {
                win_id = mac.GetParam('dump_page').WindowID;
            } else if (mac.Template() == "new_window") {
                win_id = mac.GetParam('dump_win_relpos').WindowID;
            }
            mac = prev_ts.NextMacro(mac.TourPosition());
        }
    }
    return win_id;
}

function new_tourstop(window_id, type, dont_wait) {
    if (dont_wait == null || dont_wait == false) {
        var res = MsgBox(ui_trans('msgRecordPageLoaded'), ui_trans('msgRecordPageCopy'), MB_OKCANCEL | MB_TOPMOST, window_id);
        if (res != IDOK) {
            ok = false;
            return;
        }
    }

    HtmlDumper.Dump(window_id);
    table_fixed = false;

    var win_name = window_name(window_id);
    AddTourstop(win_name, Tourstop_SHOW_JUMP);

    var res;

    if (window_id == 0 || cfg.standard.webrec.use_only_window0) {
        var macNewPage = CreateMacro("new_page");
        macNewPage.SetParam("dump_page", HtmlDumper.filename);
        macNewPage.SetParam("new_step", win_name);

        var sc_fn = GetUniqueFilename(Project.DocPath, "PAGE_", ".gif");
        var sc = ImageScreenshot(Project.DocPath + sc_fn, window_id, 4);
        macNewPage.SetParam("screenshot_file", sc_fn);
        macNewPage.SetParam("screenshot_rect", sc.rect);
        macNewPage.SetParam("element_type", type);
        macNewPage.SetParam("record_window_id", window_id);

        res = macNewPage;

        append_event(macNewPage);
    } else {
        var macNewWin = CreateMacro("new_window");
        macNewWin.SetParam("dump_page", HtmlDumper.filename);
        var rpw = CreatePosition();
        rpw.WindowID = window_id;
        macNewWin.SetParam("dump_win_relpos", rpw);
        macNewWin.SetParam("new_step", win_name);

        var sc_fn = GetUniqueFilename(Project.DocPath, "PAGE_", ".gif");
        var sc = ImageScreenshot(Project.DocPath + sc_fn, window_id, 4);
        macNewWin.SetParam("screenshot_file", sc_fn);
        macNewWin.SetParam("screenshot_rect", sc.rect);
        macNewWin.SetParam("element_type", type);

        if (prev_ts_window_id() != window_id) {
            var rect = window_pos_size(window_id);

            macNewWin.SetParam('dump_win_left', rect.left);
            macNewWin.SetParam('dump_win_top', rect.top);
            macNewWin.SetParam('dump_win_width', rect.width);
            macNewWin.SetParam('dump_win_height', rect.height);
        }

        append_event(macNewWin);
    }

    last_window_id = window_id;

    return res;
}

function ep_cal_id_to_datestr(cal_id) {
    var ms;
    if (ms = cal_id.match("WEFReturnDate\\(([0-9]+),([0-9]+),([0-9]+),.*\\)")) {
        var datestr = ms[3] + ". " + ep_mstr_to_month(ms[2]) + " " + ms[1];
        return datestr;
    } else {
        log("NOMATCH EP Cal");
    }
    return "";
}

function cal_id_to_datestr(cal_id) {
    var ms;
    if (ms = cal_id.match(".*x(....)(..)(..)$")) {
        var datestr = ms[3] + ". " + mstr_to_month(ms[2]) + " " + ms[1];
        return datestr;
    } else {
        log("NOMATCH");
    }
    return "";
}

function ep_mstr_to_month(mstr) {
    if (mstr == "1") {
        return trans('paramJanuary');
    } else if (mstr == "2") {
        return trans('paramFebruary');
    } else if (mstr == "3") {
        return trans('paramMarch');
    } else if (mstr == "4") {
        return trans('paramApril');
    } else if (mstr == "5") {
        return trans('paramMai');
    } else if (mstr == "6") {
        return trans('paramJune');
    } else if (mstr == "7") {
        return trans('paramJuly');
    } else if (mstr == "8") {
        return trans('paramAugust');
    } else if (mstr == "9") {
        return trans('paramSeptember');
    } else if (mstr == "10") {
        return trans('paramOctober');
    } else if (mstr == "11") {
        return trans('paramNovember');
    } else if (mstr == "12") {
        return trans('paramDecember');
    } else {
        return trans('paramMonth');
    }
}

function mstr_to_month(mstr) {
    if (mstr == "01") {
        return trans('paramJanuary');
    } else if (mstr == "02") {
        return trans('paramFebruary');
    } else if (mstr == "03") {
        return trans('paramMarch');
    } else if (mstr == "04") {
        return trans('paramApril');
    } else if (mstr == "05") {
        return trans('paramMai');
    } else if (mstr == "06") {
        return trans('paramJune');
    } else if (mstr == "07") {
        return trans('paramJuly');
    } else if (mstr == "08") {
        return trans('paramAugust');
    } else if (mstr == "09") {
        return trans('paramSeptember');
    } else if (mstr == "10") {
        return trans('paramOctober');
    } else if (mstr == "11") {
        return trans('paramNovember');
    } else if (mstr == "12") {
        return trans('paramDecember');
    } else {
        return trans('paramMonth');
    }
}


function ep_cal_fieldname(rp) {
    var id = rp.ExecScript("onclick");
    return ep_cal_id_to_datestr(id);
}

function cal_fieldname(rp) {
    var id = rp.ExecScript("id");
    return cal_id_to_datestr(id);
}

function img_url_to_href(img_url) {
    var ms;
    log(img_url);
    if (ms = img_url.match("url\\(\"(.*)\"\\)")) {
        log(ms[1]);
        return ms[1];
    } else {
        log(ms);
    }
}


function std_handle_body(hdl, type, rp, rp_rect, ctrl, rbutton) {
    var compat = rp.ExecScript("ownerDocument && ownerDocument.compatMode && ownerDocument.compatMode == 'CSS1Compat'") == "true";
    var cw = 0;
    var ow = 0;
    var ch = 0;
    var oh = 0;
    var sx = 0;
    var sy = 0;
    var sw = 0;
    var sh = 0;
    
    if (compat) {
        cw = rp.ExecScript("ownerDocument.documentElement.clientWidth") - 0;
        ow = rp.ExecScript("ownerDocument.documentElement.offsetWidth") - 0;
        ch = rp.ExecScript("ownerDocument.documentElement.clientHeight") - 0;
        oh = rp.ExecScript("ownerDocument.documentElement.offsetHeight") - 0;
        sx = rp.ExecScript("ownerDocument.documentElement.scrollLeft") - 0;
        sy = rp.ExecScript("ownerDocument.documentElement.scrollTop") - 0;
        sw = rp.ExecScript("ownerDocument.documentElement.scrollWidth") - 0;
        sh = rp.ExecScript("ownerDocument.documentElement.scrollHeight") - 0;
    } else {
        cw = rp.ExecScript("clientWidth") - 0;
        ow = rp.ExecScript("offsetWidth") - 0;
        ch = rp.ExecScript("clientHeight") - 0;
        oh = rp.ExecScript("offsetHeight") - 0;
        sx = rp.ExecScript("scrollLeft") - 0;
        sy = rp.ExecScript("scrollTop") - 0;
        sw = rp.ExecScript("scrollWidth") - 0;
        sh = rp.ExecScript("scrollHeight") - 0;
    }

    log("SX: " + sx + " SY: " + sy + "\nOW: " + ow + " OH: " + oh);

    var h = sh > oh ? sh : oh;
    var w = sw > ow ? sw : ow;

    var doc_x = (rp.X * w) /100;
    var doc_y = (rp.Y * h) /100;

    var frame_x = doc_x - sx;
    var frame_y = doc_y - sy;

    log("DOCX: " + doc_x + "  DOCY: " + doc_y + " FRAME_X: " + frame_x + " FRAME_Y: " + frame_y);

    var vscroll = false;
    if (ow - cw > 10 && (frame_x > cw)) vscroll = true;

    var hscroll = false;
    // alert("" + ch + " vs. " + ((sh * rp.Y)/100));
    if (oh - ch > 10 && (frame_y > ch)) hscroll = true;


    // alert((hscroll ? "HSCROLL " : "") + (vscroll ? "VSCROLL" : ""));

    if (vscroll) {
        log("VSCROLL");
        var dist = 0;
        if (frame_y < 15) {
            dist = -ch / 7;
        } else if (frame_y > ch - 15) {
            dist = ch / 7;
        } else if (frame_y < (15 + ((ch - 2 * 15) * sy) / sh)) {
            dist = -(ch * 88)/100;
        } else if (frame_y > (15 + ((ch - 2 * 15) * (sy + ch)) / sh)) {
            dist = (ch * 88)/100;
        }

        var nsy = Math.floor(sy + dist);

        if (compat) {
            rp.ExecScript("ownerDocument.documentElement.scrollTop = " + nsy);
        } else {
            rp.ExecScript("scrollTop = " + nsy);
        }

        if (cfg.standard.webrec.record_scroll) {
            Sleep(500);
            var mac = CreateMacro("scroll_vert");
            mac.SetParam("position_h", rp);
            mac.SetParam("scrolltop", nsy);

            var infotxt = get_key_infotxt("click_scroll_vertical");
            mac.SetParam("explanation_d", infotxt.demo);

            var rpb = rp.Clone();
            rpb.OffsetX = -30;
            mac.SetParam("position_b", rpb);
            mac.SetParam("orientation", "W");

            var sc_fn = GetUniqueFilename(Project.DocPath, "SCROLL_", ".gif");
            var sc = ImageScreenshot(Project.DocPath + sc_fn, rp.WindowID, 4);
            mac.SetParam("screenshot_file", sc_fn);
            mac.SetParam("screenshot_rect", sc.rect);

            append_event(mac);
        }

    } else if (hscroll) {
        log("HSCROLL");
        var dist = 0;
        if (frame_x < 15) {
            dist = -cw / 7;
        } else if (frame_x > cw - 15) {
            dist = cw / 7;
        } else if (frame_x < (15 + ((cw - 2 * 15) * sx) / sw)) {
            dist = -(cw * 88)/100;
        } else if (frame_x > (15 + ((cw - 2 * 15) * (sx + cw)) / sw)) {
            dist = (cw * 88)/100;
        }

        var nsx = Math.floor(sx + dist);
        if (compat) {
            rp.ExecScript("ownerDocument.documentElement.scrollLeft = " + nsx);
        } else {
            rp.ExecScript("scrollLeft = " + nsx);
        }

        if (cfg.standard.webrec.record_scroll) {
            Sleep(500);
            var mac = CreateMacro("scroll_hor");
            mac.SetParam("position_h", rp);
            mac.SetParam("scrollleft", nsx);

            var infotxt = get_key_infotxt("click_scroll_horizontal");
            mac.SetParam("explanation_d", infotxt.demo);

            var rpb = rp.Clone();
            rpb.OffsetY = -30;
            mac.SetParam("position_b", rpb);
            mac.SetParam("orientation", "N");

            var sc_fn = GetUniqueFilename(Project.DocPath, "SCROLL_", ".gif");
            var sc = ImageScreenshot(Project.DocPath + sc_fn, rp.WindowID, 4);
            mac.SetParam("screenshot_file", sc_fn);
            mac.SetParam("screenshot_rect", sc.rect);

            append_event(mac);
        }
    }
}


function std_handle_div(hdl, type, rp, rp_rect, ctrl, rbutton) {

    var cw = rp.ExecScript("clientWidth") - 0;
    var ow = rp.ExecScript("offsetWidth") - 0;
    var ch = rp.ExecScript("clientHeight") - 0;
    var oh = rp.ExecScript("offsetHeight") - 0;
    var sx = rp.ExecScript("scrollLeft") - 0;
    var sy = rp.ExecScript("scrollTop") - 0;
    var sw = rp.ExecScript("scrollWidth") - 0;
    var sh = rp.ExecScript("scrollHeight") - 0;

    log("SX: " + sx + " SY: " + sy + "\nOW: " + ow + " OH: " + oh);

    var doc_x = (rp.X * ow) /100;
    var doc_y = (rp.Y * oh) /100;

    var frame_x = doc_x;
    var frame_y = doc_y;

    log("DOCX: " + doc_x + "  DOCY: " + doc_y + " FRAME_X: " + frame_x + " FRAME_Y: " + frame_y);

    var vscroll = false;
    if (cw > 0 && ow - cw > 10 && (frame_x > cw)) vscroll = true;
    log("OW: " + ow + " CW: " + cw);

    var hscroll = false;
    // alert("" + ch + " vs. " + ((sh * rp.Y)/100));
    if (cw > 0 && oh - ch > 10 && (frame_y > ch)) hscroll = true;
    log("OH: " + oh + " CH: " + ch);


    // alert((hscroll ? "HSCROLL " : "") + (vscroll ? "VSCROLL" : ""));

    if (vscroll) {
        log("VSCROLL");
        var dist = 0;
        if (frame_y < 15) {
            dist = -ch / 7;
            log("step up")
        } else if (frame_y > ch - 15) {
            dist = ch / 7;
            log("step down")
        } else if (frame_y < (15 + ((ch - 2 * 15) * sy) / sh)) {
            dist = -(ch * 88)/100;
            log("frame up")
        } else if (frame_y > (15 + ((ch - 2 * 15) * (sy + ch)) / sh)) {
            dist = (ch * 88)/100;
            log("frame down")
        }

        var nsy = Math.floor(sy + dist);

        rp.ExecScript("scrollTop = " + nsy);

        if (cfg.standard.webrec.record_scroll) {
            Sleep(500);
            var mac = CreateMacro("scroll_vert");
            mac.SetParam("position_h", rp);
            mac.SetParam("scrolltop", nsy);

            var infotxt = get_key_infotxt("click_scroll_vertical");
            mac.SetParam("explanation_d", infotxt.demo);

            var rpb = rp.Clone();
            rpb.OffsetX = -30;
            mac.SetParam("position_b", rpb);
            mac.SetParam("orientation", "W");

            var sc_fn = GetUniqueFilename(Project.DocPath, "SCROLL_", ".gif");
            var sc = ImageScreenshot(Project.DocPath + sc_fn, rp.WindowID, 4);
            mac.SetParam("screenshot_file", sc_fn);
            mac.SetParam("screenshot_rect", sc.rect);

            append_event(mac);
        }

    } else if (hscroll) {
        log("HSCROLL");
        var dist = 0;
        if (frame_x < 15) {
            dist = -cw / 7;
        } else if (frame_x > cw - 15) {
            dist = cw / 7;
        } else if (frame_x < (15 + ((cw - 2 * 15) * sx) / sw)) {
            dist = -(cw * 88)/100;
        } else if (frame_x > (15 + ((cw - 2 * 15) * (sx + cw)) / sw)) {
            dist = (cw * 88)/100;
        }

        var nsx = Math.floor(sx + dist);
        rp.ExecScript("scrollLeft = " + nsx);

        if (cfg.standard.webrec.record_scroll) {
            Sleep(500);
            var mac = CreateMacro("scroll_hor");
            mac.SetParam("position_h", rp);
            mac.SetParam("scrollleft", nsx);

            var infotxt = get_key_infotxt("click_scroll_horizontal");
            mac.SetParam("explanation_d", infotxt.demo);

            var rpb = rp.Clone();
            rpb.OffsetY = -30;
            mac.SetParam("position_b", rpb);
            mac.SetParam("orientation", "N");

            var sc_fn = GetUniqueFilename(Project.DocPath, "SCROLL_", ".gif");
            var sc = ImageScreenshot(Project.DocPath + sc_fn, rp.WindowID, 4);
            mac.SetParam("screenshot_file", sc_fn);
            mac.SetParam("screenshot_rect", sc.rect);

            append_event(mac);
        }
    } else if (cfg.standard.webrec.div_is_link) {
        std_create_click(hdl, type, rp, rp_rect, ctrl, rbutton);
    }
}

