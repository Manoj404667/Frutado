#use(config.js)
#use(custom/config.js)
#use(ui_lang.js)

#use(relpos_helpers.js)

#use(hmap.js)

init_dumper();

var ok = true;
var last_type = "";

var keep_crop = true;


function rerecord() {
    var dlg = CreateDialog();
    dlg.AddParam("rec_lang", ParamType_ENUM, ui_trans('paramReRecordLanguage'));

    var rl = Project.Language;

    dlg.SetParam("rec_lang", 1);
    for (var i = 0; i < 1000; i++) {
        if (GetLanguageCode(i) == null) break;
        dlg.AddEnumValue("rec_lang", i, GetLanguageName(i));
        if (GetLanguageCode(i) == rl) {
            dlg.SetParam("rec_lang", i);
        }
    }

    dlg.AddParam("from_current", ParamType_BOOL_0_1, ui_trans('paramStartAtCurrentMacro'));
    dlg.AddParam("keep_crop", ParamType_BOOL_0_1, ui_trans('paramKeepCrop'));
    dlg.SetParam("keep_crop", keep_crop);

    var from_current = false;
    var start_pos = 0;
    var last_window_id = 0;

    if (dlg.Show()) {
        var rl = dlg.GetParam("rec_lang");

        Project.Language = GetLanguageCode(rl);
        load_project_language();

        if (dlg.GetParam("from_current")) {
            alert(ui_trans('msgReRecordFromHere'));
            start_pos = CurrentEvent().TourPosition();
        }

        keep_crop = dlg.GetParam("keep_crop");
    } else {
        return;
    }


    for (i = 0; i < NumTourstops(); i++) {

        var ts = GetTourstop(i);
        log(ts.TourPosition() + ": " + ts.Caption + " (" + ts.Duration() + ")");

        var mac = ts.NextMacro();

        while (ok && mac != null) {
            if (mac.TourPosition() >= start_pos) {
                log("TRANS:" + mac.TourPosition() + ": " + mac.Template() + " (" + mac.Duration() + ")");
                // mac.SetCurrent();
                // SelectEvent(mac.TourPosition(), true);
                rerecord_mac(mac, ts);
            } else {
                log("SKIP:" + mac.TourPosition() + ": " + mac.Template() + " (" + mac.Duration() + ")");
            }
            mac = ts.NextMacro(mac.TourPosition());
        };
    }
}

function update_screenshot(mac, rp, prefix) {
    var sc_fn = mac.GetParam("screenshot_file");
    if (sc_fn == "") sc_fn = GetUniqueFilename(Project.DocPath, prefix, ".gif");

    Sleep(1000);
    var sc;
    if (rp == null) {
        sc = ImageScreenshot(Project.DocPath + sc_fn, 0);
    } else {
        sc = ImageScreenshot(Project.DocPath + sc_fn, rp);
    }
    mac.SetParam("screenshot_file", sc_fn);
    if (!keep_crop) {
        mac.SetParam("screenshot_rect", sc.rect);
    }
}


function record_position_of_type(required_type, type) {
    if (type == "<js-error>") type = "not found/unknown";
    alert(ui_trans('errReRecordTypeMismatch') + required_type + ui_trans('errReRecordNewType') + type);

    while (true) {
        var rp_new = RecordPosition(Position_ELEMENT_POS, "New Position (ESC to cancel)");

        if (rp_new != null) {
            type = element_xtype(rp_new);
            if (type == "<js-error>") type = "not found/unknown";

            if (type == required_type) {
                return rp_new;
            }

            var res = MsgBox(ui_trans('errReRecordTypeMismatch') + required_type +
                             ui_trans('errReRecordNewType') + type +
                             ui_trans('msgRecordAcceptAnyway'),
                             "Type Mismatch",
                             MB_YESNO | MB_TOPMOST);

            if (res == IDYES) {
                return rp_new;
            }
        } else {
            return null;
        }
    }
}

function rerecord_mac(mac, ts) {
    mac.SetCurrent();

    if (mac.Template() == "click" ||
        mac.Template() == "click_SAP" ||
        mac.Template() == "quick_click") 
    {
        var rp = get_position_h(mac, last_window_id);

        var type = element_xtype(rp);

        var old_type = mac.GetParam("element_type");
        var rbutton = false;

        if (old_type == "OpenValueHelp") {
            old_type = "INPUTtext";
        } else if (old_type.substring(0, 2) == "R:") {
            old_type = old_type.substring(2);
            rbutton = true;
        }

        var pos_changed = false;

        if (type != old_type) {
            var new_rp = record_position_of_type(old_type, type);
            if (new_rp) {
                type = element_xtype(new_rp);
                last_type = type;
                rp = new_rp;
                pos_changed = true;
                //mac.SetParam("position_h", rp);
            } else {
                ok = false;
                return;
            }

        } else {
            last_type = "";
        }

        if (rbutton) {
            type = "R:" + type;
            last_type = type;
        }

        if (mac.GetParam("element_type") == "OpenValueHelp") {
            type = "OpenValueHelp";
            last_type = "OpenValueHelp";
        }

        var hdl = hmap[type];
        log("Use handler: " + hdl.name);

        if (hdl == null) return;

        var infotxt;
        if (type == "SPANCTLink") {
            infotxt = get_infotxt("SAP_EA_Menu");
        } else {
            infotxt = get_infotxt(type);
        }

        var fieldname = handle_prop(hdl, rp, infotxt);
        if (typeof(fieldname) == 'string' && fieldname != "") {
            mac.SetParam("fieldname", fieldname);
        }

        handle_field_icon(hdl, rp, mac);

        if (type == "SPANCTLink" && mac.HasParam("transaction_code")) {
            // insert_prop(infotxt, 'tcode', mac.GetParam("transaction_code"));
        }

        log(infotxt.demo);
        mac.SetParam("element_type", type);
        if (mac.HasParam("explanation_d")) {
            if (!mac.HasParam("explanation_d_modified") || !mac.GetParam("explanation_d_modified")) {
                mac.SetParam("explanation_d", infotxt.demo);
            }
        }
        if (mac.HasParam("explanation_p")) {
            if (!mac.HasParam("explanation_p_modified") || !mac.GetParam("explanation_p_modified")) {
                mac.SetParam("explanation_p", infotxt.prac);
            }
        }
        mac.SetParam("screenshot_rect", rp.GetRect());

        if (pos_changed) set_positions(mac, rp);

        // update transaction-info here since we need the position
        if (mac.Template() == "click_SAP") {
            var prev = ts.PrevMacro(mac.TourPosition());

            if (prev.Template() == "transaction_info") {
                var path_info = get_sap_path(rp);
                prev.SetParam("tcode", path_info.tcode);
                prev.SetParam("sap_path", path_info.sap_path);
            }
        }

        if (hdl.action) {
            handle_action(hdl, rp);
        } else {
            var on_mousedown = rp.ExecScript("onmousedown");
            if (on_mousedown != "null") {
                rp.ExecNavigationScript("$fireEvent('onmousedown')");
            }

            rp.ExecNavigationScript("$click()");
        }


    } else if (mac.Template() == "new_page" || 
               mac.Template() == "new_window") 
    {
        log("=== " + mac.Template() + " ===");


        Sleep(500);
        if (last_type != "OpenValueHelp") {
            var res = MsgBox(ui_trans('msgRecordPageLoaded'), ui_trans('msgRecordPageCopy'), MB_OKCANCEL | MB_TOPMOST);
            if (res != IDOK) {
                ok = false;
                return;
            }
        }

        if (mac.Template() == "new_window") {
            last_window_id = mac.GetParam("dump_win_relpos").WindowID;
        } else {
            last_window_id = Math.max(mac.GetParam("record_window_id"), 0);
            log("new window id = " + last_window_id);
        }

        ts.Caption = window_name(last_window_id);

        // Sleep(500);
        HtmlDumper.Dump(last_window_id);

        mac.SetParam("dump_page", HtmlDumper.filename);

        if (mac.Template() == "new_window") {
            update_screenshot(mac, mac.GetParam("dump_win_relpos"), "PAGE_");
        } else {
            var win_pos = CreatePosition();
            win_pos.WindowID = last_window_id;
            update_screenshot(mac, win_pos, "PAGE_");
        }

        if (last_type != "") {
            mac.SetParam("element_type", last_type);
            last_type = "";
        }

    } else if (mac.Template() == "input_text") {
        log("=== " + mac.Template() + " ===");
        var rp = get_position_h(mac, last_window_id);

        var type = element_xtype(rp.Clone());

        var old_type = mac.GetParam("element_type");

        if (old_type == "SPANlabelTable" && type == "A") { 
            var prev = ts.PrevMacro(mac.TourPosition());

            var span_rp = rp.Clone();
            span_rp.ElementPathPush(0);
            span_rp.ID = "";
            span_rp.UpdateElementID();
            span_rp.Show();
            span_rp.ExecScript("click()");
            type = "SPANlabelTable";

            if (prev.Template() == "new_page") {
                HtmlDumper.Dump(rp.WindowID);
                prev.SetParam("dump_page", HtmlDumper.filename);
            }
        }


        var pos_changed = false;
        if (type != old_type) {
            var new_rp = record_position_of_type(old_type, type);
            if (new_rp) {
                rp = new_rp;
                type = element_xtype(rp);
                last_type = type;
                pos_changed = true;
                //mac.SetParam("position_h", rp);
            } else {
                ok = false;
                return;
            }
        }

        var fieldname = standard_fieldname(rp);
        if (typeof(fieldname) == 'string' && fieldname != "") {
            mac.SetParam("fieldname", fieldname);
        }


        var newtext = mac.GetParam("text_d");

        var infotxt = {};
        if (cfg.standard.rec.demo_text_with_value) {
            infotxt = get_infotxt("INPUTtextplusvalue");
        } else {
            infotxt = get_infotxt("INPUTtext");
        }

        var d_tab    = mac.GetParam("confirmation_tab");
        var d_enter  = mac.GetParam("confirmation_enter");
        var d_button = mac.GetParam("affirmation_button");

        var infotxt2 = input_infotxt(d_tab, d_enter, d_button);

        if (mac.HasParam("explanation_d")) {
            if (!mac.HasParam("explanation_d_modified") || !mac.GetParam("explanation_d_modified")) {
                mac.SetParam("explanation_d", infotxt.demo + infotxt2.demo);
            }
        }
        if (mac.HasParam("explanation_p")) {
            if (!mac.HasParam("explanation_p_modified") || !mac.GetParam("explanation_p_modified")) {
                mac.SetParam("explanation_p", infotxt.prac + infotxt2.prac);
            }
        }

        rp.ExecScript("fireEvent('onfocus')");
        rp.ExecScript("click()");
        rp.ExecScript("value = unescape('" + escape(mac.GetParam("text_d")) + "')");
        update_screenshot(mac, rp, "INPUT_");

        if (d_button) {
            var brp = mac.GetParam("position_af");
            brp.ExecNavigationScript("click();");
        } else if (d_enter) {
            deliver_enter_key(rp);
        }

        if (pos_changed) set_positions(mac, rp);

    } else if (mac.Template() == "input_radio") {
        log("=== " + mac.Template() + " ===");
        var rp = get_position_h(mac, last_window_id);

        var type = element_xtype(rp);
        var old_type = mac.GetParam("element_type");

        var pos_changed = false;
        if (type != old_type) {
            var new_rp = record_position_of_type(old_type, type);
            if (new_rp) {
                rp = new_rp;
                type = element_xtype(rp);
                last_type = type;
                pos_changed = true;
                //mac.SetParam("position_h", rp);
            } else {
                ok = false;
                return;
            }
        }

        var fieldname  = RADIO_fieldname(rp, type);
        if (typeof(fieldname) == 'string' && fieldname != "") {
            mac.SetParam("fieldname", fieldname);
        }

        var value = mac.GetParam("choose_bool");

        var infotxt;
        var subtype = rp.ExecScript("type");
        if (subtype == "radio") {
            infotxt = get_infotxt("INPUTradio");
        } else if (value == "1") {
            infotxt = get_infotxt("INPUTcheckboxOn");
        } else {
            infotxt = get_infotxt("INPUTcheckboxOff");
        }

        insert_prop(infotxt, 'fieldname', fieldname);

        if (mac.HasParam("explanation_d")) {
            if (!mac.HasParam("explanation_d_modified") || !mac.GetParam("explanation_d_modified")) {
                mac.SetParam("explanation_d", infotxt.demo);
            }
        }
        if (mac.HasParam("explanation_p")) {
            if (!mac.HasParam("explanation_p_modified") || !mac.GetParam("explanation_p_modified")) {
                mac.SetParam("explanation_p", infotxt.prac);
            }
        }

        if (pos_changed) set_positions(mac, rp);

        rp.ExecScript("checked = " + (value == 1 ? "true" : "false"));

        update_screenshot(mac, rp, "RADIO_");

    } else if (mac.Template() == "select_single") {
        log("=== " + mac.Template() + " ===");
        var rp = get_position_h(mac, last_window_id);

        var type = element_xtype(rp);
        var old_type = mac.GetParam("element_type");

        var pos_changed = false;
        if (type != old_type) {
            var new_rp = record_position_of_type(old_type, type);
            if (new_rp) {
                rp = new_rp;
                type = element_xtype(rp);
                last_type = type;
                pos_changed = true;
                //mac.SetParam("position_h", rp);
            } else {
                ok = false;
                return;
            }
        }

        var fieldname = standard_fieldname(rp);
        if (typeof(fieldname) == 'string' && fieldname != "") {
            mac.SetParam("fieldname", fieldname);
        }

        var sel_idx = mac.GetParam("choose_nr");
        var sel_txt = mac.GetParam("choose_text");

        var script = 
            "function select_list(e, w) {" + 
            "    var res = 'Array(';" +
            "    for (i = 0; i < e.options.length; i++) {" +
            "        if (i > 0) res = res + ', ';" +
            "        res = res + 'unescape(\"' +  escape(e.options[i].text) + '\")';" +
            "    }" +
            "    res = res + ')'; " + 
            "    return res; "+
            "}";

        var res = rp.ExecScript(script, true);

        var found = false;
        if (res != "<js-error>") {
            var options = eval(res);

            if (sel_txt != "") {
                for (var i = 0; i < options.length; i++) {
                    if (options[i] == sel_txt) {
                        found = true;
                        sel_idx = i;
                    }
                }
            }
        } else {
            log("JS-Error getting select-options");
        }

        if (!found) {
            var txtDialog = CreateDialog();
            txtDialog.AddParam("fieldname", ParamType_TEXT_SINGLE, ui_trans('paramFieldname'));
            txtDialog.AddParam("original", ParamType_TEXT_SINGLE, ui_trans('originalValue'));
            txtDialog.AddParam("selection", ParamType_ENUM, ui_trans('paramValue'));
            for (i = 0; i < options.length; i++) {
                // add one, options counting starts at 1
                txtDialog.AddEnumValue("selection", i, unescape(options[i]));
            }
            txtDialog.SetParam("fieldname", fieldname);
            txtDialog.SetParam("original", sel_txt);
            txtDialog.SetParam("selection", sel_idx);
            if (txtDialog.Show()) {
                sel_idx = txtDialog.GetParam("selection");
            } else {
                ok = false;
                return;
            }
        }

        rp.ExecNavigationScript("selectedIndex=" + sel_idx);

        var valuename = rp.ExecScript("options[" + sel_idx + "].text");
        mac.SetParam("choose_text", valuename);

        var infotxt = get_infotxt("SELECT");

        if (mac.HasParam("explanation_d")) {
            if (!mac.HasParam("explanation_d_modified") || !mac.GetParam("explanation_d_modified")) {
                mac.SetParam("explanation_d", infotxt.demo);
            }
        }
        if (mac.HasParam("explanation_p")) {
            if (!mac.HasParam("explanation_p_modified") || !mac.GetParam("explanation_p_modified")) {
                mac.SetParam("explanation_p", infotxt.prac);
            }
        }


        if (pos_changed) set_positions(mac, rp);

        mac.SetParam("choose_nr", sel_idx);

        update_screenshot(mac, rp, "SELECT_");

        var on_change = rp.ExecScript("onchange");

        if (on_change != "null") {
            rp.ExecNavigationScript("onchange()");
        }

    } else if (mac.Template() == "scroll_vert" ||
               mac.Template() == "scroll_hor" ) {
        log("=== " + mac.Template() + " ===");
        var rp = get_position_h(mac, last_window_id);

        var infotxt = mac.Template() == "scroll_vert" ? 
                        get_key_infotxt("click_scroll_vertical") :
                        get_key_infotxt("click_scroll_horizontal");

        if (mac.HasParam("explanation_d")) {
            if (!mac.HasParam("explanation_d_modified") || !mac.GetParam("explanation_d_modified")) {
                mac.SetParam("explanation_d", infotxt.demo);
            }
        }

        if (pos_changed) set_positions(mac, rp);
        var command = "";
        var imagename = "";
        if (mac.Template() == "scroll_vert") {
            command = "scrollTop = " + mac.GetParam("scrolltop");
            imagename = "VSCROLL_";
        } else {
            command = "scrollLeft = " + mac.GetParam("scrollleft");
            imagename = "HSCROLL_";
        }

        rp.ExecScript(command);

        update_screenshot(mac, rp, imagename);
    }
}

function init_dumper() {
    HtmlDumper.link_subst = "javascript:void(0);";
    HtmlDumper.remove_js = true;
    HtmlDumper.remove_onload = true;
    HtmlDumper.remove_object = true;
    HtmlDumper.force = true;
}

rerecord();
