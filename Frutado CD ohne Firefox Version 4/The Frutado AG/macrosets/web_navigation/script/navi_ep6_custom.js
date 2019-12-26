/*Navi EP6 Custom Functions 6.1.2 alpha 196*/

// Tracking ====================================================================
// Try to recognize pages in a non-standard way.
// Return name of sub-program or false.

ctx.pj_custom_track = function(efp_) {
    var frame = efp_.efp_frame;
    
    if (!frame) {
        return false;
    }
    
    if (frame.name.substr(0,8) == 'sapPopup') {
        return 'PulldownMenu';
    }

    if (efp_.efp_path == '0') {
        this.cfg_print('TRACK: top frame');
        return 'Welcome';
    }

    if (typeof(frame.popup) == 'object' && frame.popup != null) {
        try {
            var appPopup = frame.popup;
            this.cfg_print('TRACK POPUP');
            this.cfg_frametracking_add_window(null, appPopup);
            this.cfg_print('cfg_frametracking_add_window. name: ' +
                appPopup.name + ' location: ' + appPopup.location.href);
        } catch (exc) { }
    }

    this.cfg_print('twist bspDH_newDelta? current content:' +
        frame.bspDH_newDelta);

    if (frame.bspDH_newDelta && !frame.bspDH_newDelta_dgosave &&
        frame.bspDH_insertItem)
    {

        frame.bspDH_newDelta_dgosave = frame.bspDH_newDelta;
        var CTX = ctx;
        frame.bspDH_newDelta = function(guid_,new_frame_) {

            var rc = this.bspDH_newDelta_dgosave(guid_,new_frame_);

            /* only, when frame A is not just a form 
            if (!cngFrame.body.form.f) { ... }
            */

            var cngFrame = this.frames[(this.bspDH_getShownFrame())];
            if (rc == true && !new_frame_) {
                CTX.cfg_frametracking_requeue(cngFrame, CTX.CFG_REQUEUE_OPTION_CLEAR);
                CTX.cfg_print('REQUEING FRAME ' + cngFrame.name);
            } else {
                CTX.cfg_print('NOT REQUEING FRAME ' + cngFrame.name +
                    ' bspDH_newDelta RETURNS:' + rc + ' and new_frame_ IS:' + new_frame_);
            }
            return rc;
        }

        ctx.cfg_print('newDeltaLoaded twisted');
    }

/*  attempt to twist all frames containing EPCM
    
    this.cfg_print('twist EPCM-frame. current frame: ' +
        frame.name + ' is twisted?' +
        (frame.dgoSavedOpen_ ? 'yes' : 'no'));

    if (frame.EPCM && typeof(frame.EPCM.init) == 'function') {
        cfg_frametracking_twist_window_open(frame);
        this.cfg_print('EPCM-frame: ' + frame.name + ' twisted');
    } else {
        this.cfg_print('EPCM-frame: ' + frame.name + ' EPCM? ' + frame.EPCM);
        if (frame.EPCM) {
            this.cfg_print('EPCM-frame: ' + frame.name + ' INIT? ' + frame.EPCM.init);
        }
    }
*/

/* second attempt to twist the main EPCM frame

    this.pj_portalEPCMFrame = function() {
        try {
            var thisFrame = frame;
            while (typeof(thisFrame.EPCM) == 'undefined' && thisFrame != top) {
                thisFrame = thisFrame.parent;
            }
            return thisFrame;
        } catch(ex) {;}
    }

    this.pj_topEPCMFrame = this.pj_portalEPCMFrame();
    
    if (this.pj_topEPCMFrame) {
        this.cfg_print('twist EPCM-frame. current frame: ' +
            this.pj_topEPCMFrame.name + ' is twisted?' +
            (this.pj_topEPCMFrame.dgoSavedOpen_ ? 'yes' : 'no'));
        cfg_frametracking_twist_window_open(this.pj_topEPCMFrame);
        this.cfg_print('EPCM-frame: ' + this.pj_topEPCMFrame.name + ' twisted');
    }

*/
    // Todo: eliminate unwanted paths !!!
    return this.pj_checkContext(frame);
}

var C = ctx;
function pj_ep6_handleCollapse(ev_) {
    if (ev_.propertyName == 'style.display' && this.dgoFrame) {
        C.cfg_render_refresh(this.dgoFrame);
        C.cfg_print('DISPLAY changed -> refresh');
    }
}

ctx.pj_ep6_installCollapseHandler = function(frame_) {
    var doc = frame_.document;
    var DIVs = doc.getElementsByTagName('DIV');
    var i, div, id;
    
    for (i = 0; i < DIVs.length; ++i) {
        div = DIVs[i];
        id = div.id;
        if (id.substr(id.length - 3) == '-bd') {
            if (doc.getElementById(id.substr(0, id.length - 3) + '-exp')) {
                div.dgoFrame = frame_;
                this.cfg_add_handler(frame_, div,
                    "propertychange", pj_ep6_handleCollapse);
                this.cfg_print('EP6 collapse handler installed: ' +
                    div.tagName + ' ' + id);
            }
        }
    }
}

// Context =====================================================================

ctx.pj_addContext = function(tourstopname_, title_, label_, selectname_) {
    this.pj_data[this.pj_data.length] = {
          sub: tourstopname_
        , title: title_
        , label: label_
        , selectname: selectname_
    };
    this.cfg_print('pj_addContext(' + tourstopname_ + ',' + title_ + ',' +
       ',' + label_ + ',' + (selectname_ ? selectname_ : '-') + ')');
}

ctx.pj_checkContext = function(win_) {
    var context = this.pj_getContext(win_);
    this.verbose >= 2 && this.cfg_print('pj_checkContext(title: "' +
        context.title + '", text: "' + context.text + '"');

    /* this.pj_fields = []; */
    var i, data;

    for (i = 0; i < this.pj_data.length; ++i) {
        data = this.pj_data[i];

        if (this.pj_check_ts_context(win_, context, data)) {
            if (!data.selectname || this.pj_check_selectbox(win_, data)) {
                this.verbose >= 2 && this.cfg_print(
                    'pj_checkContext(): Match, goto "' + data.sub + '".');
                this.pj_fields = [];
                return data.sub;
            }
        }
    }

    this.verbose >= 2 && this.cfg_print('pj_checkContext(): No match!');
    return false;
}

ctx.pj_getContext = function(win_) {
    var imageTags = win_.document.getElementsByTagName('IMG');
    var imageTagTitles = [];
    for (var t=0; t<imageTags.length; t++) {
        imageTagTitles += imageTags[t].title;
    }
    var context = {
          title: win_.document.title
        , text: win_.document.body.innerText
        , tags: imageTagTitles
    }

    return context;
}

ctx.pj_check_ts_context = function(win_, context_, data_) {
    var ret = false;
    var context_labels = data_.label.split('#');
    var tagname_labels = typeof(data_.tags) == 'string' && data_.tags
        ? data_.tags.split('#') : [];

    // 1. Stufe: titel mit titel substring vergleichen

    if (data_.title == '' || context_.title.indexOf(data_.title) >= 0) {
        this.verbose >= 3 &&
            this.cfg_print('Title ok: "' + data_.title + '"');

        // 2. Stufe: Labels vergleichen

        ret = true;

        for (var i = 0; ret && i < context_labels.length; i++) {
            if (context_.text.indexOf(context_labels[i]) >= 0) {
                this.cfg_config('verbose') >= 3 && this.cfg_print(
                    'Labelelement ok: "' + context_labels[i] + '"');
            } else {
                ret = false;
                this.cfg_config('verbose') >= 2 && this.cfg_print(
                    'Label nomatch "' + context_labels[i] + '": STOP');
            }
        }

        // 3. Stufe: HTMLTags vergleichen

        for (var i = 0; ret && i < tagname_labels.length; i++) {
            if (context_.tags.indexOf(tagname_labels[i]) >= 0) {
                this.cfg_config('verbose') >= 3 && this.cfg_print(
                    'TagElement ok: "' + tagname_labels[i] + '"');
            } else {
                ret = false;
                this.cfg_config('verbose') >= 2 && this.cfg_print(
                    'TagElement nomatch "' + tagname_labels[i] + '": STOP');
            }
        }
    }
    else {
        this.verbose >= 3 && this.cfg_print(
            'Title nomatch "' + data_.title + '": STOP');
    }

    return ret;
}

ctx.pj_check_selectbox = function(win_, data_) {
    var myselect = win_.document.getElementById(data_.selectname);
    var idx;

    if (typeof(myselect) == 'object' && myselect &&
        myselect.tagName == 'SELECT' &&
        (idx = myselect.options.selectedIndex) >= 0 &&
        (myselect.options[idx].value == data_.selecttext ||
         (data_.selecttext == '*' && myselect.options[idx].text == '')))
    {
        this.verbose >= 2 && this.cfg_print('Selection ok: ' +
            myselect.tagName + ' ' + (myselect.id || myselect.name) +
            ' [' + idx + '] = ' + myselect.options[idx].text +
            ' / "' + myselect.options[idx].text + '"');

        return true;
    }

    this.verbose >= 2 && this.cfg_print('Selection nomatch ' +
        data_.selectname + ' = "' + data_.selecttext + '" STOP');

    return false;
}

// Highlighting ================================================================

ctx.pj_highlights_ = [];  // array of error highlights

/** Display a single highlight at element_.
    Possible values for _effect: 'zoom_out', 'frame', 'ellipse', 'underline', 'underline2' (default)
    With new permanent highlights: 'line', 'box'
*/

ctx.pj_showHighlight = function(
    win_, element_, _effect, _color, _width, _borderColor)
{
    var effect = _effect || 'line';
    // var color = _color || 'img:magenta50tr.png';
    var color = _color || 'red';
    var width = _width || 2;

    var ev = this.evt_highlight2(
        false /*indicator for not handling the event*/,
        null /*dummy fp*/, null /*dummy ep*/,
        effect, width, color /*borderColor, various position modifiers omitted*/);

    var name = this.cfg_render(win_, element_, ev);
    this.pj_highlights_[this.pj_highlights_.length] = name;
    return name;
}

/** Remove all displayed help elements (bubble, highlights). */

ctx.pj_cleanUp = function() {
    this.evt_textbubbleclose(-1);

    for (var i=0; i < this.pj_highlights_.length; i++) {
        this.cfg_unrender(this.pj_highlights_[i]);
    }

    this.pj_highlights_.length = 0;
}

// Plausis =====================================================================

ctx.pj_fields = [];       // array of formfields for plausi
ctx.pj_labels = [];       // array of labels for plausi

/** Add field for the plausi, if a value is set */

ctx.pj_addFieldForPlausi = function(field_, label_) {
    this.pj_fields[this.pj_fields.length] = field_;
    this.pj_labels[this.pj_labels.length] = label_;
}

/** Execute Plausi */

ctx.pj_checkFields = function(win_) {
    var fieldnames = '';
    
    this.cfg_print('check Plausi of '+  this.pj_fields.length + ' fields');
    
    for (var i = 0; i < this.pj_fields.length; i++) {
        var field = this.pj_fields[i];
        this.cfg_print(i+': '+ field.value);
        
        if (field && (field.value == '' || field.value == ' ' || field.value == '?')) {
            field.style.borderColor = '#ff0000';

            //this.pj_showHighlight(win_, field, 'box', 'img:red50tr.png', 2);

            if (fieldnames == '') {
                fieldnames = this.pj_labels[i];
            } else {
                fieldnames += ', ' + this.pj_labels[i];
            }
        } else {
            if (field.style.borderColor == '#ff0000') {
                field.style.borderColor='#ffffff';
            }
        }
    }

    if (fieldnames) {
    	this.cfg_print('Plause: Alert');
        win_.alert('Please fill out all necessary Fields! \n' +
            fieldnames)
        return false;
    }

   
    return true;
}

ctx.pj_addOnClickHandlerForElement = function(win_, element_) {
    
    var C = this;
    var H = function() {
        var rc = C.pj_checkFields(win_);

        if (rc === false) {            
            this.dgoEventHandler.setAbort();            
        }

        return rc;
    }
    this.cfg_print('Add handler.');
    this.cfg_add_handler(win_, element_, 'click', H, CFG_ADDHANDLER_OPTION_AT_FRONT);
}

ctx.pj_addOnClickConfirm = function(win_, element_, text_) {
    var C = this;
    var W = win_;
    var T = text_;
    var H = function() {
        var rc = W.confirm(T);

        if (rc == false) {
            this.dgoEventHandler.setAbort();
        }

        return rc;
    }

    this.cfg_add_handler(win_, element_, 'click', H, CFG_ADDHANDLER_OPTION_AT_FRONT);
}

// Tracing =====================================================================

ctx.pj_printversion_std = ctx.pj_printversion;
ctx.pj_printversion = function() {
    this.pj_printversion_std();
    this.cfg_print('datango Navi EP6 Custom Functions 6.1.2 alpha 196');
}

/*EOF*/
