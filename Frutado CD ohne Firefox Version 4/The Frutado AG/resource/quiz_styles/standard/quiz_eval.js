/*
   Filename: quiz_eval.js
   Author:   Falko Zander
   Created:  2007-07-10
   Update:   2008-02-27

   Abstract: This file contains all necessary JavaScript for Quiz Evaluation implementation.

   Notes:

*/

var ua = navigator.userAgent;
var ie = (ua.indexOf('MSIE') > 0);

var textarea_elem = null;
var eval_elem = null;
var go_elem = null;
var title_elem = null;

var quiz_result = {};
var params = [];

var answer_type = {
    wrong: "answer_type.wrong",
    correct: "answer_type.correct",
    both: "answer_type.both",
    none: "answer_type.none"
};

var texts = { 
    score_reached: "Your Score: ",
    score_pass: "Passing Score: ",
    score_max: "Maximum Score: ",
    item_name: "Item name",
    solutions: "Solutions",
    result: "Result",
    points: "Points"
};
    
// --------------- end global variables ------------------------------------------------------

function eval_interface() {
    textarea_elem = document.getElementById("textarea");
    eval_elem = document.getElementById("eval");
    go_elem = document.getElementById("go");
    title_elem = document.getElementById("title");

    var ids = [];

    if (!textarea_elem) ids.push("textarea");
    if (!eval_elem) ids.push("eval");
    if (!go_elem) ids.push("go");
    if (!title_elem) ids.push("title");

    if (ids.length) {
        alert("INCOMPLETE quiz_blank.html\nthe following Object-IDs are missing:\n    - " +
              ids.join("\n    - "));
        return 0;
    }

    return 1;
}

// --------------- end quiz_eval.html interface  ------------------------------------------------------

function get_data() {
    if (typeof(ctx.pj_quiz_result) == 'undefined') return 0;
    if (ctx.pj_quiz_result == null) return 0;

    quiz_result = ctx.pj_quiz_result;
    ctx.pj_quiz_result = null;
    return 1;
}

// --------------- data input from trainer context ctx ------------------------------------------------------

function eval_set_param(param_name, param_data) {
    params[param_name] = param_data;
}

// --------------- end external data input interface ------------------------------------------------------

function et_full() {
    var ret = et_minimal();

    ret.html += "<table class='f_detailresult' cellpadding='0' cellspacing='0'>" +
        "<tr><th class='f_head1'>" + texts.item_name + "</th><th class='f_head2'>" + texts.solutions + "</th><th class='f_head3'>" +
        texts.result + "</th><th class='f_head4'>" + texts.points + "</th></tr>";

    for (var i = 0; i < quiz_result.length; i++) {
        if (typeof quiz_result[i].title == 'undefined') quiz_result[i].title = "&nbsp;";
        if (typeof quiz_result[i].points_received == 'undefined') quiz_result[i].points_received = "0";

        ret.html += "<tr>" +
            "<td class='f_title'>" + quiz_result[i].title + "</td>" +
            "<td class='f_solutions'>";

        var html = "";
        switch (quiz_result[i].quiz_type) {
            case "mchoice":
                for (var j = 0; j < quiz_result[i].answers.length; j++) {
                    switch (quiz_result[i].answer_types[j]) {
                        case answer_type.both:
                            html += "<div class='answer_correct'><input type='checkbox' checked='checked' disabled='disabled'>";
                            break;
                        case answer_type.correct:
                            html += "<div class='answer_shouldbe'><input type='checkbox' disabled='disabled'>";
                            break;
                        case answer_type.wrong:
                            html += "<div class='answer_wrong'><input type='checkbox' checked='checked' disabled='disabled'>";
                            break;
                        case answer_type.none:
                            html += "<div class='answer_none'><input type='checkbox' disabled='disabled'>";
                            break;
                    }
                    html += quiz_result[i].answers[j] +  "</div>";
                }
                break;
            case "sqmaquiz":
                html += "<table>";
                for (var j = 0, c = 1; j < quiz_result[i].answers.length; j++) {
                    if (quiz_result[i].answer_types[j] == answer_type.both) {
                        html += "<tr><td>" + (c++) + ".</td><td class='answer_correct'>" + quiz_result[i].answers[j] + "</td><td>&nbsp;</td><td>&nbsp;</td></tr>";
                    } else if (quiz_result[i].answer_types[j] == answer_type.wrong) {
                        html += "<td class='answer_wrong'>" + quiz_result[i].answers[j] + "</td></tr>";
                    } else if (quiz_result[i].answer_types[j] == answer_type.correct) {
                        html += "<tr><td>" + (c++) + ".</td><td class='answer_shouldbe'>";
                        if (quiz_result[i].answer_type == "at_comma_list") {
                            html += quiz_result[i].answers[j].toString().split(",").join(" oder ");
                        } else {
                            html += quiz_result[i].answers[j];
                        }
                        html += "</td><td class='spacer'>&nbsp;</td>";
                    }
                }
                html += "</table>";
                break;
            case "fibquiz":
                var txt = quiz_result[i].fibtext.split("___");
                var ac = all_correct(quiz_result[i].answer_types);

                if (ac) {
                    for (var j = 0; j < txt.length - 1; j++) {
                        html += txt[j] + "<span class='answer_correct'>" + quiz_result[i].answers[j] + "</span>";
                    }
                    html += txt[txt.length - 1];
                } else {
                    for (var j = c = 0; j < quiz_result[i].answer_types.length; j++) {
                        if (quiz_result[i].answers[j] == "") quiz_result[i].answers[j] = " ___ ";

                        if (quiz_result[i].answer_types[j] == answer_type.wrong) {
                            html += txt[c] + "<span class='answer_wrong'>" + quiz_result[i].answers[j] + "</span>";
                            c++;
                        } else if (quiz_result[i].answer_types[j] == answer_type.both) {
                            html += txt[c] + "<span class='answer_correct'>" + quiz_result[i].answers[j] + "</span>";
                            c++;
                        }
                    }
                    html += txt[txt.length - 1] + "<br /><br />";
                    for (var j = c = 0; j < quiz_result[i].answer_types.length; j++) {
                        if (quiz_result[i].answer_types[j] == answer_type.correct) {
                            html += txt[c] + "<span class='answer_shouldbe'>" + quiz_result[i].answers[j] + "</span>";
                            c++;
                        } else if (quiz_result[i].answer_types[j] == answer_type.both) {
                            html += txt[c] + "<span class='answer_correct'>" + quiz_result[i].answers[j] + "</span>";
                            c++;
                        }
                    }
                    html += txt[txt.length - 1];
                }
                break;
            case "matchquiz":
            case "connquiz":
                html += "<table>";
                for (var j = q = 0; j < quiz_result[i].answers.length; j++) {
                    html += "<tr><td>" + quiz_result[i].questions[q++] + "</td><td class='spacer'>&nbsp;</td>";
                    if (quiz_result[i].answer_types[j] == answer_type.both) {
                        html += "<td class='answer_correct'>" + quiz_result[i].answers[j] + "</td><td>&nbsp;</td><td>&nbsp;</td></tr>";
                    } else if (quiz_result[i].answer_types[j] == answer_type.correct) {
                        html += "<td class='answer_shouldbe'>" + quiz_result[i].answers[j] + "</td>" +
                                "<td class='spacer'>&nbsp;</td>" +
                                "<td class='answer_wrong'>" + quiz_result[i].answers[j + 1] + "</td></tr>";
                        j++;
                    }
                }
                html += "</table>";
                break;
            case "mixquiz":
                var ac = all_correct(quiz_result[i].answer_types);

                if (ac) {
                    for (var j = 0; j < quiz_result[i].answers.length; j++) {
                        html += "<span class='answer_correct'>" + quiz_result[i].answers[j] + "</span>&nbsp;";
                    }
                } else {
                    html += "<table><tr>";
                    for (var j = 0; j < quiz_result[i].answers.length; j++) {
                        if (quiz_result[i].answer_types[j] == answer_type.correct) {
                            html += "<td class='answer_shouldbe'>" + quiz_result[i].answers[j] + "</td>";
                        } else if (quiz_result[i].answer_types[j] == answer_type.both) {
                            html += "<td class='answer_correct'>" + quiz_result[i].answers[j] + "</td>";
                        }
                    }
                    html += "</tr><tr>";
                    for (var j = 0; j < quiz_result[i].answers.length; j++) {
                        if (quiz_result[i].answer_types[j] == answer_type.wrong) {
                            html += "<td class='answer_wrong'>" + quiz_result[i].answers[j] + "</td>";
                        } else if (quiz_result[i].answer_types[j] == answer_type.both) {
                            html += "<td class='answer_correct'>" + quiz_result[i].answers[j] + "</td>";
                        }
                    }
                    html += "</tr></table>";
                }
                break;
            case "scalequiz":
                if (quiz_result[i].answer_types[0] == answer_type.both) {
                    html += "<span class='answer_correct'>&nbsp;" + quiz_result[i].answers[0] + "</span>";
                } else if (quiz_result[i].answer_types[0] == answer_type.correct) {
                    html += "<span class='answer_shouldbe'>&nbsp;" + quiz_result[i].answers[0] + "</span>&nbsp;";
                    html += "<span class='answer_wrong'>&nbsp;" + quiz_result[i].answers[1] + "</span>";
                }
                break;
            case "gridquiz":
                html += "<table width='100%'>";
                for (var j = c = 0; j < quiz_result[i].answers.length; j++) {
                    html += "<tr><td>" + quiz_result[i].questions[c++] + "</td><td class='spacer'>&nbsp;</td>";
                    if (quiz_result[i].answer_types[j] == answer_type.both) {
                        html += "<td class='answer_correct'>" + quiz_result[i].answers[j] + "</td><td>&nbsp;</td><td>&nbsp;</td></tr>";
                    } else if (quiz_result[i].answer_types[j] == answer_type.correct) {
                        html += "<td class='answer_shouldbe'>" + quiz_result[i].answers[j] + "</td>" +
                                "<td class='spacer'>&nbsp;</td>" +
                                "<td class='answer_wrong'>" + quiz_result[i].answers[j + 1] + "</td></tr>";
                        j++;
                    }
                }
                html += "</table>";
                break;
            case "puzzlequiz":
            case "hotspotquiz":
                html += "&nbsp;";
        }

        ret.html += html;
        ret.html += "</td>" +
            "<td class='f_result'><img src='" + ((quiz_result[i].points_received == quiz_result[i].points) ? "quiz_pass.gif" : "quiz_fail.gif") + "' width='20' height='20' alt='img'></td>" +
            "<td class='f_points'>" + quiz_result[i].points_received + "/" + quiz_result[i].points + "</td>" +
            "</tr>";
    }

    ret.html += "</table>";

    return ret;
}

// --------------- end full display section ------------------------------------------------------

function et_reduced() {
    var ret = et_minimal();

    ret.html += "<table class='r_detailresult' cellpadding='0' cellspacing='0'>" +
        "<tr><th class='r_head1'>" + texts.item_name + "</th><th class='r_head2'>" + texts.result + "</th><th class='r_head3'>" + 
        texts.points + "</th></tr>";

    for (var i = 0; i < quiz_result.length; i++) {
        if (typeof quiz_result[i].title == 'undefined') quiz_result[i].title = "&nbsp;";
        if (typeof quiz_result[i].points_received == 'undefined') quiz_result[i].points_received = "0";

        ret.html += "<tr>" +
            "<td class='r_title'>" + quiz_result[i].title + "</td>" +
            "<td class='r_result'><img src='" + ((quiz_result[i].points_received == quiz_result[i].points) ? "quiz_pass.gif" : "quiz_fail.gif") + "' width='20' height='20' alt='img'></td>" +
            "<td class='r_points'>" + quiz_result[i].points_received + "/" + quiz_result[i].points + "</td>" +
            "</tr>";
    }

    ret.html += "</table>";
    return ret;
}

// --------------- end reduced display section ------------------------------------------------------

function et_minimal() {
    for (var i = quiz_result.length - 1, pos_points = rec_points = 0; i >= 0; i--) {
        if (!isNaN(quiz_result[i].points)) pos_points += quiz_result[i].points;
        if (!isNaN(quiz_result[i].points_received)) rec_points += quiz_result[i].points_received;
    }
    var threshold = params.quiz_threshold * pos_points;

    var html = "<table class='m_globalresult' cellpadding='0' cellspacing='0'><tr>" +
        "<td class='m_rec_points'>" + texts.score_reached + "<span>" + rec_points + "</span></td>" +
        "<td class='m_pas_points'>" + texts.score_pass + "<span>" + Math.ceil(threshold) + "</span></td>" +
        "<td class='m_max_points'>" + texts.score_max + "<span>" + pos_points + "</span></td>" +
        "</tr>";

    if (params.feedback_enable == 1) {
        var txt = (rec_points >= threshold) ? params.feedback_pass : params.feedback_fail;
        if (txt != "") {    
            html += "<tr><td class='m_feedback' colspan='3'>" + txt + "</td></tr>";
        }
    }
    
    html += "</table>";

    return { "html": html, "pos_points": pos_points, "rec_points": rec_points, "threshold": threshold };
}

// --------------- end minimal display section ------------------------------------------------------

function eval_enable() {
    var score = ctx.cfg_getscore();
    params.quiz_threshold = (params.quiz_threshold == "empty")
                            ? score.pass / score.max
                            : params.quiz_threshold / 100;

    texts.score_reached = ctx.cfg_tr("quizScoreReached");
    texts.score_pass = ctx.cfg_tr("quizScorePass");
    texts.score_max = ctx.cfg_tr("quizScoreMax");
    texts.item_name = ctx.cfg_tr("quizItemName");
    texts.solutions = ctx.cfg_tr("quizSolutions");
    texts.result = ctx.cfg_tr("quizResult");
    texts.points = ctx.cfg_tr("quizPoints");

    if (!eval_interface()) return;
    var data = get_data();

    title_elem.innerHTML = params.proj_title;
    eval_elem.innerHTML = (data == 1) ? eval(params.eval_type + "();").html : "";
    textarea_elem.style.visibility = "visible";

    if (!ie) {
        var x = document.getElementById("centerTable");
        x.style.height = window.innerHeight - x.offsetTop + "px";
    }
}

// --------------- end eval enable section ------------------------------------------------------

function go_next() {
    ctx.cfg_action('PLAY');
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
function all_correct(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != answer_type.both) return 0;
    }
    return 1;
}

// --------------- end of tools section ------------------------------------------------------

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
