function get_position_h(msg, _windowID) {
    var rp = msg.GetParam("position_h");

    if ( rp != null) {
        rp.WindowID = _windowID;
        return rp;
    } else {
        return null;
    }
}


function set_positions(msg, relpos, use_position_for_bubble) {

    var mypos = relpos.Clone();
    if (cfg.standard.webrec.use_only_window0) {
        mypos.WindowID = 0;
    }

    if (msg.HasParam("position_h")) {
        msg.SetParam("position_h", mypos);
    }
    // for explanation long only
    if (use_position_for_bubble) {
        if (msg.HasParam("position_b")) {
            msg.SetParam("position_b", mypos);
        }
        return;
    }

    var rp_b = mypos.Clone();
    var ori = d_bubble_pos(rp_b, relpos);
    if (msg.HasParam("orientation")) {
        msg.SetParam("orientation", ori);
    }
    if (msg.HasParam("position_b")) {
        msg.SetParam("position_b", rp_b);
    }

    if (msg.HasParam("position_bu")) {
        if (cfg.standard.rec.practice_bubble_at_element) {
            msg.SetParam("position_bu", rp_b);
            msg.SetParam("orientation_p", ori);
        } else {
            msg.SetParam("position_bu", u_bubble_pos(mypos));
        }
    }
}


function check_handler(type) {
    return (typeof(hmap) == 'object') && (typeof(hmap[type]) == 'object');
}

function element_xtype(rp) {
    if (debug) element_fp(rp);

    var tagname = rp.ExecScript("tagName");
    var type = tagname;

    if (type == "B"|| type == "U" || type == "NOBR" || type == "STRONG" || type == "FONT") {
        rp.ElementPathPop();
        rp.UpdateElementID();

        type = rp.ExecScript("tagName");
    }

    if (type == "INPUT") {
        type = type + rp.ExecScript("type");
        tagname = type;
        if (type == "INPUTimage") {
            var ntype = type + "/" + rp.ExecScript("id");
            if (check_handler(ntype)) {
                type = ntype;
            } else {
                type = type + "/";
            }
        }
        if (type == "INPUTimage/") {
            var ntype = type + "/" + rp.ExecScript("parentNode.id");
            if (check_handler(ntype)) {
                type = ntype;
            } else {
                type = type + "/";
            }
        }
        if (type == "INPUTtext") {
            type = type + rp.ExecScript("className");
        }
    } else if (type == "IMG") {
        type = type + rp.ExecScript("parentNode.tagName");

        if (type == "IMGA" || type == "IMGSPAN") {
            type = type + rp.ExecScript("className") + ":" + rp.ExecScript("parentNode.className");

            if (typeof(hmap) == 'object') {
                if (type == "IMGSPAN:WebguiToolbarIconEnabled") {
                    type = type + ":" + rp.ExecScript("parentNode.id");
                    if (typeof(hmap[type]) != 'object') {
                        type = "IMGSPAN:WebguiToolbarIconEnabled";
                    }
                }
            }
        } else if (type == "IMGTD") {
            type = type + rp.ExecScript("className");

            if (type == "IMGTD") {
                type = type + rp.ExecScript("parentNode.className");
            }
            if (type == "IMGTD") {
                type = type + rp.ExecScript("previousSibling.tagName");
            }
            if (type == "IMGTDINPUT") {
                type = type + rp.ExecScript("previousSibling.value");
            }
            if (type.match("IMGTDListItem*")) {
                type = "IMGTDListItem";
                var img = rp.ExecScript("href");
                if (img.match("list.*2_5.*")) {
                    type = type + "-open";
                } else if (img.match("list.*2_4.*")) {
                    type = type + "-closed";
                } else if (img.match("list.*1_0.*")) {
                    type = type + "-leaf";
                }

                // assume leaf for everything else
                if (type == "IMGTDListItem") {
                    type = "IMGTDListItem-leaf";
                }
            }

        } else if (type == "IMGDIV") {

            if (type == "IMGDIV") {
                type = type + rp.ExecScript("className");
            }
            if (type == "IMGDIV") {
                type = type + rp.ExecScript("parentNode.className");
            }
            if (type == "IMGDIV") {
                type = type + rp.ExecScript("parentNode.id");
            }
            // Wertehilfe ist etwas anders in tabs und popups
            if (type.match("IMGDIVwebguiTSSHButton.*") ||
                type.match("IMGDIVwebguiConSHButton.*"))
            {
                type = "IMGDIVwebguiSearchHelpButton";
            }
        } else if (type == "IMGLABEL") {
            type = type + rp.ExecScript("className");
            if (type == "IMGLABEL") {
                type = type + rp.ExecScript("parentNode.className");
            }
        }
    } else if (type == "TD") {
        type = type + rp.ExecScript("className");

        if (type.match("TDListItem*")) {
            type = "TDListItem";
        } else if (type.match("TDalvc.*")) {
            type = "TDalvc";
        } else if (type.match("TDVSlider-*")) {
            type = "TDVSlider";
        } else if (type.match("TDCalM.*")) {
            type = "TDCalM";
        }

        if (type == "TD") {
            // for TDsearchHelpResultBody
            type = type + rp.ExecScript("parentNode.parentNode.parentNode.id");
        }
    } else if (type == "TH") {
        type = type + rp.ExecScript("className");
    } else if (type == "A") {
        type = type + rp.ExecScript("className");
    } else if (type == "BUTTON") {
        type = type + rp.ExecScript("className");
    } else if (type == "DIV") {
        type = type + rp.ExecScript("className");
        if (type == "DIV") {
            type = type + rp.ExecScript("currentStyle.overflow");
        }
    } else if (type == "SPAN") {
        type = type + rp.ExecScript("className");

        if (type.match("SPANCTLink.*")) {
            type = "SPANCTLink";
        } else if (type == "SPAN") {
            type = type + ":" + rp.ExecScript("parentNode.className");
        }
    } else if (type == "LABEL") {
        type = type + rp.ExecScript("className");
    }

    // fallback to tagname if no special entry found
    if (typeof(hmap) == 'object') {
        if (typeof(hmap[type]) != 'object') {
            if (tagname == "A" || tagname == "BUTTON") {
                type = tagname;
            } else if (tagname == "INPUTtext" || tagname == "TEXTAREA") {
                type = tagname;
            } else if (tagname == "IMG") {
                type = "IMGA:";
            } else if (tagname == "DIV") {
                type = "DIV";
            } else if (tagname == "SPAN") {
                if (cfg.standard.webrec.span_is_link) {
                    type = "A";
                }
            } else if (tagname != "BODY") {
                type = "A";
            }
        }
    }

    return type;
}

// returns new orientation
function d_bubble_pos(relpos, relpos_org) {
    if (cfg.standard.rec.demo_bubble_at_element) {
        var elem_rect = relpos_org.GetRect();

        var sc_rp = CreatePosition();
        sc_rp.WindowID = relpos_org.WindowID;
        var compat = sc_rp.ExecScript("ownerDocument && ownerDocument.compatMode && ownerDocument.compatMode == 'CSS1Compat'") == "true";

        var win_w = 0;
        var win_h = 0;

        if (compat) {
            log("COMPAT");
            win_w = sc_rp.ExecScript("ownerDocument.documentElement.offsetWidth") - 0;
            win_h = sc_rp.ExecScript("ownerDocument.documentElement.offsetHeight") - 0;
        } else {
            log("NON-COMPAT");
            win_w = sc_rp.ExecScript("offsetWidth") - 0;
            win_h = sc_rp.ExecScript("offsetHeight") - 0;
        }

        // log(" OW: " + win_w + " OH: " + win_h);
        // log(" ELEM: " + elem_rect.left + ", " + elem_rect.top + ", " + elem_rect.right + ", " + elem_rect.bottom);

        var can_left = true;
        var can_right = true;
        var can_top = true;
        var can_bottom = true;

        if (elem_rect.left < 0.3 * win_w) {
            // log("can't left");
            can_left = false;
        }
        if (elem_rect.right > 0.7 * win_w) {
            // log("can't right");
            can_right = false;
        }
        if (elem_rect.top < 0.3 * win_h) {
            // log("can't top");
            can_top = false;
        }
        if (elem_rect.bottom > 0.7 * win_h) {
            // log("can't bot");
            can_bottom = false;
        }

        var h_ori = can_left ? "W" : (can_right ? "E" : "");
        var v_ori = can_top ? "N" : (can_bottom ? "S" : "");

        var ori = v_ori + h_ori;
        if (ori == "") ori = "C";

        // log("ORI: " + ori);

        /*
        alert(ori + "\n" + 
              elem_rect.left + ","  + elem_rect.top + ", " + elem_rect.width + " x " + elem_rect.height + "\n" + 
              win_rect.left + ","  + win_rect.top + ", " + win_rect.width + " x " + win_rect.height);
        */

        if (h_ori == "E") {
            relpos.X = 100;
            relpos.OffsetX = 10;
        } else if (h_ori == "W") {
            relpos.X = 0
            relpos.OffsetX = -10;
        } else {
            // horizontal center
            relpos.X = 50
            relpos.OffsetX = 0;
        }

        if (v_ori == "S") {
            relpos.Y = 100;
            relpos.OffsetY = 10;
        } else if (v_ori == "N") {
            relpos.Y = 0;
            relpos.OffsetY = -10;
        } else {
            relpos.Y = 50;
            relpos.OffsetY = 0;
        }

        return ori;
    } else {
        var winid = relpos.WindowID;

        // clip of longer frame-paths for demo bubble
        if (relpos.FramePath.match("" + relpos.WindowID + ":0.*")) {
            relpos.FramePath = "" + relpos.WindowID + ":0";
        } else if (relpos.FramePath.match("" + relpos.WindowID + ":1.*")) {
            relpos.FramePath = "" + relpos.WindowID + ":1";
        }

        relpos.ElementPath = "";
        relpos.DocX = 90;
        relpos.DocY = 90;
        relpos.X = 90;
        relpos.Y = 90;
        relpos.OffsetX = -100;
        relpos.OffsetY = -100;
        relpos.UpdateElementID();

        return "C";
    }
}

function
get_page_info(rp) {
    var pi = new Object;
    pi.cw = 0;
    pi.ow = 0;
    pi.ch = 0;
    pi.oh = 0;
    pi.sx = 0;
    pi.sy = 0;
    pi.sw = 0;
    pi.sh = 0;
    
    pi.compat = rp.ExecScript("ownerDocument && ownerDocument.compatMode && ownerDocument.compatMode == 'CSS1Compat'") == "true";

    if (pi.compat) {
        pi.cw = rp.ExecScript("ownerDocument.documentElement.clientWidth") - 0;
        pi.ow = rp.ExecScript("ownerDocument.documentElement.offsetWidth") - 0;
        pi.ch = rp.ExecScript("ownerDocument.documentElement.clientHeight") - 0;
        pi.oh = rp.ExecScript("ownerDocument.documentElement.offsetHeight") - 0;
        pi.sx = rp.ExecScript("ownerDocument.documentElement.scrollLeft") - 0;
        pi.sy = rp.ExecScript("ownerDocument.documentElement.scrollTop") - 0;
        pi.sw = rp.ExecScript("ownerDocument.documentElement.scrollWidth") - 0;
        pi.sh = rp.ExecScript("ownerDocument.documentElement.scrollHeight") - 0;
    } else {
        pi.cw = rp.ExecScript("clientWidth") - 0;
        pi.ow = rp.ExecScript("offsetWidth") - 0;
        pi.ch = rp.ExecScript("clientHeight") - 0;
        pi.oh = rp.ExecScript("offsetHeight") - 0;
        pi.sx = rp.ExecScript("scrollLeft") - 0;
        pi.sy = rp.ExecScript("scrollTop") - 0;
        pi.sw = rp.ExecScript("scrollWidth") - 0;
        pi.sh = rp.ExecScript("scrollHeight") - 0;
    }
    return pi;
}


// returns new Position
function u_bubble_pos(relpos) {
    var urp = relpos.Clone();

    urp.ElementPath = "";
    urp.UpdateElementID();
    
    var pi = get_page_info(urp);

    urp.X = (100 * (pi.sx + pi.cw/2)) / pi.sw;
    urp.Y = (100 * (pi.sy + pi.ch/2)) / pi.sh;

    urp.DocX = urp.X;
    urp.DocY = urp.Y;


    return urp;
}

function window_name(window_id) {
    var bodyrp = CreatePosition();

    bodyrp.ElementPath = "";
    bodyrp.FramePathPush(window_id);
    // bodyrp.FramePathPush(0);
    bodyrp.ID = "";

    return bodyrp.ExecScript("document.title");
}

function element_fp(rp, type) {
    var fp = new Object;

    var tag = rp.ExecScript("tagName");

    if (tag == "B" || type == "U") {
        rp.ElementPathPop();
        rp.UpdateElementID();
        tag = rp.ExecScript("tagName");
    }

    if (tag == "INPUT") tag = tag + rp.ExecScript("type");

    fp.tagName = tag;

    fp.className = rp.ExecScript("className");

    fp.id = rp.ExecScript("id");

    var par_rp = rp.Clone();

    var par_tag = par_rp.ExecScript("parentNode.tagName");
    if (par_tag == "NOBR") {
        par_rp.ElementPathPop();
        par_rp.ID = "";
        par_tag = par_rp.ExecScript("parentNode.tagName");
    }

    fp.parent_tagName = par_tag;

    fp.parent_className = par_rp.ExecScript("parentNode.className");

    fp.parent_id = par_rp.ExecScript("parentNode.id");

    alert("TYPE:" + type + 
          "TAG: " + fp.tagName + "\n" + 
          "CLS: " + fp.className + "\n" + 
          "ID:  " + fp.id + "\n" + 
          "PTG: " + fp.parent_tagName + "\n" + 
          "PCL: " + fp.parent_className + "\n" + 
          "PID: " + fp.parent_id, 
          "Fingerprint");

}

function input_infotxt(tab, enter, button) {
    var infotxt;
    if (tab && enter && button) {
        infotxt = get_infotxt("INPUTtextTabEnterButton");
    } else if (tab && enter) {
        infotxt = get_infotxt("INPUTtextTabEnter");
    } else if (tab) {
        infotxt = get_infotxt("INPUTtextTab");
    } else if (enter && button) {
        infotxt = get_infotxt("INPUTtextEnterButton");
    } else if (enter) {
        infotxt = get_infotxt("INPUTtextEnter");
    } else if (button) {
        infotxt = get_infotxt("INPUTtextButton");
    } else {
        infotxt = { demo: '', prac: '' };
    }
    return infotxt;
}


function deliver_enter_key(rp) {
    var script = 
        "function fire_submit(e, w) {" + 
        "    var res = 'undelivered';\n" +
        "    try {\n" +
        "        var elem = e;\n" +
        "        var delivered = false;\n" +
        "        while (elem && !delivered) {\n" +
        "           if (elem.onkeydown) {\n" +
        "               var ev = w.document.createEventObject();\n" +
        "               ev.keyCode = 13;\n" +
        "               elem.fireEvent('onkeydown', ev);\n" +
        "               delivered = true;;\n" +
        "               res = 'Method: fireEvent';\n" +
        "           }\n" +
        "           elem = elem.parentNode;\n" +
        "       }\n" +
        "       if (!delivered) {;\n" +
        "           for (var i = 0; i < e.form.length; i++) { \n" + 
        "               if(e.form[i].type == 'submit') { \n" + 
        "                   delivered = true; \n" + 
        "                   e.form[i].click(); \n" + 
        "                   res = 'Method: click submit';\n" +
        "                   break; \n" + 
        "               }\n" + 
        "           } \n" + 
        "       }\n" + 
        "       if(!delivered) { \n" + 
        "           e.form.submit(); \n" + 
        "           res = 'Method: call submit';\n" +
        "       }\n" + 
        "    } catch (e) {\n" +
        "       alert(e.message)\n" +
        "    }\n" +
        "    return res;\n" +
        "}";
    rp.ExecScript(script, true);
}



/*
function 
get_SELECT_rects(rp) {
    var rscript =
"function get_rects(e, w) {\n" + 
"for (var i = 0; i < document.forms.length; i++) {\n" +
"        var f = document.forms[i];\n" +
"\n" +
"        var res = '[\\n';\n" +
"\n" +
"        for (var c = 0; c < f.elements.length; c++) {\n" +
"            if (f.elements[c].tagName == 'SELECT') {\n" +
"                var w = f.elements[c].scrollWidth;\n" +
"                var h = f.elements[c].scrollHeight;\n" +
"\n" +
"                var x = 0;\n" +
"                var y = 0;\n" +
"                var cur = f.elements[c];\n" +
"                while (cur && typeof(cur.offsetTop) != 'undefined' && typeof(cur.offsetLeft) != 'undefined') {\n" +
"                    x += cur.offsetLeft;\n" +
"                    y += cur.offsetTop;\n" +
"                    cur = cur.offsetParent;\n" +
"                }\n" +
"\n" +
"                res += '{ x: ' + x + ',\\n';\n" +
"                res += '  y: ' + y + ',\\n';\n" +
"                res += '  w: ' + w + ',\\n';\n" +
"                res += '  h: ' + h + '},\\n';\n" +
"\n" +
"            }\n" +
"        }\n" +
"        res += ']\\n';\n" +
"        return res;\n" +
"    }}\n";

    var rects = rp.ExecScript(rscript, true);

    alert(rects);
    var r = eval(rects);
}

function element_pos(rp) {

    var pos_script = 
        "function dgo_get_pos(e, w) {" + 
            "var x = 0;" + 
            "var y = 0;" + 
            "var width = e.offsetWidth;" + 
            "var h = e.offsetHeight;" + 
            "var c = e;" + 
            "while (c && typeof(c.offsetLeft) != 'undefined') {" + 
                "x += c.offsetLeft;" + 
                "y += c.offsetTop;" + 
                "c = c.offsetParent;" + 
            "}" + 
            "return '{ x: ' + x + ', y: ' + y + ', w: ' + width + ', h: ' + h + '}'; }";

    var pos_str = rp.ExecScript(pos_script, true);
    if (pos_str.substr(0,1) == '{') {
        alert(pos_str);
        eval('var a = ' + pos_str + ';');
        return a;
    } else {
        return { x: -1, y: -1, w: -1, h: -1 }
    }
}
*/

function window_pos_size(window_id) {
    var rp = CreatePosition(Position_FRAME);
    rp.WindowID = window_id;

    var res = new Object;

    res.left = rp.ExecScript('window.screenLeft') - 3;
    res.top  = rp.ExecScript('window.screenTop') - 22;

    var compat = rp.ExecScript("ownerDocument && ownerDocument.compatMode && ownerDocument.compatMode == 'CSS1Compat'") == "true";

    if (compat) {
        res.width = rp.ExecScript("ownerDocument.documentElement.clientWidth") - 0;
        res.height = rp.ExecScript("ownerDocument.documentElement.clientHeight") - 0;
    } else {
        res.width = rp.ExecScript("clientWidth") - 0;
        res.height = rp.ExecScript("clientHeight") - 0;
    }

    res.height += 48;

    return res;
}

function standard_fieldname(rp) {
    var ep = rp.ElementPath;
    var sp = ep.split(':');

    var s_item = get_info(rp);
    var x_item = s_item.l;
    var y_item = s_item.t;
    var w_item = s_item.w;

    log("ITEM  X: " + x_item  + " Y: " + y_item + " W: " + w_item);


    var rp2 = rp.Clone();

    var r3 = sp[sp.length-3] - 0;
    var r2 = sp[sp.length-2] - 0;
    var r1 = sp[sp.length-1] - 0;


    var fn;

    sp[sp.length-3] = r3 + 2;
    sp[sp.length-2] = r2;
    sp[sp.length-1] = r1;
    rp2.ElementPath = sp.join(':');

    if (fn = get_fn(rp, x_item, y_item, w_item, rp2, 1)) return fn;

    sp[sp.length-3] = r3 + 1;
    sp[sp.length-2] = r2;
    sp[sp.length-1] = r1;
    rp2.ElementPath = sp.join(':');

    if (fn = get_fn(rp, x_item, y_item, w_item, rp2, 2)) return fn;

    sp[sp.length-3] = r3 + 1;
    sp[sp.length-2] = r2 - 1;
    sp[sp.length-1] = r1;
    rp2.ElementPath = sp.join(':');

    if (fn = get_fn(rp, x_item, y_item, w_item, rp2, 3)) return fn;

    sp[sp.length-3] = r3 + 1;
    sp[sp.length-2] = r2 - 2;
    sp[sp.length-1] = r1;
    rp2.ElementPath = sp.join(':');

    if (fn = get_fn(rp, x_item, y_item, w_item, rp2, 4)) return fn;

    sp[sp.length-3] = r3 + 2;
    sp[sp.length-2] = r2 - 1;
    sp[sp.length-1] = r1;
    rp2.ElementPath = sp.join(':');

    if (fn = get_fn(rp, x_item, y_item, w_item, rp2, 5)) return fn;

    sp[sp.length-3] = r3 + 2;
    sp[sp.length-2] = r2 - 2;
    sp[sp.length-1] = r1;
    rp2.ElementPath = sp.join(':');

    if (fn = get_fn(rp, x_item, y_item, w_item, rp2, 6)) return fn;

    sp[sp.length-3] = r3 + 3;
    sp[sp.length-2] = r2;
    sp[sp.length-1] = r1;
    rp2.ElementPath = sp.join(':');

    if (fn = get_fn(rp, x_item, y_item, w_item, rp2, 7)) return fn;

    sp[sp.length-3] = r3 + 1;
    sp[sp.length-2] = r2 + 1;
    sp[sp.length-1] = r1;
    rp2.ElementPath = sp.join(':');

    if (fn = get_fn(rp, x_item, y_item, w_item, rp2, 8)) return fn;

    sp[sp.length-3] = r3 + 1;
    sp[sp.length-2] = r2 + 2;
    sp[sp.length-1] = r1;
    rp2.ElementPath = sp.join(':');

    if (fn = get_fn(rp, x_item, y_item, w_item, rp2, 9)) return fn;

    sp[sp.length-3] = r3;
    sp[sp.length-2] = r2 - 1;
    sp[sp.length-1] = r1;
    rp2.ElementPath = sp.join(':');

    if (fn = get_fn(rp, x_item, y_item, w_item, rp2, 10)) return fn;

    sp[sp.length-1] = r1 - 1;
    rp2.ElementPath = sp.join(':');

    if (fn = get_fn(rp, x_item, y_item, w_item, rp2, 11)) return fn;

    sp[sp.length-3] = r3 + 1;
    sp[sp.length-2] = r2;
    sp[sp.length-1] = r1;
    rp2.ElementPath = sp.join(':');

    if (fn = get_fn(rp, x_item, y_item, w_item, rp2, 12)) return fn;


    sp[sp.length-3] = r3 - 1;
    sp[sp.length-2] = r2;
    sp[sp.length-1] = '';
    rp2.ElementPath = sp.join(':');

    if (fn = get_fn(rp, x_item, y_item, w_item, rp2, 131)) return fn;

    sp[sp.length-3] = r3 - 1;
    sp[sp.length-2] = r2;
    sp[sp.length-1] = r1;
    rp2.ElementPath = sp.join(':');

    if (fn = get_fn(rp, x_item, y_item, w_item, rp2, 13)) return fn;

    /*
    sp[sp.length-3] = r3;
    sp[sp.length-2] = r2;
    sp[sp.length-1] = r1 - 3;
    rp2.ElementPath = sp.join(':');

    if (fn = get_fn(rp, x_item, y_item, w_item, rp2, 14)) return fn;
    */

    sp[sp.length-3] = r3;
    sp[sp.length-2] = r2;
    sp[sp.length-1] = r1 - 2;
    rp2.ElementPath = sp.join(':');

    if (fn = get_fn(rp, x_item, y_item, w_item, rp2, 14)) return fn;

    sp[sp.length-3] = r3;
    sp[sp.length-2] = r2;
    sp[sp.length-1] = r1 - 1;
    rp2.ElementPath = sp.join(':');

    if (fn = get_fn(rp, x_item, y_item, w_item, rp2, 15)) return fn;

    sp[sp.length-3] = r3;
    sp[sp.length-2] = r2;
    sp[sp.length-1] = '';
    rp2.ElementPath = sp.join(':');

    if (fn = get_fn(rp, x_item, y_item, w_item, rp2, 15)) return fn;
    return "";
}


function RADIO_fieldname(rp, type) {
    var fn;
    if (type == "INPUTradio") {
        fn = rp.ExecScript("nextSibling.nextSibling.innerText");

        if (fn == "<js-error>") {
            fn = rp.ExecScript("parentNode.innerText");
        }
    } else {
        fn = rp.ExecScript("parentNode.innerText");
    }
    if (fn == "" || fn == "<js-error>" || fn == "undefined" || fn == " " || fn.length > 80) {
        fn = rp.ExecScript("parentNode.previousSibling.innerText");
    }
    if (fn == "" || fn == "<js-error>" || fn == "undefined" || fn == " " || fn.length > 80) {
        fn = rp.ExecScript("parentNode.nextSibling.innerText");
    }
    if (fn == "" || fn == "<js-error>" || fn == "undefined" || fn == " " || fn.length > 80) {
        fn = rp.ExecScript("parentNode.nextSibling.nextSibling.innerText");
    }
    if (fn == "<js-error>" || fn == "undefined" || fn.length > 80) {
        fn = "";
    }
    return fn;
}

