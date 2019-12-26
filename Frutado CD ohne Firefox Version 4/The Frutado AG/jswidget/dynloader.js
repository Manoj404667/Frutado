//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var dynLoader_NoCompression=false;
var XI7=null;
if(navigator.appName=='Netscape'&&
navigator.appVersion.substr(0,1)<='4'||
navigator.appName=='Konqueror')
{
dynLoader_NoCompression=true;}
function XIV(xVG,XHh){
if(!xVG||!xVG.parent||xVG==xVG.parent){
alert('Argument of DynLoader_init()wrong:'+xVG+
',parent:'+xVG.parent+
',frame==parent:'+xVG==xVG.parent);
return false;}
if(xVG.location.search.substr(0,7)=='?nogzip'){
dynLoader_NoCompression=true;}
XI7=new XIT(xVG,XHh);
xVG.parent.XI7=XI7;
xVG.parent.XIX=XIX;
if(typeof(xVG.parent.XI8)=='function'||
typeof(xVG.parent.XI8)=='object')
{
xVG.parent.XI8();}
return true;}
var XRl=(navigator.appName=='Microsoft Internet Explorer');
function xBk(){
var xMj;
if(!XRl){
xMj=self.location.href;}
else{
xMj=unescape(self.location.href);}
return xMj;}
function XIX(XHS,XIu,XIl){
var src=new Url(XHS);
src.xc3(xBk());
XHS=src.toString();
this.XHS=XHS;
this.XIu=XIu||[];
for(var i=0;i<this.XIu.length;i++){
XHS=new Url(this.XIu[i]);
XHS.xc3(xBk());
this.XIu[i]=XHS.toString();}
this.XIl=XIl||null;
this.x6K=true;}
XIX.prototype={
XJH:function(XJ){
this.XIe=(XJ?true:false);},
XIh:function(){
return this.XIe;},
XIg:function(){
return this.XId;},
XIk:function(){
return this.XHS;},
XIj:function(){
return this.XIu;},
XI0:function(){
if(!this.XIl){
this.XId=true;
return null;}
if(this.XId){
return true;}
var xd2=this.XIl();
this.XId=true;
return xd2;},
XHS:null,XIu:null,XIl:null,XId:false,
XIe:false,
x6K:false}
function XIT(xVG){
this.xVG=xVG||window;
this.xau=this.xVG.parent;
this.XIr=new Object;
this.XIp=new Object;
this.x6K=true;}
function XJX(){
return XI7.XIZ();}
XIT.prototype={
x6K:false,
X2z:1024,
X9e:2048,
XKb:function(){
return !dynLoader_NoCompression;},
XT5:function(){
dynLoader_NoCompression=true;},
//
//
XJG:function(XI1,xFF){
if(xFF){
this.xVG=xFF;
this.xau=this.xVG.parent;}
this.XI1=XI1||window;
this.XI1.XI7=this.xau.XI7;
this.XI1.XIX=this.xau.XIX;
return true;},
load:function(XHS,XCY,XCZ,XKQ){
if(this.XIq){
alert('DynLoader.load('+XHS+
')\n\rCannot add scripts to current load process.\r\n'+
this.XIq+' script(s)remain to load:\r\n'+
this.XIi());
return false;}
this.XIr=new Object;
this.XIq=0;
this.XIo=0;
this.XIv=0;
this.XIm=0;
this.XKQ=XKQ||0;
this.XCY=XCY;
this.XCZ=XCZ;
if(!this.XIn(XHS,
(this.XKQ & this.X2z)||dynLoader_NoCompression))
{
this.Xl('DynLoader.load():immediate callback call');
this.XC0();}
return true;},
XaG:function(){
if(!this.XIr){return '';}
for(var src in this.XIr){
if(this.XIr[src]){
return src;}}
return '';},
XJB:function(XI9){
var src=XI9.XIk();
++this.XIo;
this.XIp[src]=XI9;
if(this.XIr){
this.XIr[src]=null;}
this.Xl(src+' loaded. '+XI9.XIj().length+
' needed scripts still loading:'+this.XIi());
return true;},
Xl:function(XGE,xGQ){
return this.XmP.call(this.XmQ,XGE,xGQ,3);},
XmM:function(XmQ,XmP,XmV){
this.XmQ=XmQ;
this.XmP=XmP;
this.XmU=typeof(XmV)=='number'?XmV:3;
return true;},
XC0:function(){
if(this.XCZ){
this.Xl('Dynloader.cb_():obj.func:'+this.XCZ+'/'+
this.XCY+'/'+typeof(this.XCZ[this.XCY]));
return this.XCZ[this.XCY](this.XIm);}
this.Xl('Dynloader.cb_():func:'+typeof(this.XCY));
return this.XCY(this.XIm);},
Xk9:function(XHS,XJE,XsC){
var src;
var Xk6;
var xkI=XHS.length;
XsC&&(this.XIq--);
if(XHS.substr(xkI-3)=='.gz'){
Xk6=true;
src=XHS.substr(0,xkI-3);}
else{
Xk6=false;
src=XHS;}
var XHS=new Url(src);
XHS.xc3(xBk());
src=XHS.toString();
var Xk4=this.XIp[src];
if(Xk4){
++this.XIv;}
else{
this.Xl('READY BUT NOT KNOWN:"'+src+'"');}
this.Xl('"'+XHS+'" READY:#loading,#loaded,#post-loaded;'+
this.XIq+','+this.XIo+
','+this.XIv+',dynScript=loaded_['+
src+']='+Xk4+
(Xk4?'/'+Xk4.XIk():''));
if(!Xk4){dynLoader_NoCompression=true;
if(Xk6){
this.Xl(XHS+' RELOAD','warning');
this.XIr[src]=null;
this.XIn(src,true);}
else{
var Xk5='"'+src+'" ERROR:No dynScript contained';
var x1N=this.XIr[src]||0;
if(x1N>-10){
x1N=(x1N>=0?-1:x1N-1);
this.XIr[src]=x1N;
this.XIq++;
this.Xl(Xk5+' poll;state '+x1N,'warning');
var Xn0=src;
var XnZ=XJE;
var X1K=function(){
return XI7.Xk9(Xn0,XnZ,true);}
this.xVG.setTimeout(X1K,100);
return false;}
if(XJE&&typeof(XJE.startDownload)!='undefined'){
try{
var XnZ=XJE;
var X1K=function(xyO){
return XI7.Xoo(XnZ,xyO);}
XJE.startDownload(src,X1K);}
catch(xa8){}}
++this.XIm;
this.Xl(Xk5+';poll finish','error');
if(!(this.XKQ & this.X9e)){
alert(Xk5);}}}
if(this.XIq<=0){
this.XIY();}
return true;},
XJA:function(XJF){
if(XJF.XIg()){
return true;}
if(XJF.XIh()){
var Xk5=XJF.XIk()+':Loop detected';
this.Xl(Xk5,'error');
alert(Xk5);
++this.XIm;
return false;}
XJF.XJH(true);
var XIt=XJF.XIj();
var XIs;
for(var i=0;i<XIt.length;++i){
XIs=this.XIp[XIt[i]];
if(!XIs){
++this.XIm;
var Xk5=XJF.XIk()+':Needed "'+
XIt[i]+'" not loaded';
this.Xl(Xk5,'error');
alert(Xk5);
++this.XIm;
XJF.XJH(false);
return false;}
if(!this.XJA(XIs)){
XJF.XJH(false);
return false;}}
this.XmU>=2&&this.Xl(XJF.XIk()+':INIT');
XJF.XI0();
XJF.XJH(false);
return true;},
XIz:function(){
var XIy;
for(var src in this.XIp){
XIy=this.XIp[src];
if(!this.XJA(XIy)){
return false;}}
return true;},
XIY:function(){
this.Xl('DL:All scripts loaded!');
this.xVG.setTimeout(XJX,1);
return true;},
XIZ:function(){
this.Xl('DL:Still loading:'+this.XIi());
var XJK=[];
var XIy;
var XIt;
var XIs;
for(var src in this.XIp){
XIy=this.XIp[src];
XIt=XIy.XIj();
for(var ii=0;ii<XIt.length;++ii){
XIs=XIt[ii];
if(!this.XIp[XIs]&&
(!this.XIr||!this.XIr[XIs]))
{
XJK[XJK.length]=XIs;}}}
if(XJK.length>0){
return this.XIn(XJK,dynLoader_NoCompression);}
if(this.XIr){this.XIr=null;
this.XIq=0;
this.XIz();
this.Xl('Dynloader.afterLoadComplete_cb_():All scripts initialized!');
return this.XC0();}
return true;},
XIi:function(XI4){
var XI3=XI4||';'
var XJJ='';
if(!this.XIr){return '';}
for(var src in this.XIr){
if(this.XIr[src]||!this.XIp[src]){
XJJ+=XI3+src;}}
return XJJ.substr(1);},
xVG:null,XmQ:null,XmP:null,XmU:0,xau:null,XI1:null,XIr:null,XIp:null,XIq:0,
XIo:0,
XIv:0,
XIm:0,
XCY:null,
XCZ:null,
XJ5:'',
XKQ:0 }

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
