
    
function MacroSet() {};
MacroSet.prototype = {
		
build_globals: function(c){
	if (!("global_params" in c)) c.global_params = new Object;
	var pc = new ParamChecker(c.defaults, "global", c.global_params);
	pc.Check("g_highlight_name", "TEXT", "hl" );
	pc.Check("g_highlight_effect", "ENUM", "frame" );
	pc.Check("g_highlight_style", "TEXT", "red" );
	pc.Check("g_highlight_fillstyle", "TEXT", "" );
	pc.Check("g_highlight_border", "ENUM", "2" );
	pc.Check("g_highlight_rgb", "COLOR", "FF0000" );
	pc.Check("g_bubble_text_style", "TEXT", "\'size=100%\'" );
	pc.Check("g_linktextpraxis", "TEXT", "weiter" );
	pc.Check("g_back_link", "TEXT", "zurück" );
	
},
	
/////////////////////////////////////////////////////////////////////////////////////
//start_unit
/////////////////////////////////////////////////////////////////////////////////////
start_unit:function(c, win_,  time, PARAMS) {
			var pc = new ParamChecker(c.defaults, "start_unit", PARAMS);
		
		pc.Check("macro_comment", "COMMENT");
		pc.Check("obj_index", "INTEGER", 0);
		pc.Check("app_res_time", "INTEGER", 0);
		pc.Check("use_screen_watcher", "BOOL_0_1", 0);
		pc.Check("screen_tolerence", "INTEGER", 6);
		pc.Check("sc_calm_down_time", "INTEGER", 20);
	switch(c.mode) {
		
	};
},

/////////////////////////////////////////////////////////////////////////////////////
//define_target
/////////////////////////////////////////////////////////////////////////////////////
define_target:function(c, win_,  time, PARAMS) {
			var pc = new ParamChecker(c.defaults, "define_target", PARAMS);
		
		pc.Check("macro_comment", "COMMENT");
		pc.Check("ts", "TOURSTOP_CAPTION");
		pc.Check("process_id", "TEXT", "-1");
		pc.Check("mode", "ENUM", "Single Bubble");
		pc.Check("config_file", "TEXT");
		pc.Check("revision", "TEXT");
		pc.Check("key", "TEXT_SHORT");
		pc.Check("subkey", "BOOL_0_1", 0);
		pc.Check("screenshot_file", "IMAGE_DOC_REL");
		pc.Check("win_rect", "POSSIZE");
		pc.Check("bubblestyle_d", "SHELF", "_default");
		pc.Check("single_bubble_pos", "POSITION");
		pc.Check("b_width", "INTEGER", 150);
		pc.Check("b_height", "INTEGER", 40);
		pc.Check("orientation", "ORIENTATION_BUBBLE", "C");
		pc.Check("b_minimizable", "BOOL_0_1", 1);
		pc.Check("b_movable", "BOOL_0_1", 1);
		pc.Check("g_highlight_effect", "ENUM", "frame");
		pc.Check("g_highlight_border", "INTEGER", 3);
		pc.Check("g_highlight_bgr", "TEXT", "0x0000ff");
		pc.Check("anim_steps", "INTEGER", 30);
		pc.Check("resize", "BOOL_0_1", 0);
		pc.Check("ts_validatory", "BOOL_0_1", 0);
		pc.Check("key_sc_depend", "BOOL_0_1", 1);
		pc.Check("ts_sc_depend", "BOOL_0_1", 1);
		pc.Check("screen_tolerence", "INTEGER", -1);
	switch(c.mode) {
		
	};
},

/////////////////////////////////////////////////////////////////////////////////////
//explanation
/////////////////////////////////////////////////////////////////////////////////////
explanation:function(c, win_,  time, PARAMS) {
			var pc = new ParamChecker(c.defaults, "explanation", PARAMS);
		
		pc.Check("macro_comment", "COMMENT");
		pc.Check("explanation_d", "HTML");
		pc.Check("enabled", "BOOL_0_1", 1);
		pc.Check("init", "TEXT_SHORT");
		pc.Check("fieldname", "TEXT");
		pc.Check("fieldicon", "IMAGE_PAGE_REL");
		pc.Check("bubblestyle_d", "SHELF", "_default");
		pc.Check("b_width", "INTEGER", 180);
		pc.Check("b_height", "INTEGER", 40);
		pc.Check("click_pos_rel", "POSITION");
		pc.Check("orientation", "ORIENTATION_BUBBLE", "SE");
		pc.Check("bubble_offset", "POSITION");
		pc.Check("b_minimized", "BOOL_0_1", 0);
		pc.Check("no_spike", "BOOL_0_1", 0);
		pc.Check("b_minimizable", "BOOL_0_1", 1);
		pc.Check("b_movable", "BOOL_0_1", 1);
	switch(c.mode) {
		
	};
},

/////////////////////////////////////////////////////////////////////////////////////
//explanation_long
/////////////////////////////////////////////////////////////////////////////////////
explanation_long:function(c, win_,  time, PARAMS) {
			var pc = new ParamChecker(c.defaults, "explanation_long", PARAMS);
		
		pc.Check("macro_comment", "COMMENT");
		pc.Check("explanation_d", "HTML");
		pc.Check("enabled", "BOOL_0_1", 1);
		pc.Check("init", "TEXT_SHORT");
		pc.Check("fieldname", "TEXT");
		pc.Check("fieldicon", "IMAGE_PAGE_REL");
		pc.Check("bubblestyle_d", "SHELF", "_default");
		pc.Check("b_width", "INTEGER", 400);
		pc.Check("b_height", "INTEGER", 40);
		pc.Check("click_pos_rel", "POSITION");
		pc.Check("orientation", "ORIENTATION_BUBBLE", "C");
		pc.Check("bubble_offset", "POSITION");
		pc.Check("b_minimized", "BOOL_0_1", 0);
		pc.Check("no_spike", "BOOL_0_1", 0);
		pc.Check("b_minimizable", "BOOL_0_1", 1);
		pc.Check("b_movable", "BOOL_0_1", 1);
	switch(c.mode) {
		
	};
},

/////////////////////////////////////////////////////////////////////////////////////
//choose_process
/////////////////////////////////////////////////////////////////////////////////////
choose_process:function(c, win_,  time, PARAMS) {
			var pc = new ParamChecker(c.defaults, "choose_process", PARAMS);
		
		pc.Check("macro_comment", "COMMENT");
		pc.Check("explanation_d", "HTML", "<INPUT type=\"radio\" name=\"proc\" onclick=\'window.external.onClick(\"winnavp_SetProcessID(1);winnavp_Restart();\")\'>Process 1<BR><INPUT type=\"radio\" name=\"proc\" onclick=\'window.external.onClick(\"winnavp_SetProcessID(2);winnavp_Restart();\");\'>Process 2");
		pc.Check("init", "TEXT_SHORT");
		pc.Check("bubblestyle_d", "SHELF", "_default");
		pc.Check("b_width", "INTEGER", 180);
		pc.Check("b_height", "INTEGER", 40);
		pc.Check("click_pos_rel", "POSITION");
		pc.Check("orientation", "ORIENTATION_BUBBLE", "C");
		pc.Check("bubble_offset", "POSITION");
		pc.Check("b_minimized", "BOOL_0_1", 0);
		pc.Check("no_spike", "BOOL_0_1", 0);
		pc.Check("b_minimizable", "BOOL_0_1", 1);
		pc.Check("b_movable", "BOOL_0_1", 1);
	switch(c.mode) {
		
	};
},

/////////////////////////////////////////////////////////////////////////////////////
//click
/////////////////////////////////////////////////////////////////////////////////////
click:function(c, win_,  time, PARAMS) {
			var pc = new ParamChecker(c.defaults, "click", PARAMS);
		
		pc.Check("macro_comment", "COMMENT");
		pc.Check("objname", "TEXT");
		pc.Check("fieldname", "TEXT");
		pc.Check("fieldicon", "IMAGE_PAGE_REL");
		pc.Check("explanation_d", "HTML");
		pc.Check("enabled", "BOOL_0_1", 1);
		pc.Check("action", "ENUM", "lclick");
		pc.Check("show_bubble", "BOOL_0_1", 1);
		pc.Check("bubblestyle_d", "SHELF", "_default");
		pc.Check("b_width", "INTEGER", 150);
		pc.Check("b_height", "INTEGER", 40);
		pc.Check("orientation", "ORIENTATION_BUBBLE", "SE");
		pc.Check("bubble_offset", "POSITION");
		pc.Check("b_minimized", "BOOL_0_1", 0);
		pc.Check("no_spike", "BOOL_0_1", 0);
		pc.Check("b_minimizable", "BOOL_0_1", 1);
		pc.Check("b_movable", "BOOL_0_1", 1);
		pc.Check("show_on_focus", "BOOL_0_1", 0);
		pc.Check("mini_on_focuslost", "BOOL_0_1", 0);
		pc.Check("hide_on_focuslost", "BOOL_0_1", 0);
		pc.Check("show_hilight", "BOOL_0_1", 0);
		pc.Check("g_highlight_effect", "ENUM", "frame");
		pc.Check("g_highlight_border", "INTEGER", 3);
		pc.Check("g_highlight_bgr", "TEXT", "0x27B8FE");
		pc.Check("anim_steps", "INTEGER", 0);
		pc.Check("auto_hide", "BOOL_0_1", 0);
		pc.Check("init", "TEXT_SHORT");
		pc.Check("element_type", "TEXT");
		pc.Check("click_pos", "POSITION");
		pc.Check("path", "TEXT");
		pc.Check("leaves_page", "BOOL_0_1", 0);
		pc.Check("macro_validatory", "BOOL_0_1", 1);
	switch(c.mode) {
		
	};
},

/////////////////////////////////////////////////////////////////////////////////////
//active_area
/////////////////////////////////////////////////////////////////////////////////////
active_area:function(c, win_,  time, PARAMS) {
			var pc = new ParamChecker(c.defaults, "active_area", PARAMS);
		
		pc.Check("macro_comment", "COMMENT");
		pc.Check("objname", "TEXT");
		pc.Check("area", "POSSIZE");
		pc.Check("explanation_d", "HTML");
		pc.Check("enabled", "BOOL_0_1", 1);
		pc.Check("show_bubble", "BOOL_0_1", 1);
		pc.Check("bubblestyle_d", "SHELF", "_default");
		pc.Check("b_width", "INTEGER", 150);
		pc.Check("b_height", "INTEGER", 40);
		pc.Check("orientation", "ORIENTATION_BUBBLE", "SE");
		pc.Check("bubble_offset", "POSITION");
		pc.Check("b_minimized", "BOOL_0_1", 0);
		pc.Check("no_spike", "BOOL_0_1", 0);
		pc.Check("b_minimizable", "BOOL_0_1", 1);
		pc.Check("b_movable", "BOOL_0_1", 1);
		pc.Check("show_on_focus", "BOOL_0_1", 0);
		pc.Check("mini_on_focuslost", "BOOL_0_1", 0);
		pc.Check("hide_on_focuslost", "BOOL_0_1", 0);
		pc.Check("show_hilight", "BOOL_0_1", 0);
		pc.Check("g_highlight_effect", "ENUM", "frame");
		pc.Check("g_highlight_border", "INTEGER", 3);
		pc.Check("g_highlight_bgr", "TEXT", "0x27B8FE");
		pc.Check("anim_steps", "INTEGER", 0);
		pc.Check("auto_hide", "BOOL_0_1", 0);
		pc.Check("init", "TEXT_SHORT");
		pc.Check("leaves_page", "BOOL_0_1", 0);
		pc.Check("macro_validatory", "BOOL_0_1", 1);
	switch(c.mode) {
		
	};
},

/////////////////////////////////////////////////////////////////////////////////////
//key_press
/////////////////////////////////////////////////////////////////////////////////////
key_press:function(c, win_,  time, PARAMS) {
			var pc = new ParamChecker(c.defaults, "key_press", PARAMS);
		
		pc.Check("macro_comment", "COMMENT");
		pc.Check("objname", "TEXT");
		pc.Check("key_name", "TEXT");
		pc.Check("key_desc", "TEXT");
		pc.Check("explanation_d", "HTML");
		pc.Check("enabled", "BOOL_0_1", 1);
		pc.Check("bubblestyle_d", "SHELF", "_default");
		pc.Check("b_width", "INTEGER", 150);
		pc.Check("b_height", "INTEGER", 40);
		pc.Check("orientation", "ORIENTATION_BUBBLE", "SE");
		pc.Check("bubble_offset", "POSITION");
		pc.Check("b_minimized", "BOOL_0_1", 0);
		pc.Check("no_spike", "BOOL_0_1", 0);
		pc.Check("b_minimizable", "BOOL_0_1", 1);
		pc.Check("b_movable", "BOOL_0_1", 1);
		pc.Check("init", "TEXT_SHORT");
		pc.Check("click_pos_rel", "POSITION");
		pc.Check("path", "TEXT");
		pc.Check("leaves_page", "BOOL_0_1", 0);
	switch(c.mode) {
		
	};
},

/////////////////////////////////////////////////////////////////////////////////////
//input_text
/////////////////////////////////////////////////////////////////////////////////////
input_text:function(c, win_,  time, PARAMS) {
			var pc = new ParamChecker(c.defaults, "input_text", PARAMS);
		
		pc.Check("macro_comment", "COMMENT");
		pc.Check("objname", "TEXT");
		pc.Check("fieldname", "TEXT");
		pc.Check("fieldicon", "IMAGE_PAGE_REL");
		pc.Check("text_d", "TEXT");
		pc.Check("explanation_d", "HTML");
		pc.Check("enabled", "BOOL_0_1", 1);
		pc.Check("show_bubble", "BOOL_0_1", 1);
		pc.Check("bubblestyle_d", "SHELF", "_default");
		pc.Check("b_width", "INTEGER", 180);
		pc.Check("b_height", "INTEGER", 40);
		pc.Check("orientation", "ORIENTATION_BUBBLE", "SE");
		pc.Check("bubble_offset", "POSITION");
		pc.Check("b_minimized", "BOOL_0_1", 1);
		pc.Check("no_spike", "BOOL_0_1", 0);
		pc.Check("b_minimizable", "BOOL_0_1", 1);
		pc.Check("b_movable", "BOOL_0_1", 1);
		pc.Check("show_on_focus", "BOOL_0_1", 0);
		pc.Check("mini_on_focuslost", "BOOL_0_1", 0);
		pc.Check("hide_on_focuslost", "BOOL_0_1", 0);
		pc.Check("show_hilight", "BOOL_0_1", 0);
		pc.Check("g_highlight_effect", "ENUM", "frame");
		pc.Check("g_highlight_border", "INTEGER", 3);
		pc.Check("g_highlight_bgr", "TEXT", "0x27B8FE");
		pc.Check("anim_steps", "INTEGER", 0);
		pc.Check("auto_hide", "BOOL_0_1", 0);
		pc.Check("init", "TEXT_SHORT");
		pc.Check("element_type", "TEXT");
		pc.Check("click_pos", "POSITION");
		pc.Check("path", "TEXT");
		pc.Check("macro_validatory", "BOOL_0_1", 1);
		pc.Check("leaves_page", "BOOL_0_1", 0);
	switch(c.mode) {
		
	};
},

/////////////////////////////////////////////////////////////////////////////////////
//select_single
/////////////////////////////////////////////////////////////////////////////////////
select_single:function(c, win_,  time, PARAMS) {
			var pc = new ParamChecker(c.defaults, "select_single", PARAMS);
		
		pc.Check("macro_comment", "COMMENT");
		pc.Check("objname", "TEXT");
		pc.Check("fieldname", "TEXT");
		pc.Check("fieldicon", "IMAGE_PAGE_REL");
		pc.Check("choose_nr", "INTEGER", 0);
		pc.Check("choose_text", "TEXT");
		pc.Check("explanation_d", "HTML");
		pc.Check("enabled", "BOOL_0_1", 1);
		pc.Check("show_bubble", "BOOL_0_1", 1);
		pc.Check("bubblestyle_d", "SHELF", "_default");
		pc.Check("b_width", "INTEGER", 180);
		pc.Check("b_height", "INTEGER", 40);
		pc.Check("orientation", "ORIENTATION_BUBBLE", "SE");
		pc.Check("bubble_offset", "POSITION");
		pc.Check("b_minimized", "BOOL_0_1", 0);
		pc.Check("no_spike", "BOOL_0_1", 0);
		pc.Check("b_minimizable", "BOOL_0_1", 1);
		pc.Check("b_movable", "BOOL_0_1", 1);
		pc.Check("show_on_focus", "BOOL_0_1", 0);
		pc.Check("mini_on_focuslost", "BOOL_0_1", 0);
		pc.Check("hide_on_focuslost", "BOOL_0_1", 0);
		pc.Check("show_hilight", "BOOL_0_1", 0);
		pc.Check("g_highlight_effect", "ENUM", "frame");
		pc.Check("g_highlight_border", "INTEGER", 3);
		pc.Check("g_highlight_bgr", "TEXT", "0x27B8FE");
		pc.Check("anim_steps", "INTEGER", 0);
		pc.Check("auto_hide", "BOOL_0_1", 0);
		pc.Check("init", "TEXT_SHORT");
		pc.Check("element_type", "TEXT");
		pc.Check("click_pos", "POSITION");
		pc.Check("path", "TEXT");
		pc.Check("macro_validatory", "BOOL_0_1", 1);
		pc.Check("leaves_page", "BOOL_0_1", 0);
	switch(c.mode) {
		
	};
},

/////////////////////////////////////////////////////////////////////////////////////
//input_radio
/////////////////////////////////////////////////////////////////////////////////////
input_radio:function(c, win_,  time, PARAMS) {
			var pc = new ParamChecker(c.defaults, "input_radio", PARAMS);
		
		pc.Check("macro_comment", "COMMENT");
		pc.Check("objname", "TEXT");
		pc.Check("fieldname", "TEXT");
		pc.Check("fieldicon", "IMAGE_PAGE_REL");
		pc.Check("choose_bool", "TEXT");
		pc.Check("explanation_d", "HTML", "Wählen Sie diese Option aus.");
		pc.Check("enabled", "BOOL_0_1", 1);
		pc.Check("show_bubble", "BOOL_0_1", 1);
		pc.Check("bubblestyle_d", "SHELF", "_default");
		pc.Check("b_width", "INTEGER", 180);
		pc.Check("b_height", "INTEGER", 40);
		pc.Check("orientation", "ORIENTATION_BUBBLE", "SE");
		pc.Check("bubble_offset", "POSITION");
		pc.Check("b_minimized", "BOOL_0_1", 0);
		pc.Check("no_spike", "BOOL_0_1", 0);
		pc.Check("b_minimizable", "BOOL_0_1", 1);
		pc.Check("b_movable", "BOOL_0_1", 1);
		pc.Check("show_on_focus", "BOOL_0_1", 0);
		pc.Check("mini_on_focuslost", "BOOL_0_1", 0);
		pc.Check("hide_on_focuslost", "BOOL_0_1", 0);
		pc.Check("show_hilight", "BOOL_0_1", 0);
		pc.Check("g_highlight_effect", "ENUM", "frame");
		pc.Check("g_highlight_border", "INTEGER", 3);
		pc.Check("g_highlight_bgr", "TEXT", "0x27B8FE");
		pc.Check("anim_steps", "INTEGER", 0);
		pc.Check("auto_hide", "BOOL_0_1", 0);
		pc.Check("init", "TEXT_SHORT", "/*ctx_control.Handlers.onFocusLost=function(){ctx_control.HideEffectHighlight();if (ctx_control.Recapture() && NavPlayer.CtrlValue!=ctx_control.value) {ctx_control.ShowEffectHighlight();return false;} else {ctx_control.HideEffectHighlight();} return true;}*/");
		pc.Check("element_type", "TEXT");
		pc.Check("click_pos", "POSITION");
		pc.Check("path", "TEXT");
		pc.Check("macro_validatory", "BOOL_0_1", 1);
		pc.Check("leaves_page", "BOOL_0_1", 0);
	switch(c.mode) {
		
	};
},

/////////////////////////////////////////////////////////////////////////////////////
//script
/////////////////////////////////////////////////////////////////////////////////////
script:function(c, win_,  time, PARAMS) {
			var pc = new ParamChecker(c.defaults, "script", PARAMS);
		
		pc.Check("macro_comment", "COMMENT");
		pc.Check("init", "TEXT_SHORT");
	switch(c.mode) {
		
	};
},

/////////////////////////////////////////////////////////////////////////////////////
//behaviour
/////////////////////////////////////////////////////////////////////////////////////
behaviour:function(c, win_,  time, PARAMS) {
			var pc = new ParamChecker(c.defaults, "behaviour", PARAMS);
		
		pc.Check("macro_comment", "COMMENT");
		pc.Check("behave_name", "TEXT");
		pc.Check("script", "TEXT_SHORT");
	switch(c.mode) {
		
	};
},

/////////////////////////////////////////////////////////////////////////////////////
//behaviour_assign_global
/////////////////////////////////////////////////////////////////////////////////////
behaviour_assign_global:function(c, win_,  time, PARAMS) {
			var pc = new ParamChecker(c.defaults, "behaviour_assign_global", PARAMS);
		
		pc.Check("macro_comment", "COMMENT");
		pc.Check("behaviour", "MACROATTR_NAME");
		pc.Check("action", "ENUM", "LClick");
	switch(c.mode) {
		
	};
},

/////////////////////////////////////////////////////////////////////////////////////
//behaviour_assign_ns
/////////////////////////////////////////////////////////////////////////////////////
behaviour_assign_ns:function(c, win_,  time, PARAMS) {
			var pc = new ParamChecker(c.defaults, "behaviour_assign_ns", PARAMS);
		
		pc.Check("macro_comment", "COMMENT");
		pc.Check("behaviour", "MACROATTR_NAME");
		pc.Check("action", "ENUM", "LClick");
		pc.Check("ts", "TOURSTOP_CAPTION");
	switch(c.mode) {
		
	};
},

/////////////////////////////////////////////////////////////////////////////////////
//behaviour_assign_object
/////////////////////////////////////////////////////////////////////////////////////
behaviour_assign_object:function(c, win_,  time, PARAMS) {
			var pc = new ParamChecker(c.defaults, "behaviour_assign_object", PARAMS);
		
		pc.Check("macro_comment", "COMMENT");
		pc.Check("behaviour", "MACROATTR_NAME");
		pc.Check("action", "ENUM", "LClick");
		pc.Check("objname2", "MACROATTR_NAME");
	switch(c.mode) {
		
	};
},

/////////////////////////////////////////////////////////////////////////////////////
//free_object
/////////////////////////////////////////////////////////////////////////////////////
free_object:function(c, win_,  time, PARAMS) {
			var pc = new ParamChecker(c.defaults, "free_object", PARAMS);
		
		pc.Check("macro_comment", "COMMENT");
		pc.Check("objname", "TEXT");
		pc.Check("position", "POSITION");
		pc.Check("window_dependent", "BOOL_0_1", 0);
		pc.Check("explanation_d", "HTML");
		pc.Check("bubblestyle_d", "SHELF", "_default");
		pc.Check("b_width", "INTEGER", 180);
		pc.Check("b_height", "INTEGER", 40);
		pc.Check("orientation", "ORIENTATION_BUBBLE", "C");
		pc.Check("bubble_offset", "POSITION");
		pc.Check("b_minimized", "BOOL_0_1", 0);
		pc.Check("no_spike", "BOOL_0_1", 0);
		pc.Check("b_minimizable", "BOOL_0_1", 1);
		pc.Check("b_movable", "BOOL_0_1", 1);
	switch(c.mode) {
		
	};
},

/////////////////////////////////////////////////////////////////////////////////////
//free_object_elem
/////////////////////////////////////////////////////////////////////////////////////
free_object_elem:function(c, win_,  time, PARAMS) {
			var pc = new ParamChecker(c.defaults, "free_object_elem", PARAMS);
		
		pc.Check("macro_comment", "COMMENT");
		pc.Check("objname", "TEXT");
		pc.Check("free_object", "MACROATTR_NAME");
		pc.Check("explanation_d", "HTML");
		pc.Check("enabled", "BOOL_0_1", 1);
	switch(c.mode) {
		
	};
},

/////////////////////////////////////////////////////////////////////////////////////
//end_unit
/////////////////////////////////////////////////////////////////////////////////////
end_unit:function(c, win_,  time, PARAMS) {
			var pc = new ParamChecker(c.defaults, "end_unit", PARAMS);
		
		pc.Check("macro_comment", "COMMENT");
		pc.Check("ende", "TEXT");
	switch(c.mode) {
		
	};
},

/////////////////////////////////////////////////////////////////////////////////////
//beh_cancel
/////////////////////////////////////////////////////////////////////////////////////
beh_cancel:function(c, win_,  time, PARAMS) {
			var pc = new ParamChecker(c.defaults, "beh_cancel", PARAMS);
		
		pc.Check("macro_comment", "COMMENT");
		pc.Check("behave_name", "TEXT");
		pc.Check("script", "TEXT_SHORT", "return false;");
	switch(c.mode) {
		
	};
},

/////////////////////////////////////////////////////////////////////////////////////
//beh_display_fo
/////////////////////////////////////////////////////////////////////////////////////
beh_display_fo:function(c, win_,  time, PARAMS) {
			var pc = new ParamChecker(c.defaults, "beh_display_fo", PARAMS);
		
		pc.Check("macro_comment", "COMMENT");
		pc.Check("behave_name", "TEXT");
		pc.Check("free_object", "MACROATTR_NAME");
	switch(c.mode) {
		
	};
},

/////////////////////////////////////////////////////////////////////////////////////
//beh_hide_fo
/////////////////////////////////////////////////////////////////////////////////////
beh_hide_fo:function(c, win_,  time, PARAMS) {
			var pc = new ParamChecker(c.defaults, "beh_hide_fo", PARAMS);
		
		pc.Check("macro_comment", "COMMENT");
		pc.Check("behave_name", "TEXT");
		pc.Check("free_object", "MACROATTR_NAME");
	switch(c.mode) {
		
	};
},

/////////////////////////////////////////////////////////////////////////////////////
//beh_foe_bold
/////////////////////////////////////////////////////////////////////////////////////
beh_foe_bold:function(c, win_,  time, PARAMS) {
			var pc = new ParamChecker(c.defaults, "beh_foe_bold", PARAMS);
		
		pc.Check("macro_comment", "COMMENT");
		pc.Check("behave_name", "TEXT");
		pc.Check("free_object", "MACROATTR_NAME");
		pc.Check("free_object_elem", "MACROATTR_NAME");
	switch(c.mode) {
		
	};
},

/////////////////////////////////////////////////////////////////////////////////////
//beh_foe_change_state
/////////////////////////////////////////////////////////////////////////////////////
beh_foe_change_state:function(c, win_,  time, PARAMS) {
			var pc = new ParamChecker(c.defaults, "beh_foe_change_state", PARAMS);
		
		pc.Check("macro_comment", "COMMENT");
		pc.Check("behave_name", "TEXT");
		pc.Check("free_object", "MACROATTR_NAME");
		pc.Check("free_object_elem", "MACROATTR_NAME");
		pc.Check("enabled", "BOOL_0_1", 0);
		pc.Check("exclusive", "BOOL_0_1", 0);
	switch(c.mode) {
		
	};
},

/////////////////////////////////////////////////////////////////////////////////////
//beh_hilight
/////////////////////////////////////////////////////////////////////////////////////
beh_hilight:function(c, win_,  time, PARAMS) {
			var pc = new ParamChecker(c.defaults, "beh_hilight", PARAMS);
		
		pc.Check("macro_comment", "COMMENT");
		pc.Check("behave_name", "TEXT");
		pc.Check("objname2", "MACROATTR_NAME");
		pc.Check("g_highlight_effect", "ENUM", "frame");
		pc.Check("g_highlight_border", "INTEGER", 3);
		pc.Check("g_highlight_bgr", "TEXT", "0x27B8FE");
		pc.Check("anim_steps", "INTEGER", 0);
		pc.Check("auto_hide", "BOOL_0_1", 0);
	switch(c.mode) {
		
	};
},

/////////////////////////////////////////////////////////////////////////////////////
//beh_hide_hilight
/////////////////////////////////////////////////////////////////////////////////////
beh_hide_hilight:function(c, win_,  time, PARAMS) {
			var pc = new ParamChecker(c.defaults, "beh_hide_hilight", PARAMS);
		
		pc.Check("macro_comment", "COMMENT");
		pc.Check("behave_name", "TEXT");
		pc.Check("objname2", "MACROATTR_NAME");
	switch(c.mode) {
		
	};
},

/////////////////////////////////////////////////////////////////////////////////////
//beh_set_value
/////////////////////////////////////////////////////////////////////////////////////
beh_set_value:function(c, win_,  time, PARAMS) {
			var pc = new ParamChecker(c.defaults, "beh_set_value", PARAMS);
		
		pc.Check("macro_comment", "COMMENT");
		pc.Check("behave_name", "TEXT");
		pc.Check("objname2", "MACROATTR_NAME");
		pc.Check("value", "TEXT");
	switch(c.mode) {
		
	};
}
		}
	
