

function MacroSet() { };

MacroSet.prototype.build_globals = function(c) {
    if (!("global_params" in c)) c.global_params = new Object;
    var pc = new ParamChecker(c.defaults, "global", c.global_params);
    pc.Check("g_highlight_name", "TEXT", "hl" );
    pc.Check("g_highlight_effect", "ENUM", "frame" );
    pc.Check("g_highlight_style", "TEXT", "" );
    pc.Check("g_highlight_fillstyle", "TEXT", "" );
    pc.Check("g_highlight_border", "ENUM", "2" );
    pc.Check("g_highlight_rgb", "COLOR", "FF0000" );
    pc.Check("g_linktextpraxis", "TEXT", "<img src=\"${resource_dir}/next_red.int.gif\" border=0 >" );
    pc.Check("g_back_link", "TEXT", "<img src=\"${resource_dir}/prev_red.int.gif\" border=0 >" );
    pc.Check("g_close_link", "TEXT", "<img src=\"${resource_dir}/close_red.int.gif\" border=0 >" );
    pc.Check("g_alternate_link", "TEXT", "Show Step" );
    pc.Check("g_show_ok_bubble", "BOOL_0_1", 1 );
    pc.Check("g_show_step_bubble", "BOOL_0_1", 0 );
    pc.Check("g_show_mouse", "BOOL_0_1", 0 );
    pc.Check("g_bubblestyle_ok", "SHELF", "_default" );
    pc.Check("g_logging", "BOOL_0_1", 0);
    pc.Check("g_feedback_enable", "BOOL_0_1", 0);
    pc.Check("g_feedback_popup", "BOOL_0_1", 0);
    pc.Check("g_feedback_pass", "HTML", "");
    pc.Check("g_feedback_fail", "HTML", "");
    pc.Check("g_feedback_time", "HTML", "");
    pc.Check("g_quiz_timeout", "INTEGER", 0);
    pc.Check("g_quiz_style_dir", "ENUM", "datango");
    pc.Check("g_feedback_correct_solutions", "BOOL_0_1", 0);
    pc.Check("g_quiz_skipping", "BOOL_0_1", 0);
    pc.Check("g_in_demo", "BOOL_0_1", 1);
    pc.Check("g_in_practice", "BOOL_0_1", 1);
    pc.Check("g_in_test", "BOOL_0_1", 1);
    pc.Check("g_in_prax", "BOOL_0_1", 1);
    pc.Check("g_no_praxis_links", "BOOL_0_1", 0);
}

function timed_alert(c, ctx, time, text) {
    c.ew.javascript(ctx, time, {
        relpos: {FP: "-1", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
        text: "alert('" + text + "')"
    });
}


function trainer_check(c, ctx, time, params) {
    c.ew.javascript(ctx, time, {
        relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
        text:
            "var version = ctx.cfg_config(\'version\');" +
            "var i;" +
            "if (0 <= (i = version.search(/[1-9]\\.[0-9]/))) {" +
            "    version = version.substr(i);" +
            "    if (version < \'5.2.5\') {" +
            "        ctx.cfg_tourerror(\'The macro set used for this tour needs datango Trainer >= 5.2.5\');" +
            "    }" +
            "}"
    });
}

function log_init(c, ctx, time, params) {
    // alert('log_init');
    if (!c.global_params.g_logging) return;
    if (ctx.cfg_config("logurl").length == 0) return;
    //alert('log_init II: ' + ctx.cfg_config("logurl"));

    // get SID
    c.ew.javascript(ctx, time, {
        relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, "") },
    text: c.h.EVAL_TEMPLATE("log_init",
                            {
                                user: ctx.cfg_config("lmuser") || "dummy_user",
                                pwd: ctx.cfg_config("lmpassword") || "dummy_pwd"
                            } )
    });
}

function log_request(c, ctx, time, params, method) {
    if (!c.global_params.g_logging) return;
    if (ctx.cfg_config("logurl").length == 0) return;
    // alert(c.h.EVAL_TEMPLATE("log_" + method, params));

    c.ew.javascript(ctx, time, {
        relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, "") },
        text: c.h.EVAL_TEMPLATE("log_" + method, params)
    });
}

function lms_init(c, ctx, time, params) {
    c.ew.javascript(ctx, time, {
        relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
        text:
            "ctx.pj_fieldcount = 0;" +
            "ctx.pj_triggercount = 0;" +
            "ctx.cfg_setmaxscore(" + params.possible_points + " , " + params.mastery_score + ");" +
            "ctx.mastery_score = " + params.mastery_score+ ";" +
            "ctx.collected_points = 0;"
    });
}

function page_init(c, ctx, time, params) {
    c.ew.javascript(ctx, time, {
        relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
        text: c.h.EVAL_TEMPLATE("init_new_page", params)
    });
}

function init_show_demo(c, ctx, time, params) {
    c.ew.javascript(ctx, time, {
        relpos: {FP: "-1", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
        text:
            "ctx.pj_show_demo = function() {\r\n" +
            "    var ride = this.cfg_config(\"program\");\r\n" +
            "    var demo_config = ride.replace(\".js\", \"_demo_cfg.js\");\r\n" +
            "    if (this.cfg_tourload2(CFG_TOUR_OPTION_WINDOW | CFG_TOUR_OPTION_CURRENT_SUB_ONLY,\r\n" +
            "                            demo_config,\r\n" +
            "                            \'window=&startpage=projects%2fno_pause.html&stoppage=projects%2fquickclose.html\',\r\n" +
            "                            \'fullscreen=0,resizable=1\'))\r\n" +
            "    {\r\n" +
            "        this.cfg_set_exercise_points(0);\r\n" +
            "    }\r\n" +
            "}"
    });
}

function default_highlight(c, ctx, time, position) {
    c.ew.highlight(ctx, time, {
        relpos: position,
        border: c.global_params.g_highlight_border,
        effect: c.global_params.g_highlight_effect,
        object_name: c.global_params.g_highlight_name,
        style: c.global_params.g_highlight_style,
        fillstyle: c.global_params.g_highlight_fillstyle,
        rgbcolor: c.global_params.g_highlight_rgb
    });
}

function register_multi_hl(c, ctx) {
    if (typeof(c.highlights) != 'object') {
        return;
    }

    var hl_name = "phl" + c.highlights.length;
    c.highlights.push(hl_name);
    return hl_name;
}

function remove_multi_hls(c, ctx, time, params) {
    if (typeof(c.highlights) != 'object') {
        return;
    }

    var i;
    for (i = 0; i < c.highlights.length; i++) {
        c.ew.textbubble(ctx, time, { type: "close", object_name: c.highlights[i] });
    }
}

function multi_highlight(c, ctx, time, position) {
    c.ew.highlight(ctx, time, {
        relpos: position,
        border: c.global_params.g_highlight_border,
        effect: c.global_params.g_highlight_effect,
        style: c.global_params.g_highlight_style,
        fillstyle: c.global_params.g_highlight_fillstyle,
        rgbcolor: c.global_params.g_highlight_rgb,
        object_name: register_multi_hl(c, ctx)
    });
}


function bubble(c, ctx, time, params) {
    c.ew.textbubble(ctx, time, {
        relpos: params.bubble_position,
        text: params.bubbletext_expanded,
        textStyle: params.bubble_class,
        customStyle: params.bubble_style,
        orientation: params.bubble_orientation,
        width: params.bubble_width,
        height: params.bubble_height,
        type: "element",
        replace: true,
        movable: false,
        closable: false,
        minimizable: false,
        transparent: false,
        alwaystop: true,
        object_name: "_default",
        cover: true,
        x_frame: true
    });
}

function p_bubble(c, ctx, time, params) {
    c.ew.textbubble(ctx, time, {
        relpos: params.position_bu,
        text: c.h.EVAL_TEMPLATE("bubbletext_p", params),
        textStyle: params.bubble_class_p,
        customStyle: params.bubblestyle_p,
        orientation: params.orientation_p,
        width: params.b_width_p,
        height: params.b_height_p,
        type: "element",
        //style: "comic",
        replace: true,
        movable: false,
        closable: false,
        minimizable: false,
        transparent: false,
        alwaystop: true,
        object_name: "_default",
        cover: true,
        x_frame: true
    });
}

function d_bubble(c, ctx, time, params) {
    c.ew.textbubble(ctx, time, {
        relpos: params.position_b,
        orientation: params.orientation,
        text: c.h.EVAL_TEMPLATE("bubbletext_d", params),
        textStyle: params.bubble_class,
        customStyle: params.bubblestyle_d,
        width: params.b_width,
        height: params.b_height,
        type: "element",
        //style: "comic",
        replace: true,
        movable: false,
        closable: false,
        minimizable: false,
        transparent: false,
        alwaystop: true,
        object_name: "_default",
        cover: true,
        x_frame: true
    });
}


function x_bubble(c, ctx, time, params) {
    c.ew.textbubble(ctx, time, {
        customStyle: params.bubblestyle_d,
        width: params.b_width,
        height: params.b_height,
        relpos: params.position_b,
        orientation: params.orientation,

        text: c.global_params.g_no_praxis_links ? 
            c.h.EVAL_TEMPLATE("bubbletext_d", params) :
            c.h.EVAL_TEMPLATE("bubbletext_x", params),

        textStyle: params.bubble_class,
        type: "element",
        style: "comic",
        replace: true,
        movable: false,
        closable: false,
        minimizable: false,
        transparent: false,
        alwaystop: true,
        object_name: "_default",
        cover: true,
        x_frame: true
    });
}

function step_bubble(c, ctx, time, params) {
    c.ew.textbubble(ctx, time, {
        customStyle: params.bubblestyle_p,
        width: params.b_width_p,
        height: params.b_height_p,
        relpos: params.position_bu,
        text: c.h.EVAL_TEMPLATE("step_bubble", params),
        textStyle: params.bubble_class_p,
        type: "element",
        style: "comic",
        replace: true,
        movable: false,
        closable: false,
        minimizable: false,
        transparent: false,
        orientation: "C",
        width: "160",
        height: "50",
        alwaystop: true,
        cover: true,
        x_frame: true
    });
}

function ok_bubble(c, ctx, time, params) {
    c.ew.textbubble(ctx, time, {
        relpos: params.position_bu,
        customStyle: c.global_params.g_bubblestyle_ok,
        textStyle: "StyleOK",
        type: "element",
        orientation: "C",
        width: "80",
        height: "30",
        style: "comic",
        replace: true,
        alwaystop: true,
        cover: true,
        x_frame: true,
        movable: false,
        closable: false,
        minimizable: false,
        transparent: false,
        text: "<B><CENTER>OK.</CENTER></B>",
        object_name: "ok_bubble"
    });

    c.ew.pause(ctx, time, { type: "timeout", timeout: "1" });

    c.ew.textbubble(ctx, time, { type: "close", object_name: "ok_bubble" });
}

function default_highlight_off(c, ctx, time, params) {
    c.ew.textbubble(ctx, time, {
                relpos: params.position_h, object_name: "hl", type: "close" });
}

function default_bubble_close(c, ctx, time) {
    // timed_alert(c, ctx, time, 'default-bubble-close');

    c.ew.textbubble(ctx, time, { type: "close", object_name: "_default" });
}

function jump_to_target(c, ctx, time, params) {
    c.ew.javascript(ctx, time, {
        relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
        text: c.h.EVAL_TEMPLATE("jump_to_target", params)
    });
}

function clone_jsobject(obj) {
    var cl = new Object;
    for (i in obj) {
        if (typeof(obj[i]) == 'object') {
            cl[i] = clone_jsobject(obj[i]);
        } else {
            cl[i] = obj[i];
        }
    }
    return cl;
}

function move_mouse(c, ctx, time, params) {
    var mouse_pos = clone_jsobject(params.position_h);
    mouse_pos.XY.x = 0.8;
    mouse_pos.XY.y = 0.6;
    c.ew.mouse(ctx, time, {
        relpos: mouse_pos, duration: -1, type: "position"
    });
}

function test_watch(c, ctx, time, params) {
    c.ew.javascript(ctx, time, {
        relpos: {FP: "-1", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
        text: "evt_watch(-1, WATCH_SHOWSCORE | WATCH_HELP | WATCH_DEFAULT | WATCH_COMPLETE_FEEDBACK | WATCH_FORBID_ALL, null, null, null);"
    });
}

function practice_watch(c, ctx, time, params) {
    c.ew.javascript(ctx, time, {
        relpos: {FP: "-1", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
        text: "evt_watch(-1, WATCH_HELP | WATCH_DEFAULT | WATCH_COMPLETE_FEEDBACK | WATCH_FORBID_ALL, null, null, null); "
    });
}

function do_watch(c, ctx, time, params) {
    if (!c.form_mode && !c.branch_mode && !params.full_form) {
        if (c.active_mode == "uebung") {
            practice_watch(c, ctx, time, params);
        } else if (c.active_mode == "test") {
            test_watch(c, ctx, time, params);
        }
    }
}


function default_wait(c, ctx, time, params) {
    c.ew.javascript(ctx, time, {
        relpos: {FP: "-1", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
        text: "evt_wait(-1, null);"
    });
}

function focus_wait(c, ctx, time, params) {
    c.ew.javascript(ctx, time, {
        relpos: {FP: "-1", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
        text: "ctx_window.focus();evt_wait(-1, null);"
    });
}

function add_branch_bubble_d(c, ctx, time, params) {
    if (typeof(c.bubbles) == 'string') {
        c.bubbles += "<BR><CENTER>" + ctx.cfg_tr('EXER_OR') + "</CENTER>";
    } else {
        c.bubbles = '';
    }
    if (params.jump_target.length) {
        c.bubbles += c.h.EVAL_TEMPLATE("demo_branch_link", params);
    } else {
        c.bubbles += c.h.EVAL_TEMPLATE("demo_branch_link_none", params);
    }
}

function add_or_bubble_p(c, ctx, time, params) {
    if (typeof(c.bubbles) == 'string') {
        c.bubbles += "<BR><CENTER>" + ctx.cfg_tr('EXER_OR') + "</CENTER>";
    } else {
        c.bubbles = '';
    }
    c.bubbles += c.h.EVAL_TEMPLATE("bubbletext_p", params);
}

function add_and_bubble_p(c, ctx, time, params) {
    if (typeof(c.bubbles) == 'string') {
        c.bubbles += "<BR><CENTER>" + ctx.cfg_tr('EXER_AND') + "</CENTER>";
    } else {
        c.bubbles = '';
    }
    c.bubbles += c.h.EVAL_TEMPLATE("bubbletext_p", params);
}

function handle_test_practice(c, ctx, time, params) {
    if (c.branch_mode) {
        add_or_bubble_p(c, ctx, time, params);
        if (params.show_hl_p) {
            multi_highlight(c, ctx, time, params.position_h);
        }
    } else if (c.form_mode || params.full_form) {
        add_and_bubble_p(c, ctx, time, params);
        if (params.show_hl_p) {
            multi_highlight(c, ctx, time, params.position_h);
        }
    } else if (params.wait_for_input) {
        if (c.active_mode == "uebung") {
            p_bubble(c, ctx, time, params);
            if (params.show_hl_p) {
                default_highlight(c, ctx, time, params.position_h);
            }
        } else if (c.active_mode == "test") {
            if (c.global_params.g_show_step_bubble) {
                step_bubble(c, ctx, time, params);
            }
        }

        default_wait(c, ctx, time, params);
        default_highlight_off(c, ctx, time, params);

        if (c.active_mode == 'test' && c.global_params.g_show_ok_bubble) {
            ok_bubble(c, ctx, time, params);
        }
    }
}


function multi_macro_end(c, ctx, time, params) {
    if (typeof(c.bubbles) == 'string') {
        params.explanation_p = c.bubbles;
        if (c.active_mode == "uebung" || c.global_params.g_show_step_bubble) {
            p_bubble(c, ctx, time, params);
        }
    }
    default_wait(c, ctx, time, params);
    remove_multi_hls(c, ctx, time, params);
    if (c.active_mode == 'test' && c.global_params.g_show_ok_bubble) {
        ok_bubble(c, ctx, time, params);
    }
}

MacroSet.prototype.start_tourstop = function(c, ctx, time, params) {
    var pc = new ParamChecker(c.defaults, "start_tourstop", params);

    pc.Check("name", "TEXT", "");
    pc.Check("label", "TEXT", "");
    pc.Check("index", "INTEGER", -1);

    c.active_mode = c.mode;
    c.ts_idx = params.index;

    // window.top.document.title = params.label + "(" + c.active_mode + ")";

}

MacroSet.prototype.end_tourstop = function(c, ctx, time, params) {
    var pc = new ParamChecker(c.defaults, "end_tourstop", params);

    // alert("End Tourstop:" + c.active_mode);
}


MacroSet.prototype.start_unit = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "start_unit", params);

    pc.Check("possible_points", "INTEGER", 0);
    pc.Check("mastery_score", "INTEGER", 0);
    pc.Check("task_text", "HTML");
    pc.Check("task_width", "INTEGER", 240);
    pc.Check("task_height", "INTEGER", 0);
    pc.Check("task_orientation", "ORIENTATION_BUBBLE", "NW");
    pc.Check("task_bgcolor", "COLOR", "#FFFFB7");
    pc.Check("in_practice", "BOOL_0_1", 0);
    pc.Check("in_test", "BOOL_0_1", 1);

    trainer_check(c, ctx, time, params);

    log_init(c, ctx, time, params);

    switch(c.active_mode) {
        case "demo":
            lms_init(c, ctx, time, params);

        break;
        case "uebung":
            lms_init(c, ctx, time, params);

            if (params.in_practice) {
                c.ew.textbubble(ctx, time, {
                    text: c.h.EVAL_TEMPLATE("start_unit__bubble_text_task", params),
                    width: params.task_width,
                    height: params.task_height,
                    orientation: params.task_orientation,
                    type: "element",
                    style: "comic",
                    replace: true,
                    movable: false,
                    closable: false,
                    minimizable: false,
                    transparent: false,
                    alwaystop: true,
                    cover: true,
                    x_frame: true,
                    relpos: {FP: "-2", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} }
                });
            }
            break;
        case "test":
            lms_init(c, ctx, time, params);

            init_show_demo(c, ctx, time, params);

            if (params.in_test) {
                c.ew.textbubble(ctx, time, {
                    width: params.task_width,
                    height: params.task_height,
                    orientation: params.task_orientation,
                    text: c.h.EVAL_TEMPLATE("start_unit__bubble_text_task", params),
                    type: "element",
                    style: "comic",
                    replace: true,
                    movable: false,
                    closable: false,
                    minimizable: false,
                    transparent: false,
                    alwaystop: true,
                    cover: true,
                    x_frame: true,
                    relpos: {FP: "-2", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} }
                });
            }
            break;
        case "praxis":
            // Set Focus to Window
            c.ew.javascript(ctx, time, {
                relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
                text: "ctx_window.focus();"
            });
        break;

    };
}


MacroSet.prototype.new_page = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "new_page", params);

    pc.Check("dump_page", "RELATIVE_URL");
    pc.Check("new_step", "TEXT");
    pc.Check("doc_enable", "BOOL_YES_NO", 1);
    pc.Check("doc_heading", "BOOL_YES_NO", 1);
    pc.Check("imagesize", "INTEGER", 100);
    pc.Check("screenshot_file", "IMAGE_DOC_REL");
    pc.Check("screenshot_rect", "POSSIZE");
    pc.Check("screenshot_border", "INTEGER");
    pc.Check("element_type", "TEXT");
    pc.Check("sc_config_file", "TEXT");
    pc.Check("record_window_id", "INTEGER", 0);
    pc.Check("rerec_manual", "BOOL_0_1");


    c.ew.fileurl(ctx, time, {
        url: params.dump_page,
        relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} }
    });

    c.ew.loaded(ctx, time, { });

    c.bubbles = null;
    c.branch_mode = false;
    c.form_mode = false;
    c.highlights = [];

    c.ew.loaded(ctx, time, { });

    log_request(c, ctx, time, { index: c.ts_idx, label: params.new_step }, "page_view");

    page_init(c, ctx, time, params);

    for (var tp in ctx.tour_params) {
            c.ew.javascript(ctx, time, {
            relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
            text: c.h.EVAL_TEMPLATE("apply_tour_param", { name: tp, value: ctx.tour_params[tp]} )
        })
    }
}


MacroSet.prototype.new_window = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "new_window", params);

    pc.Check("dump_page", "RELATIVE_URL");
    pc.Check("new_step", "TEXT");
    pc.Check("dump_win_relpos", "RELPOS_DOCREF");
    pc.Check("dump_win_left", "INTEGER");
    pc.Check("dump_win_top", "INTEGER");
    pc.Check("dump_win_width", "INTEGER");
    pc.Check("dump_win_height", "INTEGER");
    pc.Check("doc_enable", "BOOL_YES_NO", 1);
    pc.Check("doc_heading", "BOOL_YES_NO", 1);
    pc.Check("imagesize", "INTEGER", 100);
    pc.Check("screenshot_file", "IMAGE_DOC_REL");
    pc.Check("screenshot_rect", "POSSIZE");
    pc.Check("screenshot_border", "INTEGER");
    pc.Check("record_window_id", "INTEGER");
    pc.Check("element_type", "TEXT");
    pc.Check("rerec_manual", "BOOL_0_1");

    c.bubbles = null;
    c.branch_mode = false;
    c.form_mode = false;
    c.highlights = [];

    c.ew.window(ctx, time, {
        url: params.dump_page,
        relpos: params.dump_win_relpos,
        left: params.dump_win_left,
        top: params.dump_win_top,
        width: params.dump_win_width,
        height: params.dump_win_height,
        type: "open",
        menubar: "no",
        toolbar: "no",
        location: "no",
        status: "no",
        resizable: "no",
        scrollbars: "no"
    });

    c.ew.loaded(ctx, time, { });

    log_request(c, ctx, time, { index: c.ts_idx, label: params.new_step }, "page_view");

    page_init(c, ctx, time, params);

    for (var tp in ctx.tour_params) {
            c.ew.javascript(ctx, time, {
            relpos: params.dump_win_relpos,
            text: c.h.EVAL_TEMPLATE("apply_tour_param", { name: tp, value: ctx.tour_params[tp]} )
        })
    }
}


MacroSet.prototype.new_window_close = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "new_window_close", params);

    pc.Check("win_relpos", "RELPOS_DOCREF");

    c.ew.window(ctx, time, {
                relpos: params.win_relpos, type: "close" });
}


MacroSet.prototype.explanation = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "explanation", params);

    pc.Check("fieldname", "TEXT");
    pc.Check("fieldicon", "IMAGE_PAGE_REL");
    pc.Check("explanation_d", "HTML");
    pc.Check("explanation_p", "HTML");
    pc.Check("position_h", "RELPOS_RECT");
    pc.Check("in_demo", "BOOL_0_1", 1);
    pc.Check("in_test", "BOOL_0_1", 0);
    pc.Check("in_practice", "BOOL_0_1", 1);
    pc.Check("in_prax", "BOOL_0_1", 1);
    pc.Check("show_hl_d", "BOOL_0_1", 1);
    pc.Check("show_hl_p", "BOOL_0_1", 1);

    pc.Check("position_b", "RELPOS");
    pc.Check("bubble_class", "SHELF", "StyleA");
    pc.Check("bubblestyle_d", "SHELF", "_default");
    pc.Check("b_width", "INTEGER", 180);
    pc.Check("b_height", "INTEGER", 40);
    pc.Check("orientation", "ORIENTATION_BUBBLE", "SE");
    pc.Check("b_duration", "INTEGER", 3);

    pc.Check("position_bu", "RELPOS");
    pc.Check("bubble_class_p", "SHELF", "StyleA");
    pc.Check("bubblestyle_p", "SHELF");
    pc.Check("b_width_p", "INTEGER", 180);
    pc.Check("b_height_p", "INTEGER", 40);
    pc.Check("orientation_p", "ORIENTATION_BUBBLE");
    pc.Check("b_duration_p", "INTEGER", 3);
    pc.Check("doc_enable", "BOOL_YES_NO", 1);
    pc.Check("screenshot_rect", "POSSIZE");
    pc.Check("explanation_d_modified", "BOOL_0_1");
    pc.Check("explanation_p_modified", "BOOL_0_1");

    if ((params.in_demo && c.active_mode == "demo") ||
        (params.in_practice && c.active_mode == "uebung") ||
        (params.in_test && c.active_mode == "test") ||
        (params.in_prax && c.active_mode == "praxis"))
    {

        if (c.active_mode == "demo") {
            if (params.show_hl_d) {
                default_highlight(c, ctx, time, params.position_h);
            }
            d_bubble(c, ctx, time, params);
            if (params.b_duration > 0) {
                c.ew.pause(ctx, time, { timeout: params.b_duration, type: "timeout" });
            }
        } else if (c.active_mode == "praxis")  {
            if (params.show_hl_d) {
                default_highlight(c, ctx, time, params.position_h);
            }
            x_bubble(c, ctx, time, params);
            if (params.b_duration > 0) {
                c.ew.pause(ctx, time, { timeout: params.b_duration, type: "timeout" });
            }
        } else {
            if (params.show_hl_p) {
                default_highlight(c, ctx, time, params.position_h);
            }
            p_bubble(c, ctx, time, params);
            if (params.b_duration_p > 0) {
                c.ew.pause(ctx, time, { timeout: params.b_duration_p, type: "timeout" });
            }
        }

        default_highlight_off(c, ctx, time + duration, params);
        default_bubble_close(c, ctx, time + duration, params);
    }
}


MacroSet.prototype.explanation_long = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "explanation_long", params);

    pc.Check("fieldname", "TEXT");
    pc.Check("fieldicon", "IMAGE_PAGE_REL");
    pc.Check("explanation_d", "HTML");
    pc.Check("type", "ENUM", "none");
    pc.Check("all_like_demo", "BOOL_0_1");

    pc.Check("show_nav_buttons", "BOOL_0_1", 1);
    pc.Check("in_demo", "BOOL_0_1", 1);
    pc.Check("in_practice", "BOOL_0_1", 1);
    pc.Check("in_test", "BOOL_0_1", 1);
    pc.Check("in_prax", "BOOL_0_1", 1);

    pc.Check("position_h", "RELPOS_RECT");
    pc.Check("position_b", "RELPOS");
    pc.Check("bubble_class", "SHELF", "StyleA");
    pc.Check("bubblestyle_d", "SHELF", "_default");
    pc.Check("b_width", "INTEGER", 400);
    pc.Check("b_height", "INTEGER", 40);
    pc.Check("orientation", "ORIENTATION_BUBBLE", "C");
    pc.Check("b_duration", "INTEGER", -1);

    pc.Check("explanation_p", "HTML", params.explanation_d);
    pc.Check("position_bu", "RELPOS", params.position_b);
    pc.Check("bubble_class_p", "SHELF", params.bubble_class);
    pc.Check("bubblestyle_p", "SHELF", params.bubblestyle_d);
    pc.Check("b_width_p", "INTEGER", params.b_width);
    pc.Check("b_height_p", "INTEGER", params.b_height);
    pc.Check("orientation_p", "ORIENTATION_BUBBLE", params.orientation);
    pc.Check("b_duration_p", "INTEGER", params.b_duration);

    pc.Check("show_hl_d", "BOOL_0_1", 0);
    pc.Check("show_hl_p", "BOOL_0_1", 0);

    if ((params.in_demo && c.active_mode == "demo") ||
        (params.in_practice && c.active_mode == "uebung") ||
        (params.in_test && c.active_mode == "test") ||
        (params.in_prax && c.active_mode == "praxis"))
    {

        if (c.active_mode == "demo" || c.active_mode == "praxis" || params.all_like_demo) {
            params.bubbletext =  params.explanation_d;
            params.bubble_position = params.position_b;
            params.bubble_class = params.bubble_class;
            params.bubble_style = params.bubblestyle_d;
            params.bubble_orientation = params.orientation;
            params.bubble_width = params.b_width;
            params.bubble_height = params.b_height;
            params.bubble_duration = params.b_duration;
            params.show_hl = params.show_hl_d;
        } else {
            params.bubbletext =  params.explanation_p;
            params.bubble_position = params.position_bu;
            params.bubble_class = params.bubble_class_p;
            params.bubble_style = params.bubblestyle_p;
            params.bubble_orientation = params.orientation_p;
            params.bubble_width = params.b_width_p;
            params.bubble_height = params.b_height_p;
            params.bubble_duration = params.b_duration_p;
            params.show_hl = params.show_hl_p;
        }

        if (params.show_hl && params.position_h) default_highlight(c, ctx, time, params.position_h);

        if (c.active_mode == "test") {
            if (params.show_nav_buttons) {
                params.bubbletext_expanded = c.h.EVAL_TEMPLATE("explanation_long_nav_forw", params);
            } else {
                params.bubbletext_expanded = c.h.EVAL_TEMPLATE("explanation_long_nonav", params);
            }
        } else if (c.active_mode == "praxis") {
            params.bubbletext_expanded = c.h.EVAL_TEMPLATE("explanation_long_nav_all", params);
        } else {
            if (params.show_nav_buttons) {
                params.bubbletext_expanded = c.h.EVAL_TEMPLATE("explanation_long_nav_all", params);
            } else {
                params.bubbletext_expanded = c.h.EVAL_TEMPLATE("explanation_long_nonav", params);
            }
        }

        bubble(c, ctx, time, params);

        if (params.bubble_duration < 0 || c.active_mode == "praxis") {
            c.ew.pause(ctx, time, { type: "simple" });
        } else if (params.bubble_duration > 0) {
            c.ew.pause(ctx, time, { timeout: params.bubble_duration, type: "timeout" });
        }

        if (params.show_hl) default_highlight_off(c, ctx, time + duration, params);
        default_bubble_close(c, ctx, time + duration, params);
    }
}


MacroSet.prototype.quick_click = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "quick_click", params);

    pc.Check("fieldname", "TEXT");
    pc.Check("fieldicon", "IMAGE_PAGE_REL");
    pc.Check("explanation_p", "HTML");
    pc.Check("action", "ENUM", "lclick");
    pc.Check("position_h", "RELPOS_RECT");
    pc.Check("position_bu", "RELPOS");
    pc.Check("doc_enable", "BOOL_YES_NO", 1);
    pc.Check("screenshot_file", "IMAGE_DOC_REL");
    pc.Check("screenshot_rect", "POSSIZE");
    pc.Check("element_type", "TEXT");
    pc.Check("click_pos", "POSITION");
    pc.Check("jump_target", "TOURSTOP_NAME");
    pc.Check("wait_for_input", "BOOL_0_1", 1);

    switch(c.active_mode) {
        case "demo":
            if (!c.branch_mode) {
                default_highlight(c, ctx, time, params.position_h);

                c.ew.pause(ctx, time, { type: "timeout", timeout: "1" });

                default_highlight_off(c, ctx, time + duration, params);

                jump_to_target(c, ctx, time + duration, params);
            }
        break;
        case "uebung":
        case "test":
            do_watch(c, ctx, time, params);

            default_bubble_close(c, ctx, time, params);

            if (c.form_mode || params.full_form) {
                c.ew.javascript(ctx, time, {
                    text: c.h.EVAL_TEMPLATE("click_trans_pt_form", params),
                    relpos: params.position_h
                });
            } else {
                c.ew.javascript(ctx, time, {
                    text: c.h.EVAL_TEMPLATE("click_trans_pt_standard", params),
                    relpos: params.position_h
                });
            }

            c.ew.javascript(ctx, time, {
                relpos: params.position_h,
                text: c.h.EVAL_TEMPLATE("click__jstext_trig_pt", params)
            });

            if (c.active_mode == "uebung") {
                c.ew.highlight(ctx, time, {
                    relpos: params.position_h,
                    effect: "frame",
                    rgbcolor: "#FF0000",
                    // style: "",
                    // fillstyle: "img: yellow25tr",
                    object_name: register_multi_hl(c, ctx),
                    border: "4"
                });
            }

            handle_test_practice(c, ctx, time, params);

            break;
        break;
        case "praxis":
            default_highlight(c, ctx, time, params.position_h);

            c.ew.pause(ctx, time, { type: "timeout", timeout: "1" });

            default_highlight_off(c, ctx, time, params);

            jump_to_target(c, ctx, time, params);
        break;

    };
}


MacroSet.prototype.click = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "click", params);

    pc.Check("fieldname", "TEXT");
    pc.Check("fieldicon", "IMAGE_PAGE_REL");
    pc.Check("explanation_d", "HTML");
    pc.Check("explanation_p", "HTML");
    pc.Check("hotkey", "TEXT");
    pc.Check("action", "ENUM", "lclick");
    pc.Check("position_h", "RELPOS_RECT");
    pc.Check("show_hl_d", "BOOL_0_1", 1);
    pc.Check("show_hl_p", "BOOL_0_1", 0);
    pc.Check("bubble_class", "SHELF", "StyleA");
    pc.Check("bubblestyle_d", "SHELF", "_default");
    pc.Check("b_width", "INTEGER", 150);
    pc.Check("b_height", "INTEGER", 40);
    pc.Check("orientation", "ORIENTATION_BUBBLE", "SE");
    pc.Check("position_b", "RELPOS");
    pc.Check("b_duration", "INTEGER", 3);
    pc.Check("bubble_class_p", "SHELF", "StyleA");
    pc.Check("bubblestyle_p", "SHELF", "_default");
    pc.Check("b_width_p", "INTEGER", 180);
    pc.Check("b_height_p", "INTEGER", 40);
    pc.Check("orientation_p", "ORIENTATION_BUBBLE", "C");
    pc.Check("position_bu", "RELPOS");
    pc.Check("doc_enable", "BOOL_YES_NO", 1);
    pc.Check("screenshot_file", "IMAGE_DOC_REL");
    pc.Check("screenshot_rect", "POSSIZE");
    pc.Check("element_type", "TEXT");
    pc.Check("click_pos", "POSITION");
    pc.Check("click_count", "INTEGER", 1);
    pc.Check("rerec_manual", "BOOL_0_1");
    pc.Check("explanation_d_modified", "BOOL_0_1");
    pc.Check("explanation_p_modified", "BOOL_0_1");
    pc.Check("jump_target", "TOURSTOP_NAME");
    pc.Check("wait_for_input", "BOOL_0_1", 1);
    pc.Check("full_form", "BOOL_0_1", 0);

    switch(c.active_mode) {
        case "demo":
            if (c.branch_mode) {
                add_branch_bubble_d(c, ctx, time, params);
            } else {
                if (params.show_hl_d) {
                    default_highlight(c, ctx, time, params.position_h);
                }
                d_bubble(c, ctx, time, params);

                if (c.global_params.g_show_mouse) {
                    move_mouse(c, ctx, time, params);
                }

                if (params.b_duration > 0) {
                    c.ew.pause(ctx, time, { timeout: params.b_duration, type: "timeout" });
                }

                default_highlight_off(c, ctx, time + duration, params);
                default_bubble_close(c, ctx, time + duration, params);

                // ???
                jump_to_target(c, ctx, time + duration, params);
            }

        break;
        case "uebung":
        case "test":
            do_watch(c, ctx, time, params);

            default_bubble_close(c, ctx, time, params);

            if (params.action == 'drag') {
                c.form_mode = true;
            }

            if (c.form_mode || params.full_form) {
                c.ew.javascript(ctx, time, {
                    text: c.h.EVAL_TEMPLATE("click_trans_pt_form", params),
                    relpos: params.position_h
                });
            } else {
                if (c.active_mode == "test" && c.global_params.g_show_step_bubble) {
                    step_bubble(c, ctx, time, params);
                }

                c.ew.javascript(ctx, time, {
                    text: c.h.EVAL_TEMPLATE("click_trans_pt_standard", params),
                    relpos: params.position_h
                });
            }

            c.ew.javascript(ctx, time, {
                relpos: params.position_h,
                text: c.h.EVAL_TEMPLATE("click__jstext_trig_pt", params)
            });

            if (params.hotkey.length) {
                c.ew.javascript(ctx, time, {
                    text: c.h.EVAL_TEMPLATE("click_trig_pt_key", params),
                    relpos: {FP: "-1", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} }
                });
            }

            handle_test_practice(c, ctx, time, params);

            if (params.action == 'drop') {
                c.form_mode = false;
                multi_macro_end(c, ctx, time, params);
            }


        break;
        case "praxis":
            if (params.show_hl_d) {
                default_highlight(c, ctx, time, params.position_h);
            }

            x_bubble(c, ctx, time, params);
            c.ew.pause(ctx, time, { type: "simple" });

            default_highlight_off(c, ctx, time, params);
            default_bubble_close(c, ctx, time, params);

            jump_to_target(c, ctx, time, params);
        break;

    };
}


MacroSet.prototype.click_SAP = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "click_SAP", params);

    pc.Check("fieldname", "TEXT");
    pc.Check("fieldicon", "IMAGE_PAGE_REL");
    pc.Check("transaction_code", "TEXT");
    pc.Check("explanation_d", "HTML");
    pc.Check("explanation_p", "HTML");
    pc.Check("position_h", "RELPOS_RECT");
    pc.Check("position_tc", "RELPOS", {FP: "0: 0", EP: new ctx.ElementRef("", "forms", 0, 0, "eep_path=\"1: 0: 0: 0: 0: 0: 0: 0: 0: 0: 0: 2: 0: 0: 0: 0: 3: 0\";\r\n" +
            "eep_options=3;eep_version=\"4.4\";\r\n" +
            "eep_atts={id: \"OKCodeField\",name: \"~ToolbarOkCode\",tagName: \"INPUT\",type: \"text\"};\r\n" +
            "eep_coll={n: \"forms\",i: 0,ii: 0};\r\n" +
            "eep_parents=[{eep_path: \"1: 0: 0: 0: 0: 0: 0: 0: 0: 0: 0: 2: 0: 0: 0: 0: 3\",eep_atts: {tagName: \"TD\"}}\r\n" +
            ",{eep_path: \"1: 0: 0: 0: 0: 0: 0: 0: 0: 0: 0: 2: 0: 0: 0: 0\",eep_atts: {tagName: \"TR\"}}\r\n" +
            ",{eep_path: \"1: 0: 0: 0: 0: 0: 0: 0: 0: 0: 0: 2: 0: 0: 0\",eep_atts: {tagName: \"TBODY\"}}\r\n" +
            ",{eep_path: \"1: 0: 0: 0: 0: 0: 0: 0: 0: 0: 0: 2: 0: 0\",eep_atts: {id: \"webguiStdButtonBar\",tagName: \"TABLE\"}}\r\n" +
            ",{eep_path: \"1: 0: 0: 0: 0: 0: 0: 0: 0: 0: 0: 2: 0\",eep_atts: {tagName: \"TD\"}}\r\n" +
            ",{eep_path: \"1: 0: 0: 0: 0: 0: 0: 0: 0: 0: 0: 2\",eep_atts: {tagName: \"TR\"}}\r\n" +
            ",{eep_path: \"1: 0: 0: 0: 0: 0: 0: 0: 0: 0: 0\",eep_atts: {tagName: \"TBODY\"}}\r\n" +
            ",{eep_path: \"1: 0: 0: 0: 0: 0: 0: 0: 0: 0\",eep_atts: {tagName: \"TABLE\"}}\r\n" +
            ",{eep_path: \"1: 0: 0: 0: 0: 0: 0: 0: 0\",eep_atts: {tagName: \"TD\"}}\r\n" +
            ",{eep_path: \"1: 0: 0: 0: 0: 0: 0: 0\",eep_atts: {tagName: \"TR\"}}\r\n" +
            ",{eep_path: \"1: 0: 0: 0: 0: 0: 0\",eep_atts: {tagName: \"TBODY\"}}\r\n" +
            ",{eep_path: \"1: 0: 0: 0: 0: 0\",eep_atts: {id: \"webguiToolbar\",tagName: \"TABLE\"}}\r\n" +
            ",{eep_path: \"1: 0: 0: 0: 0\",eep_atts: {tagName: \"TD\"}}\r\n" +
            ",{eep_path: \"1: 0: 0: 0\",eep_atts: {tagName: \"TR\"}}\r\n" +
            ",{eep_path: \"1: 0: 0\",eep_atts: {tagName: \"TBODY\"}}\r\n" +
            ",{eep_path: \"1: 0\",eep_atts: {name: \"toolbarform\",tagName: \"FORM\"}}\r\n" +
            ",{eep_path: \"1\",eep_atts: {id: \"webguiPage\",tagName: \"TABLE\"}}\r\n" +
            "];\r\n" +
            "eep_siblingTags=\"\";"), XY: {x: 0.000000, y: 0.000000} , DocXY: {x: 0.050248, y: 0.059846} , XY2: {x: 1.000000, y: 1.000000} , DocXY2: {x: 0.252644, y: 0.094484} , Off: {x: 0, y: 0} });
    pc.Check("show_hl_d", "BOOL_0_1", 1);
    pc.Check("show_hl_p", "BOOL_0_1", 0);
    pc.Check("bubble_class", "SHELF", "StyleA");
    pc.Check("bubblestyle_d", "SHELF", "_default");
    pc.Check("b_width", "INTEGER", 150);
    pc.Check("b_height", "INTEGER", 40);
    pc.Check("orientation", "ORIENTATION_BUBBLE", "SE");
    pc.Check("position_b", "RELPOS");
    pc.Check("b_duration", "INTEGER", 3);
    pc.Check("bubble_class_p", "SHELF", "StyleA");
    pc.Check("bubblestyle_p", "SHELF", "_default");
    pc.Check("b_width_p", "INTEGER", 180);
    pc.Check("b_height_p", "INTEGER", 40);
    pc.Check("orientation_p", "ORIENTATION_BUBBLE", "C");
    pc.Check("position_bu", "RELPOS");
    pc.Check("doc_enable", "BOOL_YES_NO", 1);
    pc.Check("screenshot_file", "IMAGE_DOC_REL");
    pc.Check("screenshot_rect", "POSSIZE");
    pc.Check("element_type", "TEXT");
    pc.Check("click_pos", "POSITION");
    pc.Check("rerec_manual", "BOOL_0_1");
    pc.Check("explanation_d_modified", "BOOL_0_1");
    pc.Check("explanation_p_modified", "BOOL_0_1");
    pc.Check("jump_target", "TOURSTOP_NAME");
    pc.Check("wait_for_input", "BOOL_0_1", 1);

    switch(c.active_mode) {
        case "demo":
            if (c.branch_mode) {
                add_branch_bubble_d(c, ctx, time, params);
            } else {
                if (params.show_hl_d) {
                    default_highlight(c, ctx, time, params.position_h);
                }

                d_bubble(c, ctx, time, params);

                c.ew.pause(ctx, time, { timeout: params.b_duration, type: "timeout" });

                default_highlight_off(c, ctx, time + duration, params);
                default_bubble_close(c, ctx, time + duration, params);

                // ???
                jump_to_target(c, ctx, time + duration, params);
            }

        break;
        case "uebung":
        case "test":
            do_watch(c, ctx, time, params);

            default_bubble_close(c, ctx, time, params);

            if (c.form_mode) {
                alert("click_SAP not useful in form_mode");
            } else {
                c.ew.javascript(ctx, time, {
                    relpos: params.position_h,
                    text: c.h.EVAL_TEMPLATE("click_SAP__jstext_trans_pt", params)
                });

                c.ew.javascript(ctx, time, {
                    relpos: params.position_h,
                    text: c.h.EVAL_TEMPLATE("click_SAP__jstext_trig_pt", params)
                });

                c.ew.javascript(ctx, time, {
                    relpos: params.position_tc,
                    text: c.h.EVAL_TEMPLATE("click_SAP__jstext_trig_tcode_pt", params)
                });
            }

            handle_test_practice(c, ctx, time, params);
        break;

        case "praxis":
            if (params.show_hl_d) {
                default_highlight(c, ctx, time, params.position_h);
            }

            x_bubble(c, ctx, time, params);

            c.ew.pause(ctx, time, { type: "simple" });

            default_highlight_off(c, ctx, time, params);
            default_bubble_close(c, ctx, time, params);

            jump_to_target(c, ctx, time, params);
        break;

    };
}


MacroSet.prototype.key_press = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "key_press", params);

    pc.Check("key_name", "TEXT");
    pc.Check("key_desc", "TEXT");
    pc.Check("explanation_d", "HTML");
    pc.Check("explanation_p", "HTML");
    pc.Check("position_h", "RELPOS_RECT");
    pc.Check("bubble_class", "SHELF", "StyleA");
    pc.Check("bubblestyle_d", "SHELF", "_default");
    pc.Check("b_width", "INTEGER", 150);
    pc.Check("b_height", "INTEGER", 40);
    pc.Check("orientation", "ORIENTATION_BUBBLE", "C");
    pc.Check("position_b", "RELPOS");
    pc.Check("b_duration", "INTEGER", 3);
    pc.Check("bubble_class_p", "SHELF", "StyleA");
    pc.Check("bubblestyle_p", "SHELF", "_default");
    pc.Check("b_width_p", "INTEGER", 180);
    pc.Check("b_height_p", "INTEGER", 40);
    pc.Check("orientation_p", "ORIENTATION_BUBBLE", "C");
    pc.Check("position_bu", "RELPOS");
    pc.Check("doc_enable", "BOOL_YES_NO", 1);
    pc.Check("explanation_d_modified", "BOOL_0_1");
    pc.Check("explanation_p_modified", "BOOL_0_1");
    pc.Check("jump_target", "TOURSTOP_NAME");
    pc.Check("wait_for_input", "BOOL_0_1", 1);
    pc.Check("full_form", "BOOL_0_1", 0);

    switch(c.active_mode) {
        case "demo":
            if (c.branch_mode) {
                add_branch_bubble_d(c, ctx, time, params);
            } else {
                d_bubble(c, ctx, time, params);

                c.ew.pause(ctx, time, { timeout: params.b_duration, type: "timeout" });

                default_bubble_close(c, ctx, time + duration, params);

                jump_to_target(c, ctx, time + duration, params);
            }
        break;
        case "uebung":
        case "test":
            do_watch(c, ctx, time, params);

            default_bubble_close(c, ctx, time, params);


            if (c.active_mode == 'test' && c.global_params.g_show_step_bubble) {
                step_bubble(c, ctx, time, params);
            }

            if (c.form_mode || params.full_form) {
                c.ew.javascript(ctx, time, {
                    relpos: params.position_h,
                    text: c.h.EVAL_TEMPLATE("key_press_trans_pt_form", params)
                });
            } else {
                c.ew.javascript(ctx, time, {
                    relpos: params.position_h,
                    text: c.h.EVAL_TEMPLATE("key_press_trans_pt_standard", params)
                });
            }

            c.ew.javascript(ctx, time, {
                relpos: params.position_h,
                text: c.h.EVAL_TEMPLATE("key_press__jstext_trig_pt", params)
            });


            handle_test_practice(c, ctx, time, params);
        break;
        case "praxis":
            x_bubble(c, ctx, time, params);

            c.ew.pause(ctx, time, { type: "simple" });

            default_bubble_close(c, ctx, time, params);

            jump_to_target(c, ctx, time, params);
        break;

    };
}


MacroSet.prototype.input_text = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "input_text", params);

    pc.Check("fieldname", "TEXT");
    pc.Check("fieldicon", "IMAGE_PAGE_REL");
    pc.Check("text_d", "TEXT");
    pc.Check("regexp", "TEXT");
    pc.Check("explanation_d", "HTML");
    pc.Check("explanation_p", "HTML");
    pc.Check("position_h", "RELPOS_RECT");
    pc.Check("position_af", "RELPOS_ELEMREF");
    pc.Check("confirmation_tab", "BOOL_0_1", 1);
    pc.Check("confirmation_enter", "BOOL_0_1");
    pc.Check("affirmation_button", "BOOL_0_1");
    pc.Check("show_hl_d", "BOOL_0_1", 1);
    pc.Check("show_hl_p", "BOOL_0_1", 0);
    pc.Check("bubble_class", "SHELF", "StyleA");
    pc.Check("bubblestyle_d", "SHELF", "_default");
    pc.Check("b_width", "INTEGER", 180);
    pc.Check("b_height", "INTEGER", 40);
    pc.Check("orientation", "ORIENTATION_BUBBLE", "SE");
    pc.Check("position_b", "RELPOS");
    pc.Check("b_duration", "INTEGER", 3);
    pc.Check("bubble_class_p", "SHELF", "StyleA");
    pc.Check("bubblestyle_p", "SHELF", "_default");
    pc.Check("b_width_p", "INTEGER", 180);
    pc.Check("b_height_p", "INTEGER", 40);
    pc.Check("orientation_p", "ORIENTATION_BUBBLE", "C");
    pc.Check("position_bu", "RELPOS");
    pc.Check("doc_enable", "BOOL_YES_NO", 1);
    pc.Check("screenshot_file", "IMAGE_DOC_REL");
    pc.Check("overlay_pos", "POSITION");
    pc.Check("screenshot_rect", "POSSIZE");
    pc.Check("element_type", "TEXT");
    pc.Check("click_pos", "POSITION");
    pc.Check("rerec_manual", "BOOL_0_1");
    pc.Check("explanation_d_modified", "BOOL_0_1");
    pc.Check("explanation_p_modified", "BOOL_0_1");
    pc.Check("jump_target", "TOURSTOP_NAME");
    pc.Check("wait_for_input", "BOOL_0_1", 1);
    pc.Check("set_focus", "BOOL_0_1", 1);
    pc.Check("animated", "BOOL_0_1", 1);
    pc.Check("full_form", "BOOL_0_1", 0);

    switch(c.active_mode) {
        case "demo":
            if (c.branch_mode) {
                add_branch_bubble_d(c, ctx, time, params);
            } else {
                if (params.show_hl_d) {
                    default_highlight(c, ctx, time, params.position_h);
                }

                d_bubble(c, ctx, time, params);

                c.ew.javascript(ctx, time, {
                    relpos: params.position_h,
                    text: "style.backgroundImage = \'none\';"
                });

                if (c.global_params.g_show_mouse) {
                    move_mouse(c, ctx, time, params);
                }

                c.ew.formtext(ctx, time, {
                    relpos: params.position_h,
                    text: params.text_d,
                    autoduration: params.animated,
                    autoduration: params.animated,
                    comment: "Texteingabe",
                    suppressHandler: "1",
                    start: "0",
                    end: "-1"
                });

                c.ew.pause(ctx, time, { timeout: params.b_duration, type: "timeout" });

                default_highlight_off(c, ctx, time + duration, params);
                default_bubble_close(c, ctx, time + duration, params);

                jump_to_target(c, ctx, time + duration, params);
            }
        break;
        case "uebung":
        case "test":
            do_watch(c, ctx, time, params);

            default_bubble_close(c, ctx, time, params);

            c.ew.javascript(ctx, time, {
                relpos: params.position_h,
                text: c.h.EVAL_TEMPLATE("input_text_init_trans", params)
            });

            if (c.form_mode || params.full_form) {
                c.ew.javascript(ctx, time, {
                    relpos: params.position_h,
                    text: c.h.EVAL_TEMPLATE("input_text_trans_pt_form", params)
                });
            } else {
                c.ew.javascript(ctx, time, {
                    relpos: params.position_h,
                    text: c.h.EVAL_TEMPLATE("input_text_trans_pt_standard", params)
                });

                var have_trigger = false;

                if (params.confirmation_tab) {
                    c.ew.javascript(ctx, time, {
                        text: c.h.EVAL_TEMPLATE("input_text_trig_pt_tab", params),
                        relpos: params.position_h
                    });
                    have_trigger = true;
                }

                if (params.confirmation_enter) {
                    c.ew.javascript(ctx, time, {
                        text: c.h.EVAL_TEMPLATE("input_text_trig_pt_enter", params),
                        relpos: params.position_h
                    });
                    have_trigger = true;
                }

                if (params.affirmation_button) {
                    c.ew.javascript(ctx, time, {
                        text: c.h.EVAL_TEMPLATE("input_text_trig_pt_button", params),
                        relpos: params.position_af
                    });
                    have_trigger = true;
                }

                if (!have_trigger) {
                    c.ew.javascript(ctx, time, {
                        text: c.h.EVAL_TEMPLATE("input_text_trig_pt_none", params),
                        relpos: params.position_h
                    });
                }
            }

            if (!(c.form_mode || params.full_form || c.branch_mode)) {
                if (params.set_focus) {
                    c.ew.javascript(ctx, time, {
                        relpos: params.position_h,
                        text: "focus();"
                    });
                }
            }

            handle_test_practice(c, ctx, time, params);

        break;
        case "praxis":

            if (params.show_hl_d) {
                default_highlight(c, ctx, time, params.position_h);
            }

            x_bubble(c, ctx, time, params);

            c.ew.javascript(ctx, time, {
                relpos: params.position_h,
                text: "style.backgroundImage = \'none\';"
            });


            c.ew.formtext(ctx, time, {
                relpos: params.position_h,
                text: params.text_d,
                comment: "Texteingabe",
                suppressHandler: "1",
                start: "0",
                end: "-1"
            });


            c.ew.pause(ctx, time, { type: "simple" });

            default_highlight_off(c, ctx, time, params);
            default_bubble_close(c, ctx, time, params);

            jump_to_target(c, ctx, time, params);
        break;

    };
}


MacroSet.prototype.select_single = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "select_single", params);

    pc.Check("fieldname", "TEXT");
    pc.Check("fieldicon", "IMAGE_PAGE_REL");
    pc.Check("choose_nr", "INTEGER", 0);
    pc.Check("choose_text", "TEXT");
    pc.Check("explanation_d", "HTML", "");
    pc.Check("explanation_p", "HTML", "");
    pc.Check("position_h", "RELPOS");
    pc.Check("show_hl_d", "BOOL_0_1", 1);
    pc.Check("show_hl_p", "BOOL_0_1", 0);
    pc.Check("bubble_class", "SHELF", "StyleA");
    pc.Check("bubblestyle_d", "SHELF", "_default");
    pc.Check("b_width", "INTEGER", 180);
    pc.Check("b_height", "INTEGER", 40);
    pc.Check("orientation", "ORIENTATION_BUBBLE", "SE");
    pc.Check("position_b", "RELPOS");
    pc.Check("b_duration", "INTEGER", 3);
    pc.Check("bubble_class_p", "SHELF", "StyleA");
    pc.Check("bubblestyle_p", "SHELF", "_default");
    pc.Check("b_width_p", "INTEGER", 180);
    pc.Check("b_height_p", "INTEGER", 40);
    pc.Check("orientation_p", "ORIENTATION_BUBBLE", "C");
    pc.Check("position_bu", "RELPOS");
    pc.Check("doc_enable", "BOOL_YES_NO", 1);
    pc.Check("screenshot_file", "IMAGE_DOC_REL");
    pc.Check("screenshot_rect", "POSSIZE");
    pc.Check("overlay_pos", "POSITION");
    pc.Check("element_type", "TEXT");
    pc.Check("click_pos", "POSITION");
    pc.Check("rerec_manual", "BOOL_0_1");
    pc.Check("explanation_d_modified", "BOOL_0_1");
    pc.Check("explanation_p_modified", "BOOL_0_1");
    pc.Check("jump_target", "TOURSTOP_NAME");
    pc.Check("wait_for_input", "BOOL_0_1", 1);
    pc.Check("animated", "BOOL_0_1", 1);
    pc.Check("full_form", "BOOL_0_1", 0);

    switch(c.active_mode) {
        case "demo":
            if (c.branch_mode) {
                add_branch_bubble_d(c, ctx, time, params);
            } else {
                if (params.show_hl_d) {
                    default_highlight(c, ctx, time, params.position_h);
                }

                d_bubble(c, ctx, time, params);

                c.ew.formselect1(ctx, time, {
                    relpos: params.position_h,
                    selected: params.choose_nr,
                    autoduration: params.animated,
                    duration: "0", suppressHandler: "1"
                });


                c.ew.pause(ctx, time, { timeout: params.b_duration, type: "timeout" });

                default_highlight_off(c, ctx, time + duration, params);
                default_bubble_close(c, ctx, time + duration, params);

                jump_to_target(c, ctx, time + duration, params);
            }
        break;
        case "uebung":
        case "test":
            do_watch(c, ctx, time, params);

            default_bubble_close(c, ctx, time, params);

            c.ew.javascript(ctx, time, {
                relpos: params.position_h,
                text: c.h.EVAL_TEMPLATE("select_single_init_tracker", params)
            });

            if (params.full_form || c.form_mode) {
                c.ew.javascript(ctx, time, {
                    relpos: params.position_h,
                    text: c.h.EVAL_TEMPLATE("select_single_trans_pt_form", params)
                });
            } else {
                c.ew.javascript(ctx, time, {
                    relpos: params.position_h,
                    text: c.h.EVAL_TEMPLATE("select_single_trans_pt_standard", params)
                });
                c.ew.javascript(ctx, time, {
                    relpos: params.position_h,
                    text: c.h.EVAL_TEMPLATE("select_single__jstext_trig_pt", params)
                });
            }

            handle_test_practice(c, ctx, time, params);
        break;
        case "praxis":

            if (params.show_hl_d) {
                default_highlight(c, ctx, time, params.position_h);
            }

            x_bubble(c, ctx, time, params);

            c.ew.formselect1(ctx, time, {
                relpos: params.position_h,
                selected: params.choose_nr,
                auto_duration: params.animated,
                duration: "0", autoduration: "1", suppressHandler: "1"
            });

            c.ew.pause(ctx, time, { type: "simple" });

            default_highlight_off(c, ctx, time, params);
            default_bubble_close(c, ctx, time, params);

            jump_to_target(c, ctx, time, params);
        break;

    };
}


MacroSet.prototype.input_radio = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "input_radio", params);

    pc.Check("fieldname", "TEXT");
    pc.Check("fieldicon", "IMAGE_PAGE_REL");
    pc.Check("choose_bool", "TEXT");
    pc.Check("explanation_d", "HTML");
    pc.Check("explanation_p", "HTML");
    pc.Check("position_h", "RELPOS_ELEMREF");
    pc.Check("show_hl_d", "BOOL_0_1", 1);
    pc.Check("show_hl_p", "BOOL_0_1", 0);
    pc.Check("bubble_class", "SHELF", "StyleA");
    pc.Check("bubblestyle_d", "SHELF", "_default");
    pc.Check("b_width", "INTEGER", 180);
    pc.Check("b_height", "INTEGER", 40);
    pc.Check("orientation", "ORIENTATION_BUBBLE", "SE");
    pc.Check("position_b", "RELPOS");
    pc.Check("b_duration", "INTEGER", 3);
    pc.Check("bubble_class_p", "SHELF", "StyleA");
    pc.Check("bubblestyle_p", "SHELF", "_default");
    pc.Check("b_width_p", "INTEGER", 180);
    pc.Check("b_height_p", "INTEGER", 40);
    pc.Check("orientation_p", "ORIENTATION_BUBBLE", "C");
    pc.Check("position_bu", "RELPOS");
    pc.Check("doc_enable", "BOOL_YES_NO", 1);
    pc.Check("screenshot_file", "IMAGE_DOC_REL");
    pc.Check("overlay_pos", "POSITION");
    pc.Check("screenshot_rect", "POSSIZE");
    pc.Check("element_type", "TEXT");
    pc.Check("click_pos", "POSITION");
    pc.Check("rerec_manual", "BOOL_0_1");
    pc.Check("explanation_d_modified", "BOOL_0_1");
    pc.Check("explanation_p_modified", "BOOL_0_1");
    pc.Check("jump_target", "TOURSTOP_NAME");
    pc.Check("wait_for_input", "BOOL_0_1", 1);
    pc.Check("full_form", "BOOL_0_1", 0);

    switch(c.active_mode) {
        case "demo":
            if (c.branch_mode) {
                add_branch_bubble_d(c, ctx, time, params);
            } else {
                if (c.global_params.g_show_mouse) {
                    move_mouse(c, ctx, time, params);
                }

                if (params.show_hl_d) {
                    default_highlight(c, ctx, time, params.position_h);
                }

                d_bubble(c, ctx, time, params);

                c.ew.formcheck(ctx, time, {
                    relpos: params.position_h,
                    checked: params.choose_bool,
                    suppressHandler: "0"
                });

                c.ew.pause(ctx, time, { timeout: params.b_duration, type: "timeout" });

                default_highlight_off(c, ctx, time + duration, params);
                default_bubble_close(c, ctx, time + duration, params);

                jump_to_target(c, ctx, time + duration, params);
            }
        break;
        case "uebung":
        case "test":
            do_watch(c, ctx, time, params);

            default_bubble_close(c, ctx, time, params);

            c.ew.javascript(ctx, time, {
                relpos: params.position_h,
                text: c.h.EVAL_TEMPLATE("input_radio_init_trans", params)
            });

            if (params.full_form || c.form_mode) {
                c.ew.javascript(ctx, time, {
                    relpos: params.position_h,
                    text: c.h.EVAL_TEMPLATE("input_radio_trans_pt_form", params)
                });

            } else {
                c.ew.javascript(ctx, time, {
                    relpos: params.position_h,
                    text: c.h.EVAL_TEMPLATE("input_radio_trans_pt_standard", params)
                });
                c.ew.javascript(ctx, time, {
                    relpos: params.position_h,
                    text: c.h.EVAL_TEMPLATE("input_radio__jstext_trig_p", params)
                });
            }

            handle_test_practice(c, ctx, time, params);
        break;
        case "praxis":

            if (params.show_hl_d) {
                default_highlight(c, ctx, time, params.position_h);
            }

            x_bubble(c, ctx, time, params);

            c.ew.formcheck(ctx, time, {
                relpos: params.position_h,
                checked: params.choose_bool,
                suppressHandler: "0"
            });


            c.ew.pause(ctx, time, { type: "simple" });

            default_highlight_off(c, ctx, time, params);
            default_bubble_close(c, ctx, time, params);

            jump_to_target(c, ctx, time, params);
        break;

    };
}


MacroSet.prototype.scroll_hor = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "scroll_hor", params);

    pc.Check("scrollleft", "INTEGER", 1000);
    pc.Check("position_h", "RELPOS");
    pc.Check("explanation_d", "HTML");
    pc.Check("show_hl_d", "BOOL_0_1", 0);
    pc.Check("show_hl_p", "BOOL_0_1", 0);
    pc.Check("bubble_class", "SHELF", "StyleA");
    pc.Check("bubblestyle_d", "SHELF", "_default");
    pc.Check("b_width", "INTEGER", 180);
    pc.Check("b_height", "INTEGER", 40);
    pc.Check("orientation", "ORIENTATION_BUBBLE", "NW");
    pc.Check("position_b", "RELPOS");
    pc.Check("b_duration", "INTEGER", 3);
    pc.Check("doc_enable", "BOOL_YES_NO", 1);
    pc.Check("imagesize", "INTEGER", 100);
    pc.Check("element_type", "TEXT", "HScroll");
    pc.Check("screenshot_file", "IMAGE_DOC_REL");
    pc.Check("caption", "TEXT");
    pc.Check("screenshot_rect", "POSSIZE");
    pc.Check("screenshot_border", "INTEGER");
    pc.Check("explanation_d_modified", "BOOL_0_1");

    if ((params.show_hl_d && (c.active_mode == "demo" || c.active_mode == "praxis")) ||
        (params.show_hl_p && (c.active_mode == "uebung" || c.active_mode == "test"))
       )
    {
        default_highlight(c, ctx, time, params.position_h);
    }

    if (c.active_mode == "praxis") {
        x_bubble(c, ctx, time, params);
        c.ew.pause(ctx, time, { type: "simple" });
    } else {
        d_bubble(c, ctx, time, params);
        c.ew.pause(ctx, time, { timeout: params.b_duration, type: "timeout" });
    }

    default_highlight_off(c, ctx, time, params);
    default_bubble_close(c, ctx, time, params);

    c.ew.javascript(ctx, time, {
        relpos: params.position_h,
        text: c.h.EVAL_TEMPLATE("scroll_hor__jstext_scroll", params)
    });
}


MacroSet.prototype.scroll_vert = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "scroll_vert", params);

    pc.Check("scrolltop", "INTEGER", 1000);
    pc.Check("position_h", "RELPOS");
    pc.Check("explanation_d", "HTML");
    pc.Check("show_hl_d", "BOOL_0_1", 0);
    pc.Check("show_hl_p", "BOOL_0_1", 0);
    pc.Check("bubble_class", "SHELF", "StyleA");
    pc.Check("bubblestyle_d", "SHELF", "_default");
    pc.Check("b_width", "INTEGER", 180);
    pc.Check("b_height", "INTEGER", 40);
    pc.Check("orientation", "ORIENTATION_BUBBLE", "NW");
    pc.Check("position_b", "RELPOS");
    pc.Check("b_duration", "INTEGER", 3);
    pc.Check("doc_enable", "BOOL_YES_NO", 1);
    pc.Check("imagesize", "INTEGER", 100);
    pc.Check("element_type", "TEXT", "HScroll");
    pc.Check("screenshot_file", "IMAGE_DOC_REL");
    pc.Check("caption", "TEXT");
    pc.Check("screenshot_rect", "POSSIZE");
    pc.Check("screenshot_border", "INTEGER");
    pc.Check("explanation_d_modified", "BOOL_0_1");

    if ((params.show_hl_d && (c.active_mode == "demo" || c.active_mode == "praxis")) ||
        (params.show_hl_p && (c.active_mode == "uebung" || c.active_mode == "test"))
       )
    {
        default_highlight(c, ctx, time, params.position_h);
    }

    if (c.active_mode == "praxis") {
        x_bubble(c, ctx, time, params);
        c.ew.pause(ctx, time, { type: "simple" });
    } else {
        d_bubble(c, ctx, time, params);
        c.ew.pause(ctx, time, { timeout: params.b_duration, type: "timeout" });
    }

    default_highlight_off(c, ctx, time, params);
    default_bubble_close(c, ctx, time, params);

    c.ew.javascript(ctx, time, {
        relpos: params.position_h,
        text: c.h.EVAL_TEMPLATE("scroll_vert__jstext_scroll", params)
    });
}


MacroSet.prototype.goto_tourstop = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "goto_tourstop", params);

    pc.Check("jump_target", "TOURSTOP_NAME");

    jump_to_target(c, ctx, time, params);
}


MacroSet.prototype.end_unit = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "end_unit", params);

    pc.Check("ende", "TEXT");
    pc.Check("last_page_pause", "INTEGER", 0);

    if (params.last_page_pause > 0) {
        c.ew.pause(ctx, time, { timeout: params.last_page_pause, type: "timeout" });
    }

    log_request(c, ctx, time, { }, "finish");

    if (c.active_mode == "demo" || c.active_mode == "praxis") {
        c.ew.javascript(ctx, time, {
            relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
            text: "ctx.cfg_tourend();"
        });
    } else {
        c.ew.javascript(ctx, time, {
            relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
            text: "var score;\r\n" +
                "if (score = cfg_getscore()) {\r\n" +
                "    ctx.collected_points = score.current;\r\n" +
                "    ctx.possible_points = score.max;\r\n" +
                "    ctx.result_scaled = score.scaled;\r\n" +
                "}\r\n" +
                "ctx.cfg_tourend();\r\n"
        });
    };
}


MacroSet.prototype.kurs = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "kurs", params);

    pc.Check("titel", "TEXT");
    pc.Check("bezeichnung", "TEXT");
}


MacroSet.prototype.transaction_info = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "transaction_info", params);

    pc.Check("tcode", "TEXT");
    pc.Check("sap_path", "TEXT");
}


MacroSet.prototype.screenshot_part = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "screenshot_part", params);

    pc.Check("imagesize", "INTEGER", 100);
    pc.Check("screenshot_file", "IMAGE_DOC_REL");
    pc.Check("caption", "TEXT");
    pc.Check("screenshot_rect", "POSSIZE");
    pc.Check("show_actions", "BOOL_TRUE_FALSE", 0);
    pc.Check("screenshot_border", "INTEGER");
}


MacroSet.prototype.hinweis = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "hinweis", params);

    pc.Check("type", "ENUM", "hinweis");
    pc.Check("text", "HTML");
}


MacroSet.prototype.beschreibung = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "beschreibung", params);

    pc.Check("text", "HTML");
}


MacroSet.prototype.doc_caption = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "doc_caption", params);

    pc.Check("caption", "TEXT");
    pc.Check("type", "TEXT");
}


MacroSet.prototype.free_marker = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "free_marker", params);

    pc.Check("screenshot_rect", "POSSIZE");
    pc.Check("text", "HTML");
    pc.Check("orientation", "ORIENTATION_BUBBLE", "E");
}


MacroSet.prototype.arrow = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "arrow", params);

    pc.Check("screenshot_rect", "POSSIZE");
    pc.Check("orientation", "INTEGER");
}


MacroSet.prototype.page_break = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "page_break", params);
}


MacroSet.prototype.info_page = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "info_page", params);

    pc.Check("title", "TEXT");
    pc.Check("explanation_d", "HTML");
    pc.Check("b_width", "INTEGER", 360);
    pc.Check("dump_win_relpos", "RELPOS_DOCREF");
    pc.Check("type", "ENUM");

    c.ew.fileurl(ctx, time, {
        relpos: params.dump_win_relpos,
        url: c.h.EVAL_TEMPLATE("info_page__res_url", params)
    });

    c.ew.loaded(ctx, time, { });

    c.ew.javascript(ctx, time, {
        relpos: params.dump_win_relpos,
        text: c.h.EVAL_TEMPLATE("info_page__js_page", params)
    });

    c.ew.pause(ctx, time, { type: "simple" });
}


MacroSet.prototype.swf_page = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "swf_page", params);

    pc.Check("swf_file", "RELATIVE_URL");
    pc.Check("swf_width", "INTEGER", "640");
    pc.Check("swf_height", "INTEGER", "480");
    pc.Check("in_demo", "BOOL_0_1", 1);
    pc.Check("in_test", "BOOL_0_1", 0);
    pc.Check("in_practice", "BOOL_0_1", 1);
    pc.Check("in_prax", "BOOL_0_1", 1);

    if ((params.in_demo && c.active_mode == "demo") ||
        (params.in_practice && c.active_mode == "uebung") ||
        (params.in_test && c.active_mode == "test") ||
        (params.in_prax && c.active_mode == "praxis"))
    {
        c.ew.fileurl(ctx, time, {
            relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
            url: c.h.EVAL_TEMPLATE("swf_base_page_url", params)
        });

            c.ew.loaded(ctx, time, { });

        c.ew.javascript(ctx, time, {
            relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
            text: c.h.EVAL_TEMPLATE("swf_page_add_embed", params)
        });

        c.ew.pause(ctx, time, { type: "simple" });
    }
}


MacroSet.prototype.form_on = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "form_on", params);

    if (c.active_mode == "uebung") {
        practice_watch(c, ctx, time, params);
    } else if (c.active_mode == "test") {
        test_watch(c, ctx, time, params);
    }

    c.ew.javascript(ctx, time, {
        relpos: {FP: "-1", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
        text: c.h.EVAL_TEMPLATE("init_form_mode", params)
    });

    c.form_mode = true;
}


MacroSet.prototype.form_off = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "form_off", params);

    c.ew.javascript(ctx, time, {
        relpos: {FP: "-1", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
        text: c.h.EVAL_TEMPLATE("end_form_mode", params)
    });

    switch(c.active_mode) {
        case "demo":
        case "praxis":
        break;
        case "uebung":
        case "test":
            multi_macro_end(c, ctx, time, params);
            break;
        break;

    };

    c.form_mode = false;
}



MacroSet.prototype.branch_on = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "branch_on", params);

    c.branch_mode = true;

    if (c.active_mode == "uebung") {
        practice_watch(c, ctx, time, params);
    } else if (c.active_mode == "test") {
        test_watch(c, ctx, time, params);
    }

    switch(c.active_mode) {
        case "demo":
        case "praxis":
        break;
        case "uebung":
        case "test":
        break;
    };
}


MacroSet.prototype.branch_off = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "branch_off", params);

    pc.Check("bubble_class", "SHELF", "StyleA");
    pc.Check("bubblestyle_d", "SHELF", "_default");
    pc.Check("b_width", "INTEGER", 200);
    pc.Check("b_height", "INTEGER", 200);
    pc.Check("orientation", "ORIENTATION_BUBBLE", "C");
    pc.Check("position_b", "RELPOS");
    pc.Check("b_duration", "INTEGER", 3);
    pc.Check("bubble_class_p", "SHELF", "StyleA");
    pc.Check("bubblestyle_p", "SHELF", "_default");
    pc.Check("b_width_p", "INTEGER", 200);
    pc.Check("b_height_p", "INTEGER", 200);
    pc.Check("orientation_p", "ORIENTATION_BUBBLE", "C");
    pc.Check("position_bu", "RELPOS");

    switch(c.active_mode) {
        case "demo":
        case "praxis":
            if (typeof(c.bubbles) == 'string') {
                params.explanation_d =  c.bubbles;
                d_bubble(c, ctx, time, params);
                c.ew.pause(ctx, time, { type: "simple" });
            } else {
                // alert('no bubble-text found');
            }
        break;
        case "uebung":
        case "test":
            multi_macro_end(c, ctx, time, params);
        break;

    };
    c.branch_mode = false;
}

MacroSet.prototype.mode_change = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "mode_change", params);

    pc.Check("in_demo_to", "ENUM", "demo");
    pc.Check("in_uebung_to", "ENUM", "uebung");
    pc.Check("in_test_to", "ENUM", "test");
    pc.Check("in_praxis_to", "ENUM", "praxis");

    switch(c.mode) {
        case "demo":
            c.active_mode = params.in_demo_to;
        break;
        case "praxis":
            c.active_mode = params.in_praxis_to;
        break;
        case "uebung":
            c.active_mode = params.in_uebung_to;
        break;
        case "test":
            c.active_mode = params.in_test_to;
        break;
    };
}

MacroSet.prototype.mode_change_end = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "mode_change", params);

    c.active_mode = c.mode;
}

MacroSet.prototype.mchoice = function(c, ctx, time, duration, params) {
    var quizname = "mchoice";
    var max_answers = 6;

    var pc = new ParamChecker(c.defaults, quizname, params);
    if (quiz_basic_param_check(pc, c, ctx, quizname)) return;

    for (var i = 1; i <= max_answers; i++) {
        var id = "answer_"+i;

        pc.Check(id, "TEXT", "");
        pc.Check(id + "_correct", "BOOL_0_1", 0);
    }
    pc.Check("shuffle_solutions", "BOOL_0_1", 0);
    pc.Check("force_multiple_choice", "BOOL_0_1", 0);
   
    var num_corr_answers = 0;
    for (var i = 1; i <= max_answers; i++) {
        if (params["answer_" + i + "_correct"]) {
            num_corr_answers++;

            if (params["answer_" + i] == "") {
                //alert("Quiz Error: You selected an empty answer to be correct.");
                return;
            }
        }
    }

    if (num_corr_answers == 0) {
        //alert("Quiz Error: You have to select a correct answer.");
        return;
    }

    if ((params.in_demo && c.active_mode == "demo") ||
        (params.in_practice && c.active_mode == "uebung") ||
        (params.in_test && c.active_mode == "test") ||
        (params.in_prax && c.active_mode == "praxis"))
    {
        quiz_basic_events(quizname, params, c, time);    

        var shuffle = [];
        for (var i = 0; i < max_answers; i++) {
            shuffle.push(i + 1);
        }
        if (params.shuffle_solutions == 1 && shuffle.length > 1) {
            var xyz = shuffle.copy();
            do {
                shuffle.mix();
            } while (shuffle.join("") == xyz.join(""));
        }

        for (var i = j = 1; i <= max_answers; i++) {
            var pname = 'answer_' + shuffle[i - 1];
            if (params[pname] != "") {
                params.answer = params[pname];
                c.ew.javascript(ctx, time, {
                    relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
                    text: c.h.EVAL_TEMPLATE("quiz_add_answer", params)
                });

                params.flag_name = "correct_answer_" + j++;
                params.flag_data = params[pname + '_correct'];
                c.ew.javascript(ctx, time, {
                    relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
                    text: c.h.EVAL_TEMPLATE("quiz_set_flag", params)
                });
            }
        }

        var fb = "force_multiple_choice";
        params.flag_name = fb;
        params.flag_data = params[params.flag_name];
        c.ew.javascript(ctx, time, {
            relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
            text: c.h.EVAL_TEMPLATE("quiz_set_flag", params)
        });

        c.ew.javascript(ctx, time, {
            relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
            text: "ctx_window.quiz_enable('" + quizname + "');"
        });

        c.ew.pause(ctx, time, { type: "simple" });
    };
}

MacroSet.prototype.sqmaquiz = function(c, ctx, time, duration, params) {
    var quizname = "sqmaquiz";    
    var max_answers = 8;

    var pc = new ParamChecker(c.defaults, quizname, params);
    if (quiz_basic_param_check(pc, c, ctx, quizname)) return;

    pc.Check("answer_type", "ENUM", "qt_comma_list");

    var p2;
    var p3;
    switch(params.answer_type) {
        case "at_comma_list":
        case "at_regexp":
        case "at_text":
        case "at_cs_text":
        case "at_cs_comma_list":
            p2 = "TEXT";
            p3 = "";
            break;
        case "at_integer":
            p2 = "INTEGER";
            p3 = 0;
            break;
        case "at_float":
            p2 = "FLOAT";
            p3 = 0.0;
            break;
        default:
            //alert("Quiz Error: Answer_type '" + params.answer_type + "' is not correct.");
            return;
    }

    for (var i = 1; i <= max_answers; i++) {
        pc.Check("answer_"+i, p2, p3);
        if (params["answer_" + i] != "") {
            switch (params.answer_type) {
                case "at_integer":
                    if (params["answer_" + i].search(/^(?:<(?:>|=)?|>=?)?\d+$/) == -1 &&
                        params["answer_" + i].search(/^\d+-\d+$/) == -1) {
                        //alert("Quiz Error: Required answer (" + params["answer_" + i] + ") does not match question type (integer).");
                        return;
                    }
                    break;
                case "at_float":
                    params["answer_" + i] = params["answer_" + i].replace(/,/g, ".");
                    if (params["answer_" + i].search(/^(?:<(?:>|=)?|>=?)?\d+(?:\.\d+)?$/) == -1 &&
                        params["answer_" + i].search(/^\d+(?:\.\d+)?-\d+(?:\.\d+)?$/) == -1) {
                        //alert("Quiz Error: Required answer (" + params["answer_" + i] + ") does not match question type (float).");
                        return;
                    }
                    break;
                case "at_comma_list":
                case "at_cs_comma_list":
                    var answ = params["answer_" + i].split(",");
                    for (var j = 0; j < answ.length; j++) {
                        answ[j] = answ[j].replace(/^( )*/, "");
                        answ[j] = answ[j].replace(/( )*$/, "");
                    }
                    params["answer_" + i] = answ.join(",");
                    break;
            }
        }
    }

    if ((params.in_demo && c.active_mode == "demo") ||
        (params.in_practice && c.active_mode == "uebung") ||
        (params.in_test && c.active_mode == "test") ||
        (params.in_prax && c.active_mode == "praxis"))
    {
        quiz_basic_events(quizname, params, c, time);

        for (var i = 1; i <= max_answers; i++) {
            var pname = 'answer_' + i;
            if (params[pname] != "") {
                params.answer = params[pname];
                c.ew.javascript(ctx, time, {
                    relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
                    text: c.h.EVAL_TEMPLATE("quiz_add_answer", params)
                });
            }
        }

        var fb = "answer_type";
        params.flag_name = fb;
        params.flag_data = params[params.flag_name];
        c.ew.javascript(ctx, time, {
            relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
            text: c.h.EVAL_TEMPLATE("quiz_set_flag", params)
        });

        c.ew.javascript(ctx, time, {
            relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
            text: "ctx_window.quiz_enable('" + quizname + "');"
        });

        c.ew.pause(ctx, time, { type: "simple" });
    };
}

MacroSet.prototype.fibquiz = function(c, ctx, time, duration, params) {
    var quizname = "fibquiz";
    var max_answers = 8;

    var pc = new ParamChecker(c.defaults, quizname, params);
    if (quiz_basic_param_check(pc, c, ctx, quizname)) return;

    pc.Check("shuffle_solutions", "BOOL_0_1", 0);
    pc.Check("fibtext", "HTML", "");
    params.fibtext = remove_outer_p_tags(params.fibtext);
    for (var i = 1; i <= max_answers; i++) {
        pc.Check("answer_" + i, "TEXT", "");
    }
    pc.Check("quiz_type", "ENUM", "qt_text");
    pc.Check("one_for_all", "BOOL_0_1", 0);

    params.fibtext = c.cfg_resolve_string_against_project(params.fibtext);

    if (params.fibtext == "") {
        //alert("Quiz Error: Text with blanks may not be empty.");
        return;
    } else if (params.fibtext.search("___") == -1) {
        //alert("Quiz Error: Text with blanks must include at least one answer-slot '___'.");
        return;
    } else {
        var x = params.fibtext.split("___");
        var count = 0;
        for (var i = 1; i <= max_answers; i++) {
            if (params["answer_" + i] != "") {
                count++;

                if (params.quiz_type == "qt_drop_down" || params.quiz_type =="qt_drag_drop") {
                    var answ = params["answer_" + i].split(",");
                    var found_correct = false;
                    for (var j = 0; j < answ.length; j++) {
                        answ[j] = answ[j].replace(/^( )*/, "");
                        answ[j] = answ[j].replace(/( )*$/, "");
                        if (answ[j].substr(0,1) == '*') {
                            found_correct = true;
                        }
                    }
                    if (!found_correct) {
                        //alert("Quiz Error: You have to select an answer as correct by using *");
                        return;
                    }
                    params["answer_" + i] = answ.join(",");
                }
            }
        }

        if (params.one_for_all == 0) {
            if (count + 1 != x.length) {
                //alert("Quiz Error: Number of answer-slots '___' and number of answers must be equal.");
                return;
            }

            if (params.shuffle_solutions == 1) {
                if (params.quiz_type == "qt_text" || params.quiz_type == "qt_cs_text") {
                    //alert("Quiz Error: Quiz_type '" + params.quiz_type + "' is not allowed with setting shuffle_solutions.");
                    return;
                }
                for (var i = 1; i <= max_answers; i++) {
                    if (params["answer_" + i] != "") {
                        
                        var parts = params["answer_" + i].split(",");
                        if (parts.length > 1) {
                            var xyz = parts.copy();
                            do {
                                parts.mix();
                            } while (parts.join("") == xyz.join(""));
                        }
                        params["answer_" + i] = parts.join(",");
                    }
                }
            }
        } else {
            if (params.quiz_type == "qt_text" || params.quiz_type == "qt_cs_text") {
                //alert("Quiz Error: Quiz_type '" + params.quiz_type + "' is not allowed with setting one_for_all.");
                return;
            }
            if (params.answer_1 == "") {
                //alert("Quiz Error: Answer_1 may not be empty with setting one_for_all.");
                return;
            }

            var answ = params.answer_1.split(",");
            var count_correct = 0;
            for (var i = j = 0; i < answ.length; i++) {
                if (answ[i].substr(0, 1) == '*') {
                    count_correct++;
                    if (params.shuffle_solutions == 1) {
                        answ[i] = "*" + (++j) + "_" + answ[i].substr(1);
                    }
                }
            }
            if (count_correct + 1 != x.length) {
                //alert("Quiz Error: Number of answer-slots '___' and number of answers must be equal.");
                return;
            }
            if (params.shuffle_solutions == 1 && answ.length > 1) {
                var xyz = answ.copy();
                do {
                    answ.mix();
                } while (answ.join("") == xyz.join(""));
                params.answer_1 = answ.join(",");
            }
        }
    }

    if ((params.in_demo && c.active_mode == "demo") ||
        (params.in_practice && c.active_mode == "uebung") ||
        (params.in_test && c.active_mode == "test") ||
        (params.in_prax && c.active_mode == "praxis"))
    {
        quiz_basic_events(quizname, params, c, time);

        for (var i = 1; i <= max_answers; i++) {
            var pname = 'answer_' + i;
            if (params[pname] != "") {
                params.answer = params[pname];
                c.ew.javascript(ctx, time, {
                    relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
                    text: c.h.EVAL_TEMPLATE("quiz_add_answer", params)
                });
            }
        }

        var fb = ["quiz_type", "one_for_all", "shuffle_solutions", "fibtext"];
        for (var i = 0; i < fb.length; i++) {
            params.flag_name = fb[i];
            params.flag_data = params[params.flag_name];
            c.ew.javascript(ctx, time, {
                relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
                text: c.h.EVAL_TEMPLATE("quiz_set_flag", params)
            });
        }

        c.ew.javascript(ctx, time, {
            relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
            text: "ctx_window.quiz_enable('" + quizname + "');"
        });

        c.ew.pause(ctx, time, { type: "simple" });
    };
}

MacroSet.prototype.matchquiz = function(c, ctx, time, duration, params) {
    var quizname = "matchquiz";
    var max_answers = 8;

    var pc = new ParamChecker(c.defaults, quizname, params);
    pc.Check("matchquestion", "HTML", "");
    pc.params_.question = params.matchquestion;
    if (quiz_basic_param_check(pc, c, ctx, quizname)) return;

    for (var i = 1; i <= max_answers; i++) {
        var q = "question_" + i;
        var a = "answer_" + i;
        pc.Check(q, "HTML", "");
        pc.Check(a, "HTML", "");
        params[q] = remove_outer_p_tags(params[q]);
        params[a] = remove_outer_p_tags(params[a]);
        params[q] = c.cfg_resolve_string_against_project(params[q]);
        params[a] = c.cfg_resolve_string_against_project(params[a]);

        if (params[q] == "" && params[a] != "" ||
            params[q] != "" && params[a] == "") {
            //alert("Quiz Error: Each question must have an answer and each answer must have a question.");
            return;
        }
    }
    pc.Check("quiz_type", "ENUM", "qt_drop_down");

    if ((params.in_demo && c.active_mode == "demo") ||
        (params.in_practice && c.active_mode == "uebung") ||
        (params.in_test && c.active_mode == "test") ||
        (params.in_prax && c.active_mode == "praxis"))
    {
        quiz_basic_events(quizname, params, c, time);

        for (var i = 1; i <= max_answers; i++) {
            var qname = 'question_' + i;
            var aname = 'answer_' + i;
            if (params[aname] != "" && params[qname] != "") {
                params.question_n = params[qname];
                params.answer_n = params[aname];
                c.ew.javascript(ctx, time, {
                    relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
                    text: c.h.EVAL_TEMPLATE("quiz_add_question_answer_pair", params)
                });
            }
        }

        var fb = "quiz_type";
        params.flag_name = fb;
        params.flag_data = params[params.flag_name];
        c.ew.javascript(ctx, time, {
            relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
            text: c.h.EVAL_TEMPLATE("quiz_set_flag", params)
        });

        c.ew.javascript(ctx, time, {
            relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
            text: "ctx_window.quiz_enable('" + quizname + "');"
        });

        c.ew.pause(ctx, time, { type: "simple" });
    };
}

MacroSet.prototype.connquiz = function(c, ctx, time, duration, params) {
    var quizname = "connquiz";
    var max_answers = 8;

    var pc = new ParamChecker(c.defaults, quizname, params);
    pc.Check("connquestion", "HTML", "");
    pc.params_.question = params.connquestion;
    if (quiz_basic_param_check(pc, c, ctx, quizname)) return;

    for (var i = 1; i <= max_answers; i++) {
        var q = "question_" + i;
        var a = "answer_" + i;
        pc.Check(q, "HTML", "");
        pc.Check(a, "HTML", "");
        params[q] = remove_outer_p_tags(params[q]);
        params[a] = remove_outer_p_tags(params[a]);
        params[q] = c.cfg_resolve_string_against_project(params[q]);
        params[a] = c.cfg_resolve_string_against_project(params[a]);

        if (params[q] == "" && params[a] != "" ||
            params[q] != "" && params[a] == "") {
            //alert("Quiz Error: Each question must have an answer and each answer must have a question.");
            return;
        }
    }

    if ((params.in_demo && c.active_mode == "demo") ||
        (params.in_practice && c.active_mode == "uebung") ||
        (params.in_test && c.active_mode == "test") ||
        (params.in_prax && c.active_mode == "praxis"))
    {
        quiz_basic_events(quizname, params, c, time);

        for (var i = 1; i <= max_answers; i++) {
            var qname = 'question_' + i;
            var aname = 'answer_' + i;
            if (params[aname] != "" && params[qname] != "") {
                params.question_n = params[qname];
                params.answer_n = params[aname];
                c.ew.javascript(ctx, time, {
                    relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
                    text: c.h.EVAL_TEMPLATE("quiz_add_question_answer_pair", params)
                });
            }
        }

        c.ew.javascript(ctx, time, {
            relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
            text: "ctx_window.quiz_enable('" + quizname + "');"
        });

        c.ew.pause(ctx, time, { type: "simple" });
    };
}

MacroSet.prototype.mixquiz = function(c, ctx, time, duration, params) {
    var quizname = "mixquiz";
    var max_answers = 8;

    var pc = new ParamChecker(c.defaults, quizname, params);
    if (quiz_basic_param_check(pc, c, ctx, quizname)) return;

    var count_answers = 0;
    for (var i = 1; i <= max_answers; i++) {
        pc.Check("answer_" + i, "TEXT", "");
        if (params["answer_" + i] != "") count_answers++;
    }
    pc.Check("quiz_alignment", "ENUM", "qa_horizontal");
    pc.Check("quiz_type", "ENUM", "qt_drop_down");

    if (count_answers < 2) {
        //alert("Quiz Error: You have to specify at least two answers!");
        return;
    }

    if ((params.in_demo && c.active_mode == "demo") ||
        (params.in_practice && c.active_mode == "uebung") ||
        (params.in_test && c.active_mode == "test") ||
        (params.in_prax && c.active_mode == "praxis"))
    {
        quiz_basic_events(quizname, params, c, time);    
    
        for (var i = 1; i <= max_answers; i++) {
            var aname = 'answer_' + i;
            if (params[aname] != "") {
                params.answer = params[aname];
                c.ew.javascript(ctx, time, {
                    relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
                    text: c.h.EVAL_TEMPLATE("quiz_add_answer", params)
                });
            }
        }

        var fb = ["quiz_type", "quiz_alignment"];
        for (var i = 0; i < fb.length; i++) {
            params.flag_name = fb[i];
            params.flag_data = params[params.flag_name];
            c.ew.javascript(ctx, time, {
                relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
                text: c.h.EVAL_TEMPLATE("quiz_set_flag", params)
            });
        }

        c.ew.javascript(ctx, time, {
            relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
            text: "ctx_window.quiz_enable('" + quizname + "');"
        });

        c.ew.pause(ctx, time, { type: "simple" });
    };
}

MacroSet.prototype.scalequiz = function(c, ctx, time, duration, params) {
    var quizname = "scalequiz";

    var pc = new ParamChecker(c.defaults, quizname, params);
    if (quiz_basic_param_check(pc, c, ctx, quizname)) return;

    pc.Check("range", "TEXT", "");
    pc.Check("answer", "TEXT", "");

    var a = params.answer;
    var r = params.range;
    if (a == "") {
        //alert("Quiz Error: You have to specify an answer!");
        return;
    }
    if (r == "") {
        //alert("Quiz Error: You have to specify the range!");
        return;
    }
    if (a.search(/^(\d+)$/) == -1 &&
        a.search(/^(\d+)-(\d+)$/) == -1 &&
        a.search(/^<(\d+)$/) == -1 &&
        a.search(/^>(\d+)$/) == -1) {
        //alert("Quiz Error: Required answer (" + params.answer + ") does not match question type (integer).");
        return;
    }
    if (r.search(/^(\d+)-(\d+)$/) == -1) {
        //alert("Quiz Error: Range (" + params.range + ") does not match required format (min-max).");
        return;
    }
    var h = r.split("-");
    if (h[0] > parseInt(a) || h[1] < parseInt(a)) {
        //alert("Quiz Error: Answer (" + a + ") is not in range (" + r + ").");
        return;
    }

    if ((params.in_demo && c.active_mode == "demo") ||
        (params.in_practice && c.active_mode == "uebung") ||
        (params.in_test && c.active_mode == "test") ||
        (params.in_prax && c.active_mode == "praxis"))
    {
        quiz_basic_events(quizname, params, c, time);

        c.ew.javascript(ctx, time, {
            relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
            text: c.h.EVAL_TEMPLATE("quiz_add_answer", params)
        });

        params.answer = params.range;
        c.ew.javascript(ctx, time, {
            relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
            text: c.h.EVAL_TEMPLATE("quiz_add_answer", params)
        });

        c.ew.javascript(ctx, time, {
            relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
            text: "ctx_window.quiz_enable('" + quizname + "');"
        });

        c.ew.pause(ctx, time, { type: "simple" });
    };
}

MacroSet.prototype.gridquiz = function(c, ctx, time, duration, params) {
    var quizname = "gridquiz";
    var max_answers = 8;

    var pc = new ParamChecker(c.defaults, quizname, params);
    if (quiz_basic_param_check(pc, c, ctx, quizname)) return;

    pc.Check("shuffle_solutions", "BOOL_0_1", 0);
    pc.Check("grid_list", "TEXT", "");
    if (params.grid_list == "") {
        //alert("Quiz Error: You have to specify some answers for the grid!");
        return;
    }
    for (var i = 1; i <= max_answers; i++) {
        pc.Check("question_" + i, "TEXT", "");
        pc.Check("answer_" + i, "TEXT", "");

        if (params["question_" + i] == "" && params["answer_" + i] != "" ||
            params["question_" + i] != "" && params["answer_" + i] == "") {
            //alert("Quiz Error: Each question must have an answer and each answer must have a question.");
            return;
        }
    }

    var h = params.grid_list.split(",");
    for (var j = 1; j <= max_answers; j++) {
        if (params["answer_" + j] != "") {
            if (params["answer_" + j].search(/^(\d+)$/) == -1) {
                //alert("Quiz Error: Your grid answer " + params["answer_" + j] + " is not required type Integer");
                return;
            } else if (parseInt(params["answer_" + j]) < 1 || parseInt(params["answer_" + j]) > h.length) {
                //alert("Quiz Error: Your grid answer " + params["answer_" + j] + " is not in 1 - " + h.length + " for grid: " + params.grid_list);
                return;
            }
        }
    }

    if (params.shuffle_solutions == 1) {
        for (var i = 0; i < h.length; i++) {
            h[i] = (i + 1) + "_" + h[i];
        }
        if (h.length > 1) {
            var xyz = h.copy();
            do {
                h.mix();
            } while (h.join("") == xyz.join(""));
        }
        for (var i = 1; i <= max_answers; i++) {
            if (params["answer_" + i] != "") {
                for (var j = 0; j < h.length; j++) {
                    if (parseInt(params["answer_" + i]) == parseInt(h[j])) {
                        params["answer_" + i] = j + 1;
                        break;
                    }
                }
            }
        }
        for (var i = 0; i < h.length; i++) {
            var nbr = parseInt(h[i]);
            h[i] = h[i].substr(nbr.toString().length + 1);
        }
        params.grid_list = h.join(",");
    }

    if ((params.in_demo && c.active_mode == "demo") ||
        (params.in_practice && c.active_mode == "uebung") ||
        (params.in_test && c.active_mode == "test") ||
        (params.in_prax && c.active_mode == "praxis"))
    {
        quiz_basic_events(quizname, params, c, time);

        for (var i = 1; i <= max_answers; i++) {
            var qname = 'question_' + i;
            var aname = 'answer_' + i;
            if (params[aname] != "" && params[qname] != "") {
                params.question_n = params[qname];
                params.answer_n = params[aname];
                c.ew.javascript(ctx, time, {
                    relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
                    text: c.h.EVAL_TEMPLATE("quiz_add_question_answer_pair", params)
                });
            }
        }

        var fb = "grid_list";
        params.flag_name = fb;
        params.flag_data = params[params.flag_name];
        c.ew.javascript(ctx, time, {
            relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
            text: c.h.EVAL_TEMPLATE("quiz_set_flag", params)
        });

        c.ew.javascript(ctx, time, {
            relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
            text: "ctx_window.quiz_enable('" + quizname + "');"
        });

        c.ew.pause(ctx, time, { type: "simple" });
    };
}

MacroSet.prototype.puzzlequiz = function(c, ctx, time, duration, params) {
    var quizname = "puzzlequiz";

    var pc = new ParamChecker(c.defaults, quizname, params);
    if (quiz_basic_param_check(pc, c, ctx, quizname)) return;

    pc.Check("quiz_type", "ENUM", "qt_oneplace_puzzle");
    pc.Check("qp_show_hint", "BOOL_0_1", 1);
    pc.Check("qp_pieces_x", "INTEGER", 2);
    pc.Check("qp_pieces_y", "INTEGER", 2);
    if (params.qp_pieces_x == -1) params.qp_pieces_x = 2;
    if (params.qp_pieces_y == -1) params.qp_pieces_y = 2;
    if (params.qp_pieces_x * params.qp_pieces_y > 200) {
        //alert("Quiz Error: Puzzle is limited to max. 400 pieces!");
        return;
    }

    if ((params.in_demo && c.active_mode == "demo") ||
        (params.in_practice && c.active_mode == "uebung") ||
        (params.in_test && c.active_mode == "test") ||
        (params.in_prax && c.active_mode == "praxis"))
    {
        quiz_basic_events(quizname, params, c, time);    
    
        var fb = ["qp_pieces_x", "qp_pieces_y", "qp_show_hint", "quiz_type"];
        for (var i = 0; i < fb.length; i++) {
            params.flag_name = fb[i];
            params.flag_data = params[params.flag_name];
            c.ew.javascript(ctx, time, {
                relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
                text: c.h.EVAL_TEMPLATE("quiz_set_flag", params)
            });
        }

        c.ew.javascript(ctx, time, {
            relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
            text: "ctx_window.quiz_enable('" + quizname + "');"
        });

        c.ew.pause(ctx, time, { type: "simple" });
    };
}

MacroSet.prototype.hotspotquiz = function(c, ctx, time, duration, params) {
    var quizname = "hotspotquiz";

    var pc = new ParamChecker(c.defaults, quizname, params);
    if (quiz_basic_param_check(pc, c, ctx, quizname)) return;

    pc.Check("hs_image", "IMAGE_DOC_REL");
    pc.Check("selection_rect", "POSSIZE");

    params.hs_image = "doc/" + params.hs_image;
    params.hs_image = c.cfg_resolve(params.hs_image, "project:");

    if ((params.in_demo && c.active_mode == "demo") ||
        (params.in_practice && c.active_mode == "uebung") ||
        (params.in_test && c.active_mode == "test") ||
        (params.in_prax && c.active_mode == "praxis"))
    {
        quiz_basic_events(quizname, params, c, time);

        params.selection_left = params.selection_rect.left;
        params.selection_right = params.selection_rect.left + params.selection_rect.width;
        params.selection_top = params.selection_rect.top;
        params.selection_bottom = params.selection_rect.top + params.selection_rect.height;

        var fb = ["hs_image", "selection_left", "selection_right", "selection_top", "selection_bottom"];
        for (var i = 0; i < fb.length; i++) {
            params.flag_name = fb[i];
            params.flag_data = params[params.flag_name];
            c.ew.javascript(ctx, time, {
                relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
                text: c.h.EVAL_TEMPLATE("quiz_set_flag", params)
            });
        }

        c.ew.javascript(ctx, time, {
            relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
            text: "ctx_window.quiz_enable('" + quizname + "');"
        });

        c.ew.pause(ctx, time, { type: "simple" });
    };
}

MacroSet.prototype.quiz_shuffle_on = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "quiz_shuffle_on", params);

    pc.Check("points", "INTEGER", 0);
    pc.Check("quiz_selection_type", "ENUM", "qst_random_choice");
    pc.Check("in_demo", "BOOL_0_1", c.global_params.g_in_demo);
    pc.Check("in_test", "BOOL_0_1", c.global_params.g_in_test);
    pc.Check("in_practice", "BOOL_0_1", c.global_params.g_in_practice);
    pc.Check("in_prax", "BOOL_0_1", c.global_params.g_in_prax);

    c.quiz_on = true;
    c.quizzes = [];
    c.quizzes.macros = [];
    c.quizzes.points = params.points;
    c.quizzes.selection_type = params.quiz_selection_type;
    c.quizzes.in_demo = params.in_demo;
    c.quizzes.in_test = params.in_test;
    c.quizzes.in_practice = params.in_practice;
    c.quizzes.in_prax = params.in_prax;
}

MacroSet.prototype.quiz_shuffle_off = function(c, ctx, time, duration, params) {
    c.quiz_on = false;

    if (c.quizzes.selection_type == "qst_random_choice") {
        var r = Math.floor(Math.random() * c.quizzes.macros.length);
        if (c.quizzes.points != 0) {
            c.quizzes.macros[r].params.points = c.quizzes.points;
        }
        c.quizzes.macros[r].params.in_demo = c.quizzes.in_demo;
        c.quizzes.macros[r].params.in_test = c.quizzes.in_test;
        c.quizzes.macros[r].params.in_practice = c.quizzes.in_practice;
        c.quizzes.macros[r].params.in_prax = c.quizzes.in_prax;
        c.quizzes.macros[r].params.points = c.quizzes.points;
        var fun = "MacroSet.prototype." + c.quizzes.macros[r].type + "(c, ctx, time, duration, c.quizzes.macros[r].params);";
        eval(fun);
    } else {
        var ar = [];
        for (var i = 0; i < c.quizzes.macros.length; i++) {
            ar.push(i);
        }
        if (ar.length > 1) {
            var xyz = ar.copy();
            do {
                ar.mix();
            } while (ar.join("") == xyz.join(""));
        }
        for (var i = 0; i < c.quizzes.macros.length; i++) {
            c.quizzes.macros[ar[i]].params.in_demo = c.quizzes.in_demo;
            c.quizzes.macros[ar[i]].params.in_test = c.quizzes.in_test;
            c.quizzes.macros[ar[i]].params.in_practice = c.quizzes.in_practice;
            c.quizzes.macros[ar[i]].params.in_prax = c.quizzes.in_prax;
            var fun = "MacroSet.prototype." + c.quizzes.macros[ar[i]].type + "(c, ctx, time, duration, c.quizzes.macros[ar[i]].params);";
            eval(fun);
        }
    }

    c.quizzes = null;
}

MacroSet.prototype.quiz_eval = function(c, ctx, time, duration, params) {
    var pc = new ParamChecker(c.defaults, "gridquiz", params);

    pc.Check("proj_title", "TEXT", "");
    pc.Check("quiz_threshold", "TEXT", "pj_init_empty");
    pc.Check("eval_type", "ENUM", "et_reduced");
    pc.Check("in_demo", "BOOL_0_1", c.global_params.g_in_demo);
    pc.Check("in_test", "BOOL_0_1", c.global_params.g_in_test);
    pc.Check("in_practice", "BOOL_0_1", c.global_params.g_in_practice);
    pc.Check("in_prax", "BOOL_0_1", c.global_params.g_in_prax);
    pc.Check("feedback_enable", "BOOL_0_1", c.global_params.g_feedback_enable);
    pc.Check("feedback_pass", "HTML", c.global_params.g_feedback_pass);
    pc.Check("feedback_fail", "HTML", c.global_params.g_feedback_fail);

    var res_str = ["feedback_pass", "feedback_fail"];
    for (var i = res_str.length - 1; i >= 0; i--) {
        params[res_str[i]] = c.cfg_resolve_string_against_project(params[res_str[i]]);
    }

    if (params.quiz_threshold != "" && params.quiz_threshold != "pj_init_empty") {
        if (params.quiz_threshold.search(/^(\d+)$/) == -1) {
            //alert("Quiz Error: Threshold have to be type integer.");
            return;
        }
    } else {
        params.quiz_threshold = "empty";
    }

    if ((params.in_demo && c.active_mode == "demo") ||
        (params.in_practice && c.active_mode == "uebung") ||
        (params.in_test && c.active_mode == "test") ||
        (params.in_prax && c.active_mode == "praxis"))
    {
        params.quiz_style_dir = c.global_params.g_quiz_style_dir;
        c.ew.fileurl(ctx, time, {
            relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
            url: c.h.EVAL_TEMPLATE("quiz_eval_page_url", params)
        });

        time += 200;
        c.ew.loaded(ctx, time, { });
        time += 200;

        c.ew.javascript(ctx, time, {
            relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
            text: c.h.EVAL_TEMPLATE("evalquiz_check_page", params)
        });

        var fb = ["proj_title", "quiz_threshold", "eval_type", "feedback_enable", "feedback_pass", "feedback_fail"];
        for (var i = 0; i < fb.length; i++) {
            params.param_name = fb[i];
            params.param_data = params[params.param_name];
            c.ew.javascript(ctx, time, {
                relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
                text: c.h.EVAL_TEMPLATE("eval_set_param", params)
            });
        }

        c.ew.javascript(ctx, time, {
            relpos: {FP: "0", EP: new ctx.ElementRef("", "", 0, 0, ""), XY: {x: 0, y: 0} , DocXY: {x: 0, y: 0} , XY2: {x: 0, y: 0} , DocXY2: {x: 0, y: 0} , Off: {x: 0, y: 0} },
            text: "ctx_window.eval_enable();"
        });

        c.ew.pause(ctx, time, { type: "simple" });
    };
}
