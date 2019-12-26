#use(config.js)
#use(hmap.js)
#use(custom/config.js)
#use(win_helpers.js)

function winnavr_record_pagekey() {
    var msg = CurrentEvent();
    var conf = "";
    
    if (msg.HasParam("config_file")) {
        conf = msg.GetParam("config_file");
    }
    
    if (conf != "") {
        
        if (WinApp.RecordPageKey(conf)) {
            WinApp.CaptureScreen(true, false);
            if (msg.HasParam('key')) {
	            msg.SetParam('key', "{\n" + WinApp.GetPageKey() + "\n}");
            }
        }
    } else {
        alert("Config File Empty!");
    }
}

function winnavr_record_clickpos_rel() {
    var msg = CurrentEvent();
    
    if (msg.HasParam("click_pos_rel") && WinApp.RecordClickPos("")) {
        var pos = WinApp.ClickPos;
        var rect = WinApp.ClickWinRect;
        // alert("" + pos.x + "," + rect.right+ "," + rect.left+ "," + (pos.x/rect.right-rect.left)*100);
        pos.x = (pos.x/(rect.right-rect.left))*100;
        pos.y = (pos.y/(rect.bottom-rect.top))*100;
        
        msg.SetParam("click_pos_rel", pos);
    } else {
        alert("no attribute click_pos!");
    }
}

function winnavr_record_control() {
    log("winnavr_record_control()");
    var msg = CurrentEvent();
    var my_type = "";
    
    if (msg.HasParam("element_type")) {
        my_type = msg.GetParam("element_type");
    }
        
    if (msg.HasParam("click_pos")) {
        var curr_ts = GetTourstop(CurrentTourstop()); ;
        
        if (curr_ts != null) {
            var caption = curr_ts.Caption;
            
            if (caption != "") {
                var ts = GetTourstop(0);
                var mac = ts.NextMacro();
                
                while (mac != null) {
                    if (mac.Template() == "define_target" && mac.HasParam('ts')) {
                        var ts_name = "";
                        ts_name = mac.GetParam('ts');
                        
                        if (ts_name == caption) {
                            var conf = "";
                            
                            if (mac.HasParam("config_file")) {
                                conf = mac.GetParam("config_file");
                            }
                            
                            if (conf != "") {
                                log("winnavr_record_control() with " + conf);
                                
                                if (WinApp.RecordClickPos(conf)) {
                                    var pos = WinApp.ClickPos;
                                    
                                    WinApp.SetClickPos(pos.x, pos.y);
                                    WinApp.CaptureScreen(true, false);
                                    
                                    if (WinApp.CaptureControl()) {
                                        var type = win_elem_xtype();
                                       
                                        if (type == my_type) {
                                            WinApp.SaveControl();
                                            var hdl_obj = hmap[type];
    
                                            if (hdl_obj != null) {
                                                hdl_obj.update(msg, type, false);
                                                
                                                 if (msg.HasParam("path")) {
                                                     msg.SetParam("path", WinApp.AppCtrlPath);
                                                 }
                                            } else {
                                                alert("No handler for type " + type);
                                            }
                                        } else {
                                            alert("Type mismatch: new-" + type + " != old-" + my_type);
                                        }
                                        
                                        return;
                                    } else {
                                        alert("No control at given position " + pos.x + " " + pos.y);
                                    
                                        return;
                                    }
                                }
                            } else {
                                alert("No config file specified");
                                
                                return;
                            }
                        }
                    }
                    mac = ts.NextMacro(mac.TourPosition());
                }
            }
        }
    } else {
        alert("No attribute click_pos!");
    }
}

function winnavr_convert_mymac2aa() {
    var macro = CurrentEvent();
    
    winnavr_convert_mac2aa(macro);
}

function winnavr_convert_mac2aa(macro) {

    if (macro != null && macro.HasParam("path")) {
        var path = macro.GetParam("path");
        var reg = /[ltrb]\d+;/g;
        var result = path.match(reg);
        var left = -1;
        var top = -1;
        var right = -1;
        var bottom = -1;
            
        if (result != null && result.length == 4) {
            
            for (var i=0; i < result.length; i++) {

                if (result[i].charAt(0) == "l") {
                    left = result[i].substring(1, result[i].length-1) - 0;
                } else if (result[i].charAt(0) == "t") {
                    top = result[i].substring(1, result[i].length-1) - 0;
                } else if (result[i].charAt(0) == "r") {
                    right = result[i].substring(1, result[i].length-1) - 0;
                } else if (result[i].charAt(0) == "b") {
                    bottom = result[i].substring(1, result[i].length-1) - 0;
                }
            }
        }
                
        if (left == -1 || top == -1 || right == -1 || bottom != -1) {

            if (macro.HasParam("screenshot_rect")) {
                var sc_rect = macro.GetParam("screenshot_rect");

                if (sc_rect.left != -1 && sc_rect.top != -1) {
                    left = sc_rect.left;
                    top = sc_rect.top;
                    right = sc_rect.right;
                    bottom = sc_rect.bottom;
                }
            }
        }
                
        if (left != -1 && top != -1 && right != -1 && bottom != -1) {
            var aa_mac = CreateMacro("active_area");
            var rect = CreateRect(left, top, right, bottom);
            
            if (aa_mac.HasParam("area")) {
                aa_mac.SetParam("area", rect);
            }
            if (aa_mac.HasParam("objname") && macro.HasParam("objname")) {
                aa_mac.SetParam("objname", macro.GetParam("objname"));
            }
            if (aa_mac.HasParam("explanation_d") && macro.HasParam("explanation_d")) {
                aa_mac.SetParam("explanation_d", macro.GetParam("explanation_d"));
            }
            if (aa_mac.HasParam("enabled") && macro.HasParam("enabled")) {
                aa_mac.SetParam("enabled", macro.GetParam("enabled"));
            }
            if (aa_mac.HasParam("bubblestyle_d") && macro.HasParam("bubblestyle_d")) {
                aa_mac.SetParam("bubblestyle_d", macro.GetParam("bubblestyle_d"));
            }
            if (aa_mac.HasParam("b_width") && macro.HasParam("b_width")) {
                aa_mac.SetParam("b_width", macro.GetParam("b_width"));
            }
            if (aa_mac.HasParam("b_height") && macro.HasParam("b_height")) {
                aa_mac.SetParam("b_height", macro.GetParam("b_height"));
            }
            if (aa_mac.HasParam("orientation") && macro.HasParam("orientation")) {
                aa_mac.SetParam("orientation", macro.GetParam("orientation"));
            }
            if (aa_mac.HasParam("bubble_offset") && macro.HasParam("bubble_offset")) {
                aa_mac.SetParam("bubble_offset", macro.GetParam("bubble_offset"));
            }
            if (aa_mac.HasParam("b_minimized") && macro.HasParam("b_minimized")) {
                aa_mac.SetParam("b_minimized", macro.GetParam("b_minimized"));
            }
            if (aa_mac.HasParam("no_spike") && macro.HasParam("no_spike")) {
                aa_mac.SetParam("no_spike", macro.GetParam("no_spike"));
            }
            if (aa_mac.HasParam("b_minimizable") && macro.HasParam("b_minimizable")) {
                aa_mac.SetParam("b_minimizable", macro.GetParam("b_minimizable"));
            }
            if (aa_mac.HasParam("b_movable") && macro.HasParam("b_movable")) {
                aa_mac.SetParam("b_movable", macro.GetParam("b_movable"));
            }
            if (aa_mac.HasParam("init") && macro.HasParam("init")) {
                aa_mac.SetParam("init", macro.GetParam("init"));
            }
            if (aa_mac.HasParam("leaves_page") && macro.HasParam("leaves_page")) {
                aa_mac.SetParam("leaves_page", macro.GetParam("leaves_page"));
            }
            if (aa_mac.HasParam("macro_validatory") && macro.HasParam("macro_validatory")) {
                aa_mac.SetParam("macro_validatory", macro.GetParam("macro_validatory"));
            }
            if (aa_mac.HasParam("macro_comment") && macro.HasParam("macro_comment")) {
                aa_mac.SetParam("macro_comment", macro.GetParam("macro_comment"));
            }
            
            ReplaceEvent(macro.TourPosition(), aa_mac);
        }
    }
}
            
function winnavr_convert_n2aa() {
    
    for (var i = 0; i < NumTourstops(); i++) {
        var ts = GetTourstop(i);
        var macro;

        macro = ts.NextMacro();

        while (macro != null) {
            
            if (macro != null) {
                macro.SetCurrent();
            
                winnavr_convert_mac2aa(macro);
            }
            
            macro = ts.NextMacro(macro.TourPosition());
        }
    }  
}

function winnavr_get_unique_nsname(nsname) {
    var ns_index = 0;
    var name_index = 0;
    var newname = nsname;
    
    while (ns_index < NumTourstops()) {
        var ts = GetTourstop(ns_index);
        
        if (ts.Caption == newname) {
            newname = nsname + " " + name_index;
            name_index++;
            ns_index = 0;
        } else {
            ns_index++;
        }
    }
    
    return newname;
}

function winnavr_get_unique_objname(objname) {
    var ns_index = 0;
    var name_index = 0;
    var newname = objname;
     
    while (ns_index < NumTourstops()) {
        var ts = GetTourstop(ns_index);
        var mac = ts.NextMacro();
    
        while (mac != null) {
           
            if (mac.HasParam("objname") && mac.GetParam("objname") == newname) {
                newname = objname + " " + name_index;
                name_index++;
                ns_index = -1;
                break;
            }
            
            mac = ts.NextMacro(mac.TourPosition());
        }
        
        ns_index++;
    }
    
    return newname;
}

function winnavr_insert_navigation_flow() {
    var ts_index = NumTourstops();
    var nsname = winnavr_get_unique_nsname("Display");
    var show_ns_active = false;
    var dlg = CreateDialog();
    
    dlg.AddParam("show_ns_active", ParamType_BOOL_0_1, ui_trans('paramShowNSActive'));
    dlg.SetParam("show_ns_active", show_ns_active);
    
    if (dlg.Show()) {
        show_ns_active = dlg.GetParam("show_ns_active"); 
    } else {
        return;
    }
    
    if (ts_index != -1) {
        ts_index--;
        SetCurrentTourstop(ts_index);
    }
    
    AddTourstop(nsname, Tourstop_HIDE_NOJUMP);
    
    // insert free object
    var fo_mac = CreateMacro("free_object");
    var fo_name = winnavr_get_unique_objname(nsname);
    
    if (fo_mac.HasParam("macro_comment")) {
        fo_mac.SetParam("macro_comment", fo_name);
    }
    if (fo_mac.HasParam("objname")) {
        fo_mac.SetParam("objname", fo_name);
    }
    if (fo_mac.HasParam("explanation_d")) {
        fo_mac.SetParam("explanation_d", "<center><b>" + Project.DisplayName + "</b></center><br>");
    }
    AppendEvent(fo_mac);
    
    // insert behaviour to show free object
    var fo_beh_mac = CreateMacro("beh_display_fo");
    var fo_show_beh_name = winnavr_get_unique_objname(fo_name + "-" + "Show");
    
    if (fo_beh_mac.HasParam("macro_comment")) {
        fo_beh_mac.SetParam("macro_comment", fo_show_beh_name);
    }
    if (fo_beh_mac.HasParam("behave_name")) {
        fo_beh_mac.SetParam("behave_name", fo_show_beh_name);
    }
    if (fo_beh_mac.HasParam("free_object")) {
        fo_beh_mac.SetParam("free_object", fo_name);
    }
    AppendEvent(fo_beh_mac);
    
     // insert behaviour to hide free object
    fo_beh_mac = CreateMacro("beh_hide_fo");
    var fo_hide_beh_name = winnavr_get_unique_objname(fo_name + "-" + "Hide");
    
    if (fo_beh_mac.HasParam("macro_comment")) {
        fo_beh_mac.SetParam("macro_comment", fo_hide_beh_name);
    }
    if (fo_beh_mac.HasParam("behave_name")) {
        fo_beh_mac.SetParam("behave_name", fo_hide_beh_name);
    }
    if (fo_beh_mac.HasParam("free_object")) {
        fo_beh_mac.SetParam("free_object", fo_name);
    }
    AppendEvent(fo_beh_mac);
    
    if (!show_ns_active) {
        // assign free object show to navigator start
        var fo_assign_mac = CreateMacro("behaviour_assign_global");
        
        if (fo_assign_mac.HasParam("macro_comment")) {
            fo_assign_mac.SetParam("macro_comment", fo_show_beh_name);
        }
        if (fo_assign_mac.HasParam("behaviour")) {
            fo_assign_mac.SetParam("behaviour", fo_show_beh_name);
        }
        if (fo_assign_mac.HasParam("action")) {
            fo_assign_mac.SetParam("action", "Start");
        }
        AppendEvent(fo_assign_mac);
    }

    var id_ts = GetTourstop(0);
    var id_mac = id_ts.NextMacro();
    
    while (id_mac != null) {
     
        if (id_mac.Template() == "define_target" && id_mac.HasParam('ts')) {
            var ts_name = id_mac.GetParam('ts');
             
            if (ts_name != "") {
                // insert free object element
                var foe_mac = CreateMacro("free_object_elem");
                var foe_name = winnavr_get_unique_objname(fo_name + "-" + ts_name);
                
                if (foe_mac.HasParam("macro_comment")) {
                    foe_mac.SetParam("macro_comment", foe_name);
                }
                if (foe_mac.HasParam("objname")) {
                    foe_mac.SetParam("objname", foe_name);
                }
                if (foe_mac.HasParam("explanation_d")) {
                    foe_mac.SetParam("explanation_d", "<li>" + ts_name);
                }
                if (foe_mac.HasParam("free_object")) {
                    foe_mac.SetParam("free_object", fo_name);
                }
                if (foe_mac.HasParam("enabled")) {
                    foe_mac.SetParam("enabled", false);
                }
                
                AppendEvent(foe_mac);
                
                // insert behaviour to enable free object element
                var foe_beh_mac = CreateMacro("beh_foe_change_state");
                var foe_beh_name = winnavr_get_unique_objname(foe_name + "-" + "Show");
                
                if (foe_beh_mac.HasParam("macro_comment")) {
                    foe_beh_mac.SetParam("macro_comment", foe_beh_name);
                }
                if (foe_beh_mac.HasParam("behave_name")) {
                    foe_beh_mac.SetParam("behave_name", foe_beh_name);
                }
                if (foe_beh_mac.HasParam("free_object")) {
                    foe_beh_mac.SetParam("free_object", fo_name);
                }
                if (foe_beh_mac.HasParam("free_object_elem")) {
                    foe_beh_mac.SetParam("free_object_elem", foe_name);
                }
                if (foe_beh_mac.HasParam("enabled")) {
                    foe_beh_mac.SetParam("enabled", true);
                }
                if (foe_beh_mac.HasParam("exclusive")) {
                    foe_beh_mac.SetParam("exclusive", true);
                }
                AppendEvent(foe_beh_mac);
                
                // assign behaviour to enable free object element
                var foe_assign_mac = CreateMacro("behaviour_assign_ns");
                
                if (foe_assign_mac.HasParam("macro_comment")) {
                    foe_assign_mac.SetParam("macro_comment", foe_beh_name);
                }
                if (foe_assign_mac.HasParam("behaviour")) {
                    foe_assign_mac.SetParam("behaviour", foe_beh_name);
                }
                if (foe_assign_mac.HasParam("action")) {
                    foe_assign_mac.SetParam("action", "PageLoad");
                }
                if (foe_assign_mac.HasParam("ts")) {
                    foe_assign_mac.SetParam("ts", ts_name);
                }
                AppendEvent(foe_assign_mac);
                
                if (show_ns_active) {
                    // assign free object show to page load
                    foe_assign_mac = CreateMacro("behaviour_assign_ns");
                    
                    if (foe_assign_mac.HasParam("macro_comment")) {
                        foe_assign_mac.SetParam("macro_comment", fo_show_beh_name);
                    }
                    if (foe_assign_mac.HasParam("behaviour")) {
                        foe_assign_mac.SetParam("behaviour", fo_show_beh_name);
                    }
                    if (foe_assign_mac.HasParam("action")) {
                        foe_assign_mac.SetParam("action", "PageLoad");
                    }
                    if (foe_assign_mac.HasParam("ts")) {
                        foe_assign_mac.SetParam("ts", ts_name);
                    }
                    AppendEvent(foe_assign_mac);
                    
                    // assign free object hide to page unload
                    foe_assign_mac = CreateMacro("behaviour_assign_ns");
                    
                    if (foe_assign_mac.HasParam("macro_comment")) {
                        foe_assign_mac.SetParam("macro_comment", fo_hide_beh_name);
                    }
                    if (foe_assign_mac.HasParam("behaviour")) {
                        foe_assign_mac.SetParam("behaviour", fo_hide_beh_name);
                    }
                    if (foe_assign_mac.HasParam("action")) {
                        foe_assign_mac.SetParam("action", "PageUnload");
                    }
                    if (foe_assign_mac.HasParam("ts")) {
                        foe_assign_mac.SetParam("ts", ts_name);
                    }
                    AppendEvent(foe_assign_mac);
                }
            }
        }
        
        id_mac = id_ts.NextMacro(id_mac.TourPosition());
    }
}
