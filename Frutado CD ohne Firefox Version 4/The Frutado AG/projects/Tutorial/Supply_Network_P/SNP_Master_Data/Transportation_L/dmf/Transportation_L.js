
function msglist_0001(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 0, name: 'TS_1F9AA58A75BA4D8BB6C99E4E24D29F97', label: 'Start', jumpable: 0, visible: 0, callable: 0});
    ctx.ms.start_unit(ctx, win_, 0, 10, {
        macro_comment:'',
        possible_points:18,
        mastery_score:14,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 1, name: 'TS_3C283EE419064E5D9A433375BB97916D', label: 'Navigation', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0000.html',
        new_step:'SAP Easy Access  mySAP Supply Chain Management'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<P align=center><FONT color=#fd0202 size=2><FONT color=#000000><FONT face=sans-serif size=5><U>Navigation</U></FONT><BR>&nbsp;<STRONG><BR></STRONG><FONT size=3>Please use the arrow keys on your keyboard for navigation to the next and previous steps accordingly.<BR><BR><IMG src=\"pages/navigationkey.gif\"></FONT></FONT></FONT></P>\n<P align=center><FONT color=#fd0202><FONT color=#000000 size=3>right arrow = next topic<BR>left arrow = previous topic</FONT></FONT></P><FONT size=3>\n<P align=center><FONT size=3>(If the keys are not used, the next step is automatically shown after 60 seconds.)</FONT><FONT color=#fd0202><FONT color=#000000><BR><BR></P>\n<P align=center></FONT></FONT></FONT><FONT color=#fd0202><FONT color=#000000><BR></P></FONT></FONT>',
        type:'none',
        explanation_p:'<P><IMG src=\"pages/informazioni_2.png\">&nbsp;</P>\n<P>Sei entrato nella modalità di Test.</P>\n<P>Ti verranno dati alcuni suggerimenti durante la prova. </P>\n<P>Prima di effettuare le scelte suggerite ricorda di chiudere la finestra informativa tramite il pulsante <IMG src=\"pages/next_red.int.gif\">&nbsp;per evitare che il sistema registri la mancata azione come errore.</P>\n<P>Attendere sempre il messaggio del sistema prima di procedere all\'azione successiva.</P>',
        in_demo:1,
        in_practice:1,
        in_test:0,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.460136, y:0.467903}, DocXY: {x:0.460136, y:0.457023}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:488,
        b_height:313,
        orientation:'C',
        b_duration:60,
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, ''), XY: {x:0.494484, y:0.451072}, DocXY: {x:0.494484, y:0.435752}},
        bubble_class_p:'StyleA',
        bubblestyle_p:'nuova_bubble',
        b_width_p:376,
        b_height_p:268,
        orientation_p:'C',
        b_duration_p:-1
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0003(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 2, name: 'TS_787DB85D1132438893C3C0BE6FA018E1', label: 'Introduction', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0000.html',
        new_step:'SAP Easy Access  mySAP Supply Chain Management'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=4><STRONG>Maintaining Transportation Lanes - Demo</STRONG></FONT> \n<P></P>\n<P><FONT size=3>The objective of this lesson&nbsp;is to understand the SNP relevant parameters of a transportation lane. For the Frutado AG these are the&nbsp;duration and costs. </FONT>\n<P><FONT size=3>This example shows&nbsp;the parameters of the transportation lane between the locations <STRONG>\"FRU_DC_01\"</STRONG> and <STRONG>\"FRU_DC_02\"</STRONG>. The transportation on this lane&nbsp;takes <STRONG>48[h]</STRONG> and costs <STRONG>82 [A$/HL]</STRONG>. The value of these parameters is product independent.</FONT>',
        type:'none',
        all_like_demo:0,
        explanation_p:'',
        in_demo:1,
        in_practice:1,
        in_test:1,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.497658, y:0.453422}, DocXY: {x:0.497658, y:0.442878}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:514,
        b_height:302,
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

function msglist_0004(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 3, name: 'TS_661CCE8A9C75479C91D40C5E4AEEED7D', label: 'SAP Easy Access  mySAP Supply Chain Management', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0000.html',
        new_step:'SAP Easy Access  mySAP Supply Chain Management'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Transportation Lane',
        fieldicon:'field_icon_00.gif',
        explanation_d:'<FONT size=3>Clicking on the<STRONG> \'Open folder\' </STRONG>icon opens the folder </FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>Transportation Lane</STRONG></FONT></SPAN><FONT size=3><STRONG>.</STRONG></FONT>',
        explanation_p:'Open the folder <b>$#{fieldname}</b>  by clicking on the <b>\'Open folder\'</b> icon.',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:240,
        b_height:91,
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
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0005(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 4, name: 'TS_D5B93E111807493CA553E171423B3818', label: 'SAP Easy Access  mySAP Supply Chain Management', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0001.html',
        new_step:'SAP Easy Access  mySAP Supply Chain Management'
    });
    ctx.ms.transaction_info(ctx, win_, 10, 1, {
        macro_comment:'',
        tcode:'/SAPAPO/SCC_TL1 - Transportation Lane'
    });
    ctx.ms.click(ctx, win_, 11, 10, {
        macro_comment:'',
        fieldname:'/SAPAPO/SCC_TL1 - Transportation Lane',
        fieldicon:'field_icon_01.gif',
        explanation_d:'<FONT size=3>The transaction<STRONG> </STRONG></FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>/SAPAPO/SCC_TL1 - Transportation Lane</STRONG></FONT></SPAN><FONT size=3><STRONG> </STRONG>is started by double click.</FONT>',
        explanation_p:'Start the transaction <b>$#{fieldname}</b>  by double clicking it.',
        action:'ldblclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:250,
        b_height:112,
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

function msglist_0006(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 5, name: 'TS_4FC0D7E83BA1482DA1BCD71B8B0DBB19', label: 'Transportation Lane: Access', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0002.html',
        new_step:'Transportation Lane: Access'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Model Name',
        fieldicon:'field_icon_02.gif',
        text_d:'FRU_MODEL',
        regexp:'',
        explanation_d:'<FONT size=3>The<STRONG> </STRONG></FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>Model Name</STRONG></FONT></SPAN><FONT size=3><STRONG> </STRONG>box is filled out.</FONT>',
        explanation_p:'Please enter <b>$#{text_d}</b>  in the  <b>$#{fieldname}</b>  box.<br>Confirm your entry by pressing the <b>Tab key</b>.',
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

function msglist_0007(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 6, name: 'TS_2AC1BE3C25D844658470A1FDEB89546D', label: 'Transportation Lane: Access', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0003.html',
        new_step:'Transportation Lane: Access'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:' Change',
        fieldicon:'field_icon_03.gif',
        explanation_d:'<FONT size=3>In order to change the parameters of the transportation lane&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_03.gif\"></FONT></SPAN><FONT size=3> is clicked.</FONT>',
        explanation_p:'Please click on <b>$#{fieldname}&nbsp;$P{fieldicon}</b>.',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:250,
        b_height:101,
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

function msglist_0008(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 7, name: 'TS_86A8AFEE287F4231BE533B3BE4430AF7', label: 'Change of Transportation Lane FRU_DC_01 -> FRU_DC_02', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0004.html',
        new_step:'Change of Transportation Lane FRU_DC_01 -> FRU_DC_02'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3>Above you can see&nbsp;one single product group&nbsp;which is used for all products. Thus, no product specific parameters exist&nbsp;for transportation. They are used during the specified time period.</FONT> \n<P></P>\n<P><FONT size=3>Below you find a list with valid means of transportation. In the Frutado case there is only one alternative.</FONT>',
        type:'none',
        all_like_demo:0,
        explanation_p:'',
        in_demo:1,
        in_practice:1,
        in_test:1,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.398444, y:0.352987}, DocXY: {x:0.398444, y:0.344793}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:716,
        b_height:161,
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

function msglist_0009(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 8, name: 'TS_BFC06812917745A5A9D515D0E6BC1022', label: 'Change of Transportation Lane FRU_DC_01 -> FRU_DC_02', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0006.html',
        new_step:'Change of Transportation Lane FRU_DC_01 -> FRU_DC_02'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Z_FRU_DC11',
        fieldicon:'field_icon_06.gif',
        explanation_d:'<FONT size=3>For a more detailed view,</FONT> <SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_06.gif\"></FONT></SPAN><FONT size=3> is double clicked.</FONT>',
        explanation_p:'Please double click on $P{fieldicon}.',
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
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0010(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 9, name: 'TS_3195CFBDB3EF4F998B63DF15C6C5E627', label: 'Change of Transportation Lane FRU_DC_01 -> FRU_DC_02', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0007.html',
        new_step:'Change of Transportation Lane FRU_DC_01 -> FRU_DC_02'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3>An overview&nbsp;of all parameters of the transportation lanes is given on this screen. Important for our task are <STRONG>\"Trsp. Duration\"</STRONG> and <STRONG>\"Transportn Costs\"</STRONG> on the <STRONG>\"Parameters\"</STRONG> frame.&nbsp;Due to the fact that&nbsp;transports between two DCs always take 48 [h], the duration is independent from the distance. Hence, it is&nbsp;important that <STRONG>\"Fix Trsp. Duration\"</STRONG>&nbsp;on the <STRONG>\"Control Indicator\"</STRONG> frame is selected. All other parameters are irrelevant for this lesson.</FONT>',
        type:'none',
        all_like_demo:0,
        explanation_p:'',
        in_demo:1,
        in_practice:1,
        in_test:1,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.881224, y:0.566232}, DocXY: {x:0.881224, y:0.553079}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:250,
        b_height:388,
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

function msglist_0011(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 10, name: 'TS_379FD5347E394A779548D5D89306F064', label: 'Change of Transportation Lane FRU_DC_01 -> FRU_DC_02', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0008.html',
        new_step:'Change of Transportation Lane FRU_DC_01 -> FRU_DC_02'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Back',
        fieldicon:'field_icon_08.gif',
        explanation_d:'<SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>Back</STRONG></FONT></SPAN><FONT size=3><STRONG>&nbsp;</STRONG></FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><STRONG><IMG src=\"pages/field_icon_08.gif\"></STRONG></FONT></SPAN><FONT size=3><STRONG> </STRONG>is clicked.</FONT>',
        explanation_p:'Please click on <b>$#{fieldname}&nbsp;$P{fieldicon}</b>.',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:164,
        b_height:56,
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

function msglist_0012(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 11, name: 'TS_B0F134E7DBDD4010962AEE3DF9B102B6', label: 'Transportation Lane: Access', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0009.html',
        new_step:'Transportation Lane: Access'
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
    content.userHeader['title'] = 'Transportation Lane';
    content.userHeader['author'] = 'fwmx525';
    content.userHeader['comment'] = '';
    content.userHeader['find_element'] = '////\r\nvar Eep_resolve;\r\nvar eep_resolveOptions={\r\neep_firstTextRe:null\r\n,eep_useText:true\r\n,eep_version:\'6.1.0\'};\r\nEep_resolve=function(xVh,xVG,XKF){\r\nvar XHZ=new Eep(xVh,eep_resolveOptions);\r\nreturn XHZ.eep_resolve(xVG,XKF);}\r\n\r\n/*\r\n  Copyright Notice:\r\n\r\n  Copyright 2000-2005 datango AG\r\n  ALL RIGHTS RESERVED\r\n\r\n  UNPUBLISHED -- Use of a copyright notice is precautionary only and\r\n  does not imply publication or disclosure.\r\n\r\n  THE CONTENT OF THIS WORK CONTAINS CONFIDENTIAL AND PROPRIETARY\r\n  INFORMATION OF DATANGO AG. ANY DUPLICATION, MODIFICATION,\r\n  DISTRIBUTION, OR DISCLOSURE IN ANY FORM, IN WHOLE, OR IN PART, IS\r\n  STRICTLY PROHIBITED WITHOUT THE PRIOR EXPRESS WRITTEN PERMISSION OF\r\n  DATANGO AG.\r\n\r\n*/';
    content.userHeader['start_script'] = '';
    content.userHeader['stop_script'] = '';
    content.userHeader['error_script'] = '';

    sub = new Object;
    sub.name = 'msglist_0001';
    sub.audio = '';
    sub.title = 'Start';
    sub.uid = 'TS_1F9AA58A75BA4D8BB6C99E4E24D29F97';
    sub.jumpable = 0;
    sub.visible = 0;
    sub.callable = 0;
    sub.duration = 10;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0002';
    sub.audio = '';
    sub.title = 'Navigation';
    sub.uid = 'TS_3C283EE419064E5D9A433375BB97916D';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0003';
    sub.audio = '';
    sub.title = 'Introduction';
    sub.uid = 'TS_787DB85D1132438893C3C0BE6FA018E1';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0004';
    sub.audio = '';
    sub.title = 'SAP Easy Access  mySAP Supply Chain Management';
    sub.uid = 'TS_661CCE8A9C75479C91D40C5E4AEEED7D';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0005';
    sub.audio = '';
    sub.title = 'SAP Easy Access  mySAP Supply Chain Management';
    sub.uid = 'TS_D5B93E111807493CA553E171423B3818';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 21;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0006';
    sub.audio = '';
    sub.title = 'Transportation Lane: Access';
    sub.uid = 'TS_4FC0D7E83BA1482DA1BCD71B8B0DBB19';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0007';
    sub.audio = '';
    sub.title = 'Transportation Lane: Access';
    sub.uid = 'TS_2AC1BE3C25D844658470A1FDEB89546D';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0008';
    sub.audio = '';
    sub.title = 'Change of Transportation Lane FRU_DC_01 -> FRU_DC_02';
    sub.uid = 'TS_86A8AFEE287F4231BE533B3BE4430AF7';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0009';
    sub.audio = '';
    sub.title = 'Change of Transportation Lane FRU_DC_01 -> FRU_DC_02';
    sub.uid = 'TS_BFC06812917745A5A9D515D0E6BC1022';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0010';
    sub.audio = '';
    sub.title = 'Change of Transportation Lane FRU_DC_01 -> FRU_DC_02';
    sub.uid = 'TS_3195CFBDB3EF4F998B63DF15C6C5E627';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0011';
    sub.audio = '';
    sub.title = 'Change of Transportation Lane FRU_DC_01 -> FRU_DC_02';
    sub.uid = 'TS_379FD5347E394A779548D5D89306F064';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0012';
    sub.audio = '';
    sub.title = 'Transportation Lane: Access';
    sub.uid = 'TS_B0F134E7DBDD4010962AEE3DF9B102B6';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;

    return content;
}
