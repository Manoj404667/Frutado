//
//
//
function XBM(xgP,XFm,xEF,XKQ,XHl,XaD){
this.xQl=false;
window.dgoL=this;
this.x6K=this.x4H(xgP,XFm,xEF,XKQ,XHl);}
function Xne(x9Q){
if(x9Q.dgoL){
return true;}
if(typeof(x9Q.opener)=='object'&&
typeof(x9Q.opener.dgoL)=='object'&&
x9Q.opener.dgoL)
{
var Xl=x9Q.opener.dgoL;
var XmN=Xl.Xnj();
x9Q.dgoL=new XBM(XmN.title,XmN.Xnm,
XmN.domain,XmN.options,Xl.XZT());
if(!x9Q.dgoL.x6K){
return false;}
x9Q.dgoL.XHN(x9Q);
return true;}
return false;}
XBM.prototype={
x6K:false
,Xl:function(XGE,xGQ,xat){
if(typeof(xGQ)=='boolean'&&xGQ&&this.XGd){
return this.XCB(XGE);}
var type=xGQ||'trace';
var x7I=this.x8I;
var parent;
if(xat){
switch(typeof(xat)){
case 'number':
x7I=this.XGu(xat-1);
parent=this.XGc[x7I++];
break;
case 'object':
if(!xat.x2P||
xat.x2P!=this.XHl)
{
alert('cannot log('+XGE+
')\r\nWrong tree:'+!xat.x2P);
return null;}
parent=xat;
break;
default:
alert('cannot log('+XGE+
')\r\nWrong param 3:"'+xat+
'",type:'+typeof(xat));
return null;}}
else{
x7I=this.XGu(this.x8I-1);
parent=this.XGc[x7I++];}
var xbK='';
if(this.XKQ){
(this.XKQ & 1)&&(xbK+=Date
?((new Date).valueOf()-this.XHW)+' ':'');
(this.XKQ & 2)&&
(xbK+='#'+XrA+' ');}
var xpK=parent.xkK(xbK+XGE,type);
if(xpK){
xpK.xwh=XGE;
xpK.hint=XOi(XGE);
this.x8I=x7I;
this.XGc[x7I]=xpK;
this.xc0(x7I);
this.XGd=xpK;}
return xpK;}
,x1D:function(){
var xd2=this.x4H(
this.xgP,this.XFm,this.xEF,this.XKQ);
this.Xnt&&this.Xnt.x1D();
if(xd2&&this.xCR){
this.show();}
return xd2;}
,close:function(){
this.XEo();
return true;}
,xuE:function(){
if(!this.XDA){
this.XDA=true;
this.Xl('===LogTree detached============================');
this.XEo();}
return true;}
,Xnj:function(){
return{
title:this.xgP
,Xnm:this.XFm
,domain:this.xEF
,options:this.XKQ};}
,XZT:function(){
return this.XHl;}
,XF3:function(){
return this.xCR;}
,XG1_:function(XE9){
this.XHl.xaJ=false;
this.XHl.XG1_(XE9);
this.XHl.xaJ=true;
return true;}
,xb1:function(){
this.xQl=false;
return this.show();}
,XoQ:function(){
this.xQl=true;
return this.show();}
,XSr:function(xEF){
var Xw7=false;
if(this.xCR){
var name=this.xCR.name;
this.XHx();
if(this.xCR.document.domain!=xEF){
if(self.location.protocol=='http:'||
self.location.protocol=='https:')
{
this.xCR.document.domain=xEF;
Xw7=true;}}
this.xCR=window.open('',name);
this.show();}
else{
if(XSN){
Xw7=true;}}
if(Xw7){
this.XoR&&this.XoR.XSr(xEF);}
this.xEF=xEF;
return true;}
,XoU:function(XoR){
this.XoR=XoR;
return this.XoR;}
,show:function(XC0,XE0){
this.XHx();
if(this.xCR){
return this.XHN(this.xCR);}
this.XC0=XC0;
this.XE0=XE0;
var XVO={
cfg_features:'resizable=yes,scrollbars=yes,menubar=no'
,cfg_height:window.screen.height*0.45
,cfg_name:'LogTree'
,cfg_orientation:'SW'
,cfg_width:window.screen.width*0.9};
var x8Q=XaB(Xcf+'/log_tree.html'+
(this.xEF?'?'+this.xEF:''),XVO);
if(!x8Q){
alert("LogTree():window open failed");
return false;}
return true;}
,XHl:null,Xnt:null,XoR:null,XDA:null
,xCR:null
,xgP:null
,XFm:null
,xEF:null
,XKQ:null
,XC0:null
,xQl:null
,XGd:null
,XGc:[]
,x8I:1
,XaM:null
,XHW:null
,xXC:function(){
var XGO;
var action=new Object;
var XBz=new Object;
XBz[XGO]=action;XBz["sub"]=action;
XBz["time"]=action;
XBz["event"]=action;
XBz["trace"]=action;
XBz["print"]=action;
XBz["info"]=action;
XBz["error"]=action;
XBz["warning"]=action;
return XBz;}
,XCB:function(XGE){
this.XGd.title+=XGE;
return true;}
,XEo:function(){
try{if(this.xCR){
if(this.xCR.dgo21){
this.xCR.dgo21();
this.xCR.dgo21=null;}
this.xCR.dgoL=null;
this.xCR=null;}
this.Xnt&&this.Xnt.xuE();
this.Xnt=null;
this.XoR&&this.XoR.xuE();
this.XoR=null;
this.XHl&&this.XHl.XoP();}
catch(xa8){
this.xCR=null;}}
,x4H:function(
xgP,XFm,xEF,XKQ,XHl)
{
this.xgP=xgP||'Logging';
this.XFm=XFm||'';
this.xEF=xEF||'';
this.XKQ=XKQ||'';
this.XHl=XHl||new xKC(this.xgP,'log',this.xXC());
this.XHl.xaJ=true;this.XGc[0]=this.XHl.xpM;
this.xc0(0);
this.XGd=this.XHl.xpM;
this.XHW=(new Date).valueOf();
return true;}
,XGu:function(x8I){
for(var i=x8I;i>=0;--i){
if(this.XGc[i]){
return i;}}}
,xc0:function(x8I){
var x7I=(x8I==null?-1:x8I);
for(var i=x7I+1;i<this.XGc.length;++i){
this.XGc[i]=null;}
return true;}
,XHN:function(x8Q){
this.xCR=x8Q;
this.xCR.dgo21=this.XC0;
this.XC0=null;
this.xCR.dgoL=this;
if(typeof(this.xCR.opener)=='object'&&
typeof(this.xCR.opener.dgoL)=='object'&&
this.xCR.opener.dgoL)
{
this.Xnt=this.xCR.opener.dgoL;
this.XHl=this.Xnt.XZT();
this.Xnt.XoU(this);}
else{
this.Xnt=null;}
if(this.xCR.document.getElementById){if(!this.XHl.xvQ){
var x3E=this.xCR.document.getElementById('LOG');
if(!x3E||x3E.tagName!='DIV'){
alert('Cannot show log. DIV "LOG":'+x3E+
',tag:'+(x3E?x3E.tagName:'null'));
return false;}
if(this.XE0){
this.XE0=false;
x3E.innerHTML='press "Refresh" to display log';
return true;}
this.XaM=x3E;
if(this.xQl){
this.xPl();}
else{
this.XHl.XHH();
new xMC(this.XHl,x3E,this.XFm,
this.xCR,{XUs:'icons'});
this.XHl.xaJ=true;}}}
else{this.xQl=true;
this.xPl();}
if(!this.xQl){
this.XHl.xvQ.XoJ();}
return true;}
,xPl:function(){
if(this.XaM){this.XaM.innerHTML='';
this.XaM.appendChild(this.xCR.document.createElement('PRE'));
this.XHl.XHj(xPI,this);}
else{
var xqE=this.xCR.document.forms[1].Xl;
xqE.value='';
xqE.dgot=0;
this.XHl.XHj(XFa,xqE);
(xqE.dgot>0)&&(xqE.rows=xqE.dgot+2);
xqE.dgot=null;}
return true;}
,XHx:function(){
this.XHl&&this.XHl.XoP();
this.XaM&&(this.XaM.innerHTML='');
return true;}}
function xPI(XGR,Xjj){
var n=XGR;
var x7I;
for(x7I='';n.parent;n=n.parent,x7I+='.'){}
var xbK=(XGR.type.substr(0,3).toUpperCase()+
x7I+' '+(XGR.xwh||XGR.title)+'\r\n');
Xjj.XaM.firstChild.appendChild(
Xjj.xCR.document.createTextNode(xbK));
return 0;}
function XFa(XGR,xrE){
var n=XGR;
var x7I;
for(x7I='';n.parent;n=n.parent,x7I+='.'){}
var xbK=(XGR.type.substr(0,3).toUpperCase()+
x7I+' '+(XGR.xwh||XGR.title)+'\r\n');
if(xbK.length>xrE.cols){
xrE.cols=xbK.length;}
++xrE.dgot;
xrE.value+=xbK;
return 0;}
if(self.XI7){XI7.XJB(new XIX('log_tree.js',['dhtml.js','tree.js']));}

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
