//
//
function Pause(XCI,XCt){
if(!XCI)return;
this.xfK=X3B('pause');
XLD.XHO(this,XCI,XCt);
this.XWr=false;
this.XWq=false;
this.XWh=false;
//
//
this.XWs=true;
var timeout=XCI.XRN().timeout-0;
timeout*=(timeout==-1?1:1000);
this.xjh=(XCt.Xtmo?XCt.Xtmo()*1000:timeout);}
function XR2(){
Pause.prototype=new XLD;
Pause.prototype.XUh=function(XUa){
this.XCI.xTN(XAA);
return true;}
Pause.prototype.XUU=function(XUa,XU2){
return true;}
Pause.prototype.XUi=function(XUa){
if(this.XCI.XFV()==XAA){
this.XCI.xTN(XA0);}
else{
this.XCI.xki(XA0);}
return true;}
Pause.prototype.toString=function(){
return 'Pause={'+
XLD.prototype.toString.XHO(this)+
',t:'+this.xjh+'}';}
Pause.prototype.xjh=null;
Pause.prototype.x4o=function(X07){
return false;}
Pause.prototype.x4f=function(X07){
if(this.xjh>0){
this.XCI.x6b().XU6().add(this,this.xjh,1000,
this.XCI.XRN().XTw?0:XrQ);}
else if(this.xjh==-1){
this.XCI.xTN(XBR);
this.XCI.x6b().remove(this);}
return true;}
Pause.prototype.x4r=function(XVK){
this.XCI.x6b().XU6().remove(this);
return true;}}
if(self.XI7){XI7.XJB(new XIX('../pause.js',
['../render_base.js','../render_container.js','animation.js'],
XR2));}
else{
XR2();}

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
