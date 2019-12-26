#use(ui_lang.js)
#use(relpos_helpers.js)


function t2html(txt, srcdir) {
    txt = '' + txt;
    txt = txt.replace(/\\U/g, "<u>");
    txt = txt.replace(/\\u/g, "</u>");
    txt = txt.replace(/\\B/g, "<b>");
    txt = txt.replace(/\\b/g, "</b>");
    txt = txt.replace(/\\n/g, "<br>");
    var re_sym = /\\Sym:([^:]*):/;
    while (matches = re_sym.exec(txt)) {
        CopyFile(srcdir + matches[1], Project.DocPath + matches[1]);
        txt = txt.replace(/\\Sym:([^:]*):/, '<img src="doc/' + matches[1] + '">');
    }
    return txt;
}

function
get_pos(rect, index, ctx) {
    var hpos = CreatePosition(Position_ELEMENT);
    hpos.WindowID = 0;
    hpos.ElementPath = "0:0:0:0:1:1:" + index;

    hpos.DocX = (100 * rect.left)/ctx.screen_width;
    hpos.DocY = (100 * rect.top)/ctx.screen_height;

    return hpos;
}

function ttv() {
    var srcdir  = "C:\\Documents and Settings\\stefan.DATANGO\\Desktop\\Postbank\\_GroupWise_WBT_V101a\\l_1c457787096e456b9523cfafc1cab6b8\\";
    var filename  = srcdir + "l_1c457787096e456b9523cfafc1cab6b8.xml";
    var xmldoc = ReadXml(filename);

    if (!xmldoc) {
        log("Could not read " + filename);
        return;
    }

    var xml = xmldoc.baseNode();

    var story_node = xml.getChild(0);
    if (story_node.getName() != 'Story') {
        log("not a story!");
        return;
    }
    var story = [];

    var pool_by_id = {};
    var page_obj = {};


    for (var i = 0; i < story_node.numChildren(); i++) {
        var step_node = story_node.getChild(i);

        var tag = step_node.getName();

        if (tag == 'Extensions') {
            // do nothing
        } else if (tag == 'Section') {
            log('Section');
        } else if (tag == 'Pool') {
            log('Pool');
            for (var p = 0; p < step_node.numChildren(); p++) {
                var poolitem_node = step_node.getChild(p);

                var ptag = poolitem_node.getName();

                var poolitem = {tagName: ptag};

                var pool_id = '';

                //log('Pool: ' + poolitem_node.numAttributes() + " atts");
                for (var pa = 0; pa < poolitem_node.numAttributes(); pa++) {
                    var patt = poolitem_node.getAttribute(pa);

                    poolitem[patt.getName()] = patt.getValue();

                    if (patt.getName() == 'ID') {
                        pool_id = patt.getValue();
                    }
                }
                if (pool_id.length) pool_by_id[pool_id] = poolitem;

            }
        } else {
            var step = {tagName: tag};

            // log(step_node.numAttributes() + " atts");
            for (var a = 0; a < step_node.numAttributes(); a++) {
                var satt = step_node.getAttribute(a);

                step[satt.getName()] = satt.getValue();
            }
            story.push(step);
        }

    }
    log('got it! :-)');

    var ctx = {};
    ctx.cur_img_file = "first.png";
    ctx.cur_img = null;
    ctx.screen_width = 1024;
    ctx.screen_height = 768;

    for (var i = 0; i < story.length; i++) {
        var step = story[i];

        if (step.tagName == 'Simulation') {
            if (step.TI) AddTourstop(step.TI);
        } else if (step.tagName == 'REF') {
            if (step.ID) {
                // log('' + i + ' REF -> ' + step.ID);
                var ref_obj = pool_by_id[step.ID];
                if (ref_obj) {
                    ref_obj.dgo_visible = true;
                    page_obj[ref_obj.O] = ref_obj;
                    if (ref_obj.tagName == 'SB') {
                        if (ref_obj.PF) { 
                            var info = 'Step ' + step.ID;
                            if (typeof(ref_obj.L) == 'undefined') {
                                DeleteFile(Project.PagePath + ctx.cur_img_file);
                                log("Copy: " + ctx.cur_img_file + " " + ref_obj.PF);
                                CopyFile(srcdir + ref_obj.PF, Project.PagePath + ctx.cur_img_file);
                                ctx.cur_img = CreateImage(Project.PagePath + ctx.cur_img_file);
                                ctx.cur_img.BeginPaint();
                            } else {
                                info += ' L: ' + ref_obj.L + ' T: ' + ref_obj.T;
                                var overlay_img = CreateImage(srcdir + ref_obj.PF);
                                ctx.cur_img.PutImage(overlay_img, ref_obj.L - 0, ref_obj.T - 0);
                                overlay_img.Destroy();
                                log("Put: " + ctx.cur_img_file + " " + ref_obj.PF);    
                            }

                        } else {
                            // overlay ...
                        }
                    } else if (ref_obj.tagName == 'CEB') {
                        /*
                        var mac = CreateMacro("click");
                        var scr = CreateRect(ref_obj.L - 0,
                                             ref_obj.T - 0,
                                             (ref_obj.L-0) + (ref_obj.W - 0),
                                             (ref_obj.T-0) + (ref_obj.H-0));
                        mac.SetParam("screenshot_rect", scr);
                        AppendEvent(mac);
                        */
                    } else if (ref_obj.tagName == 'NewComment') {
                        if (ctx.cur_comment && ctx.cur_comment.length) {
                            var mac = CreateMacro("explanation_long");
                            mac.SetParam("explanation_d", t2html(ctx.cur_comment, srcdir));
                            AppendEvent(mac);
                        }
                        ctx.cur_comment = ref_obj.TX;
                    } else {
                        // log("got REF " + ref_obj.tagName);
                        // for (var att in ref_obj) log("    " + att + ": " + ref_obj[att]);
                    }
                } else {
                    log("No Pool-Item with ID " + step.ID);
                }
            } else {
                log("No ID in REF");
            }
        } else if (step.tagName == 'HO') {
            if (page_obj[step.O]) {
                page_obj[step.O].dgo_visible = false;
            }
        } else if (step.tagName == 'SO') {
            if (page_obj[step.O]) {
                page_obj[step.O].dgo_visible = true;
            }
        } else if (step.tagName == 'Quest') {
            ctx.cur_screen = "Page" + i;
            ctx.cur_img.EndPaint();
            ctx.cur_img.Save(Project.PagePath + ctx.cur_img_file);
            ctx.cur_img.Destroy();

            var sd = CreateScreendumpFromFile(Project.PagePath + ctx.cur_screen + ".xml",
                                              ctx.cur_img_file,
                                              InstallDirectory + "screendump_templates\\TemplateCentered.html");

            var mac = CreateMacro("new_page");
            log("Use: " + ctx.cur_img_file);
            mac.SetParam("dump_page", ctx.cur_screen + ".html");
            mac.SetParam("screenshot_file", "..\\pages\\" + ctx.cur_img_file);
            mac.SetParam("new_step", info);

            var dst = "img" + i + ".png";
            CopyFile(Project.PagePath + ctx.cur_img_file, Project.PagePath + dst);
            ctx.cur_img_file = dst;
            ctx.cur_img = CreateImage(Project.PagePath + ctx.cur_img_file);
            ctx.cur_img.BeginPaint();

            AppendEvent(mac);

            var quest_rect = null;
            var quest_index = -1;
            var cur_index = 0;

            log("### Objects ###");
            for (var ctl_id in page_obj) {
                var ctl = page_obj[ctl_id];

                if (ctl && ctl.tagName == 'CEB' && ctl.dgo_visible) {
                    log("    " + ctl_id);
                    var scr = CreateRect(ctl.L - 0,
                                         ctl.T - 0,
                                         (ctl.L-0) + (ctl.W - 0),
                                         (ctl.T-0) + (ctl.H-0));

                    if (ctl_id == step.O) {
                        quest_index = cur_index;
                        quest_rect = scr.Clone();
                    }

                    var sctl;
                    if (ctl.C && ctl.C == 'Edit') {
                        sctl = sd.AddControl("edit");
                    } else {
                        sctl = sd.AddControl("hrefarea");
                    }
                    cur_index ++;
                    if (sctl) {
                        sctl.SetParam("Position", scr);
                        if (ctl.EPT) {
                            var val = ctl.EPT;
                            val += ":" + (ctl.EPTX ? ctl.EPTX : "0");
                            val += ":" + (ctl.EPTY ? ctl.EPTY : "0");
                            sctl.SetParam("OverPicture/value", val);
                            CopyFile(srcdir + ctl.EPT, Project.PagePath + ctl.EPT);
                        }
                        if (ctl.EPP) {
                            val += ":" + (ctl.EPPX ? ctl.EPPX : "0");
                            val += ":" + (ctl.EPPY ? ctl.EPPY : "0");
                            sctl.SetParam("DownPicture/value", val);
                            CopyFile(srcdir + ctl.EPP, Project.PagePath + ctl.EPP);
                        }
                    }

                }

            }
            sd.Save();


            if (quest_rect) {
                if (step.QT && step.QT == 'Ascii') {
                    var mac = CreateMacro("key_press");
                    mac.SetParam("explanation_d", t2html(ctx.cur_comment, srcdir));
                    mac.SetParam("explanation_p", t2html(ctx.cur_comment, srcdir));
                    mac.SetParam("key_name", step.QD);

                    ctx.cur_comment = '';
                    mac.SetParam("macro_comment", step.O);
                    //mac.SetParam("screenshot_rect", quest_rect);
                    set_positions(mac, get_pos(quest_rect, quest_index, ctx), true);
                    AppendEvent(mac);
                } else {

                    var mac = CreateMacro("click");

                    mac.SetParam("explanation_d", t2html(ctx.cur_comment, srcdir));
                    mac.SetParam("explanation_p", t2html(ctx.cur_comment, srcdir));
                    if (step.QT && step.QT == 'DoubleClickSimple') {
                        mac.SetParam('action', 'ldblclick');
                    }
                    ctx.cur_comment = '';
                    mac.SetParam("fieldname", step.O);
                    mac.SetParam("screenshot_rect", quest_rect);
                    set_positions(mac, get_pos(quest_rect, quest_index, ctx), true);
                    AppendEvent(mac);
                }
            } else {
                log("no object : " + step.O);
            }

        } else {
            // log('' + i + ': ' + step.tagName);
        }
    }

}
