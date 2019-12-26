
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
        var res =
            pname in params ? params[pname] :
            pname in this.ctx_.global_params ? this.ctx_.global_params[pname]:
            pname in this.ctx_.tour_params ? this.ctx_.tour_params[pname]:
            "???";
        return res;
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
    s = s.replace(/\r/g, '\\r');
    s = s.replace(/\n/g, '\\n');
    return s;
}

function url_encode(s) {
    s = s.replace(/ /g, '+');
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
    var re_url = /\$@(\w*)\$/g;
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
        while ((param = re_url.exec(res)) != null) {
            changed = true;
            pname = param[1];
            res = res.replace(param[0], url_encode(''+ this.value(pname, params)));
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

function remove_outer_p_tags(str) {
    var str_length = str.length;
    if (str.substring(0, 3).toLowerCase() == "<p>" &&
        str.substring(str_length-4, str_length).toLowerCase() == "</p>") {
        str = str.substr(3,str_length-7);
    }
    return str;
}

function remove_html(txt) {
    var res = txt;
    res = res.replace(/\n/g, '');
    res = res.replace(/<[^>]*>/g, '');
    res = res.replace(/&nbsp;/gi, '');
    res = res.replace(/&lt;/gi, '<');
    res = res.replace(/&gt;/gi, '>');
    return res;
}

Array.prototype.mix = function() {
    if (this.length < 2) return;
    var r, t, j;
    for (j = this.length - 1; j > 0; j--) {
        r = Math.floor(Math.random() * (j + 1));
        t = this[j];
        this[j] = this[r];
        this[r] = t;
    }
}

Array.prototype.copy = function() {
    var new_array = new Array();
    for (var i = 0; i < this.length; i++) {
        new_array[i] = this[i];
    }
    return new_array;
}

function quiz_basic_param_check(pc, c, ctx, quizname) {
    if (c.quiz_on) {
        var mymacro = [];
        c.quizzes.macros.push(mymacro);
        mymacro.type = quizname;
        mymacro.params = pc.params_;
        return true;
    }

    pc.Check("points", "INTEGER", 1);
    pc.Check("title", "TEXT", "");
    pc.Check("quiz_timeout", "INTEGER", 0);
    pc.Check("question", "HTML", "");
    pc.Check("qm_file", "IMAGE_DOC_REL", "");
    pc.Check("qm_width", "INTEGER", -1);
    pc.Check("qm_height", "INTEGER", -1);
    pc.Check("qm_as_question", "BOOL_0_1", 0);
    pc.Check("in_demo", "BOOL_0_1", c.global_params.g_in_demo);
    pc.Check("in_test", "BOOL_0_1", c.global_params.g_in_test);
    pc.Check("in_practice", "BOOL_0_1", c.global_params.g_in_practice);
    pc.Check("in_prax", "BOOL_0_1", c.global_params.g_in_prax);
    pc.Check("feedback_enable", "BOOL_0_1", c.global_params.g_feedback_enable);
    pc.Check("feedback_popup", "BOOL_0_1", c.global_params.g_feedback_popup);
    pc.Check("feedback_correct_solutions", "BOOL_0_1", c.global_params.g_feedback_correct_solutions);
    pc.Check("feedback_pass", "HTML", c.global_params.g_feedback_pass);
    pc.Check("feedback_fail", "HTML", c.global_params.g_feedback_fail);
    pc.Check("feedback_time", "HTML", c.global_params.g_feedback_time);
    pc.Check("quiz_skipping", "BOOL_0_1", c.global_params.g_quiz_skipping);

    if (parseInt(pc.params_.points) < 0) {
        //alert("it is not allowed to enter points < 0");
        return true;
    }

    if (typeof(ctx.pj_global_timeout) == 'undefined' && c.global_params.g_quiz_timeout != 0) {
        ctx.pj_global_timeout = c.global_params.g_quiz_timeout;
    }

    if (typeof(ctx.pj_quiz_numbers) == 'undefined') {
        ctx.pj_quiz_numbers = 1;
        pc.params_.quiz_number = 1;
    } else {
        ctx.pj_quiz_numbers++;
        pc.params_.quiz_number = ctx.pj_quiz_numbers;
    }

    pc.params_.question = remove_outer_p_tags(pc.params_.question);

    var res_str = ["question", "feedback_pass", "feedback_fail", "feedback_time"];
    for (var i = res_str.length - 1; i >= 0; i--) {
        pc.params_[res_str[i]] = c.cfg_resolve_string_against_project(pc.params_[res_str[i]]);
    }

    if (pc.params_.qm_file != "") {
        var m_type = pc.params_.qm_file.split(".")[1];
        pc.params_.qm_file = "doc/" + pc.params_.qm_file;
        pc.params_.qm_file = c.cfg_resolve(pc.params_.qm_file, "project:");
        switch (m_type.toLowerCase()) {
            case "wma":
            case "mp3":
            case "wav":
                pc.params_.qm_file_type = "wma";
                pc.params_.qm_file = pc.params_.qm_file.replace(/%20/g, ' ');
                if (pc.params_.qm_as_question == 1) {
                    //alert("Mediatype Audio not supported with option qm_as_question");
                    return true;
                }
                break;
            case "swf":
                pc.params_.qm_file_type = "swf";
                break;
            case "wmv":
                pc.params_.qm_file_type = "wmv";
                pc.params_.qm_file = pc.params_.qm_file.replace(/%20/g, ' ');
                break;
            case "mov":
                pc.params_.qm_file_type = "mov";
                break;
            case "jpg":
            case "bmp":
            case "gif":
            case "png":
                pc.params_.qm_file_type = "img";
                break;
            default:
                pc.params_.qm_file = "";
                break;
        }
    }

    return false;
}

function quiz_basic_events(quizname, params, c, time) {
    params.quiz_style_dir = c.global_params.g_quiz_style_dir;
    c.ew.fileurl(ctx, time, {
        relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
        url: c.h.EVAL_TEMPLATE("quiz_base_page_url", params)
    });

    time += 200;
    c.ew.loaded(ctx, time, { });
    time += 200;

    c.ew.javascript(ctx, time, {
        relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
        text: c.h.EVAL_TEMPLATE(quizname + "_check_page", params)
    });

    c.ew.javascript(ctx, time, {
        relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
        text: c.h.EVAL_TEMPLATE("quiz_set_question", params)
    });

    if (params.title.length) {
        c.ew.javascript(ctx, time, {
            relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
            text: c.h.EVAL_TEMPLATE("quiz_set_caption", params)
        });
    }

    c.ew.javascript(ctx, time, {
        relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
        text: c.h.EVAL_TEMPLATE("quiz_set_score", params)
    });

    var fb = [
        "quiz_number", "quiz_skipping",
        "quiz_timeout",
        "qm_file", "qm_file_type", "qm_width", "qm_height", "qm_as_question", 
        "feedback_enable", "feedback_popup", "feedback_correct_solutions", "feedback_pass", "feedback_fail", "feedback_time",
    ];
    for (var i = 0; i < fb.length; i++) {
        params.flag_name = fb[i];
        params.flag_data = params[params.flag_name];
        c.ew.javascript(ctx, time, {
            relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
            text: c.h.EVAL_TEMPLATE("quiz_set_flag", params)
        });
    }
}