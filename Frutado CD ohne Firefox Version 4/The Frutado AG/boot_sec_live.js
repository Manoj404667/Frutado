//
var dgoDOMAIN='';
var dgoGZIP=false;
var dynloaderSupport=false;
var XwK=false;
var XY8=false;
function Xwu(){
var Xiv=document.getElementById('dgoTrainerInject');
var XGB=new String(Xiv.src);
if(XGB.indexOf('?')>0){
XGB=XGB.substr(XGB.indexOf('?')+1);}
var xRQ=[];
if(XGB.length&&XGB.length>0){
xRQ=XGB.split('&');}
var XxA=[];
for(var i=0;i<xRQ.length;i++){
var XT6=xRQ[i].split('=');
XxA[XT6[0]]=XT6[1];}
return XxA;}
var dgoN={
XQk:true
,Xl:function(){return true;}
,XSr:function(){return true;}};
function XI8(){
XI7.XmM(self,dgoN.Xl,0);
if(!dgoGZIP){
XI7.XT5();}
XI7.XJG(self.frames.trainer_program_frame);
var XJJ=[ 'callback.js','config.js'
,'dhtml.js'
,'dhtml_explorer.js'
,'dict.js'
,'log_tree.js'
,'tree_explorer.js','url.js'
,'../agent_urler.js'
,'js_extensions_standard.js','queue.js'
,'../condition.js'
,'../eventfactory.js','../eep_standard.js','../media.js','../render_highlight.js'
,'../render_xbubble.js'
,'../render_scroll.js'
,'../render_form.js'
,'../render_task.js'
,'../pause.js'
,'../cursor.js'
,'../explorer.js'
,'../gui_controller.js'
,'../api.js' ];
if(!XI7.load(XJJ,XwR)){
var xbK='dynloader.load(I)abort';
alert(xbK);
return false;}
return bootsecondary_ready('dynLoader_ready()');}
function XwR(XDv){
if(XDv>0){
var xbK='dynloader.load(I):'+XDv+' error(s)';
alert(xbK);
return false;}
return bootsecondary_ready('dynloader.secondary.load(I)');}
var dgobootsecondaryReadyCount=0;
var Xw6=2;
function bootsecondary_ready(XGE){
++dgobootsecondaryReadyCount;
if(dgobootsecondaryReadyCount<Xw6){
return true;}
var XJk=self.frames.trainer_program_frame;
if(typeof(dgoDOMAIN)=='string'&&dgoDOMAIN!=''){
if(self.location.protocol=='http:'||
self.location.protocol=='https:')
{
var xPL={domain:dgoDOMAIN,
xas:self,
XJk:XJk};
try{
XJk.XJp(self,XwU,xPL);
XJk.dgoN=dgoN;
XJk.document.domain=dgoDOMAIN;
XJk=self.frames.trainer_program_frame;
XI7&&XI7.XJG(
XJk,self.frames.trainer_dynloader_frame);}
catch(xa8){
var xbK='Cannot set document.domain to "'+
dgoDOMAIN+'":'+(new XJk.x6C(xa8));
return false;}}}
self.dgoAgent=opener.ctx.dgo7;
self.dgo7=opener.ctx.dgo7;
self.xNE=self.dgoAgent.XRN();
self.dgo={};
self.dgo.xGB=self.xNE;
self.dgo.xGB.XRX=0;
return Xwe();}
function XwU(xVG,xaq){
if(xVG==xaq.xas){
dgoN.Xl('boot3:Do not yet set domain in parent frameset');}
else if(xVG==xaq.XJk){
dgoN.Xl('boot3:Do not yet set domain in program frame');}
else if(xVG==xaq.XxC){
dgoN.Xl('boot3:Do not yet set domain in webride frame');}
else{
if(typeof(xVG.location)!='unknown'&&
(xVG.location.protocol=='http:'||
xVG.location.protocol=='https:'))
{
dgoN.Xl('boot3:set domain in '+
xVG.name+'='+xVG.location.href);
xVG.document.domain=xaq.domain;}}
return true;}
var Xw4=null;
var Xw0=false;
function Xwe(){
var XwX=self.frames['trainer_program_frame'];
XwX.dgoAgent=self.dgoAgent;
XwX.dgo7=self.dgo7;
var XfQ=self.dgoAgent.Xd6();
var XwX=self.frames['trainer_program_frame'];
XwX.xNE=self.xNE;
XwX.dgo=self.dgo;
XwX.dgo.xGB=self.xNE;
XwX.XPi=self.XPi;
XwX.XQA=self.XQA;
XwX.dgo=self.dgo;
XwX.XM4=self.XM4;
XwX.XYE=self.dgoAgent.XhX().XYE;
if(XwK){
XwX.XVm=new XwX.XSe(XfQ,
self,
XwK+'',self.location.href,false);XfQ.XdM[XwK+'']=XwX.XVm;}
else{
alert('Error in secondary window!');}
Xw0=false;
XwX.xA7(self,self.document.body,'beforeunload',XwW,0);
if(XY8){var Xbm=XY8;
var XwG=self;
var X1K=function(){
Xbm.exec('DHtml_openWindowSecondary_execCb_',XwG);};
opener.setTimeout(X1K,100);}}
function XwV(XfA){
try{
var XwX=self.frames['trainer_program_frame'];
XwX.Xug(XfA.x6U(),XfA.x6U().document.body);
XwX.Xug(XfA.x6U(),XfA.x6U().document.body);}
catch(xa8){}
return true;}
function XwW(XDx){
if(!Xw0){
var XwX=self.frames['trainer_program_frame'];
var XVm=XwX.XVm;
Xw0=true;
var XMN=self.dgoAgent.x6b();
if(XMN){self.dgoAgent.x6b().Xwq(XVm.XVz());
if(dynloaderSupport){for(var n=XwX.document.scripts.length-1;n>=0;n--){
XwX.document.scripts[n].src='./cleanup.js';}}
XVm.Xeh();
XVm.close();
self.dgoAgent.XhX().dgo53();}
else{XVm.Xch(XwV);}}
return true;}
function XZI(){
var xRQ=Xwu();
dgoDOMAIN=xRQ['dgoDOMAIN']||'';
dgoGZIP=xRQ['dgoGZIP']=='true';
dynloaderSupport=xRQ['dynloaderSupport']=='true';
XwK=xRQ['WindowNoFromOpener']||false;
var Xfu=unescape(xRQ['dynloaderExplorer']);
var XV8=document.createElement('IFRAME');
XV8.style.border='0px;';
XV8.style.padding='0px;';
XV8.style.margin='0px;';
XV8.border=0;
XV8.width=0;
XV8.height=0;
XV8.id='trainer_program_frame';
XV8.name='trainer_program_frame';
document.body.appendChild(XV8);
var Xi4=Xfu.replace('dynloader_explorer','relax_domain');
self.frames['trainer_program_frame'].location.replace(Xi4+'?dgoDOMAIN='+dgoDOMAIN);
var XV9=document.createElement('IFRAME');
XV9.style.border='0px;';
XV9.style.padding='0px;';
XV9.style.margin='0px;';
XV9.border=0;
XV9.width=0;
XV9.height=0;
XV9.id='trainer_dynloader_frame';
XV9.name='trainer_dynloader_frame';
document.body.appendChild(XV9);
self.XI7=null;
if(dynloaderSupport){self.frames['trainer_dynloader_frame'].location.replace(Xfu+'?dgoDOMAIN='+dgoDOMAIN);}
else{
if(dgoGZIP){
var Xj6=Xfu.replace('jswidget/dynloader_explorer','codeSecondary_gz');}
else{
Xj6=Xfu.replace('jswidget/dynloader_explorer','codeSecondary');}
self.frames['trainer_program_frame'].location.replace(Xj6+'?dgoDOMAIN='+dgoDOMAIN);}}

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
