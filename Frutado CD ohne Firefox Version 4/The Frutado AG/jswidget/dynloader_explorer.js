//
XIT.prototype.xfM=2;
XIT.prototype.xXG=null;
XIT.prototype.XJD=function(XJE){
if(XJE.readyState!='loaded'&&
XJE.readyState!='complete')
{
return false;}
XJE.dgo39=null;
XJE.onreadystatechange=null;
--this.XIq;this.xWG();
return this.Xk9(new String(XJE.dgoq),XJE);}
XIT.prototype.xdM=function(XHS,XIf){
var src=new Url(XHS);
src.xc3(xBk());
XHS=src.toString();
var xbK='Dynloader.loadSingle_():'+XHS;
if((this.XIr[XHS]-0)<0){
this.Xl(xbK+' not loaded','error');}
else if(this.XIr[XHS]){
this.XmU>=2&&this.Xl(xbK+' just loading');}
else if(this.XIp[XHS]){
this.XmU>=2&&this.Xl(xbK+' yet loaded');}
else{
if(this.XI1.document.readyState!='complete'){
alert('Warning:Code frame not complete('+
this.XI1.document.readyState+')');}
var XIy=this.XI1.document.createElement('SCRIPT');
XIy.language='javascript';
XIy.dgoq=XHS+(XIf?'':'.gz');
XIy.src=XIy.dgoq;
XIy.style.behavior='url("#default#download")';
XIy.dgo39=this;
XIy.onreadystatechange=XIW;
XIy.onload=function(){
var XI7=this.dgo39;
XI7.XmU>=3&&
XI7.Xl('SCRIPT ONLOAD src='+this.src);};
this.XIr[XHS]=1;
++this.XIq;
this.XI1.document.body.appendChild(XIy);
this.XmU>=3&&this.Xl(
'HTML "'+this.XI1.location.href+'" add '+
XIy.tagName+' src="'+XIy.src+
'" language='+XIy.language+
';loadingCount='+this.XIq);
return true;}
return false;}
XIT.prototype.xWG=function(){
var xYE=this.xfM-this.XIq+1;
var i=0;
var XIy=this.xXG;
var XIb=(XIy==null);
while(XIy&&i<xYE){
++i;
this.xXG=XIy.next;
XIy.next=null;
if(!this.xdM(XIy.src,XIy.xeG)){
--i;}
XIy=this.xXG;}
if(!XIy&&!XIb){
this.Xl('QUEUE has become empty');
--this.XIq;}
return i>0;}
XIT.prototype.XIn=function(XHS,XIf){
var e;
var xYE;
var x1K;
var src;
var XIy;
var XJI=(typeof(XHS)=='string'?[ XHS ]:XHS);
if(!XIf&&this.xVG.location.protocol.substr(0,4)!='http'){
XIf=true;}
for(var i=0;i<XJI.length;++i){
src=XJI[i];
var XHS=new Url(src);
XHS.xc3(xBk());
src=XHS.toString();
x1K=new Object;
x1K.src=src;
x1K.xeG=XIf;
x1K.next=null;
xYE=1;
if(this.xXG){
++xYE;
e=this.xXG;
while(e.next){e=e.next;
++xYE;}
e.next=x1K;}
else{
this.xXG=x1K;
++this.XIq;}}
this.xWG();
return this.xXG!=null||this.XIq>0;}
XIT.prototype.Xop=
/XI7\.XJB\(new XIX\(|XI7\.XJB\([^)]*new XIX\(/m;
XIT.prototype.Xoo=function(XJF,xyO){
var XYA='"'+XJF.dgoq+'"';
var XYB='last 1000 chars:"'+
xyO.substr(xyO.length-1000)+'"';
if(xyO.search(this.Xop)>=0){
this.Xl(XYA+' TRACE '+XYB);
return;}
XYA+=' INCOMPLETE [Call to dynLoader.scriptLoaded()missing] '+XYB;
self.alert(XYA);
this.Xl(XYA);}
function XIW(){
var XIy=(window.event&&window.event.srcElement?
window.event.srcElement:this);
return XIy.dgo39.XJD(XIy);}

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
