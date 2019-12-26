var macro_info = new Object;
var onactivate = new Object;
var onsetcurrent = new Object;

function html2txt(txt) {
    var res = txt;
    res = res.replace(/\n/g, ' ');
    res = res.replace(/<br>/gi, '\n');
    res = res.replace(/<li>/gi, '\n');
    res = res.replace(/<\/p>/gi, '\n');
    res = res.replace(/<[^>]*>/g, '');
    res = res.replace(/&nbsp;/gi, ' ');
    res = res.replace(/&lt;/gi, '<');
    res = res.replace(/&gt;/gi, '>');
    return res;
}
function rem_newline(txt) {
    txt = txt.replace(/\n/g, '');
    return txt.replace(/\r/g, '');
}

macro_info.new_page = function() {
    _info = new Object;
    _info.screenshot = OrigEvent().GetParam("screenshot_file");
    _info.rect = OrigEvent().GetParam("screenshot_rect");
    _info.text = 
        OrigEvent().GetParam("macro_comment").length ? 
        OrigEvent().GetParam("macro_comment"):
        OrigEvent().GetParam("new_step");
}

macro_info.new_window = function() {
    _info = new Object;
    _info.screenshot = OrigEvent().GetParam("screenshot_file");
    _info.rect = OrigEvent().GetParam("screenshot_rect");
    _info.text = 
        OrigEvent().GetParam("macro_comment").length ? 
        OrigEvent().GetParam("macro_comment"):
        OrigEvent().GetParam("new_step");
}

macro_info.scroll_hor = function() {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
    _info.screenshot = OrigEvent().GetParam("screenshot_file");
}

macro_info.scroll_vert = function() {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
    _info.screenshot = OrigEvent().GetParam("screenshot_file");
}


macro_info.click = function() {
    _info = new Object;
    _info.rect = OrigEvent().GetParam("screenshot_rect");
    _info.jump_target = OrigEvent().GetParam("jump_target");

    var f = OrigEvent().GetParam("fieldname");
    var c = OrigEvent().GetParam("macro_comment");
    var dt = html2txt(OrigEvent().GetParam("explanation_d"));
    var pt = html2txt(OrigEvent().GetParam("explanation_p"));
    if (f.length) {
        _info.text = f;
    } else if (dt.length) {
        _info.text = dt;
    } else if (pt.length) {
        _info.text = pt;
    }
    if (c.length) {
        if (_info.text.length) {
            _info.text += "\n";
        }
        _info.text += " (" + OrigEvent().GetParam("macro_comment") + ")";
    }

}

macro_info.quick_click = function() {
    _info = new Object;
    _info.rect = OrigEvent().GetParam("screenshot_rect");
    _info.jump_target = OrigEvent().GetParam("jump_target");
    _info.text = 
        OrigEvent().GetParam("macro_comment").length ? 
        OrigEvent().GetParam("macro_comment"):
        OrigEvent().GetParam("fieldname");
}

macro_info.click_SAP = function() {
    _info = new Object;
    _info.rect = OrigEvent().GetParam("screenshot_rect");
    _info.jump_target = OrigEvent().GetParam("jump_target");
    var co = OrigEvent().GetParam("macro_comment");
    var tc = OrigEvent().GetParam("transaction_code");
    var ex = OrigEvent().GetParam("explanation_d");
    if (co.length) {
        _info.text = co;
    } else if (tc.length) {
        _info.text = tc;
    } else if (ex.length) {
        _info.text = html2txt(ex);
    }
}

macro_info.input_text = function() {
    _info = new Object;
    _info.rect = OrigEvent().GetParam("screenshot_rect");
    _info.jump_target = OrigEvent().GetParam("jump_target");
    _info.text = 
        OrigEvent().GetParam("macro_comment").length ? 
        OrigEvent().GetParam("macro_comment"):
        OrigEvent().GetParam("fieldname") + ": " + OrigEvent().GetParam("text_d");
}

macro_info.input_radio = function() {
    _info = new Object;
    _info.rect = OrigEvent().GetParam("screenshot_rect");
    _info.jump_target = OrigEvent().GetParam("jump_target");
    _info.text = 
        OrigEvent().GetParam("macro_comment").length ? 
        OrigEvent().GetParam("macro_comment"):
        OrigEvent().GetParam("fieldname");
}

macro_info.select_single = function() {
    _info = new Object;
    _info.rect = OrigEvent().GetParam("screenshot_rect");
    _info.jump_target = OrigEvent().GetParam("jump_target");
    _info.text = 
        OrigEvent().GetParam("macro_comment").length ? 
        OrigEvent().GetParam("macro_comment"):
        OrigEvent().GetParam("fieldname") + ": " + OrigEvent().GetParam("choose_text");
}

macro_info.explanation = function() {
    _info = new Object;
    _info.rect = OrigEvent().GetParam("screenshot_rect");
    var co = OrigEvent().GetParam("macro_comment");
    var fn = OrigEvent().GetParam("fieldname");
    var ex = OrigEvent().GetParam("explanation_d");
    if (co.length) {
        _info.text = co;
    } else if (fn.length) {
        _info.text = fn;
    } else if (ex.length) {
        _info.text = html2txt(ex);
    }

}

macro_info.free_marker = function() {
    _info = new Object;
    _info.rect = OrigEvent().GetParam("screenshot_rect");
    _info.text = 
        OrigEvent().GetParam("macro_comment").length ? 
        OrigEvent().GetParam("macro_comment"):
        html2txt(OrigEvent().GetParam("text"));
}

macro_info.goto_tourstop = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment").length ? 
                OrigEvent().GetParam("macro_comment") :
                OrigEvent().GetParam("jump_target");
        ;
    _info.jump_target = OrigEvent().GetParam("jump_target");
}

// nothing
macro_info.start_unit = function() {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.explanation_long = function() {
    _info = new Object;
    _info.text = html2txt(OrigEvent().GetParam("explanation_d"));
    if (OrigEvent().GetParam("show_hl_d") && OrigEvent().GetParam("type") == "none") {
        _info.rect = OrigEvent().GetParam("screenshot_rect");
    }
}

macro_info.key_press = function() {
    _info = new Object;
    _info.jump_target = OrigEvent().GetParam("jump_target");
    _info.text = OrigEvent().GetParam("key_name");
}

macro_info.hinweis = function() {
    _info = new Object;
    _info.text = html2txt(OrigEvent().GetParam("text"));
}

macro_info.mode_change = function() {
    _info = new Object;
    var d = OrigEvent().GetParam("in_demo_to");
    var u = OrigEvent().GetParam("in_uebung_to");
    var t = OrigEvent().GetParam("in_test_to");
    var p = OrigEvent().GetParam("in_praxis_to");
    _info.text = "";
    if (d != "demo") {
        _info.text += Translate("demo") + " > " + Translate(d);
    }
    if (u != "uebung") {
        if (_info.text.length) _info.text += ", ";
        _info.text += Translate("uebung") + " > " + Translate(u);
    }
    if (t != "test") {
        if (_info.text.length) _info.text += ", ";
        _info.text += Translate("test") + " > " + Translate(t);
    }
    if (p != "praxis") {
        if (_info.text.length) _info.text += ", ";
        _info.text += Translate("praxis") + " > " + Translate(p);
    }
}

macro_info.beschreibung = macro_info.hinweis;

macro_info.new_window_close = macro_info.start_unit;
macro_info.end_unit = macro_info.start_unit;
macro_info.kurs = macro_info.start_unit;
macro_info.transaction_info = macro_info.start_unit;
macro_info.screenshot_part = macro_info.start_unit;
macro_info.doc_caption = macro_info.start_unit;
macro_info.arrow = macro_info.start_unit;
macro_info.page_break = macro_info.start_unit;
macro_info.info_page = macro_info.start_unit;

macro_info.form_on = function() {
    _info = new Object;
    _info.indent = 1;
    _info.text = Translate("form_on") + OrigEvent().GetParam("macro_comment");
}

macro_info.form_off = function() {
    _info = new Object;
    _info.indent = -1;
    _info.text = Translate("form_off") + OrigEvent().GetParam("macro_comment");
}

macro_info.quiz_shuffle_on = function() {
    _info = new Object;
    _info.indent = 1;
    _info.text = Translate("quiz_shuffle_on") + OrigEvent().GetParam("macro_comment");
}

macro_info.quiz_shuffle_off = function() {
    _info = new Object;
    _info.indent = -1;
    _info.text = Translate("quiz_shuffle_off") + OrigEvent().GetParam("macro_comment");
}

macro_info.branch_on = function() {
    _info = new Object;
    _info.indent = 1;
    _info.text = Translate("branch_on") + OrigEvent().GetParam("macro_comment");
}

macro_info.branch_off = function() {
    _info = new Object;
    _info.indent = -1;
    _info.text = Translate("branch_off") + OrigEvent().GetParam("macro_comment");
}


onactivate.new_page = function() {
    var mac = OrigEvent();

    var evt = CreateEvent("FileUrlMessage");
    evt.SetParam("url", mac.GetParam("dump_page"));

    var rp = CreatePosition(Position_FRAME);
    rp.WindowID = 0;

    evt.SetParam("relpos", rp);
    evt.Send();
}

onactivate.new_window = function() {
    var mac = OrigEvent();

    var evt = CreateEvent("WindowMessage");
    evt.SetParam("url", mac.GetParam("dump_page"));
    evt.SetParam("relpos", mac.GetParam("dump_win_relpos"));
    evt.SetParam("url", mac.GetParam("dump_page"));
    evt.SetParam("left", mac.GetParam("dump_win_left"));
    evt.SetParam("top", mac.GetParam("dump_win_top"));
    evt.SetParam("width", mac.GetParam("dump_win_width"));
    evt.SetParam("height", mac.GetParam("dump_win_height"));

    evt.Send();
}

onactivate.scroll_hor = function() {
    var mac = OrigEvent();

    var evt = CreateEvent("FileUrlMessage");
    evt.SetParam("url", mac.GetParam("dump_page"));

    var rp = CreatePosition(Position_FRAME);
    rp.WindowID = 0;

    evt.SetParam("relpos", rp);
    evt.Send();
}

onactivate.scroll_vert = function() {
    var mac = OrigEvent();

    var evt = CreateEvent("FileUrlMessage");
    evt.SetParam("url", mac.GetParam("dump_page"));

    var rp = CreatePosition(Position_FRAME);
    rp.WindowID = 0;

    evt.SetParam("relpos", rp);
    evt.Send();
}

// ========================= events ==========================================

function comment_only() {
    _info = new Object;
    _info.text = OrigEvent().GetParam("comment").length ? 
        "(" + OrigEvent().GetParam("comment") + ")" : "";
}
macro_info.cursor = comment_only;

macro_info.fileurl = function() {
    _info = new Object;
    _info.text = 
        OrigEvent().GetParam("url") + 
        (OrigEvent().GetParam("comment").length ? 
        " (" + OrigEvent().GetParam("comment") + ")" : "");
}

macro_info.formcheck = function() {
    _info = new Object;
    _info.text = OrigEvent().GetParam("comment");
}

macro_info.formselect = function() {
    _info = new Object;
    _info.text = 
        OrigEvent().GetParam("selected") + 
        (OrigEvent().GetParam("comment").length ? 
        " (" + OrigEvent().GetParam("comment") + ")" : "");
}

macro_info.formselect1 = function() {
    _info = new Object;
    _info.text = 
        OrigEvent().GetParam("selected") + 
        (OrigEvent().GetParam("comment").length ? 
        " (" + OrigEvent().GetParam("comment") + ")" : "");
}

macro_info.formtext = function() {
    _info = new Object;
    log("text: " + OrigEvent().GetParam("text"));
    _info.text = 
        OrigEvent().GetParam("text") + 
        (OrigEvent().GetParam("comment").length ? 
         " (" + OrigEvent().GetParam("comment") + ")" : "");
    log("info.text: " + _info.text);
}

macro_info.highlight = comment_only;

macro_info.javascript = function() {
    _info = new Object;
    _info.text = 
        OrigEvent().GetParam("text") + 
        (OrigEvent().GetParam("comment").length ? 
        " (" + OrigEvent().GetParam("comment") + ")" : "");
}

onactivate.javascript = function() {
    OrigEvent().Send();
}

macro_info.loaded = comment_only;

macro_info.mouse = comment_only;

macro_info.pause = function() {
    _info = new Object;
    if (OrigEvent().GetParam("type") == "simple") {
        _info.text = OrigEvent().GetParam("comment");
    } else {
        _info.text = 
            OrigEvent().GetParam("timeout") + 
            (OrigEvent().GetParam("comment").length ? 
            " (" + OrigEvent().GetParam("comment") + ")" : "");
    }
    /*
    _info.text = 
        OrigEvent().GetParam("duration") + 
        (OrigEvent().GetParam("comment").length ? 
        " (" + OrigEvent().GetParam("comment") + ")" : "");
        */
}

macro_info.scroll = comment_only;

macro_info.textbubble = function() {
    _info = new Object;
    _info.text = 
        html2txt(OrigEvent().GetParam("text")) + 
        (OrigEvent().GetParam("comment").length ? 
        "\n (" + OrigEvent().GetParam("comment") + ")" : "");
}

macro_info.url = function() {
    _info = new Object;
    _info.text = 
        OrigEvent().GetParam("url") + 
        (OrigEvent().GetParam("comment").length ? 
        " (" + OrigEvent().GetParam("comment") + ")" : "");
}

macro_info.window = function () {
    _info = new Object;
    _info.text = 
        OrigEvent().GetParam("url") + 
        (OrigEvent().GetParam("comment").length ? 
        " (" + OrigEvent().GetParam("comment") + ")" : "");
}

macro_info.sqmaquiz = function() {
    _info = new Object;
    _info.text = rem_newline(html2txt(OrigEvent().GetParam("question")));
}

macro_info.puzzlequiz = function() {
    _info = new Object;
    _info.text = rem_newline(html2txt(OrigEvent().GetParam("question")));
}

macro_info.hotspotquiz = function() {
    _info = new Object;
    _info.text = rem_newline(html2txt(OrigEvent().GetParam("question")));
}

macro_info.mchoice = function() {
    _info = new Object;
    _info.text = rem_newline(html2txt(OrigEvent().GetParam("question")));
}

macro_info.fibquiz = function() {
    _info = new Object;
    _info.text = rem_newline(html2txt(OrigEvent().GetParam("question")));
}

macro_info.quiz_eval = function() {
    _info = new Object;
    _info.text = Translate("quiz_eval");
}

macro_info.matchquiz = function() {
    _info = new Object;
    _info.text = rem_newline(html2txt(OrigEvent().GetParam("matchquestion")));
}

macro_info.connquiz = function() {
    _info = new Object;
    _info.text = rem_newline(html2txt(OrigEvent().GetParam("connquestion")));
}

macro_info.mixquiz = function() {
    _info = new Object;
    _info.text = rem_newline(html2txt(OrigEvent().GetParam("question")));
}

macro_info.scalequiz = function() {
    _info = new Object;
    _info.text = rem_newline(html2txt(OrigEvent().GetParam("question")));
}

macro_info.gridquiz = function() {
    _info = new Object;
    _info.text = rem_newline(html2txt(OrigEvent().GetParam("question")));
}

macro_info.swf_page = function () {
    _info = new Object;
    _info.screenshot = "";
    _info.text = 
        OrigEvent().GetParam("swf_file") + 
        (OrigEvent().GetParam("macro_comment").length ? 
        " (" + OrigEvent().GetParam("macro_comment") + ")" : "");
}

onactivate.swf_page = function() {
}
