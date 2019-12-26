#use(config.js)
#use(custom/config.js)
#use(ui_lang.js)
#use(lang.js)

#use(relpos_helpers.js)

#use(hmap.js)

var ok = true;

var page_needs_fix = true;

var table_fixed = false;
var fix_table_script = 
"3; " + 
" try { " + 
"var e; " + 
"var c; " + 
"e = 0; " + 
"c = 0; " +
"while (typeof(window.document.all.tags('td')[e])=='object') { " +
    "var td = window.document.all.tags('td')[e]; " +
    "if (td.children.length > 0 && " + 
    "    typeof(td.firstChild.children) == 'object' && " + 
    "    td.firstChild.children.length > 0 && " + 
    "    td.firstChild.firstChild.tagName == 'SPAN' && " + 
    "    td.firstChild.firstChild.className == 'labelTable') " +
    "{ " +
    "    td.firstChild.click(); " +
    "    c=c+1; " +
    "} " +
    "e=e+1; " +
"} " + 
// "alert('clicks: ' + c); " +
"for (var f=0; f<top.document.frames.length; f++) { " +
    // "alert(f); " + 
    "e = 0; " +
    "c = 0; " +
    // "alert(typeof(top.document.frames[f]));" +
    "var td_coll = top.document.frames[f].document.all.tags('td'); " +
    "for (var e = td_coll.length - 1; e >= 0; e --) {" +
        "var td = td_coll[e]; " +
        "if (td.children.length > 0 && " + 
        "    typeof(td.firstChild.children) == 'object' && " + 
        "    td.firstChild.children.length > 0 && " + 
        "    td.firstChild.firstChild.tagName == 'SPAN' && " + 
        "    td.firstChild.firstChild.className == 'labelTable') " +
        "{ " +
        "   td.firstChild.firstChild.fireEvent('onclick'); " +
        "   c=c+1; " +
        "} " +
        // "e=e+1; " +
    "} " +
    // "alert('clicks: ' + c); " +
"}" +
// "} catch (e) { alert(e.message); }"
"} catch (e) { ; }"
;

function fix_tables(windowid) {
    var rp = CreatePosition();
    rp.WindowID = windowid;
    if (!table_fixed) {
        // rp.ExecScript(fix_table_script);
        table_fixed = true;
    }
}

function append_event(msg) {
    // AppendEvent(msg);
    InsertEventAfter(msg);
}

var last_window_id = 0;

function record_init_tourstop() {
    var rp = RecordPosition(Position_ELEMENT_POS, ui_trans('msgRecordStart'));

    if (rp == null) {
        ok = false;
    } else {
        AddTourstop("Start", Tourstop_HIDE_NOJUMP);
        var macInit = CreateMacro("start_unit");
        append_event(macInit);

        fix_tables(rp.WindowID);

        new_tourstop(rp.WindowID, "Init", true);
    }
}

function web_record() {
    EnableUI(false);

    select_project_language();

    if (NumTourstops() == 0) {
        record_init_tourstop();
    }

    while (ok) {

        var rp = RecordPosition(Position_ELEMENT_POS, ui_trans('msgRecordNextAction'));

        var ctrl_pressed = CtrlPressed();
        var rbutton = RButtonPressed();

        var type;

        if (rp == null) {
            SetStatus(ui_trans('msgRecordStoped'));
            break;
        } else {
            if (rp.WindowID != last_window_id && !cfg.standard.webrec.use_only_window0) {
                new_tourstop(rp.WindowID, "window_change", true);
            }
            Sleep(100);
            type = element_xtype(rp);
        }
        var rect = rp.GetRect();

        var rtype = type;
        if (rbutton) rtype = "R:" + type;

        var hdl_obj = hmap[rtype];

        if (hdl_obj != null) {
            hdl_obj.handler(hdl_obj, rtype, rp, rect, ctrl_pressed, rbutton);

            if (typeof(hdl_obj.next_action) == 'string') {
                var hdl_obj = hmap[hdl_obj.next_action];
                if (hdl_obj != null) {
                    hdl_obj.handler(hdl_obj, rtype, rp, rect, ctrl_pressed, rbutton);
                }
            }
            if (!ok) SetStatus(ui_trans('msgRecordAborted'));
        } else {
            if (rbutton) {
                SetStatus(ui_trans('errObjectNotRecognizedRightMouse') + rtype + "'");
            } else {
                SetStatus(ui_trans('errObjectNotRecognizedLeftMouse') + type + "'");
            }
            log("Object not recognized: " + (rbutton ? "right" : "left") + " '" + type + "'");
            ok = false;
        }
    }

    EnableUI(true);
}

web_record();
