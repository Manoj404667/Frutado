/*
   Filename: quiz_dnd.js
   Author:   Falko Zander
   Created:  2007-06-20
   Update:   2008-01-31

   Abstract: This file contains a JavaScript drag and drop library.

   Notes:
*/

var ua = navigator.userAgent;
var ie = (ua.indexOf('MSIE') > 0);
var drag_objects = [];
var drag_targets = [];
var dnd_effects = {
    CSS: "dnd_effects.CSS",
    centeredDrop: "dnd_effects.centeredDrop",
    restrictedHorizontal: "dnd_effects.restrictedHorizontal",
    restrictedVertical: "dnd_effects.restrictedVertical",
    runFunctionAfterDrop: "dnd_effects.runFunctionAfterDrop",
    runFunctionAfterDrag: "dnd_effects.runFunctionAfterDrag",
    runFunctionWhileDragging: "dnd_effects.runFunctionWhileDragging",
    disabled: "dnd_effects.disabled",
    enabled: "dnd_effects.enabled"
}
var dnd_functions = {
    afterDrop: "dnd_functions.afterDrop",
    afterDrag: "dnd_functions.afterDrag",
    whileDragging: "dnd_functions.whileDragging"
}
var tar_effects = {
    CSS: "tar_effects.CSS",
    centeredDrop: "tar_effects.centeredDrop",
    uniqueTarget: "tar_effects.uniqueTarget",
    replaceableTarget: "tar_effects.replaceableTarget"
}

// ------- end of global variables ---------------------

function dndTarget(tar_id) {
    this.elem_id = tar_id;
    this.elem = document.getElementById(this.elem_id);
    if (this.elem != null) {
        this.elem.style.zIndex = "1";
        this.objects_on = [];
        this.effects = [];

        drag_targets.push(this);
        this.idx = drag_targets.length - 1;
    }
}
dndTarget.prototype.removeObject = function(object_idx) {
    if (this.elem == null) return;
    for (var i = this.objects_on.length - 1, n = []; i >= 0; i--) {
        if (this.objects_on[i] != object_idx) {
            n.push(this.objects_on[i]);
        }
    }
    this.objects_on = n;
    this.doCSS();
}
dndTarget.prototype.addEffect = function() {
    if (this.elem == null) return;
    for (var j = dndTarget.prototype.addEffect.arguments.length - 1; j >= 0; j--) {
        var effect = dndTarget.prototype.addEffect.arguments[j];
        if (!this.hasEffect(effect)) {
            switch (effect) {
                case tar_effects.CSS:
                    this.effects.push(effect);
                    this.doCSS();
                    break;
                case tar_effects.centeredDrop:
                case tar_effects.uniqueTarget:
                case tar_effects.replaceableTarget:
                    this.effects.push(effect);
                    break;
            }
        }
    }
}
dndTarget.prototype.hasEffect = function(effect) {
    if (this.elem == null) return false;
    for (var i = this.effects.length - 1; i >= 0; i--) {
        if (this.effects[i] == effect) return true;
    }
    return false;
}
dndTarget.prototype.isEmpty = function() {
    if (this.elem == null) return true;
    return (this.objects_on.length == 0);
}
dndTarget.prototype.doCSS = function() {
    if (this.elem == null || !this.hasEffect(tar_effects.CSS)) return;
    this.elem.className = this.isEmpty() ? "dd_target_idle" : "dd_target_under_object";
}
dndTarget.prototype.remEffect = function(effect) {
    if (this.elem == null || !this.hasEffect(effect)) return;
    for (var i = this.effects.length - 1, new_effects = []; i >= 0; i--) {
        if (this.effects[i] != effect) {
            new_effects.push(this.effects[i]);
        }
    }
    this.effects = new_effects;
}

// ------- end of drag target ---------------------

function dndObject(elem_id) {
    this.elem_id = elem_id;
    this.elem = document .getElementById(this.elem_id);
    if (this.elem != null) {
        this.abs_home = getAbsoluteDimensions(this.elem);
        this.rel_home = [];
        this.rel_home.offsetLeft = this.elem.offsetLeft;
        this.rel_home.offsetTop = this.elem.offsetTop;

        this.elem.style.position = "absolute";
        this.elem.style.left = this.rel_home.offsetLeft + "px";
        this.elem.style.top = this.rel_home.offsetTop + "px";
        this.elem.style.cursor = "pointer";
        this.elem.style.zIndex = "2";

        this.func_after_drag = null;
        this.func_after_drop = null;
        this.func_while_dragging = null;

        this.elem.onmousedown = beginDrag;
        this.elem.onselectstart = function() { return false; }
        this.elem.ondragstart = function() {return false; }

        this.do_drag = "doDrag";
        this.end_drag = "endDrag";

        this.targets = [];
        this.ontarget = -1;

        this.effects = [];
        this.restriction = [];
        this.restriction.l = -1;
        this.restriction.t = -1;
        this.restriction.r = -1;
        this.restriction.b = -1;
        this.mouse_is_out = "";

        this.mouse_touch = [];
        this.mouse_touch.left = -1;
        this.mouse_touch.top = -1;

        this.is_in_drag = 0;

        drag_objects.push(this);
        this.idx = drag_objects.length - 1;
    }

}
dndObject.prototype.addTarget = function(tar_obj) {
    if (this.elem == null) return;
    for (var i = drag_targets.length - 1, tar = -1; i >= 0; i--) {
        if (drag_targets[i] == tar_obj) {
            tar = i;
            break;
        }
    }
    if (tar != -1 && !this.hasTarget(tar)) {
        this.targets.push(tar);
    }
}
dndObject.prototype.hasTarget = function(tar_idx) {
    if (this.elem == null) return;
    for (var i = this.targets.length - 1; i >= 0; i--) {
        if (tar_idx == this.targets[i]) return true;
    }
    return false;
}
dndObject.prototype.addFunction = function(func, fname) {
    if (this.elem == null) return;
    switch (func) {
        case dnd_functions.afterDrop:
            this.func_after_drop = fname;
            break;
        case dnd_functions.afterDrag:
            this.func_after_drag = fname;
            break;
        case dnd_functions.whileDragging:
            this.func_while_dragging = fname;
            break;
    }
}
dndObject.prototype.addEffect = function() {
    if (this.elem == null) return;
    for (var j = dndObject.prototype.addEffect.arguments.length - 1; j >= 0; j--) {
        var effect = dndObject.prototype.addEffect.arguments[j];
        if (!this.hasEffect(effect)) {
            switch (effect) {
                case dnd_effects.CSS:
                    this.effects.push(effect);
                    this.doCSS("init");
                    break;
                case dnd_effects.disabled:
                    this.elem.style.cursor = "default";
                case dnd_effects.centeredDrop:
                case dnd_effects.restrictedHorizontal:
                case dnd_effects.restrictedVertical:
                    this.effects.push(effect);
                    break;
                case dnd_effects.enabled:
                    this.elem.style.cursor = "pointer";
                    this.remEffect(dnd_effects.disabled);
                    break;
            }
        }
    }
}
dndObject.prototype.remEffect = function(effect) {
    if (this.elem == null || !this.hasEffect(effect)) return;
    for (var i = this.effects.length - 1, new_effects = []; i >= 0; i--) {
        if (this.effects[i] != effect) {
            new_effects.push(this.effects[i]);
        }
    }
    this.effects = new_effects;
}
dndObject.prototype.hasEffect = function(effect) {
    if (this.elem == null) return false;
    for (var i = this.effects.length; i >= 0; i--) {
        if (this.effects[i] == effect) return true;
    }
    return false;
}
dndObject.prototype.doCSS = function() {
    if (this.elem == null || !this.hasEffect(dnd_effects.CSS)) return;
    var init = false;
    if (dndObject.prototype.doCSS.arguments.length != 0) {
        switch (dndObject.prototype.doCSS.arguments[0]) {
            case "init":
                init = true;
                var idx = this.idx;
                this.elem.onmouseover = function() { helpCSS(idx, "mouseover") }
                this.elem.onmouseout = function() { helpCSS(idx, "onmouseout") }
                break;
            case "mouseover":
                if (!this.hasEffect(dnd_effects.disabled)) {
                    this.elem.className = "dd_object_mouse_over";
                    for (var i = this.targets.length - 1; i >= 0; i--) {
                        drag_targets[this.targets[i]].elem.className = "dd_target_on_mouseover_object";
                    }
                }
                break;
            case "onmouseout":
                if (this.ontarget == -1) {
                    this.elem.className = "dd_object_idle";
                    for (var i = this.targets.length - 1; i >= 0; i--) {
                        drag_targets[this.targets[i]].doCSS();
                    }
                } else {
                    this.elem.className = "dd_object_on_target";
                }
                break;
            case "ondrag":
                if (dndObjectIsOnTarget(this) != -1) {
                    this.elem.className = "dd_object_over_target";
                } else {
                    this.elem.className = "dd_object_in_drag";
                }
                break;
            default:
                break;
        }
    }

    if (dndObject.prototype.doCSS.arguments.length == 0 || init) {
        if (this.ontarget == -1) {
            this.elem.className = "dd_object_idle";
        } else {
            this.elem.className = "dd_object_on_target";
        }
    }
}
dndObject.prototype.setHome = function() {
    if (this.elem == null) return;
    this.abs_home = getAbsoluteDimensions(this.elem);
    this.rel_home.offsetLeft = (this.elem.style.left != "") ? parseInt(this.elem.style.left) : this.elem.offsetLeft;
    this.rel_home.offsetTop = (this.elem.style.top != "") ? parseInt(this.elem.style.top) : this.elem.offsetTop;
}
dndObject.prototype.goTarget = function(tar_idx) {
    if (this.elem == null || !this.hasTarget(tar_idx)) return;

    var tar = drag_targets[tar_idx];
    tar.objects_on.push(this.idx);
    this.ontarget = tar.idx;

    this.resetToCurTarget();
    this.doCSS();
    tar.doCSS();
}
dndObject.prototype.resetToCurTarget = function() {
    if (this.elem == null || this.ontarget == -1) return;

    var tar = drag_targets[this.ontarget];
    var th = getAbsoluteDimensions(tar.elem);
    var ch = getAbsoluteDimensions(this.elem);
    var left = (this.hasEffect(dnd_effects.centeredDrop) || tar.hasEffect(tar_effects.centeredDrop))
             ? (th.offsetWidth - ch.offsetWidth) / 2
             : 0;
    var top = (this.hasEffect(dnd_effects.centeredDrop) || tar.hasEffect(tar_effects.centeredDrop))
            ? (th.offsetHeight - ch.offsetHeight) / 2
            : 0;
    this.elem.style.left = left + th.offsetLeft - ch.parentsLeft + "px";
    this.elem.style.top = top + th.offsetTop - ch.parentsTop + "px";
}
dndObject.prototype.goHome = function() {
    if (this.elem == null) return;

    this.elem.style.left = this.rel_home.offsetLeft + "px";
    this.elem.style.top = this.rel_home.offsetTop + "px";
    this.doCSS();

    if (dndObject.prototype.goHome.arguments.length == 1 && dndObject.prototype.goHome.arguments[0] == true) {
        var tidx = dndObjectIsOnTarget(this);
        if (tidx != -1) {
            this.ontarget = tidx;
            drag_targets[tidx].objects_on.push(this.idx);
        }
    }
}
dndObject.prototype.setArea = function(top, right, bottom, left) {
    if (this.elem == null) return;
    this.restriction.t = top;
    this.restriction.r = right;
    this.restriction.b = bottom;
    this.restriction.l = left;
}
dndObject.prototype.disable = function() {
    if (this.elem == null) return;
    this.elem.onmousedown = null;
    this.elem.style.cursor = "default";
}

// ------- end of drag object ---------------------

function helpCSS(idx, mode) {
    drag_objects[idx].doCSS(mode);
}
function getDragIdx(elem_id) {
    for (var i = drag_objects.length - 1; i >= 0; i--) {
        if (drag_objects[i].elem_id == elem_id) return i;
    }
    return -1;
}
function getTarIdx(elem_id) {
    for (var i = drag_targets.length - 1; i >= 0; i--) {
        if (drag_targets[i].elem_id == elem_id) return i;
    }
    return -1;
}
function dndObjectIsOnTarget(movable) {
    if (movable == null) return -1;
    for (var i = movable.targets.length - 1, max = idx = -1; i >= 0; i--) {
        var h = rectOverlapping(movable.elem, drag_targets[movable.targets[i]].elem);
        if (h > max) {
            max = h;
            idx = movable.targets[i];
        }
    }
    return idx;
}

// ------- end of tool functions ---------------------

function beginDrag(e) {
    if (!ie) {
        if (typeof e.preventDefault != 'undefined') {
            e.preventDefault();
        }
    }

    var idx = getDragIdx(this.id);
    if (idx == -1) return;
    var cur = drag_objects[idx];
    if (cur.hasEffect(dnd_effects.disabled)) return;

    cur.is_in_drag = 1;

    if (ie) {
        var Ev = window.event;
        document.onmousemove = function(e) { eval(cur.do_drag + "(e, idx)"); }
        document.onmouseup = function() { eval(cur.end_drag + "(idx)"); }
    } else {
        var Ev = e;
        window.onmousemove = function(e) { eval(cur.do_drag + "(e, idx)"); }
        window.onmouseup = function() { eval(cur.end_drag + "(idx)"); }
    }

    cur.lastX = Ev.clientX;
    cur.lastY = Ev.clientY;
    cur.elem.style.zIndex = "100";

    var pos = getAbsoluteDimensions(cur.elem);
    cur.mouse_touch.left = Ev.clientX - pos.offsetLeft;
    cur.mouse_touch.top = Ev.clientY - pos.offsetTop;

    if (cur.ontarget != -1) {
        drag_targets[cur.ontarget].removeObject(cur.idx);
        cur.ontarget = -1;
    }

    eval(cur.func_after_drag);
}
function doDrag(e, idx) {
    var cur = drag_objects[idx];

    if (ie) { Ev = window.event } else { Ev = e }

    var pos = getAbsoluteDimensions(cur.elem);

    var left = pos.offsetLeft;
    var right = left + pos.offsetWidth;
    var top = pos.offsetTop;
    var bottom = top + pos.offsetHeight;
    switch (cur.mouse_is_out) {
        case "l":
            if (cur.mouse_touch.left + left <= Ev.clientX) {
                cur.mouse_is_out = "";
                cur.lastX = Ev.clientX;
                cur.lastY = Ev.clientY;
                cur.elem.style.left = cur.lastX - pos.parentsLeft - cur.mouse_touch.left + "px";
            } else {
                return;
            }
            break;
        case "r":
            if (right - pos.offsetWidth + cur.mouse_touch.left >= Ev.clientX) {
                cur.mouse_is_out = "";
                cur.lastX = Ev.clientX;
                cur.lastY = Ev.clientY;
                cur.elem.style.left = cur.lastX - pos.parentsLeft - cur.mouse_touch.left + "px";
            } else {
                return;
            }
            break;
        case "t":
            if (cur.mouse_touch.top + top <= Ev.clientY) {
                cur.mouse_is_out = "";
                cur.lastX = Ev.clientX;
                cur.lastY = Ev.clientY;
                cur.elem.style.top = cur.lastY - pos.parentsTop - cur.mouse_touch.top + "px";
            } else {
                return;
            }
            break;
        case "b":
            if (bottom - pos.offsetHeight + cur.mouse_touch.top >= Ev.clientY) {
                cur.mouse_is_out = "";
                cur.lastX = Ev.clientX;
                cur.lastY = Ev.clientY;
                cur.elem.style.top = cur.lastY - pos.parentsTop - cur.mouse_touch.top + "px";
            } else {
                return;
            }
            break;
    }

    if (!cur.hasEffect(dnd_effects.restrictedVertical)) {
        var dif = (Ev.clientX - cur.lastX);
        if (dif != 0) {
            var lp = parseInt(cur.elem.style.left) + dif;

            if ((cur.restriction.l == -1 || dif > 0 || pos.offsetLeft + dif > cur.restriction.l) &&
                (cur.restriction.r == -1 || dif < 0 || pos.offsetLeft + pos.offsetWidth + dif < cur.restriction.r)) {
                cur.elem.style.left = lp + "px";
            } else {
                if (dif > 0) {
                    cur.elem.style.left = cur.restriction.r - pos.offsetWidth - pos.parentsLeft + "px";
                    cur.mouse_is_out = "r";
                } else {
                    cur.elem.style.left = cur.restriction.l - pos.parentsLeft + "px";
                    cur.mouse_is_out = "l";
                }
            }
        }
    }
    if (!cur.hasEffect(dnd_effects.restrictedHorizontal)) {
        var dif = (Ev.clientY - cur.lastY);
        if (dif != 0) {
            var tp = parseInt(cur.elem.style.top) + dif;

            if ((cur.restriction.t == -1 || dif > 0 || pos.offsetTop + dif > cur.restriction.t) &&
                (cur.restriction.b == -1 || dif < 0 || pos.offsetTop + pos.offsetHeight + dif < cur.restriction.b)) {
                cur.elem.style.top = tp + "px";
            } else {
                if (dif > 0) {
                    cur.elem.style.top = cur.restriction.b - pos.offsetHeight - pos.parentsTop + "px";
                    cur.mouse_is_out = "b";
                } else {
                    cur.elem.style.top = cur.restriction.t - pos.parentsTop + "px";
                    cur.mouse_is_out = "t";
                }
            }
        }
    }

    cur.lastX = Ev.clientX;
    cur.lastY = Ev.clientY;

    cur.doCSS("ondrag");

    eval(cur.func_while_dragging);
}
function endDrag(idx) {
    var cur = drag_objects[idx];
    cur.is_in_drag = 0;

    if (ie) {
        document.onmousemove = null;
        document.onmouseup = null;
    } else {
        window.onmousemove = null;
        window.onmouseup = null;
    }

    cur.elem.style.zIndex = "2";

    var tidx = dndObjectIsOnTarget(cur);
    if (tidx != -1) {
        var tar = drag_targets[tidx];

        var replaced = false;
        if (tar.hasEffect(tar_effects.replaceableTarget) && !tar.isEmpty()) {
            for (var i = 0; i < tar.objects_on.length; i++) {
                var old_elem = drag_objects[tar.objects_on[i]];
                tar.removeObject(old_elem.idx);
                old_elem.ontarget = -1;
                old_elem.elem.style.left = old_elem.rel_home.offsetLeft + "px";
                old_elem.elem.style.top = old_elem.rel_home.offsetTop + "px";
                old_elem.doCSS();
            }

            replaced = true;
        }

        if (!(tar.hasEffect(tar_effects.uniqueTarget) && !tar.isEmpty()) || replaced) {
            cur.goTarget(tidx);
        } else if (cur.targets.length != 0) {
            if (endDrag.arguments.length == 2) {
                cur.goHome(endDrag.arguments[1]);
            } else {
                cur.goHome();
            }
        }
    } else if (cur.targets.length != 0) {
        if (endDrag.arguments.length == 2) {
            cur.goHome(endDrag.arguments[1]);
        } else {
            cur.goHome();
        }
    }

    eval(cur.func_after_drop);
}

// ------- end of dnd functions ---------------------

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
