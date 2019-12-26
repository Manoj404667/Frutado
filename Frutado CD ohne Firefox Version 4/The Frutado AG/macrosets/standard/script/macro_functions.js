#use(config.js)
#use(custom/config.js)
#use(word_lang.js)

#use(relpos_helpers.js)

#use(ui_lang.js)
#use(lang.js)

#use(hmap.js)

#use(ctx_dummy.js)
#use(../../../projects/standard_defaults.js)
#use(../StringTemplates.js)
#use(../Util.js)
#use(../TourParams.js)
#use(../MacroDepot.js)

if (!ExpertFeature("OldMacroImpl")) {
    ctx.ms = new MacroSet();
    ctx.h = new CtxHelper(ctx);

    if (!("defaults" in ctx)) ctx.defaults = new Object;
    if (!("tour_params" in ctx)) {
        ctx.tour_params = {};
        var p;
        for (p in tour_params) {
            ctx.tour_params[p] = tour_params[p];
        }
    }
}

function append_event(msg) {
    InsertEventAfter(msg);
}

function ScaledRect(rp) {
    var rect = rp.GetRect();

    var rp_div = CreatePosition(Position_ELEMENT_POS);
    rp_div.WindowID = rp.WindowID;
    rp_div.ID = 'eep_path="0";eep_atts={id:"dgo_base_div",tagName:"DIV"};eep_parents=[];';
    var base_pos = rp_div.GetRect();

    rect.MoveBy(-base_pos.left, -base_pos.top);

    log("rp.X ", rp.X, " rp.Y ", rp.Y, " rp.X2 ", rp.X2, " rp.Y2 ", rp.Y2);
    var q = (rect.bottom - rect.top) * rp.Y2;
    var l = rect.left + ((rect.right - rect.left) * rp.X) / 100;
    var r = rect.left + ((rect.right - rect.left) * rp.X2) / 100;
    var t = rect.top + ((rect.bottom - rect.top) * rp.Y) / 100;
    var b = rect.top + ((rect.bottom - rect.top) * rp.Y2) / 100;
    return CreateRect(l, t, r, b);
}

function crop_screenshot_rect() {
    var msg = CurrentEvent();

    var imgfile = msg.GetParam("screenshot_file");
    var imgrect = msg.GetParam("screenshot_rect");
    var imgrect_orig = imgrect.Clone();

    var l = imgrect.left;
    var t = imgrect.top;

    if (EditCropRect(Project.DocPath + imgfile, imgrect)) {
        msg.SetParam("screenshot_rect", imgrect);
    } else {
        // alert("cancelled");
    }
}

function set_quiz_hotspot_rect() {
    var msg = CurrentEvent();

    var imgfile = msg.GetParam("hs_image");
    var imgrect = msg.GetParam("selection_rect");

    if (EditCropRect(Project.DocPath + imgfile, imgrect)) {
        msg.SetParam("selection_rect", imgrect);
    }
}

function crop_screenshot() {
    var msg = CurrentEvent();
    var imgfile = msg.GetParam("screenshot_file");
    var imgrect = CreateRect(0, 0, 1000, 1000);

    if (FileExists(Project.DocPath + imgfile)) {

        if (EditCropRect(Project.DocPath + imgfile, imgrect)) {
            var img = CreateImage(Project.DocPath + imgfile, imgrect);

            img.Crop(imgrect);
            img.Save();
        }
    }
}

function record_partial_screenshot() {
    var sc_fn;
    var sc_rect;
    var sc;

    if (ScreendumpOk()) {
        // alert(ScreendumpFileName());

        var fn = ScreendumpFileName();
        sc_rect = ScreendumpRect();

        doc_filename = GetUniqueFilename(Project.DocPath, "WIN_", ".png");
        CopyFile(Project.PagePath + ScreendumpImgName(),
                 Project.DocPath + doc_filename);

        DeleteFile(Project.PagePath + ScreendumpImgName());
        DeleteFile(Project.PagePath + ScreendumpFileName());

        sc_fn = doc_filename;
        sc = CreateImage(Project.DocPath + doc_filename);

        ScreendumpFlush();

        ok = true;
    } else {
        var base = CurrentEvent();
        while (base &&
               base.Template() != "new_window" &&
               base.Template() != "new_page" &&
               base.Template() != "scroll_hor" &&
               base.Template() != "scroll_vert")
        {
            base = PrevMacro(base.TourPosition());
        }

        if (base) {
            var fn = base.GetParam("screenshot_file");
            sc_fn = GetUniqueFilename(Project.DocPath, "PART_", ".png");
            CopyFile(Project.DocPath + fn,
                     Project.DocPath + sc_fn);
            sc_rect = CreateRect(0, 0, 100, 100);

            sc = CreateImage(Project.DocPath + sc_fn);
            sc_rect = sc.rect;

            ok = true;
        } else {
            alert(ui_trans('errNoScreenshotFound'));
            ok = false;
        }

    }

    if (ok) {
        if (EditCropRect(Project.DocPath + sc_fn, sc_rect)) {
            sc.Crop(sc_rect);
            sc.Save();

            var newmac = CreateMacro("screenshot_part");
            newmac.SetParam("screenshot_file", sc_fn);
            newmac.SetParam("screenshot_rect", sc_rect);

            append_event(newmac);
        }
    }

    sc.Destroy();
}

function update_page() {
    var fg = ForegroundBrowser();

    var mbres = MsgBox(ui_trans('msgReplacePagedump'),
                       ui_trans('capReplacePagedump'),
                       MB_QUESTION | MB_YESNO, fg);

    if (mbres == IDYES) {
        var msg = CurrentEvent();

        // update pagedump
        HtmlDumper.Dump(fg);
        msg.SetParam("dump_page", HtmlDumper.filename);

        // update screenshot
        var filename = msg.GetParam("screenshot_file");

        if (filename == "") {
            filename = GetUniqueFilename(Project.DocPath, "PAGE_", ".gif");
        }

        var sc = ImageScreenshot(Project.DocPath + filename, fg);

        msg.SetParam("screenshot_file", filename);
        msg.SetParam("screenshot_rect", sc.rect);

        sc.Destroy();
    }
}

function update_window_pos_size() {
    var msg = CurrentEvent();

    var rect = window_pos_size(ForegroundBrowser());

    msg.SetParam('dump_win_left', rect.left);
    msg.SetParam('dump_win_top', rect.top);
    msg.SetParam('dump_win_width', rect.width);
    msg.SetParam('dump_win_height', rect.height);
}

function update_window_page() {
    var fg = ForegroundBrowser();

    var mbres = MsgBox(ui_trans('msgReplacePagedump'),
                       ui_trans('capReplacePagedump'),
                       MB_QUESTION | MB_YESNO, fg);

    if (mbres == IDYES) {
        var msg = CurrentEvent();

        var rp = msg.GetParam("dump_win_relpos");
        HtmlDumper.Dump(fg);
        msg.SetParam("dump_page", HtmlDumper.filename);

        var filename = msg.GetParam("screenshot_file");
        var rp = msg.GetParam("dump_win_relpos");

        if (filename == "") {
            filename = GetUniqueFilename(Project.DocPath, "PAGE_", ".gif");
        }

        var sc = ImageScreenshot(Project.DocPath + filename, fg, 4);

        msg.SetParam("screenshot_file", filename);
        msg.SetParam("screenshot_rect", sc.rect);
        sc.Destroy();
    }
}

function position_explanation() {
    if (!preload_page()) return;
    var rp = RecordPosition(Position_ELEMENT_RECT, ui_trans('msgSelectBubblePos') );
    if (!rp) return;

    var msg = CurrentEvent();
    msg.SetParam("position_h", rp);
    update_explanation();
}

function update_explanation() {
    var msg = CurrentEvent();
    var rp = msg.GetParam("position_h");

    msg.SetParam("screenshot_rect", ScaledRect(rp));
}


function position_input_text() {
    if (!preload_page()) return;
    var rp = RecordPosition(Position_ELEMENT, ui_trans('msgSelectPosition') );

    if (!rp) return;
    var msg = CurrentEvent();
    msg.SetParam("position_h", rp);
    update_input_text();
}

function update_macro_screenshot(mac, prefix) {
    var rp = mac.GetParam("position_h");

    var rp_div = CreatePosition(Position_ELEMENT_POS);
    rp_div.WindowID = rp.WindowID;
    rp_div.ID = 'eep_path="0";eep_atts={id:"dgo_base_div",tagName:"DIV"};eep_parents=[];';
    var base_pos = rp_div.GetRect();

    var img_file = mac.GetParam("screenshot_file");
    if (img_file == "") {
        img_file = GetUniqueFilename(Project.DocPath, prefix + "_", ".gif");
    }

    var sc = ImageScreenshot(Project.DocPath + img_file, rp);

    mac.SetParam("screenshot_file", img_file);
    var r = sc.rect;
    r.MoveBy(-base_pos.left, -base_pos.top);
    mac.SetParam("screenshot_rect", r);
    mac.SetParam("overlay_pos", r.topleft);

    sc.Destroy();
}

function update_input_text() {
    var mac = CurrentEvent();
    var rp = mac.GetParam("position_h");

    rp.ExecScript("value='" + mac.GetParam("text_d") + "'");

    update_macro_screenshot(mac, "INPUT");
}

function position_single_select() {
    if (!preload_page()) return;
    var rp = RecordPosition(Position_ELEMENT, ui_trans('msgSelectPosition') );
    if (!rp) return;

    var msg = CurrentEvent();
    msg.SetParam("position_h", rp);
    update_single_select();
}

function update_single_select() {
    var msg = CurrentEvent();
    var rp = msg.GetParam("position_h");

    rp.ExecScript("selectedIndex=" + msg.GetParam("choose_nr"));

    update_macro_screenshot(mac, "SELECT");
}


function position_input_radio() {
    if (!preload_page()) return;
    var rp = RecordPosition(Position_ELEMENT, ui_trans('msgSelectPosition') );
    if (!rp) return;

    var msg = CurrentEvent();
    msg.SetParam("position_h", rp);
    update_input_radio();
}

function update_input_radio() {
    var mac = CurrentEvent();
    var rp = mac.GetParam("position_h");

    rp.ExecScript("checked = " + (mac.GetParam("choose_bool") == "1" ? "true" : "false"));

    update_macro_screenshot(mac, "RADIO");
}

function
mac_as_js(mac) {
    var params = new Object;
    for (var i = 0; i < mac.NumParams(); i++) {
        if (mac.ParamType(i) == ParamType_TEXT_SINGLE ||
            mac.ParamType(i) == ParamType_TEXT_SHORT ||
            mac.ParamType(i) == ParamType_TEXT_LONG ||
            mac.ParamType(i) == ParamType_HTML ||
            mac.ParamType(i) == ParamType_ENUM ||
            mac.ParamType(i) == ParamType_IMAGE_PAGE_REL ||
            mac.ParamType(i) == ParamType_FILENAME ||
            mac.ParamType(i) == ParamType_FILENAME_WA_REL ||
            mac.ParamType(i) == ParamType_FILENAME_DOC_REL ||
            mac.ParamType(i) == ParamType_FILENAME_PRJ_REL ||
            mac.ParamType(i) == ParamType_FILENAME_PAGE_REL ||
            mac.ParamType(i) == ParamType_BOOL_0_1 ||
            mac.ParamType(i) == ParamType_BOOL_TRUE_FALSE ||
            mac.ParamType(i) == ParamType_BOOL_YES_NO)
        {
            params[mac.ParamName(i)] = mac.GetParam(i);
            log(i + ": " + mac.ParamName(i) + ' = ' + mac.GetParam(i));
        }
    }
    return params;
}

function edit_demo_bubble() {
    if (!preload_page()) return;

    var mac = CurrentEvent();

    var text;

    if (ExpertFeature("OldMacroImpl")) {
        text = mac.PreTranslateString("bubbletext_d");
    } else {
        UpdateParams(mac);

        var params = mac_as_js(mac);
        if (mac.Template() == "explanation_long") {
            params.bubbletext = params.explanation_d;
            if (params.show_nav_buttons) {
                text = ctx.h.EVAL_TEMPLATE("explanation_long_nav_all", params);
                log("show_nav_buttons");
            } else {
                text = ctx.h.EVAL_TEMPLATE("explanation_long_nonav", params);
                log("no_nav_buttons");
            }
        } else {
            text = ctx.h.EVAL_TEMPLATE("bubbletext_d", params);
        }
    }

    BubbleEditor.Position = mac.GetParam("position_b");
    BubbleEditor.Width = mac.GetParam("b_width");
    BubbleEditor.Height = mac.GetParam("b_height");
    BubbleEditor.HtmlText = text;
    BubbleEditor.Orientation = mac.GetParam("orientation");
    BubbleEditor.Movable = false;
    BubbleEditor.Closable = false;
    BubbleEditor.Minimizable = false;
    BubbleEditor.Transparent = false;
    BubbleEditor.CustomStyle = mac.GetParam("bubblestyle_d");
    BubbleEditor.TextStyle = mac.GetParam("bubble_class");
    BubbleEditor.CssPath = "resource\\bubble_demo.css";
    BubbleEditor.Duration = mac.HasParam("b_duration") ? mac.GetParam("b_duration") : 0;

    // 1: allow only move/resize
    // 2: allow only html-editing
    // 4: allow switching modes
    BubbleEditor.EditMask = 1;
    // 1: activate move/resize
    // 2: activate html-editing
    // 4: edit duration
    BubbleEditor.EditMode = 5;

    if (BubbleEditor.EditBubble()) {
        mac.SetParam("position_b"   , BubbleEditor.Position   );
        mac.SetParam("b_width"      , BubbleEditor.Width      );
        mac.SetParam("b_height"     , BubbleEditor.Height     );
        mac.SetParam("orientation"  , BubbleEditor.Orientation);
        if (mac.HasParam("b_duration")) mac.SetParam("b_duration"   , BubbleEditor.Duration   );
        mac.SetParam("bubblestyle_d", BubbleEditor.CustomStyle);
        mac.SetParam("bubble_class" , BubbleEditor.TextStyle  );
        // mac.SetParam("explanation_d", BubbleEditor.HtmlText   );
    }
}

function edit_practice_bubble() {
    if (!preload_page()) return;

    var mac = CurrentEvent();

    BubbleEditor.Position = mac.GetParam("position_bu");
    if (mac.HasParam("b_width_p")) {
        BubbleEditor.Width = mac.GetParam("b_width_p");
    } else {
        BubbleEditor.Width = mac.GetParam("b_width");
    }
    if (mac.HasParam("b_height_p")) {
        BubbleEditor.Height = mac.GetParam("b_height_p");
    } else {
        BubbleEditor.Height = mac.GetParam("b_height");
    }

    if (ExpertFeature("OldMacroImpl")) {
        BubbleEditor.HtmlText = mac.PreTranslateString("bubbletext_p");
    } else {
        UpdateParams(mac);
        var params = mac_as_js(mac);
        var text = '';

        if (mac.Template() == "explanation_long") {
            params.bubbletext = params.explanation_p;
            if (params.show_nav_buttons) {
                text = ctx.h.EVAL_TEMPLATE("explanation_long_nav_all", params);
                log("show_nav_buttons");
            } else {
                text = ctx.h.EVAL_TEMPLATE("explanation_long_nonav", params);
                log("no_nav_buttons");
            }
        } else {
            text = ctx.h.EVAL_TEMPLATE("bubbletext_p", params);
        }

        BubbleEditor.HtmlText = text;
    }

    if (mac.HasParam("orientation_p")) {
        BubbleEditor.Orientation = mac.GetParam("orientation_p");
    } else if (mac.HasParam("orientation")) {
        BubbleEditor.Orientation = mac.GetParam("orientation");
    }

    if (mac.HasParam("bubble_class_p")) {
        BubbleEditor.TextStyle = mac.GetParam("bubble_class_p");
    } else {
        BubbleEditor.TextStyle = mac.GetParam("bubble_class");
    }

    if (mac.HasParam("b_duration_p")) {
        BubbleEditor.Duration = mac.GetParam("b_duration_p");
        BubbleEditor.EditMode = 5;
    } else {
        BubbleEditor.EditMode = 1;
    }

    BubbleEditor.Movable = false;
    BubbleEditor.Closable = false;
    BubbleEditor.Minimizable = false;
    BubbleEditor.Transparent = false;
    BubbleEditor.EditMask = 1;
    BubbleEditor.CustomStyle = mac.GetParam("bubblestyle_p");
    BubbleEditor.CssPath = "resource\\bubble_uebung.css";

    if (BubbleEditor.EditBubble()) {
        mac.SetParam("position_bu"  , BubbleEditor.Position   );
        if (mac.HasParam("b_width_p")) {
            mac.SetParam("b_width_p", BubbleEditor.Width      );
        } else {
            mac.SetParam("b_width", BubbleEditor.Width      );
        }
        if (mac.HasParam("b_height_p")) {
            mac.SetParam("b_height_p", BubbleEditor.Height     );
        } else {
            mac.SetParam("b_height", BubbleEditor.Height     );
        }
        if (mac.HasParam("orientation_p")) {
            mac.SetParam("orientation_p"  , BubbleEditor.Orientation);
        }
        if (mac.HasParam("b_duration_p")) {
            mac.SetParam("b_duration_p", BubbleEditor.Duration);
        }

        mac.SetParam("bubblestyle_p", BubbleEditor.CustomStyle);

        if (mac.HasParam("bubble_class_p")) {
            mac.SetParam("bubble_class_p" , BubbleEditor.TextStyle  );
        } else {
            mac.SetParam("bubble_class" , BubbleEditor.TextStyle  );
        }
        // mac.SetParam("explanation_p", BubbleEditor.HtmlText   );
    }
}

function record_explain() {
    select_project_language();
    preload_page();

    var rp = RecordPosition(Position_ELEMENT_RECT, ui_trans('msgSelectPosition') );

    if (rp != null) {
        var txtDialog = CreateDialog();

        txtDialog.SetCaption(ui_trans('macExplanation'));
        txtDialog.AddParam("demo_msg", ParamType_HTML, ui_trans('paramExplanationDemo'));
        txtDialog.AddParam("uebung_msg", ParamType_HTML, ui_trans('paramExplanationPrac'));
        txtDialog.SetSize(400, 360);

        var ok = txtDialog.Show();

        if (ok) {

            HistoryStartAction("Erklärung");

            var demo_value = txtDialog.GetParam("demo_msg");
            var uebung_value = txtDialog.GetParam("uebung_msg");
            var new_mac = CreateMacro("explanation");

            new_mac.SetParam("explanation_d", demo_value);
            new_mac.SetParam("explanation_d_modified", true);
            new_mac.SetParam("explanation_p", uebung_value);
            new_mac.SetParam("explanation_p_modified", true);

            set_positions(new_mac, rp);
            new_mac.SetParam("screenshot_rect", ScaledRect(rp));

            if (new_mac.HasParam("b_duration")) {
                new_mac.SetParam("b_duration", cfg.standard.rec.default_bubble_duration);
            }

            append_event(new_mac);
        }
    }
}

function record_info_page() {
    select_project_language();

    var txtDialog = CreateDialog();

    txtDialog.SetCaption(ui_trans('macExplanation'));
    txtDialog.AddParam("demo_msg", ParamType_HTML, ui_trans('paramExplanationDemo'));
    txtDialog.SetParamProperty("demo_msg", "height", "240");
    txtDialog.SetSize(400, 360);

    var ok = txtDialog.Show();

    if (ok) {

        HistoryStartAction("Info-Page");

        var rp = CreatePosition(Position_FRAME);
        rp.WindowID = CurrentBrowser();
        var demo_value = txtDialog.GetParam("demo_msg");
        var new_mac = CreateMacro("info_page");
        new_mac.SetParam("dump_win_relpos", rp);
        append_event(new_mac);

        var new_mac = CreateMacro("explanation_long");
        new_mac.SetParam("explanation_d", demo_value);
        new_mac.SetParam("explanation_p", '');
        new_mac.SetParam("all_like_demo", true);

        var rp = CreatePosition(Position_ELEMENT_POS);
        rp.WindowID = CurrentBrowser();
        rp.X = 0.5;
        rp.Y = 0.5;
        rp.DocX = 0.5;
        rp.DocY = 0.5;
        rp.EP = "0:0:0:0";
        rp.FP = CurrentBrowser();

        append_event(new_mac);
    }
}

function record_newpage() {
    var window_id = ForegroundBrowser();

    HtmlDumper.Dump(window_id);

    var name = window_name(window_id);

    AddTourstop(name, Tourstop_SHOW_JUMP);

    var macNewPage = CreateMacro("new_page");

    macNewPage.SetParam("new_step", name);
    macNewPage.SetParam("dump_page", HtmlDumper.filename);

    var sc_fn = GetUniqueFilename(Project.DocPath, "PAGE_", ".gif");
    var sc = ImageScreenshot(Project.DocPath + sc_fn, window_id, 4);

    macNewPage.SetParam("screenshot_file", sc_fn);
    macNewPage.SetParam("screenshot_rect", sc.rect);
    macNewPage.SetParam("record_window_id", window_id);

    append_event(macNewPage);

    sc.Destroy();

}

function record_new_window() {
    var window_id = ForegroundBrowser();

    HtmlDumper.Dump(window_id);

    var name = window_name(window_id);

    AddTourstop(name, Tourstop_SHOW_JUMP);

    var macNewWin = CreateMacro("new_window");

    macNewWin.SetParam("new_step", name);
    macNewWin.SetParam("dump_page", HtmlDumper.filename);

    var rp = CreatePosition();
    rp.WindowID = window_id;
    macNewWin.SetParam("dump_win_relpos", rp);

    var sc_fn = GetUniqueFilename(Project.DocPath, "PAGE_", ".gif");
    var sc = ImageScreenshot(Project.DocPath + sc_fn, window_id, 4);

    macNewWin.SetParam("screenshot_file", sc_fn);
    macNewWin.SetParam("screenshot_rect", sc.rect);

    append_event(macNewWin);

    sc.Destroy();
}

function record_input_radio() {
    select_project_language();
    preload_page();

    var rp = RecordPosition(Position_ELEMENT_POS, ui_trans('msgSelectRadio'));

    if (rp != null) {
        var type = element_xtype(rp);
        if (type == "INPUTradio" || type == "INPUTcheckbox") {
            var txtDialog = CreateDialog();
            txtDialog.SetCaption(ui_trans('macInputRadio'));

            if (type == "INPUTradio") {
                fieldname = rp.ExecScript("nextSibling.nextSibling.innerText");
                if (fieldname == "<js-error>") {
                    fieldname = rp.ExecScript("parentNode.innerText");
                }
            } else {
                fieldname = rp.ExecScript("parentNode.innerText");
            }

            var value = (rp.ExecScript("checked") == "true");
            txtDialog.AddParam("new_value", ParamType_BOOL_YES_NO, ui_trans('paramValue'));
            txtDialog.SetParam("new_value", !value);

            txtDialog.AddParam("fieldname", ParamType_TEXT_SINGLE, ui_trans('paramFieldname'));
            txtDialog.SetParam("fieldname", fieldname);

            var ok = txtDialog.Show();

            if (ok) {

                HistoryStartAction("Checkbox");

                var fieldname = txtDialog.GetParam("fieldname");
                var new_value = txtDialog.GetParam("new_value");
                var new_mac = CreateMacro("input_radio");

                new_mac.SetParam("choose_bool", new_value ? "1" : "0");
                new_mac.SetParam("fieldname", fieldname);

                set_positions(new_mac, rp);

                if (type == "INPUTradio") {
                    var infotxt = get_infotxt("INPUTradio");
                    insert_prop(infotxt, 'fieldname', fieldname);

                    new_mac.SetParam("explanation_d", infotxt.demo);
                    new_mac.SetParam("explanation_p", infotxt.prac);
                } else if (new_value) {
                    var infotxt = get_infotxt("INPUTcheckboxOn");
                    insert_prop(infotxt, 'fieldname', fieldname);

                    new_mac.SetParam("explanation_d", infotxt.demo);
                    new_mac.SetParam("explanation_p", infotxt.prac);
                } else {
                    var infotxt = get_infotxt("INPUTcheckboxOff");
                    insert_prop(infotxt, 'fieldname', fieldname);

                    new_mac.SetParam("explanation_d", infotxt.demo);
                    new_mac.SetParam("explanation_p", infotxt.prac);
                }

                new_mac.SetParam("element_type", element_xtype(rp));
                // new_mac.SetParam("element_type", type);
                rp.ExecScript("click()");

                update_macro_screenshot(new_mac, "RADIO");

                if (new_mac.HasParam("b_duration")) {
                    new_mac.SetParam("b_duration", cfg.standard.rec.default_bubble_duration);
                }

                append_event(new_mac);

                sc.Destroy();
            }
        }  else {

            alert(ui_trans('errNoRadiobutton'))
        }
    }
}

function record_gen_action() {
    select_project_language();
    preload_page();

    var rp = RecordPosition(Position_ELEMENT_RECT, ui_trans('msgSelectGeneralAction'));

    if (rp != null) {
        var txtDialog = CreateDialog();

        txtDialog.SetCaption(ui_trans('macGeneralAction'));

        txtDialog.AddParam("fieldname", ParamType_TEXT_SINGLE, ui_trans('paramFieldname'));
        txtDialog.SetParam("fieldname", rp.ExecScript("innerText"));

        /*
           txtDialog.AddParam("demo_msg", ParamType_HTML, "Demo Erklärung");
           txtDialog.AddParam("uebung_msg", ParamType_HTML, "Übung Erklärung");
        */

        var ok = txtDialog.Show();

        if (ok) {

            HistoryStartAction("Klick Aktion");

            /*
            var demo_value = txtDialog.GetParam("demo_msg");
            var uebung_value = txtDialog.GetParam("uebung_msg");
            */

            var fieldname = txtDialog.GetParam("fieldname");

            var infotxt = get_infotxt("A");

            var new_mac = CreateMacro("click");

            insert_prop(infotxt, 'fieldname', fieldname);

            new_mac.SetParam("explanation_d", infotxt.demo);
            new_mac.SetParam("explanation_p", infotxt.prac);

            new_mac.SetParam("screenshot_rect", ScaledRect(rp));
            new_mac.SetParam("screenshot_file", "");
            new_mac.SetParam("fieldname", fieldname);

            set_positions(new_mac, rp);

            new_mac.SetParam("element_type", element_xtype(rp));

            if (new_mac.HasParam("b_duration")) {
                new_mac.SetParam("b_duration", cfg.standard.rec.default_bubble_duration);
            }

            append_event(new_mac);
        }
    }
}

function position_click() {
    if (!preload_page()) return;
    var rp = RecordPosition(Position_ELEMENT_POS, ui_trans('msgSelectPosition') );
    if (!rp) return;

    var msg = CurrentEvent();
    msg.SetParam("position_h", rp);
    update_click();
}


function update_click() {
    var msg = CurrentEvent();
    var rp = msg.GetParam("position_h");

    msg.SetParam("screenshot_rect", ScaledRect(rp));

}

function record_quick_click() {
    select_project_language();
    preload_page();

    var rp = RecordPosition(Position_ELEMENT_POS, ui_trans('msgSelectGeneralAction'));

    if (rp != null) {
        var txtDialog = CreateDialog();

        txtDialog.SetCaption(ui_trans('macQuickClick'));

        txtDialog.AddParam("fieldname", ParamType_TEXT_SINGLE, ui_trans('paramFieldname'));
        txtDialog.SetParam("fieldname", rp.ExecScript("innerText"));

        var ok = txtDialog.Show();

        if (ok) {

            HistoryStartAction("Quick Klick Aktion");

            var fieldname = txtDialog.GetParam("fieldname");

            var new_mac = CreateMacro("quick_click");

            var infotxt = get_infotxt("TDurMnuTxt");
            insert_prop(infotxt, 'fieldname', fieldname);

            new_mac.SetParam("explanation_p", infotxt.prac);

            new_mac.SetParam("screenshot_rect", rp.GetRect());
            new_mac.SetParam("screenshot_file", "");
            new_mac.SetParam("fieldname", fieldname);

            set_positions(new_mac, rp);

            new_mac.SetParam("element_type", element_xtype(rp));

            if (new_mac.HasParam("b_duration")) {
                new_mac.SetParam("b_duration", cfg.standard.rec.default_bubble_duration);
            }

            append_event(new_mac);
        }
    }
}

function position_quick_click() {
    if (!preload_page()) return;
    var rp = RecordPosition(Position_ELEMENT_POS, ui_trans('msgSelectPosition') );
    if (!rp) return;

    var msg = CurrentEvent();
    msg.SetParam("position_h", rp);
    update_quick_click();
}

function update_quick_click() {
    var mac = CurrentEvent();

    var msg = CurrentEvent();
    var rp = msg.GetParam("position_h");

    msg.SetParam("screenshot_rect", ScaledRect(rp));

}

function record_gen_action_menu() {
    select_project_language();
    preload_page();

    var rp = RecordPosition(Position_ELEMENT_POS, ui_trans('msgSelectGeneralAction'));
    if (rp == null) return;

    var rpt = RecordPosition(Position_ELEMENT_POS, ui_trans('msgSelectTCODE'));
    if (rpt == null) return;

    var fieldname = rp.ExecScript("innerText");

    /*
    var txtDialog = CreateDialog();
    txtDialog.SetCaption(ui_trans('macClickMenu'));
    txtDialog.AddParam("fieldname", ParamType_TEXT_SINGLE, ui_trans('paramTransactionName'));

    var ok = txtDialog.Show();
    if (!ok) return;

    var fieldname = txtDialog.GetParam("fieldname");
    */

    HistoryStartAction("Klick Menu Aktion");

    var tcinfo = append_tcode(rp);
    var new_mac = CreateMacro("click_SAP");
    new_mac.SetParam("transaction_code", tcinfo.tcode);

    var infotxt = get_infotxt("SAP_EA_Menu");
    insert_prop(infotxt, 'fieldname', tcinfo.sap_path);
    insert_prop(infotxt, 'tcode', tcinfo.tcode);

    new_mac.SetParam("explanation_d", infotxt.demo);
    new_mac.SetParam("explanation_p", infotxt.prac);

    new_mac.SetParam("screenshot_rect", rp.GetRect());
    new_mac.SetParam("fieldname", tcinfo.sap_path);

    new_mac.SetParam("position_tc", rpt);

    set_positions(new_mac, rp);

    new_mac.SetParam("element_type", element_xtype(rp));

    if (new_mac.HasParam("b_duration")) {
        new_mac.SetParam("b_duration", cfg.standard.rec.default_bubble_duration);
    }

    append_event(new_mac);
}

function position_click_sap() {
    if (!preload_page()) return;
    var rp = RecordPosition(Position_ELEMENT_POS, ui_trans('msgSelectPosition') );
    if (!rp) return;

    var msg = CurrentEvent();
    msg.SetParam("position_h", rp);
    update_gen_action_menu();
}

function update_gen_action_menu() {
    var mac = CurrentEvent();

    var msg = CurrentEvent();
    var rp = msg.GetParam("position_h");

    msg.SetParam("screenshot_rect", ScaledRect(rp));

}


function show_highlight_rect() {
    var ev = CurrentEvent();

    var img = create_base_image(ev);
    if (img == null) return;

    var imgrect = ev.GetParam("screenshot_rect");

    imgrect.MoveBy(-img.left, -img.top);

    if (EditCropRect(img.filename,
                     imgrect,
                     ui_trans('capEditFreeMarker'),
                     3,
                     cfg.standard.doc.marker_border,
                     cfg.standard.doc.marker_color,
                     0,
                     0))
    {
        imgrect.MoveBy(img.left, img.top);

        ev.SetParam("screenshot_rect", imgrect);
    }
}


function record_single_select() {
    select_project_language();
    preload_page();

    var rp = RecordPosition(Position_ELEMENT_POS, ui_trans('msgSelectSingle'));

    if (rp != null) {
        var type = element_xtype(rp);

        if (type == "SELECT") {
            var txtDialog = CreateDialog();

            txtDialog.SetCaption(ui_trans('macSelectSingle'));
            txtDialog.AddParam("fieldname", ParamType_TEXT_SINGLE, ui_trans('paramFieldname'));
            var fieldname = rp.ExecScript("previousSibling.innerText");

            if (fieldname == "") {
                fieldname = rp.ExecScript("previousSibling.previousSibling.innerText");
            }
            if (fieldname == "<js-error>" || fieldname == "undefined") {
                fieldname = "";
            }
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
            var a = eval(res);

            for (i = 0; i < a.length; i++) {

                txtDialog.AddEnumValue("selection", i, unescape(a[i]));
            }

            var orig_sel = rp.ExecScript("selectedIndex");

            txtDialog.SetParam("selection", "" + orig_sel);

            var ok = txtDialog.Show();

            if (ok) {

                HistoryStartAction("Auswahlfeld");

                var fieldname = txtDialog.GetParam("fieldname");
                var selected = txtDialog.GetParam("selection");
                var sel_text = rp.ExecScript("options(" + selected + ").text")

                var new_mac = CreateMacro("select_single");
                new_mac.SetParam("choose_nr", "" + selected);

                set_positions(new_mac, rp);

                new_mac.SetParam("element_type", element_xtype(rp));

                var infotxt = get_infotxt("SELECT");

                insert_prop(infotxt, 'fieldname', fieldname);
                insert_prop(infotxt, 'valuename', sel_text);
                new_mac.SetParam("explanation_d", infotxt.demo);
                new_mac.SetParam("explanation_p", infotxt.prac);
                new_mac.SetParam("element_type", type);
                new_mac.SetParam("fieldname", fieldname);
                new_mac.SetParam("choose_text", sel_text);

                rp.ExecScript("selectedIndex=" + selected);

                var sc_fn = GetUniqueFilename(Project.DocPath, "SELECT_", ".gif");
                var sc = ImageScreenshot(Project.DocPath + sc_fn, rp);

                new_mac.SetParam("screenshot_file", sc_fn);
                new_mac.SetParam("screenshot_rect", sc.rect);

                if (new_mac.HasParam("b_duration")) {
                    new_mac.SetParam("b_duration", cfg.standard.rec.default_bubble_duration);
                }

                append_event(new_mac);

                sc.Destroy();
            }
        }  else {

            alert(ui_trans('errNoSelectSingle'))
        }
    }
}

function record_status_info() {
    var rp = RecordPosition(Position_ELEMENT_POS, ui_trans('msgSelectStatusLine'));

    if (rp != null) {
        var type = element_xtype(rp);

        if (type == "TDWebguiMessageLine" || type == "SPANWebguiStatusBarFont" ||
               type == "IMGTDWebguiMessageLine")
        {
            if (type == "SPANWebguiStatusBarFont" ||
                type == "IMGTDWebguiMessageLine")
            {
                rp.ElementPathPop();
                rp.UpdateElementID();
            }

            var href = rp.ExecScript("firstChild.href");
            var dump = HtmlDumper.DumpResource(href, "images");
            var fieldname = "<img src=\"" + dump + "\">";
            fieldname = fieldname + "&nbsp;" + rp.ExecScript("innerText");

            var fn = GetUniqueFilename(Project.DocPath, "STATUS_", ".gif");

            var sc = ImageScreenshot(Project.DocPath + fn, rp);

            var rect = rp.GetRect();
            var rpmsg = rp.Clone();

            rpmsg.ElementPathPush(1);
            rpmsg.UpdateElementID();

            var rectmsg = rpmsg.GetRect();

            rect.right = rectmsg.right;
            rect.right -= rect.left;
            rect.bottom -= rect.top;
            rect.left = 0;
            rect.top = 0;

            sc.Crop(rect);
            sc.Save();

            var new_mac = CreateMacro("status_info");

            new_mac.SetParam("status_text", fieldname);
            new_mac.SetParam("screenshot_file", fn);

            append_event(new_mac);

            sc.Destroy();
        } else {

            alert(ui_trans('errNoStatusLine'))
        }
    }
}

function record_doc_note() {
    select_project_language();

    var txtDialog = CreateDialog();

    txtDialog.SetCaption(ui_trans('macHinweis'));
    txtDialog.AddParam("demo_msg", ParamType_HTML, ui_trans('paramText'));
    txtDialog.SetParamProperty("demo_msg", "height", "200");
    txtDialog.SetSize(400, 300);

    var ok = txtDialog.Show();

    if (ok) {

        HistoryStartAction("Doc: Note");

        var demo_value = txtDialog.GetParam("demo_msg");
        var new_mac = CreateMacro("hinweis");

        new_mac.SetParam("text", demo_value);

        append_event(new_mac);
    }
}

function record_explain_long() {
    select_project_language();
    preload_page();

    var rp = RecordPosition(Position_ELEMENT_POS, ui_trans('msgSelectBubblePos'));

    if (rp != null) {
        var txtDialog = CreateDialog();

        txtDialog.SetCaption(Translate('explanation_long'));
        txtDialog.AddParam("demo_msg", ParamType_HTML, Translate('explanation_d'));
        txtDialog.AddParam("all_like_demo", ParamType_BOOL_0_1, Translate("all_like_demo"));
        txtDialog.AddParam("uebung_msg", ParamType_HTML, Translate('explanation_p'));
        txtDialog.SetSize(400, 360);

        var ok = txtDialog.Show();

        if (ok) {

            HistoryStartAction("Erklärung Lang");

            var demo_value = txtDialog.GetParam("demo_msg");
            var uebung_value = txtDialog.GetParam("uebung_msg");
            var all_like_demo = txtDialog.GetParam("all_like_demo");
            var new_mac = CreateMacro("explanation_long");

            new_mac.SetParam("explanation_d", demo_value);
            new_mac.SetParam("explanation_d_modified", true);
            new_mac.SetParam("all_like_demo", all_like_demo);
            new_mac.SetParam("explanation_p", uebung_value);
            new_mac.SetParam("explanation_p_modified", true);
            set_positions(new_mac, rp, true);
            new_mac.SetParam("screenshot_rect", ScaledRect(rp));

            append_event(new_mac);
        }
    }
}

function record_free_marker() {
    var c = CurrentEvent();

    var imgrect = CreateRect(0, 0, 99, 99);
    var img = create_base_image(c);

    if (img == null) return;

    if (EditCropRect(img.filename, imgrect, ui_trans('macFreeMarker'),
                     3, cfg.standard.doc.marker_border, cfg.standard.doc.marker_color, 0, 0))
    {
        imgrect.MoveBy(img.left, img.top);

        var newmac = CreateMacro("free_marker");
        newmac.SetParam("screenshot_rect", imgrect);
        InsertEventAfter(newmac);
    }

    DeleteFile(img.filename);

}

function edit_free_marker() {
    var marker = CurrentEvent();

    var img = create_base_image(marker);
    if (img == null) return;

    var imgrect = marker.GetParam("screenshot_rect");

    imgrect.MoveBy(-img.left, -img.top);

    if (EditCropRect(img.filename, imgrect, ui_trans('capEditFreeMarker'),
                     3, cfg.standard.doc.marker_border, cfg.standard.doc.marker_color, 0, 0))
    {
        imgrect.MoveBy(img.left, img.top);

        marker.SetParam("screenshot_rect", imgrect);
    }

    DeleteFile(img.filename);
}

function record_vscroll() {
    select_project_language();

    var rp = RecordPosition(Position_ELEMENT_POS, ui_trans('msgSelectVScroll'));

    if (rp) {
        var infotxt = get_key_infotxt("click_scroll_vertical");
        HistoryStartAction("ver scroll");
        var new_mac = CreateMacro("scroll_vert");
        new_mac.SetParam("explanation_d", infotxt.demo);

        set_positions(new_mac, rp);

        new_mac.SetParam("scrolltop", rp.ExecScript("scrollTop"));

        var sc_fn = GetUniqueFilename(Project.DocPath, "VSCROLL_", ".gif");
        var sc = ImageScreenshot(Project.DocPath + sc_fn, rp.WindowID);

        new_mac.SetParam("element_type", "VScroll");
        new_mac.SetParam("screenshot_file", sc_fn);
        new_mac.SetParam("screenshot_rect", sc.rect);

        if (new_mac.HasParam("b_duration")) {
            new_mac.SetParam("b_duration", cfg.standard.rec.default_bubble_duration);
        }

        append_event(new_mac);

        sc.Destroy();
    }
}

function record_hor_scroll() {
    select_project_language();


    var rp = RecordPosition(Position_ELEMENT_POS, ui_trans('msgSelectHScroll'));

    if (rp) {
        var infotxt = get_key_infotxt("click_scroll_horizontal");
        HistoryStartAction("hor scroll");
        var new_mac = CreateMacro("scroll_hor");
        new_mac.SetParam("explanation_d", infotxt.demo);

        set_positions(new_mac, rp);

        new_mac.SetParam("scrollleft", rp.ExecScript("scrollLeft"));

        var sc_fn = GetUniqueFilename(Project.DocPath, "HSCROLL_", ".gif");
        var sc = ImageScreenshot(Project.DocPath + sc_fn, rp.WindowID);

        new_mac.SetParam("element_type", "HScroll");
        new_mac.SetParam("screenshot_file", sc_fn);
        new_mac.SetParam("screenshot_rect", sc.rect);

        if (new_mac.HasParam("b_duration")) {
            new_mac.SetParam("b_duration", cfg.standard.rec.default_bubble_duration);
        }

        append_event(new_mac);
        sc.Destroy();
    }
}

function record_heading() {
    var txtDialog = CreateDialog();

    txtDialog.SetCaption(ui_trans('macNewHeading'));

    txtDialog.AddParam("caption", ParamType_TEXT_SINGLE, ui_trans('paramCaption'));

    txtDialog.AddParam("selection", ParamType_ENUM, ui_trans('paramType'));

    for (var h = 1; h < 10; h++) {
        txtDialog.AddEnumValue("selection", h, word_trans('para_heading') + h);
    }
    txtDialog.SetParam("selection", "1");

    var ok = txtDialog.Show();

    if (ok) {
        var titel = txtDialog.GetParam("caption");
        var type = txtDialog.GetParam("selection");
        var typename = "";

        typename = word_trans('para_heading') + type;

        var new_mac = CreateMacro("doc_caption");

        new_mac.SetParam("caption", titel);
        new_mac.SetParam("type", typename);

        append_event(new_mac);
    }
}

function record_pfeil() {
    var arrow = CurrentEvent();


    var img = create_base_image(arrow);
    if (img == null) return;

    var imgrect = CreateRect(0, 0, 99, 99);

    if (EditCropRect(img.filename, imgrect, ui_trans('macAddArrow'), 4)) {
        imgrect.MoveBy(img.left, img.top);


        var newmac = CreateMacro("arrow");
        newmac.SetParam("screenshot_rect", imgrect);
        newmac.SetParam("orientation", imgrect.orientation);
        InsertEventAfter(newmac);

    }

    DeleteFile(img.filename);
}

function edit_pfeil() {
    var arrow = CurrentEvent();

    var img = create_base_image(arrow);
    if (img == null) return;

    var imgrect = arrow.GetParam("screenshot_rect");
    imgrect.MoveBy(-img.left, -img.top);
    imgrect.orientation = arrow.GetParam("orientation");

    if (EditCropRect(img.filename, imgrect, ui_trans('macAddArrow'), 4)) {
        imgrect.MoveBy(img.left, img.top);

        arrow.SetParam("screenshot_rect", imgrect);
        arrow.SetParam("orientation", imgrect.orientation);
    }

    DeleteFile(img.filename);
}

function record_window_screenshot() {
    var title;
    var filename;
    var doc_filename;
    var rect;

    var ok = false;

    if (ScreendumpOk()) {
        // alert(ScreendumpFileName());

        filename = ScreendumpFileName();
        title = ScreendumpWindowTitle();
        rect = ScreendumpRect();

        doc_filename = GetUniqueFilename(Project.DocPath, "WIN_", ".png");
        CopyFile(Project.PagePath + ScreendumpImgName(),
                 Project.DocPath + doc_filename);

        ScreendumpFlush();

        ok = true;
    } else {
        var window_id = CurrentBrowser();
        var img_filename = GetUniqueFilename(Project.PagePath, "SCREEN_", ".png");
        Sleep(1000);
        var sc = ImageScreenshot(Project.PagePath + img_filename, window_id);

        filename = GetUniqueFilename(Project.PagePath, "SCREEN_", ".html");
        var sd = CreateScreendumpFromFile(Project.PagePath + filename, Project.PagePath + img_filename);
        sd.Save();

        if (sc) {
            var rp = CreatePosition();
            rp.WindowID = window_id;
            title = rp.ExecScript("document.title");

            doc_filename = GetUniqueFilename(Project.DocPath, "SCREEN_", ".png");
            CopyFile(Project.PagePath + img_filename, Project.DocPath + doc_filename);

            rect = sc.rect;
            ok = true;
        }
    }

    if (ok) {
        var mac = CreateMacro("new_page");
        mac.SetParam("dump_page", filename);
        mac.SetParam("element_type", "screenshot");
        mac.SetParam("new_step", title);
        mac.SetParam("doc_enable", true);

        mac.SetParam("screenshot_file", doc_filename);
        mac.SetParam("screenshot_rect", rect);

        AddTourstop(title, Tourstop_SHOW_JUMP);
        append_event(mac);
    } else {
        alert(ui_trans('errNoScreenshot'));
    }
}

function create_base_image(macro) {
    var asset = macro;

    var found = false;

    while (asset && !found) {
        if (asset.Template() == "new_page" && asset.GetParam("doc_enable")) {
            found = true;
        } else if (asset.Template() == "new_window" && asset.GetParam("doc_enable")) {
            found = true;
        } else if (asset.Template() == "screenshot_part" && asset.GetParam("show_actions")) {
            found = true;
        } else if ((asset.Template() == "scroll_vert" ||
                    asset.Template() == "scroll_hor") &&
                   asset.GetParam("doc_enable"))
        {
            found = true;
        }

        if (!found) {
            log("SKIP: " + asset.Template() + "(" + asset.TourPosition() + ")");
            asset = PrevMacro(asset.TourPosition());
        }
    }

    if (!found) {
        alert(ui_trans('errNoScreenshotFound'));
        return null;
    }

    var sc_file = asset.GetParam("screenshot_file");

    if (sc_file.length == 0 || !FileExists(Project.DocPath + sc_file)) {
        alert(ui_trans('errNoScreenshotFound'));
        return null;
    }

    temp_img_file = Project.DocPath + GetUniqueFilename(Project.DocPath, "TEMP_", ".gif");

    var border = asset.GetParam("screenshot_border");
    var rect = asset.GetParam("screenshot_rect");
    var img = CreateCanvas(rect.width + (2 * border), rect.height + (2 * border), cfg.standard.doc.screenshot_border_color);

    var overlay_img = CreateImage(Project.DocPath + sc_file, rect);
    overlay_img.Crop(rect);

    img.BeginPaint();
    img.PutImage(overlay_img, border, border);
    img.EndPaint();
    img.Save(temp_img_file);

    var res = new Object;
    res.filename = temp_img_file;

    res.left = rect.left - border;
    res.top = rect.top - border;

    return res;
}

function record_input_text() {
    select_project_language();

    var rp = RecordPosition(Position_ELEMENT_POS, ui_trans('msgSelectTextInput'));

    if (rp != null) {
        var type = element_xtype(rp);

        if (type == "INPUTtext" || type == "TEXTAREA" ||
            type == "SPANlabelTable" || type == "INPUTpassword")
        {
            if (type == "INPUTtext") {

                rp.ExecScript("click()");
            } else if (type == "SPANlabelTable") {

                rp.ExecScript("click()");
                rp.ElementPathPop();
                rp.UpdateElementID();
            }

            var txtDialog = CreateDialog();

            txtDialog.SetCaption(ui_trans('macInputText'));

            var fieldname = standard_fieldname(rp);

            txtDialog.AddParam("fieldname", ParamType_TEXT_SINGLE, ui_trans('paramFieldname'));
            txtDialog.SetParam("fieldname", fieldname);

            if (type == "TEXTAREA") {
                txtDialog.AddParam("newtext", ParamType_TEXT_SHORT, ui_trans('paramValue'));
            } else {
                txtDialog.AddParam("newtext", ParamType_TEXT_SINGLE, ui_trans('paramValue'));
            }

            //md changed: Bestätigungsbutton und -tasten
            txtDialog.AddParam("confirmation_tab", ParamType_BOOL_0_1, ui_trans('paramConfirmTab'));
            txtDialog.AddParam("confirmation_enter", ParamType_BOOL_0_1, ui_trans('paramConfirmEnter'));
            txtDialog.AddParam("affirmation_button", ParamType_BOOL_0_1, ui_trans('paramConfirmButton'));
            txtDialog.SetParam("confirmation_tab", true);

            var ok = txtDialog.Show();

            if (ok) {

                HistoryStartAction("Eingabefeld");

                var newtext = txtDialog.GetParam("newtext");
                var new_mac = CreateMacro("input_text");
                var d_tab = txtDialog.GetParam("confirmation_tab");
                var d_enter = txtDialog.GetParam("confirmation_enter");
                var d_button = txtDialog.GetParam("affirmation_button");
                fieldname = txtDialog.GetParam("fieldname");

                new_mac.SetParam("text_d", newtext);

                set_positions(new_mac, rp);

                new_mac.SetParam("element_type", element_xtype(rp));

                var infotxt = '';
                if (! cfg.standard.rec.demo_text_with_value) {
                    infotxt = get_infotxt("INPUTtext");
                } else {
                    infotxt = get_infotxt("INPUTtextplusvalue");
                }

                insert_prop(infotxt, 'fieldname', fieldname);
                insert_prop(infotxt, 'newtext', newtext);

                var infotxt2 = input_infotxt(d_tab, d_enter, d_button);

                new_mac.SetParam("explanation_d", infotxt.demo + infotxt2.demo);
                new_mac.SetParam("explanation_p", infotxt.prac + infotxt2.prac);
                new_mac.SetParam("fieldname", fieldname);

                // new_mac.SetParam("element_type", type);
                new_mac.SetParam("confirmation_tab", txtDialog.GetParam("confirmation_tab"));
                new_mac.SetParam("confirmation_enter", txtDialog.GetParam("confirmation_enter"));
                new_mac.SetParam("affirmation_button", txtDialog.GetParam("affirmation_button"));

                if (txtDialog.GetParam("affirmation_button") == "1") {
                    var rp2 = null;
                    rp2 = RecordPosition(Position_ELEMENT_POS, ui_trans('msgConfirmButton'));
                    if (rp2 == null) {
                        return;
                    }
                    new_mac.SetParam("position_af", rp2);
                }

                rp.ExecScript("click()");
                rp.ExecScript("value = '" + newtext + "'");

                update_macro_screenshot(new_mac, "INPUT");

                append_event(new_mac);
                // sc.Destroy();
            }
        } else {

            alert(ui_trans('errNoTextInput'))
        }
    }
}

function record_key_press() {
    select_project_language();

    var dlg = CreateDialog();

    dlg.SetCaption(ui_trans('macKeyPress'));
    dlg.AddParam("key_name", ParamType_TEXT_SINGLE, Translate('key_name'));
    dlg.AddParam("key_desc", ParamType_TEXT_SINGLE, Translate('key_desc'));

    if (dlg.Show()) {
        var mac = CreateMacro("key_press");
        var name = dlg.GetParam("key_name");
        var desc = dlg.GetParam("key_desc");
        if (desc.length == 0) {
            desc = name;
        }
        mac.SetParam("key_name", name);
        mac.SetParam("key_desc", desc);
        var p = CreatePosition();
        p.WindowID = ForegroundBrowser();
        mac.SetParam("position_h", p);

        if (mac.HasParam("b_duration")) {
            mac.SetParam("b_duration", cfg.standard.rec.default_bubble_duration);
        }

        var txt = get_key_infotxt("keypress");

        mac.SetParam("explanation_d", txt.demo);
        mac.SetParam("explanation_p", txt.prac);

        append_event(mac);
    }
}

function record_end_unit() {
    InsertEventAfter(CreateMacro("end_unit"));
    SetStatus(ui_trans('msgInserted') + ui_trans('macEndUnit'));
}

function record_goto_tourstop() {
    var dlg = CreateDialog();

    dlg.SetCaption(ui_trans('macGotoTourstop'));
    dlg.AddParam("jump_target", ParamType_TOURSTOP_NAME, ui_trans('paramJumpTarget'));
    if (dlg.Show()) {
        var mac = CreateMacro("goto_tourstop");
        mac.SetParam("jump_target", dlg.GetParam("jump_target"));
        InsertEventAfter(mac);
        SetStatus(ui_trans('msgInserted') + ui_trans('macGotoTourstop'));
    }
}


function update_msg_(msg) {
    if (!msg.HasParam("position_h")) return;

    var rp = msg.GetParam("position_h");
    rp.WindowID = 0;
    var fp = rp.ExecScript("tagName + type");

    if (msg.Template() == "input_text") {
        if (fp != "INPUTtext" && fp != "INPUTpassword") return;

        rp.ExecScript("value='" + msg.GetParam("text_d") + "'");

        Sleep(100);

        update_macro_screenshot(msg, "INPUT");
    } else if (msg.Template() == "select_single") {
        if (fp != "SELECTselect-one") return;

        rp.ExecScript("selectedIndex=" + msg.GetParam("choose_nr"));

        var img_file = msg.GetParam("screenshot_file");

        Sleep(100);

        update_macro_screenshot(msg, "SELECT");
    } else if (msg.Template() == "input_radio") {
        if (fp != "INPUTradio" && fp != "INPUTcheckbox") return;

        rp.ExecScript("checked = " + (msg.GetParam("choose_bool") == "1" ? "true" : "false"));

        Sleep(100);

        update_macro_screenshot(msg, "RADIO");
    } else if (msg.Template() == "explanation") {
        msg.SetParam("screenshot_rect", ScaledRect(rp));
    } else if (msg.Template() == "click") {
        msg.SetParam("screenshot_rect", ScaledRect(rp));
    }
}


function update_all_macros() {
    var counter = 0;
    var msg = NextMacro();

    while (msg != null) {
        counter++;
        msg = NextMacro(msg.TourPosition());
    }
    
    if (counter == 0) {
        alert("nothing to do.");
        return;
    }
    
    ProgressBegin(Translate("update_all_macros"), counter);
    counter = 0;
    
    msg = NextMacro();

    while (msg != null) {
        if (msg.Template() == "new_page" ||
            msg.Template() == "new_window")
        {
            LoadUrl(msg.GetParam("dump_page"));
            Sleep(100);
        } else {
            update_msg_(msg);
            log("UPDATE  : " + msg.Template());
        }
        counter++;
        CurProgress(counter);
        msg = NextMacro(msg.TourPosition());
    }
    ProgressEnd();
}

function update_possible_points() {
    var mac = CurrentEvent();
    update_possible_points_(mac);
}

function get_max_score() {
    var msg = NextMacro();

    var max_score = 0;

    for (var i = 0; i < NumTourstops(); i++) {
        var ts = GetTourstop(i);
        var msg = ts.NextMacro();

        var in_form = false;
        var no_count_mode = false;
        var in_quiz_shuffle = 0;

        while (msg != null) {
            var tpl = msg.Template();

            if ((tpl == "quick_click" ||
                 tpl == "click" ||
                 tpl == "click_SAP" ||
                 tpl == "input_text" ||
                 tpl == "select_single" ||
                 tpl == "key_press" ||
                 tpl == "input_radio") &&
                !in_form)
            {
                if (!no_count_mode) max_score += 3;
            } else if (tpl == "quiz_shuffle_on" && msg.GetParam("quiz_selection_type") == "qst_random_choice") {
                in_quiz_shuffle = 1;
                max_score += msg.GetParam("points");
            } else if (tpl == "quiz_shuffle_off") {
                in_quiz_shuffle = 0;
            } else if ((tpl == "mchoice" || tpl == "sqmaquiz" || tpl == "fibquiz" || tpl == "matchquiz" || tpl == "connquiz" ||
                       tpl == "mixquiz" || tpl == "scalequiz" || tpl == "gridquiz" || tpl == "puzzlequiz" || tpl == "hotspotquiz") &&
                       in_quiz_shuffle == 0) {
                max_score += msg.GetParam("points");
            } else if (tpl == "form_on") {
                if (!no_count_mode) max_score += 3;
                in_form = true;
            } else if (tpl == "form_off") {
                in_form = false;
            } else if (tpl == "mode_change") {
                if ((msg.GetParam("in_test_to") == "demo") ||
                    (msg.GetParam("in_test_to") == "praxis") ||
                    (msg.GetParam("in_uebung_to") == "demo") ||
                    (msg.GetParam("in_uebung_to") == "praxis"))
                {
                    no_count_mode = true;
                } else if ((msg.GetParam("in_test_to") == "uebung") ||
                           (msg.GetParam("in_test_to") == "test") ||
                           (msg.GetParam("in_uebung_to") == "uebung") ||
                           (msg.GetParam("in_uebung_to") == "test"))
                {
                    no_count_mode = false;
                }

            }

            msg = ts.NextMacro(msg.TourPosition());
        }

    }
    return max_score;
}

function quiz_sanity_check(m) {
    var ret = [];

    if (m.HasParam("points")) {
        if (parseInt(m.GetParam("points")) < 0) {
            ret.push("   - it is not allowed to enter points < 0");
        }
    }

    if (m.HasParam("qm_file") && m.HasParam("qm_as_question")) {
        var qmf = m.GetParam("qm_file");
        var qmq = m.GetParam("qm_as_question");
        if (qmf != "") {
            var m_type = qmf.split(".")[1];
            if ((m_type == "wma" || m_type == "mp3" || m_type == "wav") && qmq == 1) {
                ret.push("   - mediatype audio not supported with option qm_as_question");
            }
        }
    }

    if (m.HasParam("quiz_timeout") && m.ParamSpecified("quiz_timeout")) {
        var qt = m.GetParam("quiz_timeout");
        if (qt == "" || qt <= 0) {
            ret.push("   - please specify a correct value for quiz timeout");
        }
    }

    return ret;
}

function mchoice_sanity_check(m) {
    var ret = quiz_sanity_check(m);

    var ma = 6;
    var nca = 0;
    for (var i = 1; i <= ma; i++) {
        if (m.GetParam("answer_" + i + "_correct") == true) {
            nca++;
            if (m.GetParam("answer_" + i) == "") {
                ret.push("   - you selected an empty answer to be correct");
            }
        }
    }
    if (nca == 0) {
        ret.push("   - you have to select a correct answer");
    }

    if (ret.length > 0) ret.unshift("mchoice");
    return ret.join("\n");
}

function sqmaquiz_sanity_check(m) {
    var ret = quiz_sanity_check(m);

    var ma = 8;
    var at = m.GetParam("answer_type");
    for (var i = 1; i <= ma; i++) {
        var a = m.GetParam("answer_" + i);
        if (m.GetParam("answer_" + i) != "") {
            if (at == "at_integer") {
                if (a.search(/^(?:<(?:>|=)?|>=?)?\d+$/) == -1 &&
                    a.search(/^\d+-\d+$/) == -1) {
                    ret.push("   - required answer (" + a + ") does not match question type (integer).");
                }
            } else if (at == "at_float") {
                a = a.replace(/,/g, ".");
                if (a.search(/^(?:<(?:>|=)?|>=?)?\d+(?:\.\d+)?$/) == -1 &&
                    a.search(/^\d+(?:\.\d+)?-\d+(?:\.\d+)?$/) == -1) {
                    ret.push("   - required answer (" + a + ") does not match question type (float).");
                }
            }
        }
    }

    if (ret.length > 0) ret.unshift("sqma");
    return ret.join("\n");
}

function fibquiz_sanity_check(m) {
    var ret = quiz_sanity_check(m);

    var ma = 8;
    var qt = m.GetParam("quiz_type");
    if (m.GetParam("fibtext") == "") {
        ret.push("   - text with blanks may not be empty.");
    } else if (m.GetParam("fibtext").search("___") == -1) {
        ret.push("   - text with blanks must include at least one answer-slot '___'.");
    } else {
        var x = m.GetParam("fibtext").split("___");
        var count = 0;
        for (var i = 1; i <= ma; i++) {
            var a = m.GetParam("answer_" + i);
            if (a != "") {
                count++;

                if (qt == "qt_drop_down" || qt =="qt_drag_drop") {
                    var answ = a.split(",");
                    var found_correct = false;
                    for (var j = 0; j < answ.length; j++) {
                        if (answ[j].substr(0,1) == '*') {
                            found_correct = true;
                            break;
                        }
                    }
                    if (found_correct == 0) {
                        ret.push("   - you have to select an answer as correct by using *");
                    }
                }
            }
        }

        if (m.GetParam("one_for_all") == 0) {
            if (count + 1 != x.length) {
                ret.push("   - number of answer-slots '___' and number of answers must be equal.");
            }
            if (m.GetParam("shuffle_solutions") == 1 && (qt == "qt_text" || qt == "qt_cs_text")) {
                ret.push("   - quiz_type '" + qt + "' is not allowed with setting shuffle_solutions.");
            }
        } else {
            if (qt == "qt_text" || qt == "qt_cs_text") {
                ret.push("   - quiz_type '" + qt + "' is not allowed with setting one_for_all.");
            }
            if (m.GetParam("answer_1") == "") {
                ret.push("   - answer_1 may not be empty with setting one_for_all.");
            } else {
                var answ = m.GetParam("answer_1").split(",");
                var count_correct = 0;
                for (var i = j = 0; i < answ.length; i++) {
                    if (answ[i].substr(0, 1) == '*') count_correct++;
                }
                if (count_correct + 1 != x.length) {
                    ret.push("   - number of answer-slots '___' and number of answers must be equal.");
                }
            }
        }
    }

    if (ret.length > 0) ret.unshift("cloze");
    return ret.join("\n");
}

function matchquiz_sanity_check(m) {
    var ret = quiz_sanity_check(m);

    var ma = 8;
    for (var i = 1; i <= ma; i++) {
        var q = m.GetParam("question_" + i);
        var a = m.GetParam("answer_" + i);

        if (q == "" && a != "" || q != "" && a == "") {
            ret.push("   - each question must have an answer and each answer must have a question.");
        }
    }

    if (ret.length > 0) ret.unshift("match");
    return ret.join("\n");
}

function connquiz_sanity_check(m) {
    var ret = quiz_sanity_check(m);

    var ma = 8;
    for (var i = 1; i <= ma; i++) {
        var q = m.GetParam("question_" + i);
        var a = m.GetParam("answer_" + i);

        if (q == "" && a != "" || q != "" && a == "") {
            ret.push("   - each question must have an answer and each answer must have a question.");
        }
    }

    if (ret.length > 0) ret.unshift("connection");
    return ret.join("\n");
}

function mixquiz_sanity_check(m) {
    var ret = quiz_sanity_check(m);

    var ma = 8;
    var ca = 0;
    for (var i = 1; i <= ma; i++) {
        if (m.GetParam("answer_" + i) != "") ca++;
    }
    if (ca < 2) {
        ret.push("   - you have to specify at least two answers!");
    }

    if (ret.length > 0) ret.unshift("mix");
    return ret.join("\n");
}

function scalequiz_sanity_check(m) {
    var ret = quiz_sanity_check(m);

    var a = m.GetParam("answer");
    var r = m.GetParam("range");
    if (a == "") {
        ret.push("   - you have to specify an answer!");
    }
    if (r == "") {
        ret.push("   - you have to specify the range!");
    }
    if (a.search(/^(\d+)$/) == -1 &&
        a.search(/^(\d+)-(\d+)$/) == -1 &&
        a.search(/^<(\d+)$/) == -1 &&
        a.search(/^>(\d+)$/) == -1) {
        ret.push("   - required answer (" + a + ") does not match question type (integer).");
    }
    if (r.search(/^(\d+)-(\d+)$/) == -1) {
        ret.push("   - range (" + r + ") does not match required format (min-max).");
    }
    var h = r.split("-");
    if (h[0] > parseInt(a) || h[1] < parseInt(a)) {
        ret.push("   - answer (" + a + ") is not in range (" + r + ").");
    }

    if (ret.length > 0) ret.unshift("scale");
    return ret.join("\n");
}

function gridquiz_sanity_check(m) {
    var ret = quiz_sanity_check(m);

    var ma = 8;
    var gl = m.GetParam("grid_list");
    if (gl == "") {
        ret.push("   - you have to specify some answers for the grid!");
    }
    for (var i = 1; i <= ma; i++) {
        var a = m.GetParam("answer_" + i);
        var q = m.GetParam("question_" + i);

        if (q == "" && a != "" || q != "" && a == "") {
            ret.push("   - each question must have an answer and each answer must have a question.");
        }
    }

    var h = gl.split(",");
    for (var i = 1; i <= ma; i++) {
        var a = m.GetParam("answer_" + i);
        if (a != "") {
            if (a.search(/^(\d+)$/) == -1) {
                alert("   - your grid answer " + a + " is not required type Integer");
            } else if (parseInt(a) < 1 || parseInt(a) > h.length) {
                alert("   - your grid answer " + a + " is not in 1 - " + h.length + " for grid: " + gl);
            }
        }
    }

    if (ret.length > 0) ret.unshift("grid");
    return ret.join("\n");
}

function puzzlequiz_sanity_check(m) {
    var ret = quiz_sanity_check(m);

    if (m.GetParam("qp_pieces_x") * m.GetParam("qp_pieces_y") > 200) {
        ret.push("   - puzzle is limited to max. 400 pieces!");
    }

    if (ret.length > 0) ret.unshift("puzzle");
    return ret.join("\n");
}

function hotspotquiz_sanity_check(m) {
    var ret = quiz_sanity_check(m);
    if (ret.length > 0) ret.unshift("hotspot");
    
    return ret.join("\n");
}

function onbeforesave() {
    var mac = NextMacro();

    var ret = [];
    for (var i = 0; i < NumTourstops(); i++) {
        var ts = GetTourstop(i);
        var ma = ts.NextMacro();

        while (ma != null) {
            var na = ma.Template();
        
            switch(na) {
                case "mchoice":
                    var r = mchoice_sanity_check(ma);
                    if (r != "") ret.push(r);
                    break;
                case "sqmaquiz":
                    var r = sqmaquiz_sanity_check(ma);
                    if (r != "") ret.push(r);
                    break;
                case "fibquiz":
                    var r = fibquiz_sanity_check(ma);
                    if (r != "") ret.push(r);
                    break;
                case "matchquiz":
                    var r = matchquiz_sanity_check(ma);
                    if (r != "") ret.push(r);
                    break;
                case "connquiz":
                    var r = connquiz_sanity_check(ma);
                    if (r != "") ret.push(r);
                    break;
                case "mixquiz":
                    var r = mixquiz_sanity_check(ma);
                    if (r != "") ret.push(r);
                    break;
                case "scalequiz":
                    var r = scalequiz_sanity_check(ma);
                    if (r != "") ret.push(r);
                    break;
                case "gridquiz":
                    var r = gridquiz_sanity_check(ma);
                    if (r != "") ret.push(r);
                    break;
                case "puzzlequiz":
                    var r = puzzlequiz_sanity_check(ma);
                    if (r != "") ret.push(r);
                    break;
                case "hotspotquiz":
                    var r = hotspotquiz_sanity_check(ma);
                    if (r != "") ret.push(r);
                    break;
            }

            ma = ts.NextMacro(ma.TourPosition());
        }
    }
    if (ret.length > 0) alert("There are errors:\n\n" + ret.join("\n\n"));
    
    if (!mac || mac.Template() != "start_unit") return;

    var max_score = get_max_score();

    var mastery_percent = Project.MasteryScore;
    if (mastery_percent < 0) {
        mastery_percent = 0;
    } else if (mastery_percent > 100) {
        mastery_percent = 100;
    }

    log("MaxScore:" + max_score);
    var mastery = Math.floor((mastery_percent * max_score) / 100);

    log("MasteryPercent: " + mastery_percent);
    log("Mastery: " + mastery);

    mac.SetParam("possible_points", max_score);
    mac.SetParam("mastery_score", mastery);
}

function update_possible_points_(mac) {
    if (mac.Template() != "start_unit") return;

    var msg = NextMacro();

    var max_score = get_max_score();

    var dlg = CreateDialog();
    dlg.SetCaption(ui_trans('capScores'));

    dlg.AddParam("mastery_score_p", ParamType_INTEGER, ui_trans('cfgMasteryScore'));
    dlg.SetParam("mastery_score_p", Project.MasteryScore);

    if (dlg.Show()) {
        var mastery_percent = dlg.GetParam("mastery_score_p");
        if (mastery_percent < 0) {
            mastery_percent = 0;
        } else if (mastery_percent > 100) {
            mastery_percent = 100;
        }

        log("MaxScore:" + max_score);
        var mastery = Math.floor((mastery_percent * max_score) / 100);

        log("MasteryPercent: " + mastery_percent);
        log("Mastery: " + mastery);

        mac.SetParam("possible_points", max_score);
        mac.SetParam("mastery_score", mastery);

        Project.MasteryScore = mastery_percent;
        Project.MaxScore = 100;
    }
}

function prepare_rerecord() {
    var msg = NextMacro();

    var dlg = CreateDialog();

    var i = 0;
    var num_params = 0;

    while (msg != null) {
        var param_name = "param" + i;

        if (msg.Template() == "click_SAP") {
            dlg.AddParam(param_name, ParamType_TEXT_SINGLE, "TCODE");
            dlg.SetParam(param_name, msg.GetParam("transaction_code"));
            num_params++;
        } else if (msg.Template() == "input_text") {
            dlg.AddParam(param_name, ParamType_TEXT_SINGLE, msg.GetParam("fieldname"));
            dlg.SetParam(param_name, msg.GetParam("text_d"));
            num_params++;
        } else if (msg.Template() == "select_single") {
            dlg.AddParam(param_name, ParamType_TEXT_SINGLE, msg.GetParam("fieldname"));
            dlg.SetParam(param_name, msg.GetParam("choose_text"));
            num_params++;
        }

        i++;

        msg = NextMacro(msg.TourPosition());
    }

    if (num_params == 0) {
        MsgBox(ui_trans('msgNoTranslatableParams'),
               ui_trans('capPrepareTranslation'),
               MB_OK | MB_EXCLAMATION);
        return;
    }

    if (dlg.Show()) {
        msg = NextMacro();

        i = 0;

        while (msg != null) {
            var param_name = "param" + i;

            if (msg.Template() == "click_SAP") {
                msg.SetParam("transaction_code", dlg.GetParam(param_name));
            } else if (msg.Template() == "input_text") {
                msg.SetParam("text_d", dlg.GetParam(param_name));
            } else if (msg.Template() == "select_single") {
                msg.SetParam("choose_text", dlg.GetParam(param_name));
            }

            i++;

            msg = NextMacro(msg.TourPosition());
        }
    }
}

function bubble_duration() {
    var msg = NextMacro();

    var dlg = CreateDialog();

    dlg.SetParamNameWidth(160);
    dlg.SetCaption(Translate("bubble_duration_any"));

    dlg.AddParam("bubble_duration", ParamType_INTEGER, Translate("bubble_duration"));//, "", Translate("bubble_duration.h"));
    dlg.AddParam("include_explanation", ParamType_BOOL_TRUE_FALSE, Translate("include_explanation"));//, "", Translate("bubble_duration.h"));

    dlg.SetParamProperty("bubble_duration", "postfix", Translate("seconds"));
    dlg.SetParam("bubble_duration", 3);
    dlg.SetParam("include_explanation", true);

    if (!dlg.Show()) return;

    // var multiply = dlg.GetParam("multiply");
    var new_dur = dlg.GetParam("bubble_duration");
    var include_explanation = dlg.GetParam("include_explanation");

    while (msg != null) {
        if (msg.HasParam("b_duration")) {

            // if (multiply) {
                // msg.SetParam("b_duration", Math.floor((msg.GetParam("b_duration") * new_dur) / 100.0));
            // } else {
            if (msg.Template() != "explanation_long" || include_explanation) {
                msg.SetParam("b_duration", new_dur);
            }
            // }
        }
        msg = NextMacro(msg.TourPosition());
    }

}

function preload_page() {
    var mac = CurrentEvent();

    var window_id = 0;

    if (mac && mac.HasParam("position_h")) {
        rp = mac.GetParam("position_h");
        window_id = rp.WindowID;
    }

    while (mac.Template() != "new_window" && mac.Template() != "new_page") {
        mac = PrevMacro(mac.TourPosition());
    }

    if (mac) {
        if (mac.Template() == "new_window") {

            var evt = CreateEvent("WindowMessage");

            evt.SetParam("relpos", mac.GetParam("dump_win_relpos"));
            evt.SetParam("url", mac.GetParam("dump_page"));
            evt.SetParam("left", mac.GetParam("dump_win_left"));
            evt.SetParam("top", mac.GetParam("dump_win_top"));
            evt.SetParam("width", mac.GetParam("dump_win_width"));
            evt.SetParam("height", mac.GetParam("dump_win_height"));

            evt.Send();
            return true;
        } else if (mac.Template() == "new_page") {
            var evt = CreateEvent("FileUrlMessage");
            evt.SetParam("url", mac.GetParam("dump_page"));

            var rp = CreatePosition(Position_FRAME);
            rp.WindowID = 0;

            evt.SetParam("relpos", rp);
            evt.Send();

            return true;
        }
    }

    return false;
}

function show_position() {
    if (!preload_page()) return;

    var mac = CurrentEvent();

    if (mac.HasParam("position_h")) {
        mac.GetParam("position_h").Show();
    }
}



function edit_jump_targets() {
    var mac = CurrentEvent();
    var ts = GetTourstopAt(mac.TourPosition());

    if (mac.Template() == "branch_off") {
       var msg = ts.PrevMacro(mac.TourPosition());
       while (msg && msg.Template() != "branch_on") {
           msg = ts.PrevMacro(msg.TourPosition());
       }
       if (msg) {
           mac = msg;
       } else {
           MsgBox(ui_trans('msgNoBranchOn'),
                  ui_trans('capNoBranchOn'),
                  MB_OK | MB_STOP);
           return;
       }
    }

    var dlg = CreateDialog();
    dlg.SetCaption(ui_trans('dlgJumpTargets'));

    var index = 0;
    var msg = NextMacro(mac.TourPosition());
    while (msg != null) {
        if (msg.Template() == "quick_click" ||
            msg.Template() == "click" ||
            msg.Template() == "click_SAP" ||
            msg.Template() == "input_text" ||
            msg.Template() == "select_single" ||
            msg.Template() == "key_press" ||
            msg.Template() == "input_radio")
        {
            if (msg.HasParam("fieldname")) {
                dlg.AddParam('par' + index, ParamType_TOURSTOP_NAME, msg.GetParam("fieldname"));
            } else if (msg.HasParam("key_name")) {
                dlg.AddParam('par' + index, ParamType_TOURSTOP_NAME, msg.GetParam("key_name"));
            }
            dlg.SetParam('par' + index, msg.GetParam("jump_target"));
            index++;
        } else if (msg.Template() == "new_page" ||
                   msg.Template() == "branch_off" ||
                   msg.Template() == "branch_on" ||
                   msg.Template() == "form_on" ||
                   msg.Template() == "form_off" ||
                   msg.Template() == "new_window")
        {
            break;
        }
        msg = NextMacro(msg.TourPosition());
    }

    if (index == 0) {
        MsgBox(ui_trans('msgNoTargets'),
               ui_trans('capNoTargets'),
               MB_OK | MB_STOP);
        return;
    }

    dlg.SetSize(400, index * 25 + 80);
    if (dlg.Show()) {
        index = 0;
        msg = NextMacro(mac.TourPosition());
        while (msg != null) {
            if (msg.Template() == "quick_click" ||
                msg.Template() == "click" ||
                msg.Template() == "click_SAP" ||
                msg.Template() == "input_text" ||
                msg.Template() == "select_single" ||
                msg.Template() == "key_press" ||
                msg.Template() == "input_radio")
            {
                var ts_name = dlg.GetParam('par' + index);
                msg.SetParam('jump_target', ts_name);
                index++;
            } else if (msg.Template() == "new_page" ||
                       msg.Template() == "new_window")
            {
                break;
            }
            msg = NextMacro(msg.TourPosition());
        }
    }
}

function create_branch() {
    if (!preload_page()) return;

    var cur = CurrentEvent();
    var ts = GetTourstopAt(cur.TourPosition());

    var last_msg;
    var msg = ts.NextMacro();
    while (msg) {
        if (msg.Template() == "branch_on") {
            MsgBox(ui_trans('msgHaveBranch'), ui_trans('capHaveBranch'), MB_OK | MB_EXCLAMATION);
            return;
        } else if (msg.Template() == "form_on") {
            MsgBox(ui_trans('msgHaveForm') + '\n' + ui_trans('msgFormAndBranch'), ui_trans('capHaveForm'), MB_OK | MB_EXCLAMATION);
            return;
        }
        last_msg = msg;
        msg = ts.NextMacro(msg.TourPosition());
    }

    var rp = RecordPosition(Position_ELEMENT_POS, ui_trans('msgSelectBubblePos'));

    if (rp) {

        var branch_on = CreateMacro("branch_on");
        InsertEventAfter(branch_on);
        var branch_off = CreateMacro("branch_off");

        branch_off.SetParam("position_b", rp);
        branch_off.SetParam("position_bu", rp);

        last_msg = ts.PrevMacro();
        if (last_msg) {
            last_msg.SetCurrent();
            InsertEventAfter(branch_off);
        }

        edit_jump_targets();
    }
}

function create_form() {
    if (!preload_page()) return;

    var cur = CurrentEvent();
    var ts = GetTourstopAt(cur.TourPosition());

    var last_msg;
    var msg = ts.NextMacro();
    while (msg) {
        if (msg.Template() == "form_on") {
            MsgBox(ui_trans('msgHaveForm'), ui_trans('capHaveForm'), MB_OK | MB_EXCLAMATION);
            return;
        } else if (msg.Template() == "branch_on") {
            MsgBox(ui_trans('msgHaveBranch') + '\n' + ui_trans('msgFormAndBranch'), ui_trans('capHaveBranch'), MB_OK | MB_EXCLAMATION);
            return;
        }
        last_msg = msg;
        msg = ts.NextMacro(msg.TourPosition());
    }

    var rp = RecordPosition(Position_ELEMENT_POS, ui_trans('msgSelectBubblePos'));

    if (rp) {

        var form_on = CreateMacro("form_on");
        InsertEventAfter(form_on);
        var form_off = CreateMacro("form_off");

        form_off.SetParam("position_b", rp);
        form_off.SetParam("position_bu", rp);

        last_msg = ts.PrevMacro();
        if (last_msg) {
            last_msg.SetCurrent();
            InsertEventAfter(form_off);
        }
    }

}

function create_quiz() {
    var ts = GetTourstop(CurrentTourstop());

    var last_msg;
    var msg = ts.NextMacro();
    while (msg) {
        if (msg.Template() == "quiz_shuffle_on") {
            MsgBox(ui_trans('msgHaveQuiz'), ui_trans('capHaveQuiz'), MB_OK | MB_EXCLAMATION);
            return;
        } else if (msg.Template() == "form_on") {
            MsgBox(ui_trans('msgHaveForm'), ui_trans('capHaveForm'), MB_OK | MB_EXCLAMATION);
            return;
        } else if (msg.Template() == "branch_on") {
            MsgBox(ui_trans('msgHaveBranch') + '\n' + ui_trans('msgFormAndBranch'), ui_trans('capHaveBranch'), MB_OK | MB_EXCLAMATION);
            return;
        }
        last_msg = msg;
        msg = ts.NextMacro(msg.TourPosition());
    }

        InsertEventAfter(CreateMacro("quiz_shuffle_on"));

        last_msg = ts.PrevMacro();
        if (last_msg) {
            last_msg.SetCurrent();
            InsertEventAfter(CreateMacro("quiz_shuffle_off"));
        }
    //}
}

function remove_branch(mode) {
    var mbres = MsgBox(ui_trans('msgDeleteBranch'),
                       ui_trans('capDeleteBranch'),
                       MB_QUESTION | MB_YESNO);

    if (!mode) mode = "forward";
    if (mbres != IDYES) {
        // MsgBox("dann nich", "mhm", MB_OK);
        return;
    }

    var cur = CurrentEvent();

    var msg = cur;

    var ts = GetTourstopAt(cur.TourPosition());

    if (mode == "forward") {
        while (msg && msg.Template() != "branch_off") {
            if (msg.HasParam("jump_target")) msg.SetParam("jump_target", "");
            msg = ts.NextMacro(msg.TourPosition());
        }
    } else {
        while (msg && msg.Template() != "branch_on") {
            if (msg.HasParam("jump_target")) msg.SetParam("jump_target", "");
            msg = ts.PrevMacro(msg.TourPosition());
        }
    }

    if (!msg) {
        DeleteEvent(cur.TourPosition());
        if (mode == "forward") {
            MsgBox(ui_trans('msgNoBranchOff'), ui_trans('capDeleteBranch'), MB_OK | MB_EXCLAMATION);
        } else {
            MsgBox(ui_trans('msgNoBranchOn'), ui_trans('capDeleteBranch'), MB_OK | MB_EXCLAMATION);
        }
        return;
    }

    var pos = cur.TourPosition();
    DeleteEvent(pos);

    if (mode == "forward") {
        msg = ts.NextMacro(pos);
        while (msg && msg.Template() != "branch_off") {
            msg = ts.NextMacro(msg.TourPosition());
        }
    } else {
        msg = ts.PrevMacro(pos);
        while (msg && msg.Template() != "branch_on") {
            msg = ts.PrevMacro(msg.TourPosition());
        }
    }

    if (msg) {
        DeleteEvent(msg.TourPosition());
    }
}

function remove_form(mode) {
    var mbres = MsgBox(ui_trans('msgDeleteForm'),
                       ui_trans('capDeleteForm'),
                       MB_QUESTION | MB_YESNO);
    if (!mode) mode = "forward";

    if (mbres != IDYES) {
        return;
    }

    var cur = CurrentEvent();

    var msg = cur;

    var ts = GetTourstopAt(cur.TourPosition());

    if (mode == "forward") {
        while (msg && msg.Template() != "form_off") {
            msg = ts.NextMacro(msg.TourPosition());
        }
    } else {
        while (msg && msg.Template() != "form_on") {
            msg = ts.PrevMacro(msg.TourPosition());
        }
    }

    if (!msg) {
        DeleteEvent(cur.TourPosition());
        if (mode == "forward") {
            MsgBox(ui_trans('msgNoFormOff'), ui_trans('capDeleteForm'), MB_OK | MB_EXCLAMATION);
        } else {
            MsgBox(ui_trans('msgNoFormOn'), ui_trans('capDeleteForm'), MB_OK | MB_EXCLAMATION);
        }
        return;
    }

    var pos = cur.TourPosition();
    DeleteEvent(pos);

    if (mode == "forward") {
        msg = ts.NextMacro(pos);
        while (msg && msg.Template() != "form_off") {
            msg = ts.NextMacro(msg.TourPosition());
        }
    } else {
        msg = ts.PrevMacro(pos);
        while (msg && msg.Template() != "form_on") {
            msg = ts.PrevMacro(msg.TourPosition());
        }
    }

    if (msg) {
        DeleteEvent(msg.TourPosition());
    }
}

function remove_quiz_selection(mode) {
    var mbres = MsgBox(ui_trans('msgDeleteQuizSelection'),
                       ui_trans('capDeleteQuizSelection'),
                       MB_QUESTION | MB_YESNO);

    if (!mode) mode = "forward";

    if (mbres != IDYES) {
        return;
    }

    var cur = CurrentEvent();
    var msg = cur;

    var ts = GetTourstopAt(cur.TourPosition());

    if (mode == "forward") {
        while (msg && msg.Template() != "quiz_shuffle_off") {
            msg = ts.NextMacro(msg.TourPosition());
        }
    } else {
        while (msg && msg.Template() != "quiz_shuffle_on") {
            msg = ts.PrevMacro(msg.TourPosition());
        }
    }

    if (!msg) {
        DeleteEvent(cur.TourPosition());
        if (mode == "forward") {
            MsgBox(ui_trans('msgNoQuizSelectionOff'), ui_trans('capDeleteQuizSelection'), MB_OK | MB_EXCLAMATION);
        } else {
            MsgBox(ui_trans('msgNoQuizSelectionOn'), ui_trans('capDeleteQuizSelection'), MB_OK | MB_EXCLAMATION);
        }
        return;
    }

    var pos = cur.TourPosition();
    DeleteEvent(pos);

    if (mode == "forward") {
        msg = ts.NextMacro(pos);
        while (msg && msg.Template() != "quiz_shuffle_off") {
            msg = ts.NextMacro(msg.TourPosition());
        }
    } else {
        msg = ts.PrevMacro(pos);
        while (msg && msg.Template() != "quiz_shuffle_on") {
            msg = ts.PrevMacro(msg.TourPosition());
        }
    }

    if (msg) {
        DeleteEvent(msg.TourPosition());
    }
}

function get_selected_newpages() {
    var selected_macs = [];

    for (var i = 0; i < NumTourstops(); i++) {
        var ts = GetTourstop(i);
        var mac = ts.NextMacro();

        while (mac != null) {

            if (mac.Template() == "new_page" && mac.Selected()) {

                if (mac.HasParam("dump_page")) {
                    var html_page = mac.GetParam("dump_page");

                    html_page = html_page.replace(/\.html/, ".xml");
                    html_page = Project.PagePath + html_page;

                    if (FileExists(html_page)) {
                        selected_macs.push({ts_index: i, macro: mac});
                    } else {
                        log("Non existent file: " + html_page);
                    }
                }
            }

            mac = ts.NextMacro(mac.TourPosition());
        }
    }

    return selected_macs;
}

function get_mac_ctrl(sc_dump, mac) {

    if (mac.HasParam("position_bu")) {
        var rp = mac.GetParam("position_h");

        return sc_dump.GetControl(rp.ElementPath);
    }

    return null;
}

function get_macs_to_insert(selected_macs) {
    var macs_to_insert = [];

    for (var i = 1; i < selected_macs.length; i++) {
        var mac = selected_macs[i].macro;
        var ts = GetTourstop(selected_macs[i].ts_index);
        var xml_page = mac.GetParam("dump_page");

        xml_page = xml_page.replace(/\.html/, ".xml");
        xml_page = Project.PagePath + xml_page;

        var sc_dump = OpenScreendump(xml_page);
        do {
            mac = ts.NextMacro(mac.TourPosition());

            if (mac == null || mac.Template() == "new_page") break;

            var ctrl = get_mac_ctrl(sc_dump, mac);

            macs_to_insert.push({macro:mac, control: ctrl});
        } while(1);
    }

    return macs_to_insert;
}

function get_current_macro(m, ts_index) {
    curr_mac = m;

    var mac = curr_mac;
    var ts = GetTourstop(ts_index);

    do {
        mac = ts.NextMacro(mac.TourPosition());

        if (mac == null || mac.Template() == "new_page") break;

        curr_mac = mac;
    } while(1);

    return curr_mac;
}

function merge_selected_newpages() {
    var selected_macs = get_selected_newpages();

    if (selected_macs.length > 1) {
        var macs_to_insert = get_macs_to_insert(selected_macs);

        for (var i = 0; i < macs_to_insert.length; i++) {
            var my_mac = macs_to_insert[i].macro.Clone();
            DeleteEvent(macs_to_insert[i].macro.TourPosition());
            macs_to_insert[i].macro = my_mac;
        }
        for (var i = selected_macs.length - 1; i > 0; i--) {
            var ts_index = selected_macs[i].ts_index;
            DeleteEvent(selected_macs[i].macro.TourPosition());

            var ts = GetTourstop(ts_index);
            var mac = ts.NextMacro();

            if (mac == null) {
                DeleteTourstop(ts_index);
            }
        }

        var curr_mac = get_current_macro(selected_macs[0].macro, selected_macs[0].ts_index);

        if (curr_mac != null) curr_mac.SetCurrent();

        var xml_page = selected_macs[0].macro.GetParam("dump_page");

        xml_page = xml_page.replace(/\.html/, ".xml");
        xml_page = Project.PagePath + xml_page;

        var sc_dump = OpenScreendump(xml_page);

        for (var i = 0; i < macs_to_insert.length; i++) {
            var mac = macs_to_insert[i].macro;
            var elempath = sc_dump.AddControlExt(macs_to_insert[i].control);

            if (mac.HasParam("position_h")) {
                var rp = mac.GetParam("position_h");

                if (rp.ElementPath != "") {
                    rp.ElementPath = elempath;
                }
                mac.SetParam("position_h", rp);
            }

            if (mac.HasParam("position_b")) {
                var rp = mac.GetParam("position_b");

                if (rp.ElementPath != "") {
                    rp.ElementPath = elempath;
                }
                mac.SetParam("position_b", rp);
            }

            if (mac.HasParam("position_bu")) {
                var rp = mac.GetParam("position_bu");

                if (rp.ElementPath != "") {
                    rp.ElementPath = elempath;
                }
                mac.SetParam("position_bu", rp);
            }

            InsertEventAfter(mac);
        }

        sc_dump.Save();
    }
}

function auto_crop_screenshot() {
    var scmac = CurrentEvent();

    var max = CreateRect(99999, 99999, -1, -1);

    var cur = NextMacro(scmac.TourPosition());

    var valid = 0;
    while (cur &&
           (cur.Template() != "new_page" || !cur.GetParam("doc_enable")) &&
           (cur.Template() != "new_window" || !cur.GetParam("doc_enable")) &&
           (cur.Template() != "screenshot_part" || !cur.GetParam("show_actions")))
    {
        if (cur.Template() != "screenshot_part" &&
            cur.Template() != "new_page" &&
            cur.Template() != "new_window" &&
            cur.HasParam("screenshot_rect"))
        {
            valid ++

            var r = cur.GetParam("screenshot_rect");
            if (r.left < max.left) max.left = r.left;
            if (r.top < max.top) max.top = r.top;
            if (r.right > max.right) max.right = r.right;
            if (r.bottom > max.bottom) max.bottom = r.bottom;
        }

        var cur = NextMacro(cur.TourPosition());
    }

    if (valid == 0) return;

    max.left -= cfg.standard.doc.crop_min_off_l;
    max.top -= cfg.standard.doc.crop_min_off_t;
    max.right += cfg.standard.doc.crop_min_off_r;
    max.bottom += cfg.standard.doc.crop_min_off_b;

    var min_w = cfg.standard.doc.crop_min_w;
    var min_h = cfg.standard.doc.crop_min_h;


    var base_img = CreateImage(Project.DocPath + scmac.GetParam("screenshot_file"));

    // min-size is most screenshot-size
    if (min_w > base_img.width) min_w = base_img.width;
    if (min_h > base_img.height) min_h = base_img.height;

    log("MinW: " + min_w + " MinH: " + min_h);

    // adjust for min-width
    if (max.right - max.left < min_w) {
        var d = min_w - (max.right - max.left);
        max.left -= d/2;
        max.right += (d - d/2);
        log("minw L: " + max.left, " T: " + max.top + " R: " + max.right + " B: " + max.bottom);
    }

    // adjust for min-height
    if (max.bottom - max.top < min_h) {
        var d = min_h - (max.bottom - max.top);
        max.top -= d/2;
        max.bottom += (d - d/2);
        log("minh L: " + max.left, " T: " + max.top + " R: " + max.right + " B: " + max.bottom);
    }

    // don't go out left
    if (max.left < base_img.left) {
        max.right += base_img.left - max.left;
        max.left = base_img.left;
        log("left L: " + max.left, " T: " + max.top + " R: " + max.right + " B: " + max.bottom);
    }

    // don't go out top
    if (max.top < base_img.top) {
        max.bottom += base_img.top - max.top;
        max.top = base_img.top;
        log("top L: " + max.left, " T: " + max.top + " R: " + max.right + " B: " + max.bottom);
    }

    // don't go out right
    if (max.right > base_img.right) {
        max.left -= (max.right - base_img.right);
        max.right = base_img.right;
        if (max.left < base_img.left) max.left = 0;
        log("right L: " + max.left, " T: " + max.top + " R: " + max.right + " B: " + max.bottom);
    }

    // don't go out bottom
    if (max.bottom > base_img.bottom) {
        max.top -= max.bottom - base_img.bottom;
        max.bottom = base_img.bottom;
        if (max.top < base_img.top) max.top = 0;
        log("bottom L: " + max.left, " T: " + max.top + " R: " + max.right + " B: " + max.bottom);
    }

    scmac.SetParam("screenshot_rect", max);

}
