//
var Xjl=parseFloat(navigator.appVersion.substr(
navigator.appVersion.indexOf('MSIE ')+5))==5.5;
var X0a=parseInt(navigator.appVersion.substr(
navigator.appVersion.indexOf('MSIE ')+5))>=7;
var XSN=false;
var X9S=false;
var XMY=false;
var Xj4=true;
function Xj3(xtg){
var XLw=Xj4;
Xj4=xtg;
return XLw;}
function Xbo(XbL){
if(typeof(XbL.src)=='unknown'){
return 'frameElement.src unknown';}
return '';}
var X8g=/^([0-9]*)(.*)$/;
function XEA(e,XM0){
var xkM={x:0,y:0,xRC:0,xSC:0};
if(e.tagName=='BODY'||e.tagName=='FRAMESET'){
if(XM0){
xkM.x-=(e.scrollLeft||0);
xkM.y-=(e.scrollTop||0);
var xHL=e.parentNode;
if(xHL&&xHL.tagName=='HTML'){
xkM.x-=(xHL.scrollLeft||0);
xkM.y-=(xHL.scrollTop||0);}}
else{
xkM.x=0;
xkM.y=0;}}
else if(e.tagName=='HTML'){
if(XM0){
xkM.x-=(e.scrollLeft||0);
xkM.y-=(e.scrollTop||0);
var x4E=XbT(e);
var XLn=x4E?x4E.body:null;
if(XLn){
xkM.x-=(XLn.scrollLeft||0);
xkM.y-=(XLn.scrollTop||0);}}
else{
xkM.x=0;
xkM.y=0;}}
else if(Xj4&&
typeof(e.getBoundingClientRect)!='undefined')
{
var r=e.getBoundingClientRect();
xkM.x=r.left;
xkM.y=r.top;
if(!XM0){
var xHL=e;
while(xHL&&xHL.tagName){
if(xHL.tagName=='BODY'||xHL.tagName=='HTML'){
xkM.x+=xHL.scrollLeft;
xkM.y+=xHL.scrollTop;}
xHL=(xHL.tagName=='HTML'?null:xHL.parentNode);}}}
else{
var x6L=[];
		var xbF=e;
var i,xHL,xoQ,XnM,XnQ;
		while(e){
			xHL=e.offsetParent;
			xkM.x+=e.offsetLeft;
			xkM.y+=e.offsetTop;
if(xHL&&xHL.currentStyle.display=='block'&&
(XM0||(
xHL.tagName!='BODY'&&xHL.tagName!='HTML'&&
xHL.tagName!='FRAMESET')))
{
xoQ=xHL.currentStyle.borderLeftWidth.match(
X8g);
XnM=(xoQ[2]=='px'?xoQ[1]-0:0);
xoQ=xHL.currentStyle.borderTopWidth.match(
X8g);
XnQ=(xoQ[2]=='px'?xoQ[1]-0:0);
		xkM.x+=XnM;
	 	xkM.y+=XnQ;}
			e=xHL;
		}
xHL=xbF.parentNode;
while(xHL&&xHL.tagName&&(XM0||(xHL.tagName!='BODY'&&
xHL.tagName!='HTML'&&xHL.tagName!='FRAMESET')))
{
xkM.x-=(xHL.scrollLeft||0);
xkM.y-=(xHL.scrollTop||0);
xHL=xHL.parentNode;}}
return xkM;}
function Xn2(XF2,xEL){
var XNz=(xEL||0);
var xpK=(XF2.ownerDocument&&
XF2.ownerDocument.compatMode&&
XF2.ownerDocument.compatMode=='CSS1Compat'
?XDz(XF2):XF2);
var xd2={};
if(XNz & 1){xd2.x=xpK.clientWidth||xpK.offsetWidth||0;
xd2.y=xpK.clientHeight||xpK.offsetHeight||0;}
else if(XNz & 2){xd2.x=Math.max(xpK.clientWidth,xpK.offsetWidth,0);
xd2.y=Math.max(xpK.clientHeight,xpK.offsetHeight,0);}
else if(XNz & 4){xd2.x=Math.max(xpK.scrollWidth,xpK.offsetWidth,0);
xd2.y=Math.max(xpK.scrollHeight,xpK.offsetHeight,0);}
else{
xd2.x=0;
xd2.y=0;}
return xd2;}
function XLr(x9Q,XbB,XC0){
XbB.dgo21||(XbB.dgo21=new Xbn
);
XbB.dgo21.add(XC0);
XbB.dgoc=x9Q;
if(XbB.readyState=='complete'){
XWo.call(XbB);
return;}
XbB.onreadystatechange=XWo;}
function XWo(){
if(this.readyState!='complete'){
return true;}
if(this.dgo21){
var Xjj=this;
var X1K=function(){
Xjj.dgo21.exec('css loaded',this);
Xjj.dgo21=null;};
this.dgoc.setTimeout(X1K,1);
this.dgoc=null;}
return true;}
function xYD(XGT,x1M,xEO){
if(!XGT||!XGT.style){
return false;}
var style=XGT.currentStyle||XGT.style;
for(var i=0;i<x1M.length;++i){
if(style[x1M[i]]){
xEO[i]=style[x1M[i]];}
else{
xEO[i]='';}}
return true;}
function XOm(XRG,xFO){
var xUG;
var XPo=(XRG.rows?'borderTop':'borderLeft');
var xbK='';
if(xFO){
xbK+='fs set PRE '+XRG.frameBorder+','+
XRG.frameSpacing+','+XRG.border;
XRG.frameBorder='yes';
XRG.frameSpacing='4';
XRG.border='1';
xbK+='\nfs set POST '+XRG.frameBorder+','+
XRG.frameSpacing+','+XRG.border;}
else{
xbK+='fs unset PRE '+XRG.frameBorder+','+
XRG.frameSpacing+','+XRG.border;
XRG.frameBorder='no';
XRG.frameSpacing='0';
XRG.border='0';
xbK+='\nfs unset POST '+XRG.frameBorder+','+
XRG.frameSpacing+','+XRG.border;}
for(var i=1;i<XRG.childNodes.length;++i){
xbK+='\nFrame '+i+':PRE '+XPo+'="'+
XRG.childNodes[i].style[XPo];
XAa(XRG.childNodes[i].style,
XPo,(xFO?xFO:'0px'));
xbK+='" POST "'+XRG.childNodes[i].style[XPo]+'"';}
return true;}
function XGH(
x9Q,XbL,XCZ,XCY,XKQ)
{
var options=XKQ||0;
XbL.dgo45=options;
XbL.dgo35=new XAZ(XCZ,XCY);
var xa7=xA7(x9Q,XbL,
'readystatechange',XT2,
xA3);
if(options & XoE){
XoF(XbL);
XKm(XbL);}
return xa7;}
function XVo(XbL){
(XbL.dgo45 &
XoE)&&
XoI(XbL);
XbL.dgo35=null;
return xA8(XbL,
'readystatechange',XT2,
xA4);}
function XoO(XbL){
return XbL.dgo43===true;}
function XKm(XbL){
if(XbL.readyState!='complete'&&
(XbL.readyState!='interactive'||
!XbL.dgo43)&&
XbL.dgoX==null&&
typeof(XbL.contentWindow.document)=='object')
{
var xUG=XbL.contentWindow;
XbL.dgoX=1;
XbL.XpQ=xUG.location.href+'';
XbL.dgoV=
new Date(xUG.document.lastModified).valueOf();
XbL.dgo47=function(){
X6l(XbL);};
XbL.dgoY=xUG.parent.setTimeout(
XbL.dgo47,333);}}
function XoH(XbL,XoK){
if(!XSS(XbL)){if(XbL.dgoX!=null){
XbL.dgoX=null;
XbL.dgo47=null;
XbL.XpQ=null;
XbL.dgoV=null;
if(XbL.dgoY){
var xHL=XoK?XbL.dgoc
:XbL.contentWindow.parent;
xHL&&xHL.clearTimeout(XbL.dgoY);
XbL.dgoY=null;}}}}
function X6l(XbL){
if(typeof(XbL.contentWindow)!='object'){
XoH(
XbL,true);
return;}
var xUG=XbL.contentWindow;
if(!xUG||typeof(xUG.closed)!='boolean'||xUG.closed){
XoH(
XbL,true);
return;}
if(typeof(xUG.document)!='object'||!xUG.document||
typeof(xUG.document.lastModified)!='string')
{
XoH(XbL);
return;}
var XoL=XbL.dgoV||0;
var current=new Date(xUG.document.lastModified).valueOf();
if(current<=XoL+1000){if(xUG.location.href==(XbL.XpQ||'')){
if(XbL.readyState!='loaded'&&
XbL.readyState!='interactive')
{
XoH(XbL);
return;}
XbL.readyState=='interactive'&&
XT2.call(
XbL,{});}
else{XbL.dgoX=1;}}
else{
if(++XbL.dgoX>10){
XoH(XbL);
XbL.dgo43=false;
if(typeof(XbL.document)=='object'){
XbL.document.close();}
if(typeof(XbL.contentWindow)=='object'&&
XbL.contentWindow&&
typeof(XbL.contentWindow.document)=='object'&&
XbL.contentWindow.document)
{
XbL.contentWindow.document.close();}
XT2.call(
XbL,{});
return;}}
XbL.dgoY=xUG.parent.setTimeout(
XbL.dgo47,333);}
function XoF(XbL){
if(typeof(XbL.contentWindow)=='object'&&
XbL.contentWindow&&
typeof(XbL.contentWindow.document)=='object'&&
XbL.contentWindow.document)
{
var x8Q=XbL.contentWindow;
var x4E=x8Q.document;
if(x4E.dgo46){
x4E.write=XoG;}
else{
//
x4E.dgo46=x4E.write;
x4E.write=XoG;}}}
function XoI(XbL){
XbL.dgo43=null;
if(typeof(XbL.contentWindow)=='object'&&
XbL.contentWindow&&
typeof(XbL.contentWindow.document)=='object'&&
XbL.contentWindow.document)
{
var x4E=XbL.contentWindow.document;
var XGB=x4E.dgo46;
x4E.dgo46=null;
x4E.write=XGB;}}
function XoG(xyO){
var x8Q=typeof(this.parentWindow)=='object'&&this.parentWindow
?this.parentWindow:null;
var frameElement=(x8Q?XPB(x8Q):null);
if(frameElement){
frameElement.readyState!='interactive'&&
(frameElement.dgo43=true);}
return this.dgo46(xyO);}
function XT2(){
if(this.readyState=='interactive'){
if(typeof(this.contentWindow)=='object'&&
this.contentWindow&&
typeof(this.contentWindow.document)=='object'&&
this.contentWindow.document)
{
var x4E=this.contentWindow.document;
if(this.dgo43){
this.dgo35&&this.dgo35.exec(
'frameElement readyState==interactive+doc.write',this);}
else{
(this.dgo45 &
XoE)&&
XKm(this);}}
return true;}
if(this.readyState=='loading'){
this.dgo43=false;}
if(this.readyState!='complete'){
(this.dgo45 &
XoE)&&
XKm(this);
return true;}
this.dgo43=false;
XoH(this);
(this.dgo45 &
XoE)&&
XoF(this);
if(!this.dgo35){
return false;}
this.dgo35.exec('frameElement readyState==complete',this);
return true;}
function XQG(xGQ,x9Q,xcF){
var xd2;
var xrF=x9Q.document.createEventObject();
if(xGQ=='onscroll'){
if(Xjl){
var X1K=xcF[xGQ]||null;
if((typeof(X1K)=='function'||typeof(X1K)=='object')&&
X1K&&X1K.call)
{
xrF.type=xGQ.substr(2);
xrF.srcElement=xcF;
try{
xd2=X1K.call(xcF,xrF);}catch(xa8){}}
else{
xd2=false;}}}
else{
xd2=xcF.fireEvent(xGQ,xrF);}
return xd2;}
var Xpv=
['1px','10px','12px','16px','18px','24px','32px','48px'];
X2F='hand';
function Xqh(xVG){
try{xVG&&xVG.document&&xVG.document.selection.empty();}
catch(xa8){}}
var XtV=';unload;beforeunload;click;dblclick;'+
'contextmenu;resize;loaded;keydown;keypress;keyup;';
var XnB='';
function XP3(x9Q,XGT,x5c){
var xd2;
if(x9Q==XGT&&XGT==x9Q&&
typeof(x9Q.history)=='object'&&
typeof(x9Q.frames)=='object'&&
typeof(x9Q.document)=='object'&&
typeof(x9Q.document.body)=='object'&&
XtV.indexOf(';'+x5c+';')>=0)
{
xd2=x9Q.document.body;}
else{
if(typeof(x9Q.history)=='object'&&
typeof(x9Q.frames)=='object'&&
typeof(x9Q.document)=='object'&&
typeof(x9Q.document.body)=='object'&&
x9Q.document.body==XGT&&
XGT==x9Q.document.body&&
XnB.indexOf(';'+x5c+';')>=0)
{
xd2=x9Q;}
else{
xd2=XGT;}}
return xd2;}
if(self.XI7){XI7.XJB(
new XIX('dhtml_explorer.js',['dhtml.js']));}

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
