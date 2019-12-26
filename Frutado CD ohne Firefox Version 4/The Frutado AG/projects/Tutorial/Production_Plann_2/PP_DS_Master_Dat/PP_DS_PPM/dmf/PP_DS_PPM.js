
function msglist_0001(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 0, name: 'TS_BDB8FB5519154326974E8F84428200AE', label: 'Start', jumpable: 0, visible: 0, callable: 0});
    ctx.ms.start_unit(ctx, win_, 0, 10, {
        macro_comment:'',
        possible_points:255,
        mastery_score:204,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 1, name: 'TS_FC82513527094EC5AF679B4072BD7BDC', label: 'SAP Easy Access  mySAP Supply Chain Management', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0002.html',
        new_step:'SAP Easy Access  mySAP Supply Chain Management'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<P align=center><FONT color=#fd0202 size=2><FONT color=#000000><FONT face=sans-serif size=5><U>Navigation</U></FONT><BR>&nbsp;<STRONG><BR></STRONG><FONT size=3>Please use the arrow keys&nbsp;of your keyboard for navigation <BR><BR><IMG src=\"pages/navigationkey.gif\"></FONT></FONT></FONT></P>\n<P align=center><FONT color=#fd0202><FONT color=#000000 size=3>right arrow = next step<BR>left arrow = previous step</FONT></FONT></P>\n<P align=center><FONT size=3>(The presentation&nbsp;continues automatically after 60 seconds )</FONT><FONT color=#fd0202><FONT color=#000000><BR><BR></P></FONT></FONT>',
        type:'none',
        in_demo:1,
        in_practice:0,
        in_test:0,
        in_prax:0,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 2, name: 'TS_A00DE33032774F7493D9D6D2A9DAE965', label: 'SAP Easy Access  mySAP Supply Chain Management', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0002.html',
        new_step:'SAP Easy Access  mySAP Supply Chain Management'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT face=verdana size=4><STRONG>Create a PP/DS-PPM - Demo</STRONG></FONT> \n<P><FONT face=arial size=3>In this lesson you will learn how&nbsp;a PP/DS PPM is created. We will create the PPM FRU_PPM_SAFT_03_PLANT_03 which&nbsp;describes the production of FRU_SAFT_03 in FRU_PLANT_03.&nbsp;</FONT><BR><FONT face=arial size=3>FRU_SAFT_03 can be produced by FRU_PLANT_03 on both productio</FONT><FONT face=arial size=3>n lines and thus&nbsp;has two modes. So the PP/DS optimizer can reschedule orders of FRU_SAFT_03&nbsp;between both production lines to improve the solution.</FONT></P>\n<P><FONT size=3>The picture shows the structure of FRU_PPM_SAFT_03_PLANT_03, which we have to implement.</FONT></P>\n<P><IMG style=\"WIDTH: 593px; HEIGHT: 237px\" height=168 src=\"PPM 03.JPG\" width=760></P>\n<P><FONT face=arial size=3>Let\'s start</FONT>',
        type:'none',
        all_like_demo:1,
        explanation_p:'&nbsp;',
        in_demo:1,
        in_practice:1,
        in_test:0,
        in_prax:0,
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

function msglist_0004(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 3, name: 'TS_C58B0202DC3C449AB5D0FB6CE5CECF73', label: 'SAP Easy Access  mySAP Supply Chain Management', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0002.html',
        new_step:'SAP Easy Access  mySAP Supply Chain Management'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'field_icon_02.gif',
        explanation_d:'<FONT size=3>Clicking on the <B>Open folder</B> icon opens the folder </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3></FONT></SPAN></B><FONT size=3>.</FONT>',
        explanation_p:'<FONT size=3>Open the folder </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3></FONT></SPAN></B><FONT size=3>by clicking on the <B>Open folder</B> icon.</FONT>',
        action:'lclick',
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
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'NE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.0640269, y:0.83888}, DocXY: {x:0.0640269, y:0.819257}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 4, name: 'TS_67EAE13BA54E4768B746DC2E4357DB21', label: 'SAP Easy Access  mySAP Supply Chain Management', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0003.html',
        new_step:'SAP Easy Access  mySAP Supply Chain Management'
    });
    ctx.ms.transaction_info(ctx, win_, 10, 1, {
        macro_comment:'',
        tcode:''
    });
    ctx.ms.click(ctx, win_, 11, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'field_icon_03.gif',
        explanation_d:'<FONT size=3>The transaction </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3></FONT></SPAN></B><FONT size=3>is started by double-clicking it.</FONT>',
        explanation_p:'<FONT size=3>Start the transaction </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3></FONT></SPAN></B><FONT size=3>by double clicking it.</FONT>',
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
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'NE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.214832, y:0.821195}, DocXY: {x:0.214832, y:0.801999}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 5, name: 'TS_DC899D30213D42FF9DEBE0A508E91D6E', label: 'Choose Plan', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0005.html',
        new_step:'Choose Plan'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT face=arial size=3>Now we will create the PPM FRU_PPM_SAFT_03_PLANT_03.&nbsp;To distinguish between SNP-PPMs and PP/DS-PPMs, <STRONG>P</STRONG> is&nbsp;entered in the field \"Use of a plan\". </FONT>',
        type:'none',
        all_like_demo:1,
        explanation_p:'&nbsp;',
        in_demo:1,
        in_practice:1,
        in_test:0,
        in_prax:0,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.460136, y:0.467903}, DocXY: {x:0.460136, y:0.457023}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:488,
        b_height:193,
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

function msglist_0007(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 6, name: 'TS_9935CE677FB94DDDACF55A6334DA01D4', label: 'Choose Plan', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0005.html',
        new_step:'Choose Plan'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Plan',
        fieldicon:'field_icon_04.gif',
        text_d:'FRU_PPM_SAFT_03_PLANT_03',
        regexp:'',
        explanation_d:'<B><FONT size=3>FRU_PPM_SAFT_03_PLANT_03</FONT></B><FONT size=3> is now entered in the </FONT><B><FONT size=3>Plan</FONT></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false style=\"WIDTH: 123px; HEIGHT: 19px\" ue=\"true\"><FONT size=3>FRU_PPM_SAFT_03_PLANT_03</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Plan</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'E',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', 'forms', 0, 0, 'eep_path=\"0:0:0:0:0:1:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={name:\"object_0\",tagName:\"INPUT\",type:\"text\"};\r\neep_coll={n:\"forms\",i:0,ii:0};\r\neep_parents=[{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_INPUT_\";'), XY: {x:0.99646, y:0.823499}, DocXY: {x:0.336721, y:0.198978}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 7, name: 'TS_E4E809BA398844A6B096D69D85C38F81', label: 'Choose Plan', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0007.html',
        new_step:'Choose Plan'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Use of a Plan',
        fieldicon:'field_icon_05.gif',
        text_d:'P',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>P</FONT></SPAN></B><FONT size=3>&nbsp;which means PP/DS&nbsp;is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Use of a Plan</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>P</FONT></SPAN></B><FONT size=3> which means PP/DS in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Use of a Plan</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'E',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', 'forms', 0, 0, 'eep_path=\"0:0:0:0:0:1:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={name:\"object_0\",tagName:\"INPUT\",type:\"text\"};\r\neep_coll={n:\"forms\",i:0,ii:0};\r\neep_parents=[{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_INPUT_\";'), XY: {x:0.909087, y:0.705852}, DocXY: {x:0.107027, y:0.346197}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 8, name: 'TS_21F5F85BEC7F46DD8FC79FD7194D98EB', label: 'Choose Plan', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0008.html',
        new_step:'Choose Plan'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Create',
        fieldicon:'field_icon_06.gif',
        explanation_d:'<B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Create</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_06.gif\"></FONT></SPAN></B><FONT size=3> is clicked.</FONT>',
        explanation_p:'<FONT size=3>Click on </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Create</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_06.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
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
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0:0', 'images', 1, 0, 'eep_path=\"0:0:0:0:0:1:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:1,ii:-1};\r\neep_parents=[{name:\"object_0\",tagName:\"BUTTON\",type:\"button\"},\r\n{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_\";'), XY: {x:0.957107, y:0.952377}, DocXY: {x:0.187503, y:0.123827}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 9, name: 'TS_340474FE8CCC416FBFA411863A136B65', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0009.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3><FONT face=arial>Now you are in the three-part view of the PPM. The PPM transaction starts always with the list of the operations which we will describe now. </FONT></FONT>',
        type:'none',
        all_like_demo:1,
        explanation_p:'&nbsp;',
        in_demo:1,
        in_practice:1,
        in_test:0,
        in_prax:0,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.625788, y:0.506203}, DocXY: {x:0.625788, y:0.494423}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:630,
        b_height:99,
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

function msglist_0011(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 10, name: 'TS_2E07B87319F44A3C9258433F6216CE25', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0009.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Description',
        fieldicon:'field_icon_07.gif',
        text_d:'Filling',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>Filling</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Description</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>Filling</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Description</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', 'forms', 0, 0, 'eep_path=\"0:0:0:0:0:1:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={name:\"object_0\",tagName:\"INPUT\",type:\"text\"};\r\neep_coll={n:\"forms\",i:0,ii:0};\r\neep_parents=[{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_INPUT_\";'), XY: {x:0.99292, y:0.947372}, DocXY: {x:0.598444, y:0.457847}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 11, name: 'TS_4E410ED1220D4E02808E3797EB4B519D', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0011.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Setup Group/Key',
        fieldicon:'field_icon_08.gif',
        text_d:'3',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>3</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Setup Group/Key</FONT></SPAN></B><FONT size=3> field. <BR>A sequence-dependent&nbsp;setup activity will be carried out, if&nbsp;this is required,&nbsp;before an operation&nbsp;will be&nbsp;executed.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>3</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Setup Group/Key</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.<BR>A setup activity will be accomplished, if this is required, before an operation&nbsp;will be&nbsp;executed.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'NW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 12, name: 'TS_CDA12C4CB827445A99BC8240936CEEA2', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0014.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Location',
        fieldicon:'field_icon_10.gif',
        text_d:'FRU_PLANT_03',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>FRU_PLANT_03</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Location</FONT></SPAN></B><FONT size=3> field. <br>So the operation is executed in FRU_PLANT_03.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>FRU_PLANT_03</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Location</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.<br>So the operation is executed in FRU_PLANT_03.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'NW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 13, name: 'TS_00054F3FB03D4FBBA0660B9EC2D02D8B', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0016.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Description',
        fieldicon:'field_icon_11.gif',
        text_d:'FRU_PPM_SAFT_03_PLANT_03',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>FRU_PPM_SAFT_03_PLANT_03</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Description</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>FRU_PPM_SAFT_03_PLANT_03</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Description</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'SW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:1}, DocXY: {x:0, y:0}, Off: {x:-10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'S',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.771878, y:0.212055}, DocXY: {x:0.771878, y:0.207111}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 14, name: 'TS_9E118E6C020948D79C32F3BE296FFE8A', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0018.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Op.',
        fieldicon:'field_icon_12.gif',
        explanation_d:'<FONT size=3>Double-clicking in the input field </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Op.</FONT></SPAN></B><FONT size=3> activates it.</FONT>',
        explanation_p:'<FONT size=3>Double-click in the input field </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Op.</FONT></SPAN></B><FONT size=3> to activate it.</FONT>',
        action:'ldblclick',
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
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, 'eep_path=\"0:0:0:0:0:1:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"DIV\"};\r\neep_coll={n:\"\",i:0,ii:-1};\r\neep_parents=[{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_DIV_\";'), XY: {x:0.937484, y:0.947372}, DocXY: {x:0.375784, y:0.457847}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 15, name: 'TS_4320696978D44309B3DF965968CA376A', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0020.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT face=arial size=3>An operation consists of one or more activities, which will be entered&nbsp;in the next steps.</FONT>',
        type:'none',
        all_like_demo:1,
        explanation_p:'&nbsp;',
        in_demo:1,
        in_practice:1,
        in_test:0,
        in_prax:0,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.457786, y:0.565225}, DocXY: {x:0.457786, y:0.552041}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:488,
        b_height:97,
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

function msglist_0017(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 16, name: 'TS_51C1FC1E1F2848BABED82260C507A0BD', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0020.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Activity',
        fieldicon:'field_icon_13.gif',
        text_d:'10',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>10</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Activity</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>10</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Activity</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.399222, y:0.510384}, DocXY: {x:0.399222, y:0.498482}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0018(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 17, name: 'TS_B723F497282B4CE49FDB18B39D05BFAA', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0022.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Description',
        fieldicon:'field_icon_14.gif',
        text_d:'Filling',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>Filling</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Description</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>Filling</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Description</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.623438, y:0.511437}, DocXY: {x:0.623438, y:0.499489}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0019(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 18, name: 'TS_5FA6324A1BE04E33944B321FC51DE767', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0010.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Activity Type',
        fieldicon:'field_icon_31.gif',
        explanation_d:'<FONT size=3>Clicking in the input field </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Activity Type</FONT></SPAN></B><FONT size=3> activates it.</FONT>',
        explanation_p:'<FONT size=3>Click in the input field </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Activity Type</FONT></SPAN></B><FONT size=3> to activate it.</FONT>',
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
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'NW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0020(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 19, name: 'TS_19EE77D6EA524F1FA55F9415C1933E37', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0012.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Activity Type',
        fieldicon:'field_icon_33.gif',
        explanation_d:'<FONT size=3>Clicking on <B>Input Help</B> </FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_33.gif\"></FONT></SPAN><FONT size=3> opens a selection list with valid values.</FONT>',
        explanation_p:'<FONT size=3>Click on <B>Input Help</B> </FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_33.gif\"></FONT></SPAN><FONT size=3> to open a selection list with valid values.</FONT>',
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
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'NW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0021(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 20, name: 'TS_A60A9EBD8AED4F6DAD4ADCC659307939', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0015.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'field_icon_35.gif',
        explanation_d:'<SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_35.gif\"></FONT></SPAN><FONT size=3> is double-clicked.</FONT>',
        explanation_p:'<FONT size=3>Double-click on </FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_35.gif\"></FONT></SPAN><FONT size=3>.</FONT>',
        action:'ldblclick',
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
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'NW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0022(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 21, name: 'TS_62E44103D2C44510BA5229E6A57CA514', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0026.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT face=arial size=3>So&nbsp;the activity Filling represent the production activity. For the sequence dependent setup activity we have to add a second activity.</FONT>',
        type:'none',
        all_like_demo:1,
        explanation_p:'&nbsp;',
        in_demo:1,
        in_practice:1,
        in_test:0,
        in_prax:0,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.457786, y:0.565225}, DocXY: {x:0.457786, y:0.552041}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:488,
        b_height:97,
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

function msglist_0023(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 22, name: 'TS_E1B197A2C6394185961065155CDFE695', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0026.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Activity',
        fieldicon:'field_icon_16.gif',
        text_d:'20',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>20</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Activity</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>20</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Activity</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'E',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.403876, y:0.532189}, DocXY: {x:0.403876, y:0.519799}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0024(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 23, name: 'TS_442FDB224EBC42C4A432E852D80633A6', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0028.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Description',
        fieldicon:'field_icon_17.gif',
        text_d:'Setup',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>Setup</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Description</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>Setup</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Description</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B></FONT>.',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'E',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.621851, y:0.532189}, DocXY: {x:0.621851, y:0.519799}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0025(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 24, name: 'TS_016112E675D542F68756F5623FD7EF59', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0019.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Activity Type',
        fieldicon:'field_icon_40.gif',
        explanation_d:'<FONT size=3>Clicking in the input field </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Activity Type</FONT></SPAN></B><FONT size=3> activates it.</FONT>',
        explanation_p:'<FONT size=3>Click in the input field </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Activity Type</FONT></SPAN></B><FONT size=3> to activate it.</FONT>',
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
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'NW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0026(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 25, name: 'TS_DAEABCCF832A4081AE44321E2787C95D', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0021.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Activity Type',
        fieldicon:'field_icon_42.gif',
        explanation_d:'<FONT size=3>Clicking on <B>Input Help</B> </FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_42.gif\"></FONT></SPAN><FONT size=3> opens a selection list with valid values.</FONT>',
        explanation_p:'<FONT size=3>Click on <B>Input Help</B> </FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_42.gif\"></FONT></SPAN><FONT size=3> to open a selection list with valid values.</FONT>',
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
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'NW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0027(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 26, name: 'TS_3AE71EF4E9C344E09B9655133CB02B7A', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0023.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'field_icon_44.gif',
        explanation_d:'<SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_44.gif\"></FONT></SPAN><FONT size=3> is double-clicked.</FONT>',
        explanation_p:'<FONT size=3>Double-click on </FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_44.gif\"></FONT></SPAN><FONT size=3>.</FONT>',
        action:'ldblclick',
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
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'NW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0028(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 27, name: 'TS_CBEEC3075EE1494B968841F6A27B39F2', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0025.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_radio(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Setup',
        fieldicon:'field_icon_46.gif',
        choose_bool:'1',
        explanation_d:'<B>\n<P><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Setup</FONT></SPAN></B><FONT size=3> is selected. This setting s</FONT><FONT size=3>pecifies that the duration of the setup activity is sequence dependent.&nbsp;T</FONT><FONT size=3>he system will&nbsp;then identify the setup cost and duration from the setup matrix.</FONT>',
        explanation_p:'<FONT size=3>Select the option </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Setup</FONT></SPAN></B><FONT size=3>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:180,
        b_height:40,
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'NW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0029(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 28, name: 'TS_701FF50A10234CEDA14D544137C29D81', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0029.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Activity',
        fieldicon:'field_icon_49.gif',
        explanation_d:'<FONT size=3>Double-clicking in the input field </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Activity</FONT></SPAN></B><FONT size=3> activates it.</FONT>',
        explanation_p:'<FONT size=3>Double-click in the input field </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Activity</FONT></SPAN></B><FONT size=3> to activate it.</FONT>',
        action:'ldblclick',
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
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'NW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0030(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 29, name: 'TS_CCDF72FE8E77433494FA8E6E393F8242', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0034.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT face=arial size=3>Now the output component FRU_SAFT_03 and the modes of the activities have to be entered. By the declaration of the components you have to specify the I/O indicator of whether it is an input or output component and the consumption type, to specify the time of use of a material.</FONT>',
        type:'none',
        all_like_demo:1,
        explanation_p:'&nbsp;',
        in_demo:1,
        in_practice:1,
        in_test:0,
        in_prax:0,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.457786, y:0.373709}, DocXY: {x:0.457786, y:0.364996}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:488,
        b_height:131,
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

function msglist_0031(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 30, name: 'TS_D4999B2952DF468A97DF7C80459B5B62', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0034.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Short text',
        fieldicon:'field_icon_20.gif',
        text_d:'FRU_SAFT_03',
        regexp:'',
        explanation_d:'<FONT size=3>Because a component can&nbsp;be replaced&nbsp;by&nbsp;alternatives, e.g. components can&nbsp;have different temporal validities&nbsp;in the <B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Short text</FONT></SPAN></B><FONT size=3> field&nbsp;we enter now&nbsp;</FONT></FONT><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3><STRONG>FRU_SAFT_03</STRONG></FONT></SPAN><FONT size=3> (as discription) for easy identification.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>FRU_SAFT_03</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Short text</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', 'forms', 0, 0, 'eep_path=\"0:0:0:0:0:1:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={name:\"object_0\",tagName:\"INPUT\",type:\"text\"};\r\neep_coll={n:\"forms\",i:0,ii:0};\r\neep_parents=[{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_INPUT_\";'), XY: {x:0.99292, y:0.8421}, DocXY: {x:0.578119, y:0.477165}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0032(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 31, name: 'TS_EBBD6DDC28F64F9EA1A953182314F60F', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0033.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Consump. type',
        fieldicon:'field_icon_50.gif',
        explanation_d:'<FONT size=3>Clicking in the input field </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Consump. type</FONT></SPAN></B><FONT size=3> activates it.</FONT>',
        explanation_p:'<FONT size=3>Click in the input field </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Consump. type</FONT></SPAN></B><FONT size=3> to activate it.</FONT>',
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
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'NW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0033(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 32, name: 'TS_124392108689433C834A86649212A70E', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0035.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Consump. type',
        fieldicon:'field_icon_51.gif',
        explanation_d:'<FONT size=3>Clicking on <B>Input Help</B> </FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_51.gif\"></FONT></SPAN><FONT size=3> opens a selection list with valid values.</FONT>',
        explanation_p:'<FONT size=3>Click on <B>Input Help</B> </FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_51.gif\"></FONT></SPAN><FONT size=3> to open a selection list with valid values.</FONT>',
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
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'NW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0034(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 33, name: 'TS_4553421DCD7F4669BA24CF5C3C573A1A', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0037.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'field_icon_63.gif',
        explanation_d:'<SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_63.gif\"></FONT></SPAN><FONT size=3> is double-clicked. <br> Continuous consumption means that&nbsp;materials flow continuously into production.</FONT>',
        explanation_p:'<FONT size=3>Double-click on </FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_63.gif\"></FONT></SPAN><FONT size=3>.</FONT>',
        action:'ldblclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:150,
        b_height:40,
        orientation:'SW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:1}, DocXY: {x:0, y:0}, Off: {x:-10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:1}, DocXY: {x:0, y:0}, Off: {x:-10, y:10}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0035(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 34, name: 'TS_0BFB5935B3DC4A6E8FCEAC17A6A90F0D', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0039.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'I/O indicator',
        fieldicon:'field_icon_65.gif',
        explanation_d:'<FONT size=3>Clicking in the input field </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>I/O indicator</FONT></SPAN></B><FONT size=3> activates it.</FONT>',
        explanation_p:'<FONT size=3>Click in the input field </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>I/O indicator</FONT></SPAN></B><FONT size=3> to activate it.</FONT>',
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
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'NW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0036(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 35, name: 'TS_3D3DF8C7D41D4D0DB7EC63423B9001F1', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0041.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'I/O indicator',
        fieldicon:'field_icon_66.gif',
        explanation_d:'<FONT size=3>Clicking on <B>Input Help</B> </FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_66.gif\"></FONT></SPAN><FONT size=3> opens a selection list with valid values.</FONT>',
        explanation_p:'<FONT size=3>Click on <B>Input Help</B> </FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_66.gif\"></FONT></SPAN><FONT size=3> to open a selection list with valid values.</FONT>',
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
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'NW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0037(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 36, name: 'TS_1893E907A5AF4027B0B8FF64422F5547', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0043.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'field_icon_69.gif',
        explanation_d:'<SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_69.gif\"></FONT></SPAN><FONT size=3> is double-clicked.</FONT>',
        explanation_p:'<FONT size=3>Double-click on </FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_69.gif\"></FONT></SPAN><FONT size=3>.</FONT>',
        action:'ldblclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:150,
        b_height:40,
        orientation:'SW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:1}, DocXY: {x:0, y:0}, Off: {x:-10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:1}, DocXY: {x:0, y:0}, Off: {x:-10, y:10}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0038(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 37, name: 'TS_6092E30C8F0F4198BFCF5458F9F2FA41', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0040.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Short text',
        fieldicon:'field_icon_23.gif',
        explanation_d:'<FONT size=3>Double-clicking in the input field </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Short text</FONT></SPAN></B><FONT size=3> activates it to specify the components.</FONT>',
        explanation_p:'<FONT size=3>Double-click in the input field </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Short text</FONT></SPAN></B><FONT size=3> to activate it.</FONT>',
        action:'ldblclick',
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
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'S',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, 'eep_path=\"0:0:0:0:0:1:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"DIV\"};\r\neep_coll={n:\"\",i:0,ii:-1};\r\neep_parents=[{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_DIV_\";'), XY: {x:0.440116, y:0.631571}, DocXY: {x:0.455467, y:0.473091}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0039(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 38, name: 'TS_9EFCCA6C1C094BB092341134874AF746', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0042.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Product',
        fieldicon:'field_icon_24.gif',
        text_d:'FRU_SAFT_03',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>FRU_SAFT_03</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Product</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>FRU_SAFT_03</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Product</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', 'forms', 0, 0, 'eep_path=\"0:0:0:0:0:1:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={name:\"object_0\",tagName:\"INPUT\",type:\"text\"};\r\neep_coll={n:\"forms\",i:0,ii:0};\r\neep_parents=[{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_INPUT_\";'), XY: {x:0.99646, y:0.941146}, DocXY: {x:0.572656, y:0.478172}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0040(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 39, name: 'TS_091E3690ED294A1BBF89D239D29E97DE', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0044.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Unit of Measure',
        fieldicon:'field_icon_25.gif',
        text_d:'HL',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>HL</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Unit of Measure</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>HL</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Unit of Measure</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.812482, y:0.489601}, DocXY: {x:0.812482, y:0.478172}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0041(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 40, name: 'TS_C82830E4DBE9402887B525892FF60893', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0046.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Var. Consumptn',
        fieldicon:'field_icon_26.gif',
        text_d:'1',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>1</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Var. Consumptn</FONT></SPAN></B><FONT size=3> field. <BR>The variable consumption is a material consumption which describes a variable material quantity that is required according to the lot size of a product.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>1</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Var. Consumptn</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.<BR>The variable consumption is a material consumption which describes a variable material quantity that is required according to the lot size of a product.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'NW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0042(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 41, name: 'TS_F48C3D56B8654B97B5E0EB9B64FBA429', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0048.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3><FONT face=arial>The output component of the activity is&nbsp;now completely described, so we can enter&nbsp;the modes of the activity. You can also enter the modes before describing the components.</FONT><BR>If you enter several modes, you have to specify the priority between the modes. You can enter a letter between A and N, with&nbsp;A&nbsp;usually being the highest priority. Based on the modus priority the system can determine the preferred mode.</FONT>',
        type:'none',
        all_like_demo:1,
        explanation_p:'&nbsp;',
        in_demo:1,
        in_practice:1,
        in_test:0,
        in_prax:0,
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

function msglist_0043(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 42, name: 'TS_3A8FB3D00C474DECA160C345E1459064', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0048.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Return to activity',
        fieldicon:'field_icon_27.gif',
        explanation_d:'<B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Return to activity</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_27.gif\"></FONT></SPAN></B><FONT size=3> is clicked.</FONT>',
        explanation_p:'<FONT size=3>Click on </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Return to activity</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_27.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:150,
        b_height:40,
        orientation:'SW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:1}, DocXY: {x:0, y:0}, Off: {x:-10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0:0', 'images', 1, 0, 'eep_path=\"0:0:0:0:0:1:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:1,ii:-1};\r\neep_parents=[{name:\"object_0\",tagName:\"BUTTON\",type:\"button\"},\r\n{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_\";'), XY: {x:0.904738, y:0.85713}, DocXY: {x:0.367178, y:0.28629}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0044(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 43, name: 'TS_AE2ED08D9B734F70872E54D57D786C51', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0049.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'field_icon_28.gif',
        explanation_d:'<FONT size=3>Clicking on the </FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_28.gif\"></FONT></SPAN><FONT size=3> tab selects it.</FONT>',
        explanation_p:'<FONT size=3>Click on the </FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_28.gif\"></FONT></SPAN><FONT size=3> tab to select it.</FONT>',
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
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'E',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, 'eep_path=\"0:0:0:0:0:1:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"DIV\"};\r\neep_coll={n:\"\",i:0,ii:-1};\r\neep_parents=[{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_DIV_\";'), XY: {x:0.987015, y:0.8}, DocXY: {x:0.516396, y:0.372595}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0045(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 44, name: 'TS_83C741ECEB8E4B2380A772C373C9A184', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0051.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Mode',
        fieldicon:'field_icon_29.gif',
        text_d:'1',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>1</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Mode</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>1</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Mode</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.388266, y:0.486473}, DocXY: {x:0.388266, y:0.475105}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0046(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 45, name: 'TS_2B0AE7E1BA6143D29D3BA12DA6CA23EB', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0053.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Mode priority',
        fieldicon:'field_icon_30.gif',
        text_d:'G',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>G</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Mode priority</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>G</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Mode priority</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.403876, y:0.488533}, DocXY: {x:0.403876, y:0.477165}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0047(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 46, name: 'TS_6C5CE7DB291140BA8E298C7D136FF7E0', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0055.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Primary Resource',
        fieldicon:'field_icon_91.gif',
        text_d:'FRU_LINE_05',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>FRU_LINE_05</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Primary Resrce</FONT></SPAN></B><FONT size=3> field. <BR>So the mode&nbsp;1&nbsp;describe the production on FRU_LINE_05.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>FRU_LINE_05</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Primary Resrce</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.<BR>So the mode&nbsp;1&nbsp;describe the production on FRU_LINE_05.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'NW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0048(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 47, name: 'TS_3A8A802E3CBE4B238FFC1F534B421018', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0057.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Location',
        fieldicon:'field_icon_34.gif',
        text_d:'FRU_PLANT_03',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>FRU_PLANT_03</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Location</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>FRU_PLANT_03</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Location</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.657023, y:0.488533}, DocXY: {x:0.657023, y:0.477165}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0049(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 48, name: 'TS_AE59BC6BF0574378B8FFB4D1F2D1CE48', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0059.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Unit of measure',
        fieldicon:'field_icon_36.gif',
        text_d:'HR',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>HR</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Unit of measure</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>HR</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Unit of measure</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.657023, y:0.490639}, DocXY: {x:0.657023, y:0.479164}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0050(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 49, name: 'TS_562EDE17551E4D2396834E20C4B45BD3', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0061.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Var. duration',
        fieldicon:'field_icon_97.gif',
        text_d:'0,1',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>0,1</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Var. duration</FONT></SPAN></B><FONT size=3> field. <BR>The variable duration indicates the duration of the activity per&nbsp;variable output volume defined in the components (here, 1HL).</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>0,1</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Var. duration</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.<BR>The variable duration indicates the duration of the activity, which is dependent on the lot size of the material to be produced.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'NW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0051(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 50, name: 'TS_EA85E0727C0E4350A9A30E654C082FC4', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0063.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Mode',
        fieldicon:'field_icon_38.gif',
        text_d:'2',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>2</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Mode</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>2</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Mode</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.388266, y:0.511437}, DocXY: {x:0.388266, y:0.499489}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0052(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 51, name: 'TS_0EB9F0C6E2D245CCBEA3F6D07CE0619F', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0065.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Mode priority',
        fieldicon:'field_icon_102.gif',
        text_d:'E',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>E</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Mode priority</FONT></SPAN></B><FONT size=3> field. <BR>So mode 2 is prioritized to mode 1.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>E</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Mode priority</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.<br>So mode 2 is prioritzed to mode 1.</FONT> ',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'NW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0053(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 52, name: 'TS_14441CFE501C4B759D0FB9C8B6ECF9B9', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0067.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Primary Resource',
        fieldicon:'field_icon_104.gif',
        text_d:'FRU_LINE_06',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>FRU_LINE_06</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Primary Resrce</FONT></SPAN></B><FONT size=3> field.<BR>So the mode&nbsp;2&nbsp;describes the production on FRU_LINE_06.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>FRU_LINE_06</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Primary Resrce</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.<BR>So the mode&nbsp;2&nbsp;describe the production on FRU_LINE_06.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'NW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0054(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 53, name: 'TS_28AF97DB7ED9459C9D47F1F30313F260', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0069.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Location',
        fieldicon:'field_icon_43.gif',
        text_d:'FRU_PLANT_03',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>FRU_PLANT_03</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Location</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>FRU_PLANT_03</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Location</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.544503, y:0.505196}, DocXY: {x:0.544503, y:0.49337}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0055(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 54, name: 'TS_C3D318886AA84DDBBF22FFB7D89D95CD', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0071.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Unit of measure',
        fieldicon:'field_icon_45.gif',
        text_d:'HR',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>HR</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Unit of measure</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>HR</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Unit of measure</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.608591, y:0.507271}, DocXY: {x:0.608591, y:0.49543}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0056(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 55, name: 'TS_0A757F4AB5074DFF85FBD09B73DB79A1', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0073.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Var. duration',
        fieldicon:'field_icon_47.gif',
        text_d:'0,11',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>0,11</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Var. duration</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>0,11</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Var. duration</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', 'forms', 0, 0, 'eep_path=\"0:0:0:0:0:1:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={name:\"object_0\",tagName:\"INPUT\",type:\"text\"};\r\neep_coll={n:\"forms\",i:0,ii:0};\r\neep_parents=[{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_INPUT_\";'), XY: {x:0.0243839, y:0.8421}, DocXY: {x:0.63125, y:0.497429}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0057(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 56, name: 'TS_C30CCAB1BB93400A8628585DE79B009F', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0075.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT face=arial size=3>Because Frutado uses mixed resources which have a time continious capacity as well as a bucket capacity, time continious capacity as well as bucket capacity are allocated to the modes. Thereby SNP PPM can be generated from PP/DS PPM.</FONT> ',
        type:'none',
        all_like_demo:1,
        explanation_p:'&nbsp;',
        in_demo:1,
        in_practice:1,
        in_test:0,
        in_prax:0,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.460136, y:0.467903}, DocXY: {x:0.460136, y:0.457023}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:488,
        b_height:165,
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

function msglist_0058(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 57, name: 'TS_40AE2A24ED0048E9AE087BE0378E0245', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0075.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Mode',
        fieldicon:'field_icon_48.gif',
        explanation_d:'<FONT size=3>Double-clicking in the input field </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Mode</FONT></SPAN></B><FONT size=3> activates it.</FONT>',
        explanation_p:'<FONT size=3>Double-click in the input field </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Mode</FONT></SPAN></B><FONT size=3> to activate it.</FONT>',
        action:'ldblclick',
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
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, 'eep_path=\"0:0:0:0:0:1:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"DIV\"};\r\neep_coll={n:\"\",i:0,ii:-1};\r\neep_parents=[{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_DIV_\";'), XY: {x:0.923049, y:0.8421}, DocXY: {x:0.385916, y:0.477165}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0059(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 58, name: 'TS_228A63958A05471992D9463D094B0CCD', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0080.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Unit of Measure',
        fieldicon:'field_icon_52.gif',
        text_d:'HR',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>HR</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Unit of Measure</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>HR</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Unit of Measure</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', 'forms', 0, 0, 'eep_path=\"0:0:0:0:0:1:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={name:\"object_0\",tagName:\"INPUT\",type:\"text\"};\r\neep_coll={n:\"forms\",i:0,ii:0};\r\neep_parents=[{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_INPUT_\";'), XY: {x:0.043473, y:0.941146}, DocXY: {x:0.745312, y:0.584771}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0060(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 59, name: 'TS_47A6DB5AF868438AAA1332421EA33CDF', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0082.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Variable Bucket Consumption',
        fieldicon:'field_icon_116.gif',
        text_d:'0,1',
        regexp:'',
        explanation_d:'<B><FONT size=3>0,1</FONT></B><FONT size=3> is now entered in the </FONT><B><FONT size=3>Var. Bucket Consumption</FONT></B><FONT size=3> field.<BR>The Variable Bucket Consumption&nbsp;specifies the capacity consumption of a resource depending on a certain lot size.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=true ue=\"true\"><FONT size=3>0,1</FONT></SPAN></B><FONT size=3> in the</FONT><FONT size=3> <STRONG>Var. Bucket Consumption </STRONG>field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.<BR>The Variable Bucket Consumption&nbsp;specifies the capacity consumption of a resource depending on a certain lot size.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'NW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0061(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 60, name: 'TS_A0E28ADAEA1441D19549AB689C732782', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0084.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Return to Activity',
        fieldicon:'field_icon_54.gif',
        explanation_d:'<B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Return to Activity</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_54.gif\"></FONT></SPAN></B><FONT size=3> is clicked.</FONT>',
        explanation_p:'<FONT size=3>Click on </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Return to Activity</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_54.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:150,
        b_height:40,
        orientation:'SW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:1}, DocXY: {x:0, y:0}, Off: {x:-10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0:0', 'images', 1, 0, 'eep_path=\"0:0:0:0:0:1:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:1,ii:-1};\r\neep_parents=[{name:\"object_0\",tagName:\"BUTTON\",type:\"button\"},\r\n{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_\";'), XY: {x:0.85713, y:0.904738}, DocXY: {x:0.3664, y:0.287297}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0062(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 61, name: 'TS_69B226461C074B93B5966FBBE158966F', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0085.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Mode',
        fieldicon:'field_icon_55.gif',
        explanation_d:'<FONT size=3>Double-clicking in the input field </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Mode</FONT></SPAN></B><FONT size=3> activates it.</FONT>',
        explanation_p:'<FONT size=3>Double-click in the input field </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Mode</FONT></SPAN></B><FONT size=3> to activate it</FONT>.',
        action:'ldblclick',
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
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, 'eep_path=\"0:0:0:0:0:1:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"DIV\"};\r\neep_coll={n:\"\",i:0,ii:-1};\r\neep_parents=[{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_DIV_\";'), XY: {x:0.948684, y:0.8421}, DocXY: {x:0.386725, y:0.497429}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0063(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 62, name: 'TS_74577E185F64474F900EAFC273124D4F', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0087.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Unit of Measure',
        fieldicon:'field_icon_56.gif',
        text_d:'HR',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>HR</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Unit of Measure</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>HR</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Unit of Measure</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.74374, y:0.595636}, DocXY: {x:0.74374, y:0.58172}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0064(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 63, name: 'TS_065143BD0F724F129D7381AE7108467A', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0089.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Var. Bucket Consumptn',
        fieldicon:'field_icon_57.gif',
        text_d:'0,11',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>0,11</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Var. Bucket Consumptn</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>0,11</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Var. Bucket Consumptn</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.764065, y:0.600824}, DocXY: {x:0.764065, y:0.586801}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0065(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 64, name: 'TS_F3604FB0405E4CCEB44A44AD4163C6B3', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0091.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT face=arial size=3>The activities Filling and Setup&nbsp;are now completely described.&nbsp;<BR>Because we have&nbsp;two activities we have to indicate the relationship between these. The setup activity&nbsp;has to be&nbsp;exectuted before Filling.</FONT>',
        type:'none',
        all_like_demo:1,
        explanation_p:'&nbsp;',
        in_demo:1,
        in_practice:1,
        in_test:0,
        in_prax:0,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.459373, y:0.441001}, DocXY: {x:0.459373, y:0.430732}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:488,
        b_height:223,
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

function msglist_0066(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 65, name: 'TS_9D57E7EE87A24D31A1AF10895A930CA2', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0091.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Return to Activity',
        fieldicon:'field_icon_58.gif',
        explanation_d:'<B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Return to Activity</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_58.gif\"></FONT></SPAN></B><FONT size=3> is clicked.</FONT>',
        explanation_p:'<FONT size=3>Click on </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Return to Activity</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_58.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:150,
        b_height:40,
        orientation:'SW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:1}, DocXY: {x:0, y:0}, Off: {x:-10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.36875, y:0.294179}, DocXY: {x:0.36875, y:0.287297}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0067(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 66, name: 'TS_447E83D7C78B41E48BB19A111AC6178B', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0092.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Return to Operatn',
        fieldicon:'field_icon_59.gif',
        explanation_d:'<B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Return to Operatn</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_59.gif\"></FONT></SPAN></B><FONT size=3> is clicked.</FONT>',
        explanation_p:'<FONT size=2>Click on </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=2>Return to Operatn</FONT></SPAN><FONT size=2>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=2><IMG src=\"pages/field_icon_59.gif\"></FONT></SPAN></B><FONT size=2>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:150,
        b_height:40,
        orientation:'SW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:1}, DocXY: {x:0, y:0}, Off: {x:-10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.352331, y:0.274434}, DocXY: {x:0.352331, y:0.268025}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0068(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 67, name: 'TS_F6E2FE0C4C704B32B51AC2102F8E481E', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0047.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.branch_on(ctx, win_, 10, 10, {
        macro_comment:''
    });
    ctx.ms.click(ctx, win_, 20, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT face=arial size=3>The second activity is similar to the first activity,&nbsp;only that&nbsp;no kind of components are required for&nbsp;the setup activity.&nbsp;If you want to&nbsp;jump to the next step, click on the upper text</FONT>',
        explanation_p:'<FONT face=arial size=3>If you want to&nbsp;jump to the next step, click on the upper text</FONT> ',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:1', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:150,
        b_height:40,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.384375, y:0.488533}, DocXY: {x:0.384375, y:0.477165}, Off: {x:14, y:25}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0.499962, y:0.499962}, DocXY: {x:0.499962, y:0.499962}},
        click_count:1,
        jump_target:'TS_FB9EB574687645B882C998FC37817E42',
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.click(ctx, win_, 30, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT face=arial size=3>you can enter the modes of the second activity in clicking on the lower&nbsp;text.</FONT>',
        explanation_p:'<FONT face=arial size=3>if you want to exercise the modes entry for the second activity click on the lower&nbsp;text.</FONT>',
        action:'ldblclick',
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
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0.499962, y:0.499962}, DocXY: {x:0.499962, y:0.499962}},
        click_count:1,
        jump_target:'TS_8756953084C443F99B8989EBF238B0B5',
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.branch_off(ctx, win_, 40, 10, {
        macro_comment:'',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.271855, y:0.213077}, DocXY: {x:0.271855, y:0.208118}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:220,
        b_height:200,
        orientation:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.267155, y:0.270268}, DocXY: {x:0.267155, y:0.263966}},
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:206,
        b_height_p:200,
        orientation_p:'C'
    });
    ctx.ms.end_tourstop(ctx, win_, 50 , {});
    win_.evt_simple(50,4000);
    win_.evt_simple(50,3902);
    return true;
}

function msglist_0069(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 68, name: 'TS_8756953084C443F99B8989EBF238B0B5', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0047.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Activity',
        fieldicon:'field_icon_71.gif',
        explanation_d:'<FONT size=3>Double-clicking in the input field </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Activity</FONT></SPAN></B><FONT size=3> activates it.</FONT>',
        explanation_p:'<FONT size=3>Double-click in the input field </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Activity</FONT></SPAN></B><FONT size=3> to activate it.</FONT>',
        action:'ldblclick',
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
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'NW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0070(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 69, name: 'TS_A71512C8CE9C4F67A30655287AC070BA', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0094.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Mode',
        fieldicon:'field_icon_61.gif',
        text_d:'1',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>1</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Mode</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>1</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Mode</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'NW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.357031, y:0.468803}, DocXY: {x:0.357031, y:0.457847}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0071(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 70, name: 'TS_FBCF7D0B14724938ABA916017612BEDE', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0096.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Mode priority',
        fieldicon:'field_icon_62.gif',
        text_d:'G',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>G</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Mode priority</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>G</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Mode priority</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.40235, y:0.490639}, DocXY: {x:0.40235, y:0.479164}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0072(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 71, name: 'TS_F48331A5843D43339FF5359E4E28EAE8', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0098.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Primary Resrce',
        fieldicon:'field_icon_64.gif',
        text_d:'FRU_LINE_05',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>FRU_LINE_05</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Primary Resrce</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>FRU_LINE_05</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Primary Resrce</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.542962, y:0.491661}, DocXY: {x:0.542962, y:0.480171}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0073(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 72, name: 'TS_723FE44ECFD44C02954BC2F534AEDC4F', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0099.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Location',
        fieldicon:'field_icon_34.gif',
        text_d:'FRU_PLANT_03',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>FRU_PLANT_03</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Location</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>FRU_PLANT_03</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Location</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0:0', 'images', 1, 0, 'eep_path=\"0:0:0:0:0:1:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:1,ii:-1};\r\neep_parents=[{name:\"object_0\",tagName:\"BUTTON\",type:\"button\"},\r\n{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_\";'), XY: {x:0.951217, y:0.947372}, DocXY: {x:0.607004, y:0.479164}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0074(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 73, name: 'TS_0338178857E44D32820B899BA4AF2925', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0104.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Mode',
        fieldicon:'field_icon_67.gif',
        text_d:'2',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>2</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Mode</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>2</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Mode</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', 'forms', 0, 0, 'eep_path=\"0:0:0:0:0:1:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={name:\"object_0\",tagName:\"INPUT\",type:\"text\"};\r\neep_coll={n:\"forms\",i:0,ii:0};\r\neep_parents=[{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_INPUT_\";'), XY: {x:0.974365, y:0.947372}, DocXY: {x:0.387503, y:0.499489}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0075(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 74, name: 'TS_E513021EF6B44988AA45BA349CCAA480', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0106.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Mode priority',
        fieldicon:'field_icon_68.gif',
        text_d:'E',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>E</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Mode priority</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>E</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Mode priority</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.403113, y:0.510384}, DocXY: {x:0.403113, y:0.498482}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0076(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 75, name: 'TS_4449B98DEF8F4353BEEA0A026BF3259B', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0108.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Primary Resrce',
        fieldicon:'field_icon_70.gif',
        text_d:'FRU_LINE_06',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>FRU_LINE_06</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Primary Resrce</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>FRU_LINE_06</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Primary Resrce</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.542184, y:0.511437}, DocXY: {x:0.542184, y:0.499489}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0077(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 76, name: 'TS_CCD8771187484303BD8F7F1DE3C320E5', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0110.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Location',
        fieldicon:'field_icon_72.gif',
        text_d:'FRU_PLANT_03',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>FRU_PLANT_03</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Location</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>FRU_PLANT_03</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Location</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.625788, y:0.509331}, DocXY: {x:0.625788, y:0.497429}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0078(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 77, name: 'TS_FB9EB574687645B882C998FC37817E42', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0160.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT face=arial size=3>The activities Filling and Setup&nbsp;are now completely described. <BR>As we have two activities we have to define the relationship between these activities.<BR></FONT>',
        type:'none',
        all_like_demo:1,
        explanation_p:'&nbsp;',
        in_demo:1,
        in_practice:1,
        in_test:0,
        in_prax:0,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.459373, y:0.441001}, DocXY: {x:0.459373, y:0.430732}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:488,
        b_height:223,
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

function msglist_0079(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 78, name: 'TS_68CB2FC48F264598B16099703F76C13D', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0160.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Activity Relationshps',
        fieldicon:'field_icon_111.gif',
        explanation_d:'<B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Activity Relationshps</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_111.gif\"></FONT></SPAN></B><FONT size=3> is clicked.</FONT>',
        explanation_p:'<FONT size=3>Click on </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Activity Relationshps</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_111.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:150,
        b_height:40,
        orientation:'SW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:1}, DocXY: {x:0, y:0}, Off: {x:-10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0:0', 'images', 1, 0, 'eep_path=\"0:0:0:0:0:1:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:1,ii:-1};\r\neep_parents=[{name:\"object_0\",tagName:\"BUTTON\",type:\"button\"},\r\n{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_\";'), XY: {x:0.0475929, y:0.809522}, DocXY: {x:0.375006, y:0.263966}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0080(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 79, name: 'TS_8413C4450FA243CDB472C650F9EF8BC3', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0161.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'field_icon_112.gif',
        explanation_d:'<FONT size=3>You have to&nbsp;click&nbsp;on the </FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_112.gif\"></FONT></SPAN><FONT size=3> tab because Filling succeeds the&nbsp;setup activity.</FONT>',
        explanation_p:'<FONT size=3>Click on the </FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_112.gif\"></FONT></SPAN><FONT size=3> tab to select it.</FONT>',
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
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'E',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.491402, y:0.383551}, DocXY: {x:0.491402, y:0.374609}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0081(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 80, name: 'TS_D03C377C2ABF4A5887952118D48B0F09', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0164.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Op.',
        fieldicon:'field_icon_114.gif',
        text_d:'10',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>10</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Op.</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>10</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Op.</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.378119, y:0.471916}, DocXY: {x:0.378119, y:0.460899}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0082(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 81, name: 'TS_4FDE0C2F718A42A0B374B12A9262AE75', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0166.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Activity',
        fieldicon:'field_icon_116.gif',
        text_d:'10',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>10</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Activity</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>10</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Activity</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.426566, y:0.469856}, DocXY: {x:0.426566, y:0.458885}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0083(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 82, name: 'TS_4166332B61C444F7BE555EF62873ADB5', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0052.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Mode Linkage',
        fieldicon:'field_icon_73.gif',
        explanation_d:'<FONT size=3>Clicking in the input field </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Mode Linkage</FONT></SPAN></B><FONT size=3> activates it.</FONT>',
        explanation_p:'<FONT size=3>Click in the input field </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Mode Linkage</FONT></SPAN></B><FONT size=3> to activate it.</FONT>',
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
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'NW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0084(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 83, name: 'TS_1C4C9C1EFC5D4324B127746677DB82DA', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0054.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Mode Linkage',
        fieldicon:'field_icon_76.gif',
        explanation_d:'<FONT size=3>Clicking on <B>Input Help</B> </FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_76.gif\"></FONT></SPAN><FONT size=3> opens a selection list with valid values.</FONT>',
        explanation_p:'<FONT size=3>Click on <B>Input Help</B> </FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_76.gif\"></FONT></SPAN><FONT size=3> to open a selection list with valid values.</FONT>',
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
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'NW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0085(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 84, name: 'TS_7AEA76289D4942AB90329756FA98A938', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0056.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'field_icon_77.gif',
        explanation_d:'<FONT size=3>To make sure both activities, the setup and the filling, are executed on the same ressource,&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_77.gif\"></FONT></SPAN><FONT size=3> is double-clicked. </FONT>',
        explanation_p:'<FONT size=3>Double-click on </FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_77.gif\"></FONT></SPAN><FONT size=3>.</FONT>',
        action:'ldblclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:150,
        b_height:40,
        orientation:'SW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:1}, DocXY: {x:0, y:0}, Off: {x:-10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:1}, DocXY: {x:0, y:0}, Off: {x:-10, y:10}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0086(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 85, name: 'TS_F977A21489F9454785B04AA77468132D', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0060.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Ref. Type',
        fieldicon:'field_icon_78.gif',
        explanation_d:'<FONT size=3>Clicking in the input field </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Ref. Type</FONT></SPAN></B><FONT size=3> activates it.</FONT>',
        explanation_p:'<FONT size=3>Click in the input field </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Ref. Type</FONT></SPAN></B><FONT size=3> to activate it.</FONT>',
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
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'NW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0087(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 86, name: 'TS_EFA06BAE54D047A6BE8D5F773ADFDD82', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0062.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Ref. Type',
        fieldicon:'field_icon_79.gif',
        explanation_d:'<FONT size=3>Clicking on <B>Input Help</B> </FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_79.gif\"></FONT></SPAN><FONT size=3> opens a selection list with valid values.</FONT>',
        explanation_p:'<FONT size=3>Click on <B>Input Help</B> </FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_79.gif\"></FONT></SPAN><FONT size=3> to open a selection list with valid values.</FONT>',
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
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'NW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0088(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 87, name: 'TS_BEEDD01CE48D42D5B23CE55FCB542833', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0064.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'field_icon_81.gif',
        explanation_d:'<SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_81.gif\"></FONT></SPAN><FONT size=3> is double-clicked. So Filling starts when Setup is finished.</FONT>',
        explanation_p:'<FONT size=3>Double-click on </FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_81.gif\"></FONT></SPAN><FONT size=3>.</FONT>',
        action:'ldblclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:150,
        b_height:40,
        orientation:'SW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:1}, DocXY: {x:0, y:0}, Off: {x:-10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:1}, DocXY: {x:0, y:0}, Off: {x:-10, y:10}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0089(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 88, name: 'TS_0C9AEBDA1A37420D902ECFE23EEABF3D', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0171.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT face=arial size=3>To finish the definition of the PPM, in the following last step&nbsp;the Product Plan Assignment will now be defined.</FONT>',
        type:'none',
        all_like_demo:1,
        explanation_p:'&nbsp;',
        in_demo:1,
        in_practice:1,
        in_test:0,
        in_prax:0,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.460136, y:0.467903}, DocXY: {x:0.460136, y:0.457023}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:488,
        b_height:153,
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

function msglist_0090(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 89, name: 'TS_83D1B6AAF5C0421B95AA152E8F3DEFBA', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0114.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Product Plan Assignmnt',
        fieldicon:'field_icon_120.gif',
        explanation_d:'<B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Product Plan Assignmnt</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_120.gif\"></FONT></SPAN></B><FONT size=3> is clicked.</FONT>',
        explanation_p:'<FONT size=3>Click on </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Product Plan Assignmnt</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_120.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', 'forms', 0, 0, 'eep_path=\"0:0:0:0:0:1:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={name:\"object_0\",tagName:\"INPUT\",type:\"text\"};\r\neep_coll={n:\"forms\",i:0,ii:0};\r\neep_parents=[{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_INPUT_\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:150,
        b_height:40,
        orientation:'SW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.419532, y:0.270268}, DocXY: {x:0.419532, y:0.263966}, Off: {x:-2, y:0}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.417182, y:0.271275}, DocXY: {x:0.417182, y:0.264973}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0091(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 90, name: 'TS_0A5D5918681C4740A0D78E9F0578341E', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0114.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT face=arial size=3>In the Product Plan Assignment we now define, which production orders can use this PPM (usually, this will be the orders for product going to be produced using this PPM) and other restrictions, like lot sizes for which this PPM is valid.</FONT>',
        type:'none',
        all_like_demo:1,
        explanation_p:'&nbsp;',
        in_demo:1,
        in_practice:1,
        in_test:0,
        in_prax:0,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.460136, y:0.467903}, DocXY: {x:0.460136, y:0.457023}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:488,
        b_height:177,
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

function msglist_0092(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 91, name: 'TS_15B72E0CC8074AC1A2CC293528FF0208', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0114.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Prod. Process Model',
        fieldicon:'field_icon_74.gif',
        text_d:'FRU_PPM_SAFT_03_PLANT_03',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>FRU_PPM_SAFT_03_PLANT_03</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Prod. Process Model</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>FRU_PPM_SAFT_03_PLANT_03</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Prod. Process Model</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:1', 'forms', 0, 0, 'eep_path=\"0:0:0:0:0:1:1\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={name:\"Objekt_0\",tagName:\"INPUT\",type:\"text\"};\r\neep_coll={n:\"forms\",i:0,ii:0};\r\neep_parents=[{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"DIV:_INPUT_\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.353872, y:0.528069}, DocXY: {x:0.353872, y:0.51574}, Off: {x:-5, y:-2}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'E',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.514809, y:0.557168}, DocXY: {x:0.514809, y:0.544152}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0093(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 92, name: 'TS_B9EAB5C006ED43E7B19B2DA864650194', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0115.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'field_icon_75.gif',
        explanation_d:'<FONT size=3>Clicking on the <B>scroll button</B> </FONT>$#{fieldname}<FONT size=3>displays the desired screen area.</FONT>',
        explanation_p:'<FONT size=3>Scroll by clicking on the <B>scroll button</B> </FONT>$#{fieldname}<FONT size=3>.</FONT>',
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
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'NW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.859373, y:0.69955}, DocXY: {x:0.859373, y:0.683238}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0094(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 93, name: 'TS_3155548FDC394C5BB70C4DF9121499A4', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0174.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Maximum Lot Size',
        fieldicon:'field_icon_136.gif',
        text_d:'9999999',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>9999999</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Maximum Lot Size</FONT></SPAN></B><FONT size=3> field<SPAN lang=EN-US style=\"FONT-SIZE: 12pt; LINE-HEIGHT: 115%; FONT-FAMILY: \'Arial\',\'sans-serif\'; mso-ansi-language: EN-US\">, because in the Frutado Case there is no maximum lot size. So we create a big lot size, which will never attain.<?xml:namespace prefix = o ns = \"urn:schemas-microsoft-com:office:office\" /><o:p></o:p></SPAN></FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>9999999</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Maximum Lot Size</FONT></SPAN></B><FONT size=3> field<SPAN lang=EN-US style=\"FONT-SIZE: 12pt; LINE-HEIGHT: 115%; FONT-FAMILY: \'Arial\',\'sans-serif\'; mso-ansi-language: EN-US\">, because in the Frutado Case there is no maximum lot size. So we create a big lot size, which will never attain.<?xml:namespace prefix = o ns = \"urn:schemas-microsoft-com:office:office\" /><o:p></o:p></SPAN><BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', 'forms', 0, 0, 'eep_path=\"0:0:0:0:0:1:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={name:\"object_0\",tagName:\"INPUT\",type:\"text\"};\r\neep_coll={n:\"forms\",i:0,ii:0};\r\neep_parents=[{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_INPUT_\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_af:{ FP: '', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
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
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'NW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0095(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 94, name: 'TS_753F302D01394ADFA91379264DB6EDE4', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0140.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:' ',
        fieldicon:'field_icon_99.gif',
        explanation_d:'<B>$#{fieldname}&nbsp;<SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_99.gif\"></FONT></SPAN></B><FONT size=3> is clicked.</FONT>',
        explanation_p:'<FONT size=3>Click on </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3></FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_99.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
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
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0:0', 'images', 1, 0, 'eep_path=\"0:0:0:0:0:1:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:1,ii:-1};\r\neep_parents=[{name:\"object_0\",tagName:\"BUTTON\",type:\"button\"},\r\n{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_\";'), XY: {x:0.888884, y:0.954513}, DocXY: {x:0.0257877, y:0.159396}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0096(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 95, name: 'TS_D502694A4AA741B2AFEE1A2F0C4D4254', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0143.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT face=arial size=3>You can also navigate through the PPM by using the navigation tree on the top left. In the lower left, a graphical representation of the PPM is given.<BR>At last we have to save and can activate the PPM.</FONT>',
        type:'none',
        all_like_demo:1,
        explanation_p:'&nbsp;',
        in_demo:1,
        in_practice:1,
        in_test:0,
        in_prax:0,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.535943, y:0.443061}, DocXY: {x:0.535943, y:0.432746}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:488,
        b_height:175,
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

function msglist_0097(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 96, name: 'TS_A364F00D8C57453E8B3C2732F5D4B742', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0143.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Save',
        fieldicon:'field_icon_100.gif',
        explanation_d:'<B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Save</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_100.gif\"></FONT></SPAN></B><FONT size=3> is clicked.</FONT>',
        explanation_p:'<FONT size=3>Click on </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Save</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_100.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
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
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0:0', 'images', 1, 0, 'eep_path=\"0:0:0:0:0:1:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:1,ii:-1};\r\neep_parents=[{name:\"object_0\",tagName:\"BUTTON\",type:\"button\"},\r\n{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_\";'), XY: {x:0.863615, y:0.863615}, DocXY: {x:0.194507, y:0.0588846}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0098(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 97, name: 'TS_8DEB1C25244F44C887C56C71A502620A', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0144.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:' Y',
        fieldicon:'field_icon_101.gif',
        explanation_d:'<B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Y</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_101.gif\"></FONT></SPAN></B><FONT size=3> is clicked.</FONT>',
        explanation_p:'<FONT size=3>Click on </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Y</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_101.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
        action:'lclick',
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
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'NE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.249226, y:0.366949}, DocXY: {x:0.249226, y:0.358343}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0099(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 98, name: 'TS_A42FDFEC072347B48781B260E48ECC78', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0143.html',
        new_step:'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Exit',
        fieldicon:'field_icon_139.gif',
        explanation_d:'<B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Exit</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_139.gif\"></FONT></SPAN></B><FONT size=3> is clicked.</FONT>',
        explanation_p:'<FONT size=3>Click on </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Exit</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_139.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:1:0', 'images', 2, 0, 'eep_path=\"0:0:0:0:0:1:1:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:2,ii:-1};\r\neep_parents=[{name:\"Objekt_0\",tagName:\"BUTTON\",type:\"button\"},\r\n{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:150,
        b_height:40,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.242939, y:0.0602579}, DocXY: {x:0.242939, y:0.0588846}, Off: {x:9, y:14}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.239811, y:0.0602579}, DocXY: {x:0.239811, y:0.0588846}, Off: {x:6, y:10}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0100(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 99, name: 'TS_941AD1422A8F4D0B896E2A99C0319B42', label: 'SAP Easy Access  mySAP Supply Chain Management', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0003.html',
        new_step:'SAP Easy Access  mySAP Supply Chain Management'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3>The master data for PP/DS is completed now&nbsp;and the&nbsp;lesson is finished. The master data will be used in the next steps to create production orders to fulfill demands. </FONT>',
        type:'none',
        all_like_demo:1,
        explanation_p:'&nbsp;',
        in_demo:1,
        in_practice:1,
        in_test:0,
        in_prax:0,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.460136, y:0.467903}, DocXY: {x:0.460136, y:0.457023}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:488,
        b_height:141,
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

function msglist_0101(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 100, name: 'TS_46CF39561EE34D2EA4B83320DC1DD0C1', label: 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.end_unit(ctx, win_, 0, 10, {
        macro_comment:''
    });
    ctx.ms.end_tourstop(ctx, win_, 10 , {});
    win_.evt_simple(10,4000);
    win_.evt_simple(10,3902);
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

    content.userHeader['version'] = '6.3.1 Unicode';
    content.userHeader['title'] = 'PP/DS PPM';
    content.userHeader['author'] = 'Administrator';
    content.userHeader['comment'] = '';
    content.userHeader['find_element'] = '////\r\nvar Eep_resolve;\r\nvar eep_resolveOptions={\r\neep_firstTextRe:null\r\n,eep_useText:true\r\n,eep_version:\'6.1.0\'};\r\nEep_resolve=function(xVh,xVG,XKF){\r\nvar XHZ=new Eep(xVh,eep_resolveOptions);\r\nreturn XHZ.eep_resolve(xVG,XKF);}\r\n\r\n/*\r\n  Copyright Notice:\r\n\r\n  Copyright 2000-2005 datango AG\r\n  ALL RIGHTS RESERVED\r\n\r\n  UNPUBLISHED -- Use of a copyright notice is precautionary only and\r\n  does not imply publication or disclosure.\r\n\r\n  THE CONTENT OF THIS WORK CONTAINS CONFIDENTIAL AND PROPRIETARY\r\n  INFORMATION OF DATANGO AG. ANY DUPLICATION, MODIFICATION,\r\n  DISTRIBUTION, OR DISCLOSURE IN ANY FORM, IN WHOLE, OR IN PART, IS\r\n  STRICTLY PROHIBITED WITHOUT THE PRIOR EXPRESS WRITTEN PERMISSION OF\r\n  DATANGO AG.\r\n\r\n*/';
    content.userHeader['start_script'] = '';
    content.userHeader['stop_script'] = '';
    content.userHeader['error_script'] = '';

    sub = new Object;
    sub.name = 'msglist_0001';
    sub.audio = '';
    sub.title = 'Start';
    sub.uid = 'TS_BDB8FB5519154326974E8F84428200AE';
    sub.jumpable = 0;
    sub.visible = 0;
    sub.callable = 0;
    sub.duration = 10;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0002';
    sub.audio = '';
    sub.title = 'SAP Easy Access  mySAP Supply Chain Management';
    sub.uid = 'TS_FC82513527094EC5AF679B4072BD7BDC';
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
    sub.uid = 'TS_A00DE33032774F7493D9D6D2A9DAE965';
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
    sub.uid = 'TS_C58B0202DC3C449AB5D0FB6CE5CECF73';
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
    sub.uid = 'TS_67EAE13BA54E4768B746DC2E4357DB21';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 21;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0006';
    sub.audio = '';
    sub.title = 'Choose Plan';
    sub.uid = 'TS_DC899D30213D42FF9DEBE0A508E91D6E';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0007';
    sub.audio = '';
    sub.title = 'Choose Plan';
    sub.uid = 'TS_9935CE677FB94DDDACF55A6334DA01D4';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0008';
    sub.audio = '';
    sub.title = 'Choose Plan';
    sub.uid = 'TS_E4E809BA398844A6B096D69D85C38F81';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0009';
    sub.audio = '';
    sub.title = 'Choose Plan';
    sub.uid = 'TS_21F5F85BEC7F46DD8FC79FD7194D98EB';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0010';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_340474FE8CCC416FBFA411863A136B65';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0011';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_2E07B87319F44A3C9258433F6216CE25';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0012';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_4E410ED1220D4E02808E3797EB4B519D';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0013';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_CDA12C4CB827445A99BC8240936CEEA2';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0014';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_00054F3FB03D4FBBA0660B9EC2D02D8B';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0015';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_9E118E6C020948D79C32F3BE296FFE8A';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0016';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_4320696978D44309B3DF965968CA376A';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0017';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_51C1FC1E1F2848BABED82260C507A0BD';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0018';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_B723F497282B4CE49FDB18B39D05BFAA';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0019';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_5FA6324A1BE04E33944B321FC51DE767';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0020';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_19EE77D6EA524F1FA55F9415C1933E37';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0021';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_A60A9EBD8AED4F6DAD4ADCC659307939';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0022';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_62E44103D2C44510BA5229E6A57CA514';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0023';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_E1B197A2C6394185961065155CDFE695';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0024';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_442FDB224EBC42C4A432E852D80633A6';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0025';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_016112E675D542F68756F5623FD7EF59';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0026';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_DAEABCCF832A4081AE44321E2787C95D';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0027';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_3AE71EF4E9C344E09B9655133CB02B7A';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0028';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_CBEEC3075EE1494B968841F6A27B39F2';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0029';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_701FF50A10234CEDA14D544137C29D81';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0030';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_CCDF72FE8E77433494FA8E6E393F8242';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0031';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_D4999B2952DF468A97DF7C80459B5B62';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0032';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_EBBD6DDC28F64F9EA1A953182314F60F';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0033';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_124392108689433C834A86649212A70E';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0034';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_4553421DCD7F4669BA24CF5C3C573A1A';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0035';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_0BFB5935B3DC4A6E8FCEAC17A6A90F0D';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0036';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_3D3DF8C7D41D4D0DB7EC63423B9001F1';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0037';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_1893E907A5AF4027B0B8FF64422F5547';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0038';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_6092E30C8F0F4198BFCF5458F9F2FA41';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0039';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_9EFCCA6C1C094BB092341134874AF746';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0040';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_091E3690ED294A1BBF89D239D29E97DE';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0041';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_C82830E4DBE9402887B525892FF60893';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0042';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_F48C3D56B8654B97B5E0EB9B64FBA429';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0043';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_3A8FB3D00C474DECA160C345E1459064';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0044';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_AE2ED08D9B734F70872E54D57D786C51';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0045';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_83C741ECEB8E4B2380A772C373C9A184';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0046';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_2B0AE7E1BA6143D29D3BA12DA6CA23EB';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0047';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_6C5CE7DB291140BA8E298C7D136FF7E0';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0048';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_3A8A802E3CBE4B238FFC1F534B421018';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0049';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_AE59BC6BF0574378B8FFB4D1F2D1CE48';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0050';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_562EDE17551E4D2396834E20C4B45BD3';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0051';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_EA85E0727C0E4350A9A30E654C082FC4';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0052';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_0EB9F0C6E2D245CCBEA3F6D07CE0619F';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0053';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_14441CFE501C4B759D0FB9C8B6ECF9B9';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0054';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_28AF97DB7ED9459C9D47F1F30313F260';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0055';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_C3D318886AA84DDBBF22FFB7D89D95CD';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0056';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_0A757F4AB5074DFF85FBD09B73DB79A1';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0057';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_C30CCAB1BB93400A8628585DE79B009F';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0058';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_40AE2A24ED0048E9AE087BE0378E0245';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0059';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_228A63958A05471992D9463D094B0CCD';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0060';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_47A6DB5AF868438AAA1332421EA33CDF';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0061';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_A0E28ADAEA1441D19549AB689C732782';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0062';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_69B226461C074B93B5966FBBE158966F';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0063';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_74577E185F64474F900EAFC273124D4F';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0064';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_065143BD0F724F129D7381AE7108467A';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0065';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_F3604FB0405E4CCEB44A44AD4163C6B3';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0066';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_9D57E7EE87A24D31A1AF10895A930CA2';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0067';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_447E83D7C78B41E48BB19A111AC6178B';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0068';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_F6E2FE0C4C704B32B51AC2102F8E481E';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 50;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0069';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_8756953084C443F99B8989EBF238B0B5';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0070';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_A71512C8CE9C4F67A30655287AC070BA';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0071';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_FBCF7D0B14724938ABA916017612BEDE';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0072';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_F48331A5843D43339FF5359E4E28EAE8';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0073';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_723FE44ECFD44C02954BC2F534AEDC4F';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0074';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_0338178857E44D32820B899BA4AF2925';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0075';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_E513021EF6B44988AA45BA349CCAA480';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0076';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_4449B98DEF8F4353BEEA0A026BF3259B';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0077';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_CCD8771187484303BD8F7F1DE3C320E5';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0078';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_FB9EB574687645B882C998FC37817E42';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0079';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_68CB2FC48F264598B16099703F76C13D';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0080';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_8413C4450FA243CDB472C650F9EF8BC3';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0081';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_D03C377C2ABF4A5887952118D48B0F09';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0082';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_4FDE0C2F718A42A0B374B12A9262AE75';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0083';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_4166332B61C444F7BE555EF62873ADB5';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0084';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_1C4C9C1EFC5D4324B127746677DB82DA';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0085';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_7AEA76289D4942AB90329756FA98A938';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0086';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_F977A21489F9454785B04AA77468132D';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0087';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_EFA06BAE54D047A6BE8D5F773ADFDD82';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0088';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_BEEDD01CE48D42D5B23CE55FCB542833';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0089';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_0C9AEBDA1A37420D902ECFE23EEABF3D';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0090';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_83D1B6AAF5C0421B95AA152E8F3DEFBA';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0091';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_0A5D5918681C4740A0D78E9F0578341E';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0092';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_15B72E0CC8074AC1A2CC293528FF0208';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0093';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_B9EAB5C006ED43E7B19B2DA864650194';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0094';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_3155548FDC394C5BB70C4DF9121499A4';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0095';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_753F302D01394ADFA91379264DB6EDE4';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0096';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_D502694A4AA741B2AFEE1A2F0C4D4254';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0097';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_A364F00D8C57453E8B3C2732F5D4B742';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0098';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_8DEB1C25244F44C887C56C71A502620A';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0099';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_A42FDFEC072347B48781B260E48ECC78';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0100';
    sub.audio = '';
    sub.title = 'SAP Easy Access  mySAP Supply Chain Management';
    sub.uid = 'TS_941AD1422A8F4D0B896E2A99C0319B42';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0101';
    sub.audio = '';
    sub.title = 'Create Plan \'FRU_PPM_SAFT_03_PLANT_03.\' - Indiv. Displ.';
    sub.uid = 'TS_46CF39561EE34D2EA4B83320DC1DD0C1';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 10;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;

    return content;
}
