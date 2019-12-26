#use(config.js)
#use(custom/config.js)
#use(word_lang.js)
#use(ui_lang.js)
#use(lang.js)

#use(doc_util.js)
#use(HtmlEngine.js)

function generate_html() {

    if (check_tour_screenshots()) {
        var html_eng = new HtmlEngine();

        html_eng.disable_chart();
        html_eng.reset();

        html_eng.define_styles();

        html_eng.handle_tour_stops();

        html_eng.finish();

        Document.Template = "";

        var fn = GetHtmlFilename();

        if (fn != null) {
            Document.WriteDoc(fn, "html");
        }

        html_eng.clean_up();

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
