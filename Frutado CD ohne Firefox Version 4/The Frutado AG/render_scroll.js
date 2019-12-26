//
//
function XUl(XCI,XCt){
if(!XCI)return;
this.xfK=X3B('','scroll');
XLD.XHO(this,XCI,XCt);
var xRC=XCI.XRN().XMQ;
var xSC=XCI.XRN().XMR;
var x,y;
switch(XCt.Xo().toLowerCase()){
case '*':x=-1;y=-1;break;case 'nw':x=0;y=0;break;
case 'n':x=xRC;y=0;break;
case 'ne':x=1;y=0;break;
case 'e':x=1;y=xSC;break;
case 'se':x=1;y=1;break;
case 's':x=xRC;y=1;break;
case 'sw':x=0;y=1;break;
case 'w':x=0;y=xSC;break;
case 'c':
default:x=xRC;y=xSC;break;}
this.xFR=x;
this.xeS=y;
this.xLO=XCt.XVV();
this.XXa=(this.xUi==-1);}
function XUm(){
XUl.prototype=new XLD;
XUl.prototype.XUu=true;
XUl.prototype.XUh=function(XUa){
this.XUv=0;
if(this.XXa){
this.XCI.xTN(XAA);}
return true;}
XUl.prototype.XUU=function(XUa,XU2){
this.XUv=XU2;
this.xb1();
return true;}
XUl.prototype.XUi=function(XUa){
this.XUv=null;
this.XVE=null;this.XVD=null;this.XVC=null;
if(this.XXa&&this.XCI.XFV()==XAA){
this.XCI.xTN(XA0);}
this.XCI.x6b().remove(this);
return true;}
XUl.prototype.toString=function(){
var xbK=XLD.prototype.toString.XHO(this);
with(this){
xbK+=',pos:'+xFR+','+xeS+
(this.xLO?',force':',noforce')+
(this.XXa?',autodur':',noautodur');}
return 'RenderScroll={'+xbK+'}';}
XUl.prototype.XUv=null;
XUl.prototype.xFR=null;XUl.prototype.xeS=null;XUl.prototype.xLO=true;XUl.prototype.XXa=false;XUl.prototype.XVE=null;XUl.prototype.XVD=null;XUl.prototype.XVC=null;
XUl.prototype.x4o=function(x5g){
var XM6=(this.x6U()==null);
if(!this.XVE){
var xbK='Scroll refresh():No scroll data';
dgo7.Xpr('R '+xbK,'error');
return false;}
var XVF=0;var XVG=Math.floor(this.XVD*this.XUv+0.5);
var xJO=this.XVE.scroll;
var xVF,xWF,XUS;
for(var i=xJO.length-1;i>=0;--i){
xVF=xJO[i].left-xJO[i].x1K.scrollLeft;
xWF=xJO[i].top-xJO[i].x1K.scrollTop;
if(XVF<XVG){
XUS=Math.min(1,(XVG-XVF)/this.XVC[i]);
xJO[i].x1K.scrollLeft+=Math.floor(xVF*XUS+0.5);
xJO[i].x1K.scrollTop+=Math.floor(xWF*XUS+0.5);}
XVF+=this.XVC[i];}
XM6&&this.XL0();
return true;}
XUl.prototype.x4f=function(x5g){
var XWA=this.XCI.XRN();
this.XCI.x6b().X8E(this);
if(!this.XVE){
var XFs=this.xLO;
if(!XFs){
this.XVE=XJR(
x5g.xbF,this.xVG,this.xFR,this.xeS,false);
if(this.XVE.scroll.length>0){
XFs=true;}}
if(XFs){
this.XVE=XJR(
x5g.xbF,this.xVG,this.xFR,this.xeS,true);}
var xJO=this.XVE.scroll;
this.XVC=[];
this.XVD=0;
var xVF,xWF;
for(var i=0;i<xJO.length;++i){
xVF=Math.abs(xJO[i].x1K.scrollLeft-xJO[i].left);
xWF=Math.abs(xJO[i].x1K.scrollTop-xJO[i].top);
this.XVC[i]=xVF+xWF;
this.XVD+=xVF+xWF;}}
if(this.XXa){
this.xUi=this.XVD*4;
XWA.xuQ>=2&&this.XCI.Xpr('R scroll auto duration='+
this.xUi+'('+this.XVD+')');}
if(this.xUi>100){
this.XCI.x6b().XU6().add(this,this.xUi,
XWA.xWP-0,XWA.XTw?0:XrQ);}
else{
this.XUv=1;
this.xb1();
this.XCI.x6b().remove(this);}
return true;}
XUl.prototype.x4r=function(XVK){
this.XCI.x6b().XU6().remove(this);
return true;}}
if(self.XI7){XI7.XJB(new XIX('../render_scroll.js',
['../render_base.js','../render_container.js','animation.js'],
XUm));}
else{
XUm();}

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
