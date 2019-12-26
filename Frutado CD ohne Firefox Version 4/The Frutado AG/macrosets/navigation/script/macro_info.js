
var macro_info = new Object;


macro_info.start_unit = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
    // _info.screenshot = OrigEvent().GetParam("screenshot_file");
    //_info.text = 
        //OrigEvent().GetParam("macro_comment").length ? 
        //OrigEvent().GetParam("macro_comment"):
        //OrigEvent().GetParam("new_step");
}

macro_info.define_target = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
    _info.jump_target = OrigEvent().GetParam("ts");
}

macro_info.explanation = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.explanation_long = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.choose_process = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.click = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.active_area = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.key_press = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.input_text = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.select_single = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.input_radio = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.script = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.behaviour = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.behaviour_assign_global = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.behaviour_assign_ns = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.behaviour_assign_object = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.free_object = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.free_object_elem = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.end_unit = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.beh_cancel = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.beh_display_fo = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.beh_hide_fo = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.beh_foe_bold = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.beh_foe_change_state = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.beh_hilight = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.beh_hide_hilight = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.beh_show_bubble = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.beh_hide_bubble = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.beh_set_value = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.beh_jump = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.beh_access = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.beh_standby = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.beh_exec_mouse_action = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.var_string = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.var_bool = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.var_number = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.beh_get_value = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.beh_set_strvar = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.beh_set_boolvar = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.beh_set_numvar = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.behaviour_assign_condition = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.cond_assign_global = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.cond_assign_ns = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.cond_assign_object = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.check = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.condition = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.check_strval = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.check_boolval = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.check_numval = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.check_ctrlval = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.check_ctrlexists = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

macro_info.check_keyattr = function () {
    _info = new Object;
    _info.text = OrigEvent().GetParam("macro_comment");
}

var onactivate = new Object();

/*
onactivate.new_page = function() {
    var mac = OrigEvent();

    var evt = CreateEvent("FileUrlMessage");
    evt.SetParam("url", mac.GetParam("dump_page"));

    var rp = CreatePosition(Position_FRAME);
    rp.WindowID = 0;

    evt.SetParam("relpos", rp);
    evt.Send();
}

onactivate.new_window = function() {
    var mac = OrigEvent();

    var evt = CreateEvent("WindowMessage");
    evt.SetParam("url", mac.GetParam("dump_page"));
    evt.SetParam("relpos", mac.GetParam("dump_win_relpos"));
    evt.SetParam("url", mac.GetParam("dump_page"));
    evt.SetParam("left", mac.GetParam("dump_win_left"));
    evt.SetParam("top", mac.GetParam("dump_win_top"));
    evt.SetParam("width", mac.GetParam("dump_win_width"));
    evt.SetParam("height", mac.GetParam("dump_win_height"));

    evt.Send();
}

onactivate.scroll_hor = function() {
    var mac = OrigEvent();

    var evt = CreateEvent("FileUrlMessage");
    evt.SetParam("url", mac.GetParam("dump_page"));

    var rp = CreatePosition(Position_FRAME);
    rp.WindowID = 0;

    evt.SetParam("relpos", rp);
    evt.Send();
}

onactivate.scroll_vert = function() {
    var mac = OrigEvent();

    var evt = CreateEvent("FileUrlMessage");
    evt.SetParam("url", mac.GetParam("dump_page"));

    var rp = CreatePosition(Position_FRAME);
    rp.WindowID = 0;

    evt.SetParam("relpos", rp);
    evt.Send();
}
*/
