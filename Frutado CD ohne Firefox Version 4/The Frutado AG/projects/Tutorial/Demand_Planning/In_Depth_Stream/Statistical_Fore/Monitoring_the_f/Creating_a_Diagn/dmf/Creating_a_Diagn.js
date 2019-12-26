
function msglist_0001(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 0, name: 'TS_6C46212DDF1146E0B49C9A8359453F38', label: 'Start', jumpable: 0, visible: 0, callable: 0});
    ctx.ms.start_unit(ctx, win_, 0, 10, {
        macro_comment:'',
        possible_points:39,
        mastery_score:31,
        task_text:'',
        task_width:240,
        task_height:0,
        task_orientation:'NW',
        task_bgcolor:'#FFFFB7',
        in_practice:0,
        in_test:1
    });
    ctx.ms.end_tourstop(ctx, win_, 10 , {});
    win_.evt_simple(10,4000);
    win_.evt_simple(10,3902);
    return true;
}

function msglist_0002(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 1, name: 'TS_03317273B35E4C5E9622E72386451616', label: '(kein Titel)', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0003.html',
        new_step:'SAP Easy Access  mySAP Supply Chain Management'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3>To create a Diagnosis Group you have to&nbsp;maintain the forecast profile.</FONT>',
        type:'none',
        all_like_demo:0,
        explanation_p:'',
        in_demo:1,
        in_practice:1,
        in_test:1,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.674983, y:0.506447}, DocXY: {x:0.674983, y:0.491829}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:400,
        b_height:40,
        orientation:'C',
        b_duration:-1,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado'
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0003(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 2, name: 'TS_CA5B9AB29A1341E1AC20C51FCD232B81', label: 'SAP Easy Access  mySAP Supply Chain Management', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0003.html',
        new_step:'SAP Easy Access  mySAP Supply Chain Management'
    });
    ctx.ms.transaction_info(ctx, win_, 10, 1, {
        macro_comment:'',
        tcode:'/SAPAPO/MC96B - Maintain Forecast Profiles'
    });
    ctx.ms.click(ctx, win_, 11, 10, {
        macro_comment:'',
        fieldname:'/SAPAPO/MC96B - Maintain Forecast Profiles',
        fieldicon:'field_icon_02.gif',
        explanation_d:'<FONT size=3>The transaction <B>$#{fieldname}</B> is started by double-clicking it.</FONT>',
        explanation_p:'Start the transaction <b>$#{fieldname}</b>  by double clicking it.',
        action:'ldblclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:150,
        b_height:40,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'_default',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0.499977, y:0.499977}, DocXY: {x:0.499977, y:0.499977}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 21 , {});
    win_.evt_simple(21,4000);
    win_.evt_simple(21,3902);
    return true;
}

function msglist_0004(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 3, name: 'TS_9DC74551A3BC4588ADD2653A7FEFB964', label: 'Maintain Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0004.html',
        new_step:'Maintain Forecast Profile'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Univariate Profile',
        fieldicon:'field_icon_03.gif',
        explanation_d:'<FONT size=3>Clicking on the $P{fieldicon} tab selects it.</FONT>',
        explanation_p:'Click on the $P{fieldicon}  tab to select it.',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:150,
        b_height:40,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'_default',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0.499977, y:0.499977}, DocXY: {x:0.499977, y:0.499977}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0005(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 4, name: 'TS_6C3511CF4CC34EC68CFDA24139668C14', label: 'Univariate Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0006.html',
        new_step:'Univariate Forecast Profile'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Diagnosis Group',
        fieldicon:'field_icon_04.gif',
        text_d:'FRU_DIAGN_GROUP',
        regexp:'',
        explanation_d:'<FONT size=3>The <B>$#{fieldname}</B> field is filled out.</FONT> \r\n<P></P>\r\n<P><FONT size=3>You can choose the name freely.</FONT>',
        explanation_p:'Enter <b>$#{text_d}</b>  in the  <b>$#{fieldname}</b>  field.<br>Confirm your entry by pressing the <b>Tab key</b>.',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        affirmation_button:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:1,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:180,
        b_height:40,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'_default',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0.499977, y:0.499977}, DocXY: {x:0.499977, y:0.499977}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0006(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 5, name: 'TS_C0A5B1306CE245A8827B47EFBA21355A', label: 'Univariate Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0007.html',
        new_step:'Univariate Forecast Profile'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Maintain diagnos.group',
        fieldicon:'field_icon_05.gif',
        explanation_d:'<FONT size=3>To set the thresholds of the alerts,<STRONG> </STRONG><SPAN id=fieldname contentEditable=false ue=\"true\"><STRONG>Maintain diagnos.group</STRONG></SPAN><STRONG>&nbsp;</STRONG><SPAN id=fieldicon contentEditable=false><STRONG><IMG src=\"pages/field_icon_05.gif\"></STRONG></SPAN> is clicked.</FONT>',
        explanation_p:'Click on <b>$#{fieldname}&nbsp;$P{fieldicon}</b>.',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:150,
        b_height:40,
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'_default',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0.499977, y:0.499977}, DocXY: {x:0.499977, y:0.499977}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0007(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 6, name: 'TS_32CC51F33F464EB78882F7F7B2C9F210', label: '(kein Titel)', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0009.html',
        new_step:'Maintain Diagnosis Group'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3>In this monitor you can set the thresholds, upon which you want the system to carry out an alert. </FONT>\r\n<P></P>\r\n<P><FONT size=3>We round the current forecast errors and fill them in. By doing so, we will have an Alert, if the forecast quality gets worse.</FONT>',
        type:'none',
        all_like_demo:0,
        explanation_p:'',
        in_demo:1,
        in_practice:1,
        in_test:1,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0', '', 0, 0, 'eep_path=\"0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"TD\"};\r\neep_coll={n:\"\",i:0,ii:-1};\r\neep_parents=[{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_TD_\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0', '', 0, 0, 'eep_path=\"0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"TD\"};\r\neep_coll={n:\"\",i:0,ii:-1};\r\neep_parents=[{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_TD_\";'), XY: {x:0.84062, y:0.375006}, DocXY: {x:0.84062, y:0.375006}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:400,
        b_height:40,
        orientation:'C',
        b_duration:-1,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado'
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0008(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 7, name: 'TS_3017954AF1194BD5967800499709C070', label: 'Maintain Diagnosis Group', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0009.html',
        new_step:'Maintain Diagnosis Group'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'MAD upper limit',
        fieldicon:'field_icon_06.gif',
        text_d:'400',
        regexp:'',
        explanation_d:'<FONT size=3>The <B>$#{fieldname}</B> field is filled out.</FONT>',
        explanation_p:'Enter <b>$#{text_d}</b>  in the  <b>$#{fieldname}</b>  field.<br>Confirm your entry by pressing the <b>Tab key</b>.',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        affirmation_button:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:1,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:180,
        b_height:40,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'_default',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0.499977, y:0.499977}, DocXY: {x:0.499977, y:0.499977}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0009(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 8, name: 'TS_9C06933E1C0D447B9EE9EC42AA48AE44', label: 'Maintain Diagnosis Group', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0011.html',
        new_step:'Maintain Diagnosis Group'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Error total upper limit',
        fieldicon:'field_icon_07.gif',
        text_d:'1',
        regexp:'',
        explanation_d:'<FONT size=3>The <B>$#{fieldname}</B> field is filled out.</FONT>',
        explanation_p:'Enter <b>$#{text_d}</b>  in the  <b>$#{fieldname}</b>  field.<br>Confirm your entry by pressing the <b>Enter key</b>.',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:0,
        confirmation_enter:1,
        affirmation_button:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:1,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:180,
        b_height:40,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'_default',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0.499977, y:0.499977}, DocXY: {x:0.499977, y:0.499977}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0010(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 9, name: 'TS_272A9A7822C940B1B63DFB4369BADF2C', label: 'Maintain Diagnosis Group', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0014.html',
        new_step:'Maintain Diagnosis Group'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'MPE upper limit',
        fieldicon:'field_icon_08.gif',
        text_d:'1',
        regexp:'',
        explanation_d:'<FONT size=3>The <B>$#{fieldname}</B> field is filled out.</FONT>',
        explanation_p:'Enter <b>$#{text_d}</b>  in the  <b>$#{fieldname}</b>  field.<br>Confirm your entry by pressing the <b>Enter key</b>.',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:0,
        confirmation_enter:1,
        affirmation_button:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:1,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:180,
        b_height:40,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'_default',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0.499977, y:0.499977}, DocXY: {x:0.499977, y:0.499977}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0011(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 10, name: 'TS_9A658DC2C1DA4DAF8A0C1CA3EBA0E9E1', label: 'Maintain Diagnosis Group', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0017.html',
        new_step:'Maintain Diagnosis Group'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'MAPE upper limit',
        fieldicon:'field_icon_09.gif',
        text_d:'1',
        regexp:'',
        explanation_d:'<FONT size=3>The <B>$#{fieldname}</B> field is filled out.</FONT>',
        explanation_p:'Enter <b>$#{text_d}</b>  in the  <b>$#{fieldname}</b>  field.<br>Confirm your entry by pressing the <b>Enter key</b>.',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:0,
        confirmation_enter:1,
        affirmation_button:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:1,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:180,
        b_height:40,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'_default',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0.499977, y:0.499977}, DocXY: {x:0.499977, y:0.499977}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0012(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 11, name: 'TS_56EAB98382CC489FBDA3CBF84D2EE176', label: 'Maintain Diagnosis Group', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0020.html',
        new_step:'Maintain Diagnosis Group'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'MSE upper limit',
        fieldicon:'field_icon_10.gif',
        text_d:'35',
        regexp:'',
        explanation_d:'<FONT size=3>The <B>$#{fieldname}</B> field is filled out.</FONT>',
        explanation_p:'Enter <b>$#{text_d}</b>  in the  <b>$#{fieldname}</b>  field.<br>Confirm your entry by pressing the <b>Enter key</b>.',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:0,
        confirmation_enter:1,
        affirmation_button:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:1,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:180,
        b_height:40,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'_default',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0.499977, y:0.499977}, DocXY: {x:0.499977, y:0.499977}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0013(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 12, name: 'TS_1794F0C5980F4BCDBCCA6D026B8E0557', label: 'Maintain Diagnosis Group', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0023.html',
        new_step:'Maintain Diagnosis Group'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'RMSE upper limit',
        fieldicon:'field_icon_11.gif',
        text_d:'6',
        regexp:'',
        explanation_d:'<FONT size=3>The <B>$#{fieldname}</B> field is filled out.</FONT>',
        explanation_p:'Enter <b>$#{text_d}</b>  in the  <b>$#{fieldname}</b>  field.<br>Confirm your entry by pressing the <b>Enter key</b>.',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:0,
        confirmation_enter:1,
        affirmation_button:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:1,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:180,
        b_height:40,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'_default',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0.499977, y:0.499977}, DocXY: {x:0.499977, y:0.499977}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0014(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 13, name: 'TS_5EF07E7217144BE7AED4A776713C775D', label: 'Maintain Diagnosis Group', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0025.html',
        new_step:'Maintain Diagnosis Group'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Save Group',
        fieldicon:'field_icon_12.gif',
        explanation_d:'<FONT size=3><B>$#{fieldname}&nbsp;$P{fieldicon}</B> is clicked.</FONT>',
        explanation_p:'Click on <b>$#{fieldname}&nbsp;$P{fieldicon}</b>.',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:150,
        b_height:40,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'_default',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0.499977, y:0.499977}, DocXY: {x:0.499977, y:0.499977}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0015(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 14, name: 'TS_E63C2178271F43AD9FA651127A435328', label: 'Maintain Diagnosis Group', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0026.html',
        new_step:'Maintain Diagnosis Group'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Adopt',
        fieldicon:'field_icon_13.gif',
        explanation_d:'<FONT size=3><B>$#{fieldname}&nbsp;$P{fieldicon}</B> is clicked.</FONT>',
        explanation_p:'Click on <b>$#{fieldname}&nbsp;$P{fieldicon}</b>.',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:150,
        b_height:40,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'_default',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0.499977, y:0.499977}, DocXY: {x:0.499977, y:0.499977}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0016(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 15, name: 'TS_26FB806FF03A49EA8B707C727910D365', label: 'Univariate Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0027.html',
        new_step:'Univariate Forecast Profile'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Single Profile',
        fieldicon:'field_icon_14.gif',
        explanation_d:'<FONT size=3><B>$#{fieldname}&nbsp;$P{fieldicon}</B> is clicked.</FONT>',
        explanation_p:'Click on <b>$#{fieldname}&nbsp;$P{fieldicon}</b>.',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:150,
        b_height:40,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'_default',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0.499977, y:0.499977}, DocXY: {x:0.499977, y:0.499977}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0017(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 16, name: 'TS_7DE50A6705704437935880AB20200FFA', label: 'Univariate Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0028.html',
        new_step:'Univariate Forecast Profile'
    });
    ctx.ms.end_unit(ctx, win_, 10, 10, {
        macro_comment:''
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function getWebAutomationProgramContent() {
    ev_str = 'new '+ ctx.cfg_config('macroset_name') +'()';
    ctx.ms = eval(ev_str);
    ctx.ew = new EventWrapper();
    ctx.h = new CtxHelper(ctx);

    if (!("defaults" in ctx)) ctx.defaults = new Object;
    ctx.global_params =  {

    };
    ctx.global_params['resource_dir'] = 'trainer:'+ctx.cfg_config('data');
    ctx.ms.build_globals(ctx);
    ctx.mode = ctx.cfg_config('mode');

    if (typeof(tour_params) != 'undefined') {
        var tp;
        ctx.tour_params = {};
        for (tp in tour_params) { ctx.tour_params[tp] = tour_params[tp]; }
    }

    var sub;
    var content = new Object;
    content.subs = [];
    content.userHeader = new Object;

    content.userHeader['version'] = '6.3.0 Unicode';
    content.userHeader['title'] = 'Dagnosis Group';
    content.userHeader['author'] = 'Sebastian';
    content.userHeader['comment'] = '';
    content.userHeader['find_element'] = '////\r\nvar Eep_resolve;\r\nvar eep_resolveOptions={\r\neep_firstTextRe:null\r\n,eep_useText:true\r\n,eep_version:\'6.1.0\'};\r\nEep_resolve=function(xVh,xVG,XKF){\r\nvar XHZ=new Eep(xVh,eep_resolveOptions);\r\nreturn XHZ.eep_resolve(xVG,XKF);}\r\n\r\n/*\r\n  Copyright Notice:\r\n\r\n  Copyright 2000-2005 datango AG\r\n  ALL RIGHTS RESERVED\r\n\r\n  UNPUBLISHED -- Use of a copyright notice is precautionary only and\r\n  does not imply publication or disclosure.\r\n\r\n  THE CONTENT OF THIS WORK CONTAINS CONFIDENTIAL AND PROPRIETARY\r\n  INFORMATION OF DATANGO AG. ANY DUPLICATION, MODIFICATION,\r\n  DISTRIBUTION, OR DISCLOSURE IN ANY FORM, IN WHOLE, OR IN PART, IS\r\n  STRICTLY PROHIBITED WITHOUT THE PRIOR EXPRESS WRITTEN PERMISSION OF\r\n  DATANGO AG.\r\n\r\n*/';
    content.userHeader['start_script'] = '';
    content.userHeader['stop_script'] = '';
    content.userHeader['error_script'] = '';

    sub = new Object;
    sub.name = 'msglist_0001';
    sub.audio = '';
    sub.title = 'Start';
    sub.uid = 'TS_6C46212DDF1146E0B49C9A8359453F38';
    sub.jumpable = 0;
    sub.visible = 0;
    sub.callable = 0;
    sub.duration = 10;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0002';
    sub.audio = '';
    sub.title = '(kein Titel)';
    sub.uid = 'TS_03317273B35E4C5E9622E72386451616';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0003';
    sub.audio = '';
    sub.title = 'SAP Easy Access  mySAP Supply Chain Management';
    sub.uid = 'TS_CA5B9AB29A1341E1AC20C51FCD232B81';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 21;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0004';
    sub.audio = '';
    sub.title = 'Maintain Forecast Profile';
    sub.uid = 'TS_9DC74551A3BC4588ADD2653A7FEFB964';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0005';
    sub.audio = '';
    sub.title = 'Univariate Forecast Profile';
    sub.uid = 'TS_6C3511CF4CC34EC68CFDA24139668C14';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0006';
    sub.audio = '';
    sub.title = 'Univariate Forecast Profile';
    sub.uid = 'TS_C0A5B1306CE245A8827B47EFBA21355A';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0007';
    sub.audio = '';
    sub.title = '(kein Titel)';
    sub.uid = 'TS_32CC51F33F464EB78882F7F7B2C9F210';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0008';
    sub.audio = '';
    sub.title = 'Maintain Diagnosis Group';
    sub.uid = 'TS_3017954AF1194BD5967800499709C070';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0009';
    sub.audio = '';
    sub.title = 'Maintain Diagnosis Group';
    sub.uid = 'TS_9C06933E1C0D447B9EE9EC42AA48AE44';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0010';
    sub.audio = '';
    sub.title = 'Maintain Diagnosis Group';
    sub.uid = 'TS_272A9A7822C940B1B63DFB4369BADF2C';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0011';
    sub.audio = '';
    sub.title = 'Maintain Diagnosis Group';
    sub.uid = 'TS_9A658DC2C1DA4DAF8A0C1CA3EBA0E9E1';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0012';
    sub.audio = '';
    sub.title = 'Maintain Diagnosis Group';
    sub.uid = 'TS_56EAB98382CC489FBDA3CBF84D2EE176';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0013';
    sub.audio = '';
    sub.title = 'Maintain Diagnosis Group';
    sub.uid = 'TS_1794F0C5980F4BCDBCCA6D026B8E0557';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0014';
    sub.audio = '';
    sub.title = 'Maintain Diagnosis Group';
    sub.uid = 'TS_5EF07E7217144BE7AED4A776713C775D';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0015';
    sub.audio = '';
    sub.title = 'Maintain Diagnosis Group';
    sub.uid = 'TS_E63C2178271F43AD9FA651127A435328';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0016';
    sub.audio = '';
    sub.title = 'Univariate Forecast Profile';
    sub.uid = 'TS_26FB806FF03A49EA8B707C727910D365';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0017';
    sub.audio = '';
    sub.title = 'Univariate Forecast Profile';
    sub.uid = 'TS_7DE50A6705704437935880AB20200FFA';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;

    return content;
}
