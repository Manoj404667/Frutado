
function XKA(XCI){
this.XCI=XCI;
this.XgM=new Array;
this.XgX=new Array;}
XKA.prototype={
x6K:false
,x5t:false
,Xa1:function(XC0){
this.XgI=function(){return XC0};this.Xm7(new Xa8());}
,XTQ:function(XC0){
this.XgI=function(){return XC0};this.Xm7(new XM7());}
,XLh:function(Xh8){
this.Xm7(new XRa(Xh8));}
,X7p:function(xVG,Xha,XgW,xFR,xeS,x7Q,xdH){
this.xVG=xVG;
this.Xha=Xha;
this.XgM.X67();
this.Xim=this.XgM.length;
var xqG=null;
xqG=new XyK(this,this.Xim,XgW);
xqG.X7p(this.xVG,xFR,xeS,x7Q,xdH);
this.XgM[this.Xim]=xqG;
if(this.xbw){
xqG.XUC(new XIN(this.xbw));}
if(this.XH3){
xqG.XUC(new XGa(this.XH3.Xi()));}
return xqG;}
,Xf1:function(Xim){
this.X7d();
if(Xim==0){this.XVp().Xoua(1021);}
for(t=0;t<this.XgM.length;t++){
if(this.XgM[t].XgJ()==Xim){
this.XgM[t]=null;
break;}}
this.XgM.X67();}
,XVp:function(){
return this.XCI;}
,Xfi:function(){
return new XAZ(this,this.XWU);}
,XRN:function(){
return this.XCI.XRN();}
,Xfw:function(Xii){
return new XAZ(this,this.XFG_,'',Xii);}
,Xfx:function(){
return this.XgM[0]?this.XgM[0]:null;}
,Xfy:function(){
return this.Xgg;}
,Xfz:function(){
return this.Xgv;}
,XgA:function(){
return new XAZ(this,this.XGM);}
,XgB:function(){
return new XAZ(this,this.XhY);}
,XgC:function(){
return new XAZ(this,this.Xh0);}
,XgF:function(){
return new XAZ(this,this.XiV);}
,XgI:function(){}
,XgR:function(XgQ){
this.XCI.Xd6().XcR('-1',XgQ);
this.Xha.exec();}
,Xg5:function(xbw){
this.xbw=xbw;
this.Xm7(new XIN(xbw));}
,Xpr:function(XGE,xGQ,xat){
this.XVp().Xpr(XGE,xGQ,xat);}
,Xhf:function(XH3){
this.XH3=XH3;
this.Xm7(new XGa(XH3.Xi()));}
,XiB:function(Xgg,Xgv){
this.Xgv=Xgv;
this.Xgg=Xgg;
this.Xm7(new Xaw());}
,xTN:function(XHY){
this.XHY=XHY;
this.Xm7(new XIQ(XHY));}
,XiD:function(XiS,XiO){
this.Xm7(new XGi(XiS,XiO));}
,XCI:null
,XfY:null
,XgM:null,XgX:null,Xgv:0
,Xgg:0
,Xim:0
,xbw:null
,XH3:null
,XWU:function(xrF){
if(xrF&&xrF.altKey&&this.XRN().XRk){
if(this.XRN().xDJ){
this.XVp().XSw(3);}
return;}
this.XVp().Xoua(1006);}
,X7d:function(){
for(t=0;t<this.XgM.length;t++){
try{
this.XgM[t]&&this.XgM[t].XgJ();}catch(xa8){
this.XgM[t]=null;}}
this.XgM.X67();}
,XFG_:function(xsF,Xii){
this.XVp().Xouj(Xii.Xi());}
,XGM:function(xrF){
this.XVp().Xoua(1005);}
,XhY:function(xrF){
if(xrF&&xrF.altKey){
if(this.XRN().xuQ>=2){
this.XVp().Xpr('X AUDIO--','user',2);}
this.XVp().XC1('-');}
else if(xrF&&xrF.shiftKey){
if(this.XRN().xuQ>=2){
this.XVp().Xpr('X AUDIO++','user',2);}
this.XVp().XC1('+');}
else{
this.XVp().Xoua(1003);}}
,Xh0:function(xrF){
if(xrF&&xrF.altKey){
if(this.XRN().xuQ>=2){
this.XVp().Xpr('X RESTART','user',2);}
var url=this.XVp().Xu().start().XCf();
url.XC2('');
xcI(url.toString());}
else{
this.XVp().Xoua(1001);}}
,Xm7:function(xsF){
var i,xkI;
for(i=0,xkI=this.XgM.length;i<xkI;i++){
this.XgM[i]&&this.XgM[i].XUC(xsF);}}
,Xh3:function(){
var i,xkI;
for(i=0,xkI=this.XgM.length;i<xkI;i++){
if(this.XgM[i].Xfq()>=XGG){
this.XgM[i].Xf1();}}}
,XiV:function(xrF){
if(xrF&&xrF.altKey){
if(this.XRN().xuQ>=2){
this.Xpr('X STOP with ALT Key pressed:show DOM helper UI','user',2);}
if(this.XRN().XkC){
this.XVp().XKx();}}
else if(xrF&&xrF.shiftKey){
if(xrF&&xrF.ctrlKey){
this.XVp().Xd6().Xck();}
else{
if(this.XRN().xuQ>=2){
this.Xpr('X STOP with SHIFT Key pressed:show logging','user',2);}
this.XVp().XHM();}}
else{
this.XVp().Xoua(1002);}}}
if(self.XI7){XI7.XJB(new XIX('../gui_controller.js',
['../gui.js','../gui_api.js']));}

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
