/*Navi Standard Functions 6.1.2 alpha 196*/

// Tracking data
ctx.pj_efp = null;
ctx.pj_data = [];

// Debugging
ctx.verbose = ctx.cfg_config('verbose');

ctx.pj_findSub4Efp = function(efp_) {
    var i, data;

    for (i = 0; i < this.pj_data.length; ++i) {
        data = this.pj_data[i];

        if (data.form &&
            0 <= efp_.efp_formNames.search(data.form))
        {
            return data.sub;
        }

        if (data.url &&
            0 <= efp_.efp_frame.location.href.search(data.url))
        {
            return data.sub;
        }
    }

    return null;
}

// Try to recognize pages in a standard way using pj_data.
// Return: true: recognized; efp in pj_efp
//         false: not recognized; pf_efp == null.

ctx.pj_track = function(customFunc_) {
    var customFunc = customFunc_ || function() {return false;}
    var efp = this.cfg_frametracking_get();
    var subName;

    while (efp) {
        this.verbose && this.cfg_print("Track: " + efp);
        
        try {
            if ((subName = this.pj_findSub4Efp(efp)) ||
                (subName = customFunc.call(this, efp)))
            {
                this.pj_efp = efp;
                this.cfg_frametracking_reset_aliases();

                if (this.cfg_jumptitle(subName)) {
                    return true;  // Success.
                }
            }
        }
        catch (exc_) {
            this.verbose && this.cfg_print("Track Exception");
        }

        // Go on with next changed frame.
        this.pj_efp = null;
        efp = this.cfg_frametracking_get();
    }

    return false;  // Nothing to do.
}

ctx.pj_printversion = function() {
    this.cfg_print('datango Navi Standard Functions 6.1.2 alpha 196');
}

/*EOF*/
