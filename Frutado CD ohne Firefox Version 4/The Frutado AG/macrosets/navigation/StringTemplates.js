
ctx.string_templates = new Array();		
		
ctx.string_templates["start_unit__js_define"]="winnavp_global.AppResponseTime=$%app_res_time$;winnavp_global.ScreenCalmDownTime=$%sc_calm_down_time$;winnavp_global.ScreenTolerence=$%screen_tolerence$;winnavp_global.UseScreenWatcher=$%use_screen_watcher$;\r\n" +
				"            ";
		
	
ctx.string_templates["define_target__js_define"]="ctx_target = new winnavp_Target();ctx_target.tolerence=$%screen_tolerence$;ctx_target.key=\'$%key$\';ctx_target.process_id=$%process_id$;ctx_target.ts_validatory=$%ts_validatory$;ctx_target.subkey=$%subkey$;\r\n" +
				"ctx_target.ts_graphic_dependent=$%ts_sc_depend$;ctx_target.key_graphic_dependent=$%key_sc_depend$;ctx_target.config_file=\'$%config_file$\';\r\n" +
				"ctx_target.ts_caption=\'$%ts$\';ctx_target.ts_mode=\'$%mode$\';ctx_target.single_bubble_pos={dx:$%single_bubble_pos.x$,dy:$%single_bubble_pos.y$};\r\n" +
				"ctx_target.win_rect=CreateRect($%win_rect.x$,$%win_rect.y$,$%win_rect.x$+$%win_rect.cx$,$%win_rect.y$+$%win_rect.cy$);ctx_target.resize_win=$%resize$;\r\n" +
				"ctx_bubble=new winnavp_Bubble();ctx_bubble.b_class=\'$%bubblestyle_d$\';ctx_bubble.b_width=$%b_width$;ctx_bubble.b_height=$%b_height$;ctx_bubble.orientation=\'$%orientation$\';ctx_bubble.no_spike=1;ctx_bubble.minimizable=$%b_minimizable$;ctx_bubble.movable=$%b_movable$;ctx_target.bubble=ctx_bubble;\r\n" +
				"ctx_hilight=new winnavp_Hilight();ctx_hilight.autohide=true;ctx_hilight.htype=\'$%g_highlight_effect$\'==\'frame\' ? 0 : 1;ctx_hilight.border=$%g_highlight_border$;ctx_hilight.color=$%g_highlight_bgr$;ctx_hilight.animsteps=$%anim_steps$;ctx_target.hilight=ctx_hilight;\r\n" +
				"winnavp_player.TargetMap.Insert(ctx_target);\r\n" +
				"            ";
		
	
ctx.string_templates["explanation__js_define"]="ctx_control=new winnavp_Macro();ctx_control.element_type=\'WINExplain\';ctx_control.ctrl_dependent=false;ctx_control.enabled=$%enabled$;ctx_control.fieldname=\'$%fieldname$\';ctx_control.click_pos={x:$%click_pos_rel.x$,y:$%click_pos_rel.y$};eval(\'$%init$\');\r\n" +
				"ctx_bubble=new winnavp_Bubble();ctx_bubble.explanation=\'$%explanation_d$\';ctx_bubble.b_class=\'$%bubblestyle_d$\';ctx_bubble.b_width=$%b_width$;ctx_bubble.b_height=$%b_height$;ctx_bubble.orientation=\'$%orientation$\';ctx_bubble.offset_x=$%bubble_offset.x$;ctx_bubble.offset_y=$%bubble_offset.y$;ctx_bubble.minimized=$%b_minimized$;ctx_bubble.no_spike=$%no_spike$;ctx_bubble.minimizable=$%b_minimizable$;ctx_bubble.movable=$%b_movable$;ctx_control.bubble=ctx_bubble;\r\n" +
				"ctx_window.Macros.push(ctx_control);\r\n" +
				"            ";
		
	
ctx.string_templates["explanation_long__js_define"]="ctx_control=new winnavp_Macro();ctx_control.element_type=\'WINExplainLong\';ctx_control.enabled=$%enabled$;ctx_control.ctrl_dependent=false;ctx_control.fieldname=\'$%fieldname$\';ctx_control.click_pos={x:$%click_pos_rel.x$,y:$%click_pos_rel.y$};eval(\'$%init$\');\r\n" +
				"ctx_bubble=new winnavp_Bubble();ctx_bubble.explanation=\'$%explanation_d$\';ctx_bubble.b_class=\'$%bubblestyle_d$\';ctx_bubble.b_width=$%b_width$;ctx_bubble.b_height=$%b_height$;ctx_bubble.orientation=\'$%orientation$\';ctx_bubble.offset_x=$%bubble_offset.x$;ctx_bubble.offset_y=$%bubble_offset.y$;ctx_bubble.minimized=$%b_minimized$;ctx_bubble.no_spike=$%no_spike$;ctx_bubble.minimizable=$%b_minimizable$;ctx_bubble.movable=$%b_movable$;ctx_control.bubble=ctx_bubble;\r\n" +
				"ctx_window.Macros.push(ctx_control);\r\n" +
				"            ";
		
	
ctx.string_templates["choose_process__js_define"]="ctx_control=new winnavp_Macro();ctx_control.element_type=\'WINProcess\';ctx_control.ctrl_dependent=false;ctx_control.click_pos={x:$%click_pos_rel.x$,y:$%click_pos_rel.y$};eval(\'$%init$\');\r\n" +
				"ctx_bubble=new winnavp_Bubble();ctx_bubble.explanation=\'$%explanation_d$\';ctx_bubble.b_class=\'$%bubblestyle_d$\';ctx_bubble.b_width=$%b_width$;ctx_bubble.b_height=$%b_height$;ctx_bubble.orientation=\'$%orientation$\';ctx_bubble.offset_x=$%bubble_offset.x$;ctx_bubble.offset_y=$%bubble_offset.y$;ctx_bubble.minimized=$%b_minimized$;ctx_bubble.no_spike=$%no_spike$;ctx_bubble.minimizable=$%b_minimizable$;ctx_bubble.movable=$%b_movable$;ctx_control.bubble=ctx_bubble;\r\n" +
				"ctx_window.Macros.push(ctx_control);\r\n" +
				"            ";
		
	
ctx.string_templates["click__js_define"]="ctx_control=new winnavp_Macro();ctx_control.element_type=\'$%element_type$\';ctx_control.enabled=$%enabled$;ctx_control.bubble_enabled=$%show_bubble$;ctx_control.hilight_enabled=$%show_hilight$;ctx_control.validatory=$%macro_validatory$;ctx_control.objectname=\'$%objname$\';ctx_control.fieldname=\'$%fieldname$\';ctx_control.click_pos={x:$%click_pos.x$,y:$%click_pos.y$};ctx_control.action=\'$%action$\';ctx_control.path=\'$%path$\';ctx_control.leaves_page=$%leaves_page$;eval(\'$%init$\');\r\n" +
				"ctx_bubble=new winnavp_Bubble();ctx_bubble.explanation=\'$%explanation_d$\';ctx_bubble.b_class=\'$%bubblestyle_d$\';ctx_bubble.b_width=$%b_width$;ctx_bubble.b_height=$%b_height$;ctx_bubble.orientation=\'$%orientation$\';ctx_bubble.offset_x=$%bubble_offset.x$;ctx_bubble.offset_y=$%bubble_offset.y$;ctx_bubble.minimized=$%b_minimized$;ctx_bubble.no_spike=$%no_spike$;ctx_bubble.minimizable=$%b_minimizable$;ctx_bubble.movable=$%b_movable$;ctx_control.bubble=ctx_bubble;\r\n" +
				"ctx_hilight=new winnavp_Hilight();ctx_hilight.autohide=$%auto_hide$==0 ? false : true;ctx_hilight.htype=\'$%g_highlight_effect$\'==\'frame\' ? 0 : 1;ctx_hilight.border=$%g_highlight_border$;ctx_hilight.color=$%g_highlight_bgr$;ctx_hilight.animsteps=$%anim_steps$;ctx_control.hilight=ctx_hilight;\r\n" +
				"ctx_window.Macros.push(ctx_control);\r\n" +
				"if ($%show_on_focus$) {var obj = {script:\'ctx_control.ShowEffectBubble();\',action:\'Focus\',type:\'object\',objname:\'$%objname$\'};winnavp_behaviours.AssignDirect(obj);}\r\n" +
				"if ($%mini_on_focuslost$) {var obj = {script:\'ctx_control.MinimizeBubble();\',action:\'FocusLost\',type:\'object\',objname:\'$%objname$\'};winnavp_behaviours.AssignDirect(obj);}\r\n" +
				"if ($%hide_on_focuslost$) {var obj = {script:\'ctx_control.HideEffectBubble();\',action:\'FocusLost\',type:\'object\',objname:\'$%objname$\'};winnavp_behaviours.AssignDirect(obj);}\r\n" +
				"            ";
		
	
ctx.string_templates["active_area__js_define"]="ctx_control=new winnavp_Macro();ctx_control.element_type=\'WINActiveArea\';ctx_control.enabled=$%enabled$;ctx_control.bubble_enabled=$%show_bubble$;ctx_control.hilight_enabled=$%show_hilight$;ctx_control.validatory=$%macro_validatory$;ctx_control.objectname=\'$%objname$\';\r\n" +
				"ctx_control.rect=CreateRect($%area.x$,$%area.y$,$%area.x$+$%area.cx$,$%area.y$+$%area.cy$);ctx_control.leaves_page=$%leaves_page$;ctx_control.ctrl_dependent=false;eval(\'$%init$\');\r\n" +
				"ctx_bubble=new winnavp_Bubble();ctx_bubble.explanation=\'$%explanation_d$\';ctx_bubble.b_class=\'$%bubblestyle_d$\';ctx_bubble.b_width=$%b_width$;ctx_bubble.b_height=$%b_height$;ctx_bubble.orientation=\'$%orientation$\';ctx_bubble.offset_x=$%bubble_offset.x$;ctx_bubble.offset_y=$%bubble_offset.y$;ctx_bubble.minimized=$%b_minimized$;ctx_bubble.no_spike=$%no_spike$;ctx_bubble.minimizable=$%b_minimizable$;ctx_bubble.movable=$%b_movable$;ctx_control.bubble=ctx_bubble;\r\n" +
				"ctx_hilight=new winnavp_Hilight();ctx_hilight.autohide=$%auto_hide$==0 ? false : true;ctx_hilight.htype=\'$%g_highlight_effect$\'==\'frame\' ? 0 : 1;ctx_hilight.border=$%g_highlight_border$;ctx_hilight.color=$%g_highlight_bgr$;ctx_hilight.animsteps=$%anim_steps$;ctx_control.hilight=ctx_hilight;\r\n" +
				"ctx_window.Macros.push(ctx_control);\r\n" +
				"if ($%show_on_focus$) {var obj = {script:\'ctx_control.ShowEffectBubble();\',action:\'Focus\',type:\'object\',objname:\'$%objname$\'};winnavp_behaviours.AssignDirect(obj);}\r\n" +
				"if ($%mini_on_focuslost$) {var obj = {script:\'ctx_control.MinimizeBubble();\',action:\'FocusLost\',type:\'object\',objname:\'$%objname$\'};winnavp_behaviours.AssignDirect(obj);}\r\n" +
				"if ($%hide_on_focuslost$) {var obj = {script:\'ctx_control.HideEffectBubble();\',action:\'FocusLost\',type:\'object\',objname:\'$%objname$\'};winnavp_behaviours.AssignDirect(obj);}\r\n" +
				"            ";
		
	
ctx.string_templates["key_press__js_define"]="ctx_control=new winnavp_Macro();ctx_control.element_type=\'WINKeyPress\';ctx_control.enabled=$%enabled$;ctx_control.ctrl_dependent=false;ctx_control.objectname=\'$%objname$\';ctx_control.fieldname=\'$%key_desc$\';ctx_control.click_pos={x:$%click_pos_rel.x$,y:$%click_pos_rel.y$};ctx_control.path=\'$%path$\';ctx_control.leaves_page=$%leaves_page$;eval(\'$%init$\');\r\n" +
				"ctx_bubble=new winnavp_Bubble();ctx_bubble.explanation=\'$%explanation_d$\';ctx_bubble.b_class=\'$%bubblestyle_d$\';ctx_bubble.b_width=$%b_width$;ctx_bubble.b_height=$%b_height$;ctx_bubble.orientation=\'$%orientation$\';ctx_bubble.offset_x=$%bubble_offset.x$;ctx_bubble.offset_y=$%bubble_offset.y$;ctx_bubble.minimized=$%b_minimized$;ctx_bubble.no_spike=$%no_spike$;ctx_bubble.minimizable=$%b_minimizable$;ctx_bubble.movable=$%b_movable$;ctx_control.bubble=ctx_bubble;\r\n" +
				"ctx_window.Macros.push(ctx_control);\r\n" +
				"            ";
		
	
ctx.string_templates["input_text__js_define"]="ctx_control=new winnavp_Macro();ctx_control.element_type=\'$%element_type$\';ctx_control.enabled=$%enabled$;ctx_control.bubble_enabled=$%show_bubble$;ctx_control.hilight_enabled=$%show_hilight$;ctx_control.validatory=$%macro_validatory$;ctx_control.objectname=\'$%objname$\';ctx_control.fieldname=\'$%fieldname$\';ctx_control.click_pos={x:$%click_pos.x$,y:$%click_pos.y$};ctx_control.action=\'$%action$\';ctx_control.path=\'$%path$\';ctx_control.value=\'$%text_d$\';ctx_control.leaves_page=$%leaves_page$;eval(\'$%init$\');\r\n" +
				"ctx_bubble=new winnavp_Bubble();ctx_bubble.explanation=\'$%explanation_d$\';ctx_bubble.b_class=\'$%bubblestyle_d$\';ctx_bubble.b_width=$%b_width$;ctx_bubble.b_height=$%b_height$;ctx_bubble.orientation=\'$%orientation$\';ctx_bubble.offset_x=$%bubble_offset.x$;ctx_bubble.offset_y=$%bubble_offset.y$;ctx_bubble.minimized=$%b_minimized$;ctx_bubble.no_spike=$%no_spike$;ctx_bubble.minimizable=$%b_minimizable$;ctx_bubble.movable=$%b_movable$;ctx_control.bubble=ctx_bubble;\r\n" +
				"ctx_hilight=new winnavp_Hilight();ctx_hilight.autohide=$%auto_hide$==0 ? false : true;ctx_hilight.htype=\'$%g_highlight_effect$\'==\'frame\' ? 0 : 1;ctx_hilight.border=$%g_highlight_border$;ctx_hilight.color=$%g_highlight_bgr$;ctx_hilight.animsteps=$%anim_steps$;ctx_control.hilight=ctx_hilight;\r\n" +
				"ctx_window.Macros.push(ctx_control);\r\n" +
				"if ($%show_on_focus$) {var obj = {script:\'ctx_control.ShowEffectBubble();\',action:\'Focus\',type:\'object\',objname:\'$%objname$\'};winnavp_behaviours.AssignDirect(obj);}\r\n" +
				"if ($%mini_on_focuslost$) {var obj = {script:\'ctx_control.MinimizeBubble();\',action:\'FocusLost\',type:\'object\',objname:\'$%objname$\'};winnavp_behaviours.AssignDirect(obj);}\r\n" +
				"if ($%hide_on_focuslost$) {var obj = {script:\'ctx_control.HideEffectBubble();\',action:\'FocusLost\',type:\'object\',objname:\'$%objname$\'};winnavp_behaviours.AssignDirect(obj);}\r\n" +
				"            ";
		
	
ctx.string_templates["select_single__js_define"]="ctx_control=new winnavp_Macro();ctx_control.element_type=\'$%element_type$\';ctx_control.enabled=$%enabled$;ctx_control.bubble_enabled=$%show_bubble$;ctx_control.hilight_enabled=$%show_hilight$;ctx_control.validatory=$%macro_validatory$;ctx_control.objectname=\'$%objname$\';ctx_control.fieldname=\'$%fieldname$\';ctx_control.click_pos={x:$%click_pos.x$,y:$%click_pos.y$};ctx_control.action=\'$%action$\';ctx_control.path=\'$%path$\';ctx_control.value=\'$%choose_text$\';ctx_control.leaves_page=$%leaves_page$;eval(\'$%init$\');\r\n" +
				"ctx_bubble=new winnavp_Bubble();ctx_bubble.explanation=\'$%explanation_d$\';ctx_bubble.b_class=\'$%bubblestyle_d$\';ctx_bubble.b_width=$%b_width$;ctx_bubble.b_height=$%b_height$;ctx_bubble.orientation=\'$%orientation$\';ctx_bubble.offset_x=$%bubble_offset.x$;ctx_bubble.offset_y=$%bubble_offset.y$;ctx_bubble.minimized=$%b_minimized$;ctx_bubble.no_spike=$%no_spike$;ctx_bubble.minimizable=$%b_minimizable$;ctx_bubble.movable=$%b_movable$;ctx_control.bubble=ctx_bubble;\r\n" +
				"ctx_hilight=new winnavp_Hilight();ctx_hilight.autohide=$%auto_hide$==0 ? false : true;ctx_hilight.htype=\'$%g_highlight_effect$\'==\'frame\' ? 0 : 1;ctx_hilight.border=$%g_highlight_border$;ctx_hilight.color=$%g_highlight_bgr$;ctx_hilight.animsteps=$%anim_steps$;ctx_control.hilight=ctx_hilight;\r\n" +
				"ctx_window.Macros.push(ctx_control);\r\n" +
				"if ($%show_on_focus$) {var obj = {script:\'ctx_control.ShowEffectBubble();\',action:\'Focus\',type:\'object\',objname:\'$%objname$\'};winnavp_behaviours.AssignDirect(obj);}\r\n" +
				"if ($%mini_on_focuslost$) {var obj = {script:\'ctx_control.MinimizeBubble();\',action:\'FocusLost\',type:\'object\',objname:\'$%objname$\'};winnavp_behaviours.AssignDirect(obj);}\r\n" +
				"if ($%hide_on_focuslost$) {var obj = {script:\'ctx_control.HideEffectBubble();\',action:\'FocusLost\',type:\'object\',objname:\'$%objname$\'};winnavp_behaviours.AssignDirect(obj);}\r\n" +
				"            ";
		
	
ctx.string_templates["input_radio__js_define"]="ctx_control=new winnavp_Macro();ctx_control.element_type=\'$%element_type$\';ctx_control.enabled=$%enabled$;ctx_control.bubble_enabled=$%show_bubble$;ctx_control.hilight_enabled=$%show_hilight$;ctx_control.validatory=$%macro_validatory$;ctx_control.objectname=\'$%objname$\';ctx_control.fieldname=\'$%fieldname$\';ctx_control.click_pos={x:$%click_pos.x$,y:$%click_pos.y$};ctx_control.action=\'$%action$\';ctx_control.path=\'$%path$\';ctx_control.value=\'$%choose_bool$\';ctx_control.leaves_page=$%leaves_page$;eval(\'$%init$\');\r\n" +
				"ctx_bubble=new winnavp_Bubble();ctx_bubble.explanation=\'$%explanation_d$\';ctx_bubble.b_class=\'$%bubblestyle_d$\';ctx_bubble.b_width=$%b_width$;ctx_bubble.b_height=$%b_height$;ctx_bubble.orientation=\'$%orientation$\';ctx_bubble.offset_x=$%bubble_offset.x$;ctx_bubble.offset_y=$%bubble_offset.y$;ctx_bubble.minimized=$%b_minimized$;ctx_bubble.no_spike=$%no_spike$;ctx_bubble.minimizable=$%b_minimizable$;ctx_bubble.movable=$%b_movable$;ctx_control.bubble=ctx_bubble;\r\n" +
				"ctx_hilight=new winnavp_Hilight();ctx_hilight.autohide=$%auto_hide$==0 ? false : true;ctx_hilight.htype=\'$%g_highlight_effect$\'==\'frame\' ? 0 : 1;ctx_hilight.border=$%g_highlight_border$;ctx_hilight.color=$%g_highlight_bgr$;ctx_hilight.animsteps=$%anim_steps$;ctx_control.hilight=ctx_hilight;\r\n" +
				"ctx_window.Macros.push(ctx_control);\r\n" +
				"if ($%show_on_focus$) {var obj = {script:\'ctx_control.ShowEffectBubble();\',action:\'Focus\',type:\'object\',objname:\'$%objname$\'};winnavp_behaviours.AssignDirect(obj);}\r\n" +
				"if ($%mini_on_focuslost$) {var obj = {script:\'ctx_control.MinimizeBubble();\',action:\'FocusLost\',type:\'object\',objname:\'$%objname$\'};winnavp_behaviours.AssignDirect(obj);}\r\n" +
				"if ($%hide_on_focuslost$) {var obj = {script:\'ctx_control.HideEffectBubble();\',action:\'FocusLost\',type:\'object\',objname:\'$%objname$\'};winnavp_behaviours.AssignDirect(obj);}\r\n" +
				"            ";
		
	
ctx.string_templates["script__js_define"]="ctx_control = new winnavp_Macro();ctx_control.playable=false;eval(\'$%init$\');\r\n" +
				"ctx_window.Macros.push(ctx_control);\r\n" +
				"            ";
		
	
ctx.string_templates["behaviour__js_define"]="ctx_behave = new winnavp_Behaviour();ctx_behave.name=\'$%behave_name$\';ctx_behave.script=\'$%script$\';\r\n" +
				"winnavp_behaviours.Insert(ctx_behave);\r\n" +
				"            ";
		
	
ctx.string_templates["behaviour_assign_global__js_define"]="var obj = {behaviour:\'$%behaviour$\',action:\'$%action$\',type:\'global\'};\r\n" +
				"winnavp_behaviours.Assign(obj);\r\n" +
				"            ";
		
	
ctx.string_templates["behaviour_assign_ns__js_define"]="var obj = {behaviour:\'$%behaviour$\',action:\'$%action$\',type:\'ts\',ns:\'$%ts$\'};\r\n" +
				"winnavp_behaviours.Assign(obj);\r\n" +
				"            ";
		
	
ctx.string_templates["behaviour_assign_object__js_define"]="var obj = {behaviour:\'$%behaviour$\',action:\'$%action$\',type:\'object\',objname:\'$%objname2$\'};\r\n" +
				"winnavp_behaviours.Assign(obj);\r\n" +
				"            ";
		
	
ctx.string_templates["free_object__js_define"]="ctx_freeobj=new winnavp_FreeObject();ctx_freeobj.objectname=\'$%objname$\';ctx_freeobj.position={x:$%position.x$,y:$%position.y$};ctx_freeobj.explanation=\'$%explanation_d$\';\r\n" +
				"ctx_bubble=new winnavp_Bubble();ctx_bubble.b_class=\'$%bubblestyle_d$\';ctx_bubble.b_width=$%b_width$;ctx_bubble.b_height=$%b_height$;ctx_bubble.orientation=\'$%orientation$\';ctx_bubble.offset_x=$%bubble_offset.x$;ctx_bubble.offset_y=$%bubble_offset.y$;ctx_bubble.minimized=$%b_minimized$;ctx_bubble.no_spike=$%no_spike$;ctx_bubble.window_dependent=$%window_dependent$;ctx_bubble.minimizable=$%b_minimizable$;ctx_bubble.movable=$%b_movable$;ctx_freeobj.bubble=ctx_bubble;\r\n" +
				"winnavp_player.FreeObjects.Insert(ctx_freeobj);\r\n" +
				"            ";
		
	
ctx.string_templates["free_object_elem__js_define"]="ctx_freeobjelem=new winnavp_FreeObjectElement();ctx_freeobjelem.objectname=\'$%objname$\';ctx_freeobjelem.free_objectname=\'$%free_object$\';\r\n" +
				"ctx_freeobjelem.explanation=\'$%explanation_d$\';ctx_freeobjelem.enabled=$%enabled$;ctx_freeobj=null;ctx_freeobj=winnavp_player.FreeObjects.Find(ctx_freeobjelem.free_objectname);\r\n" +
				"if (ctx_freeobj != null) ctx_freeobj.InsertElem(ctx_freeobjelem);\r\n" +
				"            ";
		
	
ctx.string_templates["beh_cancel__js_define"]=ctx.string_templates["behaviour__js_define"];
		
	
ctx.string_templates["beh_display_fo__js_define"]="ctx_behave = new winnavp_Behaviour();ctx_behave.name=\'$%behave_name$\';ctx_behave.script=\'var frobj = winnavp_player.FreeObjects.Find(\"$%free_object$\");frobj.Show();\';\r\n" +
				"winnavp_behaviours.Insert(ctx_behave);\r\n" +
				"            ";
		
	
ctx.string_templates["beh_hide_fo__js_define"]="ctx_behave = new winnavp_Behaviour();ctx_behave.name=\'$%behave_name$\';ctx_behave.script=\'var frobj = winnavp_player.FreeObjects.Find(\"$%free_object$\");frobj.Hide();\';\r\n" +
				"winnavp_behaviours.Insert(ctx_behave);\r\n" +
				"            ";
		
	
ctx.string_templates["beh_foe_bold__js_define"]="ctx_behave = new winnavp_Behaviour();ctx_behave.name=\'$%behave_name$\';ctx_behave.script=\'var frobj = winnavp_player.FreeObjects.Find(\"$%free_object$\");var ns = frobj.FindElem(\"$%free_object_elem$\");frobj.Reset();if (ns != null) ns.Bold = true;frobj.UpdateText();\';\r\n" +
				"winnavp_behaviours.Insert(ctx_behave);\r\n" +
				"            ";
		
	
ctx.string_templates["beh_foe_change_state__js_define"]="ctx_behave = new winnavp_Behaviour();ctx_behave.name=\'$%behave_name$\';ctx_behave.script=\'var frobj = winnavp_player.FreeObjects.Find(\"$%free_object$\");if (!$%exclusive$) {var ns = frobj.FindElem(\"$%free_object_elem$\");if (ns != null) ns.enabled = $%enabled$;} else {frobj.EnableElemExcl(\"$%free_object_elem$\", $%enabled$);} frobj.UpdateText();\';\r\n" +
				"winnavp_behaviours.Insert(ctx_behave);\r\n" +
				"            ";
		
	
ctx.string_templates["beh_hilight__js_define"]="ctx_behave = new winnavp_Behaviour();ctx_behave.name=\'$%behave_name$\';\r\n" +
				"ctx_behave.script=\'winnavp_ShowControlExt({objname:\"$%objname2$\",htype:\"$%g_highlight_effect$\",border:$%g_highlight_border$,color:$%g_highlight_bgr$,animsteps:$%anim_steps$,autohide:$%auto_hide$});\';\r\n" +
				"winnavp_behaviours.Insert(ctx_behave);\r\n" +
				"            ";
		
	
ctx.string_templates["beh_hide_hilight__js_define"]="ctx_behave = new winnavp_Behaviour();ctx_behave.name=\'$%behave_name$\';\r\n" +
				"ctx_behave.script=\'winnavp_HideControl(\"$%objname2$\");\';\r\n" +
				"winnavp_behaviours.Insert(ctx_behave);\r\n" +
				"            ";
		
	
ctx.string_templates["beh_set_value__js_define"]="ctx_behave = new winnavp_Behaviour();ctx_behave.name=\'$%behave_name$\';\r\n" +
				"ctx_behave.script=\'winnavp_SetValue(\"$%objname2$\", \"$%value$\");\';\r\n" +
				"winnavp_behaviours.Insert(ctx_behave);\r\n" +
				"            ";
		
	