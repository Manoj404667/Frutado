/* jobhelp */

function DocEngineChecklist() {
    this.my_index_ = 1;
};

DocEngineChecklist.prototype = new DocEngine;
DocEngineChecklist.superClass = DocEngine.prototype;


DocEngineChecklist.prototype.create_macro_image = function(macro) {
    return null;
};

DocEngineChecklist.prototype.hinweis = function(macro, ts) {
    /*var text = macro.GetParam("text");

    var icon_path = this.hinweis_path(macro);

    this.draw_hinweis_table(text, icon_path);*/
};

DocEngineChecklist.prototype.explanation_long = function(macro, ts) {
    this.add_bubble_text(macro, this.current_index);
};

DocEngineChecklist.prototype.status_info = function(macro, ts) {
    /*var status_txt = macro.GetParam("status_text");
    var status_file = macro.GetParam("screenshot_file");

    if (status_file.length != 0 && FileExists(Project.DocPath + status_file)) {
        Document.BeginParagraph(word_trans('para_bubble_text'));
        Document.AddText(status_txt);
        Document.AddImage(Project.DocPath + status_file);
        Document.EndParagraph();
    }*/
};

DocEngineChecklist.prototype.beschreibung = function(macro, ts) {
    /*var text = macro.GetParam("text");

    this.add_html_paragraph(word_trans('para_beschreibung'), text);*/
};

DocEngineChecklist.prototype.new_page = function(macro, ts) {
    /*log("new_page");
    if (cfg.standard.doc.heading_from_new_page) {
        if (!macro.HasParam("doc_heading") || macro.GetParam("doc_heading")) {
            var text = macro.GetParam("new_step");
            if (text != "") {
                var parastyle = word_trans('para_heading') + (cfg.standard.doc.singledoc_headinglevel + 1);
                this.add_html_paragraph(parastyle, text);
            }
        }
    }

    var sc = this.create_macro_image(macro);
    this.set_cur_sc(sc);
    if (this.cur_sc) this.add_screenshot(this.cur_sc);*/
};

DocEngineChecklist.prototype.new_window = DocEngineChecklist.prototype.new_page;

DocEngineChecklist.prototype.doc_caption = function(macro, ts) {
    /*var caption = macro.GetParam("caption");

    if (caption != "") {
        this.add_text_paragraph(macro.GetParam("type"), caption);
    }*/
};

DocEngineChecklist.prototype.page_break = function(macro, ts) {
    /*log("Page Break");
    Document.PageBreak();*/
};


DocEngineChecklist.prototype.kurs = function(macro, ts) {
    /*var title = macro.GetParam("titel");
    var bezeichnung = macro.GetParam("bezeichnung");

    if (title != "") {
        this.add_text_paragraph(word_trans('para_title'), title);
    }

    if (bezeichnung != "") {
        this.add_text_paragraph(word_trans('para_title'), bezeichnung);
    }

    if (Project.Description != "") {
        this.add_html_paragraph(word_trans('para_beschreibung'), Project.Description);
    }*/
};

DocEngineChecklist.prototype.add_bubble_text = function(macro, index) {
    if (!cfg.standard.doc.show_bubble_text) return false;
    var text = this.get_macro_text(macro);
    if (text.length == 0) return false;
    if (macro.Template() == "explanation_long") return false;

    // index -1: Erklärung lang
    //if (index == -1) Document.LineBreak();
    
    Document.BeginRow();
        Document.BeginCell();
            this.add_html_paragraph(word_trans('para_bubble_text_center'), this.my_index_ + ".");
        Document.EndCell();
        Document.BeginCell();
            this.add_html_paragraph(word_trans('para_bubble_text'), text);
        Document.EndCell();
    Document.EndRow();

    //if (index == -1) Document.LineBreak();

    if (index > 0) this.current_index++;
    this.my_index_++;

    return true;
};

DocEngineChecklist.prototype.define_styles = function() {
    DocEngineTable.superClass.define_styles();
    
    Document.SetCurrCellStyle("standard_cell_left");
    Document.CellWidth = 50;
    Document.CellPadding(3.5, 3.5, 3.5, 3.5);
    
    Document.SetCurrCellStyle("standard_cell_right");
    Document.CellWidth = 400;
    Document.CellPadding(3.5, 3.5, 3.5, 3.5);
    
    Document.SetCurrRowStyle("standard_row");
    Document.RowHeight = 12.0;
    Document.SetRowCellStyles("standard_cell_left", "standard_cell_right");

    Document.SetCurrTableStyle("standard_table");
    Document.TableBorder = 0.5;
    //Document.TablePreferredWidth = 432.3;
    Document.TableRowStyle = "standard_row";
};


DocEngineChecklist.prototype.handle_tour_stops = function() {
    log("handle_tour_stops");
    ProgressBegin(ui_trans('progressMacros'), num_events);
    var cur_event = 0;

    // Description Added in Dok Kopfangaben
    //Document.AddHtmlText(Project.Description);
    Document.SetProperty("Title", Project.DisplayName);
    Document.SetProperty("Author", Project.Author);

    if (cfg.standard.doc.include_project_details) {

        this.add_text_paragraph(word_trans('para_heading') + cfg.standard.doc.singledoc_headinglevel,
                                Project.DisplayName);

        this.add_html_paragraph(word_trans('standard'), Project.Description);
    }
    
    Document.BeginParagraph(word_trans('para_bubble_text'));
    Document.BeginTable("standard_table");

    Document.BeginRow();
    Document.BeginCell();
        Document.CellBgColor = 0xe0e0e0;
        this.add_text_paragraph(word_trans('para_bubble_text_center'), prj_trans('docTableHeaderStep'), "bold");
    Document.EndCell();
    Document.BeginCell();
        Document.CellBgColor = 0xe0e0e0;
        this.add_text_paragraph(word_trans('standard'), prj_trans('docTableHeaderAction'), "bold");
    Document.EndCell();
    Document.EndRow();
    
    for (i = 0; i < NumTourstops(); i++) {
        var ts = GetTourstop(i);

        /*if (!(i == 0 && cfg.standard.doc.ignore_tourstop_start &&
              (ts.Caption == "Start" || ts.Caption != "Init")))
        {
            this.handle_tourstop(ts);
        }*/

        var macro;

        macro = ts.NextMacro();

        while (macro != null) {

            this.handle_macro(macro, ts);

            macro = ts.NextMacro(macro.TourPosition());

            CurProgress(++cur_event);
        }
    }
    
    Document.EndTable();
    Document.EndParagraph();

    ProgressEnd();
}
