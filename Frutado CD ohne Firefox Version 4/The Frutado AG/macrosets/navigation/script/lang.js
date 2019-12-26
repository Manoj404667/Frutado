#use(config.js)
#use(ui_lang.js)

var lang_map = new Object;

var lang_tbl = null;
var lang_tbl_cur = '';

lang_map["de"] = {

imgCaption:     "Abbildung",

paramMonth:     "Monat",
paramJanuary:   "Januar",
paramFebruary:  "Februar",
paramMarch:     "März",
paramApril:     "April",
paramMay:       "Mai",
paramJune:      "Juni",
paramJuly:      "Juli",
paramAugust:    "August",
paramSeptember: "September",
paramOctober:   "Oktober",
paramNovember:  "November",
paramDecember:  "Dezember",

}

lang_map["en"] = {

imgCaption:     "Figure",

paramMonth:     "Month",
paramJanuary:   "January",
paramFebruary:  "February",
paramMarch:     "March",
paramApril:     "April",
paramMay:       "May",
paramJune:      "June",
paramJuly:      "July",
paramAugust:    "August",
paramSeptember: "September",
paramOctober:   "October",
paramNovember:  "November",
paramDecember:  "December",
}

lang_map["sw"] = {

imgCaption:     "Figure",

}

lang_map["fi"] = {

imgCaption:     "Figure",

}

lang_map["fr"] = {

imgCaption:     "Figure",

}

lang_map["it"] = {

imgCaption:     "Figure",

}

lang_map["hi"] = {

imgCaption:     "िफगर",

}

function fix_lang_item(it) {
    var res = it;

    /*
    res = res.replace(/&auml;/g, "⠩;
    res = res.replace(/&ouml;/g, "�
    res = res.replace(/&uuml;/g, "�    res = res.replace(/&Auml;/g, "¢);
    res = res.replace(/&Ouml;/g, "Ԣ);
    res = res.replace(/&Uuml;/g, "ڢ);
    res = res.replace(/&szlig;/g, "ݢ);
    */

    res = res.replace( "[B_NAME_ICON]", " <b>$#{fieldname}&nbsp;$P{fieldicon}</b> "  );
    res = res.replace( "[B_ICON_NAME]", " <b>$#{fieldname}&nbsp;$P{fieldicon}</b> ");
    res = res.replace( "[B_TCODE]"    , " <b>$#{transaction_code}</b> "              );
    res = res.replace( "[B_KEY]"      , " <b>$#{key_desc}</b> "                      );
    res = res.replace( "[B_INPUT]"    , " <b>$#{text_d}</b> "                        );
    res = res.replace( "[B_SELECTED]" , " <b>$#{choose_text}</b> "                   );
    res = res.replace( "[NAME]"       , " $#{fieldname} "                            );
    res = res.replace( "[B_NAME]"     , " <b>$#{fieldname}</b> "                     );
    res = res.replace( "[ICON]"       , " $P{fieldicon} "                           );
    res = res.replace( "[B_ICON]"     , " $P{fieldicon} "                           );
    res = res.replace( "  "           , " "                                         );
    res = res.replace( "} ."          , "}."                                        );
    res = res.replace( " \."           , "."                                        );

    return res;
}

function fix_lang_tbl() {
    var it;
    for (it in lang_tbl) {
        lang_tbl[it] = fix_lang_item(lang_tbl[it]);
    }
}

function select_project_language() {
    if (Project.Language == '') {
        Project.Language = def_lang;
        set_project_language();
    }

    load_project_language();
}

function load_project_language() {
    if (lang_tbl_cur != Project.Language) {
        var lt_fn = Project.ScriptBase + "\\trans_" + Project.Language + ".csv";
        lang_tbl = ObjectMapFromCSV(lt_fn, 3);
        if (lang_tbl == null) {
            log("File not loaded: " + lt_fn);
        }
        lang_tbl_cur = Project.Language;
        fix_lang_tbl();
        SetStatus("Loaded " + Project.Language);
        log("Loaded " + Project.Language);
    }
}

function set_project_language() {
    var cfgdlg = CreateDialog();
    cfgdlg.SetCaption(ui_trans('capRecordSettings'));

    cfgdlg.AddParam("rec_lang", ParamType_ENUM, ui_trans('paramReRecordLanguage'));
    for (var i = 0; i < rec_languages.length; i++) {
        cfgdlg.AddEnumValue("rec_lang", i, ui_trans('lang_' + rec_languages[i]));
        if (rec_languages[i] == Project.Language) {
            cfgdlg.SetParam("rec_lang", i);
        }
    }

    if (cfgdlg.Show()) {
        var rl = cfgdlg.GetParam("rec_lang");

        Project.Language = rec_languages[rl];
        WriteStringSetting("record_language", Project.Language);
    }
}

function trans(name) {
    select_project_language();

    var cur_map = lang_map[Project.Language];
    
    if (typeof(cur_map) != 'object') {
        cur_map = lang_map["de"];
    }

    if (typeof(cur_map[name]) == 'string') {
        return cur_map[name];
    } else if (typeof(lang_map["de"][name]) == 'string') {
        return lang_map["de"][name];
    } else {
        return name;
    }
}


