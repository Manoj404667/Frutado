//
var X0a=false;
var Xjl=false;
var XSN=true;
var X9S=parseFloat(navigator.userAgent.substr(
navigator.userAgent.indexOf('rv:')+3))<1.7;
var XMY=parseFloat(navigator.userAgent.substr(
navigator.userAgent.indexOf('rv:')+3))>=1.8;
var Xj4=true;
function Xj3(){}
function Xbo(XbL){
try{
var x=XbL.src;}catch(e){
return 'frameElement access exception';}
return '';}
var X8g=/^([0-9]*)(.*)$/;
function XEA(xcF,XM0){
var xkM={x:0,y:0};
if(xcF.tagName=='BODY'||xcF.tagName=='FRAMESET'){
if(XM0){
xkM.x-=(xcF.scrollLeft||0);
xkM.y-=(xcF.scrollTop||0);
var xHL=xcF.parentNode;
if(xHL&&xHL.tagName=='HTML'){
xkM.x-=(xHL.scrollLeft||0);
xkM.y-=(xHL.scrollTop||0);}}
return xkM;}
if(xcF.tagName=='HTML'){
if(XM0){
xkM.x-=(xcF.scrollLeft||0);
xkM.y-=(xcF.scrollTop||0);
var x4E=XbT(xcF);
var XLn=x4E?x4E.body:null;
if(XLn){
xkM.x-=(XLn.scrollLeft||0);
xkM.y-=(XLn.scrollTop||0);}}
return xkM;}
var x6L=[];
var X9U=(xYD(xcF,['position'],x6L)
?x6L[0]=='absolute':false);
var XuI=false;
var i,xHL,xbn;
var e=xcF;
while(e){
xHL=e.offsetParent;
if(X9S){xkM.x+=Math.max(0,e.offsetLeft);
xkM.y+=Math.max(0,e.offsetTop);}
else{xkM.x+=e.offsetLeft;
xkM.y+=e.offsetTop;}
if(xHL&&!X9S&&(xHL.tagName=='DIV'||
xHL.style.position!='static'||
xHL.tagName=='BODY'||xHL.tagName=='FRAMESET'))
{
if(xYD(xHL,['position','borderLeftWidth','borderTopWidth',
'paddingLeft','paddingTop','marginLeft','marginTop',
'borderLeftStyle','borderTopStyle'],
x6L))
{
for(i=1;i<x6L.length-2;++i){
xbn=x6L[i].match(X8g);
x6L[i]=(xbn[2]=='px'?xbn[1]-0:0);}
if(x6L[0]=='absolute'||x6L[0]=='relative'){
if(x6L[0]=='absolute'){
X9U=true;
XuI=false;}
else{
XuI=true;}
xkM.x+=x6L[1];xkM.y+=x6L[2];}
else if(xHL.tagName=='BODY'||xHL.tagName=='FRAMESET'){
if(X9U&&!XuI){
xkM.x+=x6L[1];
xkM.y+=x6L[2];}
else{
if(XMY){
if(x6L[7].indexOf('none')>=0){
xkM.x+=x6L[1];}
else{
xkM.x+=x6L[1]*2;}
if(x6L[8].indexOf('none')>=0){
xkM.y+=x6L[2];}
else{
xkM.y+=x6L[2]*2;}}
else{
xkM.x+=x6L[1]*2;
xkM.y+=x6L[2]*2;}}}}
else{}}
e=xHL;}
xHL=xcF.parentNode;
while(xHL&&xHL.tagName&&(XM0||(xHL.tagName!='BODY'&&
xHL.tagName!='HTML'&&xHL.tagName!='FRAMESET')))
{
xkM.x-=(xHL.scrollLeft||0);
xkM.y-=(xHL.scrollTop||0);
xHL=xHL.parentNode;}
return xkM;}
function Xn2(XF2,xEL){
var XNz=(xEL||0);
var xd2={};
if(XNz & 3){var xUG=XF2.ownerDocument.defaultView;
if(!xUG||XSS(xUG)){
return{x:0,y:0};}
xd2.x=xUG.innerWidth||0;
xd2.y=xUG.innerHeight||0;}
else if(XNz & 4){xd2.x=Math.max(XF2.scrollWidth,XF2.offsetWidth,0);
xd2.y=Math.max(XF2.scrollHeight,XF2.offsetHeight,0);}
else{
xd2.x=0;
xd2.y=0;}
return xd2;}
function XLr(x9Q,XbB,XC0,xyO){
XbB.dgo21||(XbB.dgo21=new Xbn
);
XbB.dgo21.add(XC0);
if(xyO){XbB.innerHTML=xyO;
XbB.xyO=xyO}
if(x9Q.XbD){
x9Q.XbD.XSl(XbB);
x9Q.XbD[x9Q.XbD.length]=XbB;
if(xyO){XWo(x9Q);}}
else{
x9Q.XbD=[];
x9Q.XbD[x9Q.XbD.length]=XbB;
XWo(x9Q);}}
function XWo(x9Q){
var x8Q=typeof(x9Q)=='object'?x9Q:this;
if(x8Q.XbD.length<=0){
return;}
var Xbl=x8Q.XbD.concat();
var Xjz=[];
var XpU=0;
var XbC=x8Q.document.styleSheets;
var xOJ,XZL,i,ii,xoQ;
for(i=0;i<Xbl.length;++i){
if((xOJ=Xbl[i])&&xOJ.dgo21){
if(xOJ.tagName=='STYLE'){
try{
if(xOJ.xyO){
xoQ=true;}
else{
xoQ=false;}}
catch(xaw){xoQ=false;}
if(xoQ){
++XpU;
Xjz[Xjz.length]=xOJ;}
else{}}
else{
for(ii=0;ii<XbC.length;++ii){
XZL=XbC[ii];
try{
xoQ=typeof(XZL.cssRules)=='object'&&XZL.cssRules&&
typeof(XZL.cssRules.length)=='number';}
catch(xaw){xoQ=false;}
if(xoQ){
if((XZL.href+'')==(xOJ.href+'')){
++XpU;
Xjz[Xjz.length]=xOJ;}}
else{}}}}
else{
++XpU;}}
for(i=0;i<Xjz.length;++i){
xOJ=Xjz[i];
xOJ.dgo21&&xOJ.dgo21.exec('css loaded',xOJ);
xOJ.dgo21=null;}
if(XpU>=x8Q.XbD.length){
x8Q.XbD=[];}
else{
window.setTimeout(XWo,50,x9Q);}}
function xYD(XGT,x1M,xEO){
if(!XGT||!XGT.tagName||!XGT.ownerDocument||!XGT.style){
return false;}
var style=XGT.ownerDocument.defaultView.getComputedStyle(XGT,'');
var name;
if(style){for(var i=0;i<x1M.length;++i){
name=x1M[i];
if(XGT.style[name]){
xEO[i]=XGT.style[name];}
else{
try{
xEO[i]=style[name];}
catch(xGF){
xEO[i]=style.getPropertyValue(name);}}}}
return true;}
function XOm(XRG,xFO){
var xUG;
var XPo=(XRG.rows?'borderTop':'borderLeft');
if(xFO){
XRG.frameBorder='yes';
XRG.frameSpacing='yes';
XRG.border='3';}
else{
XRG.frameBorder='no';
XRG.frameSpacing='no';
XRG.border='0';}
for(var i=1;i<XRG.childNodes.length;++i){
var xUG=XRG.childNodes[i];
if(xUG.nodeType==1&&xUG.tagName=='FRAME'){
XAa(xUG.style,XPo,(xFO?xFO:'0px'));}}
return true;}
function XT2(XDx){
if(!this.dgo35){
return false;}
++XrA;
this.dgo35.exec('frameElement onload',this);
return true;}
function XGH(
x9Q,XbL,XCZ,XCY,XKQ)
{
XbL.dgo35=new XAZ(XCZ,XCY);
XbL.removeEventListener('load',XT2,true);
XbL.addEventListener('load',XT2,true);
return true;}
function XVo(XbL){
XbL.dgo35=null;
XbL.removeEventListener('load',XT2,true);
return true;}
function XQG(xGQ,x9Q,xcF){
var x7C;
switch(xGQ){case 'onkeypress':
case 'onkeydown':
case 'onkeyup':
x7C='KeyEvents';
break;
case 'onclick':
x7C='MouseEvents';
break;
case 'on???':
x7C='MouseScrollEvents';
break;
case 'onblur':
case 'onchange':
default:
x7C='HTMLEvents';
break;
case 'onscroll':
x7C='';
break;}
var xd2;
var xrF=x9Q.document.createEvent(x7C||'HTMLEvents');
xrF.initEvent(xGQ.substr(2),true,false);
if(x7C){
xd2=xcF.dispatchEvent(xrF);}
else{
var X1K=xcF[xGQ]||null;
if((typeof(X1K)=='function'||typeof(X1K)=='object')&&
X1K&&X1K.call)
{
xrF=XTd(xrF);
xrF.target=xcF;
try{
xd2=X1K.call(xcF,xrF);}catch(xa8){}}
else{
xd2=false;}}
return xd2;}
var Xpv=
['1px','10px','10px','12px','14px','18px','24px','38px'];
X2F='pointer';
function Xqh(xVG){
try{xVG&&xVG.getSelection().collapse();}
catch(xa8){}}
var XnB=';scroll;resize;unload;beforeunload;';
function XP3(x9Q,XGT,x5c){
var xd2=XGT;
if(x5c.substr(0,3)=='key'){
if(typeof(x9Q.history)=='object'&&
typeof(x9Q.frames)=='object'&&
typeof(x9Q.document)=='object'&&x9Q.document&&
(XGT==x9Q||XGT==x9Q.document.body))
{
xd2=x9Q.document;}}
else if(XnB.indexOf(';'+x5c+';')>=0)
{
if(typeof(x9Q.history)=='object'&&
typeof(x9Q.frames)=='object'&&
typeof(x9Q.document)=='object'&&x9Q.document&&
(XGT==x9Q||XGT==x9Q.document.body))
{
xd2=x9Q;}}
return xd2;}
function xCs(){
try{
netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');}
catch(e){
try{
netscape.security.PrivilegeManager.enablePrivilege(
'UniversalPreferencesRead UniversalPreferencesWrite');
navigator.preference("signed.applets.codebase_principal_support",true);
netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');}
catch(xaw){alert('Cannot set window in full screen mode.\n\n'+
'To allow automatic full screen mode,\n'+
'change the setting "signed.applets.codebase_principal_support"\n'+
'in "about:config" to true!');
return false;}}
try{
const xCr='@mozilla.org/appshell/window-mediator;1';
const nsIWindowMediator=Components.interfaces.nsIWindowMediator;
var xCu=Components.classes[xCr].getService(nsIWindowMediator);
var xCt=xCu.getMostRecentWindow('navigator:browser');
xCt.fullScreen=true;
xCt.toolbar.visible=false;
xCt.statusbar.visible=false;
xCt.menubar.visible=false;
xCt.locationbar.visible=false;
xCt.personalbar.visible=false;
xCt.directories.visible=false;
xCt.BrowserFullScreen();}
catch(xa8){
alert('Cannot set window in full screen mode.\n\n'+
'To allow automatic full screen mode,\n'+
'change the setting "signed.applets.codebase_principal_support"\n'+
'in "about:config" to true!');
return false;}
return true;}
function X8F(){}
if(self.XI7){XI7.XJB(
new XIX('dhtml_standard.js',['dhtml.js'],X8F));}
else{
X8F();}

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
