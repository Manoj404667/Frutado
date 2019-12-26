//
//
function XX4(X6H,XIH){
var xYE;
if(typeof(X6H)=='string'){
XYE[X6H]=XIH+'';
xYE=1;}
else if(typeof(X6H)=='object'){
xYE=0;
for(var name in X6H){
XYE[name]=X6H[name]+'';
++xYE;}}
else{
return false;}
return xYE;}
function XXt(X8G,X8B,XPz,xVG,XCZ,XCY,xBJ){
var xyP=X8G||{};
var lang=X8B.toLowerCase();
for(var xC3 in xyP){
if(xC3.indexOf('_')>-1){
var xC4=xC3.replace(/_/,'-').toLowerCase();
xyP[xC4]=xyP[xC3];
xyP[xC3]=null;}}
if(typeof(xyP[lang])=='object'){
var xa7=XX4(xyP[lang]);
return xa7===false?-1:0;}
else if(typeof(xyP[lang])=='string'){
var url=new Url(xyP[lang]);
url.xc3(XPz);
return XP0(url.toString(),xVG,XCZ,XCY,xBJ);}
return-2;}
var X92=null;
var X99=null;
function XP0(xMj,xVG,XCZ,XCY,xBJ){
X99=xMj;
X92=new XAZ(XCZ,XCY);
return X9w(xMj,xVG,null,X51,null,xBJ);}
function xAx(xBC){var xAz="";
var i=0;
var c=X0M=xAv=0;
while(i<xBC.length){
c=xBC.charCodeAt(i);
if(c<128){
xAz+=String.fromCharCode(c);
i++;}
else if((c>191)&&(c<224)){
xAv=xBC.charCodeAt(i+1);
xAz+=String.fromCharCode(((c&31)<<6)|(xAv&63));
i+=2;}
else{
xAv=xBC.charCodeAt(i+1);xAw=xBC.charCodeAt(i+2);
xAz+=String.fromCharCode(((c&15)<<12)|((xAv&63)<<6)|(xAw&63));
i+=3;}}
return xAz;}
var XRU=/[\r\n]/m;
var XRV=/[;\t]./;
var XnW=/[^;\t ]./;
function X51(xyO){
var src=X99;
var xAX=X92;
X99=null;
X92=null;
if(typeof(xyO)!='string'){
xAX&&xAX.exec('Dict load error','Textfile "'+src+'" not loaded');
return false;}
var Xhu=xyO.split(XRU);
var xYE=0;
var i,xkI,xFJ,xoL,XK8,xkP,value,xbK;
var xBA=false;
if(Xhu.length>0&&
Xhu[0].charCodeAt(0)==239&&
Xhu[0].charCodeAt(1)==187){
xBA=true;}
for(i=0,xkI=Xhu.length;i<xkI;++i){
xFJ=Xhu[i];
xoL=xFJ.search(XRV);
if(xoL>=0&&(xkP=(xFJ.substr(0,xoL)||'').XZA())&&
xkP.substr(0,1)!='#')
{
value=xFJ.substr(xoL+1);
xoL=value.search(XnW);
value=xoL<0?'':value.substr(xoL);
value=value.XZD();
if(value.substr(0,1)=='"'){
value=value.substr(1,value.length-2);}
xoL=value.indexOf('""');
while(xoL>=0){
value=value.substr(0,xoL)+value.substr(xoL+1);
xoL=value.indexOf('""',xoL+1);}
value=value.replace(/\\t/g,'\t');
value=value.replace(/\\r/g,'\r');
XYE[xkP]=xBA?xAx(value.replace(/\\n/g,'\n')):value.replace(/\\n/g,'\n');
++xYE;}}
xAX.exec('Dict loaded',xYE);
return true;}
var XbE=/@\{([A-Za-z_][A-Za-z0-9_]+)\}/;
function XQK(xfK,X7L){
var name=xfK;
var X7K=[];
for(var i=1;
i<arguments.length&&typeof(arguments[i])!='undefined';
++i)
{
X7K[X7K.length]=arguments[i];}
if(typeof(XYE[name])!='string'){
return '['+name+':'+X7K+']';}
var value=XYE[name];
var xa7=value.match(XbE);
while(xa7){
value=value.replace(XbE,XQK(xa7[1]));
xa7=value.match(XbE);}
if(X7K.length<1){
return value;}
return value.X61(X7K);}
var XYE={};
if(self.XI7){XI7.XJB(new XIX('dict.js',
['js_extensions.js','url.js']));}

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
