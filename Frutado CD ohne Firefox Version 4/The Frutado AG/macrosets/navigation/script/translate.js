#use(config.js)
#use(lang.js)
#use(custom/config.js)
#use(ui_lang.js)

#use(relpos_helpers.js)

#use(hmap.js)


var ok = true;
var last_type = "";

var keep_crop = true;


function translate() {
    var dlg = CreateDialog();
    dlg.AddParam("rec_lang", ParamType_ENUM, ui_trans('paramReRecordLanguage'));

    var rl = Project.Language;
    
    dlg.SetParam("rec_lang", 1);
    
    for (var i = 0; i < 1000; i++) {
        if (GetLanguageCode(i) == null) break;
        dlg.AddEnumValue("rec_lang", i, GetLanguageName(i));
        if (GetLanguageCode(i) == rl) {
            dlg.SetParam("rec_lang", i);
        }
    }

    if (dlg.Show()) {
        var rl = dlg.GetParam("rec_lang");
        Project.Language = GetLanguageCode(rl);
        if (!load_project_language()) {
            Project.Language = "de-DE";
            load_project_language();
        }
    } else {
        return;
    }
    
    translate_project();
}

function translate_project()
{
    var start_pos = 0;
    var last_window_id = 0;
    
    for (i = 0; i < NumTourstops(); i++) {

        var ts = GetTourstop(i);
        log(ts.TourPosition() + ": " + ts.Caption + " (" + ts.Duration() + ")");

        var mac = ts.NextMacro();

        while (ok && mac != null) {
            if (mac.TourPosition() >= start_pos) {
                log("TRANS:" + mac.TourPosition() + ": " + mac.Template() + " (" + mac.Duration() + ")");
                // mac.SetCurrent();
                // SelectEvent(mac.TourPosition(), true);
                translate_mac(mac, ts);
            } else {
                log("SKIP:" + mac.TourPosition() + ": " + mac.Template() + " (" + mac.Duration() + ")");
            }
            mac = ts.NextMacro(mac.TourPosition());
        };
    }
}

function translate_mac(mac, ts) {
    // mac.SetCurrent();


    if (mac.HasParam("element_type")) {
        var element_type = mac.GetParam("element_type");
        
        if (mac.HasParam("action")) {
            var action = mac.GetParam("action");
            
            if (hmap[element_type + "::" + action]) {
                element_type = element_type + "::" + action;
            }
        }
        
        var hm = hmap[element_type];

        if (hm) {
            if (typeof(hm.textkey) == 'string') {

                infotxt = get_infotxt(element_type);

                if (mac.Template() == "input_text") {
                    var d_tab    = mac.GetParam("confirmation_tab");
                    var d_enter  = mac.GetParam("confirmation_enter");
                    var d_button = mac.GetParam("affirmation_button");

                    var infotxt2 = input_infotxt(d_tab, d_enter, d_button);

                    infotxt.demo += infotxt2.demo;
                    infotxt.prac += infotxt2.prac;
                } else if (mac.Template() == "input_radio") {
                    if (mac.GetParam("element_type") == "INPUTcheckbox") {
                        if (mac.GetParam("choose_bool") == "1") {
                            infotxt = get_infotxt("INPUTcheckboxOn");
                        } else {
                            infotxt = get_infotxt("INPUTcheckboxOff");
                        }
                    }
                }

                if (mac.HasParam("explanation_d")) {
                    if (!mac.HasParam("explanation_d_modified") || !mac.GetParam("explanation_d_modified")) {
                        mac.SetParam("explanation_d", infotxt.demo);
                    }
                }
                if (mac.HasParam("explanation_p")) {
                    if (!mac.HasParam("explanation_p_modified") || !mac.GetParam("explanation_p_modified")) {
                        mac.SetParam("explanation_p", infotxt.prac);
                    }
                }
            } else if (typeof(hm.alt_text) == 'string') {
                var element_type = hm.alt_text;
                var hm = hmap[element_type];

            }
        } else {
            log("No HMAP: " + element_type);
        }
    } else if (mac.Template() == "key_press") {
        var infotxt = get_key_infotxt("keypress");
        mac.SetParam("explanation_d", infotxt.demo);
        mac.SetParam("explanation_p", infotxt.prac);
    }
}
