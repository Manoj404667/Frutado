
var dd = Date();
var bubble_index = 1;
var DatangoID = '';
var DatangoIDFramePath = '';

function start_navi() {
    if (NumTourstops() > 0 && GetTourstop(0).Caption == "Navi Init") {
        alert("Navi-Init muss pro Projekt nur einmal aufgerufen werden");
        return;
    }

    AddTourstop("Navi Init", "", Tourstop_SHOW_NOJUMP);
    
    /*var macInitA = CreateMacro("navi_initA");
    InsertEventAfter(macInitA);  */

    var macInitB = CreateMacro("navi_initB");
    InsertEventAfter(macInitB);

    AddTourstop("Navi Exit", "", Tourstop_SHOW_NOJUMP);

    var macFini = CreateMacro("navi_fini");
    InsertEventAfter(macFini);
};


function label_match(innertext, label) {
    if (label == "") return false;

    var labels = label.split("#");

    for (i = 0; i < labels.length; i++) {
        if (innertext.indexOf(labels[i]) == -1) return false;
    }

    return true;
}



function navi_get_ts_by_title_innertext(title, innertext) {
    var ts0 = GetTourstop(0)

    var m = ts0.NextMacro();

    while (m && (m.Template() != "define_target" || m.GetParam("title") != title || !label_match(innertext, m.GetParam("label")))) {
        m = ts0.NextMacro(m.TourPosition());
    }

    if (m == null || m.Template() != "define_target") return 0;

    var ts_tit = m.GetParam("ts");

    var i = 2;
    var ts;
    while (i < NumTourstops() && (ts = GetTourstop(i)) && ts.Caption != ts_tit) { 
        i++;
    }

    return ts;
}

function navi_get_ts_by_title_label(title, label) {
    var ts0 = GetTourstop(0)

    var m = ts0.NextMacro();

    while (m && (m.Template() != "define_target" || m.GetParam("title") != title || m.GetParam("label") != label)) {
        m = ts0.NextMacro(m.TourPosition());
    }

    if (m == null || m.Template() != "define_target") return 0;

    var ts_tit = m.GetParam("ts");

    var i = 2;
    var ts;
    while (i < NumTourstops() && (ts = GetTourstop(i)) && ts.Caption != ts_tit) { 
        i++;
    }

    return ts;
}

function navi_add_frame_tourstop(ts_caption, frame_path) {
    var ts = AddTourstop(ts_caption, "", Tourstop_SHOW_JUMP);

    
    if ((DatangoIDFramePath != '')&& (DatangoIDFramePath != frame_path)) {
      var macInit = CreateMacro("set_efp");
      macInit.SetParam("efp", DatangoIDFramePath);
      InsertEventAfter(macInit);	    	
    }	

    var macInit = CreateMacro("set_efp");
    macInit.SetParam("efp", frame_path);
    InsertEventAfter(macInit);
    
    var macInit = CreateMacro("page_init");    
    InsertEventAfter(macInit); 

    var macFine = CreateMacro("page_fini");
    InsertEventAfter(macFine);

    return ts;
}

function navi_add_target(ts_caption, frame_title, frame_label, ts_dgoid) {
    if (NumTourstops() == 0) return;

    /* alert("Adding Target for " + ts_title + "\n" + frame_title + "\n" + frame_label + "\n" + ts_dgoid); */

    var ts0 = GetTourstop(0);
    var m = ts0.NextMacro();

    if (m == null) return;

    var mac = CreateMacro("define_target");
    mac.SetParam("ts", ts_caption);
    mac.SetParam("title", frame_title);
    mac.SetParam("label", frame_label);
    mac.SetParam("dgoid", ts_dgoid);
    
    SetCurrEvent(m.TourPosition());   

    InsertEventAfter(mac);
}


function CheckDatangoID(_rp){  
  
   var dgoid = _rp.ExecScript("document.getElementById('input_datangoid')");	    	 	 
	 var FramePath = _rp.FramePath; 
	 DatangoID = '';
	 DatangoIDFramePath = '';	 
	 
	 if (dgoid != 'null') {	    	  	 		    	
	    	DatangoID = _rp.ExecScript("document.getElementById('input_datangoid').value");	    	
	    	DatangoIDFramePath = FramePath; 	    	
	    	return true;	 
	 }	  	 
	 
	 var doc = 'parent.window.document'; 	 	        
	 while(FramePath != ''){	 	 	 	 	 	 	 
	 	 FramePath = FramePath.substr(0,FramePath.length-2);  	 	  
	   dgoid = _rp.ExecScript(doc +".getElementById('input_datangoid')");	    	    
     
	   if (dgoid != 'null') {    		    	
	    	DatangoID = _rp.ExecScript(doc +".getElementById('input_datangoid').value");	
	    	DatangoIDFramePath = FramePath; 	    	    	
	    	return true;  
	    }
	    doc = 'parent.' + doc; 	    	    
	 }	 	 
   return false; 	
} 



function navi_add_tourstop(){  
    var rp = RecordPosition(Position_ELEMENT_POS, "Position");    
    if (rp == null) return;
    var title = rp.ExecScript("document.title");         
  
    var ts = navi_get_ts_by_title_innertext(title, rp.ExecScript("document.body.innerText"));       
    CheckDatangoID(rp);   
          
    if (!ts) {
        var dlg = CreateDialog();
        dlg.AddParam("title", ParamType_TEXT_SINGLE, "Seiten-Titel");
        dlg.AddParam("label", ParamType_TEXT_SINGLE, "Seiten-Label");
        dlg.AddParam("ts_caption",ParamType_TEXT_SINGLE , "Tourstop-Name");
        dlg.AddParam("dgoid", ParamType_TEXT_SINGLE, "Datango-ID");
        dlg.SetParam("title", title);
        dlg.SetParam("ts_caption", title); 
        dlg.SetParam("dgoid", DatangoID);      
        dlg.Show();      
        label = dlg.GetParam("label");
        var dgoid = dlg.GetParam("dgoid");
        var ts_caption = dlg.GetParam("ts_caption");              
                
        ts = navi_add_frame_tourstop(ts_caption, rp.FramePath);      
        navi_add_target(ts.Caption, title, label, dgoid);
    }	

} 



function navi_add_bubble() {
    var rp = RecordPosition(Position_ELEMENT_POS, "Bubbleposition");

    if (rp == null) return;

    var title = rp.ExecScript("document.title");

    var ts = navi_get_ts_by_title_innertext(title, rp.ExecScript("document.body.innerText"));
    CheckDatangoID(rp); 
    
    if (!ts) {
        var dlg = CreateDialog();
        dlg.AddParam("title", ParamType_TEXT_SINGLE, "Seiten-Titel");
        dlg.AddParam("label", ParamType_TEXT_SINGLE, "Seiten-Label");
        dlg.AddParam("ts_caption", ParamType_TEXT_SINGLE, "Tourstop-Titel");
        dlg.AddParam("dgoid", ParamType_TEXT_SINGLE, "Datango-ID"); 
        dlg.SetParam("title", title);
        dlg.SetParam("ts_caption", title);
        dlg.SetParam("dgoid", DatangoID);
        dlg.Show();

        label = dlg.GetParam("label");
        var ts_caption = dlg.GetParam("ts_caption");

        ts = navi_add_frame_tourstop(ts_caption, rp.FramePath);        
        navi_add_target(ts.Caption, title, label, dgoid);
    }

    if (ts == null) return;

    var bub = CreateMacro("explanation");
    bub.SetParam("position_b", rp);
    bub.SetParam("bubble_name", dd + bubble_index ++);

    var dlg = CreateDialog();
    dlg.SetCaption("Bubbletext");
    dlg.AddParam("bubbletext", ParamType_HTML, "Bubbletext");
    dlg.SetSize(300,250);
    if (dlg.Show()) bub.SetParam("explanation_d", dlg.GetParam("bubbletext"));

    BubbleEditor.Position = bub.GetParam("position_b");
    BubbleEditor.Width = bub.GetParam("b_width");
    BubbleEditor.Height = bub.GetParam("b_height");
    BubbleEditor.HtmlText = bub.PreTranslateString("bubbletext_d");
    BubbleEditor.Orientation = bub.GetParam("orientation");
    BubbleEditor.Movable = true;
    BubbleEditor.Closable = true;
    BubbleEditor.Minimizable = true;
    BubbleEditor.Transparent = false;
    BubbleEditor.EditMask = 1;
    BubbleEditor.EditMode = 1;

    if (BubbleEditor.EditBubble()) {
        bub.SetParam("b_width"      , BubbleEditor.Width      );
        bub.SetParam("b_height"     , BubbleEditor.Height     );
        bub.SetParam("orientation"  , BubbleEditor.Orientation);
        // mac.SetParam("explanation_d", BubbleEditor.HtmlText   );

        rp = BubbleEditor.Position;


    }

    var page_init = ts.NextMacro();
    var rpbase;
    if (page_init.Template() == "page_init") {
        efp = page_init.GetParam("efp");
        rp.FramePath = efp;

        /* XXX fix framepath ??
        if (rp.FramePath.substr(0, efp.length) == efp) {
            alert("MATCH\n" + rp.FramePath + "<==>" + efp);
        } else {
            alert("NOMATCH\n" + rp.FramePath + "<==>" + efp);
        }
        */
    }

    bub.SetParam("position_b", rp);

    SetCurrEvent(page_init.TourPosition());
    SetCurrEvent(page_init.TourPosition());
    InsertEventAfter(bub);

}


