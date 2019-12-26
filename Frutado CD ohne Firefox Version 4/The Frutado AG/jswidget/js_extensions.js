//
Function.prototype.XHO=function(x1K,
Xaa,xvk,xwk,xaf,xae,xad,xac,xam,xan,xao)
{
x1K.XBy=this;
var xd2=x1K.XBy(Xaa,xvk,xwk,xaf,xae,xad,xac,xam,xan,xao);
x1K.XBy=null;
return xd2;}
Array.prototype.xag=function(XGT){
this[this.length]=XGT;
return this.length;}
Array.prototype.X3i=function(X3l){
for(var i=0;i<X3l.length;++i){
this.xag(X3l[i]);}
return X3l.length;}
Array.prototype.XCf=function(){
var xd2=[];
for(var i=0;i<this.length;++i){
if(typeof(this[i])!='undefined'){
xd2[i]=this[i];}}
return xd2;}
Array.prototype.XDn=function(XFj,XGT){
if(this.length<0||XFj>this.length){
return-1;}
for(var i=this.length-1;i>=XFj;--i){
this[i+1]=this[i];}
this[XFj]=XGT;
return this.length;}
Array.prototype.remove=function(XFj){
if(this.length<0||XFj>=this.length){
return-1;}
for(var i=XFj+1;i<this.length;++i){
this[i-1]=this[i];}
this[this.length-1]=null;
this.length=this.length-1;
return XFj;}
Array.prototype.XSl=function(xGF){
var XFi=this.search(xGF);
return(XFi<0?XFi:this.remove(XFi));}
Array.prototype.X67=function(){
var src=0;
var xAc=0;
var X4h=false;
while(src<this.length){
while(src<this.length&&
(this[src]==undefined||this[src]==null))
{
X4h=true;
++src;}
if(src<this.length){
if(X4h){
this[xAc]=this[src];}
++xAc;
++src;}}
this.length=xAc;
return xAc;}
Array.prototype.search=function(XIH){
for(var i=0;i<this.length;++i){
if(this[i]==XIH){
return i;}}
return-1;}
Array.prototype.X6C=function(){
var X6C=new Array();
for(var i in this){
if(!(typeof(this[i])=='function'||
typeof(this[i])=='object'))
{
X6C.push(i);
	 	}}
return X6C;}
Number.prototype.X2m=function(X2J,X2H,X2M){
var X2I=X2J||0;
var X2G=X2H||0;
var X2L=X2M||'0';
var X29=(this<0?1:0);
var i=Math.abs(this);
var floor=Math.floor(i);
var X2O=Math.abs(i-floor);
var X2K='';
for(i=X2I+X2G;i>0;--i){
X2K+=X2L;}
var X2j=''+floor;
i=X2j.length;
X2j=X2K.substr(0,X2I-i-X29)+X2j;
if(X2G){
var X2k=(''+X2O).substr(2)+X2K;
X2k=X2k.substr(0,X2G);
return(X29?'-':'')+X2j+'.'+X2k;}
return(X29?'-':'')+X2j;}
var XWC=/^[ \r\n\t\xA0]*(.*$)/m;
var XWw=/[ \r\n\t\xA0]*$/m;
String.prototype.XZB=function(){
return XWC.exec(this)[1];}
String.prototype.XZD=function(){
var match=XWw.exec(this);
return this.substr(0,this.length-match[0].length);}
String.prototype.XZA=function(){
var xd2=this.XZB();
return xd2.XZD();}
String.prototype.XPC=function(){
xd2=new String(this);
xd2=xd2.replace(/[\\]/g,"\\\\");
xd2=xd2.replace(/[""]/g,'\\"');
xd2=xd2.replace(/[\n]/g,'\\n');
xd2=xd2.replace(/[\r]/g,'\\r');
xd2=xd2.replace(/[\t]/g,'\\t');
return '"'+xd2+'"';}
var X3G=(new String('1')).charCodeAt(0);
var X3H=(new String('9')).charCodeAt(0);
var X3I=(new String('@')).charCodeAt(0);
var X3J=/^[1-9]_[^_]+_/;
String.prototype.X61=function(X7L){
var X7K=
(typeof(X7L)=='object'&&
typeof(X7L.length)=='number'?X7L:arguments);
var xd2='';
var X68=this;
var xoL=X68.indexOf('@');
var c;
while(xoL>=0){
xd2+=X68.substr(0,xoL);
X68=X68.substr(xoL+1);
c=X68.substr(0,1).charCodeAt(0);
if(c>=X3G&&c<=X3H){
c-=X3G;
if(c<X7K.length){
xd2+=(''+X7K[c]);}
xoL=X68.search(X3J);
if(xoL==0){
xoL=X68.indexOf('_',2);
X68=X68.substr(xoL+1);}
else{
X68=X68.substr(1);}}
else if(c==X3I){
xd2+='@';
X68=X68.substr(1);}
xoL=X68.indexOf('@');}
return xd2+X68;}
var X3F=/[^a-zA-Z0-9_]/g;
String.prototype.X3m=function(){
return this.replace(X3F,'_');}
function X0k(XGE,X1A,X12){
this.name='RuntimeError';
this.message=XGE||'';
this.fileName=X1A;
this.lineNumber=X12;}
function x6C(xa8){
if(typeof(xa8)=='object'){
try{this.type=xa8.name;}
catch(xGF){this.type='N.A.';}
try{this.XEn=xa8.fileName;}
catch(xGF){this.XEn='N.A.';}
try{this.xGJ=xa8.lineNumber;}
catch(xGF){this.xGJ='-1';}
try{this.XkW=xa8.stack;}
catch(xGF){this.XkW='N.A.';}
try{this.xZQ=xa8.message;}
catch(xGF){this.xZQ='N.A.';}
try{
if(xa8.fileName){
this.xZQ+=' in '+xa8.fileName+
(typeof(xa8.lineNumber)=='number'?':'+xa8.lineNumber:'');}}
catch(xGF){}}
else{
this.type='_'+typeof(xa8);
this.XEn='N.A.';
this.xGJ='-1';
this.XkW='N.A.';
this.xZQ=''+xa8;}}
x6C.prototype.type=null;
x6C.prototype.xZQ=null;
x6C.prototype.XEn=null;
x6C.prototype.xGJ=null;
x6C.prototype.XkW=null;
x6C.prototype.Xde=function(){
return this.xZQ;}
x6C.prototype.X1M=function(){
return this.XEn;}
x6C.prototype.XZq=function(){
return this.xGJ;}
x6C.prototype.XKl=function(){
return this.XkW;}
x6C.prototype.toString=function(){
return(this.type?
this.type+':"'+this.xZQ+'"'+
(this.XkW?'\r\n'+this.XkW:''):
'ok:"'+this.xd2+'"');}
if(self.XI7){
XI7.XJB(new XIX('js_extensions.js'));}

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
