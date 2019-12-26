#use(translate.js)

function translate_all()
 {
 	log("batch_translate");
    if (batch_trans_lang == null) {
        var dlg = CreateDialog();
        dlg.AddParam("rec_lang", ParamType_ENUM, ui_trans('paramReRecordLanguage'));
        dlg.SetParam("rec_lang", 1);
        for (var i = 0; i < 1000; i++) {
            if (GetLanguageCode(i) == null) break;
            dlg.AddEnumValue("rec_lang", i, GetLanguageName(i));
        }
        if (dlg.Show()) {
        	var rl = dlg.GetParam("rec_lang");
            batch_trans_lang = GetLanguageCode(rl);
            log("selected language " + batch_trans_lang);
        } else {
            batch_trans_lang = "";
            log("language selection canceled");
            return;
        }
    }
    Project.Language = batch_trans_lang;
    load_project_language();
    translate_project();
    SaveProject("");
}