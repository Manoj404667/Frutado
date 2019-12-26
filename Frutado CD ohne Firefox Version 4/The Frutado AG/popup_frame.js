//
function Xj8(X0U,xVG,xaz,XlH){
if(!X0U)return;
this.XlH=XlH;
xJB.XHO(this,X0U,xVG,xaz);}
function Xj9(){
Xj8.prototype=new xJB;
Xj8.prototype.XkK=true;
Xj8.prototype.Xdx=function(xMj,Xe4){
this.Xek=xMj;
this.XfN='';
this.Xew(Xbu,XcB);
this.XlH.Xdx(xMj,this,this.XlA);
return true;}
Xj8.prototype.Xeo=function(XDq){
return xJB.prototype.Xeo.XHO(this,
XDq,this.XlH.Xjr());}
Xj8.prototype.toString=function(){
return 'PopupFrame={'+xJB.prototype.toString.XHO(this)+
';'+this.XlH+'}';}
Xj8.prototype.XlH=null;
Xj8.prototype.XlA=function(){
var XVm=this.X0U;
var XLk=XVm.Xd6().XVp();
XLk.Xpr('Onload popup '+this,'user',2);
if(this.Xej==XcB){
this.Xej=XcE;}
this.xvD();
if(this.Xej!=XcC){
this.XjW(XLk);}
XVm.Xdo()||XVm.Xd6().XfG();
return true;}}
if(self.XI7){XI7.XJB(new XIX(
'../popup_frame.js',['popup.js','../frame.js'],Xj9));}
else{
Xj9();}

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
