
if (!ExpertFeature("OldMacroImpl")) {
    if (typeof(ctx) != 'object') {
        log("Creating new Ctx-Dummy");
        ctx = new Object();
    }
}

function UpdateParams(mac) {
    ctx.global_params = new Object;
    ctx.ms.build_globals(ctx);
    ctx.global_params['resource_dir'] = Project.WorkareaBase + "resource"; // GetTrainerParam('data') //c++ callback 
    for (var i = 0; i < Project.NumParams(); i++) {
        // log("PARAM " + Project.ParamName(i) + ": " + ctx.global_params[Project.ParamName(i)]);
        if (Project.ParamSpecified(i)) {
            ctx.global_params[Project.ParamName(i)] = Project.GetParam(i);
            // log("    P " + Project.ParamName(i) + ": " + ctx.global_params[Project.ParamName(i)]);
        } else if (Project.DefaultParamSpecified(i)) {
            ctx.global_params[Project.ParamName(i)] = Project.GetDefaultParam(i);
            // log("    D " + Project.ParamName(i) + ": " + ctx.global_params[Project.ParamName(i)]);
        }
    }
}

