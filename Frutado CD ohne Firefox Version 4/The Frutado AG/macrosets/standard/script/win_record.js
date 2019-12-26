#use(config.js)

#use(hmap.js)

#use(win_helpers.js)

var last_ctrl_desc = "";
var macro_in_buff = false;
var last_ts_index = -1;
var inactive_edit_handled = false;
var last_was_scroll_button = false;
var scroll_count = 0;
var scroll_button_rect = null;
var keypress_noremind = false;
var ctrl_web_compat = true;
var last_click_executed = false;
var click_to_act_done = false;
var no_next_asset = false;
var last_asset_mac = null;
var last_combo_values = "";
var mledit_old_value = "";
var curr_page_key = "";

function start_win_recording() {
    
    if (!WinApp.CanHaveWebAsset()) {
        log("recording mode is screendump");
        Project.SetTourProperty(0, "recording_mode", "screendump");
        Project.SetTourProperty(1, "recording_mode", "screendump");
        Project.SetTourProperty(2, "recording_mode", "screendump");
        Project.SetTourProperty(3, "recording_mode", "screendump");
    } else {
        log("recording mode is not screendump");
        Project.DeleteTourProperty(0, "recording_mode");
        Project.DeleteTourProperty(1, "recording_mode");
        Project.DeleteTourProperty(2, "recording_mode");
        Project.DeleteTourProperty(3, "recording_mode");
    }
    
    WinApp.MouseEventGulp = false;
    
    if (!select_project_language()) {
        WinApp.Stop();
        
        return;
    }
    
    WinApp.MouseEventGulp = true;
    
    win_check_remove_end_macro();
    
    WinApp.RevertState();
    
    do {
        log("Get next action");
        var action = WinApp.GetNextAction();
        
        WinApp.SetCurrentAction(action);
        WinApp.SetBusyState();
        
        if (action.type == 1) {
            
            if (action.subtype == 2) {
                log("Got action stop");
                HistoryStartAction();
                stop_win_recording();
                break;
            } else if (action.subtype == 8) {
                log("Start mouse record");
                WinApp.SetMouseRecord(true);
            } else if (action.subtype == 9) {
                log("Stop mouse record");
                WinApp.SetMouseRecord(false);
            }
        } else if (action.type == 2) {
            log("Got action click - " + action.click_type);
            if (action.click_type == "dragging") {
                WinApp.SynthesizeMouseEvent();
            } else {
                var win_adjusted = false;
                
                if (action.click_type != "drag" && action.click_type != "drop" && action.click_type != "enter") {
                    
                    if (win_window_resizable()) {
                        win_adjusted = WinApp.CheckWinSize();
                    }
                    log("window adjusted: " + win_adjusted);
                }
                
                if (!win_adjusted) {
                    HistoryStartAction();
                    click_in_app();
                }
            }
        } else if (action.type == 3) {
            log("Got action keypress");
            HistoryStartAction();
            keypress_in_app();
        }
        log("Action handled");
        
        WinApp.RevertState();
        
        GarbageCollect();
    } while (WinApp.CarryOn());
    log("Carry on was false");
    
    last_ctrl_desc = "";
	macro_in_buff = false;
	inactive_edit_handled = false;
	last_was_scroll_button = false;
	scroll_count = 0;
	scroll_button_rect = null
}

function click_in_app() {
    log("click_in_app()");

    inactive_edit_handled = false;
    keypress_noremind = false;
    last_click_executed = false;
    click_to_act_done = false;

    if (handle_win_action()) {
        if (inactive_edit_check() && !cfg.standard.winrec.insert_inactive_edit_macros) {
            macro_in_buff = true;
        } else if (last_was_scroll_button) {
            if (scroll_count == 1) {
                add_asset_macro();
            }
            macro_in_buff = false;
        } else {
            if (WinApp.ClickType != "drop" && !no_next_asset) {
                add_asset_macro();
            }
            no_next_asset = false;
            macro_in_buff = false;
        }
        if (!WinApp.BlockClicks() && !last_click_executed) {
            WinApp.SynthesizeMouseEvent();
        }
    }
    WinApp.ClearKeyInputBuff();
}

function keypress_in_app() {
    log("keypress_in_app()");
    var keypress_ok = true;
    
    if (WinApp.HasControl() && 
        (WinApp.CtrlDescriptor == "InactiveEdit" || WinApp.CtrlDescriptor == "ListItem") &&
        !inactive_edit_handled)
    {
        if (macro_in_buff) {
            WinApp.RemoveControl();
            macro_in_buff = false;
        }
        inactive_edit_handled = true;
        handle_win_action();
        add_asset_macro();
        WinApp.KeyInputToBuff();
    } else if (WinApp.HasControl() && WinApp.CtrlDescriptor == "ComboEdit") {
        WinApp.CtrlDescriptor = "";
    } else if (WinApp.HasControl() && (WinApp.CtrlType == "edit" || WinApp.CtrlType == "mledit")) {
        if (WinApp.CtrlType == "mledit") mledit_old_value = WinApp.CtrlValue;
        
        var key_name = WinApp.KeyName();

        if (WinApp.CtrlType == "edit" && (key_name == "tab" || key_name == "enter")) {
            WinApp.SaveControl();
            add_ctrl_macro(true);

            WinApp.FlushScreen();
            WinApp.CaptureScreen();
            curr_page_key = WinApp.GetPageKey();
            // add_asset_macro();
        } else {
            WinApp.KeyInputToBuff();
        }
    } else {
        if (!WinApp.KeyIsModifier()) {
            
            if (!keypress_noremind) {
                var dlg = CreateDialog();
                
                dlg.SetSize(350, 170);
                dlg.SetParamNameWidth(300);
                
                dlg.AddParam("static", ParamType_STATIC_TEXT_SINGLE, ui_trans('paramKeypressRemind'));
                if (WinApp.RecHotKeys()) {
                    dlg.AddParam("static2", ParamType_STATIC_TEXT_SINGLE, ui_trans('paramRecordHotkey') + " [" + WinApp.KeyName() + "]");
                } else {
                    dlg.AddParam("static2", ParamType_STATIC_TEXT_SINGLE, ui_trans('paramNoRecordKeypress'));
                }
                
                dlg.AddParam("static3", ParamType_STATIC_TEXT_SINGLE, '');
                
                dlg.AddParam("keypress_noremind", ParamType_BOOL_0_1, ui_trans('paramNoRemindTillClick'));
                dlg.SetParam("keypress_noremind", !keypress_noremind);
                 
                if (dlg.Show()) {
                    keypress_noremind = dlg.GetParam("keypress_noremind");
                } else {
                    keypress_ok = false;
                }
            }
            
            if (keypress_ok && WinApp.RecHotKeys()) {
                var key_name = WinApp.KeyName();
    
                if (key_name != "") {
                    var key_mac = CreateMacro("key_press");
    
                    win_update_keypress(key_mac, "WINKeyPress", true);
                    
                    if (NumTourstops() == 0) {
                        var ts = AddTourstop("Start", Tourstop_HIDE_NOJUMP);
                        last_ts_index = ts.Index;
                        InsertEventAfter(CreateMacro("start_unit"));
                    }
        
                    combo_check();
                    WinApp.SaveControl();
                    add_ctrl_macro(true);
    
                    WinApp.FlushScreen();
                    WinApp.CaptureScreen();
                    curr_page_key = WinApp.GetPageKey();
                    add_asset_macro();
                    InsertEventAfter(key_mac);
                }
            }
        }
    }

    if (keypress_ok) {
        WinApp.SynthesizeKbdEvent();
    }
}

function handle_win_action() {
    log("handle_win_action");
    var this_macro = null;
    
    ctrl_web_compat = true;
    
    if (NumTourstops() == 0) {
        var ts = AddTourstop("Start", Tourstop_HIDE_NOJUMP);
        last_ts_index = ts.Index;
        InsertEventAfter(CreateMacro("start_unit"));
    }

    if (macro_in_buff) {
        add_asset_macro();
        macro_in_buff = false;
    }  else {
        combo_check();
    }

    var this_elem_type = win_elem_xtype();
    
    WinApp.SaveControl();
    
    var scroll_mac = null;
    if (!last_was_scroll_button) {
    
        if (this_elem_type == "WINListBox") {
            this_macro = add_ctrl_macro(false);
            last_combo_values = WinApp.CtrlValue;
        } else {
            add_ctrl_macro(true);
        }
    } else if (WinApp.HasControl()) {
        var type = win_elem_xtype();
        var hdl_obj = hmap[type];

        if (hdl_obj != null) {
            scroll_mac = hdl_obj.handler(type);

            if (scroll_mac.HasParam("element_type")) {
                scroll_mac.SetParam("element_type", type);
            }
            
            if (last_asset_mac != null) {
                win_update_asset(last_asset_mac);
            }
        }
    }
    
    if (WinApp.ClickType != "drag") {
        WinApp.FlushScreen();
        WinApp.CaptureScreen();
        curr_page_key = WinApp.GetPageKey();
    }

    if (!WinApp.CaptureControl() || (last_ctrl_desc == "ComboButton" && WinApp.CtrlDescriptor != "ComboBoxListItem")) {
        ctrl_web_compat = false;
        
        if (WinApp.CaptureTextControl()) {

            if (last_ctrl_desc == "ComboButton" || last_ctrl_desc == "ComboButtontpcd") {
                WinApp.CtrlDescriptor = "ComboBoxListItem";
            } else if (WinApp.ClickType == "rclick" || WinApp.ClickType == "rdblclick") {
                WinApp.CtrlDescriptor = "RightMouse";
            } else {
                WinApp.CtrlDescriptor = "Text";
            }
        } else if (WinApp.RecordContinuous() || last_ctrl_desc == "ComboButton" || last_ctrl_desc == "ComboButtontpcd" ||
                   WinApp.ClickType == "rclick" || WinApp.ClickType == "rdblclick" ||
                   WinApp.ClickType == "drag" || WinApp.ClickType == "drop")
        {
            var use_rect = true;
            var desc = "";

            if (last_ctrl_desc == "ComboButton" || last_ctrl_desc == "ComboButtontpcd") {
                use_rect = false;
                desc = "ComboBoxListItem";
            } else if (WinApp.ClickType == "rclick" || WinApp.ClickType == "rdblclick") {
                use_rect = false;
                desc = "RightMouse";
            } 

            WinApp.CreateDefaultControl(use_rect);
            WinApp.CtrlDescriptor = desc;
        } else {
            WinApp.MouseEventGulp = false;
            
            if (!WinApp.CreateControl()) {
                 WinApp.MouseEventGulp = true;
                 
                return false;
            }
            
            WinApp.MouseEventGulp = true;
        }
    } else if (WinApp.ClickType == "rclick" || WinApp.ClickType == "rdblclick") {
        WinApp.CtrlDescriptor = "RightMouse";
    }

    if (WinApp.HasControl() && !WinApp.BlockClicks() && WinApp.CtrlDescriptor == "ClickToActivate" && !click_to_act_done) {
        WinApp.SynthesizeMouseEvent();
        last_click_executed = true;
        click_to_act_done = true;
        
        WinApp.RemoveControl();
        
        handle_win_action();
    }
    
    if (WinApp.HasControl()) {
        
        if (!win_scroll_action(WinApp.CtrlDescriptor)) {
            last_ctrl_desc = WinApp.CtrlDescriptor;
            win_handle_scroll_over(scroll_mac);
        } else if (cfg.standard.winrec.atomize_scroll_buttons && win_elem_xtype() == "WINButtonScroll") {
            if (last_was_scroll_button) {
                if (win_scroll_rect_matches()) {
                    scroll_count++;
                } else {
                     win_handle_scroll_over(scroll_mac);
                     last_was_scroll_button = true;
                     scroll_count = 1;
                     scroll_button_rect = WinApp.CtrlRect;
                }
            } else {
                last_was_scroll_button = true;
                scroll_count = 1;
                scroll_button_rect = WinApp.CtrlRect;
            }
        } else {
             last_was_scroll_button = false;
             scroll_count = 0;
             scroll_macro = null;
        }
        
         if (win_elem_xtype() == "WINCBListItem" && this_macro != null) {
            
            if (this_macro.HasParam("choose_text")) {
                this_macro.SetParam("choose_text", WinApp.CtrlFieldname);
            }
            
            if (last_combo_values.length > 0) {
                var arr = last_combo_values.split('\n');
                
                for (var i = 0; i < arr.length; i++) {
                    var val = arr[i];

                    if (val != "") {
                        var index = arr[i].indexOf("{*}");
                        if (index != -1) {
                            val = arr[i].substr(index + 3, arr[i].length);
                        }

                        if (val == WinApp.CtrlFieldname) {
                            if (this_macro.HasParam("choose_nr")) {
                                this_macro.SetParam("choose_nr", i);
                            }
                        }
                    }
                }
            }
            AppendEvent(this_macro);
            WinApp.RemoveControl();
            
            no_next_asset = true;
        }
    } else {
        last_ctrl_desc = "";
        last_was_scroll_button = false;
        scroll_count = 0;
        scroll_macro = null;
    }

    return true;
}

function win_handle_scroll_over(scroll_mac) {
    
    if (cfg.standard.winrec.atomize_scroll_buttons) {
        
        if (scroll_mac != null) {
            if (scroll_mac.HasParam("click_count")) {
                scroll_mac.SetParam("click_count", scroll_count);
            }
            InsertEventAfter(scroll_mac);
        }
        
        last_was_scroll_button = false;
        scroll_count = 0;
    }
}

function add_asset_macro() {
    log("add_asset_macro()");

    if (WinApp.ScreenFile != "") {
        log("add_asset_macro() - screen file: " + WinApp.ScreenFile );
        var ts = AddTourstop(WinApp.Title);
        last_ts_index = ts.Index;
        var mac = win_create_asset();
        
        if (mac.HasParam("sc_config_file")) {
            mac.SetParam("sc_config_file", WinApp.ConfigTempFile);
        }
        
        InsertEventAfter(mac);
        last_asset_mac = mac;
    }
}

function stop_win_recording() {
    
    WinApp.SaveControl();

    if (macro_in_buff) {
        add_asset_macro();
        macro_in_buff = false;
    }

    add_ctrl_macro(true);

    WinApp.FlushScreen();

    if (WinApp.CaptureScreen(false)) {
        curr_page_key = WinApp.GetPageKey();
        add_asset_macro();
    }

    WinApp.FlushScreen();

    if (NumTourstops() > 0 && last_ts_index + 1 == NumTourstops()) {
        InsertEventAfter(CreateMacro("end_unit"));
    }
}

function add_ctrl_macro(insert) {

    if (WinApp.HasControl()) {
        var type = win_elem_xtype();
        var hdl_obj = hmap[type];

        if (type == "WINTransCode") {
            var mac = CreateMacro("transaction_info");

            if (mac.HasParam("tcode")) {
                mac.SetParam("tcode", WinApp.CtrlFieldname);
            }

            InsertEventAfter(mac);
        }

        if (hdl_obj != null) {
            var mac = hdl_obj.handler(type);

            if (mac.HasParam("element_type")) {
                mac.SetParam("element_type", type);
            }

            if (cfg.standard.winrec.atomize_scroll_buttons && win_elem_xtype() == "WINButtonScroll") {
                win_handle_scroll_over(mac);
            } else if (insert) {
                InsertEventAfter(mac);
            }
            
            if (last_asset_mac != null) {
                win_update_asset(last_asset_mac);
            }
            
            return mac;
        }
    }
    
    return null;
}

function inactive_edit_check() {

    if ( WinApp.HasControl() && 
         (WinApp.CtrlDescriptor == "InactiveEdit" || WinApp.CtrlDescriptor == "ListItem") )
    {
        var descriptor = WinApp.CtrlDescriptor;
        var fieldname = WinApp.CtrlFieldname;
        var rect = WinApp.CtrlRect;

        WinApp.RemoveControl();
        WinApp.GenerateControl("hrefarea", descriptor, fieldname, rect);

        return true;
    }

    return false;
}

function combo_check() {

    if ( WinApp.HasControl() && WinApp.CtrlDescriptor == "ComboEdit") {
        var descriptor = "ComboButton";
        var fieldname = WinApp.CtrlFieldname;
        var rect = WinApp.CtrlRect;

        WinApp.RemoveControl();
        WinApp.GenerateControl("hrefarea", descriptor, fieldname, rect);
    }
}

function win_scroll_rect_matches() {
    if (scroll_button_rect != null) {
         var ctrl_rect = WinApp.CtrlRect;
         
        if (ctrl_rect != null) {
            if (ctrl_rect.left == scroll_button_rect.left &&
               ctrl_rect.right == scroll_button_rect.right &&
               ctrl_rect.top == scroll_button_rect.top &&
               ctrl_rect.bottom == scroll_button_rect.bottom)
           {
                return true;
           }
        }
    }
}

function win_check_remove_end_macro() {
    
    if (NumTourstops() > 0) {
        var curr_ts_index = CurrentTourstop();
        
        if (curr_ts_index == NumTourstops() - 1) {
            var curr_ts = GetTourstop(curr_ts_index);
            var mac = curr_ts.NextMacro();
            
            while (mac != null && mac.Template() != "end_unit") {
                mac = curr_ts.NextMacro(mac.TourPosition());
            }
            
            if (mac != null) {
                DeleteEvent(mac.TourPosition());
            }
        }
    }
}