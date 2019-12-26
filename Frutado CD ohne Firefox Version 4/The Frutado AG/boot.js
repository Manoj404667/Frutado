//
//
//
//
function boot(){
self.dgo.XOg=[];
self.dgo.XOf=[];
self.dgo.XOb={x3H:(new Date).valueOf()};
self.dgo.XAE=null;
self.dgo.XAX=null;
self.dgo.XBq=null;
self.dgo.xGB={};
self.dgo.XMW={};
self.dgo.XM5=null;
if(typeof(self.dgoUrl)=='string'){self.dgo.Home=self.dgoHome;
self.dgo.Referrer=self.dgoReferrer;
self.dgo.Url=self.dgoUrl;
self.dgo.UrlParam=self.dgoUrlParam;}
var XVl=(self.dgo.UrlParam.search('anybrowser=(true|1)')>=0);
var xoL=self.dgo.UrlParam.search('verbose=');
self.Xmk=(xoL>=0
?parseInt(self.dgo.UrlParam.substr(xoL+8)):0);
if(!XPj(XVl)){
XPi('ua','not supported:"'+self.dgo.XAE+'"');
return;}
if(self.dgo.UrlParam){
XPk();}
else if(self.location.protocol=='mk:'){
self.location.replace('frameset.html?mode=lib&library=library.xml');}
else{
if(self.location.hash!=''){
if(self.dgo.XAE='explorer'){
var X1K=function(){
self.top.opener=self.top;
self.top.open('','_parent');
self.top.close();}
window.setTimeout(X1K,2000);}}
else{
var xbK='Nothing to do(Neither program/ride nor library passed)';
self.Xmk>=3&&XPw(xbK);
XPi('conf',xbK);
return false;}}}
function XPj(XVl){
var xjM=xMB();
self.dgo.XAX=xjM.type;
if(xjM.type=='ie'&&xjM.Xv>='5.5'){
self.dgo.XAE='explorer';
self.dgo.XBq=xjM.Xv;
return true;}
if(xjM.type=='moz'&&xjM.Xv>='1.7'||
xjM.type=='konq'&&xjM.Xv>='5'||XVl)
{
self.dgo.XAE='standard';
self.dgo.XBq=xjM.Xv;
return true;}
self.dgo.XAE=xjM.name;
return false;}
function XPk(){
var xNE=new xGB(self,{
XVq:true
,Xmn:self.Xmk<3},XM4,XUG);
if(!xNE.x6K){
var xbK='Cannot init configuration:'+xNE.error;
self.Xmk>=3&&XPw(xbK);
XPi('conf0',xbK);
return false;}
if(!xNE.load(self.dgo.UrlParam,null,XTP)){
var xbK='Cannot load configuration:'+xNE.error;
self.Xmk>=3&&XPw(xbK);
XPi('conf1',xbK);
return false;}
return true;}
function XQc(){
return Math.abs(self.dgo.xGB.xuQ-0);}
function XTP(XQE){
if(!XQE.x6K){
var xbK='Configuration load:'+XQE.error;
self.Xmk>=3&&XPw(xbK);
XPi('conf2',xbK);
return false;}
self.dgo.XMW=XQE.X85();
self.dgo.XMW.toString=XmX;
var xNE=XQE.XRN(null,2);
self.dgo.xGB=xNE;
xNE.xOD=self.dgo.XAE;
xNE.XIO=self.dgo.XAX;
xNE.xyQ=self.dgo.XBq;
XQA(XQE,XM4,xNE);
xNE.Xvw=xNE.xqP
?xNE.xqP
:xNE.Xan;
if(!xNE.xBH&&!xNE.xAJ){
var xbK='Nothing to do(Neither program/ride nor library passed)';
self.Xmk>=3&&XPw(xbK);
XPi('conf',xbK);
return false;}
return XPn(xNE.Xvw);}
var XzY=self.location.href;
function XPn(Xvn){
var XBi=XQc();
var xAJ=self.dgo.xGB.xAJ;
var xfH=self.dgo.xGB.xfH;
xfH=(xfH=='true'||xfH=='1'||
(self.dgo.xGB.xvO||self.dgo.xGB.xnN)=='hidden');
var XRI,XRE;
XRI=' frameborder=no border=0 bordercolor=white ';
XRE='';
var x3F=' noscroll scrolling=no noresize';
document.body.onscroll='self.document.body.scrollLeft=0;self.document.body.scrollTop=0;';
var XLn=self.document.documentElement;
var w=(typeof(XLn.offsetWidth)=='undefined'?
self.offsetWidth:self.innerWidth||XLn.offsetWidth);
var h=(typeof(XLn.offsetHeight)=='undefined'?
self.innerHeight:self.innerHeight||XLn.offsetHeight);
var size=' style="border:0px;padding:0px;margin:0px;" border=0 width=0 height=0 ';
var html='';
var xoL=XzY.indexOf('?');
if(xoL>0){
XzY=XzY.substr(0,xoL);}
var xoL=XzY.lastIndexOf('/');
if(xoL>0){
XzY=XzY.substr(0,xoL+1);}
self.dgo.XzY=XzY;
var filter=self.dgo.xGB.X6s!=''?'filter:'+self.dgo.xGB.X6s:'';
html+='<iframe style="position:absolute;border:0px;margin:0px;padding:0px;z-index:50000" '+
' width=0 height=0 scrolling="no" noscroll id="trainer_library_frame" '+
' name="trainer_library_frame" src="about_blank.html" '+
' border=0 frameborder=0></iframe>\n';
html+='<iframe id="'+Xvn+'" name="'+Xvn+'" '+XRE+
XwP(0,0,'100%',h,filter)+
' src="about_blank.html" border=0 frameborder=0></iframe>\n';
html+='<iframe scrolling="no" scroll="no" noscroll id="trainer_gui_frame" name="trainer_gui_frame" '+
XRI+XwP(0,0,0,0,'z-index:50000;')+
' src="about_blank.html"></iframe>\n';
html+='<iframe'+size+' id="trainer_program_frame" name="trainer_program_frame"'+
' src="jswidget/dynloader_blank.html"></iframe>\n';
html+='<iframe'+size+' id="trainer_dynloader_frame" '+
' name="trainer_dynloader_frame" src="about_blank.html"></iframe>\n';
html+='<iframe'+size+' id="trainer_audio_frame" name="trainer_audio_frame" '+
' src="about_blank.html"></iframe>\n';
html+='<iframe'+size+' id="trainer_config_frame" name="trainer_config_frame" '+
' src="about_blank.html"></iframe>\n';
html+='<iframe'+size+' id="trainer_config_global_frame" '+
' name="trainer_config_global_frame" src="about_blank.html"></iframe>\n';
html+='<iframe'+size+' id="trainer_config_mode_frame" '+
' name="trainer_config_mode_frame" src="about_blank.html"></iframe>\n';
html+='<iframe'+size+' id="trainer_tour_frame" name="trainer_tour_frame" '+
' src="about_blank.html"></iframe>\n';
html+='<iframe'+size+' id="trainer_log_frame" name="trainer_log_frame" '+
' src="about_blank.html"></iframe>';
if(XBi>=4){
alert('Frameset HTML:\n\r'+html);}
var dgo=self.dgo;
document.body.innerHTML=html;
document.dgo=dgo;
navigator.dgo=dgo;
boot1_framesetOnload_();}
function XwP(x,y,w,h,Xw8){
var style='position:absolute;border:0px;margin:0px;padding:0px;'+Xw8+';';
(typeof(x)=='number')&&(style+='left:'+Math.abs(x)+'px;');
(typeof(y)=='number')&&(style+='top:'+Math.abs(y)+'px;');
(typeof(w)=='number')&&(style+='width:'+Math.abs(w)+'px;')||
(typeof(w)=='string')&&(style+='width:'+w+';');
(typeof(h)=='number')&&(style+='height:'+Math.abs(h)+'px;')||
(typeof(h)=='string')&&(style+='height:'+h+';');
return ' style="'+style+'" ';}

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
