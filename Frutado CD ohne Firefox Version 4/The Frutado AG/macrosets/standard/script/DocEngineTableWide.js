/* testdocument */

function DocEngineTableWide() {};

DocEngineTableWide.prototype = new DocEngineTable;
DocEngineTableWide.superClass = DocEngineTable.prototype;

DocEngineTableWide.prototype.open_table = function() {
    if (!this.table_open_) {
        Document.BeginParagraph(word_trans('para_bubble_text'));
        Document.BeginTable("standard_table_wide");
            Document.BeginRow();
                Document.BeginCell();
                    Document.CellBgColor = 0xe0e0e0;
                    this.add_text_paragraph(word_trans('para_bubble_text_center'), prj_trans('docTableHeaderStep'), "bold");
                Document.EndCell();
                Document.BeginCell();
                    Document.CellBgColor = 0xe0e0e0;
                    this.add_text_paragraph(word_trans('para_bubble_text'), prj_trans('docTableHeaderAction'), "bold");
                Document.EndCell();
                Document.BeginCell();
                    Document.CellBgColor = 0xe0e0e0;
                    this.add_text_paragraph(word_trans('para_bubble_text'), prj_trans('docTableHeaderInput'), "bold");
                Document.EndCell();
                Document.BeginCell();
                    Document.CellBgColor = 0xe0e0e0;
                    this.add_text_paragraph(word_trans('para_bubble_text'), prj_trans('docTableHeaderExpectedResults'), "bold");
                Document.EndCell();
                Document.BeginCell();
                    Document.CellBgColor = 0xe0e0e0;
                    this.add_text_paragraph(word_trans('para_bubble_text'), prj_trans('docTableHeaderPassed'), "bold");
                Document.EndCell();
                Document.BeginCell();
                    Document.CellBgColor = 0xe0e0e0;
                    this.add_text_paragraph(word_trans('para_bubble_text'), prj_trans('docTableHeaderFailed'), "bold");
                Document.EndCell();
            Document.EndRow();

        this.table_open_ = true;
    }
}

DocEngineTableWide.prototype.add_bubble_text = function(macro, index) {
    if (!cfg.standard.doc.show_bubble_text) return;
    var text = this.get_macro_text(macro);
    var doc_index = ((index != -1 && cfg.standard.doc.rects_with_index) ? index + "." : "");
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
            Document.BeginCell();
                this.add_html_paragraph(word_trans('para_bubble_text'), "&nbsp;");
            Document.EndCell();
            Document.BeginCell();
                this.add_html_paragraph(word_trans('para_bubble_text'), "&nbsp;");
            Document.EndCell();
            Document.BeginCell();
                this.add_html_paragraph(word_trans('para_bubble_text'), "&nbsp;");
            Document.EndCell();
            Document.BeginCell();
                this.add_html_paragraph(word_trans('para_bubble_text'), "&nbsp;");
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

DocEngineTableWide.prototype.define_styles = function() {
    DocEngineTableWide.superClass.define_styles();

    // STANDARD TABLE WIDE
    Document.SetCurrCellStyle("wide_cell_left");
    Document.CellWidth = 50;
    Document.CellPadding(3.5, 3.5, 3.5, 3.5);
    Document.CellBgColor = 0xffffff;

    Document.SetCurrCellStyle("wide_cell_action");
    Document.CellWidth = 120;
    Document.CellPadding(3.5, 3.5, 3.5, 3.5);
    Document.CellBgColor = 0xffffff;

    Document.SetCurrCellStyle("wide_cell_input");
    Document.CellWidth = 65;
    Document.CellPadding(3.5, 3.5, 3.5, 3.5);

    Document.SetCurrCellStyle("wide_cell_expected");
    Document.CellWidth = 65;
    Document.CellPadding(3.5, 3.5, 3.5, 3.5);

    Document.SetCurrCellStyle("wide_cell_ok");
    Document.CellWidth = 75;
    Document.CellPadding(3.5, 3.5, 3.5, 3.5);

    Document.SetCurrRowStyle("row_wide");
    Document.RowHeight = 12.0;
    Document.SetRowCellStyles("wide_cell_left",
                              "wide_cell_action",
                              "wide_cell_input",
                              "wide_cell_expected",
                              "wide_cell_ok",
                              "wide_cell_ok");

    Document.SetCurrTableStyle("standard_table_wide");
    Document.TableBorder = 0.5;
    //Document.TablePreferredWidth = 432.3;
    Document.TableRowStyle = "row_wide";
};