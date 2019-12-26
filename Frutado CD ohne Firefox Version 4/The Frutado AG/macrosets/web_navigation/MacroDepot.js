

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
//USE_HELP
/////////////////////////////////////////////////////////////////////////////////////
USE_HELP:function(c, win_,  time, PARAMS) {
            var pc = new ParamChecker(c.defaults, "USE_HELP", PARAMS);

        pc.Check("Help_Button_Path", "TEXT");
        pc.Check("Help_Button_Path2", "TEXT");
        pc.Check("Help_on", "BOOL_TRUE_FALSE", 0);
    switch(c.mode) {
        case "navi":
            //javascript1:javascript
            c.ew.javascript (win_, time, {  text:c.h.EVAL_TEMPLATE("USE_HELP__jstext_javascript1", PARAMS),
                comment:"define fc_functions",

                        relpos:{FP:"-1", EP: new win_.ElementRef("", "forms", 0, 0, ""), XY: {x:0, y:0} , DocXY: {x:0, y:0} , XY2: {x:0, y:0} , DocXY2: {x:0, y:0} , Off: {x:0, y:0} }
            });
        break;
        case "demo":break;

    };
},




/////////////////////////////////////////////////////////////////////////////////////
//define_target
/////////////////////////////////////////////////////////////////////////////////////
define_target:function(c, win_,  time, PARAMS) {
            var pc = new ParamChecker(c.defaults, "define_target", PARAMS);

        pc.Check("ts", "TOURSTOP_CAPTION");
        pc.Check("title", "TEXT");
        pc.Check("label", "TEXT");
        pc.Check("img_titles", "TEXT");
        pc.Check("dgoid", "TEXT");
        
        
    switch(c.mode) {
        case "navi":
            //js_define_target:javascript
            c.ew.javascript (win_, time, {  text:c.h.EVAL_TEMPLATE("define_target__jstext_define_target", PARAMS),
                comment:"Define Target",
                relpos:{FP:"-1", EP: new win_.ElementRef("", "", 0, 0, ""), XY: {x:0, y:0} , DocXY: {x:0, y:0} , XY2: {x:0, y:0} , DocXY2: {x:0, y:0} , Off: {x:0, y:0} }
            });
        break;
        case "demo":
            //java_script1_d:javascript
            c.ew.javascript (win_, time, {      comment:"Texteingabe",

                        relpos:{FP:"0", EP: new win_.ElementRef("", "forms", 0, 0, ""), XY: {x:0, y:0} , DocXY: {x:0, y:0} , XY2: {x:0, y:0} , DocXY2: {x:0, y:0} , Off: {x:0, y:0} }
            });
        break;

    };
},

/////////////////////////////////////////////////////////////////////////////////////
//define_context_select
/////////////////////////////////////////////////////////////////////////////////////
define_context_select:function(c, win_,  time, PARAMS) {
            var pc = new ParamChecker(c.defaults, "define_context_select", PARAMS);

        pc.Check("tourstopname", "TOURSTOP_CAPTION");
        pc.Check("title", "TEXT");
        pc.Check("label", "TEXT");
        pc.Check("selectbox", "TEXT");
        pc.Check("position_s", "RELPOS");       
        
    switch(c.mode) {
        case "navi":
            //java_script1_p:javascript
            c.ew.javascript (win_, time, {  text:c.h.EVAL_TEMPLATE("define_context_select__jstext", PARAMS),
                comment:"Texteingabe",

                        relpos:{FP:"-1", EP: new win_.ElementRef("", "forms", 0, 0, ""), XY: {x:0, y:0} , DocXY: {x:0, y:0} , XY2: {x:0, y:0} , DocXY2: {x:0, y:0} , Off: {x:0, y:0} }
            });
        break;
        case "demo":
            //java_script1_d:javascript
            c.ew.javascript (win_, time, {      comment:"Texteingabe",

                        relpos:{FP:"0", EP: new win_.ElementRef("", "forms", 0, 0, ""), XY: {x:0, y:0} , DocXY: {x:0, y:0} , XY2: {x:0, y:0} , DocXY2: {x:0, y:0} , Off: {x:0, y:0} }
            });
        break;

    };
},

/////////////////////////////////////////////////////////////////////////////////////
//navi_initB
/////////////////////////////////////////////////////////////////////////////////////
navi_initB:function(c, win_,  time, PARAMS) {
            var pc = new ParamChecker(c.defaults, "navi_initB", PARAMS);

    switch(c.mode) {
        case "navi":
            //javascript1:javascript
            c.ew.javascript (win_, time, {      comment:"Navi Extended Functions",

                        relpos:{FP:"-1", EP: new win_.ElementRef("", "forms", 0, 0, ""), XY: {x:0, y:0} , DocXY: {x:0, y:0} , XY2: {x:0, y:0} , DocXY2: {x:0, y:0} , Off: {x:0, y:0} },
                text:"\r\n" +
                "ctx_control.dateFromString = function(v_) {\r\n" +
                "    var v = v_.split(/\\./);\r\n" +
                "    return new Date((v[2] - 0), v[1] - 0, v[0] - 0);\r\n" +
                "}\r\n" +
                ""
            });

            //js_navi_cust_func:javascript
            c.ew.javascript (win_, time, {      comment:"Init Navi and Load Application",

                        relpos:{FP:"-1", EP: new win_.ElementRef("", "", 0, 0, ""), XY: {x:0, y:0} , DocXY: {x:0, y:0} , XY2: {x:0, y:0} , DocXY2: {x:0, y:0} , Off: {x:0, y:0} },
                text:"// Init Live Mode + Start Application ==========================================\r\n" +
                "\r\n" +
                "var appurl = ctx.cfg_config(\"appurl\");\r\n" +
                "var match = ctx.appurl_match_pattern;\r\n" +
                "\r\n" +
                "// Mozilla only: Put this after last line of this JS event,\r\n" +
                "// because alerts only stop the current JS event, not the whole trainer!\r\n" +
                "ctx.verbose >= 3 && alert(\"Application URL: \" + appurl +\r\n" +
                "    \"\\r\\nMatch: \" + match);\r\n" +
                "\r\n" +
                "ctx.cfg_frametracking_init();\r\n" +
                "/*AFTER init*/ ctx.cfg_ontrack(\"ctx.pj_track(ctx_control.pj_custom_track)\");\r\n" +
                "/*AFTER ontrack*/ ctx.evt_url(-1, \"0\", appurl, false, \"MATCH \" + match);\r\n" +
                "ctx.pj_printversion();\r\n" +
                "\r\n" +
                "/*EOF*/\r\n" +
                ""
            });

            //loaded1:loaded
            c.ew.loaded (win_, time, {      comment:"Wait for Loaded"
            });

            //pause_tracking:pause
            c.ew.pause (win_, time, {       comment:"Tracking works in Pause only"
            });
        break;
        case "demo":
            //java_script1_d:javascript
            c.ew.javascript (win_, time, {      comment:"Texteingabe",
                        relpos:{FP:"-1", EP: new win_.ElementRef("", "forms", 0, 0, ""), XY: {x:0, y:0} , DocXY: {x:0, y:0} , XY2: {x:0, y:0} , DocXY2: {x:0, y:0} , Off: {x:0, y:0} },
                        text:""
            });
        break;

    };
},

/////////////////////////////////////////////////////////////////////////////////////
//set_efp
/////////////////////////////////////////////////////////////////////////////////////
set_efp:function(c, win_,  time, PARAMS) {
            var pc = new ParamChecker(c.defaults, "set_efp", PARAMS);

        pc.Check("efp", "TEXT");
    switch(c.mode) {
        case "navi":
            //js_set_efp:javascript
            c.ew.javascript (win_, time, {  text:c.h.EVAL_TEMPLATE("set_efp__jstext_set_efp", PARAMS),
                comment:"Set EFP",

                        relpos:{FP:"-1", EP: new win_.ElementRef("", "", 0, 0, ""), XY: {x:0, y:0} , DocXY: {x:0, y:0} , XY2: {x:0, y:0} , DocXY2: {x:0, y:0} , Off: {x:0, y:0} }
            });
        break;
        case "demo":break;

    };
},

/////////////////////////////////////////////////////////////////////////////////////
//page_init
/////////////////////////////////////////////////////////////////////////////////////
page_init:function(c, win_,  time, PARAMS) {
        var pc = new ParamChecker(c.defaults, "page_init", PARAMS);

        pc.Check("dump_page", "RELATIVE_URL");
        pc.Check("screenshot_file", "IMAGE_DOC_REL");   
        pc.Check("new_step", "TEXT");          
             
    switch(c.mode) {
        case "navi":
            //loaded1_n:loaded
            c.ew.loaded (win_, time, {      comment:"Neue Seite"
            });
        break;
        case "demo":
            //file_url1_d:fileurl
            c.ew.fileurl (win_, time, { url:PARAMS.dump_page,

                        relpos:{FP:"0", EP: new win_.ElementRef("", "", 0, 0, ""), XY: {x:0, y:0} , DocXY: {x:0, y:0} , XY2: {x:0, y:0} , DocXY2: {x:0, y:0} , Off: {x:0, y:0} }
            });

            //loaded1_d:loaded
            c.ew.loaded (win_, time, {      comment:"Neue Seite"
            });
        break;

    };
    
    page_init(c, ctx, time, params);
},

/////////////////////////////////////////////////////////////////////////////////////
//highlight
/////////////////////////////////////////////////////////////////////////////////////
highlight:function(c, win_,  time, PARAMS) {
            var pc = new ParamChecker(c.defaults, "highlight", PARAMS);

        pc.Check("position_h", "RELPOS");
        pc.Check("hlname", "TEXT");
        pc.Check("plausifeld", "BOOL_0_1");
        pc.Check("plausibutton", "BOOL_0_1");
    switch(c.mode) {
        case "navi":
            //java_script1_p:javascript
            c.ew.javascript (win_, time, {  relpos:PARAMS.position_h,
                text:c.h.EVAL_TEMPLATE("highlight__jstext1", PARAMS)
            });
        break;
        case "demo":
            //highlight1_d:highlight
            c.ew.highlight (win_, time, {   relpos:PARAMS.position_h,
                effect:"underline",
                    rgbcolor:"#FF0800",
                    object_name:"hl",
                    border:"4"
            });
        break;

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
//fieldhelp
/////////////////////////////////////////////////////////////////////////////////////
fieldhelp:function(c, win_,  time, PARAMS) {
            var pc = new ParamChecker(c.defaults, "fieldhelp", PARAMS);

        pc.Check("explanation_d", "HTML", "Text");
        pc.Check("b_name", "TEXT");
        pc.Check("b_width", "TEXT", "250");
        pc.Check("b_height", "TEXT", "40");
        pc.Check("orientation", "ORIENTATION_BUBBLE", "E");
        pc.Check("position_b", "RELPOS");
        pc.Check("position_ed", "RELPOS");
        pc.Check("no_spike", "BOOL_0_1", 1);
        pc.Check("replace", "BOOL_0_1", 1);
        pc.Check("b_closeable", "BOOL_0_1");
        pc.Check("b_minimizable", "BOOL_0_1", 0);
        pc.Check("b_movable", "BOOL_0_1");
        pc.Check("b_transparent", "BOOL_0_1");
    switch(c.mode) {
        case "navi":
            //textbubble1_p:textbubble
            c.ew.textbubble (win_, time, {  object_name:PARAMS.b_name,
                relpos:PARAMS.position_b,
                orientation:PARAMS.orientation,
                width:PARAMS.b_width,
                height:PARAMS.b_height,
                text:c.h.EVAL_TEMPLATE("fieldhelp__bubbletext", PARAMS),
                noSpike:PARAMS.no_spike,
                replace:PARAMS.replace,
                minimizable:PARAMS.b_minimizable,
                closeable:PARAMS.b_closeable,
                movable:PARAMS.b_movable,
                transparent:PARAMS.b_transparent,
                type:"element",
                    style:"comic",
                    minimized:"1",
                    closable:"1",
                    posFromCookie:"0",
                    x_frame:"0",
                    naked:"0",
                    alwaystop:"0",
                    cover:"1"
            });

            //javascript1_p:javascript
            c.ew.javascript (win_, time, {  relpos:PARAMS.position_ed,
                comment:"Bubble opens on Focus",
        text:"var C = ctx_control;\r\n" +
                "var NAME = ctx_control.cfg_get_last_render_name();\r\n" +
                "\r\n" +
                "var onfocus = function() {\r\n" +
                "    C.cfg_render_option(NAME, CFG_RENDER_OPTION_RESTORE);\r\n" +
                "    return true;\r\n" +
                "}\r\n" +
                "\r\n" +
                "var onblur = function() {\r\n" +
                "    C.cfg_render_option(NAME, CFG_RENDER_OPTION_MINIMIZE);\r\n" +
                "    return true;\r\n" +
                "}\r\n" +
                "\r\n" +
                "cfg_add_handler(ctx_window, ctx_element,\r\n" +
                "    \'focus\', onfocus, CFG_ADDHANDLER_OPTION_AT_FRONT);\r\n" +
                "\r\n" +
                "cfg_add_handler(ctx_window, ctx_element,\r\n" +
                "    \'blur\', onblur, CFG_ADDHANDLER_OPTION_AT_FRONT);\r\n" +
                "\r\n" +
                "ctx_control.cfg_print(\'Field handlers using last bubble \"\' + NAME + \'\" set.\');\r\n" +
                "                    "
            });
        break;
        case "demo":
            //java_script1_d:javascript
            c.ew.javascript (win_, time, {      comment:"Bubble opens on Focus",

                relpos:PARAMS.position_b,                    
                text:"var C = ctx_control;\r\n" +
                "var NAME = ctx_control.cfg_get_last_render_name();\r\n" +
                "\r\n" +
                "var onfocus = function() {\r\n" +
                "    C.cfg_render_option(NAME, CFG_RENDER_OPTION_RESTORE);\r\n" +
                "    return true;\r\n" +
                "}\r\n" +
                "\r\n" +
                "var onblur = function() {\r\n" +
                "    C.cfg_render_option(NAME, CFG_RENDER_OPTION_MINIMIZE);\r\n" +
                "    return true;\r\n" +
                "}\r\n" +
                "\r\n" +
                "cfg_add_handler(ctx_window, ctx_element,\r\n" +
                "    \'focus\', onfocus, CFG_ADDHANDLER_OPTION_AT_FRONT);\r\n" +
                "\r\n" +
                "cfg_add_handler(ctx_window, ctx_element,\r\n" +
                "    \'blur\', onblur, CFG_ADDHANDLER_OPTION_AT_FRONT);\r\n" +
                "\r\n" +
                "ctx_control.cfg_print(\'Field handlers using last bubble \"\' + NAME + \'\" set.\');\r\n" +
                "                    "
            });
        break;

    };
},

/////////////////////////////////////////////////////////////////////////////////////
//delete_events
/////////////////////////////////////////////////////////////////////////////////////
delete_events:function(c, win_,  time, PARAMS) {
            var pc = new ParamChecker(c.defaults, "delete_events", PARAMS);

    switch(c.mode) {
        case "navi":
            //javascript1:javascript
            c.ew.javascript (win_, time, {      comment:"Will be deleted when turned off",

                        relpos:{FP:"0", EP: new win_.ElementRef("", "forms", 0, 0, ""), XY: {x:0, y:0} , DocXY: {x:0, y:0} , XY2: {x:0, y:0} , DocXY2: {x:0, y:0} , Off: {x:0, y:0} },
                text:"ctx_control.pj_events[ctx_control.pj_events.length]=cfg_get_last_render_name();\r\n" +
                "ctx_control.cfg_print(ctx_control.pj_events[ctx_control.pj_events.length-1]+\' added to pj_events\');\r\n" +
                "                    "
            });
        break;
        case "demo":
            //java_script1_d:javascript
            c.ew.javascript (win_, time, {      comment:"Texteingabe",

                        relpos:{FP:"0", EP: new win_.ElementRef("", "forms", 0, 0, ""), XY: {x:0, y:0} , DocXY: {x:0, y:0} , XY2: {x:0, y:0} , DocXY2: {x:0, y:0} , Off: {x:0, y:0} }
            });
        break;

    };
},

/////////////////////////////////////////////////////////////////////////////////////
//clickconfirm
/////////////////////////////////////////////////////////////////////////////////////
clickconfirm:function(c, win_,  time, PARAMS) {
            var pc = new ParamChecker(c.defaults, "clickconfirm", PARAMS);

        pc.Check("position_h", "RELPOS");
        pc.Check("alerttext", "TEXT");
    switch(c.mode) {
        case "navi":
            //java_script1_p:javascript
            c.ew.javascript (win_, time, {  relpos:PARAMS.position_h,
                text:c.h.EVAL_TEMPLATE("clickconfirm__alert_p", PARAMS)
            });
        break;
        case "demo":
            //java_script1_d:javascript
            c.ew.javascript (win_, time, {  relpos:PARAMS.position_h,
                text:c.h.EVAL_TEMPLATE("clickconfirm__alert_d", PARAMS)
            });
        break;

    };
},

/////////////////////////////////////////////////////////////////////////////////////
//checkboxselection
/////////////////////////////////////////////////////////////////////////////////////
checkboxselection:function(c, win_,  time, PARAMS) {
            var pc = new ParamChecker(c.defaults, "checkboxselection", PARAMS);

        pc.Check("position_h", "RELPOS");
        pc.Check("checkvalue", "BOOL_0_1");
    switch(c.mode) {
        case "navi":
            //java_script1_p:javascript
            c.ew.javascript (win_, time, {  relpos:PARAMS.position_h,
                text:c.h.EVAL_TEMPLATE("checkboxselection__alert_p", PARAMS)
            });
        break;
        case "demo":
            //java_script1_d:javascript
            c.ew.javascript (win_, time, {  relpos:PARAMS.position_h,
                text:c.h.EVAL_TEMPLATE("checkboxselection__alert_d", PARAMS)
            });
        break;

    };
},

/////////////////////////////////////////////////////////////////////////////////////
//Check_Validity
/////////////////////////////////////////////////////////////////////////////////////
Check_Validity:function(c, win_,  time, PARAMS) {
            var pc = new ParamChecker(c.defaults, "Check_Validity", PARAMS);

        pc.Check("position_validFrom", "RELPOS");
        pc.Check("position_validUntil", "RELPOS");
    switch(c.mode) {
        case "navi":
            //js1_SaveValidFrom:javascript
            c.ew.javascript (win_, time, {  relpos:PARAMS.position_validFrom,
                comment:"save ValidFrom",
        text:"ctx_control.pj_objValidFrom = ctx_element;"
            });

            //js2_SaveValidUntil:javascript
            c.ew.javascript (win_, time, {  relpos:PARAMS.position_validUntil,
                comment:"save ValidUntil",
        text:"ctx_control.pj_objValidUntil = ctx_element;"
            });

            //js3_ValidUntil:javascript
            c.ew.javascript (win_, time, {  relpos:PARAMS.position_validUntil,
                comment:"ValidUntil",
        text:"var C = ctx_control;\r\n" +
                "var W = ctx_window;\r\n" +
                "\r\n" +
                "var f = function(ev_) {\r\n" +
                "    if (!C.pj_objValidFrom) {\r\n" +
                "        return;\r\n" +
                "    }\r\n" +
                "\r\n" +
                "    var ev = ev_ || W.event;\r\n" +
                "    var from = C.dateFromString(C.pj_objValidFrom.value);\r\n" +
                "    var to = C.dateFromString(this.value);\r\n" +
                "\r\n" +
                "    if (isNaN(from))\r\n" +
                "      {return; }\r\n" +
                "\r\n" +
                "    if (from <= to) {\r\n" +
                "        return;\r\n" +
                "    }\r\n" +
                "\r\n" +
                "    W.alert(\'Bis - Datum ist nicht später als Von - Datum\');\r\n" +
                "    ctx_control.pj_showHighlight(ctx_window, this,\'flash\')\r\n" +
                "    this.focus();\r\n" +
                "    ev.returnValue = false;\r\n" +
                "    return false;\r\n" +
                "}\r\n" +
                "\r\n" +
                "cfg_add_handler(ctx_window, ctx_element,\r\n" +
                "    \'blur\', f, CFG_ADDHANDLER_OPTION_AT_FRONT);\r\n" +
                "\r\n" +
                "ctx_control.cfg_print(\'Field \"ValidUntil\" onchange handler set.\');\r\n" +
                ""
            });

            //js4_ValidUntil:javascript
            c.ew.javascript (win_, time, {  relpos:PARAMS.position_validFrom,
                comment:"ValidFrom",
        text:"var C = ctx_control;\r\n" +
                "var f = function() {\r\n" +
                "    if (!C.pj_objValidUntil) {\r\n" +
                "        return;\r\n" +
                "    }\r\n" +
                "    if (!C.pj_objValidFrom) {\r\n" +
                "        return;\r\n" +
                "    }\r\n" +
                "\r\n" +
                "    if (this.value != \'\'){\r\n" +
                "      var from = C.dateFromString(this.value);\r\n" +
                "      var to = C.dateFromString(C.pj_objValidUntil.value);\r\n" +
                "\r\n" +
                "      if (from <= to) {\r\n" +
                "          return;\r\n" +
                "      }\r\n" +
                "    }\r\n" +
                "\r\n" +
                "    C.pj_objValidUntil.value = C.pj_objValidFrom.value;\r\n" +
                "}\r\n" +
                "\r\n" +
                "cfg_add_handler(ctx_window, ctx_element,\r\n" +
                "    \'blur\', f, CFG_ADDHANDLER_OPTION_AT_FRONT);\r\n" +
                "\r\n" +
                "ctx_control.cfg_print(\'Field \"ValidFrom\" onchange handler set.\');\r\n" +
                ""
            });
        break;
        case "demo":
            //java_script1_d:javascript
            c.ew.javascript (win_, time, {      comment:"Texteingabe",

                        relpos:{FP:"0", EP: new win_.ElementRef("", "forms", 0, 0, ""), XY: {x:0, y:0} , DocXY: {x:0, y:0} , XY2: {x:0, y:0} , DocXY2: {x:0, y:0} , Off: {x:0, y:0} }
            });
        break;

    };
},

/////////////////////////////////////////////////////////////////////////////////////
//Check_ValiditySpec
/////////////////////////////////////////////////////////////////////////////////////
Check_ValiditySpec:function(c, win_,  time, PARAMS) {
            var pc = new ParamChecker(c.defaults, "Check_ValiditySpec", PARAMS);

        pc.Check("position_validFrom", "RELPOS");
        pc.Check("position_validUntil", "RELPOS");
        pc.Check("position_Text1", "RELPOS");
        pc.Check("Title_Text1", "TEXT");
        pc.Check("position_Text2", "RELPOS");
        pc.Check("Title_Text2", "TEXT");
        pc.Check("position_CheckButton", "RELPOS");
    switch(c.mode) {
        case "navi":
            //javascript1:javascript
            c.ew.javascript (win_, time, {  relpos:PARAMS.position_validFrom,
                comment:"save ValidFrom",
        text:"ctx_control.pj_objValidFrom = ctx_element;"
            });

            //javascript2:javascript
            c.ew.javascript (win_, time, {  relpos:PARAMS.position_validUntil,
                comment:"Save pj_objValidUntil",
        text:"ctx_control.pj_objValidUntil = ctx_element;"
            });

            //javascript3:javascript
            c.ew.javascript (win_, time, {  relpos:PARAMS.position_Text1,
                comment:"Annahmeort change",
        text:"ctx_control.pj_objAnnahme = ctx_element;"
            });

            //javascript4:javascript
            c.ew.javascript (win_, time, {  relpos:PARAMS.position_Text2,
                comment:"AbgabeOrt",
        text:"ctx_control.pj_objAbgabe = ctx_element;"
            });

            //javascript5:javascript
            c.ew.javascript (win_, time, {  text:c.h.EVAL_TEMPLATE("Check_ValiditySpec__jstext_CheckButton", PARAMS),
                relpos:PARAMS.position_CheckButton,
                comment:"Übernehmen"
            });
        break;
        case "demo":
            //java_script1_d:javascript
            c.ew.javascript (win_, time, {      comment:"Texteingabe",

                        relpos:{FP:"0", EP: new win_.ElementRef("", "forms", 0, 0, ""), XY: {x:0, y:0} , DocXY: {x:0, y:0} , XY2: {x:0, y:0} , DocXY2: {x:0, y:0} , Off: {x:0, y:0} }
            });
        break;

    };
},

/////////////////////////////////////////////////////////////////////////////////////
//Add_Hint
/////////////////////////////////////////////////////////////////////////////////////
Add_Hint:function(c, win_,  time, PARAMS) {
            var pc = new ParamChecker(c.defaults, "Add_Hint", PARAMS);

        pc.Check("position_h", "RELPOS");
        pc.Check("title", "TEXT");
    switch(c.mode) {
        case "navi":
            //javascript1:javascript
            c.ew.javascript (win_, time, {  relpos:PARAMS.position_h,
                text:c.h.EVAL_TEMPLATE("Add_Hint__jstext_set_title", PARAMS),
                comment:"Appl/Prod hint"
            });
        break;
        case "demo":
            //java_script1_d:javascript
            c.ew.javascript (win_, time, {      comment:"Texteingabe",

                        relpos:{FP:"0", EP: new win_.ElementRef("", "forms", 0, 0, ""), XY: {x:0, y:0} , DocXY: {x:0, y:0} , XY2: {x:0, y:0} , DocXY2: {x:0, y:0} , Off: {x:0, y:0} }
            });
        break;

    };
},

/////////////////////////////////////////////////////////////////////////////////////
//Add_Value
/////////////////////////////////////////////////////////////////////////////////////
Add_Value:function(c, win_,  time, PARAMS) {
            var pc = new ParamChecker(c.defaults, "Add_Value", PARAMS);

        pc.Check("position_h", "RELPOS");
        pc.Check("value", "TEXT");
    switch(c.mode) {
        case "navi":
            //javascript1:javascript
            c.ew.javascript (win_, time, {  relpos:PARAMS.position_h,
                text:c.h.EVAL_TEMPLATE("Add_Value__jstext_set_value", PARAMS),
                comment:"Change Value"
            });
        break;
        case "demo":
            //java_script1_d:javascript
            c.ew.javascript (win_, time, {      comment:"Texteingabe",

                        relpos:{FP:"0", EP: new win_.ElementRef("", "forms", 0, 0, ""), XY: {x:0, y:0} , DocXY: {x:0, y:0} , XY2: {x:0, y:0} , DocXY2: {x:0, y:0} , Off: {x:0, y:0} }
            });
        break;

    };
},

/////////////////////////////////////////////////////////////////////////////////////
//Disable_element
/////////////////////////////////////////////////////////////////////////////////////
Disable_element:function(c, win_,  time, PARAMS) {
            var pc = new ParamChecker(c.defaults, "Disable_element", PARAMS);

        pc.Check("position_h", "RELPOS");
    switch(c.mode) {
        case "navi":
            //javascript1:javascript
            c.ew.javascript (win_, time, {  relpos:PARAMS.position_h,
                comment:"Disable Element",
        text:"ctx_element.disabled = true;"
            });
        break;
        case "demo":
            //java_script1_d:javascript
            c.ew.javascript (win_, time, {      comment:"Texteingabe",

                        relpos:{FP:"0", EP: new win_.ElementRef("", "forms", 0, 0, ""), XY: {x:0, y:0} , DocXY: {x:0, y:0} , XY2: {x:0, y:0} , DocXY2: {x:0, y:0} , Off: {x:0, y:0} }
            });
        break;

    };
},

/////////////////////////////////////////////////////////////////////////////////////
//page_fini
/////////////////////////////////////////////////////////////////////////////////////
page_fini:function(c, win_,  time, PARAMS) {
            var pc = new ParamChecker(c.defaults, "page_fini", PARAMS);

    switch(c.mode) {
        case "navi":
            //js_track_next:javascript
            c.ew.javascript (win_, time, {      comment:"Tracking Next",

                        relpos:{FP:"-1", EP: new win_.ElementRef("", "", 0, 0, ""), XY: {x:0, y:0} , DocXY: {x:0, y:0} , XY2: {x:0, y:0} , DocXY2: {x:0, y:0} , Off: {x:0, y:0} },
                text:"                        ctx.pj_track(ctx.pj_custom_track);\r\n" +
                "                    "
            });

            //pause_tracking:pause
            c.ew.pause (win_, time, {
            });
        break;
        case "demo":
            //java_script1_d:javascript
            c.ew.javascript (win_, time, {      comment:"Texteingabe",

                        relpos:{FP:"0", EP: new win_.ElementRef("", "forms", 0, 0, ""), XY: {x:0, y:0} , DocXY: {x:0, y:0} , XY2: {x:0, y:0} , DocXY2: {x:0, y:0} , Off: {x:0, y:0} }
            });
        break;

    };
},

/////////////////////////////////////////////////////////////////////////////////////
//navi_fini
/////////////////////////////////////////////////////////////////////////////////////
navi_fini:function(c, win_,  time, PARAMS) {
            var pc = new ParamChecker(c.defaults, "navi_fini", PARAMS);

    switch(c.mode) {
        case "navi":
            //js_navi_exit:javascript
            c.ew.javascript (win_, time, {      comment:"Navi Exit",

                        relpos:{FP:"-1", EP: new win_.ElementRef("", "", 0, 0, ""), XY: {x:0, y:0} , DocXY: {x:0, y:0} , XY2: {x:0, y:0} , DocXY2: {x:0, y:0} , Off: {x:0, y:0} },
                text:"                        ctx.cfg_print(\'TRACK EXIT\');\r\n" +
                "                        ctx.cfg_frametracking_exit();\r\n" +
                "                        "
            });

            //pause_tracking:pause
            c.ew.pause (win_, time, {
            });
        break;
        case "demo":
            //java_script1_d:javascript
            c.ew.javascript (win_, time, {      comment:"Texteingabe",

                        relpos:{FP:"0", EP: new win_.ElementRef("", "forms", 0, 0, ""), XY: {x:0, y:0} , DocXY: {x:0, y:0} , XY2: {x:0, y:0} , DocXY2: {x:0, y:0} , Off: {x:0, y:0} }
            });
        break;

    };
}
        }

