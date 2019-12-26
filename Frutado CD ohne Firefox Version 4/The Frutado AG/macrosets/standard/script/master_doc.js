#use(word_lang.js);
#use(config.js);
#use(doc_util.js);
#use(ui_lang.js);

var depth = 0;

var master_image_base;

var master_doc_filename = ReadStringSetting("MasterDocFileName", "");

var cancelled = false;

function
master_init(wa_image_base) {
    log("master_init");
    depth = 0;
    Document.Clear();
    master_image_base = wa_image_base;

    cancelled = false;

    if (!check_doc_template(cfg.standard.doc.master_template, 'msgGenerateDocumentation')) {
        cancelled = true;
        return;
    }

    Document.Template = get_doc_template(cfg.standard.doc.master_template);
    Document.SetHtmlBase(master_image_base);
}

function
master_begin_project(name, description, basepath) {
    if (cancelled) return;

    log("master_begin_project");
    //md changed
    log("master_begin_project: do nothing here");
    return;

    Document.SetHtmlBase(basepath);

    if (depth == 0) depth = 1;

    if (name.length > 0) {
        Document.BeginParagraph(word_trans('para_heading') + depth);
        Document.AddText(name);
        Document.EndParagraph();
    }
    if (description.length > 0) {
        Document.BeginParagraph(word_trans('standard'));
        Document.AddHtmlText(description);
        Document.EndParagraph();
    }
    depth ++;
}

function
master_end_project() {
    if (cancelled) return;

    log("master_end_project");
    //md changed
    log("master_end_project: do nothing here");
    return;

    depth --;
    Document.SetHtmlBase(master_image_base);
}

function
master_begin_group(name, description, basepath) {
    if (cancelled) return;

    Document.SetHtmlBase(basepath);
    
    log("master_begin_group " + depth);
    if (depth == 0) {
        log("Set Title: "  + name);
        Document.SetProperty("Title", name);
    } else {
        if (name.length > 0) {
            Document.BeginParagraph(word_trans('para_heading') + depth);
            Document.AddText(name);
            Document.EndParagraph();
        }
    }

    if (description.length > 0) {
        Document.BeginParagraph(word_trans('standard'));
        Document.AddHtmlText(description);
        Document.EndParagraph();
    }
    depth ++;
}

function
master_end_group() {
    if (cancelled) return;

    log("master_end_group");
    depth --;
    Document.SetHtmlBase(master_image_base);
}

function 
master_add_doc(filepath, name, description) {
    if (cancelled) return;

    log("master_add_document " + filepath);
    Document.BeginParagraph(word_trans('standard'));
    Document.AddChildDoc(filepath);
    Document.EndParagraph();
    Document.BeginParagraph(word_trans('standard'));
    Document.AddText(" ");
    Document.EndParagraph();
}

function
master_finish(path) {
    if (cancelled) return;

    if (master_doc_filename == null) master_doc_filename = "";
    
    var dlg = CreateDialog();
    dlg.SetCaption(ui_trans('capMasterDoc'));
    dlg.AddParam("name", ParamType_TEXT_SINGLE, ui_trans('paramMasterDocName'));
    dlg.AddParam("path", ParamType_TEXT_SINGLE, ui_trans('paramMasterDocPath'));
    dlg.SetParamProperty("path", "rdonly", "true");
    dlg.SetParam("name", ui_trans("dfltMasterDocName"));
    dlg.SetParam("path", path);
    if (!dlg.DoModal()) return;
    var name = dlg.GetParam("name");
    
    if (name != null && name != "") {
        if (!name.match(".[Dd][Oo][Cc]$")) {
            name += ".doc";
        }
        master_doc_filename = name;
        log("master_finish: saving to " + path + master_doc_filename);
        Document.WriteDoc(path + master_doc_filename);
        WriteStringSetting("MasterDocFileName", path + master_doc_filename);
        var mbres = MsgBox(ui_trans('msgOpenMasterDoc'),
                           ui_trans('msgMasterDocFinished'), 
                           MB_QUESTION | MB_YESNO);

        if (mbres == IDYES) {
            ShellExecute(path + master_doc_filename);
        }
    }
    Document.Clear();
}
