//
//
function XLb(XCI,XCt){
var type=null;
if(!XCt.Xeti){
XCI.Xpr('R No event ID:'+XCt,'error');
return null;}
var x5Y=XCt.Xeti();
var xAe=((typeof(XCt.getName)=='function'||
typeof(XCt.getName)=='object')?
XCt.getName():'');
var x1K;
if(x5Y==XAk){
x1K=new XRx(XCI,XCt);}
else if(x5Y==XAl){
x1K=new XRy(XCI,XCt);}
else if(x5Y==XAm){
x1K=((typeof(XCt.Xdu)=='function'||
typeof(XCt.Xdu)=='object')&&
((XCt.Xdu()-0)>100||
(XCt.Xdu()-0)==-1)
?new XVQ(X3B(xAe,'pu'),
XCI,XCt)
:new XRx(XCI,XCt));}
else if(x5Y==XAn){
x1K=new XRz(XCI,XCt);}
else if(x5Y==xA9){
var type=XCt.Xef();
switch(type){
case 'box':
x1K=new XLd(type,
X3B(xAe,type),XCI,XCt);
break;
case 'flash':case 'frame':
case 'zoom':
case 'zoom_in':
case 'zoom_out':
x1K=new XLd(type,
X3B(xAe,'hl'),XCI,XCt);
break;
case 'line':
x1K=new XLe(type,
X3B(xAe,type),XCI,XCt);
break;
case 'underline':
x1K=new XLe(type,
X3B(xAe,'hl'),XCI,XCt);
break;
case 'underline2':
x1K=new XLe(xAe?'underline':'line',
X3B(xAe,'hl'),XCI,XCt);
break;
default:
XCI.Xpr('R Unknown highlight event:'+XCt,'error');
break;}}
else if(x5Y==X2u){
x1K=new X3S(XCI,XCt);}
else if(x5Y==XAr){
x1K=new XDM(XCI,XCt);}
else if(x5Y==Xzj){
x1K=new XDM(XCI,XCt);}
else if(x5Y==XAu){
x1K=new XVQ(
X3B(xAe,'mou'),XCI,XCt);}
else if(x5Y==XAx||x5Y==XBE){
x1K=new Pause(XCI,XCt);}
else if(x5Y==XAy){
x1K=new XUl(XCI,XCt);}
else if(x5Y==XBB){
if(XCt.XVz()=='-2'){
x1K=new XaY(
X3B(xAe,'task'),XCI,XCt);}
else{
if((typeof(XCt.Xsy)!='function'&&typeof(XCt.Xsy)!='object')
||
!XCt.Xsy().xcS
){
x1K=new XLI(
X3B(xAe,'bu'),XCI,XCt);}
else{
x1K=new XVQ(
X3B(xAe,'bu'),XCI,XCt);}}}
else if(x5Y==X2w){
x1K=new X39(XCI,XCt);}
else{
XCI.Xpr('R Unknown event ID:'+XCt,'error');
return null;}
if(x1K){
return x1K;}
XCI.Xpr('R Object not created:'+XCt,'error');
return null;}
var X3A={};
var X3C=/[^-a-zA-Z0-9]/g;
function X3B(Xspp,xGQ){
if(Xspp){
return 'dgoRender'+(xGQ?'_':'!_')+
Xspp.replace(X3C,'_');}
if(!xGQ)
return null;
if(xGQ=='bu'||xGQ=='hl'||xGQ=='mou'||
xGQ=='pu'||xGQ=='task')
{
return 'dgoRenderDefault_'+xGQ;}
var XFi=X3A[xGQ];
if(typeof(XFi)=='number'){
XFi=++X3A[xGQ];}
else{
X3A[xGQ]=1;
XFi=1;}
return 'dgoRender_'+xGQ+'_'+XFi;}
if(self.XI7){XI7.XJB(new XIX('../render.js',['../render_base.js']));}

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
