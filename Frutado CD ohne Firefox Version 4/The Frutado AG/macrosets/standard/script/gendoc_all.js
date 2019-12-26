#use(doc.js)

function generate_doc_batch(style) {
    cur_sc = null;


    if (!check_doc_template(cfg.standard.doc.template, 'msgGenerateDocumentation')) {
        return;
    }

    try {
        if (check_tour_screenshots()) {
            var doc_eng;
            var name_base = 'standard';
            var display_name = 'Standard Document';
            if (style == 'training') {
                doc_eng = new DocEngineTable();
                name_base = 'training';
                display_name = 'Training Manual';
            } else if (style == 'test') {
                doc_eng = new DocEngineTableWide();
                name_base = 'testsheet';
                display_name = 'Test Sheet';
            } else if (style == 'jobhelp') {
                doc_eng = new DocEngineChecklist();
                name_base = 'jobhelp';
                display_name = 'Job Help';
            } else if (style == 'work') {
                doc_eng = new DocEngine(style);
                name_base = 'work';
                display_name = 'Work Document';
            } else if (style == 'standard') {
                doc_eng = new DocEngine(style);
                name_base = 'standard';
                display_name = 'Standard Document';
            } else {
                doc_eng = new DocEngine(style);
                name_base = style;
                display_name = 'Document';
            }

            doc_eng.reset();

            var fn = Project.DocPath + name_base + '.doc';

            Document.Template = get_doc_template(cfg.standard.doc.template);

            doc_eng.define_styles();

            doc_eng.handle_tour_stops();

            doc_eng.finish();

            Document.WriteDoc(fn, "doc", Project.DisplayName + ' ' + display_name);

            doc_eng.clean_up();

            batch_doc_succ_count ++;
        }
    } catch(e) {
        batch_doc_err_count ++;
        log(e);
    }
}

