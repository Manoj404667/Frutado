
function msglist_0001(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 0, name: 'TS_A915BA71616E47219E1D86DF77CD2E96', label: 'Start', jumpable: 0, visible: 0, callable: 0});
    ctx.ms.start_unit(ctx, win_, 0, 10, {
        macro_comment:'',
        possible_points:78,
        mastery_score:62,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 1, name: 'TS_CBE3CDB4DE0D45C8B024DBEA18C4AF87', label: 'Navigation', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0000.html',
        new_step:'SAP Easy Access  mySAP Supply Chain Management'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT color=#fd0202 size=2><FONT color=#000000><FONT face=sans-serif size=5>\n<P align=center><FONT color=#fd0202 size=2><FONT color=#000000><U><FONT face=sans-serif size=5>Navigation</FONT><BR></U><STRONG><BR></STRONG><FONT size=3>Please use the arrow keys on your keyboard for navigation to the&nbsp;next and previous steps accordingly.<BR><BR><IMG src=\"../../SNP_Master_Data/Resource/pages/navigationkey.gif\"></FONT></FONT></FONT></P>\n<P align=center><FONT color=#fd0202><FONT color=#000000 size=3>right arrow = next topic<BR>left arrow = previous topic</FONT></FONT></P><FONT size=3>\n<P align=center><FONT size=3>(If the keys are not used, the next step is automatically shown after 60 seconds.)</FONT></FONT></FONT></FONT></FONT><FONT color=#fd0202><FONT color=#000000><FONT color=#fd0202><FONT color=#000000></P></FONT></FONT></FONT></FONT>',
        type:'none',
        in_demo:0,
        in_practice:0,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 2, name: 'TS_9EA745430CDC413EA31BC972A92D532F', label: 'Lesson Introduction', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0000.html',
        new_step:'SAP Easy Access  mySAP Supply Chain Management'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3><FONT size=4><STRONG>The SNP Planning Book - Demo</STRONG></FONT> </FONT>\n<P></P>\n<P><FONT size=3>In this lesson one of the most important tools for an SNP planner is presented, i. e. the <STRONG>\"Planning Book\"</STRONG>. You learn about the&nbsp;elements of a <STRONG>\"Planning Book\"</STRONG> and how to load the needed data.</FONT></P>\n<P><FONT size=3>Therefore, the data of the model is selected first. Then the data of the corresponding forecast is loaded into the book. The optimization process is shown in the following lesson <STRONG>\"The SNP Optimization Process\"</STRONG>.</FONT>',
        type:'none',
        all_like_demo:0,
        explanation_p:'',
        in_demo:1,
        in_practice:0,
        in_test:1,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.546853, y:0.574533}, DocXY: {x:0.546853, y:0.561166}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:548,
        b_height:317,
        orientation:'C',
        b_duration:60,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 3, name: 'TS_957A0AC1813D47798BF18EC8A2622188', label: 'SAP Easy Access  mySAP Supply Chain Management', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0000.html',
        new_step:'SAP Easy Access  mySAP Supply Chain Management'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Planning',
        fieldicon:'field_icon_00.gif',
        explanation_d:'<FONT size=3>Clicking on the <STRONG>\'Open folder\' </STRONG>icon opens the folder </FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>Planning</STRONG></FONT></SPAN><FONT size=3><STRONG>.</STRONG></FONT>',
        explanation_p:'<FONT size=3>Open the folder<STRONG> </STRONG></FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>Planning</STRONG></FONT></SPAN><FONT size=3><STRONG> </STRONG>by clicking on the <STRONG>\'Open folder\'</STRONG> icon.</FONT>',
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
        b_width_p:230,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.882811, y:0.205997}, DocXY: {x:0.882811, y:0.201221}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 4, name: 'TS_2FF85FD87DF249DA94F4F7EAC04D6274', label: 'SAP Easy Access  mySAP Supply Chain Management', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0001.html',
        new_step:'SAP Easy Access  mySAP Supply Chain Management'
    });
    ctx.ms.transaction_info(ctx, win_, 10, 1, {
        macro_comment:'',
        tcode:'/SAPAPO/SDP94 - Interactive Supply Network Planning (all Books)'
    });
    ctx.ms.click(ctx, win_, 11, 10, {
        macro_comment:'',
        fieldname:'/SAPAPO/SDP94 - Interactive Supply Network Planning (all Books)',
        fieldicon:'field_icon_01.gif',
        explanation_d:'<FONT size=3>The transaction </FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>/SAPAPO/SDP94 - Interactive Supply Network Planning (all Books)</STRONG></FONT></SPAN><FONT size=3><STRONG> </STRONG>is started by double-clicking it.</FONT>',
        explanation_p:'<FONT size=3>Start the transaction </FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>/SAPAPO/SDP94 - Interactive Supply Network Planning (all Books)</STRONG></FONT></SPAN><FONT size=3><STRONG> </STRONG>by double clicking it.</FONT>',
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
        b_width_p:230,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.882811, y:0.205997}, DocXY: {x:0.882811, y:0.201221}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 5, name: 'TS_EA8CC886380345C5B20322C7BE3BDEE0', label: 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0002.html',
        new_step:'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3><STRONG>Planning Book - Overview</STRONG> </FONT>\n<P></P>\n<P><FONT size=3>After having made your selection you can navigate here to single location products or to the capacity view of the resources.</FONT>',
        type:'none',
        explanation_p:'',
        in_demo:1,
        in_practice:0,
        in_test:0,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, '[execScript: 80070005]'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.191394, y:0.368536}, DocXY: {x:0.191394, y:0.35993}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:600,
        b_height:174,
        orientation:'SE',
        b_duration:-1,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado'
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0007(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 6, name: 'TS_31F9E5D0F3074F5E95678866811F9C37', label: 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0002.html',
        new_step:'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3><STRONG>Planning Book - Overview</STRONG> </FONT>\n<P></P>\n<P><FONT size=3>This is the Interactive Planning Grid that displays the overall plan for the selected objects after having loaded the&nbsp;data and run&nbsp;the&nbsp;optimizer.</FONT>',
        type:'none',
        explanation_p:'',
        in_demo:1,
        in_practice:0,
        in_test:0,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, '[execScript: 80070005]'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.74374, y:0.406821}, DocXY: {x:0.74374, y:0.397345}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:598,
        b_height:178,
        orientation:'SW',
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 7, name: 'TS_E29EA8BF2184401686B00099FF9AE11E', label: 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0002.html',
        new_step:'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3><STRONG>Planning Book - Overview</STRONG> </FONT>\n<P></P>\n<P>\n<P></P><FONT size=3>In this frame you can choose your&nbsp;predefined selections. How&nbsp;to create such selections is shown in the next steps of this lesson.</FONT>',
        type:'none',
        explanation_p:'',
        in_demo:1,
        in_practice:0,
        in_test:0,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, '[execScript: 80070005]'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.192966, y:0.514458}, DocXY: {x:0.192966, y:0.502495}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:570,
        b_height:166,
        orientation:'E',
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 8, name: 'TS_560F5D893D5E4AD59FAF1642481AC059', label: 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0002.html',
        new_step:'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3><STRONG>Planning Book - Overview</STRONG> </FONT>\n<P></P>\n<P>\n<P></P><FONT size=3>Here you can select the planning book and data view. The Frutado Planning Book is based on the pre-installed standard SNP-Planning Book and shows the next 26 buckets (weeks) that&nbsp;are considered for optimization.</FONT>',
        type:'none',
        explanation_p:'',
        in_demo:1,
        in_practice:0,
        in_test:0,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, '[execScript: 80070005]'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.555459, y:0.833341}, DocXY: {x:0.555459, y:0.813947}, Off: {x:-465, y:-61}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:660,
        b_height:208,
        orientation:'NE',
        b_duration:-1,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado'
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0010(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 9, name: 'TS_18DA5F030B764D04AD125586E99CA413', label: 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0002.html',
        new_step:'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:' ',
        fieldicon:'field_icon_02.gif',
        explanation_d:'<B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3></FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_02.gif\"></FONT></SPAN></B><FONT size=3> is clicked.</FONT>',
        explanation_p:'<FONT size=3>Please click on </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3></FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_02.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
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
        b_width_p:230,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.87657, y:0.540368}, DocXY: {x:0.87657, y:0.52781}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 10, name: 'TS_61305E9E40204569ACB221E2E6D5EDF2', label: 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0004.html',
        new_step:'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Show',
        fieldicon:'field_icon_05.gif',
        explanation_d:'<FONT size=3>Clicking on the button </FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_05.gif\"></FONT></SPAN><FONT size=3> <STRONG>Show</STRONG>, opens a list of possible entries.</FONT>',
        explanation_p:'<FONT size=3>Click on the button </FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_05.gif\"></FONT></SPAN><FONT size=3> </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Show</FONT></SPAN></B><FONT size=3>, to open the list.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:262,
        b_height:82,
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.455467, y:0.323995}, DocXY: {x:0.455467, y:0.316457}, Off: {x:-3, y:-5}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:230,
        b_height_p:68,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.87657, y:0.540368}, DocXY: {x:0.87657, y:0.52781}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 11, name: 'TS_8B797F19AF4940AD91F1382D80946537', label: 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0005.html',
        new_step:'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'APO Location Product',
        fieldicon:'field_icon_06.gif',
        explanation_d:'<FONT size=3>Clicking on the entry&nbsp;<STRONG>APO Location Product</STRONG></FONT><FONT size=3>&nbsp;selects it.</FONT>',
        explanation_p:'<FONT size=3>Select the entry&nbsp;<STRONG>APO Location Product</STRONG></FONT><FONT size=3>&nbsp;by clicking it.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:180,
        b_height:97,
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, 'eep_path=\"0:0:0:0:0:1:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"DIV\"};\r\neep_coll={n:\"\",i:0,ii:-1};\r\neep_parents=[{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_DIV_\";'), XY: {x:0.1066, y:0.375006}, DocXY: {x:0.322637, y:0.426673}, Off: {x:-16, y:-6}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:230,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.87657, y:0.540368}, DocXY: {x:0.87657, y:0.52781}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 12, name: 'TS_B1E9F4C9A40A43BFA0786A046DE757BA', label: 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0007.html',
        new_step:'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'APO Planning Version',
        fieldicon:'field_icon_08.gif',
        text_d:'FRU_PV_SNP',
        explanation_d:'<FONT size=3>The<STRONG> </STRONG></FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>APO Planning Version</STRONG></FONT></SPAN><FONT size=3><STRONG> </STRONG>box is filled out.</FONT>',
        explanation_p:'<FONT size=3>Please enter<STRONG> </STRONG></FONT><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3><STRONG>FRU_PV_SNP</STRONG></FONT></SPAN><FONT size=3><STRONG> </STRONG>in the<STRONG> </STRONG></FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>APO Planning Version</STRONG></FONT></SPAN><FONT size=3><STRONG> </STRONG>box.<BR>Confirm your entry by pressing the <STRONG>Tab </STRONG>or<STRONG> Enter&nbsp;key.</STRONG></FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:1,
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
        b_width_p:230,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.87657, y:0.540368}, DocXY: {x:0.87657, y:0.52781}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 13, name: 'TS_E93E3182013C4C3DBCB423F0926012BC', label: 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0008.html',
        new_step:'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Show List',
        fieldicon:'field_icon_09.gif',
        explanation_d:'<FONT size=3>Clicking on the button<STRONG> </STRONG></FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><STRONG><IMG src=\"pages/field_icon_09.gif\"></STRONG></FONT></SPAN><FONT size=3><STRONG>&nbsp; </STRONG></FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>Show List</STRONG></FONT></SPAN><FONT size=3><STRONG> </STRONG>opens it.</FONT>',
        explanation_p:'<FONT size=3>Click on the button<STRONG> </STRONG></FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><STRONG><IMG src=\"pages/field_icon_09.gif\"></STRONG></FONT></SPAN><FONT size=3><STRONG> </STRONG></FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>Show List</STRONG></FONT></SPAN><FONT size=3><STRONG> </STRONG>to open it.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:204,
        b_height:83,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:230,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.87657, y:0.540368}, DocXY: {x:0.87657, y:0.52781}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 14, name: 'TS_97EAAB9236B4432788A4ABADF7EE4C40', label: 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0009.html',
        new_step:'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'APO - Location',
        fieldicon:'field_icon_10.gif',
        explanation_d:'<FONT size=3>Clicking on the entry </FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_10.gif\"></FONT></SPAN><FONT size=3> selects it.</FONT>',
        explanation_p:'<FONT size=3>Select the entry </FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_10.gif\"></FONT></SPAN><FONT size=3> by clicking it.</FONT>',
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
        b_width_p:230,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.87657, y:0.540368}, DocXY: {x:0.87657, y:0.52781}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 15, name: 'TS_ED074F2DDF5841E9BF029C5CBF24B2FE', label: 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0010.html',
        new_step:'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'field_icon_11.gif',
        explanation_d:'<FONT size=3>In order to open the&nbsp;<STRONG>Multiple Selection Window</STRONG>, </FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_11.gif\"></FONT></SPAN><FONT size=3> is clicked.</FONT>',
        explanation_p:'<FONT size=3>Please open the <STRONG>Multiple Selection Window</STRONG>, by&nbsp;clicking on </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3></FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_11.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
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
        b_width_p:230,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.87657, y:0.540368}, DocXY: {x:0.87657, y:0.52781}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 16, name: 'TS_2C378380E1B44E1C8E4E8BBBB21E8E22', label: 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0011.html',
        new_step:'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Select Ranges',
        fieldicon:'field_icon_12.gif',
        explanation_d:'<FONT size=3>Clicking on the </FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_12.gif\"></FONT></SPAN><FONT size=3> tab selects it.</FONT>',
        explanation_p:'<FONT size=3>Click on the </FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_12.gif\"></FONT></SPAN><FONT size=3> tab to select it.</FONT>',
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
        b_width_p:230,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.87657, y:0.540368}, DocXY: {x:0.87657, y:0.52781}},
        click_count:1,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 17, name: 'TS_593178FA8D824788ACAA9CAE6A233A58', label: 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0012.html',
        new_step:'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Lower limit',
        fieldicon:'field_icon_13.gif',
        text_d:'FRU_DC_01',
        explanation_d:'<FONT size=3>The<STRONG> </STRONG></FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>Lower limit</STRONG></FONT></SPAN><FONT size=3><STRONG> </STRONG>box is filled out.</FONT>',
        explanation_p:'<FONT size=3>Please enter<STRONG> </STRONG></FONT><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3><STRONG>FRU_DC_01</STRONG></FONT></SPAN><FONT size=3><STRONG> </STRONG>in the<STRONG> </STRONG></FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>Lower limit</STRONG></FONT></SPAN><FONT size=3><STRONG> </STRONG>box.<BR>Confirm your entry by pressing the<STRONG> Tab </STRONG>or<STRONG> Enter&nbsp;key.</STRONG></FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:1,
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
        b_width_p:230,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.87657, y:0.540368}, DocXY: {x:0.87657, y:0.52781}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 18, name: 'TS_EC42540162BA4659824D66E9F4073672', label: 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0014.html',
        new_step:'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Upper limit',
        fieldicon:'field_icon_15.gif',
        text_d:'FRU_DC_03',
        explanation_d:'<FONT size=3>The<STRONG> </STRONG></FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>Upper limit</STRONG></FONT></SPAN><FONT size=3><STRONG> </STRONG>box is filled out.</FONT>',
        explanation_p:'<FONT size=3>Please enter </FONT><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3><STRONG>FRU_DC_03</STRONG></FONT></SPAN><FONT size=3><STRONG> </STRONG>in the<STRONG> </STRONG></FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>Upper limit</STRONG></FONT></SPAN><FONT size=3><STRONG> </STRONG>box.<BR>Confirm your entry by pressing the <STRONG>Tab </STRONG>or<STRONG> Enter&nbsp;key.</STRONG></FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:1,
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
        b_width_p:230,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.87657, y:0.540368}, DocXY: {x:0.87657, y:0.52781}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 19, name: 'TS_842FE5E6358A416D9865064270640898', label: 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0016.html',
        new_step:'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Lower limit',
        fieldicon:'field_icon_17.gif',
        text_d:'FRU_PLANT_01',
        explanation_d:'<FONT size=3>The </FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>Lower limit</STRONG></FONT></SPAN><FONT size=3><STRONG> </STRONG>box is filled out.</FONT>',
        explanation_p:'<FONT size=3>Please enter </FONT><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3><STRONG>FRU_PLANT_01</STRONG></FONT></SPAN><FONT size=3><STRONG> </STRONG>in the<STRONG> </STRONG></FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>Lower limit</STRONG></FONT></SPAN><FONT size=3><STRONG> </STRONG>box.<BR>Confirm your entry by pressing the <STRONG>Tab </STRONG>or<STRONG> Enter&nbsp;key.</STRONG></FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:1,
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
        b_width_p:230,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.87657, y:0.540368}, DocXY: {x:0.87657, y:0.52781}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 20, name: 'TS_31BC8714100149718D52506DEE61E4B0', label: 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0018.html',
        new_step:'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Upper limit',
        fieldicon:'field_icon_19.gif',
        text_d:'FRU_PLANT_03',
        explanation_d:'<FONT size=3>The<STRONG> </STRONG></FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>Upper limit</STRONG></FONT></SPAN><FONT size=3><STRONG> </STRONG>box is filled out.</FONT>',
        explanation_p:'<FONT size=3>Please enter </FONT><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3><STRONG>FRU_PLANT_03</STRONG></FONT></SPAN><FONT size=3><STRONG> </STRONG>in the<STRONG> </STRONG></FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>Upper limit</STRONG></FONT></SPAN><FONT size=3><STRONG> </STRONG>box.<BR>Confirm your entry by pressing the<STRONG> Tab </STRONG>or<STRONG> Enter&nbsp;key.</STRONG></FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:1,
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
        b_width_p:230,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.87657, y:0.540368}, DocXY: {x:0.87657, y:0.52781}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 21, name: 'TS_B4795FF2836B48069523EE5286E4D816', label: 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0019.html',
        new_step:'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Copy',
        fieldicon:'field_icon_20.gif',
        explanation_d:'<SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>Copy</STRONG></FONT></SPAN><FONT size=3><STRONG>&nbsp;</STRONG></FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><STRONG><IMG src=\"pages/field_icon_20.gif\"></STRONG></FONT></SPAN><FONT size=3><STRONG> </STRONG>is clicked.</FONT>',
        explanation_p:'<FONT size=3>Please click on<STRONG> </STRONG></FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>Copy</STRONG></FONT></SPAN><FONT size=3><STRONG>&nbsp;</STRONG></FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><STRONG><IMG src=\"pages/field_icon_20.gif\"></STRONG></FONT></SPAN><FONT size=3><STRONG>.</STRONG></FONT>',
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
        b_width_p:230,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.87657, y:0.540368}, DocXY: {x:0.87657, y:0.52781}},
        click_count:1,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 22, name: 'TS_07008608B8264A0EBBB46C9A0EDB704C', label: 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0020.html',
        new_step:'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:' ',
        fieldicon:'field_icon_21.gif',
        explanation_d:'<B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3></FONT></SPAN><FONT size=3>&nbsp;Save </FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_21.gif\"></FONT></SPAN></B><FONT size=3> is clicked.</FONT>',
        explanation_p:'<FONT size=3>Please click on </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3></FONT></SPAN><FONT size=3>&nbsp;Save </FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_21.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
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
        b_width_p:230,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.87657, y:0.540368}, DocXY: {x:0.87657, y:0.52781}},
        click_count:1,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 23, name: 'TS_D056C78A8BF64B81857DFAAB73A2B7EA', label: 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0021.html',
        new_step:'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Selection description',
        fieldicon:'field_icon_22.gif',
        text_d:'VL_FRU_PV_SNP_LP',
        explanation_d:'<FONT size=3>The<STRONG> </STRONG></FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>Selection description</STRONG></FONT></SPAN><FONT size=3><STRONG> </STRONG>box is filled out.</FONT>',
        explanation_p:'<FONT size=3>Please enter<STRONG> </STRONG></FONT><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3><STRONG>VL_FRU_PV_SNP_LP</STRONG></FONT></SPAN><FONT size=3><STRONG> </STRONG>in the<STRONG> </STRONG></FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>Selection description</STRONG></FONT></SPAN><FONT size=3><STRONG> </STRONG>box.<BR>Confirm your entry by pressing the <STRONG>Tab&nbsp;</STRONG>or<STRONG> Enter&nbsp;key.</STRONG></FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:1,
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
        b_width_p:230,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.87657, y:0.540368}, DocXY: {x:0.87657, y:0.52781}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 24, name: 'TS_43182200C3B7468C866618F8A5F629F7', label: 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0022.html',
        new_step:'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Save',
        fieldicon:'field_icon_23.gif',
        explanation_d:'<SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>Save</STRONG></FONT></SPAN><FONT size=3><STRONG>&nbsp;</STRONG></FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><STRONG><IMG src=\"pages/field_icon_23.gif\"></STRONG></FONT></SPAN><FONT size=3><STRONG> </STRONG>is clicked.</FONT>',
        explanation_p:'<FONT size=3>Please click on </FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>Save</STRONG></FONT></SPAN><FONT size=3><STRONG>&nbsp;</STRONG></FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><STRONG><IMG src=\"pages/field_icon_23.gif\"></STRONG></FONT></SPAN><FONT size=3><STRONG>.</STRONG></FONT>',
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
        b_width_p:230,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.87657, y:0.540368}, DocXY: {x:0.87657, y:0.52781}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 25, name: 'TS_D27081FD366F4B82B27A198CF08CDDBD', label: 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0023.html',
        new_step:'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Adopt',
        fieldicon:'field_icon_24.gif',
        explanation_d:'<SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>Adopt</STRONG></FONT></SPAN><FONT size=3><STRONG>&nbsp;</STRONG></FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><STRONG><IMG src=\"pages/field_icon_24.gif\"></STRONG></FONT></SPAN><FONT size=3><STRONG> </STRONG>is clicked.</FONT>',
        explanation_p:'<FONT size=3>Please click on<STRONG> </STRONG></FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>Adopt</STRONG></FONT></SPAN><FONT size=3><STRONG>&nbsp;</STRONG></FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><STRONG><IMG src=\"pages/field_icon_24.gif\"></STRONG></FONT></SPAN><FONT size=3><STRONG>.</STRONG></FONT>',
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
        b_width_p:230,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.87657, y:0.540368}, DocXY: {x:0.87657, y:0.52781}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 26, name: 'TS_50E170DC74084927A65E69FE0D6AE1C1', label: 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0024.html',
        new_step:'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'field_icon_25.gif',
        explanation_d:'<B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3></FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_25.gif\"></FONT></SPAN></B><FONT size=3> is clicked.</FONT>',
        explanation_p:'<FONT size=3>Please click on </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3></FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_25.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
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
        b_width_p:230,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.87657, y:0.540368}, DocXY: {x:0.87657, y:0.52781}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 27, name: 'TS_120D9451217C47CB9491CE9F0BE5CC27', label: 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0027.html',
        new_step:'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'VL_FRU_PV_SNP_LP',
        fieldicon:'field_icon_28.gif',
        explanation_d:'<FONT size=3>Drag<STRONG> </STRONG></FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>VL_FRU_PV_SNP_LP</STRONG></FONT></SPAN><FONT size=3><STRONG>&nbsp;</STRONG></FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><STRONG><IMG src=\"pages/field_icon_28.gif\"></STRONG></FONT></SPAN><FONT size=3><STRONG>.</STRONG></FONT>',
        explanation_p:'<FONT size=3>Drag </FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>VL_FRU_PV_SNP_LP</STRONG></FONT></SPAN><FONT size=3><STRONG>&nbsp;</STRONG></FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><STRONG><IMG src=\"pages/field_icon_28.gif\"></STRONG></FONT></SPAN><FONT size=3><STRONG>.</STRONG></FONT>',
        action:'drag',
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
        b_width_p:230,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.87657, y:0.540368}, DocXY: {x:0.87657, y:0.52781}},
        click_count:1,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 28, name: 'TS_AB8342162EFC407F83BF60C87B094C84', label: 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0028.html',
        new_step:'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Save',
        fieldicon:'field_icon_30.gif',
        explanation_d:'<SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>Save</STRONG></FONT></SPAN><FONT size=3><STRONG>&nbsp;</STRONG></FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><STRONG><IMG src=\"pages/field_icon_30.gif\"></STRONG></FONT></SPAN><FONT size=3><STRONG> </STRONG>is clicked.</FONT>',
        explanation_p:'<FONT size=3>Please click on<STRONG> </STRONG></FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>Save</STRONG></FONT></SPAN><FONT size=3><STRONG>&nbsp;</STRONG></FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><STRONG><IMG src=\"pages/field_icon_30.gif\"></STRONG></FONT></SPAN><FONT size=3><STRONG>.</STRONG></FONT>',
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
        b_width_p:230,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.87657, y:0.540368}, DocXY: {x:0.87657, y:0.52781}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 29, name: 'TS_0776A71325144ABA878F700D4FB9C9DB', label: 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0029.html',
        new_step:'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Adopt',
        fieldicon:'field_icon_31.gif',
        explanation_d:'<SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>Adopt</STRONG></FONT></SPAN><FONT size=3><STRONG>&nbsp;</STRONG></FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><STRONG><IMG src=\"pages/field_icon_31.gif\"></STRONG></FONT></SPAN><FONT size=3><STRONG> </STRONG>is clicked.</FONT>',
        explanation_p:'<FONT size=3>Please click on<STRONG> </STRONG></FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>Adopt</STRONG></FONT></SPAN><FONT size=3><STRONG>&nbsp;</STRONG></FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><STRONG><IMG src=\"pages/field_icon_31.gif\"></STRONG></FONT></SPAN><FONT size=3><STRONG>.</STRONG></FONT>',
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
        b_width_p:230,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.87657, y:0.540368}, DocXY: {x:0.87657, y:0.52781}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 30, name: 'TS_C9423449B3304DC9B2D54E885B04B27D', label: '(untitled)', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0030.html',
        new_step:'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3>Now the selection is&nbsp;created.&nbsp;The next step shows, how&nbsp;to load the data&nbsp;of&nbsp;the selected&nbsp;objects into the Planning&nbsp;Grid.</FONT>',
        type:'none',
        all_like_demo:0,
        explanation_p:'<FONT size=3>The selection is created! Now load the planning data for your all selected items in the planning grid.</FONT>',
        in_demo:1,
        in_practice:1,
        in_test:1,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, '[execScript: 80070005]'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, '[execScript: 80070005]'), XY: {x:0.661723, y:0.567285}, DocXY: {x:0.661723, y:0.554101}},
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

function msglist_0032(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 31, name: 'TS_D6992065A94B46EBBCE2DEB60AD720BE', label: 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0031.html',
        new_step:'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:' ',
        fieldicon:'field_icon_33.gif',
        explanation_d:'<SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3></FONT></SPAN><FONT size=3>&nbsp;In order to select all items, </FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_33.gif\"></FONT></SPAN><FONT size=3> is clicked.</FONT>',
        explanation_p:'<FONT size=3>Please select all items by&nbsp;clicking on </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3></FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_33.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
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
        b_width_p:230,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.87657, y:0.540368}, DocXY: {x:0.87657, y:0.52781}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 32, name: 'TS_A681BCCC46444431B0B392AC93B9A24E', label: 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0032.html',
        new_step:'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:' ',
        fieldicon:'field_icon_34.gif',
        explanation_d:'<FONT size=3>In order to load the forecast data for all selected items into your planning book,</FONT>$#{fieldname}<FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_34.gif\"></FONT></SPAN><FONT size=3> has to be&nbsp;clicked.</FONT>',
        explanation_p:'<FONT size=3>Please load the forecast data in your planning book by&nbsp;clicking on </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3></FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_34.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
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
        b_width_p:230,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.87657, y:0.540368}, DocXY: {x:0.87657, y:0.52781}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 33, name: 'TS_0CADB74F6EBF4F5BAE194098C819DFAE', label: 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0033.html',
        new_step:'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Back',
        fieldicon:'field_icon_35.gif',
        explanation_d:'<SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>Back</STRONG></FONT></SPAN><FONT size=3><STRONG>&nbsp;</STRONG></FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><STRONG><IMG src=\"pages/field_icon_35.gif\"></STRONG></FONT></SPAN><FONT size=3><STRONG> </STRONG>is clicked.</FONT>',
        explanation_p:'<FONT size=3>Please click on<STRONG> </STRONG></FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>Back</STRONG></FONT></SPAN><FONT size=3><STRONG>&nbsp;</STRONG></FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><STRONG><IMG src=\"pages/field_icon_35.gif\"></STRONG></FONT></SPAN><FONT size=3><STRONG>.</STRONG></FONT>',
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
        b_width_p:230,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.87657, y:0.540368}, DocXY: {x:0.87657, y:0.52781}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 34, name: 'TS_F7741FE0FDEC47FCA034D6D80874742B', label: 'SAP Easy Access  mySAP Supply Chain Management', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0034.html',
        new_step:'SAP Easy Access  mySAP Supply Chain Management'
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
    content.userHeader['title'] = 'SNP Planning Book';
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
    sub.uid = 'TS_A915BA71616E47219E1D86DF77CD2E96';
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
    sub.uid = 'TS_CBE3CDB4DE0D45C8B024DBEA18C4AF87';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0003';
    sub.audio = '';
    sub.title = 'Lesson Introduction';
    sub.uid = 'TS_9EA745430CDC413EA31BC972A92D532F';
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
    sub.uid = 'TS_957A0AC1813D47798BF18EC8A2622188';
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
    sub.uid = 'TS_2FF85FD87DF249DA94F4F7EAC04D6274';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 21;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0006';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW';
    sub.uid = 'TS_EA8CC886380345C5B20322C7BE3BDEE0';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0007';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW';
    sub.uid = 'TS_31F9E5D0F3074F5E95678866811F9C37';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0008';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW';
    sub.uid = 'TS_E29EA8BF2184401686B00099FF9AE11E';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0009';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW';
    sub.uid = 'TS_560F5D893D5E4AD59FAF1642481AC059';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0010';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW';
    sub.uid = 'TS_18DA5F030B764D04AD125586E99CA413';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0011';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW';
    sub.uid = 'TS_61305E9E40204569ACB221E2E6D5EDF2';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0012';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW';
    sub.uid = 'TS_8B797F19AF4940AD91F1382D80946537';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0013';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW';
    sub.uid = 'TS_B1E9F4C9A40A43BFA0786A046DE757BA';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0014';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW';
    sub.uid = 'TS_E93E3182013C4C3DBCB423F0926012BC';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0015';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW';
    sub.uid = 'TS_97EAAB9236B4432788A4ABADF7EE4C40';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0016';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW';
    sub.uid = 'TS_ED074F2DDF5841E9BF029C5CBF24B2FE';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0017';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW';
    sub.uid = 'TS_2C378380E1B44E1C8E4E8BBBB21E8E22';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0018';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW';
    sub.uid = 'TS_593178FA8D824788ACAA9CAE6A233A58';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0019';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW';
    sub.uid = 'TS_EC42540162BA4659824D66E9F4073672';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0020';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW';
    sub.uid = 'TS_842FE5E6358A416D9865064270640898';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0021';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW';
    sub.uid = 'TS_31BC8714100149718D52506DEE61E4B0';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0022';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW';
    sub.uid = 'TS_B4795FF2836B48069523EE5286E4D816';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0023';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW';
    sub.uid = 'TS_07008608B8264A0EBBB46C9A0EDB704C';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0024';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW';
    sub.uid = 'TS_D056C78A8BF64B81857DFAAB73A2B7EA';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0025';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW';
    sub.uid = 'TS_43182200C3B7468C866618F8A5F629F7';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0026';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW';
    sub.uid = 'TS_D27081FD366F4B82B27A198CF08CDDBD';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0027';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW';
    sub.uid = 'TS_50E170DC74084927A65E69FE0D6AE1C1';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0028';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW';
    sub.uid = 'TS_120D9451217C47CB9491CE9F0BE5CC27';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0029';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW';
    sub.uid = 'TS_AB8342162EFC407F83BF60C87B094C84';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0030';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW';
    sub.uid = 'TS_0776A71325144ABA878F700D4FB9C9DB';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0031';
    sub.audio = '';
    sub.title = '(untitled)';
    sub.uid = 'TS_C9423449B3304DC9B2D54E885B04B27D';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0032';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW';
    sub.uid = 'TS_D6992065A94B46EBBCE2DEB60AD720BE';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0033';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW';
    sub.uid = 'TS_A681BCCC46444431B0B392AC93B9A24E';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0034';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] SNP INTERACTIVE PLANNING / FRUTADO SNP VIEW';
    sub.uid = 'TS_0CADB74F6EBF4F5BAE194098C819DFAE';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0035';
    sub.audio = '';
    sub.title = 'SAP Easy Access  mySAP Supply Chain Management';
    sub.uid = 'TS_F7741FE0FDEC47FCA034D6D80874742B';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;

    return content;
}
