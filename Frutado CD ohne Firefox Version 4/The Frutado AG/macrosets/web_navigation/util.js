
function ParamChecker(defaults, macro_name, params) {
    this.defaults_ = defaults;
    this.macro_name_ = macro_name;
    this.params_ = params;
}

ParamChecker.prototype.Check = function(pname, param_type, builtin) {
    builtin_ = builtin != undefined ? builtin:
        param_type.indexOf("BOOL") >= 0 ? false:
        param_type.indexOf("INTEGER") >=0 ? 0:
        "";
    if (! (pname in this.params_)) {
        if (this.macro_name_ in this.defaults_) { // macro is defined in defaults
            var macrodefaults = this.defaults_[this.macro_name_];
            if (pname in macrodefaults){ // parameter is defined in macrodefaults
                this.params_[pname] = macrodefaults[pname];
            } else {
                this.params_[pname] = builtin_;
            }
        } else {
            this.params_[pname] = builtin_;
        }
    } 
}

function CtxHelper(context){
    this.ctx_ = context;
    this.value = function(pname, params) {
        return pname in params ? params[pname] : 
            pname in this.ctx_.global_params ? this.ctx_.global_params[pname]:
            "???";
    };
}

CtxHelper.prototype.EVAL_TEMPLATE = function (t, params) {
    var src = this.ctx_.string_templates[t];
    return this.EVAL_STRING(src, params);
}

function js_encode(s) {
    s = s.replace(/\\/g, '\\\\');
    s = s.replace(/'/g, "\\'");
    s = s.replace(/"/g, '\\"');
    return s;
}

function html_encode(s) {
    s = s.replace(/&/g, '&amp;');
    s = s.replace(/>/g, '&gt;');
    s = s.replace(/</g, '&lt;');
    return s;
}

CtxHelper.prototype.EVAL_STRING = function (s, params) {
    var src = s;
    var re_js2 = /\$%%(\w*)\$/g; 
    var re_js = /\$%(\w*)\$/g; 
    var re = /\$(\w*)\$/g; 
    var re_html = /\$#\{(\w*)\}/g; 
    var re2 = /\$\{(\w*)\}/g;
    var re_img = /\$P\{(\w*)\}/g;
    var re_doc = /\$D\{(\w*)\}/g;
    var param;
    var res = src;

    var pname;
    var val;
    changed = true;
    while (changed) {
        changed = false;
        while ((param = re_js2.exec(res)) != null) {
            changed = true;
            pname = param[1];
            res = res.replace(param[0], js_encode(js_encode(''+ this.value(pname, params))));
            // log("RE : " + res);
        }
        while ((param = re_js.exec(res)) != null) {
            changed = true;
            pname = param[1];
            res = res.replace(param[0], js_encode(''+ this.value(pname, params)));
            // log("RE : " + res);
        }
        while ((param = re_html.exec(res)) != null) {
            changed = true;
            pname = param[1];
            res = res.replace(param[0], ''+ html_encode(this.value(pname, params)));
            // log("HTML: " + res);
        }
        while ((param = re.exec(res)) != null) {
            changed = true;
            pname = param[1];
            res = res.replace(param[0], ''+ this.value(pname, params));
            // log("RE : " + res);
        }
        while ((param = re2.exec(res)) != null) {
            changed = true;
            pname = param[1];
            res = res.replace(param[0], ''+this.value(pname, params));
            // log("RE2: " + res);
        }
        while ((param = re_img.exec(res)) != null) {
            changed = true;
            pname = param[1];
            var val = this.value(pname, params);
            if (val.length) {
                res = res.replace(param[0], '<img src="pages/'+ this.value(pname, params) +'"/>');
            } else {
                res = res.replace(param[0], '');
            }
            // log("RE3: " + res);
        }
        while ((param = re_doc.exec(res)) != null) {
            changed = true;
            pname = param[1];
            var val = this.value(pname, params);
            if (val.length) {
                res= res.replace(param[0], '<img src="doc/'+ this.value(pname, params)+'"/>');
            } else {
                res= res.replace(param[0], '');
            }
            // log("RE4: " + res);
        }
    }

    return res;
}

CtxHelper.prototype.BUILD_GLOBALS =function (project_globals, default_globals, builtin_globals) {
    res = new Array();
    for (param in builtin_globals) {
        res[param] = param in project_globals ? project_globals[param] :
            param in default_globals ? default_globals[param] :
            builtin_globals[param];
    };
    return res; 
}


