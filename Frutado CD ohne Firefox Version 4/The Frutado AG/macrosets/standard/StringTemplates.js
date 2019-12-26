
ctx.string_templates = new Array();

ctx.string_templates["bubbletext_d"] = "$explanation_d$";
ctx.string_templates["bubbletext_p"] = "$explanation_p$";

ctx.string_templates["bubbletext_x"] = 
    "<span >" +
    "$explanation_d$" +
    "<br>" +
    "<br>" +
    "<div align=\'right\'>" +
    "<font color=\'blue\'>" +
    "<a onclick=\'ctx.cfg_action(1016);\' style='cursor:pointer'>" +
    "$g_back_link$</a> " +
    "<a onclick=\'ctx.cfg_action(1002);\' style='cursor:pointer'>" +
    "$g_close_link$</a> " +
    "<a onclick=\'ctx.cfg_action(1001);\' style='cursor:pointer'>" +
    "$g_linktextpraxis$</a>" +
    "</font></div>" +
    "</span>";

ctx.string_templates["demo_branch_link"] = "<a onclick='ctx.cfg_jumptitle(\"$%jump_target$\");' style='cursor:pointer;text-decoration:underline'>$explanation_d$</a>";

ctx.string_templates["demo_branch_link_none"] = "<a onclick='ctx.cfg_action(1001);' style='cursor:pointer;text-decoration:underline'>$explanation_d$</a>";

ctx.string_templates["step_bubble"] =
    "$explanation_p$\r\n" +
    "<div align=\'center\'>" +
    "<font color=\'blue\'>" +
    "<a onclick=\'ctx.pj_show_demo()\' style='cursor:pointer'>" +
    "$g_alternate_link$</a>" +
    "</font></div>";

ctx.string_templates["jump_to_target"] =
    "var t = \'$%jump_target$\';" +
    "if (t.length) ctx.cfg_jumptitle(t);";

ctx.string_templates["start_unit__bubble_text_task"] = 
    "<table width=\"100%\" height=\"100%\" style=\"background-color:$task_bgcolor$;color:#000000\" cellspacing=0 cellpadding=8>\r\n" +
    "<tr><td>$task_text$</td></tr></table>\r\n";

ctx.string_templates["init_new_page"] =
    "ctx.bookmark = \'$%new_step$\';\r\n" +
    "ctx.pj_trans_obj = new Object();\r\n" +
    "ctx.pj_trans_obj.combine = 0;\r\n" +
    "ctx.pj_trans_obj.rules = new Array();\r\n" +
    "ctx.pj_form_mode = false;\r\n" +
    "";

ctx.string_templates["log_init"] =
    'var CTX = ctx;\n' +
    'var THIS = this;\n' +
    //'alert("log_init III for" + ctx.cfg_config("logurl"));' +
    'this.pj_log_callback = function(log_response) { \n' +
    '    CTX.pj_ID = log_response;\n' +
    '    log_response = log_response.replace(/^[^=]*=/, "");\n' +
    '    ctx.cfg_action(\'RESUME\');\n' +
    // '    alert("log_response: " + log_response);' +
    '};\n' +
    'ctx.cfg_lm_log("password=$@pwd$&Command=GETSID&username=$@user$", THIS.pj_log_callback);\n' +
    'ctx.cfg_action("PAUSE");'

ctx.string_templates["log_page_view"] = 
    "if (ctx.pj_ID) {" + 
    "    ctx.cfg_lm_log('method=log&action=hit_ts&index=${index}&label=${label}&id=' + ctx.pj_ID);" +
    "} else {" +
    "   alert('log_page_view: no ID in TS ${index}');" +
    "}"

ctx.string_templates["log_finish"] = 
    "if (ctx.pj_ID) {" + 
    "    ctx.cfg_lm_log('method=log&action=finish&id=' + ctx.pj_ID);" +
    "} else {" +
    "   alert('log_finish: no ID');" +
    "}"

ctx.string_templates["apply_tour_param"] = 
    "var es = document.getElementsByName('$%name$'); for (var i = 0; i < es.length; i++) { es[i].value = '$%value$' }";

ctx.string_templates["init_form_mode"] =
    "ctx.pj_trans_obj = new Object();\r\n" +
    "ctx.pj_trans_obj.combine = 0;\r\n" +
    "ctx.pj_trans_obj.rules = new Array();";

ctx.string_templates["end_form_mode"] =
    "ctx.pj_trans_obj = null;";


ctx.string_templates["explanation_long_nav_all"] = 
    "<table width=\"100%\" cellspacing=0 cellpadding=0>\r\n" +
    "<tr>\r\n" +
    "<td width=1 valign=top align=left>\r\n" +
    "<img style=\"margin-left:0px;margin-right:4px;position-top:0px;position-left:0px\" src=\"${resource_dir}/$type$.gif\">\r\n" +
    "</td>\r\n" +
    "<td>\r\n" +
    "$bubbletext$\r\n" +
    "<br>\r\n" +
    "<br>\r\n" +
    "<div align=\'right\'>\r\n" +
    "<font color=\'blue\'>\r\n" +
    "<nobr>" +
    "<a onclick=\'ctx.cfg_action(1016);\' style='cursor:pointer'>" +
    "$g_back_link$</a> " +
    "<a onclick=\'ctx.cfg_action(1002);\' style='cursor:pointer'>" +
    "$g_close_link$</a> " +
    "<a onclick=\'ctx.cfg_action(1001);\' style='cursor:pointer'>" +
    "$g_linktextpraxis$</a>" +
    "</nobr>" +
    "</font></div>\r\n" +
    "</td>\r\n" +
    "</tr>\r\n" +
    "</table>\r\n";

ctx.string_templates["explanation_long_nav_forw"] = 
    "<table width=\"100%\" cellspacing=0 cellpadding=0>\r\n" +
    "<tr>\r\n" +
    "<td width=1 valign=top align=left>\r\n" +
    "<img style=\"margin-left:0px;margin-right:4px;position-top:0px;position-left:0px\" src=\"${resource_dir}/$type$.gif\">\r\n" +
    "</td>\r\n" +
    "<td>\r\n" +
    "$bubbletext$\r\n" +
    "<br>\r\n" +
    "<br>\r\n" +
    "<div align=\'right\'>\r\n" +
    "<font color=\'blue\'>\r\n" +
    "<nobr>" +
    "<a onclick=\'ctx.cfg_action(1001);\' style='cursor:pointer'>" +
    "$g_linktextpraxis$</a>" +
    "</nobr>" +
    "</font></div>\r\n" +
    "</td>\r\n" +
    "</tr>\r\n" +
    "</table>\r\n";

ctx.string_templates["explanation_long_nonav"] = 
    "<table width=\"100%\" cellspacing=0 cellpadding=0>\r\n" +
    "<tr>\r\n" +
    "<td width=1 valign=top align=left>\r\n" +
    "<img style=\"margin-left:0px;margin-right:4px;position-top:0px;position-left:0px\" src=\"${resource_dir}/$type$.gif\">\r\n" +
    "</td>\r\n" +
    "<td>\r\n" +
    "$bubbletext$\r\n" +
    "<br>\r\n" +
    "<br>\r\n" +
    "<div align=\'right\'>\r\n" +
    "<font color=\'blue\'>\r\n" +
    "</font></div>\r\n" +
    "</td>\r\n" +
    "</tr>\r\n" +
    "</table>\r\n";

ctx.string_templates["click_trans_pt_form"] =
    "if (ctx_element.tagName == \'IMG\') ctx_element = ctx_element.parentNode;\r\n" +
    "evt_defineTransition([-1, null], ctx.pj_trans_obj, TRANSITION_JUMP, \'$%jump_target$\', null);";

ctx.string_templates["click_trans_pt_standard"] =
    "if (ctx_element.tagName == \'IMG\') ctx_element = ctx_element.parentNode;\r\n" +
    "evt_defineTransition([-1, null], null, TRANSITION_JUMP, \'$%jump_target$\', null);";

ctx.string_templates["click__jstext_trig_pt"] =
    "if (ctx_element.tagName == \'IMG\') {\r\n" +
    "    ctx_element = ctx_element.parentNode;\r\n" +
    "}\r\n" +

    "var triggerType = TRIGGER_$action$;\r\n" +
    "var hotKey = null;\r\n" +
    "var triggerOption = null;\r\n" +

    "var trigger = evt_installTrigger([false, null],\r\n" +
    "                                 null,\r\n" +
    "                                 null,\r\n" +
    "                                 triggerType,\r\n" +
    "                                 hotKey,\r\n" +
    "                                 null,\r\n" +
    "                                 triggerOption,\r\n" +
    "                                 null);\r\n" +

    "ctx.cfg_render(ctx_window, ctx_element, trigger);";


ctx.string_templates["click_trig_pt_key"] =
    "var event = evt_installTrigger([false, null],\r\n" +
    "                null,\r\n" +
    "                null,\r\n" +
    "                TRIGGER_KEYPRESS,\r\n" +
    "                \'$%hotkey$\',\r\n" +
    "                null,\r\n" +
    "                TRIGGER_HOTKEY_FRAMESET | TRIGGER_BLOCK_ONSUCCESS | TRIGGER_BLOCK_ONERROR,\r\n" +
    "                null);\r\n" +
    "ctx.cfg_render(ctx_window, null, event);";


ctx.string_templates["click_SAP__jstext_trans_pt"]=ctx.string_templates["quick_click__jstext_trans_pt"];


ctx.string_templates["click_SAP__jstext_trig_pt"] =
    "if (ctx_element.tagName == \'IMG\') {\r\n" +
    "    ctx_element = ctx_element.parentNode;\r\n" +
    "}\r\n" +
    "\r\n" +
    "var event = evt_installTrigger([false, null],\r\n" +
    "                               null,\r\n" +
    "                               null,\r\n" +
    "                               TRIGGER_CLICK,\r\n" +
    "                               null,\r\n" +
    "                               \'\',\r\n" +
    "                               TRIGGER_NOERROR_ON_CONDITION_FAIL,\r\n" +
    "                               null);\r\n" +
    "ctx.cfg_render(ctx_window, ctx_element, event);\r\n" +
    "\r\n" +
    "event = evt_installTrigger([false, null],\r\n" +
    "                           null,\r\n" +
    "                           null,\r\n" +
    "                           TRIGGER_DBLCLICK,\r\n" +
    "                           null,\r\n" +
    "                           null,\r\n" +
    "                           null,\r\n" +
    "                           null);\r\n" +
    "\r\n" +
    "ctx.cfg_render(ctx_window, ctx_element, event);";


ctx.string_templates["click_SAP__jstext_trig_tcode_pt"] =
    "var event = evt_trackValue([false, null],\r\n" +
    "                           null,\r\n" +
    "                           null,\r\n" +
    "                           0,\r\n" +
    "                           null,\r\n" +
    "                           \'$transaction_code$\');\r\n" +
    "ctx.cfg_render(ctx_window, ctx_element, event);\r\n" +
    "var fieldName = ctx.cfg_get_last_render_name();\r\n" +
    "\r\n" +
    "var helptext = ctx.cfg_tr(\'MSG_TRANSACTIONCODE\', \'$transaction_code$\');\r\n" +
    "var rule = fieldName + \'== \"$transaction_code$\"\';\r\n" +
    "var condition = {\r\n"+
    "    js: ctx.pj_ss.rule, desc: ctx.pj_ss.helptext,\r\n" + 
    "    highlights: [[ctx_window, ctx_element, 0]]\r\n" +
    "};\r\n" +
    "\r\n" +
    "var event = evt_installTrigger([false, null],\r\n" +
    "                               null,\r\n" +
    "                               null,\r\n" +
    "                               TRIGGER_KEYPRESS,\r\n" +
    "                               \'enter\',\r\n" +
    "                               null,\r\n" +
    "                               TRIGGER_BLOCK_ONERROR | TRIGGER_FEEDBACK_USERINPUT,\r\n" +
    "                               condition);\r\n" +
    "ctx.cfg_render(ctx_window, null, event);";


ctx.string_templates["key_press_trans_pt_standard"] =
    "evt_defineTransition([-1, null], null, TRANSITION_JUMP, \'$%jump_target$\', null);";

ctx.string_templates["key_press_trans_pt_form"] =
    "evt_defineTransition([-1, null], ctx.pj_trans_obj, TRANSITION_JUMP, \'$%jump_target$\', null);";

ctx.string_templates["key_press__jstext_trig_pt"] =
    "var event = evt_installTrigger([false, null],\r\n" +
    "                               null,\r\n" +
    "                               null,\r\n" +
    "                               TRIGGER_KEYPRESS,\r\n" +
    "                               \'$key_name$\',\r\n" +
    "                               null,\r\n" +
    "                               TRIGGER_HOTKEY_FRAMESET | TRIGGER_BLOCK_ONSUCCESS | TRIGGER_BLOCK_ONERROR,\r\n" +
    "                               null);\r\n" +
    "ctx.cfg_render(ctx_window, null, event);";


ctx.string_templates["input_text_init_trans"] =
    "ctx.pj_ss = new Object();\r\n" +

    "var event = evt_trackValue([false, null], null, null, VALUE_INIT, null, \'$%text_d$\');\r\n" +
    "ctx.cfg_render(ctx_window, ctx_element, event);\r\n" +

    "var fieldName = ctx.cfg_get_last_render_name();\r\n" +
    "var text_d = \'$%text_d$\';\r\n" +
    "var regexp_text = \'$%regexp$\';\r\n" +

    "if (regexp_text.length) {\r\n" +
    "    ctx.pj_ss.rule = \'/$%regexp$/.exec(\' + fieldName + \'.value)\';\r\n" +
    "} else {\r\n" +
    "    ctx.pj_ss.rule = fieldName + \'.value.toUpperCase() == \"$%%text_d$\".toUpperCase()\';\r\n" +
    "}\r\n" +

    "ctx.pj_ss.helptext = ctx.cfg_tr(\'MSG_TEXTINPUT\', text_d, \'$%fieldname$\');\r\n" +
    "ctx.pj_ss.condition = {\r\n"+
    "    js: ctx.pj_ss.rule, desc: ctx.pj_ss.helptext,\r\n" + 
    "    highlights: [[ctx_window, ctx_element, 0]]\r\n" +
    "};";

ctx.string_templates["input_text_trans_pt_standard"] =
    "if (typeof(ctx.pj_ss) == 'object') {\r\n" +
    "    evt_defineTransition([-1, null], ctx.pj_ss.condition, TRANSITION_JUMP, \'$%jump_target$\', null);\r\n" +
    "    ctx.pj_ss = null;\r\n" +
    "}" ;

ctx.string_templates["input_text_trans_pt_form"] =
    "if (typeof(ctx.pj_trans_obj) == 'object' && typeof(ctx.pj_ss) == 'object') {\r\n" +
    "    ctx.pj_trans_obj.rules.push(ctx.pj_ss.condition);\r\n" +
    "    ctx.pj_ss = null;\r\n" +
    "}";

ctx.string_templates["input_text_trig_pt_tab"] =
    "var event = evt_installTrigger([false, null],\r\n" +
    "                null,\r\n" +
    "                null,\r\n" +
    "                TRIGGER_KEYPRESS,\r\n" +
    "                \'tab\',\r\n" +
    "                null,\r\n" +
    "                TRIGGER_BLOCK_ONERROR | TRIGGER_FEEDBACK_USERINPUT,\r\n" +
    "                null);\r\n" +
    "ctx.cfg_render(ctx_window, ctx_element, event);";

ctx.string_templates["input_text_trig_pt_enter"] =
    "var event = evt_installTrigger([false, null],\r\n" +
    "                null,\r\n" +
    "                null,\r\n" +
    "                TRIGGER_KEYPRESS,\r\n" +
    "                \'enter\',\r\n" +
    "                null,\r\n" +
    "                TRIGGER_BLOCK_ONERROR | TRIGGER_FEEDBACK_USERINPUT,\r\n" +
    "                null);\r\n" +
    "ctx.cfg_render(ctx_window, ctx_element, event);\r\n";

ctx.string_templates["input_text_trig_pt_button"] =
    "if (ctx_element.tagName == \'IMG\') ctx_element = ctx_element.parentNode;\r\n" +

    "var event = evt_installTrigger([false, null],\r\n" +
    "                null,\r\n" +
    "                null,\r\n" +
    "                TRIGGER_CLICK,\r\n" +
    "                null,\r\n" +
    "                null,\r\n" +
    "                TRIGGER_FEEDBACK_USERINPUT,\r\n" +
    "                null);\r\n" +
    "ctx.cfg_render(ctx_window, ctx_element, event);";

ctx.string_templates["input_text_trig_pt_none"] =
    "var event = evt_installTrigger([false, null],\r\n" +
    "                null,\r\n" +
    "                null,\r\n" +
    "                TRIGGER_CHANGE,\r\n" +
    "                null,\r\n" +
    "                null,\r\n" +
    "                TRIGGER_FEEDBACK_USERINPUT,\r\n" +
    "                null);\r\n" +
    "ctx.cfg_render(ctx_window, ctx_element, event);\r\n";

ctx.string_templates["input_text__bubbletext_t"] =
    "$explanation_p$\r\n" +
    "<br>\r\n" +
    "<div align=\'right\'>\r\n" +
    "<font color=\'blue\'>\r\n" +
    "<a onclick=\'ctx.pj_show_demo()\' style='cursor:pointer'>\r\n" +
    "$g_alternate_link$</a>\r\n" +
    "</font></div>";


ctx.string_templates["select_single_init_tracker"] =
    "ctx.pj_ss = new Object();\r\n" +
    "ctx.pj_ss.text = '$%choose_text$';\r\n" +
    "ctx.pj_ss.nr = -1;\r\n" +

    "if (ctx.pj_ss.text) {\r\n" +
    "    if (typeof(ctx_element.options) == \'object\' && " + 
    "        ctx_element.options && " +
    "        typeof(ctx_element.options.length) == \'number\') {\r\n" +
    "        var idx;\r\n" +
    "        for (idx = 0; idx < ctx_element.options.length; ++idx) {\r\n" +
    "            if (ctx_element.options[idx].text == ctx.pj_ss.text) {\r\n" +
    "               ctx.pj_ss.nr = idx; break;\r\n" +
    "            }\r\n" +
    "        }\r\n" +
    "    }\r\n" +
    "}\r\n" +

    "if (ctx.pj_ss.nr == -1) {\r\n" + 
    "    ctx.pj_ss.nr = '$choose_nr$' - 0;\r\n" +
    "    if (typeof(ctx_element.options) == \'object\' &&\r\n" + 
    "        ctx_element.options &&\r\n" +
    "        ctx.pj_ss.nr >= 0 &&\r\n" +
    "        typeof(ctx_element.options.length) == \'number\' &&\r\n" +
    "        ctx_element.options.length > ctx.pj_ss.nr)\r\n" +
    "    {\r\n" +
    "        ctx.pj_ss.text = ctx_element.options[ctx.pj_ss.nr].text;\r\n" +
    "    } else {\r\n" +
    "        ctx.pj_ss.text = \'\';\r\n" +
    "    }\r\n" +
    "}\r\n" +

    "var event = evt_trackValue([false, null],\r\n" +
    "                           null,\r\n" +
    "                           null,\r\n" +
    "                           VALUE_INIT,\r\n" +
    "                           null,\r\n" +
    "                           ctx.pj_ss.nr);\r\n" +
    "ctx.cfg_render(ctx_window, ctx_element, event);\r\n" +
    "var fieldName = ctx.cfg_get_last_render_name();\r\n" +

    "ctx.pj_ss.rule = fieldName + '== \"' + ctx.pj_ss.nr + '\"';\r\n" +
    "ctx.pj_ss.helptext = ctx.cfg_tr(\'MSG_SINGLE_SELECT\', ctx.pj_ss.text);\r\n" +
    "ctx.pj_ss.condition = {\r\n" +
    "    js: ctx.pj_ss.rule, desc: ctx.pj_ss.helptext,\r\n" + 
    "    highlights: [[ctx_window, ctx_element, 0]]\r\n" +
    "};\r\n";

ctx.string_templates["select_single_trans_pt_standard"] =
    "if (typeof(ctx.pj_ss) == 'object') {\r\n" +
    "    evt_defineTransition([-1, null], ctx.pj_ss.condition, TRANSITION_JUMP, \'$%jump_target$\', null);\r\n" +
    "    ctx.pj_ss = null;\r\n" +
    "}" ;

ctx.string_templates["select_single_trans_pt_form"] =
    "if (typeof(ctx.pj_trans_obj) == 'object' && typeof(ctx.pj_ss) == 'object') {\r\n" +
    "    ctx.pj_trans_obj.rules.push({\r\n" +
    "        js: ctx.pj_ss.rule,\r\n" +
    "        desc: ctx.pj_ss.helptext,\r\n" +
    "        highlights: [[ctx_window, ctx_element, 0]]\r\n" +
    "    });\r\n" +
    "    ctx.pj_ss = null;\r\n" +
    "}";

ctx.string_templates["select_single__jstext_trig_pt"] =
    "var event = evt_installTrigger([false, null],\r\n" +
    "                               null,\r\n" +
    "                               null,\r\n" +
    "                               TRIGGER_CHANGE,\r\n" +
    "                               null,\r\n" +
    "                               null,\r\n" +
    "                               TRIGGER_FEEDBACK_USERINPUT,\r\n" +
    "                               null);\r\n" +
    "ctx.cfg_render(ctx_window, ctx_element, event);\r\n";

ctx.string_templates["input_radio_init_trans"] =
    "ctx.pj_ss = new Object();\r\n" +
    "var event = evt_trackValue([false, null],\r\n" +
    "                           null,\r\n" +
    "                           null,\r\n" +
    "                           VALUE_INIT | VALUE_RADIO_SINGLE,\r\n" +
    "                           null,\r\n" +
    "                           \'$choose_bool$\');\r\n" +

    "ctx.cfg_render(ctx_window, ctx_element, event);\r\n" +
    "var fieldName = ctx.cfg_get_last_render_name();\r\n" +

    "ctx.pj_ss.rule = fieldName + \' == \"$choose_bool$\" \';\r\n" +
    "ctx.pj_ss.helptext = ctx.cfg_tr( $choose_bool$ ? \'MSG_OPTIONFIELD_SELECT\' : \'MSG_OPTIONFIELD_DESELECT\', \'$%fieldname$\');\r\n" +
    "ctx.pj_ss.condition = {\r\n"+
    "    js: ctx.pj_ss.rule, desc: ctx.pj_ss.helptext,\r\n" + 
    "    highlights: [[ctx_window, ctx_element, 0]]\r\n" +
    "};\r\n";


ctx.string_templates["input_radio_trans_pt_standard"] =
    "if (typeof(ctx.pj_ss) == 'object') {\r\n" +
    "    evt_defineTransition([-1, null], ctx.pj_ss.condition, TRANSITION_JUMP, \'$%jump_target$\', null);\r\n" +
    "    ctx.pj_ss = null;\r\n" +
    "}" ;

ctx.string_templates["input_radio_trans_pt_form"] =
    "if (typeof(ctx.pj_trans_obj) == 'object' && typeof(ctx.pj_ss) == 'object') {\r\n" +
    "    ctx.pj_trans_obj.rules.push(ctx.pj_ss.condition);\r\n" +
    "    ctx.pj_ss = null;\r\n" +
    "}";

ctx.string_templates["input_radio__jstext_trig_p"] =
    "var event = evt_installTrigger([false, null],\r\n" +
    "                               null,\r\n" +
    "                               null,\r\n" +
    "                               TRIGGER_CHANGE,\r\n" +
    "                               null,\r\n" +
    "                               null,\r\n" +
    "                               TRIGGER_RADIO_SINGLE | TRIGGER_FEEDBACK_USERINPUT,\r\n" +
    "                               null);\r\n" +
    "ctx.cfg_render(ctx_window, ctx_element, event);";


ctx.string_templates["scroll_hor__jstext_scroll"] =
    "if (ctx_element.tagName &&\r\n" +
    "    ctx_element.tagName == \'BODY\' &&\r\n" +
    "    ctx_element.ownerDocument /*This intentionally excludes IE5.5*/ &&\r\n" +
    "    ctx_element.ownerDocument.compatMode &&\r\n" +
    "    ctx_element.ownerDocument.compatMode == \'CSS1Compat\' &&\r\n" +
    "    ctx_element.ownerDocument.documentElement /*Ensure existing HTML tag*/)\r\n" +
    "{\r\n" +
    "    ctx_element.ownerDocument.documentElement.scrollLeft = $scrollleft$;\r\n" +
    "}\r\n" +
    "else {\r\n" +
    "    ctx_element.scrollLeft = $scrollleft$;\r\n" +
    "}";

ctx.string_templates["scroll_vert__jstext_scroll"] =
    "if (ctx_element.tagName &&\r\n" +
    "    ctx_element.tagName == \'BODY\' &&\r\n" +
    "    ctx_element.ownerDocument /*This intentionally excludes IE5.5*/ &&\r\n" +
    "    ctx_element.ownerDocument.compatMode &&\r\n" +
    "    ctx_element.ownerDocument.compatMode == \'CSS1Compat\' &&\r\n" +
    "    ctx_element.ownerDocument.documentElement /*Ensure existing HTML tag*/)\r\n" +
    "{\r\n" +
    "    ctx_element.ownerDocument.documentElement.scrollTop = $scrolltop$;\r\n" +
    "}\r\n" +
    "else {\r\n" +
    "    ctx_element.scrollTop = $scrolltop$;\r\n" +
    "}";


ctx.string_templates["info_page__res_url"] =
    "${resource_dir}/info_blank.html";


ctx.string_templates["info_page__js_page"] =
    "var titlebar = ctx_window.document.getElementById(\'titlebar\');\r\n" +
    "        var title_text = \'$%title$\';\r\n" +
    "        if (titlebar && title_text.length > 0) {\r\n" +
    "            titlebar.style.display = \'\';\r\n" +
    "        }\r\n" +
    "\r\n" +
    "        var tit = ctx_window.document.getElementById(\'title\');\r\n" +
    "        if (tit) tit.innerHTML = title_text;\r\n" +
    "\r\n" +
    "        var icon = ctx_window.document.getElementById(\'icon\');\r\n" +
    "        var type = \'$type$\';\r\n" +
    "        if (icon && type.length > 0) icon.innerHTML = \'<img src=\"../$type$.gif\">\';\r\n" +
    "\r\n" +
    "        var msg = ctx_window.document.getElementById(\'message\');\r\n" +
    "\r\n" +
    "        var msg = ctx_window.document.getElementById(\'message\');\r\n" +
    "        if (msg) msg.innerHTML = \'$%explanation_d$\';\r\n" +
    "\r\n" +
    "        var bub = ctx_window.document.getElementById(\'bubble\');\r\n" +
    "        if (bub) {\r\n" +
    "            bub.style.width = \'$b_width$\';\r\n" +
    "            bub.style.display = \'\';\r\n" +
    "        }";


ctx.string_templates["swf_base_page_url"] = "${resource_dir}/swf_blank.html";


ctx.string_templates["swf_page_add_embed"] =
    "ctx.pj_src = ctx.cfg_resolve(ctx.cfg_config(\'base\')) + \'$%swf_file$\';\r\n" + 
    "var target = ctx_window.document.getElementById(\'swf_object\');\r\n" +
    "if (target) {\r\n" +
    '   target.innerHTML = \'<embed quality="high" salign="CM" loop="true" type="application/x-shockwave-flash" pluginspace="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" wmode="opaque" src="\' + ctx.pj_src + \'" width="$swf_width$" height="$swf_height$">\';' +
    "}";


//ctx.string_templates["quiz_base_page_url"] = "trainer:quiz_styles/$%quiz_style_dir$/quiz_blank.html";
ctx.string_templates["quiz_base_page_url"] = "${resource_dir}/quiz_styles/$%quiz_style_dir$/quiz_blank.html";
//ctx.string_templates["quiz_eval_page_url"] = "trainer:quiz_styles/$%quiz_style_dir$/quiz_eval.html";
ctx.string_templates["quiz_eval_page_url"] = "${resource_dir}/quiz_styles/$%quiz_style_dir$/quiz_eval.html";
ctx.string_templates["quiz_enable"] = "ctx_window.quiz_enable('$%mode$');";
ctx.string_templates["eval_enable"] = "ctx_window.eval_enable();";
ctx.string_templates["quiz_set_score"] = "ctx_window.quiz_set_score($points$);";
ctx.string_templates["quiz_set_question"] = "ctx_window.quiz_set_question('$%question$');";
ctx.string_templates["quiz_set_caption"] = "ctx_window.quiz_set_caption('$%title$');";
ctx.string_templates["quiz_set_flag"] = "ctx_window.quiz_set_flag('$%flag_name$', '$%flag_data$');";
ctx.string_templates["quiz_add_answer"] = "ctx_window.quiz_add_answer('$%answer$');";
ctx.string_templates["quiz_add_question_answer_pair"] = "ctx_window.quiz_add_question_answer_pair('$%question_n$', '$%answer_n$');";
ctx.string_templates["eval_set_param"] = "ctx_window.eval_set_param('$%param_name$', '$%param_data$');";
    
ctx.string_templates["mchoice_check_page"] =
    "if (!'quiz_enable' in ctx_window) { alert('quiz_enable not found'); }" +
    "if (!'quiz_set_score' in ctx_window) { alert('quiz_set_score not found'); }" +     
    "if (!'quiz_set_question' in ctx_window) { alert('quiz_set_question not found'); }" +    
    "if (!'quiz_set_caption' in ctx_window) { alert('quiz_set_caption not found'); }" +    
    "if (!'quiz_set_flag' in ctx_window) { alert('quiz_set_flag not found'); }" +    
    "if (!'quiz_add_answer' in ctx_window) { alert('quiz_add_answer not found'); }" +
    "";
    
ctx.string_templates["sqmaquiz_check_page"] =
    "if (!'quiz_enable' in ctx_window) { alert('quiz_enable not found'); }" +
    "if (!'quiz_set_score' in ctx_window) { alert('quiz_set_score not found'); }" +     
    "if (!'quiz_set_question' in ctx_window) { alert('quiz_set_question not found'); }" +    
    "if (!'quiz_set_caption' in ctx_window) { alert('quiz_set_caption not found'); }" +    
    "if (!'quiz_set_flag' in ctx_window) { alert('quiz_set_flag not found'); }" +    
    "if (!'quiz_add_answer' in ctx_window) { alert('quiz_add_answer not found'); }" +
    "";

ctx.string_templates["fibquiz_check_page"] =
    "if (!'quiz_enable' in ctx_window) { alert('quiz_enable not found'); }" +    
    "if (!'quiz_set_score' in ctx_window) { alert('quiz_set_score not found'); }" +     
    "if (!'quiz_set_question' in ctx_window) { alert('quiz_set_question not found'); }" +    
    "if (!'quiz_set_caption' in ctx_window) { alert('quiz_set_caption not found'); }" +
    "if (!'quiz_set_flag' in ctx_window) { alert('quiz_set_flag not found'); }" +    
    "if (!'quiz_add_answer' in ctx_window) { alert('quiz_add_answer not found'); }" +
    "";

ctx.string_templates["matchquiz_check_page"] =
    "if (!'quiz_enable' in ctx_window) { alert('quiz_enable not found'); }" +    
    "if (!'quiz_set_score' in ctx_window) { alert('quiz_set_score not found'); }" +     
    "if (!'quiz_set_question' in ctx_window) { alert('quiz_set_question not found'); }" +    
    "if (!'quiz_set_caption' in ctx_window) { alert('quiz_set_caption not found'); }" +
    "if (!'quiz_set_flag' in ctx_window) { alert('quiz_set_flag not found'); }" +
    "if (!'quiz_add_question_answer_pair' in ctx_window) { alert('quiz_add_question_answer_pair not found'); }" +
    "";

ctx.string_templates["mixquiz_check_page"] =
    "if (!'quiz_enable' in ctx_window) { alert('quiz_enable not found'); }" +    
    "if (!'quiz_set_score' in ctx_window) { alert('quiz_set_score not found'); }" +     
    "if (!'quiz_set_question' in ctx_window) { alert('quiz_set_question not found'); }" +    
    "if (!'quiz_set_caption' in ctx_window) { alert('quiz_set_caption not found'); }" +
    "if (!'quiz_set_flag' in ctx_window) { alert('quiz_set_flag not found'); }" +
    "if (!'quiz_add_answer' in ctx_window) { alert('quiz_add_answer not found'); }" +
    "";

ctx.string_templates["scalequiz_check_page"] =
    "if (!'quiz_enable' in ctx_window) { alert('quiz_enable not found'); }" +    
    "if (!'quiz_set_score' in ctx_window) { alert('quiz_set_score not found'); }" +     
    "if (!'quiz_set_question' in ctx_window) { alert('quiz_set_question not found'); }" +    
    "if (!'quiz_set_caption' in ctx_window) { alert('quiz_set_caption not found'); }" +
    "if (!'quiz_add_answer' in ctx_window) { alert('quiz_add_answer not found'); }" +
    "";

ctx.string_templates["gridquiz_check_page"] =
    "if (!'quiz_enable' in ctx_window) { alert('quiz_enable not found'); }" +    
    "if (!'quiz_set_score' in ctx_window) { alert('quiz_set_score not found'); }" +     
    "if (!'quiz_set_question' in ctx_window) { alert('quiz_set_question not found'); }" +    
    "if (!'quiz_set_caption' in ctx_window) { alert('quiz_set_caption not found'); }" +
    "if (!'quiz_set_flag' in ctx_window) { alert('quiz_set_flag not found'); }" +
    "if (!'quiz_add_question_answer_pair' in ctx_window) { alert('quiz_add_question_answer_pair not found'); }" +
    "";

ctx.string_templates["evalquiz_check_page"] =
    "if (!'eval_enable' in ctx_window) { alert('eval_enable not found'); }" +    
    "if (!'eval_set_param' in ctx_window) { alert('eval_set_param not found'); }" +    
    "";

ctx.string_templates["puzzlequiz_check_page"] =
    "if (!'quiz_enable' in ctx_window) { alert('quiz_enable not found'); }" +
    "if (!'quiz_set_score' in ctx_window) { alert('quiz_set_score not found'); }" +     
    "if (!'quiz_set_question' in ctx_window) { alert('quiz_set_question not found'); }" +    
    "if (!'quiz_set_caption' in ctx_window) { alert('quiz_set_caption not found'); }" +    
    "if (!'quiz_set_flag' in ctx_window) { alert('quiz_set_flag not found'); }" +    
    "";
