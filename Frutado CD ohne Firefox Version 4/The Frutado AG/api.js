//
function cfg_resolve(xMj,xAD){
var xd2;
if(typeof(xAD)=='string'){
xd2=new Url(xMj);
xd2.xc3(xAD);}
else{
xd2=dgoAgent.Xu().XMZ(xMj);}
return xd2.toString();}
function cfg_resolve_string_against_project(XzO){
return cfg_resolve_string_against(XzO,'project');}
function cfg_resolve_string_against_trainer(XzO){
return cfg_resolve_string_against(XzO,'trainer');}
function cfg_resolve_string_against_data(XzO){
return cfg_resolve_string_against(XzO,'data');}
function cfg_resolve_string_against(XzO,xzk,XzQ){
if(XzO&&typeof(XzO)!='string'){
return false;}
if(XzQ&&typeof(XzQ)!='object'){
return false;}
var protocol=xzk||'project';
var XzP=XzQ||['img'];
var XH2=XzO.replace(/(<img.*?)(src\s*=\s*)(["'])([^"']*)["']/gi,
function(XH1,$1,$2,$3,$4){
var XzM=new Url($4);
XzM.xc3(protocol+':');
return $1+$2+$3+XzM+$3;});
return XH2;}
function cfg_mapwindow(index,x8Q){
alert('cfg_mapwindow()not implemented');}
function cfg_event_prevent_default(XDx){
return xZC(XDx);}
function cfg_event_cancel_bubbling(XDx){
return XP2(XDx);}
function cfg_action(XFh){
if(dgoAgent.XFV()==XAB){
dgoAgent.Xpr('API action "'+XFh+'" ignored','warning');
return false;}
var id=XFh;
if(typeof(XFh)=='string'){
switch(XFh.toUpperCase()){
case 'PLAY':
case 'RESUME':
case 'CONT':
case 'CONTINUE':
id=1001;
break;
case 'STOP':
id=1002;
break;
case 'PAUSE':
id=1003;
break;
case 'NEXT':
case 'SKIP':
id=1005;
break;
case 'BACK':
id=1006;
break;
case 'PREV':
id=1016;
break;
default:
dgoAgent.Xpr('API unknown action "'+XFh+'"','error');
return false;
break;}}
var xa7=dgoAgent.Xoua(id);
if(dgoAgent.Xlf().XF1()){
return xa7;}
return;}
function cfg_subfind(Xze){
var XFi=dgoAgent.XFJ().XO0(Xze);
if(XFi<0){
XFi=dgoAgent.XFJ().XzZ(Xze);}
if(XFi>=0){
return true;}
return false;}
var CFG_CALL_OPTION_INVERT=1;
function X3x(X57,XKQ){
var xd2;
var options=(XKQ||0);
var XFi=(typeof(X57)=='number'
?X57
:(dgoAgent.XFJ().XO0(X57)>=0?
dgoAgent.XFJ().XO0(X57):
dgoAgent.XFJ().XzZ(X57))
);
if(XFi>=0){
var X4Y=XE2;
if(options & CFG_CALL_OPTION_INVERT){
X4Y |=XHa;}
xd2=dgoAgent.XFJ().exec(XFi,X4Y);}
else{
dgoAgent.Xpr('API '+"cfg_call"+'('+X57+
'):sub not found','warning');
xd2=false;}
return xd2;}
function cfg_onerror(Xcp){
return dgoAgent.XFJ().X9P(Xcp);}
function cfg_onstop(Xcp){
return dgoAgent.XFJ().X9Q(Xcp);}
function cfg_call(X57,XKQ){
var xd2=X3x(X57,XKQ);
if(dgoAgent.Xlf().XF1()){
return xd2;}
return;}
function cfg_jumpindex(XFj){
var xa7=dgoAgent.Xouj(XFj);
if(dgoAgent.Xlf().XF1()){
return xa7;}
return;}
function X3y(Xze){
var xd2;
var XFi=dgoAgent.XFJ().XO0(Xze);
if(XFi<0){
XFi=dgoAgent.XFJ().XzZ(Xze);}
if(XFi>=0){
xd2=dgoAgent.Xouj(XFi);}
else{
dgoAgent.Xpr('API '+"cfg_jumptitle"+'('+Xze+
'):sub not found','warning');
xd2=false;}
return xd2;}
function cfg_jumptitle(xgP){
var xd2=(xgP===''?true:X3y(xgP));
if(dgoAgent.Xlf().XF1()){
return xd2;}
return;}
var CFG_TOUR_OPTION_NONE=0;
var CFG_TOUR_OPTION_WINDOW=1024;
var CFG_TOUR_OPTION_CURRENT_SUB=2048;
var CFG_TOUR_OPTION_CURRENT_SUB_ONLY=4096;
function cfg_tourload2(XKQ,xMj,xaq,xji){
var options=XKQ||0;
var Xo8=(options & CFG_TOUR_OPTION_WINDOW);
var xAZ=new Url(xMj);
dgoAgent.Xpr('API cfg_tourload2('+xAZ+','+
(xaq||'-')+','+(xji||'-')+')');
var url=new Url('trainer:frameset.html');
url.XWg(
'config',xAZ.toString(),false);
var xPL=(xaq+'').split('#',2);
url.XCK(xPL[0],true);
if(options & CFG_TOUR_OPTION_CURRENT_SUB_ONLY){
var i=dgoAgent.XFJ().Xo9(dgoAgent.X8p());
url.XC2(i>=0?(i+1)+'-'+(i+1):'');}
else if(options & CFG_TOUR_OPTION_CURRENT_SUB){
var i=dgoAgent.XFJ().Xo9(dgoAgent.X8p());
url.XC2(i>=0?(i+1)+'':'');}
else{
xPL.length>=2&&url.XC2(xPL[1]);}
if(Xo8){
self.open(url,'',xji);}
else{
if(dgoAgent.XFV()!=XAB){
dgoAgent.XTK('tourload2',null);}
self.parent.location.assign(url.toString());}
return true;}
function cfg_setTracker(xCJ){
return dgoAgent.xCH(xCJ);}
function cfg_track(xvk,xwk,xaf,xae,xad,xac,xam,xan,xao,xCG){
return dgoAgent.xCI(xvk,xwk,xaf,xae,xad,xac,xam,xan,xao,xCG);}
function cfg_tourload(xMj,XCZ,XPs,xji){
if(typeof(xMj)=='number'){
return cfg_tourload2(xMj,XCZ,XPs,xji);}
var url=(new Url(xMj)).toString();dgoAgent.Xpr('API cfg_tourload('+url+')');
if(dgoAgent.XFV()!=XAB){
dgoAgent.XTK('tourload',null);}
return dgoAgent.Xpt(url,XCZ,XPs);}
function cfg_tourend(){
dgoAgent.end('cfg_tourend()causes finish');}
function cfg_tourerror(XkJ){
dgoAgent.xwF('ex',XkJ);}
function XUQ(xgP,XGE){
var XNj=dgoAgent.XRR();
if(!XNj){
alert(XGE+'('+xgP+'):No library active.');
return null;}
return{XNj:XNj,xpK:XNj.XUP(xgP)};}
function cfg_tourstart(xgP){
var xa7=XUQ(xgP,'cfg_tourstart');
if(!xa7){
return false;}
if(!xa7.xpK){
alert('cfg_tourstart('+xgP+'):Not found.');
return false;}
return xa7.XNj.XHV(xa7.xpK);}
function cfg_tourfind(xgP){
var xa7=XUQ(xgP,'cfg_tourfind');
return xa7?(xa7.xpK?true:false):false;}
var Xp5=false;
function cfg_yield(X0J){
return(Xp5=X0J);}
function Xp4(){
var xd2=Xp5;
Xp5=false;
return xd2;}
function cfg_is_minimum_browser(XCT,XIJ){
return dgoAgent.XFI_(XCT,XIJ);}
function cfg_print(t){
dgoAgent.Xpr(t,'print');}
function cfg_trace(t){
xwJ(t);}
function cfg_lm_log(XCt,XCV,xLj){
dgoAgent.XK0.submit(XCt,XCV,xLj);}
function cfg_config(xfK){
var name=xNE.XSI[xfK];
var XGO;
return(name?xNE[name]:XGO);}
function cfg_setconfig(xfK,XIH){
var name=xNE.XSI[xfK];
var XLw=xNE[name];
xNE[name]=XIH;
return XLw;}
function cfg_event(t){
if(dgoAgent.XFV()==XAB){
dgoAgent.Xpr('API Event '+t+' ignored');
return;}
var xa7=dgoAgent.Xsen(t);
if(dgoAgent.Xlf().XF1()){
return xa7;}
return;}
function cfg_message(t,xkI){
dgoAgent.Xfn().XiD(t,xkI);}
function cfg_focus(){}
function cfg_fire_event(xGQ,x9Q,xcF){
return XQG(xGQ,x9Q,xcF);}
function cfg_scroll_and_fire(x9Q,xcF,xFR,xeS){
return XLg(x9Q,xcF,xFR,xeS);}
function cfg_resize_pos_and_fire(x9Q,x7Q,xdH,xFR,xeS){
return X9W(x9Q,x7Q,xdH,xFR,xeS);}
var dgo22=0;
function cfg_highlight(x8Q,xaF,c,x4C){
var event=evt_highlight2(
[false,'_dgoApiHighlight'+(++dgo22)+'_'],
null,null,xaF,x4C,c);
event.XWm=x8Q;
return event;}
function cfg_setup(x6l,xwK,w,h){
x6l.XPx=xwK;
return true;}
function cfg_setup2(x6l,xwK,xug,xwg,xvg,xxg){
var XWY=x6l||'cfg_setup2';
alert('api.js::'+XWY+'()not longer supported. Use highlight event instead!');
return false;}
function cfg_setup_absolute(x6l,xwK,x,y,w,h){
return cfg_setup2('cfg_setup_absolute');}
function cfg_show(x6l,XQx){
if(XQx){
var name=cfg_render(
x6l.XWm||null,x6l.XPx||null,x6l);
x6l.XVr=name;}
else{
if(x6l.XVr){
cfg_unrender(x6l.XVr);}}}
function cfg_render(xVG,xeF,XCt){
if(dgoAgent.XFV()==XOc){
return;}
if(typeof(XCt.XEW)=='function'||
typeof(XCt.XEW)=='object')
{
dgoAgent.Xpr(XCt,'evt_'+XCt.XEW(),2);}
return dgoAgent.x6b().x8T(xVG,xeF,XCt);}
var CFG_RENDER_OPTION_MINIMIZE=null;
var CFG_RENDER_OPTION_RESTORE=null;
var CFG_RENDER_OPTION_URLPATTERN=null;
function cfg_render_option(xfK,xEL,xaq){
if(dgoAgent.XFV()==XOc){
return;}
if(xEL==CFG_RENDER_OPTION_URLPATTERN){
return dgoAgent.Xd6().Xqr(
xfK,xaq);}
return dgoAgent.x6b().XUA(xfK,xEL);}
function cfg_render_refresh(Xn7){
if(dgoAgent.XFV()==XOc){
return 0;}
var t=typeof(Xn7);
if(t=='string'){
var x8e=dgoAgent.x6b().x8n(Xn7);
xd2=x8e
?(x8e.xb1()?1:0)
:'cfg_render_refresh('+Xn7+'):not found';}
else if(t=='object'){
if(Xn7){
if(Xn7.dgo38&&Xn7.dgo38.x7y){
xd2=Xn7.dgo38.x7y();}
else{
xd2=0;}}
else{
xd2=dgoAgent.x6b().x7y();}}
else if(t=='undefined'){
xd2=dgoAgent.x6b().x7y();}
return xd2;}
function cfg_unrender(xfK){
if(dgoAgent.XFV()==XOc){
return;}
var x8e=dgoAgent.x6b().x8n(xfK);
if(x8e){
var xa7=x8e.x9T(false);
var x7t=dgoAgent.x6b().remove(x8e);
return(xa7===true?x7t:xa7);}
return false;}
function cfg_get_last_render_name(){
return dgoAgent.x6b().x6X();}
var CFG_ADDHANDLER_OPTION_AT_FRONT=
xA2;
var CFG_ADDHANDLER_OPTION_OMIT_DUPLICATE=
xA3;
function cfg_add_handler(x9Q,xcF,x5Z,x7G,XKQ){
var xa7=xA7(x9Q,xcF,x5Z,x7G,XKQ);
return xa7;}
var CFG_REMOVEHANDLER_OPTION_ALL_DUPLICATES=
xA4;
function cfg_remove_handler(xcF,x5Z,x6f,XKQ){
return xA8(xcF,x5Z,x6f,XKQ);}
function cfg_trset(X6H,XIH){
return XX4(X6H,XIH);}
function cfg_tr(name,xvk,xwk,xaf,xae,xad,xac,xam,xan,xao){
return XQK(name,xvk,xwk,xaf,xae,xad,xac,xam,xan,xao);}
function cfg_setmaxscore(X28,X2a){
var X27=dgoAgent.X1N();
if(X27){
X27.X2i(X28,X2a);
return true;}
return false;}
function cfg_setscore(XZg){
var X27=dgoAgent.X1N();
if(X27){
X27.X2i(null,null,XZg);
return true;}
return false;}
function cfg_getscore(){
var X27=dgoAgent.X1N();
if(X27){
return X27.X5G();}
return null;}
function cfg_set_feedbackstyle(XGT){
dgoAgent.X5J()&&
dgoAgent.X5J().X6e(XGT);}
function cfg_set_exercise_points(X6U){
dgoAgent.X5J()&&
dgoAgent.X5J().Xog(X6U);
return false;}
function cfg_null_onbeforeunload(xRg,xQg){}
function cfg_eepGetPathSimple(xcF,XKQ){
return XJv(xcF,XKQ);}
var XmZ=null;
var XmY=null;
function cfg_eepTestInit(XCZ,XCY){
var XDm;
if(XmZ||XmY){
return false;}
var x4E=self.document;
XDm=x4E.createElement('IFRAME');
if(!XDm){
return 'Cannot create IFRAME';}
XDm.style.display='none';
XDm=x4E.body.appendChild(XDm);
if(!XDm){
return 'Cannot append IFRAME';}
XmY=new XAZ(XCZ,XCY);
XGH(self,XDm,self,Xm0);
XDm.src=dgoAgent.Xu().xNI('agent_ui_iframe.html').toString();
return true;}
function Xm0(xsH){
XVo(xsH);
XmZ=xsH;
XmY.exec('loaded',xsH);
XmY=null;
return true;}
function cfg_eepResolve2Simple(
xVh,xcG,XfC,XKQ)
{
if(!XmZ){
return 'IFRAME not yet ready';}
var X2A=XfC||dgoAgent.XVy();
var options=XKQ||0;
var XKE={Xl:''};
var xa7=XmZ.contentWindow.Eep_resolve2simple(
xVh,xcG,X2A,XKQ,XKE);
if(typeof(xa7)!='string'){
return 'Eep_resolve2simple('+xVh+'):'+
xa7+' ['+typeof(xa7)+']';}
return{cfg_path:xa7,cfg_log:XKE.Xl};}
//
function cfg_frametracking_add_window(X77,x9Q,Xhr){
if(X77!=null&&typeof(X77)!='number'&&typeof(X77)!='string'){
alert('Wrong argument 1 when calling cfg_frametracking_add_window()!\n'+
'Change in build 192:Arguments are now(no,win)\n'+
'No must be number,string or null,but is "'+typeof(X77)+'"');
return-1;}
if(typeof(x9Q)!='object'){
alert('Wrong argument 2 when calling cfg_frametracking_add_window()!\n'+
'Change in build 192:Arguments are now(no,win)\n'+
'Win must be object,but is "'+typeof(x9Q)+'"');
return-1;}
if(dgoAgent.XRN().XoM.cfg_injectTrainer){
Xhr=true;}
return dgoAgent.Xd6().XnD(X77,x9Q,Xhr);}
function cfg_frametracking_exit(){
XbA=null;
XcK=null;
XFb=null;
XTm=false;
return true;}
function cfg_frametracking_get(){
var XW6=null;
var path,xUG;
while(!XW6&&XbA.XFD()>0){
path=XbA.XEJ();
if(path){
XW6=XcK[path];
XcK[path]=null;
if(XW6){
var xbK;
if(XW6.Xd2()==XcC){
dgoAgent.Xpr('API cfg_frametracking_get():No access to '+
XW6,'warning');
XW6=xUG=null;}
else if(!(xUG=XW6.x6U())){
dgoAgent.Xpr('API cfg_frametracking_get():Frame null in '+
XW6,'warning');
XW6=xUG=null;}
else if(xbK=XSS(xUG)){
dgoAgent.Xpr('API cfg_frametracking_get():'+XW6+
':'+xbK+'(Frame oscillates?)','warning');
XW6=xUG=null;}}}}
if(!XW6){
XTm=
(XbA.XFD()==0);
dgoAgent.XRN().xuQ>=2&&
dgoAgent.Xpr('API cfg_frametracking_get():queue empty.');
return null;}
var xUG=XW6.x6U();
var path=XW6.XFG(true);
var Xi6={
efp_frame:xUG
,efp_formNames:Xax(xUG)
,efp_path:path
,efp_windowNo:XW6.XdU().XVz()
,toString:XEw};
dgoAgent.XRN().xuQ>=2&&
dgoAgent.Xpr('API cfg_frametracking_get():'+Xi6);
return Xi6;}
function cfg_frametracking_init(){
XbA=new XBb;
XcK={};
XTm=true;
dgoAgent.Xd6().Xdj(
null,XF6);
return true;}
var CFG_REQUEUE_OPTION_NONE=0;
var CFG_REQUEUE_OPTION_CLEAR=1;
function cfg_frametracking_requeue(xVG,XKQ){
var xd2;
try{
var options=XKQ||0;
var XfQ=dgoAgent.Xd6();
var XYc,XVm,XW6;
if(null===(XYc=XfQ.Xd7(
dgoAgent.X1O(xVG))))
{
return false;}
if(!(XVm=
XfQ.XdV(XYc)))
{
return false;}
if(!(XW6=XVm.XVg(xVG))){
return false;}
if(options & CFG_REQUEUE_OPTION_CLEAR){
var x9W=dgoAgent.x6b().XTo(XW6);
x9W.x8A(true);}
xd2=XF6(XW6);}
catch(xa8){
dgoAgent.Xpr('API cfg_frametracking_requeue():'+
(new x6C(xa8)),'exc');
xd2=false;}
return xd2;}
function cfg_frametracking_reset_aliases(){
dgoAgent.Xd6().XjH();}
function cfg_frametracking_set_alias(XEC,xVG){
try{
dgoAgent.Xd6().Xev(XEC,xVG);}
catch(xa8){
dgoAgent.Xpr('API cfg_frametracking_set_alias('+XEC+'):'+
(new x6C(xa8)),'exc');}}
//
//
var CFG_TWIST_OPTION_NONE=0;
var CFG_TWIST_OPTION_PARENT=1;
var CFG_TWIST_INJECT_TRAINER=2;
function cfg_frametracking_twist_window_open(x9Q,XGT,x5Z,XKQ){
if(dgoAgent.XRN().XoM.cfg_injectTrainer){
XKQ=XKQ | CFG_TWIST_INJECT_TRAINER;}
var elements=x9Q.document.getElementsByTagName('A');
var i,element;
for(i=0;i<elements.length;++i){
element=elements[i];
if(element.href&&element.target.toLowerCase()=='_blank'){
element.dgoB=(XKQ||0)
& !CFG_TWIST_OPTION_PARENT;
xA7(x9Q,element,'click',
XnJ,
xA2 |
xA3);
xA7(x9Q,element,'click',
XnN,
xA3,-1000);}}
if(!XGT){
return XnK(x9Q,XKQ);}
var xa7,form;
var XnR=x5Z||(XGT.tagName=='FORM'?'submit':'click');
if(XnR=='submit'){
xa7=true;
form=XGT;}
else{
XGT.dgoB=XKQ||0;
xa7=xA7(x9Q,XGT,XnR,
XnJ,
xA2 |
xA3);
form=typeof(XGT.form)=='object'&&
XGT.form&&XGT.form.target=='_blank'?XGT.form:null;}
if(xa7&&form){
form.dgoB=XKQ||0;
xa7=xA7(x9Q,form,'submit',
XnJ,
xA2 |
xA3);
xa7=xa7&&xA7(x9Q,form,'submit',
XnN,
xA3,-1000);}
return xa7;}
function cfg_frametracking_untwist_window_open(
x9Q,XGT,x5Z,XKQ)
{
var options=XKQ||0;
if(XGT){
XGT.dgoB=null;
xA8(XGT,
x5Z||(XGT.tagName=='FORM'?'submit':'click'),
XnJ,
xA4);}
if(x9Q){
if(x9Q.dgo51){
var XGB=x9Q.dgo51;
x9Q.dgo51=null;
x9Q.open=XGB;}
if(options & CFG_TWIST_OPTION_PARENT&&x9Q.parent.dgo51){
var xHL=x9Q.parent;
var XGB=xHL.dgo51;
xHL.dgo51=null;
xHL.open=XGB;}}
return true;}
function cfg_ontrack(Xcp){
XFb=Xcp||null;
return true;}
function XTk(){
CFG_RENDER_OPTION_MINIMIZE=XBf;
CFG_RENDER_OPTION_RESTORE=XTE;
CFG_RENDER_OPTION_URLPATTERN=XTE+1001;}
if(self.XI7){XI7.XJB(new XIX('../api.js',
['queue.js','../api_impl.js','../agent.js',
'../xbrowser.js','../render_container.js' ],XTk));}
else{
XTk();}

/*
  Copyright Notice:

  Copyright 2000-2005 datango AG
  ALL RIGHTS RESERVED

  UNPUBLISHED -- Use of a copyright notice is precautionary only and
  does not imply publication or disclosure.

  THE CONTENT OF THIS WORK CONTAINS CONFIDENTIAL AND PROPRIETARY
  INFORMATION OF DATANGO AG. ANY DUPLICATION, MODIFICATION,
  DISTRIBUTION, OR DISCLOSURE IN ANY FORM, IN WHOLE, OR IN PART, IS
  STRICTLY PROHIBITED WITHOUT THE PRIOR EXPRESS WRITTEN PERMISSION OF
  DATANGO AG.

*/
