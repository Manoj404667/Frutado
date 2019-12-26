#use(doc_util.js)
#use(lang.js)

var chart_layout_ = 3;

function DocEngine(style) {
    if (typeof(style) == 'string' && style == 'work') {
        this.more_details = true;
    } else {
        this.more_details = false;
    }

    this.chart_enabled = 1;
};

DocEngine.prototype.new_window_close = function(macro, ts) {};
DocEngine.prototype.end_unit = function(macro, ts) {};

DocEngine.prototype.form_on = function(macro, ts) {};
DocEngine.prototype.form_off = function(macro, ts) {};
DocEngine.prototype.branch_on = function(macro, ts) {};
DocEngine.prototype.branch_off = function(macro, ts) {};

DocEngine.prototype.mode_change = function(macro, ts) {};
DocEngine.prototype.mode_change_end = function(macro, ts) {};

DocEngine.prototype.doc_quizzes_head = function(macro) {
    this.add_text_paragraph(word_trans("para_heading") + "3", macro.GetParam("title"));

    var question = "question";
    if (DocEngine.prototype.doc_quizzes_head.arguments.length > 1) {
        question = DocEngine.prototype.doc_quizzes_head.arguments[1];
    }

    if (macro.HasParam(question)) {
        if (remove_html(macro.GetParam(question)) != "" || macro.GetParam(question).toLowerCase().search(/<img/) != -1) {
            this.add_html_paragraph(word_trans("standard"), macro.GetParam(question));
        }
    }

    this.doc_quizzes_media(macro);
}
DocEngine.prototype.doc_quizzes_media = function(macro) {
    var media = "qm_file";
    if (DocEngine.prototype.doc_quizzes_media.arguments.length > 1) {
        media = DocEngine.prototype.doc_quizzes_media.arguments[1];
    }

    if (macro.HasParam(media)) {
        var file = macro.GetParam(media);
        if (file != "") {
            switch (file.substr(file.length - 3)) {
                case "jpg":
                case "bmp":
                case "gif":
                case "png":
                    this.add_image_paragraph(word_trans("standard"), Project.DocPath + "\\" + macro.GetParam(media));
                    break;
            }
        }
    }
}

DocEngine.prototype.mchoice = function(macro, ts) {
    var max_answers = 6;
    var a;
    if (cfg.standard.doc.print_solution) {
        a = doc_quizzes_check(macro, max_answers, "answer_");
    } else {
        a = doc_quizzes_check(macro, max_answers, "answer_", macro.GetParam("shuffle_solutions"));
    }
    if (a.val.length == 0) return;

    this.doc_quizzes_head(macro);

    Document.BeginTable("mchoice_quiz");
    for (var i = 0; i < a.val.length; i++) {
        Document.BeginRow();
        Document.BeginCell();
        var t = macro.GetParam("answer_" + a.idx[i] + "_correct");
        if (cfg.standard.doc.print_solution && t) {
            this.add_text_paragraph(word_trans("standard"), "X");
        } else {
            this.add_text_paragraph(word_trans("standard"), "");
        }
        Document.EndCell();
        Document.BeginCell();
        Document.CellBgColor = 0xe0e0e0;
        this.add_html_paragraph(word_trans("standard"), a.val[i]);
        Document.EndCell();
        Document.EndRow();
    }
    Document.EndTable();
};

DocEngine.prototype.sqmaquiz = function(macro, ts) {
    var max_answers = 8;
    var a = doc_quizzes_check(macro, max_answers, "answer_");
    if (a.val.length == 0) return;

    this.doc_quizzes_head(macro);

    Document.BeginTable("mchoice_quiz");
    for (var i = 0; i < a.val.length; i++) {
        Document.BeginRow();
        Document.BeginCell();
        Document.CellBgColor = 0xe0e0e0;
        this.add_text_paragraph(word_trans("standard"), (i + 1) + ".");
        Document.EndCell();
        Document.BeginCell();
        if (cfg.standard.doc.print_solution) {
            this.add_text_paragraph(word_trans("standard"), a.val[i]);
        } else {
            this.add_text_paragraph(word_trans("standard"), "");
        }
        Document.EndCell();
        Document.EndRow();
    }
    Document.EndTable();
};

DocEngine.prototype.fibquiz = function(macro, ts) {
    var max_answers = 8;
    var marker = "__";
    var s = "__________________", q = " ";

    switch (macro.GetParam("quiz_type")) {
        case "qt_text":
        case "qt_cs_text":
            if (cfg.standard.doc.print_solution) {
                var h = macro.GetParam("fibtext").split("___");
                var a = doc_quizzes_check(macro, max_answers, "answer_");
                for (var i = 0, q = ""; i < a.val.length; i++) {
                    q += h[i] + marker + a.val[i] + marker;
                }
                q += h[h.length - 1];
            } else {
                q = macro.GetParam("fibtext").split("___").join(s);
            }
            break;
        case "qt_drop_down":
        case "qt_drag_drop":
            if (macro.GetParam("one_for_all") == true) {
                if (cfg.standard.doc.print_solution) {
                    var h = macro.GetParam("answer_1").split(",");
                    var h1 = [];
                    var h2 = h.join(", ").replace(/\*/g, "");
                    for (var i = 0, j = 0; i < h.length; i++) {
                        if (h[i].search(/^\*/) != -1) {
                            h1[j++] = h[i].substr(1);
                        }
                    }
                    h = macro.GetParam("fibtext").split("___");
                    for (var i = 0, q = ""; i < h1.length; i++) {
                        q += h[i] + marker + h1[i] + marker + " (" + h2 + ")";
                    }
                    q += h[h.length - 1];
                } else {
                    var h = macro.GetParam("answer_1").split(",").join(", ");
                    h = h.replace(/\*/g, "");
                    s += " (" + h + ")";
                    q = macro.GetParam("fibtext").split("___").join(s);
                }
            } else {
                var a = doc_quizzes_check(macro, max_answers, "answer_");
                q = macro.GetParam("fibtext").split("___");
                if (a.val.length + 1 != q.length) return;
                if (cfg.standard.doc.print_solution) {
                    var h = q;
                    var h1 = [];
                    for (var i = 0; i < a.val.length; i++) {
                        var h2 = a.val[i].split(",");
                        var h3 = [];
                        for (var j = 0; j < h2.length; j++) {
                            if (h2[j].search(/^\*/) != -1) {
                                h3.push(h2[j].substr(1));
                            }
                        }
                        h1.push(h3.join(", "));
                    }
                    for (var i = 0, q = ""; i < h1.length; i++) {
                        q += h[i] + marker + h1[i] + marker + " (" + a.val[i].split(",").join(", ").replace(/\*/g, "") + ")";
                    }
                } else {
                    for (var i = 0, j = 0; i < a.val.length; i++) {
                        var h = a.val[i].toString().split(",").join(", ");
                        h = h.replace(/\*/g, "");
                        q[j++] += s + " (" + h + ")";
                    }
                    q = q.join("");
                }
            }
            break;
    }
    this.add_text_paragraph(word_trans("para_heading") + "3", macro.GetParam("title"));
    this.doc_quizzes_media(macro);
    this.add_text_paragraph(word_trans("standard"), remove_html(remove_outer_p_tags(macro.GetParam("question"))));
    this.add_html_paragraph(word_trans("standard"), q);
};

DocEngine.prototype.matchquiz = function(macro, ts) {
    var max_answers = 8;
    var a;
    if (!cfg.standard.doc.print_solution) {
        a = doc_quizzes_check(macro, max_answers, "answer_", true);
    } else {
        a = doc_quizzes_check(macro, max_answers, "answer_");
    }
    var q = doc_quizzes_check(macro, max_answers, "question_");
    if (a.val.length == 0 || q.val.length == 0 || a.val.length != q.val.length) return;

    this.doc_quizzes_head(macro, "matchquestion");

    Document.BeginTable("match_quiz");
    for (var i = 0; i < q.val.length; i++) {
        Document.BeginRow();
        Document.BeginCell();
        Document.CellBgColor = 0xe0e0e0;
        this.add_html_paragraph(word_trans("standard"), q.val[i]);
        Document.EndCell();
        Document.BeginCell();
        this.add_text_paragraph(word_trans("standard"), "");
        Document.EndCell();
        Document.BeginCell();
        Document.CellBgColor = 0xe0e0e0;
        this.add_html_paragraph(word_trans("standard"), a.val[i]);
        Document.EndCell();
        Document.EndRow();
    }
    Document.EndTable();
};

DocEngine.prototype.connquiz = function(macro, ts) {
    var max_answers = 8;
    var a;
    if (!cfg.standard.doc.print_solution) {
        a = doc_quizzes_check(macro, max_answers, "answer_", true);
    } else {
        a = doc_quizzes_check(macro, max_answers, "answer_");
    }
    var q = doc_quizzes_check(macro, max_answers, "question_");
    if (a.val.length == 0 || q.val.length == 0 || a.val.length != q.val.length) return;

    this.doc_quizzes_head(macro, "connquestion");

    Document.BeginTable("match_quiz");
    for (var i = 0; i < q.val.length; i++) {
        Document.BeginRow();
        Document.BeginCell();
        Document.CellBgColor = 0xe0e0e0;
        this.add_html_paragraph(word_trans("standard"), q.val[i]);
        Document.EndCell();
        Document.BeginCell();
        this.add_text_paragraph(word_trans("standard"), "");
        Document.EndCell();
        Document.BeginCell();
        Document.CellBgColor = 0xe0e0e0;
        this.add_html_paragraph(word_trans("standard"), a.val[i]);
        Document.EndCell();
        Document.EndRow();
    }
    Document.EndTable();
};

DocEngine.prototype.mixquiz = function(macro, ts) {
    var max_answers = 8;
    var a = doc_quizzes_check(macro, max_answers, "answer_");
    if (a.val.length == 0) return;

    var b = a.val.copy();
    do {
        a.val.mix();
    } while (a.val.join("") == b.join(""));

    this.doc_quizzes_head(macro);

    this.add_text_paragraph(word_trans("standard"), a.val.join(", "));
    Document.BeginTable("mchoice_quiz");
    for (var i = 1; i <= a.val.length; i++) {
        Document.BeginRow();
        Document.BeginCell();
        Document.CellBgColor = 0xe0e0e0;
        this.add_text_paragraph(word_trans("standard"), i + ".");
        Document.EndCell();
        Document.BeginCell();
        if (cfg.standard.doc.print_solution) {
            this.add_text_paragraph(word_trans("standard"), b[i - 1]);
        } else {
            this.add_text_paragraph(word_trans("standard"), "");
        }
        Document.EndCell();
        Document.EndRow();
    }
    Document.EndTable();
};

DocEngine.prototype.scalequiz = function(macro, ts) {
    this.doc_quizzes_head(macro);

    Document.BeginTable("scale_quiz");
    Document.BeginRow();
    Document.BeginCell();
    if (cfg.standard.doc.print_solution) {
        this.add_text_paragraph(word_trans("standard"), macro.GetParam("answer"));
    } else {
        this.add_text_paragraph(word_trans("standard"), "");
    }
    Document.EndCell();
    Document.EndRow();
    Document.EndTable();
};

DocEngine.prototype.gridquiz = function(macro, ts) {
    var max_answers = 8;
    var q = doc_quizzes_check(macro, max_answers, "question_");
    var p = macro.GetParam("grid_list").split(",");
    if (q.val.length == 0 || p.length == 0) return;

    if (!cfg.standard.doc.print_solution && macro.GetParam("shuffle_solutions")) {
        var b = p.copy();
        do {
            p.mix();
        } while (p.join("") == b.join(""));
    }

    var w_all = 380;
    var w_1 = 150;
    var w_2 = Math.floor((w_all - w_1) / p.length);

    this.doc_quizzes_head(macro);

    Document.SetCurrCellStyle("quiz_grid_cell1");
    Document.CellWidth = w_1;
    Document.CellPadding(3.5, 1.5, 3.5, 1.5);
    Document.SetCurrCellStyle("quiz_grid_cell2");
    Document.CellWidth = w_2;
    Document.CellPadding(3.5, 1.5, 3.5, 1.5);

    var row = "Document.SetRowCellStyles('quiz_grid_cell1'";
    for (var i = 0; i < p.length; i++) {
        row += ", 'quiz_grid_cell2'";
    }
    row += ");";

    Document.SetCurrRowStyle("quiz_grid_row");
    Document.RowHeight = 12.0;
    eval(row);
    Document.SetCurrTableStyle("grid_quiz");
    Document.TableBorder = 0.5;
    Document.TableSpacing = 0.0;
    Document.TableRowStyle = "quiz_grid_row"

    Document.BeginTable("grid_quiz");
    Document.BeginRow();
    Document.BeginCell();
    Document.CellBgColor = 0xe0e0e0;
    this.add_text_paragraph(word_trans("standard"), "");
    Document.EndCell();
    for (var i = 0; i < p.length; i++) {
        Document.BeginCell();
        Document.CellBgColor = 0xe0e0e0;
        this.add_text_paragraph(word_trans("standard"), p[i]);
        Document.EndCell();
    }
    Document.EndRow();
    for (var i = 0; i < q.val.length; i++) {
        Document.BeginRow();
        Document.BeginCell();
        Document.CellBgColor = 0xe0e0e0;
        this.add_text_paragraph(word_trans("standard"), q.val[i]);
        Document.EndCell();
        for (var j = 0; j < p.length; j++) {
            Document.BeginCell();
            if (cfg.standard.doc.print_solution) {
                var t = macro.GetParam("answer_" + (i + 1));
                if (t - 1 == j) {
                    this.add_html_paragraph(word_trans("standard"), "X");
                } else {
                    this.add_html_paragraph(word_trans("standard"), "");
                }
            } else {
                this.add_html_paragraph(word_trans("standard"), "");
            }
            Document.EndCell();
        }
        Document.EndRow();
    }
    Document.EndTable();
};

DocEngine.prototype.hotspotquiz = function(macro, ts) {
    this.doc_quizzes_head(macro);
    
    var hs_file = macro.GetParam("hs_image");
    var border = 3;
    var rect = macro.GetParam("selection_rect");

    if (hs_file.length != 0 &&
        FileExists(Project.DocPath + hs_file) &&
        rect.width > 0 && rect.height > 0)
    {
        var image = CreateImage(Project.DocPath + hs_file);

        if (cfg.standard.doc.print_solution) {
            image.BeginPaint();
            image.RoundedRect(rect);
            image.EndPaint();
        }

        var tmp_file = Project.DocPath + GetUniqueFilename(Project.DocPath, "TEMP_" + this.sc_counter++, ".png");
        this.temp_file_array.push(tmp_file);
        image.Save(tmp_file);
        this.add_image_paragraph(word_trans("standard"), tmp_file);
    }
}

DocEngine.prototype.quiz_eval = function(macro, ts) {
    Document.SetCurrCellStyle("quiz_eval_top");
    Document.CellWidth = 127;
    Document.CellPadding(2, 3, 2, 3);
    Document.SetCurrRowStyle("quiz_eval_top");
    Document.RowHeight = 35;
    Document.SetRowCellStyles("quiz_eval_top", "quiz_eval_top", "quiz_eval_top");
    Document.SetCurrTableStyle("quiz_eval_top");
    Document.TableRowStyle = "quiz_eval_top";
    Document.TableBorder = 1;

    this.add_text_paragraph(word_trans("para_heading") + "3", prj_trans('docQuizzesTitle'));
    this.add_text_paragraph(word_trans("standard"), "");

    Document.BeginTable("quiz_eval_top");
    Document.BeginRow();
    Document.BeginCell();
        Document.CellBgColor = 0xe0e0e0;
        this.add_text_paragraph(word_trans("standard"), prj_trans('docQuizzesScoreAchieved'));
    Document.EndCell();
    Document.BeginCell();
        Document.CellBgColor = 0xe0e0e0;
        this.add_text_paragraph(word_trans("standard"), prj_trans('docQuizzesScorePassed'));
    Document.EndCell();
    Document.BeginCell();
        Document.CellBgColor = 0xe0e0e0;
        this.add_text_paragraph(word_trans("standard"), prj_trans('docQuizzesScoreMax'));
    Document.EndCell();
    Document.EndRow();
    Document.BeginRow();
    Document.RowHeight = 90;
    Document.RowMergeCells();
    Document.BeginCell();
        this.add_text_paragraph(word_trans("standard"), prj_trans('docQuizzesInformation'));
    Document.EndCell();
    Document.EndRow();
    Document.EndTable();
}

DocEngine.prototype.puzzlequiz = function(macro, ts) {};
DocEngine.prototype.quiz_shuffle_on = function(macro, ts) {};
DocEngine.prototype.quiz_shuffle_off = function(macro, ts) {};

DocEngine.prototype.click = function(macro, ts) {
    this.add_bubble_text(macro, this.current_index);
    this.draw_index(macro);
};

DocEngine.prototype.start_unit = function(macro, ts) {
    log('-> start_unit');
    if (this.more_details) {
        this.add_text_paragraph(word_trans('para_heading') + (cfg.standard.doc.singledoc_headinglevel + 2),
                                Translate("task_text"));
        this.add_html_paragraph(word_trans('standard'), macro.GetParam("task_text"));
    }
};

DocEngine.prototype.click_SAP = DocEngine.prototype.click;
DocEngine.prototype.quick_click = DocEngine.prototype.click;

DocEngine.prototype.create_macro_image = function(macro) {
    var screenshot_file = macro.GetParam("screenshot_file");
    var border = macro.GetParam("screenshot_border");
    var rect = macro.GetParam("screenshot_rect");

    var sc = new Object;
    sc.typename = "Screenshot";

    if (screenshot_file.length != 0 &&
        FileExists(Project.DocPath + screenshot_file) &&
        rect.width > 0 && rect.height > 0)
    {

        sc.image_rect = rect;
        sc.border = border;

        sc.image = CreateCanvas(rect.width + (2 * border), rect.height + (2 * border), cfg.standard.doc.screenshot_border_color);

        var overlay_img = CreateImage(Project.DocPath + screenshot_file, rect);
        overlay_img.Crop(rect);

        sc.image.BeginPaint();
        sc.image.PutImage(overlay_img, border, border);
        sc.image.EndPaint();

        sc.temp_file = Project.DocPath + GetUniqueFilename(Project.DocPath, "TEMP_" + this.sc_counter++, ".gif");
        this.temp_file_array.push(sc.temp_file);

        sc.caption = "";
        if (cfg.standard.doc.image_caption_from_new_page) {
            if (macro.HasParam("caption")) {
                sc.caption = macro.GetParam("caption");
            } else if (macro.HasParam("new_step")) {
                sc.caption = macro.GetParam("new_step");
            }
        }


        sc.scale = 100;
        if (macro.HasParam("imagesize")) {
            sc.scale = macro.GetParam("imagesize") - 0;
        }
        return sc;
    } else {
        return null;
    }
};

DocEngine.prototype.configure_links = function(text) {
    text = text.replace(/<A/g, "<a");
    text = text.replace(/<\/A>/g, "</a>");

    var linkpos = text.indexOf("<a");
    while (linkpos != -1) {
        var linkend = text.indexOf("</a>", linkpos);
        var hrefpos_s = text.indexOf("href=", linkpos) + 6;
        var sign = text.substr(hrefpos_s - 1, 1);
        var hrefpos_e = text.indexOf(sign, hrefpos_s);
        
        var oc_pos = text.indexOf("onclick", linkpos);
        if (oc_pos != -1 && oc_pos < linkend) {
            var tpos = text.indexOf(">", linkpos);
            text = text.substring(0, linkpos) + text.substring(tpos + 1, linkend) + text.substring(linkend + 4);
        } else {
            var href = text.substring(hrefpos_s, hrefpos_e);
        
            if (href.search(/\?config=/) != -1 && href.search(/_cfg.js/) != -1) {
                href = href.replace(/frameset.html\?config=/, "/");
                href = href.replace(/\/dmf/, "");
                href = href.replace(/_cfg.js/, ".html");
            }

            text = text.substring(0, hrefpos_s) + href + text.substring(hrefpos_e);
        }

        linkpos = text.indexOf("<a", linkpos + 1);
    }

    return text;
}

DocEngine.prototype.add_html_paragraph = function(paratype, htmltext) {
    Document.BeginParagraph(paratype);
    htmltext = this.configure_links(htmltext);
    if (htmltext.length > 0) Document.AddHtmlText(htmltext);
    Document.EndParagraph();
}

DocEngine.prototype.add_text_paragraph = function(paratype, text) {
    Document.BeginParagraph(paratype);

    for (var i = 2; i < DocEngine.prototype.add_text_paragraph.arguments.length; i++) {
        Document.ChangeCharStyle(DocEngine.prototype.add_text_paragraph.arguments[i], "on");
    }

    if (text.length > 0) Document.AddText(text);
    Document.EndParagraph();
}

DocEngine.prototype.add_image_paragraph = function(paratype, imagepath, width, height, caption, scale_w, scale_h) {
    if (typeof width == 'undefined') width = -1;
    if (typeof height == 'undefined') height = -1;
    if (typeof caption == 'undefined') caption = "";
    if (typeof scale_w == 'undefined') scale_w = -1;
    if (typeof scale_h == 'undefined') scale_h = -1;

    Document.BeginParagraph(paratype);
    if (imagepath.length > 0) Document.AddImage(imagepath, width, height, caption, scale_w, scale_h);
    Document.EndParagraph();
}

DocEngine.prototype.transaction_info = function(macro, ts) {
     var sap_pfad = macro.GetParam("sap_path");
     var tcode = macro.GetParam("tcode");

     if (sap_pfad.length != 0) {
         var i = -1;

         while ((i = sap_pfad.indexOf('->')) != -1) {
             sap_pfad = sap_pfad.substring(0, i) + "&rarr;" + sap_pfad.substring(i + 2, sap_pfad.length);
         }
     }

     // if (sap_pfad.length != 0 || tcode.length != 0) {

         Document.BeginParagraph(word_trans('para_bubble_text'));
         //Document.BeginTable("standard");
         Document.AddHtmlText("&nbsp;");
         Document.BeginTable("TCODE");

         if (sap_pfad.length != 0) {

             Document.BeginRow();
             Document.BeginCell();
             this.add_html_paragraph(word_trans('para_tcode'),
                                     prj_trans('docSAPMenuPath'));
             Document.EndCell();

             Document.BeginCell();
             this.add_html_paragraph(word_trans('para_bubble_text'), sap_pfad);
             Document.EndCell();
             Document.EndRow();
         }

         if (tcode.length != 0) {

             Document.BeginRow();
             Document.BeginCell();
             this.add_html_paragraph(word_trans('para_tcode'),
                                     prj_trans('docSAPTransaction'));
             Document.EndCell();

             Document.BeginCell();
             this.add_html_paragraph(word_trans('para_tcode'), tcode);
             Document.EndCell();
             Document.EndRow();
         }

         Document.EndTable();
         Document.AddHtmlText("&nbsp;");
         Document.EndParagraph();
     // }
};


DocEngine.prototype.hinweis_path = function(macro) {
    var hinweis_filename;
    if (macro.HasParam("type")) {
        var hinweis_type = macro.GetParam("type");
        if (hinweis_type != "" && typeof(hinweis_image[hinweis_type]) == 'string') {
            hinweis_filename = hinweis_image[hinweis_type];
        } else {
            hinweis_filename = hinweis_type + "_word.bmp";
        }
    } else {
        hinweis_filename = "hinweis_word.bmp";
    }

    return ResourceDir + hinweis_filename;
}


DocEngine.prototype.hinweis = function(macro, ts) {
    var text = macro.GetParam("text");

    var icon_path = this.hinweis_path(macro);

    this.draw_hinweis_table(text, icon_path);

};

DocEngine.prototype.draw_hinweis_table = function(text, icon_path) {

    Document.BeginParagraph(word_trans('para_bubble_text'));
    Document.AddHtmlText("&nbsp;");
    Document.BeginTable("extra");
        Document.BeginRow();
            Document.BeginCell();
                this.add_image_paragraph(word_trans('para_hinweis_icon'), icon_path);
            Document.EndCell();
            Document.BeginCell();
                this.add_html_paragraph(word_trans('para_hinweis_text'), text);
            Document.EndCell();
        Document.EndRow();
    Document.EndTable();
    //Document.AddHtmlText("&nbsp;");
    Document.EndParagraph();
}

DocEngine.prototype.status_info = function(macro, ts) {
    var status_txt = macro.GetParam("status_text");
    var status_file = macro.GetParam("screenshot_file");

    if (status_file.length != 0 && FileExists(Project.DocPath + status_file)) {
        Document.BeginParagraph(word_trans('para_bubble_text'));
        Document.AddText(status_txt);
        Document.AddImage(Project.DocPath + status_file);
        Document.EndParagraph();
    }
};

DocEngine.prototype.scroll_hor = function(macro, ts) {
    this.add_bubble_text(macro, this.current_index);
    this.draw_index(macro);
    this.set_cur_sc(this.create_macro_image(macro));
    if (this.cur_sc) {
        this.add_screenshot(this.cur_sc);
    }
};
DocEngine.prototype.scroll_vert = DocEngine.prototype.scroll_hor;


DocEngine.prototype.screenshot_part = function(macro, ts) {
    var sc = this.create_macro_image(macro);
    if (sc) {
        this.add_screenshot(sc);
        if (macro.GetParam("show_actions")) {
            this.set_cur_sc(sc);
        } else {
            this.save_sc(sc);
        }
    }
};

DocEngine.prototype.beschreibung = function(macro, ts) {
    var text = macro.GetParam("text");

    this.add_html_paragraph(word_trans('para_beschreibung'), text);
};

DocEngine.prototype.new_page = function(macro, ts) {
    log("new_page");
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
    if (this.cur_sc) this.add_screenshot(this.cur_sc);
};

DocEngine.prototype.new_window = DocEngine.prototype.new_page;

DocEngine.prototype.doc_caption = function(macro, ts) {
    var caption = macro.GetParam("caption");
    var type = macro.GetParam("type");

    if (caption != "") {
        if (type != "") {
            this.add_text_paragraph(macro.GetParam("type"), caption);
        } else {
            this.add_text_paragraph(word_trans('para_heading') + cfg.standard.doc.singledoc_headinglevel, caption);
        }
    }
};

DocEngine.prototype.page_break = function(macro, ts) {
    log("Page Break");
    Document.PageBreak();
};

DocEngine.prototype.doc_include = function(macro, ts) {
    log("include " + macro.GetParam("filename"));
    Document.AddInclude(macro.GetParam("filename"));
};

DocEngine.prototype.kurs = function(macro, ts) {
    var title = macro.GetParam("titel");
    var bezeichnung = macro.GetParam("bezeichnung");

    if (title != "") {
        this.add_text_paragraph(word_trans('para_title'), title);
    }

    if (bezeichnung != "") {
        this.add_text_paragraph(word_trans('para_title'), bezeichnung);
    }

    if (Project.Description != "") {
        this.add_html_paragraph(word_trans('para_beschreibung'), Project.Description);
    }
};

DocEngine.prototype.input_text = function(macro, ts) {
    this.add_bubble_text(macro, this.current_index);
    this.overlay_screenshot(macro);
    this.draw_index(macro);
};
DocEngine.prototype.select_single = DocEngine.prototype.input_text;
DocEngine.prototype.input_radio = DocEngine.prototype.input_text;


DocEngine.prototype.explanation = function(macro, ts) {
    this.add_bubble_text(macro, this.current_index);
    this.draw_index(macro);
};

DocEngine.prototype.free_marker = function(macro, ts) {
    if (this.add_bubble_text(macro, this.current_index)) {
        this.draw_index(macro);
    } else {
        this.draw_frame(macro);
    }
};

DocEngine.prototype.arrow = function(macro, ts) {
    if (this.cur_sc == null) return;

    var rect = macro.GetParam("screenshot_rect");

    rect.MoveBy(-this.cur_sc.image_rect.left, -this.cur_sc.image_rect.top);
    rect.MoveBy(this.cur_sc.border, this.cur_sc.border);

    if (this.cur_sc.image != 0) {
        this.cur_sc.image.DrawArrow(rect, macro.GetParam("orientation"), cfg.standard.doc.marker_color, cfg.standard.doc.marker_border, cfg.standard.doc.arrow_width, cfg.standard.doc.arrow_len);
    }
};

DocEngine.prototype.explanation_long = function(macro, ts) {
    if (macro.HasParam("type") && macro.GetParam("type") != "none") {
        this.draw_hinweis_table(this.get_macro_text(macro), this.hinweis_path(macro));
    } else {
        if (macro.HasParam("show_hl_d") && macro.GetParam("show_hl_d")) {
            this.add_bubble_text(macro, this.current_index);
            this.draw_index(macro);
        } else {
            this.add_bubble_text(macro, -1);
        }
    }
};

DocEngine.prototype.key_press = function(macro, ts) {
    this.add_bubble_text(macro, -1);
};


DocEngine.prototype.handle_macro = function(macro, ts) {
    log("handle " + macro.Template());
    if (macro.HasParam("doc_enable")) {
        var show = macro.GetParam("doc_enable");
        if (!show) return;
    }

    var fn = this[macro.Template()];

    if (this.more_details) {
        if (macro.HasParam("macro_comment")) {
            if (macro.GetParam("macro_comment").length) {
                this.add_text_paragraph(word_trans('standard'),
                                        Translate("macro_comment") + ": " + macro.GetParam("macro_comment"));
            }
        } else if (macro.HasParam("comment")) {
            if (macro.GetParam("comment").length) {
                this.add_text_paragraph(word_trans('standard'),
                                        Translate("comment") + ": " + macro.GetParam("comment"));
            }
        }
    }

    if (typeof(fn) == 'function') {
        this[macro.Template()](macro, ts);
    } else {
        //alert("No handler for template " + macro.Template());
        return false;
    }
};

DocEngine.prototype.overlay_screenshot = function(macro) {
    if (this.cur_sc == null) return;

    var filename = macro.GetParam("screenshot_file");

    if (filename.length != 0  && FileExists(Project.DocPath + filename)) {
        var pos;
        if (macro.ParamSpecified("overlay_pos")) {
            pos = macro.GetParam("overlay_pos");
        } else {
            pos = macro.GetParam("screenshot_rect");
        }
        pos.x += this.cur_sc.border - this.cur_sc.image_rect.left;
        pos.y += this.cur_sc.border - this.cur_sc.image_rect.top;

        var overlay_img = CreateImage(Project.DocPath + filename);
        this.cur_sc.image.PutImage(overlay_img, pos.x, pos.y);
    }
};

DocEngine.prototype.get_macro_text = function(macro) {
    var expl_d = (macro.HasParam("explanation_d") ? macro.GetParamExpanded("explanation_d") :
                  macro.HasParam("text") ? macro.GetParamExpanded("text") : "");

    var expl_p;
    if (!macro.HasParam("all_like_demo") || !macro.GetParam("all_like_demo")) {
        expl_p = (macro.HasParam("explanation_p") ? macro.GetParamExpanded("explanation_p") : "");
    } else {
        expl_p = (macro.HasParam("explanation_d") ? macro.GetParamExpanded("explanation_d") : "");
    }

    if (!macro.HasParam("explanation_p")) {
        expl_p = expl_d;
    }

    var text = '';

    if (cfg.standard.doc.use_demo_bubbles) {
        text = text + expl_d;
    }

    if (cfg.standard.doc.use_practice_bubbles) {
        if (text.length > 0) {
            text = text + '<BR>\n' + expl_p;
        } else {
            text = expl_p;
        }
    }

    var replace_p = /^(<P>|<p>)/;
    var replace_p_end = /(<\/P>|<\/p>) *$/;
    var tx = text.replace(replace_p, "");
    tx = tx.replace(replace_p_end, "");
    text = tx;

    return text;
}

DocEngine.prototype.add_bubble_text = function(macro, index) {
    if (!cfg.standard.doc.show_bubble_text) return;

    var text = this.get_macro_text(macro);

    var doc_index = ((index != -1 && cfg.standard.doc.rects_with_index) ? ("(" + index + ")&nbsp;") : "");

    if (text.length == 0) return false;

    // index -1: Erklärung lang
    if (index == -1) Document.LineBreak();

    this.add_html_paragraph(word_trans('para_bubble_text'), doc_index + text);

    if (index == -1) Document.LineBreak();

    return true;
};

DocEngine.prototype.draw_index = function(macro) {
    if (!cfg.standard.doc.show_bubble_text) return;
    if (this.cur_sc == null) return;

    var rect = macro.GetParam("screenshot_rect");

    rect.MoveBy(-this.cur_sc.image_rect.left, -this.cur_sc.image_rect.top);
    rect.MoveBy(this.cur_sc.border, this.cur_sc.border);

    if (this.cur_sc.image != 0) {
        if (cfg.standard.doc.rects_with_index && macro.HasParam("orientation")) {
            log("Frame: " + rect.left + ", " + rect.top + " " + rect.width + " x " + rect.height);
            this.cur_sc.image.IndexedFrame(rect,
                                           cfg.standard.doc.marker_border,
                                           cfg.standard.doc.marker_color,
                                           cfg.standard.doc.marker_offset,
                                           this.current_index++,
                                           macro.GetParam("orientation"),
                                           true,
                                           cfg.standard.doc.marker_text_color,
                                           cfg.standard.doc.marker_bg_color);
        } else {
            this.cur_sc.image.RoundedRect(rect,
                                          cfg.standard.doc.marker_border,
                                          cfg.standard.doc.marker_color,
                                          cfg.standard.doc.marker_offset,
                                          0);
        }
    }
};

DocEngine.prototype.set_cur_sc = function(sc) {
    if (this.cur_sc) {
        this.cur_sc.image.EndPaint();
        this.save_sc(this.cur_sc);
        this.cur_sc.image.Destroy();
    }

    this.cur_sc = sc;

    if (this.cur_sc) {
        log("New Screen: ", sc.temp_file);
        this.cur_sc.image.BeginPaint();
    }

    if (!cfg.standard.doc.global_index_counter) this.current_index = 1;
};

DocEngine.prototype.save_sc = function(sc) {
    sc.image.Save(sc.temp_file);
};

DocEngine.prototype.add_screenshot = function(sc) {
    if (sc.scale <= 0) sc.scale = 100;
    log("Scale of " + sc.temp_file + ":" + sc.scale);

    var w_scale = (sc.image.width * sc.scale * cfg.standard.doc.image_scale) / 10000;
    var h_scale = (sc.image.height * sc.scale * cfg.standard.doc.image_scale) / 10000;
    log("Scale " + w_scale + "/" + h_scale);

    Document.BeginParagraph(word_trans('para_image'));
    Document.AddImage(sc.temp_file, w_scale, h_scale, "");
    Document.EndParagraph();

    if (cfg.standard.doc.images_with_caption) {
        if (sc.caption != "") {
            this.add_text_paragraph(word_trans('para_image_caption'), sc.caption);
        } else {
            this.add_text_paragraph(word_trans('para_image_caption'), trans('imgCaption') + " " + this.img_caption_index++);
        }
    }
};


DocEngine.prototype.reset = function() {
    log("reset");
    this.cur_sc = null;
    this.sc_counter = 0;

    this.current_index = 1;
    this.temp_file_array = new Array();

    this.img_caption_index = 1;

    Document.Clear();

    this.set_cur_sc(null);
};

DocEngine.prototype.draw_frame = function(macro) {
    if (!cfg.standard.doc.show_bubble_text) return;
    if (this.cur_sc == null) return;

    var rect = macro.GetParam("screenshot_rect");

    rect.MoveBy(-this.cur_sc.image_rect.left, -this.cur_sc.image_rect.top);
    rect.MoveBy(this.cur_sc.border, this.cur_sc.border);

    if (this.cur_sc.image != 0) {
        this.cur_sc.image.RoundedRect(rect,
                                      cfg.standard.doc.marker_border,
                                      cfg.standard.doc.marker_color,
                                      cfg.standard.doc.marker_offset,
                                      0);
    }
};

DocEngine.prototype.define_styles = function() {
log("define_styles");

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
    Document.CellWidth = 50;
    Document.CellPadding(3.5, 3.5, 3.5, 3.5);

    Document.SetCurrCellStyle("extra_text_cell");
    Document.CellWidth = 400;
    Document.CellBgColor = 0xe0e0e0;
    Document.CellPadding(3.5, 3.5, 3.5, 3.5);

    Document.SetCurrRowStyle("extra_row");
    Document.RowHeight = 34.0;
    Document.SetRowCellStyles("extra_image_cell", "extra_text_cell");

    Document.SetCurrTableStyle("extra");
    Document.TableLeftIndent = cfg.standard.doc.hinweis_left_indent;
    Document.TableBorder = 0.5;
    Document.TablePreferredWidth = 432.3;
    Document.TableSpacing = 0.0;
    Document.TableRowStyle = "extra_row";

    //Document.BeginList(word_trans('para_list'));
    //Document.EndList();

    // QUIZ
    Document.SetCurrCellStyle("quiz_mchoice_cell1");
    Document.CellWidth = 20.0;
    Document.CellPadding(3.5, 3.5, 3.5, 3.5);

    Document.SetCurrCellStyle("quiz_mchoice_cell2");
    Document.CellWidth = 360.0;
    Document.CellPadding(3.5, 3.5, 3.5, 3.5);

    Document.SetCurrCellStyle("quiz_match_cell1");
    Document.CellWidth = 100.0;
    Document.CellPadding(3.5, 3.5, 3.5, 3.5);

    Document.SetCurrCellStyle("quiz_match_cell2");
    Document.CellWidth = 180.0;
    Document.CellPadding(3.5, 3.5, 3.5, 3.5);

    Document.SetCurrCellStyle("quiz_full_cell");
    Document.CellWidth = 380.0;
    Document.CellPadding(3.5, 3.5, 3.5, 3.5);

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
    Document.TableBorder = 0.5;
    Document.TableSpacing = 0.0;
    Document.TableRowStyle = "quiz_mchoice_row";

    Document.SetCurrTableStyle("match_quiz");
    Document.TableBorder = 0.5;
    Document.TableSpacing = 0.0;
    Document.TableRowStyle = "quiz_match_row";

    Document.SetCurrTableStyle("scale_quiz");
    Document.TableBorder = 0.5;
    Document.TableSpacing = 0.0;
    Document.TableRowStyle = "quiz_scale_row";
};

DocEngine.prototype.handle_tourstop = function(ts) {
    log("DocEngine::handle_tourstop");

    if (this.more_details) {
        this.add_text_paragraph(word_trans('para_heading') + (cfg.standard.doc.singledoc_headinglevel + 1),
                                Translate("IDS_TOURSTOP") + " " + ts.Index + ": " + ts.Caption);

    } else if (cfg.standard.doc.heading_from_tourstop) {
        var text = ts.Caption;

        if (text != "") {
            var parastyle = word_trans('para_heading') + (cfg.standard.doc.singledoc_headinglevel + 1);
            this.add_text_paragraph(parastyle, text);
        }
    }
};

DocEngine.prototype.finish = function() {
    this.set_cur_sc(null);
};

DocEngine.prototype.clean_up = function() {
    for (var i = 0; i < this.temp_file_array.length; i++) {
        DeleteFile(this.temp_file_array[i]);
    }
};

DocEngine.prototype.disable_chart = function() {
    this.chart_enabled = 0;
}

DocEngine.prototype.start_chart = function() {
    Document.SetCurrCellStyle("chart_2_c1");
    Document.CellWidth = 170;
    Document.SetCurrCellStyle("chart_2_c2");
    Document.CellWidth = 30;
    Document.SetCurrCellStyle("chart_2_c3");
    Document.CellWidth = 169;
    Document.CellPadding(2, 3, 2, 3);
    Document.SetCurrRowStyle("chart_2_r1");
    Document.RowAutoHeight = true;
    Document.SetRowCellStyles("chart_2_c1", "chart_2_c2", "chart_2_c1");
    Document.SetCurrRowStyle("chart_2_r2");
    Document.RowAutoHeight = true;
    Document.SetRowCellStyles("chart_2_c3");
    Document.SetCurrTableStyle("chart_2_t1");
    Document.TableRowStyle = "chart_2_r1";
    Document.SetCurrTableStyle("chart_2_t2");
    Document.TableRowStyle = "chart_2_r2";
    Document.TableBorder = 1;

    Document.SetCurrCellStyle("chart_3_c1");
    Document.CellWidth = 113;
    Document.SetCurrCellStyle("chart_3_c2");
    Document.CellWidth = 20;
    Document.SetCurrCellStyle("chart_3_c3");
    Document.CellWidth = 112;
    Document.CellPadding(2, 3, 2, 3);
    Document.SetCurrRowStyle("chart_3_r1");
    Document.RowAutoHeight = true;
    Document.SetRowCellStyles("chart_3_c1", "chart_3_c2", "chart_3_c1", "chart_3_c2", "chart_3_c1");
    Document.SetCurrRowStyle("chart_3_r2");
    Document.RowAutoHeight = true;
    Document.SetRowCellStyles("chart_3_c3");
    Document.SetCurrTableStyle("chart_3_t1");
    Document.TableRowStyle = "chart_3_r1";
    Document.SetCurrTableStyle("chart_3_t2");
    Document.TableRowStyle = "chart_3_r2";
    Document.TableBorder = 1;

    Document.BeginTable("chart_" + chart_layout_ + "_t1");
}
DocEngine.prototype.end_chart = function(idx) {
    if (idx != 0) {
        Document.EndCell();
        Document.EndRow();
        Document.EndTable();
        Document.EndCell();

        idx--;
        if (chart_layout_ == 2) {
            if (idx % 2 == 0) {
                Document.BeginCell();
                Document.EndCell();
                Document.BeginCell();
                Document.EndCell();
                Document.EndRow();
            }
        } else switch(idx % 3) {
            case 0:
                Document.BeginCell();
                Document.EndCell();
                Document.BeginCell();
                Document.EndCell();
            case 1:
                Document.BeginCell();
                Document.EndCell();
                Document.BeginCell();
                Document.EndCell();
                Document.EndRow();
                break;
        }
    }

    Document.EndTable();
}
DocEngine.prototype.do_chart = function(cur_event) {
    var idx = 0;
    var mode = 0;
    for (var i = 0; i < NumTourstops(); i++) {
        var ts = GetTourstop(i);

        if (!(i == 0 && cfg.standard.doc.ignore_tourstop_start &&
             (ts.Caption == "Start" || ts.Caption != "Init"))) {
            var macro = ts.NextMacro();
            while (macro != null) {
                var mtemp = macro.Template();
                var old_mode = mode;
                mode = (mtemp == "new_page" || mtemp == "new_window" || mtemp == "scroll_hor" || mtemp == "scroll_vert") ? 1 : (!mode ? 0 : 2);

                if (mode == 1) {
                    if (macro.GetParam("process_enable") == 0) {
                        macro = ts.NextMacro(macro.TourPosition());
                        CurProgress(++cur_event);
                        mode = old_mode;
                        continue;
                    }

                    if (old_mode != 0) {
                        Document.EndCell();
                        Document.EndRow();
                        Document.EndTable();
                        if (idx % chart_layout_ == 0) {
                            Document.EndCell();
                            Document.EndRow();
                        } else {
                            Document.EndCell();
                        }
                    }
                }

                switch(mode) {
                    case 0:
                        break;
                    case 1:
                        if (idx % chart_layout_ == 0) {
                            Document.BeginRow();
                            if (idx != 0) {
                                Document.RowMergeCells();
                                Document.BeginCell();
                                this.add_image_paragraph(word_trans("standard"), ResourceDir + "\\arrow_long.bmp", 502, 42);
                                Document.EndCell();
                                Document.EndRow();
                                Document.BeginRow();
                            }
                        }
                        if (idx % chart_layout_ != 0) {
                            Document.BeginCell();
                            if (idx % chart_layout_ != 0) {
                                this.add_text_paragraph(word_trans("standard"), "");
                                this.add_text_paragraph(word_trans("standard"), "");
                                this.add_image_paragraph(word_trans("standard"), ResourceDir + "\\arrow.bmp", 26, 9);
                            }
                            Document.EndCell();
                        }

                        Document.BeginCell();
                        Document.BeginTable("chart_" + chart_layout_ + "_t2");
                        Document.BeginRow();
                        Document.BeginCell();
                        Document.CellBgColor = 0xE0E0E0;
                        var t = macro.GetParam("macro_comment");
                        if (!t.length && macro.HasParam("new_step")) {
                            t = macro.GetParam("new_step");
                        }
                        this.add_text_paragraph(word_trans("standard"), t);
                        Document.EndCell();
                        Document.EndRow();

                        Document.BeginRow();
                        Document.BeginCell();
                        var sc = this.create_macro_image(macro);
                        var w_scale = sc.image.width * 11 / 100;
                        var h_scale = sc.image.height * 11 / 100;
                        this.set_cur_sc(sc);
                        if (this.cur_sc) Document.AddImage(this.cur_sc.temp_file, w_scale, h_scale);
                        Document.EndCell();
                        Document.EndRow();

                        Document.BeginRow();
                        Document.BeginCell();
                        idx++;
                        break;
                    case 2:
                        switch (mtemp) {
                            case "key_press":
                                this.add_text_paragraph(word_trans("standard"), macro.GetParam("key_desc"));
                                break;
                            default:
                                var fname = "", ficon = "";
                                if (macro.HasParam("fieldname")) fname = macro.GetParam("fieldname");
                                if (macro.HasParam("fieldicon")) ficon = macro.GetParam("fieldicon");
                                if (fname.length) {
                                    this.add_text_paragraph(word_trans("standard"), fname);
                                } else if (ficon.length) {
                                    this.add_image_paragraph(word_trans("standard"), Project.PagePath + ficon, -1, -1, "", 100, 100);
                                }
                                break;
                        }
                        if (macro.HasParam("screenshot_rect") && this.cur_sc != null) {
                            var rect = macro.GetParam("screenshot_rect");

                            rect.MoveBy(-this.cur_sc.image_rect.left, -this.cur_sc.image_rect.top);
                            rect.MoveBy(this.cur_sc.border, this.cur_sc.border);

                            if (this.cur_sc.image != 0) {
                                this.cur_sc.image.RoundedRect(rect,
                                                              15,
                                                              cfg.standard.doc.marker_color,
                                                              cfg.standard.doc.marker_offset,
                                                              0);
                            }
                        }
                        break;
                }

                macro = ts.NextMacro(macro.TourPosition());
                CurProgress(++cur_event);
            }
        }
    }
    return { cur_event: cur_event, idx: idx };
}

DocEngine.prototype.handle_tour_stops = function() {
    log("DocEngine::handle_tour_stops");
    if (cfg.standard.doc.workflow_enabled && this.chart_enabled == 1) {
        ProgressBegin(ui_trans('progressMacros'), 2 * num_events);
    } else {
        ProgressBegin(ui_trans('progressMacros'), num_events);
    }
    var cur_event = 0;

    Document.SetProperty("Title", Project.DisplayName);
    Document.SetProperty("Author", Project.Author);

    if (cfg.standard.doc.include_project_details || this.more_details) {

        this.add_text_paragraph(word_trans('para_heading') + cfg.standard.doc.singledoc_headinglevel,
                                Project.DisplayName);
        if (typeof this.ppt_title_page != 'undefined') this.ppt_title_page = 1;

        this.add_html_paragraph(word_trans('standard'), Project.Description);

    }

    if (this.more_details) {
        this.add_text_paragraph(word_trans('para_heading') + (cfg.standard.doc.singledoc_headinglevel + 1),
                                "Details");

        if (Project.Notes.length) {
            this.add_text_paragraph(word_trans('para_heading') + (cfg.standard.doc.singledoc_headinglevel + 2),
                                    Translate("IDS_WAPI_MESSAGELOG"));
            this.add_text_paragraph(word_trans('standard'), Project.Notes);
        }

        if (Project.Categories.length) {
            this.add_text_paragraph(word_trans('standard'),
                                    Translate("IDS_WAPI_CATEGORIES") + ": " +
                                    Project.Categories);
        }

        this.add_text_paragraph(word_trans('standard'),
                                Translate("IDS_WAPI_MAX_SCORE") + ": " +
                                Project.MaxScore);
        this.add_text_paragraph(word_trans('standard'),
                                Translate("IDS_WAPI_MASTERY_SCORE") + ": " +
                                Project.MasteryScore);
        this.add_text_paragraph(word_trans('standard'),
                                Translate("IDS_WAPI_LANGUAGE") + ": " +
                                Translate("lang_" + Project.Language));
    }

    if (cfg.standard.doc.workflow_enabled && this.chart_enabled == 1) {
        this.start_chart();
        var ret = this.do_chart(cur_event);
        cur_event = ret.cur_event;
        this.end_chart(ret.idx);
    }

    for (i = 0; i < NumTourstops(); i++) {
        var ts = GetTourstop(i);

        if (!(i == 0 && cfg.standard.doc.ignore_tourstop_start &&
              (ts.Caption == "Start" || ts.Caption != "Init"))) {
            this.handle_tourstop(ts);
        }

        var macro;
        macro = ts.NextMacro();

        while (macro != null) {
            this.handle_macro(macro, ts);
            macro = ts.NextMacro(macro.TourPosition());
            CurProgress(++cur_event);
        }
    }

    ProgressEnd();
}
