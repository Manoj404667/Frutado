#use(config.js)
#use(custom/config.js)
#use(word_lang.js)
#use(ui_lang.js)

#use(doc_util.js);
#use(PptEngine.js);

function generate_ppt() {

    if (check_tour_screenshots()) {
        var ppt_eng = new PptEngine();

        ppt_eng.disable_chart();
        ppt_eng.reset();

        ppt_eng.define_styles();

        ppt_eng.handle_tour_stops();

        ppt_eng.finish();

        Document.Template = get_doc_template(cfg.standard.doc.ppt_template);
        var fn = GetPptFilename();

        if (fn != null) {
            Document.WriteDoc(fn, "ppt");
        }

        ppt_eng.clean_up();

        if (fn != null) {
            var mbres = MsgBox(ui_trans('msgOpenDocumentation'),
                               ui_trans('msgDocFinished'),
                               MB_QUESTION | MB_YESNO);

            if (mbres == IDYES) {
                ShellExecute(fn);
            }
        }
    }
}

generate_ppt();
