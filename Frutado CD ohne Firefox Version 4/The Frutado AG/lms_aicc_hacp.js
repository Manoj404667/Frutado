//
function X0h(XIB,XQE,XKF){
if(!XIB||!XQE)return;
this.XIB=XIB;
this.XQE=XQE;
this.XKF=XKF;
this.XmO=XQE.X27||{};
this.Xqe=XQE.xuQ>=2;
this.Xqf=XQE.xuQ>=3;
this.x6K=true;}
X0h.prototype={
x6K:false
,error:'ok'
,X1r:function(X0s,X1w){
typeof(X0s)=='number'&&(this.X0s=X0s);
return true;}
,x3H:function(){
var url=this.XIB.xNI('aicc_hacp.html');
this.XQE.domain&&
url.XWg('domain',this.XQE.domain);
url=url.toString();
this.Xqf&&this.Xpq('LMS load HACP form "'+url+'"');
this.XHY=this.XqU;
var xa7=XqQ(null,'dgoHacpSet',url,
this,this.Xq0);
if(typeof(xa7)=='string'){
this.error='IFRAME get:'+xa7;
return false;}
xa7=XqQ(null,'dgoHacpExit',url,
this,this.XqZ);
if(typeof(xa7)=='string'){
this.error='IFRAME exit:'+xa7;
return false;}
return true;}
,x8F:function(X0D,X1w,XCZ,XCY){
this.X0D=X0D;
if(this.XHY!=this.XqV){
this.Xpq('LMS HACP could not be initialized','error');
return false;}
this.XHY=this.XqS;
this.XbI=new XAZ(XCZ,XCY,this.Xqe?XAU:null);
this.Xqe&&
this.Xpq('LMS HACP exit('+X0D+','+X1w+')');
var xa7;
if(xa7=this.Xqc(null,X1w)){
return true;}
this.XbI.exec('LMS HACP error',this.error);
return true;}
,X2i:function(X28,X2a,XZg){
if(typeof(X28)=='number'){
this.X2d=X28;}
if(typeof(X2a)=='number'){
this.X2e=X2a;}
if(typeof(XZg)=='number'){
this.X2h=XZg;}}
,X5G:function(){
return{
max:this.X2d||0
,pass:this.X2e||0
,current:this.X2h||0
,scaled:((this.X2d||0)>0
?(this.X2h||0)/this.X2d:null)}}
,X2P:function(){
return '';}
,X2Q:function(){
return '';}
,X2R:function(){
return '';}
,XOz:function(){
return '';}
,X2S:function(){
return '';}
,X2T:function(){
return '0';}
,toString:function(){
return 'LMShacp={'+this.Xq4()+
';score:'+this.X2h+
';max:'+this.X2d+
';pass:'+this.X2e+
'}';}
,XQE:null,XKF:null,XmO:null,XIB:null,Xqe:false
,Xqf:false
,X2e:null,X2d:null,X2h:null 
,X0D:'' 
,Xq6:null
,Xq7:null
,XRA:false,X0s:null,X1w:null 
,XqW:0,XqU:10,XqV:50,XqS:90,XqT:99,XHY:0 
,XqY:function(XbL){
if(XSN){XbL.width=0;
XbL.height=0;
XbL.style.border='0px';
XbL.style.display='block';}
if(this.Xq7&&this.Xq6){
this.XHY=this.XqV;
this.Xqe&&this.Xpq('LMS HACP running');
return true;}}
,XqZ:function(XbL){
this.Xqf&&this.Xpq(
'LMS HACP IFRAME "exit" loaded;state:'+this.Xq4());
if(this.XHY==this.XqU){
this.Xq6=XbL;
return this.XqY(XbL);}
else if(this.XHY==this.XqS){
var xbK=this.Xq2(XbL);
(this.Xqe||xbK)&&
this.Xpq('LMS HACP ExitAU ready:'+xbK,
xbK?'error':'success');
this.XbI.exec('LMS HACP exit',xbK);}}
,Xq0:function(XbL){
this.Xqf&&this.Xpq(
'LMS HACP IFRAME "set" loaded;state:'+this.Xq4());
if(this.XHY==this.XqU){
this.Xq7=XbL;
return this.XqY(XbL);}
else if(this.XHY==this.XqS&&this.XRA){
var xbK=this.Xq2(XbL);
(this.Xqe||xbK)&&
this.Xpq('LMS HACP PutParam ready:'+xbK,
xbK?'error':'success');
if(xbK){
this.XbI.exec('LMS HACP put error',xbK);}
else{
if(!this.Xqb()){
this.XbI.exec('LMS HACP exit error',this.error);}}}}
,Xq1:function(){
var Xq8;
if(typeof(this.X2e)=='number'&&
typeof(this.X2h)=='number'&&this.X2h)
{
Xq8=this.X2h>=this.X2e?'P':'F';}
else{
Xq8=this.X0D=='completed'?'C':'I';}
var time=Math.floor(this.X1w/1000+0.5);
var XHC=new Number(time % 60);
time=time/60;
var x5G=new Number(time % 60);
time=time/60;
var Xq5=new Number(time % 24);
var Xqd=Xq5.X2m(2)+':'+
x5G.X2m(2)+':'+XHC.X2m(2);
var xbK='[core]';
if(this.X0s){
xbK+='\r\nlesson_location='+this.X0s;}
xbK+='\r\nlesson_status='+Xq8+
'\r\ntime='+Xqd;
if(typeof(this.X2d)=='number'&&
typeof(this.X2h)=='number'&&this.X2h)
{
var Xqa=this.X2d>0
?this.X2h/this.X2d
:this.X2h/100;
xbK+='\r\nscore='+(Math.floor(Xqa*100+0.5)/100);}
return xbK+'\r\n';}
,Xq3:/^[ \t]*error+[ \t]*=[ \t]*([0-9]+)/im
,Xq2:function(XbL){
var xUG=XbL.contentWindow;
var xd2,xbK;
if(xd2=XSS(xUG)){
var url=new Url(this.XQE.aicc_url);
if(url.XFT()!=this.XIB.start().XFT()){
xbK='different server:'+url.XFT();
xd2='';}
else{
xbK='no access('+xd2+')';}}
else{
var text=XqX(xUG.document);
if(text===false){xd2='empty('+xUG.document.location+')';
if(xUG.document.body&&xUG.document.body.tagName){
xbK=xd2+';full page:"'+xUG.document.body.innerHTML+'"';}}
else{
var xa7=text.match(this.Xq3);
if(xa7){
if((xa7[1]-0)==0){
xd2='';
xbK='';}
else{
xd2='error "'+xa7[1]+'"';
xbK=xd2+';full text:"'+text+'"';}}
else{
xd2='cannot interpret';
xbK=xd2+';full text:"'+text+'"';}}}
(this.Xqe||xd2)&&
this.Xpq('LMS HACP response:'+(xbK||'ok'),
xd2?'error':'success');
return xd2;}
,Xq4:function(){
switch(this.XHY){
case this.XqW:return 'uninit';
case this.XqU:return 'init';
case this.XqV:return 'run';
case this.XqS:return 'exit';
case this.XqT:return 'finished';
default:break;}
return '{unknown state '+this.XHY+'}';}
,Xqb:function(){
var x8Q,form;
this.error='';
if(!this.Xq6){
this.error='no IFRAME "exit"';}
else if(!(x8Q=this.Xq6.contentWindow)){
this.error='IFRAME "exit":no win';}
else if(!(form=x8Q.document.XkG)){
this.error='IFRAME "exit":no postform';}
if(this.error){
this.Xpq('LMS HACP EXIT'+this.error,'error');
return false;}
form.action=this.XQE.aicc_url;
form.command.value='ExitAU';
form.session_id.value=this.XQE.aicc_sid;
form.aicc_data.value='';
form.submit();
this.Xqe&&this.Xpq(
'LMS HACP submitted to "'+form.action+'" ExitAU');
return true;}
,Xqc:function(X0s,X1w){
typeof(X0s)=='number'&&(this.X0s=X0s);
typeof(X1w)=='number'&&(this.X1w=X1w);
var x8Q,form;
this.error='';
if(this.XRA){
this.error='delayed write bookm='+X0s+',time='+X1w;}
else if(!this.Xq7){
this.error='no IFRAME "set"';}
else if(!(x8Q=this.Xq7.contentWindow)){
this.error='IFRAME "set":no win';}
else if(!(form=x8Q.document.XkG)){
this.error='IFRAME "set":no postform';}
if(this.error){
this.Xpq('LMS HACP PUT '+this.error,'error');
return false;}
this.XRA=true;
form.action=this.XIB.xNI(
this.XQE.aicc_url).toString();
form.method='POST';
form.enctype='application/x-www-form-urlencoded';
form.command.value='PutParam';
form.session_id.value=this.XQE.aicc_sid;
form.aicc_data.value=this.Xq1();
form.submit();
this.Xqe&&this.Xpq('LMS HACP submitted to "'+
form.action+'" PutParam:"'+form.aicc_data.value+'"');
return true;}
,Xpq:function(XGE,xGQ,x8I){
return this.XKF.Xl(XGE,xGQ,x8I);}}
if(self.XI7){XI7.XJB(new XIX(
'../lms_aicc_hacp.js',['dhtml.js']));}

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
