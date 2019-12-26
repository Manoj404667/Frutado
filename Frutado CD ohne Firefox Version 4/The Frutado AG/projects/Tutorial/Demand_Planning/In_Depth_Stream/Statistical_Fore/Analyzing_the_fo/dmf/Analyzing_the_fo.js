
function msglist_0001(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 0, name: 'TS_0D756E3B89CB453B9D2EA14482DDE6AC', label: 'Start', jumpable: 0, visible: 0, callable: 0});
    ctx.ms.start_unit(ctx, win_, 0, 10, {
        macro_comment:'',
        possible_points:42,
        mastery_score:33,
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 1, name: 'TS_582762937D9B49D1AF3A2E4D2DA32563', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0027.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3>This is the Interactive Planning Screen, the most important tool&nbsp;for computing a forecast. </FONT>\r\n<P></P>\r\n<P><FONT size=3>On the left side you&nbsp;can see the&nbsp;\"Selector\". Here&nbsp;you&nbsp;select the relevant (from top to down):</P>\r\n<UL>\r\n<LI><FONT size=3>InfoObjects (here Locations) - Here you can determine the granularity of your forecast, by choosing the number of locations for which you want to plan.</LI>\r\n<LI><FONT size=3>Selection Profile (Master) with the&nbsp;current&nbsp;Selection-IDs (FRU_CONST1_DP to FRU_SEASON2_DP) - You can build a Selection Profile for each demand planner in your company, where he can select&nbsp; and execute the forecast for the products&nbsp;he is responsible for.</LI>\r\n<LI><FONT size=3>Planning Book/ Data View (the&nbsp;current Planning Book is FRU_DP_PLAN_DP and the Data View is FRU_DP_VIEW) - In the Planning Book and the Data View the design of the \"Interactive Planning Screen\" is set. For example the key figures that are displayed, the Horizons, the Grid and the Graphic. You can define different Planning Books and Data Views for one Planning Area.</LI>\r\n<LI><FONT size=3>Macros (in this case there are no macros defined) -&nbsp;Macros are a very useful tool to expand the planning features of SAP APO. You can create macros for example for spreadsheet processings. In&nbsp;the later lesson \"Advanced Macros\" you can see how to built macros in SAP APO</LI></UL></FONT>',
        type:'none',
        all_like_demo:0,
        explanation_p:'',
        in_demo:1,
        in_practice:1,
        in_test:1,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.539025, y:0.681346}, DocXY: {x:0.539025, y:0.661616}},
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 2, name: 'TS_5803E574E4674D27978342050C030D94', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0027.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:' ',
        fieldicon:'field_icon_23.gif',
        explanation_d:'<FONT size=3>To select all locations $#{fieldname}<STRONG>&nbsp;</STRONG><SPAN id=fieldicon contentEditable=false><STRONG><IMG src=\"pages/field_icon_23.gif\"></STRONG></SPAN> is clicked.</FONT>',
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

function msglist_0004(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 3, name: 'TS_274766CF9D664CA49AE51EB2624EDD3E', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0028.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:' ',
        fieldicon:'field_icon_24.gif',
        explanation_d:'<FONT size=3>$#{fieldname}<STRONG>&nbsp;</STRONG>To load the data <SPAN id=fieldicon contentEditable=false><STRONG><IMG src=\"pages/field_icon_24.gif\"></STRONG></SPAN> is clicked.</FONT>',
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

function msglist_0005(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 4, name: 'TS_F75CF58E6A6843679A68EC0446D0E22D', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 10, 10, {
        macro_comment:'',
        dump_page:'index_0029.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.explanation_long(ctx, win_, 20, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3>On the right side of the Interactive Planning Screen you can see&nbsp;the workspace.</FONT></P>\r\n<P><FONT size=3>In the rows of the grid&nbsp;&nbsp;the key figures&nbsp;are displayed, that you have assigned to the selcted Planning Book and Data View.</FONT></P>\r\n<P><FONT size=3>You can see the historical time series and the already saved forecast results&nbsp;to your selected Aggregated Product Group in the selcted locations.</FONT></P>\r\n<P><FONT size=3>You&nbsp;can switch between Grid (Table) and Graphic. It´s also adjustable to show both at the same time.</FONT></P>\r\n<P><FONT size=3>In the In-depth stream we will focus on the Aggregated Product Group FRU_SEAS1_DP as an example to show some interesting features of the SAP APO DP.</FONT></P>\r\n<P><FONT size=3>In order to analyse the forecast results, this group&nbsp;was&nbsp;selected. By clicking the Univariate Forecast Button the Change Mode of univariate forecasting is entered.</FONT></SPAN>',
        type:'none',
        all_like_demo:0,
        explanation_p:'',
        in_demo:1,
        in_practice:1,
        in_test:1,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.648417, y:0.668391}, DocXY: {x:0.648417, y:0.649058}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:400,
        b_height:40,
        orientation:'C',
        b_duration:-1,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado'
    });
    ctx.ms.end_tourstop(ctx, win_, 30 , {});
    win_.evt_simple(30,4000);
    win_.evt_simple(30,3902);
    return true;
}

function msglist_0006(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 5, name: 'TS_6868097942FA4F399EA2F77D6A06E234', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0029.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Graphic',
        fieldicon:'field_icon_25.gif',
        explanation_d:'<B></B><FONT size=3>&nbsp;To show the already mentioned Graphic of the key figures, \r\n<P><STRONG>&nbsp;</STRONG><SPAN id=fieldicon contentEditable=false><STRONG><IMG src=\"pages/field_icon_25.gif\"></STRONG></SPAN> is clicked.</FONT>',
        explanation_p:'Click on <b>$#{fieldname}&nbsp;$P{fieldicon}</b>.',
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
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 6, name: 'TS_02E3A02A431F4B668728742022AB75D1', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0030.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3>In the Graphic View you have a better overview of the time series. </FONT>\r\n<P></P>\r\n<P><FONT size=3>Here the historical data is displayed yellow, the forecasted data is the red curve. </FONT>\r\n<P><FONT size=3>You can see a great increase&nbsp;of the red curve, after five weeks in the future. The reason for this particular&nbsp;increase are the settings in the planning horizon of the Frutado AG.&nbsp;We are forecasting&nbsp;the following five weeks on daily base, after five weeks we are compute forecasts on weekly base.&nbsp;The results appear from then on five times higher (5days a week).</FONT>',
        type:'none',
        all_like_demo:0,
        explanation_p:'',
        in_demo:1,
        in_practice:1,
        in_test:1,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.563287, y:0.475395}, DocXY: {x:0.563287, y:0.461616}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:400,
        b_height:40,
        orientation:'C',
        b_duration:-1,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado'
    });
    ctx.ms.end_tourstop(ctx, win_, 40 , {});
    win_.evt_simple(40,4000);
    win_.evt_simple(40,3902);
    return true;
}

function msglist_0008(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 7, name: 'TS_27624DBC3C2B44A8BEC0C500C1103F26', label: 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0030.html',
        new_step:'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Univariate Forecast',
        fieldicon:'field_icon_26.gif',
        explanation_d:'<FONT size=3>In order to&nbsp;go to the univariate forecast \"Change Mode\" monitor to analyse&nbsp;the forecasting results&nbsp;<B>&nbsp;$P{fieldicon}</B> is clicked.</FONT>',
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

function msglist_0009(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 8, name: 'TS_3854C0CDA34A418986AEDA32F4F644B7', label: 'Forecast in Interactive Planning; Change Mode', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0031.html',
        new_step:'Forecast in Interactive Planning; Change Mode'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<P><FONT size=3>This is the&nbsp;\"Change Mode\". Here you can analyse the forecast results and adapt the forecast profile.</FONT></P>\r\n<P><FONT size=3>Here&nbsp;you&nbsp;have&nbsp;also the possibility&nbsp;to switch between a table view and a graphic view of the forecasting results.</FONT></P>\r\n<P><FONT size=3>A&nbsp;legend explains the meaning of the several curves.</FONT></P>\r\n<P><FONT size=3>Below the graphics there are eight tabs where&nbsp;you can change&nbsp;your&nbsp;settings.For example&nbsp;the forecasting profile, the forecast model or the correspondending parameters.</FONT>',
        type:'none',
        all_like_demo:0,
        explanation_p:'',
        in_demo:1,
        in_practice:1,
        in_test:1,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.601526, y:0.898955}, DocXY: {x:0.601526, y:0.872923}},
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

function msglist_0010(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 9, name: 'TS_622343F7E39C445ABD2ADC4B8F461B24', label: 'Forecast in Interactive Planning; Change Mode', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0031.html',
        new_step:'Forecast in Interactive Planning; Change Mode'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'field_icon_27.gif',
        explanation_d:'<FONT size=3><B>$#{fieldname}&nbsp;To see the legend of the graphic, $P{fieldicon}</B> is clicked.</FONT>',
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

function msglist_0011(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 10, name: 'TS_7D146801CDFB4F848A81808BD74F91A9', label: 'Forecast in Interactive Planning; Change Mode', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0034.html',
        new_step:'Forecast in Interactive Planning; Change Mode'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3>Now you can analyse the graphic. </FONT>\r\n<P></P>\r\n<P><FONT size=3>As we haven´t made any corrections of the forecast results until&nbsp;now, the red \"Forecast\"-curve is covered by the identical light blue \"Corrected Forecast\"-curve.</FONT></P>\r\n<P><FONT size=3>The same is true for the light green \"Corrected History\"-curve, that is covered by the orange \"History\" Curve.</FONT>',
        type:'none',
        all_like_demo:0,
        explanation_p:'',
        in_demo:1,
        in_practice:1,
        in_test:1,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.610117, y:0.851011}, DocXY: {x:0.610117, y:0.826383}},
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

function msglist_0012(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 11, name: 'TS_9BAB6A6860444623B598E27FB8E58B58', label: 'Forecast in Interactive Planning; Change Mode', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0034.html',
        new_step:'Forecast in Interactive Planning; Change Mode'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3>Near to&nbsp;the orange curve you can see another green curve, the \"Ex-Post Forecast\"-curve. An ex-post-forecast is&nbsp;a forecast that is run in past periods for which current demand history is also available. The forecasting errors are determined by the difference between the \"Ex-Post-Forecast\"-curve and the \"History\"-curve. In this example you can see, that&nbsp;both curves&nbsp;are very close to each other. This is an indication&nbsp;for high forecast accuracy.</FONT> \r\n<P><FONT size=3>The \"Forecast\"-curve is the result from a multiplication of the Basic Value, the Trend Value and the Seasonal Value.</FONT></P>\r\n<P><FONT size=3>You can see the dark blue \"Seasonal\" Curve on the buttom of the graphic. In this example it takes values between 0.05 and 2.59.</FONT></P>\r\n<P><FONT size=3>The grey \"Basic Value\"-curve has a constant value of 405.67.</FONT></P>\r\n<P><FONT size=3>The pink \"Trend\"-curve has only very&nbsp;little influence. You can´t even see the curve.</FONT>',
        type:'none',
        all_like_demo:0,
        explanation_p:'',
        in_demo:1,
        in_practice:1,
        in_test:1,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.578897, y:0.883406}, DocXY: {x:0.578897, y:0.857847}},
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:400,
        b_height:40,
        orientation:'C',
        b_duration:-1,
        bubble_class_p:'StyleA',
        bubblestyle_p:'frurado'
    });
    ctx.ms.click(ctx, win_, 20, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3>To&nbsp;close&nbsp;the <STRONG>legend </STRONG>$#{fieldname}is clicked.</FONT>',
        explanation_p:'Click on <b>$#{fieldname}</b>.',
        action:'lclick',
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        show_hl_d:1,
        show_hl_p:0,
        bubble_class:'StyleA',
        bubblestyle_d:'frurado',
        b_width:150,
        b_height:40,
        orientation:'E',
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:1:0:0', 'images', 1, 0, 'eep_path=\"0:0:0:0:0:1:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:1,ii:-1};\r\neep_parents=[{name:\"Objekt_0\",tagName:\"BUTTON\",type:\"button\"},\r\n{name:\"sc\",tagName:\"FORM\"},\r\n{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_\";'), XY: {x:0.944442, y:0.714275}, DocXY: {x:0.821851, y:0.41384}, Off: {x:256, y:-28}},
        b_duration:60,
        bubble_class_p:'StyleA',
        bubblestyle_p:'_default',
        b_width_p:180,
        b_height_p:40,
        orientation_p:'C',
        position_bu:{ FP: '0', EP: new win_.ElementRef('', '', 0, 0, 'eep_path=\"\";\neep_options=3;eep_version=\"6.1.0\";\neep_atts={tagName:\"BODY\"};\neep_coll={n:\"\",i:0,ii:-1};\neep_parents=[];\neep_siblingTags2=\"\";'), XY: {x:0.74667, y:0.68333}, DocXY: {x:0.493355, y:0.366644}},
        click_count:1,
        wait_for_input:1,
        full_form:0
    });
    ctx.ms.end_tourstop(ctx, win_, 30 , {});
    win_.evt_simple(30,4000);
    win_.evt_simple(30,3902);
    return true;
}

function msglist_0013(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 12, name: 'TS_7004E32DBB0B4CE08F50D4E1C2965DBF', label: 'Forecast in Interactive Planning; Change Mode', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0037.html',
        new_step:'Forecast in Interactive Planning; Change Mode'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Table <--> Graphic',
        fieldicon:'field_icon_33.gif',
        explanation_d:'<FONT size=3><B>$#{fieldname}&nbsp;$P{fieldicon}</B> is clicked.</FONT> \r\n<P></P>\r\n<P><FONT size=3>While the graphic view has&nbsp;the advantage to get a first overview of the forecasting results, the table view enables&nbsp;to take a more detailed look at the results.</FONT>',
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

function msglist_0014(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 13, name: 'TS_6B9F6FC52EB1415EB80E714CD1085E6D', label: 'Forecast in Interactive Planning; Change Mode', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0038.html',
        new_step:'Forecast in Interactive Planning; Change Mode'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3>In the table you can see the exact data of the forecast. </FONT>\r\n<P></P>\r\n<P><FONT size=3>By changing the \"Start Date\" to the past you can also see the historical data and the ex-post-forecast results. </FONT>',
        type:'none',
        all_like_demo:0,
        explanation_p:'',
        in_demo:1,
        in_practice:1,
        in_test:1,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.690593, y:0.655421}, DocXY: {x:0.690593, y:0.636454}},
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

function msglist_0015(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 14, name: 'TS_A992D2F7FBC044FCB49C44F16EA95C75', label: 'Forecast in Interactive Planning; Change Mode', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0038.html',
        new_step:'Forecast in Interactive Planning; Change Mode'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3>In the&nbsp;<STRONG>\"Profile\"</STRONG> tab page&nbsp;you can&nbsp;assign another forecast profile to the selection or&nbsp;save the current settings&nbsp;to the forecast profile. </FONT>\r\n<P></P>\r\n<P><FONT size=3>Here we see that the current profile is the seasonal forecast profile, that we created in a previous lesson.</FONT>',
        type:'none',
        all_like_demo:0,
        explanation_p:'',
        in_demo:1,
        in_practice:1,
        in_test:1,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.582025, y:0.860075}, DocXY: {x:0.582025, y:0.835218}},
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

function msglist_0016(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 15, name: 'TS_4F0D0673D2F345F0816171CB10C63D52', label: 'Forecast in Interactive Planning; Change Mode', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0038.html',
        new_step:'Forecast in Interactive Planning; Change Mode'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Model',
        fieldicon:'field_icon_34.gif',
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

function msglist_0017(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 16, name: 'TS_76D882D6E5CC47C5A926956AAFEB545C', label: 'Forecast in Interactive Planning; Change Mode', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0039.html',
        new_step:'Forecast in Interactive Planning; Change Mode'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3>In the&nbsp;<STRONG>\"Model\"</STRONG> tab page&nbsp;you can&nbsp;select&nbsp;the forecast model. </FONT>\r\n<P></P>\r\n<P><FONT size=3>In the current selection&nbsp;the Frutado AG&nbsp;uses the seasonal linear regression model.</FONT></P>\r\n<P><FONT size=3>For a more detailed overview of different forecasting models click here: <A href=\"javascript:top.open(\'$[trainer:]projects/Statistical_Fore/1.1/doc/Seasonal_Forecas.pdf\', \'_blank\', \'location=1,toolbar=1,menubar=1,fullscreen=0\'); void(0);\">Seasonal Forecast Models</A></FONT>',
        type:'none',
        all_like_demo:0,
        explanation_p:'',
        in_demo:1,
        in_practice:1,
        in_test:1,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.665614, y:0.830274}, DocXY: {x:0.665614, y:0.806287}},
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

function msglist_0018(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 17, name: 'TS_606AC63482284B6090117DB48982DF56', label: 'Forecast in Interactive Planning; Change Mode', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0039.html',
        new_step:'Forecast in Interactive Planning; Change Mode'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Horizons',
        fieldicon:'field_icon_35.gif',
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

function msglist_0019(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 18, name: 'TS_C7A162927AA34CFFB2B617C9065FE4C0', label: 'Forecast in Interactive Planning; Change Mode', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0040.html',
        new_step:'Forecast in Interactive Planning; Change Mode'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3>In the&nbsp;<STRONG>\"Horizons\"</STRONG> tab page you can adjust the horizon of the forecast and historical data. </FONT>\r\n<P></P>\r\n<P><FONT size=3>In the Frutado case the historical horizon is two years and forecasts are calculated one year&nbsp;in the future.</FONT>',
        type:'none',
        all_like_demo:0,
        explanation_p:'',
        in_demo:1,
        in_practice:1,
        in_test:1,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.603113, y:0.852308}, DocXY: {x:0.603113, y:0.82768}},
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

function msglist_0020(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 19, name: 'TS_79BFE106F1114CCB8590E037B4879180', label: 'Forecast in Interactive Planning; Change Mode', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0040.html',
        new_step:'Forecast in Interactive Planning; Change Mode'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Parameters',
        fieldicon:'field_icon_36.gif',
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

function msglist_0021(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 20, name: 'TS_F8411731FEF34A1AA7C33AC281915D45', label: 'Forecast in Interactive Planning; Change Mode', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0041.html',
        new_step:'Forecast in Interactive Planning; Change Mode'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3>In the&nbsp;<STRONG>\"Parameter\"</STRONG> tab page&nbsp;you can&nbsp;set the parameters of the choosen forecasting model. The&nbsp;settings that can be made here vary from model to model. </FONT>\r\n<P></P>\r\n<P><FONT size=3>For seasonal&nbsp;forecast models, seasonal trend models or &nbsp;if the system carries out a seasonal test you has to assign the lenght of the season.&nbsp;These settings are made in the field \" Periods per season\". </FONT>\r\n<P><FONT size=3>In the field \"Length Variatn\" you can enter a value, if he is not sure about the length of the season. The system carries out a test and uses the number of periods, where the autocorrelation factor is the greatest. If you doesn´t enter a value, the fixed number of periods is used. </FONT>\r\n<P><FONT size=3>In the field \" Periods for Smoothing\"&nbsp;an entry&nbsp;causes the amplitude of the seasonal effect to be dampened. The system&nbsp;calculates an average of the number of periods entered in this field, centered around the peak values. It then uses this average to produce a dampened seasonal forecast. It´s recommended to use the value 1, like it is made for the Frutado AG. </FONT>\r\n<P><FONT size=3>In the Frutado case the length of the period is one year, which means 52 periods as we plan in weeks. For the other values, the default settings are kept.</FONT>',
        type:'none',
        all_like_demo:0,
        explanation_p:'',
        in_demo:1,
        in_practice:1,
        in_test:1,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.629679, y:0.594553}, DocXY: {x:0.629679, y:0.577356}},
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

function msglist_0022(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 21, name: 'TS_7FEFEFD480FF4E36958A6D7932E7A09E', label: 'Forecast in Interactive Planning; Change Mode', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0041.html',
        new_step:'Forecast in Interactive Planning; Change Mode'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Forecast Errors',
        fieldicon:'field_icon_37.gif',
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

function msglist_0023(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 22, name: 'TS_4C51DE2029CE4E77A4AABD1F264B58A3', label: 'Forecast in Interactive Planning; Change Mode', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0042.html',
        new_step:'Forecast in Interactive Planning; Change Mode'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3>In the <STRONG>\"Forecast Errors\"&nbsp;</STRONG>tab page you&nbsp;can see the selected forecast errors based on the ex-post forecast. </FONT>\r\n<P></P>\r\n<P><FONT size=3>Some forecast methods do not calculate an ex-post forecast and therefore cannot&nbsp;indicate forecast errors. </FONT></P>\r\n<P><FONT size=3>For more detailed information about forecast errors and measruement of forecast accuracy click here:&nbsp;<A href=\"javascript:top.open(\'$[trainer:]projects/Statistical_Fore/1.1/doc/Forecast_Errors.pdf\', \'_blank\', \'location=1,toolbar=1,menubar=1,fullscreen=0\'); void(0);\">Forecast Errors</A></FONT>',
        type:'none',
        all_like_demo:0,
        explanation_p:'',
        in_demo:1,
        in_practice:1,
        in_test:1,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.57731, y:0.825132}, DocXY: {x:0.57731, y:0.801221}},
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

function msglist_0024(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 23, name: 'TS_FB28B37C9F0C49F4946B5F1E06EE3F19', label: 'Forecast in Interactive Planning; Change Mode', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0042.html',
        new_step:'Forecast in Interactive Planning; Change Mode'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Settings',
        fieldicon:'field_icon_38.gif',
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

function msglist_0025(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 24, name: 'TS_81CB7B5CBA5C4D35B359DAD5C38576CC', label: 'Forecast in Interactive Planning; Change Mode', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0043.html',
        new_step:'Forecast in Interactive Planning; Change Mode'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<P><FONT size=3>In the <STRONG>\"Settings\"</STRONG> tab page&nbsp;you can make special settings, such as outlier correction and Like profiles. These settings do not depend on the selected forecast model.</FONT></P>\r\n<P><FONT size=3>Outliers&nbsp;are&nbsp;historical values that lie outside a certain, expected range. Outliers can base on singular&nbsp;events, that are not expected for the future.&nbsp;Thus they&nbsp;can falsify the forecast results. The&nbsp;Outlier Correction function&nbsp;enables you to correct the outliers. The range is determined by <STRONG>sigma&nbsp;* expected value</STRONG>. You can choose between two methods to calculate the expected value, the ex-post- or is the median-method. You can set Sigma in this screen. The default value is 1.25.</FONT> \r\n<P><FONT size=3>A like profile allows you to create the demand forecast of a product using the historical input data of a product or products whose demand behavior is the same or similar.&nbsp;Use like profiles for products with short lifecycles or for products with insufficient historical data.</FONT>',
        type:'none',
        all_like_demo:0,
        explanation_p:'',
        in_demo:1,
        in_practice:1,
        in_test:1,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.726528, y:0.749981}, DocXY: {x:0.726528, y:0.728298}},
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

function msglist_0026(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 25, name: 'TS_996F702B4CFE4F0288ED3F0FE7C85BBC', label: 'Forecast in Interactive Planning; Change Mode', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0043.html',
        new_step:'Forecast in Interactive Planning; Change Mode'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Messages',
        fieldicon:'field_icon_39.gif',
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

function msglist_0027(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 26, name: 'TS_6361BDF3C86B47F196FC4B36466EFE12', label: 'Forecast in Interactive Planning; Change Mode', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0044.html',
        new_step:'Forecast in Interactive Planning; Change Mode'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<FONT size=3>In the&nbsp;<STRONG>\"Messages\"</STRONG> tab page you can check the messages created by the system during forecasting.</FONT>',
        type:'none',
        all_like_demo:0,
        explanation_p:'',
        in_demo:1,
        in_practice:1,
        in_test:1,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.69218, y:0.854902}, DocXY: {x:0.69218, y:0.830152}},
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

function msglist_0028(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 27, name: 'TS_FB98396314424265BA2548F497B3A230', label: 'Forecast in Interactive Planning; Change Mode', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0044.html',
        new_step:'Forecast in Interactive Planning; Change Mode'
    });
    ctx.ms.click(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'Time Series',
        fieldicon:'field_icon_40.gif',
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

function msglist_0029(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 28, name: 'TS_D686100F5126491396A66776A54A4EB0', label: 'Forecast in Interactive Planning; Change Mode', jumpable: 1, visible: 1, callable: 0});
    ctx.ms.new_page(ctx, win_, 0, 10, {
        macro_comment:'',
        dump_page:'index_0045.html',
        new_step:'Forecast in Interactive Planning; Change Mode'
    });
    ctx.ms.explanation_long(ctx, win_, 10, 10, {
        macro_comment:'',
        fieldname:'',
        fieldicon:'',
        explanation_d:'<P><FONT size=3>In&nbsp;the&nbsp;<STRONG>\"Time Series\"</STRONG>&nbsp;tab page you&nbsp;can see the time series that are available for use as:</FONT></P>\r\n<UL>\r\n<LI>\r\n<DIV class=MsoListContinue><SPAN></SPAN><SPAN><FONT size=3>Phase-In/Out Profiles (used in Lifecycle Planning to calculate forecasts according the current&nbsp;lifecycle-phase of the product)</FONT></SPAN></DIV></LI>\r\n<LI>\r\n<DIV class=MsoListContinue><SPAN><FONT size=3>Trend Dampening Profile (Used for time series with trend patterns. Allows&nbsp;you&nbsp;to account for a decrease in trend as the market reaches maturiy)</FONT></SPAN></DIV></LI>\r\n<LI>\r\n<DIV class=MsoListContinue><SPAN></SPAN><SPAN><FONT size=3>Weighting Groups (Used only with the weighted&nbsp;moving average model. Contains weighting factors for&nbsp; the historical values)</FONT></SPAN></DIV></LI></UL>',
        type:'none',
        all_like_demo:0,
        explanation_p:'',
        in_demo:1,
        in_practice:1,
        in_test:1,
        in_prax:1,
        show_nav_buttons:1,
        position_h:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0, y:0}, XY2: {x:1, y:1}},
        position_b:{ FP: '0', EP: new win_.ElementRef('0:0:0:0:1:0', 'images', 0, 0, 'eep_path=\"0:0:0:0:0:0\";\r\neep_options=3;eep_version=\"6.1.0\";\r\neep_atts={tagName:\"IMG\"};\r\neep_coll={n:\"images\",i:0,ii:-1};\r\neep_parents=[{id:\"dgo_base_div\",tagName:\"DIV\"},\r\n{tagName:\"TD\"},\r\n{tagName:\"TR\"},\r\n{tagName:\"TBODY\"},\r\n{tagName:\"TABLE\"}];\r\neep_siblingTags2=\"_IMG_:FORM\";'), XY: {x:0.726528, y:0.892485}, DocXY: {x:0.726528, y:0.866667}},
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

function msglist_0030(win_) {
    win_.evt_simple(-1, 3901);
    ctx.ms.start_tourstop(ctx, win_, 0 , {index: 29, name: 'TS_3CC4629A539347B19A0160B0E018D3C7', label: 'Forecast in Interactive Planning; Change Mode', jumpable: 1, visible: 1, callable: 0});
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

    content.userHeader['version'] = '6.3.0 Unicode';
    content.userHeader['title'] = '1.1';
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
    sub.uid = 'TS_0D756E3B89CB453B9D2EA14482DDE6AC';
    sub.jumpable = 0;
    sub.visible = 0;
    sub.callable = 0;
    sub.duration = 10;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0002';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_582762937D9B49D1AF3A2E4D2DA32563';
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
    sub.uid = 'TS_5803E574E4674D27978342050C030D94';
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
    sub.uid = 'TS_274766CF9D664CA49AE51EB2624EDD3E';
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
    sub.uid = 'TS_F75CF58E6A6843679A68EC0446D0E22D';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 30;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0006';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_6868097942FA4F399EA2F77D6A06E234';
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
    sub.uid = 'TS_02E3A02A431F4B668728742022AB75D1';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 40;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0008';
    sub.audio = '';
    sub.title = 'Planning Book: [Live] PLANNING BOOK OF THE FRUTADO AG / DATA VIEW OF T';
    sub.uid = 'TS_27624DBC3C2B44A8BEC0C500C1103F26';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0009';
    sub.audio = '';
    sub.title = 'Forecast in Interactive Planning; Change Mode';
    sub.uid = 'TS_3854C0CDA34A418986AEDA32F4F644B7';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0010';
    sub.audio = '';
    sub.title = 'Forecast in Interactive Planning; Change Mode';
    sub.uid = 'TS_622343F7E39C445ABD2ADC4B8F461B24';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0011';
    sub.audio = '';
    sub.title = 'Forecast in Interactive Planning; Change Mode';
    sub.uid = 'TS_7D146801CDFB4F848A81808BD74F91A9';
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
    sub.uid = 'TS_9BAB6A6860444623B598E27FB8E58B58';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 30;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0013';
    sub.audio = '';
    sub.title = 'Forecast in Interactive Planning; Change Mode';
    sub.uid = 'TS_7004E32DBB0B4CE08F50D4E1C2965DBF';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0014';
    sub.audio = '';
    sub.title = 'Forecast in Interactive Planning; Change Mode';
    sub.uid = 'TS_6B9F6FC52EB1415EB80E714CD1085E6D';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0015';
    sub.audio = '';
    sub.title = 'Forecast in Interactive Planning; Change Mode';
    sub.uid = 'TS_A992D2F7FBC044FCB49C44F16EA95C75';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0016';
    sub.audio = '';
    sub.title = 'Forecast in Interactive Planning; Change Mode';
    sub.uid = 'TS_4F0D0673D2F345F0816171CB10C63D52';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0017';
    sub.audio = '';
    sub.title = 'Forecast in Interactive Planning; Change Mode';
    sub.uid = 'TS_76D882D6E5CC47C5A926956AAFEB545C';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0018';
    sub.audio = '';
    sub.title = 'Forecast in Interactive Planning; Change Mode';
    sub.uid = 'TS_606AC63482284B6090117DB48982DF56';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0019';
    sub.audio = '';
    sub.title = 'Forecast in Interactive Planning; Change Mode';
    sub.uid = 'TS_C7A162927AA34CFFB2B617C9065FE4C0';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0020';
    sub.audio = '';
    sub.title = 'Forecast in Interactive Planning; Change Mode';
    sub.uid = 'TS_79BFE106F1114CCB8590E037B4879180';
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
    sub.uid = 'TS_F8411731FEF34A1AA7C33AC281915D45';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0022';
    sub.audio = '';
    sub.title = 'Forecast in Interactive Planning; Change Mode';
    sub.uid = 'TS_7FEFEFD480FF4E36958A6D7932E7A09E';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0023';
    sub.audio = '';
    sub.title = 'Forecast in Interactive Planning; Change Mode';
    sub.uid = 'TS_4C51DE2029CE4E77A4AABD1F264B58A3';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0024';
    sub.audio = '';
    sub.title = 'Forecast in Interactive Planning; Change Mode';
    sub.uid = 'TS_FB28B37C9F0C49F4946B5F1E06EE3F19';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0025';
    sub.audio = '';
    sub.title = 'Forecast in Interactive Planning; Change Mode';
    sub.uid = 'TS_81CB7B5CBA5C4D35B359DAD5C38576CC';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0026';
    sub.audio = '';
    sub.title = 'Forecast in Interactive Planning; Change Mode';
    sub.uid = 'TS_996F702B4CFE4F0288ED3F0FE7C85BBC';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0027';
    sub.audio = '';
    sub.title = 'Forecast in Interactive Planning; Change Mode';
    sub.uid = 'TS_6361BDF3C86B47F196FC4B36466EFE12';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0028';
    sub.audio = '';
    sub.title = 'Forecast in Interactive Planning; Change Mode';
    sub.uid = 'TS_FB98396314424265BA2548F497B3A230';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 20;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;


    sub = new Object;
    sub.name = 'msglist_0029';
    sub.audio = '';
    sub.title = 'Forecast in Interactive Planning; Change Mode';
    sub.uid = 'TS_D686100F5126491396A66776A54A4EB0';
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
    sub.uid = 'TS_3CC4629A539347B19A0160B0E018D3C7';
    sub.jumpable = 1;
    sub.visible = 1;
    sub.callable = 0;
    sub.duration = 10;
    sub.audio_duration = 0;
    content.subs[content.subs.length] = sub;

    return content;
}
