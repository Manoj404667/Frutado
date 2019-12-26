//
var XRl=(navigator.appName=='Microsoft Internet Explorer');
var X0a=parseInt(navigator.appVersion.substr(
navigator.appVersion.indexOf('MSIE ')+5))>=7;
function readjustSizes(Xy6){
var Xy5=false;
var XJf=top.document.getElementById('trainer_gui_frame');
if(parseInt(XJf.style.height)>0&&parseInt(XJf.style.width)>0){
Xy5=true;}else{
top.document.getElementById('trainer_gui_frame').style.width='100%';
top.document.getElementById('trainer_gui_frame').style.height='100%';}
if(typeof(Xy6)!='undefined'&&
(Xy6==true||Xy6==false))
{
Xy5=Xy6;}
var XBi=Math.abs(self.xNE.xuQ-0);
isNaN(XBi)&&(XBi=false);
var xAJ=self.xNE.xAJ;
if(XRl&&!X0a){
var XLn=parent.document.body;}
else{
XLn=parent.document.documentElement;}
var w=(typeof(XLn.offsetWidth)=='undefined'?
top.offsetWidth:top.innerWidth||XLn.offsetWidth);
var h=(typeof(XLn.offsetHeight)=='undefined'?
top.innerHeight:top.innerHeight||XLn.offsetHeight);
var xNE=self.xNE;
var Xyd=0;
var Xye=0;
var Xyf=0;
var Xyc=0;
var Xy2=0;
var Xy3=0;
var Xy4=0;
var Xy1=0;
if(Xy5){
Xy9=xNE.Xy7.width;
Xy8=xNE.Xy7.height;}else{
Xy9='0';
Xy8='0';}
xNE.Xy7.x=xNE.Xy7.x||'0';
xNE.Xy7.y=xNE.Xy7.y||'0';
var Xwz=self.xNE.xqP
?self.xNE.xqP
:self.xNE.Xan;
switch(xNE.Xy7.orientation.toLowerCase()){
case 'w':
Xyf=w-parseInt(Xy9);
Xyc=h;
Xyd=parseInt(Xy9);
Xye=0;
Xy4=parseInt(Xy9)+'px';
Xy1=parseInt(Xy8)+'%';
Xy2=0;
Xy3=0;
break;
case 'e':
Xyf=w-parseInt(Xy9);
Xyc=h;
Xyd=0;
Xye=0;
Xy4=Xy9;
Xy1=Xy8;
Xy2=w-parseInt(Xy9);
Xy3=0;
break;
case 'n':
Xyf=w;
Xyc=h-parseInt(Xy8);
Xyd=0;
Xye=parseInt(Xy8);
Xy4=parseInt(Xy9)+'%';
Xy1=parseInt(Xy8)+'px';
Xy2=0;
Xy3=0;
break;
case 'f':
Xyf=w;
Xyc=h;
Xyd=0;
Xye=0;
Xy4=parseInt(Xy9)+'px';
Xy1=parseInt(Xy8)+'px';
Xy2=parseInt(xNE.Xy7.x)+'px';
Xy3=parseInt(xNE.Xy7.y)+'px';
break;
case 's':
default:
Xyf=w;
Xyc=h-parseInt(Xy8);
Xyd=0;
Xye=0;
Xy4=parseInt(Xy9)+'%';
Xy1=parseInt(Xy8)+'px';
Xy2=0;
Xy3=h-parseInt(Xy8);
break;}
top.document.getElementById(Xwz).style.left=Xyd+'px';
top.document.getElementById(Xwz).style.top=Xye+'px';
top.document.getElementById(Xwz).style.height=Xyc+'px';
top.document.getElementById(Xwz).style.width=Xyf+'px';
top.document.getElementById('trainer_gui_frame').style.height=Xy1;
top.document.getElementById('trainer_gui_frame').style.top=Xy3;
top.document.getElementById('trainer_gui_frame').style.width=Xy4;
top.document.getElementById('trainer_gui_frame').style.left=Xy2;
top.document.getElementById('trainer_gui_frame').style.display='inline';
return true;}
function XwO(){
self.XI7=null;
if(dynloaderSupport){self.frames['trainer_dynloader_frame'].location.replace('./jswidget/dynloader_explorer.html');}
else{
if(dgoGZIP){
self.frames['trainer_program_frame'].location.replace('./codeSecondary_gz.html');}
else{
self.frames['trainer_program_frame'].location.replace('./codeSecondary.html');}}
return true;}
var dgoN={
XQk:true
,Xl:function(){return true;}
,XSr:function(){return true;}};
function XI8(){
XI7.XJG(top.frames['trainer_program_frame']);
XI7.XmM(self,dgoN.Xl,0);
if(!dgoGZIP){
XI7.XT5();}
XI7.XJG(top.frames.trainer_program_frame);
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
self.document.domain=dgoDOMAIN;
XJk=self.frames.trainer_program_frame;
XI7&&XI7.XJG(
XJk,self.frames.trainer_dynloader_frame);}
catch(xa8){
var xbK='Cannot set document.domain to "'+
dgoDOMAIN+'":'+(new XJk.x6C(xa8));
return false;}}}
self.dgo=opener.dgo;
self.xNE=opener.dgo.xGB;
self.dgo.xGB=self.xNE;
self.dgoAgent={};
self.dgoAgent=opener.dgoAgent;
self.dgo7=opener.dgoAgent;
if(!self.dgo.xGB.showSecondaryGuis){
return Xwe(false);}
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
self.dgo.xGB.xfH=(xnN=='hidden');
var XRY=opener.dgo6.xNI('skin/'+xnN+
'/init.html').toString()+
'?dgoDOMAIN='+dgoDOMAIN;
var XwX=self.frames['trainer_program_frame'];
XwX.XGH(self,
self.document.getElementById("trainer_gui_frame"),
null,Xwd);
self.frames['trainer_gui_frame'].location.replace(XRY);}
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
function Xwd(){
self.xNE.Xy7=self.frames.trainer_gui_frame.GCONF;
self.xNE.Xy7.xoN=self.xNE.xoN;
readjustSizes(false);
var XJf=self.frames['trainer_gui_frame'];
var XwX=self.frames['trainer_program_frame'];
Xw4=self.dgoAgent.Xfn().X7p(XJf,
new XwX.XAZ(self.dgoAgent,null),self.xNE.xvO,self.xNE.Xy7.x,self.xNE.Xy7.y,self.xNE.Xy7.width,self.xNE.Xy7.height);
Xwe(true);}
var Xw0=false;
function Xwe(Xy6){
var XJf=self.frames['trainer_gui_frame'];
var XwX=self.frames['trainer_program_frame'];
XwX.dgoAgent=self.dgoAgent;
XwX.dgo7=self.dgo7;
var XfQ=self.dgoAgent.Xd6();
var XwX=self.frames['trainer_program_frame'];
if(self.XwK){
XwX.XVm=new XwX.XSe(XfQ,
self.frames[self.dgoAgent.XvT()],
self.XwK+'','');}
else{
XwX.XVm=new XwX.XSe(XfQ,
self.frames[self.dgoAgent.XvT()],
'-3','');}
XwX.xNE=opener.xNE;
XwX.dgo=self.dgo;
XwX.dgo.xGB=self.xNE;
XwX.XPi=self.XPi;
XwX.XQA=self.XQA;
XwX.dgo=self.dgo;
XwX.XM4=self.XM4;
XwX.XYE=opener.XYE;
self.document.body.onresize=readjustSizes;
XwX.xA7(self,self.document.body,'beforeunload',XwW,0);
readjustSizes(Xy6);
Xw0=false;
if(xAX){var Xbm=xAX;
var XwG=top;
var X1K=function(){
Xbm.exec('DHtml_openWindowSecondary_execCb_',XwG);};
opener.setTimeout(X1K,100);}}
function XwV(XfA){
var XwX=self.frames['trainer_program_frame'];
XwX.Xug(XfA.x6U(),XfA.x6U().document.body);
XwX.Xug(XfA.x6U(),XfA.x6U().document.body);
return true;}
function XwW(XDx){
if(!Xw0){
var XwX=self.frames['trainer_program_frame'];
var XVm=XwX.XVm;
Xw0=true;
try{var XMN=self.dgoAgent.x6b();}
catch(xa8){
XMN=false;}
if(XMN){self.dgoAgent.x6b().Xwq(XVm.XVz());
if(dynloaderSupport){for(var n=XwX.document.scripts.length-1;n>=0;n--){
XwX.document.scripts[n].src='./cleanup.js';}}
XVm.Xeh();
XVm.close();
opener.dgo53();}
else{XVm.Xch(XwV);}}
return true;}

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
