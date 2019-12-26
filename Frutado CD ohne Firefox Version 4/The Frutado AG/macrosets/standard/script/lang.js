#use(config.js)
#use(ui_lang.js)

var lang_map = new Object;

var lang_tbl = null;
var lang_tbl_cur = '';

lang_map["de-DE"] = {

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

lang_map["en-US"] = {

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

lang_map["en-GB"] = {

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

lang_map["sv-SE"] = {

imgCaption:     "Figure",

}

lang_map["fi"] = {

imgCaption:     "Figure",

}

lang_map["fr-FR"] = {

imgCaption:     "Figure",

}

lang_map["it-IT"] = {

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
        log("Default language:" + def_lang);
        Project.Language = def_lang;

        if (!set_project_language()) {
            return false;
        }
    }

    def_lang =  Project.Language;

    log("Project language:" + Project.Language);
    load_project_language();

    return true;
}

function load_project_language() {
    var ok = true;
    if (lang_tbl_cur != Project.Language) {
        var lt_fn = Project.ScriptBase + "\\trans_" + Project.Language + ".csv";
        lang_tbl = ObjectMapFromCSV(lt_fn, 3);
        if (lang_tbl == null) {
            log("Language Table not loaded: " + lt_fn);
            ok = false;
        }

        // load all undefined items from en-US
        var def_lt_fn = Project.ScriptBase + "\\trans_en-US.csv";
        var def_lang_tbl = ObjectMapFromCSV(def_lt_fn, 3);
        if (def_lang_tbl != null) {
            for (it in def_lang_tbl) {
                if (typeof(lang_tbl[it]) == 'undefined') {
                    log("Using en-US-text for lang-key " + it);
                    lang_tbl[it] = fix_lang_item(def_lang_tbl[it]);
                }
            }
        } else {
            log("Could not load default language table " + def_lt_fn);
        }

        lang_tbl_cur = Project.Language;
        fix_lang_tbl();
        SetStatus("Loaded " + Project.Language);
        log("Loaded " + Project.Language);
    }
    return ok;
}

function set_project_language() {
    var cfgdlg = CreateDialog();
    cfgdlg.SetCaption(ui_trans('capRecordSettings'));

    cfgdlg.AddParam("rec_lang", ParamType_ENUM, ui_trans('paramReRecordLanguage'));
    var pl = Project.Language;
    for (var i = 0; i < 1000; i++) {
        if (GetLanguageCode(i) == null) break;
        cfgdlg.AddEnumValue("rec_lang", i, GetLanguageName(i));
        if (GetLanguageCode(i) == pl) {
            cfgdlg.SetParam("rec_lang", i);
        }
    }

    if (cfgdlg.Show()) {
        var rl = cfgdlg.GetParam("rec_lang");
        Project.Language = GetLanguageCode(rl);
        WriteStringSetting("record_language", Project.Language);

        return true;
    }

    return false;
}

function prj_trans(name) {
    select_project_language();

    if (typeof(lang_tbl[name]) == 'string') {
        return lang_tbl[name];
    } else {
        return "[" + name + "]";
    }
}

function trans(name) {
    select_project_language();

    var cur_map = lang_map[Project.Language];

    if (typeof(cur_map) != 'object') {
        cur_map = lang_map["en-US"];
        log("cur_map undefined, reverting to 'de-DE'");
    }

    if (typeof(cur_map[name]) == 'string') {
        return cur_map[name];
    } else if (typeof(lang_map["en-US"][name]) == 'string') {
        return lang_map["en-US"][name];
    } else {
        return "[" + name + "]";
    }
}


