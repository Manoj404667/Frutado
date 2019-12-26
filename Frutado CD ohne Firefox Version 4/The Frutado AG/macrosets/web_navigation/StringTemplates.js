
ctx.string_templates = new Array();		
		
ctx.string_templates["USE_HELP__jstext_javascript1"]="ctx_control.cfg_print(\'define help button functions\');\r\n" +
				"ctx_control.pj_helpOn = $Help_on$;\r\n" +
				"ctx_control.pjButtonIsLoaded = false;\r\n" +
				"ctx_control.pj_events=[];\r\n" +
				"\r\n" +
				"ctx_control.fc_deleteEvents = function() {\r\n" +
				"   ctx_control.cfg_print(\'fc_deleteEvents - Start\');\r\n" +
				"   for (var i=0; i < ctx_control.pj_events.length; i++) {\r\n" +
				"          ctx_control.cfg_unrender(ctx_control.pj_events[i]);\r\n" +
				"   }\r\n" +
				"   ctx_control.pj_events.length = 0;\r\n" +
				"   ctx_control.cfg_print(\'fc_deleteEvents - Finish\');\r\n" +
				"}\r\n" +
				"\r\n" +
				"ctx_control.fc_loadButton = function(_window, _element) {\r\n" +
				"   ctx_control.cfg_print(\'fc_loadButton\');\r\n" +
				"   if(ctx_control.pjButtonIsLoaded){\r\n" +
				"     ctx_control.cfg_print(\'Button is loaded\');\r\n" +
				"     return;\r\n" +
				"   }\r\n" +
				"\r\n" +
				"   ctx_control.cfg_print(\'Create IMG\');\r\n" +
				"   var lImg=_window.document.createElement(\'IMG\');\r\n" +
				"   lImg.id=\'datango_icon\';\r\n" +
				"   lImg.src=\'$%Help_Button_Path$\';\r\n" +
				"   lImg.style.cursor=\'hand\';\r\n" +
				"   lImg.hspace=\'5\';\r\n" +
				"   lImg.align=\'bottom\';\r\n" +
				"   lImg.onclick=function(){ctx_control.fc_gui_link(window, lImg);};\r\n" +
				"   _element.parentElement.appendChild(lImg);\r\n" +
				"\r\n" +
				"   pjButtonIsLoaded=true;\r\n" +
				"}\r\n" +
				"\r\n" +
				"\r\n" +
				"ctx_control.fc_gui_link = function(_window, _lImg) {\r\n" +
				"    ctx_control.pj_helpOn = !ctx_control.pj_helpOn;\r\n" +
				"\r\n" +
				"    if (ctx_control.pj_helpOn) {\r\n" +
				"       ctx_control.cfg_print(\'fc Start Help\');\r\n" +
				"         _lImg.src=\'$%Help_Button_Path$\';\r\n" +
				"         ctx.cfg_frametracking_exit();\r\n" +
				"         ctx.cfg_frametracking_init();\r\n" +
				"         ctx.cfg_ontrack(\"ctx.pj_track(ctx_control.pj_custom_track)\");\r\n" +
				"    } else {\r\n" +
				"      ctx_control.cfg_print(\'fc Stop Help\');\r\n" +
				"         _lImg.src=\'$%Help_Button_Path2$\';\r\n" +
				"        ctx_control.fc_deleteEvents();\r\n" +
				"    }\r\n" +
				"\r\n" +
				"}\r\n" +
				"\r\n" +
				"ctx_control.cfg_print(\'define help button functions ende\');\r\n" +
				"\r\n" +
				"            ";


ctx.string_templates["define_target__jstext_define_target"]="ctx.pj_data.push(\r\n" +
				"    { sub: \'$%ts$\', title: \'$%title$\', label: \'$%label$\', tags: \'$%img_titles$\', dgoid: \'$%dgoid$\' }\r\n" +
				");\r\n" +
				"            ";
		
	
ctx.string_templates["define_context_select__jstext"]="if (typeof(ctx.pj_data) == \'undefined\') ctx.pj_data = new Array();\r\n" +
				"ctx.pj_data.push(\r\n" +
				" { sub: \'$%tourstopname$\', title: \'$%title$\', label: \'$%label$\', selectname: \'$selectbox$\'});\r\n" +
				"            ";
		
	
ctx.string_templates["set_efp__jstext_set_efp"]="                ctx_control.cfg_frametracking_set_alias(\"$%efp$\", ctx_control.pj_efp.efp_frame);\r\n" +
				"            ";
		
	
ctx.string_templates["highlight__jstext1"]="";
		
	
ctx.string_templates["explanation__bubbletext_d"]="<span class=\'$bubble_class$\'><FONT $g_bubble_text_style$>\r\n" +
				"$explanation_d$\r\n" +
				"</FONT></span>\r\n" +
				"            ";
		
	
ctx.string_templates["explanation__bubbletext_p"]=ctx.string_templates["explanation__bubbletext_d"];
		
	
ctx.string_templates["fieldhelp__bubbletext"]="";
		
	
ctx.string_templates["clickconfirm__alert_d"]="";
		
	
ctx.string_templates["clickconfirm__alert_p"]=ctx.string_templates["clickconfirm__alert_d"];
		
	
ctx.string_templates["checkboxselection__alert_p"]="";
		
	
ctx.string_templates["checkboxselection__alert_d"]="";
		
	
ctx.string_templates["Check_ValiditySpec__jstext_CheckButton"]="var C = ctx_control;\r\n" +
				"var W = ctx_window;\r\n" +
				"\r\n" +
				"\r\n" +
				"var f = function(ev_) {\r\n" +
				"\r\n" +
				"    if (!C.pj_objValidFrom) {\r\n" +
				"        return;\r\n" +
				"    }\r\n" +
				"\r\n" +
				"    if (!C.pj_objValidUntil) {\r\n" +
				"        return;\r\n" +
				"    }\r\n" +
				"\r\n" +
				"    var ev = ev_ || W.event;\r\n" +
				"    var from = C.dateFromString(C.pj_objValidFrom.value);\r\n" +
				"    var to = C.dateFromString(C.pj_objValidUntil.value);\r\n" +
				"\r\n" +
				"    if (from <= to) {\r\n" +
				"      if (C.pj_objAnnahme.value) {\r\n" +
				"        if (C.pj_objAbgabe.value) {\r\n" +
				"          return;\r\n" +
				"        }\r\n" +
				"        var ev = ev_ || W.event;\r\n" +
				"        W.alert(\'$%Title_Text2$\'+\' muss noch angegeben werden.\');\r\n" +
				"        ctx_control.pj_showHighlight(ctx_window, C.pj_objAbgabe,\'flash\');\r\n" +
				"        C.pj_objAbgabe.focus();\r\n" +
				"        ev.returnValue = false;\r\n" +
				"        return false;\r\n" +
				"        return;\r\n" +
				"      }\r\n" +
				"\r\n" +
				"\r\n" +
				"      var ev = ev_ || W.event;\r\n" +
				"\r\n" +
				"      W.alert(\'$%Title_Text1$\' +\' muss angegeben werden!\');\r\n" +
				"      ctx_control.pj_showHighlight(ctx_window, C.pj_objAnnahme,\'flash\');\r\n" +
				"      C.pj_objAnnahme.focus();\r\n" +
				"      ev.returnValue = false;\r\n" +
				"      return false;\r\n" +
				"      return;\r\n" +
				"\r\n" +
				"      return;\r\n" +
				"    }\r\n" +
				"\r\n" +
				"    W.alert(\'Bis - Datum ist nicht später als Von - Datum\');\r\n" +
				"    ctx_control.pj_showHighlight(ctx_window, C.pj_objValidFrom,\'flash\');\r\n" +
				"    ctx_control.pj_showHighlight(ctx_window, C.pj_objValidUntil,\'flash\');\r\n" +
				"\r\n" +
				"    C.pj_objValidUntil.focus();\r\n" +
				"\r\n" +
				"    ev.returnValue = false;\r\n" +
				"    return false;\r\n" +
				"}\r\n" +
				"\r\n" +
				"cfg_add_handler(ctx_window, ctx_element,\r\n" +
				"    \'click\', f, CFG_ADDHANDLER_OPTION_AT_FRONT);\r\n" +
				"\r\n" +
				"ctx_control.cfg_print(\'Field \"Uebernehmen\" onclick handler set.\');\r\n" +
				"      ";
		
	
ctx.string_templates["Add_Hint__jstext_set_title"]="            ctx_element.title=\'$%title$\';\r\n" +
				"            ";
		
	
ctx.string_templates["Add_Value__jstext_set_value"]="            ctx_element.value=\'$%value$\';\r\n" +
				"        ";
		
	