var word_lang_map = new Object;

// values for word_lang == 'de'
word_lang_map["1031"] = {
    standard             : "Standard",

    para_heading         : "Überschrift ",

    para_list               : "Liste",
    para_tcode              : "Standard",
    para_beschreibung       : "Standard",
    para_bubble_text        : "Standard",
    para_bubble_text_long   : "Standard",
    para_bubble_text_action : "Standard",
    para_bubble_text_center : "NormalCentered",

    para_image_caption   : "Beschriftung",
    para_title           : "Titel",

    // not language specific, only in 'de'
    para_image           : "Screenshot",

    para_hinweis_icon    : "Hinweis",
    para_hinweis_text    : "Hinweis",
};

word_lang_map["1033"] = {
    standard             : "Normal",
    para_heading         : "Heading ",

    para_list            : "List",
    para_tcode           : "Normal",
    para_beschreibung    : "Normal",
    para_bubble_text     : "Normal",
    para_bubble_text_long   : "Normal",
    para_bubble_text_action : "Normal",
    para_bubble_text_center : "NormalCentered",
    
    para_image_caption   : "Caption",
    para_title           : "Title",
};

word_lang_map["1036"] = {
    standard             : "Normal",
    para_heading         : "Titre ",

    para_list            : "List",
    para_tcode           : "Normal",
    para_beschreibung    : "Normal",
    para_bubble_text     : "Normal",
    para_bubble_text_long   : "Normal",
    para_bubble_text_action : "Normal",
    para_bubble_text_center : "NormalCentered",

    para_image_caption   : "Legende",
    para_title           : "Titre",
};

function word_trans(name) {
    word_lang = Document.GetWordLanguage();

    var cur_map;

    if (typeof(word_lang_map[word_lang]) == 'object') {
        cur_map = word_lang_map[word_lang];
    } else {
        cur_map = word_lang_map["1031"];
    }

    if (typeof(cur_map[name]) == 'string') {
        return cur_map[name];
    } else if (typeof(word_lang_map["1031"][name]) == 'string') {
        return word_lang_map["1031"][name];
    } else {
        return cur_map["standard"];
    }
}

