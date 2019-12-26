//
var dgo6;
var dgoN;
var dgoJ=null;
var dgoI=null;
var dgoy=false;
function XP8(){
var xNE={};
XTd(self.dgo.xGB,xNE);
xNE.toString=XOh;
self.dgo.xGB=xNE;
XS1();
var host=self.dgo.xGB.domain;
if(host){
var xoL=host.indexOf(':');
if(xoL>0){host=host.substr(0,xoL);
self.dgo.xGB.domain=host;}}
dgo6=new XAS(
new String(self.dgo.Url),new String(self.dgo.Referrer));
var Xka=(self.dgo.xGB.xuQ+'').split(/[;,:]/);
var xuQ=(Xka[0]||'0')-0;
self.dgo.xGB.xuQ=Math.abs(xuQ);
if(XBM&&xuQ){
var XXM=(Xka[1]||'0')-0;
var x7C=self.dgo.Home;
dgoN=new XBM(
self.dgo.xGB.Xv+' Log',x7C+'logging',null,XXM);
dgoN.Xl('Boot','info',1);
dgoN.Xl('Phase I:Setup Configuration(Part 1)','info',2);
self.dgo.XmR=self.dgo.XOf;
self.dgo.XmT=self.dgo.XOg;
self.dgo.XOf=self.dgo.XNx;
self.dgo.XOg=self.dgo.XmS;
XPr(dgoN,dgoN.Xl);
dgoN.Xl('Phase II:Dynamic Load Utilities','info',2);
self.dgo.XOf=self.dgo.XmR;
self.dgo.XOg=self.dgo.XmT;
XPr(dgoN,dgoN.Xl);
xuQ<0&&dgoN.show();}
else{
dgoN={
XQk:true
,Xl:function(){return true;}
,XSr:function(){return true;}};}
XI7.XmM(dgoN,dgoN.Xl,self.dgo.xGB.xuQ);
dgoN.Xl('Phase III:Setup Configuration(Part 2)','info',2);
if(self.dgo.xGB.Xan&&self.dgo.xGB.Xan!='webride_frame'){
self.parent.frames[1].name=self.dgo.xGB.Xan;
if(!self.parent.frames[self.dgo.xGB.Xan]){
self.parent.frames[self.dgo.xGB.Xan]=self.parent.frames[1];}}
if(self.dgo.xGB.title){
self.parent.document.title=self.dgo.xGB.title;}
var xnN=(self.dgo.xGB.xnN||self.dgo.xGB.xvO||'');
if(self.dgo.xGB.xfH){
xnN='hidden';}
if(!xnN){
xnN='datango_standard';}
switch(xnN.toLowerCase()){
case 'slim':
case 'slim2':
case 'datango4':
case 'datango5':
case 'datango6':
case 'datango7':
case 'datango10':
xnN='datango_standard';
break;}
self.dgo.xGB.xnN=xnN;
self.dgo.xGB.xvO=xnN;
dgoN.Xl('Config:'+self.dgo.xGB,'trace',3);
dgoN.Xl('Control:'+XA5(self.dgo.XMW),'trace');
dgo6.XPQ(self.dgo.xGB);
dgoN.Xl('URLs:'+dgo6,'trace');
dgoN.Xl('URL protocols:'+Url.prototype.XQl(),'trace');
var Xa3=false;
try{
if(typeof(self.parent.opener)=='object'&&
self.parent.opener&&
typeof(self.parent.opener.dgom)=='boolean'&&
!self.parent.opener.closed&&
self.parent.opener.dgom)
{
self.parent.opener.dgom=false;
dgoN.Xl('Close parent.opener');
self.parent.opener.close();
Xa3=true;}}
catch(xa8){
dgoN.Xl('Exception checking need to close','warning');}
if(!Xa3){
if(!self.dgo.xGB.open&&
self.dgo.xGB.window&&
self.dgo.xGB.window!=null)
{
self.parent.dgom=true;
if(self.dgo.xGB.window.cfg_features&&
self.dgo.xGB.window.cfg_features!=null)
{
if(self.dgo.xGB.window.cfg_features.toLowerCase().indexOf('fullscreen=1')>=0||
self.dgo.xGB.window.cfg_features.toLowerCase().indexOf('fullscreen=yes')>=0)
{
self.dgo.xGB.Xf5=-1;}}
var XVO=XTd(self.dgo.xGB.window);
XVO.cfg_flagRecursiveCall=true;
XVO.cfg_blockerAbort=true;
var x8Q=XaB(
new String(self.dgo.Url),
XVO,null,XJ4,
function(XGE,xGQ,x8I){
dgoN.Xl(XGE,xGQ,x8I);});
if(!x8Q){
XPi('ex','Popup Blocker prevents window to be opened');
return false;}
try{self.parent.opener=self.parent;}
catch(xa8){
dgoN.Xl('Exception setting parent.opener','warning');}
return true;}}
if(XSN){
if(self.dgo.xGB.window&&
self.dgo.xGB.window!=null)
{
if(self.dgo.xGB.window.cfg_features&&
self.dgo.xGB.window.cfg_features!=null)
{
if(self.dgo.xGB.window.cfg_features.toLowerCase().indexOf('fullscreen=1')>=0||
self.dgo.xGB.window.cfg_features.toLowerCase().indexOf('fullscreen=yes')>=0)
{
xCs();}}}}
self.dgoy=false;
if(self.external){
try{
self.external.set_current_time(0);
try{
self.external.hide_browser_bar();
dgoN.Xl('window.external.hide_browser_bar was called');}
catch(xa8){
dgoN.Xl('Exception calling window.external.hide_browser_bar:'+xa8);}
self.dgoy=true;}
catch(xDE){
dgoN.Xl('Frameset Exception:self.external.set_current_time(0)crashed! '+xDE);
self.dgoy=false;}}
self.dgo.dgoy=self.dgoy;
self.parent.dgoy=self.dgoy;
self.dgo.xGB.xvO=xnN;
self.dgo.xGB.xfH=(xnN=='hidden');
var XRY=dgo6.xNI(
'skin/'+xnN+'/init.html?dgoDOMAIN='+self.dgo.xGB.domain).toString();
XGH(
self.parent,self.parent.document.getElementById("trainer_gui_frame"),
null,Xf6);
self.parent.frames.trainer_gui_frame.location.replace(XRY);
var x0N;
var frameElement=self.parent.frames[1].frameElement;
if(self.dgo.xGB.xAJ){
x0N=dgo6.xNI(
self.dgo.xGB.Xlz).toString()+
'?dgoDOMAIN='+self.dgo.xGB.domain;
if(XRl&&
self.dgo.xGB.X6s!='')
{
frameElement.style.filter=self.dgo.xGB.X6s;
frameElement.filters[0].Apply();}
self.parent.frames[1].location.replace(x0N);
if(XRl&&
self.dgo.xGB.X6s!=''&&
frameElement.filters[0])
{
frameElement.filters[0].Play();}
dgoN.Xl('Library detail page into frame "'+
self.dgo.xGB.Xan+'":"'+x0N+'"');}
else if(self.dgo.xGB.x0N){
x0N=dgo6.xMD(
'start',self.dgo.xGB,self.dgo.XMW,true).toString();
if(XRl&&
self.dgo.xGB.X6s!='')
{
frameElement.style.filter=self.dgo.xGB.X6s;
frameElement.filters[0].Apply();}
self.parent.frames[1].location.replace(x0N);
if(XRl&&
self.dgo.xGB.X6s!=''&&
frameElement.filters[0])
{
frameElement.filters[0].Play();}
dgoN.Xl('Startpage into frame "'+self.dgo.xGB.Xan+
'":"'+x0N+'"');}
else{
dgoN.Xl('No Startpage;Frame "'+
self.dgo.xGB.Xan+'"');}
var XJJ=[
'../boot3.js',
'js_extensions_standard.js','queue.js',
'../api.js','../condition.js',
'../eventfactory.js','../eep_standard.js','../media.js','../render_highlight.js',
'../render_xbubble.js',
'../render_scroll.js',
'../render_form.js',
'../render_task.js',
'../pause.js',
'../cursor.js',
'../'+self.dgo.xGB.xOD+'.js',
'../gui_controller.js'];
if(self.dgo.xGB.xAJ){
XJJ[XJJ.length]='../library.js';XJJ[XJJ.length]='templater_base.js';}
if(self.dgo.xGB.Xl){
XJJ[XJJ.length]='../agent_logger.js';}
else if(self.dgo.xGB.XzA){
XJJ[XJJ.length]='../tour_logger.js';}
else{
XJJ[XJJ.length]='../agent_logger_dummy.js';}
try{
if(!self.dgo.xGB.X27||
!self.dgo.xGB.X27.cfg_deactivate_lms)
{
dgoJ=X0t(parent);}
else{
dgoJ=false;}}
catch(xaw){
dgoN.Xl('Exception checking for SCORM-LMS','warning');}
if(dgoJ){
XJJ[XJJ.length]='../lms.js';}
else if(self.dgo.xGB.aicc_sid){
XJJ[XJJ.length]='../lms_aicc_hacp.js';}
else{
XJJ[XJJ.length]='../lms_dummy.js';}
if(Xfb(self.dgo.xGB)){
XJJ[XJJ.length]='popup.js';
XJJ[XJJ.length]='../popup_frame.js';
self.dgo.xGB.Xvz=true;}
else{
self.dgo.xGB.Xvz=false;}
dgoN.Xl('Phase IV:Dynamic Load Application','info',2);
if(!XI7.load(XJJ,XPb)){
var xbK='dynLoader.load(II)failed';
alert(xbK);
XPi('ex',xbK);
return false;}
return XPc('boot2');}
function XJ4(){
dgoN.Xl('boot2.js:boot2_close_');
var X1K=function(){
dgoN.Xl('boot2.js:timeout close self.parent');
if(navigator.appName=='Microsoft Internet Explorer'){
var X1K=function(){
self.top.opener=self.top;
self.top.open('','_parent');
self.top.close();}
window.setTimeout(X1K,2000);}
else{
try{
self.top.close();}
catch(xaw){}
if(self.top&&!self.top.closed){
try{
netscape.security.PrivilegeManager.enablePrivilege(
'UniversalPreferencesRead UniversalPreferencesWrite');
navigator.preference('dom.allow_scripts_to_close_windows',true);
self.top.close();}
catch(xaw){alert('Cannot close browser window.\n\n'+
'To allow automatic window close,\n'+
'change the setting "dom.allow_scripts_to_close_windows"\n'+
'in "about:config" to true!');}}}};
self.setTimeout(X1K,1);}
function XS1(){
var i,xkI,xPL;
for(i=0,xkI=XM4.length;i<xkI;++i){
xPL=XM4[i];
xPL.X55=xPL.xmE;}}
function Xfb(XQE){
return XQE.xOD=='explorer'&&
(XQE.Xf5==1||XQE.Xf5==0&&
(XQE.Xf7+'').toLowerCase()=='screendump');}
function X0t(xlP){
var i,frames,xUG;
var frames=[];
if(top.opener&&!top.opener.closed){
frames.push(top.opener);
for(i=0;i<top.opener.frames.length;++i){
frames.push(top.opener.frames[i]);}}
xUG=xlP;
while(xUG!=xUG.top){
xUG=xUG.parent;
frames.push(xUG);}
for(i=0;i<frames.length;++i){
xUG=frames[i];
if(typeof(xUG.API)=='object'&&xUG.API){
return frames[i];}
else if(typeof(xUG.API_1484_11)=='object'&&xUG.API_1484_11){
try{
if((xUG.API_1484_11.LMSInitialize||
xUG.API_1484_11.Initialize)&&
(xUG.API_1484_11.LMSFinish||
xUG.API_1484_11.Terminate||
xUG.API_1484_11.Finish))
{
return frames[i];}}
catch(xa8){}}}
return null;}
function XPr(XGT,Xla){
var i,xkI;
for(i=0,xkI=self.dgo.XOf.length;i<xkI;++i){
Xla.call(XGT,self.dgo.XOf[i],
self.dgo.XOg[i].toLowerCase(),3);}
return true;}
function Xf6(){
XPc('gui');}
function XPb(XDv){
if(XDv>0){
var xbK=XDv+' error(s)in Boot II';
alert(xbK);
XPi('ex',xbK);
return false;}
if(dgoJ){
dgoI=new X0h(dgoJ,self.dgo.xGB,dgoN);}
else if(self.dgo.xGB.aicc_sid){
dgoI=new X0h(dgo6,self.dgo.xGB,dgoN);}
else{
dgoI=new X0h(null,self.dgo.xGB);}
if(dgoI.x6K){
dgoI.x3H();}
if(!dgoI.x6K){
XPi('lms',dgoI.error);}
XPc('dynloader');}
var dgo12=0;
var dgo13=3;
function XPc(XGE){
++dgo12;
if(self.dgo.xGB.xuQ>=5){
alert(dgo12+':'+"boot2_ready("+XGE+')');}
dgoN.Xl(dgo12+':'+"boot2_ready("+
XGE+')','trace',3);
if(dgo12<dgo13){
return true;}
self.dgo.XOb.XP8=(new Date).valueOf();
self.parent.dgoP=true;return XPd();}
if(self.XI7){XI7.XJB(new XIX('../boot2.js'));}

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
