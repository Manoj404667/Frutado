#use(config.js)
#use(hmap.js)
#use(win_helpers.js)
#use(lang.js)

var last_ctrl_desc_nav = "";
var last_page_key = "";
var set_first_bubb_max = false;
var obj_index = 0;

function start_win_recording_nav() {
    
    if (NumTourstops() > 0) {
        var ts = GetTourstop(0);
        var mac = ts.NextMacro();
        
        if (mac.Template() == "start_unit") {
            if (mac.HasParam("obj_index")) {
                obj_index = mac.GetParam("obj_index");
            }
        }
    }
    
    WinApp.MouseEventGulp = false;
    select_project_language();
    WinApp.MouseEventGulp = true;
    
    WinApp.RevertState();
    
    do {
        log("get action");
        var action = WinApp.GetNextAction();
        
        WinApp.SetCurrentAction(action);
        WinApp.SetBusyState();
        
        if (action.type == 1) {
            
            if (action.subtype == 2) {
                HistoryStartAction();
                stop_win_recording_nav();
                break;
            }
        } else if (action.type == 2) {
            log("got action click - " + action.click_type);
            HistoryStartAction();
            if (action.click_type == "dragging") {
                WinApp.SynthesizeMouseEvent();
            } else {
                click_in_app_nav();
            }
        } else if (action.type == 3) {
            log("got action key");
            HistoryStartAction();
            keypress_in_app_nav();
        }
        log("action ends");
        
        WinApp.RevertState();
        
        GarbageCollect();
    } while (WinApp.CarryOn());
    log("carry on was false");
}

function recnav_get_obj_count(obj) {
    var count = 0;
    
    for (var i in obj) {
        count++;
    }
    
    return count;
}

function recnav_get_ts_index(pagekey, p_id) {
    log("recnav_get_ts_index() - " + pagekey);
    var found = false;
    var ts = GetTourstop(0);
    var mac = ts.NextMacro();
    
    while (mac != null) {
        if (mac.Template() == "define_target") {
            if (mac.HasParam("key")) {
                var has_all = true;
                var proc_id = -1;
                
                if (mac.HasParam("process_id")) {
                    proc_id = mac.GetParam("process_id")
                }
                
                eval("var keys=" + mac.GetParam("key"));
                eval("var keys_new= {" + pagekey + "}"); 
                
                if (recnav_get_obj_count(keys) != recnav_get_obj_count(keys_new)) {
                    log("key attributes length mismatch");
                    has_all = false;
                } else if (proc_id != p_id) {
                    log("process id (" + p_id + "!=" + proc_id + ") mismatch");
                    has_all = false;
                } else {
                    for (var i in keys) {
                        
                        if (keys_new[i] == null) {
                            log("key attribute <" + i + "> not found");
                            has_all = false;
                            break;
                        } else if (keys[i].constructor == RegExp && !keys[i].test(keys_new[i])) {
                            log("key attribute <" + i + "> regular expression mismatch");
                            has_all = false;
                            break;
                        } else if (keys[i].constructor == String && keys[i] != keys_new[i]) {
                            log("key attribute <" + i + "> string mismatch");
                            has_all = false;
                            break;
                        }
                    }
                }
                found = has_all;
            }
        }
        
        if (found) break;
        
        mac = ts.NextMacro(mac.TourPosition());
    }
    
    if (found && mac != null) {
        log("recnav_get_ts_index() - found");
        if (mac.HasParam('ts')) {
            var ts_name = "";
  			ts_name = mac.GetParam('ts');
  		
            for (var i = 0; i < NumTourstops(); i++) {
                var ts = GetTourstop(i);
    
                if (ts.Caption == ts_name) return i;
            }
        }
    } else {
        log("recnav_get_ts_index() - not found");
    }
     
    return -1;
}

function click_in_app_nav() {
    log("click_in_app_nav()");

	if (NumTourstops() == 0) {
        var ts = AddTourstop("ID's", Tourstop_HIDE_NOJUMP);
        InsertEventAfter(CreateMacro("start_unit"));
    }
    

    // WinApp.CaptureScreen();
                
    var page_key = "";
    
    log("click_in_app_nav() - \n" + page_key);
    var ts_name = "" + NumTourstops() + "-" + WinApp.GetWindowText();
    if (handle_win_click_nav()) {
        page_key = WinApp.GetPageKey();
        
        if (!WinApp.BlockClicks()) {
            WinApp.SynthesizeMouseEvent();
        }
    }
    
    // var page_key = WinApp.GetPageKey();

	var id_mac = null;
	
	if (page_key != "") {
		var curr_ts = recnav_get_ts_index(page_key, WinApp.ProcessID);
		log("click_in_app_nav() - ts:" + curr_ts);
	

    	if (page_key != last_page_key) {
    	    last_page_key = page_key;
    	}
    	
    	if (curr_ts != -1) {
    	   SetCurrentTourstop(curr_ts);
    	} else {
           curr_ts = CurrentTourstop();
           SetCurrentTourstop(0);
    
           id_mac = CreateMacro("define_target");
           
           if (id_mac.HasParam('key')) {
    	      id_mac.SetParam('key', "{\n" + page_key + "\n}");
           }
           
           if (id_mac.HasParam('config_file')) {
    	      id_mac.SetParam('config_file', WinApp.ConfigTempFile);
           }
           
           if (id_mac.HasParam('revision')) {
    	      id_mac.SetParam('revision', WinApp.ConfigTempRevision);
           }
           
           if (id_mac.HasParam("win_rect") && WinApp.ScreenRect != null) {
               id_mac.SetParam("win_rect", WinApp.ScreenRect);
           }
        
           if (id_mac.HasParam("screenshot_file")) {
               id_mac.SetParam("screenshot_file", WinApp.ImgFile);
           }
           
           if (id_mac.HasParam("process_id")) {
               id_mac.SetParam("process_id", "" + WinApp.ProcessID);
           }
        
           AppendEvent(id_mac);
           SetCurrentTourstop(curr_ts);
        }
    }
		
  	if (id_mac != null) {
  		var ts = AddTourstop(ts_name);
  		
  		if (id_mac.HasParam('ts')) {
  			id_mac.SetParam('ts', ts_name);
  			
  			if (id_mac.HasParam("macro_comment"))  id_mac.SetParam("macro_comment", ts_name);
  			
  			var ts = GetTourstop(0);
  			var num_macs = 0;
  			var mac = ts.NextMacro();
            
            while (mac != null) {
                num_macs++;
                mac = ts.NextMacro(mac.TourPosition());
            }
            
  			var tarname = "TAR" + num_macs + "_" + ts_name + "_" + WinApp.ProcessID;
  			if (id_mac.HasParam("target_name"))  id_mac.SetParam("target_name", tarname);
  		}
  		
  		set_first_bubb_max = true;
  	}
  	
  	WinApp.ClearKeyInputBuff();
}

function keypress_in_app_nav() {
     log("keypress_in_app_nav()");

    if (WinApp.HasControl() && WinApp.CtrlDescriptor == "ComboEdit") {
        WinApp.CtrlDescriptor = "";
    } else if (WinApp.HasControl() && (WinApp.CtrlType == "edit" || WinApp.CtrlType == "mledit")) {
        WinApp.KeyInputToBuff();
    } else {
        if (!WinApp.KeyIsModifier() && WinApp.RecHotKeys()) {
            var key_name = WinApp.KeyName();

            if (key_name != "") {
                var key_mac = CreateMacro("key_press");

                win_update_keypress(key_mac, "WINKeyPress", true);
                
                combo_check_nav();
                WinApp.SaveControl();
                var mac = get_ctrl_macro_nav();
                if (mac != null) {
                    if (mac.HasParam("objname")) {
                        var objname = "NS" + CurrentTourstop() + "_" + WinApp.CtrlFieldname + "_Obj" + obj_index;
                        mac.SetParam("objname", objname);
                        if (mac.HasParam("macro_comment"))  mac.SetParam("macro_comment", objname);
                        obj_index++;
                    }
                    AppendEvent(mac);
                }

                WinApp.FlushScreen();
                WinApp.CaptureScreen(true, false);
                
                 if (key_mac.HasParam("objname")) {
                    var objname = "NS" + CurrentTourstop() + "_" + key_name + "_Obj" + obj_index;
                    key_mac.SetParam("objname", objname);
                    if (key_mac.HasParam("macro_comment"))  key_mac.SetParam("macro_comment", objname);
                    obj_index++;
                }
                InsertEventAfter(key_mac);
                
                set_first_bubb_max = false;
            }
        }
    }

    WinApp.SynthesizeKbdEvent();
}

function handle_win_click_nav() {
    var this_macro = null;
    
    combo_check_nav();

    if (WinApp.HasControl()) {
        var elem_type = win_elem_xtype();
       
        WinApp.SaveControl();
        var mac = get_ctrl_macro_nav();
        
        if (elem_type != "WINListBox") {
            if (mac != null) {
                if (mac.HasParam("objname")) {
                    var objname = "NS" + CurrentTourstop() + "_" + WinApp.CtrlFieldname + "_Obj" + obj_index;
                    mac.SetParam("objname", objname);
                    if (mac.HasParam("macro_comment"))  mac.SetParam("macro_comment", objname);
                    obj_index++;
                }
                AppendEvent(mac);
            }
        } else {
            this_macro = mac;
        }
    }

    WinApp.FlushScreen();
    WinApp.CaptureScreen(true, false);

    if (!WinApp.CaptureControl()) {

        if (WinApp.CaptureTextControl()) {

            if (last_ctrl_desc_nav == "ComboButton") {
                WinApp.CtrlDescriptor = "ComboBoxListItem";
            } else if (WinApp.ClickType == "rclick" || WinApp.ClickType == "rdblclick") {
                WinApp.CtrlDescriptor = "RightMouse";
            } else {
                WinApp.CtrlDescriptor = "Text";
            }
        } else if (WinApp.RecordContinuous() || last_ctrl_desc_nav == "ComboButton" || last_ctrl_desc_nav == "ComboButtontpcd" ||
                   WinApp.ClickType == "rclick" || WinApp.ClickType == "rdblclick" ||
                   WinApp.ClickType == "drag" || WinApp.ClickType == "drop")
        {
            var use_rect = true;
            var desc = "";

            if (last_ctrl_desc_nav == "ComboButton") {
                use_rect = false;
                desc = "ComboBoxListItem";
            } else if (WinApp.ClickType == "rclick" || WinApp.ClickType == "rdblclick") {
                use_rect = false;
                desc = "RightMouse";
            } 

            WinApp.CreateDefaultControl(use_rect);
            WinApp.CtrlDescriptor = desc;
        } else {

            if (!WinApp.CreateControl()) {
                return false;
            }
        }
    } else if (WinApp.ClickType == "rclick" || WinApp.ClickType == "rdblclick") {
        WinApp.CtrlDescriptor = "RightMouse";
    }
// alert(WinApp.CtrlType);
    if (WinApp.HasControl()) {
        if (!win_scroll_action(WinApp.CtrlDescriptor)) {
            last_ctrl_desc_nav = WinApp.CtrlDescriptor;
        }
      
        if (win_elem_xtype() == "WINCBListItem" && this_macro != null) {
            
            if (this_macro.HasParam("choose_text")) {
                this_macro.SetParam("choose_text", WinApp.CtrlFieldname);
                if (this_macro.HasParam("objname")) {
                    var objname = "NS" + CurrentTourstop() + "_" + WinApp.CtrlFieldname + "_Obj" + obj_index;
                    this_macro.SetParam("objname", objname);
                    if (this_macro.HasParam("macro_comment"))  this_macro.SetParam("macro_comment", objname);
                    obj_index++;
                }
                AppendEvent(this_macro);
                WinApp.RemoveControl();
            }
        }
    } else {
        last_ctrl_desc_nav = "";
        /*
        if (this_macro != null) {
            AppendEvent(this_macro);
        }
        */
    }

    this_macro = null;
    
    return true;
}

function stop_win_recording_nav() {
    
    WinApp.SaveControl();
    
    var mac = get_ctrl_macro_nav();
    if (mac != null) {
        if (mac.HasParam("objname")) {
            var objname = "NS" + CurrentTourstop() + "_" + WinApp.CtrlFieldname + "_Obj" + obj_index;
            mac.SetParam("objname", objname);
            if (mac.HasParam("macro_comment"))  mac.SetParam("macro_comment", objname);
            obj_index++;
        }
        AppendEvent(mac);
    }
    
    WinApp.FlushScreen();
    
    if (NumTourstops() > 0) {
        var ts = GetTourstop(0);
        var mac = ts.NextMacro();
        
        if (mac.Template() == "start_unit") {
            if (mac.HasParam("obj_index")) {
                mac.SetParam("obj_index", obj_index);
            }
        }
    }
    
/*
    if (NumTourstops() > 0) {
        SetCurrentTourstop(NumTourstops() - 1);
        
        var ts = GetTourstop(CurrentTourstop());
        var mac = ts.NextMacro();
        while (mac != null) {
	       if (mac.Template() == "end_unit") break;
	     
	       mac = ts.NextMacro(mac.TourPosition());
	    }
	    if (mac == null) {
            AppendEvent(CreateMacro("end_unit"));
        }
    }
*/
}

function get_ctrl_macro_nav() {

    if (WinApp.HasControl()) {
        var type = win_elem_xtype();
        var hdl_obj = hmap[type];

/*
        if (type == "WINTransCode") {
            var mac = CreateMacro("transaction_info");

            if (mac.HasParam("tcode")) {
                mac.SetParam("tcode", WinApp.CtrlFieldname);
            }

            InsertEventAfter(mac);
        }
*/
        if (hdl_obj != null) {
            var mac = hdl_obj.handler(type);

            if (mac.HasParam("element_type")) {
                mac.SetParam("element_type", type);
            }
            
            if (mac.HasParam("leaves_page")) {
                mac.SetParam("leaves_page", WinApp.GetPageKey() != last_page_key);
            }
            
            if (mac.HasParam("path")) {
                mac.SetParam("path", WinApp.AppCtrlPath);
            }
            /*
            if (mac.HasParam("analyzer")) {
                mac.SetParam("analyzer", WinApp.PtAnalyzer);
            }
            */
            if (set_first_bubb_max && mac.HasParam("b_minimized")) {
                mac.SetParam("b_minimized", false);
                set_first_bubb_max = false;
            }
            
            return mac;
        }
    }
    
    return null;
}

function combo_check_nav() {

    if ( WinApp.HasControl() && WinApp.CtrlDescriptor == "ComboEdit") {
        var descriptor = "ComboButton";
        var fieldname = WinApp.CtrlFieldname;
        var rect = WinApp.CtrlRect;

        WinApp.RemoveControl();
        WinApp.GenerateControl("hrefarea", descriptor, fieldname, rect);
    }
}
