#use(ui_lang.js)

var s2n_macmap = {
    "explanation":        "explanation",
    "explanation_long":   "explanation_long",
    "quick_click":        "click",
    "click":              "click",
    "key_press":          "key_press",
    "input_text":         "input_text",
    "select_single":      "select_single",
    "input_radio":        "input_radio"
};
 
function s2n_startunit() {
    log("s2n_startunit");
    var ts = AddTourstop("ID's", Tourstop_HIDE_NOJUMP);
    
    InsertEventAfter(CreateMacro("start_unit"));
}

function s2n_asset2target(mac, caption, docdir) {
    SetCurrentTourstop(0);
    
    var tar_mac = CreateMacro("define_target");
    
    if (mac.HasParam("key") && tar_mac.HasParam("key")) {
         tar_mac.SetParam("key", mac.GetParam("key"));
    }
    
    if (mac.HasParam("sc_config_file") && tar_mac.HasParam("config_file")) {
        tar_mac.SetParam("config_file", mac.GetParam("sc_config_file"));
    }
    
    if (mac.HasParam("screenshot_rect") && tar_mac.HasParam("win_rect")) {
        tar_mac.SetParam("win_rect", mac.GetParam("screenshot_rect"));
    }
    
    if (tar_mac.HasParam("ts")) {
        tar_mac.SetParam("ts", caption);
    }
    
    if (mac.HasParam("macro_comment") && tar_mac.HasParam("macro_comment")) {
        tar_mac.SetParam("macro_comment", mac.GetParam("macro_comment"));
    }
    
    if (mac.HasParam("screenshot_file") && tar_mac.HasParam("screenshot_file")) {
        CopyFile(docdir + mac.GetParam("screenshot_file"), Project.DocPath + mac.GetParam("screenshot_file"));
        
        tar_mac.SetParam("screenshot_file", mac.GetParam("screenshot_file"));
    }
    
    AppendEvent(tar_mac);
}

function s2nmac(mac, leaves_page, tsindex, macindex, pagedir) {
    var nmac = null;
    
    if (s2n_macmap[mac.Template()] != null) {
        nmac =  CreateMacro(s2n_macmap[mac.Template()]);
    }
    
    if (nmac == null) return;
    
    var objname = "NS" + tsindex + "_Obj" + macindex;
    
    if (mac.HasParam("macro_comment") && nmac.HasParam("macro_comment")) {
        nmac.SetParam("macro_comment", mac.GetParam("macro_comment"));
    }
    
    if (mac.HasParam("element_type") && nmac.HasParam("element_type")) {
        nmac.SetParam("element_type", mac.GetParam("element_type"));
    }
    
    if (nmac.HasParam("leaves_page")) {
        nmac.SetParam("leaves_page", leaves_page == 0 ? false : true);
    }
    
    if (nmac.HasParam("objname")) {
        nmac.SetParam("objname", objname);
    }
     
    if (mac.HasParam("fieldname") && nmac.HasParam("fieldname")) {
        nmac.SetParam("fieldname", mac.GetParam("fieldname"));
    }
    
    if (mac.HasParam("click_pos") && nmac.HasParam("click_pos")) {
        nmac.SetParam("click_pos", mac.GetParam("click_pos"));
    }
    
    if (mac.HasParam("elem_key") && nmac.HasParam("path")) {
        nmac.SetParam("path", mac.GetParam("elem_key"));
    }
    
    if (mac.HasParam("text_d") && nmac.HasParam("text_d")) {
        nmac.SetParam("text_d", mac.GetParam("text_d"));
    }
    
    if (mac.HasParam("explanation_d") && nmac.HasParam("explanation_d")) {
        nmac.SetParam("explanation_d", mac.GetParam("explanation_d"));
    }
    
    if (nmac.HasParam("bubblestyle_d")) {
        nmac.SetParam("bubblestyle_d", "orange_gradient");
    }
    
    if (nmac.HasParam("g_highlight_bgr")) {
        nmac.SetParam("g_highlight_bgr", "0x0036e0");
    }
    
    if (mac.HasParam("fieldicon") && nmac.HasParam("fieldicon")) {
        CopyFile(pagedir + mac.GetParam("fieldicon"), Project.PagePath + mac.GetParam("fieldicon"));
        
        nmac.SetParam("fieldicon", mac.GetParam("fieldicon"));
    }
    
    AppendEvent(nmac);
}

function s2n_ts2ns(macs, leaves_page, caption, tsindex, pagedir) {
    var ts = AddTourstop(caption);

    if (macs != null) {
        log("s2n_ts2ns() - macros:" + macs.length);
        for (var i = 0; i < macs.length; i++) {
            s2nmac(macs[i], leaves_page[i], tsindex, i, pagedir);
        }
    }
}

function go_standby2(enable) {
    var f = '';
    
    if (enable) {
        f = 'stdby.onmouseover= function() {stdby.src=\"' + Project.PathUp + '../resource/navigation_icons/play_mouseover.gif\";};'
        f = f + 'stdby.onmouseout= function() {stdby.src=\"' + Project.PathUp + '../resource/navigation_icons/play_enabled.gif\";};';
        f = f + 'stdby.src=\"' + Project.PathUp + '../resource/navigation_icons/play_enabled.gif\";window.external.onClick(\"winnavp_Standby(true);\");';
    } else {
        f = 'stdby.onmouseover=function() {}; stdby.onmouseout=function() {}; stdby.src=\"' + Project.PathUp + '../resource/navigation_icons/play_disabled.gif\";window.external.onClick(\"winnavp_Standby(false);\");';
    }
    
    return f;
}

function s2n_prj_fo(x, y, dispname, prjdir) {
    SetCurrentTourstop(NumTourstops() - 1);
    
    AddTourstop('Display', Tourstop_HIDE_NOJUMP);
    
    // insert free object
    var fo_mac = CreateMacro("free_object");
    var fo_name = 'Display';
    
    if (fo_mac.HasParam("macro_comment")) {
        fo_mac.SetParam("macro_comment", fo_name);
    }
    if (fo_mac.HasParam("objname")) {
        fo_mac.SetParam("objname", fo_name);
    }
    if (fo_mac.HasParam("position")) {
        var pt = CreatePoint(x, y);
        fo_mac.SetParam("position", pt);
    }
    if (fo_mac.HasParam("explanation_d")) {
        var str = "<center><b><font size=3>" + dispname + "</font><br>";
        str = str + "<font size=2 color=#cdccb0>" + ui_trans("tech_preview") + "</font><br>";
        str = str + "<font size=1  color=#cdccb0>" + ui_trans("support_warn") + "</font></b></center><br>";
        str = str + "<table width=214><tr><td align=left width=107><a id=demolnk href='" + "../" + prjdir + "/" + prjdir + "_demo.html" + "' target=blank onclick='" + go_standby2(true) + "'><img border=0 src=\"" + Project.PathUp + "../resource/navigation_icons/demo_normal.gif\" onmouseover='this.src=\"" + Project.PathUp + "../resource/navigation_icons/demo_mouseover.gif\";' onmouseout='this.src=\"" + Project.PathUp + "../resource/navigation_icons/demo_normal.gif\";'></a>&nbsp;&nbsp;";
        str = str + "<a href='" + "../" + prjdir + "/" + prjdir + "_uebung.html" + "' target=blank onclick='" + go_standby2(true) + "'><img border=0 src=\"" + Project.PathUp + "../resource/navigation_icons/practice_normal.gif\" onmouseover='this.src=\"" + Project.PathUp + "../resource/navigation_icons/practice_mouseover.gif\";' onmouseout='this.src=\"" + Project.PathUp + "../resource/navigation_icons/practice_normal.gif\";'></a></td>";
        str = str + "<td align=right width=107><img id=stdby src=\"" + Project.PathUp + "../resource/navigation_icons/play_disabled.gif\" onclick='" + go_standby2(false) + "'>&nbsp;&nbsp;<img src=\"" + Project.PathUp + "../resource/navigation_icons/close_normal.gif\" onclick='window.external.onClick(\"NavPlayer.ShutNavigator();NavPlayer.Stop();\")' onmouseover='this.src=\"" + Project.PathUp + "../resource/navigation_icons/close_mouseover.gif\";' onmouseout='this.src=\"" + Project.PathUp + "../resource/navigation_icons/close_normal.gif\";'></td>";
        str = str + "</tr></table><hr>";
    
        fo_mac.SetParam("explanation_d", str);
    }
    
    if (fo_mac.HasParam("bubblestyle_d")) {
        fo_mac.SetParam("bubblestyle_d", "orange_gradient");
    }
    if (fo_mac.HasParam("orientation")) {
        fo_mac.SetParam("orientation", "S");
    }
    if (fo_mac.HasParam("no_spike")) {
        fo_mac.SetParam("no_spike", true);
    }
    if (fo_mac.HasParam("b_width")) {
        fo_mac.SetParam("b_width", 240);
    }
    if (fo_mac.HasParam("b_height")) {
        fo_mac.SetParam("b_height", 40);
    }
    if (fo_mac.HasParam("bubble_offset")) {
        var pt = CreatePoint(20, 0);
        fo_mac.SetParam("bubble_offset", pt);
    }
    AppendEvent(fo_mac);
    
     // insert behaviour to show free object
    var fo_beh_mac = CreateMacro("beh_display_fo");
    var fo_show_beh_name = 'Display-Show';
    
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

function show_control_str2(objname, index) {
    var f = "window.external.onClick(\"winnavp_ShowControlExt({objindex:" + index + ",border:3,color:0x0036e0,animsteps:60,autohide:0});\");";
    
    return f;
}

function mac_foe(mac, caption, tsindex, macindex) {
    var objname = "NS" + tsindex + "_Obj" + macindex;
    var foe_name = "Display-" + objname;
    var fo_name = 'Display';
    
     // insert free object element
    var foe_mac = CreateMacro("free_object_elem");
      
    if (foe_mac.HasParam("macro_comment")) {
        foe_mac.SetParam("macro_comment", foe_name);
    }
    if (foe_mac.HasParam("objname")) {
        foe_mac.SetParam("objname", foe_name);
    }
    if (foe_mac.HasParam("free_object")) {
        foe_mac.SetParam("free_object", fo_name);
    }
    if (foe_mac.HasParam("explanation_d")) {
        foe_mac.SetParam("explanation_d", "<ol style='list-style-type:disc;list-style-position:outside'><li onclick='" + show_control_str2(objname, macindex) + "'>" + mac.GetParamExpanded("explanation_d") + "</ol>");
    }
    if (foe_mac.HasParam("enabled")) {
        foe_mac.SetParam("enabled", false);
    }
    
    AppendEvent(foe_mac);
    
     // insert behaviour to enable free object element
    var foe_beh_mac = CreateMacro("beh_foe_change_state");
    var foe_beh_name = "Display-" + objname;
    
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
        foe_assign_mac.SetParam("ts", caption);
    }
    AppendEvent(foe_assign_mac);
    
      // insert behaviour to disable free object element
    foe_beh_mac = CreateMacro("beh_foe_change_state");
    foe_beh_name = "Hide-" + objname;
    
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
        foe_beh_mac.SetParam("enabled", false);
    }
    if (foe_beh_mac.HasParam("exclusive")) {
        foe_beh_mac.SetParam("exclusive", false);
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
        foe_assign_mac.SetParam("action", "PageUnload");
    }
    if (foe_assign_mac.HasParam("ts")) {
        foe_assign_mac.SetParam("ts", caption);
    }
    AppendEvent(foe_assign_mac);
    

     // insert behaviour to emph free object element
    foe_beh_mac = CreateMacro("beh_foe_bold");
    foe_beh_name = "EmphFOE-" + objname;
    
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
    AppendEvent(foe_beh_mac);
    
     // assign behaviour to enable free object element
    var foe_assign_mac = CreateMacro("behaviour_assign_object");
    
    if (foe_assign_mac.HasParam("macro_comment")) {
        foe_assign_mac.SetParam("macro_comment", foe_beh_name);
    }
    if (foe_assign_mac.HasParam("behaviour")) {
        foe_assign_mac.SetParam("behaviour", foe_beh_name);
    }
    if (foe_assign_mac.HasParam("action")) {
        foe_assign_mac.SetParam("action", "Focus");
    }
    if (foe_assign_mac.HasParam("objname2")) {
        foe_assign_mac.SetParam("objname2", objname);
    }
    AppendEvent(foe_assign_mac);
}

function s2n_ns_foe(macs, caption, tsindex) {
    var foe_name = "Display-" + caption;
    var fo_name = 'Display';
    
     // insert free object element
    var foe_mac = CreateMacro("free_object_elem");
      
    if (foe_mac.HasParam("macro_comment")) {
        foe_mac.SetParam("macro_comment", foe_name);
    }
    if (foe_mac.HasParam("objname")) {
        foe_mac.SetParam("objname", foe_name);
    }
    if (foe_mac.HasParam("free_object")) {
        foe_mac.SetParam("free_object", fo_name);
    }
    if (foe_mac.HasParam("explanation_d")) {
        foe_mac.SetParam("explanation_d", "<br><center><b>" + caption + "</center></b><br>");
    }
    if (foe_mac.HasParam("enabled")) {
        foe_mac.SetParam("enabled", false);
    }
    
    AppendEvent(foe_mac);
    
     // insert behaviour to enable free object element
    var foe_beh_mac = CreateMacro("beh_foe_change_state");
    var foe_beh_name = "Display-" + caption;
    
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
        foe_assign_mac.SetParam("ts", caption);
    }
    AppendEvent(foe_assign_mac);
                          

     // insert behaviour to disable free object element
    foe_beh_mac = CreateMacro("beh_foe_change_state");
    foe_beh_name = "Hide-" + caption;
    
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
        foe_beh_mac.SetParam("enabled", false);
    }
    if (foe_beh_mac.HasParam("exclusive")) {
        foe_beh_mac.SetParam("exclusive", false);
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
        foe_assign_mac.SetParam("action", "PageUnload");
    }
    if (foe_assign_mac.HasParam("ts")) {
        foe_assign_mac.SetParam("ts", caption);
    }
    AppendEvent(foe_assign_mac);
        
    if (macs != null) {
        for (var i = 0; i < macs.length; i++) {
            mac_foe(macs[i], caption, tsindex, i);
        }
    }
}