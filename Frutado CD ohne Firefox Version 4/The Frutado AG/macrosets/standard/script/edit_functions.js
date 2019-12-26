
function edit_screendump() {
    var msg = CurrentEvent();

    if (msg.Template() == "new_page" || msg.Template() == "new_window") {
        EditScreendump(Project.PagePath + msg.GetParam("dump_page"));
    }
}

function edit_tourstop_screendump() {

    var rp = CreatePosition();
    rp.WindowID = CurrentBrowser();

    var url = rp.ExecScript("document.location.href");
    var parts = url.split('/');
    var page = parts[parts.length -1];
    EditScreendump(Project.PagePath + page);

}

function load_next_page() {
    var msg = CurrentEvent();

    if (msg == null) {
        // try the tourstop
        var tsi = CurrentTourstop();
        var ts = GetTourstop(tsi);
        if (ts) {
            // start with first macro of current TS
            msg = ts.NextMacro();
        } else {
            // use first macro of project
            msg = NextMacro();
        }
    } else if (msg.Template() == "new_page") {
        msg = NextMacro(msg.TourPosition());
    }

    if (msg == null) return;

    while (msg != null && msg.Template() != "new_page") {
        msg = NextMacro(msg.TourPosition());
    }

    if (msg) {
        msg.SetCurrent();
        LoadUrl(Project.PagePath + msg.GetParam("dump_page"));
        SetStatus(msg.GetParam("new_step"));
    }
}

function load_prev_page() {
    var msg = CurrentEvent();

    if (msg == null) {
        var tsi = CurrentTourstop();
        if (tsi > 0) {
            tsi--;
            var ts = GetTourstop(tsi);
            if (ts) {
                msg = ts.NextMacro();
            } else {
                msg = PrevMacro();
            }
        }
    } else if (msg && msg.Template() == "new_page") {
        msg = PrevMacro(msg.TourPosition());
    }

    if (msg == null) return;

    var pos = msg.TourPosition();

    while (msg != null && msg.Template() != "new_page") {
        msg = PrevMacro(msg.TourPosition());
    }
    if (msg) {
        msg.SetCurrent();
        LoadUrl(Project.PagePath + msg.GetParam("dump_page"));
        SetStatus(msg.GetParam("new_step"));
    }
}
