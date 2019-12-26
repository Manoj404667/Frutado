/* training-document */

function DocEngineTable() {
    this.table_open_ = false;
    this.my_index_ = 1;
};

DocEngineTable.prototype = new DocEngine;
DocEngineTable.superClass = DocEngine.prototype;

DocEngineTable.prototype.transaction_info = function(macro, ts) {
    this.close_table();
    DocEngineTable.superClass.transaction_info.call(this, macro, ts);
}

DocEngineTable.prototype.draw_hinweis_table = function(text, icon_path) {
    this.close_table();
    DocEngineTable.superClass.draw_hinweis_table.call(this, text, icon_path);
}

DocEngineTable.prototype.open_table = function() {
    if (!this.table_open_) {
        Document.BeginParagraph(word_trans('para_bubble_text'));

        Document.BeginTable("standard_table");
            Document.BeginRow();
                Document.BeginCell();
                    Document.CellBgColor = 0xe0e0e0;
                    this.add_text_paragraph(word_trans('para_bubble_text_center'), prj_trans('docTableHeaderStep'), "bold");
                Document.EndCell();
                Document.BeginCell();
                    Document.CellBgColor = 0xe0e0e0;
                    this.add_text_paragraph(word_trans('para_bubble_text'), prj_trans('docTableHeaderAction'), "bold");
                Document.EndCell();
            Document.EndRow();

        this.table_open_ = true;
    }
}

DocEngineTable.prototype.close_table = function() {
    if (this.table_open_) {
        Document.EndTable();
        Document.EndParagraph();

        this.table_open_ = false;
    }
}

DocEngineTable.prototype.add_bubble_text = function(macro, index) {
    if (!cfg.standard.doc.show_bubble_text) return false;
    var text = this.get_macro_text(macro);
    if (text.length == 0) return false;

    var mtype = macro.Template();

    if (index > 0 || mtype == "key_press") {
        this.open_table();

        if (this.current_index == 1 && this.current_index != this.my_index_) {
            this.my_index_ = 1;
        }

        Document.BeginRow();
            Document.BeginCell();
                if (mtype != "key_press") {
                    this.add_html_paragraph(word_trans('para_bubble_text_center'), this.my_index_ + ".");
                } else {
                    this.add_html_paragraph(word_trans('para_bubble_text_center'), "");
                }
            Document.EndCell();
            Document.BeginCell();
                this.add_html_paragraph(word_trans('para_bubble_text'), text);
            Document.EndCell();
        Document.EndRow();

        if (mtype != "key_press") this.my_index_++;
    } else {
        this.close_table();

        Document.LineBreak();
        this.add_html_paragraph(word_trans('para_bubble_text'), text);
        Document.LineBreak();
    }

    return true;
};

DocEngineTable.prototype.reset = function() {
    DocEngineTable.superClass.reset.call(this);

    this.table_open_ = false;
};


DocEngineTable.prototype.define_styles = function() {
    DocEngineTable.superClass.define_styles.call(this);

    // STANDARD TABLE
    Document.SetCurrCellStyle("standard_cell_left");
    Document.CellWidth = 50;
    Document.CellPadding(3.5, 3.5, 3.5, 3.5);
    Document.CellBgColor = 0xffffff;

    Document.SetCurrCellStyle("standard_cell_right");
    Document.CellWidth = 400;
    Document.CellPadding(3.5, 3.5, 3.5, 3.5);
    Document.CellBgColor = 0xffffff;

    Document.SetCurrRowStyle("standard_row");
    Document.RowHeight = 12.0;
    Document.SetRowCellStyles("standard_cell_left",
                              "standard_cell_right");

    Document.SetCurrTableStyle("standard_table");
    Document.TableBorder = 0.5;
    //Document.TablePreferredWidth = 432.3;
    Document.TableRowStyle = "standard_row";

};

DocEngineTable.prototype.new_page = function(macro, ts) {
    this.close_table();
    DocEngineTable.superClass.new_page.call(this, macro, ts);

};


DocEngineTable.prototype.handle_tourstop = function(ts) {
    log("DocEngineTable::handle_tourstop");

    if (this.more_details) {
        this.add_text_paragraph(word_trans('para_heading') + (cfg.standard.doc.singledoc_headinglevel + 1),
                                Translate("IDS_TOURSTOP") + " " + ts.Index + ": " + ts.Caption);

    } else if (cfg.standard.doc.heading_from_tourstop) {
        var text = ts.Caption;

        if (text != "") {
            this.close_table();

            var parastyle = word_trans('para_heading') + (cfg.standard.doc.singledoc_headinglevel + 1);
            this.add_text_paragraph(parastyle, text);
        }
    }
};

DocEngineTable.prototype.handle_tour_stops = function() {
    log("DocEngineTable::handle_tour_stops");
    DocEngineTable.superClass.handle_tour_stops.call(this);
    this.close_table();
}
