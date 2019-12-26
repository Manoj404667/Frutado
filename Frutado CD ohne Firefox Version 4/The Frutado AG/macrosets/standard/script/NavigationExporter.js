#use(macro2navstr.js)
#use(std2navmacro.js)
#use(ui_lang.js)

function NavigationExporter() {
}

NavigationExporter.prototype.assets_ = [];
NavigationExporter.prototype.curr_index_ = -1;
NavigationExporter.prototype.fo_x_ = 884;
NavigationExporter.prototype.fo_y_ = 0;

NavigationExporter.prototype.Init = function() {
    this.assets_.length = 0;
    this.curr_index_ = -1;
    
    this.sort_navigation_data_();
}

NavigationExporter.prototype.GetScript = function() {
    var script = startunit2nav_str();
    
    for (var i = 0; i < this.assets_.length; i++) {
        script += asset2nav_str(this.assets_[i].asset_macro, this.assets_[i].caption);
    }
    
    for (var i = 0; i < this.assets_.length; i++) {
        script += ts2ns_str(this.assets_[i].macros, this.assets_[i].leaves_page, this.assets_[i].caption, i);
    }
    
    script += prj_fo_str(this.fo_x_, this.fo_y_);
    
    for (var i = 0; i < this.assets_.length; i++) {
        script += ns_foe_str(this.assets_[i].macros, this.assets_[i].caption, i);
    }
    
    return script;
}

NavigationExporter.prototype.GenerateProject = function() {
    var dispname = Project.DisplayName;
    var prjdir = Project.Directory;
    var pagedir = Project.PagePath;
    var docdir = Project.DocPath;
    
    if (CreateProject(Project.DisplayName + " Navigation", "navigation")) {
        s2n_startunit();
        
        for (var i = 0; i < this.assets_.length; i++) {
            s2n_ts2ns(this.assets_[i].macros, this.assets_[i].leaves_page, this.assets_[i].caption, i, pagedir);
        }
        
        for (var i = 0; i < this.assets_.length; i++) {
            s2n_asset2target(this.assets_[i].asset_macro, this.assets_[i].caption, docdir);
        }
        
        s2n_prj_fo(this.fo_x_, this.fo_y_, dispname, prjdir);
        
        for (var i = 0; i < this.assets_.length; i++) {
            s2n_ns_foe(this.assets_[i].macros, this.assets_[i].caption, i);
        }
    } else {
        alert(ui_trans("no_navmacroset"));
    }
}

NavigationExporter.prototype.sort_navigation_data_ = function() {
    log("NavigationExporter.sort_navigation_data_");
    
    for (var i = 0; i < NumTourstops(); i++) {
        var ts = GetTourstop(i);
        var mac = ts.NextMacro();
    
        while (mac != null) {
            
            if (mac.Template() == "new_page") {
                this.add_asset_(mac, ts);
            } else if (mac.Template() == "start_unit") {
                this.get_ns_params_(mac);
            } else if (this.curr_index_ != -1) {
                this.add_macro_(mac);
            }
            
            mac = ts.NextMacro(mac.TourPosition());
        }
        
        //this.curr_index_ = -1;
    }
}

NavigationExporter.prototype.add_asset_ = function(mac, ts) {
    log("NavigationExporter.add_asset_");
    var index = -1;
    
    if (mac.HasParam("key")) {
        var key = mac.GetParam("key");
        
        if (key != "") {
            index = this.find_asset_index_(key);
            
            if (index == -1) {
                this.assets_.push({asset_macro: mac, caption: this.get_unique_caption_(ts.Caption, ""), macros: [], leaves_page: []});
                index = this.assets_.length - 1;
                
                log("NavigationExporter.add_asset_ - new asset caption: " + this.assets_[index].caption);
            }
        }
    }
    
    if (this.curr_index_ != -1 && this.curr_index_ != index && this.assets_[this.curr_index_].leaves_page.length > 0) {
        this.assets_[this.curr_index_].leaves_page[this.assets_[this.curr_index_].leaves_page.length-1] = 1;
    }
    
    this.curr_index_ = index;
}

NavigationExporter.prototype.add_macro_ = function(mac) {
    log("NavigationExporter.add_macro_");
    
    if (this.curr_index_ != -1 && mac.HasParam("elem_key")) {
        log("NavigationExporter.add_macro_ - macro " + mac.Template() + " added");
        
        this.assets_[this.curr_index_].macros.push(mac);
        this.assets_[this.curr_index_].leaves_page.push(0);
    }
}

NavigationExporter.prototype.get_ns_params_ = function(mac) {
    log("NavigationExporter.get_ns_params_");
    
    if (mac.HasParam("fo_pos")) {
        var pos = mac.GetParam("fo_pos");
        
        this.fo_x_ = pos.x;
        this.fo_y_ = pos.y;
    }
}

NavigationExporter.prototype.find_asset_index_ = function(key) {
    log("NavigationExporter.find_asset_index_");
    
    for (var i = 0; i < this.assets_.length; i++) {
        if (this.assets_[i].asset_macro.GetParam("key") == key) {
            log("NavigationExporter.find_asset_index_ - index is " + i);
            return i;
        }
    }
    
    return -1;
}

NavigationExporter.prototype.get_unique_caption_ = function(cap, prefix) {
    var caption = cap;
    
    if (prefix != "") {
        caption = prefix + " - " + caption;
    }
    
    for (var i = 0; i < this.assets_.length; i++) {
      
      if (this.assets_[i].caption == caption) {
        
        if (prefix == "") {
            prefix = "" + 1;
        } else {
            prefix = prefix + 1;
        }
        
        return this.get_unique_caption_(cap, prefix);
      }
    }
    
    return caption;
}