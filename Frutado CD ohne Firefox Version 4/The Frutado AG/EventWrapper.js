//function evt_mouse(ctl, frame, el, pe, pd, off, type, duration)
function _textbubble_style(params) {
    if (params.minimized) this.cfg_minimized = true;
    if (false === params.minimizable) this.cfg_minimizable = false;
    if (false === params.movable) this.cfg_movable = false;
    if (false === params.closable) this.cfg_closable = false;
    if (params.posFromCookie) this.cfg_posFromCookie = true;
    if (params.x_frame) this.cfg_xframe = true;
    if (params.naked) this.cfg_naked = true;
    if (false === params.transparent) this.cfg_transparent = false;
    if (params.alwaystop) this.cfg_alwaystop = true;
    if (false === params.cover) this.cfg_cover = false;
    if (params.customStyle) this.cfg_imagedir = params.customStyle;
    if (params.textStyle) this.cfg_class = params.textStyle;
    //this.cfg_imagedir TODO
}

function EventWrapper() {}

EventWrapper.prototype = {
    // function evt_cursor(ctl, shape, orientation, rgbcolor) {
    cursor:
    function(c, time, params) {
        c.evt_cursor(time, params.shape, params.orientation, params.rgbcolor);
    },
    
    mouse:
    function(c, time, params) {
        c.evt_mouse(time,
            params.relpos.FP,
            params.relpos.EP,
            params.relpos.XY,
            params.relpos.DocXY,
            null,
            params.type,
            params.duration);
    },

    //function evt_url(ctl, frame, url, session, pattern, method, encoding, data)
    fileurl: function(c, time, params) {
                c.evt_url(time, params.relpos.FP, params.url, null, null, null, null, null);
             },


    url: function(c, time, params) {
             c.evt_url(time, params.relpos.FP, params.url, null, null, null, null, null);
             },

    //    win_.evt_highlight2([1340, 'hl', null], '0:0', new win_.ElementRef('1:0', '', 0, 0, '_;'), 'zoom_in', '2', 'red', null, {x:0, y:0}, {x:1, y:1}, {x:0, y:0}, {x:0, y:0});


    //function evt_textbubble(ctl, frame, el, pe, pd, off, sty, ori, text, replace, w, h, type, spike)
    textbubble: function(c, time, params) {
        if (params.type == 'close') {
            c.evt_off([time, params.object_name, null]);
        } else {
            c.evt_textbubble( [time, params.object_name, null],
                params.relpos.FP,
                params.relpos.EP,
                params.relpos.XY,
                params.relpos.DocXY,
                params.relpos.Off,
                new _textbubble_style(params),
                params.orientation,
                params.text,
                params.replace,
                params.width,
                params.height,
                params.type,
                params.spike || true
            );
        }
    },

    //function evt_formcheck(ctl, frame, el, suppress, value)
    formcheck:
    function (c, time, params) {
        c.evt_formcheck( time,
            params.relpos.FP,
            params.relpos.EP,
            params.suppressHandler,
            params.checked);
    },

    //function evt_formselect1(ctl, frame, el, suppress, sel, duration)
    formselect1:
    function (c, time, params) {
        c.evt_formselect1(
            [time, '', params.autoduration ? -1 : params.duration],
            params.relpos.FP,
            params.relpos.EP,
            params.suppressHandler,
            '' + params.selected,
            params.duration);
    },

    // function evt_formselect(ctl, frame, el, suppress, sel, des)
    formselect:
    function (c, time, params) {
        c.evt_formselect(
            [time, '', params.autoduration ? -1 : params.duration],
            params.relpos.FP,
            params.relpos.EP,
            params.suppressHandler,
            '' + params.selected,
            '' + params.deselected);
    },

    //function evt_formtext(ctl, frame, el, suppress, start, end, text)
    formtext:
    function (c, time, params) {
        c.evt_formtext(
            [time, '', params.autoduration ? -1 : params.duration],
            params.relpos.FP,
            params.relpos.EP,
            params.suppressHandler,
            params.start,
            params.end,
            params.text);
    },

    //function evt_highlight2(ctl, frame, el, effect, width, color, fillColor, pe, re, pd, rd, off, dur)
    highlight:
    function (c, time, params) {
        c.evt_highlight2(
            [time, params.object_name, null, 2],
            params.relpos.FP,
            params.relpos.EP,
            params.effect,
            params.border,
            params.style || params.rgbcolor,
            params.fillstyle || null,
            params.relpos.XY,
            params.relpos.XY2, //TODO RECT_IN_DOCUMENT
            params.relpos.DocXY,
            params.relpos.DocXY2 //TODO RECT_IN_DOCUMENT
        ); //TODO not enough parameters
    },

    //function evt_javascript(ctl, frame, el, text)
    javascript:
        function (c, time, params) {
            c.evt_javascript(
                time,
                params.relpos.FP,
                params.relpos.EP,
                params.text);
    },

    //function evt_macrocall(ctl, functionObject, macroParams)
    macrocall:
        function (c, time, params) {
            c.evt_macrocall(
                time,
                params.relpos ? params.relpos.FP : null,
                params.relpos? params.relpos.EP : null,
                params.functionObject,
                params.macroParams);
    },

    //function evt_loaded(ctl)
    loaded:
    function (c, time, params) {
        c.evt_loaded(time);
    },

    //function evt_pause(ctl, type, timeout)
    pause:
    function (c, time, params) {
        c.evt_pause(
            time,
            params.type || 'timeout',
            params.timeout);
    },

    //function evt_window(ctl, frame, url, name, w_or_pos_or_ori, h_or_size,  locb, toolb, menub, status, scrollb, resize, type)
    window:
    function (c, time, params) {
        c.evt_window(
            time,
            params.relpos.FP,
            params.url,
            '',
            {x: params.left, y: params.top},
            {w: params.width, h: params.height},
            params.location,
            params.toolbar,
            params.menubar,
            params.status,
            params.scrollbars,
            params.resizable,
            params.type);
    },
    //function evt_scroll(ctl, frame, el, pe, pd, ori, duration, flagForce) {
		scroll:
    function (c, time, params) {
        c.evt_scroll(
            time,
            params.relpos.FP,
            params.relpos.EP,
						params.relpos.XY,
            params.relpos.DocXY,
						params.orientation,            
						params.duration);
    }
}
