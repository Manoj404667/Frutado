//
var X7l=0;
var X4Q=2;
var X4O=4;
var X4P=6;
function XFe(xfK,XK0){
this.xfK=xfK.toLowerCase();
this.Xrn();
this.XC0=new Xbn(XK0);}
var Xr6=new RegExp("[\n\r]+|[\r\n]+|[\n]+|[\r]+");
var Xr7=
/^(?:\s)*([a-zA-Z0-9_.]+)(?:\s)*(?:[:|=|:=])+(?:\s)*([0-9\-]+)(?:\s)*$/gm;
var XYo=
/^(?:\s)*([a-zA-Z0-9_.]+)(?:\s)*(?:[:|=|:=])+(?:\s)*"([^"]*)"(?:\s)*$/gm;
var RegExprDummy_=/"/;
var XYp=
/\[_start_([^\]]+)\]([^\[]*?)\[_end_[^\]]+\]/gm;
XFe.prototype={
x6K:true
,X7n:function(XCZ,XCY){
return XCY&&this.XC0?this.XC0.add(XCZ,XCY):false;}
,X9z:function(){
this.XC0=null;}
,X9y:function(){
if(this.XC0){
var xAX=this.XC0;
this.XC0=null;
xAX.exec('imagedir '+this.xfK,this);}
return;}
,getName:function(){
return this.xfK;}
,getAttribute:function(xfK){
return this.Xrj[xfK];}
,setAttribute:function(xfK,XIH){
if(typeof(XIH)=='object'){
if(typeof(this.Xrj[xfK])=='undefined'){
this.Xrj[xfK]=new Array();}
this.Xrj[xfK][XIH[0]]=XIH[1];}else{
this.Xrj[xfK]=XIH;}}
,Xrn:function(){
this.Xrj={};}
,XFV:function(){
return this.XHY;}
,xTN:function(XHY){
this.XHY=XHY;}
,XC0:null,xfK:null,XHY:X7l}
var XYx=/[^-a-zA-Z0-9_.]/;
function XPY(xfK){
if(typeof(xfK)!='string'){
return false;}
if(xfK.length<1){
return false;}
if(xfK.search(XYx)>=0){
return false;}
return true;}
function X4N(XCI,xAD,xBJ){
if(!XCI){return;}
this.XCI=XCI;
this.xAD=xAD.XCf();
this.xAD.XCJ('/');this.X9m=[];
this.xBJ=xBJ;
this.Xkv=this.XCI.XRN().xuQ;
this.Xkv>=3&&this.XCI.Xpr('IDT ctor:base='+xAD);
this.x6K=true;}
function cfg_imagedirLoaded_(){
if(self.XI7){
XI7.XJB(new XIX(XI7.XIi()));}}
X4N.prototype={
x6K:false
,xvD:function(xfK,XCZ,XCY){
var xbK='IDT check('+xfK+'):'+' ';
xfK=xfK.toLowerCase();
if(!XPY(xfK)){
this.XCI.Xpr(xbK+'invalid','error');
return-9;}
var X9k=this.X9m[xfK];
var x1N=X9k?X9k.XFV(xfK):X7l;
switch(x1N){
case X4O:
this.Xkv>=2&&
this.XCI.Xpr(xbK+'available');
return 1;
case X4Q:
this.Xkv>=2&&
this.XCI.Xpr(xbK+'NOT available','warning');
return 0;
case X7l:
this.Xkv>=2&&this.XCI.Xpr(
xbK+'unknown-now checking'+(XCY?';callback':''));
return this.X4D(xfK,XCZ,XCY)?-1:0;
default:
xbK+='yet checking';
break;}
if(XCY){
X9k.X7n(XCZ,XCY);
xbK+=';new callbacks';}
this.Xkv>=2&&this.XCI.Xpr(xbK);
return-2;}
,X9g:function(){
return this.xAD;}
,XsF:function(xfK){
xfK=xfK.toLowerCase();
if(!XPY(xfK)){
this.XCI.Xpr('IDT getDir('+xfK+'):invalid name','error');
return null;}
return this.X9m[xfK];}
,XCI:null
,xAD:null,Xkv:0 
,X9l:null,X9m:null 
,X4D:function(xfK,XCZ,XCY){
var XfF=(this.Xkv>=2?XAU:null);
var X9k=new XFe(xfK,XfF);
this.X9m[xfK]=X9k;
X9k.X7n(XCZ,XCY);
X9k.xTN(X4P);
var url=this.xAD.XCf();
url.XCJ(xfK);
var xoL=xfK.lastIndexOf('.');
if(xoL>0){
if(xfK.substr(xoL)=='.mht'){
url.Xxj('http://dgo_mht_proxy/'+xfK.substr(0,xoL)+'.txt');}
else{
url.XCJ(xfK+'.txt');}}
else{
url.XCJ(xfK+'.txt');}
var Xjj=this;
var xPB=X9k;
var X1K=function(xyO){
return Xjj.X8J(xPB,xyO);}
if(X9w(url.toString(),self,null,X1K,XfF,this.xBJ)<0){
X9k.X9z();
X9k.xTN(X4Q);
this.XCI.Xpr('IDT check:Textfile_load('+url+')','error');
return false;}
return true;}
,X8J:function(X9o,xyO){
if(typeof(xyO)=='string'){
var XtR;
X9o.Xrn();
while((XtR=XYp.exec(xyO))!=null){
while((Xx0=Xr7.exec(XtR[2]))!=null){
X9o.setAttribute(XtR[1],new Array(Xx0[1],Xx0[2]-0));}
while((Xx0=XYo.exec(XtR[2]))!=null){
X9o.setAttribute(XtR[1],new Array(Xx0[1],Xx0[2]+''));}}
xyO=xyO.replace(XYp,'');
while((XtR=Xr7.exec(xyO))!=null){
X9o.setAttribute(XtR[1],XtR[2]-0);}
while((XtR=XYo.exec(xyO))!=null){
X9o.setAttribute(XtR[1],XtR[2]+'');}
var Xsi=xyO.split(Xr6);
xyO=Xsi[0];}
var name=X9o.getName();
var xbK='check_cb_('+name+','+xyO+')';
if(typeof(xyO)=='string'&&
(xyO.XZA()==name||
xyO.XZA()+'.mht'==name))
{
this.Xkv>=2&&
this.XCI.Xpr('IDT "'+name+'"','success');
X9o.xTN(X4O);}
else{
this.XCI.Xpr('IDT '+xbK,'error');
X9o.xTN(X4Q);}
X9o.X9y();
return true;}}
if(self.XI7){XI7.XJB(
new XIX('../imagedir.js',
['url.js','textfile.js','callback.js','queue.js']));}

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
