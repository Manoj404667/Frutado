//
var xNE;
var X86=false;
var XcJ=false;
function readjustSizes(Xy6){
var Xy5=false;
var XJf=parent.document.getElementById('trainer_gui_frame');
if(parseInt(XJf.style.height)>0&&parseInt(XJf.style.width)>0){
Xy5=true;}else{
parent.document.getElementById('trainer_gui_frame').style.width='100%';
parent.document.getElementById('trainer_gui_frame').style.height='100%';}
if(typeof(Xy6)!='undefined'&&
(Xy6==true||Xy6==false))
{
Xy5=Xy6;}
var XBi=Math.abs(xNE.xuQ-0);
isNaN(XBi)&&(XBi=false);
var xAJ=xNE.xAJ;
if(XRl&&!X0a){
var XLn=parent.document.body;}
else{
XLn=parent.document.documentElement;}
var w=(typeof(XLn.offsetWidth)=='undefined'?
parent.offsetWidth:parent.innerWidth||XLn.offsetWidth);
var h=(typeof(XLn.offsetHeight)=='undefined'?
parent.innerHeight:parent.innerHeight||XLn.offsetHeight);
var Xyd=0;
var Xye=0;
var Xyf=0;
var Xyc=0;
var Xy2=0;
var Xy3=0;
var Xy4=0;
var Xy1=0;
if(Xy5==true){
Xy9=xNE.Xy7.width;
Xy8=xNE.Xy7.height;}else{
Xy9='0';
Xy8='0';}
xNE.Xy7.x=xNE.Xy7.x||'0';
xNE.Xy7.y=xNE.Xy7.y||'0';
if(self.dgo.xGB.xAJ){
var Xwz=xNE.xqP
?xNE.xqP
:xNE.Xan;
var Xwb=parent.document.getElementById("trainer_library_frame");
if(!Xwb.dgoX_){
Xwb.dgoX_=self.dgo.xGB.XUy;}
Xwb.top='0px';
Xwb.height=(h-Xy1)+'px';
Xwb.width=Xwb.dgoX_+'px';
switch(xNE.Xy7.orientation.toLowerCase()){
case 'w':
var Xy0=parseInt(Xy9);
Xyf=w-parseInt(Xwb.dgoX_)-Xy0;
Xyc=h;
Xyd=parseInt(Xwb.dgoX_)+Xy0;
Xye=0;
Xy4=Xy0+'px';
Xy1=parseInt(Xy8)+'%';
Xy2=parseInt(Xwb.dgoX_)+'px';
Xy3='0px';
break;
case 'e':
Xyf=w-parseInt(Xwb.dgoX_)-parseInt(Xy9);
Xyc=h;
Xyd=parseInt(Xwb.dgoX_);
Xye=0;
Xy4=parseInt(Xy9)+'px';
Xy1=Xy8+'px';
Xy2=w-parseInt(Xy9)+'px';
Xy3='0px';
break;
case 'n':
Xyf=w-parseInt(Xwb.dgoX_);
Xyc=h-parseInt(Xy8);
Xyd=parseInt(Xwb.dgoX_);
Xye=parseInt(Xy8);
Xy4=w-parseInt(Xwb.dgoX_)+'px';
Xy1=parseInt(Xy8)+'px';
Xy2=parseInt(Xwb.dgoX_)+'px';
Xy3='0px';
break;
case 'f':
Xyf=w;
Xyc=h;
Xyd=parseInt(Xwb.dgoX_);
Xye=0;
Xy4=parseInt(Xy9)+'px';
Xy1=parseInt(Xy8)+'px';
Xy2=parseInt(Xwb.dgoX_)+parseInt(xNE.Xy7.x)+'px';
Xy3=parseInt(xNE.Xy7.y)+'px';
break;
case 's':
default:
var XyZ=parseInt(Xy8);
Xyf=w-parseInt(Xwb.dgoX_);
Xyc=h-XyZ;
Xyd=parseInt(Xwb.dgoX_);
Xye=0;
Xy4=w-parseInt(Xwb.dgoX_)+'px';
Xy1=XyZ+'px';
Xy2=parseInt(Xwb.dgoX_)+'px';
Xy3=h-XyZ+'px';
break;}
parent.document.getElementById(Xwz).style.left=Xyd+'px';
parent.document.getElementById(Xwz).style.top=Xye+'px';
parent.document.getElementById(Xwz).style.height=Xyc+'px';
parent.document.getElementById(Xwz).style.width=Xyf+'px';}
else{
var Xwz=xNE.xqP
?xNE.xqP
:xNE.Xan;
switch(xNE.Xy7.orientation.toLowerCase()){
case 'w':
Xyf=w-parseInt(Xy9);
Xyc=h;
Xyd=parseInt(Xy9);
Xye=0;
Xy4=parseInt(Xy9)+'px';
Xy1=parseInt(Xy8)+'%';
Xy2='0px';
Xy3='0px';
break;
case 'e':
Xyf=w-parseInt(Xy9);
Xyc=h;
Xyd=0;
Xye=0;
Xy4=Xy9+'px';
Xy1=Xy8+'px';
Xy2=w-parseInt(Xy9)+'px';
Xy3='0px';
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
Xy2='0px';
Xy3=(h-parseInt(Xy8))+'px';
break;}
parent.document.getElementById(Xwz).style.left=Xyd+'px';
parent.document.getElementById(Xwz).style.top=Xye+'px';
parent.document.getElementById(Xwz).style.height=Xyc+'px';
parent.document.getElementById(Xwz).style.width=Xyf+'px';}
parent.document.getElementById('trainer_gui_frame').style.height=Xy1;
parent.document.getElementById('trainer_gui_frame').style.top=Xy3;
parent.document.getElementById('trainer_gui_frame').style.width=Xy4;
parent.document.getElementById('trainer_gui_frame').style.left=Xy2;
return true;}
function XPd(){
dgoN.Xl('Phase V:Application Initialization','info',2);
xNE=self.dgo.xGB;
if(xNE.XBe=='lms'){
xNE.XBe=
dgoI.XOz()||'';
dgoN.Xl('LMS language:'+xNE.XBe);}
var Xh6=','+xNE.Xf2+',';
xNE.XBe=
Xw5(xNE.XBe);
if(Xh6.indexOf(','+xNE.XBe+',')>=0){
xNE.XLf=xNE.XBe;}
else{
if(Xh6.indexOf(','+xNE.XLf+',')<0){
xNE.XLf=
XOk(xNE.Xf2);}}
var xqE=dgo6.xNI(
'textatoms.'+xNE.XLf+'.txt').toString();
dgoN.Xl('Dict load "'+xqE+'" [cl:'+
xNE.XBe+']','',3);
if(!XP0(xqE,self,self,X3o,xNE.xBb)){
var xbK='Cannot load dictionary '+xqE;
xNE.xuQ>=2&&alert(xbK);
XPi('dict',xbK);
return false;}}
function X3o(X6k){
if(typeof(X6k)!='number'){
var xbK='Dict load:'+X6k;
xNE.xuQ>=2&&alert(xbK);
XPi('dict2',xbK);
return false;}
var lang=xNE.XBe||xNE.XLf;
dgoN.Xl('Dict custom load;lang='+lang,'',3);
var xa7=XXt(xNE.xyP,lang,
dgo6.xNI('').toString(),self,
self,XV4,
xNE.xBb);
if(xa7>0){return true;}
if(xa7!=0){
dgoN.Xl('Custom dictionary load:'+xa7,'warning');}
return XV4(0);}
function XV4(X6k){
if(typeof(X6k)!='number'){
var xbK='Dict custom load:'+X6k;
xNE.xuQ>=2&&alert(xbK);
XPi('dict-cust',xbK);
return false;}
var XJk=self.parent.frames.trainer_program_frame;
if(xNE.domain){
if(self.location.protocol=='http:'||
self.location.protocol=='https:')
{
dgoN.Xl('boot3:Change domain:'+
xNE.domain,'trace',3);
var xPL={domain:xNE.domain,
xas:self.parent,
XJk:XJk};
try{
if(XSN){
if(parent.document.domain.indexOf(xNE.domain)>=0){
parent.document.domain=xNE.domain;}}
XJp(self.parent,XPf,xPL);
if(XRl){
if(self.parent.document.domain.indexOf(xNE.domain)>=0){
self.parent.document.domain=xNE.domain;}}
if(XJk.document.domain.indexOf(xNE.domain)>=0){
XJk.document.domain=xNE.domain;}
XJk=self.parent.frames.trainer_program_frame;
dgoN.XSr(xNE.domain);
XI7.XJG(
XJk,parent.frames.trainer_dynloader_frame);
parent.dgoDOMAIN=xNE.domain;}
catch(xa8){
var xbK='Cannot set document.domain to "'+
xNE.domain+'":'+(new x6C(xa8));
XPi('domain',xbK);
return false;}
dgoN.Xl('boot3:Change domain done','trace',3);}}
if(!self.parent.frames.trainer_gui_frame.GCONF||
typeof(self.parent.frames.trainer_gui_frame.GCONF)!='object')
{
XPi('boot','No compatible GUI found.');
return;}
self.dgo.xGB.Xy7=self.parent.frames.trainer_gui_frame.GCONF;
self.dgo.xGB.Xy7.xoN=self.dgo.xGB.xoN;
xA7(parent,parent.document.body,'resize',readjustSizes,0);
readjustSizes(false);
var XLk=new XA1(XJk,xNE,self.dgo.XMW,
self.dgo6,(dgoN.XQk?null:dgoN),dgoI);
XLk.X9a=X9a;XLk.XWy=XWy;
XLk.XWe=XWe;
XLk.XPe=XPe;
XLk.XS2=XS2;
if(!XLk.x6K){
xNE.xuQ>=2&&alert(XLk.error);
XPi('load',XLk.error);
return false;}
if(XLk.XlH){
if(XLk.XlH.cfg_skin){
if(!X9w(XLk.XlH.cfg_skin,
self,
XLk.XlH,
XLk.XlH.Xak,
null,
true))
{
XLk.error=XLk.XlH.error+'|'+"Popup"+' ctor failed';
xNE.xuQ>=2&&alert(XLk.error);
XPi('load',XLk.error);
return false;}}
else{
XLk.xCB();}}
else{
XLk.XOe();}
XLk.error&&XLk.Xpr('Agent init:"'+XLk.error+'"','info');
if(!xNE.xhg&&!xNE.XTw){
self.onerror=function(xbK,url,xFJ){
XLk.Xl(true,false,'jserror',
xbK+' '+url+' line '+xFJ);
return true;}}
XLk.Xl(true,false,'tourlink',self.dgo.Url);
xNE.domain&&XLk.Xl(false,false,'domain',xNE.domain);
return true;}
function XS2(){if(!xNE.xAJ){
return this.X9a(null);}
var XRm=dgo6.xNI('skin/'+
(xNE.xTJ||'library')+'/navigator_library.html'+
(xNE.domain?'?dgoDOMAIN='+xNE.domain:''));
var frameElement=XPB(
self.parent.frames.trainer_library_frame);
XGH(
self.parent,frameElement,this,this.X9a);
dgoN.Xl('Load lib:'+XRm);
frameElement.src=XRm;}
function X9a(XbL){if(XbL){
XVo(XbL);
var XRr=new Templater(Templater_OPTIONS_NONE);
if(XRr.cfg_ok){
XRr.Xmj(xNE,dgo6.xNI('').toString());
XRr.cfg_apply(
XbL.contentWindow,Templater_OPTIONS_NONE);}
if(!XRr.cfg_ok){
var xbK='Lib translation:'+XRr.cfg_error;
xNE.xuQ>=2&&alert(xbK);
XPi('lib',xbK);
return false;}}
this.Xl(true,false,'applet',5010);
var XJf=self.parent.frames.trainer_gui_frame;
this.Xfn().X7p(XJf,
new XAZ(this,this.XWy),xNE.xvO,xNE.Xy7.x,xNE.Xy7.y,xNE.Xy7.width,xNE.Xy7.height);
this.Xlc().add(new XbY(
'AgentLoop',this,this.XWe,null,30000));
if(this.XFI_('ie','5')){
xA7(self,XJf.parent.document.body,'unload',XjA);
xA7(self,XJf.document.body,'unload',XjA);
xA7(self,XJf.document.body,'beforeunload',Xiz);}
else{xA7(self,XJf.parent,'unload',XjA);
xA7(self,XJf,'unload',XjA);
xA7(self,XJf,'beforeunload',Xiz);}
self.dgo.XOb.XPd=(new Date).valueOf();
for(var XT1 in self.dgo.XOb){
this.Xl(false,true,XT1,self.dgo.XOb[XT1]);}
self.dgoy=self.dgo.XM5;return true;}
function XWe(){if(!XcJ){
X86=true;
this.xwF('boot','GUI timed out after 30sec');
return;}}
function XWy(){if(X86){
return;}
XcJ=true;
this.Xpr('Phase VI:Start page','info',2);
var xVL=new XAJ(
this,this.XlH?self.parent.frames[1]:null);
xVL.xb0(this,XPe);
return true;}
function XPf(xVG,xaq){
if(xVG==xaq.xas){
dgoN.Xl('boot3:Do not yet set domain in parent frameset');}
else if(xVG==xaq.XJk){
dgoN.Xl('boot3:Do not yet set domain in program frame');}
else{
if(typeof(xVG.location)!='unknown'&&
(xVG.location.protocol=='http:'||
xVG.location.protocol=='https:'))
{
dgoN.Xl('boot3:set domain in '+
xVG.name+'='+xVG.location.href);
if(xVG.document.domain.indexOf(xaq.domain)>=0){
xVG.document.domain=xaq.domain;}}}
return true;}
function XPe(XGw){this.Xpr(
'Media Selector="'+XGw+'"','trace',3);
if(this.XlH){
if(this.XlH.TAPI){
this.XE6.Xls()['TAPI']=this.XlH.TAPI;
this.XlH.TAPI['ctx']=this.XE6.Xls();}
var x8Q=XQI(this.x9Q);
x8Q.moveTo(x8Q.screen.availWidth,x8Q.screen.availHeight);
if(x8Q.screenLeft<x8Q.screen.availWidth){
this.XlH.close();
this.Xpr('@ Window move to '+x8Q.screen.availWidth+
'failed. Current ScreenLeft:'+x8Q.screenLeft,'error');
this.error=XQK('TOK_SECURITY_WINDOW_POSITION_EXC');
this.xwF('boot',this.error);
return false;}}
this.X9a=null;
this.XWy=null;
this.XWe=null;
this.XPe=null;
this.XS2=null;
if(XGw!=null){
xNE.XCv=XGw;}
this.Xlf().Xls().cfg_onbeforeunload=new Array;
self.xXg=new Array;
this.Xpr('Run','info',1);
if(xNE.xuQ>=3){
alert('Configuration is:\n\r'+xNE);
var ctx=this.XE6.Xls();
if(ctx.dgox>0){
alert(ctx.toString());}}
var XSx;
if(xNE.xAJ){
this.XNn();
XSx=(xNE.xDJ&&!xNE.x3C?
1:2);}
else if(xNE.xBH){
this.Xpt(xNE.xBH);
if(this.XlH){if(this.XlH.TAPI){
this.XlH.TAPI.GAPI=this.XJ1().GAPI;
if(this.XlH.TAPI.GAPI&&
this.XlH.TAPI.GAPI.Tourstops)
{
this.XlH.show(true);
if(this.XlH.TAPI._INIT){
this.XlH.TAPI._INIT();}}
else{
var Xjj=this;
var X1K=function(){
Xjj.XlH.TAPI.GAPI=Xjj.XJ1().GAPI;
if(Xjj.XlH.TAPI.GAPI&&
Xjj.XlH.TAPI.GAPI.Tourstops)
{
Xjj.XlH.show(true);
if(Xjj.XlH.TAPI._INIT){
Xjj.XlH.TAPI._INIT();}}
else{
window.setTimeout(X1K,200);}}
window.setTimeout(X1K,200);}}
else{
this.XlH.show(true);}}
XSx=2;}
parent.frames.trainer_dynloader_frame.location.replace(
self.dgo.XzY+'jswidget/dynloader_blank.html');
this.XSw(XSx);
return true;}
if(self.XI7){XI7.XJB(new XIX('../boot3.js'));}

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
