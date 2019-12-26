// To be included into the tourfile using cfg_macroset_files

var dgoFakeHistoryFrameworkObj = function (p1, p2, p3, p4, p5, p6, p7, p8, p9) {
    var frame = top.frames[1];
    if (!frame) {
        alert('dgoFake error "' + arguments.callee.dgoName_ + '"');
        return;
    }

    return (top.gHistoryFrameworkObj = frame.gHistoryFrameworkObj)
        [arguments.callee.dgoName_](
            p1, p2, p3, p4, p5, p6, p7, p8, p9);
}

function dgoFakeHistoryFrameworkObjFunction(name_) {
    var retval;
    eval('retval=' + dgoFakeHistoryFrameworkObj.toString());
    retval.dgoName_ = name_;
    return retval;
}

function dgoInstallFakedObjects() {
    var fakedObj = {
        toString: function() {
            return 'faked.gHistoryFrameworkObj';
        }

        , AddTrackingEntry: dgoFakeHistoryFrameworkObjFunction(
            'AddTrackingEntry')
        , AddTrackingEntryAllowDuplicate: dgoFakeHistoryFrameworkObjFunction(
            'AddTrackingEntryAllowDuplicate')
        , SetActiveTrackingEntryIndex: dgoFakeHistoryFrameworkObjFunction(
            'SetActiveTrackingEntryIndex')
        , GetTrackingListPreActive: dgoFakeHistoryFrameworkObjFunction(
            'GetTrackingListPreActive')
        , GetTrackingListPostActive: dgoFakeHistoryFrameworkObjFunction(
            'GetTrackingListPostActive')
        , GetActiveTrackingEntryIndex: dgoFakeHistoryFrameworkObjFunction(
            'GetActiveTrackingEntryIndex')
        , GetActiveTrackingEntryValue: dgoFakeHistoryFrameworkObjFunction(
            'GetActiveTrackingEntryValue')
        , TrackingEntryBack: dgoFakeHistoryFrameworkObjFunction(
            'TrackingEntryBack')
        , TrackingEntryForward: dgoFakeHistoryFrameworkObjFunction(
            'TrackingEntryForward')
        , GetLastVisitedList: dgoFakeHistoryFrameworkObjFunction(
            'GetLastVisitedList')
        , CutLastVisitedListByIndex: dgoFakeHistoryFrameworkObjFunction(
            'CutLastVisitedListByIndex')
        , AddToLastVisitedList: dgoFakeHistoryFrameworkObjFunction(
            'AddToLastVisitedList')
        , GetEntryIndexByValue: dgoFakeHistoryFrameworkObjFunction(
            'GetEntryIndexByValue')
        , GetEntryValueByIndex: dgoFakeHistoryFrameworkObjFunction(
            'GetEntryValueByIndex')
        , Navigate: dgoFakeHistoryFrameworkObjFunction(
            'Navigate')
        , checkLength: dgoFakeHistoryFrameworkObjFunction(
            'checkLength')
    };

    top.gHistoryFrameworkObj = fakedObj;
}

dgoInstallFakedObjects();
ctx.cfg_print('EP6 global objects faked.');

// eof
