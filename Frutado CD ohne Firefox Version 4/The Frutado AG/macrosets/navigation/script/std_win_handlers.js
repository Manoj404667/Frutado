#use(win_helpers.js)

var hmap = new Object;

function win_create_explain(type) {
    var mac = CreateMacro("explanation");

    win_update_explain(mac, type, true);

    return mac;
}

function win_create_explain_l(type) {
    var mac = CreateMacro("explanation_long");

    win_update_explain_l(mac, type, true);

    return mac;
}

function win_create_edit(type) {
    var mac = CreateMacro("input_text");
 
    // set values based on default from config.js
    /*
    if (mac.HasParam("confirmation_tab")) {
        mac.SetParam("confirmation_tab", cfg.navigation.rec.input_confirm_tab);
    }
    if (mac.HasParam("confirmation_enter")) {
        mac.SetParam("confirmation_enter", cfg.navigation.rec.input_confirm_enter);
    }
    if (mac.HasParam("affirmation_button")) {
        mac.SetParam("affirmation_button", cfg.navigation.rec.input_confirm_button);
    }
    */
    win_update_edit(mac, type, true);

    return mac;
}

function win_create_checkbox(type) {
    var mac = CreateMacro("input_radio");

    win_update_checkbox(mac, type, true);

    return mac;
}

function win_create_selectbox(type) {
    var mac = CreateMacro("select_single");

    win_update_selectbox(mac, type, true);

    return mac;
}

function win_create_tpcd_click(type) {
    var mac = CreateMacro("click");

    win_update_tpcd_click(mac, type, true);

    return mac;
}

function win_create_click(type) {
    var mac = CreateMacro("click");

    win_update_click(mac, type, true);

    return mac;
}

function win_create_tab_click(type) {
    var mac = CreateMacro("click");

    win_update_tab_click(mac, type, true);

    return mac;
}

function win_create_asset() {
    var mac = CreateMacro("new_page");

    win_update_asset(mac);

    return mac;
}

function win_create_text_click(type) {
    var mac = CreateMacro("click");

    win_update_text_click(mac, type, true);

    return mac;
}

function win_create_keypress(type) {
    var mac = CreateMacro("key_press");

    win_update_text_click(mac, type, true);

    return mac;
}
