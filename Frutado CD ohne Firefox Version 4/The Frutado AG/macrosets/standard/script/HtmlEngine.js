#use(ui_lang.js)

#use(DocEngine.js);

function HtmlEngine() {};

HtmlEngine.prototype = new DocEngine;
HtmlEngine.superClass = DocEngine.prototype;

function html_paratype(paratype) {
    return paratype.replace(" ", "_");
}

function html_trans(paratype) {
     return html_paratype(word_trans(paratype));
}

HtmlEngine.prototype.add_html_paragraph = function(paratype, htmltext) {
    log("HTML:" + paratype);
    Document.BeginParagraph(html_paratype(paratype));
    if (htmltext.length > 0) Document.AddHtmlText(htmltext);
    Document.EndParagraph();
}

HtmlEngine.prototype.add_text_paragraph = function(paratype, text) {
    log("TEXT: " + paratype);
    Document.BeginParagraph(html_paratype(paratype));
    if (text.length > 0) Document.AddText(text);
    Document.EndParagraph();
}

HtmlEngine.prototype.add_image_paragraph = function(paratype, imagepath) {
    log("Image: " + paratype);
    Document.BeginParagraph(html_paratype(paratype));
    if (imagepath.length > 0) Document.AddImage(imagepath);
    Document.EndParagraph();
}

HtmlEngine.prototype.reset = function() {
    log("html reset");
    HtmlEngine.superClass.reset.call(this);

    Document.SetHtmlBase(Project.BaseDir);

    Document.AddText('<div style="background-color:#005488;text-align:center;width:100%;padding:24px"><DIV style="text-align:left;padding:10px;width:800px;background-color:#FFFFFF">');
};

HtmlEngine.prototype.finish = function() {
    this.set_cur_sc(null);
    Document.AddText('</div></div>');
}

HtmlEngine.prototype.define_styles = function() {
    log("define_styles");

    Document.SetCurrParaStyle(html_trans('standard'));
    Document.ParaBgColor = -1;
    Document.ParaFontName = "Times New Roman";
    Document.ParaFontSize = 11;

    Document.SetCurrParaStyle(html_paratype(word_trans('para_heading') + (cfg.standard.doc.singledoc_headinglevel)));
    Document.ParaBgColor = -1;
    Document.ParaFontName = "Arial";
    Document.ParaFontSize = 14;
    Document.ParaBold = true;

    Document.SetCurrParaStyle(html_paratype(word_trans('para_heading') + (cfg.standard.doc.singledoc_headinglevel + 1)));
    Document.ParaBgColor = -1;
    Document.ParaSpaceBefore = 0.8;
    Document.ParaSpaceAfter = 0.6;
    Document.ParaFontSize = 14;
    Document.ParaBold = true;

    Document.SetCurrParaStyle(html_trans('para_image'));
    Document.ParaBgColor = -1;

    Document.SetCurrParaStyle(html_trans('para_image_caption'));
    Document.ParaBgColor = -1;
    Document.ParaFontName = "Arial";
    Document.ParaFontSize = 8;
    Document.ParaSpaceBefore = 0.0;
    Document.ParaSpaceAfter = 0.4;

    Document.SetCurrParaStyle(html_trans('para_title'));
    Document.ParaBgColor = -1;
    Document.ParaFontName = "Times New Roman";
    Document.ParaFontSize = 16;
    Document.ParaBold = true;
    Document.ParaSpaceBefore = 0.6;
    Document.ParaSpaceAfter = 0.8;

    Document.SetCurrParaStyle(html_trans('para_hinweis_text'));
    Document.ParaBgColor = -1;
    Document.ParaFontName = "Times New Roman";
    Document.ParaFontSize = 11;



    // TCODE
    Document.SetCurrCellStyle("standard_cell");
    Document.CellWidth = 360.0;

    Document.SetCurrCellStyle("small_cell");
    Document.CellWidth = 90.0;

    Document.SetCurrRowStyle("standard_row");
    Document.RowHeight = 12.0;
    Document.SetRowCellStyles("small_cell", "standard_cell");

    Document.SetCurrTableStyle("TCODE");
    Document.TableBorder = 0;
    Document.TablePreferredWidth = 500.0;
    Document.TableSpacing = 14.0;
    Document.TableRowStyle = "standard_row";

    // HINWEIS
    Document.SetCurrCellStyle("extra_image_cell");
    Document.CellWidth = 56.7;
    Document.CellLeftPad = 3.5;
    Document.CellRightPad = 3.5;
    Document.CellTopPad = 3.5;
    Document.CellBottomPad = 3.5;

    Document.SetCurrCellStyle("extra_text_cell");
    Document.CellWidth = 375.6;
    Document.CellBgColor = 0xe0e0e0;
    Document.CellLeftPad = 3.5;
    Document.CellRightPad = 3.5;
    Document.CellTopPad = 3.5;
    Document.CellBottomPad = 3.5;

    Document.SetCurrRowStyle("extra_row");
    Document.RowHeight = 34.0;
    Document.SetRowCellStyles("extra_image_cell", "extra_text_cell");

    Document.SetCurrTableStyle("extra");
    Document.TableLeftIndent = cfg.standard.doc.hinweis_left_indent;
    Document.TableBorder = 4;
    Document.TablePreferredWidth = 432.3;
    Document.TableSpacing = 0.0;
    Document.TableRowStyle = "extra_row";

    //Document.BeginList(word_trans('para_list'));
    //Document.EndList();

    Document.SetCurrCellStyle("quiz_mchoice_cell1");
    Document.CellWidth = 20.0;
    Document.CellLeftPad = 3.5;
    Document.CellRightPad = 3.5;
    Document.CellTopPad = 3.5;
    Document.CellBottomPad = 3.5;

    Document.SetCurrCellStyle("quiz_mchoice_cell2");
    Document.CellWidth = 360.0;
    Document.CellLeftPad = 3.5;
    Document.CellRightPad = 3.5;
    Document.CellTopPad = 3.5;
    Document.CellBottomPad = 3.5;
    
    Document.SetCurrCellStyle("quiz_match_cell1");
    Document.CellWidth = 100.0;
    Document.CellLeftPad = 3.5;
    Document.CellRightPad = 3.5;
    Document.CellTopPad = 3.5;
    Document.CellBottomPad = 3.5;    

    Document.SetCurrCellStyle("quiz_match_cell2");
    Document.CellWidth = 180.0;
    Document.CellLeftPad = 3.5;
    Document.CellRightPad = 3.5;
    Document.CellTopPad = 3.5;
    Document.CellBottomPad = 3.5;

    Document.SetCurrCellStyle("quiz_full_cell");
    Document.CellWidth = 380.0;
    Document.CellLeftPad = 3.5;
    Document.CellRightPad = 3.5;
    Document.CellTopPad = 3.5;
    Document.CellBottomPad = 3.5;

    Document.SetCurrRowStyle("quiz_mchoice_row");
    Document.RowHeight = 12.0;
    Document.SetRowCellStyles("quiz_mchoice_cell1", "quiz_mchoice_cell2");

    Document.SetCurrRowStyle("quiz_match_row");
    Document.RowHeight = 12.0;
    Document.SetRowCellStyles("quiz_match_cell1", "quiz_match_cell2", "quiz_match_cell1");

    Document.SetCurrRowStyle("quiz_scale_row");
    Document.RowHeight = 12.0;
    Document.SetRowCellStyles("quiz_full_cell");

    Document.SetCurrTableStyle("mchoice_quiz");
    Document.TableBorder = 4;
    Document.TableSpacing = 0.0;
    Document.TableRowStyle = "quiz_mchoice_row"
    
    Document.SetCurrTableStyle("match_quiz");
    Document.TableBorder = 4;
    Document.TableSpacing = 0.0;
    Document.TableRowStyle = "quiz_match_row"

    Document.SetCurrTableStyle("scale_quiz");
    Document.TableBorder = 4;
    Document.TableSpacing = 0.0;
    Document.TableRowStyle = "quiz_scale_row"
};
