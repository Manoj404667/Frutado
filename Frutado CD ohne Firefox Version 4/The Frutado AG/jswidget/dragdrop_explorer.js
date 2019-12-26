//==============================================================================
//==============================================================================
//==============================================================================
function XD3(xCR){
var XHe=XD1(xCR);
if(!XHe.XH5){
XHe.XH5=new XAf(XHe);}
return XHe.XH5;}
function XD2(){
var XHe=XD1(xCR);
if(XHe.XH5){
XHe.XH5=null;
return true;}
return false;}
//==============================================================================
function XD1(xCR){
var current;
var parent=xCR;
while(parent&&current!=parent){
current=parent;
if((!current.parent||current.parent==current)&&
current.opener&&current.opener.document)
{
parent=current.opener;}else{
parent=current.parent;}}
return current;}
//==============================================================================
function XAg(xGQ,XIF,XFB_){
this.type=xGQ;
this.XIE=XIF;
this.XDt=XFB_;}
XAg.prototype.type=null;XAg.prototype.XIE=null;XAg.prototype.XDt=null;
//==============================================================================
function XAh(xCR){}
XAh.prototype.xb4=new Object();XAh.prototype.xCR=null;XAh.prototype.XHe_=null;
XAh.prototype.xb2=
function(XD0,XDc,XDp,XCX)
{
var xDF;
if(this.xb4[XD0]){
xDF=this.xb4[XD0];}else{
xDF=new Object();
this.xb4[XD0]=xDF;}
if(xDF[XDc])
return false;
var XDt=new Object;
XDt.XDo=XDp;
XDt.XCW=XCX;
xDF[XDc]=XDt;
return true;}
XAh.prototype.xd8=function(XD0,XDc){
var xd2;
if(this.xb4[XD0]){
var xDF=this.xb4[XD0];
if(!XDc){
Xl('*ddr.search:return only drag');
return xDF;}
if(xDF[XDc]){
xd2=xDF[XDc];
Xl('*ddr.search:found drag&drop:'+xd2.XDo.length+' effects');}}
return xd2;}
XAh.prototype.XIA=function(XD0,XDc){
if(!this.xb4[XD0])
return false;
var xDF=this.xb4[XD0];
if(!xDF[XDc])
return false;
xDF[XDc]=null;
var xYE=0;for(var xhI in xDF){
++xYE;}
if(xYE<1){
this.xb3[XD0]=null;}
return true;}
XAh.prototype.XGp=function(XGE){}
//==============================================================================
function XAf(xCR){
this.xCR=xCR;
this.XHe_=XD1(xCR);
this.XGp('*DragDropControler created.')}
XAf.prototype=new XAh;
XAf.prototype.XDZ=null;XAf.prototype.XDX=0;XAf.prototype.XD8=null;XAf.prototype.XD9=null;
XAf.prototype.xJF=function(XD0,XIF){
Xl('*ddc.dragstart:search:'+XD0);
var XDt=this.xd8(XD0);
if(XDt){
Xl('*ddc.dragstart:entry:'+XD0);
this.XDZ=new XAg(XD0,XIF,XDt);
this.XDX=0;
window.event.dataTransfer.setData('Text',XD0);
window.event.dataTransfer.effectAllowed='all';
window.event.returnValue=true;}else{
Xl('*ddc.dragstart:no entry:'+XD0);
window.event.dataTransfer.effectAllowed='none';
window.event.returnValue=false;}
window.event.cancelBubble=true;
return window.event.returnValue;}
XAf.prototype.XD4=function(){
Xl('*ddc.dragend');
this.XDX=0;
this.XD8=null;
if(this.XD9){
this.XHz();}
this.XDZ=null;
window.event.returnValue=true;
window.event.cancelBubble=true;
return true;}
XAf.prototype.XD5=function(XDc,XIF){
window.event.dataTransfer.dropEffect='none';
window.event.returnValue=false;window.event.cancelBubble=true;
Xl('### ddc.dragenter');
if(!this.XDZ)
return false;
++this.XDX;
Xl('### ddc.dragenter search '+this.XDZ.type+' '+XDc+'/'+XIF);
var XDt=this.xd8(this.XDZ.type,XDc);
if(!XDt||!XDt.XDo||XDt.XDo.length<1)
return false;
this.XD8=new XAg(XDc,XIF,XDt);
Xl('### ddc.dragenter found,dropCandidate='+
this.XD8.type+' '+this.XD8.XIE);
window.event.dataTransfer.dropEffect=this.XEP(XDt);
Xl('*ddc.dragenter:effect('+this.XDZ.type+
','+this.XD8.type+
')='+window.event.dataTransfer.dropEffect);
this.XGs();
return true;}
XAf.prototype.XD7=function(){
window.event.dataTransfer.dropEffect='none';
window.event.returnValue=false;window.event.cancelBubble=true;
if(!this.XDZ){
return false;}
if(!this.XD8){
return false;}
if(!this.XDZ||!this.XD8){
return false;}
window.event.dataTransfer.dropEffect=
this.XEP(this.XD8.XDt);
this.XGs();
return true;}
XAf.prototype.XD6=function(){
Xl('*ddc.dragleave');
window.event.returnValue=false;window.event.cancelBubble=true;
if(!this.XDZ)
return false;
if(--this.XDX>0){
Xl('*ddc.dragleave:ignore due to nesting');
return false;}
this.XDX=0;
this.XD8=null;
Xl('*ddc.dragleave:unmark');
this.XHz();
return true;}
XAf.prototype.xLF=function(){
window.event.returnValue=false;window.event.cancelBubble=true;
if(!this.XDZ||!this.XD8)
return false;
window.event.dataTransfer.dropEffect=
this.XEP(this.XD8.XDt);
if(this.XD8.XDt.XCW.xLF){
this.XD8.XDt.XCW.xLF(
window.event.dataTransfer.dropEffect,
this.XDZ.XIE,
this.XD8.XIE);}
return true;}
XAf.prototype.XEP=function(XFB_){
switch(XFB_.XDo.length){
case 1:
return XFB_.XDo[0];
break;
case 2:
return(window.event.ctrlKey?
XFB_.XDo[1]:XFB_.XDo[0]);
break;
default:
break;}
if(window.event.altKey)
return XFB_.XDo[2];
if(window.event.ctrlKey)
return(window.event.shiftKey?XFB_.XDo[2]:XFB_.XDo[1]);
return XFB_.XDo[0];}
XAf.prototype.XGs=function(){
if(this.XD9&&
this.XD9!=this.XD8)
{
this.XHz();}
if(this.XD8.XDt.XCW.xCK){
this.XD8.XDt.XCW.xCK(
window.event.dataTransfer.dropEffect,
this.XDZ.XIE,
this.XD8.XIE);
this.XD9=this.XD8;
Xl('*ddc.mark:REMEMBER '+this.XD9.type+
'/'+this.XD9.XIE);}
return true;}
XAf.prototype.XHz=function(){
Xl('*ddc.unmark');
if(!this.XD9)
return false;
if(this.XD9!=this.XD8){
if(this.XD9.XDt.XCW.XHy){
this.XD9.XDt.XCW.XHy(
this.XDZ.XIE,
this.XD9.XIE);}
Xl('*ddc.unmark:NULL '+this.XD9.type+
'/'+this.XD9.XIE);
this.XD9=null;}
Xl('*ddc.unmark end');
return true;}
//==============================================================================

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
