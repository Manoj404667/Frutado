#use(ui_lang.js)


function ppt_import() {
   if (!PptImporter.Open()) {
       alert('could not open');
   } 

   var import_width = ReadIntSetting("PptImportWidth", 800);
   var import_height = ReadIntSetting("PptImportHeight", 600);

   var dlg = CreateDialog();
   dlg.SetCaption(ui_trans('capPptImport'));
   dlg.AddParam("width", ParamType_INTEGER, ui_trans('width'));
   dlg.SetParam("width", import_width);
   dlg.AddParam("height", ParamType_INTEGER, ui_trans('height'));
   dlg.SetParam("height", import_height);

   if (!dlg.Show()) return;

   import_width = dlg.GetParam("width");
   import_height = dlg.GetParam("height");
   WriteIntSetting("PptImportWidth", import_width);
   WriteIntSetting("PptImportHeight", import_height);

   MsgBox(ui_trans('msgPptImport'),
          ui_trans('capPptImport'),
          MB_OK | MB_INFORMATION | MB_TOPMOST);

   PptImporter.CaptureSelection();

   ProgressBegin(ui_trans('capPptImport'), PptImporter.SlideCount);
   for (var i = 0; i < PptImporter.SlideCount; i++) {
       var xml_fn = CreateFileName(Project.PagePath, "PPT_", ".XML");
       var png_fn = PathReplaceExtension(xml_fn, "png");
       var html_fn = PathReplaceExtension(xml_fn, "html");

       PptImporter.ImportSlide(i, Project.PagePath + png_fn, import_width, import_height);

       var sd = CreateScreendumpFromFile(Project.PagePath + xml_fn, Project.PagePath + png_fn,
                                         InstallDirectory + "screendump_templates\\TemplateCentered.html");
       sd.Save();

       CopyFile(Project.PagePath + png_fn, Project.DocPath + png_fn);


       var mac = CreateMacro("new_page");
       mac.SetParam("dump_page", html_fn);
       mac.SetParam("new_step", PptImporter.SlideName(i));
       mac.SetParam("screenshot_file", png_fn);

       var rect = CreateRect(0, 0, import_width, import_height);
       mac.SetParam("screenshot_rect", rect);

       AddTourstop(PptImporter.SlideName(i), Tourstop_SHOW_JUMP);
       AppendEvent(mac);
       CurProgress(i+1);
   }
   ProgressEnd();
}
