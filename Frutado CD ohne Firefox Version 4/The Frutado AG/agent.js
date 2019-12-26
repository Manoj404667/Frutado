
function XAF(XGz,XCG,XGW,XKQ){
this.XGz=XGz;
this.XCG=XCG;
this.XGW=XGW;
this.XKQ=XKQ;
this.x6K=true;}
var XEG=1;
XAF.prototype.x6K=false;
XAF.prototype.XGz=-1;
XAF.prototype.XCG=-1;
XAF.prototype.XGW=-1;
XAF.prototype.XKQ=0;
XAF.prototype.Xac=function(){
return this.XGz==XQ3&&
this.XCG==XBR||
this.XCG==XAA&&
!(this.XKQ & XEG);}
XAF.prototype.Xap=function(){
return(this.XGz==XBS||
this.XGz==XBQ||
this.XGz==XBP)&&
(this.XCG==XAA||
this.XCG==XA0);}
XAF.prototype.Xas=function(){
return(this.XGz==XBS||
this.XGz==XBQ||
this.XGz==XBP||
this.XGz==XQ3)&&
(this.XCG==XBR||
this.XCG==XAA||
this.XCG==XAD||
this.XCG==XAC||
this.XCG==XA0);}
XAF.prototype.Xaj=function(){
return(this.XGz==XBS||
this.XGz==XBQ||
this.XGz==XBP||
this.XGz==XQ3)&&
(this.XCG==XBR||
this.XCG==XAA||
this.XCG==XAD||
this.XCG==XA0);}
XAF.prototype.Xns=function(){
return this.XHi(this.XCG);}
XAF.prototype.Xos=function(){
return this.XHi(this.XGW);}
XAF.prototype.Xtr=function(){
if(this.XCG==XAB||
this.XCG==XBR||
this.XGW==XAB)
{
return 108;}
if(this.XCG==XAD){
return 111;}
if(this.XGz==XBP){
return 109;}
return 0;}
XAF.prototype.X5B=function(){
return this.XKQ;}
XAF.prototype.XHi=function(XCG){
if(XCG==XAB){
return 4;}
else if(XCG==XA0||
XCG==XAA)
{
return 6;}
else if(XCG==XAC){
return 2;}
else if(XCG==XAD||
XCG==XBR)
{
return 5;}
return 0;}
function xk0(XCI,XIF,x9Q){
this.XCI=XCI;
this.XIF=XIF;
this.x9Q=x9Q;
this.XIF.dgo7=XCI;
var XFl=[
'cfg_resolve',
'cfg_resolve_string_against_project',
'cfg_resolve_string_against_trainer',
'cfg_resolve_string_against_data',
'cfg_mapwindow',
'cfg_action',
'cfg_subfind',
'cfg_onerror',
'cfg_onstop',
'cfg_call',
'cfg_jumpindex',
'cfg_jumptitle',
'cfg_configload',
'cfg_tourload',
'cfg_tourload2',
'cfg_setTracker',
'cfg_track',
'cfg_tourend',
'cfg_tourerror',
'cfg_tourstart',
'cfg_tourfind',
'cfg_is_minimum_browser',
'cfg_print',
'cfg_trace',
'cfg_lm_log',
'cfg_config',
'cfg_setconfig',
'cfg_event',
'cfg_message',
'cfg_focus',
'cfg_highlight',
'cfg_setup',
'cfg_setup2',
'cfg_setup_absolute',
'cfg_show',
'cfg_render',
'cfg_render_option',
'cfg_render_refresh',
'cfg_unrender',
'cfg_get_last_render_name',
'cfg_add_handler',
'cfg_remove_handler',
'cfg_trset',
'cfg_tr',
'cfg_setmaxscore',
'cfg_setscore',
'cfg_getscore',
'cfg_set_feedbackstyle',
'cfg_set_exercise_points',
'cfg_null_onbeforeunload',
'cfg_frametracking_add_window',
'cfg_frametracking_exit',
'cfg_frametracking_get',
'cfg_frametracking_init',
'cfg_frametracking_requeue',
'cfg_frametracking_reset_aliases',
'cfg_frametracking_set_alias',
'cfg_frametracking_twist_window_open',
'cfg_frametracking_untwist_window_open',
'cfg_ontrack',
'cfg_eepTestInit',
'cfg_eepGetPathSimple',
'cfg_eepResolve2Simple',
'cfg_fire_event',
'cfg_scroll_and_fire',
'cfg_event_prevent_default',
'cfg_event_cancel_bubbling',
'cfg_yield',
'cfg_resize_pos_and_fire',
'cfg_libraryUseXMLHttpRequest',
'cfg_libraryNewStyle',
'CFG_ADDHANDLER_OPTION_AT_FRONT',
'CFG_ADDHANDLER_OPTION_OMIT_DUPLICATE',
'CFG_REMOVEHANDLER_OPTION_ALL_DUPLICATES',
'CFG_RENDER_OPTION_MINIMIZE',
'CFG_RENDER_OPTION_RESTORE',
'CFG_RENDER_OPTION_URLPATTERN',
'CFG_REQUEUE_OPTION_NONE',
'CFG_REQUEUE_OPTION_CLEAR',
'CFG_TOUR_OPTION_NONE',
'CFG_TOUR_OPTION_WINDOW',
'CFG_TOUR_OPTION_CURRENT_SUB',
'CFG_TOUR_OPTION_CURRENT_SUB_ONLY',
'CFG_TWIST_OPTION_NONE',
'CFG_TWIST_OPTION_PARENT',
'CFG_TWIST_INJECT_TRAINER',
'ElementRef',
'Eep',
'evt_simple',
'evt_cancelWait',
'evt_clearTransition',
'evt_clearTrigger',
'evt_clearValue',
'evt_cursor',
'evt_defineTransition',
'evt_formtext',
'evt_formcheck',
'evt_formselect1',
'evt_formselect',
'evt_highlight',
'evt_highlight2',
'evt_javascript',
'evt_installTrigger',
'evt_loaded',
'evt_macrocall',
'evt_mouse',
'evt_mousehide',
'evt_off',
'evt_pause',
'evt_scroll',
'evt_storeValue',
'evt_textbubble',
'evt_textbubbleclose',
'evt_textwindow',
'evt_timeout',
'evt_trackValue',
'evt_url',
'evt_wait',
'evt_watch',
'evt_window',
'evt_windowclose',
'CLEAR_ALL',
'CLEAR_LOCAL_ALL',
'TRANSITION_JUMP',
'TRANSITION_CONTINUE',
'TRANSITION_CALL',
'TRANSITION_JAVASCRIPT',
'TRANSITION_GLOBAL',
'TRANSITION_JUMP_GLOBAL',
'TRANSITION_CONTINUE_GLOBAL',
'TRANSITION_CALL_GLOBAL',
'TRANSITION_JAVASCRIPT_GLOBAL',
'TRIGGER_CHANGE',
'TRIGGER_CLICK',
'TRIGGER_DBLCLICK',
'TRIGGER_MCLICK',
'TRIGGER_RCLICK',
'TRIGGER_MOUSE_ENTER',
'TRIGGER_MOUSE_LEAVE',
'TRIGGER_FOCUS_ENTER',
'TRIGGER_FOCUS_LEAVE',
'TRIGGER_KEYPRESS',
'TRIGGER_DRAG',
'TRIGGER_DROP',
'TRIGGER_lclick',
'TRIGGER_ldblclick',
'TRIGGER_mclick',
'TRIGGER_mdblclick',
'TRIGGER_rclick',
'TRIGGER_rdblclick',
'TRIGGER_drag',
'TRIGGER_drop',
'TRIGGER_enter',
'TRIGGER_IS_DEFAULT',
'TRIGGER_HOTKEY_FRAMESET',
'TRIGGER_BLOCK_ONSUCCESS',
'TRIGGER_BLOCK_ONERROR',
'TRIGGER_NOERROR_ON_CONDITION_FAIL',
'TRIGGER_RADIO_SINGLE',
'TRIGGER_GLOBAL',
'TRIGGER_FEEDBACK_USERINPUT',
'VALUE_PROTECTED',
'VALUE_GLOBAL',
'VALUE_SNAPSHOT',
'VALUE_CHECK_ONCHANGE',
'VALUE_KEEP_OLD',
'VALUE_RADIO_SINGLE',
'VALUE_INIT',
'VALUE_BOOL',
'VALUE_NUMBER',
'VALUE_DATE',
'WAIT_MUTE',
'WAIT_POLL',
'WATCH_KEEP',
'WATCH_SILENT',
'WATCH_HELP',
'WATCH_FORBID_CLICKS',
'WATCH_FORBID_KEYS',
'WATCH_FORBID_CHANGES',
'WATCH_FORBID_ALL',
'WATCH_ONTRIGGER_CONTINUE',
'WATCH_DEFAULT',
'WATCH_DEFAULT_ANIMATED',
'WATCH_FOREVER',
'WATCH_SHOWSCORE',
'WATCH_COMPLETE_FEEDBACK',
'WATCH_KEEP_NAVIGATION',
'WATCH_FORBID_DRAG_DROP',
'WATCH_ALLOW_DROP_ONLY_ON_DESTINATIONS',
'WATCH_DRAG_WITH_IMAGE'
];
var name;
for(var i=0;i<XFl.length;++i){
name=XFl[i];
XIF[name]=x9Q[name];}
XIF.toString=this.toString;
this.x6K=true;}
xk0.prototype.x6K=false;
xk0.prototype.XCI=null;
xk0.prototype.XIF=null;
xk0.prototype.xtN=0;
xk0.prototype.Xls=function(){
return this.XIF;}
xk0.prototype.XWl=function(){
return this.XIF.dgox;}
var XDL=/^[ \t\n]*$/;
xk0.prototype.Xsl=function(
XDw,Xkb,xVG,x9Q,xeF)
{
if(XDw.search(XDL)>=0)
return true;
++this.xtN;
var xa7={};
if(this.XCI.XRN().xhg||this.XCI.XRN().XTw){
xa7.xd2=xk1(
XDw,Xkb||this.XIF,
this.XIF,xVG,x9Q,xeF,
this.XCI.X5P().XEJ());}
else{
xa7=xk1.xkF(
XDw,Xkb||this.XIF,
this.XIF,xVG,x9Q,xeF,
this.XCI.X5P().XEJ());}
this.xtN=
(this.xtN>0?this.xtN-1:0);
if(xa7.type){var xbK=xa7.type+' in external Javascript Code:\r\n'+xa7;
this.XCI.Xpr('@C '+xbK,'exc');
return false;}
return(xa7.type?null:xa7.xd2);}
xk0.prototype.Xzm=function(Xzo,Xzs,
Xkb,xVG,x9Q,xeF)
{
++this.xtN;
var xa7={};
Xzs.ctx_control=Xkb;
Xzs.ctx_frame=xVG;
Xzs.ctx_window=x9Q;
Xzs.ctx_element=xeF;
if(this.XCI.XRN().xhg||this.XCI.XRN().XTw){
xa7.xd2=Xzi(this.x9Q,
this.XCI.XKj(),
Xzo,
Xzs);}
else{
xa7=Xzi.xkF(this.x9Q,
this.XCI.XKj(),
Xzo,
Xzs);}
this.xtN=
(this.xtN>0?this.xtN-1:0);
if(xa7.type){var xbK=xa7.type+' in external Javascript Macro:\r\n'+xa7;
this.XCI.Xpr('@C '+xbK,'exc');
return false;}
return(xa7.type?null:xa7.xd2);}
xk0.prototype.XF1=function(){
return(this.xtN>0);}
XAG=/^(dgo|evt_|cfg_|CFG_|[CTWV][LAR][A-Z][A-Z]+_)/;
xk0.prototype.toString=function(){
var xbK='ctx={';
var XWk='';
var XCM,xoQ,type;
for(XCM in this){
if(XCM.search(XAG)<0){
xoQ=this[XCM];
type=typeof(xoQ);
if(type=='function'){
XWk+=','+XCM;}else{
xbK+=('\r\n'+type+' '+XCM+'="'+xoQ+'"');}}}
return xbK+'\r\nfunctions:'+XWk.substr(1)+'}';}
function xk1(XDw,
Xkb,ctx_control,ctx_frame,ctx_window,ctx_element,ctx_par)
{
var ctx=ctx_control;
if(ctx_element){
return eval("with(Xkb){with(ctx_element){"+
XDw+'}}');}
else{
return eval("with(Xkb){"+XDw+'}');}}
function Xzi(x9Q,t_,Xzo,Xzs)
{
return Xzo(x9Q,t_,Xzs);}
function XAJ(XCI,x9Q){
this.XCI=XCI;
this.x9Q=x9Q||this.XCI.XVy();}
XAJ.prototype.XA_=function(){
var xbK='ABORT';
this.XCI.XF3().clearInterval(this.XFg);
this.XFg=null;
this.XCI.Xpr('@S '+xbK);
return this.XC0.exec(xbK,-1);}
XAJ.prototype.xb0=function(XCZ,XCY){
this.XC0=new XAZ(XCZ,XCY,XAU);
var Xjj=this;
var X1K=function(){
Xjj.XGr(this);}
this.XFg=this.XCI.XF3().setInterval(X1K,250);
this.XCI.Xpr('@S read():install loop-id:'+this.XFg);
return false;}
XAJ.prototype.XCI=null;XAJ.prototype.XC0=null;XAJ.prototype.XFg=null;
XAJ.prototype.x9Q=null;
XAJ.prototype.Xl7=false;
XAJ.prototype.XGr=function(){
++XrA;
var xsE=XSS(this.x9Q);
if(xsE){
this.XCI.Xpr('@S no Access:'+xsE);
return false;}
this.XCI.Xpr('@S loop_():Watching frame "'+
this.x9Q.name+'"='+this.x9Q.location);
var elements=this.x9Q.document.getElementsByName(
this.XCI.XRN().XG4);
if(elements.length<=0){
var xbK='no input named "'+this.XCI.XRN().XG4+
'" found;clear loop-id:'+this.XFg;
this.XCI.XF3().clearInterval(this.XFg);
this.XFg=null;
this.XCI.Xpr('@S '+xbK);
this.XC0.exec(xbK,null);
return true;}
var s;
var xoQ=-1;
for(var i=0;i<elements.length&&xoQ<0;++i){
s=X7f(elements[i]);
s&&(xoQ=s-0);}
if(xoQ>=0){
var xbK='input named "'+this.XCI.XRN().XG4+
'":'+xoQ+';clear loop-id:'+this.XFg;
this.XCI.XF3().clearInterval(this.XFg);
this.XFg=null;
this.XCI.Xpr('@S '+xbK);
this.XC0.exec(xbK,xoQ);}
return true;}
function XIU(XCI){
this.x6K=true;
this.XCI=XCI;
this.XFc=[];}
XIU.prototype.x6K=false;
XIU.prototype.XEV=function(xAV,xfK,XCZ,XCY){
var XFi=(xAV?this.XMS(xfK):0);
if(XFi<0){
return false;}
this.XFc.XDn(XFi,{
name:xfK,
xAX:new XAZ(XCZ,XCY)});
return true;}
XIU.prototype.xBK=function(xfK,XCZ,XCY){
this.XFc.xag({
name:xfK,
xAX:new XAZ(XCZ,XCY)});
return true;}
XIU.prototype.XMM=function(xfK){
var XFi=this.XMS(xfK);
if(XFi<0){
return false;}
this.XFc.remove(XFi);
return true;}
XIU.prototype.XCI=null;XIU.prototype.XFc=null;XIU.prototype.Xce=0;
XIU.prototype.XMS=function(xfK){
for(var i=0;i<this.XFc.length;++i){
if(this.XFc[i].name==xfK){
return i;}}
return-1;}
XIU.prototype.x5e=function(){
var X9t=this.XCI.Xlc();
X9t&&X9t.add(new XbY(
'AgentLoop',this,this.xAj,null,null,true));
return true;}
XIU.prototype.xAj=function(){
if(this.Xce){
this.XCI.Xpr('AL re-entrant call no. '+
this.Xce,'warning');
if(this.Xce++<=10){
return true;}}
this.Xce=1;
var xa7=true;
var name;
for(var i=0;
i<this.XFc.length&&xa7;
++i)
{
name=this.XFc[i].name;
xa7=this.XFc[i].xAX.exec();
if(!xa7){}}
this.Xce=0;
return(xa7?true:false);}
var dgoAgent=null;
var dgo7=null;
var XAB=1;var XA0=2;var XAD=3;var XAA=4;var XBR=5;var XAC=6;var XOc=9;
var xCa=new Array();
function XA1(x9Q,XQE,XIF,XIB,onlineLogger_,X14,xCJ){
dgoAgent=this;
dgo7=this;
this.x9Q=x9Q;
this.Xi1=self;
this.XQE=XQE;
this.XIB=XIB;
this.onlineLogger_=onlineLogger_;
this.xCJ=xCJ||this.xC7;
this.X14=X14;
this.Xvz=XQE.Xvz;
XIF.cfg_fromMhtml=this.XQE.Xxb;
this.XE6=new xk0(this,XIF,x9Q);
if(!this.XE6.x6K){
this.error=this.XE6.error+
'|'+"AgentContext"+' ctor failed';
return;}
var href=new String(x9Q.location.href);
if(href.substr(0,12)=='wyciwyg://0/'){href=href.substr(12);}
this.XK0=new XAW(this);
if(!this.XK0.x6K){
this.error=this.XK0.error+'|'+"AgentLogger"+' ctor failed';
return;}
if(this.XK0.error){
this.error+=this.XK0.error+'\r\n';}
this.XK0.load();
this.xbw=new XAH;this.Xjm=new Xa2(this.x9Q);
this.xa5=new XAI(this);
if(!this.xa5.x6K){
this.error=this.xa5.error+'|'+"AgentQueue"+' ctor failed';
return;}
if(typeof(Xj7)=='function'||typeof(Xj7)=='object'){
if(!this.Xpe()){
return;}
this.x6K=true;
return;}
else{
try{
this.XfE=XQE.xqP
?eval(XQE.xqP)
:x9Q.parent.frames[XQE.Xan];
this.Xvn=XQE.xqP
?XQE.xqP
:XQE.Xan;
XQI(x9Q).focus();
this.XfE&&this.XfE.focus();}
catch(xa8){
this.Xpr('@ eval tourframe+set focus:'+
(new x6C(xa8)),'exc');}}
this.x6K=true;
return;}
XA1.prototype.xCd=function(){
if(XRl){
try{
var Xwg=new ActiveXObject('MSXML2.XMLHTTP.3.0');}
catch(xa8){
try{
Xwg=new ActiveXObject('Msxml2.XMLHTTP');}
catch(xa8){
try{
Xwg=new ActiveXObject('Microsoft.XMLHTTP');}
catch(xa8){
Xwg=null;}}}
if(Xwg){
if(Xwg.overrideMimeType){
Xwg.overrideMimeType('text/plain');}}}
else{var Xwg=new XMLHttpRequest();
if(Xwg.overrideMimeType){
Xwg.overrideMimeType('text/plain');}}
if(Xwg){
return Xwg;}
else{
this.xCJ=this.xC8;
return null;}}
XA1.prototype.xCj=function(xCc){
var xKK='';
switch(xCc){
case 'demo':xKK='Demo';break;
case 'test':xKK='Test';break;
case 'praxis':xKK='Guide';break;
case 'uebung':xKK='Simulation';break;
default:xKK=xCc;break;}
return xKK;}
XA1.prototype.xC8=function(xCD){
return true;}
XA1.prototype.xCf=function(){
var XIG=this.XRN().Xyz;
var xay=this.XRN().XjP;
if(xCa['srvleturl']==''){
return false;}
var xar='?Command=GETSID&username='+XIG+'&password='+xay;
var xCm=xCa['srvleturl']+xar;
var xCg=this.xCd();
var xCn=new Array;
try{
xCg.open('GET',xCm,false);
xCg.send(null);
xCn=xCg.responseText;
xCg=null;}
catch(xa8){
if(this.XQE.xuQ>=1){
this.Xpr('Error sending track xmlhttprequest','error',3);}
return false;}
if(xCn.search(/Session_id=/)!=-1){
xCa['Session_id']=xCn.slice(11,xCn.search(/\n/)-1);
return true;}
else{
if(this.XQE.xuQ>=1){
this.Xpr('Error getting sid. Either username or password wrong.','error',3);}
return false;}}
XA1.prototype.xCh=function(){
xCa['initialized']=false;//declares,if the basic X6o informations are xUk
xCa['lb']='LINEBRK';
xCa['srvleturl']=this.XQE.XzA;
if(xCa['srvleturl']==''){
xCa['error']=true;
xCa['errortext']+='No logurl(url to the servlet,eg "http:'+
'//localhost:8081/LearningManager/servlet/xhlpsrv")available.\r\n';}
xCa['Session_id']=this.XRN().Xvr;
if(xCa['Session_id']==''||
xCa['Session_id']=='undefined')
{
if(this.XQE.Xyz!=''&&this.XQE.XjP!=''){
if(!this.xCf()){
xCa['error']=true;
xCa['errortext']+='Could not retrieve Session_id.\r\n';}}
else{
xCa['error']=true;
xCa['errortext']+='No Session_id available.\r\n';}}
xCa['Command']='PutXHLPData';
xCa['basics']=xCa['srvleturl']+'?'+'Session_id='+xCa['Session_id']+
'&Command='+xCa['Command']+'&AICC_Data=';
var xDD=new Array();
var xDI=this.xDG('trainer:../../../CourseDescriptionFile.txt');
if(xDI){
xDD=xDI.split(',');}
xDD[0]=xDD[0]||'';
while(xDD[0].replace('"','')!=xDD[0]){
xDD[0]=xDD[0].replace('"','');}
xCa['CourseTitleFromFile']=xDD[0];
if(xCa['error']){
this.xCJ=this.xC8;
if(this.XQE.xuQ>=1){
this.Xpr(xCa['errortext'],'error',3);}
return false;}
else{
xCa['initialized']=true;
return true;}}
XA1.prototype.xDG=function(url){
var xMj=new Url(url);
var xCg=this.xCd();
try{
xCg.open('GET',xMj.toString(),false);
xCg.send(null);
if(xCg.status==200){
return xCg.responseText;}
else{
if(this.XQE.xuQ>=1){
this.Xpr('Error requesting file content. HTTP failure code:'+xCg.status+'.','error',3);
return false;}}}
catch(xa8){
if(this.XQE.xuQ>=1){
this.Xpr('Error requesting file content.','error',3);
return false;}}}
XA1.prototype.xDP=function(xDL){
if(!xCa['modFileContent']){
xCa['modFileContent']=this.xDG('trainer:../../../Module.txt');}
var xDR=new Array();
if(xCa['modFileContent']){
xDR=xCa['modFileContent'].split('\r\n');}
var xDM=' ';
for(var n=0;n<xDR.length;n++){
var xDQ=new Array();
try{
xDQ=xDR[n].split(',');
while(xDQ[1].replace('"','')!=xDQ[1]){
xDQ[1]=xDQ[1].replace('"','');}
if(xDQ[1]==xDL){
xDQ[0]=xDQ[0]||'';
while(xDQ[0].replace('"','')!=xDQ[0]){
xDQ[0]=xDQ[0].replace('"','');}
xDM=xDQ[0];}}
catch(xa8){}}
return(xDM);}
XA1.prototype.xC7=function(xCD){
if(this.XQE.XzA==''){
this.xCJ=this.xC8;
return false;}
var arguments=new Array();
for(var n=0;n<xCD.length;n++){
arguments.push(xCD[n]);}
if(!xCa['initialized']){
this.xCh();}
var xCq=new Array();
var X2b={};
if(this.X14){
X2b=this.X14.X5G();}
else{
X2b['pass']=0;
X2b['current']=0;
X2b['max']=1;}
if(! this.xbw){
return(false);}
xCq['Course']=xCa['CourseTitleFromFile'];
xCq['Module']=this.xDP(this.xbw.Xin('title')+'/'+this.XQE.xKK);
xCq['Lesson']=this.xbw.Xin('title')+'/'+this.xCj(this.XQE.xKK);
xCq['LessonType']=this.xCj(this.XQE.xKK);
xCq['PageDesc']=this.xbw.Xti(this.xbt_);
xCq['PageName']=this.xbw.Xti(this.xbt_);
xCq['Page']=(this.xbt_+1)+'';
//xCq['MaxPage']=this.xbw.Xcu(true);
xCq['MaxPage']=X2b['max'];
var xDH=0;
var pass=X2b['pass']||0;
var max=X2b['max']||1;
try{
xDH=pass*100/max;}
catch(xa8){}
xCq['MinPassCount']=parseInt(xDH);
xCq['TotalCount']=X2b['max'];
xCq['CorrectResponseCount']=X2b['current'];
xCq['noReport']=0;
if(this.XQE.xKK=='lib'){
xCq['noReport']=1;}
var xCo=arguments.shift();
switch(xCo){
case 1005:xCq['Action']='Forward';xCq['Comments']=arguments.join(',');
break;
case 1016:xCq['Action']='Back';xCq['Comments']=arguments.join(',');
break;
case 1006:xCq['Action']='Back';xCq['Comments']=arguments.join(',');
break;
case 1010:xCq['Action']='Start';xCq['Comments']=arguments.join(',');
break;
case 6000:if(xCq['LessonType']=='Guide'||
xCq['LessonType']=='Simulation'||
xCq['LessonType']=='Demo'){
xCq['noReport']=1;}
xCq['Action']='IncorrectAnswer';xCq['Comments']=arguments.join(',');
break;
case 6001:xCq['Action']='Tip';xCq['Comments']=arguments.join(',');
break;
case 6003:if(xCq['LessonType']=='Guide'||
xCq['LessonType']=='Simulation'||
xCq['LessonType']=='Demo'){
xCq['noReport']=1;}
xCq['Action']='CorrectAnswer';xCq['Comments']=arguments.join(',');
break;
case 6006:if(xCq['LessonType']=='Test'){
xCq['noReport']=1;}
if(arguments[0].search('incomplete')!=-1){
xCq['Action']='Abandon';}
else{
xCq['Action']='Finish';}
xCq['Duration']=arguments[1];
xCq['Comments']=arguments.join(',');
xCq['Lesson']=arguments[2]+'/'+xCq['LessonType'];
xCq['Module']=this.xDP(arguments[2]+'/'+this.XQE.xKK);
break;
case 8002:xCq['Action']='GOTO';//mapped
xCq['Comments']=arguments.join(',');
break;
case 6005:if(xCq['LessonType']=='Guide'||
xCq['LessonType']=='Simulation'||
xCq['LessonType']=='Demo'){
xCq['noReport']=1;}
if(arguments[0]=='Lesson status:PASSED'){xCq['Action']='Pass';}
else if(arguments[0]=='Lesson status:FAILED'){xCq['Action']='Fail';}
else{
xCq['noReport']=1;}
xCq['Comments']=arguments.join(',');
xCq['Lesson']=arguments[4]+'/'+xCq['LessonType'];
xCq['Module']=this.xDP(arguments[4]+'/'+this.XQE.xKK);
break;
default:
xCq['noReport']=1;
break;}
var xC6='';
var xC9=new Array();
xC9=xCq.X6C();
for(var n=0;n<xC9.length;n++){
xC6+=xCa['lb']+xC9[n]+xCa['lb']+xCq[xC9[n]];}
var xCb=xCa['basics']+xC6;
if(!xCq['noReport']){
var xCg=this.xCd();
try{
xCg.open('GET',xCb,true);
xCg.send(null);
xCg=null;
return true;}
catch(xa8){
if(this.XQE.xuQ>=1){
this.Xpr('Error sending track xmlhttprequest','error',3);
return false;}}}
else{
return true;}}
XA1.prototype.xCI=function(){
return this.xCJ(arguments);}
XA1.prototype.xCH=function(xCJ){
var XLw=this.xCJ;
this.xCJ=xCJ;
return XLw;}
XA1.prototype.XOe=function(){
if(!this.XfE){
this.error=
'tourframe not set(cfg_tourframe:'+this.XQE.xqP+
';cfg_appframename:'+this.XQE.Xan+')';
return;}
this.XgN=new XKA(this);
this.x8V=new XLY(this);
if(!this.x8V.x6K){
this.error=this.x8V.error+
'|'+'RenderContainer'+' ctor failed';
return;}
this.XIK=new XIU(this);
if(!this.XIK.x6K){
this.error=this.XIK.error+
'|'+'AgentLoopHandler'+' ctor failed';
return;}
this.XIK.xBK('animator',
this.x8V.XU6(),this.x8V.XU6().x3J);
this.XIK.xBK('jsloop',this.x9Q,this.x9Q.XGr);
this.XIK.xBK('clock',this,this.XGr);
this.XfR=new XcP(this);
if(!this.XfR.x6K){
this.error=this.XfR.error+
'|'+'WindowContainer'+' ctor failed';
return;}
this.xEO=new X3d(this);
if(!this.xEO.x6K){
this.error=this.xEO.error+'|'+'Values'+' ctor failed';
return;}
this.X7D=new X3Z(this);
if(!this.X7D.x6K){
this.error=this.X7D.error+'|'+'Triggers'+' ctor failed';
return;}
this.X6w=new X3M(this);
if(!this.X6w.x6K){
this.error=this.X6w.error+'|'+'Transitions'+' ctor failed';
return;}
this.X0O=new XNs();
if(!this.X0O.x6K){
this.error=this.X0O.error+'|'+'Cursor'+' ctor failed';
return;}
if(this.XFI_('ie','5.5')&&
this.XRN().XoM.cfg_useIeDynProps)
{
this.dgo_={self:this};}
Xj3(
this.XRN().XoM.XnV);
this.xa5.XFz(XBA,this,this.XF9);
this.xa5.XFz(XAz,this,this.XF8);
this.xa5.XFz(Xuj,this,this.XvW);
this.xa5.XFz(XAj,
this.X0O,this.X0O.handleEvent);
this.xa5.XFz(XAk,
this.x8V,this.x8V.handleEvent);
this.xa5.XFz(XAl,
this.x8V,this.x8V.handleEvent);
this.xa5.XFz(XAm,
this.x8V,this.x8V.handleEvent);
this.xa5.XFz(XAn,
this.x8V,this.x8V.handleEvent);
this.xa5.XFz(xA9,
this.x8V,this.x8V.handleEvent);
this.xa5.XFz(X2u,
this.x8V,this.x8V.handleEvent);
this.xa5.XFz(XAr,
this.x8V,this.x8V.handleEvent);
this.xa5.XFz(Xzj,
this.x8V,this.x8V.handleEvent);
this.xa5.XFz(XAu,
this.x8V,this.x8V.handleEvent);
this.xa5.XFz(XAv,
this.x8V,this.x8V.X04);
this.xa5.XFz(x2i,
this.x8V,this.x8V.XCr);
this.xa5.XFz(XAx,
this.x8V,this.x8V.handleEvent);
this.xa5.XFz(XAy,
this.x8V,this.x8V.handleEvent);
this.xa5.XFz(XBB,
this.x8V,this.x8V.handleEvent);
this.xa5.XFz(XBC,
this.x8V,this.x8V.XCs);
this.xa5.XFz(XBE,
this.x8V,this.x8V.handleEvent);
this.xa5.XFz(X2w,
this.x8V,this.x8V.handleEvent);
this.xa5.XFz(X2s,
this.xEO,this.xEO.X5V);
this.xa5.XFz(X2v,
this.xEO,this.xEO.X5X);
this.xa5.XFz(XYQ,
this.X6w,this.X6w.X5S);
this.xa5.XFz(XYT,
this.X6w,this.X6w.X5T);
this.xa5.XFz(X2t,
this.X6w,this.X6w.X5W);
this.xa5.XFz(X2x,
this.X6w,this.X6w.X5Y);
this.xa5.XFz(X8i,
this.X6w,this.X6w.X8r);
this.xa5.XFz(X2r,
this.X7D,this.X7D.X5U);
this.xa5.XFz(XAt,
this.XfR,this.XfR.Xdb);
this.xa5.XFz(XBF,
this.XfR,this.XfR.Xdf);
this.xa5.XFz(XBG,
this.XfR,this.XfR.Xdg);
this.xa5.XFz(XBH,
this.XfR,this.XfR.Xdh);
if(this.XQE.xAJ){
this.XRj=new XOp(this);
if(!this.XRj.x6K){
this.error=this.XRj.error+'|'+'Library'+' ctor failed';
return;}}
this.x6K=true;
this.XS2();}
XA1.prototype.x6K=false;
XA1.prototype.error='';
XA1.prototype.x9Q=null;XA1.prototype.XJ3=null;XA1.prototype.XF4=null;XA1.prototype.XgN=null;
XA1.prototype.dgo_=null;
XA1.prototype.XlH=null;XA1.prototype.XfE=null;XA1.prototype.Xvn=null;XA1.prototype.XQE=null;XA1.prototype.XE6=null;XA1.prototype.x8V=null;XA1.prototype.XRj=null;XA1.prototype.XIK=null;XA1.prototype.X14=null;XA1.prototype.XHY=XAB;
XA1.prototype.XKw=null;
XA1.prototype.Xjm=null;XA1.prototype.XfR=null;XA1.prototype.XG2=null;XA1.prototype.xbw=null;XA1.prototype.xbt_=-1;XA1.prototype.Xoe=-1;XA1.prototype.XkH=true;XA1.prototype.XSf=null;XA1.prototype.xa5=null;XA1.prototype.XHw=null;XA1.prototype.XIB=null;XA1.prototype.X0O=null;XA1.prototype.XGb=-100000;XA1.prototype.XkB=null;XA1.prototype.XJ6=-1;XA1.prototype.XN2=false;XA1.prototype.XkO=(new Date()).valueOf();
XA1.prototype.XkT=null;XA1.prototype.XKu=null;
XA1.prototype.XKt=null;XA1.prototype.XKv=null;XA1.prototype.onlineLogger_=null;
XA1.prototype.XCg=null;
XA1.prototype.XkS=0;
XA1.prototype.XbJ=null;XA1.prototype.XbK=null;
XA1.prototype.XE7=false;
XA1.prototype.Xpe=function(){
var Xoj=this.XQE.Xok;
var XVO=this.XQE.window||{};
this.XlH=new Xj7(this.x9Q,XVO.cfg_orientation,
XVO.cfg_width,XVO.cfg_height,XVO.cfg_left,XVO.cfg_top,
null,Xoj,this,this.xCB);
if(!this.XlH.x6K){
this.error=this.XlH.error+'|'+'Popup'+' ctor failed';}
return this.XlH.x6K;}
XA1.prototype.xCB=function(){
if(!this.XlH.x6K){
this.error=this.XlH.error+'|'+'Popup'+' ctor failed';
this.x6K=false;}
this.XlH.XlK(this.XQE.title||XQK('TOK_TRAINER'));
this.XlH.XlJ(this,this.Xjn);
this.XfE=this.XlH.Xju();
return this.XOe();}
XA1.prototype.Xpf=function(){
if(this.XlH){
if(this.XlH.x6K){
this.XlH.XlK(this.XQE.title||XQK('TOK_TRAINER'));
this.XlH.XlJ(this,this.Xjn);
this.XfE=this.XlH.Xju();}
else{
this.error=this.XlH.error+'|'+'Popup'+' ctor failed';}}
return true;}
XA1.prototype.XF3=function(){
return this.x9Q;}
XA1.prototype.XVx=function(){
return this.x9Q.parent;}
XA1.prototype.XhX=function(){
return this.Xi1;}
XA1.prototype.XVy=function(){
return this.XfE;}
XA1.prototype.XvT=function(){
return this.Xvn;}
XA1.prototype.Xjt=function(){
return this.XlH;}
XA1.prototype.X1O=function(xVG){
try{
var Xx5=xVG.top.XwK;
if(!Xx5){
Xx5=0;}}
catch(e){
Xx5=0;}
var X2A=XQI(xVG);
if(Xx5==0){
var X2C=this.XVy();
var Xhc=XQI(X2C);}
else{var XZC=xVG;
var X2C=null;
while(XZC&&
XZC.parent&&
XZC!=XQI(XZC.parent)){
if(XZC.frames[this.XvT()]){
X2C=XZC.frames[this.XvT()];
break;}
XZC=XZC.parent;}
var Xhc=X2C?XQI(X2C):X2C;}
return(X2A==Xhc||Xhc==X2A
?X2C:X2A);}
XA1.prototype.XJ1=function(){
var XnU=this.Xfn().Xfx();
return XnU?XnU.Xfo():null;}
XA1.prototype.Xlc=function(){
return this.Xjm;}
XA1.prototype.XRN=function(){
return this.XQE;}
XA1.prototype.Xlf=function(){
return this.XE6;}
XA1.prototype.X8p=function(X9b){
var XFi;
if(X9b&&this.xbw.X4p()>0){
XFi=this.xbw.X9c();}
else{
XFi=this.xbt_;}
if(XFi<0||XFi>=this.xbw.Xcu())
{
return-1;}
return XFi;}
XA1.prototype.X4r=function(X9b){
var XFi;
if(X9b&&this.xbw.X4p()>0){
XFi=this.xbw.X9c();}
else{
XFi=this.xbt_;}
if(XFi<0||XFi>=this.xbw.Xcu()){
return '';}
return this.xbw.Xti(XFi);}
XA1.prototype.X0X=function(){
return this.X0O;}
XA1.prototype.Xn5=function(){
return this.dgo_;}
XA1.prototype.XvR=function(xVG){
if(xVG){
var X2A=xVG;
var XzN=xVG;
while(X2A){
if(!Xbp(X2A)){
if(X2A.document&&X2A.document.body){
if((typeof(X2A.document.body.name)!='undefined'&&
X2A.document.body.name=='dgo_body')||
(typeof(X2A.document.body.id)!='undefined'&&
X2A.document.body.id=='dgo_body'))
{
return X2A;}
if(typeof(X2A.document.body.tagName)!='undefined'&&
X2A.document.body.tagName=='BODY')
{
XzN=X2A;}}}
if(X2A==X2A.parent||
X2A==X2A.top){
break;}
if(X2A==this.XfE&&
!X2A.parent.trainer_program_frame)
{
break;}
X2A=X2A.parent;}
return XzN;}
else{
if(this.XfE){return this.XvR(this.XfE);}
else{
return xVG;}}}
XA1.prototype.XRR=function(){
return this.XRj;}
XA1.prototype.setLastLibrarysize=function(XJ6){
this.XJ6=XJ6;}
XA1.prototype.X1N=function(){
return this.X14;}
XA1.prototype.XAT=function(){
return this.XIK;}
XA1.prototype.XXe=function(){
return this.xa5;}
XA1.prototype.XFJ=function(){
return this.xbw;}
XA1.prototype.x6b=function(){
return this.x8V;}
XA1.prototype.XKg=function(){
return this.XkO;}
XA1.prototype.XFV=function(){
return this.XHY;}
XA1.prototype.XKi=function(){
return this.XkS;}
XA1.prototype.XKj=function(){
return this.XkT;}
XA1.prototype.X5J=function(){
return this.X6w;}
XA1.prototype.X5L=function(){
return this.X7D;}
XA1.prototype.Xu=function(){
return this.XIB;}
XA1.prototype.X5P=function(){
return this.xEO;}
XA1.prototype.Xd6=function(){
return this.XfR;}
XA1.prototype.XFW=function(XHY){
var x1N=(typeof(XHY)=='number'?XHY:this.XHY);
var text;
switch(x1N){
case XAB:text='init';break;
case XA0:text='run';break;
case XAD:text='load';break;
case XAA:text='hold';break;
case XBR:text='pause';break;
case XAC:text='jump';break;
case XOc:text='finished';break;
default:text='unknown('+x1N+')';break;}
return text;}
XA1.prototype.XFE=function(){
var XGv=this.XG2;
return(XGv?XGv.XFV():XBO);}
XA1.prototype.XKf=function(){
return this.XkH;}
XA1.prototype.X3k=function(X6L){
var xlK=X6L||this.XHY;
this.Xfn().xTN(
new XAF(this.XKu,xlK,this.XHY,
this.X6w.X6A()
?XEG:0));}
XA1.prototype.Xfn=function(){
return this.XgN;}
XA1.prototype.XPZ=function(XQE){
this.XQE=XQE;}
XA1.prototype.XkZ=function(){
this.XkH=false;}
XA1.prototype.XHM=function(){
if(this.onlineLogger_){
this.Xpr('Display log','info',2);
this.onlineLogger_.show();}
else{
var xbK=this.XRN().Xv;
alert(xbK);}}
XA1.prototype.XH1_=function(){
if(this.onlineLogger_){
this.Xpr('Stop logging','info',1);
this.onlineLogger_.close();
this.onlineLogger_=null;}}
XA1.prototype.Xl=function(
XEt,XEB,xfK,XIH,Xk0,Xk1)
{
var value=(XEB?parseInt(XIH)-this.XKg():XIH);
if(this.onlineLogger_){
if(xfK=='xml'&&value){
this.onlineLogger_.Xl((XEt?'--':'==')+value,
'trace',3);}
else{
this.onlineLogger_.Xl(
(XEt?'--':'==')+xfK+'="'+value+
(XEB?'ms"':'"'),
'trace',3);}}
this.XK0.XEu(XEt,xfK,value,Xk0,Xk1);}
XA1.prototype.xbt=function(XGE,xGQ,xat){
if(this.XQE&&(Math.abs(this.XRN().xuQ)==0)){
return true;}
if(this.onlineLogger_){
if(this.XE7){
return this.onlineLogger_.Xl(XGE,true);}
return this.onlineLogger_.Xl(XGE,
xGQ||'default',xat||3);}
return false;}
XA1.prototype.xbs=function(XGE,xGQ,xat){
var xd2=this.xbt(XGE,xGQ,xat);
this.XE7=true;
return xd2;}
XA1.prototype.Xpr=function(XGE,xGQ,xat){
var xd2=this.xbt(XGE,xGQ,xat);
this.XE7=false;
return xd2;}
var XAV=true;
function XAU(XGE,xGQ,xat){
if(dgoAgent){
dgoAgent.Xpr(XGE,xGQ,xat);}
else{
if(XAV){
XAV=false;
alert('Agent_println(dgoAgent null):'+XGE);}}}
XA1.prototype.XFI_=function(xGQ,XIJ){
if(xGQ=='nc'&&XIJ>'6'&&XIJ<'8'){
xGQ='moz';
if(XIJ>='7.2'){
XIJ='1.7';}else if(XIJ>='7.1'){
XIJ='1.4';}else{
XIJ='1.0';}}
if(xGQ!=this.XQE.XIO)
return false;
return((XIJ+'')<=this.XQE.xyQ);}
XA1.prototype.XKx=function(){
if(!this.XHw){
this.Xpr('@@ loadUI');
XI7.load('../agent_ui.js','UIloaded_',this);}
return true;}
XA1.prototype.XkY=function(){
if(this.XHw){
this.XHw.xuE();
this.XHw=null;}
return true;}
XA1.prototype.Xk2=function(XDv){
this.Xpr('@@ UI loaded'+
(XDv?','+XDv+' errors':''));
if(XDv){
return false;}
this.XHw=new XAL(this);
return true;}
XA1.prototype.xMF=function(){
this.XHw=null;
return true;}
XA1.prototype.XOZ=function(){
this.XN2=true;
return true;}
XA1.prototype.XN5=function(){
return this.XN2;}
XA1.prototype.xwF=function(Xcp,XGE){
this.XOZ();
this.xbw.X9L();
var xSL='Code='+Xcp+':'+XGE;
this.Xl(true,false,'error',xSL);
this.XK0.send(2002);this.xCI(2002,xSL);
this.Xpr('@'+
(this.XG2?this.XG2.XFM():'boot')+
' ABORT '+Xcp+'('+XGE+')','exc',2);
var url=this.XIB.xMD(
'error',this.XQE,this.XE6.Xls());
var search=url.XFP();
url.XC8('');url.XWg('code',Xcp);
url.XWg('context',XGE);
url.XCK(search,true);
return this.x8F('error',url.toString(),'incomplete');}
XA1.prototype.end=function(XEI){
this.Xpr(XEI);
this.Xl(false,false,'stream',3,109);
this.XOZ();
xNE.XRk?
this.XTK('tour-end'):
this.x8F('tour-end',null,'completed');
return true;}
XA1.prototype.Xg7=function(){
var XML=this.XlH.X7q();
var x8Q=XQI(this.x9Q);
try{
x8Q.moveTo(XML.left,XML.top);
x8Q.resizeTo(XML.width,XML.height);}
catch(xa8){
this.Xpr('@ Window move&resize to '+XML+':'+
(new x6C(xa8)),'exc');}}
XA1.prototype.Xjn=function(){
this.Xpr('CLOSE by popup','user',2);
this.Xg7();
this.XlH=null;
this.XOZ();
xNE.XRk?
this.XTK('popup-close'):
this.x8F('popup-close');
return true;}
XA1.prototype.XTK=function(XEI){
this.Xpr('@ TOUR FINISH---------------------------------------');
var X2b=this.X14.X5G();
this.Xl(false,false,'score',X2b.current,X2b.max,X2b.pass);
if(this.XQE.xuQ>=4){
alert('tourFini('+XEI+')');}
this.Xjm.x8A();
if(this.x8V){
this.x8V.x8A(true);
this.x8V.XU6().x8A(
true);}
var XQB={};
XTd(this.XQE,XQB);
this.xTN(XAB);
return this.XTL(XEI,null,XQB);}
XA1.prototype.XTL=function(XEI,xMj,XQC){
this.Xpr('Finish request from '+XEI+
(xMj?',url="'+xMj+'"':''),'trace',2);
var XQB=(XQC||this.XQE);
var Xan=XQB.Xan;
var XRk=XQB.XRk;
this.Xl(false,false,'applet',
XRk?5012:5013);
this.XK0.send(5012);
if(this.XHw){
this.XkY();}
var XQq=(typeof(xMj)!='undefined'&&xMj);
if(!XQq){
xMj=this.XIB.xMD('stop',XQB,
this.XE6.Xls(),XRk,XRk).toString();
XQq=false;}
if(this.XN5()){
var xbK='stoppage:"'+xMj+
'",lf:'+XRk+',an:'+Xan;
if(xMj||XQq){
if(XRk){
var x8Q=(!XQq&&XRk?
this.x9Q.parent.frames[Xan]:
this.x9Q.parent);
this.Xpr('@ '+xbK+';win:'+x8Q.name+
':"'+x8Q.location+'"');
this.xCI(5012,xMj);
var frameElement=XPB(x8Q);
if(XRl&&
this.XQE.X6s!=''&&
frameElement)
{
frameElement.style.filter=this.XQE.X6s;
frameElement.filters[0].Apply();}
x8Q.location.replace(xMj);
if(XRl&&
this.XQE.X6s!=''&&
frameElement&&
frameElement.filters[0])
{
frameElement.filters[0].Play();}}
else{
this.Xpr('@ '+xbK+' [close]');
this.xCI(5012,'@ '+xbK+' [close]');
XQB.xAJ?xcI(xMj):xOI(xMj);}}
else{
this.xCI(5012,'@ '+xbK+' [url empty]');
this.Xpr('@ '+xbK+' [url empty]');}}
else{
this.xCI(5012,'@ no stoppage due to navigation or close');
this.Xpr('@ no stoppage due to navigation or close');}
return true;}
XA1.prototype.x8F=function(XEI,xMj,XbQ){
if(this.XHY==XOc){
if(this.XQE.xuQ>=3){
alert('fini('+XEI+','+xMj+')[yet finished]');}
return true;}
if(this.XQE.xuQ>=4){
alert('fini('+XEI+','+(xMj||'')+','+
(XbQ||'')+')');}
this.Xpr('Finalization','end',1);
this.XbJ=XEI;
this.XbK=xMj;
if(this.Xjm){
this.Xjm.x8F();
this.Xjm=null;}
if(this.x8V){
this.x8V.x8A(true);
this.x8V.XU6().x8A(
true);}
if(this.XlH){
this.Xg7();
this.XlH.close();
this.XlH=null;}
var xCp='';
if(this.xbw.Xin('title')){
xCp=this.xbw.Xin('title');}
if(this.XFV()!=XAB){this.xTN(XAB);}
if(this.X14){
this.Xfn().XiD('',11);
var X2b=this.X14.X5G();
this.Xl(false,false,'score',X2b.current,X2b.max,X2b.pass);
this.xCI(6004,'Score:',X2b.current,X2b.max,X2b.pass);
if(X2b.current>=X2b.pass){
this.xCI(6005,'Lesson status:PASSED',X2b.current,X2b.max,X2b.pass,xCp);}
else{
this.xCI(6005,'Lesson status:FAILED',X2b.current,X2b.max,X2b.pass,xCp);}
this.xCI(6006,'Completion status:'+(XbQ||'incomplete'),
(new Date).valueOf()-this.XKg(),xCp);
var xa7=this.X14.x8F(XbQ||'incomplete',
(new Date).valueOf()-this.XKg(),this,this.XbG);
this.X14=null;
if(xa7){this.Xfn().XiD(XQK('TOK_LMS'),1);
return true;}}
return this.XbG();}
XA1.prototype.XbG=function(X4U){
var xbK='fini2_('+this.XbJ+','+(this.XbK||'')+')';
this.Xfn().XiD('',1);
if(this.XQE.xuQ>=1&&X4U){
alert('LMS finalization error:\r\n'+X4U);}
if(!XRl&&this.XQE.xuQ>=3){
this.Xpr('@(!IE)'+xbK);
alert(xbK);}
this.XTL(this.XbJ,this.XbK);
this.Xpr('Final shutdown','trace',2);
if(this.XG2){
this.XG2.x8F();
this.XG2=null;}
if(this.x8V){
this.x8V.x8F();
this.x8V=null;}
if(this.XfR){
this.XfR.x8F();
this.XfR=null;}
if(XRl&&this.XQE.xuQ>=3){
this.Xpr('@(IE)'+xbK);
alert(xbK);}
if(this.onlineLogger_){
this.onlineLogger_.xuE();
this.onlineLogger_=null;}
typeof(XOc)=='undefined'||
(this.XHY=XOc);
return true;}
XA1.prototype.xby=function(){
var e=this.xa5.XEJ(0);
if(e.Xeti()!=XBA){
var xbK='first event is not EVENT_SUBSTART:'+e;
this.Xpr('@ pullFirstEvent_():'+xbK,'error');
this.xwF('ex',xbK);
return false;}
return true;}
XA1.prototype.xki=function(XHY){
var xd2=this.XKw;
this.XKw=XHY;
return xd2;}
XA1.prototype.xTN=function(XHY){
if(XHY==this.XHY){var xbK='setState('+XHY+')wrong current state:'+
this.XFW();
if(this.XQE.xuQ>=2){
this.Xpr('@ '+xbK,'error');}
if(this.XQE.xuQ>=3){
alert(xbK);}
return this.XHY;}
if(XHY==XAB){
if(this.XHY!=XA0&&
this.XHY!=XAA&&
this.XHY!=XAC&&
this.XHY!=XAD&&
this.XHY!=XBR)
{
var xbK='setState(INIT)wrong current state:'+
this.XFW();
this.Xpr('@ '+xbK,'error');
alert('Agent::'+xbK);
this.xwF('ex',xbK);
return false;}
this.xbw.X9N();
if(this.XSf){
this.XSf.exec('reset');}
xLJ('program',null);
this.xa5.x1D();
this.XfR.Xem();
this.xbt_=-1;
this.xbw=new XAH;this.XkT=null;
this.XGb=-100000;
if(this.XG2&&this.XG2.XFV()!=XBO){
this.XG2.x7N();}
if(this.XHY==XAD){
this.Xfn().Xg5(this.xbw);}
this.XHY=XAB;
this.Xl(false,false,'applet',5012);}
else if(XHY==XA0){
if(this.XHY==XAB||
this.XHY==XAC)
{
if(!this.XG2){
var xbK='setState(RUN):no media';
this.Xpr('@ '+xbK,'error');
this.xwF('ex',xbK);
return false;}
if(this.XHY==XAB){
var xCk=this.XIB.xCe();
this.xCI(1010,xCk);
this.Xfn().Xg5(this.xbw);
this.X0O.XMV(
this.xbw.Xin('mouse_style'),
this.xbw.Xin('mouse_just'),
this.xbw.Xin('mouse_color'));
this.XfR.Xeu(
this.xbw.Xin('find_element'));}
this.Xfn().Xhf(
new XAK(this.xbw,this.xbt_));
this.xa5.XHG(X95);
if(!this.xby()){
return false;}
if(this.XHY==XAB){
this.Xl(false,false,'applet',5011);}}
else{
if(this.XHY!=XAD&&
this.XHY!=XAA&&
this.XHY!=XBR)
{
var xbK='setState(RUN)wrong current state:'+
this.XFW();
this.Xpr('@ '+xbK,'error');
this.xwF('ex',xbK);
return false;}
if(this.XHY==XAD){
this.XfR.Xem();
this.Xl(false,false,'pause',
(new Date()).valueOf()-this.XKv,111);}
else if(this.XHY==XBR){
this.Xl(false,false,'pause',
(new Date()).valueOf()-this.XKv,108);}
this.Xfn().Xhf(
new XAK(this.xbw,this.xbt_));
this.xa5.XHG(X95);
if(this.XHY==XAA){
this.XG2.XY0(false);}
else{
this.XG2.xd0();}}}
else if(XHY==XAD){
if(this.XHY!=XA0){
var xbK='setState(LOAD)wrong current state:'+
this.XFW();
this.Xpr('@ '+xbK,'error');
this.xwF('ex',xbK);
return false;}
this.XKv=(new Date()).valueOf();
this.XG2.XY0(false);
this.XG2.pause();
this.xa5.XHG(X93);}
else if(XHY==XAA){
if(this.XHY!=XA0&&
this.XHY!=XBR)
{
var xbK='setState(HOLD)wrong current state:'+
this.XFW();
this.Xpr('@ '+xbK,'error');
this.xwF('ex',xbK);
return false;}
this.XKv=(new Date()).valueOf();
this.XG2.XY0(true);
if(this.XHY==XA0){
this.xa5.XHG(X94);}
else{
this.XG2.xd0();}}
else if(XHY==XBR){
if(this.XHY!=XA0&&
this.XHY!=XAA&&
this.XHY!=XAD)
{
var xbK='setState(PAUSE)wrong current state:'+
this.XFW();
this.Xpr('@ '+xbK,'error');
this.xwF('ex',xbK);
return false;}
if(this.XHY==XAD){
this.XfR.Xem();
this.Xl(false,false,'pause',
(new Date()).valueOf()-this.XKv,111);}
this.XKv=(new Date()).valueOf();
this.XG2.XY0(false);
this.XG2.pause();
this.xa5.XHG(X93);}
else if(XHY==XAC){
if(this.XHY!=XAD&&
this.XHY!=XAA&&
this.XHY!=XBR&&
this.XHY!=XA0)
{
var xbK='setState(JUMP)wrong current state:'+
this.XFW();
this.Xpr('@ '+xbK,'error');
this.xwF('ex',xbK);
return false;}
if(this.XHY==XAD){
this.Xl(false,false,'pause',
(new Date()).valueOf()-this.XKv,111);}
else if(this.XHY==XBR){
this.Xl(false,false,'pause',
(new Date()).valueOf()-this.XKv,108);}
else if(this.XHY==XAA){
this.XG2.XY0(false);}
if(this.X6w.X8s()){
if(this.X6w.X6A()){
this.X6w.X69();}
else{
this.X6w.X8k();}}
else{
if(this.X6w.X6A()){
this.X6w.X69();}}
this.x8V.XPA();
this.x8V.X9d();
this.xbw.Xba();
this.XfR.Xem();
this.xa5.x1D();
if(this.XG2.XFV()!=XBO){
this.XG2.x7N();}
this.XGb=-100000;}
else{
var xbK='setState()wrong argument:'+XHY;
this.Xpr('@ '+xbK,'error');
this.xwF('ex',xbK);
return false;}
var XkP=new XAF(this.XG2.XFV(),XHY,
this.XHY,this.X6w.X6A()
?XEG:0);
if(this.XHY!=XBR&&XHY!=XBR&&
this.XHY!=XAC&&XHY!=XAC)
{
this.Xl(false,false,'stream',
XkP.Xns(),XkP.Xtr());}
this.Xfn().xTN(XkP);
this.XKw=this.XHY;
this.XHY=XHY;
this.Xpr('@ STATECHANGE '+this.XFW(this.XKw)+
'==>'+this.XFW()+';media '+this.XG2,'info');
return this.XHY;}
XA1.prototype.XGy=function(){
var XK4=this.XG2.XFV();
if(XK4==XBO){
return true;}
if(this.XKu==XBP&&
XK4==XBS)
{
this.Xl(false,false,'buffer',
(new Date()).valueOf()-this.XKt);}
this.XKu=XK4;
this.XKt=(new Date()).valueOf();
this.X3k();
return true;}
XA1.prototype.Xje=function(){
var XGv=this.XG2;
var event;
if(XGv){
this.XkT=XGv.XFN();
event=this.xa5.XEJ(this.XkT);}
else{
event=new xNh(XAw,false);}
return event;}
XA1.prototype.libraryLoaded=false;
XA1.prototype.XNn=function(){
this.Xpr('Library "'+this.XQE.xAJ+'"','info',2);
var XNk=this.XIB.external(this.XQE.xAJ).toString();
if(!this.XRj){
this.Xpr('@ loadLibrary:library_ not set','error');
return false;}
var xd2=this.XRj.load(XNk,
this.x9Q.parent.frames.trainer_library_frame,null,
this,this.XNo);
if(!xd2){
var xbK=XQK('TOK_COULD_NOT_READ2_EXC',
XQK('TOK_LIB'),XNk,this.XRj.error);
this.Xpr('@ loadLibrary:'+xbK,'error');
this.xwF('ex',xbK);
return false;}
this.libraryLoaded=true;
return true;}
XA1.prototype.reloadLibrary=function(xVG){
this.XNn();
var XRr=new Templater(Templater_OPTIONS_NONE);
if(XRr.cfg_ok){
XRr.Xmj(this.XQE,this.XIB.xNI('').toString());
XRr.cfg_apply(xVG,Templater_OPTIONS_NONE);}
return true;}
XA1.prototype.XNo=function(XRh){
var xbK='libLib_cb_()error:'+XRh.error;
if(XRh.XRP()>0){
XRh.XO5();
this.Xpr(xbK,'error');
this.xwF('ex',XRh.error);
return true;}
XRh.XO5();
var XJ8=XRh.x6U();
if(XJ8){
var Xjj=this;
var X1K=function(){
var XLn=Xjj.XRj.x6U().document.body;
if(XLn){
var size=xaQ(XLn,X8x);
if(size.x==Xjj.XRj.x6U().dgoX_){}
else{
Xjj.XJ6=size.x;}
Xjj.XRj.x6U().dgoX_=-1;}}
xA7(XJ8,XJ8.document.body,'resize',
X1K,xA3);}
if(this.XQE.x3C){
xbK+=',autostart:"'+this.XQE.x3C+'" ';
var xpK=XRh.XUP(this.XQE.x3C);
if(xpK){
xbK+='FOUND';
XRh.XHV(xpK);}
else{
xbK+='NOT FOUND';
alert('datango Library "'+XRh.Xu()+
'":\nProgram in cfg_autostart('+
this.XQE.x3C+')not found');}}
xbK+=',"'+XRh.Xti()+'" from "'+XRh.Xu()+'"';
if(xpK){
if(this.XQE.xuQ>=3){
alert(xbK);}
this.Xpr('@ '+xbK,xpK?'success':'error');}
else{
XRh.XSu(XRh.XZT().xpM);}
return true;}
XA1.prototype.XSw=function(xGQ){
var x4E=this.x9Q.parent.document;
var XRJ=x4E.body;
var XRI=x4E.getElementById("trainer_library_frame");
var XJ8=x4E.getElementById("trainer_library_frame");
if(!XRJ||!XRI||!XJ8){
var xbK='showLibrary():frameset not found:main='+
XRJ+',lib='+XRI+',frame='+XJ8;
this.Xpr('@ '+xbK,'error');
this.xwF('ex',xbK);
return false;}
var type=xGQ-0;
var X73=(this.XFI_('moz','1')&&
(!this.XFI_('moz','1.4')));
if(!X73){
var size;
if(type & 1){
size=(this.XJ6<0
?this.XQE.XUy:this.XJ6);
XAa(XRI,'width',size+'px');
this.XRj&&(this.XRj.x6U().dgoX_=size);
XRI.dgoX_=size;
this.Xfn().XTQ(null);}
else{
XAa(XRI,'width','0px');
this.XRj&&(this.XRj.x6U().dgoX_=0);
XRI.dgoX_='0';}}
readjustSizes();
XOm(XRI,type & 1?'1px solid silver':null);
//XAa(XRJ,'rows',
return true;}
XA1.prototype.Xpt=function(xbv,XCZ,XPt){
this.Xpr(xbv,'tour',2);
this.XK0.send(1010);
if(!this.Xpf()){
this.Xpr('@ '+this.error,'error');
this.xwF('security',this.error);
return false;}
if(this.XQE.xuQ>=2){
this.Xpr('@ playTour('+xbv+')');}
this.XSf=new XAZ(XCZ,XPt);
this.XIB.XHJ(xbv);
this.Xl(false,false,'stream',3,109);this.xbw=new XAH(
this,this.XIB.xaK('',true,true));
++this.XkS;
if(!this.xbw||!this.xbw.x6K){
var xbK='playTour():program ctor error:'+this.xbw.error;
this.Xpr('@ '+xbK,'error',1);
this.XSf.exec(xbK);
return false;}
this.XG2=new XBT(this,this.XIK,this.XIK.x5e);
if(!this.XG2||!this.XG2.x6K){
var xbK='playTour():media ctor error';
this.Xpr('@ '+xbK,'error',1);
this.XSf.exec(xbK);
return false;}
if(this.XQE.xuQ>=2){
this.Xpr('@ playTour;media='+this.XG2+
' ticktime='+this.XG2.XFB());}
return this.xbw.load(this,this.xbf);}
XA1.prototype.xbf=function(){
if(this.XHY==XOc||!this.XG2){
return false;}
if(this.XQE.xuQ>=2){
this.Xpr('@ playTour_cb_();media='+this.XG2+
' ticktime='+this.XG2.XFB());}
var Xo7='';
var Xoh='';
var Xoi='';
var XXh=0;
var XXi=-1;
if(this.X14&&this.X14.X2P()){
Xo7=this.X14.X2P()||'';
XXh=(Xo7-0);
if(typeof(XXh-0)=='number'){
if(XXh==(this.xbw.Xcu(true)-1)){
XXh=0;}}}
else{
if(Xo7=unescape(this.XIB.start().XEZ())){
Xoh=Xo7;
var i=0;
if(Xoh.substr(0,1)=='"'){
Xoh=Xoh.substr(1,
Xoh.indexOf('"',1)-1);
i=Xoh.length+2;}
i=Xo7.indexOf('-',i);
if(i>=0){
Xoh=Xoh.substr(0,i);
Xoi=Xo7.substr(i+1);
if(Xoi.substr(0,1)=='"'){
Xoi=Xoi.substr(1,
Xoi.indexOf('"',1)-1);}}}
else{
Xoh='';}
XXh=(Xoh?
(this.xbw.Xmt(Xoh)>=0?
this.xbw.Xmt(Xoh):
this.xbw.Xz1(Xoh))
:0);
XXi=(Xoi?
(this.xbw.Xmt(Xoi)>=0?
this.xbw.Xmt(Xoi):
this.xbw.Xz1(Xoi))
:-1);}
var xbK='Bookmark(s)"'+Xo7+'"';
if(XXh<0){
xbK+='\n\r1st:"'+Xoh+'"\n\r2nd:"'+Xoi+
'"\n\rnot found. Starting with first sub-program "'+
this.xbw.Xti(0)+'".';
this.Xpr('@ '+xbK,'error');
if(this.XQE.xuQ>=1){
alert(xbK);}
XXh=0;}
else{
this.Xpr('@ '+xbK+':Start@'+XXh+',End@'+XXi);}
if(XXi>=0){
this.xbw.Xof(XXi+1,false);}
if(this.XlH&&this.XlH.TAPI){
this.XlH.TAPI['TourTitle']=this.XFJ().Xin('title');}
if(this.xbw.exec(XXh)){
this.xbt_=XXh;
this.Xoe=XXi;
this.xTN(XA0);this.XE6.Xsl(this.xbw.Xin('start_script'));
this.xbw.XZE();}
else{
xbK='playTour_cb_ exec';
this.Xpr('@ '+xbK,'error');
this.xwF('ex',xbK);
return false;}
return true;}
XA1.prototype.XFG_=function(XFj){
this.xTN(XAC);
if(this.xbw.exec(XFj)){
this.xbt_=XFj;
(XFj>this.Xoe)&&(this.Xoe=-1);
this.xTN(XA0);}
else{
var xbK='jump_():program.exec('+XFj+')';
this.Xpr('@ '+xbK,'error');
this.xwF('ex',xbK);
return false;}
return true;}
XA1.prototype.XC1=function(xa3){
if(this.XQE.xcK===true||this.XQE.xcK>0){
return true;}
var XGU=this.XG2.XFN();
var xa2=xa3;
if(typeof(xa2)=='string'){
switch(xa2){
case '+':
xa2=this.XG2.XFL()+1;
break;
case '-':
xa2=this.XG2.XFL()-1;
break;
default:
return true;
break;}}
return this.xbe(xa2,XGU);}
XA1.prototype.xbe=function(xa3,XGV){
var xQF=this.xbw.XEK(this.xbt_);
var XCP=(xQF?this.XIB.xaK(xQF,
true,true).toString():null);
return this.XG2.XGJ(XCP,xa3,
this.xbw.XEO(this.xbt_),
(this.XQE.xcK===true||this.XQE.xcK>0),
XGV||0,true);}
XA1.prototype.XFX=function(XGD,xNO){
var XDg=this.xbw.XEO();
var XH8=this.xbw.XFY(this.xbt_)+XGD;
if(XDg>0&&!xNO&&!this.Xfn().x5t){
XH8=Math.max(XDg-XH8,0);}
var XHC=Math.floor(XH8/1000);
var x5G=Math.floor(XHC/60);
XHC='00'+(XHC % 60);
return x5G+':'+XHC.substr(XHC.length-2);}
XA1.prototype.XGr=function(){
var XGv=this.XG2;if(!XGv){return true;}
var XGC=XGv.XFN();
this.XkT=XGC;
var Xvh=0;
if(this.XG2.XFU()>0){
Xvh=new Date().valueOf()-this.XG2.XFU()-
this.XG2.XCw;}
if(Math.abs(this.XGb-XGC)>950){
if(this.XG2.XFU()>0&&
this.XG2.XvI==this.X8p(true)&&
(Xvh>=this.xbw.XEO(this.xbt_)+100))
{
this.xa5.xbz(new xNh(XAz,-1));
this.XG2.XvI=-1;}
var XLy=XGC;
var xfk=this.xbw.XEO(this.xbt_);
if(XGC>xfk){
XGC=xfk;}else if(XGC<0){
XGC=0;}
var XG7=this.XFX(XGC);this.Xpr(XG7+' DLY='+XGv.XCw,'time',2);
this.Xfn().XiB(XG7,
this.xbw.Xtm(this.xbt_)+(XGC/1000));
this.XGb=XLy;}
return true;}
XA1.prototype.x7z=function(){
this.XGb=-100000;}
XA1.prototype.XF9=function(xsF){
this.XG2.XvI=-1;
if(this.xbw.X4p()>0){
this.Xpr('@ CALL START');
return XMs;}
this.Xpr('@ SUB START','info');
this.xCI(8000,'SUB START:'+this.xbw.Xti(this.xbt_),
this.xbt_+1);
this.XkT=this.xbw.XFY(this.xbt_);
this.Xl(false,false,'markerhit',this.xbt_+1);
if(this.XlH&&this.XlH.Xoa()==0&&
this.XQE.Xok.cfg_show_startpage&&
this.XQE.x0N)
{
evt_url(-1,'0',this.XIB.xMD('start',this.XQE,
this.XE6.Xls(),true).toString());
evt_loaded(-1);}
this.xbe(null,0);
if(this.X14){
this.X14.X1r(this.xbt_,
(new Date).valueOf()-this.XKg());}
return XMq;}
XA1.prototype.XF8=function(xsF){
if(this.xbw.X4p()>0){
this.xbw.X4J();
this.Xpr('return','call_ret',1);
return XMs;}
if(this.xbt_+1>=this.xbw.Xcu(true)){
this.end('@ SUB END causes finish','info');
this.xCI(8001,'SUB END:'+this.xbw.Xti(this.xbt_),
this.xbt_+1);
return XMs;}
if(this.xbt_==this.Xoe){
this.end('@ SUB END causes finish due to bookmark','info');
this.xCI(8001,'SUB END:'+this.xbw.Xti(this.xbt_),
this.xbt_+1);
return XMs;}
this.Xpr('@ SUB END causes jump to '+(this.xbt_+1),'info');
this.xCI(8001,'SUB END:'+this.xbw.Xti(this.xbt_),
this.xbt_+1);
this.XFG_(this.xbt_+1);
return(XMs | XMu);}
XA1.prototype.XvW=function(xsF){
this.XG2.XvI=this.X8p(true);
return(XMs);}
XA1.prototype.Xoua=function(XDy){
var xbK;
this.Xl(false,false,'user',XDy);
switch(XDy){
case 1001:xbK='PLAY [1001]';
this.xCI(XDy,xbK);
if(this.XHY!=XBR&&
this.XHY!=XAA&&
this.XHY!=XAC&&
this.XHY!=XA0)
{
this.Xpr(xbK+' ignored due to wrong state:'+
this.XHY,'error');
return false;}
this.Xpr(xbK,'user',2);
this.xTN(XA0);
break;
case 1021:this.Xpr('@ UNLOAD');
this.xCI(XDy,'UNLOAD [1021]');
this.x8F('unload');
break;
case 1022:this.Xpr('UNLOAD REQUEST');
this.xCI(XDy,'UNLOAD REQUEST [1022]');
this.XK0.send(1022);
break;
case 1002:this.Xpr('STOP [1002]','user',2);
this.xCI(XDy,'STOP [1002]');
this.XOZ();
xNE.XRk?
this.XTK('stop'):
this.x8F('stop');
return true;
case 1003:this.Xpr('PAUSE [1003](Queue:'+this.xa5+')','user',2);
this.xCI(XDy,'PAUSE [1003](Queue:'+this.xa5+')');
if(this.XHY!=XBR){
this.xTN(XBR);}
break;
case 1005:xbK='NEXT [1005]';
if(this.XHY!=XAD&&
this.XHY!=XAA&&
this.XHY!=XBR&&
this.XHY!=XA0)
{
xbK+=' ignored due to wrong state:'+this.XHY;
this.Xpr(xbK,'error');
this.xCI(XDy,xbK);
return false;}
var X6J=this.xbw.X5A(this.xbt_);
if(X6J<0){
xbK+=' jump beyond last sub ignored'+
'(count:'+this.xbw.Xcu(true)+')';
this.Xpr(xbK,'error');
this.xCI(XDy,xbK);}
else{
xbK+=' jumping to '+X6J;
this.Xpr(xbK,'user',2);
this.xCI(XDy,xbK);
return this.XFG_(X6J);}
break;
case 1006:case 1016:xbK=(XDy==1006?'BACK [1006]':'PREV [1016]');
if(this.XHY!=XAD&&
this.XHY!=XAA&&
this.XHY!=XBR&&
this.XHY!=XA0)
{
xbK+=' ignored due to wrong state:'+this.XHY;
this.Xpr(xbK,'error');
this.xCI(XDy,xbK);
return false;}
var X6J=(this.xbw.X4y(this.xbt_)&&
(XDy==1006&&new Date()).valueOf()-
this.XG2.XFU()>1000
?this.xbt_
:this.xbw.X5F(this.xbt_));
if(X6J<0){
xbK+=' jump before first sub ignored'+
'(count:'+this.xbw.Xcu(true)+')';
this.Xpr(xbK,'error');
this.xCI(XDy,xbK);}
else{
xbK+=' jumping back to '+X6J;
this.Xpr(xbK,'user',2);
this.xCI(XDy,xbK);
return this.XFG_(X6J);}
case 1010:
break;
case 1020:
this.xCI(XDy,'BEFORE UNLOAD [1020]');
this.XK0.send(1020);break;
default:
var xbK='invalid eventId='+XDy;
this.Xpr('@ USER:'+xbK,'error');
this.xCI(XDy,'@ USER:'+xbK);
this.xwF('ex',xbK);
return false;}
return true;}
XA1.prototype.Xouj=function(XFj){
this.Xl(false,false,'user',1007);
this.xbs('@ JUMP idx='+XFj,'user',2);
if(this.XHY!=XAD&&
this.XHY!=XAA&&
this.XHY!=XBR&&
this.XHY!=XA0)
{
this.Xpr(' ignored due to wrong state:'+
this.XFW(),'error');
return false;}
var XFi=parseInt(XFj);
var title=this.xbw.Xti(XFi);
this.Xpr(' title="'+title+'"','user',2);
this.xCI(8002,'JUMP:'+title,XFi+1);
return this.XFG_(XFi);}
if(self.XI7){XI7.XJB(new XIX('../agent.js',
['batch.js',
'../agent_queue.js','../program.js','../value.js',
'../transition.js','../trigger.js','../window_container.js' ]));}

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
