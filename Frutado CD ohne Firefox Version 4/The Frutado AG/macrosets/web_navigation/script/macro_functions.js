#use(config.js)
#use(custom/config.js)
// #use(word_lang.js)

#use(relpos_helpers.js)

#use(ui_lang.js)
#use(lang.js)

#use(hmap.js)

#use(ctx_dummy.js)
#use(../../../projects/standard_defaults.js)

#use(../StringTemplates.js)
#use(../Util.js)
#use(../MacroDepot.js)


var dd = Date();
var bubble_index = 1;
var DatangoID = '';
var DatangoIDFramePath = '';



function append_event(msg) {
    InsertEventAfter(msg);
}

function ScaledRect(rp) {
    var rect = rp.GetRect();

    var rp_div = CreatePosition(Position_ELEMENT_POS);
    rp_div.FramePath = rp.FramePath;
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
        var window_id = CurrentBrowser();
        sc_fn = GetUniqueFilename(Project.DocPath, "PART_", ".gif");
        var sc = ImageScreenshot(Project.DocPath + sc_fn, window_id);
        sc_rect = sc.rect.Clone();

        ok = true;
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
    rp_div.FramePath = rp.FramePath;
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


function mac_as_js(mac) {
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
            mac.ParamType(i) == ParamType_FILENAME_PAGE_REL)
        {
            params[mac.ParamName(i)] = mac.GetParam(i);
            log(i + ": " + mac.ParamName(i) + ' = ' + mac.GetParam(i));
        }
    }
    return params;
}

function edit_bubble() {    
    if (!preload_page()) return;
    
    var mac = CurrentEvent();
    var text;

   /* 
    if (ExpertFeature("OldMacroImpl")) {    	  
        text = mac.PreTranslateString("bubbletext_d");
    } else {  
        // UpdateParams(mac);
        // text = ctx.h.EVAL_TEMPLATE("bubbletext_d", mac_as_js(mac));
    }*/    
    
    BubbleEditor.Position = mac.GetParam("position_b");
    BubbleEditor.Width = mac.GetParam("b_width");
    BubbleEditor.Height = mac.GetParam("b_height");
    BubbleEditor.HtmlText = mac.GetParam("explanation_d"); //text;
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
        BubbleEditor.HtmlText = ctx.h.EVAL_TEMPLATE("bubbletext_p", mac_as_js(mac));
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

function record_explanation() {
    //select_project_language();
    //preload_page();

    var rp = RecordPosition(Position_ELEMENT_RECT, "SelectPosition");

    if (rp != null) {
        var txtDialog = CreateDialog();

        txtDialog.SetCaption("Explanation");
        txtDialog.AddParam("msg", ParamType_HTML, "Text");                                  
        txtDialog.SetSize(400, 360);
        var ok = txtDialog.Show();

        if (ok) {
            HistoryStartAction("Explanation");

            var demo_value = txtDialog.GetParam("msg");           
            var new_mac = CreateMacro("explanation");

            new_mac.SetParam("explanation_d", demo_value);                    
            set_positions(new_mac, rp);                    

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

    HtmlDumper.Dump(window_id)    
    var name = window_name(window_id); 
    var macNewPage = CreateMacro("page_init");

    macNewPage.SetParam("new_step", name);
    macNewPage.SetParam("dump_page", HtmlDumper.filename);

    var sc_fn = GetUniqueFilename(Project.DocPath, "PAGE_", ".gif");
    var sc = ImageScreenshot(Project.DocPath + sc_fn, window_id, 4);
    macNewPage.SetParam("screenshot_file", sc_fn);

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
    macNewWin.SetParam("screenshot_border", cfg.standard.doc.screenshot_border);

    append_event(macNewWin);
    sc.Destroy();
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

        txtDialog.SetCaption(ui_trans('macExplanationLong'));
        txtDialog.AddParam("demo_msg", ParamType_HTML, ui_trans('paramExplanationDemo'));
        txtDialog.AddParam("all_like_demo", ParamType_BOOL_0_1);
        txtDialog.AddParam("uebung_msg", ParamType_HTML, ui_trans('paramExplanationPrac'));
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
            //new_mac.SetParam("position_b", rp);


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
        mac.SetParam("screenshot_border", cfg.standard.doc.screenshot_border);

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
    dlg.AddParam("key_name", ParamType_TEXT_SINGLE, ui_trans('paramKeyName'));

    if (dlg.Show()) {
        var mac = CreateMacro("key_press");
        mac.SetParam("key_name", dlg.GetParam("key_name"));
        var p = CreatePosition();
        p.WindowID = ForegroundBrowser();
        mac.SetParam("position_h", p);

        if (mac.HasParam("b_duration")) {
            mac.SetParam("b_duration", cfg.standard.rec.default_bubble_duration);
        }

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
    dlg.AddParam("jump_target", ParamType_TOURSTOP_CAPTION, ui_trans('paramJumpTarget'));
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
    var msg = NextMacro();

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
        msg = NextMacro(msg.TourPosition());
    }
}


function preload_page() {
  
    var mac = CurrentEvent();

    var window_id = 0;
  
    if (mac.HasParam("position_h")) {
        rp = mac.GetParam("position_h");
        window_id = rp.WindowID;
    }

    while (mac.Template() != "new_window" && mac.Template() != "new_page"&& mac.Template() != "page_init") {
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
        } else {        	
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

function onbeforesave() {
    var mac = NextMacro();

    if (!mac || mac.Template() != "start_unit") return;

    var msg = NextMacro();

    var max_score = 0;

    while (msg != null) {
        if (msg.Template() == "quick_click" ||
            msg.Template() == "click" ||
            msg.Template() == "click_SAP" ||
            msg.Template() == "input_text" ||
            msg.Template() == "select_single" ||
            msg.Template() == "key_press" ||
            msg.Template() == "input_radio")
        {
            max_score += 3;
        }
        msg = NextMacro(msg.TourPosition());
    }

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
            dlg.AddParam('par' + index, ParamType_TOURSTOP_CAPTION, msg.GetParam("fieldname"));
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


//------------- 

function start_navi() {
    if (NumTourstops() > 0 && GetTourstop(0).Caption == "Navi Init") {
        alert("Navi-Init muss pro Projekt nur einmal aufgerufen werden");
        return;
    }

    AddTourstop("Navi Init", Tourstop_SHOW_NOJUMP); 
   
   
    var macInitB = CreateMacro("USE_HELP");
    InsertEventAfter(macInitB);
   
   
    var macInitB = CreateMacro("navi_initB");
    InsertEventAfter(macInitB);

    AddTourstop("Navi Exit", Tourstop_SHOW_NOJUMP);

    var macFini = CreateMacro("navi_fini");
    InsertEventAfter(macFini);
};

function label_match(innertext, label) {
    if (label == "") return false;

    var labels = label.split("#");

    for (i = 0; i < labels.length; i++) {
        if (innertext.indexOf(labels[i]) == -1) return false;
    }

    return true;
}

function navi_get_ts_by_title_label(title, label) {
    var ts0 = GetTourstop(0)

    var m = ts0.NextMacro();

    while (m && (m.Template() != "define_target" || m.GetParam("title") != title || m.GetParam("label") != label)) {
        m = ts0.NextMacro(m.TourPosition());
    }

    if (m == null || m.Template() != "define_target") return 0;

    var ts_tit = m.GetParam("ts");

    var i = 2;
    var ts;
    while (i < NumTourstops() && (ts = GetTourstop(i)) && ts.Caption != ts_tit) { 
        i++;
    }

    return ts;
}

function navi_add_frame_tourstop(ts_caption, frame_path) {
    
    var ts = AddTourstop(ts_caption, Tourstop_SHOW_JUMP);
    
    if ((DatangoIDFramePath != '')&& (DatangoIDFramePath != frame_path)) {
      var macInit = CreateMacro("set_efp");
      macInit.SetParam("efp", DatangoIDFramePath);
      InsertEventAfter(macInit);	    	
    }	
    
    var macInit = CreateMacro("set_efp");
    macInit.SetParam("efp", frame_path);
    InsertEventAfter(macInit);
    record_newpage();

    var macFine = CreateMacro("page_fini");
    InsertEventAfter(macFine);
    
    return ts;
}

function navi_add_target(ts_caption, frame_title, frame_label, ts_dgoid) {
    
    if (NumTourstops() == 0) return;
    
    var ts0 = GetTourstop(0);
    var m = ts0.NextMacro();
    
    if (m == null) return;
    
    var mac = CreateMacro("define_target");
    mac.SetParam("ts", ts_caption);
    mac.SetParam("title", frame_title);
    mac.SetParam("label", frame_label);
    mac.SetParam("dgoid", ts_dgoid);
    
    SetCurrEvent(m.TourPosition());   

    InsertEventAfter(mac);
}

function CheckDatangoID(_rp){  
  
   var dgoid = _rp.ExecScript("document.getElementById('input_datangoid')");	    	 	 
	 var FramePath = _rp.FramePath; 
	 DatangoID = '';
	 DatangoIDFramePath = '';	 
	 
	 if (dgoid != 'null') {	    	  	 		    	
	    	DatangoID = _rp.ExecScript("document.getElementById('input_datangoid').value");	    	
	    	DatangoIDFramePath = FramePath; 	    	
	    	return true;	 
	 }	  	 
	 
	 var doc = 'parent.window.document'; 	 	        
	 while(FramePath != ''){	 	 	 	 	 	 	 
	 	 FramePath = FramePath.substr(0,FramePath.length-2);  	 	  
	   dgoid = _rp.ExecScript(doc +".getElementById('input_datangoid')");	    	    
     
	   if (dgoid != 'null') {    		    	
	    	DatangoID = _rp.ExecScript(doc +".getElementById('input_datangoid').value");	
	    	DatangoIDFramePath = FramePath; 	    	    	
	    	return true;  
	    }
	    doc = 'parent.' + doc; 	    	    
	 }	 	 
   return false; 	
} 

function navi_add_tourstop(){  
    var rp = RecordPosition(Position_ELEMENT_POS, "Position");    
  /*  if (rp == null) return;
    var title = rp.ExecScript("document.title");         
    CheckDatangoID(rp);    */
      
    var ts = window_name(ForegroundBrowser());               
    
    var dlg = CreateDialog();
    dlg.AddParam("title", ParamType_TEXT_SINGLE, "Seiten-Titel");
    dlg.AddParam("label", ParamType_TEXT_SINGLE, "Seiten-Label");
    dlg.AddParam("ts_caption",ParamType_TEXT_SINGLE , "Tourstop-Name");
    dlg.AddParam("dgoid", ParamType_TEXT_SINGLE, "Datango-ID");
    dlg.SetParam("title", ts);
    dlg.SetParam("ts_caption", ts); 
    //dlg.SetParam("dgoid", DatangoID);      
    dlg.Show();      
    label = dlg.GetParam("label");
    var dgoid = dlg.GetParam("dgoid");
    var ts_caption = dlg.GetParam("ts_caption"); 
    var title = dlg.GetParam("title");             
            
    ts = navi_add_frame_tourstop(ts_caption, rp.FramePath);          
    navi_add_target(ts.Caption, title, label, dgoid);
    

} 

// kann evtl raus

function navi_add_bubble() {
    var rp = RecordPosition(Position_ELEMENT_POS, "Bubbleposition");

    if (rp == null) return;

    var title = rp.ExecScript("document.title");

    var ts = navi_get_ts_by_title_innertext(title, rp.ExecScript("document.body.innerText"));
    CheckDatangoID(rp); 
    
    if (!ts) {
        var dlg = CreateDialog();
        dlg.AddParam("title", ParamType_TEXT_SINGLE, "Seiten-Titel");
        dlg.AddParam("label", ParamType_TEXT_SINGLE, "Seiten-Label");
        dlg.AddParam("ts_caption", ParamType_TEXT_SINGLE, "Tourstop-Titel");
        dlg.AddParam("dgoid", ParamType_TEXT_SINGLE, "Datango-ID"); 
        dlg.SetParam("title", title);
        dlg.SetParam("ts_caption", title);
        dlg.SetParam("dgoid", DatangoID);
        dlg.Show();

        label = dlg.GetParam("label");
        var ts_caption = dlg.GetParam("ts_caption");

        ts = navi_add_frame_tourstop(ts_caption, rp.FramePath);        
        navi_add_target(ts.Caption, title, label, dgoid);
    }

    if (ts == null) return;

    var bub = CreateMacro("explanation");
    bub.SetParam("position_b", rp);
    bub.SetParam("bubble_name", dd + bubble_index ++);

    var dlg = CreateDialog();
    dlg.SetCaption("Bubbletext");
    dlg.AddParam("bubbletext", ParamType_HTML, "Bubbletext");
    dlg.SetSize(300,250);
    if (dlg.Show()) bub.SetParam("explanation_d", dlg.GetParam("bubbletext"));

    BubbleEditor.Position = bub.GetParam("position_b");
    BubbleEditor.Width = bub.GetParam("b_width");
    BubbleEditor.Height = bub.GetParam("b_height");
    BubbleEditor.HtmlText = bub.PreTranslateString("bubbletext_d");
    BubbleEditor.Orientation = bub.GetParam("orientation");
    BubbleEditor.Movable = true;
    BubbleEditor.Closable = true;
    BubbleEditor.Minimizable = true;
    BubbleEditor.Transparent = false;
    BubbleEditor.EditMask = 1;
    BubbleEditor.EditMode = 1;

    if (BubbleEditor.EditBubble()) {
        bub.SetParam("b_width"      , BubbleEditor.Width      );
        bub.SetParam("b_height"     , BubbleEditor.Height     );
        bub.SetParam("orientation"  , BubbleEditor.Orientation);
        // mac.SetParam("explanation_d", BubbleEditor.HtmlText   );

        rp = BubbleEditor.Position;


    }

    var page_init = ts.NextMacro();
    var rpbase;
    if (page_init.Template() == "page_init") {
        efp = page_init.GetParam("efp");
        rp.FramePath = efp;

        /* XXX fix framepath ??
        if (rp.FramePath.substr(0, efp.length) == efp) {
            alert("MATCH\n" + rp.FramePath + "<==>" + efp);
        } else {
            alert("NOMATCH\n" + rp.FramePath + "<==>" + efp);
        }
        */
    }

    bub.SetParam("position_b", rp);

    SetCurrEvent(page_init.TourPosition());
    SetCurrEvent(page_init.TourPosition());
    InsertEventAfter(bub);

}

//------------------------------------- old end