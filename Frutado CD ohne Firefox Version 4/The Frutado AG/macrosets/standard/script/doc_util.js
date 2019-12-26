#use(ui_lang.js)

var num_events = 0;

function get_doc_template(config_string) {
    var dot = config_string;

    // don't try any tricks if it is a valid path
    if (FileExists(dot)) return dot;

    try {
        eval('dot = ' + config_string);
    } catch (e) {
        // alert("Invalid document template: " + e.message);
    }
    return dot;
};

function check_doc_template(config_string, msgboxCaptionKey) {
    var dot = get_doc_template(config_string);
    if (!FileExists(dot)) {
        return MsgBox(dot + ui_trans('msgFNFContinueAnyway'),
                      ui_trans(msgboxCaptionKey),
                      MB_QUESTION | MB_YESNO) == IDYES;
    }
    return true;
};

function check_tour_screenshots() {
    var missing_sc = 0;
    num_events = 0;

    for (i = 0; i < NumTourstops(); i++) {
        var ts = GetTourstop(i);

        if (i == 0 && cfg.standard.doc.ignore_tourstop_start &&
            (ts.Caption == "Start" || ts.Caption == "Init")) {
            continue;
        }

        var macro = ts.NextMacro();

        while (macro != null) {
            var temp_name = macro.Template();

            if (temp_name == "new_page" || temp_name == "input_text" ||
                temp_name == "select_single" || temp_name == "input_radio")
            {
                var screenshot_file = Project.DocPath + macro.GetParam("screenshot_file");
                var exists = FileExists(screenshot_file);

                if (!exists) missing_sc++;
            }

            macro = ts.NextMacro(macro.TourPosition());
            num_events ++;
        }
    }

    if (missing_sc > 0) {
        var status = MsgBox(ui_trans('errMissingScreenshot'), ui_trans('macDocumentation'), MB_YESNOCANCEL);

        if (status == IDCANCEL) {
            return false;
        } else if (status == IDYES) {
            fill_screenshots();
        }
    }

    return true;
};

function fill_screenshots() {
    var base_path = HtmlDumper.basepath;

    for (i = 0; i < NumTourstops(); i++) {
        var ts = GetTourstop(i);
        var macro;

        macro = ts.NextMacro();

        while (macro != null) {
            var temp_name = macro.Template();

            if (temp_name == "new_page" || temp_name == "input_text" ||
                temp_name == "select_single" || temp_name == "input_radio")
            {
                if (temp_name == "new_page") {
                    var url = base_path + macro.GetParam("dump_page");

                    if (FileExists(url)) {

                        LoadUrl(base_path + macro.GetParam("dump_page"));

                        Sleep(1000);
                    }
                }

                var screenshot_file = Project.DocPath + macro.GetParam("screenshot_file");
                var exists = FileExists(screenshot_file);

                if (!exists) {
                    var rp = null;
                    var file_prefix = "PAGE_";

                    if (temp_name != "new_page") {

                        rp = macro.GetParam("position_h");

                        if (temp_name == "input_text") {

                            rp.ExecScript("value='" + macro.GetParam("text_d") + "'");
                            file_prefix = "INPUT_";
                        } else if (temp_name == "select_single") {
                            var selected = macro.GetParam("choose_nr");

                            rp.ExecScript("selectedIndex=" + macro.GetParam("choose_nr"));
                            file_prefix = "SELECT_";
                        } else if (temp_name == "input_radio") {

                            rp.ExecScript("checked = " + (macro.GetParam("choose_bool") == "1" ? "true" : "false"));
                            file_prefix = "RADIO_";
                        }
                    }

                    var sc_fn = GetUniqueFilename(Project.DocPath, file_prefix, ".gif");
                    var sc = ImageScreenshot(Project.DocPath + sc_fn, rp, 4);

                    macro.SetParam("screenshot_file", sc_fn);
                    macro.SetParam("screenshot_rect", sc.rect);
                }
            }

            macro = ts.NextMacro(macro.TourPosition());
        }
    }
};

function doc_quizzes_check(macro, max_answers, label, shuffle) {
    if (typeof(shuffle) == 'undefined') shuffle = false;    
    var a = [];
    var b = [];
    for (var i = 1, j = 0; i <= max_answers; i++) {
        var t = macro.GetParam(label + i);
        if (remove_html(t) != "" || t.toLowerCase().search(/<img/) != -1) {
            a[j] = t;
            b[j++] = i;
        }
    }
    if (shuffle && a.length > 1) {
        for (var i = a.length - 1; i > 0; i--) {
            var r = Math.floor(Math.random() * (i + 1));
            var t = a[i];
            a[i] = a[r];
            a[r] = t;
            t = b[i];
            b[i] = b[r];
            b[r] = t;
        }
    }
    return { val: a, idx: b };
}

Array.prototype.mix = function() {
    if (this.length < 2) return;
    for (var j = this.length - 1; j > 0; j--) {
        var r = Math.floor(Math.random() * (j + 1));
        var t = this[j];
        this[j] = this[r];
        this[r] = t;
    }
}

Array.prototype.copy = function() {
    var new_array = new Array();
    for (var i = 0; i < this.length; i++) {
        new_array[i] = this[i];
    }
    return new_array;
}

function remove_html(txt) {
    var res = txt;
    res = res.replace(/\n/g, '');
    res = res.replace(/<[^>]*>/g, '');
    res = res.replace(/&nbsp;/gi, ' ');
    res = res.replace(/&lt;/gi, '<');
    res = res.replace(/&gt;/gi, '>');
    return res;
}

function remove_outer_p_tags(str) {
    var str_length = str.length;
    if (str.substring(0, 3).toLowerCase() == "<p>" &&
        str.substring(str_length-4, str_length).toLowerCase() == "</p>") {
        str = str.substr(3,str_length-7);
    }
    return str;
}
