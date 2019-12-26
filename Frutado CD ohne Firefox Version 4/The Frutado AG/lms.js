//
//
//
//
//
function X0h(xVG,XQE,XKF){
if(!xVG)return;
if(!xVG){
alert('Invalid SCORM API found');
return;}
if(typeof(xVG.API_1484_11)=='object'&&xVG.API_1484_11){
if((!xVG.API_1484_11.LMSInitialize&&
!xVG.API_1484_11.Initialize)||
(!xVG.API_1484_11.LMSFinish&&
!xVG.API_1484_11.Terminate&&
!xVG.API_1484_11.Finish))
{
this.error='"API_1484_11" misses functions';
return;}
this.Xkk=xVG.API_1484_11;
this.Xkl=true;}
else if(typeof(xVG.API)=='object'&&xVG.API){
this.Xkk=xVG.API;}
else{
this.error='Neither "API" nor "API_1484_11" is object('+
typeof(xVG.API)+')in frame '+
xVG.xfK+'='+xVG.location;
return;}
this.xVG=xVG;
this.XQE=XQE;
this.XKF=XKF;
var XmN=XQE.X27||{};
XmN.cfg_score_precedence_lms&&(this.X2Y=true);
XmN.cfg_use_original_max&&(this.X2Z=true);
XmN.cfg_only_one_commit&&(this.X2X=true);
XmN.cfg_ignore_errors&&(this.Xm1=true);
XmN.cfg_check_moodle_previous_points&&
(this.XzV=true);
XmN.cfg_decide_completeness&&
(this.X22=XmN.cfg_decide_completeness);
XmN.cfg_score_percentage_100&&(this.XvP=true);
XmN.cfg_suspend_on_user_stop&&(this.Xz0=true);
if(typeof(XmN.cfg_score_precision)=='number'){
this.Xz2=XmN.cfg_score_precision-0;}
XmN.cfg_bookmark_with_score&&(this.xBj=true);
this.x6K=true;}
X0h.prototype={
x6K:false
,Xm1:false
,error:'ok'
,X1r:function(XFj,X1w){
try{
this.X1o(''+XFj,null,X1w);}
catch(xa8){
var xaw=new x6C(xa8);
var xbK='LMS startSub():'+xaw;
this.Xpq(xbK,'exc');
if(this.XQE.XTw){
alert(xbK);}
return false;}
return true;}
,x3H:function(){
this.x6K=this.x4H();
return this.x6K;}
,x8F:function(X0D,X1w,XCZ,XCY){
this.XbI=new XAZ(XCZ,XCY,
this.XQE.xuQ>=2?XAU:null);
var Xz6=0;
if(XCZ.XbJ=='stop'&&this.Xz0){
Xz6=this.Xz5;}
if(this.XHY==this.X0l){
this.Xpq('LMS yet exited','error');
return false;}
try{
this.X1o(null,X0D,X1w,
this.Xm2 | Xz6);
this.X1B();}
catch(xa8){
var xaw=new x6C(xa8);
var xbK='LMS exit():'+xaw;
this.Xpq(xbK,'exc');
if(this.XQE.XTw){
alert(xbK);}
return false;}
return false;}
,X2i:function(X28,X2a,XZg){
if(!(this.X2Y&&this.X2W)){
if(typeof(X28)=='number'){
this.X2W=false;
this.X2d=Math.max(0,X28);
this.X2e=(typeof(X2a)=='number'
?Math.max(0,X2a):0);
this.X24();}}
if(typeof(XZg)=='number'){
if(typeof(this.X2d)=='number'){
this.X2h=Math.min(this.X2d,Math.max(0,XZg));
var Xz3=0;
if(this.XvP){
Xz3=typeof(this.Xz2)=='number'?
this.Xz2:2;
this.X2g=this.X2d<=0?0
:Math.round((100*Math.pow(10,Xz3))*this.X2h/this.X2d)/(1*Math.pow(10,Xz3));}else{
Xz3=typeof(this.Xz2)=='number'?
this.Xz2:3;
this.X2g=this.X2d<=0?0
:Math.round((1*Math.pow(10,Xz3))*this.X2h/this.X2d)/(1*Math.pow(10,Xz3));}}
else{
this.X2h=0;
this.X2g=0;}
this.X23();}
if(typeof(this.X2e)=='number'&&
typeof(this.X2h)=='number')
{
this.X2f=(this.X2h>=this.X2e);}
if(this.XQE.xuQ>=2){
this.Xpq('LMS setScore:'+this);}}
,X5G:function(){
return{
max:this.X2d||0
,pass:this.X2e||0
,current:this.X2h||0
,scaled:this.X2g||0}}
,X2P:function(){
return this.X0s;}
,X2Q:function(){
return this.XFB_;}
,X2R:function(){
return this.X1X;}
,XOz:function(){
return this.X1Y;}
,X2S:function(){
return this.X25;}
,X2T:function(){
return this.X2n;}
,toString:function(){
return 'LMS={'+(this.xVG
?this.xVG.name+'='+this.xVG.location.href:'')+
';score:'+this.X2h+
';max:'+this.X2d+
';pass:'+this.X2e+
';entry:'+this.XFB_+
';bookmark:'+this.X0s+
';Id:'+this.X1X+
';Name:'+this.X25+
';Lang:'+this.X1Y+
';totalT:'+this.X2n+
(this.XJ.X1D?';2004':';1.2')+'}';}
,xVG:null,XQE:null,XKF:null,Xkk:null,Xkl:false 
,X0s:null,XFB_:null,X1X:null,X1Y:null,X25:null,X2n:null,X2W:false
,X2Y:false
,X2Z:false
,XvP:false
,Xz0:false 
,Xz2:''
,X22:0
,XWd:0
,X2V:1
,XWc:2
,X2X:false
,XzV:false
,X2d:null,X2e:null,X2h:null,X2f:null 
,XHY:111,X0m:111
,X0n:222
,X0l:333
,XbI:null 
,X1E:null,X1F:null,X0s:null,X2g:null,X1w:null,XzW:false 
,XJ:null 
,X2D:{
X1C:true
,X1W:'cmi.core.student_id'
,X1Z:'cmi.core.student_name'
,XPH:'cmi.student_preference.language'
,X0v:'cmi.core.lesson_status'
,X0E:'cmi.core.lesson_status'
,X2B:'cmi.core.total_time'
,X1n:'cmi.core.session_time'
,XDt:'cmi.core.entry'
,X0r:'cmi.core.lesson_location'
,X2c:'cmi.core.score.max'
,Xbk:'cmi.student_data.mastery_score'
,X2b:'cmi.core.score.raw'
,X0z:'cmi.core.exit'
,X1x:function(XJQ){
var xd2;
var n=Math.floor(XJQ/10+0.5);
xd2=(''+(n % 100)+'00').substr(0,2);n=Math.floor(n/100);
var m=n % 60;
xd2=(m<10?'0':'')+m+'.'+xd2;n=Math.floor(n/60);
m=n % 60;
xd2=(m<10?'0':'')+m+':'+xd2;n=Math.floor(n/60);
return(n<10?'0':'')+n+':'+xd2;}}
,X2E:{
X1D:true
,X1W:'cmi.learner_id'
,X1Z:'cmi.learner_name'
,XPH:'cmi.learner_preference.language'
,X0v:'cmi.completion_status'
,X0E:'cmi.success_status'
,X2B:'cmi.total_time'
,X1n:'cmi.session_time'
,XDt:'cmi.entry'
,X0r:'cmi.location'
,X2c:'cmi.score.max'
,Xbk:'cmi.scaled_passing_score'
,X2b:'cmi.score.scaled'
,X0z:'cmi.exit'
,X1x:function(XJQ){
var xd2;
var n=Math.floor(XJQ/10+0.5);
xd2=(''+(n % 100)+'00').substr(0,2)+'S';n=Math.floor(n/100);
xd2=(n % 60)+'.'+xd2;n=Math.floor(n/60);
xd2=(n % 60)+'M'+xd2;n=Math.floor(n/60);
return 'PT'+(n>0?n+'H':'')+xd2;}}
,XZn:[
'LMSInitialize'
,'LMSFinish'
,'LMSCommit'
,'LMSSetValue'
,'LMSGetValue'
,'LMSGetLastError'
,'LMSGetErrorString'
,'LMSGetDiagnostic' ]
,Xm3:0
,Xm2:1
,Xz5:100 
,X1o:function(X0s,X0D,X1w,XKQ){
if(this.XHY!=this.X0n){
return false;}
if(this.XzV){if(X0s==0){this.XzW=this.X1P(this.XJ.X2b);
if(this.XzW==''){
this.XzW=false;}}}
else{
this.XzW=false;}
if(this.XzW){if(XKQ&&this.Xm2){
this.XzW=false;}
else{
if(this.X2Z){
if(parseFloat(this.X2h)>=parseFloat(this.XzW)){
this.XzW=false;}}
else{
if(parseFloat(this.X2g)>=parseFloat(this.XzW)){
this.XzW=false;}}}}
var options=XKQ||0;
if(X0D){
var status=X0D.toLowerCase();
switch(this.X22){
case this.XWc:
break;
case this.X2V:
if(status=='completed'){
if(typeof(this.X2f)=='boolean'){
this.X1F=this.X2f;
this.X1p(this.XJ.X0E,
(this.X2f?'passed':'failed'));}}
break;
case this.XWd:
default:
if(typeof(this.X2f)=='boolean'){
this.X1F=this.X2f;
this.X1p(this.XJ.X0E,
(this.X2f?'passed':'failed'));}
break;}
switch(status){
case 'incomplete':
if(this.X1E==null){
this.X1E=false;
if(this.XJ.X1D||this.X1F==null){
this.X1p(this.XJ.X0v,X0D);}}
break;
case 'failed':
this.X1F=false;
this.X1p(this.XJ.X0E,X0D);
break;
case 'completed':
this.X1E=true;
if(this.XJ.X1D||this.X1F==null){
this.X1p(this.XJ.X0v,X0D);}
break;
case 'passed':
this.X1F=true;
this.X1p(this.XJ.X0E,X0D);
break;
default:
break;}}
if(this.X1E){
X0s='';}
if(X0s){
this.X1p(this.XJ.X0r,X0s);
this.X0s=X0s;}
if(X1w){
this.X1p(this.XJ.X1n,this.XJ.X1x(X1w));
this.X1w=X1w;}
this.X23();
if(options & this.Xm2){
if(options & this.Xz5){
this.X1p(this.XJ.X0z,'suspend',
true);}else{
this.X1p(this.XJ.X0z,(this.XJ.X1D?'normal':''),
true);}
if(this.X2X){
this.X0u();}}
if(!this.X2X){
this.X0u();}
return true;}
,X24:function(){
if(typeof(this.X2d)=='number'&&this.X2d>0){
if(this.X2Z){
this.X1p(this.XJ.X2c,this.X2d+'');}
else{
this.X1p(this.XJ.X2c,'1');}}}
,X23:function(){
if(typeof(this.X2d)=='number'&&this.X2d>0&&
typeof(this.X2h)=='number')
{
if(!this.XzW){this.X1p(this.XJ.X2b,this.X2Z
?this.X2h+'':this.X2g+'');}}}
,XzU:function(XGE,xfK,XIH){
if(!this.Xkk)
return '';
var error=this.Xkk.LMSGetLastError();
var X0y=this.Xkk.LMSGetErrorString();
var X0x=this.Xkk.LMSGetDiagnostic();
var X1q=(error=='0'||error==''?'info':'error');
var XGE='LMS '+XGE+':error("'+error+'")='+
(X0y?X0y:'no error')+
(X0x?' ['+X0x+']':'')+',severity:'+X1q;
if(xfK&&XIH){
try{
X0x=this.X1P(xfK);}
catch(xa8){
X0x='Exception:'+
xa8.name+','+
xa8.message+','+
xa8.fileName+','+
xa8.lineNumber+',';}
XGE+='\r\n';
XGE+=xfK+'='+X0x+' [expected:'+XIH+']';}
this.Xpq(XGE,X1q);
if(X1q=='info'){
return XGE;}
this.error=error+'='+X0y;
return XGE;}
,XGp:function(XGE){
if(!this.Xkk)
return '';
var error=this.Xkk.LMSGetLastError();
var X0y=this.Xkk.LMSGetErrorString(error);
var X0x=this.Xkk.LMSGetDiagnostic(error);
var X1q=(error=='0'||error==''?'info':'error');
this.Xpq('LMS '+XGE+':error "'+error+'"='+
X0y+(X0x?' ['+X0x+']':''),X1q);
if(X1q=='info'){
return true;}
this.error=error+'='+X0y;
return false;}
,x4H:function(){
var i,name,X1K,type,XBK;
if(this.Xkl){for(i=0;i<this.XZn.length;++i){
name=this.XZn[i];
X1K=this.Xkk[name];
type=typeof(X1K);
if(type!='object'&&type!='function'){
XBK=(name=='LMSFinish'?'Terminate':name.substr(3));
X1K=this.Xkk[XBK];
type=typeof(X1K);
if(type!='object'&&type!='function'){
this.error='Function '+XBK+' not found';
return false;}
this.Xkk[name]=X1K;}}}
this.XJ=(this.Xkl?this.X2E:this.X2D);
var xa7=this.Xkk.LMSInitialize('');
if(xa7!='true'&&xa7!=true){
return this.XGp('Initialize');}
this.XHY=this.X0n;
try{
this.XFB_=this.X1P(this.XJ.XDt);
this.X1X=this.X1P(this.XJ.X1W);
this.X25=this.X1P(this.XJ.X1Z);
this.X1Y=this.X1P(this.XJ.XPH);
this.X2n=this.X1P(this.XJ.X2B);
var X20=this.X1P(this.XJ.X2c);
var xBs='';
if(this.X1P(this.XJ.X0r)!=''){
if(this.xBj){
xBs=this.X1P(this.XJ.X2b);
xBs=xBs-0;
if(this.XvP){
xBs=xBs/100;}}}
if(typeof(X20)=='string'&&!isNaN(X20-0)){
var Xbk=this.X1P(this.XJ.Xbk);
if(typeof(Xbk)=='string'&&!isNaN(Xbk-0)){
this.X2i(X20-0,Xbk-0,xBs);
this.X2W=true;}
else{
this.X2i(X20-0,0,xBs);}}
if(this.X1P(this.XJ.X0r)!=''){
if(this.XJ.X1D){
if(this.XFB_=='resume'){
this.X0s=this.X1P(this.XJ.X0r);}}else{
this.X0s=this.X1P(this.XJ.X0r);}}}
catch(xa8){
var xaw=new x6C(xa8);
var xbK='LMS init_():'+xaw;
this.error=xaw;
this.Xpq(xbK,'exc');
if(this.XQE.XTw){
alert(xbK);}
return false;}
return true;}
,X1B:function(){
if(this.XHY!=this.X0n){
this.Xpq('LMS attempt to finish without having started',
'warning');
return true;}
this.XHY=this.X0l;
if(!this.Xkk)
return true;
var xa7=this.Xkk.LMSFinish('');
if(xa7!='true'&&xa7!=true){
var xbK='Finish';
this.XGp(xbK);
if(xa7!=undefined){if(!this.Xm1){
throw new X0k(xbK,'lms.js',100);}
else{
this.Xpq('LMS '+xbK+':'+xa7,'warning');}}}
return true;}
,X0u:function(){
var xbK='Commit()';
var xa7=this.Xkk.LMSCommit('');
if(xa7!='true'&&xa7!=true){
this.XGp(xbK);
if(xa7!=undefined){if(!this.Xm1){
throw new X0k(xbK,'lms.js',200);}
else{
this.Xpq('LMS '+xbK+':'+xa7,'warning');}}}
if(this.XQE.xuQ>=2){
this.Xpq('LMS '+xbK+':'+xa7,'info');}
return true;}
,X1p:function(xfK,XIH,Xm1,XzX){
var xbK='Set('+xfK+','+XIH+')';
var xa7=this.Xkk.LMSSetValue(xfK,XIH);
xbK+=('='+xa7);
if(xa7!='true'&&xa7!=true){
if(typeof(xa7)!='undefined'&&
!Xm1&&!this.Xm1)
{
throw new X0k(xbK,'lms.js',300);}
this.Xpq('LMS '+xbK,'warning');
return true;}
if(this.XQE.xuQ>=2){
this.Xpq('LMS '+xbK,'info');}
if(XzX){
xbK=this.XzU(xbK,xfK,XIH);}
return true;}
,X1P:function(xfK){
var xbK='Get('+xfK+')';
var value=this.Xkk.LMSGetValue(xfK);
if(typeof(value)=='string'&&value){
if(this.XQE.xuQ>=2){
this.Xpq('LMS '+xbK+'="'+value+'"','info');}
return value;}
var error=this.Xkk.LMSGetLastError();
if(error=='0'||
error=='401'||
error=='403'||
error=='')
{
if(this.XQE.xuQ>=2){
this.Xpq('LMS '+xbK+'empty;error="'+
error+'"','warning');}
xbK+=('="'+value+'" ['+typeof(value)+
'];error="'+error+'" ['+typeof(error)+']');
this.XGp(xbK);
return '';}
xbK+=('="'+value+'" ['+typeof(value)+
'];error="'+error+'" ['+typeof(error)+']');
this.XGp(xbK);
if(!this.Xm1){
throw new X0k(xbK,'lms.js',400);}
else{
this.Xpq('LMS '+xbK,'warning');
return '';}}
,Xpq:function(XGE,xGQ,x8I){
return this.XKF.Xl(XGE,xGQ,x8I);}}
if(self.XI7){XI7.XJB(new XIX(
'../lms.js',['callback.js']));}

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
