
function msglist_0001(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 0, name: 'TS_FCE4D4D90945407688AAF5B454458E07', label: 'Start', jumpable: 0, visible: 0, callable: 0});
    ctx.ms.start_unit(ctx, win_, 0, 10, {
        macro_comment:'',
        possible_points:165,
        mastery_score:132,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 1, name: 'TS_2E498A3A2E194D209E93C5E329F288DF', label: '(kein Titel)', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0034.html',
        new_step:'SAP Easy Access  mySAP Supply Chain Management'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3>This is the third&nbsp;lesson of the DP module. The objective is to create forecast profiles for the demand planning module. These profiles greatly influence the demand planning process. </FONT>\n<P></P>\n<P><FONT size=3>We&nbsp;can now navigate to the Maintain Forecast Profiles transaction.</FONT>',
        type:'none',
        all_like_demo:0,
        explanation_p:'<FONT size=3>You have already viewed the demo stream of this lesson and are now ready to practice yourself. </FONT>\n<P></P>\n<P><FONT size=3>Follow the instructions as shown and by the end of the lesson you will have created two forecast profiles.</FONT>',
        in_demo:1,
        in_practice:1,
        in_test:1,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.649409, y:0.621134}, DocXY: {x:0.649409, y:0.601633}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:400,
        b_height:246,
        orientation:'C',
        b_duration:60,
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.615198, y:0.661967}, DocXY: {x:0.615198, y:0.641169}},
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:340,
        b_height_p:198,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 2, name: 'TS_5D0817ED6CE4462F9A7E4F7B5BA66612', label: 'SAP Easy Access  mySAP Supply Chain Management', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0034.html',
        new_step:'SAP Easy Access  mySAP Supply Chain Management'
    });
    ctx.ms.transaction_info(ctx, win_, 10, 1, {
        macro_comment:'',
        tcode:'/SAPAPO/MC96B - Maintain Forecast Profiles'
    });
    ctx.ms.click(ctx, win_, 11, 10, {
        macro_comment:'',
        fieldname:'/SAPAPO/MC96B - Maintain Forecast Profiles',
        fieldicon:'field_icon_18.gif',
        explanation_d:'<FONT size=3>The transaction <STRONG>Maintain Forecast Profiles</STRONG> is already visible.&nbsp;It can therefore, be started, without opening additional folders.</FONT>',
        explanation_p:'<FONT size=3>Start the transaction <STRONG>Maintain Forecast Profiles</STRONG>.</FONT>',
        action:'ldblclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:289,
        b_height:133,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:406,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.537072, y:0.236622}, DocXY: {x:0.537072, y:0.229191}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 3, name: 'TS_86E01BC5DAC54424AFED13C50E974EE6', label: 'Maintain Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0035.html',
        new_step:'Maintain Forecast Profile'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:' Planning Area',
        fieldicon:'field_icon_19.gif',
        text_d:'FRU_AREA_PLAN',
        explanation_d:'<FONT size=3>Every&nbsp;profile created has to be&nbsp;assigned to a <STRONG>Planning Area.</STRONG> By now the Frutado AG planning area<STRONG> FRU_AREA_PLAN</STRONG> is known.</FONT>',
        explanation_p:'<FONT size=3>Please enter <STRONG>FRU_AREA_PLAN</STRONG> in the <STRONG>Planning Area</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:300,
        b_height:139,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:418,
        b_height_p:66,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.638636, y:0.350683}, DocXY: {x:0.638636, y:0.339666}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 4, name: 'TS_0DCFFA87C7BA45EEB9CB0CB232779C45', label: 'Maintain Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0037.html',
        new_step:'Maintain Forecast Profile'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:' Master Prfl.',
        fieldicon:'field_icon_20.gif',
        text_d:'FRU_CONST_DP',
        explanation_d:'<FONT size=3>The Frutado AG has two <STRONG>Master Prfl.</STRONG>; the first one&nbsp;is for products with a steady demand. It is called&nbsp; <STRONG>FRU_CONST_DP</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please enter the first of the two profiles <STRONG>FRU_CONST_DP</STRONG> in the <STRONG>Master Prfl.</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:407,
        b_height:109,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:608,
        b_height_p:70,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.613245, y:0.418311}, DocXY: {x:0.613245, y:0.405173}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 5, name: 'TS_B0E1B0F5363F41E29587B9C4BC599196', label: 'Maintain Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0039.html',
        new_step:'Maintain Forecast Profile'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Description',
        fieldicon:'field_icon_21.gif',
        text_d:'STEADY DEMAND',
        explanation_d:'</P>\n<P><FONT size=3>The<STRONG> Description </STRONG>can be chosen freely. Its only purpose is to provide&nbsp;information&nbsp;and it does not influence the function of the forecast profile. The text for this particular profile is \"STEADY DEMAND\".</FONT>',
        explanation_p:'<FONT size=3>Please enter <STRONG>STEADY DEMAND</STRONG> in the <STRONG>Description</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:446,
        b_height:132,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:430,
        b_height_p:72,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.52636, y:0.429572}, DocXY: {x:0.52636, y:0.416068}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 6, name: 'TS_F5EBCFB7C7E74DA09A898EE820F08CE8', label: 'Maintain Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0041.html',
        new_step:'Maintain Forecast Profile'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Forecast Key Figure',
        fieldicon:'field_icon_22.gif',
        text_d:'9ADFCST',
        explanation_d:'<FONT size=3>The <STRONG>Forecast Key Figure</STRONG> assigns the forecasted demand to a key figure in the planning area. The key figure of the Frutado AG is called \"Forecast\" and has the according SAP shortcut<STRONG> 9ADFCST</STRONG> which is now entered.</FONT>',
        explanation_p:'<FONT size=3>Please enter <STRONG>9ADFCST</STRONG> in the <STRONG>Forecast Key Figure</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:441,
        b_height:130,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:442,
        b_height_p:68,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.499016, y:0.411246}, DocXY: {x:0.499016, y:0.398337}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 7, name: 'TS_96D2EA609FED4CCFA21788692A1E680A', label: 'Maintain Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0043.html',
        new_step:'Maintain Forecast Profile'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Period Indicator',
        fieldicon:'field_icon_23.gif',
        text_d:'W',
        explanation_d:'<FONT size=3>The <STRONG>Period Indicator</STRONG> specifies the period of time the forecasted demands are to be stored in the system. The Frutado AG would like this to be done <STRONG>weekly</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please enter <STRONG>W</STRONG> (for weekly) in the <STRONG>Period Indicator</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:442,
        b_height:107,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:470,
        b_height_p:68,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.5019, y:0.416907}, DocXY: {x:0.5019, y:0.403815}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 8, name: 'TS_B84032AF106F402D96CF2FCD99B23C52', label: 'Maintain Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0045.html',
        new_step:'Maintain Forecast Profile'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'From',
        fieldicon:'field_icon_24.gif',
        text_d:'21.04.2008',
        explanation_d:'<FONT size=3>The demand planning of the Frutado AG begins on the&nbsp;Monday after the last customer order. This date is entered in the <STRONG>Forecast Horizon</STRONG>. </FONT>\n<P></P>\n<P><FONT size=3></FONT></P>\n<P><FONT size=3>For more information view the planning concept of the Frutado AG.</FONT>',
        explanation_p:'<FONT size=3>Please enter the begin <STRONG>date </STRONG>of the demand planning in the <STRONG>Forecast Horizon</STRONG> box. In our example this date is the 21st of April 2008.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:556,
        b_height:130,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:402,
        b_height_p:104,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.527337, y:0.416907}, DocXY: {x:0.527337, y:0.403815}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 9, name: 'TS_0C1212E7450A4CF9AF33AF0867761434', label: 'Maintain Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0047.html',
        new_step:'Maintain Forecast Profile'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Periods',
        fieldicon:'field_icon_25.gif',
        text_d:'51',
        explanation_d:'<FONT size=3>The number of <STRONG>Periods</STRONG> to be forecasted are entered.&nbsp;In the case of the Frutado AG this is <STRONG>51</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please enter <STRONG>51</STRONG> in the <STRONG>Periods</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:297,
        b_height:104,
        orientation:'NW',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:388,
        b_height_p:74,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.482414, y:0.412665}, DocXY: {x:0.482414, y:0.399695}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 10, name: 'TS_B1A2B83663294DA0B185E62F5D70A6F9', label: 'Maintain Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0049.html',
        new_step:'Maintain Forecast Profile'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'From',
        fieldicon:'field_icon_26.gif',
        text_d:'17.04.2006',
        explanation_d:'<FONT size=3>In the box <STRONG>History Horizon From</STRONG>, the <STRONG>starting date</STRONG> of the historical data is written. This date is two years before the&nbsp;starting date.</FONT>',
        explanation_p:'<FONT size=3>Please enter the <STRONG>starting date</STRONG> of the historical data in the <STRONG>History Horizon From</STRONG> box. In our example this date is the 17th&nbsp;of April 2006.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:374,
        b_height:111,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:400,
        b_height_p:106,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.521462, y:0.42533}, DocXY: {x:0.521462, y:0.412009}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 11, name: 'TS_74A1F48651A9495E91721875D9CD51D0', label: 'Maintain Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0051.html',
        new_step:'Maintain Forecast Profile'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'To',
        fieldicon:'field_icon_27.gif',
        text_d:'11.04.2008',
        explanation_d:'<FONT size=3>In the box <STRONG>History Horizon To</STRONG>, the <STRONG>ending date</STRONG> of the historical data is written. This date is last Friday, as there is no demand on Saturday.</FONT>',
        explanation_p:'<FONT size=3>Please enter the <STRONG>ending date</STRONG> of the historical data in the <STRONG>History Horizon To</STRONG> box. In our example this date is the 11th&nbsp;of April 2008.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:381,
        b_height:109,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:406,
        b_height_p:106,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.517571, y:0.42533}, DocXY: {x:0.517571, y:0.412009}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 12, name: 'TS_650CCB9570064119B84F8B0BEDB82022', label: 'Maintain Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0052.html',
        new_step:'Maintain Forecast Profile'
    });
    ctx.ms.input_radio(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Univariate Forecast',
        fieldicon:'field_icon_28.gif',
        choose_bool:'1',
        explanation_d:'<FONT size=3>As the <STRONG>Univariate Forecast</STRONG> profile is used for the products with steady demand,&nbsp;this value is selected.</FONT>',
        explanation_p:'<FONT size=3>Select the value <STRONG>Univariate Forecast</STRONG>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:426,
        b_height:84,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:268,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.568353, y:0.759152}, DocXY: {x:0.568353, y:0.735302}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 13, name: 'TS_0ACC4BD86D6F4A92BDD79961180E8E6E', label: 'Maintain Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0054.html',
        new_step:'Maintain Forecast Profile'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Univariate Forecast',
        fieldicon:'field_icon_29.gif',
        text_d:'FRU_FCST_CONST_DP',
        explanation_d:'<FONT size=3>The <STRONG>Univariate Forecast</STRONG> is assigned directly to the master profile. In the case of&nbsp;the products with steady demand it is called <STRONG>FRU_FCST_CONST_DP</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please enter <STRONG>FRU_FCST_CONST_DP</STRONG> in the <STRONG>Univariate Forecast</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:405,
        b_height:107,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:510,
        b_height_p:70,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.643534, y:0.749279}, DocXY: {x:0.643534, y:0.725765}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 14, name: 'TS_6CFE512EFA1A4DFCAF06DF1CDA745C94', label: 'Maintain Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0055.html',
        new_step:'Maintain Forecast Profile'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Univariate Profile',
        fieldicon:'field_icon_30.gif',
        explanation_d:'<FONT size=3>In order to define the forecast strategy of the <STRONG>Univariate profile</STRONG> the tab is selected.</FONT>',
        explanation_p:'<FONT size=3>Click on the <STRONG>Univarite Profile</STRONG> tab to define the forecast strategie.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:350,
        b_height:84,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:326,
        b_height_p:70,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.480461, y:0.421134}, DocXY: {x:0.480461, y:0.407889}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 15, name: 'TS_88EA10E27D7044AC8C4432572D738FE6', label: 'Univariate Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0057.html',
        new_step:'Univariate Forecast Profile'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Text',
        fieldicon:'field_icon_31.gif',
        text_d:'STEADY DEMAND',
        explanation_d:'<FONT size=3>The <STRONG>Text</STRONG> can be chosen freely. Its only purpose is to provide information&nbsp;and it does not influence the function of the univariate profile. The text for this particular profile is \"STEADY DEMAND\".</FONT>',
        explanation_p:'<FONT size=3>Please enter <STRONG>STEADY DEMAND</STRONG> in the <STRONG>Text</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:413,
        b_height:126,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:1}, DocXY: {x:0, y:0}, Off: {x:-10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:410,
        b_height_p:72,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.494133, y:0.453529}, DocXY: {x:0.494133, y:0.439292}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 16, name: 'TS_D72F5B912247490DAB0E3FBA4EF334D1', label: 'Univariate Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0059.html',
        new_step:'Univariate Forecast Profile'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Key Figure',
        fieldicon:'field_icon_32.gif',
        text_d:'9AVHISTORY',
        explanation_d:'<FONT size=3>The forecast is based on the <STRONG>Key&nbsp;Figure</STRONG> defined in this box. In the case of the Frutado AG the&nbsp;forecast is based on the historical data which has the according SAP shortcut<STRONG> 9AVHISTORY.</STRONG></FONT>',
        explanation_p:'<FONT size=3>Please enter <STRONG>9AVHISTORY</STRONG> in the <STRONG>Key Figure</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:400,
        b_height:129,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:390,
        b_height_p:72,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.487297, y:0.460548}, DocXY: {x:0.487297, y:0.446113}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 17, name: 'TS_06A74F2E67EC43A2AE90100D9D29796E', label: 'Univariate Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0061.html',
        new_step:'Univariate Forecast Profile'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Version',
        fieldicon:'field_icon_33.gif',
        text_d:'FRU_PV_DP',
        explanation_d:'<FONT size=3>In the first lesson of the DP module the Data was successfully transferred to&nbsp;the key figure assigned to the planning version <STRONG>FRU_PV_DP</STRONG>. This <STRONG>Version</STRONG> is entered.</FONT>',
        explanation_p:'<FONT size=3>Please enter <STRONG>FRU_PV_DP</STRONG> in the <STRONG>Version</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:450,
        b_height:105,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.461906, y:0.398581}, DocXY: {x:0.461906, y:0.386084}, Off: {x:1, y:6}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:386,
        b_height_p:70,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.474617, y:0.461967}, DocXY: {x:0.474617, y:0.447471}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 18, name: 'TS_D5B3B688DEBA40B6A02E5F73BF882167', label: 'Univariate Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0064.html',
        new_step:'Univariate Forecast Profile'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Forecast Strategy',
        fieldicon:'field_icon_35.gif',
        text_d:'12',
        explanation_d:'<FONT size=3>The SAP APO DP module has a number of <STRONG>Forecast Strategies</STRONG>.&nbsp;The Frutado AG has already evaluated the most appropriate strategy:&nbsp;exponential smoothing with an alpha adaption which has the according SAP shortcut <STRONG>12</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please enter the SAP shortcut <STRONG>12 </STRONG>(exponential smoothing with an alpha adaption) in the <STRONG>Forecast Strategy</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:516,
        b_height:130,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:478,
        b_height_p:88,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.487297, y:0.440818}, DocXY: {x:0.487297, y:0.426978}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 19, name: 'TS_0588EC4DF17F400E91112E5D9D94506E', label: 'Univariate Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0065.html',
        new_step:'Univariate Forecast Profile'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Adopt',
        fieldicon:'field_icon_36.gif',
        explanation_d:'<FONT size=3>The template is <STRONG>refreshed</STRONG>, so the chosen forecast strategy can be taken into account.</FONT>',
        explanation_p:'<FONT size=3>Please <STRONG>refresh</STRONG> the template by pressing </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_36.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:393,
        b_height:84,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:354,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.491188, y:0.456306}, DocXY: {x:0.491188, y:0.441993}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 20, name: 'TS_6563E34FD1354AF08AA81DB8292C86D1', label: 'Univariate Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0066.html',
        new_step:'Univariate Forecast Profile'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Error Measure',
        fieldicon:'field_icon_37.gif',
        explanation_d:'<FONT size=3>The <STRONG>Error Measure</STRONG> defines which type of error is the basis for the adaption of alpha. A list of forecast errors is opened.</FONT>',
        explanation_p:'<FONT size=3>Open a list of forecast Errors by clicking the <STRONG>Error Measure</STRONG> box.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:378,
        b_height:108,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:510,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.504845, y:0.433799}, DocXY: {x:0.504845, y:0.420188}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 21, name: 'TS_AC558DA7BAB24D2D82175D8860F9D4DA', label: 'Univariate Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0067.html',
        new_step:'Univariate Forecast Profile'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'RMSE',
        fieldicon:'field_icon_38.gif',
        explanation_d:'<FONT size=3>The error measure to be used is the root mean squared error which is shortend to <STRONG>RMSE</STRONG> by SAP.</FONT>',
        explanation_p:'<FONT size=3>Select the entry <STRONG>RMSE</STRONG> (root mean squared error) by clicking it.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:311,
        b_height:107,
        orientation:'E',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:464,
        b_height_p:50,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.605463, y:0.671809}, DocXY: {x:0.605463, y:0.650752}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 22, name: 'TS_2FEF914FA64248589F0E0053E15FB590', label: 'Univariate Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0069.html',
        new_step:'Univariate Forecast Profile'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Alpha Start Value',
        fieldicon:'field_icon_39.gif',
        text_d:'0,1',
        explanation_d:'<FONT size=3>The<STRONG> Alpha Start Value</STRONG> for the adaption process is <STRONG>0,1.</STRONG></FONT>',
        explanation_p:'<FONT size=3>Please enter <STRONG>0,1</STRONG> in the <STRONG>Alpha Start Value</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:420,
        b_height:60,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:448,
        b_height_p:68,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.621088, y:0.47039}, DocXY: {x:0.621088, y:0.455665}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 23, name: 'TS_19EDCD67398046508682B7A080A0F894', label: 'Univariate Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0071.html',
        new_step:'Univariate Forecast Profile'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Alpha End Val.',
        fieldicon:'field_icon_40.gif',
        text_d:'0,5',
        explanation_d:'<FONT size=3>The <STRONG>Alpha End Value</STRONG> for the adaption process is <STRONG>0,5.</STRONG></FONT>',
        explanation_p:'<FONT size=3>Please enter <STRONG>0,5</STRONG> in the <STRONG>Alpha End Value</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:385,
        b_height:59,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:436,
        b_height_p:72,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.617182, y:0.47039}, DocXY: {x:0.617182, y:0.455665}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 24, name: 'TS_E4B89DABD1BE43C8A172F70C60650A6D', label: 'Univariate Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0073.html',
        new_step:'Univariate Forecast Profile'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Alpha Increment',
        fieldicon:'field_icon_41.gif',
        text_d:'0,05',
        explanation_d:'<FONT size=3>The<STRONG> Alpha increment</STRONG> for the adaption process is <STRONG>0,05.</STRONG></FONT>',
        explanation_p:'<FONT size=3>Please enter <STRONG>0,05</STRONG> in the <STRONG>Alpha increment</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:408,
        b_height:62,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, DocXY: {x:0, y:0}, Off: {x:-10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:486,
        b_height_p:68,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.620081, y:0.469017}, DocXY: {x:0.620081, y:0.454292}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 25, name: 'TS_0820C4D3A66B49E897FEEDABE0B0FD19', label: 'Univariate Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0074.html',
        new_step:'Univariate Forecast Profile'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Custom  Container',
        fieldicon:'field_icon_42.gif',
        explanation_d:'<FONT size=3>To view the forecast errors of the strategy the template is <STRONG>scrolled</STRONG> downwards to the end.</FONT>',
        explanation_p:'<FONT size=3>Please <STRONG>scroll </STRONG>to the bottom of the template.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:396,
        b_height:81,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, 'eep_path=\"0:0:0:0:0:1:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"DIV\"};\r\neep_coll={n:\"\",i:0,ii:-1};\r\neep_parents=[{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_DIV_\";'), XY: {x:0, y:0.498909}, DocXY: {x:0.970703, y:0.560693}, Off: {x:-424, y:-73}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:382,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.551751, y:0.430976}, DocXY: {x:0.551751, y:0.417426}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 26, name: 'TS_D6CE945F698B4CEE82DEC3E798DC98D4', label: 'Univariate Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0075.html',
        new_step:'Univariate Forecast Profile'
    });
    ctx.ms.input_radio(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'MAD',
        fieldicon:'field_icon_43.gif',
        choose_bool:'1',
        explanation_d:'<FONT size=3>The&nbsp;<STRONG>Forecast Error</STRONG> selected is calculated during the forecasting process and is provided for later analysis. The Frutado AG wants to analyze a number of forecast errors, including the mean absolute deviation which is shortend to <STRONG>MAD</STRONG> by SAP.</FONT>',
        explanation_p:'<FONT size=3>Select all the <STRONG>Forecast Errors</STRONG> the Frutado AG wants to analyze. Please beginn with the <STRONG>MAD</STRONG> (mean absolute deviation).</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:540,
        b_height:129,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:526,
        b_height_p:70,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.622065, y:0.697185}, DocXY: {x:0.622065, y:0.675288}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 27, name: 'TS_4713ADB6EFB44D1A8AAB3E02DDA9826F', label: 'Univariate Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0076.html',
        new_step:'Univariate Forecast Profile'
    });
    ctx.ms.input_radio(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'MSE',
        fieldicon:'field_icon_44.gif',
        choose_bool:'1',
        explanation_d:'<FONT size=3>The next forecast error selected is the mean squared error which is shortend to <STRONG>MSE</STRONG> by SAP.</FONT>',
        explanation_p:'<FONT size=3>Select the forecast error <STRONG>MSE</STRONG> (mean squared error).</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:414,
        b_height:84,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:412,
        b_height_p:50,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.578119, y:0.714092}, DocXY: {x:0.578119, y:0.691661}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 28, name: 'TS_23D03ECF5F554C10BB6472454B2D1D8C', label: 'Univariate Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0077.html',
        new_step:'Univariate Forecast Profile'
    });
    ctx.ms.input_radio(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'RMSE',
        fieldicon:'field_icon_45.gif',
        choose_bool:'1',
        explanation_d:'<FONT size=3>The next forecast error selected is the root mean squared error which is shortend to <STRONG>RMSE</STRONG> by SAP.</FONT>',
        explanation_p:'<FONT size=3>Select the forecast error <STRONG>RMSE</STRONG> (root mean squared error).</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:455,
        b_height:72,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:454,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.587854, y:0.715496}, DocXY: {x:0.587854, y:0.693004}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 29, name: 'TS_9308CCB9A2DC4D3CBFFB3B664B8A5342', label: 'Univariate Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0078.html',
        new_step:'Univariate Forecast Profile'
    });
    ctx.ms.input_radio(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'MAPE',
        fieldicon:'field_icon_46.gif',
        choose_bool:'1',
        explanation_d:'<FONT size=3>The next forecast error selected is the mean absolte percent error which is shortend to <STRONG>MAPE</STRONG> by SAP.</FONT>',
        explanation_p:'<FONT size=3>Select the forecast error <STRONG>MAPE</STRONG> (mean absolute percent error).</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:439,
        b_height:77,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:504,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.596674, y:0.707027}, DocXY: {x:0.596674, y:0.684825}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 30, name: 'TS_E392159CDAFC4895BED20E423980735F', label: 'Univariate Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0079.html',
        new_step:'Univariate Forecast Profile'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:' Single Profile',
        fieldicon:'field_icon_47.gif',
        explanation_d:'<FONT size=3>The univariate forecast profile has been completly defined. The <STRONG>Single Profile</STRONG> is now <STRONG>saved</STRONG>,</FONT>',
        explanation_p:'<FONT size=3>You have succesfully defined the unvariate forecast profile. Please <STRONG>save</STRONG> the <STRONG>Single Profile</STRONG>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:424,
        b_height:83,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:452,
        b_height_p:68,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.650355, y:0.437995}, DocXY: {x:0.650355, y:0.424262}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 31, name: 'TS_D3CD94D6E66D48CFAD1ADEDDE173FE0C', label: 'Univariate Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0080.html',
        new_step:'Univariate Forecast Profile'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Master Prfl.',
        fieldicon:'field_icon_48.gif',
        explanation_d:'<FONT size=3>In order to&nbsp;complete the forecast profile the <STRONG>Master Profil</STRONG> tab is selected.</FONT>',
        explanation_p:'<FONT size=3>Click on the <STRONG>Master Profile</STRONG> tab to complete the forcast profile.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:320,
        b_height:82,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:480,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.665034, y:0.433799}, DocXY: {x:0.665034, y:0.420188}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 32, name: 'TS_575AFE50C84741E5B9A6A069C02EDE32', label: 'Maintain Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0081.html',
        new_step:'Maintain Forecast Profile'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Save',
        fieldicon:'field_icon_49.gif',
        explanation_d:'<FONT size=3>The master profile is <STRONG>saved</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please <STRONG>save</STRONG> the master profile.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:240,
        b_height:57,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:262,
        b_height_p:50,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.571283, y:0.356344}, DocXY: {x:0.571283, y:0.345144}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 33, name: 'TS_626A9305A082464FBFC9F8B5F1183ACF', label: '(kein Titel)', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0085.html',
        new_step:'Maintain Forecast Profile'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3>As shown at the bottom of the screen the forecast profile has been succesfully saved. Now the second profile is created. The approach is similar to the first profile with the biggest diference being the definition of the forecast strategy. Therefore the main focus will be on this part of the profile.</FONT>',
        type:'none',
        all_like_demo:0,
        explanation_p:'<FONT size=3>As shown at the bottom of the screen you have succesfully saved the forecast profile. Now you must creat the second profile. The approach will be very similar to the first profile, the main difference being the definition of the forecast strategy.</FONT>',
        in_demo:1,
        in_practice:1,
        in_test:1,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.641581, y:0.512673}, DocXY: {x:0.641581, y:0.49659}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:498,
        b_height:200,
        orientation:'C',
        b_duration:60,
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.672847, y:0.495781}, DocXY: {x:0.672847, y:0.480217}},
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:510,
        b_height_p:137,
        orientation_p:'C',
        b_duration_p:60
    });
    ctx.ms.end_tourstop(ctx, win_, 20 , {});
    win_.evt_simple(20,4000);
    win_.evt_simple(20,3902);
    return true;
}

function msglist_0035(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 34, name: 'TS_57E578778744481D97E201C68AC64849', label: 'Maintain Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0085.html',
        new_step:'Maintain Forecast Profile'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Initialize Fields',
        fieldicon:'field_icon_52.gif',
        explanation_d:'<FONT size=3>In order to create a new forecast profile a new template is <STRONG>initialized</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>In order to create a new forecast profile <STRONG>initialize</STRONG> a new template by&nbsp;clicking on&nbsp;</FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_52.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:307,
        b_height:84,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:362,
        b_height_p:74,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.601526, y:0.384497}, DocXY: {x:0.601526, y:0.372427}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 35, name: 'TS_186E1F5F617B49F2BC82A37D030EA1AA', label: 'Maintain Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0086.html',
        new_step:'Maintain Forecast Profile'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Planning Area',
        fieldicon:'field_icon_53.gif',
        text_d:'FRU_AREA_PLAN',
        explanation_d:'<FONT size=3>The template is completed&nbsp;in a similar way&nbsp;to&nbsp;the first profile, only the name of the profile and the description are different.</FONT>',
        explanation_p:'<FONT size=3>The template is filled in similar to the first profile. Please enter <STRONG>FRU_AREA_PLAN</STRONG> in the Planning Area box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:370,
        b_height:102,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:796,
        b_height_p:68,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.620081, y:0.414069}, DocXY: {x:0.620081, y:0.401099}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 36, name: 'TS_1F0938EECC1B4547966DD23B64184532', label: 'Maintain Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0088.html',
        new_step:'Maintain Forecast Profile'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:' Master Prfl.',
        fieldicon:'field_icon_54.gif',
        text_d:'FRU_SEAS_DP',
        explanation_d:'<FONT size=3>This<STRONG> Master Prfl.</STRONG> is created for products with a seasonal demand. It is called <STRONG>FRU_SEAS_DP.</STRONG></FONT>',
        explanation_p:'<FONT size=3>Please enter <STRONG>FRU_SEAS_DP</STRONG> in the <STRONG>Master Prfl.</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:409,
        b_height:82,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:434,
        b_height_p:72,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.52636, y:0.418311}, DocXY: {x:0.52636, y:0.405173}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 37, name: 'TS_7594E712A4374B30A79A33E702D4B2BE', label: 'Maintain Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0090.html',
        new_step:'Maintain Forecast Profile'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Description',
        fieldicon:'field_icon_55.gif',
        text_d:'SEASONAL DEMAND',
        explanation_d:'<FONT size=3>Again the<STRONG> Description </STRONG>can be choosen freely.&nbsp;The text for this particular profile is \"SEASONAL DEMAND\".</FONT>',
        explanation_p:'<FONT size=3>Please enter <STRONG>SEASONAL DEMAND</STRONG> in the <STRONG>Description</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:479,
        b_height:80,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:462,
        b_height_p:66,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.524407, y:0.411246}, DocXY: {x:0.524407, y:0.398337}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 38, name: 'TS_10A10E14294A467185538A3BB8742160', label: 'Maintain Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0092.html',
        new_step:'Maintain Forecast Profile'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Forecast Key Figure',
        fieldicon:'field_icon_56.gif',
        text_d:'9ADFCST',
        explanation_d:'<FONT size=3>The next few entries are exactly the same as with the first profile. For more information view the first profile.</FONT>',
        explanation_p:'<FONT size=3>Please enter <STRONG>9ADFCST</STRONG> in the <STRONG>Forecast Key Figure</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:361,
        b_height:104,
        orientation:'E',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:394,
        b_height_p:68,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.508782, y:0.414069}, DocXY: {x:0.508782, y:0.401099}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 39, name: 'TS_41BDE068928F485D94A84E2D047B4359', label: 'Maintain Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0094.html',
        new_step:'Maintain Forecast Profile'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Period Indicator',
        fieldicon:'field_icon_57.gif',
        text_d:'W',
        explanation_d:'<B></B>&nbsp;',
        explanation_p:'<FONT size=3>Please enter <STRONG>W</STRONG> (for weekly) in the <STRONG>Period Indicator</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.0273289, y:0.936599}, DocXY: {x:0.0273289, y:0.90721}, Off: {x:-3, y:7}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:432,
        b_height_p:64,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.507805, y:0.415488}, DocXY: {x:0.507805, y:0.402457}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 40, name: 'TS_37DF61194D3D495D9FD6260909DBD361', label: 'Maintain Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0096.html',
        new_step:'Maintain Forecast Profile'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'From',
        fieldicon:'field_icon_58.gif',
        text_d:'21.04.2008',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>Please enter the begin <STRONG>date </STRONG>of the demand planning in the <STRONG>Forecast Horizon</STRONG> box. In our example this date is the 21st of April 2008.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.0273289, y:0.935195}, DocXY: {x:0.0273289, y:0.905852}, Off: {x:11, y:5}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:600,
        b_height_p:82,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.572244, y:0.404227}, DocXY: {x:0.572244, y:0.391516}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 41, name: 'TS_FE29D0ADC43447429C4F72FB787E646A', label: 'Maintain Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0098.html',
        new_step:'Maintain Forecast Profile'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Periods',
        fieldicon:'field_icon_59.gif',
        text_d:'51',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>Please enter <STRONG>51</STRONG> in the <STRONG>Periods</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.034165, y:0.933776}, DocXY: {x:0.034165, y:0.904494}, Off: {x:-2, y:12}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:380,
        b_height_p:72,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.481453, y:0.419715}, DocXY: {x:0.481453, y:0.406531}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 42, name: 'TS_54840DD1F8EB4929B846A7E838079F2E', label: 'Maintain Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0100.html',
        new_step:'Maintain Forecast Profile'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'From',
        fieldicon:'field_icon_60.gif',
        text_d:'17.04.2006',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>Please enter the <STRONG>starting date</STRONG> of the historical data in the <STRONG>History Horizon From</STRONG> box. In our example this date is the 17th&nbsp;of April 2006.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.0263676, y:0.92958}, DocXY: {x:0.0263676, y:0.900374}, Off: {x:3, y:6}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:610,
        b_height_p:88,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.564416, y:0.42533}, DocXY: {x:0.564416, y:0.412009}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 43, name: 'TS_340C239E3CB44BAFB8B9B8D23B89B84F', label: 'Maintain Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0102.html',
        new_step:'Maintain Forecast Profile'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'To',
        fieldicon:'field_icon_61.gif',
        text_d:'11.04.2008',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>Please enter the <STRONG>ending date</STRONG> of the historical data in the <STRONG>History Horizon To</STRONG> box. In our example this date is the 11th&nbsp;of April 2008.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.0351568, y:0.932357}, DocXY: {x:0.0351568, y:0.903136}, Off: {x:2, y:4}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:534,
        b_height_p:88,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.551751, y:0.430976}, DocXY: {x:0.551751, y:0.417426}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 44, name: 'TS_5E46FC86CA73440B9ABAC1053D42D845', label: 'Maintain Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0103.html',
        new_step:'Maintain Forecast Profile'
    });
    ctx.ms.input_radio(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Univariate Forecast',
        fieldicon:'field_icon_62.gif',
        choose_bool:'1',
        explanation_d:'&nbsp;',
        explanation_p:'<FONT size=3>Select the value <STRONG>Univariate Forecast</STRONG>.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'_default',
        b_width:20,
        b_height:20,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.0224308, y:0.92958}, DocXY: {x:0.0224308, y:0.900374}, Off: {x:4, y:5}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:284,
        b_height_p:48,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.583963, y:0.801404}, DocXY: {x:0.583963, y:0.776257}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 45, name: 'TS_F8AF2E0C06DB4AF48DCCEB9D699DFE8B', label: 'Maintain Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0105.html',
        new_step:'Maintain Forecast Profile'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Univariate Forecast',
        fieldicon:'field_icon_63.gif',
        text_d:'FRU_FCST_SEAS_DP',
        explanation_d:'<FONT size=3>The<STRONG> Univariate Forecast</STRONG> for products with seasonal demand is called <STRONG>FRU_FCST_SEAS_DP</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please enter <STRONG>FRU_FCST_SEAS_DP</STRONG> in the <STRONG>Univariate Forecast</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:379,
        b_height:85,
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:514,
        b_height_p:70,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.667964, y:0.781674}, DocXY: {x:0.667964, y:0.757168}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 46, name: 'TS_3D5EEA32601A4C528729082EE0741993', label: 'Maintain Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0106.html',
        new_step:'Maintain Forecast Profile'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Univariate Profile',
        fieldicon:'field_icon_64.gif',
        explanation_d:'<FONT size=3>In order to define the forecast strategy of the <STRONG>Univariate profile</STRONG> the tab is selected.</FONT>',
        explanation_p:'<FONT size=3>Click on the <STRONG>Univarite Profile</STRONG> tab to define the forecast strategy.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:391,
        b_height:79,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:476,
        b_height_p:50,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.519524, y:0.418311}, DocXY: {x:0.519524, y:0.405173}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 47, name: 'TS_5B960587A19D401F9713B4CE843A7AB1', label: 'Univariate Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0108.html',
        new_step:'Univariate Forecast Profile'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Text',
        fieldicon:'field_icon_65.gif',
        text_d:'SEASONAL DEMAND',
        explanation_d:'<FONT size=3>Again the<STRONG> Text</STRONG> can be chosen freely. The text for this particular profile is \"SEASONAL DEMAND\".</FONT>',
        explanation_p:'<FONT size=3>Please enter <STRONG>SEASONAL DEMAND</STRONG> in the <STRONG>Text</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
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
        b_height:83,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:1}, DocXY: {x:0, y:0}, Off: {x:-10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:390,
        b_height_p:70,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.52047, y:0.46479}, DocXY: {x:0.52047, y:0.450187}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 48, name: 'TS_ED2BD2E2F26146168D18CE04D354394F', label: 'Univariate Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0110.html',
        new_step:'Univariate Forecast Profile'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Key Figure',
        fieldicon:'field_icon_66.gif',
        text_d:'9AVHISTORY',
        explanation_d:'<FONT size=3>The <STRONG>Key Figure</STRONG> of this profile is also the historical data with the according SAP shortcut <STRONG>9AVHISTORY</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please enter <STRONG>9AVHISTORY</STRONG> in the <STRONG>Key Figure</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:422,
        b_height:81,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:410,
        b_height_p:68,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.519524, y:0.459144}, DocXY: {x:0.519524, y:0.444755}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 49, name: 'TS_03A7BCA7C0854922AA3D6652CAB4D3C0', label: 'Univariate Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0112.html',
        new_step:'Univariate Forecast Profile'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Version',
        fieldicon:'field_icon_67.gif',
        text_d:'FRU_PV_DP',
        explanation_d:'<FONT size=3>Again the planning <STRONG>Version</STRONG> of the DP module <STRONG>FRU_PV_DP</STRONG> is entered.</FONT>',
        explanation_p:'<FONT size=3>Please enter <STRONG>FRU_PV_DP</STRONG> in the <STRONG>Version</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:302,
        b_height:79,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', 'forms', 0, 0, 'eep_path=\"0:0:0:0:0:1:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={name:\"Objekt_0\",tagName:\"INPUT\",type:\"text\"};\r\neep_coll={n:\"forms\",i:0,ii:0};\r\neep_parents=[{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_INPUT_\";'), XY: {x:0.986481, y:0.647059}, DocXY: {x:0.468742, y:0.377905}, Off: {x:2, y:7}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:380,
        b_height_p:74,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.512688, y:0.454902}, DocXY: {x:0.512688, y:0.440635}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 50, name: 'TS_9686854E431D419F8B66AC014B355E09', label: 'Univariate Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0114.html',
        new_step:'Univariate Forecast Profile'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Forecast Strategy',
        fieldicon:'field_icon_68.gif',
        text_d:'35',
        explanation_d:'<FONT size=3>The most appropriate <STRONG>Forecast Strategy</STRONG> for Frutado AG products with seasonal demand is&nbsp;seasonal linear regression, which has the according SAP shortcut <STRONG>35</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please enter the SAP shortcut <STRONG>35</STRONG> (seasonal linear regression)&nbsp;in the <STRONG>Forecast Strategy</STRONG>&nbsp;box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
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
        b_height:125,
        orientation:'E',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:450,
        b_height_p:82,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.550744, y:0.440818}, DocXY: {x:0.550744, y:0.426978}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 51, name: 'TS_98CBDA89D4BC4FC0B2894F0DC54B5013', label: 'Univariate Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0115.html',
        new_step:'Univariate Forecast Profile'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Adopt',
        fieldicon:'field_icon_69.gif',
        explanation_d:'<FONT size=3>Again the template is <STRONG>refreshed</STRONG>, so the chosen forecast strategy can be taken into account.</FONT>',
        explanation_p:'<FONT size=3>Please <STRONG>refresh</STRONG> the template by pressing</FONT><B><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_69.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:411,
        b_height:83,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:360,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.471687, y:0.460548}, DocXY: {x:0.471687, y:0.446113}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 52, name: 'TS_81E2FCB52F274805B1E21BD5E70406B3', label: 'Univariate Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0116.html',
        new_step:'Univariate Forecast Profile'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Continue',
        fieldicon:'field_icon_70.gif',
        explanation_d:'<FONT size=3>The periods of the seasonal forecast&nbsp;are defined&nbsp;in a few steps and the information is <STRONG>acknowledged</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please<STRONG> Continue</STRONG> with the template as you will define the periods of the seasonal forecast in a few steps.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:395,
        b_height:97,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:428,
        b_height_p:66,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.43357, y:0.721111}, DocXY: {x:0.43357, y:0.698497}},
        click_count:1,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 53, name: 'TS_611793CA5CF04BEB96CB3CE13098BCEC', label: 'Univariate Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0122.html',
        new_step:'Univariate Forecast Profile'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Periods',
        fieldicon:'field_icon_73.gif',
        text_d:'52',
        explanation_d:'<FONT size=3>The products of the Frutado AG have a seasonal cycle of one year. The number of <STRONG>Periods</STRONG> is set to <STRONG>52</STRONG>, because the period indicator is set to weekly.</FONT>',
        explanation_p:'<FONT size=3>Please enter <STRONG>52</STRONG> in the <STRONG>Periods</STRONG> box.<BR>Confirm your entry by pressing the Tab key.</FONT>',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        confirmation_tab:1,
        confirmation_enter:0,
        show_hl_d:1,
        show_hl_p:0,
        set_focus:0,
        animated:1,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:299,
        b_height:121,
        orientation:'W',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.449226, y:0.505623}, DocXY: {x:0.459373, y:0.47744}, Off: {x:-76, y:-11}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:382,
        b_height_p:66,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.551751, y:0.467613}, DocXY: {x:0.551751, y:0.452934}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 54, name: 'TS_D34167B61EC84ECDBEC1462C6AC3FB85', label: 'Univariate Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0127.html',
        new_step:'Univariate Forecast Profile'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:' Single Profile',
        fieldicon:'field_icon_78.gif',
        explanation_d:'<FONT size=3>After selecting the same <STRONG>Forecast Errors</STRONG> as with the first profile, the univariate forecast has been completly defined. The univariate forecast has been completly defined. The <STRONG>Single Profile</STRONG> is now <STRONG>saved</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>You have succesfully defined the unvariate forecast profile. Please <STRONG>save</STRONG> the <STRONG>Single Profile</STRONG>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:379,
        b_height:85,
        orientation:'S',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0:0', 'images', 1, 0, 'eep_path=\"0:0:0:0:0:1:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:1,ii:-1};\r\neep_parents=[{name:\"Objekt_0\",tagName:\"BUTTON\",type:\"button\"},\r\n{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_\";'), XY: {x:0.396216, y:0.476158}, DocXY: {x:0.163287, y:0.167926}, Off: {x:145, y:136}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:490,
        b_height_p:68,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.59469, y:0.47039}, DocXY: {x:0.59469, y:0.455665}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 55, name: 'TS_3159538A5364498AA3B305AB051281C9', label: 'Univariate Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0128.html',
        new_step:'Univariate Forecast Profile'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Master Prfl.',
        fieldicon:'field_icon_79.gif',
        explanation_d:'<FONT size=3>In order to complete the forecast profile the <STRONG>Master Profil</STRONG> tab is selected.</FONT>',
        explanation_p:'<FONT size=3>Click on the <STRONG>Master Profile</STRONG> tab to complete the forcast profile.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:327,
        b_height:77,
        orientation:'C',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, 'eep_path=\"0:0:0:0:0:1:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"DIV\"};\r\neep_coll={n:\"\",i:0,ii:-1};\r\neep_parents=[{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_DIV_\";'), XY: {x:0.569894, y:0.300008}, DocXY: {x:0.16405, y:0.21178}, Off: {x:115, y:233}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:514,
        b_height_p:58,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.59469, y:0.47039}, DocXY: {x:0.59469, y:0.455665}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 56, name: 'TS_4C91BB6B43D847648C37B740B0CC2081', label: 'Maintain Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0129.html',
        new_step:'Maintain Forecast Profile'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Save',
        fieldicon:'field_icon_80.gif',
        explanation_d:'<FONT size=3>The master profile is <STRONG>saved</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>Please <STRONG>save</STRONG> the master profile.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:258,
        b_height:56,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:266,
        b_height_p:50,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.60351, y:0.307027}, DocXY: {x:0.60351, y:0.297414}},
        click_count:1,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 57, name: 'TS_29E394169A20432BBE55D491EB3611F8', label: 'Maintain Forecast Profile', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0130.html',
        new_step:'Maintain Forecast Profile'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Exit',
        fieldicon:'field_icon_81.gif',
        explanation_d:'<FONT size=3>The second profile has also been saved succesfully.&nbsp; The transaction is left by pressing <STRONG>exit</STRONG>.</FONT>',
        explanation_p:'<FONT size=3>You have succesfully created a second forecast profile. Now <STRONG>exit</STRONG> the transaction by pressing </FONT><B><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_81.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:415,
        b_height:81,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:478,
        b_height_p:75,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.627924, y:0.405631}, DocXY: {x:0.627924, y:0.392905}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 58, name: 'TS_6E48D99C6DDC4A25BC57F11B82F98FFB', label: 'SAP Easy Access  mySAP Supply Chain Management', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0131.html',
        new_step:'SAP Easy Access  mySAP Supply Chain Management'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3>This&nbsp;step of the demand planning process is finished. Two forecast profiles have been created succesfully.&nbsp;The following lesson deals with the calculation of proportional factors.</FONT>',
        type:'none',
        all_like_demo:0,
        explanation_p:'<FONT size=3>You have successfully created two forecast profiles. The following step in the demand planning process is the calculation of proportional factors.</FONT>',
        in_demo:1,
        in_practice:1,
        in_test:1,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.643534, y:0.433799}, DocXY: {x:0.643534, y:0.420188}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:522,
        b_height:148,
        orientation:'C',
        b_duration:60,
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.599573, y:0.423911}, DocXY: {x:0.599573, y:0.410636}},
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:580,
        b_height_p:97,
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
    content.userHeader['title'] = 'Create Forecast Profiles';
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
    sub.uid = 'TS_FCE4D4D90945407688AAF5B454458E07';
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
    sub.uid = 'TS_2E498A3A2E194D209E93C5E329F288DF';
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
    sub.uid = 'TS_5D0817ED6CE4462F9A7E4F7B5BA66612';
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
    sub.uid = 'TS_86E01BC5DAC54424AFED13C50E974EE6';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0005';
    sub.audio = '';
    sub.title = 'Maintain Forecast Profile';
    sub.uid = 'TS_0DCFFA87C7BA45EEB9CB0CB232779C45';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0006';
    sub.audio = '';
    sub.title = 'Maintain Forecast Profile';
    sub.uid = 'TS_B0E1B0F5363F41E29587B9C4BC599196';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0007';
    sub.audio = '';
    sub.title = 'Maintain Forecast Profile';
    sub.uid = 'TS_F5EBCFB7C7E74DA09A898EE820F08CE8';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0008';
    sub.audio = '';
    sub.title = 'Maintain Forecast Profile';
    sub.uid = 'TS_96D2EA609FED4CCFA21788692A1E680A';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0009';
    sub.audio = '';
    sub.title = 'Maintain Forecast Profile';
    sub.uid = 'TS_B84032AF106F402D96CF2FCD99B23C52';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0010';
    sub.audio = '';
    sub.title = 'Maintain Forecast Profile';
    sub.uid = 'TS_0C1212E7450A4CF9AF33AF0867761434';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0011';
    sub.audio = '';
    sub.title = 'Maintain Forecast Profile';
    sub.uid = 'TS_B1A2B83663294DA0B185E62F5D70A6F9';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0012';
    sub.audio = '';
    sub.title = 'Maintain Forecast Profile';
    sub.uid = 'TS_74A1F48651A9495E91721875D9CD51D0';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0013';
    sub.audio = '';
    sub.title = 'Maintain Forecast Profile';
    sub.uid = 'TS_650CCB9570064119B84F8B0BEDB82022';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0014';
    sub.audio = '';
    sub.title = 'Maintain Forecast Profile';
    sub.uid = 'TS_0ACC4BD86D6F4A92BDD79961180E8E6E';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0015';
    sub.audio = '';
    sub.title = 'Maintain Forecast Profile';
    sub.uid = 'TS_6CFE512EFA1A4DFCAF06DF1CDA745C94';
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
    sub.uid = 'TS_88EA10E27D7044AC8C4432572D738FE6';
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
    sub.uid = 'TS_D72F5B912247490DAB0E3FBA4EF334D1';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0018';
    sub.audio = '';
    sub.title = 'Univariate Forecast Profile';
    sub.uid = 'TS_06A74F2E67EC43A2AE90100D9D29796E';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0019';
    sub.audio = '';
    sub.title = 'Univariate Forecast Profile';
    sub.uid = 'TS_D5B3B688DEBA40B6A02E5F73BF882167';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0020';
    sub.audio = '';
    sub.title = 'Univariate Forecast Profile';
    sub.uid = 'TS_0588EC4DF17F400E91112E5D9D94506E';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0021';
    sub.audio = '';
    sub.title = 'Univariate Forecast Profile';
    sub.uid = 'TS_6563E34FD1354AF08AA81DB8292C86D1';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0022';
    sub.audio = '';
    sub.title = 'Univariate Forecast Profile';
    sub.uid = 'TS_AC558DA7BAB24D2D82175D8860F9D4DA';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0023';
    sub.audio = '';
    sub.title = 'Univariate Forecast Profile';
    sub.uid = 'TS_2FEF914FA64248589F0E0053E15FB590';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0024';
    sub.audio = '';
    sub.title = 'Univariate Forecast Profile';
    sub.uid = 'TS_19EDCD67398046508682B7A080A0F894';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0025';
    sub.audio = '';
    sub.title = 'Univariate Forecast Profile';
    sub.uid = 'TS_E4B89DABD1BE43C8A172F70C60650A6D';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0026';
    sub.audio = '';
    sub.title = 'Univariate Forecast Profile';
    sub.uid = 'TS_0820C4D3A66B49E897FEEDABE0B0FD19';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0027';
    sub.audio = '';
    sub.title = 'Univariate Forecast Profile';
    sub.uid = 'TS_D6CE945F698B4CEE82DEC3E798DC98D4';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0028';
    sub.audio = '';
    sub.title = 'Univariate Forecast Profile';
    sub.uid = 'TS_4713ADB6EFB44D1A8AAB3E02DDA9826F';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0029';
    sub.audio = '';
    sub.title = 'Univariate Forecast Profile';
    sub.uid = 'TS_23D03ECF5F554C10BB6472454B2D1D8C';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0030';
    sub.audio = '';
    sub.title = 'Univariate Forecast Profile';
    sub.uid = 'TS_9308CCB9A2DC4D3CBFFB3B664B8A5342';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0031';
    sub.audio = '';
    sub.title = 'Univariate Forecast Profile';
    sub.uid = 'TS_E392159CDAFC4895BED20E423980735F';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0032';
    sub.audio = '';
    sub.title = 'Univariate Forecast Profile';
    sub.uid = 'TS_D3CD94D6E66D48CFAD1ADEDDE173FE0C';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0033';
    sub.audio = '';
    sub.title = 'Maintain Forecast Profile';
    sub.uid = 'TS_575AFE50C84741E5B9A6A069C02EDE32';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0034';
    sub.audio = '';
    sub.title = '(kein Titel)';
    sub.uid = 'TS_626A9305A082464FBFC9F8B5F1183ACF';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0035';
    sub.audio = '';
    sub.title = 'Maintain Forecast Profile';
    sub.uid = 'TS_57E578778744481D97E201C68AC64849';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0036';
    sub.audio = '';
    sub.title = 'Maintain Forecast Profile';
    sub.uid = 'TS_186E1F5F617B49F2BC82A37D030EA1AA';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0037';
    sub.audio = '';
    sub.title = 'Maintain Forecast Profile';
    sub.uid = 'TS_1F0938EECC1B4547966DD23B64184532';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0038';
    sub.audio = '';
    sub.title = 'Maintain Forecast Profile';
    sub.uid = 'TS_7594E712A4374B30A79A33E702D4B2BE';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0039';
    sub.audio = '';
    sub.title = 'Maintain Forecast Profile';
    sub.uid = 'TS_10A10E14294A467185538A3BB8742160';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0040';
    sub.audio = '';
    sub.title = 'Maintain Forecast Profile';
    sub.uid = 'TS_41BDE068928F485D94A84E2D047B4359';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0041';
    sub.audio = '';
    sub.title = 'Maintain Forecast Profile';
    sub.uid = 'TS_37DF61194D3D495D9FD6260909DBD361';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0042';
    sub.audio = '';
    sub.title = 'Maintain Forecast Profile';
    sub.uid = 'TS_FE29D0ADC43447429C4F72FB787E646A';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0043';
    sub.audio = '';
    sub.title = 'Maintain Forecast Profile';
    sub.uid = 'TS_54840DD1F8EB4929B846A7E838079F2E';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0044';
    sub.audio = '';
    sub.title = 'Maintain Forecast Profile';
    sub.uid = 'TS_340C239E3CB44BAFB8B9B8D23B89B84F';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0045';
    sub.audio = '';
    sub.title = 'Maintain Forecast Profile';
    sub.uid = 'TS_5E46FC86CA73440B9ABAC1053D42D845';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0046';
    sub.audio = '';
    sub.title = 'Maintain Forecast Profile';
    sub.uid = 'TS_F8AF2E0C06DB4AF48DCCEB9D699DFE8B';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0047';
    sub.audio = '';
    sub.title = 'Maintain Forecast Profile';
    sub.uid = 'TS_3D5EEA32601A4C528729082EE0741993';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0048';
    sub.audio = '';
    sub.title = 'Univariate Forecast Profile';
    sub.uid = 'TS_5B960587A19D401F9713B4CE843A7AB1';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0049';
    sub.audio = '';
    sub.title = 'Univariate Forecast Profile';
    sub.uid = 'TS_ED2BD2E2F26146168D18CE04D354394F';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0050';
    sub.audio = '';
    sub.title = 'Univariate Forecast Profile';
    sub.uid = 'TS_03A7BCA7C0854922AA3D6652CAB4D3C0';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0051';
    sub.audio = '';
    sub.title = 'Univariate Forecast Profile';
    sub.uid = 'TS_9686854E431D419F8B66AC014B355E09';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0052';
    sub.audio = '';
    sub.title = 'Univariate Forecast Profile';
    sub.uid = 'TS_98CBDA89D4BC4FC0B2894F0DC54B5013';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0053';
    sub.audio = '';
    sub.title = 'Univariate Forecast Profile';
    sub.uid = 'TS_81E2FCB52F274805B1E21BD5E70406B3';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0054';
    sub.audio = '';
    sub.title = 'Univariate Forecast Profile';
    sub.uid = 'TS_611793CA5CF04BEB96CB3CE13098BCEC';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0055';
    sub.audio = '';
    sub.title = 'Univariate Forecast Profile';
    sub.uid = 'TS_D34167B61EC84ECDBEC1462C6AC3FB85';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0056';
    sub.audio = '';
    sub.title = 'Univariate Forecast Profile';
    sub.uid = 'TS_3159538A5364498AA3B305AB051281C9';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0057';
    sub.audio = '';
    sub.title = 'Maintain Forecast Profile';
    sub.uid = 'TS_4C91BB6B43D847648C37B740B0CC2081';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0058';
    sub.audio = '';
    sub.title = 'Maintain Forecast Profile';
    sub.uid = 'TS_29E394169A20432BBE55D491EB3611F8';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0059';
    sub.audio = '';
    sub.title = 'SAP Easy Access  mySAP Supply Chain Management';
    sub.uid = 'TS_6E48D99C6DDC4A25BC57F11B82F98FFB';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 30;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;

    return content;
}
