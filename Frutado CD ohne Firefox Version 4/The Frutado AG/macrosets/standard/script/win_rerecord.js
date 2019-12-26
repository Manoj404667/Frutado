#use(config.js)
#use(custom/config.js)
#use(win_helpers.js)
#use(win_record.js)
#use(word_lang.js)
#use(doc_util.js)

var orig_sc_file = "";
var curr_sc_file = "";
var last_elem_type = "";
var keepcrop = true;
var inactiveedit_handled = false;
var replace_bubble_txt = true;
var strict_type_check = true;
var lang_dependent_type = false;
var diff_to_last_x = 0;
var diff_to_last_y = 0;

function rerecord() {
    log("rerecord()");
    var start_pos = 0;
    var dlg = CreateDialog();

    var pl = Project.Language;
    
    dlg.AddParam("rec_lang", ParamType_ENUM, ui_trans('paramReRecordLanguage'));
    for (var i = 0; i < 1000; i++) {
        if (GetLanguageCode(i) == null) break;
        dlg.AddEnumValue("rec_lang", i, GetLanguageName(i));
        if (GetLanguageCode(i) == pl) {
            dlg.SetParam("rec_lang", i);
        }
    }

    dlg.SetSize(320, 270);

    dlg.AddParam("rerecord_wait", ParamType_INTEGER, ui_trans('paramReRecordWait'));
    dlg.SetParam("rerecord_wait", cfg.standard.winrerec.wait);

    dlg.AddParam("from_current", ParamType_BOOL_0_1, ui_trans('paramStartAtCurrentMacro'));

    dlg.AddParam("keepcrop", ParamType_BOOL_0_1, ui_trans('paramKeepCrop'));
    dlg.SetParam("keepcrop", keepcrop);

    dlg.AddParam("interactive", ParamType_BOOL_0_1, ui_trans('paramReRecordInteractive'));
    dlg.SetParam("interactive", cfg.standard.winrerec.interactive);

    dlg.AddParam("replace_txt", ParamType_BOOL_0_1, ui_trans('paramReplaceBubbleTxt'));
    dlg.SetParam("replace_txt", replace_bubble_txt);
    
    dlg.AddParam("strict_type_check", ParamType_BOOL_0_1, ui_trans('paramStrictTypeCheck')); 
    dlg.SetParam("strict_type_check", strict_type_check); 

    dlg.AddParam("lang_dependent_type", ParamType_BOOL_0_1, ui_trans('paramLangDependentType'));
    dlg.SetParam("lang_dependent_type", lang_dependent_type);
    
    dlg.AddParam("check_position", ParamType_BOOL_0_1, ui_trans('paramCheckPosition'));
    dlg.SetParam("check_position", cfg.standard.winrerec.check_position);

    if (dlg.Show()) {
        var rl = dlg.GetParam("rec_lang");
        Project.Language = GetLanguageCode(rl);
        load_project_language();

        if (dlg.GetParam("from_current") && CurrentEvent() != null) {
            var ts = GetTourstop(CurrentTourstop()); 
             
            if (ts != null) { 
                var mac = ts.NextMacro(); 
             
                if (mac != null) { 
                    start_pos = mac.TourPosition(); 
                } else { 
                    start_pos = CurrentEvent().TourPosition();
                }
            }
        }

        keepcrop = dlg.GetParam("keepcrop");
        cfg.standard.winrerec.wait = dlg.GetParam("rerecord_wait");
        cfg.standard.winrerec.interactive = dlg.GetParam("interactive");
        replace_bubble_txt = dlg.GetParam("replace_txt");
        strict_type_check  = dlg.GetParam("strict_type_check");
        lang_dependent_type = dlg.GetParam("lang_dependent_type");
        cfg.standard.winrerec.check_position = dlg.GetParam("check_position");
        
        Sleep(cfg.standard.winrerec.wait);
    } else {

        return;
    }

    WinApp.SetAppForeground();

    if (!cfg.standard.winrerec.interactive) {

        Document.Clear();
        define_proto_styles();
    }

    WinApp.FlushScreen();

    for (var i = 0; i < NumTourstops(); i++) {
        var ok = true;
        var ts = GetTourstop(i);
        var mac = ts.NextMacro();

        if (!cfg.standard.winrerec.interactive) tourstop_to_protocol(ts);

        while (mac != null) {

            if (mac.TourPosition() >= start_pos) {

                set_coming_macro(ts, mac);

                if (WinApp.IsRerecordPause() || WinApp.Stopped()) {

                    WinApp.FlushScreen();

                    return;
                }

                HistoryStartAction("Rerecord Macro: " + mac.Template());

                mac.SetCurrent();

                inactiveedit_handled = false;
                last_click_executed = false;
                click_to_act_done = false;

                if (!rerecord_macro(ts, mac)) {

                    ok = false;
                    break;
                }
            }

            mac = ts.NextMacro(mac.TourPosition());
        }

        if (!ok) break;
    }

    WinApp.FlushScreen();

     if (!cfg.standard.winrerec.interactive) {
        var fn = Project.DocPath + "RerecordProtocol.doc";

        Document.Template = get_doc_template(cfg.standard.doc.template);
        Document.WriteDoc(fn);
    }

    if (ok) {

        alert(ui_trans('msgRerecordSuccess'));
    }

    log("rerecord() - end");
}

function rerecord_macro(ts, mac) {
    ctrl_web_compat = true;
    
    if(mac.Template() == "key_press") {

        if (mac.HasParam("key_name")) {
            if (WinApp.SetKeyCode(mac.GetParam("key_name"))) {
                win_update_keypress(mac, "WINKeyPress", replace_bubble_txt);
                WinApp.SynthesizeKbdEvent();
            }
        }
    } else if (mac.Template() == "new_page") {
        rerecord_asset_macro(ts, mac);
    } else if (mac.HasParam("element_type") && mac.HasParam("screenshot_rect")) {
        var rect = mac.GetParam("screenshot_rect");
        var x = rect.left + (rect.right - rect.left)/2;
        var y = rect.top + (rect.bottom - rect.top)/2;
        var old_type = "";
        var elem_key = "";
        var click_method = get_click_method(mac);
        log("rect_x: " + rect.left);
        if (click_method != "drag" && click_method != "drop" && click_method != "enter") {

            if (win_window_resizable()) {
                if (WinApp.CheckWinSize()) {
                    Sleep(100);
                    update_last_asset(ts, mac);
                }
            }
        }
                
        if (mac.HasParam("elem_key")) {
            elem_key = mac.GetParam("elem_key");
        }
        
        if (mac.HasParam("element_type")) {
            old_type = mac.GetParam("element_type");
        }

        if (mac.HasParam("click_pos")) {
            var click_pos = mac.GetParam("click_pos");

            if (click_pos.x != -1 && click_pos.y != -1) {
                x = click_pos.x;
                y = click_pos.y
            }
        }
        
        if (last_elem_type == "WINButtonCombo" && old_type == "WINCBListItem") {
            log("diff_to_last_x: " + diff_to_last_x);
            log("click_pos.x: " + click_pos.x);
            x = diff_to_last_x + click_pos.x;
            y = diff_to_last_y + click_pos.y;
            log("x: " + x);
        }
       
        WinApp.SetClickPos(x, y);

        var ctrl_from_key = false;
        if (mac.HasParam("rerec_manual") && mac.GetParam("rerec_manual") == true && rerecord_manual(ts, mac, "")) {
            log("rerecord_manual returned true for " + mac.GetParam("element_type"));
        } else if ((elem_key != "" && old_type != "WINCBListItem" && (ctrl_from_key=WinApp.CtrlFromKey(elem_key))) || ((cfg.standard.winrerec.check_position || elem_key == "" || old_type == "WINCBListItem") && capture_ctrl(mac, false, old_type))) {
            
            if (mac.HasParam("action")) {
                var action = mac.GetParam("action");
        
                if (action == "rclick" || action == "rdblclick") {
                    WinApp.CtrlDescriptor = "RightMouse";
                }
            }
    
            var types_equal = check_types_equal(mac);
            var ctrl_rect = WinApp.CtrlRect;
            log("ctrl_rect: " + ctrl_rect.left);
            click_pos = WinApp.ClickPos;
            
            diff_to_last_x = (ctrl_rect.left + (ctrl_rect.right - ctrl_rect.left)/2) - (rect.left + (rect.right - rect.left)/2);
            diff_to_last_y = (ctrl_rect.top + (ctrl_rect.bottom - ctrl_rect.top)/2) - (rect.top + (rect.bottom - rect.top)/2);
            
            x = click_pos.x;
            y = click_pos.y;
                 
            if (types_equal != 0) {
                var found = false;

                if (types_equal == 1 && !cfg.standard.winrec.insert_inactive_edit_macros && !inactiveedit_handled &&
                     (WinApp.CtrlDescriptor == "InactiveEdit" || WinApp.CtrlDescriptor == "ListItem"))
                {
                    inactiveedit_handled = true;
                    WinApp.SetClickPos(x, y);
                    WinApp.SetClickMethod("lclick");
                    WinApp.SynthesizeMouseEvent();

                    Sleep(100);

                    update_last_asset(ts, mac);

                    return rerecord_macro(ts, mac);
                } else if (types_equal == 2 && scan_search_control(mac, old_type)) {
                    found = true; 
                } else if (types_equal == 1 && ctrl_from_key && mac.HasParam("choose_bool")) {
                    
                    if (old_type == "WINCBChecked" || old_type == "WINCBUnchecked") {
                        var new_type = win_elem_xtype();
                        
                        if (new_type == "WINCBChecked" || new_type == "WINCBUnchecked") {
                            WinApp.SetClickPos(x, y);
                            WinApp.SetClickMethod("lclick");
                            WinApp.SynthesizeMouseEvent();
        
                            Sleep(100);
        
                            update_last_asset(ts, mac);
        
                            return rerecord_macro(ts, mac);
                        }
                    }
                }  else if (types_equal == 1 && ctrl_from_key && old_type.indexOf("Scroll") != -1) {
                	log("Old was scroll " + old_type);
                	var new_type = win_elem_xtype();
                        
                    if (new_type.indexOf("Scroll") != -1) {
                    	log("New was scroll " + new_type);
                    	
                    	if (mac.HasParam("click_pos")) {
				            var click_pos = mac.GetParam("click_pos");
				
				            if (click_pos.x != -1 && click_pos.y != -1) {
				                x = click_pos.x;
				                y = click_pos.y;
				                
				                if (capture_ctrl(mac, false, old_type) && (types_equal = check_types_equal(mac)) == 0) {
				                	found = true;
				                }
				            }
				        }
                    
                    }
                } else if (types_equal == 1 && WinApp.CtrlDescriptor == "ClickToActivate" && !click_to_act_done) {
                    click_to_act_done = true;
                    last_click_executed = true;
                    
                    WinApp.SetClickPos(x, y);
                    WinApp.SetClickMethod("lclick");
                    WinApp.SynthesizeMouseEvent();

                    Sleep(100);

                    update_last_asset(ts, mac);

                    return rerecord_macro(ts, mac);
                }
                /*else if (types_equal == 1 && ctrl_from_key && mac.HasParam("choose_bool")) {
                    log("type mismatch but has choose bool");
                    if (old_type == "WINCBChecked" || old_type == "WINCBUnchecked") {
                        log("old type:" + old_type);
                        if (WinApp.SetValue(elem_key, "" + mac.HasParam("choose_bool"))) {
                            log("set value returned true");
                            update_last_asset(ts, mac);

                            return rerecord_macro(ts, mac);
                        }
                    }
                }
                */

                if (!found) {
                    var new_type = win_elem_xtype();

                    if (!handle_ctrl_mismatch(ts, mac, old_type, new_type)) {

                        return false;
                    }
                }
            } else {
                WinApp.SetClickPos(x, y);
            }
        } else if (scan_search_control(mac, old_type)) {
            ;
        } else {
            var orig_file = orig_sc_file;

            if (cfg.standard.winrerec.check_position || elem_key == "") {
                update_last_asset(ts, mac);
            }

            if ((!cfg.standard.winrerec.check_position && elem_key != "") || !capture_ctrl(mac, true, old_type)) {

                restore_last_asset(ts, orig_file, mac);

                if (!handle_ctrl_mismatch(ts, mac, "", "")) {

                    return false;
                }
            }
        }

        if (WinApp.IsRerecordPause() || WinApp.Stopped()) return;

        
        WinApp.SetClickMethod(click_method);

        last_elem_type = win_elem_xtype();

        if (last_elem_type == "WINListBox" && mac.HasParam("choose_text")) {
            if (WinApp.SetValue(elem_key, "" + mac.GetParam("choose_text"))) {
                last_click_executed = true;
            }
            last_click_executed = true;
        }
                    
        if (last_elem_type != "WINEdit" && last_elem_type != "WINComboEdittpcd") {
            update_macro(ts, mac, last_elem_type, click_method);
        }

        // WinApp.SetClickMethod(click_method);
        var num_clicks = 1;
        if (mac.HasParam("click_count")) {
             num_clicks = mac.GetParam("click_count");
             
             if (num_clicks < 1) num_clicks = 1;
        }
        
        if (!last_click_executed) {
            for (var i=0; i < num_clicks; i++) WinApp.SynthesizeMouseEvent();
        }

        if (last_elem_type == "WINEdit" || last_elem_type == "WINComboEdittpcd") {
            var str = "";

            if (mac.HasParam("text_d")) {
                str = mac.GetParam("text_d");
            }

            WinApp.ClearEditField();
            WinApp.SynthesizeString(str);
            
            var confirm_with_enter = false;
            var confirm_with_tab = false;
            var confirm_with_button = false;
            
            if (mac.HasParam("confirmation_enter") && mac.GetParam("confirmation_enter")) {
                confirm_with_enter = true;
            }
                
            if (mac.HasParam("confirmation_tab") && mac.GetParam("confirmation_tab")) {
                confirm_with_tab = true;
            }
            
            if (mac.HasParam("confirmation_button") && mac.GetParam("confirmation_button")) {
                confirm_with_button = true;
            }
            
            update_macro(ts, mac, last_elem_type, click_method);
            
            if (mac.HasParam("confirmation_key")) {
                var keyname = mac.GetParam("confirmation_key");
                
                if (keyname == "enter" || keyname == "tab") {
            	   WinApp.SetKeyCode(keyname);
            	   WinApp.SynthesizeKbdEvent();
            	}
        	}
    	
    	    if (mac.HasParam("confirmation_enter")) {
        	   mac.SetParam("confirmation_enter", confirm_with_enter);
        	}
        	
    	    if (mac.HasParam("confirmation_tab")) {
        	   mac.SetParam("confirmation_tab", confirm_with_tab);
        	}
        	if (mac.HasParam("confirmation_button")) {
        	   mac.SetParam("confirmation_button", confirm_with_button);
        	}
        }

        Sleep(cfg.standard.winrerec.wait);
    }

    return true;
}

function scan_search_control(mac, old_type) {
   log("scan_search_control()");
   var fieldname = "";
   var type_desc = wintype_to_type_desc(old_type);
    
   if (mac.HasParam("fieldname")) { 
        fieldname = mac.GetParam("fieldname");
   } 

   if (lang_dependent_type && fieldname != "") {
        log("scan_search_control " + type_desc.t + "," + type_desc.d + "," + fieldname);
        if (WinApp.FindControl(type_desc.t, type_desc.d, fieldname)) { 
            var rect = WinApp.CtrlRect;
            var x = rect.left + (rect.right - rect.left)/2;
            var y = rect.top + (rect.bottom - rect.top)/2;
         
            WinApp.SetClickPos(x, y);
            log("scan_search_control returning true");
            return true;
        } 
   }/* else if (fieldname == "") { 
   } 
   */ 
   log("scan_search_control returning false");
   return false;
} 

function handle_ctrl_mismatch(ts, mac, old_type, new_type) {

    if (cfg.standard.winrerec.interactive) {

        if (!rerecord_record(ts, mac, old_type, new_type)) {

            if (!WinApp.Stopped()) {

                alert(ui_trans('msgRerecordingStopped'));
            }

            return false;
        } else {

            return true;
        }
    } else {

        if (search_control(ts, mac)) {

            capture_ctrl(mac, true, old_type);

            return true;
        } else {

            mismatch_to_protocol(mac);

            return false;
        }
    }

    return false;
}

function rerecord_record(ts, mac, old_type, new_type) {
    var screenshot_file = "";
    var text = "";

    if (mac.HasParam("screenshot_file")) {

        screenshot_file = mac.GetParam("screenshot_file");
    }

    if (mac.HasParam("explanation_d")) {

        text = mac.GetParamExpanded("explanation_d");
    }

    if (WinApp.RerecordRecord(Project.DocPath + orig_sc_file, Project.DocPath + screenshot_file, text, old_type, new_type)) {

        update_last_asset(ts, mac);

        if (capture_ctrl(mac, true, old_type)) {
            return true;
        }
    }

    return false;
}

function rerecord_manual(ts, mac, old_type) {

    if (WinApp.RerecordManual(old_type)) {

        update_last_asset(ts, mac);

        if (capture_ctrl(mac, true, old_type)) {
            return true;
        }
    }

    return false;
}

function check_types_equal(mac) {
    var mac_type = "";
    var new_type = win_elem_xtype();

    if (mac.HasParam("element_type")) {

        mac_type = mac.GetParam("element_type");
    }

    if (mac_type == new_type || win_types_compatible(mac_type, new_type) || mac_type == "WINRightMouse") {

        if (lang_dependent_type) { 
            var fieldname = ""; 

            if (mac.HasParam("fieldname")) { 
                 fieldname = mac.GetParam("fieldname"); 
            } 
             
            if (WinApp.CtrlFieldname == fieldname) { 
                 return 0; 
            } else { 
                 return 2; 
            } 
        } 
         
        return 0; 
    } else {
        var hdl_obj = hmap[mac_type];

        if (hdl_obj == null) {

            if (mac_type == WinApp.CtrlType || !strict_type_check) {
                return 0;
            }
        }
    }

    return 1;
}

function get_click_method(mac) {
    var click_method = "lclick";
    var type = "";

    if (mac.HasParam("element_type")) {

        type = mac.GetParam("element_type");
    }

    var hdl_obj = hmap[type];

    if (hdl_obj == null) {

        hdl_obj = hmap[win_elem_xtype()];

        if (hdl_obj != null) {

            click_method = hdl_obj.click_method;
        }
    } else {

        if (mac.HasParam("action")) {

           click_method = mac.GetParam("action");
        }
    }

    return click_method;
}

function capture_ctrl(mac, capture_text, old_type) {
    var rclick = false;

    if (mac.HasParam("action")) {
        var action = mac.GetParam("action");

        rclick = (action == "rclick" || action == "rdblclick");
    }

    if (last_elem_type == "WINButtonCombo") {
        
        if (WinApp.CaptureControl() && WinApp.CtrlDescriptor == "ComboBoxListItem") {
            ;
        } else if (WinApp.CaptureTextControl()) {
            WinApp.CtrlDescriptor = "ComboBoxListItem";
        } else {
            WinApp.CreateDefaultControl(false, mac.GetParam("screenshot_rect"));
            WinApp.CtrlDescriptor = "ComboBoxListItem";
        }
        
        return true;
    } else if (WinApp.CaptureControl()) {

        if (old_type != "WINEdit") {
            combo_check();
        }

        if (!inactiveedit_handled) {
            inactive_edit_check();
        }

        if (rclick) {
            WinApp.CtrlDescriptor = "RightMouse";
        }

        return true;
    } else if (capture_text && WinApp.CaptureTextControl()) {

        if (rclick) {
            WinApp.CtrlDescriptor = "RightMouse";
        } else {
            WinApp.CtrlDescriptor = "Text";
        }

        return true;
    } else if (capture_text && rclick) {
        WinApp.CreateDefaultControl(false, mac.GetParam("screenshot_rect"));
        WinApp.CtrlDescriptor = "RightMouse";

        return true;
    }

    return false;
}

function update_macro(ts, mac, type, click_method) {
    log("update macro: " + type);
    var hdl_obj = hmap[type];

    if (hdl_obj != null) {

        WinApp.SaveControl();

        if (type == "WINTransCode") {
            var prev_mac = ts.PrevMacro(mac.TourPosition());

            if (prev_mac != null && prev_mac.Template() == "transaction_info") {

                if (prev_mac.HasParam("tcode")) {

                    prev_mac.SetParam("tcode", WinApp.CtrlFieldname);
                }
            }
        }

        hdl_obj.update(mac, type, replace_bubble_txt);

        if (mac.HasParam("action")) {
            mac.SetParam("action", click_method);
        }

        if (mac.HasParam("element_type")) {
            mac.SetParam("element_type", type);
        }
    } else {
        log("update macro: " + last_elem_type + "not in hmap");
    }
}

function search_control(ts, mac) {
    var rect = mac.GetParam("screenshot_rect");
    var screen_rect = WinApp.ScreenRect;
    var dx = (rect.right - rect.left)/2;
    var dy = (rect.bottom - rect.top)/2
    var x = rect.left + dx;
    var y = rect.top + dy;
    var first_x = -1;
    var first_y = -1;
    var found = false;
    var fieldname = "";

    if (mac.HasParam("fieldname")) {

        fieldname = mac.GetParam("fieldname");
    }

    WinApp.ResetSearchInteractive();

    for (var i = 0; i < cfg.standard.winrerec.search_factor; i++) {

        if (WinApp.IsRerecordPause() || WinApp.Stopped()) return false;

        if (WinApp.SearchInteractive()) {

            return rerecord_record(ts, mac, "", "");
        }

        var x1 = x - (i * dx);
        var y1 = y - (i * dy);
        var x2 = x + (i * dx);
        var y2 = y + (i * dy);

        if (x1 < 1) x1 = 1;
        if (y1 < 1) y1 = 1;
        if (x2 > screen_rect.right) x2 = screen_rect.right;
        if (y2 > screen_rect.bottom) y2 = screen_rect.bottom;

        for (var my_x = x1; my_x <= x2 ; my_x += dx) {

            if (WinApp.IsRerecordPause() || WinApp.Stopped()) return false;

            if (WinApp.SearchInteractive()) {

                return rerecord_record(ts, mac, "", "");
            }

            if (compare_type_from_point(mac, my_x, y1, screen_rect)) {

                if (!cfg.standard.winrerec.new_release) return true;

                if (fieldname == WinApp.CtrlFieldname) {

                    return true;
                } else if (first_x == -1) {

                    first_x = my_x;
                    first_y = y1;
                }
            }

            if (compare_type_from_point(mac, my_x, y2, screen_rect)) {

                if (!cfg.standard.winrerec.new_release) return true;

                if (fieldname == WinApp.CtrlFieldname) {

                    return true;
                } else if (first_x == -1) {

                    first_x = my_x;
                    first_y = y2;
                }
            }
        }

        for (var my_y = y1; my_y <= y2 ; my_y += dy) {

            if (WinApp.IsRerecordPause() || WinApp.Stopped()) return false;

            if (WinApp.SearchInteractive()) {

                return rerecord_record(ts, mac, "", "");
            }

            if (compare_type_from_point(mac, x1, my_y, screen_rect)) {

                if (!cfg.standard.winrerec.new_release) return true;

                if (demo_txt == WinApp.CtrlFieldname) {

                    return true;
                } else if (first_x == -1) {

                    first_x = x1;
                    first_y = my_y;
                }
            }

            if (compare_type_from_point(mac, x2, my_y, screen_rect)) {

                if (!cfg.standard.winrerec.new_release) return true;

                if (demo_txt == WinApp.CtrlFieldname) {

                    return true;
                } else if (first_x == -1) {

                    first_x = x2;
                    first_y = my_y;
                }
            }
        }
    }

    if (first_x != -1) {

        compare_type_from_point(mac, first_x, first_y, screen_rect);

        return true;
    }

    return false;
}

function compare_type_from_point(mac, x, y, screen_rect) {

    if (screen_rect.PtInRect(x, y)) {

        WinApp.SetClickPos(x, y);

        if (WinApp.CaptureControl()) {

            combo_check();
            inactive_edit_check();

            return check_types_equal(mac) == 0;
        }
    }

    return false;
}

function demo_txt_from_type() {
    var type = win_elem_xtype();
    var hdl_obj = hmap[type];

    if (hdl_obj != null) {
        var mac = hdl_obj.handler(type);

        if (mac.HasParam("explanation_d")) {

            return mac.GetParam("explanation_d");
        }
    }

    return "";
}

function update_last_asset(ts, mac) {
    var asset_mac = ts.PrevMacro(mac.TourPosition());

    while (asset_mac != null) {

        if (asset_mac.Template() == "new_page") {

            rerecord_macro(ts, asset_mac);

            return;
        }

        asset_mac = ts.PrevMacro(asset_mac.TourPosition());
    }
}

function restore_last_asset(ts, orig_file, mac) {
    var asset_mac = ts.PrevMacro(mac.TourPosition());

    while (asset_mac != null) {

        if (asset_mac.Template() == "new_page") {

            orig_sc_file = orig_file;

            if (asset_mac.HasParam("screenshot_file")) {

                asset_mac.SetParam("screenshot_file", orig_file);
            }

            return;
        }

        asset_mac = ts.PrevMacro(asset_mac.TourPosition());
    }
}

function set_coming_macro(ts, mac) {
    var sc_file = "";
    var ctrl_file = "";
    var ctrl_text = "";
    var next_mac = null;

    if (mac.Template() == "new_page") {

        if (mac.HasParam("screenshot_file")) {

            sc_file = mac.GetParam("screenshot_file");
        }

        next_mac = ts.NextMacro(mac.TourPosition());

        while (next_mac != null && !next_mac.HasParam("screenshot_rect")) {

            next_mac = ts.NextMacro(next_mac.TourPosition());
        }
    } else {

        sc_file = orig_sc_file;

        if (!mac.HasParam("screenshot_rect")) {

            next_mac = ts.NextMacro(mac.TourPosition());

            while (next_mac != null && !next_mac.HasParam("screenshot_rect")) {

                next_mac = ts.NextMacro(next_mac.TourPosition());
            }
        } else {

            next_mac = mac;
        }
    }

    if (next_mac != null) {

        if (next_mac.HasParam("screenshot_file")) {

            ctrl_file = next_mac.GetParam("screenshot_file");
        }

        if (next_mac.HasParam("explanation_d")) {

            ctrl_text = next_mac.GetParam("explanation_d");
        }
    }

    WinApp.SetNextAsset(Project.DocPath + sc_file, Project.DocPath + ctrl_file, ctrl_text);
}

function define_proto_styles() {

    // TCODE
    Document.SetCurrCellStyle("standard_cell");
    Document.CellWidth = 360.0;

    Document.SetCurrCellStyle("small_cell");
    Document.CellWidth = 90.0;

    Document.SetCurrRowStyle("standard_row");
    Document.RowHeight = 12.0;
    Document.SetRowCellStyles("small_cell", "standard_cell");

    Document.SetCurrTableStyle("TCODE");
    Document.TableBorder = 0;
    Document.TablePreferredWidth = 500.0;
    Document.TableSpacing = 14.0;
    Document.TableRowStyle = "standard_row";

    // HINWEIS
    Document.SetCurrCellStyle("extra_image_cell");
    Document.CellWidth = 56.7;
    Document.CellLeftPad = 3.5;
    Document.CellRightPad = 3.5;
    Document.CellTopPad = 3.5;
    Document.CellBottomPad = 3.5;

    Document.SetCurrCellStyle("extra_text_cell");
    Document.CellWidth = 375.6;
    Document.CellBgColor = 0xe0e0e0;
    Document.CellLeftPad = 3.5;
    Document.CellRightPad = 3.5;
    Document.CellTopPad = 3.5;
    Document.CellBottomPad = 3.5;

    Document.SetCurrRowStyle("extra_row");
    Document.RowHeight = 34.0;
    Document.SetRowCellStyles("extra_image_cell", "extra_text_cell");

    Document.SetCurrTableStyle("extra");
    Document.TableLeftIndent = cfg.standard.doc.hinweis_left_indent;
    Document.TableBorder = 4;
    Document.TablePreferredWidth = 432.3;
    Document.TableSpacing = 0.0;
    Document.TableRowStyle = "extra_row";

    Document.BeginList(word_trans('para_list'));
    Document.EndList();
}

function tourstop_to_protocol(ts) {
    var text = ts.Caption;

    if (text != "") {

        Document.BeginParagraph(word_trans('para_heading') + (cfg.standard.doc.singledoc_headinglevel + 1));
        Document.AddText(text);
        Document.EndParagraph();
    }
}

function mismatch_to_protocol(mac) {
    var type = "";
    var screenshot_file = "";

    if (mac.HasParam("element_type")) {

        type = mac.GetParam("element_type");
    }

    if (mac.HasParam("screenshot_file")) {

        screenshot_file = mac.GetParam("screenshot_file");
    }

    Document.BeginParagraph(word_trans('standard'));
    Document.AddHtmlText("<b>Screen Mismatch</b><br>");
    Document.EndParagraph();

    Document.BeginParagraph(word_trans('standard'));
    Document.AddText("Control Type: " + type);
    Document.EndParagraph();

    Document.BeginParagraph(word_trans('standard'));
    Document.AddText("Image: ");
    Document.AddImage(Project.DocPath + screenshot_file, -1, -1, "");
    Document.EndParagraph();

    Document.BeginParagraph(word_trans('standard'));
    Document.AddHtmlText("<br>Original:");
    Document.EndParagraph();

    Document.BeginParagraph(word_trans('para_image'));
    Document.AddImage(Project.DocPath + orig_sc_file, -1, -1, "");
    Document.EndParagraph();

    Document.BeginParagraph(word_trans('standard'));
    Document.AddHtmlText("<br>Current:");
    Document.EndParagraph();

    Document.BeginParagraph(word_trans('para_image'));
    Document.AddImage(Project.DocPath + curr_sc_file, -1, -1, "");
    Document.EndParagraph();
}

function rerecord_asset_macro(ts, mac) {
    var rect = null;

    WinApp.FlushScreen();
    WinApp.CaptureScreen();
    curr_page_key = WinApp.GetPageKey();

    ts.Caption = WinApp.Title;

    if (mac.HasParam("screenshot_file")) {

        orig_sc_file = mac.GetParam("screenshot_file");
    }

    if (mac.HasParam("screenshot_rect")) {

        rect = mac.GetParam("screenshot_rect");
    }

    win_update_asset(mac);

    if (mac.HasParam("screenshot_file")) {

        curr_sc_file = mac.GetParam("screenshot_file");
    }

    var new_rect = WinApp.ScreenRect;
    var set_crop = true;
    
    if (new_rect != null) {
        set_crop = !(rect.left < new_rect.left || rect.top < new_rect.top || rect.right > new_rect.right || rect.bottom > new_rect.bottom);
    }
    
    if (keepcrop && rect != null && set_crop) {
        mac.SetParam("screenshot_rect", rect);
    }
}
