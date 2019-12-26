#use(DocEngine.js)

function PptEngine() {
    this.ppt_title_page = 0;
};

PptEngine.prototype = new DocEngine;
PptEngine.superClass = DocEngine.prototype;

PptEngine.prototype.reset = function() {
    PptEngine.superClass.reset.call(this); // 
    Document.IgnoreInlineImg = true;
}

PptEngine.prototype.hinweis = function(macro, ts) {
    this.add_bubble_text(macro, -1);
};


PptEngine.prototype.status_info = function(macro, ts) {
    var status_txt = macro.GetParam("status_text");

    Document.BeginParagraph(word_trans('para_bubble_text'));
    Document.AddText(status_txt);
    Document.EndParagraph();
};

PptEngine.prototype.doc_caption = function(macro, ts) {
    var caption = macro.GetParam("caption");

    if (caption != "") {
        Document.BeginParagraph(word_trans('standard'));
        Document.ChangeCharStyle("bold", "on");
        Document.AddText(caption);
        Document.EndParagraph();        
    }
};

PptEngine.prototype.transaction_info = function(macro, ts) {
     var sap_pfad = macro.GetParam("sap_path");
     var tcode = macro.GetParam("tcode");

     if (sap_pfad.length != 0) {
         var i = -1;

         while ((i = sap_pfad.indexOf('->')) != -1) {
             sap_pfad = sap_pfad.substring(0, i) + "&rarr;" + sap_pfad.substring(i + 2, sap_pfad.length);
         }
     }

     Document.BeginParagraph(word_trans('para_bubble_text'));
     Document.AddText(ui_trans('docSAPMenuPath') + ":");
     Document.AddHtmlText(sap_pfad);
     Document.EndParagraph();

     Document.BeginParagraph(word_trans('para_tcode'));
     Document.AddText(ui_trans('docSAPTransaction') + ":");
     Document.AddText(tcode);
     Document.EndParagraph();
};

PptEngine.prototype.explanation_long = function(macro, ts) {
    this.add_bubble_text(macro, -1);
};

PptEngine.prototype.mchoice = function(macro, ts) {};
PptEngine.prototype.sqmaquiz = function(macro, ts) {};
PptEngine.prototype.fibquiz = function(macro, ts) {};
PptEngine.prototype.matchquiz = function(macro, ts) {};
PptEngine.prototype.connquiz = function(macro, ts) {};
PptEngine.prototype.mixquiz = function(macro, ts) {};
PptEngine.prototype.scalequiz = function(macro, ts) {};
PptEngine.prototype.gridquiz = function(macro, ts) {};
PptEngine.prototype.quiz_eval = function(macro, ts) {};
PptEngine.prototype.quiz_shuffle_on = function(macro, ts) {};
PptEngine.prototype.quiz_shuffle_off = function(macro, ts) {};

PptEngine.prototype.handle_tourstop = function(ts) {
    log("PptEngine::handle_tourstop");

    if (this.more_details) {
        this.add_text_paragraph(word_trans('para_heading') + (cfg.standard.doc.singledoc_headinglevel + 1),
                                Translate("IDS_TOURSTOP") + " " + ts.Index + ": " + ts.Caption);

    } else if (cfg.standard.doc.heading_from_tourstop) {
        Document.PageBreak();

        var text = ts.Caption;

        if (text != "") {
            var parastyle = word_trans('para_heading') + (cfg.standard.doc.singledoc_headinglevel + 1);
            this.add_text_paragraph(parastyle, text);
        }
    }
};

PptEngine.prototype.new_page = function(macro, ts) {
    log("PptEngine::new_page");
    if (cfg.standard.doc.heading_from_new_page) {
        if (this.ppt_title_page != 1) {
            Document.PageBreak();
        } else {
            this.ppt_title_page = 0;
        }

        if (!macro.HasParam("doc_heading") || macro.GetParam("doc_heading")) {
            var text = macro.GetParam("new_step");
            if (text != "") {
                //var parastyle = word_trans('para_heading') + (cfg.standard.doc.singledoc_headinglevel + 1);
                //this.add_html_paragraph(parastyle, text);
                Document.BeginParagraph(word_trans('standard'));
                Document.ChangeCharStyle("bold", "on");
                Document.AddText(text);
                Document.EndParagraph();
            }
        }
    }

    var sc = this.create_macro_image(macro);
    this.set_cur_sc(sc);
    if (this.cur_sc) this.add_screenshot(this.cur_sc);
};
PptEngine.prototype.new_window = PptEngine.prototype.new_page;