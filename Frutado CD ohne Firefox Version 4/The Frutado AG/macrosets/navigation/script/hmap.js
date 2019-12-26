#use(std_win_handlers.js)
// ================================ Win App ====================================

hmap["WINExplain"] = {
    handler:     win_create_explain,
    update:      win_update_explain,
    textkey:    "please_note"
};

hmap["WINExplainLong"] = {
    handler:     win_create_explain_l,
    update:      win_update_explain_l,
    textkey:    "please_note"
};

hmap["WINEdit"] = {
    handler:     win_create_edit,
    update:      win_update_edit,
    click_method:    "lclick",
    manual_rerec: false,
    textkey:    "input_text_value"
};

hmap["WINComboEdittpcd"] = {
    handler:     win_create_edit,
    update:      win_update_edit,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "input_text_value_tpcd"
};

hmap["WINCheckbox"] = {
    handler:     win_create_checkbox,
    update:      win_update_checkbox,
    click_method:      "lclick",
    manual_rerec: false,
};
hmap["WINCBChecked"] = {
    handler:     win_create_checkbox,
    update:      win_update_checkbox,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "click_checkbox_on"
};
hmap["WINCBUnchecked"] = {
    handler:     win_create_checkbox,
    update:      win_update_checkbox,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "click_checkbox_off"
};

hmap["WINRadio"] = {
    handler:     win_create_checkbox,
    update:      win_update_checkbox,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "click_select"
};

hmap["WINListBox"] = {
    handler:     win_create_selectbox,
    update:      win_update_selectbox,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "select"
};

hmap["WINTransCode"] = {
    handler:     win_create_tpcd_click,
    update:      win_update_tpcd_click,
    click_method:      "ldblclick",
    manual_rerec: false,
    textkey:    "dblclick_start_transaction"
};

hmap["WINTransCode::lclick"] = {
    handler:     win_create_tpcd_click,
    update:      win_update_tpcd_click,
    click_method:      "ldblclick",
    manual_rerec: false,
    textkey:    "click_mark_transaction"
};

hmap["WINButtonEnter"] = {
    handler:     win_create_click,
    update:      win_update_click,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "click_ok_img"
};

hmap["WINButtonConfirm"] = {
    handler:     win_create_click,
    update:      win_update_click,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "click_ok_img"
};

hmap["WINButtonSave"] = {
    handler:     win_create_click,
    update:      win_update_click,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "click_save_img"
};

hmap["WINButtonBack"] = {
    handler:     win_create_click,
    update:      win_update_click,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "click_back_img"
};

hmap["WINButtonEnd"] = {
    handler:     win_create_click,
    update:      win_update_click,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "click_exit_trans_img"
};

hmap["WINButtonHelpValue"] = {
    handler:     win_create_click,
    update:      win_update_click,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "click_open_value_help_img"
};

hmap["WINButtonCombo"] = {
    handler:     win_create_click,
    update:      win_update_click,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "click_open_selection"
};

hmap["WINListItem"] = {
    handler:     win_create_click,
    update:      win_update_click,
    click_method:      "ldblclick",
    manual_rerec: false,
    textkey:    "dblclick_select_entry"
};

hmap["WINListItem::lclick"] = {
    handler:     win_create_click,
    update:      win_update_click,
    click_method:      "ldblclick",
    manual_rerec: false,
    textkey:    "click_mark_entry"
};

hmap["WINCBListItem"] = {
    handler:     win_create_text_click,
    update:      win_update_text_click,
    click_method:      "lclick",
    manual_rerec: true,
    textkey:    "click_mark_entry_img"
};
hmap["WINGeneralMenue"] = {
    handler:     win_create_click,
    update:      win_update_click,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "click_menu_select_img"
};

hmap["WINMenue"] = {
    handler:     win_create_click,
    update:      win_update_click,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "click_open_menu_img"
};

hmap["WINMenueItem"] = {
    handler:     win_create_click,
    update:      win_update_click,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "click_menu_select_img"
};

hmap["WINPageTab"] = {
    handler:     win_create_tab_click,
    update:      win_update_tab_click,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "click_select_card_img"
};
hmap["WINTableRow"] = {
    handler:     win_create_click,
    update:      win_update_click,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "click_select_line"
};

hmap["WINTableRow::ldblclick"] = {
    handler:     win_create_click,
    update:      win_update_click,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "dblclick_select_line"
};

hmap["WINInactiveEdit"] = {
    handler:     win_create_click,
    update:      win_update_click,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "click_activate_edit"
};

hmap["WINInactiveEdit::ldblclick"] = {
    handler:     win_create_click,
    update:      win_update_click,
    click_method:      "ldblclick",
    manual_rerec: false,
    textkey:    "dblclick_activate_edit"
};

hmap["WINOpenFolderImg"] = {
    handler:     win_create_click,
    update:      win_update_click,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "click_open_folder_img"
};
hmap["WINOpenFolderImg::ldblclick"] = {
    handler:     win_create_click,
    update:      win_update_click,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "dblclick_open_folder_img"
};

hmap["WINOpenFolder"] = {
    handler:     win_create_click,
    update:      win_update_click,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "click_open_folder"
};

hmap["WINOpenFolder::ldblclick"] = {
    handler:     win_create_click,
    update:      win_update_click,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "dblclick_open_folder"
};

hmap["WINCloseFolderImg"] = {
    handler:     win_create_click,
    update:      win_update_click,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "click_close_folder_img"
};

hmap["WINCloseFolder"] = {
    handler:     win_create_click,
    update:      win_update_click,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "click_close_folder"
};

hmap["WINScrollBarHorizontal"] = {
    handler:     win_create_click,
    update:      win_update_click,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "drag_scroll"
};

hmap["WINScrollBarVertical"] = {
    handler:     win_create_click,
    update:      win_update_click,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "drag_scroll"
};

hmap["WINButtonScroll"] = {
    handler:     win_create_click,
    update:      win_update_click,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "click_scroll"
};

hmap["WINScrollAreaLeft"] = {
    handler:     win_create_click,
    update:      win_update_click,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "click_scroll_page_left"
};

hmap["WINScrollAreaRight"] = {
    handler:     win_create_click,
    update:      win_update_click,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "click_scroll_page_right"
};

hmap["WINScrollAreaUp"] = {
    handler:     win_create_click,
    update:      win_update_click,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "click_scroll_page_up"
};
hmap["WINScrollAreaDown"] = {
    handler:     win_create_click,
    update:      win_update_click,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "click_scroll_page_down"
};

hmap["WINRightMouse"] = {
    handler:     win_create_text_click,
    update:      win_update_text_click,
    click_method:      "rclick",
    manual_rerec: false,
    textkey:    "rclick_context"
};

hmap["WINTextClick"] = {
    handler:     win_create_text_click,
    update:      win_update_text_click,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "click_img"
};

hmap["WINTextClick::ldblclick"] = {
    handler:     win_create_text_click,
    update:      win_update_text_click,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "dblclick_img"
};

hmap["WINTextClick::drag"] = {
    handler:     win_create_text_click,
    update:      win_update_text_click,
    click_method:      "drag",
    manual_rerec: false,
    textkey:    "drag_img"
};

hmap["WINTextClick::drop"] = {
    handler:     win_create_text_click,
    update:      win_update_text_click,
    click_method:      "drop",
    manual_rerec: false,
    textkey:    "drop_img"
};

hmap["WINClick"] = {
    handler:     win_create_click,
    update:      win_update_click,
    click_method:      "ldblclick",
    manual_rerec: false,
    textkey:    "click_img"
};

hmap["WINComboButtontpcd"] = {
    handler:     win_create_click,
    update:      win_update_click,
    click_method:      "lclick",
    manual_rerec: false,
    textkey:    "click_combobtn_tpcd"
};

hmap["WINClick::ldblclick"] = {
    handler:     win_create_click,
    update:      win_update_click,
    click_method:      "ldblclick",
    manual_rerec: false,
    textkey:    "dblclick_img"
};

hmap["WINClick::drag"] = {
    handler:     win_create_click,
    update:      win_update_click,
    click_method:      "drag",
    manual_rerec: false,
    textkey:    "drag_img"
};

hmap["WINClick::drop"] = {
    handler:     win_create_click,
    update:      win_update_click,
    click_method:      "drop",
    manual_rerec: false,
    textkey:    "drop_img"
};

hmap["WINKeyPress"] = {
    handler:     win_create_keypress,
    update:      win_update_keypress,
    textkey:    "keypress"
};

