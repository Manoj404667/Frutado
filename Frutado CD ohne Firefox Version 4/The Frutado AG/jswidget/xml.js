//
//
//
//
function XMw(x9Q,XHh,Xvo){
this.x9Q=(x9Q||self);
this.XHh=(XHh||XJO);
this.Xvo=(Xvo=='true'?true:false);
this.x6K=true;}
function Xht(){
return this.dgob.XGh(this);}
function XwM(dgob,XxE){
var Xwm=new DOMParser();
var xml=Xwm.parseFromString(XxE,"text/xml");
xml.dgob=dgob;
dgob.Xkd=xml;
return dgob.XGh(xml);}
function Xho(XFh){
var xml=this.document.getElementById(XFh);
if(xml&&xml.dgob){
xml.dgob.XiJ(this);}
return true;}
XMw.prototype={
x6K:false
,load:function(xMj,XCZ,XCY){
this.xMj=xMj;
this.XC0=new XAZ(XCZ,XCY,this.XHh);
return this.XIn();}
,XO5:function(){
var xml;
if(this.XFh&&(xml=this.x9Q.document.getElementById(this.XFh))){
xml.parentNode.removeChild(xml);}
this.xMj=null;
this.Xkd=null;
return true;}
,XN7:function(){
if(this.Xkd&&this.Xkd.XMLDocument){
return this.Xkd.XMLDocument;}
return this.Xkd;}
,XNb:function(){
var x4E=this.XN7();
return(x4E?x4E.documentElement:null);}
,Xu:function(){
return(this.Xkd.documentURI 
?new Url(this.Xkd.documentURI):this.Xkd.src);}
,XRL:function(XGR,XkR,XOT){
return this.XRM(XGR,XkR,XOT);}
//
//
,XNp:function(XOB,xd3){
if(!this.xMj||!this.Xkd||!XOB){
return null;}
this.XNQ=XOB;
var xd2=this.XNq(xd3);
this.XNQ=null;
this.XHl=null;
return xd2;}
//
//
,XRp:function(
XkR,XDe,XAe,XPV,XQn)
{
var x4E=this.XN7();
if(!x4E){
return-1;}
var xYE=0;
var XPU=XPV||{};
var XQm=XQn||[];
var XMe=x4E.getElementsByTagName(XkR);
var xkI=XDe.length;
var XR7=XDe[0];
var xpK,XR8,xwK,ii,XPW,XPX;
this.XHh('XML makeAssocArray('+XkR+','+XDe.length+
'):'+XMe.length+' found');
for(var i=0;i<XMe.length;++i){
xpK=XMe[i];
XR8=XOj(xpK,XR7);
xwK=new Object;
xwK[XR7]=XR8;
xwK.text=XOl(xpK);
for(ii=1;ii<xkI;++ii){
XPW=XDe[ii];
XPX=XPW.substr(0,1);
xwK[XAe[ii]]=this.XOH(xpK,XPW);}
if(typeof(XPU[XR8])=='undefined'){
XPU[XR8]=xwK;
++xYE;}
else{
XQm[XQm.length]=xwK;}}
return xYE;}
,XNR:function(xd3){
var xpM=(xd3||this.XNb());
this.XNS(xpM,'');
return this.XNT(xpM,'.');}
,Xvo:false
,x9Q:null,xMj:null,Xkd:null,XC0:null,XFh:null,Xi3:null,XNQ:null,XHl:null,XHh:null,XOW:{XNh:0}
,XIn:function(){
var xml;
var xd2=false;
var x4E=this.x9Q.document;
if(x4E.implementation&&x4E.implementation.createDocument){
if(typeof(xNE)=='object'&&xNE.domain){
this.XFh='dgoXmlNode_'+(++this.XOW.XNh);
var XDm=x4E.createElement('IFRAME');
XDm.id=this.XFh;
XDm.name=this.XFh;
XDm.src=Xcf+'/load_xml.html'+
'?dgoDOMAIN='+xNE.domain+
'&url='+escape(this.xMj)+
'&onload=parent.XmlData_Onload2_(xmlString)';
var Xjj=this;
this.x9Q.XwL=function(XxE){
return XwM(Xjj,XxE);}
XDm.style.display='none';
XDm.dgob=this;
XDm=x4E.body.appendChild(XDm);
if(!XDm){
this.error='XML cannot appendChild(IFRAME)into "'+
this.x9Q.name+'"='+this.x9Q.location;
this.XHh(this.error);
return false;}
this.XHh('Domain active:Child appended(IFRAME)into "'+
this.x9Q.name+'"='+this.x9Q.location);
this.XHh('IFRAME.src="'+
XDm.src+'"');
this.XHh('url="'+
this.xMj+'"');
xd2=true;}
else{
xml=x4E.implementation.createDocument('','',null);
xml.dgob=this;
this.Xkd=xml;
xml.onload=Xht;
try{
this.XHh('XML Load request for "'+
this.xMj+'":'+xd2);
xd2=xml.load(this.xMj);
if(xd2==undefined){
xd2=true;}}
catch(xa8){
this.error='Failure loading XML file "'+
this.xMj+'":'+(new x6C(xa8));
this.XHh(this.error);}}}
else{this.XFh='dgoXmlNode_'+(++this.XOW.XNh);
var XDm=x4E.createElement('IFRAME');
XDm.id=this.XFh;
XDm.name=this.XFh;
if(typeof(xNE)=='object'&&xNE.domain){
XDm.src=Xcf+'/relax_domain.html'+
'?dgoDOMAIN='+xNE.domain;}
else{
XDm.src=Xcf+'/about_blank.html';}
XDm.style.display='none';
XDm=x4E.body.appendChild(XDm);
if(!XDm){
this.error='XML cannot appendChild(IFRAME)into "'+
this.x9Q.name+'"='+this.x9Q.location;
this.XHh(this.error);
return false;}
xd2=XGH(
this.x9Q,XDm,this,this.Xli);
if(xd2!==true){
this.error='XML DHtml_addFrameElementOnloadHandler()='+xa7+
';IFRAME.id="'+this.XFh+'"';
this.XHh(this.error);
return false;}}
return xd2;}
,Xli:function(xsH){
var x8Q=xsH.contentWindow;
var x4E=x8Q.document;
if(this.Xvo&&this.xMj.match('^http')){
var Xvp=null;
if(typeof XMLHttpRequest!='undefined'){
Xvp=new XMLHttpRequest();}
if(!Xvp){
try{
Xvp=new ActiveXObject("Msxml2.XMLHTTP");}catch(e){
try{
Xvp=new ActiveXObject("Microsoft.XMLHTTP");}catch(e){
Xvp=null;}}}
if(Xvp){
var Xjj=this;
Xvp.open('GET',this.xMj,true);
Xvp.onreadystatechange=function(){
if(Xvp.readyState==4){
Xjj.XGh(Xvp.responseXML);}}
Xvp.send(null);}}else{
var xml=x4E.body.appendChild(x4E.createElement('XML'));
if(!xml){
this.error='XML cannot appendChild(XML)into "'+
x8Q.name+'"='+x8Q.location;
this.XHh(this.error);
return false;}
var Xjj=this;
this.Xkd=xml;
xml.dgob=this;
xml.onload=Xht;
xml.onreadystatechange=function(){
return Xjj.Xi2(Xjj.Xkd);}
xml.src=this.xMj;}
this.XHh('XML data island.src set to "'+this.xMj+'"');
return true;}
,XGh:function(Xkd){
this.Xkd=Xkd;
this.x9Q.clearTimeout(this.Xi3);
this.Xi3=null;
var XNU=0;
var xpM=this.XNb();
if(xpM){
this.XHh('XML file "'+this.Xu()+
'" loaded;Root node has '+xpM.childNodes.length+' children');}
else{
++XNU;
this.error='XML .loadCb_():No root element.'
this.XHh(this.error);}
return this.XC0.exec(
'XML onload callback;'+XNU+' errors',XNU);}
,XiJ:function(Xkd){
this.Xkd=Xkd;
this.error='XML load timeout.'
this.XHh(this.error);
return this.XC0.exec(this.error,1);}
,XNr:function(XGR,XNQ,XO4){
var contains=(typeof(XNQ)=='object'?XNQ.contains:null);
if(contains&&
typeof(contains.length)=='number'&&
contains.length>0){
var child;
var XNP;
for(var i=0;i<XGR.childNodes.length;++i){
child=XGR.childNodes[i];
if(child.nodeType!=3){
XNP=this.XNQ.objects[child.tagName];
if(XNP&&
child.tagName&&
contains.search(child.tagName)>=0)
{
var XNu=new xVB(
XO4,
this.XOH(child,XNP.type),
this.XOH(child,XNP.name),
this.XOH(child,XNP.title));
this.XQp(XNu,child,XNP);
this.XNr(child,XNP,XNu);}}}}
return true;}
,XQp:function(XO4,XTg,XSg){
var xoQ;
for(var XCM in XSg){
switch(XCM){
case "objects":
case "contains":
case "type":
case "name":
case "title":
break;
case "hint":
default:
{
XO4[XCM]=this.XOH(XTg,XSg[XCM]);}break;}}}
,XNq:function(xd3){
var xpM=xd3||this.XNb();
this.XHl=new xKC(
this.XOH(xpM,this.XNQ.title),
this.XOH(xpM,this.XNQ.type));
this.XQp(this.XHl.xpM,xpM,this.XNQ);
this.XNr(xpM,this.XNQ,this.XHl.xpM);
return this.XHl;}
,Xi2:function(Xkd){
this.XHh('XML data island readyState:'+Xkd.readyState);
this.Xkd=Xkd;
if(Xkd.readyState=='interactive'){
return Xkd.onload();}
if(Xkd.readyState=='loaded'){this.x9Q.dgoa=Xho;
this.Xi3=this.x9Q.setTimeout(
"self.dgoa('"+Xkd.id+"')",2500);
this.XHh('XML Watchdog for id='+Xkd.id+' after 2500ms.');}
return true;}
,XOH:function(XGR,XNQ){
if(!XNQ){
return '';}
var c=XNQ.substr(0,1);
var xd2=null;
switch(c){
case '*':xd2=XGR.nodeValue;
break;
case '#':xd2=XNQ.substr(1);
break;
case '@':if(xd2=this.XRM(XGR,XNQ.substr(1))){
xd2=XOl(xd2);}
break;
default:xd2=XOj(XGR,XNQ);
break;}
return xd2;}
,XRM:function(XGR,XkR,XOT){
var child;
for(var i=(XOT||0);i<XGR.childNodes.length;++i){
child=XGR.childNodes[i];
if(child.nodeType!=3&&
(child.tagName==XkR||child.nodeName==XkR))
{
return XGR.childNodes[i];}}
return null;}
,XNS:function(XGR,x8I){
var t=(XGR.tagName||
XGR.nodeName+' ['+XGR.nodeType+']="'+XGR.nodeValue+'"');
var XNB=XGR.attributes||[];
var XCM;
for(var i=0;i<XNB.length;++i){
XCM=XGR.attributes[i];
t+=' '+XCM.nodeName+'='+XCM.nodeValue;}
this.XHh('XML '+x8I+t);
return true;}
,XNT:function(XGR,x8I){
var XNi=x8I+x8I.substr(0,1);
var child;
for(var i=0;i<XGR.childNodes.length;++i){
child=XGR.childNodes[i];
this.XNS(child,x8I);
this.XNT(child,XNi);}
return true;}}
if(self.XI7){XI7.XJB(new XIX(
'xml.js',[ 'callback.js','dhtml.js','url.js' ]));}

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
