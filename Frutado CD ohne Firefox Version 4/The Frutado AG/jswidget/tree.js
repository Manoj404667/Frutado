//
//
function xKC(xgP,xGQ,XID,XHY){
this.xXC=XID||new Array;
this.x1N=XHY||[];
this.xCE=false;
this.xvQ=null;
this.Xnp=1;
this.Xnq={};
this.xpM=new xVB(this);
with(this.xpM){
title=xgP;
hint=xgP;
type=xGQ||'root';
x2P=this;
xBL=true;}
this.x6K=true;}
xKC.prototype={
x6K:false
,XG1_:function(XE9){
var XSH=this.xd7(
XE9?false:true);
var XGm=this.xaJ;
this.xaJ=true;
for(var i=0;i<XSH.length;++i){
XSH[i].xjP();}
this.xaJ=XGm;
this.xvQ&&this.xvQ.xSD();
return true;}
,XHj:function(XCV,XIF,XGR){
var xpK=XGR||this.xpM;
return xpK.XHk(XCV,XIF);}
,XHH:function(XE9){
this.XHj(XPM,XE9?false:true);
this.xCE=true;
return true;}
,xd7:function(XE9){
var xGk=new Object;
xGk.XE8=(XE9?true:false);
xGk.xjM=new Array();
this.XHj(XPL,xGk);
return xGk.xjM;}
,xd5:function(xzj,XIH){
var xGk=new Object;
xGk.xjM=new Array();
xGk.xhI=xzj;
xGk.value=XIH;
this.XHj(XPK,xGk);
return xGk.xjM;}
,action:function(xGQ,XIH){
if(XIH){
this.xXC[xGQ]=XIH;
return XIH;}
if(!this.xXC[xGQ]){
this.xXC[xGQ]=new Object;}
return this.xXC[xGQ];}
,XRQ:function(xzj){
var XTA;
for(var i=0;i<this.x1N.length;++i){
XTA=this.x1N[i];
if(typeof(XTA)=='string'&&XTA==xzj||
typeof(XTA)=='object'&&XTA.name==xzj)
{
return i;}}
return-1;}
,Xnh:function(){
return this.Xnp++;}
,Xni:function(XFh){
return this.Xnq[
typeof(XFh)=='number'?XFh:parseInt(XFh)];}
,Xnu:function(XGR){
this.Xnq[XGR.id]=XGR;}
,Xnw:function(XGR){
this.Xnq[XGR.id]=null;}
,XoP:function(){
this.xvQ&&this.xvQ.xuE();
this.xvQ=null;
this.xaJ=false;}}
function XPM(XGR,XIH){
XGR.XGZ=XIH;}
function XPK(XGR,XCt){
if(XGR.x1N[XCt.xhI]&&XGR.x1N[XCt.xhI]==XCt.value){
XCt.xjM[XCt.xjM.length]=XGR;}}
function XPL(XGR,XCt){
if(XGR.xHI(XCt.XE8)){
XCt.xjM[XCt.xjM.length]=XGR;}}
function xVB(parent,type,name,title,XIL){
this.x1N=[];
this.child=[];
if(typeof parent.x2P!='undefined'){
this.parent=parent;
this.x2P=parent.x2P;
var i=parent.child.length;
this.index=i;
parent.child[i]=this;}
else{
this.parent=null;
this.x2P=parent;
this.index=-1;}
this.id=this.x2P.Xnh();
this.x2P.Xnu(this);
this.title=title||'<no title for this node>';
this.hint=this.title;
this.type=type||'node';
this.name=name||'';
this.xfH=false;
this.xBL=false;
this.XGZ=this.x2P.xCE;
if(!XIL){
this.x2P.xvQ&&this.x2P.xvQ.add(this);}
this.x6K=true;}
xVB.prototype={
x6K:false
,action:function(XIH){
return this.x2P.action(this.type,XIH);}
,XFV:function(xzj){
return this.x1N[xzj];}
,xkD:function(xzj,XTc){
var XFi=this.x2P.XRQ(xzj);
if(XFi<0){
return null;}
var XTA=this.x2P.x1N[XFi];
if(typeof(XTA)=='object'){
XTc=(XTc?true:false);}
this.x1N[xzj]=XTc;
this.x2P.xvQ&&this.x2P.xvQ.x1N(this);
return XTc;}
,xkK:function(xgP,xGQ,xfK,XFr,XE5){
var xpK;
if(typeof(XFr)!='number'||XFr<0||XFr>=this.child.length){
xpK=new xVB(this,xGQ,xfK,xgP)}else{
xpK=new xVB(this,xGQ,xfK,xgP,true);
xpK.xb6();
this.XFw(xpK,XFr);}
if(!XE5)
xpK.action().XFx&&xpK.action().XFx(xpK);
this.x2P.xvQ&&this.x2P.xvQ.xSD();
return xpK;}
,xjP:function(){
this.xBL=!this.xBL;
if(this.xBL){
this.XGZ=true;
this.action().xBL&&this.action().xBL(this);}
else{
this.action().closed&&this.action().closed(this);}
this.x2P.xvQ&&this.x2P.xvQ.open(this);
return this.xBL;}
,open:function(xtQ){
if(xtQ!=this.xBL){
this.xBL=xtQ;
if(this.xBL){
this.XGZ=true;}
this.x2P.xvQ&&this.x2P.xvQ.open(this);}
return xtQ;}
,xGI:function(){
return(this.parent?this.parent.child.length-1==this.index:true);}
,xFI:function(){
var XvC=true;
for(var i=0;i<this.child.length;++i){
if(!this.child[i].Xv3()){
XvC=false;}}
return(XvC||this.child.length==0);}
,xHI:function(XE8){
if(XE8){
return !this.xFI()&&!this.xBL;}
return !this.xFI()&&this.xBL;}
,remove:function(XE5){
this.xb6();
this.x2P.Xnw(this);
if(!XE5){this.action().xb7&&this.action().xb7(this);}
this.x2P.xvQ&&this.x2P.xvQ.xSD();}
,Xv3:function(){
return this.xfH;}
,hide:function(){
this.xfH=true;
this.x2P.xvQ&&this.x2P.xvQ.xSD();}
,show:function(){
this.xfH=false;
this.x2P.xvQ&&this.x2P.xvQ.xSD();}
,xb5:function(XE5){
var xYE=0;
var XGm=this.x2P.xaJ;
this.x2P.xaJ=true;
for(var XFi=this.child.length-1;XFi>=0;--XFi){
this.child[XFi].xb6(XE5);
++xYE;}
this.x2P.xaJ=XGm;
this.x2P.xvQ&&this.x2P.xvQ.xSD();
return xYE;}
,XG9:function(xau,XFr,XE5){
var XGN;
if(XFr||XFr>=0&&XFr<xau.child.length){
XGN=xau.child[XFr];}
if(this.parent==xau&&this.index==XFr){
return;}
this.xb6();
if(XGN){
xau.XFw(this,XGN.index);}
else{
this.parent=xau;
this.index=xau.child.length;
xau.child[xau.child.length]=this;}
if(!XE5)
this.action().XGA&&this.action().XGA(this);
this.x2P.xvQ&&this.x2P.xvQ.xSD();}
,XCq:function(xau,XFr,XE5){
var XGN;
if(XFr||XFr>=0&&XFr<xau.child.length){
XGN=xau.child[XFr];}
var xpK=new xVB(xau,
this.type,this.name,this.title,true);
xpK.xb6();
if(XGN){
xau.XFw(xpK,XGN.index);}
else{
xpK.parent=xau;
xpK.index=xau.child.length;
xau.child[xau.child.length]=xpK;}
if(!XE5)
xpK.action().XCp&&xpK.action().XCp(this,xpK);
this.x2P.xvQ&&this.x2P.xvQ.xSD();}
,XHk:function(XCV,XIF){
var xa7=0;
if(typeof(XCV)=='function'||typeof(XCV)=='object'){
xa7=XCV(this,XIF);}
if(xa7)return xa7;
for(var i=0;i<this.child.length;++i){
var child=this.child[i];
xa7=child.XHk(XCV,XIF);
if(xa7)return xa7;}
return 0;}
,xb8:function(){
for(var i=0;i<this.child.length;++i){
this.child[i].index=i;}}
,XFw:function(XGR,XFr){
for(var i=this.child.length;i>XFr;--i){
this.child[i]=this.child[i-1];
this.child[i].index=i;}
XGR.parent=this;
XGR.index=XFr;
this.child[XFr]=XGR;
return XGR;}
,xb6:function(){
if(!this.parent){
return;}
this.parent.child.XSl(this);this.parent.xb8();}}
if(self.XI7){
XI7.XJB(new XIX('tree.js'),['js_extensions.js']);}

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
