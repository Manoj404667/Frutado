//
//
function XNs(){
this.x6K=true;}
function XQH(xVG,xcF){}
function XB6(){
return 'CursorState={'+this.XEm+
'['+this.XYc+
'+'+this.X0V+
'];'+this.X0o+','+this.X0q+
';'+(this.X0R?'visible}':'invisible}');}
XNs.prototype={
x6K:false
,Xo:function(){
return this.xGL;}
,X00:function(){
return this.X08;}
,X0Z:function(XCI){
var X1G=XCI.XRN().xkg;
var url=XCI.Xu().xNI(
'widgets/mouse/mouse'+this.x0h+this.xGL+'.gif');
if(!X1G&&this.x8h){
var X0M=this.x8h.substr(0,1);
var color=(X0M<'0'||X0M>'9'
?this.x8h.substr(1):this.x8h);
url.XC4('/cgibin/color'+url.XFG());
url.XWg('color',color);}
return '<img src="'+url+'" alt="Arc pointing to '+
this.xGL+'">';}
,X0Y:function(){
return{x:this.xFR,y:this.xeS};}
,X0W:function(){
var XYc,X0V;
if(typeof(this.XEF)=='string'){
var xoL=this.XEF.indexOf(':');
XYc=(xoL<0?this.XEF:this.XEF.substr(0,xoL));
X0V=
(xoL>=0?this.XEF.substr(xoL+1):'');}
else{
XYc=null;
X0V=null;}
return{
XYc:XYc
,XEm:this.XEF
,X0V:X0V
,X0o:this.X0p
,X0q:this.X0L
,X0R:this.X0S
,toString:XB6}}
,xmj:function(XEF,X0p,X0L,X0S){
if(typeof(XEF)=='string'){
this.XEF=XEF;}
if(typeof(X0p)=='number'){
this.X0p=X0p;}
if(typeof(X0L)=='number'){
this.X0L=X0L;}
if(typeof(X0S)=='boolean'){
this.X0S=X0S;}
return true;}
,handleEvent:function(xsF){
var shape=xsF.Xgs();
var orientation=xsF.Xo().toUpperCase();
var color=xsF.Xgrc();
this.XMV(shape,orientation,color);
return XMs;}
,XMV:function(x0h,xGL,x8h){
this.x0h=x0h;
this.xGL=xGL;
this.x8h=x8h;
if(this.x0h!='2'){
this.x0h='1';}
switch(this.xGL){
case 'N':
this.xFR=0;
this.xeS=12;
this.X08='S';
break;
case 'NE':
this.xFR=-6;
this.xeS=12;
this.X08='S';
break;
case 'E':
this.xFR=-12;
this.xeS=0;
this.X08='S';
break;
case 'SE':
this.xFR=-6;
this.xeS=-12;
this.X08='S';
break;
case 'S':
this.xFR=0;
this.xeS=-12;
this.X08='S';
break;
case 'SW':
this.xFR=6;
this.xeS=-12;
this.X08='S';
break;
case 'W':
this.xFR=12;
this.xeS=0;
this.X08='S';
break;
default:
this.xFR=6;
this.xeS=12;
this.xGL='NW';
this.X08='SE';
break;}
dgo7.Xpr('CU set:'+this,'success');
return true;}
,toString:function(){
return 'Cursor={'+this.x0h+
',ori:'+this.xGL+'/'+this.X08+
',color:'+this.x8h+'}';}
,x0h:'1'
,xGL:'NW'
,X08:'SE',x8h:''
,XEF:null
,X0p:0
,X0L:0
,X0S:false
,xFR:10
,xeS:3}
if(self.XI7){XI7.XJB(new XIX('../cursor.js'));}

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
