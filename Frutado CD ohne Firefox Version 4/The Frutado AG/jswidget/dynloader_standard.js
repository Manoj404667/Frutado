//
//
XIT.prototype.XJC=function(XHS){
--this.XIq;return this.Xk9(XHS);}
XIT.prototype.XJL=function(XI6,XHS){
var html='<script language=javascript>'+
"XI7.XJC('"+XHS+"')</"+'script>';
this.XmU>=3&&this.Xl('HTML SCRIPT2:'+html);
this.XI1.document.writeln(html);
return true;}
XIT.prototype.XIn=function(XHS,XIf){
var x1K;
var src;
var xbK;
var html='';
var XIw;
var XJI=(typeof(XHS)=='string'?[ XHS ]:XHS);
var XIc=false;
if(this.xVG.location.protocol.substr(0,4)!='http'){
XIf=true;}
for(var i=0;i<XJI.length;++i){
src=XJI[i];
var XHS=new Url(src);
XHS.xc3(xBk());
src=XHS.toString();
xbK='Dynloader.load_():'+src;
if((this.XIr[src]-0)<0){
this.Xl(xbK+' not loaded','error');}
else if(this.XIr[src]){
this.XmU>=2&&this.Xl(xbK+' just loading');}
else if(this.XIp[src]){
this.XmU>=2&&this.Xl(xbK+' yet loaded');}
else{
if(XIc){
this.XJL(this.XI1.document,XIw);}else{
++this.XIq;
XIc=true;}
if(!this.XI1.dgo40){
this.dgo40=true;
this.XI1.document.writeln('<html><head><title>'+
'dynamic code</title>');
this.XI1.document.writeln(
'<script language=javascript>var '+"XI7"+
'='+"parent.XI7"+';</'+'script>');
this.XI1.document.writeln(
'<script language=javascript>var '+"XIX"+
'='+"parent.XIX"+';</'+'script>');
this.XI1.document.writeln('</head><body bgcolor="#4d7aa6">');}
XIw=src+(XIf?'':'.gz');
this.XIr[src]=1;
++this.XIq;
var html=XIw+'<script language=javascript src="'+
XIw+'"'+(navigator.appVersion.substr(0,1)<='4'&&
this.xVG.location.protocol.substr(0,4)=='http'?
' archive="../dynloader.jar"':'')+'></'+'script>';
this.XmU>=3&&this.Xl('SCRIPT '+html);
this.XI1.document.writeln(html);}}
if(XIc){
--this.XIq;this.XJL(this.XI1.document,XIw);}
return XIc;}

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
