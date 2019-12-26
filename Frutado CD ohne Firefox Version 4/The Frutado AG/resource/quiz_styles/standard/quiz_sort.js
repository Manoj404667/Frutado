/*
   Filename: quiz_sort.js
   Author:   Falko Zander
   Created:  2007-06-20
   Update:   2008-01-31

   Abstract: This file contains a JavaScript drag and drop sortable extension for drag'n'drop library.

   Notes:
*/

var sort_groups = [];
var sort_effects = {
    direcHorizontal: "sort_effects.direcHorizontal",
    direcVertical: "sort_effects.direcVertical",
    CSS: "sort_effects.CSS",
    mixObjects: "sort_effects.mixObjects",
    disabled: "sort_effects.disabled"
}

// ------- end of global variables ---------------------

function sortGroup() {
    this.ok = true;
    var members = [];
    var targets = [];
    for (var i = 0; i < sortGroup.arguments.length; i++) {
        var o = document.getElementById(sortGroup.arguments[i]);
        var t = document.getElementById(sortGroup.arguments[i] + "_tar");
        if (o == null || t == null) {
            this.ok = false;
            break;
        }

        var obj = [];
        var tar = [];
        members.push(obj);
        targets.push(tar);
        obj.elem_id = sortGroup.arguments[i];
        tar.elem_id = sortGroup.arguments[i] + "_tar";
        obj.elem = o;
        tar.elem = t;
    }

    if (this.ok) {
        this.members = [];
        this.targets = [];
        for (var i = members.length - 1; i >= 0; i--) {
            this.members.push(new dndObject(members[i].elem_id));
        }
        for (var i = targets.length - 1, j = 0; i >= 0; i--, j++) {
            this.targets.push(new dndTarget(targets[i].elem_id));
            this.targets[j].addEffect(tar_effects.uniqueTarget, tar_effects.centeredDrop);
        }

        for (var i = 0; i < this.members.length; i++) {
            for (var j = 0; j < this.targets.length; j++) {
                this.members[i].addTarget(this.targets[j]);
            }
            this.members[i].goTarget(this.targets[i].idx);
            this.members[i].setHome();
            this.members[i].elem.onmousedown = beginDragWithSort;
        }

        sort_groups.push(this);
        this.idx = sort_groups.length - 1;
    }
}
sortGroup.prototype.setHome = function() {
    for (var i = 0; i < this.members.length; i++) {
        this.members[i].resetToCurTarget();
        this.members[i].setHome();
    }
}
sortGroup.prototype.addEffect = function() {
    if (!this.ok) return;
    for (var j = sortGroup.prototype.addEffect.arguments.length - 1; j >= 0; j--) {
        var effect = sortGroup.prototype.addEffect.arguments[j];
        switch (effect) {
            case sort_effects.direcHorizontal:
                for (var i = this.members.length - 1; i >= 0; i--) {
                    this.members[i].addEffect(dnd_effects.restrictedHorizontal);
                }
                break;
            case sort_effects.direcVertical:
                for (var i = this.members.length - 1; i >= 0; i--) {
                    this.members[i].addEffect(dnd_effects.restrictedVertical);
                }
                break;
            case sort_effects.disabled:
                for (var i = this.members.length - 1; i >= 0; i--) {
                    this.members[i].addEffect(dnd_effects.disabled);
                }
                break;
            case sort_effects.CSS:
                for (var i = this.members.length - 1; i >= 0; i--) {
                    this.members[i].addEffect(dnd_effects.CSS);
                    this.targets[i].addEffect(tar_effects.CSS);
                }
                for (var i = this.members.length - 1; i >= 0; i--) {
                    this.targets[i].removeObject(this.members[i].idx);
                    this.members[i].goTarget(this.targets[i].idx);
                    this.members[i].setHome();
                }
                break;
            case sort_effects.mixObjects:
                var help = this.members.copy();
                do {
                    help.mix();
                } while (help == this.members);
                for (var i = help.length - 1; i >= 0; i--) {
                    for (var k = this.members.length - 1, pos = -1; k >= 0; k--) {
                        if (this.members[k] == help[i]) {
                            pos = k;
                            break;
                        }
                    }
                    if (pos == -1) break;
                    this.targets[i].objects_on.pop();
                    this.members[pos].goTarget(this.targets[i].idx);
                }
                break;
        }
    }
}

// ------- end of sort object ---------------------

function getSortGroup(drag_object) {
    for (var i = sort_groups.length - 1; i >= 0; i--) {
        for (var j = sort_groups[i].members.length - 1; j >= 0; j--) {
            if (sort_groups[i].members[j] == drag_object) return i;
        }
    }
    return -1;
}

// ------- end of tool functions ---------------------

function beginDragWithSort(e) {
    if (!ie) {
        if (typeof e.preventDefault != 'undefined') {
            e.preventDefault();
        }
    }

    var idx = getDragIdx(this.id);
    if (idx == -1) return;
    var cur = drag_objects[idx];
    if (cur.hasEffect(dnd_effects.disabled)) return;

    if (ie) {
        var Ev = window.event;
        document.onmousemove = function(e) { doDragWithSort(e, idx) }
        document.onmouseup = function() { endDragWithSort(idx) }
    } else {
        var Ev = e;
        window.onmousemove = function(e) { doDragWithSort(e, idx) }
        window.onmouseup = function() { endDragWithSort(idx) }
    }

    cur.lastX = Ev.clientX;
    cur.lastY = Ev.clientY;
    cur.elem.style.zIndex = "100";

    if (cur.ontarget != -1) {
        drag_targets[cur.ontarget].removeObject(cur.idx);
        cur.ontarget = -1;
    }

    eval(cur.func_after_drag);
}
function doDragWithSort(e, idx) {
    doDrag(e, idx);

    var cur = drag_objects[idx];

    var tidx = dndObjectIsOnTarget(cur);
    if (tidx != -1 && !drag_targets[tidx].isEmpty()) {
        var mov = drag_objects[drag_targets[tidx].objects_on[0]];
        var sg = getSortGroup(mov);
        for (var i = 0; i < sort_groups[sg].targets.length; i++) {
            if (sort_groups[sg].targets[i].isEmpty() && sort_groups[sg].targets[i].idx != tidx) {
                var tar1 = drag_targets[tidx];
                var tar2 = sort_groups[sg].targets[i];

                tar1.removeObject(mov.idx);
                mov.goTarget(tar2.idx);

                break;
            }
        }
    }
}
function endDragWithSort(idx) {
    endDrag(idx, true);

    var cur = drag_objects[idx];
    var sg = getSortGroup(cur);

    for (var i = 0; i < sort_groups[sg].targets.length; i++) {
        if (sort_groups[sg].targets[i].objects_on.length == 2) {
            sort_groups[sg].targets[i].removeObject(cur.idx);
        } else if (sort_groups[sg].targets[i].objects_on.length == 0) {
            cur.goTarget(sort_groups[sg].targets[i].idx);
        }
    }

    cur.doCSS();
}

// ------- end of dnd extension functions ---------------------

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
