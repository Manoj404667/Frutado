﻿#use(config.js)
#use(custom/config.js)
#use(relpos_helpers.js)
#use(ui_lang.js)
#use(lang.js)

var winweb_elempath = "";
var winweb_framepath = "";

var descriptor_map = {
    common:    ["none", "#explanation_l", "RightMouse", "ClickToActivate"],
    button:    ["tpcd", "Enter", "Confirm", "Save", "Back", "End",
                "HelpValue", "ComboButton", "SelectRow", "scrollbutton",
                "ComboButtontpcd"
               ],
    checkbox:  [],
    customctl: ["ComboEdittpcd", "tpcd", "ListItem", "ComboBoxListItem",
                "GeneralMenue", "Menue", "ActiveMenueItem", "PageTab",
                "InactiveEdit", "OpenFolder", "vscrollbar", "hscrollbar",
                "scrollarealeft", "scrollarearight", "scrollareaup",
                "scrollareadown", "Text", "CloseFolder", "Enter", "Confirm",
                "Save", "Back", "End", "HelpValue", "ComboButton", "SelectRow",
                "scrollbutton", "ComboButtontpcd"
               ],
    ddlistbox: ["ComboEdittpcd"],
    edit:      ["ComboEdittpcd"],
    hrefarea:  ["ComboEdittpcd", "tpcd", "ListItem", "ComboBoxListItem",
                "GeneralMenue", "Menue", "ActiveMenueItem", "PageTab",
                "InactiveEdit", "OpenFolder", "vscrollbar", "hscrollbar",
                "scrollarealeft", "scrollarearight", "scrollareaup",
                "scrollareadown", "Text", "CloseFolder"
               ],
    listbox:   ["ComboEdittpcd"],
    mledit:    ["ComboEdittpcd"],
    radio:     []
};

function init_winapp() {

    WinApp.FlushScreen();
    WinApp.Clear();

    var common_descrs = descriptor_map["common"];
    for (var i in descriptor_map) {
        var descrs = descriptor_map[i];
        
        for (var j = 0; j < common_descrs.length; j++) {
            WinApp.AddDescriptor(i, common_descrs[j]);
        }
        
        for (var j = 0; j < descrs.length; j++) {
            WinApp.AddDescriptor(i, descrs[j]);
        }
    }

    WinApp.Init();
}

function win_types_compatible(mac_type, new_type) {
    if (mac_type == "WINComboEdittpcd") mac_type = "WINEdit";
    if (new_type == "WINComboEdittpcd") new_type = "WINEdit";
    
    return (mac_type == new_type);
}

function win_elem_xtype() {
    var type = "";

    if (WinApp.HasControl()) {
        var descriptor = WinApp.CtrlDescriptor;
        var ctrl_type = WinApp.CtrlType;

        if (descriptor == "#explanation") {
            // type = "WINExplain";
            type = "WINExplainLong";
        } else if (descriptor == "#explanation_l") {
            type = "WINExplainLong";
        } else if (descriptor == "ClickToActivate") {
            type = "WINClickToActivate";
        } else if (descriptor == "RightMouse") {
            type = "WINRightMouse";
        } else if (descriptor == "ComboEdittpcd") {
            type = "WINComboEdittpcd";
        } else if (ctrl_type == "edit" || ctrl_type == "mledit") {
            type = "WINEdit";
        } else if (ctrl_type == "checkbox" || ctrl_type == "radio") {
            var newvalue = WinApp.CtrlValue;

            if (ctrl_type == "radio") {
                type = "WINRadio";
            } else if (newvalue == "1") {
                type = "WINCBChecked";
            } else {
                type = "WINCBUnchecked";
            }
        } else if (ctrl_type == "listbox" || ctrl_type == "ddlistbox") {
            type = "WINListBox";
        } else if (ctrl_type != "") {

            if (descriptor == "tpcd") {
                type = "WINTransCode";
            } else {
                
                // some special buttons, hrefs here
                if (descriptor == "Enter") {
                    type = "WINButtonEnter";
                } else if (descriptor == "Confirm") {
                    type = "WINButtonConfirm";
                } else if (descriptor == "Save") {
                    type = "WINButtonSave";
                } else if (descriptor == "Back") {
                    type = "WINButtonBack";
                } else if (descriptor == "End") {
                    type = "WINButtonEnd";
                } else if (descriptor == "HelpValue") {
                    type = "WINButtonHelpValue";
                } else if (descriptor == "ComboButton") {
                    type = "WINButtonCombo";
                } else if (descriptor == "ListItem") {
                    type = "WINListItem";
                } else if (descriptor == "ComboBoxListItem") {
                    type = "WINCBListItem";
                } else if (descriptor == "GeneralMenue") {
                    type = "WINGeneralMenue";
                } else if (descriptor == "Menue") {
                    type = "WINMenue";
                } else if (descriptor == "ActiveMenueItem") {
                    type = "WINMenueItem";
                } else if (descriptor == "PageTab") {
                    type = "WINPageTab";
                } else if (descriptor == "SelectRow") {
                    type = "WINTableRow";
                } else if (descriptor == "InactiveEdit") {
                    type = "WINInactiveEdit";
                } else if (descriptor == "OpenFolder") {
                    type = "WINOpenFolder";
                } else if (descriptor == "vscrollbar") {
                    type = "WINScrollBarVertical";
                } else if (descriptor == "hscrollbar") {
                    type = "WINScrollBarHorizontal";
                } else if (descriptor == "scrollarealeft") {
                    type = "WINScrollAreaLeft";
                } else if (descriptor == "scrollarearight") {
                    type = "WINScrollAreaRight";
                } else if (descriptor == "scrollareaup") {
                    type = "WINScrollAreaUp";
                } else if (descriptor == "scrollareadown") {
                    type = "WINScrollAreaDown";
                } else if (descriptor == "scrollbutton") {
                    type = "WINButtonScroll";
                } else if (descriptor == "Text") {
                    type = "WINTextClick";
                } else if (descriptor == "CloseFolder") {
                    type = "WINCloseFolder";
                } else if (descriptor == "ComboButtontpcd") {
                    type = "WINComboButtontpcd";
                } else {
                    type = "WINClick";
                }
            }
        }
    }

    return type;
}

function wintype_to_type_desc(wintype) { 
    var type = "";
    var desc = "";

    if (wintype == "WINExplain") {
        desc = "#explanation";
    } else if (wintype == "WINExplainLong") {
        desc = "#explanation_l";
    } else if (wintype == "WINRightMouse") {
        desc = "RightMouse";
    } else if (wintype == "WINComboEdittpcd") {
        type = "edit";
        desc = "ComboEdittpcd";
    } else if (wintype == "WINEdit") {
        type = "edit";
    } else if (wintype == "WINRadio") {
        type = "radio";
    } else if (wintype == "WINCBChecked") {
        type = "checkbox";
    } else if (wintype == "WINCBUnchecked") {
        type = "checkbox";
    } else if (wintype == "WINListBox") {
        type = "ddlistbox";
    } else {
        type = "hrefarea";
     
        if (wintype == "WINTransCode") {
            desc = "tpcd";
        } else if (wintype == "WINButtonEnter") {
            desc = "Enter";
        } else if (wintype == "WINButtonConfirm") {
            desc = "Confirm";
        } else if (wintype == "WINButtonSave") {
            desc = "Save";
        } else if (wintype == "WINButtonBack") {
            desc = "Back";
        } else if (wintype == "WINButtonEnd") {
            desc = "End";
        } else if (wintype == "WINButtonHelpValue") {
            desc = "HelpValue";
        } else if (wintype == "WINButtonCombo") {
            desc = "ComboButton";
        } else if (wintype == "WINListItem") {
            desc = "ListItem";
        } else if (wintype == "WINCBListItem") {
            desc = "ComboBoxListItem";
        } else if (wintype == "WINMenue") {
            desc = "Menue";
        } else if (wintype == "WINMenueItem") {
            desc = "ActiveMenueItem";
        } else if (wintype == "WINTableRow") {
            desc = "SelectRow";
        } else if (wintype == "WINInactiveEdit") {
            desc = "InactiveEdit";
        } else if (wintype == "WINOpenFolder") {
            desc = "OpenFolder";
        } else if (wintype == "WINScrollBarVertical") {
            desc = "vscrollbar";
        } else if (wintype == "WINScrollBarHorizontal") {
            desc = "hscrollbar";
        } else if (wintype == "WINScrollAreaLeft") {
            desc = "scrollarealeft";
        } else if (wintype == "WINScrollAreaRight") {
            desc = "scrollarearight";
        } else if (wintype == "WINScrollAreaUp") {
            desc = "scrollareaup";
        } else if (wintype == "WINScrollAreaDown") {
            desc = "scrollareadown";
        } else if (wintype == "WINButtonScroll") {
            desc = "scrollbutton";
        } else if (wintype == "WINTextClick") {
            desc = "Text";
        } else if (wintype == "WINCloseFolder") {
            desc = "CloseFolder";
        } else if (wintype == "WINComboButtontpcd") {
            desc = "ComboButtontpcd";
        }
    }

    return {t:type, d:desc};
} 


function win_scroll_action(descriptor) {
    
    if (descriptor == "vscrollbar" || descriptor == "hscrollbar" ||
        descriptor == "scrollarealeft" || descriptor == "scrollarearight" ||
        descriptor == "scrollareaup" || descriptor == "scrollareadown" ||
        descriptor == "scrollbutton")
    {
        return true;
    }

    return false;
}

function win_update_explain(mac, type, replace_txt) {

    win_set_img(mac);
    win_set_path(mac);

    if (replace_txt) {
        var infotext = get_infotxt(type);
        var fieldname = WinApp.CtrlFieldname;

        if (mac.HasParam("fieldname")) {
            mac.SetParam("fieldname", fieldname);
        }

        win_set_msg_param(mac, infotext);
    }
}

function win_update_explain_l(mac, type, replace_txt) {

    win_set_img(mac);
    win_set_path(mac);

    if (replace_txt) {
        var infotext = get_infotxt(type);
        var fieldname = WinApp.CtrlFieldname;

        if (mac.HasParam("fieldname")) {
            mac.SetParam("fieldname", fieldname);
        }

        win_set_msg_param(mac, infotext);
    }
}

function win_update_keypress(mac, type, replace_txt) {
    var key_name = WinApp.KeyName();

    if (mac.HasParam("key_name")) {
        mac.SetParam("key_name", key_name);
    }

    if (mac.HasParam("key_desc")) {
        mac.SetParam("key_desc", key_name);
    }

    if (replace_txt) {
        var infotext = get_infotxt(type);

        win_set_msg_param(mac, infotext);
    }
}

function
get_mledit_subrect(newvalue, ctrl_rect, buff_input) {
    var lines_arr = newvalue.split('\n');
    var click_pos = WinApp.ClickPos;
    var left = ctrl_rect.left;
    var top = ctrl_rect.top;
    var right = ctrl_rect.right;
    var bottom = ctrl_rect.bottom;
    var line_pos = -1;
    var line_hght = 14;
    var char_wdth = 9;
      
    for (var i = 0; i < lines_arr.length; i++) {
        log("line " + i + ": " + lines_arr[i]);
        if (click_pos. y > top + (line_hght * i) && click_pos. y <= top + (line_hght * (i + 1))) {
            line_pos = i;
            break;
        }
    }
    
    log("line pos is: " + line_pos);
    
    if (line_pos == -1) return ctrl_rect;
    
    var line_str = lines_arr[line_pos];
    var char_pos = -1;
    //var last_empty_char = -1;
    
    log("line is: " + line_str);
    
    for (var i = 0; i < line_str.length; i++) {
        log("char " + i + ": " + line_str[i]);
/*
        if (line_str[i] == ' ' || line_str[i] == '\n') {
            if (last_empty_char == -1) {
                last_empty_char = i;
            }
        } else {
            last_empty_char = -1;
        }
*/        
        if (click_pos. x > left + (char_wdth * i) && click_pos. x <= left + (char_wdth * (i + 1))) {
            char_pos = i;
            break;
        }
    }
    
    if (char_pos == -1) return ctrl_rect;
    
   // if (last_empty_char == -1) {
   //     last_empty_char = char_pos;
   // }
    
    var txt_len = buff_input.length;
    if (txt_len == 0) {
        txt_len = 10;
    }
    
    var r = CreateRect(/*left + (char_pos * char_wdth)*/click_pos. x, top + line_pos * line_hght, click_pos. x + (txt_len * char_wdth), top + (line_pos + 1) * line_hght);
    
    return r;
}

function correct_buff_input(newvalue, buff_input) {
    
    if (mledit_old_value.length < newvalue.length) {
        for (var i = 0; i < newvalue.length; i++) {
            if (mledit_old_value.length <= i || newvalue[i] != mledit_old_value[i]) {
                if (mledit_old_value.length < newvalue.length) {
                    return newvalue.substr(i, newvalue.length - mledit_old_value.length);
                }
            }
        }
    }
    
    return buff_input;
}

function win_update_edit(mac, type, replace_txt) {
log("update_edit");
    var fieldname = WinApp.CtrlFieldname;
    var newvalue = WinApp.CtrlEndValue;
    var infotext = win_get_infotxt(mac, type);
    var is_passwd =  WinApp.CtrlIsPassword;
    var buff_input = WinApp.GetKeyInputBuff();

    win_set_path(mac);

    if (WinApp.ClickType != "rclick") {
        
        if (WinApp.CtrlType == "mledit"/* && newvalue != ""*/) {
            log("is mledit");
            newvalue = WinApp.RecaptureControl(newvalue == "");
            var mlrect = get_mledit_subrect(newvalue, WinApp.CtrlRect, buff_input);
            WinApp.RemoveControl();
            WinApp.GenerateControl("edit", "", fieldname, mlrect);
            buff_input = correct_buff_input(newvalue, buff_input);
            newvalue = buff_input;
        }
        
        if (!cfg.standard.rec.demo_text_with_value) {
            infotext = get_infotxt("INPUTtext");
        }
    
        var key_name = WinApp.KeyName();
        var tab = (key_name == "tab");
        var enter = (key_name == "enter");
        var button = false;

        if (WinApp.CtrlDescriptor == "ComboEdittpcd") { 
             tab = false;
             enter = true;
             button = false;
             infotext = get_infotxt("WINComboEdittpcd");
        } else if (!tab && !enter) {
            tab    = cfg.standard.rec.input_confirm_tab;
            enter  = cfg.standard.rec.input_confirm_enter;
            button = cfg.standard.rec.input_confirm_button;
        }

        if (mac.HasParam("confirmation_tab")) {
            mac.SetParam("confirmation_tab", tab);
        }

        if (mac.HasParam("confirmation_enter")) {
            mac.SetParam("confirmation_enter", enter);
        }

        if (mac.HasParam("confirmation_key") && (key_name == "enter" || key_name == "tab")) {
            mac.SetParam("confirmation_key", key_name);
        }
        
        var confirmtext = input_infotxt(tab, enter, button);

        infotext.demo += confirmtext.demo;
        infotext.prac += confirmtext.prac;
    
        if (newvalue == "") {
            
            if (WinApp.CtrlType == "mledit") {
                newvalue = buff_input;
            } else { 
                newvalue = WinApp.RecaptureControl(newvalue == "");
            }
        }
    }
    win_set_click_type(mac);
    win_set_img(mac);
    win_set_manual_rerec(mac, type);

    if (replace_txt) {
        win_set_msg_param(mac, infotext);
    }

    if (mac.HasParam("text_d") && !is_passwd) mac.SetParam("text_d", newvalue);
    if (mac.HasParam("fieldname")) mac.SetParam("fieldname", fieldname);
    
    // if (mac.HasParam("set_focus")) mac.SetParam("set_focus", cfg.standard.winrec.insert_inactive_edit_macros);
}

function win_update_checkbox(mac, type, replace_txt) {
    var fieldname = WinApp.CtrlFieldname;
    var newvalue = WinApp.CtrlValue;
    var infotext = get_infotxt(type);

    // win_set_img(mac);
    win_set_path(mac);
    win_set_manual_rerec(mac, type);

    if (replace_txt) {
        win_set_msg_param(mac, infotext);
    }

    if (mac.HasParam("choose_bool")) {
        mac.SetParam("choose_bool", newvalue);
    }

    if (mac.HasParam("fieldname")) {
        mac.SetParam("fieldname", fieldname);
    }
    
    WinApp.RecaptureControl(false);
    
    win_set_img(mac);
    
   /* 
    // hack to accomodate generated html
    var ctrl_rect = WinApp.CtrlRect;
    if (ctrl_rect.width > 18) {
        
        if (type == "WINRadio") {
            var top_offset = (ctrl_rect.height - 12) / 2;
            
            ctrl_rect.left += 1;
            ctrl_rect.right = ctrl_rect.left + 12;
            
            ctrl_rect.top += top_offset;
            ctrl_rect.bottom = ctrl_rect.top + 12;
        } else {
            var top_offset = (ctrl_rect.height - 13) / 2;
            
            ctrl_rect.right = ctrl_rect.left + 13;
            
            ctrl_rect.top += top_offset;
            ctrl_rect.bottom = ctrl_rect.top + 13;
        }
    }
    WinApp.UpdateCtrlRect(ctrl_rect);
    // hack ends
    */
}

function win_update_selectbox(mac, type, replace_txt) {
    var fieldname = WinApp.CtrlFieldname;
    var newvalue = WinApp.CtrlValue;
    var infotext = get_infotxt(type);

    // insert_prop(infotext, 'fieldname', fieldname);
    // insert_prop(infotext, 'newvalue', newvalue);

    win_set_img(mac);
    win_set_path(mac);
    win_set_manual_rerec(mac, type);

    if (mac.HasParam("choose_text") && newvalue != "") {
        var arr = newvalue.split('\n');
        
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] != "") {
                var index = arr[i].indexOf("{*}");
                if (index != -1) {
                    var val = arr[i].substr(index + 3, arr[i].length);
                    mac.SetParam("choose_text", val);
                }
            }
        }
    }
    
    if (replace_txt) {
        win_set_msg_param(mac, infotext);
    }

    if (mac.HasParam("fieldname")) {
        mac.SetParam("fieldname", fieldname);
    }
}

function win_update_tpcd_click(mac, type, replace_txt) {
    var fieldname = WinApp.CtrlFieldname;
    var infotext = win_get_infotxt(mac, type);

    win_set_img(mac);
    win_set_path(mac);
    win_set_manual_rerec(mac, type);

    if (replace_txt) {
        win_set_msg_param(mac, infotext);
    }

    win_set_click_type(mac);

    if (mac.HasParam("fieldname")) {
        mac.SetParam("fieldname", fieldname);
    }
}

function win_update_click(mac, type, replace_txt) {
    var fieldname = WinApp.CtrlFieldname;
    var img_file = WinApp.CtrlImgFile;
    var infotext = win_get_infotxt(mac, type);

    if (mac.HasParam("fieldname")) {
        mac.SetParam("fieldname", fieldname);
    }

    //if (fieldname.length == 0) {
        win_set_img(mac);
    //}
    
    win_set_path(mac);
    win_set_manual_rerec(mac, type);

    if (replace_txt) {
        win_set_msg_param(mac, infotext);
    }

    win_set_click_type(mac);
}

function win_update_tab_click(mac, type, replace_txt) {
    var fieldname = WinApp.CtrlFieldname;
    var img_file = WinApp.CtrlImgFile;
    var infotext = win_get_infotxt(mac, type);

    if (mac.HasParam("fieldname")) {
        mac.SetParam("fieldname", fieldname);
    }

    win_set_img(mac);
    win_set_path(mac);
    win_set_manual_rerec(mac, type);

    if (replace_txt) {
        win_set_msg_param(mac, infotext);
    }

    win_set_click_type(mac);

    if (mac.HasParam("leaves_page")) {
         mac.SetParam("leaves_page", true);
    }
}

function win_update_text_click(mac, type, replace_txt) {
    var fieldname = WinApp.CtrlFieldname;
    var img_file = WinApp.CtrlImgFile;
    var infotext = win_get_infotxt(mac, type);

    if (mac.HasParam("fieldname")) {
        mac.SetParam("fieldname", fieldname);
    }

    win_set_img(mac);
    win_set_path(mac);
    win_set_manual_rerec(mac, type);

    if (replace_txt) {
        win_set_msg_param(mac, infotext);
    }

    win_set_click_type(mac);
}

function win_update_asset(mac) {

    if (mac.HasParam("new_step")) {
        mac.SetParam("new_step", WinApp.Title);
    }

    if (mac.HasParam("dump_page")) {
        if (ctrl_web_compat && WinApp.WebAssetAvail()) {
            mac.SetParam("dump_page", WinApp.WebAsset());
        } else {
            mac.SetParam("dump_page", WinApp.ScreenFile);
        }
    }

    if (WinApp.ImgFile != "") {

        if (mac.HasParam("screenshot_file")) {
            mac.SetParam("screenshot_file", WinApp.ImgFile);
        }

        if (mac.HasParam("screenshot_rect") && WinApp.ScreenRect != null) {
            mac.SetParam("screenshot_rect", WinApp.ScreenRect);
        }

        if (mac.HasParam("element_type")) {
            mac.SetParam("element_type", "screenshot");
        }
    }
    
    if (mac.HasParam("key") && curr_page_key != "") {
        mac.SetParam("key", "{\n" + curr_page_key + "\n}");
    }
}

function win_set_path(mac) {
    var ctrl_path = WinApp.CtrlPath;
    var rp = CreatePosition();

    if (ctrl_web_compat && WinApp.WebAssetAvail() && winweb_elempath_extract(WinApp.AppCtrlPath)) {
        rp.ElementPath = winweb_elempath;
        rp.ID = winweb_remove_type(WinApp.AppCtrlPath);
        
        if (winweb_framepath != "") {
            rp.FramePath = winweb_framepath;
        } else {
            rp.FramePathPush(0);
        }
    } else {
        ctrl_web_compat = false;
        rp.ElementPath = ctrl_path;
        rp.FramePathPush(0);
    }

    if (mac.HasParam("position_h")) {
        mac.SetParam("position_h", rp);
    }

    var rp_b = rp.Clone();
    var ori = demo_bubble_pos2(rp_b);

    if (mac.HasParam("orientation")) {
        mac.SetParam("orientation", ori);
    }

    if (mac.HasParam("position_b")) {
        mac.SetParam("position_b", rp_b);
    }

    if (mac.HasParam("position_bu")) {
        
        if (cfg.standard.rec.practice_bubble_at_element) {

            if (mac.HasParam("orientation_p")) {
                mac.SetParam("orientation_p", ori);
            }
            mac.SetParam("position_bu", rp_b);
        } else {
            rp.ElementPath = "";
            rp.ID = "";
            rp.DocX = 50;
            rp.DocY = 50;
            rp.X = 50;
            rp.Y = 50;
            
            mac.SetParam("position_bu", rp);
        }
    }
    
    if (mac.HasParam("elem_key")) {
        mac.SetParam("elem_key", WinApp.AppCtrlPath);
    } 
}

function win_set_img(mac) {
    var ctrl_rect = WinApp.CtrlRect;
    var img_file = WinApp.CtrlImgFile;
    var click_pos = WinApp.ClickPos;
    var icon_file = WinApp.FieldIconFile;

    if (img_file.length) {
        if (mac.HasParam("screenshot_file")) {
            mac.SetParam("screenshot_file", img_file);
        }

        if (mac.HasParam("screenshot_rect")) {
            mac.SetParam("screenshot_rect", ctrl_rect);
        }

        if (mac.HasParam("overlay_pos")) {
            mac.SetParam("overlay_pos", ctrl_rect.topleft);
        }
    }

    if (icon_file != "" && mac.HasParam("fieldicon")) {
        mac.SetParam("fieldicon", icon_file);
    }

    if (mac.HasParam("click_pos")) {
        mac.SetParam("click_pos", click_pos);
    }
}

function win_set_msg_param(mac, infotext) {

    if (infotext.demo != "" && mac.HasParam("explanation_d")) {
        var replace = true;
        
        if (mac.HasParam("explanation_d_modified") && mac.GetParam("explanation_d_modified")) {
            replace = false;
        }
        
        if (replace) {
            mac.SetParam("explanation_d", infotext.demo);
        }
    }

    if (infotext.prac != "" && mac.HasParam("explanation_p")) {
        var replace = true;
        
        if (mac.HasParam("explanation_p_modified") && mac.GetParam("explanation_p_modified")) {
            replace = false;
        }
        
        if (replace) {
            mac.SetParam("explanation_p", infotext.prac);
        }
    }
}

function win_set_click_type(mac) {

    if (mac.HasParam("action")) {
        mac.SetParam("action", WinApp.ClickType);
    }
}

function win_get_infotxt(mac, type) {
    var infotext = get_infotxt(type);

    if (mac.HasParam("action")) {
        var my_type = hmap[type + "::" + WinApp.ClickType];
        if (my_type != null) {
            infotext = get_infotxt(type + "::" + WinApp.ClickType);
        }
    }
    return infotext;
}

function win_set_manual_rerec(mac, type) {

    if (mac.HasParam("rerec_manual")) {
        var my_type = hmap[type];
        if (my_type != null) {
            //mac.SetParam("rerec_manual", my_type.manual_rerec);
        }
    }
}

// returns new orientation
function demo_bubble_pos2(relpos) {

    if (cfg.standard.rec.demo_bubble_at_element && WinApp.CtrlRect != null && WinApp.ScreenRect != null) {
        var elem_rect = WinApp.CtrlRect;
        var win_rect = WinApp.ScreenRect;
        var can_left = true;
        var can_right = true;
        var can_top = true;
        var can_bottom = true;

        if (elem_rect.left < 0.3 * win_rect.width || 0.3 * win_rect.width < 150) {
            can_left = false;
        }
        if (elem_rect.right > 0.7 * win_rect.width && 0.3 * win_rect.width >= 150) {
            can_right = false;
        }
        if (elem_rect.top < 0.3 * win_rect.height || 0.3 * win_rect.height < 150) {
            can_top = false;
        }
        if (elem_rect.bottom > 0.7 * win_rect.height && 0.3 * win_rect.height >= 150) {
            can_bottom = false;
        }

        var h_ori = can_left ? "W" : (can_right ? "E" : "");
        var v_ori = can_top ? "N" : (can_bottom ? "S" : "");

        var ori = v_ori + h_ori;
        if (ori == "") ori = "C";

        if (h_ori == "E") {
            relpos.X = 100;
            relpos.OffsetX = 10;
        } else if (h_ori == "W") {
            relpos.X = 0
            relpos.OffsetX = -10;
        } else {
            // horizontal center
            relpos.X = 50
            relpos.OffsetX = 0;
        }

        if (v_ori == "S") {
            relpos.Y = 100;
            relpos.OffsetY = 10;
        } else if (v_ori == "N") {
            relpos.Y = 0;
            relpos.OffsetY = -10;
        } else {
            relpos.Y = 50;
            relpos.OffsetY = 0;
        }

        return ori;
    } else {
        var winid = relpos.WindowID;

        // clip of longer frame-paths for demo bubble
        if (relpos.FramePath.match("" + relpos.WindowID + ":0.*")) {
            relpos.FramePath = "" + relpos.WindowID + ":0";
        } else if (relpos.FramePath.match("" + relpos.WindowID + ":1.*")) {
            relpos.FramePath = "" + relpos.WindowID + ":1";
        }

        relpos.ElementPath = "";
        relpos.DocX = 90;
        relpos.DocY = 90;
        relpos.X = 90;
        relpos.Y = 90;
        relpos.OffsetX = -100;
        relpos.OffsetY = -100;

        return "C";
    }
}

function win_window_resizable() {
    var class_name = WinApp.GetFgWinClass();
    log("win class:" + class_name);
                    
    if (class_name == "Internet Explorer_TridentDlgFrame" ||
        class_name == "#32770" /* alerts */) {
        return false;
    }
    
    return true;
}

function winweb_elempath_extract(path) {
    winweb_elempath = "";
    winweb_framepath = "";
    
    if (path != "") {
        var ep_index = path.indexOf("eep_simple_path");
        
        if (ep_index != -1) {
            ep_index = path.indexOf('"', ep_index);
            winweb_elempath = path.substring(ep_index+1, path.indexOf('"', ep_index+1));
            
            log(winweb_elempath);
            
            var fp_index = path.indexOf("eep_frame");
            
            if (fp_index != -1) {
                fp_index = path.indexOf('"', fp_index);
                winweb_framepath = path.substring(fp_index+1, path.indexOf('"', fp_index+1));
            }
            
            if (winweb_framepath.length == 0) {
                winweb_framepath = "0";
            } else {
                winweb_framepath = "0:" + winweb_framepath;
            }
            
            log(winweb_framepath);
            
            return true;
        }
       
    }
    
    return false;
}

function winweb_remove_type(path) {
    var eep = "";
    var proc_index = path.indexOf(",HTML:");
    
    if (proc_index == -1) {
        proc_index = path.indexOf(",BHO:");
    }
    
    if (path .indexOf("type") == 0 && proc_index != -1) {
        eep = path.substr(proc_index + 6, path.length);

        if (eep.length > 0 && eep.charAt(eep.length-1) == ",") {
            eep = eep.substring(0, eep.length-1);
        }
    }
    
    return eep;
}