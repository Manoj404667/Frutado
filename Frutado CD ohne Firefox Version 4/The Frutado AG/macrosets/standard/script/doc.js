#use(doc_util.js)
#use(config.js)
#use(custom/config.js)
#use(word_lang.js)
#use(ui_lang.js)
#use(lang.js)

#use(DocEngine.js)
#use(DocEngineTable.js)
#use(DocEngineChecklist.js)
#use(DocEngineTableWide.js)

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



function generate_doc(style) {
    cur_sc = null;

    if (!check_doc_template(cfg.standard.doc.template, 'msgGenerateDocumentation')) {
        return;
    }

    if (check_tour_screenshots()) {
        var doc_eng;
        if (style == 'training') {
            doc_eng = new DocEngineTable();
        } else if (style == 'test') {
            doc_eng = new DocEngineTableWide();
        } else if (style == 'jobhelp') {
            doc_eng = new DocEngineChecklist();
        } else {
            doc_eng = new DocEngine(style);
        }

        doc_eng.reset();

        var fn = GetDocFilename();

        if (fn == null) return;

        Document.Template = get_doc_template(cfg.standard.doc.template);

        //call causes empty h1 line
        doc_eng.define_styles();

        doc_eng.handle_tour_stops();

        doc_eng.finish();

        Document.WriteDoc(fn);

        doc_eng.clean_up();

        if (fn != null) {
            var mbres = MsgBox(ui_trans('msgOpenDocumentation'),
                               ui_trans('msgDocFinished'),
                               MB_QUESTION | MB_YESNO);

            if (mbres == IDYES) ShellExecute(fn);
        }
    }
}

function generate_doc_checklist() {
    cur_sc = null;

    if (!check_doc_template(cfg.standard.doc.template, 'msgGenerateDocumentation')) {
        return;
    }

    var doc_eng = new DocEngineChecklist();

    doc_eng.reset();

    var fn = GetDocFilename();

    if (fn == null) return;

    Document.Template = get_doc_template(cfg.standard.doc.template);

    //call causes empty h1 line
    doc_eng.define_styles();

    doc_eng.handle_tour_stops();
    doc_eng.finish();

    Document.WriteDoc(fn);

    doc_eng.clean_up();

    if (fn != null) {
        var mbres = MsgBox(ui_trans('msgOpenDocumentation'),
                           ui_trans('msgDocFinished'),
                           MB_QUESTION | MB_YESNO);

        if (mbres == IDYES) ShellExecute(fn);
    }
}
