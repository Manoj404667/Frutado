//
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
var XLn=top.document.documentElement;
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
function XwS(){
return Math.abs(self.dgo.xGB.xuQ-0);}
function XwO(){
self.dgo=opener.dgo;
self.xNE=opener.xNE;
self.dgo.xGB=self.xNE;
self.dgoAgent=opener.dgoAgent;
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
'/init.html').toString();
var XwX=opener;
XwX.XGH(self,
self.document.getElementById("trainer_gui_frame"),
null,Xwd);
self.frames['trainer_gui_frame'].location.replace(XRY);}
var Xw4=null;
function Xwd(){
self.xNE.Xy7=self.frames.trainer_gui_frame.GCONF;
self.xNE.Xy7.xoN=self.xNE.xoN;
readjustSizes(false);
var XJf=self.frames['trainer_gui_frame'];
var XwX=opener;
Xw4=self.dgoAgent.Xfn().X7p(XJf,
new XwX.XAZ(self.dgoAgent,null),self.xNE.xvO,self.xNE.Xy7.x,self.xNE.Xy7.y,self.xNE.Xy7.width,self.xNE.Xy7.height);
Xwe(true);}
var Xw0=false;
function Xwe(Xy6){
opener.xA7(self,self.document.body,'resize',readjustSizes,0);
opener.xA7(self,self.document.body,'unload',XwW,0);
readjustSizes(Xy6);
Xw0=false;
if(xAX){var Xbm=xAX;
var XwG=top;
var X1K=function(){
Xbm.exec('DHtml_openWindowSecondary_execCb_',XwG);};
opener.setTimeout(X1K,100);}
return true;}
function XwW(XDx){
if(!Xw0){
var XwX=opener;
var XfQ=self.dgoAgent.Xd6();
if(XfQ){
var XYc=XfQ.Xd7(window);
var XVm=XfQ.XdV(XYc);
if(XVm){
Xw0=true;
var XMN=self.dgoAgent.x6b();
if(XMN){self.dgoAgent.x6b().Xwq(XVm.XVz());
XVm.Xeh();
XVm.close();
opener.dgo53();}}}}
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
