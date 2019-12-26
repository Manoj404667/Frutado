#use(config.js)
#use(custom/config.js)
#use(ui_lang.js)
#use(lang.js)

var num_events = 0;

function trans_count_macros() {
    var missing_sc = 0;
    num_events = 0;

    Document.SetCurrParaStyle(word_trans('para_heading') + '3');
    Document.ParaBgColor = 0x00ff00;
    Document.ParaFontColor = 0xff00ff;

    for (i = 0; i < NumTourstops(); i++) {
        var ts = GetTourstop(i);

        var macro = ts.NextMacro();

        while (macro != null) {
            num_events ++;
            macro = ts.NextMacro(macro.TourPosition());
        }
    }
}

function trans_handle_tour_stops() {
    ProgressBegin(ui_trans('progressMacros'), num_events);
    var cur_event = 0;

    for (i = 0; i < NumTourstops(); i++) {
        var ts = GetTourstop(i);

        if (i != 0 || (ts.Caption != "Start" && ts.Caption != "Init")) {
            Document.BeginParagraph('ParamPosition');
            Document.AddText('#TS#' + i + '#' );
            Document.EndParagraph();
            Document.BeginParagraph(word_trans('standard'));
            Document.AddHtmlText(ts.Caption);
            Document.EndParagraph();
        }

        var macro;

        macro = ts.NextMacro();

        while (macro != null) {

            trans_handle_macro(macro, ts, cur_event);

            macro = ts.NextMacro(macro.TourPosition());

            CurProgress(++cur_event);
        }
    }

    ProgressEnd();
}

function trans_handle_macro(macro, ts, index) {
    for (var i = 0; i < macro.NumParams(); i++) {
        var name = macro.ParamName(i);
        var name_mod = name + '_modified';
        var value = macro.GetParam(name);
        if (macro.ParamTranslatable(name) && value != '') {
            if (!macro.HasParam(name_mod) || macro.GetParam(name_mod)) {
                Document.BeginParagraph('ParamPosition');
                Document.AddText('#MAC#' + index + '#PAR#'  + name + '#' );
                Document.EndParagraph();
                Document.BeginParagraph(word_trans('standard'));
                Document.AddHtmlText(macro.GetParam(name));
                Document.EndParagraph();
            }
        }
    }

}

function export_translatable() {

    trans_count_macros();

    Document.Template = Project.ScriptBase + "\\Translatable.dot";

    Document.Clear(false);
    Document.IgnoreInlineImg = true;

    var fn = GetFilename("Word Document (*.doc)", "*.doc", "txtdir");

    if (fn == null) return;

    trans_handle_tour_stops();

    Document.WriteDoc(fn);

    if (fn != null) {
        var mbres = MsgBox(ui_trans('msgOpenDocumentation'),
                           ui_trans('msgDocFinished'),
                           MB_QUESTION | MB_YESNO);

        if (mbres == IDYES) {
            ShellExecute(fn);
        }
    }
}
