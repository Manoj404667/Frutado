/*
   Filename: quiz_tools.js
   Author:   Falko Zander
   Created:  2007-06-12
   Update:   2008-02-08

   Abstract: This file contains all necessary JavaScript for Quizzes implementation.

   Notes:

*/

function $(id) {
    return document.getElementById(id);
}

function hasClassName(DOM_elem, classname) {
    if (DOM_elem == null || classname == "") return 0;

    var cns = DOM_elem.className ? DOM_elem.className.split(" ") : [];
    for (var i = cns.length - 1; i >= 0; i--) {
        if (cns[i] == classname) return 1;
    }

    return 0;
}
function addClassName(DOM_elem, classname) {
    if (DOM_elem == null || classname == "") return 0;

    var cns = DOM_elem.className ? DOM_elem.className.split(" ") : [];
    for (var i = cns.length - 1; i >= 0; i--) {
        if (cns[i] == classname) return 0;
    }

    DOM_elem.className += (DOM_elem.className ? " " : "") + classname;
    return 1;
}
function remClassName(DOM_elem, classname) {
    if (DOM_elem == null || classname == "") return 0;

    var cns = DOM_elem.className ? DOM_elem.className.split(" ") : [];
    var ncns = [];
    for (var i = cns.length - 1; i >= 0; i--) {
        if (cns[i] != classname) {
            ncns.push(cns[i]);
        }
    }

    if (ncns.length > 0) {
        DOM_elem.className = ncns.join(" ");
    } else {
        DOM_elem.className = "";
    }
    return 1;
}

String.prototype.reverse = function() {
    return this.split("").reverse().join("");
}
function Numsort(a, b) {
    return parseInt(a) - parseInt(b);
}
function get_max_dimensions(id_prefix, count) {
    var cur = { max_width: 0, max_height: 0, max_width_idx: -1, max_height_idx: -1 };
    for (var i = count - 1; i >= 0; i--) {
        var e = document.getElementById(id_prefix + i);
        if (e.offsetWidth > cur.max_width) {
            cur.max_width = e.offsetWidth;
            cur.max_width_idx = i;
        }
        if (e.offsetHeight > cur.max_height) {
            cur.max_height = e.offsetHeight;
            cur.max_height_idx = i;
        }
    }
    return cur;
}
Array.prototype.mix = function() {
    if (this.length < 2) return;
    for (var j = this.length - 1; j > 0; j--) {
        var r = Math.floor(Math.random() * (j + 1));
        var t = this[j];
        this[j] = this[r];
        this[r] = t;
    }
}
Array.prototype.copy = function() {
    var new_array = [];
    for (var i = 0; i < this.length; i++) {
        new_array[i] = this[i];
    }
    return new_array;
}
function getAbsoluteDimensions(elem) {
    var r = [];

    r.offsetWidth = elem.offsetWidth;
    r.offsetHeight = elem.offsetHeight;
    r.offsetLeft = elem.style.pixelLeft || elem.offsetLeft;
    r.offsetTop = elem.style.pixelTop || elem.offsetTop;
    r.rel_offsetLeft = r.offsetLeft;
    r.rel_offsetTop = r.offsetTop;
    r.parentsLeft = 0;
    r.parentsTop = 0;

    var par = elem.offsetParent;
    while (par) {
        r.offsetLeft += par.offsetLeft;
        r.offsetTop += par.offsetTop;
        r.parentsLeft += par.offsetLeft;
        r.parentsTop += par.offsetTop;
        par = par.offsetParent;
    }
    return r;
}
function intervalOverlapping(i1_lower, i1_upper, i2_lower, i2_upper) {
    var result = [];
    var r = [];

    if (i1_lower <= i2_lower && i2_lower <= i1_upper) {
        if (i2_upper <= i1_upper) {
            result.push(r);
            r.lower = i2_lower;
            r.upper = i2_upper;
            return result;
        } else {
            result.push(r);
            r.lower = i2_lower;
            r.upper = i1_upper;
            return result;
        }
    }

    if (i2_lower <= i1_lower && i1_lower <= i2_upper) {
        if (i1_upper <= i2_upper) {
            result.push(r);
            r.lower = i1_lower;
            r.upper = i1_upper;
            return result;
        } else {
            result.push(r);
            r.lower = i1_lower;
            r.upper = i2_upper;
            return result;
        }
    }

    return result;
}
function rectOverlapping(rect1, rect2) {
    if (rect1 == null || rect2 == null) return -1;

    var r1 = getAbsoluteDimensions(rect1);
    var r2 = getAbsoluteDimensions(rect2);

    var r1_x1 = r1.offsetLeft;
    var r1_y1 = r1.offsetTop;
    var r1_x2 = r1.offsetWidth + r1_x1;
    var r1_y2 = r1.offsetHeight + r1_y1;
    var r2_x1 = r2.offsetLeft;
    var r2_y1 = r2.offsetTop;
    var r2_x2 = r2.offsetWidth + r2_x1;
    var r2_y2 = r2.offsetHeight + r2_y1;

    var res1 = [];
    res1 = intervalOverlapping(r1_x1, r1_x2, r2_x1, r2_x2);
    if (res1.length == 0) return -1;
    var res2 = [];
    res2 = intervalOverlapping(r1_y1, r1_y2, r2_y1, r2_y2);
    if (res2.length == 0) return -1;

    return ((res1[0].upper - res1[0].lower) * (res2[0].upper - res2[0].lower));
}
function convert_time(time_in_seconds) {
    var hours = Math.floor(time_in_seconds / 3600);
    var x = time_in_seconds - hours * 3600;
    var minutes = Math.floor(x / 60);
    var seconds = x - minutes * 60;
    if (hours.toString().length < 2) hours = "0" + hours;
    if (minutes.toString().length < 2) minutes = "0" + minutes;
    if (seconds.toString().length < 2) seconds = "0" + seconds;
    return hours + ":" + minutes + ":" + seconds;
}
function getFlashMovieObject(movieName)
{
    if (window.document[movieName]) {
        return window.document[movieName];
    }
    if (navigator.appName.indexOf("Microsoft Internet")==-1) {
        if (document.embeds && document.embeds[movieName]) {
            return document.embeds[movieName];
        }
    } else /* if (navigator.appName.indexOf("Microsoft Internet")!=-1) */ {
        return document.getElementById(movieName);
    }
}

var img_loads = [];
var img_loads_iv = null;

function wait_for_img_load(img_id, cb_fun) {
    img_loads.push({id: img_id, fun: cb_fun});
    
    if (img_loads_iv == null) {
        img_loads_iv = window.setInterval("wait_for_img_load2();", 100);
    }
}
function wait_for_img_load2() {
    var new_loads = [];
    for (var i = 0; i < img_loads.length; i++) {
        var e = img_loads[i];
        if (document.getElementById(e.id).complete == true) {
            e.fun();
        } else {
            new_loads.push(e);
        }
    }
    img_loads = new_loads;

    if (img_loads.length == 0) {
        window.clearInterval(img_loads_iv);
        img_loads_iv = null;
    }
}

function _draw_line(x1, y1, x2, y2, stroke) {
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
    this.stroke = (typeof stroke != 'undefined') ? stroke : 1;

    this.divs = [];

    if (this.stroke == 1) {
        this.draw_();
    } else {
        this.draw2d_();
    }
}
_draw_line.prototype.remove = function() {
    for (var i = this.divs.length - 1; i >= 0; i--) {
        document.body.removeChild(this.divs[i]);
    }
    this.divs = [];
}
_draw_line.prototype.redraw = function(x1, y1, x2, y2) {
    this.remove();
    
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
     
    if (this.stroke == 1) {
        this.draw_();
    } else {
        this.draw2d_();
    }   
}
_draw_line.prototype.mk_div_ = function(x, y, w, h) {
    var div = document.createElement("div");
    div.style.position = "absolute";
    div.style.left = x + "px";
    div.style.top = y + "px";
    div.style.width = w + "px";
    div.style.height = h + "px";
    div.style.fontSize = "1px";
    div.className = "conn_line";
    document.body.appendChild(div);
    this.divs.push(div);
}
_draw_line.prototype.draw_ = function() {
	var x1 = this.x1,
        x2 = this.x2,
        y1 = this.y1,
        y2 = this.y2;

    if(x1 > x2)
	{
		var _x2 = x2;
		var _y2 = y2;
		x2 = x1;
		y2 = y1;
		x1 = _x2;
		y1 = _y2;
	}
	var dx = x2-x1, dy = Math.abs(y2-y1),
	x = x1, y = y1,
	yIncr = (y1 > y2)? -1 : 1;

	if(dx >= dy)
	{
		var pr = dy<<1,
		pru = pr - (dx<<1),
		p = pr-dx,
		ox = x;
		while(dx > 0)
		{--dx;
			++x;
			if(p > 0)
			{
				this.mk_div_(ox, y, x-ox, 1);
				y += yIncr;
				p += pru;
				ox = x;
			}
			else p += pr;
		}
		this.mk_div_(ox, y, x2-ox+1, 1);
	}

	else
	{
		var pr = dx<<1,
		pru = pr - (dy<<1),
		p = pr-dy,
		oy = y;
		if(y2 <= y1)
		{
			while(dy > 0)
			{--dy;
				if(p > 0)
				{
					this.mk_div_(x++, y, 1, oy-y+1);
					y += yIncr;
					p += pru;
					oy = y;
				}
				else
				{
					y += yIncr;
					p += pr;
				}
			}
			this.mk_div_(x2, y2, 1, oy-y2+1);
		}
		else
		{
			while(dy > 0)
			{--dy;
				y += yIncr;
				if(p > 0)
				{
					this.mk_div_(x++, oy, 1, y-oy);
					p += pru;
					oy = y;
				}
				else p += pr;
			}
			this.mk_div_(x2, oy, 1, y2-oy+1);
		}
	}
}
_draw_line.prototype.draw2d_ = function() {
    var x1 = this.x1,
        x2 = this.x2,
        y1 = this.y1,
        y2 = this.y2;

	if(x1 > x2)
	{
		var _x2 = x2;
		var _y2 = y2;
		x2 = x1;
		y2 = y1;
		x1 = _x2;
		y1 = _y2;
	}
	var dx = x2-x1, dy = Math.abs(y2-y1),
	x = x1, y = y1,
	yIncr = (y1 > y2)? -1 : 1;

	var s = this.stroke;
	if(dx >= dy)
	{
		if(dx > 0 && s-3 > 0)
		{
			var _s = (s*dx*Math.sqrt(1+dy*dy/(dx*dx))-dx-(s>>1)*dy) / dx;
			_s = (!(s-4)? Math.ceil(_s) : Math.round(_s)) + 1;
		}
		else var _s = s;
		var ad = Math.ceil(s/2);

		var pr = dy<<1,
		pru = pr - (dx<<1),
		p = pr-dx,
		ox = x;
		while(dx > 0)
		{--dx;
			++x;
			if(p > 0)
			{
				this.mk_div_(ox, y, x-ox+ad, _s);
				y += yIncr;
				p += pru;
				ox = x;
			}
			else p += pr;
		}
		this.mk_div_(ox, y, x2-ox+ad+1, _s);
	}

	else
	{
		if(s-3 > 0)
		{
			var _s = (s*dy*Math.sqrt(1+dx*dx/(dy*dy))-(s>>1)*dx-dy) / dy;
			_s = (!(s-4)? Math.ceil(_s) : Math.round(_s)) + 1;
		}
		else var _s = s;
		var ad = Math.round(s/2);

		var pr = dx<<1,
		pru = pr - (dy<<1),
		p = pr-dy,
		oy = y;
		if(y2 <= y1)
		{
			++ad;
			while(dy > 0)
			{--dy;
				if(p > 0)
				{
					this.mk_div_(x++, y, _s, oy-y+ad);
					y += yIncr;
					p += pru;
					oy = y;
				}
				else
				{
					y += yIncr;
					p += pr;
				}
			}
			this.mk_div_(x2, y2, _s, oy-y2+ad);
		}
		else
		{
			while(dy > 0)
			{--dy;
				y += yIncr;
				if(p > 0)
				{
					this.mk_div_(x++, oy, _s, y-oy+ad);
					p += pru;
					oy = y;
				}
				else p += pr;
			}
			this.mk_div_(x2, oy, _s, y2-oy+ad+1);
		}
	}
}

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
