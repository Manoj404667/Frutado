
function msglist_0001(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 0, name: 'TS_9C10697928D74F6FB5ABD9DA07BABB91', label: 'Start', jumpable: 0, visible: 0, callable: 0});
    ctx.ms.start_unit(ctx, win_, 0, 10, {
        macro_comment:'',
        possible_points:183,
        mastery_score:146,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 1, name: 'TS_B8384346D30E46619E61AE3AD1FB24B6', label: 'SAP Easy Access  mySAP Supply Chain Management', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0000.html',
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 2, name: 'TS_22EFB60488704BA5A90E1DFB6815030C', label: 'SAP Easy Access  mySAP Supply Chain Management', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0000.html',
        new_step:'SAP Easy Access  mySAP Supply Chain Management'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<STRONG><FONT size=4>Create Sequence-Dependent Setup Activities - Demo</FONT> </STRONG>\n<P></P>\n<P><FONT size=3>For each production line a setup matrix has to be created<FONT size=7><SPAN style=\"FONT-SIZE: 12pt; COLOR: black; LINE-HEIGHT: 115%; FONT-FAMILY: \'Arial\',\'sans-serif\'; mso-ansi-language: DE; mso-fareast-font-family: Calibri; mso-fareast-language: DE; mso-bidi-language: AR-SA\">, because the setup matrix is only vailable for a certain production line.</SPAN></FONT></FONT><FONT size=3> In the Frutado case that means six setup matrices are needed. </FONT></P>\n<P><FONT size=3>In this lesson it will be explained how to create the setup groups / keys and the setup matrix for the production line FRU_LINE_05. On FRU_LINE_05 five products are produced, FRU_SAFT_03, FRU_ICETEA_04, FRU_SAFT_05, FRU_ICETEA_17 and FRU_SAFT_18.&nbsp;Before you can create a setup matrix you have to define the setup groups / keys. </FONT></P>\n<P><FONT size=3>Let\'s start!</FONT>',
        type:'none',
        all_like_demo:1,
        explanation_p:'&nbsp;',
        in_demo:1,
        in_practice:1,
        in_test:0,
        in_prax:0,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.489067, y:0.489647}, DocXY: {x:0.489067, y:0.478264}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 3, name: 'TS_C9C75DC84906404B92BE2753C60EFEAD', label: 'SAP Easy Access  mySAP Supply Chain Management', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0000.html',
        new_step:'SAP Easy Access  mySAP Supply Chain Management'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3>Now we will get to the folder where the&nbsp;transactions to create and maintain the setup related data.</FONT>',
        type:'none',
        all_like_demo:1,
        explanation_p:'&nbsp;',
        in_demo:1,
        in_practice:1,
        in_test:0,
        in_prax:0,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.489067, y:0.412009}, DocXY: {x:0.489067, y:0.402411}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:488,
        b_height:130,
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

function msglist_0005(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 4, name: 'TS_E169396A849B47D4A263BA82621B8B0F', label: 'SAP Easy Access  mySAP Supply Chain Management', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0000.html',
        new_step:'SAP Easy Access  mySAP Supply Chain Management'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'field_icon_00.gif',
        explanation_d:'<FONT size=3>Clicking on the <B>Open folder</B> icon opens the folder Advanced Planning and Optimazition</FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3></FONT></SPAN></B><FONT size=3>.</FONT>',
        explanation_p:'<FONT size=3>Open the folder Advanced Planning and Optimazition </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3></FONT></SPAN></B><FONT size=3>by clicking on the <B>Open folder</B> icon.</FONT>',
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
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 5, name: 'TS_A083CCA7315F42199F81F9D8861C2610', label: 'SAP Easy Access  mySAP Supply Chain Management', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0001.html',
        new_step:'SAP Easy Access  mySAP Supply Chain Management'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'field_icon_01.gif',
        explanation_d:'<FONT size=3>Clicking on the <B>Open folder</B> icon opens the folder </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3></FONT></SPAN></B><FONT size=3>Master Data.</FONT>',
        explanation_p:'<FONT size=3>Open the folder Master Data </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3></FONT></SPAN></B><FONT size=3>by clicking on the <B>Open folder</B> icon.</FONT>',
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
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 6, name: 'TS_C10373EEAD584EAEA22822A07A7327E7', label: 'SAP Easy Access  mySAP Supply Chain Management', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0002.html',
        new_step:'SAP Easy Access  mySAP Supply Chain Management'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'field_icon_02.gif',
        explanation_d:'<FONT size=3>Clicking on the <B>Open folder</B> icon opens the folder&nbsp;Application-Specific&nbsp;Master Data</FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3></FONT></SPAN></B><FONT size=3>.</FONT>',
        explanation_p:'<FONT size=3>Open the folder </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3></FONT></SPAN></B><FONT size=3>Application-Specific&nbsp;Master Data</FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3></FONT></SPAN></B><FONT size=3>&nbsp;by clicking on the <B>Open folder</B> icon.</FONT>',
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
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 7, name: 'TS_D55EFD534201446589C4436129A17E4E', label: 'SAP Easy Access  mySAP Supply Chain Management', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0003.html',
        new_step:'SAP Easy Access  mySAP Supply Chain Management'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'field_icon_03.gif',
        explanation_d:'<FONT size=3>Clicking on the <B>Open folder</B> icon opens the folder </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3></FONT></SPAN></B><FONT size=3>Production Planning.</FONT>',
        explanation_p:'<FONT size=3>Open the folder </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3></FONT></SPAN></B><FONT size=3>Production Planning by clicking on the <B>Open folder</B> icon.</FONT>',
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
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 8, name: 'TS_C995FFCA71DE4FDCAE56C8FF0758F171', label: 'SAP Easy Access  mySAP Supply Chain Management', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0004.html',
        new_step:'SAP Easy Access  mySAP Supply Chain Management'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'field_icon_04.gif',
        explanation_d:'<FONT size=3>Clicking on the <B>Open folder</B> icon opens the folder Setup Group/Setup Matrix</FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3></FONT></SPAN></B><FONT size=3>. This folder contains the transactions&nbsp;for&nbsp;the maintenance of the setup activities.</FONT>',
        explanation_p:'<FONT size=3>Open the folder Setup Group/Setup Matrix</FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3></FONT></SPAN></B>&nbsp;<B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3></FONT></SPAN></B><FONT size=3>by clicking on the <B>Open folder</B> icon. This folder contains the transactions&nbsp;for&nbsp;the maintenance of the setup activities.</FONT>',
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
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 9, name: 'TS_41E04C350C7B4C4F8046BD0EA48F2B74', label: 'SAP Easy Access  mySAP Supply Chain Management', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0005.html',
        new_step:'SAP Easy Access  mySAP Supply Chain Management'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'field_icon_05.gif',
        explanation_d:'<FONT size=3>Now we will&nbsp;create the setup groups of FRU_LINE_05. Therefore we have to start the transaction <B>$#{fieldname}&nbsp;$P{fieldicon}</B></FONT>',
        type:'none',
        all_like_demo:1,
        explanation_p:'&nbsp;',
        in_demo:1,
        in_practice:1,
        in_test:0,
        in_prax:0,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.489067, y:0.489647}, DocXY: {x:0.489067, y:0.478264}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:488,
        b_height:119,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 10, name: 'TS_EABCE24C96954412AC1E81E110DC3344', label: 'SAP Easy Access  mySAP Supply Chain Management', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0005.html',
        new_step:'SAP Easy Access  mySAP Supply Chain Management'
    });
    ctx.ms.transaction_info(ctx, win_, 10, 1, {
        macro_comment:'',
        tcode:''
    });
    ctx.ms.click(ctx, win_, 11, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'field_icon_05.gif',
        explanation_d:'<FONT size=3>The transaction </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3></FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_05.gif\"></FONT></SPAN></B><FONT size=3> is started by double-clicking it.</FONT>',
        explanation_p:'<FONT size=3>Start the transaction </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3></FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_05.gif\"></FONT></SPAN></B><FONT size=3> by double clicking it.</FONT>',
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
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 21 , {});
    win_.evt_simple(21,4000);
    win_.evt_simple(21,3902);
    return true;
}

function msglist_0012(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 11, name: 'TS_241884B921D24702BF98018817F8F5C7', label: 'Selection of Setup Groups', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0006.html',
        new_step:'Selection of Setup Groups'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Execute',
        fieldicon:'field_icon_06.gif',
        explanation_d:'<B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Execute</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_06.gif\"></FONT></SPAN></B><FONT size=3> is clicked to show the existing setup groups.</FONT> ',
        explanation_p:'<FONT size=3>Click on </FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><STRONG><FONT size=3>Execute</FONT></STRONG></SPAN><STRONG><FONT size=3>&nbsp;</FONT></STRONG><SPAN id=fieldicon contentEditable=false><STRONG><FONT size=3><IMG src=\"pages/field_icon_06.gif\"></FONT></STRONG></SPAN><FONT size=3>&nbsp;to show the existing setup groups.</FONT> ',
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
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 12, name: 'TS_1929EEDE04F54E5DB9CF5A34379A34CB', label: 'Change Setup Group', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0008.html',
        new_step:'Change Setup Group'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'New Entries',
        fieldicon:'field_icon_07.gif',
        explanation_d:'<B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>New Entries</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_07.gif\"></FONT></SPAN></B><FONT size=3> is clicked to add new setup groups.</FONT>',
        explanation_p:'<FONT size=3>Click on </FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><STRONG><FONT size=3>New Entries</FONT></STRONG></SPAN><STRONG><FONT size=3>&nbsp;</FONT></STRONG><SPAN id=fieldicon contentEditable=false><STRONG><FONT size=3><IMG src=\"pages/field_icon_07.gif\"></FONT></STRONG></SPAN><FONT size=3>&nbsp;to add new setup groups.</FONT>',
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
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 13, name: 'TS_9D7B4ABB340D43F9A50265ED4C623B2A', label: 'New Setup Groups', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0010.html',
        new_step:'New Setup Groups'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT face=arial size=3>Here you can enter new setup groups for specific production sites. We will now enter the two setup groups for FRU_LINE_05 which&nbsp;are located in the production site FRU_PLANT_03.</FONT>',
        type:'none',
        all_like_demo:1,
        explanation_p:'&nbsp;',
        in_demo:1,
        in_practice:1,
        in_test:0,
        in_prax:0,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.489067, y:0.489647}, DocXY: {x:0.489067, y:0.478264}},
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

function msglist_0015(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 14, name: 'TS_A30876F3222348DC9ABC34ADC5632FE8', label: 'New Setup Groups', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0010.html',
        new_step:'New Setup Groups'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Location',
        fieldicon:'field_icon_08.gif',
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
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 15, name: 'TS_BBAC57AF98D246D2B024CE45D57ED8FB', label: 'New Setup Groups', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0012.html',
        new_step:'New Setup Groups'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'SetupGroup',
        fieldicon:'field_icon_09.gif',
        text_d:'3-5',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>3-5</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>SetupGroup</FONT></SPAN></B><FONT size=3> field. This setup group stands for the products 3, 4 and 5.&nbsp;</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>3-5</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>SetupGroup</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
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
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 16, name: 'TS_CF22EBE7126442A5B8B9832F8F24C964', label: 'New Setup Groups', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0019.html',
        new_step:'New Setup Groups'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Location',
        fieldicon:'field_icon_13.gif',
        text_d:'FRU_PLANT_03',
        regexp:'',
        explanation_d:'<SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3><STRONG>FRU_PLANT_03</STRONG></FONT></SPAN><FONT size=3> is now entered in the </FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3><STRONG>Location</STRONG></FONT></SPAN><FONT size=3> field.</FONT>',
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
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 17, name: 'TS_3C1627CAAFCB47C0B73792DD8DBE3D3C', label: 'New Setup Groups', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0021.html',
        new_step:'New Setup Groups'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'SetupGroup',
        fieldicon:'field_icon_14.gif',
        text_d:'17-18',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>17-18</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>SetupGroup</FONT></SPAN></B><FONT size=3> field. This setup group stands for the products&nbsp;17 and 18.&nbsp;</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>17-18</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>SetupGroup</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
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
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 18, name: 'TS_86F4C2F54AB04D50953721F1BD0A1CA7', label: 'New Setup Groups', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0022.html',
        new_step:'New Setup Groups'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Save',
        fieldicon:'field_icon_15.gif',
        explanation_d:'<B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Save</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_15.gif\"></FONT></SPAN></B><FONT size=3> is clicked.</FONT>',
        explanation_p:'<FONT size=3>Click on </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Save</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_15.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:1:0', 'images', 2, 0, 'eep_path=\"0:0:0:0:0:1:1:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:2,ii:-1};\r\neep_parents=[{name:\"Objekt_1\",tagName:\"BUTTON\",type:\"button\"},\r\n{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:150,
        b_height:40,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.198444, y:0.060029}, DocXY: {x:0.198444, y:0.0586099}, Off: {x:-2, y:-5}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.197635, y:0.0590066}, DocXY: {x:0.197635, y:0.0576028}, Off: {x:2, y:5}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 19, name: 'TS_E39F07BE06594012AC10E70C875E60BA', label: 'New Setup Groups', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0022.html',
        new_step:'New Setup Groups'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT face=arial size=3>Now we add the setup keys to the setup groups because the setup keys are allocated to the PPMs when exceptional setup transitions exist. The system </FONT><FONT face=arial size=3>automatically identifies the setup&nbsp;groups&nbsp;containing the setup keys&nbsp;while planning. Therefore we go back&nbsp;to the overview of the setup groups.</FONT>',
        type:'none',
        all_like_demo:1,
        explanation_p:'&nbsp;',
        in_demo:1,
        in_practice:1,
        in_test:0,
        in_prax:0,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.489067, y:0.489647}, DocXY: {x:0.489067, y:0.478264}},
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

function msglist_0021(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 20, name: 'TS_AA09425805F14A84A9CC1D94FCB54F9D', label: 'New Setup Groups', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0022.html',
        new_step:'New Setup Groups'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Back',
        fieldicon:'field_icon_16.gif',
        explanation_d:'<B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Back</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_16.gif\"></FONT></SPAN></B><FONT size=3> is clicked.</FONT>',
        explanation_p:'<FONT size=3>Click on </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Back</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_16.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:150,
        b_height:40,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.221851, y:0.0652018}, DocXY: {x:0.221851, y:0.0636759}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.223438, y:0.0631418}, DocXY: {x:0.223438, y:0.061677}, Off: {x:11, y:15}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 21, name: 'TS_559A14317AB8426E800768709CA9A001', label: 'Change Setup Group', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0024.html',
        new_step:'Change Setup Group'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'17-18',
        fieldicon:'field_icon_157.gif',
        explanation_d:'<FONT size=3><STRONG>17-18 </STRONG>is double-clicked.</FONT>',
        explanation_p:'<FONT size=3>Double-click in the input field&nbsp;<STRONG>17-18</STRONG><FONT size=3> to activate it.</FONT></FONT>',
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
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, 'eep_path=\"0:0:0:0:0:1:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"DIV\"};\r\neep_coll={n:\"\",i:0,ii:-1};\r\neep_parents=[{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_DIV_\";'), XY: {x:0.99292, y:0.8421}, DocXY: {x:0.353872, y:0.622843}, Off: {x:6, y:4}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 22, name: 'TS_746C2276A64C494D903EB201447F9D10', label: 'Change Setup Key(s)', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0025.html',
        new_step:'Change Setup Key(s)'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'New Entries',
        fieldicon:'field_icon_18.gif',
        explanation_d:'<B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>New Entries</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_18.gif\"></FONT></SPAN></B><FONT size=3> is clicked.</FONT>',
        explanation_p:'<FONT size=3>Click on </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>New Entries</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_18.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
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
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 23, name: 'TS_64C56501CFB840AF8A03BC7396FD0AC8', label: 'New Setup Keys', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0027.html',
        new_step:'New Setup Keys'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Setup Key',
        fieldicon:'field_icon_19.gif',
        text_d:'17',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>17</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Setup Key</FONT></SPAN></B><FONT size=3> field</FONT>.',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>17</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Setup Key</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
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
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 24, name: 'TS_56573D096ED44377960723D6A7E8BBB7', label: 'New Setup Keys', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0029.html',
        new_step:'New Setup Keys'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Setup Key',
        fieldicon:'field_icon_20.gif',
        text_d:'18',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>18</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Setup Key</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>18</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Setup Key</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
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
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 25, name: 'TS_43BBE5D5EB0C42628DBE2382C132B4A7', label: 'New Setup Keys', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0030.html',
        new_step:'New Setup Keys'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Save',
        fieldicon:'field_icon_21.gif',
        explanation_d:'<B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Save</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_21.gif\"></FONT></SPAN></B><FONT size=3> is clicked.</FONT>',
        explanation_p:'<FONT size=3>Click on </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Save</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_21.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
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
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 26, name: 'TS_14FF361E72804FFFBBDC83619677722A', label: 'New Setup Keys', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0033.html',
        new_step:'New Setup Keys'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Back',
        fieldicon:'field_icon_23.gif',
        explanation_d:'<B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Back</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_23.gif\"></FONT></SPAN></B><FONT size=3> is clicked.</FONT>',
        explanation_p:'<FONT size=3>Click on </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Back</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_23.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
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
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 27, name: 'TS_EED946A76A3E43ACBB45E1222390B344', label: 'Change Setup Key(s)', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0037.html',
        new_step:'Change Setup Key(s)'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Back',
        fieldicon:'field_icon_25.gif',
        explanation_d:'<B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Back</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_25.gif\"></FONT></SPAN></B><FONT size=3> is clicked.</FONT>',
        explanation_p:'<FONT size=3>Click on </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Back</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_25.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
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
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 28, name: 'TS_9DD1B8C057D842E2A7A0B79533B44037', label: 'Change Setup Group', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0038.html',
        new_step:'Change Setup Group'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'3-5',
        fieldicon:'field_icon_160.gif',
        explanation_d:'<FONT size=3><STRONG>3-5 </STRONG></FONT><FONT size=3>is double-clicked.</FONT>',
        explanation_p:'<FONT size=3>Double-click in the input field&nbsp;<STRONG>3-5</STRONG><FONT size=3> to activate it.</FONT></FONT>',
        action:'ldblclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:150,
        b_height:40,
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.375784, y:0.688411}, DocXY: {x:0.375784, y:0.672389}, Off: {x:-20, y:-15}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, 'eep_path=\"0:0:0:0:0:1:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"DIV\"};\r\neep_coll={n:\"\",i:0,ii:-1};\r\neep_parents=[{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_DIV_\";'), XY: {x:0.99292, y:0.8421}, DocXY: {x:0.353872, y:0.643061}, Off: {x:2, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 29, name: 'TS_F949ECF81E9F4EDA99435ACACFC99C3B', label: 'Change Setup Key(s)', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0039.html',
        new_step:'Change Setup Key(s)'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'New Entries',
        fieldicon:'field_icon_27.gif',
        explanation_d:'<B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>New Entries</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_27.gif\"></FONT></SPAN></B><FONT size=3> is clicked to add new setup keys.</FONT>',
        explanation_p:'<FONT size=3>Click on </FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><STRONG><FONT size=3>New Entries</FONT></STRONG></SPAN><STRONG><FONT size=3>&nbsp;</FONT></STRONG><SPAN id=fieldicon contentEditable=false><STRONG><FONT size=3><IMG src=\"pages/field_icon_27.gif\"></FONT></STRONG></SPAN><FONT size=3>&nbsp;to add new setup keys.</FONT>',
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
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 30, name: 'TS_D4BEDBE3411C4951AE728A593960973C', label: 'New Setup Keys', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0041.html',
        new_step:'New Setup Keys'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Setup Key',
        fieldicon:'field_icon_28.gif',
        text_d:'3',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>3</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Setup Key</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>3</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Setup Key</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
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
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 31, name: 'TS_2194D09FCE6F4F049BD275219DB057A6', label: 'New Setup Keys', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0043.html',
        new_step:'New Setup Keys'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Setup Key',
        fieldicon:'field_icon_29.gif',
        text_d:'4',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>4</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Setup Key</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>4</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Setup Key</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
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
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 32, name: 'TS_9DA86377846848C088A6F128D7BB22C0', label: 'New Setup Keys', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0045.html',
        new_step:'New Setup Keys'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Setup Key',
        fieldicon:'field_icon_30.gif',
        text_d:'5',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>5</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Setup Key</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>5</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Setup Key</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
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
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 33, name: 'TS_496ED20CA4F34A81A2C39C6E8BF7EAAF', label: 'New Setup Keys', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0046.html',
        new_step:'New Setup Keys'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Save',
        fieldicon:'field_icon_40.gif',
        explanation_d:'<B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Save</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_40.gif\"></FONT></SPAN></B><FONT size=3> is clicked.</FONT>',
        explanation_p:'<FONT size=3>Click on </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Save</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_40.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
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
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 30 , {});
    win_.evt_simple(30,4000);
    win_.evt_simple(30,3902);
    return true;
}

function msglist_0035(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 34, name: 'TS_8B91F54DB3AC45BF989E17B496D506E9', label: 'New Setup Keys', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0048.html',
        new_step:'New Setup Keys'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT face=arial size=3>After&nbsp;the setup groups and their corresponding setup keys are entered, the setup matrix of FRU_LINE_05 can be created.</FONT>',
        type:'none',
        all_like_demo:1,
        explanation_p:'&nbsp;',
        in_demo:1,
        in_practice:1,
        in_test:0,
        in_prax:0,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.489067, y:0.489647}, DocXY: {x:0.489067, y:0.478264}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:488,
        b_height:137,
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

function msglist_0036(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 35, name: 'TS_26190CE8A414459A9EC7B5214B9B9708', label: 'New Setup Keys', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0048.html',
        new_step:'New Setup Keys'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Exit',
        fieldicon:'field_icon_32.gif',
        explanation_d:'<B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Exit</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_32.gif\"></FONT></SPAN></B><FONT size=3> is clicked.</FONT>',
        explanation_p:'<FONT size=3>Click on </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Exit</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_32.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
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
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 36, name: 'TS_C822634A47894B98A510062EB28B06E2', label: 'Selection of Setup Groups', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0050.html',
        new_step:'Selection of Setup Groups'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Exit',
        fieldicon:'field_icon_33.gif',
        explanation_d:'<B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Exit</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_33.gif\"></FONT></SPAN></B><FONT size=3> is clicked.</FONT>',
        explanation_p:'<FONT size=3>Click on </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Exit</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_33.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
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
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 37, name: 'TS_7440112A4DD347EDBD630FBE8F3596D5', label: 'SAP Easy Access  mySAP Supply Chain Management', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0051.html',
        new_step:'SAP Easy Access  mySAP Supply Chain Management'
    });
    ctx.ms.transaction_info(ctx, win_, 10, 1, {
        macro_comment:'',
        tcode:''
    });
    ctx.ms.click(ctx, win_, 11, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'field_icon_34.gif',
        explanation_d:'<FONT size=3>The transaction </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3></FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_34.gif\"></FONT></SPAN></B><FONT size=3> is started by double-clicking it.</FONT>',
        explanation_p:'<FONT size=3>Start the transaction </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3></FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_34.gif\"></FONT></SPAN></B><FONT size=3> by double clicking it.</FONT>',
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
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 21 , {});
    win_.evt_simple(21,4000);
    win_.evt_simple(21,3902);
    return true;
}

function msglist_0039(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 38, name: 'TS_4290F7EB15D740CD8DC68D95705983EB', label: 'Select Setup Matrix', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0054.html',
        new_step:'Select Setup Matrix'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Execute',
        fieldicon:'field_icon_36.gif',
        explanation_d:'<B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Execute</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_36.gif\"></FONT></SPAN></B><FONT size=3> is clicked to show the existing setup matrices.</FONT>',
        explanation_p:'<FONT size=3>Click on </FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><STRONG><FONT size=3>Execute</FONT></STRONG></SPAN><STRONG><FONT size=3>&nbsp;</FONT></STRONG><SPAN id=fieldicon contentEditable=false><STRONG><FONT size=3><IMG src=\"pages/field_icon_36.gif\"></FONT></STRONG></SPAN><FONT size=3>&nbsp;to show the existing setup matrices.</FONT>',
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
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 39, name: 'TS_E2852E7637BC446D8BA177FD1BD86954', label: 'Change Setup Matrix', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0056.html',
        new_step:'Change Setup Matrix'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'New Entries',
        fieldicon:'field_icon_37.gif',
        explanation_d:'<B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>New Entries</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_37.gif\"></FONT></SPAN></B><FONT size=3> is clicked to add a new setup matrix.</FONT>',
        explanation_p:'<FONT size=3>Click on </FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><STRONG><FONT size=3>New Entries</FONT></STRONG></SPAN><STRONG><FONT size=3>&nbsp;</FONT></STRONG><SPAN id=fieldicon contentEditable=false><STRONG><FONT size=3><IMG src=\"pages/field_icon_37.gif\"></FONT></STRONG></SPAN><FONT size=3>&nbsp;to add a new setup matrix.</FONT>',
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
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 40, name: 'TS_CBE39676F97544CFB830C11B83E09ED8', label: 'New Setup Matrices', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0058.html',
        new_step:'New Setup Matrices'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT face=arial size=3>In order to create a setup matrix,&nbsp;the matrix&nbsp;should be assigned to a production line. This simplifies the search for setup transitions, because the system has to scan fewer entries.</FONT>',
        type:'none',
        explanation_p:'&nbsp;',
        in_demo:1,
        in_practice:0,
        in_test:0,
        in_prax:0,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.489067, y:0.489647}, DocXY: {x:0.489067, y:0.478264}},
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

function msglist_0042(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 41, name: 'TS_050ADB26A1914825AC217142BAAEE6F0', label: 'New Setup Matrices', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0058.html',
        new_step:'New Setup Matrices'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Location',
        fieldicon:'field_icon_38.gif',
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
        orientation:'SE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 42, name: 'TS_4644868EEC7541C1B2A4217EBC1B1862', label: 'New Setup Matrices', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0060.html',
        new_step:'New Setup Matrices'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Setup Matrx',
        fieldicon:'field_icon_39.gif',
        text_d:'FRU_LINE_05',
        regexp:'',
        explanation_d:'<FONT size=3>A name for the matrix is now entered in the <B><SPAN id=fieldname contentEditable=true ue=\"true\"><FONT size=3>Setup Matrix</FONT></SPAN></B><FONT size=3> field. We choose <SPAN id=text_d contentEditable=true ue=\"true\"><FONT size=3><STRONG>FRU_LINE_05</STRONG></FONT></SPAN><FONT size=3>&nbsp;for easy identification.</FONT></FONT></FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>FRU_LINE_05</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Setup Mtrx</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
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
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 43, name: 'TS_46489BD9D9764155B0A265E158A00AB0', label: 'New Setup Matrices', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0062.html',
        new_step:'New Setup Matrices'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Save',
        fieldicon:'field_icon_40.gif',
        explanation_d:'<B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Save</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_40.gif\"></FONT></SPAN></B><FONT size=3> is clicked.</FONT>',
        explanation_p:'<FONT size=3>Click on </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Save</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_40.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
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
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 44, name: 'TS_444BA8B2D2AB49C1BC26E3AA8421F0EC', label: 'New Setup Matrices', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0065.html',
        new_step:'New Setup Matrices'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT face=arial size=3>Now the setup transitions of FRU_LINE_05 have to be entered in the&nbsp;table of the setup matrix.</FONT>',
        type:'none',
        all_like_demo:1,
        explanation_p:'&nbsp;',
        in_demo:1,
        in_practice:1,
        in_test:0,
        in_prax:0,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.489067, y:0.489647}, DocXY: {x:0.489067, y:0.478264}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:488,
        b_height:135,
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

function msglist_0046(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 45, name: 'TS_FD9182AB9B064AE68496E112F93D870B', label: 'New Setup Matrices', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0065.html',
        new_step:'New Setup Matrices'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Back',
        fieldicon:'field_icon_42.gif',
        explanation_d:'<B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Back</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_42.gif\"></FONT></SPAN></B><FONT size=3> is clicked.</FONT>',
        explanation_p:'<FONT size=3>Click on </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Back</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_42.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
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
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 46, name: 'TS_6A342CDE51624CEC9734360E518D4130', label: 'Change Setup Matrix', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0066.html',
        new_step:'Change Setup Matrix'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'FRU_LINE_05',
        fieldicon:'field_icon_36.gif',
        explanation_d:'</P>\n<P><FONT size=3><STRONG>FRU_LINE_05</STRONG></FONT><FONT size=3>&nbsp;is double-clicked.</FONT>',
        explanation_p:'<FONT size=3>Double-click in the input field&nbsp;<STRONG>FRU_LINE_05</STRONG></FONT><FONT size=3> to activate it.</FONT>',
        action:'ldblclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', 'forms', 0, 0, 'eep_path=\"0:0:0:0:0:1:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={name:\"Objekt_0\",tagName:\"INPUT\",type:\"text\"};\r\neep_coll={n:\"forms\",i:0,ii:0};\r\neep_parents=[{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_INPUT_\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
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
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', 'forms', 0, 0, 'eep_path=\"0:0:0:0:0:1:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={name:\"Objekt_0\",tagName:\"INPUT\",type:\"text\"};\r\neep_coll={n:\"forms\",i:0,ii:0};\r\neep_parents=[{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_INPUT_\";'), XY: {x:0.986084, y:0.8421}, DocXY: {x:0.244526, y:0.178668}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 47, name: 'TS_3FF2EE3F193B4F72A106D7FC6B444FCC', label: 'Change Setup Transitions', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0067.html',
        new_step:'Change Setup Transitions'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT face=arial size=3>Now you&nbsp;can see the tabular form of&nbsp;the&nbsp;setup matrix. Here you enter the setup times and&nbsp;the setup costs (in APO $) of the&nbsp;setup transitions. The setup transitions are represented through the specification of the predecessor and successor activities, which are described with setup groups / keys.</FONT> \n<P></P>\n<P><FONT face=arial size=3>The predecessor activity is defined by the preceding production process on the production line. If no predecessor activity is found, e.g. in time t = 0,&nbsp;the system will apply an initial setup activity. In the setup matrix this can be described,&nbsp;as no predecessor activity&nbsp;is entered for this setup transition.</FONT>',
        type:'none',
        all_like_demo:1,
        explanation_p:'&nbsp;',
        in_demo:1,
        in_practice:1,
        in_test:0,
        in_prax:0,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.489067, y:0.489647}, DocXY: {x:0.489067, y:0.478264}},
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

function msglist_0049(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 48, name: 'TS_B7F39896355F4CC798A7FA678691A032', label: 'Change Setup Transitions', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0067.html',
        new_step:'Change Setup Transitions'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'New Entries',
        fieldicon:'field_icon_44.gif',
        explanation_d:'<B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>New Entries</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_44.gif\"></FONT></SPAN></B><FONT size=3> is clicked to add the setup transition in the table.</FONT>',
        explanation_p:'<FONT size=3>Click on </FONT><SPAN id=fieldname contentEditable=false ue=\"true\"><STRONG><FONT size=3>New Entries</FONT></STRONG></SPAN><STRONG><FONT size=3>&nbsp;</FONT></STRONG><SPAN id=fieldicon contentEditable=false><STRONG><FONT size=3><IMG src=\"pages/field_icon_44.gif\"></FONT></STRONG></SPAN><FONT size=3>&nbsp;to add the setup transition in the table.</FONT>',
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
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 49, name: 'TS_E6AFDAD200DE4CBFAFE3E492F0D7B868', label: 'New Setup Transitions', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0069.html',
        new_step:'New Setup Transitions'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Successor',
        fieldicon:'field_icon_45.gif',
        text_d:'*',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>*</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Successor</FONT></SPAN></B><FONT size=3> field. * stands for all setup groups / keys.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>*</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Successor</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.<BR>* stands for all activities.</FONT>',
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
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 50, name: 'TS_D4AA85A0F5BF42EDBD47A58D4DF8C74F', label: 'New Setup Transitions', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0072.html',
        new_step:'New Setup Transitions'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Setup Time',
        fieldicon:'field_icon_46.gif',
        text_d:'2',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>2</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Setup Time</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>2</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Setup Time</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
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
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 51, name: 'TS_544C3EC8C16042A9AEE51056EFA0E3FA', label: 'New Setup Transitions', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0074.html',
        new_step:'New Setup Transitions'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Unit',
        fieldicon:'field_icon_47.gif',
        text_d:'HR',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>HR</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Unit</FONT></SPAN></B><FONT size=3> field which means hours. </FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>HR</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Unit</FONT></SPAN></B><FONT size=3> field which means hours.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
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
        orientation_p:'SW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:1}, DocXY: {x:0, y:0}, Off: {x:-10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 52, name: 'TS_17F651BBBA524D6AAB0A97E877AC6263', label: 'New Setup Transitions', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0076.html',
        new_step:'New Setup Transitions'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Setup Costs',
        fieldicon:'field_icon_48.gif',
        text_d:'500',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>500</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Setup Costs</FONT></SPAN></B><FONT size=3> field. So the initial setup activity takes 2 hours and costs 500 A$.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>500</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Setup Costs</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
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
        orientation_p:'SW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:1}, DocXY: {x:0, y:0}, Off: {x:-10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 53, name: 'TS_7ECE874B7DA04085A5DA051DEDD1E399', label: 'New Setup Transitions', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0078.html',
        new_step:'New Setup Transitions'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Predecssr',
        fieldicon:'field_icon_49.gif',
        text_d:'17-18',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>17-18</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Predecssr</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>17-18</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Predecssr</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
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
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 54, name: 'TS_58BFF6965D0E4BEA836FCD4F0652F512', label: 'New Setup Transitions', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0080.html',
        new_step:'New Setup Transitions'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Successor',
        fieldicon:'field_icon_51.gif',
        text_d:'3-5',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>3-5</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Successor</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>3-5</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Successor</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
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
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 55, name: 'TS_5F194F6B5FD64AA49E6C633F7AF7798D', label: 'New Setup Transitions', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0083.html',
        new_step:'New Setup Transitions'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Setup Time',
        fieldicon:'field_icon_52.gif',
        text_d:'2',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>2</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Setup Time</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>2</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Setup Time</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
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
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 56, name: 'TS_2337704B343C437EA36707E683E2EFA7', label: 'New Setup Transitions', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0087.html',
        new_step:'New Setup Transitions'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Unit',
        fieldicon:'field_icon_56.gif',
        text_d:'HR',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>HR</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Unit</FONT></SPAN></B><FONT size=3> field .</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>HR</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Unit</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
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
        orientation_p:'SW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:1}, DocXY: {x:0, y:0}, Off: {x:-10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 57, name: 'TS_8EDF4933BCB0455F8FC5F371F546421E', label: 'New Setup Transitions', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0089.html',
        new_step:'New Setup Transitions'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Setup Costs',
        fieldicon:'field_icon_57.gif',
        text_d:'400',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>400</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Setup Costs</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>400</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Setup Costs</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
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
        orientation_p:'SW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:1}, DocXY: {x:0, y:0}, Off: {x:-10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 58, name: 'TS_1D23B73F43BA4367AECB89DD1237512C', label: 'New Setup Transitions', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0091.html',
        new_step:'New Setup Transitions'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Predecssr',
        fieldicon:'field_icon_58.gif',
        text_d:'3-5',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>3-5</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Predecssr</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>3-5</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Predecssr</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
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
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 59, name: 'TS_8A97DB4D92C4460D927A1E92F98DBCE1', label: 'New Setup Transitions', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0093.html',
        new_step:'New Setup Transitions'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Successor',
        fieldicon:'field_icon_60.gif',
        text_d:'17-18',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>17-18</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Successor</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>17-18</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Successor</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
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
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 60, name: 'TS_E4BB333B355B46FCADC70B5ED19A4DCA', label: 'New Setup Transitions', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0095.html',
        new_step:'New Setup Transitions'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Setup Time',
        fieldicon:'field_icon_61.gif',
        text_d:'2',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>2</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Setup Time</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>2</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Setup Time</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
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
        orientation_p:'SE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 61, name: 'TS_6BC716A748EB4AE49921482CB2C0D563', label: 'New Setup Transitions', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0097.html',
        new_step:'New Setup Transitions'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Unit',
        fieldicon:'field_icon_62.gif',
        text_d:'HR',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>HR</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Unit</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>HR</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Unit</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
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
        orientation_p:'SW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:1}, DocXY: {x:0, y:0}, Off: {x:-10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 62, name: 'TS_8162375EE2AA46D5BA1E921A9003DCB6', label: 'New Setup Transitions', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0099.html',
        new_step:'New Setup Transitions'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Setup Costs',
        fieldicon:'field_icon_63.gif',
        text_d:'400',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>400</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Setup Costs</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>400</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Setup Costs</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
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
        orientation_p:'SW',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:0, y:1}, DocXY: {x:0, y:0}, Off: {x:-10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 63, name: 'TS_3C99A840CA9142D6B504EBD29967AB50', label: 'New Setup Transitions', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0101.html',
        new_step:'New Setup Transitions'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3>After&nbsp;the standard setup transitions&nbsp;are filled in, the exception setup transitions will be entered.&nbsp;To describe&nbsp;the setup transitions&nbsp;as an&nbsp;exception setup transition <STRONG>E</STRONG> has to be entered in the column \"Type of the Setup Transition\".</FONT>',
        type:'none',
        all_like_demo:1,
        explanation_p:'&nbsp;',
        in_demo:1,
        in_practice:1,
        in_test:0,
        in_prax:0,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.489067, y:0.489647}, DocXY: {x:0.489067, y:0.478264}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:488,
        b_height:191,
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

function msglist_0065(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 64, name: 'TS_E7436724C9F24F29AF0721CC913697E7', label: 'New Setup Transitions', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0101.html',
        new_step:'New Setup Transitions'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Setup Trans. Type',
        fieldicon:'field_icon_64.gif',
        explanation_d:'<FONT size=3>Clicking in the input field </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Setup Trans. Type</FONT></SPAN></B><FONT size=3> activates it.</FONT>',
        explanation_p:'<FONT size=3>Click in the input field </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Setup Trans. Type</FONT></SPAN></B><FONT size=3> to activate it.</FONT>',
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
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 65, name: 'TS_A886759EE6A74B3C82A23E8E9AF92D19', label: 'New Setup Transitions', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0104.html',
        new_step:'New Setup Transitions'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Setup Trans. Type',
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
        orientation:'NE',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'NE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 66, name: 'TS_8927ADA35BA749568253AFAA608B8E7E', label: 'New Setup Transitions', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0105.html',
        new_step:'New Setup Transitions'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'field_icon_67.gif',
        explanation_d:'<SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_67.gif\"></FONT></SPAN><FONT size=3> is double-clicked.</FONT>',
        explanation_p:'<FONT size=3>Double-click on </FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_67.gif\"></FONT></SPAN><FONT size=3>.</FONT>',
        action:'ldblclick',
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
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 67, name: 'TS_84A55B5749464201866F419C41F7F7DB', label: 'New Setup Transitions', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0107.html',
        new_step:'New Setup Transitions'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Predecssr',
        fieldicon:'field_icon_69.gif',
        text_d:'4',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>4</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Predecssr</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>4</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Predecssr</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
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
        orientation_p:'NE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 68, name: 'TS_1FDE99393144435B9E4F4F1059C3B83A', label: 'New Setup Transitions', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0109.html',
        new_step:'New Setup Transitions'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Successor',
        fieldicon:'field_icon_71.gif',
        text_d:'3',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>3</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Successor</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>3</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Successor</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
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
        orientation_p:'NE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 69, name: 'TS_CBB2253F20C74E4C9BAD40065327C84C', label: 'New Setup Transitions', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0111.html',
        new_step:'New Setup Transitions'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Setup Time',
        fieldicon:'field_icon_72.gif',
        text_d:'0,333',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>0,333</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Setup Time</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>0,333</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Setup Time</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
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
        orientation_p:'NE',
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:0}, DocXY: {x:0, y:0}, Off: {x:10, y:-10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 70, name: 'TS_717A1003894D464085BD95291F6A9F05', label: 'New Setup Transitions', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0113.html',
        new_step:'New Setup Transitions'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Unit',
        fieldicon:'field_icon_73.gif',
        text_d:'HR',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>HR</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Unit</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>HR</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Unit</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
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

function msglist_0072(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 71, name: 'TS_2D392B9DEA15489CA7DC09519121E371', label: 'New Setup Transitions', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0115.html',
        new_step:'New Setup Transitions'
    });
    ctx.ms.input_text(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Setup Costs',
        fieldicon:'field_icon_74.gif',
        text_d:'123',
        regexp:'',
        explanation_d:'<B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>123</FONT></SPAN></B><FONT size=3> is now entered in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Setup Costs</FONT></SPAN></B><FONT size=3> field.</FONT>',
        explanation_p:'<FONT size=3>Enter </FONT><B><SPAN id=text_d contentEditable=false ue=\"true\"><FONT size=3>123</FONT></SPAN></B><FONT size=3> in the </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Setup Costs</FONT></SPAN></B><FONT size=3> field.<BR>Confirm your entry by pressing the <B>Tab</B> or the <B>Enter key</B>.</FONT>',
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

function msglist_0073(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 72, name: 'TS_5CE86ACD296C4B7295953B799DCF29BD', label: 'New Setup Transitions', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0118.html',
        new_step:'New Setup Transitions'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Save',
        fieldicon:'field_icon_40.gif',
        explanation_d:'<B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Save</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_40.gif\"></FONT></SPAN></B><FONT size=3> is clicked.</FONT>',
        explanation_p:'<FONT size=3>Click on </FONT><B><SPAN id=fieldname contentEditable=false ue=\"true\"><FONT size=3>Save</FONT></SPAN><FONT size=3>&nbsp;</FONT><SPAN id=fieldicon contentEditable=false><FONT size=3><IMG src=\"pages/field_icon_40.gif\"></FONT></SPAN></B><FONT size=3>.</FONT>',
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
        position_bu:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0', '', 0, 0, ''), XY: {x:1, y:1}, DocXY: {x:0, y:0}, Off: {x:10, y:10}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 73, name: 'TS_045066B81CB14561B4721F2145173672', label: 'New Setup Transitions', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0118.html',
        new_step:'New Setup Transitions'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3>The matrix consists of 11 entries.&nbsp;If we would&nbsp;have&nbsp;described every single setup transition we would have needed 2 more entries. Because the numbers of setup transitions increase square with the number of products, it is important to reduce the numbers of setup transitions.</FONT> \n<P></P>\n<P><FONT size=3>The setup&nbsp;groups and matrices&nbsp;for sequence-dependent setup times and costs are completely&nbsp;maintained now, so&nbsp;the lesson is finished. In the next lesson, we will create the PP/DS-PPMs where the setup activities are defined using these groups and matrixes.&nbsp;</FONT>',
        type:'none',
        all_like_demo:1,
        explanation_p:'&nbsp;',
        in_demo:1,
        in_practice:1,
        in_test:0,
        in_prax:0,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.489067, y:0.489647}, DocXY: {x:0.489067, y:0.478264}},
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

function msglist_0075(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 74, name: 'TS_33E5E5239D0C4631BBEE2D4C46F2D53C', label: 'New Setup Transitions', jumpable: 1, visible: 1, callable: 0});
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
    content.userHeader['title'] = 'Setup Activities';
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
    sub.uid = 'TS_9C10697928D74F6FB5ABD9DA07BABB91';
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
    sub.uid = 'TS_B8384346D30E46619E61AE3AD1FB24B6';
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
    sub.uid = 'TS_22EFB60488704BA5A90E1DFB6815030C';
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
    sub.uid = 'TS_C9C75DC84906404B92BE2753C60EFEAD';
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
    sub.uid = 'TS_E169396A849B47D4A263BA82621B8B0F';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0006';
    sub.audio = '';
    sub.title = 'SAP Easy Access  mySAP Supply Chain Management';
    sub.uid = 'TS_A083CCA7315F42199F81F9D8861C2610';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0007';
    sub.audio = '';
    sub.title = 'SAP Easy Access  mySAP Supply Chain Management';
    sub.uid = 'TS_C10373EEAD584EAEA22822A07A7327E7';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0008';
    sub.audio = '';
    sub.title = 'SAP Easy Access  mySAP Supply Chain Management';
    sub.uid = 'TS_D55EFD534201446589C4436129A17E4E';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0009';
    sub.audio = '';
    sub.title = 'SAP Easy Access  mySAP Supply Chain Management';
    sub.uid = 'TS_C995FFCA71DE4FDCAE56C8FF0758F171';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0010';
    sub.audio = '';
    sub.title = 'SAP Easy Access  mySAP Supply Chain Management';
    sub.uid = 'TS_41E04C350C7B4C4F8046BD0EA48F2B74';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0011';
    sub.audio = '';
    sub.title = 'SAP Easy Access  mySAP Supply Chain Management';
    sub.uid = 'TS_EABCE24C96954412AC1E81E110DC3344';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 21;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0012';
    sub.audio = '';
    sub.title = 'Selection of Setup Groups';
    sub.uid = 'TS_241884B921D24702BF98018817F8F5C7';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0013';
    sub.audio = '';
    sub.title = 'Change Setup Group';
    sub.uid = 'TS_1929EEDE04F54E5DB9CF5A34379A34CB';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0014';
    sub.audio = '';
    sub.title = 'New Setup Groups';
    sub.uid = 'TS_9D7B4ABB340D43F9A50265ED4C623B2A';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0015';
    sub.audio = '';
    sub.title = 'New Setup Groups';
    sub.uid = 'TS_A30876F3222348DC9ABC34ADC5632FE8';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0016';
    sub.audio = '';
    sub.title = 'New Setup Groups';
    sub.uid = 'TS_BBAC57AF98D246D2B024CE45D57ED8FB';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0017';
    sub.audio = '';
    sub.title = 'New Setup Groups';
    sub.uid = 'TS_CF22EBE7126442A5B8B9832F8F24C964';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0018';
    sub.audio = '';
    sub.title = 'New Setup Groups';
    sub.uid = 'TS_3C1627CAAFCB47C0B73792DD8DBE3D3C';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0019';
    sub.audio = '';
    sub.title = 'New Setup Groups';
    sub.uid = 'TS_86F4C2F54AB04D50953721F1BD0A1CA7';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0020';
    sub.audio = '';
    sub.title = 'New Setup Groups';
    sub.uid = 'TS_E39F07BE06594012AC10E70C875E60BA';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0021';
    sub.audio = '';
    sub.title = 'New Setup Groups';
    sub.uid = 'TS_AA09425805F14A84A9CC1D94FCB54F9D';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0022';
    sub.audio = '';
    sub.title = 'Change Setup Group';
    sub.uid = 'TS_559A14317AB8426E800768709CA9A001';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0023';
    sub.audio = '';
    sub.title = 'Change Setup Key(s)';
    sub.uid = 'TS_746C2276A64C494D903EB201447F9D10';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0024';
    sub.audio = '';
    sub.title = 'New Setup Keys';
    sub.uid = 'TS_64C56501CFB840AF8A03BC7396FD0AC8';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0025';
    sub.audio = '';
    sub.title = 'New Setup Keys';
    sub.uid = 'TS_56573D096ED44377960723D6A7E8BBB7';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0026';
    sub.audio = '';
    sub.title = 'New Setup Keys';
    sub.uid = 'TS_43BBE5D5EB0C42628DBE2382C132B4A7';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0027';
    sub.audio = '';
    sub.title = 'New Setup Keys';
    sub.uid = 'TS_14FF361E72804FFFBBDC83619677722A';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0028';
    sub.audio = '';
    sub.title = 'Change Setup Key(s)';
    sub.uid = 'TS_EED946A76A3E43ACBB45E1222390B344';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0029';
    sub.audio = '';
    sub.title = 'Change Setup Group';
    sub.uid = 'TS_9DD1B8C057D842E2A7A0B79533B44037';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0030';
    sub.audio = '';
    sub.title = 'Change Setup Key(s)';
    sub.uid = 'TS_F949ECF81E9F4EDA99435ACACFC99C3B';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0031';
    sub.audio = '';
    sub.title = 'New Setup Keys';
    sub.uid = 'TS_D4BEDBE3411C4951AE728A593960973C';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0032';
    sub.audio = '';
    sub.title = 'New Setup Keys';
    sub.uid = 'TS_2194D09FCE6F4F049BD275219DB057A6';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0033';
    sub.audio = '';
    sub.title = 'New Setup Keys';
    sub.uid = 'TS_9DA86377846848C088A6F128D7BB22C0';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0034';
    sub.audio = '';
    sub.title = 'New Setup Keys';
    sub.uid = 'TS_496ED20CA4F34A81A2C39C6E8BF7EAAF';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 30;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0035';
    sub.audio = '';
    sub.title = 'New Setup Keys';
    sub.uid = 'TS_8B91F54DB3AC45BF989E17B496D506E9';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0036';
    sub.audio = '';
    sub.title = 'New Setup Keys';
    sub.uid = 'TS_26190CE8A414459A9EC7B5214B9B9708';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0037';
    sub.audio = '';
    sub.title = 'Selection of Setup Groups';
    sub.uid = 'TS_C822634A47894B98A510062EB28B06E2';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0038';
    sub.audio = '';
    sub.title = 'SAP Easy Access  mySAP Supply Chain Management';
    sub.uid = 'TS_7440112A4DD347EDBD630FBE8F3596D5';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 21;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0039';
    sub.audio = '';
    sub.title = 'Select Setup Matrix';
    sub.uid = 'TS_4290F7EB15D740CD8DC68D95705983EB';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0040';
    sub.audio = '';
    sub.title = 'Change Setup Matrix';
    sub.uid = 'TS_E2852E7637BC446D8BA177FD1BD86954';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0041';
    sub.audio = '';
    sub.title = 'New Setup Matrices';
    sub.uid = 'TS_CBE39676F97544CFB830C11B83E09ED8';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0042';
    sub.audio = '';
    sub.title = 'New Setup Matrices';
    sub.uid = 'TS_050ADB26A1914825AC217142BAAEE6F0';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0043';
    sub.audio = '';
    sub.title = 'New Setup Matrices';
    sub.uid = 'TS_4644868EEC7541C1B2A4217EBC1B1862';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0044';
    sub.audio = '';
    sub.title = 'New Setup Matrices';
    sub.uid = 'TS_46489BD9D9764155B0A265E158A00AB0';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0045';
    sub.audio = '';
    sub.title = 'New Setup Matrices';
    sub.uid = 'TS_444BA8B2D2AB49C1BC26E3AA8421F0EC';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0046';
    sub.audio = '';
    sub.title = 'New Setup Matrices';
    sub.uid = 'TS_FD9182AB9B064AE68496E112F93D870B';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0047';
    sub.audio = '';
    sub.title = 'Change Setup Matrix';
    sub.uid = 'TS_6A342CDE51624CEC9734360E518D4130';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0048';
    sub.audio = '';
    sub.title = 'Change Setup Transitions';
    sub.uid = 'TS_3FF2EE3F193B4F72A106D7FC6B444FCC';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0049';
    sub.audio = '';
    sub.title = 'Change Setup Transitions';
    sub.uid = 'TS_B7F39896355F4CC798A7FA678691A032';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0050';
    sub.audio = '';
    sub.title = 'New Setup Transitions';
    sub.uid = 'TS_E6AFDAD200DE4CBFAFE3E492F0D7B868';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0051';
    sub.audio = '';
    sub.title = 'New Setup Transitions';
    sub.uid = 'TS_D4AA85A0F5BF42EDBD47A58D4DF8C74F';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0052';
    sub.audio = '';
    sub.title = 'New Setup Transitions';
    sub.uid = 'TS_544C3EC8C16042A9AEE51056EFA0E3FA';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0053';
    sub.audio = '';
    sub.title = 'New Setup Transitions';
    sub.uid = 'TS_17F651BBBA524D6AAB0A97E877AC6263';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0054';
    sub.audio = '';
    sub.title = 'New Setup Transitions';
    sub.uid = 'TS_7ECE874B7DA04085A5DA051DEDD1E399';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0055';
    sub.audio = '';
    sub.title = 'New Setup Transitions';
    sub.uid = 'TS_58BFF6965D0E4BEA836FCD4F0652F512';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0056';
    sub.audio = '';
    sub.title = 'New Setup Transitions';
    sub.uid = 'TS_5F194F6B5FD64AA49E6C633F7AF7798D';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0057';
    sub.audio = '';
    sub.title = 'New Setup Transitions';
    sub.uid = 'TS_2337704B343C437EA36707E683E2EFA7';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0058';
    sub.audio = '';
    sub.title = 'New Setup Transitions';
    sub.uid = 'TS_8EDF4933BCB0455F8FC5F371F546421E';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0059';
    sub.audio = '';
    sub.title = 'New Setup Transitions';
    sub.uid = 'TS_1D23B73F43BA4367AECB89DD1237512C';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0060';
    sub.audio = '';
    sub.title = 'New Setup Transitions';
    sub.uid = 'TS_8A97DB4D92C4460D927A1E92F98DBCE1';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0061';
    sub.audio = '';
    sub.title = 'New Setup Transitions';
    sub.uid = 'TS_E4BB333B355B46FCADC70B5ED19A4DCA';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0062';
    sub.audio = '';
    sub.title = 'New Setup Transitions';
    sub.uid = 'TS_6BC716A748EB4AE49921482CB2C0D563';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0063';
    sub.audio = '';
    sub.title = 'New Setup Transitions';
    sub.uid = 'TS_8162375EE2AA46D5BA1E921A9003DCB6';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0064';
    sub.audio = '';
    sub.title = 'New Setup Transitions';
    sub.uid = 'TS_3C99A840CA9142D6B504EBD29967AB50';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0065';
    sub.audio = '';
    sub.title = 'New Setup Transitions';
    sub.uid = 'TS_E7436724C9F24F29AF0721CC913697E7';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0066';
    sub.audio = '';
    sub.title = 'New Setup Transitions';
    sub.uid = 'TS_A886759EE6A74B3C82A23E8E9AF92D19';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0067';
    sub.audio = '';
    sub.title = 'New Setup Transitions';
    sub.uid = 'TS_8927ADA35BA749568253AFAA608B8E7E';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0068';
    sub.audio = '';
    sub.title = 'New Setup Transitions';
    sub.uid = 'TS_84A55B5749464201866F419C41F7F7DB';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0069';
    sub.audio = '';
    sub.title = 'New Setup Transitions';
    sub.uid = 'TS_1FDE99393144435B9E4F4F1059C3B83A';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0070';
    sub.audio = '';
    sub.title = 'New Setup Transitions';
    sub.uid = 'TS_CBB2253F20C74E4C9BAD40065327C84C';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0071';
    sub.audio = '';
    sub.title = 'New Setup Transitions';
    sub.uid = 'TS_717A1003894D464085BD95291F6A9F05';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0072';
    sub.audio = '';
    sub.title = 'New Setup Transitions';
    sub.uid = 'TS_2D392B9DEA15489CA7DC09519121E371';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0073';
    sub.audio = '';
    sub.title = 'New Setup Transitions';
    sub.uid = 'TS_5CE86ACD296C4B7295953B799DCF29BD';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0074';
    sub.audio = '';
    sub.title = 'New Setup Transitions';
    sub.uid = 'TS_045066B81CB14561B4721F2145173672';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0075';
    sub.audio = '';
    sub.title = 'New Setup Transitions';
    sub.uid = 'TS_33E5E5239D0C4631BBEE2D4C46F2D53C';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 10;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;

    return content;
}
