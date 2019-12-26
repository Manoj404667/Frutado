//
//
var XP1=0;
function X9w(xMj,xVG,XCZ,XCY,XHh,xBJ){
var x4E=xVG.document;
var host=xVG.location.host;
var xoL=host.indexOf(':');
if(xoL>0){host=host.substr(0,xoL);}
if((xVG.location.protocol.substr(0,4)=='http'&&
host!=x4E.domain)||(xBJ===true))
{
if(XRl){
try{
var Xwg=new ActiveXObject("MSXML2.XMLHTTP.3.0");}
catch(xa8){
try{
Xwg=new ActiveXObject("Msxml2.XMLHTTP");}
catch(xa8){
try{
Xwg=new ActiveXObject("Microsoft.XMLHTTP");}
catch(xa8){
Xwg=null;
XHh&&
XHh('TF load error:Cannot create an XMLHTTP instance','exc');}}}
if(Xwg){
if(Xwg.overrideMimeType){
Xwg.overrideMimeType('text/plain');}
var Xbm=new XAZ(XCZ,XCY,XHh);
var NO=XP1;
var XwF=Xwg;
var X1K=function(xyO){
X9x(xyO,NO,false,
true,Xbm,
XwF);}
var url=new Url(xMj);
url.xc3(xVG.location.href);
var xbK='TF load "'+xMj+'" into XMLHTTP ';
XHh&&XHh(xbK);
Xwg.onreadystatechange=X1K;
try{
Xwg.open('GET',url.toString(),true);
Xwg.send(null);}
catch(xa8){
XHh&&
XHh('TF load error:Cannot send XMLHttp request','exc');
return false;}}
else{var x3E=x4E.createElement('DIV');
if(!x3E){
return-10;}
x3E.style.display='none';
x3E.id='dgoTextfile_'+(++XP1);
x3E.addBehavior("#default#download");
x3E.dgo52=new XAZ(XCZ,XCY,XHh);
if(!(x3E=x4E.body.appendChild(x3E))){
return-11;}
var NO=XP1;
var X1K=function(xyO){
X9x(xyO,NO,true);}
var url=new Url(xMj);
url.xc3(xVG.location.href);
x3E.dgoq=url.Xxc()&&
url.Xxc().toString().indexOf('http://dgo_mht_proxy/')<0?
url.Xxc().toString():url.toString();
var xbK='TF load "'+url.toString()+'" into DIV '+x3E.id;
x3E.startDownload(url.toString(),X1K);
XHh&&XHh(xbK+' using download behaviour. ');}}
else{var Xwg=new XMLHttpRequest();
if(!Xwg){
XHh&&
XHh('TF load error:Cannot create an XMLHTTP instance','exc');
return-12;}
if(Xwg.overrideMimeType){
Xwg.overrideMimeType('text/plain');}
var Xbm=new XAZ(XCZ,XCY,XHh);
var NO=XP1;
var XwF=Xwg;
var X1K=function(xyO){
X9x(xyO,NO,false,
true,Xbm,
XwF);}
var url=new Url(xMj);
url.xc3(xVG.location.href);
var xbK='TF load "'+xMj+'" into XMLHTTP ';
XHh&&XHh(xbK);
Xwg.onreadystatechange=X1K;
Xwg.open('GET',url.toString(),true);
try{
Xwg.send(null);}
catch(xa8){
XHh&&
XHh('TF load error:Cannot send XMLHttp request','exc');}}}
else{var XDm=x4E.createElement('IFRAME');
if(!XDm){
return-10;}
XDm.style.display='none';
XDm.id='dgoTextfile_'+(++XP1);
var x4E=xVG.document;
XDm.src=Xcf+'/about_blank.html';
XDm.dgo52=new XAZ(XCZ,XCY,XHh);
if(!(XDm=x4E.body.appendChild(XDm))){
return-11;}
if(typeof(XDm.readyState)=='string'){
XDm.onreadystatechange=X9x;}
else{
XDm.addEventListener('load',X9x,true);}
var url=new Url(xMj);
url.xc3(xVG.location.href);
XDm.dgoq=xVG.location.protocol.substr(0,4)=='file'&&
url.Xxc()&&
url.Xxc().toString().indexOf('http://dgo_mht_proxy/')<0?
url.Xxc().toString():
url.toString();
var xbK='TF load "'+url.toString()+'" into '+XDm.id;
try{
var x8Q=XDm.contentWindow;
if(typeof(x8Q)=='object'&&x8Q&&
typeof(x8Q.document)=='object'&&x8Q.document&&
typeof(x8Q.document.body)=='object'&&x8Q.document.body)
{
XHh&&XHh(xbK);
XDm.contentWindow.location.replace(url.toString());}
else{
XHh&&XHh(xbK+' using IFRAME.src');
XDm.src=url.toString();}}
catch(xa8){
XHh&&
XHh('TF load error:'+(new x6C(xa8)),'exc');
XDm.parentNode.removeChild(XDm);
return-12;}}
return 1;}
function Xrf(XI6){
var Xm6=XI6.getElementsByTagName('PRE')[0]||
XI6.getElementsByTagName('XMP')[0];
if(Xm6&&Xm6.childNodes&&Xm6.childNodes.length>0){
var text='';
for(var i=0;i<Xm6.childNodes.length;++i){
if(Xm6.childNodes[i].nodeType==3){
text+=Xm6.childNodes[i].nodeValue;}}
return text;}
return false;}
function X9x(xyO,XP1,XsE,Xwc,
Xwl,Xwh){
if(XsE){
var x3E=self.document.getElementById('dgoTextfile_'+XP1);
if(x3E){
var xAX=x3E.dgo52;
x3E.dgo52=null;
var xUB=x3E;
var XM6=function(){
try{xUB.parentNode.removeChild(xUB);}catch(xa8){}}
self.setTimeout(XM6,1000);}
else{
xAX.exec('Textfile '+XP1+' unaccessible',false);
return false;}}
else if(Xwc){
var xAX=Xwl;
if(Xwh.readyState==4){
if(Xwh.status==200){
xyO=Xwh.responseText;}
else{
if(window.location.protocol.substr(0,4)=='file'){
xyO=Xwh.responseText;}
else{
xAX.exec('Textfile '+XP1+' unaccessible',false);
return false;}}}
else{
return true;}}
else{
if(typeof(this.readyState)=='string'){
if(this.readyState!='complete'){
return true;}
if(!this.dgoq){
return true;}
this.onreadystatechange=null;}
else{
if(!this.dgoq){
return true;}
this.removeEventListener('load',X9x,true);}
var xAX=this.dgo52;
var src=this.dgoq;
var x8Q;
this.dgo52=null;
this.dgoq=null;
var Xjj=this;
var XM6=function(){
try{Xjj.parentNode.removeChild(Xjj);}catch(xa8){}}
try{
if(typeof(this.contentWindow)!='object'||
!(x8Q=this.contentWindow)||
typeof(x8Q.location)!='object'||
typeof(x8Q.location.href)!='string'||
typeof(x8Q.document)!='object'||
typeof(x8Q.document.body)!='object'){
x8Q.parent.setTimeout(XM6,1000);xAX.exec('Textfile '+this.id+'="'+src+
'" unaccessible',false);
return false;}}
catch(xa8){
x8Q.parent.setTimeout(XM6,1000);xAX.exec('Textfile '+this.id+'="'+src+
'" unaccessible',false);
return false;}
if(src!=x8Q.location.href&&
unescape(src)!=unescape(x8Q.location.href))
{x8Q.parent.setTimeout(XM6,1000);xAX.exec('Textfile '+this.id+'="'+x8Q.location+
'" wrong or missing;req "'+
src+'"',false);
return false;}
xyO=Xrf(x8Q.document);
x8Q.parent.setTimeout(XM6,1000);}
if(xyO===false){
xAX.exec('Textfile '+this.id+'="'+src+'" not loaded',false);
return false;}
xAX.exec('Textfile loaded',xyO);
return true;}
if(self.XI7){XI7.XJB(new XIX('textfile.js',
['dhtml.js','js_extensions.js','url.js']));}

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
