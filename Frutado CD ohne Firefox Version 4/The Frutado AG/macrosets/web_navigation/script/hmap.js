#use(std_handlers.js)
#use(std_win_handlers.js)

hmap["SPANall"] = {
    name:        "Scrollable SPAN",

    handler:     std_handle_body

};

hmap["SPANTCFreeColumnContainer"] = hmap["SPANall"];

hmap["DIVGridViewScroller"] = {
    name:        "Scrollable DIV",

    handler:     std_handle_body

};


hmap["BODY"] = {
    name:        "Body",

    handler:     std_handle_body

};



hmap["INPUTsubmit"] = {
    name:        "Submit-Button",

    textkey:     "click",
    handler:     std_create_click,
    propscript:  { fieldname: "value" },

    action:      "click()",
};

hmap["INPUTbutton"] = {
    name:        "Input/Button",

    textkey:     "click",
    handler:     std_create_click,
    propscript:  { fieldname: "value" },

    action:      "click()",
};

hmap["A"] = {
    name:        "Link",

    textkey:     "click",
    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    // action:      "click()",
};

hmap["DIV"] = {
    name:        "Link",

    textkey:     "click",
    handler:     std_handle_div,
    propscript:  { fieldname: "innerText" },

    // action:      "click()",
};

hmap["SPAN"] = hmap["A"];

hmap["AWebguiActiveButton"] = {
    name:        "SAP Link",

    textkey:     "click",
    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "click()",
};

hmap["ApushButton"] = hmap["AWebguiActiveButton"];
hmap["TDpushButton"] = hmap["AWebguiActiveButton"];
hmap["AorderItem"] = hmap["AWebguiActiveButton"];
hmap["AindexLink"] = hmap["AWebguiActiveButton"];

hmap["IMGA:"] = {
    name:        "Image Link",

    textkey:     "click_img",
    handler:     std_create_click,
    propscript:  { fieldname: [ "innerText", "alt"] },
    imgscript:    "href",

    action:      "click()",
};

hmap["IMGA:advClearButton"] = hmap["IMGA:"];

hmap["IMGA:WebguiActiveIconButton"] =
    hmap["IMGA:"];

hmap["IMGSPAN:"] = {
    name:        "SAP TBButton",

    textkey:     "click_img",
    handler:     std_create_click,
    propscript:  { fieldname: "parentNode.title" },
    imgscript:    "href",

    action:      "click()",
};

hmap["IMGSPAN:hTBCButtonEnabledUnchecked"] =
    hmap["IMGSPAN:"];

hmap["IMGSPAN:WebguiToolbarIconEnabled:f_canc"] = {
    name:        "SAP Cancel",

    textkey:     "click_cancel_trans_img",
    handler:     std_create_click,
    propscript:  { fieldname: "alt" },
    imgscript:    "href",

    action:      "click()",
};

hmap["IMGSPAN:WebguiToolbarIconEnabled:f_back"] = {
    name:        "SAP Back",

    textkey:     "click_back_img",
    handler:     std_create_click,
    propscript:  { fieldname: "alt" },
    imgscript:    "href",

    action:      "click()",
};

hmap["IMGSPAN:WebguiToolbarIconEnabled:f_okay"] = {
    name:        "SAP Enter",

    textkey:     "click_ok_img",
    handler:     std_create_click,
    propscript:  { fieldname: "alt" },
    imgscript:    "href",


    action:      "click()",
};

hmap["IMGSPAN:WebguiToolbarIconEnabled:f_endt"] = {
    name:        "SAP End Transaction",

    textkey:     "click_exit_trans_img",
    handler:     std_create_click,
    propscript:  { fieldname: "alt" },
    imgscript:    "href",


    action:      "click()",
};

hmap["IMGSPAN:WebguiToolbarIconEnabled:f_save"] = {
    name:        "SAP Save",

    textkey:     "click_save_img",
    handler:     std_create_click,
    propscript:  { fieldname: "alt" },
    imgscript:    "href",


    action:      "click()",
};


hmap["IMGSPAN:WebguiToolbarIconEnabled"] = {
    name:        "SAP Standard Button",

    textkey:     "click_img",
    handler:     std_create_click,
    propscript:  { fieldname: "alt" },
    imgscript:    "href",

    // XXX XXX XXX use parentNode.id to differentiate buttons
    action:      "click()",
};

hmap["IMGTDINPUTX"] = {
    name:        "SAP ImgCheckbox off",

    textkey:     "click_checkbox_off",
    handler:     std_create_click,
    propscript:  { fieldname: "parentNode.nextSibling.innerText" },


    action:      "click()",
};

hmap["IMGTDTX_XS"] = {
    name:        "SAP Calendar",

    textkey:     "click_next_page_img",
    handler:     std_create_click,
    propscript:  { fieldname: "alt" },
    imgscript:    "href",


    action:      "click()",
};

hmap["IMGTDINPUT"] = {
    name:        "SAP ImgCheckbox on",

    textkey:     "click_checkbox_on",
    handler:     std_create_click,
    propscript:  { fieldname: "parentNode.nextSibling.innerText" },


    action:      "fireEvent('onclick')",
};

hmap["IMGTDINPUT "] =
    hmap["IMGTDINPUT"];


hmap["TDsearchHelpResultBody"] = {
    name:        "Selection from Value Help",

    textkey:     "click_select_value",
    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },


    action:      "fireEvent('onclick'); fireEvent('ondblclick')",
};

hmap["SPANnoneditinputHighlighted"] = hmap["TDsearchHelpResultBody"];
hmap["SPANnoneditinput"] = hmap["TDsearchHelpResultBody"];


hmap["SPANsapEdfTxtEnbl sapEdfSpanEnbl"] = {
    name:        "CIC Enable Input",

    textkey:    "click_activate_edit",
    handler:     std_create_click,
    propfunction:  { fieldname: standard_fieldname },
    dont_wait:   true,

    action:      "focus();",

    next_action: "INPUTtext"
}

hmap["TDNewMenuCaption"] = {
    name:        "ITS Menu Open",

    textkey:     "click_open_menu",
    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },


    action:      ["fireEvent('onmouseover')", "fireEvent('onmousedown');click()" ],
};

hmap["TDNewMenuItemFont"] = {
    name:        "ITS Menu Selection",

    textkey:     "click_menu_select",
    handler:     std_create_click,
    propscript:  { fieldname: "previousSibling.innerText + innerText",
                 },


    action:      "fireEvent('onmouseover'); fireEvent('onmouseup');"
};

hmap["IMGA:WebguiIconTextButton"] = {
    name:        "SAP ImgButton",

    textkey:     "click_img",
    handler:     std_create_click,
    propscript:  { fieldname: "parentNode.innerText" },
    imgscript:   "href",


    action:      "click()",
};

hmap["AWebguiIconTextButton2002"] = {
    name:        "SAP ImgButton 2002",

    textkey:     "click",
    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },


    action:      "click()",
};

hmap["AWebguiIconTextButton"] = {
    name:        "SAP ImgButton(2)",

    textkey:     "click_img",
    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },
    imgscript:   "firstChild.href",


    action:      "click()",
};

hmap["IMGDIVGridView_MenuButton"] = {
    name:        "SAP ImgButton(3)",

    textkey:     "click_img",
    handler:     std_create_click,
    propscript:  { fieldname: "parentNode.title" },
    imgscript:   "href",


    action:      "click()",
};

hmap["AwebguiMetaMenu"] = {
    name:        "SAP Menu Button 2002",

    textkey:     "click_open_menu",
    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },


    action:      "fireEvent('onmousedown')",
};

hmap["THTCColumnTitleSelectable"] = {
    name:        "SAP Column Selection",

    textkey:     "click_select_column",
    handler:     std_create_click,
    propscript:  { fieldname: "title" },


    action:      "click()",
};

hmap["IMGDIVwebguiSearchHelpButton"] = {
    name:        "Open Value Help",

    textkey:     "click_open_value_help",
    handler:     std_create_click,


    action:      "click()",
};

hmap["IMGDIVwebguiTCSearchHelpButtonfixed"] =
    hmap["IMGDIVwebguiSearchHelpButton"];

hmap["IMGDIVwebguiTCSearchHelpButton"] =
    hmap["IMGDIVwebguiSearchHelpButton"];

hmap["IMGTDTCSelImageUnselected"] = {
    name:        "Select Table Row",

    textkey:     "click_select_line",
    handler:     std_create_click,


    action:      "click()",
};

hmap["IMGTDTCTopPageA"] = {
    name:        "Scroll to Top",

    textkey:     "click_scroll_top",
    handler:     std_create_click,
    imgscript:   "currentStyle.backgroundImage",


    action:      "click()",
};

hmap["IMGTDTCLastPageA"] = {
    name:        "Scroll to End",

    textkey:     "click_scroll_bottom",
    handler:     std_create_click,
    imgscript:   "currentStyle.backgroundImage",


    action:      "click()",
};

hmap["IMGTDTCPrevPageA"] = {
    name:        "Scroll one page up",

    textkey:     "click_scroll_pageup",
    handler:     std_create_click,
    imgscript:   "currentStyle.backgroundImage",


    action:      "click()",
};

hmap["IMGTDTCNextPageA"] = {
    name:        "Scroll one page down",

    textkey:     "click_scroll_pagedown",
    handler:     std_create_click,
    imgscript:   "currentStyle.backgroundImage",


    action:      "click()",
};

hmap["IMGTDTCPrevRowA"] = {
    name:        "Scroll one row up",

    textkey:     "click_scroll_lineup",
    handler:     std_create_click,
    imgscript:   "currentStyle.backgroundImage",


    action:      "click()",
};

hmap["IMGTDTCNextRowA"] = {
    name:        "Scroll one row down",

    textkey:     "click_scroll_linedown",
    handler:     std_create_click,
    imgscript:   "currentStyle.backgroundImage",


    action:      "click()",
};

hmap["IMGTDTCSelImageSelected"] =
    hmap["IMGTDTCSelImageUnselected"];

hmap["TDGridViewMarkCell"] =
    hmap["IMGTDTCSelImageUnselected"];

hmap["IMGTDWebguiModalTitleBarXA"] = {
    
    name:        "Close Window",

    textkey:     "click_close_window_img",
    imgscript:   "currentStyle.backgroundImage",
    handler:     std_create_click,


    action:      "click()",
};

hmap["IMGTDWebguiModalTitleBarXI"] =
    hmap["IMGTDWebguiModalTitleBarXA"];

hmap["IMGTDGridViewMarkAllHeader"] = {
    name:        "Select all Table Rows",

    textkey:     "click_select_all_lines_img",
    handler:     std_create_click,
    imgscript:   "href",


    action:      "click()",
};

hmap["IMGTDPULLDOWN-TABSTRIP"] = {
    name:        "Open Tab Menu",

    textkey:     "click_open_card_menu",
    handler:     std_create_click,
    // XXX img_url_to_href? not needed
    imgscript:   "currentStyle.backgroundImage",


    action:      ["fireEvent('onmouseover')", "fireEvent('onmousedown');click()" ],
};

hmap["DIVNewMenuItemHilited"] = {
    name:        "Select Tab from Menu",

    textkey:     "click_select_card",
    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },


    action:      "fireEvent('onmouseenter'); click();",
};

hmap["DIVNewMenuItem"] = hmap["DIVNewMenuItemHilited"];

hmap["TDwebguiTSTextDesel"] = {
    name:        "Select Tab",

    textkey:     "click_select_card",
    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },


    action:      "click()",
};

hmap["IMGTDwebguiTSForwardA"] = {
    name:        "Next Tab",

    textkey:     "click_next_cards_img",
    handler:     std_create_click,
    imgscript:   "currentStyle.backgroundImage",


    action:      "click()",
};

hmap["IMGTDwebguiTSBackA"] = {
    name:        "Previous Tab",

    textkey:     "click_prev_cards_img",
    handler:     std_create_click,
    imgscript:   "currentStyle.backgroundImage",


    action:      "click()",
};

hmap["IMGTDwebguiMetaMenu"] = {
    name:        "Navigation Menu",

    textkey:     "click_open_nav_menu",
    handler:     std_create_click,
    imgscript:   "href",


    action:      "fireEvent('onmouseover');fireEvent('onmousedown')",
};

hmap["IMGTDListItem-open"] = {
    name:        "Close Folder",

    textkey:     "click_close_folder_img",
    handler:     std_create_click,
    propscript:  { fieldname: "parentNode.nextSibling.nextSibling.innerText" },
    imgscript:   "href",


    action:      "click()",
};

hmap["IMGTDListItem-closed"] = {
    name:        "Open Folder",

    textkey:     "click_open_folder_img",
    handler:     std_create_click,
    propscript:  { fieldname: "parentNode.nextSibling.nextSibling.innerText" },
    imgscript:   "href",


    action:      "click()",
};

hmap["IMGTDListItem-leaf"] = {
    name:        "Selection in Tree View",

    textkey:     "click_select_element_img",
    handler:     std_create_click,
    propscript:  { fieldname: "parentNode.nextSibling.nextSibling.innerText" },
    imgscript:   "href",


    action:      "click()",
};

hmap["TDVSlider"] = {
    name:        "Vertical Slider",

    textkey:     "click_scroll_down",
    handler:     std_create_click,

    action:      "fireEvent('onmousedown');click()",
};

// XXX ctrl recommended
hmap["TDListItem"] = {
    name:        "Selection in Tree/List",

    textkey:     "click_select_element_img",
    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },
    imgscript:   "href",


    action:      "click()",
};

hmap["TDalvc"] = {
    name:        "Selection in Table",

    textkey:     "dblclick_select_entry",
    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },


    action:      "click();fireEvent('ondblclick')",
}

hmap["TDCalM"] = {
    name:        "Selection in Calendar",

    textkey:     "dblclick_select_date",
    handler:     std_create_click,
    propfunction:  { fieldname: cal_fieldname },


    action:      "fireEvent('onclick')",
};

hmap["DIVCalT"] = 
    hmap["TDCalM"];

hmap["TDWebguiMessageLine"] = {
    name:        "Status Info",
    handler:     sap_create_status,

}

hmap["SPANWebguiStatusBarFont"] = {
    name:        "Status Message",
    handler:     sap_create_status,
}

hmap["IMGTDWebguiMessageLine"] = {
    name:        "Status Message",
    handler:     sap_create_status,
}

hmap["SPANCTLink"] = {
    name:        "Tree Element/Transaction",
    handler:     sap_create_tcode,

    textkey:     "dblclick_start_transaction",
    propscript:   { fieldname: "innerText" },


    // for trans
    action:      "fireEvent('onclick');fireEvent('ondblclick')",
}

hmap["DIVCTLink"] = hmap["SPANCTLink"];

hmap["SAP_EA_Menu"] = {
    name:        "SAP EA Tree Elemen/Transaction",
    handler:     sap_create_tcode,

    textkey:    "dblclick_start_transaction",
    propscript:   { fieldname: "innerText" },


    // for trans
    action:      "fireEvent('onclick');fireEvent('ondblclick')",
}

// -------

hmap["IMGSPANColumnTreeExpOpen:CTLink"] = {
    name:        "Close Group",

    textkey:     "click_close_group",
    handler:      std_create_click,
    propscript:  { fieldname: "parentNode.nextSibling.nextSibling.innerText" },


    action:      "click()",
};

hmap["IMGSPANColumnTreeExpClose:CTLink"] = {
    name:        "Open Group",

    textkey:     "click_open_group",
    handler:      std_create_click,
    propscript:   { fieldname: "parentNode.nextSibling.nextSibling.innerText" },


    action:       "click()",
};

hmap["SELECT"] = {
    name:        "Select from List",
    handler:     std_create_select,

    textkey:     "select",
    propscript: { fieldname : [ 
                                "previousSibling.innerText", 
                                "previousSibling.firstChild.innerText",
                                "previousSibling.previousSibling.innerText",
                                "previousSibling.firstChild.firstChild.alt"
                              ]
                }
};

hmap["INPUTtexturCoB2TxtDdl"] = {
    name:        "EP Open Select List",
    handler:     std_create_click,
    dont_wait:   true,
    textkey:    "click_open_selection"
}

hmap["INPUTtexturCoB2TxtDdl urCoB2Hv"] = hmap["INPUTtexturCoB2TxtDdl"];
// hmap["INPUTtexturEdf2TxtEnbl"] = hmap["INPUTtexturCoB2TxtDdl"];

hmap["INPUTtext"] = {
    name:        "Text Input",
    handler:     std_create_input,


    textkey:     "input_text",
    propscript: {
        fieldname : [
            "previousSibling.firstChild.innerText", // A
            "previousSibling.innerText",            // B
            // before D for EP6
            "parentNode.previousSibling.innerText", // C
            "parentNode.parentNode.previousSibling.firstChild.firstChild.innerText",
            // moved up for customer A.
            "parentNode.previousSibling.previousSibling.innerText", // E
            "parentNode.parentNode.previousSibling.innerText", // F
            "previousSibling.previousSibling.innerText", // G
            "previousSibling.firstChild.firstChild.alt"  // H
        ]
    },
}

hmap["INPUTtextplusvalue"] = {
    name:        "Text Input plus Value",
    handler:     std_create_input,

    textkey:     "input_text_value",
    propscript: { fieldname : [ "previousSibling.innerText", 
                                "previousSibling.firstChild.innerText",
                                "previousSibling.previousSibling.innerText",
                                "previousSibling.firstChild.firstChild.alt"
                              ]
                },
}

hmap["INPUTtextTabEnterButton"] = {
    textkey: "input_tab_enter_button"
    // placeholder for translation
}

hmap["INPUTtextTabEnter"] = {
    textkey: "input_tab_enter"
    // placeholder for translation
}

hmap["INPUTtextEnterButton"] = {
    textkey: "input_enter_button"
    // placeholder for translation
}

hmap["INPUTtextTab"] = {
    textkey: "input_tab"
    // placeholder for translation
}

hmap["INPUTtextEnter"] = {
    textkey: "input_enter"
    // placeholder for translation
}

hmap["INPUTtextButton"] = {
    textkey: "input_button"
    // placeholder for translation
}

hmap["TEXTAREA"] = {
    name:        "Text Input Area",
    handler:     std_create_input,

    textkey:     "input_text",
    propscript: { 
        fieldname : [
            "previousSibling.previousSibling.innerText",
            "parentNode.previousSibling.previousSibling.innerText",
            "parentNode.parentNode.parentNode.parentNode.parentNode.previousSibling.previousSibling.previousSibling.firstChild.nextSibling.innerText"
        ]
    },
}

hmap["INPUTpassword"] = {
    name:        "Password Input",
    handler:     std_create_input,

    textkey:     "input_text",
    propscript: { fieldname : [ "previousSibling.innerText", 
                                "previousSibling.firstChild.innerText",
                                "previousSibling.previousSibling.innerText",
                                "previousSibling.firstChild.firstChild.alt"
                              ]
                },
}

hmap["SPANlabelTable"] = {
    name:        "Create Text Input",
    handler:     std_create_input, 
}

hmap["INPUTradio"] = {
    name:        "Radio-Button",
    textkey:    "click_select",
    handler:     std_create_radio,
}

hmap["INPUTcheckbox"] = {
    name:        "Checkbox",
    textkey:    "click_checkbox_on",
    handler:     std_create_radio,
}

hmap["INPUTcheckboxOn"] = {
    name:        "Checkbox",
    textkey:    "click_checkbox_on",
    handler:     std_create_radio,
}

hmap["INPUTcheckboxOff"] = {
    name:        "Checkbox",
    textkey:    "click_checkbox_off",
    handler:     std_create_radio,
    // placeholder for translation
}

hmap["OpenValueHelp"] = {
    name:        "Show Value Help Button",

    textkey:    "click_open_value_help",
    handler:     std_create_click,
    propscript:  { fieldname: [ "previousSibling.firstChild.innerText", 
                                "previousSibling.previousSibling.innerText" ] },

    action:      "click();fireEvent('onfocus')",
    dont_wait:   true,
}

hmap["hscroll"] = {
    name:        "Scroll right,left",
    textkey:    "click_scroll_horizontal",
}
hmap["HScroll"] = hmap["hscroll"];

hmap["vscroll"] = {
    name:        "Scroll top,down",
    textkey:    "click_scroll_vertical",
}
hmap["VScroll"] = hmap["vscroll"];

// ================================ EP 6.0 Linde ==============================
hmap["SPANcaption urV"] = {
    name:        "Linde EP Link",

    textkey:    "click",
    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

//    action:      " fireEvent('onkeypress'); focus(); fireEvent('onclick');",
    action:      "fireEvent('onclick');",
};

hmap["IMGSPAN:caption urV"] = {
    name:        "Linde EP Prozess Navigation",

    textkey:    "click",
    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "fireEvent('onclick');",
};

hmap["TDurIlbItmTxt"] = {
    name:        "Linde EP Auswahlmenu",

    textkey:    "click_menu_select",
    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "fireEvent('onclick');",
};

hmap["TDnavPanIncExp"] = {
    name:        "Linde EP Navigation breiter",

    textkey:    "click_img_expand",
    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },
    imgscript:   "currentStyle.backgroundImage",

    action:      "fireEvent('onmousedown'); click(); fireEvent('onmouseup')",
};

hmap["TDnavPanIncCol"] = {
    name:        "Linde EP Navigation schmaler",

    textkey:    "click_img_collapse",
    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },
    imgscript:   "currentStyle.backgroundImage",

    action:      "click()",
};

hmap["IMGSPANurImgCbgImgChk urV:urImgCbgWhl1"] = {
    name:        "Linde EP Checkbox on -> off",

    textkey:    "click_checkbox_off",
    handler:      std_create_click,
    propscript:   { fieldname: [
                      "parentNode.innerText" ,
                      "parentNode.parentNode.innerText" ,
                      "parentNode.parentNode.parentNode.innerText" ,
                      "parentNode.parentNode.parentNode.nextSibling.innerText" ,
                    ]
                  },

    action:       "click()",
};

hmap["IMGSPANurImgCbgImgChk:urImgCbgWhl1"] = {
    name:        "Linde EP Checkbox on -> off (2)",

    textkey:    "click_checkbox_off",
    handler:      std_create_click,
    propscript:   { fieldname: [
                      "parentNode.innerText" ,
                      "parentNode.parentNode.innerText" ,
                      "parentNode.parentNode.parentNode.innerText" ,
                      "parentNode.parentNode.parentNode.nextSibling.innerText" ,
                    ]
                  },

    action:       "click()",
};

hmap["IMGSPANurImgCbgImg urV:urImgCbgWhl1"] = {
    name:        "Linde EP Checkbox off -> on",

    textkey:    "click_checkbox_on",
    handler:      std_create_click,
    propscript:   { fieldname: [
                      "parentNode.innerText" ,
                      "parentNode.parentNode.innerText" ,
                      "parentNode.parentNode.parentNode.innerText" ,
                      "parentNode.parentNode.parentNode.nextSibling.innerText" ,
                    ]
                  },

    action:       "click()",
};

hmap["IMGSPANurImgCbgImg:urImgCbgWhl1"] = {
    name:        "Linde EP Checkbox off -> on (2)",

    textkey:    "click_checkbox_on",
    handler:      std_create_click,
    propscript:   { fieldname: [
                      "parentNode.innerText" ,
                      "parentNode.parentNode.innerText" ,
                      "parentNode.parentNode.parentNode.innerText" ,
                      "parentNode.parentNode.parentNode.nextSibling.innerText" ,
                    ]
                  },

    action:       "click()",
};

hmap["IMGSPANurImgRbgImg urV:urImgRbgWhl1"] = {
    name:        "Linde EP Set Option",

    textkey:    "click_select",
    handler:      std_create_click,
    propscript:   { fieldname: [
                      "parentNode.innerText" ,
                      "parentNode.parentNode.innerText" ,
                      "parentNode.parentNode.parentNode.innerText" ,
                      "parentNode.parentNode.parentNode.nextSibling.innerText" ,
                    ]
                  },

    action:       "click()",
};

hmap["IMGSPANurImgRbgImgChk urV:urImgRbgWhl1"] = {
    name:        "Linde EP Set Option",

    textkey:    "click_select",
    handler:      std_create_click,
    propscript:   { fieldname: [
                      "parentNode.innerText" ,
                      "parentNode.parentNode.innerText" ,
                      "parentNode.parentNode.parentNode.innerText" ,
                      "parentNode.parentNode.parentNode.nextSibling.innerText" ,
                    ]
                  },

    action:       "click()",
};

// ================================ EP 6.0 ====================================

hmap["SPANurTxtStd"] = {
    name:        "EP Link",

    textkey:    "click",
    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "click()",
};

hmap["SPANurCImgOff"] = {
    name:        "EP7 Checkbox",

    textkey:    "click_checkbox_on",
    handler:     std_create_click,
    propscript:  { fieldname: "parentNode.parentNode.parentNode.previousSibling.innerText" },

    action:      "click()",
};

hmap["SPANurCImgOn"] = {
    name:        "EP7 Checkbox Off",

    textkey:    "click_checkbox_off",
    handler:     std_create_click,
    propscript:  { fieldname: "parentNode.parentNode.parentNode.previousSibling.innerText" },

    action:      "click()",
};
hmap["SPANurRImgOff"] = {
    name:        "EP7 Radiobox",

    textkey:    "click",
    handler:     std_create_click,
    propscript:  { fieldname: "parentNode.innerText" },

    action:      "click()",
};

hmap["SPANurTxtEmph"] = hmap["SPANurTxtStd"];
hmap["SPANurTxtLeg"] = hmap["SPANurTxtStd"];

hmap["SPANsapTxtStd"] = hmap["SPANurTxtStd"];


hmap["BUTTON"] = {
    name:        "Button",

    textkey:    "click",
    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "fireEvent('onmousedown');click()" ,
};


hmap["BUTTONurCoB2Btn"] = {
    name:        "Button",

    textkey:    "click",
    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },
    dont_wait:   true,

    action:      "fireEvent('onmousedown');click()" ,
};

hmap["BUTTONurEdf2HlpDate urV"] = hmap["BUTTONurCoB2Btn"];

hmap["TDurMnuTxt"] = {
    name:        "EP Menu Entry",

    textkey:    "click_menu_select",
    handler:     std_create_quick_click,
    propscript:  { fieldname: "innerText" },

    action:      "fireEvent('onmousemove'); click()",
};

hmap["SPANurMenuItemTxtStd"] = hmap["TDurMnuTxt"];
hmap["SPAN:urMnuTxt"] = hmap["TDurMnuTxt"];

hmap["AprtlTopNavAct"] = {
    name:        "EP Nav-Row",

    textkey:    "click",
    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "fireEvent('onclick')",
};

hmap["AprtlTopNavLnk"] = {
    name:        "EP Nav-Row Link",

    textkey:    "click_navrow",
    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "fireEvent('onclick')",
};

hmap["AprtlTopNav2ndLnk"] = {
    name:        "EP Nav-Row 2 Link",

    textkey:    "click_navrow2",
    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "fireEvent('onclick')",
};

hmap["ASAPBEXLnk"] = {
    name:        "EP X-Link",

    textkey:    "click",
    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "click()",
};

hmap["ASAPBEXaggData"] = {
    name:        "EP Sum Row",

    textkey:    "click",
    handler:      std_create_click,
    propscript:   { fieldname: "innerText" },


    action:       "click()",
};

hmap["ASAPBEXaggItem"] = {
    name:        "EP Sum Row Title",

    textkey:    "click",
    handler:      std_create_click,
    propscript:   { fieldname: "innerText" },


    action:       "click()",
};

hmap["AprtlTopNav2ndAct"] = {
    name:        "EP Nav-Row 2",

    textkey:    "click",
    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "fireEvent('onclick')",
};

hmap["AprtlToolAreaTaskText"] = {
    name:        "EP ToolTask",

    textkey:    "click",
    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "click()",
};

hmap["ActrlTbsTxtOff"] = {
    name:        "EP Tab",

    textkey:    "click_select_card",
    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "fireEvent('onclick')",
};

hmap["SPANurTbsTxtOff"] = {
    name:        "EP Tab (2)",

    textkey:    "click_select_card",
    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "fireEvent('onclick')",
};

hmap["TDsapTabInact"] = {
    name:        "EP Tab (3)",

    textkey:    "click_select_card",
    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "fireEvent('onclick')",
};

hmap["AurBtnStd"] = {
    name:        "EP Button",

    textkey:    "click",
    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "fireEvent('onclick')",
};

hmap["AurBtnEmph"] = hmap["AurBtnStd"];
hmap["AurBtnSml"] =  hmap["AurBtnStd"];

hmap["ActrlBtnStd"] =  hmap["AurBtnStd"];
hmap["ActrlBtnSml"] =  hmap["AurBtnStd"];
hmap["ActrlBtnEmph"] =  hmap["AurBtnStd"];
//hmap["ApushButton"] =  hmap["AurBtnStd"];
hmap["AselectedBut"] =  hmap["AurBtnStd"];

hmap["SPANSItreeOpenFolder"] = {
    name:        "EP Close Group",

    textkey:    "click_close_group",
    handler:      std_create_click,
    propscript:   { fieldname: "nextSibling.nextSibling.innerText" },


    action:      "click()",
};

hmap["SPANSItreeCloseFolder"] = {
    name:        "EP Close Group",

    textkey:    "click_close_group",
    handler:      std_create_click,
    propscript:   { fieldname: "nextSibling.nextSibling.innerText" },


    action:      "click()",
};

hmap["SPANSItreeClosedFolder"] = {
    name:        "EP Open Group",

    textkey:    "click_open_group",
    handler:      std_create_click,
    propscript:   { fieldname: "nextSibling.nextSibling.innerText" },


    action:       "click()",
};

hmap["ASItreeText"] = {
    name:        "EP Tree/List Selection",

    textkey:    "click_select",
    handler:      std_create_click,
    propscript:   { fieldname: "innerText" },


    action:       "click()",
};

hmap["R:ASItreeText"] = {
    name:        "EP Tree/List Context Menu",

    textkey:    "click_open_context_menu",
    handler:      std_create_click,
    propscript:   { fieldname: "innerText" },


    action:       "fireEvent('oncontextmenu')",
};

hmap["DIVurTxtEmph"] = {
    name:        "EP Link Bold",

    textkey:    "click",
    handler:      std_create_click,
    propscript:   { fieldname: "innerText" },


    action:       "click()",
};

hmap["IMGDIVurTxtEmph"] = {
    name:        "EP Link Open",

    textkey:    "click",
    handler:      std_create_click,
    propscript:   { fieldname: "parentNode.innerText" },


    action:       "click()",
};

hmap["IMGLABELurImgRbgImg"] = {
    name:        "EP Radiobutton off -> on",

    textkey:    "click_select",
    handler:      std_create_click,
    propscript:   { fieldname: [
                      "parentNode.innerText" ,
                      "parentNode.parentNode.innerText" ,
                      "parentNode.parentNode.parentNode.innerText" ,
                      "parentNode.parentNode.parentNode.parentNode.innerText" ,
                    ]
                  },



    action:       "click()",
};

hmap["IMGLABELurImgCbgImg"] = {
    name:        "EP Checkbox off -> on",

    textkey:    "click_radio_select",
    handler:      std_create_click,
    propscript:   { fieldname: [
                      "parentNode.innerText" ,
                      "parentNode.parentNode.innerText" ,
                      "parentNode.parentNode.parentNode.innerText" ,
                      "parentNode.parentNode.parentNode.nextSibling.innerText" ,
                    ]
                  },



    action:       "click()",
};

hmap["IMGTDIMG_BTN"] = {
    name:        "EP Icon",

    textkey:    "click_select_img",
    handler:      std_create_click,
    propscript:   { fieldname: "alt" },
    imgscript:    "href",



    action:       "click()",
};


hmap["IMGA:urLnk"] = {
    name:        "EP Icon (2)",

    textkey:    "click_select_img",
    handler:      std_create_click,
    imgscript:    "href",
    propscript:    { fieldname: "title"},



    action:       "click()",
};

hmap["AsapTlbBtnFrm"] = {
    name:        "EP Form-Button",

    textkey:    "click_open_form_view",
    handler:      std_create_click,
    imgscript:   "currentStyle.backgroundImage",
    propscript:    { fieldname: "title"},



    action:       "click()",
};


hmap["AurBrcIna"] = {
    name:        "EP Dialog History",

    textkey:    "history_select",
    handler:      std_create_click,
    propscript:   { fieldname: "innerText" },


    action:       "click()",
};

hmap["AsapBtnStd"] = {
    name:        "EP Button Std",

    textkey:    "click",
    handler:      std_create_click,
    propscript:   { fieldname: "innerText" },


    action:       "click()",
};

hmap["AsapTlbBtnLv2"] = {
    name:        "EP TB-Button Lv2",

    textkey:    "click",
    handler:      std_create_click,
    propscript:   { fieldname: "innerText" },


    action:       "click()",
};

hmap["SPANsapEdfHlpF4"] = {
    name:        "EP Open Value Help",

    textkey:    "click_open_value_help",
    handler:     std_create_click,


    action:      "click()",
};

hmap["SPANsapETbvBtnUp"] = {
    name:        "EP Page Up",

    textkey:    "click_page_up_img",
    handler:     std_create_click,
    imgscript:   "currentStyle.backgroundImage",


    action:      "click()",
};

hmap["SPANsapETbvBtnPgUp"] = hmap["SPANsapETbvBtnUp"];

hmap["SPANsapETbvBtnDown"] = {
    name:        "EP Page down",

    textkey:    "click_page_down_img",
    handler:     std_create_click,
    imgscript:   "currentStyle.backgroundImage",


    action:      "click()",
};

hmap["SPANsapETbvBtnPgDown"] = hmap["SPANsapETbvBtnDown"];

hmap["SPANsapETbvBtnTop"] = {
    name:        "EP to Top",

    textkey:    "click_page_top_img",
    handler:     std_create_click,
    imgscript:   "currentStyle.backgroundImage",


    action:      "click()",
};

hmap["SPANsapETbvBtnBottom"] = {
    name:        "EP to End",

    textkey:    "click_page_bottom_img",
    handler:     std_create_click,
    imgscript:   "currentStyle.backgroundImage",


    action:      "click()",
};

hmap["SPANsapETbvSelIndicatorFalse"] = {
    name:        "EP Select Table Row",

    textkey:    "click_select_line",
    handler:     std_create_click,
    propscript:  { fieldname: "parentNode.nextSibling.innerText" },


    action:      "click()",
};


hmap["TDsapETbvColHdrSortUn"] = {
    name:        "EP Sort Columns",

    textkey:    "click_sort_by_column",
    handler:     std_create_click,
    propscript:  { fieldname: "previousSibling.innerText" },



    action:      "click()",
};

hmap["SPANsapTabRightScroll"] = {
    name:        "EP Next Tab",

    textkey:    "click_next_cards_img",
    handler:     std_create_click,
    imgscript:   "currentStyle.backgroundImage",


    action:      "click()",
};
hmap["SPANsapTabRightScroll pr"] = hmap["SPANsapTabRightScroll"];

hmap["SPANsapTabLeftScroll"] = {
    name:        "EP Previous Tab",

    textkey:    "click_prev_cards_img",
    handler:     std_create_click,
    imgscript:   "currentStyle.backgroundImage",


    action:      "click()",
};

hmap["SPANsapTabLeftScroll pr"] = hmap["SPANsapTabLeftScroll"];

hmap["ACAL_XXS_MAIN"] = {
    name:        "Selection in Calendar",

    textkey:    "click_select_date",
    handler:     std_create_click,
    propfunction:  { fieldname: ep_cal_fieldname },


    action:      "fireEvent('onclick')",
};

hmap["ACAL_XXS_WEKND"] = hmap["ACAL_XXS_MAIN"];

hmap["INPUTimage//closeButton"] = {
    name:        "EP Close Tab",

    textkey:    "click_close_card_img",
    handler:     std_create_click,
    imgscript:   "src",


    action:      "click()",
};


hmap["INPUTimage//"] = {
    name:        "ImageButton",

    textkey:    "click_img",
    handler:     std_create_click,
    imgscript:   "src",
    propscript:  { fieldname: ["alt", "title"] },


    action:      "click()",
};


hmap["TDnavPanColIco"] = {
    name:        "EP Hide Navigation",

    textkey:    "click_hide_treeview",
    handler:     std_create_click,
    imgscript:   "currentStyle.backgroundImage",


    action:      "click()",
};

hmap["TDnavPanExpIco"] = {
    name:        "EP Show Navigation",

    textkey:    "click_show_treeview",
    handler:     std_create_click,
    imgscript:   "currentStyle.backgroundImage",


    action:      "click()",
};

hmap["IMGLI"] = {
    name:        "EP Tree",

    textkey:    "click_open_folder_img",
    handler:     std_create_click,
    imgscript:   "href",
    propscript:  { fieldname: "nextSibling.innerText" },


    action:      "click()",
};

hmap["SAP_EA_Menu_Marked"] = {
    name:        "Tree Element/Transaction Marked",
    textkey:    "click_mark_transaction"
}

hmap["SAP_EA_Menu_GeneralAction"] = {
    name:        "Tree Element/Transaction General Action",
    textkey:    "dblclick_select_element"
}

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
    textkey:    "dblclick_start_transaction2"
};

hmap["WINTransCode::lclick"] = {
    handler:     win_create_tpcd_click,
    update:      win_update_tpcd_click,
    click_method:      "ldblclick",
    manual_rerec: false,
    textkey:    "click_mark_transaction2"
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
// =============================== Intershop ===================================
hmap["Aleftmenu"] = {
    name:        "Intershop Menu links",

    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "click()",
    textkey:    "click"
};

hmap["Aleftmenuactive"] = {
    name:        "Intershop Menu links aktiv",

    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "click()",
    textkey:    "click"
};

hmap["Aheadermenuactive"] = {
    name:        "Intershop Menu Header aktiv",

    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "click()",
    textkey:    "click"
};

hmap["Aheadermenu"] = {
    name:        "Intershop Menu Header",

    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "click()",
    textkey:    "click"
};

hmap["Acatalog"] = {
    name:        "Intershop Catalog Entry",

    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "click()",
    textkey:    "click"
};

hmap["Atabs_dis"] = {
    name:        "Intershop Tab",

    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "click()",
    textkey:    "click_select_card"
};

hmap["Abreadcrumb"] = {
    name:        "Intershop A Read Crumb",

    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "click()",
    textkey:    "click"
};

hmap["Atable_detail_link"] = {
    name:        "Intershop Table detail",

    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "click()",
    textkey:    "click"
};

hmap["Atable_detail_link2"] = {
    name:        "Intershop Table detail (2)",

    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "click()",
    textkey:    "click"
};

hmap["Atableheader"] = {
    name:        "Intershop Table Header",

    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "click()",
    textkey:    "click"
};

hmap["Apagecursortxt"] = {
    name:        "Intershop Page Cursor",

    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "click()",
    textkey:    "click"
};

hmap["SPANpagecursortxt"] = {
    name:        "Intershop Page Choose",

    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "click()",
    textkey:    "click"
};

// =============================== END Intershop ===============================


// =============================== AFZ ===============================
hmap["Ah"] = {
    name:        "AFZ Mitarbeiterportal 1",

    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "click()",
    textkey:    "click"
};

hmap["Aklein"] = {
    name:        "AFZ Mitarbeiterportal 2",

    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "click()",
    textkey:    "click"
};

hmap["Aanav"] = {
    name:        "AFZ Mitarbeiterportal 3",

    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "click()",
    textkey:    "click"
};

hmap["Anav"] = {
    name:        "AFZ Mitarbeiterportal 4",

    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "click()",
    textkey:    "click"
};

hmap["IMGA:h"] = {
    name:        "AFZ Mitarbeiterportal 5",

    handler:     std_create_click,
    propscript:  { fieldname: [ "innerText", "alt"] },
    imgscript:    "href",

    action:      "click()",
    textkey:    "click_img"
};

hmap["INPUTreset"] = {
    name:        "AFZ Mitarbeiterportal 6",

    handler:     std_create_click,
    propscript:  { fieldname: [ "innerText", "alt"] },
    imgscript:    "href",

    action:      "click()",
    textkey:    "click_img"
};

hmap["INPUTimage"] = {
    name:        "AFZ Mitarbeiterportal 7",

    handler:     std_create_click,
    propscript:  { fieldname: [ "innerText", "alt"] },
    imgscript:    "href",

    action:      "click()",
    textkey:    "click_img"
};

hmap["Amittel"] = {
    name:        "AFZ Mitarbeiterportal 8",

    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "click()",
    textkey:    "click"
};

hmap["Agross"] = {
    name:        "AFZ Mitarbeiterportal 9",

    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "click()",
    textkey:    "click"
};

// =============================== END AFZ ===============================

// ======= Siebel ===============

hmap["DIVbuttonTD"] = {
    name:        "Siebel Button",

    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "click()",
    textkey:    "click"
};

hmap["TDviewtabext"] = {
    name:        "Siebel Tab-Auswahl",

    handler:     std_create_click,
    propscript:  { fieldname: "innerText" },

    action:      "fireEvent('onmousedown');click()",
    textkey:    "click"
};


hmap["R:A"] = {
    name: "EP/List Context Menu",

    textkey: "click_open_context_menu",
    handler: std_create_click,
    propscript: { fieldname: "innerText" },


    action: "fireEvent('oncontextmenu')",
};
