#use(NavigationExporter.js)

function generate_navigation(filepath) {
    log("generate_navigation()-" + filepath);
    
    var nav_exporter = new NavigationExporter();
    
    nav_exporter.Init();
    
    StringToFile(filepath, nav_exporter.GetScript());
}

function generate_navprj() {
    log("convert2navprj()");
    
    var nav_exporter = new NavigationExporter();
    
    nav_exporter.Init();
    
    nav_exporter.GenerateProject();
}