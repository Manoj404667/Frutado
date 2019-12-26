//
//
function Xr8(Xro,XHh){
this.XHh=XHh||function(){};
this.Xro=Xro;}
Xr8.prototype.Xri=function(Xrt){
this.XHh('OC:apply defaults','success',3);
for(var xzj in this.Xro){
Xrt[xzj]=this.Xro[xzj].Xrq;
this.XHh(this.Xro[xzj].Xsv+
'='+
this.Xro[xzj].Xrq,'default',4);}}
Xr8.prototype.Xsq=function(XtB,Xrt){
if(typeof(XtB.getAttribute)!='function'&&
typeof(XtB.getAttribute)!='object'){
return false;}
this.XHh('OC:read values from imageDir','success',3);
for(var xzj in this.Xro){
var XsD=
XtB.getAttribute(this.Xro[xzj].name);
if(XsD!=null){
Xrt[xzj]=XsD;
this.XHh(this.Xro[xzj].Xsv+
'='+
XsD+
'(specified)','default',4);}
else{
this.XHh(this.Xro[xzj].Xsv+
'='+
Xrt[xzj]+
' preserved from destination obj','warning',4);}}}
Xr8.prototype.XxV=function(XtB,Xrt,XxX){
if(!XxX||
(typeof(XtB.getAttribute)!='function'&&
typeof(XtB.getAttribute)!='object')||
typeof(XtB.getAttribute(XxX))=='undefined')
{
return false;}
var Xx1=XtB.getAttribute(XxX);
this.XHh('OC:read values from imageDir,section:'+XxX,'success',3);
for(var xzj in this.Xro){
var XsD=Xx1[this.Xro[xzj].name];
if(XsD!=null){
Xrt[xzj]=XsD;
this.XHh(this.Xro[xzj].Xsv+
'='+
XsD+
'(specified)','default',4);}
else{
this.XHh(this.Xro[xzj].Xsv+
'='+
Xrt[xzj]+
' preserved from destination obj','warning',4);}}}
if(self.XI7){XI7.XJB(new XIX(
'object_configurator.js'));}

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
