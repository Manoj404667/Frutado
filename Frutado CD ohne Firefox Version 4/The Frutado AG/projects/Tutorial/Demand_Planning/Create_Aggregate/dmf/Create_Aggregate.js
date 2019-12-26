
function msglist_0001(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 0, name: 'TS_C7DF2F245F634B3C8C395F6AB7FDB956', label: 'Start', jumpable: 0, visible: 0, callable: 0});
    ctx.ms.start_unit(ctx, win_, 0, 10, {
        macro_comment:'',
        possible_points:267,
        mastery_score:213,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 1, name: 'TS_02F08EA15CB04589BE0282A91022D252', label: '(kein Titel)', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0000.html',
        new_step:'SAP Easy Access  mySAP Supply Chain Management'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3>This is the fifth&nbsp;lesson of the DP module. The objective is to create aggregate groups for the demand planning module. These groups minimize the observed forecast errors. </FONT>\n<P></P>\n<P><FONT size=3>We will now navigate to the Interactive Demand Planning transaction.</FONT>',
        type:'none',
        all_like_demo:0,
        explanation_p:'<FONT size=3>You have already viewed the demo stream of this lesson and are now ready to practice yourself. </FONT>\n<P></P>\n<P><FONT size=3>Follow the instructions as shown and by the end of the lesson you will have created aggregate groups for the demand planning module.</FONT>',
        in_demo:1,
        in_practice:1,
        in_test:1,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.606409, y:0.460548}, DocXY: {x:0.606409, y:0.446113}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:504,
        b_height:198,
        orientation:'C',
        b_duration:60,
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.629862, y:0.619715}, DocXY: {x:0.629862, y:0.600275}},
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:530,
        b_height_p:154,
        orientation_p:'C',
        b_duration_p:60
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0003(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 2, name: 'TS_A6F8D4AE7B534DD4B74FAC1BECDBDDBE', label: 'SAP Easy Access  mySAP Supply Chain Management', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0000.html',
        new_step:'SAP Easy Access  mySAP Supply Chain Management'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Planning',
        fieldicon:'field_icon_00.gif',
        explanation_d:'<FONT size=3>The transaction Interactive Demand Planning is located in the<STRONG> Planning </STRONG>folder.</FONT>',
        explanation_p:'<FONT size=3>Open the folder <STRONG>Planning</STRONG>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:336,
        b_height:82,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:228,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.486336, y:0.237995}, DocXY: {x:0.486336, y:0.230564}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0004(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 3, name: 'TS_DF2E58E675C9422DB71B928B7FCB2181', label: 'SAP Easy Access  mySAP Supply Chain Management', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0001.html',
        new_step:'SAP Easy Access  mySAP Supply Chain Management'
    });
    ctx.ms.transaction_info(ctx, win_, 10, 1, {
        macro_comment:'',
        tcode:'/SAPAPO/SDP94 - Interactive Demand Planning'
    });
    ctx.ms.click(ctx, win_, 11, 10, {
        macro_comment:'',
        fieldname:'/SAPAPO/SDP94 - Interactive Demand Planning',
        fieldicon:'field_icon_01.gif',
        explanation_d:'<FONT size=3>The transaction <STRONG>Interactive Demand Planning</STRONG> is the core of the demand planning process. This transaction is often used by the demand planner, as&nbsp;the planning book defined in an earlier lesson can be viewed.</FONT>',
        explanation_p:'<FONT size=3>Start the transaction <STRONG>Interactive Demand Planning</STRONG>.</FONT>',
        action:'ldblclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:483,
        b_height:125,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:364,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.576135, y:0.333776}, DocXY: {x:0.576135, y:0.323293}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 21 , {});
    win_.evt_simple(21,4000);
    win_.evt_simple(21,3902);
    return true;
}

function msglist_0005(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 4, name: 'TS_CFA7207460B34264985CABF40B182038', label: 'Planning Book: [Live] PLANUNGSMAPPE DER FRUTADO AG / DATENSICHT DER FR', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0141.html',
        new_step:'Planning Book: [Live] PLANUNGSMAPPE DER FRUTADO AG / DATENSICHT DER FR'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'FRU_DP_PLAN_DI',
        fieldicon:'field_icon_126.gif',
        explanation_d:'<FONT size=3>In order to select our data view the planning book <STRONG>FRU_DP_PLAN_DP</STRONG> is <STRONG>opened</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Open the folder <STRONG>FRU_DP_PLAN_DP</STRONG>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:322,
        b_height:81,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:262,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.522454, y:0.730953}, DocXY: {x:0.522454, y:0.708034}},
        click_count:1,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 5, name: 'TS_B5AB400D759E4FE78AD2E9E6751787AD', label: 'Planning Book: [Live] PLANUNGSMAPPE DER FRUTADO AG / DATENSICHT DER FR', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0142.html',
        new_step:'Planning Book: [Live] PLANUNGSMAPPE DER FRUTADO AG / DATENSICHT DER FR'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'FRU_DP_VIEW',
        fieldicon:'field_icon_127.gif',
        explanation_d:'<FONT size=3>The data view <STRONG>FRU_DP_VIEW</STRONG> which was created in an earlier lesson is now visible and can be <STRONG>selected</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please <STRONG>select</STRONG> the data view <STRONG>FRU_DP_VIEW</STRONG>, which you created in an earlier lesson.</FONT>',
        action:'ldblclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:435,
        b_height:82,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:610,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.636698, y:0.738018}, DocXY: {x:0.636698, y:0.71487}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 6, name: 'TS_FAB4D6F48D1E47B7A0DFB3F61E3BD278', label: '(kein Titel)', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0143.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT style=\"BACKGROUND-COLOR: #ffffb7\" size=3>The data view has now been opened and the three key figures are visible.</FONT>',
        type:'none',
        all_like_demo:0,
        explanation_p:'<FONT style=\"BACKGROUND-COLOR: #ffffb7\" size=3>You have opened the data view. The three key figures assigned to the data view are now visible.</FONT>',
        in_demo:1,
        in_practice:1,
        in_test:1,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.531243, y:0.515496}, DocXY: {x:0.531243, y:0.499321}},
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:310,
        b_height:116,
        orientation:'C',
        b_duration:60,
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.524407, y:0.604227}, DocXY: {x:0.524407, y:0.58526}},
        bubble_class_p:'StyleA',
        bubblestyle_p:'',
        b_width_p:318,
        b_height_p:113,
        orientation_p:'C',
        b_duration_p:60
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0008(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 7, name: 'TS_EA94FAE532BA48088B2D399D79961A88', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0143.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:' ',
        fieldicon:'field_icon_128.gif',
        explanation_d:'<FONT size=3>In order to create an aggregate group the <STRONG>Object Selection</STRONG> is <STRONG>opened</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>In order to create an aggregate group <STRONG>open</STRONG> the <STRONG>Object Selection</STRONG> by pressing&nbsp;</FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_128.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:309,
        b_height:86,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:600,
        b_height_p:65,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.335943, y:0.330953}, DocXY: {x:0.335943, y:0.320577}},
        click_count:1,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 8, name: 'TS_316E244665B947DBB8600326CBF36AE3', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0144.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Show',
        fieldicon:'field_icon_129.gif',
        explanation_d:'<FONT size=3>In order to choose a key figure which will be shown in the data view a <STRONG>list</STRONG> of all possible key figures is <STRONG>opened</STRONG>.</FONT>',
        explanation_p:'<FONT size=3><STRONG>Open</STRONG> a list of key figures by clicking the according box near <STRONG>show</STRONG>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:489,
        b_height:83,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:506,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.647456, y:0.304204}, DocXY: {x:0.647456, y:0.294667}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 9, name: 'TS_D7A2F1C348D54C80B2F7961FC400D763', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0145.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'APO - Location',
        fieldicon:'field_icon_130.gif',
        explanation_d:'<FONT size=3>The <STRONG>APO -&nbsp;Location</STRONG> is <STRONG>selected</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Select the entry <STRONG>APO - Location</STRONG> by clicking it.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:244,
        b_height:60,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:344,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.621088, y:0.326757}, DocXY: {x:0.621088, y:0.316503}},
        click_count:1,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 10, name: 'TS_B7667B10DE764CEE8A493CADBB77ED94', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0147.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'field_icon_131.gif',
        text_d:'FRU_PV_DP',
        explanation_d:'<FONT size=3>The next selection is automaticlly activated and a planning version must be <STRONG>entered</STRONG>. The planning version of the demand planning module <STRONG>FRU_PV_DP</STRONG> is known by now.</FONT>',
        explanation_p:'<FONT size=3>Please enter <STRONG>FRU_PV_DP</STRONG> in the <STRONG>Planning Version </STRONG></FONT>$#{fieldname}<FONT size=3>box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:465,
        b_height:105,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:412,
        b_height_p:68,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.643534, y:0.349264}, DocXY: {x:0.643534, y:0.338308}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 11, name: 'TS_FF796E286BE14572840835A945FEF9A9', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0148.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'field_icon_132.gif',
        explanation_d:'<FONT size=3>In order to add a new key figure for selection a <STRONG>list</STRONG> of all&nbsp;figures is <STRONG>opened</STRONG>.</FONT>',
        explanation_p:'<FONT size=3><STRONG>Open</STRONG> a <STRONG>list </STRONG>of key figures by clicking the according box below APO - Planning Version.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:335,
        b_height:83,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.201175, y:0.39292}, DocXY: {x:0.201175, y:0.380606}, Off: {x:3, y:19}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:678,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.509743, y:0.52958}, DocXY: {x:0.509743, y:0.512963}},
        click_count:1,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 12, name: 'TS_D3156B2BD17F4141B7865E477D933325', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0149.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'APO - Location',
        fieldicon:'field_icon_133.gif',
        explanation_d:'<FONT size=3>The <STRONG>APO - Location</STRONG> is <STRONG>selected</STRONG> as the first key figure.</FONT>',
        explanation_p:'<FONT size=3>Select the entry <STRONG>APO - Location </STRONG>by clicking it.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:378,
        b_height:58,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:340,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.388678, y:0.530953}, DocXY: {x:0.388678, y:0.514321}},
        click_count:1,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 13, name: 'TS_527254DC0E9949F6A1C14BF0224F21D0', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0150.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'field_icon_134.gif',
        explanation_d:'<FONT size=3>As we want to select more than one location in this <STRONG>selection</STRONG> a new template is <STRONG>opened</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>As you want to define more than one location in this selection <STRONG>open</STRONG> a new template by pressing </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_134.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:382,
        b_height:82,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.445289, y:0.395758}, DocXY: {x:0.445289, y:0.383322}, Off: {x:3, y:11}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:524,
        b_height_p:72,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.438468, y:0.58732}, DocXY: {x:0.438468, y:0.568887}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 14, name: 'TS_A3FF86D025804D8B95B66FEB428E6581', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0152.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Single value',
        fieldicon:'field_icon_135.gif',
        text_d:'FRU_DC_01',
        explanation_d:'<FONT size=3>In this template all locations which are supposed to belong to the selection are <STRONG>added</STRONG>. As described earlier the Frutado AG wants to aggregate each group for all distribution centers. The first centre is called <STRONG>FRU_DC_01</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please enter the first distribution centre <STRONG>FRU_DC_01</STRONG> in the <STRONG>Single value</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:663,
        b_height:109,
        orientation:'E',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:566,
        b_height_p:64,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.613245, y:0.466194}, DocXY: {x:0.613245, y:0.451545}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 15, name: 'TS_8E5522C2E4C24095A12E673C57D81EA8', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0154.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Single value',
        fieldicon:'field_icon_136.gif',
        text_d:'FRU_DC_02',
        explanation_d:'<FONT size=3>The second distribution centre&nbsp;<STRONG>FRU_DC_02</STRONG> is <STRONG>entered</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please enter the&nbsp;second distribution centre <STRONG>FRU_DC_02</STRONG> in the <STRONG>Single value</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:386,
        b_height:63,
        orientation:'E',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:608,
        b_height_p:62,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.625971, y:0.461967}, DocXY: {x:0.625971, y:0.447471}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 16, name: 'TS_E700A7C0742F4F7E888C6FFA89A59FF7', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0156.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Single value',
        fieldicon:'field_icon_137.gif',
        text_d:'FRU_DC_03',
        explanation_d:'<FONT size=3>The third distribution centre&nbsp;<STRONG>FRU_DC_03</STRONG> is <STRONG>entered</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please enter the&nbsp;third distribution centre <STRONG>FRU_DC_03</STRONG> in the <STRONG>Single value</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:402,
        b_height:59,
        orientation:'E',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:576,
        b_height_p:70,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.636698, y:0.459144}, DocXY: {x:0.636698, y:0.444755}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 17, name: 'TS_9DFA6DC3CB7F419EB8A801E1B3D943E2', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0157.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Copy',
        fieldicon:'field_icon_138.gif',
        explanation_d:'<FONT size=3>The multiple selection visible is <STRONG>accepted</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please <STRONG>accept</STRONG> the multiple selection visible by pressing </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_138.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:324,
        b_height:56,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:462,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.595697, y:0.459144}, DocXY: {x:0.595697, y:0.444755}},
        click_count:1,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 18, name: 'TS_2FDD80224DD04B2B98DDE5249770FA1E', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0158.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'field_icon_139.gif',
        explanation_d:'<FONT size=3>In order to add another key figure for selection a <STRONG>list</STRONG> of all figures is <STRONG>opened</STRONG>.</FONT>',
        explanation_p:'<FONT size=3><STRONG>Open</STRONG> a <STRONG>list </STRONG>of key figures by clicking the according box below APO - Location.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:398,
        b_height:78,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.206058, y:0.416907}, DocXY: {x:0.206058, y:0.403815}, Off: {x:6, y:13}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:576,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.61619, y:0.469017}, DocXY: {x:0.61619, y:0.454292}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 19, name: 'TS_1D4A5354C2B54C8B9DBA14B2D2FA525B', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0159.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'APO Product',
        fieldicon:'field_icon_140.gif',
        explanation_d:'<FONT size=3>The <STRONG>APO Product</STRONG> is <STRONG>selected</STRONG> as the second key figure.</FONT>',
        explanation_p:'<FONT size=3>Select the entry <STRONG>APO Product </STRONG>by clicking it.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:398,
        b_height:63,
        orientation:'E',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:324,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.588861, y:0.454902}, DocXY: {x:0.588861, y:0.440635}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 20, name: 'TS_5A94222CFD12497082CDADB240483CC7', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0160.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'field_icon_141.gif',
        explanation_d:'<FONT size=3>As we want to select more than one product in this <STRONG>selection</STRONG> a new template is <STRONG>opened</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>As you want to define more than one product in this selection <STRONG>open</STRONG> a new template by pressing </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_141.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:373,
        b_height:81,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.445289, y:0.423911}, DocXY: {x:0.445289, y:0.410636}, Off: {x:1, y:7}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:492,
        b_height_p:80,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.6318, y:0.509865}, DocXY: {x:0.6318, y:0.493843}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 21, name: 'TS_9A7EB15A63C94FA58CE79F28D41EFE30', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0162.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Single value',
        fieldicon:'field_icon_142.gif',
        text_d:'FRU_SAFT_02',
        explanation_d:'<FONT size=3>In this template all products which are supposed to belong to the selection are <STRONG>added</STRONG>. There are six fruit juices and one ice tea in this aggregate group. The first fruit juice is called <STRONG>FRU_SAFT_02</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please enter the first friut juice <STRONG>FRU_SAFT_02</STRONG> in the <STRONG>Single value</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:558,
        b_height:109,
        orientation:'E',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.334951, y:0.353506}, DocXY: {x:0.334951, y:0.342428}, Off: {x:4, y:14}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:530,
        b_height_p:66,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.673808, y:0.47039}, DocXY: {x:0.673808, y:0.455665}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0023(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 22, name: 'TS_7B2E64514D7941D79EC6D81218167226', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0164.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Single value',
        fieldicon:'field_icon_143.gif',
        text_d:'FRU_SAFT_05',
        explanation_d:'<FONT size=3>The second fruit juice&nbsp;<STRONG>FRU_SAFT_05</STRONG> is <STRONG>entered</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please enter the second friut juice <STRONG>FRU_SAFT_05</STRONG> in the <STRONG>Single value</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:343,
        b_height:60,
        orientation:'E',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.334951, y:0.381674}, DocXY: {x:0.334951, y:0.369711}, Off: {x:11, y:6}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:556,
        b_height_p:76,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.633753, y:0.476051}, DocXY: {x:0.633753, y:0.461082}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 23, name: 'TS_AA87C6C9E4F040EDA9FFB49B476F78A0', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0166.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Single value',
        fieldicon:'field_icon_144.gif',
        text_d:'FRU_SAFT_12',
        explanation_d:'<FONT size=3>The third fruit juice&nbsp;<STRONG>FRU_SAFT_12</STRONG> is <STRONG>entered</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please enter the&nbsp;third friut juice <STRONG>FRU_SAFT_12</STRONG> in the <STRONG>Single value</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:362,
        b_height:59,
        orientation:'E',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:560,
        b_height_p:66,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.634745, y:0.469017}, DocXY: {x:0.634745, y:0.454292}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 24, name: 'TS_F7FE55B2CC3642C99A85563D9A3E6FB3', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0168.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Single value',
        fieldicon:'field_icon_145.gif',
        text_d:'FRU_SAFT_13',
        explanation_d:'<FONT size=3>The&nbsp;fourth fruit juice&nbsp;<STRONG>FRU_SAFT_13</STRONG> is <STRONG>entered</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please enter the fourth friut juice <STRONG>FRU_SAFT_13</STRONG> in the <STRONG>Single value</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:347,
        b_height:59,
        orientation:'E',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:532,
        b_height_p:68,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.652308, y:0.463386}, DocXY: {x:0.652308, y:0.448829}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 25, name: 'TS_D8D8573B9DAB4CF38B31789CA938AC92', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0170.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Single value',
        fieldicon:'field_icon_146.gif',
        text_d:'FRU_SAFT_15',
        explanation_d:'<FONT size=3>The fifth fruit juice&nbsp;<STRONG>FRU_SAFT_15</STRONG> is <STRONG>entered</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please enter the fifth friut juice <STRONG>FRU_SAFT_15</STRONG> in the <STRONG>Single value</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:325,
        b_height:60,
        orientation:'E',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:524,
        b_height_p:68,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.649409, y:0.461967}, DocXY: {x:0.649409, y:0.447471}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 26, name: 'TS_97C21D598F51478D88FEDF184FF3B7E6', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0172.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Single value',
        fieldicon:'field_icon_147.gif',
        text_d:'FRU_SAFT_16',
        explanation_d:'<FONT size=3>The sixth fruit juice&nbsp;<STRONG>FRU_SAFT_16</STRONG> is <STRONG>entered</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please enter the sixth friut juice <STRONG>FRU_SAFT_16</STRONG> in the <STRONG>Single value</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:324,
        b_height:63,
        orientation:'E',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:522,
        b_height_p:68,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.638636, y:0.473213}, DocXY: {x:0.638636, y:0.458366}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 27, name: 'TS_BBB26FDED2FA4C079D8CE41AAC650F5E', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0175.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Single value',
        fieldicon:'field_icon_149.gif',
        text_d:'FRU_ICETEA_17',
        explanation_d:'<FONT size=3>The&nbsp;ice tea&nbsp;<STRONG>FRU_ICETEA_17</STRONG> is <STRONG>entered</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please enter the ice tea <STRONG>FRU_ICETEA_17</STRONG> in the <STRONG>Single value</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:279,
        b_height:55,
        orientation:'E',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:496,
        b_height_p:70,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.651362, y:0.449302}, DocXY: {x:0.651362, y:0.435203}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 28, name: 'TS_160B8191D91C41659ACE5F63BA947243', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0176.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Copy',
        fieldicon:'field_icon_150.gif',
        explanation_d:'<FONT size=3>The multiple selection visible is <STRONG>accepted</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please <STRONG>accept</STRONG> the multiple selection visible by pressing </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_150.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:341,
        b_height:60,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:464,
        b_height_p:64,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.628901, y:0.476051}, DocXY: {x:0.628901, y:0.461082}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 29, name: 'TS_8DF37AE251D54081963DB142890A734E', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0177.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:' ',
        fieldicon:'field_icon_151.gif',
        explanation_d:'<FONT size=3>All selections have been made and the aggregate group is <STRONG>saved</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>You have made all selections and are now ready to <STRONG>save</STRONG> the aggregate group by pressing </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_151.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:556,
        b_height:58,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.0351568, y:0.271809}, DocXY: {x:0.0351568, y:0.263264}, Off: {x:5, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:430,
        b_height_p:83,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.659174, y:0.481697}, DocXY: {x:0.659174, y:0.46656}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0031(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 30, name: 'TS_523796AED0334099A2101269CA89D079', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0178.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Selection description',
        fieldicon:'field_icon_152.gif',
        text_d:'FRU_CONST1_DP',
        explanation_d:'<FONT size=3>The <STRONG>Selection description</STRONG> can be chosen freely. It gives the aggregate group a name. The group is called <STRONG>FRU_CONST1_DP</STRONG>, as it represents products with a steady demand.</FONT>',
        explanation_p:'<FONT size=3>Please enter <STRONG>FRU_CONST1_DP</STRONG> in the <STRONG>Selection description</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:542,
        b_height:104,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:446,
        b_height_p:64,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.635737, y:0.461967}, DocXY: {x:0.635737, y:0.447471}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 31, name: 'TS_55D1F42133914F77A36DD66DC4044ABF', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0179.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Save',
        fieldicon:'field_icon_153.gif',
        explanation_d:'<FONT size=3>The aggregate group is now <STRONG>saved</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please <STRONG>save</STRONG> the aggregate group by pressing </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_153.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:285,
        b_height:60,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:398,
        b_height_p:64,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.628901, y:0.469017}, DocXY: {x:0.628901, y:0.454292}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 32, name: 'TS_9FEAE37157D64106A985CF7DABC383C2', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0180.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'field_icon_154.gif',
        explanation_d:'<FONT size=3>To create the next aggregate group the same template is used. In this way only the selection <STRONG>APO Product</STRONG> has to be <STRONG>changed</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>You can use the same template for the next aggregate group. Only <STRONG>change</STRONG> the APO Product selection by pressing </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_154.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:411,
        b_height:106,
        orientation:'E',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.44239, y:0.416907}, DocXY: {x:0.44239, y:0.403815}, Off: {x:-4, y:8}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:496,
        b_height_p:82,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.642573, y:0.461967}, DocXY: {x:0.642573, y:0.447471}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 33, name: 'TS_30B534BD3CB54915ABCD207A50FB4DED', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0182.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Single value',
        fieldicon:'field_icon_155.gif',
        text_d:'FRU_SAFT_03',
        explanation_d:'<FONT size=3>This aggregate group contains one fruit juice and one ice tea. The&nbsp;fruit juice is called <STRONG>FRU_SAFT_03</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please enter&nbsp;the friut juice <STRONG>FRU_SAFT_03</STRONG> in the <STRONG>Single value</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:419,
        b_height:79,
        orientation:'E',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:504,
        b_height_p:70,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.625971, y:0.473213}, DocXY: {x:0.625971, y:0.458366}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 34, name: 'TS_016A3E7DE3D94C7B9A284CF66E7EFDB3', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0185.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Single value',
        fieldicon:'field_icon_157.gif',
        text_d:'FRU_ICETEA_19',
        explanation_d:'<FONT size=3>The&nbsp;ice tea&nbsp;<STRONG>FRU_ICETEA_19</STRONG> is <STRONG>entered</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please enter the ice tea <STRONG>FRU_ICETEA_19</STRONG> in the <STRONG>Single value</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:314,
        b_height:58,
        orientation:'E',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:470,
        b_height_p:66,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.638636, y:0.460548}, DocXY: {x:0.638636, y:0.446113}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 35, name: 'TS_62627F6DF3904793BF426EDAD94EFB3A', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0186.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Single value',
        fieldicon:'field_icon_158.gif',
        explanation_d:'<FONT size=3>All remaining products are <STRONG>deleted</STRONG> from the selection.</FONT>',
        explanation_p:'<FONT size=3>In order to <STRONG>delete</STRONG> a product from the selection please click in the according&nbsp;<STRONG>Single value</STRONG> box&nbsp;to activate it.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:410,
        b_height:60,
        orientation:'E',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:470,
        b_height_p:66,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.609354, y:0.461967}, DocXY: {x:0.609354, y:0.447471}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 36, name: 'TS_478F36D9FEC845D5BCFBA56EFA773CC1', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0187.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Delete selection criterion',
        fieldicon:'field_icon_159.gif',
        explanation_d:'<FONT size=3>The product highlighted is now <STRONG>deleted</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>In order to <STRONG>delete</STRONG>&nbsp;this product from the selection please press </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_159.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:318,
        b_height:52,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:492,
        b_height_p:64,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.612299, y:0.469017}, DocXY: {x:0.612299, y:0.454292}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 37, name: 'TS_33451A66F8844E3E885C53A168AA8A84', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0188.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Delete selection criterion',
        fieldicon:'field_icon_160.gif',
        explanation_d:'<FONT size=3>The product highlighted is now <STRONG>deleted</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>In order to <STRONG>delete</STRONG>&nbsp;this product from the selection please press </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_160.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:325,
        b_height:59,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:494,
        b_height_p:64,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.63769, y:0.46479}, DocXY: {x:0.63769, y:0.450187}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 38, name: 'TS_4788173CA15D4B6B9F1321E1F7760B37', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0189.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Delete selection criterion',
        fieldicon:'field_icon_161.gif',
        explanation_d:'<FONT size=3>The product highlighted is now <STRONG>deleted</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>In order to <STRONG>delete</STRONG>&nbsp;this product from the selection please press </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_161.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:319,
        b_height:62,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.160159, y:0.67039}, DocXY: {x:0.160159, y:0.649363}, Off: {x:7, y:-5}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:506,
        b_height_p:64,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.597635, y:0.456306}, DocXY: {x:0.597635, y:0.441993}},
        click_count:1,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 39, name: 'TS_9E2D1AF0845E450894C8BA7F02C765CC', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0190.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Delete selection criterion',
        fieldicon:'field_icon_162.gif',
        explanation_d:'<FONT size=3>The product highlighted is now <STRONG>deleted</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>In order to <STRONG>delete</STRONG>&nbsp;this product from the selection please press </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_162.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:315,
        b_height:72,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:508,
        b_height_p:64,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.582971, y:0.461967}, DocXY: {x:0.582971, y:0.447471}},
        click_count:1,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 40, name: 'TS_4978A4B333184FA79DE6546B25D02E93', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0191.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Delete selection criterion',
        fieldicon:'field_icon_163.gif',
        explanation_d:'<FONT size=3>The product highlighted is now <STRONG>deleted</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>In order to <STRONG>delete</STRONG>&nbsp;this product from the selection please press </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_163.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:318,
        b_height:59,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:522,
        b_height_p:64,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.626917, y:0.457725}, DocXY: {x:0.626917, y:0.443351}},
        click_count:1,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 41, name: 'TS_1E7B3DCF27CA4B6A92286CDDF6A13E9D', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0192.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Copy',
        fieldicon:'field_icon_164.gif',
        explanation_d:'<FONT size=3>The multiple selection visible is <STRONG>accepted</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please <STRONG>accept</STRONG> the multiple selection visible by pressing </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_164.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:352,
        b_height:60,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:482,
        b_height_p:64,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.639643, y:0.461967}, DocXY: {x:0.639643, y:0.447471}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0043(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 42, name: 'TS_F5C30CBA90564AE1849F56F836846963', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0193.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:' ',
        fieldicon:'field_icon_165.gif',
        explanation_d:'<FONT size=3>All selections have been made and the aggregate group is <STRONG>saved</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>You have made all selections and are now ready to <STRONG>save</STRONG> the aggregate group by pressing </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_165.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:529,
        b_height:57,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:712,
        b_height_p:65,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.558587, y:0.523934}, DocXY: {x:0.558587, y:0.5075}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 43, name: 'TS_846F351B8B0E41D0860A06BE19FE77B2', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0194.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.input_radio(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Create new selection',
        fieldicon:'field_icon_166.gif',
        choose_bool:'1',
        explanation_d:'<FONT size=3>A <STRONG>new selection</STRONG> is <STRONG>created</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please select <STRONG>Create new selection</STRONG>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:233,
        b_height:61,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.0263676, y:0.326757}, DocXY: {x:0.0263676, y:0.316503}, Off: {x:4, y:13}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:276,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.467781, y:0.540841}, DocXY: {x:0.467781, y:0.523873}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 44, name: 'TS_B7FC5BC465AB45988189EB7FBBF27D7C', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0195.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Name:',
        fieldicon:'field_icon_167.gif',
        text_d:'FRU_CONST2_DP',
        explanation_d:'<FONT size=3>The new aggregate group is called <STRONG>FRU_CONST2_DP</STRONG>, as it is the second group to represent products with a steady demand.</FONT>',
        explanation_p:'<FONT size=3>Please enter <STRONG>FRU_CONST2_DP</STRONG> in the <STRONG>Name</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:468,
        b_height:84,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:364,
        b_height_p:70,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.524407, y:0.538018}, DocXY: {x:0.524407, y:0.521111}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 45, name: 'TS_8E2DD52E9733467D94EA71387103EDC6', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0196.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Save',
        fieldicon:'field_icon_168.gif',
        explanation_d:'<FONT size=3>The aggregate group is now <STRONG>saved</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please <STRONG>save</STRONG> the aggregate group by pressing </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_168.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:291,
        b_height:55,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.0380865, y:0.398581}, DocXY: {x:0.0380865, y:0.386084}, Off: {x:2, y:12}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:384,
        b_height_p:64,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.475578, y:0.525353}, DocXY: {x:0.475578, y:0.508858}},
        click_count:1,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 46, name: 'TS_1357412ED8F14A2DBE5F5D096C9671AA', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0197.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'field_icon_169.gif',
        explanation_d:'<FONT size=3>This process is now repeated three more times. For more information view the first two aggregate groups.</FONT>',
        explanation_p:'<FONT size=3>This process is repeated three more times.</FONT>\n<P></P>\n<P><FONT size=3><STRONG>Change</STRONG> the APO Product selection by pressing </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_169.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:436,
        b_height:81,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.445289, y:0.416907}, DocXY: {x:0.445289, y:0.403815}, Off: {x:6, y:11}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:440,
        b_height_p:95,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.536126, y:0.54786}, DocXY: {x:0.536126, y:0.530694}},
        click_count:1,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 47, name: 'TS_68DC7E3A61EF454794EA52A76BD062FA', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0199.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Single value',
        fieldicon:'field_icon_170.gif',
        text_d:'FRU_SAFT_18',
        explanation_d:'<FONT size=3>This aggregate group contains one fruit juice which is called <STRONG>FRU_SAFT_18</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please enter&nbsp;the friut juice <STRONG>FRU_SAFT_18</STRONG> in the <STRONG>Single value</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:342,
        b_height:83,
        orientation:'E',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:464,
        b_height_p:66,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.614252, y:0.450706}, DocXY: {x:0.614252, y:0.436561}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 48, name: 'TS_919D361D48E6436284C0A9FE5EAF4B4D', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0200.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Single value',
        fieldicon:'field_icon_171.gif',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>Please click in the according&nbsp;<STRONG>Single value</STRONG> box&nbsp;to activate it.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.03122, y:0.960571}, DocXY: {x:0.03122, y:0.930419}, Off: {x:4, y:8}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:460,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.597635, y:0.443641}, DocXY: {x:0.597635, y:0.42974}},
        click_count:1,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 49, name: 'TS_8F9B7A6C60BB412CBD286D9CC000FF8A', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0201.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Delete selection criterion',
        fieldicon:'field_icon_172.gif',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>In order to <STRONG>delete</STRONG>&nbsp;this product from the selection please press </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_172.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.0478218, y:0.961975}, DocXY: {x:0.0478218, y:0.931777}, Off: {x:2, y:8}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:498,
        b_height_p:64,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.517571, y:0.515496}, DocXY: {x:0.517571, y:0.499321}},
        click_count:1,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 50, name: 'TS_79679BE9373941D1853367276B1B60F0', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0202.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Copy',
        fieldicon:'field_icon_173.gif',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>Please <STRONG>accept</STRONG> the multiple selection visible by pressing </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_173.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.03122, y:0.963348}, DocXY: {x:0.03122, y:0.933135}, Off: {x:3, y:4}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:454,
        b_height_p:64,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.615198, y:0.46479}, DocXY: {x:0.615198, y:0.450187}},
        click_count:1,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 51, name: 'TS_3DBCFF4DC4874BFA9B396384088362E3', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0203.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:' ',
        fieldicon:'field_icon_174.gif',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>You have made all selections and are now ready to <STRONG>save</STRONG> the aggregate group by pressing </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_174.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.0302739, y:0.961975}, DocXY: {x:0.0302739, y:0.931777}, Off: {x:-5, y:-1}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:726,
        b_height_p:65,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.596674, y:0.509865}, DocXY: {x:0.596674, y:0.493843}},
        click_count:1,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 52, name: 'TS_93AE2397522D4EBA9ECF4B2363421309', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0204.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.input_radio(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Create new selection',
        fieldicon:'field_icon_175.gif',
        choose_bool:'1',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>Please select <STRONG>Create new selection</STRONG>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.0351568, y:0.964767}, DocXY: {x:0.0351568, y:0.934478}, Off: {x:0, y:4}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:292,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.511681, y:0.518288}, DocXY: {x:0.511681, y:0.502022}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 53, name: 'TS_73C2965FD8D547F3A503B9C3AA5067FD', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0205.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Name:',
        fieldicon:'field_icon_176.gif',
        text_d:'FRU_CONST3_DP',
        explanation_d:'<FONT size=3>This&nbsp;aggregate group is called <STRONG>FRU_CONST3_DP</STRONG>, as it is the third group to represent products with a steady demand.</FONT>',
        explanation_p:'<FONT size=3>Please enter <STRONG>FRU_CONST3_DP</STRONG> in the <STRONG>Name</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:501,
        b_height:84,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:394,
        b_height_p:76,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.540017, y:0.52253}, DocXY: {x:0.540017, y:0.506142}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 54, name: 'TS_67B5F833D2C041439BAECD7BCAA8B77D', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0206.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Save',
        fieldicon:'field_icon_177.gif',
        explanation_d:'<FONT size=3>The aggregate group is now <STRONG>saved</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please <STRONG>save</STRONG> the aggregate group by pressing </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_177.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:279,
        b_height:64,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:398,
        b_height_p:64,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.582025, y:0.540841}, DocXY: {x:0.582025, y:0.523873}},
        click_count:1,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 55, name: 'TS_FD1116FD2CCC4372B6EC940FA30B626A', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0207.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'field_icon_178.gif',
        explanation_d:'<FONT size=3>The first aggregate group for products with seasonal demand is now created.</FONT>',
        explanation_p:'<FONT size=3><STRONG>Change</STRONG> the APO Product selection by pressing </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_178.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:396,
        b_height:76,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.44239, y:0.416907}, DocXY: {x:0.44239, y:0.403815}, Off: {x:6, y:15}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:400,
        b_height_p:64,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.509743, y:0.528176}, DocXY: {x:0.509743, y:0.511574}},
        click_count:1,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 56, name: 'TS_3E39C08FD253443E96742278AC563A1D', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0209.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Single value',
        fieldicon:'field_icon_179.gif',
        text_d:'FRU_SAFT_01',
        explanation_d:'<FONT size=3>This aggregate group contains two fruit juices and two ice teas. The&nbsp;first fruit juice is called <STRONG>FRU_SAFT_01</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please enter&nbsp;the first friut juice <STRONG>FRU_SAFT_01</STRONG> in the <STRONG>Single value</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:430,
        b_height:84,
        orientation:'E',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:522,
        b_height_p:66,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.626917, y:0.46479}, DocXY: {x:0.626917, y:0.450187}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0058(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 57, name: 'TS_429ABB075D774EEE90BA9779D1B4D38A', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0211.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Single value',
        fieldicon:'field_icon_180.gif',
        text_d:'FRU_ICETEA_04',
        explanation_d:'<FONT size=3>The&nbsp;first ice tea&nbsp;<STRONG>FRU_ICETEA_04</STRONG> is <STRONG>entered</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please enter&nbsp;the first ice tea&nbsp;<STRONG>FRU_ICETEA_04</STRONG> in the <STRONG>Single value</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:333,
        b_height:54,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:514,
        b_height_p:68,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.61619, y:0.460548}, DocXY: {x:0.61619, y:0.446113}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 58, name: 'TS_E2874D8960E7449CB123D106B9B33CD4', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0213.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Single value',
        fieldicon:'field_icon_181.gif',
        text_d:'FRU_ICETEA_06',
        explanation_d:'<FONT size=3>The&nbsp;second ice tea&nbsp;<STRONG>FRU_ICETEA_06</STRONG> is <STRONG>entered</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please enter&nbsp;the second ice tea&nbsp;<STRONG>FRU_ICETEA_06</STRONG> in the <STRONG>Single value</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:352,
        b_height:60,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:546,
        b_height_p:68,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.614252, y:0.494362}, DocXY: {x:0.614252, y:0.478859}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 59, name: 'TS_D2CD4FE4305E4EF88AA87BC186A0F1DC', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0215.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Single value',
        fieldicon:'field_icon_182.gif',
        text_d:'FRU_SAFT_10',
        explanation_d:'<FONT size=3>The&nbsp;second fruit juice <STRONG>FRU_SAFT_10</STRONG> is <STRONG>entered</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please enter&nbsp;the second friut juice <STRONG>FRU_SAFT_10</STRONG> in the <STRONG>Single value</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:356,
        b_height:60,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:518,
        b_height_p:68,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.629862, y:0.457725}, DocXY: {x:0.629862, y:0.443351}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 60, name: 'TS_DC8956C56CBB4801B3176B32D2F5DF65', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0216.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Copy',
        fieldicon:'field_icon_183.gif',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>Please <STRONG>accept</STRONG> the multiple selection visible by pressing </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_183.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.0371099, y:0.960571}, DocXY: {x:0.0371099, y:0.930419}, Off: {x:-1, y:5}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:468,
        b_height_p:64,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.607416, y:0.471809}, DocXY: {x:0.607416, y:0.457023}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 61, name: 'TS_2D2BAE51EE4B4B6E92ABC0403F4BE46C', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0217.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:' ',
        fieldicon:'field_icon_184.gif',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>You have made all selections and are now ready to <STRONG>save</STRONG> the aggregate group by pressing </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_184.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.0302739, y:0.961975}, DocXY: {x:0.0302739, y:0.931777}, Off: {x:0, y:7}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:736,
        b_height_p:65,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.583963, y:0.546441}, DocXY: {x:0.583963, y:0.529305}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 62, name: 'TS_D48775246C0A40D3A5F01D655C052F00', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0218.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.input_radio(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Create new selection',
        fieldicon:'field_icon_185.gif',
        choose_bool:'1',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>Please select <STRONG>Create new selection</STRONG>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.0292668, y:0.964767}, DocXY: {x:0.0292668, y:0.934478}, Off: {x:1, y:4}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:286,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.521462, y:0.539437}, DocXY: {x:0.521462, y:0.522515}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 63, name: 'TS_647E13174CAB40EC853875E411821F3F', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0219.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Name:',
        fieldicon:'field_icon_186.gif',
        text_d:'FRU_SEASON1_DP',
        explanation_d:'<FONT size=3>This&nbsp;aggregate group is called <STRONG>FRU_SEASON1_DP</STRONG>, as it is the first group to represent products with a seasonal demand.</FONT>',
        explanation_p:'<FONT size=3>Please enter <STRONG>FRU_SEASON1_DP</STRONG> in the <STRONG>Name</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:380,
        b_height:109,
        orientation:'E',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:360,
        b_height_p:70,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.506798, y:0.543664}, DocXY: {x:0.506798, y:0.526589}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 64, name: 'TS_1946D627B0DC420B966F639B51134FC4', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0220.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Save',
        fieldicon:'field_icon_187.gif',
        explanation_d:'<FONT size=3>The aggregate group is now <STRONG>saved</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please <STRONG>save</STRONG> the aggregate group by pressing </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_187.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:280,
        b_height:60,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:394,
        b_height_p:64,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.602518, y:0.533776}, DocXY: {x:0.602518, y:0.517052}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0066(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 65, name: 'TS_0BFF5E93CAE146D69697E9E4AB4A2369', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0221.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'field_icon_188.gif',
        explanation_d:'<FONT size=3>The second aggregate group for products with seasonal demand is now created.</FONT>',
        explanation_p:'<FONT size=3><STRONG>Change</STRONG> the APO Product selection by pressing </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_188.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:350,
        b_height:84,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.445289, y:0.422538}, DocXY: {x:0.445289, y:0.409247}, Off: {x:5, y:6}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:396,
        b_height_p:64,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.531243, y:0.539437}, DocXY: {x:0.531243, y:0.522515}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 66, name: 'TS_2D37AD566D92440FA36E3B9142CF064D', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0223.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Single value',
        fieldicon:'field_icon_189.gif',
        text_d:'FRU_SAFT_07',
        explanation_d:'<FONT size=3>This aggregate group contains three fruit juices and two ice teas. The&nbsp;first fruit juice is called <STRONG>FRU_SAFT_07</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please enter&nbsp;the first friut juice <STRONG>FRU_SAFT_07</STRONG> in the <STRONG>Single value</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:431,
        b_height:84,
        orientation:'E',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:524,
        b_height_p:68,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.639643, y:0.461967}, DocXY: {x:0.639643, y:0.447471}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 67, name: 'TS_4B7A9B4D55A94E86AD2ACE192E0BFF5C', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0225.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Single value',
        fieldicon:'field_icon_190.gif',
        text_d:'FRU_ICETEA_08',
        explanation_d:'<FONT size=3>The&nbsp;first ice tea&nbsp;<STRONG>FRU_ICETEA_08</STRONG> is <STRONG>entered</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please enter&nbsp;the first ice tea <STRONG>FRU_ICETEA_08</STRONG> in the <STRONG>Single value</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:318,
        b_height:60,
        orientation:'E',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:508,
        b_height_p:64,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.643534, y:0.453529}, DocXY: {x:0.643534, y:0.439292}},
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0069(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 68, name: 'TS_AB53FD26E0AC4345A7D331162156A783', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0227.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Single value',
        fieldicon:'field_icon_191.gif',
        text_d:'FRU_ICETEA_09',
        explanation_d:'<FONT size=3>The&nbsp;second ice tea&nbsp;<STRONG>FRU_ICETEA_09</STRONG> is <STRONG>entered</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please enter&nbsp;the second ice tea <STRONG>FRU_ICETEA_09</STRONG> in the <STRONG>Single value</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:348,
        b_height:61,
        orientation:'E',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:552,
        b_height_p:68,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.6318, y:0.474632}, DocXY: {x:0.6318, y:0.459724}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 69, name: 'TS_EFBBC0E9255949B7922AD9ED660D5739', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0229.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Single value',
        fieldicon:'field_icon_192.gif',
        text_d:'FRU_SAFT_11',
        explanation_d:'<FONT size=3>The&nbsp;second fruit juice&nbsp;<STRONG>FRU_SAFT_11</STRONG> is <STRONG>entered</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please enter&nbsp;the second friut juice <STRONG>FRU_SAFT_11</STRONG> in the <STRONG>Single value</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:354,
        b_height:60,
        orientation:'E',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:566,
        b_height_p:66,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.617182, y:0.463386}, DocXY: {x:0.617182, y:0.448829}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 70, name: 'TS_7DB10EF2A5414595A5790575EAB2B80F', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0231.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Single value',
        fieldicon:'field_icon_193.gif',
        text_d:'FRU_SAFT_14',
        explanation_d:'<FONT size=3>The&nbsp;third fruit juice&nbsp;<STRONG>FRU_SAFT_14</STRONG> is <STRONG>entered</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please enter&nbsp;the third friut juice <STRONG>FRU_SAFT_14</STRONG> in the <STRONG>Single value</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:342,
        b_height:58,
        orientation:'E',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:546,
        b_height_p:66,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.618143, y:0.467613}, DocXY: {x:0.618143, y:0.452934}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 71, name: 'TS_777318AF35AB48E6A581727A65F8CA28', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0232.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Copy',
        fieldicon:'field_icon_194.gif',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>Please <STRONG>accept</STRONG> the multiple selection visible by pressing </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_194.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.034165, y:0.960571}, DocXY: {x:0.034165, y:0.930419}, Off: {x:2, y:5}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:468,
        b_height_p:64,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.607416, y:0.45211}, DocXY: {x:0.607416, y:0.437934}},
        click_count:1,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 72, name: 'TS_848D934345014D11A3FDED16203BA0E3', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0233.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:' ',
        fieldicon:'field_icon_195.gif',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>You have made all selections and are now ready to <STRONG>save</STRONG> the aggregate group by pressing </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_195.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.03122, y:0.963348}, DocXY: {x:0.03122, y:0.933135}, Off: {x:2, y:4}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:702,
        b_height_p:65,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.628901, y:0.487297}, DocXY: {x:0.628901, y:0.472038}},
        click_count:1,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 73, name: 'TS_B8E6EA589F6B4AED92446CFEB47813AA', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0234.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.input_radio(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Create new selection',
        fieldicon:'field_icon_196.gif',
        choose_bool:'1',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>Please select <STRONG>Create new selection</STRONG>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.0351568, y:0.964767}, DocXY: {x:0.0351568, y:0.934478}, Off: {x:1, y:8}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:280,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.503899, y:0.52958}, DocXY: {x:0.503899, y:0.512963}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 74, name: 'TS_CA911DAE6D364F2D9A7DF9D67752AEDD', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0235.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Name:',
        fieldicon:'field_icon_197.gif',
        text_d:'FRU_SEASON2_DP',
        explanation_d:'<FONT size=3>This&nbsp;aggregate group is called <STRONG>FRU_SEASON2_DP</STRONG>, as it is the second group to represent products with a seasonal demand.</FONT>',
        explanation_p:'<FONT size=3>Please enter <STRONG>FRU_SEASON21_DP</STRONG> in the <STRONG>Name</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:390,
        b_height:104,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:410,
        b_height_p:72,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('', '', 0, 0, ''), XY: {x:0.499962, y:0.499962}, DocXY: {x:0.499962, y:0.499962}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 75, name: 'TS_FECEAD1901964403A2CFB789845F7CC2', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0236.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Save',
        fieldicon:'field_icon_198.gif',
        explanation_d:'<FONT size=3>The aggregate group is now <STRONG>saved</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please <STRONG>save</STRONG> the aggregate group by pressing </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_198.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:285,
        b_height:60,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:404,
        b_height_p:64,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.572244, y:0.532357}, DocXY: {x:0.572244, y:0.515694}},
        click_count:1,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 76, name: 'TS_7DA96BF62B774CE782C76B0B103D6395', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0237.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Adopt',
        fieldicon:'field_icon_199.gif',
        explanation_d:'<FONT size=3>All aggregate groups have been created and the template is <STRONG>closed</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please <STRONG>close</STRONG> the template by pressing&nbsp;</FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_199.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:525,
        b_height:54,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.03122, y:0.516869}, DocXY: {x:0.03122, y:0.500664}, Off: {x:8, y:17}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:348,
        b_height_p:64,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.456062, y:0.52253}, DocXY: {x:0.456062, y:0.506142}},
        click_count:1,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 77, name: 'TS_C1222D01C846482B8E0E3C362E7B955E', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0238.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'field_icon_200.gif',
        explanation_d:'<FONT size=3>The selections which have just been created need to be assigned to the profile currently being used. In order to assign the selections the <STRONG>Selection profile</STRONG> is <STRONG>opened</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>You have successfully created the needed selections. In order to assign these selections to your profile <STRONG>open</STRONG> the <STRONG>Selection profile</STRONG> by clicking on it.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:495,
        b_height:102,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.395514, y:0.39292}, DocXY: {x:0.395514, y:0.380606}, Off: {x:6, y:3}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:574,
        b_height_p:76,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.634745, y:0.52253}, DocXY: {x:0.634745, y:0.506142}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0079(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 78, name: 'TS_BD134C24B3C74E86B7F4858AD3E2C9D5', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0239.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Reference',
        fieldicon:'field_icon_201.gif',
        explanation_d:'<FONT size=3>The screen already shows the selections that are going to be assigned. In order to view only the selections of the currently used&nbsp;planning book a list&nbsp; of <STRONG>References</STRONG> is <STRONG>opened</STRONG>.</FONT>',
        explanation_p:'<FONT size=3><STRONG>Open</STRONG> a list of References&nbsp;by clicking the according box.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:391,
        b_height:132,
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:1}, DocXY: {x:0, y:0}, Off: {x:-10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:422,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.766583, y:0.36759}, DocXY: {x:0.766583, y:0.356039}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 79, name: 'TS_8845F2D663C1403484230E435899F90F', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0240.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Selecions-IDs of FRU_DP_PLAN_DP',
        fieldicon:'field_icon_202.gif',
        explanation_d:'<FONT size=3>The selection ID\'s of the according planning book is <STRONG>selected</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Select the entry <STRONG>FRU_DP_PLAN_DP</STRONG> by clicking it.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:297,
        b_height:76,
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:350,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.764645, y:0.34786}, DocXY: {x:0.764645, y:0.336965}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 80, name: 'TS_D992B73C809C47BC996768AD9A56A982', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0241.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'FRU SEASON2 DP',
        fieldicon:'field_icon_203.gif',
        explanation_d:'<FONT size=3>The selection <STRONG>FRU_SEASON2_DP</STRONG> is <STRONG>activated</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please <STRONG>activate</STRONG> the selection <STRONG>FRU_SEASON2_DP</STRONG> by clicking on it.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:351,
        b_height:59,
        orientation:'SW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:492,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.604471, y:0.605631}, DocXY: {x:0.604471, y:0.586618}},
        click_count:1,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 81, name: 'TS_F33397DCE97B4EE49CFEE9BE6EBD8BA3', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0242.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'FRU SEASON2 DP',
        fieldicon:'field_icon_204.gif',
        explanation_d:'<FONT size=3>By <STRONG>dragging</STRONG> the active selection <STRONG>FRU_SEASON2_DP</STRONG> it is assigned to the master profile.</FONT>',
        explanation_p:'<FONT size=3>Please <STRONG>drag</STRONG> the active selection <STRONG>FRU_SEASON2_DP</STRONG>&nbsp;to the Master profile in order to assign it.</FONT>',
        action:'drag',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:395,
        b_height:84,
        orientation:'SW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:500,
        b_height_p:70,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.584955, y:0.614069}, DocXY: {x:0.584955, y:0.594812}},
        click_count:1,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 82, name: 'TS_1A4B62533C8045E09198913C91E68CA7', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0243.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'FRU SEASON1 DP',
        fieldicon:'field_icon_206.gif',
        explanation_d:'<FONT size=3>The selection <STRONG>FRU_SEASON1_DP</STRONG> is <STRONG>activated</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please <STRONG>activate</STRONG> the selection <STRONG>FRU_SEASON1_DP</STRONG> by clicking on it.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:352,
        b_height:59,
        orientation:'SW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:466,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.562463, y:0.605631}, DocXY: {x:0.562463, y:0.586618}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 83, name: 'TS_60F0E5565FB54782830F64D5E71FCC36', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0244.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'FRU SEASON1 DP',
        fieldicon:'field_icon_207.gif',
        explanation_d:'<FONT size=3>By <STRONG>dragging</STRONG> the active selection <STRONG>FRU_SEASON1_DP</STRONG> it is assigned to the master profile.</FONT>',
        explanation_p:'<FONT size=3>Please <STRONG>drag</STRONG> the active selection <STRONG>FRU_SEASON1_DP</STRONG> to the Master profile in order to assign it.</FONT>',
        action:'drag',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:376,
        b_height:83,
        orientation:'SW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:446,
        b_height_p:70,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.565408, y:0.616907}, DocXY: {x:0.565408, y:0.597513}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 84, name: 'TS_0D89223D4B0A4E37847DB538C3ECD9BF', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0245.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'FRU_CONST3_DP',
        fieldicon:'field_icon_209.gif',
        explanation_d:'<FONT size=3>The selection <STRONG>FRU_CONST3_DP</STRONG> is <STRONG>activated</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please <STRONG>activate</STRONG> the selection <STRONG>FRU_CONST3_DP</STRONG> by clicking on it.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:334,
        b_height:54,
        orientation:'SW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:470,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.585916, y:0.6}, DocXY: {x:0.585916, y:0.58114}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 85, name: 'TS_468B667A804449E1AB73BA30AB5C148A', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0246.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'FRU_CONST3_DP',
        fieldicon:'field_icon_210.gif',
        explanation_d:'<FONT size=3>By <STRONG>dragging</STRONG> the active selection <STRONG>FRU_CONST3_DP </STRONG>it is assigned to the master profile.</FONT>',
        explanation_p:'<FONT size=3>Please <STRONG>drag</STRONG> the active selection <STRONG>FRU_CONST3_DP</STRONG> to the Master profile in order to assign it.</FONT>',
        action:'drag',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:365,
        b_height:78,
        orientation:'SW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:392,
        b_height_p:66,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.597635, y:0.609827}, DocXY: {x:0.597635, y:0.590723}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 86, name: 'TS_1F63357B195740C6967F11C75D985A59', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0247.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'FRU_CONST2_DP',
        fieldicon:'field_icon_212.gif',
        explanation_d:'<FONT size=3>The selection <STRONG>FRU_CONST2_DP</STRONG> is <STRONG>activated</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please <STRONG>activate</STRONG> the selection <STRONG>FRU_CONST2_DP</STRONG> by clicking on it.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:347,
        b_height:55,
        orientation:'SW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:474,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.589807, y:0.618311}, DocXY: {x:0.589807, y:0.598871}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 87, name: 'TS_86EA291A28684278A9A36A739E61D846', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0248.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'FRU_CONST2_DP',
        fieldicon:'field_icon_213.gif',
        explanation_d:'<FONT size=3>By <STRONG>dragging</STRONG> the active selection <STRONG>FRU_CONST2_DP</STRONG> it is assigned to the master profile.</FONT>',
        explanation_p:'<FONT size=3>Please <STRONG>drag</STRONG> the active selection <STRONG>FRU_CONST2_DP</STRONG> to the Master profile in order to assign it.</FONT>',
        action:'drag',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:374,
        b_height:77,
        orientation:'SW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, 'eep_path=\"0:0:0:0:0:1:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"DIV\"};\r\neep_coll={n:\"\",i:0,ii:-1};\r\neep_parents=[{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_DIV_:DIV\";'), XY: {x:0, y:0}, DocXY: {x:0.389624, y:0.452934}, Off: {x:-11, y:9}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:408,
        b_height_p:62,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.588861, y:0.619715}, DocXY: {x:0.588861, y:0.600275}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 88, name: 'TS_D7A340271F2D45F188BE99668E78A227', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0249.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'FRU_CONST1_DP',
        fieldicon:'field_icon_215.gif',
        explanation_d:'<FONT size=3>The selection <STRONG>FRU_CONST1_DP</STRONG> is <STRONG>activated</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please <STRONG>activate</STRONG> the selection <STRONG>FRU_CONST1_DP</STRONG> by clicking on it.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:348,
        b_height:57,
        orientation:'SW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, 'eep_path=\"0:0:0:0:0:1:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"DIV\"};\r\neep_coll={n:\"\",i:0,ii:-1};\r\neep_parents=[{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_DIV_\";'), XY: {x:0, y:0}, DocXY: {x:0.389624, y:0.428382}, Off: {x:-15, y:17}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:468,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.602518, y:0.637995}, DocXY: {x:0.602518, y:0.618006}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0090(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 89, name: 'TS_374343B24BF4482CA30C558CDF297F67', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0250.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'FRU_CONST1_DP',
        fieldicon:'field_icon_216.gif',
        explanation_d:'<FONT size=3>By <STRONG>dragging</STRONG> the active selection <STRONG>FRU_CONST1_DP</STRONG> it is assigned to the master profile.</FONT>',
        explanation_p:'<FONT size=3>Please <STRONG>drag</STRONG> the active selection <STRONG>FRU_CONST1_DP</STRONG> to the Master profile in order to assign it.</FONT>',
        action:'drag',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:370,
        b_height:79,
        orientation:'SW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:438,
        b_height_p:68,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.636698, y:0.60705}, DocXY: {x:0.636698, y:0.587976}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 90, name: 'TS_5C95A45D64074895A648F817779338C2', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0251.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Save',
        fieldicon:'field_icon_218.gif',
        explanation_d:'<FONT size=3>The newly assigned selections are <STRONG>saved</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please <STRONG>save</STRONG> the newly assigned selections by pressing</FONT><B><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_218.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:324,
        b_height:58,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.0898299, y:0.960571}, DocXY: {x:0.0898299, y:0.930419}, Off: {x:10, y:-15}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:460,
        b_height_p:64,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.587854, y:0.623911}, DocXY: {x:0.587854, y:0.604349}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0092(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 91, name: 'TS_13FD10E108C64711AE9529FBD2A2FB7F', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0252.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Adopt',
        fieldicon:'field_icon_219.gif',
        explanation_d:'<FONT size=3>All aggregate groups have been assigned and saved. The&nbsp;template is <STRONG>closed</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please <STRONG>close</STRONG> the template by pressing&nbsp;</FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_219.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:351,
        b_height:82,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:368,
        b_height_p:64,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.581018, y:0.58732}, DocXY: {x:0.581018, y:0.568887}},
        click_count:1,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 92, name: 'TS_2B6EA1BA809643E1A609E4DF38C713E6', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0253.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3>This step of the demand planning process is finished. The aggregate groups&nbsp;for the demand planning module&nbsp;have been created and assigned to a profile. They are now visible under the selection profile.&nbsp;The following lesson deals with the calculation of the demand forecasts.</FONT>',
        type:'none',
        all_like_demo:0,
        explanation_p:'<FONT size=3>You have successfully created aggregate groups&nbsp;for the demand planning module. They are&nbsp;visible under the selection profile. The following step in the demand planning process is the calculation of the demand forecasts.</FONT>',
        in_demo:1,
        in_practice:1,
        in_test:1,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.564416, y:0.569009}, DocXY: {x:0.564416, y:0.551156}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:688,
        b_height:151,
        orientation:'C',
        b_duration:60,
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.554681, y:0.549264}, DocXY: {x:0.554681, y:0.532067}},
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:644,
        b_height_p:117,
        orientation_p:'C',
        b_duration_p:60
    });
    ctx.ms.end_unit(ctx, win_, 20, 10, {
        macro_comment:''
    });
    ctx.ms.end_tourstop(ctx, win_, 30 , {});
    win_.evt_simple(30,4000);
    win_.evt_simple(30,3902);
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
    content.userHeader['title'] = 'Create Productaggregates';
    content.userHeader['author'] = 'Christopher Haub';
    content.userHeader['comment'] = '';
    content.userHeader['find_element'] = '////\r\nvar Eep_resolve;\r\nvar eep_resolveOptions={\r\neep_firstTextRe:null\r\n,eep_useText:true\r\n,eep_version:\'6.1.0\'};\r\nEep_resolve=function(xVh,xVG,XKF){\r\nvar XHZ=new Eep(xVh,eep_resolveOptions);\r\nreturn XHZ.eep_resolve(xVG,XKF);}\r\n\r\n/*\r\n  Copyright Notice:\r\n\r\n  Copyright 2000-2005 datango AG\r\n  ALL RIGHTS RESERVED\r\n\r\n  UNPUBLISHED -- Use of a copyright notice is precautionary only and\r\n  does not imply publication or disclosure.\r\n\r\n  THE CONTENT OF THIS WORK CONTAINS CONFIDENTIAL AND PROPRIETARY\r\n  INFORMATION OF DATANGO AG. ANY DUPLICATION, MODIFICATION,\r\n  DISTRIBUTION, OR DISCLOSURE IN ANY FORM, IN WHOLE, OR IN PART, IS\r\n  STRICTLY PROHIBITED WITHOUT THE PRIOR EXPRESS WRITTEN PERMISSION OF\r\n  DATANGO AG.\r\n\r\n*/';
    content.userHeader['start_script'] = '';
    content.userHeader['stop_script'] = '';
    content.userHeader['error_script'] = '';

    sub = new Object;
    sub.name = 'msglist_0001';
    sub.audio = '';
    sub.title = 'Start';
    sub.uid = 'TS_C7DF2F245F634B3C8C395F6AB7FDB956';
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
    sub.uid = 'TS_02F08EA15CB04589BE0282A91022D252';
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
    sub.uid = 'TS_A6F8D4AE7B534DD4B74FAC1BECDBDDBE';
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
    sub.uid = 'TS_DF2E58E675C9422DB71B928B7FCB2181';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 21;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0005';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANUNGSMAPPE DER FRUTADO AG / DATENSICHT DER FR';
    sub.uid = 'TS_CFA7207460B34264985CABF40B182038';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0006';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANUNGSMAPPE DER FRUTADO AG / DATENSICHT DER FR';
    sub.uid = 'TS_B5AB400D759E4FE78AD2E9E6751787AD';
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
    sub.uid = 'TS_FAB4D6F48D1E47B7A0DFB3F61E3BD278';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0008';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_EA94FAE532BA48088B2D399D79961A88';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0009';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_316E244665B947DBB8600326CBF36AE3';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0010';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_D7A2F1C348D54C80B2F7961FC400D763';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0011';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_B7667B10DE764CEE8A493CADBB77ED94';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0012';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_FF796E286BE14572840835A945FEF9A9';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0013';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_D3156B2BD17F4141B7865E477D933325';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0014';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_527254DC0E9949F6A1C14BF0224F21D0';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0015';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_A3FF86D025804D8B95B66FEB428E6581';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0016';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_8E5522C2E4C24095A12E673C57D81EA8';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0017';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_E700A7C0742F4F7E888C6FFA89A59FF7';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0018';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_9DFA6DC3CB7F419EB8A801E1B3D943E2';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0019';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_2FDD80224DD04B2B98DDE5249770FA1E';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0020';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_1D4A5354C2B54C8B9DBA14B2D2FA525B';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0021';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_5A94222CFD12497082CDADB240483CC7';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0022';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_9A7EB15A63C94FA58CE79F28D41EFE30';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0023';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_7B2E64514D7941D79EC6D81218167226';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0024';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_AA87C6C9E4F040EDA9FFB49B476F78A0';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0025';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_F7FE55B2CC3642C99A85563D9A3E6FB3';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0026';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_D8D8573B9DAB4CF38B31789CA938AC92';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0027';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_97C21D598F51478D88FEDF184FF3B7E6';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0028';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_BBB26FDED2FA4C079D8CE41AAC650F5E';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0029';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_160B8191D91C41659ACE5F63BA947243';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0030';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_8DF37AE251D54081963DB142890A734E';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0031';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_523796AED0334099A2101269CA89D079';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0032';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_55D1F42133914F77A36DD66DC4044ABF';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0033';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_9FEAE37157D64106A985CF7DABC383C2';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0034';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_30B534BD3CB54915ABCD207A50FB4DED';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0035';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_016A3E7DE3D94C7B9A284CF66E7EFDB3';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0036';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_62627F6DF3904793BF426EDAD94EFB3A';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0037';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_478F36D9FEC845D5BCFBA56EFA773CC1';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0038';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_33451A66F8844E3E885C53A168AA8A84';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0039';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_4788173CA15D4B6B9F1321E1F7760B37';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0040';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_9E2D1AF0845E450894C8BA7F02C765CC';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0041';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_4978A4B333184FA79DE6546B25D02E93';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0042';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_1E7B3DCF27CA4B6A92286CDDF6A13E9D';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0043';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_F5C30CBA90564AE1849F56F836846963';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0044';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_846F351B8B0E41D0860A06BE19FE77B2';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0045';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_B7FC5BC465AB45988189EB7FBBF27D7C';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0046';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_8E2DD52E9733467D94EA71387103EDC6';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0047';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_1357412ED8F14A2DBE5F5D096C9671AA';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0048';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_68DC7E3A61EF454794EA52A76BD062FA';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0049';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_919D361D48E6436284C0A9FE5EAF4B4D';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0050';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_8F9B7A6C60BB412CBD286D9CC000FF8A';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0051';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_79679BE9373941D1853367276B1B60F0';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0052';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_3DBCFF4DC4874BFA9B396384088362E3';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0053';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_93AE2397522D4EBA9ECF4B2363421309';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0054';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_73C2965FD8D547F3A503B9C3AA5067FD';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0055';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_67B5F833D2C041439BAECD7BCAA8B77D';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0056';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_FD1116FD2CCC4372B6EC940FA30B626A';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0057';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_3E39C08FD253443E96742278AC563A1D';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0058';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_429ABB075D774EEE90BA9779D1B4D38A';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0059';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_E2874D8960E7449CB123D106B9B33CD4';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0060';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_D2CD4FE4305E4EF88AA87BC186A0F1DC';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0061';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_DC8956C56CBB4801B3176B32D2F5DF65';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0062';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_2D2BAE51EE4B4B6E92ABC0403F4BE46C';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0063';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_D48775246C0A40D3A5F01D655C052F00';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0064';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_647E13174CAB40EC853875E411821F3F';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0065';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_1946D627B0DC420B966F639B51134FC4';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0066';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_0BFF5E93CAE146D69697E9E4AB4A2369';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0067';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_2D37AD566D92440FA36E3B9142CF064D';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0068';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_4B7A9B4D55A94E86AD2ACE192E0BFF5C';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0069';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_AB53FD26E0AC4345A7D331162156A783';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0070';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_EFBBC0E9255949B7922AD9ED660D5739';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0071';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_7DB10EF2A5414595A5790575EAB2B80F';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0072';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_777318AF35AB48E6A581727A65F8CA28';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0073';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_848D934345014D11A3FDED16203BA0E3';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0074';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_B8E6EA589F6B4AED92446CFEB47813AA';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0075';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_CA911DAE6D364F2D9A7DF9D67752AEDD';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0076';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_FECEAD1901964403A2CFB789845F7CC2';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0077';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_7DA96BF62B774CE782C76B0B103D6395';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0078';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_C1222D01C846482B8E0E3C362E7B955E';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0079';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_BD134C24B3C74E86B7F4858AD3E2C9D5';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0080';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_8845F2D663C1403484230E435899F90F';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0081';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_D992B73C809C47BC996768AD9A56A982';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0082';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_F33397DCE97B4EE49CFEE9BE6EBD8BA3';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0083';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_1A4B62533C8045E09198913C91E68CA7';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0084';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_60F0E5565FB54782830F64D5E71FCC36';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0085';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_0D89223D4B0A4E37847DB538C3ECD9BF';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0086';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_468B667A804449E1AB73BA30AB5C148A';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0087';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_1F63357B195740C6967F11C75D985A59';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0088';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_86EA291A28684278A9A36A739E61D846';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0089';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_D7A340271F2D45F188BE99668E78A227';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0090';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_374343B24BF4482CA30C558CDF297F67';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0091';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_5C95A45D64074895A648F817779338C2';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0092';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_13FD10E108C64711AE9529FBD2A2FB7F';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0093';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_2B6EA1BA809643E1A609E4DF38C713E6';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 30;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;

    return content;
}
