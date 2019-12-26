function XAZ(XCZ,XCY,XHh,xaq){
this.XCZ=XCZ;
this.XCY=XCY;
this.XHh=XHh||XJO;
this.xaq=xaq;}
XAZ.prototype={
XCZ:null
,XCY:null
,XfF:null
,xaq:null
,XKe:function(){
return this.XCZ;}
,XKd:function(){
return this.XCY;}
,exec:function(XHg_,xaq){
var xbK=XHg_||'';
if(!this.XCY){
this.XHh('CB exec('+xbK+'):no func');
return true;}
if(this.XCZ){
this.XHh('CB exec('+xbK+'):obj.func');
return this.XCY.call(this.XCZ,xaq,this.xaq);}
this.XHh('CB exec('+xbK+'):no obj');
return this.XCY(xaq,this.xaq);}}
function XJO(){
return true;}
function Xbn(XHh){
this.Xc0=[];
this.XHh=XHh||XJO;}
Xbn.prototype={
Xc0:null
,XHh:null
,add:function(XCZ,XCY){
var xAX=XCY?new XAZ(XCZ,XCY):XCZ;
this.Xc0[this.Xc0.length]=xAX;
return xAX;}
,remove:function(XC0){
return this.Xc0.XSl(XC0);}
,x8A:function(){
var xkI=this.Xc0.length;
this.Xc0=[];
return xkI;}
,exec:function(XHg_,xaq){
for(var i=0;i<this.Xc0.length;++i){
this.Xc0[i].exec(XHg_,xaq);}
return this.Xc0.length;}}
if(self.XI7){
XI7.XJB(new XIX('callback.js'));}

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
