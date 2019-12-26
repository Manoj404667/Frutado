
function msglist_0001(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 0, name: '', label: 'Start', jumpable: 0, visible: 0, callable: 0});
    ctx.ms.start_unit(ctx, win_, 0, 10, {
        macro_comment:'',
        possible_points:147,
        mastery_score:117,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 1, name: '', label: '(kein Titel)', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0006.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3>This is the sixth&nbsp;lesson of the DP module. The objective is to calculate the demand forecasts for the Frutado AG. This is done for every aggregate group. </FONT>\r\n<P></P>\r\n<P><FONT size=3>The interactive demand planning transaction has already been selected.</FONT>',
        type:'none',
        all_like_demo:0,
        explanation_p:'<FONT size=3>You have already viewed the demo stream of this lesson and are now ready to practice yourself. </FONT>\r\n<P></P>\r\n<P><FONT size=3>Follow the instructions as shown and by the end of the lesson you will have calculated the demand forecast for the Frutado AG.</FONT>',
        in_demo:1,
        in_practice:1,
        in_test:1,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.6318, y:0.523934}, DocXY: {x:0.6318, y:0.5075}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:446,
        b_height:217,
        orientation:'C',
        b_duration:60,
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.55758, y:0.484474}, DocXY: {x:0.55758, y:0.469276}},
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:379,
        b_height_p:172,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 2, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0006.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'FRU_CONST1_DP',
        fieldicon:'field_icon_04.gif',
        explanation_d:'<FONT size=3>The first aggregate group to be forecasted is <STRONG>FRU_CONST1_DP</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please double click on <STRONG>FRU_CONST1_DP</STRONG> to <STRONG>activate</STRONG> the aggregate group.</FONT>',
        action:'ldblclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:499,
        b_height:60,
        orientation:'E',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:564,
        b_height_p:54,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.627924, y:0.492958}, DocXY: {x:0.627924, y:0.477455}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 3, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0007.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:' ',
        fieldicon:'field_icon_05.gif',
        explanation_d:'<FONT size=3>In order to load the data into the planning book the aggregate group is <STRONG>opened</STRONG>.</FONT>',
        explanation_p:'<FONT size=3><STRONG>Upload</STRONG> the data into the planning book by pressing&nbsp;</FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_05.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:354,
        b_height:87,
        orientation:'SW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:1}, DocXY: {x:0, y:0}, Off: {x:-10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:444,
        b_height_p:65,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.582971, y:0.481697}, DocXY: {x:0.582971, y:0.46656}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 4, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0008.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Settings',
        fieldicon:'field_icon_06.gif',
        explanation_d:'<FONT size=3>The forecast profile which is located in the <STRONG>Settings</STRONG> folder needs to be assigned to the aggregate group.</FONT>',
        explanation_p:'<FONT size=3>Please <STRONG>open</STRONG> the <STRONG>Settings </STRONG>at the top of the screen.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:457,
        b_height:83,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:368,
        b_height_p:50,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.514626, y:0.519692}, DocXY: {x:0.514626, y:0.50338}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 5, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0009.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Forecast Profile',
        fieldicon:'field_icon_07.gif',
        explanation_d:'<FONT size=3>The <STRONG>Forecast Profile</STRONG> item is <STRONG>opened</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please <STRONG>open</STRONG> the <STRONG>Forecast Profile</STRONG> item.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:293,
        b_height:59,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:302,
        b_height_p:52,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.538079, y:0.502785}, DocXY: {x:0.538079, y:0.487007}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 6, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0011.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Master forecast profile',
        fieldicon:'field_icon_08.gif',
        explanation_d:'<FONT size=3>In order to view a list of all valid forecast profiles the <STRONG>Entry Help</STRONG> is <STRONG>opened</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>View&nbsp;a list<STRONG> </STRONG>of valid forecast profiles by <STRONG>opening</STRONG> the <STRONG>Entry Help</STRONG>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:352,
        b_height:81,
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:522,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.702144, y:0.514092}, DocXY: {x:0.702144, y:0.497948}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 7, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0012.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Continue',
        fieldicon:'field_icon_09.gif',
        explanation_d:'<FONT size=3>The already selected profile complies with the selected aggregate group. The template is <STRONG>closed</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>The allready selected profile complies with the selected aggregate group. Please continue with the procedure by pressing&nbsp;</FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_09.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:454,
        b_height:76,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:538,
        b_height_p:74,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.690425, y:0.663386}, DocXY: {x:0.690425, y:0.642527}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 8, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0013.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Generate Curve',
        fieldicon:'field_icon_10.gif',
        explanation_d:'<FONT size=3>The selected forecast profile is <STRONG>assigned</STRONG> to the aggregate group.</FONT>',
        explanation_p:'<FONT size=3>Please <STRONG>assign</STRONG> the forecast profile to the aggregate group by pressing </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_10.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:305,
        b_height:82,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:384,
        b_height_p:68,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.661128, y:0.654902}, DocXY: {x:0.661128, y:0.634379}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 9, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0014.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Univariate Forecast',
        fieldicon:'field_icon_11.gif',
        explanation_d:'<FONT size=3>All settings have been made and the demand forecast is <STRONG>calculated</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please <STRONG>calculate</STRONG> the demand forecast by pressing&nbsp;</FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_11.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:346,
        b_height:82,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:446,
        b_height_p:56,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.513634, y:0.518288}, DocXY: {x:0.513634, y:0.502022}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 10, name: '', label: '(kein Titel)', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0015.html',
        new_step:'Forecast in Interactive Planning; Change Mode'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3><FONT style=\"BACKGROUND-COLOR: #ffffb7\">The demand forecast for the aggregate group FRU_CONST1_DP has been calculated. The amount can be viewed in the row \"Forecast\". As this result is satisfactory the demand forecast of the next aggregate group is calculated.</FONT> </FONT>\r\n<P></P>\r\n<P><FONT style=\"BACKGROUND-COLOR: #ffffb7\" size=3>For more information please view the in-depth stream of the demand planning module.</FONT>',
        type:'none',
        all_like_demo:0,
        explanation_p:'<FONT size=3>You have calculated the demand forecast for the aggregate group FRU_CONST1_DP. The amount can be viewed in the row Forecast.</FONT>',
        in_demo:1,
        in_practice:1,
        in_test:1,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.614252, y:0.757748}, DocXY: {x:0.614252, y:0.733959}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:382,
        b_height:164,
        orientation:'C',
        b_duration:60,
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.621088, y:0.740841}, DocXY: {x:0.621088, y:0.717571}},
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:455,
        b_height_p:117,
        orientation_p:'C',
        b_duration_p:60
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0012(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 11, name: '', label: 'Forecast in Interactive Planning; Change Mode', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0015.html',
        new_step:'Forecast in Interactive Planning; Change Mode'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Back',
        fieldicon:'field_icon_12.gif',
        explanation_d:'<FONT size=3>In order to calculate the next aggregate group the <STRONG>planning book</STRONG> is needed.</FONT>',
        explanation_p:'<FONT size=3>Please return to the planning book by pressing&nbsp;</FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_12.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:338,
        b_height:82,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:430,
        b_height_p:59,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.57908, y:0.715496}, DocXY: {x:0.57908, y:0.693004}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 12, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0017.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'FRU_CONST2_DP',
        fieldicon:'field_icon_14.gif',
        explanation_d:'<FONT size=3>This process is now repeated four&nbsp;more times. For more information view the first&nbsp;aggregate group.</FONT>\r\n<P></P>\r\n<P><FONT size=3>Next the forecast demand for the aggregate group <STRONG>FRU_CONST2_DP</STRONG> is calculated.</FONT>',
        explanation_p:'<FONT size=3>This process is repeated four more times. </FONT>\r\n<P></P>\r\n<P><FONT size=3>Please double click on <STRONG>FRU_CONST2_DP</STRONG> to <STRONG>activate</STRONG> the aggregate group.</FONT></P>\r\n<P></P>\r\n<P>&nbsp;',
        action:'ldblclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:471,
        b_height:153,
        orientation:'E',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:442,
        b_height_p:107,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.620081, y:0.549264}, DocXY: {x:0.620081, y:0.532067}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 13, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0018.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:' ',
        fieldicon:'field_icon_15.gif',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3><STRONG>Upload</STRONG> the data into the planning book by pressing&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_15.gif\"></FONT></SPAN><FONT size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.03122, y:0.964767}, DocXY: {x:0.03122, y:0.934478}, Off: {x:1, y:4}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:432,
        b_height_p:65,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.601526, y:0.54226}, DocXY: {x:0.601526, y:0.525231}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 14, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0019.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Settings',
        fieldicon:'field_icon_16.gif',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>Please <STRONG>open</STRONG> the <STRONG>Settings </STRONG>at the top of the screen.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1', '', 0, 0, 'eep_path=\"0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={id:\"dgo_base_div\",tagName:\"DIV\"};\r\neep_coll={n:\"\",i:0,ii:-1};\r\neep_parents=[{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_DIV_\";'), XY: {x:0.043946, y:0.974075}, DocXY: {x:0.043946, y:0.974075}, Off: {x:1, y:3}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:376,
        b_height_p:50,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.580072, y:0.505623}, DocXY: {x:0.580072, y:0.489769}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 15, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0020.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Forecast Profile',
        fieldicon:'field_icon_17.gif',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>Please <STRONG>open</STRONG> the <STRONG>Forecast Profile</STRONG> item.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1', '', 0, 0, 'eep_path=\"0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={id:\"dgo_base_div\",tagName:\"DIV\"};\r\neep_coll={n:\"\",i:0,ii:-1};\r\neep_parents=[{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_DIV_\";'), XY: {x:0.0332036, y:0.974075}, DocXY: {x:0.0332036, y:0.974075}, Off: {x:0, y:6}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:310,
        b_height_p:50,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.580072, y:0.533776}, DocXY: {x:0.580072, y:0.517052}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 16, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0011.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Master forecast profile',
        fieldicon:'field_icon_08.gif',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>View&nbsp;a list<STRONG> </STRONG>of valid forecast profiles by <STRONG>opening</STRONG> the <STRONG>Entry Help</STRONG>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1', '', 0, 0, 'eep_path=\"0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={id:\"dgo_base_div\",tagName:\"DIV\"};\r\neep_coll={n:\"\",i:0,ii:-1};\r\neep_parents=[{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_DIV_\";'), XY: {x:0.0371099, y:0.974075}, DocXY: {x:0.0371099, y:0.974075}, Off: {x:0, y:3}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:506,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.719692, y:0.552102}, DocXY: {x:0.719692, y:0.534783}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 17, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0022.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Continue',
        fieldicon:'field_icon_18.gif',
        explanation_d:'<FONT size=3>Again the already selected profile complies with the selected aggregate group.</FONT>',
        explanation_p:'<FONT size=3>The allready selected profile complies with the selected aggregate group. Please continue with the procedure by pressing&nbsp;</FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_18.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:389,
        b_height:84,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:526,
        b_height_p:72,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.700191, y:0.591516}, DocXY: {x:0.700191, y:0.572992}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 18, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0023.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Generate Curve',
        fieldicon:'field_icon_19.gif',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>Please <STRONG>assign</STRONG> the forecast profile to the aggregate group by pressing </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_19.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:60,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:584,
        b_height_p:60,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.698238, y:0.570413}, DocXY: {x:0.698238, y:0.552514}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 19, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0024.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Univariate Forecast',
        fieldicon:'field_icon_20.gif',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>Please <STRONG>calculate</STRONG> the demand forecast by pressing&nbsp;</FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_20.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.034165, y:0.960571}, DocXY: {x:0.034165, y:0.930419}, Off: {x:-1, y:7}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:424,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.609354, y:0.532357}, DocXY: {x:0.609354, y:0.515694}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 20, name: '', label: 'Forecast in Interactive Planning; Change Mode', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0025.html',
        new_step:'Forecast in Interactive Planning; Change Mode'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Back',
        fieldicon:'field_icon_21.gif',
        explanation_d:'<FONT size=3>&nbsp;Again the demand forecast can be viewed in the row \"Forecast\".</FONT>',
        explanation_p:'<FONT size=3>Please return to the planning book by pressing&nbsp;</FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_21.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:502,
        b_height:58,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.592752, y:0.700008}, DocXY: {x:0.592752, y:0.678035}, Off: {x:33, y:8}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:390,
        b_height_p:59,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.511681, y:0.538018}, DocXY: {x:0.511681, y:0.521111}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 21, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0026.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'FRU_CONST3_DP',
        fieldicon:'field_icon_22.gif',
        explanation_d:'<FONT size=3>Next the forecast demand for the aggregate group <STRONG>FRU_CONST3_DP</STRONG> is calculated.</FONT>',
        explanation_p:'<FONT size=3>Please double click on <STRONG>FRU_CONST3_DP</STRONG> to <STRONG>activate</STRONG> the aggregate group.</FONT>',
        action:'ldblclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:383,
        b_height:81,
        orientation:'E',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:572,
        b_height_p:50,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.66891, y:0.585916}, DocXY: {x:0.66891, y:0.567529}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 22, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0027.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:' ',
        fieldicon:'field_icon_23.gif',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3><STRONG>Upload</STRONG> the data into the planning book by pressing&nbsp;</FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_23.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1', '', 0, 0, 'eep_path=\"0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={id:\"dgo_base_div\",tagName:\"DIV\"};\r\neep_coll={n:\"\",i:0,ii:-1};\r\neep_parents=[{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_DIV_\";'), XY: {x:0.0361028, y:0.974075}, DocXY: {x:0.0361028, y:0.974075}, Off: {x:2, y:2}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:444,
        b_height_p:63,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.638636, y:0.574655}, DocXY: {x:0.638636, y:0.556619}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 23, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0028.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Settings',
        fieldicon:'field_icon_24.gif',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>Please <STRONG>open</STRONG> the <STRONG>Settings </STRONG>at the top of the screen.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.0351568, y:0.964767}, DocXY: {x:0.0351568, y:0.934478}, Off: {x:-1, y:4}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:390,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.614252, y:0.539437}, DocXY: {x:0.614252, y:0.522515}},
        click_count:1,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 24, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0029.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Forecast Profile',
        fieldicon:'field_icon_25.gif',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>Please <STRONG>open</STRONG> the <STRONG>Forecast Profile</STRONG> item.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.0468757, y:0.956344}, DocXY: {x:0.0468757, y:0.926299}, Off: {x:3, y:7}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:320,
        b_height_p:52,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.512688, y:0.523934}, DocXY: {x:0.512688, y:0.5075}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 25, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0011.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Master forecast profile',
        fieldicon:'field_icon_08.gif',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>View&nbsp;a list<STRONG> </STRONG>of valid forecast profiles by <STRONG>opening</STRONG> the <STRONG>Entry Help</STRONG>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1', '', 0, 0, 'eep_path=\"0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={id:\"dgo_base_div\",tagName:\"DIV\"};\r\neep_coll={n:\"\",i:0,ii:-1};\r\neep_parents=[{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_DIV_\";'), XY: {x:0.0292668, y:0.971344}, DocXY: {x:0.0292668, y:0.971344}, Off: {x:3, y:5}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:458,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.662089, y:0.549264}, DocXY: {x:0.662089, y:0.532067}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 26, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0031.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Continue',
        fieldicon:'field_icon_27.gif',
        explanation_d:'<FONT size=3>&nbsp;Again the already selected profile complies with the selected aggregate group.</FONT>',
        explanation_p:'<FONT size=3>The allready selected profile complies with the selected aggregate group. Please continue with the procedure by pressing&nbsp;</FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_27.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:370,
        b_height:78,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:576,
        b_height_p:76,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.685527, y:0.58732}, DocXY: {x:0.685527, y:0.568887}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 27, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0032.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Generate Curve',
        fieldicon:'field_icon_28.gif',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>Please <STRONG>assign</STRONG> the forecast profile to the aggregate group by pressing </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_28.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('', '', 0, 0, 'eep_path=\"\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"BODY\"};\r\neep_coll={n:\"\",i:0,ii:-1};\r\neep_parents=[];\r\neep_siblingTags2=\"\";'), XY: {x:0.0791028, y:1.14733}, DocXY: {x:0.0791028, y:1.14733}, Off: {x:-55, y:-120}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:576,
        b_height_p:64,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.702144, y:0.577432}, DocXY: {x:0.702144, y:0.55935}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 28, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0033.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Univariate Forecast',
        fieldicon:'field_icon_29.gif',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>Please <STRONG>calculate</STRONG> the demand forecast by pressing&nbsp;</FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_29.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.0371099, y:0.963348}, DocXY: {x:0.0371099, y:0.933135}, Off: {x:2, y:4}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:438,
        b_height_p:64,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.597635, y:0.516869}, DocXY: {x:0.597635, y:0.500664}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 29, name: '', label: 'Forecast in Interactive Planning; Change Mode', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0034.html',
        new_step:'Forecast in Interactive Planning; Change Mode'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Back',
        fieldicon:'field_icon_30.gif',
        explanation_d:'<FONT size=3>&nbsp;Again the demand forecast can be viewed in the row \"Forecast\".</FONT>',
        explanation_p:'<FONT size=3>Please return to the planning book by pressing&nbsp;</FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_30.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:504,
        b_height:60,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.60058, y:0.691539}, DocXY: {x:0.60058, y:0.669856}, Off: {x:8, y:6}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:392,
        b_height_p:65,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.619135, y:0.680278}, DocXY: {x:0.619135, y:0.6589}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 30, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0035.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'FRU SEASON1 DP',
        fieldicon:'field_icon_31.gif',
        explanation_d:'<FONT size=3>Next the forecast demand for the aggregate group <STRONG>FRU_SEASON1_DP</STRONG> is calculated.</FONT>',
        explanation_p:'<FONT size=3>Please double click on <STRONG>FRU_SEASON1_DP</STRONG> to <STRONG>activate</STRONG> the aggregate group.</FONT>',
        action:'ldblclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:391,
        b_height:83,
        orientation:'E',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:574,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.518517, y:0.526757}, DocXY: {x:0.518517, y:0.510216}},
        click_count:1,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 31, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0036.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:' ',
        fieldicon:'field_icon_32.gif',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3><STRONG>Upload</STRONG> the data into the planning book by pressing&nbsp;</FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_32.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1', '', 0, 0, 'eep_path=\"0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={id:\"dgo_base_div\",tagName:\"DIV\"};\r\neep_coll={n:\"\",i:0,ii:-1};\r\neep_parents=[{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_DIV_\";'), XY: {x:0.0400397, y:0.976776}, DocXY: {x:0.0400397, y:0.976776}, Off: {x:0, y:4}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:430,
        b_height_p:65,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.605463, y:0.566186}, DocXY: {x:0.605463, y:0.548394}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 32, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0037.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Settings',
        fieldicon:'field_icon_33.gif',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>Please <STRONG>open</STRONG> the <STRONG>Settings </STRONG>at the top of the screen.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.0322118, y:0.963348}, DocXY: {x:0.0322118, y:0.933135}, Off: {x:5, y:7}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:396,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.611307, y:0.498589}, DocXY: {x:0.611307, y:0.482933}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 33, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0038.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Forecast Profile',
        fieldicon:'field_icon_34.gif',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>Please <STRONG>open</STRONG> the <STRONG>Forecast Profile</STRONG> item.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.0361028, y:0.966171}, DocXY: {x:0.0361028, y:0.935882}, Off: {x:7, y:12}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:318,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.584955, y:0.533776}, DocXY: {x:0.584955, y:0.517052}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 34, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0011.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Master forecast profile',
        fieldicon:'field_icon_08.gif',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>View&nbsp;a list<STRONG> </STRONG>of valid forecast profiles by <STRONG>opening</STRONG> the <STRONG>Entry Help</STRONG>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1', '', 0, 0, 'eep_path=\"0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={id:\"dgo_base_div\",tagName:\"DIV\"};\r\neep_coll={n:\"\",i:0,ii:-1};\r\neep_parents=[{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_DIV_\";'), XY: {x:0.0478218, y:0.972717}, DocXY: {x:0.0478218, y:0.972717}, Off: {x:0, y:6}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:470,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.717754, y:0.528176}, DocXY: {x:0.717754, y:0.511574}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 35, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0040.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.input_radio(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Selectn',
        fieldicon:'field_icon_36.gif',
        choose_bool:'1',
        explanation_d:'<FONT size=3>This time the selected profile does not comply with the aggregate group. The profile <STRONG>FRU_SEAS_DP</STRONG> is selected.</FONT>',
        explanation_p:'<FONT size=3>Please <STRONG>select</STRONG> the profile <STRONG>FRU_SEAS_DP</STRONG>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:484,
        b_height:84,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:344,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.661128, y:0.580255}, DocXY: {x:0.661128, y:0.562051}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 36, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0041.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Continue',
        fieldicon:'field_icon_37.gif',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>Please continue with the procedure by pressing&nbsp;</FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_37.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('', '', 0, 0, 'eep_path=\"\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"BODY\"};\r\neep_coll={n:\"\",i:0,ii:-1};\r\neep_parents=[];\r\neep_siblingTags2=\"\";'), XY: {x:0.0791028, y:1.09004}, DocXY: {x:0.0791028, y:1.09004}, Off: {x:-39, y:-77}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:428,
        b_height_p:64,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.727535, y:0.550683}, DocXY: {x:0.727535, y:0.533425}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 37, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0042.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Generate Curve',
        fieldicon:'field_icon_38.gif',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>Please <STRONG>assign</STRONG> the forecast profile to the aggregate group by pressing </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_38.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('', '', 0, 0, 'eep_path=\"\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"BODY\"};\r\neep_coll={n:\"\",i:0,ii:-1};\r\neep_parents=[];\r\neep_siblingTags2=\"\";'), XY: {x:0.0791028, y:1.14733}, DocXY: {x:0.0791028, y:1.14733}, Off: {x:-43, y:-113}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:556,
        b_height_p:64,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.704082, y:0.583078}, DocXY: {x:0.704082, y:0.564767}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 38, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0043.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Univariate Forecast',
        fieldicon:'field_icon_39.gif',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>Please <STRONG>calculate</STRONG> the demand forecast by pressing&nbsp;</FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_39.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1', '', 0, 0, 'eep_path=\"0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={id:\"dgo_base_div\",tagName:\"DIV\"};\r\neep_coll={n:\"\",i:0,ii:-1};\r\neep_parents=[{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_DIV_\";'), XY: {x:0.0400397, y:0.968597}, DocXY: {x:0.0400397, y:0.968597}, Off: {x:-2, y:8}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:444,
        b_height_p:64,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.654292, y:0.546441}, DocXY: {x:0.654292, y:0.529305}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 39, name: '', label: 'Forecast in Interactive Planning; Change Mode', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0044.html',
        new_step:'Forecast in Interactive Planning; Change Mode'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Back',
        fieldicon:'field_icon_40.gif',
        explanation_d:'<FONT size=3>The demand forecast of the aggregate group can be viewed in the row \"Forecast\". In difference to the groups which include products with steady demand, this aggregate group has a different demand forecast for each week. This is due to the seasonal factor.</FONT>',
        explanation_p:'<FONT size=3>Please return to the planning book by pressing&nbsp;</FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_40.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:550,
        b_height:135,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.587854, y:0.677455}, DocXY: {x:0.587854, y:0.656199}, Off: {x:49, y:14}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:386,
        b_height_p:65,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.604471, y:0.709865}, DocXY: {x:0.604471, y:0.687587}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 40, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0045.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'FRU SEASON2 DP',
        fieldicon:'field_icon_41.gif',
        explanation_d:'<FONT size=3>Next the forecast demand for the aggregate group <STRONG>FRU_SEASON2_DP</STRONG> is calculated.</FONT>',
        explanation_p:'<FONT size=3>Please double click on <STRONG>FRU_SEASON2_DP</STRONG> to <STRONG>activate</STRONG> the aggregate group.</FONT>',
        action:'ldblclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:375,
        b_height:81,
        orientation:'E',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:570,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.67187, y:0.6}, DocXY: {x:0.67187, y:0.58114}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 41, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0046.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:' ',
        fieldicon:'field_icon_42.gif',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3><STRONG>Upload</STRONG> the data into the planning book by pressing&nbsp;</FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_42.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1', '', 0, 0, 'eep_path=\"0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={id:\"dgo_base_div\",tagName:\"DIV\"};\r\neep_coll={n:\"\",i:0,ii:-1};\r\neep_parents=[{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_DIV_\";'), XY: {x:0.0351568, y:0.979538}, DocXY: {x:0.0351568, y:0.979538}, Off: {x:1, y:5}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:446,
        b_height_p:65,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.621088, y:0.549264}, DocXY: {x:0.621088, y:0.532067}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 42, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0048.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Settings',
        fieldicon:'field_icon_43.gif',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>Please <STRONG>open</STRONG> the <STRONG>Settings </STRONG>at the top of the screen.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.0263676, y:0.964767}, DocXY: {x:0.0263676, y:0.934478}, Off: {x:-1, y:11}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:406,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.61619, y:0.556344}, DocXY: {x:0.61619, y:0.538888}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 43, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0049.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Forecast Profile',
        fieldicon:'field_icon_44.gif',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>Please <STRONG>open</STRONG> the <STRONG>Forecast Profile</STRONG> item.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.0400397, y:0.960571}, DocXY: {x:0.0400397, y:0.930419}, Off: {x:2, y:9}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:318,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.590799, y:0.556344}, DocXY: {x:0.590799, y:0.538888}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 44, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0011.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Master forecast profile',
        fieldicon:'field_icon_08.gif',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>View&nbsp;a list<STRONG> </STRONG>of valid forecast profiles by <STRONG>opening</STRONG> the <STRONG>Entry Help</STRONG>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1', '', 0, 0, 'eep_path=\"0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={id:\"dgo_base_div\",tagName:\"DIV\"};\r\neep_coll={n:\"\",i:0,ii:-1};\r\neep_parents=[{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_DIV_\";'), XY: {x:0.0380865, y:0.974075}, DocXY: {x:0.0380865, y:0.974075}, Off: {x:13, y:-5}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:470,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.697246, y:0.585916}, DocXY: {x:0.697246, y:0.567529}},
        click_count:1,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 45, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0051.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.input_radio(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Selectn',
        fieldicon:'field_icon_46.gif',
        choose_bool:'1',
        explanation_d:'<FONT size=3>Again the selected profile does not comply with the aggregate group. The profile <STRONG>FRU_SEAS_DP</STRONG> is selected.</FONT>',
        explanation_p:'<FONT size=3>Please <STRONG>select</STRONG> the profile <STRONG>FRU_SEAS_DP</STRONG>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:469,
        b_height:82,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:320,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.6748, y:0.559152}, DocXY: {x:0.6748, y:0.541604}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 46, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0052.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Continue',
        fieldicon:'field_icon_47.gif',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>Please continue with the procedure by pressing&nbsp;</FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_47.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('', '', 0, 0, 'eep_path=\"\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"BODY\"};\r\neep_coll={n:\"\",i:0,ii:-1};\r\neep_parents=[];\r\neep_siblingTags2=\"\";'), XY: {x:0.0791028, y:1.09004}, DocXY: {x:0.0791028, y:1.09004}, Off: {x:-66, y:-79}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:408,
        b_height_p:64,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.681636, y:0.570413}, DocXY: {x:0.681636, y:0.552514}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 47, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0053.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Generate Curve',
        fieldicon:'field_icon_48.gif',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>Please <STRONG>assign</STRONG> the forecast profile to the aggregate group by pressing </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_48.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('', '', 0, 0, 'eep_path=\"\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"BODY\"};\r\neep_coll={n:\"\",i:0,ii:-1};\r\neep_parents=[];\r\neep_siblingTags2=\"\";'), XY: {x:0.0791028, y:1.14733}, DocXY: {x:0.0791028, y:1.14733}, Off: {x:-58, y:-123}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:566,
        b_height_p:64,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.679683, y:0.597162}, DocXY: {x:0.679683, y:0.578424}},
        click_count:1,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 48, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0054.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Univariate Forecast',
        fieldicon:'field_icon_49.gif',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>Please <STRONG>calculate</STRONG> the demand forecast by pressing&nbsp;</FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_49.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.0273289, y:0.963348}, DocXY: {x:0.0273289, y:0.933135}, Off: {x:0, y:9}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:446,
        b_height_p:64,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.615198, y:0.550683}, DocXY: {x:0.615198, y:0.533425}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 49, name: '', label: 'Forecast in Interactive Planning; Change Mode', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0055.html',
        new_step:'Forecast in Interactive Planning; Change Mode'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Back',
        fieldicon:'field_icon_50.gif',
        explanation_d:'<FONT size=3>Again the demand forecast of the aggregate group can be viewed in the row \"Forecast\". Analog to the previous demand forecast this aggregate group has a different forecast every week.</FONT>',
        explanation_p:'<FONT size=3>Please return to the planning book by pressing&nbsp;</FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_50.gif\"></FONT></SPAN></B><FONT style=\"BACKGROUND-COLOR: #ffffff\" size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:510,
        b_height:106,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.597635, y:0.698589}, DocXY: {x:0.597635, y:0.676677}, Off: {x:59, y:19}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:392,
        b_height_p:65,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.607416, y:0.705623}, DocXY: {x:0.607416, y:0.683467}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 50, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0058.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Save',
        fieldicon:'field_icon_53.gif',
        explanation_d:'<FONT size=3>All demand forecasts have been calculated. This new information is <STRONG>saved</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please <STRONG>save</STRONG> the demand forecasts by&nbsp;pressing</FONT><B><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"../Create_Product_A_2/pages/field_icon_218.gif\"></FONT></SPAN><FONT size=3>.</FONT></B><FONT style=\"BACKGROUND-COLOR: #ffffff\"></FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:339,
        b_height:85,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:436,
        b_height_p:73,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.622065, y:0.573236}, DocXY: {x:0.622065, y:0.555215}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 51, name: '', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0059.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Back',
        fieldicon:'field_icon_54.gif',
        explanation_d:'<FONT size=3>The calculation of the demand forecasts is finished and the transaction is left by pressing <STRONG>exit</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>As the calculation of the demand forecasts is finished <STRONG>exit</STRONG> the transaction by pressing </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_54.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:407,
        b_height:83,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:432,
        b_height_p:73,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.635737, y:0.54786}, DocXY: {x:0.635737, y:0.530694}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 52, name: '', label: 'SAP Easy Access  mySAP Supply Chain Management', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0060.html',
        new_step:'SAP Easy Access  mySAP Supply Chain Management'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3>This step of the demand planning process is finished. The demand forecasts have been calculated and saved.&nbsp;The last&nbsp;lesson of the demand planning module deals with the release of the demand plan to supply network planning.</FONT>',
        type:'none',
        all_like_demo:0,
        explanation_p:'<FONT size=3>You have successfully calculated demand forecasts for all aggregated groups. The last&nbsp;lesson of the demand planning module deals with the release of the demand plan to supply network planning.</FONT>',
        in_demo:1,
        in_practice:1,
        in_test:1,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.636698, y:0.543664}, DocXY: {x:0.636698, y:0.526589}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:610,
        b_height:149,
        orientation:'C',
        b_duration:60,
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.66598, y:0.539437}, DocXY: {x:0.66598, y:0.522515}},
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:514,
        b_height_p:115,
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

    content.userHeader['version'] = '6.2.2 Unicode';
    content.userHeader['title'] = 'Calculate Forecasts';
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
    sub.jumptarget = '';
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
    sub.jumptarget = '';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0003';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.jumptarget = '';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0004';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.jumptarget = '';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0005';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.jumptarget = '';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0006';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.jumptarget = '';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0007';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.jumptarget = '';
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
    sub.jumptarget = '';
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
    sub.jumptarget = '';
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
    sub.jumptarget = '';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0011';
    sub.audio = '';
    sub.title = '(kein Titel)';
    sub.jumptarget = '';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0012';
    sub.audio = '';
    sub.title = 'Forecast in Interactive Planning; Change Mode';
    sub.jumptarget = '';
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
    sub.jumptarget = '';
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
    sub.jumptarget = '';
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
    sub.jumptarget = '';
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
    sub.jumptarget = '';
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
    sub.jumptarget = '';
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
    sub.jumptarget = '';
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
    sub.jumptarget = '';
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
    sub.jumptarget = '';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0021';
    sub.audio = '';
    sub.title = 'Forecast in Interactive Planning; Change Mode';
    sub.jumptarget = '';
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
    sub.jumptarget = '';
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
    sub.jumptarget = '';
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
    sub.jumptarget = '';
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
    sub.jumptarget = '';
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
    sub.jumptarget = '';
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
    sub.jumptarget = '';
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
    sub.jumptarget = '';
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
    sub.jumptarget = '';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0030';
    sub.audio = '';
    sub.title = 'Forecast in Interactive Planning; Change Mode';
    sub.jumptarget = '';
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
    sub.jumptarget = '';
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
    sub.jumptarget = '';
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
    sub.jumptarget = '';
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
    sub.jumptarget = '';
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
    sub.jumptarget = '';
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
    sub.jumptarget = '';
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
    sub.jumptarget = '';
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
    sub.jumptarget = '';
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
    sub.jumptarget = '';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0040';
    sub.audio = '';
    sub.title = 'Forecast in Interactive Planning; Change Mode';
    sub.jumptarget = '';
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
    sub.jumptarget = '';
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
    sub.jumptarget = '';
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
    sub.jumptarget = '';
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
    sub.jumptarget = '';
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
    sub.jumptarget = '';
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
    sub.jumptarget = '';
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
    sub.jumptarget = '';
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
    sub.jumptarget = '';
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
    sub.jumptarget = '';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0050';
    sub.audio = '';
    sub.title = 'Forecast in Interactive Planning; Change Mode';
    sub.jumptarget = '';
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
    sub.jumptarget = '';
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
    sub.jumptarget = '';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0053';
    sub.audio = '';
    sub.title = 'SAP Easy Access  mySAP Supply Chain Management';
    sub.jumptarget = '';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 30;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;

    return content;
}
