/*
   Filename: quiz_puzzle.js
   Author:   Falko Zander
   Created:  2007-08-29
   Update:   2008-01-31

   Abstract: This file contains a JavaScript drag and drop puzzle extension for drag'n'drop library.

   Notes:
*/

function dndPuzzle(prefix, dim, mode) {
    this.members = [];
    this.targets = [];
    this.puzzle_mode = mode;

    for (var i = ct = 0, o = [], t = []; i < dim.y; i++) {
        for (var j = 0; j < dim.x; j++, ct++) {
            if (mode == 1) {
                this.targets.push(new dndTarget("t_" + i + "_" + j));
            } else {
                this.targets.push(new dndTarget("o_" + i + "_" + j));
            }
            t.push(ct);
            o.push(ct);
        }
    }
    o.mix();

    for (var i = c = 0; i < dim.y; i++) {
        for (var j = 0; j < dim.x; j++, c++) {
            this.members.push(new dndObject("d_" + i + "_" + j));
            this.members[c].effects.push(dnd_effects.centeredDrop);
            this.members[c].targets = this.members[c].targets.concat(t);

            if (mode == 1) {
                var tar_idx = o[c];
                drag_targets[tar_idx].objects_on.push(this.members[c].idx);
                this.members[c].ontarget = tar_idx;
                this.members[c].resetToCurTarget();
                this.members[c].setHome();
                this.members[c].end_drag = "endDragPuzzle";
            } else {
                var _j = o[c] % dim.x;
                var _i = (o[c] - _j) / dim.x;
                var tar = document.getElementById("t_" + _i + "_" + _j);
                var th = getAbsoluteDimensions(tar);
                var ch = getAbsoluteDimensions(this.members[c].elem);
                var left = (th.offsetWidth - ch.offsetWidth) / 2;
                var top = (th.offsetHeight - ch.offsetHeight) / 2;
                this.members[c].elem.style.left = left + th.offsetLeft - ch.parentsLeft + "px";
                this.members[c].elem.style.top = top + th.offsetTop - ch.parentsTop + "px";
                this.members[c].setHome();
                this.members[c].end_drag = "endDragPuzzle2";
                this.members[c].homeid = "t_" + _i + "_" + _j;
            }
        }
    }
}

// ------- end of puzzle object ---------------------

dndPuzzle.prototype.resetPositions = function() {
    if (this.puzzle_mode == 1) return;

    for (var i = this.members.length - 1; i >= 0; i--) {
        var tar = document.getElementById(this.members[i].homeid);
        var th = getAbsoluteDimensions(tar);
        var ch = getAbsoluteDimensions(this.members[i].elem);
        var left = (th.offsetWidth - ch.offsetWidth) / 2;
        var top = (th.offsetHeight - ch.offsetHeight) / 2;
        this.members[i].elem.style.left = left + th.offsetLeft - ch.parentsLeft + "px";
        this.members[i].elem.style.top = top + th.offsetTop - ch.parentsTop + "px";
        this.members[i].setHome();

        if (this.members[i].ontarget != -1) {
            this.members[i].resetToCurTarget();
        }
    }
}
dndPuzzle.prototype.isInDrag = function() {
    for (var i = this.members.length - 1; i >= 0; i--) {
        if (this.members[i].is_in_drag == 1) return 1;
    }
    return 0;
}

// ------- end of tool functions ---------------------

function endDragPuzzle(idx) {
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
    if (tidx != -1 && drag_targets[tidx].objects_on.length != 0) {
        var tar1 = drag_targets[tidx];
        var elem = drag_objects[tar1.objects_on[0]];

        for (var i = drag_targets.length - 1, tar2 = null; i >= 0; i--) {
            if (drag_targets[i].objects_on.length == 0) {
                tar2 = drag_targets[i];
                break;
            }
        }

        tar1.objects_on.pop();
        elem.goTarget(tar2.idx);
        elem.setHome();
        cur.goTarget(tar1.idx);
        cur.setHome();
    } else {
        cur.goHome(true);
    }

    eval(cur.func_after_drop);
}

function endDragPuzzle2(idx) {
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
        var elem = drag_objects[tar.objects_on[0]];

        if (elem == null) {
            cur.goTarget(tar.idx);
        } else {
            tar.objects_on.pop();
            elem.goHome();
            cur.goTarget(tar.idx);
        }
    } else {
        cur.goHome();
    }

    eval(cur.func_after_drop);
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
