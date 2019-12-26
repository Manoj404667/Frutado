/*
   Filename: quiz_impl.js
   Author:   Stefan Dahlke, Falko Zander
   Created:  2007-06-01
   Update:   2008-04-11

   Abstract: This file contains all necessary JavaScript for Quizzes implementation.

   Notes:

*/

var textarea_elem = null;
var title_elem = null;
var questions_elem = null;
var answers_elem = null;
var dnd_elem = null;
var score_elem = null;
var points_elem = null;
var ok_elem = null;
var feedback_elem = null;
var quiz_image_elem = null;
var image_popup = null;
var timeout_elem = null;
var ltc_elem = null;
var gtc_elem = null;
var feedback_popup = null;
var fp_main = null;
var fp_close = null;
var helpers_box = null;
var image_popup = null;
var img_main = null;
var img_close = null;
var quiznbr_elem = null;

var quiz_image_dnd_elem = null;
var feedback_dnd_elem = null;

var quiz_type = "";
var quiz_points = 0;
var title_html = "";
var questions_html = "";
var answer_html = "";
var points_html = "";
var dnd_html = "";
var quiz_checked = 0;
var quiz_disabled = 0;

var num_drag_targets = 0;
var num_drag_objects = 0;
var dnd_puzzle = null;

var flags = [];
var answers = [];
var questions = [];
var possible_answers = [];
var correct_answers = [];
var connections = {};
var conn_lines = [];

var quiz_result = { answers: [], answer_types: [] };

var answer_type = { wrong: "answer_type.wrong",
                    correct: "answer_type.correct",
                    both: "answer_type.both",
                    none: "answer_type.none" }

// --------------- end global variables ------------------------------------------------------

function quiz_blank_interface() {
    textarea_elem = $("textarea");
    title_elem = $("title");
    questions_elem = $("questions");
    answers_elem = $("answers");
    dnd_elem = $("dnd");
    score_elem = $("score");
    points_elem = $("points");
    ok_elem = $("ok");
    feedback_elem = $("feedback");
    quiz_image_elem = $("quiz_image");
    image_popup = $("image_popup");
    timeout_elem = $("timeout");
    ltc_elem = $("local_time_counter");
    gtc_elem = $("global_time_counter");
    feedback_popup = $("feedback_popup");
    fp_main = $("fp_main");
    fp_close = $("fp_close");
    helpers_box = $("helpers_box");
    image_popup = $("image_popup");
    img_main = $("img_main");
    img_close = $("img_close");
    quiznbr_elem = $("quiznbr");
    var config = document.forms.config;

    var ids = [];

    if (!textarea_elem) ids.push("textarea");
    if (!questions_elem) ids.push("questions");
    if (!answers_elem) ids.push("answers");
    if (!title_elem) ids.push("title");
    if (!dnd_elem) ids.push("dnd");
    if (!score_elem) ids.push("score");
    //if (!points_elem) ids.push("points");     OPTIONAL
    if (!ok_elem) ids.push("ok");
    if (!feedback_elem) ids.push("feedback");
    if (!quiz_image_elem) ids.push("quiz_image");
    if (!image_popup) ids.push("image_popup");
    if (!timeout_elem) ids.push("timeout");
    if (!ltc_elem) ids.push("local_time_counter");
    if (!gtc_elem) ids.push("global_time_counter");
    if (!feedback_popup) ids.push("feedback_popup");
    if (!fp_main) ids.push("fp_main");
    if (!fp_close) ids.push("fp_close");
    if (!helpers_box) ids.push("helpers_box");
    if (!image_popup) ids.push("image_popup");
    if (!img_main) ids.push("img_main");
    if (!img_close) ids.push("img_close");
    //if (!quiznbr_elem) ids.push("quiznbr");   OPTIONAL

    if (ids.length) {
        alert("INCOMPLETE quiz_blank.html\nthe following Object-IDs are missing:\n    - " +
              ids.join("\n    - "));
        return 0;
    }

    if (!config) {
        alert("INCOMPLETE quiz_blank.html\nthe following object is missing:\n    - document.forms.config");
        return 0;
    }

    return 1;
}

// --------------- end quiz_blank.html interface  ------------------------------------------------------

function _feedback() {}
_feedback.prototype.set_values = function() {
    var x =
        "<div id='feedback_pass' style='display:none'>" + (flags.feedback_pass != '' ? flags.feedback_pass : '&nbsp;') + "</div>" +
        "<div id='feedback_fail' style='display:none'>" + (flags.feedback_fail != '' ? flags.feedback_fail : '&nbsp;') + "</div>" +
        "<div id='feedback_time' style='display:none'>" + (flags.feedback_time != '' ? flags.feedback_time : '&nbsp;') + "</div>";

    if (flags.feedback_popup == 0) {
        feedback_elem.innerHTML = x;
    } else {
        fp_main.innerHTML = x;
    }
}
_feedback.prototype.show = function(fid) {
    var DOM_elem = $(fid);
    if (DOM_elem == null) return;

    DOM_elem.innerHTML += this.get_solutions_(fid);
    DOM_elem.style.display = "block";
    dnd_display_correction();
    
    if (flags.feedback_popup == 1) {
        if (document.forms.config.fade_on_feedback_popup.value == "1") {
            var op = 0.8;
            var iv = null;
            var THIS = this;
            var dim = function() {
                textarea_elem.style.MozOpacity = op.toString();
                textarea_elem.style.filter = "alpha(opacity=" + op * 100 + ")";
                op -= 0.1;
                if (op < 0.2) {
                    window.clearInterval(iv);
                    iv = null;  
                    THIS.show_();
                }
            }
            iv = window.setInterval(dim, 50);
        } else {
            this.show_();
        }
    }
}
/* end of public interface */
_feedback.prototype.get_solutions_ = function(fid) {
    var cs = "";
    if (flags.feedback_correct_solutions == 1 && fid.search(/pass/) == -1) {
        cs = "<p>";
        if (fid.search(/fail/) == -1) on_ok(1);
        for (var i = 0; i < quiz_result.answers.length; i++) {
            if (quiz_result.answer_types[i] == answer_type.correct) {
                cs += "<span class='fb_wrong_answered'>" + quiz_result.answers[i] + "</span><br>";
            } else if (quiz_result.answer_types[i] == answer_type.both) {
                cs += "<span class='fb_correct_answered'>" + quiz_result.answers[i] + "</span><br>";
            }
        }
        cs += "</p>";
    }
    return cs;
}
_feedback.prototype.show_ = function() {
    feedback_popup.style.display = "block";
    var ep = getAbsoluteDimensions(feedback_popup);
    feedback_popup.style.top = (ie) ? ((document.documentElement.clientHeight - feedback_popup.offsetHeight) / 2 - ep.parentsTop + "px")
                       : ((window.innerHeight - feedback_popup.offsetHeight) / 2 - ep.parentsTop + "px");
    feedback_popup.style.left = (document.body.offsetWidth - feedback_popup.offsetWidth) / 2 - ep.parentsLeft + "px";
    feedback_dnd_elem = new dndObject(feedback_popup.id);
    //fp_main.onclick = go_next;
    fp_close.onclick = go_next;
    fp_close.onmouseover = function() { fp_close.style.cursor = "pointer"; }
    fp_close.onmouseout = function() { fp_close.style.cursor = "default"; }
}
var feedback = new _feedback();

// --------------- end feedback class  ------------------------------------------------------

function _timeout() {
    this.global_time = -1;
    this.ltc_control = null;
    this.gtc_control = null;
    this.run = 0;
}
_timeout.prototype.start_global = function() {
    if (typeof(ctx.pj_global_timeout) == 'undefined') return;

    if (ctx.pj_global_timeout > 0) {
        var date = new Date;
        this.global_time = date.getTime();

        var hourglass = $("gtc_hourglass");
        if (hourglass != null) hourglass.style.display = ie ? "block" : "table-cell";

        timeout_elem.style.display = "block";
        gtc_elem.style.display = ie ? "block" : "table-cell";
        gtc_elem.innerHTML = convert_time(ctx.pj_global_timeout) + "<span style='display:none'>" + ctx.pj_global_timeout + "</span>";

        var THIS = this;
        this.run = 1;
        var f = function() { THIS.run_("global"); };
        this.gtc_control = window.setTimeout(f, 1000);
    } else {
        var func = function () { ctx.cfg_action('PLAY'); }
        window.setTimeout(func, 100);
    }
}
_timeout.prototype.start_local = function() {
    if (flags.quiz_timeout == 0 || flags.quiz_timeout == -1) return;
    
    var hourglass = $("ltc_hourglass");
    if (hourglass != null) hourglass.style.display = ie ? "block" : "table-cell";

    timeout_elem.style.display = "block";
    ltc_elem.style.display = ie ? "block" : "table-cell";
    ltc_elem.innerHTML = convert_time(flags.quiz_timeout) + "<span style='display:none'>" + flags.quiz_timeout + "</span>";

    var THIS = this;
    this.run = 1;
    var f = function() { THIS.run_("local"); }
    this.ltc_control = window.setInterval(f, 1000);
}
_timeout.prototype.stop_all = function() {
    this.stop_();    
}
/* end of public interface */
_timeout.prototype.run_ = function(mode) {
    if (this.run == 0) {
        this.stop_();
        return;
    }
    var elem = null;
    if (mode == "global") {
        window.clearTimeout(this.gtc_control);
        elem = gtc_elem;
    } else {
        window.clearTimeout(this.ltc_control);
        elem = ltc_elem;
    }
    var time = parseInt(elem.childNodes[1].innerHTML) - 1;
    elem.innerHTML = convert_time(time) + "<span style='display:none'>" + time + "</span>";
    if (time <= 0) {
        this.out_(mode);
    } else {
        var THIS = this;
        var f = function() { THIS.run_(mode); };
        if (mode == "global") {
            this.gtc_control = window.setTimeout(f, 1000);
        } else {
            this.ltc_control = window.setTimeout(f, 1000);
        }
    }
}
_timeout.prototype.out_ = function(type) {
    this.stop_();    

    if (flags.feedback_correct_solutions == 0) {
        on_ok(1);    
    }
    quiz_checked = 1;
    quiz_disable();
    if (flags.feedback_popup == 0) {
        conf_next_button(1, "next");
    }
    feedback.show("feedback_time");

    if (type == "global") {
        ctx.pj_global_timeout = 0;
    }
}
_timeout.prototype.stop_ = function() {
    window.clearTimeout(this.gtc_control);
    this.gtc_control = null;
    window.clearTimeout(this.ltc_control);
    this.ltc_control = null;
    this.run = 0;

    if (this.global_time != -1) {
        var x = new Date;
        var y = x.getTime() - this.global_time;
        y = Math.ceil(y / 1000);
        ctx.pj_global_timeout -= y;
    }
}
var timeout = new _timeout();

// --------------- end timeout class  ------------------------------------------------------

function quiz_set_caption(cap) {
    title_html = cap;
    quiz_result.title = cap;
}
function quiz_set_score(score) {
    quiz_points = score;
    quiz_result.points = score;
    points_html = score;
}
function quiz_set_question(question) {
    questions_html = question;
    quiz_result.question = question;
}
function quiz_set_flag(flag_name, flag_data) {
    flags[flag_name] = flag_data;
}
function quiz_add_question_answer_pair(question, answer) {
    questions.push(question);
    answers.push(answer);
}
function quiz_add_answer(answer) {
    answers.push(answer);
}

// --------------- end external data input interface ------------------------------------------------------

function mchoice_enable(callback) {
    answer_html = "<table cellspacing='3' cellpadding='3' border='0'>";

    var ca = 0;
    for (var i = answers.length; i > 0; i--) {
        if (flags["correct_answer_" + i] == 1) ca++;
    }

    if (ca > 1 || flags.force_multiple_choice == 1) {
        for (var i = 0; i < answers.length; i++) {
            answer_html +=
                "<tr><td><input id='choice" + i + "' type='checkbox' class='mchoice_checkbox' name='choice' onclick='update_ok()'></td>" +
                "<td class='answer'>" + answers[i] + "</td></tr>";
        }
    } else {
        for (var i = 0; i < answers.length; i++) {
            answer_html +=
                "<tr><td><input id='choice" + i + "' type='radio' class='mchoice_radiobutton' name='choice' onclick='update_ok()'></td>" +
                "<td class='answer'>" + answers[i] + "</td></tr>";
        }
    }
    answer_html += "</table>";
    answers_elem.innerHTML = answer_html;
    textarea_elem.style.visibility = "visible";
    $("choice0").focus();
    
    callback();
}
function sqmaquiz_enable(callback) {
    switch (flags.answer_type) {
        case "at_integer":
            for (var i = 0; i < answers.length; i++) {
                answer_html +=
                    '<input type="text" id="answer' + i + '" class="answer_input" name="answer' + i + '" size="50" onkeydown="ff_pre_input(this, event, 0);" onkeypress="return input_only_int(event);" onkeyup="update_ok();" /><br />';
            }
            break;
        case "at_float":
            for (var i = 0; i < answers.length; i++) {
                answer_html +=
                    '<input type="text" id="answer' + i + '" class="answer_input" name="answer' + i + '" size="50" onkeydown="ff_pre_input(this, event, 1);" onkeypress="return input_only_float(this, event);" onkeyup="update_ok();" /><br />';
            }
            break;
        default:
            for (var i = 0; i < answers.length; i++) {
                answer_html +=
                    '<input type="text" id="answer' + i + '" class="answer_input" name="answer' + i + '" size="50" onkeyup="update_ok()" /><br />';
            }
            break;
    }
    answers_elem.innerHTML = answer_html;
    textarea_elem.style.visibility = "visible";
    $("answer0").focus();
    
    callback();
}
function fibquiz_enable(callback) {
    if (flags.quiz_type == "qt_drop_down" || flags.quiz_type == "qt_drag_drop") {
        for (var i = 0; i < answers.length; i++) {
            var answ = answers[i].split(",");
            var possible = [];
            var correct = [];
            possible_answers.push(possible);
            correct_answers.push(correct);
            for (var j = 0; j < answ.length; j++) {
                if (answ[j].substr(0,1) == '*') {
                    answ[j] = answ[j].substr(1, answ[j].length-1);
                    correct.push(answ[j]);
                    if (flags.one_for_all == 1 && flags.shuffle_solutions == 1) {
                        answ[j] = answ[j].substring(answ[j].indexOf("_") + 1);
                    }
                }
                possible.push(answ[j]);
            }
        }

        if (flags.one_for_all == 1 && flags.shuffle_solutions == 1) {
            correct_answers[0].sort(Numsort);
            for (var i = 0; i < correct_answers[0].length; i++) {
                correct_answers[0][i] = correct_answers[0][i].substring(correct_answers[0][i].indexOf("_") + 1);
            }
        }
    }

    var questions = flags.fibtext.split("___");

    answer_html = "";
    var html = [];
    var dd = [];
    switch(flags.quiz_type) {
        case "qt_text":
        case "qt_cs_text":
            for (var i = 0; i < answers.length; i++) {
                var myhtml = "<input type='text' class='fib_input' id='fib" + i + "' name='fib" + i + "' size='10' onkeyup='update_ok()'>";
                html.push(myhtml);
            }
            break;
        case "qt_drop_down":
            for (var i = 0; i < questions.length-1; i++) {
                var myhtml = "<select id='fib" + i + "' name='fib" + i + "' onchange='update_ok()'>";
                myhtml += "<option></option>";
                if (flags.one_for_all == 1) {
                    for (var j = 0; j < possible_answers[0].length; j++) {
                        myhtml += "<option>" + possible_answers[0][j] + "</option>";
                    }
                } else {
                    for (var j = 0; j < possible_answers[i].length; j++) {
                        myhtml += "<option>" + possible_answers[i][j] + "</option>";
                    }
                }
                myhtml += "</select>"
                html.push(myhtml);
            }
            break;
        case "qt_drag_drop":
            for (var i = 0; i < questions.length-1; i++, num_drag_targets++) {
                var myhtml = "<span style='margin-right:4px' id='fib_t_" + num_drag_targets + "'></span>";
                html.push(myhtml);
            }
            if (flags.one_for_all == 1) {
                for (var i = 0; i < possible_answers[0].length; i++, num_drag_objects++) {
                    dnd_html += "<div style='position:absolute' class='dd_object_idle' id='fib_o_" + num_drag_objects + "'>&nbsp;" + possible_answers[0][i] + "&nbsp;</div>";
                }
            } else {
                dnd_html = [];
                for (var i = 0; i < possible_answers.length; i++) {
                    var a = [];
                    for (var j = 0; j < possible_answers[i].length; j++) {
                        var h = "<div style='position:absolute' class='dd_object_idle' id='fib_o_" + num_drag_objects + "'>&nbsp;" + possible_answers[i][j] + "&nbsp;</div>";
                        dnd_html.push(h);
                        num_drag_objects++;
                    }
                }
            }
            break;
        default:
            return 0;
    }

    for (var i = 0; i < questions.length; i++) {
        answer_html += questions[i];
        if (i < questions.length-1) {
            answer_html += html[i];
        }
    }

    // end pre-display phase

    answers_elem.innerHTML = answer_html;
    answers_elem.style.lineHeight = "20px";
    textarea_elem.style.visibility = "visible";

    if (flags.quiz_type == "qt_text" || flags.quiz_type == "qt_cs_text") {
        $("fib0").focus();
        callback();
        return 1;
    } else if (flags.quiz_type == "qt_drop_down") {
        $("fib0").focus();
        callback();
        return 1;
    }

    var dnd_o = [];
    var dnd_t = [];

    if (flags.one_for_all == 1) {
        dnd_elem.innerHTML = dnd_html;
    } else {
        dnd_elem.innerHTML = "";
        for (var i = 0; i < dnd_html.length; i++) {
            dnd_elem.innerHTML += dnd_html[i];
        }
    }

    var dim = get_max_dimensions("fib_o_", num_drag_objects);

    if (dim.max_width_idx == -1) return 0;

    var txt = "<span style='visibility:hidden'>" + $("fib_o_" + dim.max_width_idx).innerHTML + "</span>";
    for (var i = 0; i < num_drag_targets; i++) {
        var e = $("fib_t_" + i);
        if (!e) return 0;
        var pre_left = e.offsetLeft;
        e.innerHTML = txt;
        if (e.offsetLeft == pre_left && i != 0) {
            e.style.top = e.offsetTop + e.offsetHeight + "px";
        }

        dnd_t.push(new dndTarget("fib_t_" + i));
        dnd_t[i].addEffect(tar_effects.CSS, tar_effects.centeredDrop, tar_effects.replaceableTarget);
    }

    for (var i = max_objects_per_row = 0; i < possible_answers.length; i++) {
        for (var j = 0, objects_per_row = 0; j < possible_answers[i].length; j++, objects_per_row++) {
            if (objects_per_row > max_objects_per_row) {
                max_objects_per_row = objects_per_row;
            }
        }
    }
    dnd_elem.style.height = (max_objects_per_row + 1) * (dim.max_height + 5) + 10 + "px";

    for (var i = act_object = 0; i < possible_answers.length; i++) {
        for (var j = 0; j < possible_answers[i].length; j++, act_object++) {
            var elem_id = "fib_o_" + act_object;
            var e = $(elem_id);
            if (!e) return 0;

            e.style.left = i * (dim.max_width + 5) + e.offsetLeft + "px";
            e.style.top = j * (dim.max_height + 5) + e.offsetTop + "px";
            e.style.width = dim.max_width + "px";
            e.style.textAlign = "center";

            dnd_o.push(new dndObject(elem_id));
            if (flags.one_for_all == 1) {
                for (var k = 0; k < dnd_t.length; k++) {
                    dnd_o[act_object].addTarget(dnd_t[k]);
                }
            } else {
                dnd_o[act_object].addTarget(dnd_t[i]);
            }
            dnd_o[act_object].addEffect(dnd_effects.CSS);
            dnd_o[act_object].addFunction(dnd_functions.afterDrop, "update_ok();");
        }
    }
    
    callback();
}
function matchquiz_enable(callback) {
    var mixed_answers = answers.copy();
    for (var i = mixed_answers.length - 1; i > 0; i--) {
        if (mixed_answers[i] != mixed_answers[0]) {
            do {
                mixed_answers.mix();
            } while (mixed_answers.join("") == answers.join(""));
            break;
        }
    }

    var mapping = [];
    for (var i = 0; i < answers.length; i++) {
        for (var j = answers.length - 1; j >= 0; j--) {
            if (mixed_answers[j] == answers[i]) {
                mapping.push(j);
            }
        }
    }

    answer_html = "<table id='matchquiz'>";
    switch(flags.quiz_type) {
        case "qt_drop_down":
            for (var i = 0; i < questions.length; i++) {
                answer_html += "<tr><td id='tar_" + i + "'>" + questions[i] + "</td>" +
                               "<td id='spa_" + mapping[i] + "'></td>" +
                               "<td><select name='con_" + i + "' id='con_" + i + "' onclick='update_ok();'>";
                for (j = 0; j < mixed_answers.length; j++) {
                    answer_html += "<option id='obj_" + j + "'>" + mixed_answers[j] + "</option>";
                }
                answer_html += "</select></td></tr>";
            }
            break;
        case "qt_drag_drop":
        	helpers_box.innerHTML = "<iframe id='img_preloader' onload='matchquiz_enable2(quiz_enable4);' width='200' height='200'></iframe>";
            var ife = $("img_preloader");
            var doc = (ife.contentDocument) ? ife.contentDocument : ife.contentWindow.document;
            var ifc = "";
            for (var i = 0; i < questions.length; i++) {
                do {
                    var p = mixed_answers[i].search(/&nbsp;/);
                    if (p == -1 || p > 0) break;

                    if (p == 0) {
                        mixed_answers[i] = mixed_answers[i].substr(6);
                    }
                } while (1);

                answer_html += "<tr><td>" + questions[i] + "</td>" +
                               "<td id='tar_" + i + "'></td>" +
                               "<td id='spa_" + mapping[i] + "'></td>" +
                               "<td id='con_" + i + "'><div id='obj_" + i + "'>&nbsp;" + mixed_answers[i] + "&nbsp;</div></td></tr>";
                ifc += "<div>" + questions[i] + mapping[i] + mixed_answers[i] + "</div>";
            }
            doc.open();
            doc.write(ifc);
            doc.close();
            break;
        default:
            return 0;
    }

    answer_html += "</table>";

    // end pre-display phase

    answers_elem.innerHTML = answer_html;
    textarea_elem.style.visibility = "visible";
    if (flags.quiz_type == "qt_drop_down") {
        $("con_0").focus();
        update_ok();
        callback();
        return 1;
    }

    return 0;
}
function matchquiz_enable2(callback) {
	helpers_box.innerHTML = "";
	
	if ($("obj_0") == null) {
		var f = function() { matchquiz_enable2(callback); }
        window.setTimeout(f, 10);
        return;
    }
	
	var dnd_t = [];
    var dnd_o = [];

    var dim = get_max_dimensions("obj_", answers.length);

    $("spa_0").style.width = "20px";
    $("con_0").style.width = dim.max_width + "px";
    $("tar_0").style.width = dim.max_width + "px";

    for (var i = 0; i < questions.length; i++) {
        $("tar_" + i).style.height = dim.max_height + "px";
        dnd_t.push(new dndTarget("tar_" + i));
        dnd_t[i].addEffect(tar_effects.CSS, tar_effects.replaceableTarget, tar_effects.centeredDrop);
    }

    for (var i = 0; i < answers.length; i++) {
        var elem_id = "obj_" + i;

        var obj = $(elem_id);
        if (!obj) return 0;

        dnd_o.push(new dndObject(elem_id));
        for (var j = 0; j < questions.length; j++) {
            dnd_o[i].addTarget(dnd_t[j]);
        }
        dnd_o[i].addEffect(dnd_effects.CSS);
        dnd_o[i].addFunction(dnd_functions.afterDrop, "update_ok();");

        var container = $("con_" + i);
        var cont_pos = getAbsoluteDimensions(container);
        var obj_pos = getAbsoluteDimensions(obj);
        obj.style.left = cont_pos.offsetLeft - obj_pos.parentsLeft + "px";
        obj.style.top = cont_pos.offsetTop - obj_pos.parentsTop + "px";
        obj.style.width = dim.max_width + "px";
        obj.style.height = dim.max_height + "px";
        obj.style.textAlign = "center";
        dnd_o[i].setHome();
    }

    if (typeof callback == 'function') callback();
}
function connquiz_enable(callback) {
    var mixed_answers = answers.copy();
    for (var i = mixed_answers.length - 1; i > 0; i--) {
        if (mixed_answers[i] != mixed_answers[0]) {
            do {
                mixed_answers.mix();
            } while (mixed_answers.join("") == answers.join(""));
            break;
        }
    }

    var mapping = [];
    for (var i = 0; i < answers.length; i++) {
        for (var j = answers.length - 1; j >= 0; j--) {
            if (mixed_answers[j] == answers[i]) {
                mapping.push(j);
            }
        }
    }

    answer_html = "<table id='connquiz'>";
    for (var i = 0; i < questions.length; i++) {
        answer_html += "<tr><td class='conn_elem' id='ct1_" + i + "' style='padding:3px' onclick='connquiz_handle_mclick(this);'>" + questions[i] + "</td>" +
                       "<td id='spa_" + i + "' style='width:100px;visibility:hidden'>" + mapping[i] + "</td>" +
                       "<td class='conn_elem' id='ct2_" + i + "' style='padding:3px' onclick='connquiz_handle_mclick(this);'>" + mixed_answers[i] + "</td></tr>";
    }
    answer_html += "</table>";

    // end pre-display phase

    answers_elem.innerHTML = answer_html;
    textarea_elem.style.visibility = "visible";
    //update_ok();
    callback();
    return 1;
}
function mixquiz_enable(callback) {
    var dnd_member_ids = [];
    if (flags.quiz_type == "qt_drop_down") {
        var mixed_answers = answers.copy();
        for (var i = mixed_answers.length - 1; i > 0; i--) {
            if (mixed_answers[i] != mixed_answers[0]) {
                do {
                    mixed_answers.mix();
                } while (mixed_answers.join("") == answers.join(""));
                break;
            }
        }
        var selectbox = "";
        for (var i = 0; i < mixed_answers.length; i++) {
            selectbox += "<option>" + mixed_answers[i] + "</option>";
        }
        selectbox += "</select>";

        for (var i = 0; i < answers.length; i++) {
            answer_html += "<select name='mix_" + i + "' class='mixquiz_selectbox' id='mix_" + i + "' onclick='update_ok();'>";
            answer_html += selectbox;
            if (flags.quiz_alignment == "qa_vertical") {
                answer_html += "<br />";
            }
        }
    } else {
        answer_html = "<table>";
        if (flags.quiz_alignment == "qa_horizontal") {
            answer_html += "<tr>";
        }

        for (var i = 0; i < answers.length; i++) {
            if (flags.quiz_alignment == "qa_horizontal") {
                answer_html +=
                    "<td id='obj_" + i + "_tar'><div style='position:absolute' id='obj_" + i + "'>&nbsp;" + answers[i] + "&nbsp;</div></td>";
            } else {
                answer_html +=
                    "<tr><td id='obj_" + i + "_tar'><div style='position:absolute' id='obj_" + i + "'>&nbsp;" + answers[i] + "&nbsp;</div></td></tr>";
            }
            dnd_member_ids.push("obj_" + i);
        }
        if (flags.quiz_alignment == "qa_horizontal") {
            answer_html += "</tr>";
        }
        answer_html += "</table>";
    }

    // end pre-display phase

    answers_elem.innerHTML = answer_html;
    textarea_elem.style.visibility = "visible";

    if (flags.quiz_type == "qt_drop_down") {
        update_ok();
        $("mix_0").focus();
        callback();
        return 1;
    }

    var dim = get_max_dimensions("obj_", answers.length);
    var display_order = [];

    for (var i = 0; i < answers.length; i++) {
        var e = $("obj_" + i + "_tar");
        if (!e) return 0;

        e.style.width = dim.max_width + "px";
        e.style.height = dim.max_height + "px";
        e.innerHTML += "&nbsp;";

        display_order.push(i);

        var obj = $("obj_" + i);
        if (!obj) return 0;
        obj.style.width = dim.max_width + "px";
        obj.style.textAlign = "center";
    }

    var dnd = eval("new sortGroup('" + dnd_member_ids.join("', '") + "');");
    dnd.addEffect(sort_effects.mixObjects, sort_effects.CSS);
    if (flags.quiz_alignment == "qa_horizontal") {
        dnd.addEffect(sort_effects.direcHorizontal);
    } else {
        dnd.addEffect(sort_effects.direcVertical);
    }
    for (var i = 0; i < dnd.members.length; i++) {
        dnd.members[i].addFunction(dnd_functions.afterDrag, "update_ok();");
    }

    update_ok();
    callback();
}
function scalequiz_enable(callback) {
    var scale_width = Math.min($("answers").offsetWidth - 60, 600);

    var h = answers[1].split("-");
    var minimum = h[0];
    var maximum = h[1];

    answer_html =
        "<div id='minval' style='position:absolute'>" + minimum + "</div>" +
        "<div id='range' style='width:" + scale_width + "px;height:5px;border:1px solid black;font-size:1px;position:absolute;'></div>" +
        "<div id='maxval' style='position:absolute'>" + maximum + "</div>" +
        "<img id='slider' src='quiz_slider.gif' height='41' width='11' style='position:absolute'>" +
        "<input id='actual' type='text' size='10' value='" + minimum + "' readonly='readonly' style='position:absolute;text-align:center' class='answer_input'>";

    // end pre-display phase

    answers_elem.innerHTML = answer_html;
    textarea_elem.style.visibility = "visible";

    var slider = $("slider");
    var range = $("range");
    var actual = $("actual");
    var minval = $("minval");
    var maxval = $("maxval");

    answers_elem.style.height = slider.offsetHeight + range.offsetHeight + actual.offsetHeight + 20 + "px"

    dnd_display_correction();
    slider.style.left = range.offsetLeft + "px";
    var rdim = getAbsoluteDimensions(range);

    var dnd = new dndObject("slider");
    dnd.addEffect(dnd_effects.restrictedHorizontal);
    dnd.setArea(-1, rdim.offsetLeft + rdim.offsetWidth + 5, -1, rdim.offsetLeft);
    dnd.addFunction(dnd_functions.whileDragging, "scalequiz_showpos(idx);");

    update_ok();
    callback();
}
function gridquiz_enable(callback) {
    answer_html = "<table id='grid' class='grid'><tr>" +
                  "<th>&nbsp;</th>";
    var ans = flags.grid_list.split(",");
    for (var i = 0; i < ans.length; i++) {
        answer_html += "<th class='gridspacer' rowspan='" + (questions.length + 1) + "'>&nbsp;</th>" +
                       "<th style='text-align:center'>" + ans[i] + "</th>";
    }
    answer_html += "<th class='gridspacer' rowspan='" + (questions.length + 1) + "'>&nbsp;</th>";
    answer_html += "</tr>";
    for (var i = 0; i < questions.length; i++) {
        answer_html += "<tr><td id='gridq_" + i + "' class='gridquestions'>" + questions[i] + "</td>";
        for (var j = 0; j < ans.length; j++) {
            answer_html += "<td class='gridanswers' id='grida_" + i + "_" + j + "' onclick='gridquiz_show(" + i + ", " + j + ")'>&nbsp;</td>";
        }
        answer_html +="</tr>";
    }
    answer_html += "</table>";

    // end pre-display phase

    answers_elem.innerHTML = answer_html;
    textarea_elem.style.visibility = "visible";

    var grid = $("grid");
    var first_tr = grid.firstChild.firstChild;
    var max_width = 0;
    for (var i = 1; i < first_tr.childNodes.length; i++) {
        var e = first_tr.childNodes[i];
        if (e.className != "gridspacer") {
            max_width = Math.max(max_width, e.offsetWidth);
        }
    }
    for (var i = 1; i < first_tr.childNodes.length; i++) {
        var e = first_tr.childNodes[i];
        if (e.className != "gridspacer") {
            e.style.width = max_width + "px";
            e.style.paddingLeft = "4px";
        }
    }

    for (var i = 0; i < questions.length; i++) {
        for (var j = 0; j < ans.length; j++) {
            var e = $("grida_" + i + "_" + j);
            if (e != null) {
                e.style.backgroundImage = "url(point_inactive.gif)";
            }
        }
    }

    callback();
}
function puzzlequiz_enable(callback) {
    var img_src = flags.qm_file;
    answer_html = "<img src='" + img_src + "' style='visibility:hidden' id='puzzleimage' alt=''>";
    answers_elem.innerHTML = answer_html;
    textarea_elem.style.visibility = "visible";

    // end pre-display phase

    wait_for_img_load("puzzleimage", function() { puzzlequiz_enable2(callback); });
}
function puzzlequiz_enable2(callback) {
    var img_src = flags.qm_file;
    var img = $("puzzleimage");
    var img_w = img.width;
    var img_h = img.height;

    var piece_w = Math.round(img_w / flags.qp_pieces_x);
    var piece_h = Math.round(img_h / flags.qp_pieces_y);

    answers_elem.style.height = answers_elem.offsetHeight + "px";

    answer_html = "<table cellspacing='1' cellpadding='0'>";
    for (var i = 0; i < flags.qp_pieces_y; i++) {
        answer_html += "<tr>";
        for (var j = 0; j < flags.qp_pieces_x; j++) {
            answer_html +=
                "<td style=''>" +
                "<div id='t_" + i + "_" + j + "' style='border:1px solid black;width:" + piece_w + "px;height:" + piece_h + "px'>" +
                "<div id='d_" + i + "_" + j + "' style='position:relative;width:" + piece_w + "px;height:" + piece_h + "px;overflow:hidden'>" +
                "<div style='position:relative;left:-" + j * piece_w + "px;top:-" + i * piece_h + "px;width:" + img_w + "px;height:" + img_h + "px;background-image:url(" + img_src + ")'></div>"; +
                "</div></div></td>";
        }
        answer_html += "</tr>";
    }
    answer_html += "</table>";

    if (flags.quiz_type == "qt_twoplace_puzzle") {
        answer_html += "<table cellspacing='1' cellpadding='0' style='margin-top:15px'>";
        for (var i = 0; i < flags.qp_pieces_y; i++) {
            answer_html += "<tr>";
            for (var j = 0; j < flags.qp_pieces_x; j++) {
                answer_html +=
                    "<td style=''>" +
                    "<div id='o_" + i + "_" + j + "' style='border:1px solid black;width:" + piece_w + "px;height:" + piece_h + "px'></div>" +
                    "</td>";
            }
            answer_html += "</tr>";
        }
        answer_html += "</table>";
    }

    answers_elem.innerHTML = answer_html;

    // end structural-display phase

    dnd_puzzle = new dndPuzzle("d_", {x: flags.qp_pieces_x, y: flags.qp_pieces_y }, (flags.quiz_type == "qt_oneplace_puzzle" ? 1 : 2));

    if (flags.quiz_type == "qt_oneplace_puzzle") {
        update_ok();
    } else {
        for (var i = dnd_puzzle.members.length - 1; i >= 0; i--) {
            dnd_puzzle.members[i].addFunction(dnd_functions.afterDrop, "update_ok();");
        }
    }
    
    callback();
}
function hotspotquiz_enable(callback) {
    answer_html = "<img src='" + flags.hs_image + "' alt='' id='hotspotimage' style='cursor:crosshair' onclick='hotspot_setpin(event)'>" +
                  "<img src='pin.gif' id='hotspotpin' alt='' style='position:absolute;display:none'>";
    answers_elem.innerHTML = answer_html;
    textarea_elem.style.visibility = "visible";

    // end pre-display phase

    callback();
}
function quiz_enable(qt) {
    quiz_type = qt;
    quiz_result.quiz_type = quiz_type;

    if (typeof ctx.pj_global_timeout == 'undefined' || ctx.pj_global_timeout != 0) {
        if (!quiz_blank_interface()) return;
        show_score();

        title_elem.innerHTML = title_html;
        if (flags.qm_as_question == 1) {
            show_quiz_image(quiz_enable2);
            return;
        } else {
            questions_elem.innerHTML = questions_html;
            quiz_enable2();
            return;
        }
    } else if (ctx.pj_global_timeout == 0) {
        set_results();
        if (typeof ctx.pj_quiz_result == 'undefined' || ctx.pj_quiz_result == null) {
            ctx.pj_quiz_result = [];
        }
        ctx.pj_quiz_result.push(quiz_result);
    }

    timeout.start_global();

    if (!ie) {
        var x = $("centerTable");
        x.style.height = window.innerHeight - x.offsetTop + "px";
    }

    dnd_display_correction();
}
function quiz_enable2() {
    if (points_elem != null) points_elem.innerHTML = points_html;
    if (quiznbr_elem != null) quiznbr_elem.innerHTML = flags.quiz_number + "/" + ctx.pj_quiz_numbers;
    title_elem.style.display = ie ? "inline" : "table-cell";
    feedback.set_values();
    if (!(quiz_type == "puzzlequiz" && flags.qp_show_hint == 0) && flags.qm_as_question == 0) show_quiz_image(quiz_enable3);
    else quiz_enable3();
}
function quiz_enable3() {
    eval(quiz_type + "_enable(" + quiz_enable4 + ");");
}
function quiz_enable4() {
    if (flags.quiz_skipping == 1) {
        conf_next_button();
    }
    textarea_elem.style.visibility = "visible";

    timeout.start_local();
    timeout.start_global();

    if (!ie) {
        var x = $("centerTable");
        x.style.height = window.innerHeight - x.offsetTop + "px";
    }

    dnd_display_correction();
}

// --------------- end quiz enable section ------------------------------------------------------

function connquiz_handle_mclick(DOM_elem) {
    var side1 = DOM_elem.id.split("_")[0];
    var side2 = side1.substr(0, 2) + (side1.substr(2, 1) == "1" ? "2" : "1");
    var opposite = null;
    for (var i = questions.length - 1; i >= 0; i--) {
        var elem1 = $(side1 + "_" + i);
        var elem2 = $(side2 + "_" + i);
        
        remClassName(elem1, "conn_active");
        if (hasClassName(elem2, "conn_active")) {
            opposite = elem2;
        }
    }

    if (opposite != null) {
        remClassName(opposite, "conn_active");
        if (side1 == "ct1") {
            connquiz_connect(DOM_elem, opposite);
        } else {
            connquiz_connect(opposite, DOM_elem);
        }
    } else {
        addClassName(DOM_elem, "conn_active");
    }
}
function connquiz_connect(DOM_elem1, DOM_elem2) {
    var new_lines = [];
    for (var i = conn_lines.length - 1; i >= 0; i--) {
        if (conn_lines[i].e1 == DOM_elem1.id || conn_lines[i].e2 == DOM_elem2.id) {
            conn_lines[i].l1.remove();
            conn_lines[i].l2.remove();
            conn_lines[i].l3.remove();

            if (conn_lines[i].e1 == DOM_elem1.id) {
                delete connections[connections[DOM_elem1.id]];
            } else {
                delete connections[connections[DOM_elem2.id]];
            }
        } else {
            new_lines.push(conn_lines[i]);
        }
    }
    conn_lines = new_lines;

    connections[DOM_elem1.id] = DOM_elem2.id;
    connections[DOM_elem2.id] = DOM_elem1.id;

    var p1 = getAbsoluteDimensions(DOM_elem1);
    var p2 = getAbsoluteDimensions(DOM_elem2);
    var x1 = p1.offsetLeft + p1.offsetWidth;
    var y1 = p1.offsetTop + Math.floor(p1.offsetHeight / 2);
    var x2 = p2.offsetLeft;
    var y2 = p2.offsetTop + Math.floor(p2.offsetHeight / 2);

    conn_lines.push({
        e1: DOM_elem1.id,
        e2: DOM_elem2.id ,
        l1: new _draw_line(x1 + 5, y1, x1 + 15, y1, 2),
        l2: new _draw_line(x1 + 15, y1, x2 - 15, y2, 2),
        l3: new _draw_line(x2 - 15, y2, x2 - 5, y2, 2)
    });

    update_ok();
}

function show_quiz_image(callback) {
    if (flags.qm_file == "") {
        image_popup.style.display = "none";
        quiz_image_elem.style.display = "none";
        if (typeof callback == 'function') callback();
        return;
    }
    
    if (flags.qm_file_type == "img") {
        helpers_box.innerHTML = "<img src='" + flags.qm_file + "' alt='' id='media_image'>";
        helpers_box.style.display = "block";
        wait_for_img_load("media_image", function() { show_quiz_image2(callback); });
    } else {
        show_quiz_image2(callback);
    }
}

function show_quiz_image2(callback) {
    if (flags.qm_file_type != "img" || helpers_box.offsetWidth > 150) {
        switch(flags.qm_file_type) {
            case "swf":
                var x = 
                    "<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0' align='middle' id='qm_file_swf'>" +
                    "<param name='allowScriptAccess' value='sameDomain' />" +
                    "<param name='movie' value='" + flags.qm_file + "' />" +
                    "<param name='quality' value='high' />" +
                    "<param name='wmode' value='transparent' />" +
                    "<embed src='" + flags.qm_file + "' wmode='transparent' name='qm_file_swf' quality='high' align='middle' allowScriptAccess='sameDomain' type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/go/getflashplayer'" +
                     (flags.qm_width != -1 ? " width='" + flags.qm_width + "'" : "") +
                     (flags.qm_height != -1 ? " height='" + flags.qm_height + "'" : "") +
                     " />" +
                    "</object>";
                if (flags.qm_as_question == 0) {
                    img_main.innerHTML = x;
                    quiz_image_elem.innerHTML =
                        "<img src='flv_logo.gif' alt='' onclick='show_image_popup();' id='image_popup_handler'>";
                } else {
                    questions_elem.innerHTML = x;
                }
                break;
            case "wmv":
                var x = 
                    "<object id='qm_file_wmv'" +
                      " width='" + (flags.qm_width != -1 ? flags.qm_width : "640") + "' " +
                      " height='" + (flags.qm_height != -1 ? flags.qm_height : "480") + "' " +
                    "classid='CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95'" +
                    "codebase='http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701'" +
                    "type='application/x-oleobject'>" +
                    "<param name='fileName' value='" + flags.qm_file + "'>" +
                    "<param name='animationatStart' value='1'>" +
                    "<param name='transparentatStart' value='1'>" +
                    "<param name='autoStart' value='1'>" +
                    "<param name='ShowControls' value='0'>" +
                    "<param name='ShowDisplay' value='0'>" +
                    "<param name='ShowStatusBar' value='0'>" +
                    "<param name='loop' value='0'>" +
                    "<param name='autosize' value='1'>" +
                    "<embed type='application/x-mplayer2' " +
                    "pluginspage='http://microsoft.com/windows/mediaplayer/en/download/' "+
                    "id='qm_file_wmv' name='qm_file_wmv' displaysize='4' autosize='1' "+
                    "showcontrols='0' showtracker='1' "+
                    "showdisplay='0' showstatusbar='0' videoborder3d='1'" +
                      " width='" + (flags.qm_width != -1 ? flags.qm_width : "640") + "' " +
                      " height='" + (flags.qm_height != -1 ? flags.qm_height : "480") + "' " +
                    "src='" + flags.qm_file + "' autostart='1' loop='0'>" +
                    "</embed>" +
                    "</object>";
                if (flags.qm_as_question == 0) {
                    quiz_image_elem.innerHTML =
                        "<img src='wmv_logo.gif' alt='' onclick='show_image_popup();' id='image_popup_handler'>";
                    img_main.innerHTML = x;
                } else {
                    questions_elem.innerHTML = x;
                }
                break;
            case "wma":
                if (flags.qm_as_question == 0) {
                    quiz_image_elem.innerHTML =
	                    "<object id='qm_file_wma' classid='CLSID:22D6F312-B0F6-11D0-94AB-0080C74C7E95' " +
                        "codebase='http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=6,4,5,715' " +
                        "width='150' height='50' type='application/x-oleobject' >" +
                        "<param name='FileName' value='" + flags.qm_file + "'>" +
                        "<param name='TransparentAtStart' Value='0'>" +
                        "<param name='AutoStart' value='0'>" +
                        "<param name='AnimationatStart' value='0'>" +
                        "<param name='ShowStatusBar' value='0'>" +
                        "<param name='ShowControls' value='1'>" +
                        "<param name='autoSize' value='1'>" +
                        "<param name='displaySize' value='0'>" +
                        "<param name='ShowAudioControls' value='1'>" +
                        "<param name='ShowPositionControls' value='0'>" +
                        "<embed type='application/x-mplayer2' pluginspage='http://microsoft.com/windows/mediaplayer/en/download/' " +
                          "src='" + flags.qm_file + "' width='150' height='50' transparentAtStart='0' autostart='0' " +
                          "animationAtStart='0' ShowControls='1' ShowAudioControls='1' ShowPositionControls='0' autoSize='0' " +
                          "ShowStatusBar='0' displaySize='0' ></embed></object>";
                }
                break;
            case "mov":
                var x = 
                    "<object classid='clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B'" +
                      " width='" + (flags.qm_width != -1 ? flags.qm_width : "640") + "' " +
                      " height='" + (flags.qm_height != -1 ? flags.qm_height : "480") + "' " +
                    "codebase='http://www.apple.com/qtactivex/qtplugin.cab'>" +
                    "<param name='src' value='" + flags.qm_file + "'>" +
                    "<param name='autoplay' value='1'>" +
                    "<param name='controller' value='0'>" +
                    "<param name='loop' value='0'>" +
                    "<embed src='" + flags.qm_file + "'" +
                      " width='" + (flags.qm_width != -1 ? flags.qm_width : "640") + "' " +
                      " height='" + (flags.qm_height != -1 ? flags.qm_height : "480") + "' " +
                    "autoplay='1'" +
                    "controller='0' loop='0' pluginspage='http://www.apple.com/quicktime/download/'>" +
                    "</embed>" +
                    "</object>";
                if (flags.qm_as_question == 0) {
                    quiz_image_elem.innerHTML =
                        "<img src='quicktime_log.gif' alt='' onclick='show_image_popup();' id='image_popup_handler'>";
                    img_main.innerHTML = x;
                } else {
                    questions_elem.innerHTML = x;
                }
                break;
            case "img":
                var x = "<img src='" + flags.qm_file + "'" +
                        (flags.qm_width != -1 ? " width='" + flags.qm_width + "'" : "") +
                        (flags.qm_height != -1 ? " height='" + flags.qm_height + "'" : "") +
                        " alt=''>";
                if (flags.qm_as_question == 0) {
                    quiz_image_elem.innerHTML =
                        "<img src='" + flags.qm_file + "' width='150' onclick='show_image_popup();' alt='' id='image_popup_handler' style='border:1px solid black'>" +
                        "<br><a id='image_popup_handler2' href='javascript:void(0);' onclick='show_image_popup();' style='margin-left:10px'>" +
                        "<img style='border:none' src='quiz_lupe.gif' alt=''>" +
                        "</a>";
                    img_main.innerHTML = x;
                } else {
                    questions_elem.innerHTML = x;
                }
                break;
            default:
                return;
        }
    } else {
        var x = "<img id='quiz_img_small_elem' src='" + flags.qm_file + "' alt=''>";
        if (flags.qm_as_question == 0) {
            quiz_image_elem.innerHTML = x;
            $("quiz_img_small_elem").style.cursor = "default";
        } else {
            questions_elem.innerHTML = x;
        }
    }
    if (flags.qm_file_type == "img") {
        helpers_box.style.display = "none";
    }

    if (typeof callback == 'function') callback();
}
function show_image_popup(dnd) {
    if (typeof(dnd) == 'undefined') dnd = 1;
    //img_main.firstChild.onclick = hide_image_popup;
    var e = image_popup;
    e.style.display = "block";
    var ep = getAbsoluteDimensions(e);
    e.style.top = (ie) ? ((document.documentElement.clientHeight - e.offsetHeight) / 2 - ep.parentsTop + "px")
                       : ((window.innerHeight - e.offsetHeight) / 2 - ep.parentsTop + "px");
    e.style.left = (document.body.offsetWidth - e.offsetWidth) / 2 - ep.parentsLeft + "px";
    if (dnd) wwquiz_image_dnd_elem = new dndObject(e.id);
    img_close.onclick = hide_image_popup;
    var iph = $("image_popup_handler");
    var iph2 = $("image_popup_handler2");
    if (iph != null) iph.onclick = null;
    if (iph2 != null) iph2.onclick = null;
}
function hide_image_popup() {
    image_popup.style.display = "none";
    var iph = $("image_popup_handler");
    var iph2 = $("image_popup_handler2");
    if (iph != null) iph.onclick = show_image_popup;
    if (iph2 != null) iph2.onclick = show_image_popup;
    quiz_image_dnd_elem = null;
}
function show_score() {
    if (typeof(ctx) == 'undefined') {
        alert("ctx is undefined");
        return;
    }
    var score = ctx.cfg_getscore();
    score_elem.innerHTML = '' + score.current + "/" + score.max;
}
function scalequiz_showpos(idx) {
    update_ok();

    var cont = $("actual");
    if (cont == null) return;
    var cur = drag_objects[idx];

    var ra = answers[1].split("-");
    var min_range = parseInt(ra[0]);
    var max_range = parseInt(ra[1]);

    var scale = getAbsoluteDimensions($("range"));
    var slider = getAbsoluteDimensions(cur.elem);
    var slider_pos = slider.offsetLeft - scale.offsetLeft;
    var slider_max_pos = scale.offsetWidth - slider.offsetWidth + 5;

    var val = parseInt(slider_pos * (max_range - min_range) / slider_max_pos + min_range);
    cont.value = (val < max_range) ? ((val > min_range) ? val : min_range) : max_range;
}
function gridquiz_show(row, col) {
    var e = $("grida_" + row + "_" + col);
    if (e == null) return;
    if (e.innerHTML == "&nbsp;") {
        var ans = flags.grid_list.split(",");
        for (var i = ans.length - 1; i >= 0; i--) {
            var x = $("grida_" + row + "_" + i);
            x.style.backgroundImage = "url(point_inactive.gif)";
            x.innerHTML = "&nbsp;";
        }
        e.style.backgroundImage = "url(point_active.gif)";
        e.innerHTML = "&nbsp;<div style='display:none;'></div>";
    } else {
        e.style.backgroundImage = "url(point_inactive.gif)";
        e.innerHTML = "&nbsp;";
    }
    update_ok();
}
function dnd_display_correction() {
    if (flags.quiz_type == "qt_drag_drop" || quiz_type == "puzzlequiz" || quiz_type == "hotspotquiz" || quiz_type == "connquiz") {
        switch (quiz_type) {
            case "fibquiz":
                var dim = get_max_dimensions("fib_o_", num_drag_objects);
                var dnd_pos = getAbsoluteDimensions(dnd_elem);
                for (var i = act_object = 0; i < possible_answers.length; i++) {
                    for (var j = 0; j < possible_answers[i].length; j++, act_object++) {
                        var elem_id = "fib_o_" + act_object;
                        var e = $(elem_id);
                        if (!e) return 0;

                        var ep = getAbsoluteDimensions(e);

                        e.style.left = i * (dim.max_width + 5) + dnd_pos.offsetLeft - ep.parentsLeft + 10 + "px";
                        e.style.top = j * (dim.max_height + 5) + dnd_pos.offsetTop - ep.parentsTop + 10 + "px";
                        var dnd_o = drag_objects[getDragIdx(elem_id)];
                        dnd_o.setHome();
                        dnd_o.resetToCurTarget();
                    }
                }
                break;
            case "matchquiz":
                for (var i = questions.length - 1; i >= 0; i--) {
                    var d_o = getDragIdx("obj_" + i);
                    var obj = drag_objects[d_o].elem;
                    var container = $("con_" + i);
                    var cont_pos = getAbsoluteDimensions(container);
                    var obj_pos = getAbsoluteDimensions(obj);
                    obj.style.left = cont_pos.offsetLeft - obj_pos.parentsLeft + "px";
                    obj.style.top = cont_pos.offsetTop - obj_pos.parentsTop + "px";
                    drag_objects[d_o].setHome();
                    drag_objects[d_o].resetToCurTarget();
                }
                break;
            case "connquiz":
                for (var i = conn_lines.length - 1; i >= 0; i--) {
                    var p1 = getAbsoluteDimensions($(conn_lines[i].e1));
                    var p2 = getAbsoluteDimensions($(conn_lines[i].e2));

                    var x1 = p1.offsetLeft + p1.offsetWidth;
                    var y1 = p1.offsetTop + Math.floor(p1.offsetHeight>>1);
                    var x2 = p2.offsetLeft;
                    var y2 = p2.offsetTop + Math.floor(p2.offsetHeight>>1);

                    conn_lines[i].l1.redraw(x1 + 5, y1, x1 + 15, y1);
                    conn_lines[i].l2.redraw(x1 + 15, y1, x2 - 15, y2);
                    conn_lines[i].l3.redraw(x2 - 15, y2, x2 - 5, y2);
                }
                break;
            case "puzzlequiz":
                if (flags.quiz_type == "qt_oneplace_puzzle") {
                    if (dnd_puzzle != null) {
                        if (dnd_puzzle.isInDrag() == 1) break;
                    }
                    var func = function() {
                        for (var i = drag_objects.length - 1; i >= 0; i--) {
                            drag_objects[i].resetToCurTarget();
                            drag_objects[i].setHome();
                            drag_objects[i].goHome();
                        }
                    }
                    if (ie) { window.setTimeout(func, 10) } else { func() }
                } else {
                    if (dnd_puzzle != null) {
                        if (ie) {
                            window.setTimeout("dnd_puzzle.resetPositions();", 10);
                        } else {
                            dnd_puzzle.resetPositions();
                        }
                    }
                }
                break;
            case "hotspotquiz":
                var txt = helpers_box.innerHTML;
                if (txt.search(/\|/) == -1) break;
                var c = txt.split("|");
                var pin = $("hotspotpin");
                var ip = getAbsoluteDimensions($("hotspotimage"));
                pin.style.left = parseInt(c[0]) + ip.offsetLeft + "px";
                pin.style.top = parseInt(c[1]) + ip.offsetTop - pin.offsetHeight + "px";
                break;
            case "mixquiz":
                sort_groups[0].setHome();
                break;
        }
    } else if (quiz_type == "scalequiz") {
        var slider = $("slider");
        var range = $("range");
        var actual = $("actual");
        var minval = $("minval");
        var maxval = $("maxval");

        var scale_width = Math.min($("answers").offsetWidth - 60, 600);
    
        var aep = getAbsoluteDimensions(answers_elem);
        var rep = getAbsoluteDimensions(range);
        var minp = getAbsoluteDimensions(minval);
        var maxp = getAbsoluteDimensions(maxval);

        var l = aep.offsetLeft + minval.offsetWidth;
        range.style.width = scale_width + "px";
        range.style.top = aep.offsetTop - rep.parentsTop + 30 + "px";
        range.style.left = l - rep.parentsLeft + 20 + "px";
        minval.style.top = aep.offsetTop - minp.parentsTop + 24 + "px";
        maxval.style.top = aep.offsetTop - maxp.parentsTop + 24 + "px";
        minval.style.left = aep.offsetLeft - minp.parentsLeft + 13 + "px";
        maxval.style.left = l - maxp.parentsLeft + scale_width + 30 + "px";

        var rdim = getAbsoluteDimensions(range);
        var sdim = getAbsoluteDimensions(slider);
        var adim = getAbsoluteDimensions(actual);

        slider.style.top = rdim.offsetTop - sdim.parentsTop - sdim.offsetHeight / 2 + 4 + "px";
        actual.style.top = rdim.offsetTop - adim.parentsTop + sdim.offsetHeight - 10 + "px";
        actual.style.left = aep.offsetLeft + minval.offsetWidth + 12 + "px";

        var dnd = drag_objects[getDragIdx("slider")];
        if (dnd == null) return;
        dnd.setArea(-1, rdim.offsetLeft + rdim.offsetWidth + 5, -1, rdim.offsetLeft);

        var cont = $("actual");
        if (cont == null) return;
        var cur = drag_objects[getDragIdx("slider")];
        var ra = answers[1].split("-");
        var min_range = parseInt(ra[0]);
        var max_range = parseInt(ra[1]);
        var scale = getAbsoluteDimensions($("range"));
        var slider_max_pos = scale.offsetWidth - cur.elem.offsetWidth + 5;
        var slider_pos = parseInt((cont.value - min_range) * slider_max_pos / (max_range - min_range));
        cur.elem.style.left = scale.offsetLeft + slider_pos + "px";
    }
}
function hotspot_setpin(e) {
    var ev = (ie) ? window.event : e;

    var ip = getAbsoluteDimensions($("hotspotimage"));

    var scroll_left = (window.pageXOffset)
        ? window.pageXOffset 
        : (document.documentElement.scrollLeft)
            ? document.documentElement.scrollLeft
            : 0;
    var scroll_top = (window.pageYOffset)
        ? window.pageYOffset
        : (document.documentElement.scrollTop)
            ? document.documentElement.scrollTop
            : 0;

    var pin = $("hotspotpin");
    pin.style.display = "block";
    pin.style.left = ev.clientX + scroll_left + "px";
    pin.style.top = ev.clientY - pin.offsetHeight + scroll_top + "px";

    helpers_box.innerHTML = (ev.clientX + scroll_left - ip.offsetLeft) + "|" + (ev.clientY + scroll_top - ip.offsetTop);

    update_ok();
}
function conf_next_button(act, mode) {
    if (ok_elem == null) return;
    if (typeof act == 'undefined') act = 0;

    var ok_img_elem = ok_elem.getElementsByTagName("img")[0];
    if (ok_img_elem == null) return;

    if (act == 1) {
        ok_img_elem.src = "next_enabled.gif";
        switch (mode) {
            case "check":
                ok_elem.onclick = function() { on_ok(); }
                ok_img_elem.alt = "";
                break;
            case "next":
                ok_elem.onclick = function() { go_next(); }
                ok_img_elem.alt = "";
                break;
        }
    } else {
        if (flags.quiz_skipping == 1 && mode != "disable") {
            ok_img_elem.src = "next_enabled.gif";
            ok_elem.onclick = function() { go_next(); }
        } else {
            ok_img_elem.src = "next_disabled.gif";
            ok_elem.onclick = null;
        }
    }
}

// --------------- end additional display and initialization section ------------------------------------------------------

function update_score() {
    if (typeof(ctx) == 'undefined') return;
    var score = ctx.cfg_getscore();
    ctx.cfg_setscore(score.current + quiz_points);
}
function update_score_sa(elem_id, correct_answer, i) {
    e = $(elem_id);
    if (e == null) return 0;

    if (i != -1) possible_answers[i] = e.value.toLowerCase();

    switch(flags.answer_type) {
        case "at_integer":
        case "at_float":
            var l = correct_answer.length;
            var h = e.value.replace(/,/g, ".");
            var cur = parseFloat(h);

            var p = correct_answer.search(/-/);
            if (p != -1) {
                var min = parseFloat(correct_answer.substr(0, p));
                var max = parseFloat(correct_answer.substr(p + 1));
                return (cur >= min && cur <= max);
            } else if (correct_answer.search(/<>/) != -1) {
                var nbr = parseFloat(correct_answer.substr(2));
                return eval(cur + "!=" + nbr);
            } else if (correct_answer.search(/<=|>=/) != -1) {
                var nbr = parseFloat(correct_answer.substr(2));
                return eval(cur + correct_answer.substring(0,1) + "=" + nbr);
            } else if (correct_answer.search(/<|>/) != -1) {
                var nbr = parseFloat(correct_answer.substr(1));
                return eval(cur + correct_answer.substring(0,1) + nbr);
            }
            return (cur == parseFloat(correct_answer));
        case "at_text":
            return (e.value.toLowerCase() == correct_answer.toLowerCase());
        case "at_cs_text":
            return (e.value == correct_answer);
        case "at_regexp":
            var re = new RegExp(correct_answer, "i");
            return (e.value.search(re) != -1);
        case "at_comma_list":
            var li = correct_answer.split(",");
            for (var i = li.length - 1; i >= 0; i--) {
                li[i] = li[i].replace(/^\s*(\S+)\s*$/, '$1');
                if (e.value.toLowerCase() == li[i].toLowerCase()) return 1;
            }
            break;
        case "at_cs_comma_list":
            var li = correct_answer.split(",");
            for (var i = li.length - 1; i >= 0; i--) {
                if (e.value == li[i]) return 1;
            }
            break;
    }
    return 0;
}
function on_ok(just_results) {
    if (typeof just_results == 'undefined') just_results = 0;
    var update = 0;
    switch (quiz_type) {
        case "mchoice":
            if ("choice" in document.forms.quiz) {
                for (var i = 0, ok = 1; i < document.quiz.choice.length; i++) {
                    var f = "correct_answer_" + (i + 1);
                    quiz_result.answers.push(document.quiz.choice[i].parentNode.nextSibling.firstChild.nodeValue);
                    if (document.quiz.choice[i].checked && flags[f] == 0) {
                        quiz_result.answer_types.push(answer_type.wrong);
                        ok = 0;
                    } else if (!document.quiz.choice[i].checked && flags[f] == 1) {
                        quiz_result.answer_types.push(answer_type.correct);
                        ok = 0;
                    } else if (document.quiz.choice[i].checked && flags[f] == 1) {
                        quiz_result.answer_types.push(answer_type.both);
                    } else {
                        quiz_result.answer_types.push(answer_type.none);
                    }
                }
                if (ok) update = 1;
            }
            break;
        case "sqmaquiz":
            update = 1;
            quiz_result.answer_type = flags.answer_type;
            for (var i = 0; i < answers.length; i++) {
                if (!update_score_sa("answer" + i, answers[i], i)) {
                    quiz_result.answers.push(answers[i]);
                    quiz_result.answer_types.push(answer_type.correct);
                    quiz_result.answers.push($("answer" + i).value);
                    quiz_result.answer_types.push(answer_type.wrong);
                    update = 0;
                } else {
                    quiz_result.answers.push($("answer" + i).value);
                    quiz_result.answer_types.push(answer_type.both);
                }
            }
            break;
        case "fibquiz":
            quiz_result.fibtext = flags.fibtext;
            update = 1;
            switch(flags.quiz_type) {
                case "qt_text":
                case "qt_cs_text":
                    for (var i = 0; i < answers.length; i++) {
                        var v1 = $("fib" + i).value;
                        var v2 = answers[i];
                        if (flags.quiz_type == "qt_text") {
                            v1 = v1.toLowerCase();
                            v2 = v2.toLowerCase();
                        }
                        if (v1 != v2) {
                            update = 0;
                            quiz_result.answers.push($("fib" + i).value);
                            quiz_result.answer_types.push(answer_type.wrong);
                            quiz_result.answers.push(answers[i]);
                            quiz_result.answer_types.push(answer_type.correct);
                        } else {
                            quiz_result.answers.push($("fib" + i).value);
                            quiz_result.answer_types.push(answer_type.both);
                        }
                    }
                    break;
                case "qt_drop_down":
                case "qt_drag_drop":
                    if (flags.one_for_all == 1) {
                        for (var i = 0; i < correct_answers[0].length; i++) {
                            var txt = "";
                            if (flags.quiz_type == "qt_drop_down") {
                                txt = document.quiz["fib" + i].options[document.quiz["fib" + i].options.selectedIndex].text;
                            } else if (drag_targets[i].objects_on[0] != null) {
                                txt = $(drag_objects[drag_targets[i].objects_on[0]].elem_id).innerHTML.split("&nbsp;")[1];
                            }
                            if (txt != correct_answers[0][i]) {
                                update = 0;
                                quiz_result.answers.push(txt);
                                quiz_result.answer_types.push(answer_type.wrong);
                                quiz_result.answers.push(correct_answers[0][i]);
                                quiz_result.answer_types.push(answer_type.correct);
                            } else {
                                quiz_result.answers.push(txt);
                                quiz_result.answer_types.push(answer_type.both);
                            }
                        }
                    } else {
                        for (var i = 0; i < correct_answers.length; i++) {
                            var txt = "";
                            if (flags.quiz_type == "qt_drop_down") {
                                txt = document.quiz["fib" + i].options[document.quiz["fib" + i].options.selectedIndex].text
                            } else {
                                if (drag_targets[i].objects_on[0] != null) {
                                    txt = $(drag_objects[drag_targets[i].objects_on[0]].elem_id).innerHTML.split("&nbsp;")[1];
                                }
                            }

                            for (var j = 0, found = 0; j < correct_answers[i].length; j++) {
                                if (txt == correct_answers[i][j]) {
                                    found = 1;
                                    quiz_result.answers.push(txt);
                                    quiz_result.answer_types.push(answer_type.both);
                                }
                            }
                            if (!found) {
                                update = 0;
                                quiz_result.answers.push(txt);
                                quiz_result.answer_types.push(answer_type.wrong);
                                quiz_result.answers.push(correct_answers[i].join(" oder "));
                                quiz_result.answer_types.push(answer_type.correct);
                            }
                        }
                    }
                    break;
            }
            break;
        case "matchquiz":
            quiz_result.questions = [];
            for (var i = 0, update = 1; i < answers.length; i++) {
                quiz_result.questions.push(questions[i]);

                var txt = "";
                var idx1 = 1;
                var idx2 = 2;
                if (flags.quiz_type == "qt_drop_down") {
                    var x = document.quiz["con_" + i];
                    idx1 = x.options[x.options.selectedIndex].id.substr(4);
                    idx2 = x.parentNode.previousSibling.id.substr(4);
                    txt = x.options[x.options.selectedIndex].text;
                } else {
                    if (drag_targets[i].objects_on[0] != null) {
                        var x = $(drag_objects[drag_targets[i].objects_on[0]].elem_id);
                        idx1 = x.id.substr(4);
                        idx2 = $("tar_" + i).nextSibling.id.substr(4);
                        txt = x.innerHTML.split("&nbsp;")[1];
                    }
                }
                if (idx1 != idx2) {
                    update = 0;
                    quiz_result.answers.push(answers[i]);
                    quiz_result.answer_types.push(answer_type.correct);
                    quiz_result.answers.push(txt);
                    quiz_result.answer_types.push(answer_type.wrong);
                } else {
                    quiz_result.answers.push(txt);
                    quiz_result.answer_types.push(answer_type.both);
                }
            }
            break;
        case "connquiz":
            quiz_result.questions = [];
            for (var i = 0, update = 1; i < questions.length; i++) {
                quiz_result.questions.push(questions[i]);
                var conn = parseInt(connections["ct1_" + i].split("_")[1]);
                var corr = parseInt($("spa_" + i).innerHTML);
                if (conn == corr) {
                    quiz_result.answers.push(answers[i]);
                    quiz_result.answer_types.push(answer_type.both);
                } else {
                    quiz_result.answers.push(answers[i]);
                    quiz_result.answer_types.push(answer_type.correct);
                    quiz_result.answers.push($("ct2_" + conn).innerHTML);
                    quiz_result.answer_types.push(answer_type.wrong);
                    update = 0;
                }
            }
            break;
        case "mixquiz":
            update = 1;
            if (flags.quiz_type == "qt_drop_down") {
                for (var i = 0; i < answers.length; i++) {
                    var txt = document.quiz["mix_" + i].options[document.quiz["mix_" + i].options.selectedIndex].text;
                    if (txt != answers[i]) {
                        update = 0;
                        quiz_result.answers.push(txt);
                        quiz_result.answer_types.push(answer_type.wrong);
                        quiz_result.answers.push(answers[i]);
                        quiz_result.answer_types.push(answer_type.correct);
                    } else {
                        quiz_result.answers.push(txt);
                        quiz_result.answer_types.push(answer_type.both);
                    }
                }
            } else {
                for (var i = sort_groups[0].targets.length - 1; i >= 0; i--) {
                    var t_id = sort_groups[0].targets[i].elem_id;
                    t_id = t_id.reverse().substr(4, t_id.length).reverse();
                    var o_id = drag_objects[sort_groups[0].targets[i].objects_on[0]].elem_id;
                    if (o_id != t_id) {
                        update = 0;
                        quiz_result.answers.push($(t_id).innerHTML);
                        quiz_result.answer_types.push(answer_type.correct);
                        quiz_result.answers.push($(o_id).innerHTML);
                        quiz_result.answer_types.push(answer_type.wrong);
                    } else {
                        quiz_result.answers.push($(o_id).innerHTML);
                        quiz_result.answer_types.push(answer_type.both);
                    }
                }
            }
            break;
        case "scalequiz":
            var v = $("actual").value;
            if (v == answers[0]) {
                update = 1;
                quiz_result.answers.push(v);
                quiz_result.answer_types.push(answer_type.both);
            } else {
                quiz_result.answers.push(answers[0]);
                quiz_result.answer_types.push(answer_type.correct);
                quiz_result.answers.push(v);
                quiz_result.answer_types.push(answer_type.wrong);
            }
            break;
        case "gridquiz":
            quiz_result.questions = [];
            var an = flags.grid_list.split(",");
            var cols = an.length;
            update = 1;
            for (var i = 0; i < questions.length; i++) {
                var ok = 1;
                quiz_result.questions.push(questions[i]);
                var j = 0;
                for (; j < cols; j++) {
                    e = $("grida_" + i + "_" + j);
                    if (e == null) return;

                    if (e.innerHTML != "&nbsp;" && answers[i] - 1 != j) { //||
                        //answers[i] - 1 == j && e.innerHTML == "&nbsp;") {
                        ok = 0;
                        break;
                    }
                }

                if (ok) {
                    quiz_result.answers.push(an[answers[i] - 1]);
                    quiz_result.answer_types.push(answer_type.both);
                } else {
                    quiz_result.answers.push(an[answers[i] - 1]);
                    quiz_result.answer_types.push(answer_type.correct);
                    quiz_result.answers.push(an[j]);
                    quiz_result.answer_types.push(answer_type.wrong);
                    update = 0;
                }
            }
            break;
        case "puzzlequiz":
            update = 1;
            for (var i = drag_objects.length - 1; i >= drag_objects.length - 2; i--) {
                if (drag_objects[i].ontarget == -1 || drag_objects[i].elem.id.substr(2) != drag_targets[drag_objects[i].ontarget].elem.id.substr(2)) {
                    update = 0;
                    break;
                }
            }
            break;
        case "hotspotquiz":
            var pinpos = helpers_box.innerHTML.split("|");
            pinpos[0] = parseInt(pinpos[0]);
            pinpos[1] = parseInt(pinpos[1]);
            update = (pinpos[0] >= flags.selection_left && pinpos[0] <= flags.selection_right &&
                      pinpos[1] >= flags.selection_top && pinpos[1] <= flags.selection_bottom);
            break;
    }
    if (just_results) return;
    timeout.stop_all();
    if (update) {
        update_score();
        show_score();
        quiz_result.points_received = quiz_result.points;
    } else {
        quiz_result.points_received = 0;
    }
    quiz_checked = 1;
    if (flags.feedback_enable == 1) {
        feedback.show(update ? "feedback_pass" : "feedback_fail");
        if (flags.feedback_popup == 1) {
            conf_next_button(0, "disable");
        } else {
            conf_next_button(1, "next");
        }
        quiz_disable();
    } else {
        go_next();
    }
    dnd_display_correction();
}
function set_results() {
    switch (quiz_type) {
        case "mchoice":
            for (var i = 1; i <= answers.length; i++) {
                quiz_result.answers.push(answers[i - 1]);
                if (flags["correct_answer_" + i] == 1) {
                    quiz_result.answer_types.push(answer_type.correct);
                } else {
                    quiz_result.answer_types.push(answer_type.none);
                }
            }
            break;
        case "sqmaquiz":
            for (var i = 0; i < answers.length; i++) {
                quiz_result.answers.push(answers[i]);
                quiz_result.answer_types.push(answer_type.correct);
            }
            break;
        case "fibquiz":
            var fib_result = function(answer) {
                var an = answer.split(",");
                for (var i = 0; i < an.length; i++) {
                    var p = an[i].indexOf("*");
                    if (p != -1) {
                        quiz_result.answers.push(an[i].substr(p + 1));
                        quiz_result.answer_types.push(answer_type.correct);
                    }
                }
            };

            quiz_result.fibtext = flags.fibtext;
            if (flags.one_for_all == 0) {
                for (var i = 0; i < answers.length; i++) {
                    fib_result(answers[i]);
                }
            } else {
                fib_result(answers[0]);
            }
            break;
        case "matchquiz":
        case "connquiz":
            quiz_result.questions = [];
            for (var i = 0; i < answers.length; i++) {
                quiz_result.questions.push(questions[i]);
                quiz_result.answers.push(answers[i]);
                quiz_result.answer_types.push(answer_type.correct);
                quiz_result.answers.push("");
                quiz_result.answer_types.push(answer_type.wrong);
            }
            break;
        case "mixquiz":
            for (var i = 0; i < answers.length; i++) {
                quiz_result.answers.push("");
                quiz_result.answer_types.push(answer_type.wrong);
                quiz_result.answers.push(answers[i]);
                quiz_result.answer_types.push(answer_type.correct);
            }
            break;
        case "scalequiz":
            quiz_result.answers.push(answers[0]);
            quiz_result.answer_types.push(answer_type.correct);
            quiz_result.answers.push("");
            quiz_result.answer_types.push(answer_type.wrong);
            break;
        case "gridquiz":
            quiz_result.questions = [];
            var an = flags.grid_list.split(",");
            for (var i = 0; i < questions.length; i++) {
                quiz_result.questions.push(questions[i]);
                quiz_result.answers.push(an[answers[i] - 1]);
                quiz_result.answer_types.push(answer_type.correct);
                quiz_result.answers.push("");
                quiz_result.answer_types.push(answer_type.wrong);
            }
            break;      
        case "puzzlequiz":
        case "hotspotquiz":
            break;
    }
}
function quiz_disable() {
    quiz_disabled = 1;
    hide_image_popup();
    var iph = $("image_popup_handler");
    var iph2 = $("image_popup_handler2");
    if (iph != null) iph.onclick = null;
    if (iph2 != null) iph2.onclick = null;
    switch(quiz_type) {
        case "mchoice":
        case "sqmaquiz":
            for (var i = 0; i < answers.length; i++) {
                 $((quiz_type == "mchoice" ? "choice" : "answer") + i ).disabled = 1;
            }
            break;
        case "fibquiz":
            if (flags.quiz_type != "qt_drag_drop") {
                var questions2 = flags.fibtext.split("___");
                for (var i = 0; i < questions2.length - 1; i++) {
                    $("fib" + i).disabled = 1;
                }
            } else {
                for (var i = 0; i < drag_objects.length; i++) {
                    drag_objects[i].addEffect(dnd_effects.disabled);
                }
            }
            break;
        case "matchquiz":
            for (var i = 0; i < answers.length; i++) {
                if (flags.quiz_type == "qt_drop_down") {
                    document.quiz["con_" + i].disabled = 1;
                } else {
                    drag_objects[i].addEffect(dnd_effects.disabled);
                }
            }
            break;
        case "connquiz":
            for (var i = questions.length - 1; i >= 0; i--) {
                $("ct1_" + i).onclick = null;
                $("ct2_" + i).onclick = null;
            }
            break;
        case "mixquiz":
            if (flags.quiz_type == "qt_drop_down") {
                for (var i = 0; i < answers.length; i++) {
                    document.quiz["mix_" + i].disabled = 1;
                }
            } else {
                sort_groups[0].addEffect(sort_effects.disabled);
            }
            break;
        case "scalequiz":
            drag_objects[0].addEffect(dnd_effects.disabled);
            break;
        case "gridquiz":
            var ans = flags.grid_list.split(",");
            for (var i = 0; i < questions.length; i++) {
                for (var j = 0; j < ans.length; j++) {
                    $("grida_" + i + "_" + j).onclick = null;
                }
            }
            break;
        case "puzzlequiz":
            for (var i = drag_objects.length - 1; i >= 0; i--) {
                drag_objects[i].addEffect(dnd_effects.disabled);
            }
            break;
        case "hotspotquiz":
            $("hotspotimage").onclick = null;
            break;
    }
}
function go_next() {
    if (quiz_checked) {
        if (typeof(ctx.pj_quiz_result) == 'undefined' || ctx.pj_quiz_result == null) {
            ctx.pj_quiz_result = [];
        }
        ctx.pj_quiz_result.push(quiz_result);
    }
    try {ctx.cfg_action(1001) } catch (e) {}
}
function input_only_int(e) {
    if (!e) e = window.event;

    var iCC = (e.which) ? e.which : e.keyCode;
    var iChar = String.fromCharCode(iCC);
    var aString = '0123456789';

    return aString.indexOf(iChar) != -1;
}
function input_only_float(e) {
    if (!e) e = window.event;

    var iCC = (e.which) ? e.which : e.keyCode;
    var iChar = String.fromCharCode(iCC);
    var aString = '0123456789';

    return (iChar != "." && iChar != ",") ?
                aString.indexOf(iChar) != -1 :
                !(this.value == "" || this.value.search(/,/) != -1 || this.value.search(/\./) != -1);
}
function ff_pre_input(obj, e, mode) {
    if (!e) e = window.event;

    var iCC = (e.which) ? e.which : e.keyCode;
    if (iCC < 48) {
        obj.onkeypress = function() { return 1; }
    } else {
        obj.onkeypress = (mode == 0) ? input_only_int : input_only_float;
    }
}
function update_ok() {
    if (quiz_disabled == 1) return;
    var ok = 0;
    switch(quiz_type) {
        case "mchoice":
            if ("choice" in document.forms.quiz) {
                for (var i = document.quiz.choice.length - 1; i >= 0; i--) {
                    if (document.quiz.choice[i].checked) {
                        ok = 1;
                        break;
                    }
                }
            }
            break;
        case "sqmaquiz":
            for (var i = answers.length - 1, ok = 1; i >= 0; i--) {
                var e = $("answer" + i);
                if (e != null) {
                    if (e.value == "") {
                        ok = 0;
                        break;
                    }
                }
            }
            if ((flags.answer_type == "at_comma_list" || flags.answer_type == "at_regexp") && ok) {
                for (var i = answers.length - 2; i >= 0; i--) {
                    for (var j = answers.length - 1; j >= i + 1; j--) {
                        if ($("answer" + i).value.toLowerCase() ==
                            $("answer" + j).value.toLowerCase()) {
                            ok = 0;
                            break;
                        }
                    }
                    if (!ok) break;
                }
            }
            break;
        case "fibquiz":
        case "matchquiz":
            switch(flags.quiz_type) {
                case "qt_text":
                case "qt_cs_text":
                    for (var i = answers.length - 1, ok = 1; i >= 0; i--) {
                        if ($("fib" + i).value == "") {
                            ok = 0;
                            break;
                        }
                    }
                    break;
                case "qt_drop_down":
					if (quiz_type == "matchquiz") {
                		ok = 1;
                		break;
                	}
                    for (var i = answers.length - 1, ok = 1; i >= 0; i--) {
                        var e = $("fib" + i);
                        if (e.options[e.selectedIndex].text == "") {
                            ok = 0;
                            break;
                        }
                    }
                    break;
                case "qt_drag_drop":
                    for (var i = drag_targets.length - 1, ok = 1; i >= 0; i--) {
                        if (drag_targets[i].objects_on.length == 0) {
                            ok = 0;
                            break;
                        }
                    }
                    break;
            }
            break;
        case "connquiz":
            ok = 1;
            for (var i = questions.length - 1; i >= 0; i--) {
                var c1 = connections["ct1_" + i];
                var c2 = connections["ct2_" + i];
                if (c1 == null || c2 == null || connections[c1] != "ct1_" + i || connections[c2] != "ct2_" + i) {
                    ok = 0;
                    break;
                }
            }
            break;
        case "puzzlequiz":
            ok = 1;
            if (flags.quiz_type == "qt_twoplace_puzzle") {
                for (var i = dnd_puzzle.members.length - 1; i >= 0; i--) {
                    if (dnd_puzzle.members[i].ontarget == -1) {
                        ok = 0;
                    }
                }
            }
            break;
        case "mixquiz":
        case "scalequiz":
        case "hotspotquiz":
            ok = 1;
            break;
        case "gridquiz":
            var an = flags.grid_list.split(",");
            var cols = an.length;
            for (var i = 0; i < questions.length; i++) {
                ok = 0;
                for (var j = 0; j < cols; j++) {
                    var e = $("grida_" + i + "_" + j);
                    if (e == null) return;

                    if (e.innerHTML != "&nbsp;") {
                        ok = 1;
                        break;
                    }
                }
                if (!ok) break;
            }
            break;
    }

    conf_next_button(ok, "check");
}

// --------------- end quiz check and update section ------------------------------------------------------

function on_load() {
    update_ok();

    window.onresize = dnd_display_correction;
}

// --------------- end onload section ------------------------------------------------------

/*
   Copyright Notice:

   Copyright 2007, datango AG
   ALL RIGHTS RESERVED

   UNPUBLISHED -- Use of a copyright notice is precautionary only and
   does not imply publication or disclosure.

   THE CONTENT OF THIS WORK CONTAINS CONFIDENTIAL AND PROPRIETARY
   INFORMATION OF DATANGO AG. ANY DUPLICATION, MODIFICATION,
   DISTRIBUTION, OR DISCLOSURE IN ANY FORM, IN WHOLE, OR IN PART, IS
   STRICTLY PROHIBITED WITHOUT THE PRIOR EXPRESS WRITTEN PERMISSION OF
   DATANGO AG.

*/
