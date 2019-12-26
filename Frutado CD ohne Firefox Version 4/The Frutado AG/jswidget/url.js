//
//
function Url(xMj){
this.x6K=(xMj?this.xax(xMj):false);
if(this.x6K){
this.XMO();}}
Url.prototype.XCf=function(){
var url=new Url;
if(this.Xxl){
url.Xxe=this.Xxe;
url.Xxl=this.Xxl.XCf();}
url.xzk=this.xzk;
url.XIG=this.XIG;
url.xay=this.xay;
url.XHF=this.XHF;
url.xbo=this.xbo;
url.xaz=this.xaz;
url.XHA=this.XHA;
url.XFf=this.XFf;
url.x6K=true;
return url;}
xLJ=function(xfK,xMj){
if(Url.prototype.XMU[xfK]===false){
return false;}
switch(typeof(xMj)){
case 'string':
Url.prototype.XMU[xfK]=new Url(xMj);
break;
case 'object':
Url.prototype.XMU[xfK]=
(xMj?xMj.XCf():null);
break;
default:
return false;}
return true;}
XWf=function(xFR){
var XWi=false;
var code;
if(!XRl){
try{
var xMj=decodeURI(xFR);
xtg=false;}
catch(xa8){
xtg=false;
for(var i=0;i<xFR.length;++i){
code=xFR.charCodeAt(i);
if(code<=32||code>=127){
XWi=true;}}}}
else{
for(var i=0;i<xFR.length;++i){
code=xFR.charCodeAt(i);
if(code<=32||code>=127){
XWi=true;}}}
return(XWi?escape(xFR):xFR);}
Url.prototype.x6K=false;
Url.prototype.X9v=function(){
var xbK=(this.xzk==''?
(this.XHF!=''?'http:':''):
this.xzk+':');
if(this.XHF!=''||this.xzk=='file'){
(this.xzk=='mk')||
(xbK+=('/'+'/'));
if(this.XIG!=''){
xbK+=this.XIG;
if(this.xay!=''){
xbK+=(':'+this.xay);}
xbK+='@';}
if(this.XHF.match(xKJ)){
xbK+='/'+this.XHF;}
else{
xbK+=this.XHF;}
if(this.xbo!=''){
xbK+=':'+this.xbo;}}
if(this.xaz!=''){
xbK+=escape(this.xaz);}
if(this.XHA!=''){
xbK+=('?'+escape(this.XHA));}
if(this.XFf!=''){
xbK+=('#'+escape(this.XFf));}
return xbK;}
Url.prototype.XEZ=function(){
return this.XFf;}
Url.prototype.XFG=function(){
return this.xaz;}
Url.prototype.XFF=function(){
return this.xay;}
Url.prototype.XFH=function(){
return this.xbo;}
Url.prototype.XFJ_=function(){
return this.xzk;}
Url.prototype.XFP=function(){
return this.XHA;}
Url.prototype.XFQ=function(){
if(this.xd6==null){
this.xav();}
return this.xd6;}
Url.prototype.XFR=function(){
if(this.xd9==null){
this.xav();}
return this.xd9;}
Url.prototype.Xke=function(){
return this.XIG;}
Url.prototype.XFT=function(){
return this.XHF;}
Url.prototype.valueOf=function(){
return this.toString();}
Url.prototype.toString=function(){
var xbK=(this.xzk==''?
(this.XHF!=''?'http:':''):
this.xzk+':');
if(this.XHF!=''||this.xzk=='file'){
(this.xzk=='mk')||
(xbK+=('/'+'/'));
if(this.XIG!=''){
xbK+=this.XIG;
if(this.xay!=''){
xbK+=(':'+this.xay);}
xbK+='@';}
if(this.XHF.match(xKJ)){
xbK+='/'+this.XHF;}
else{
xbK+=this.XHF;}
if(this.xbo!=''){
xbK+=':'+this.xbo;}}
if(this.xaz!=''){
xbK+=this.xaz;}
if(this.XHA!=''){
xbK+=('?'+this.XHA);}
if(this.XFf!=''){
xbK+=('#'+this.XFf);}
if(this.Xxe!=''){
xbK=this.Xxe+xbK;
if(this.Xxl){
xbK=xbK+'!'+this.Xxl.toString();}
if(this.xzk=='file'){
xoL=xbK.indexOf('!');
var XYA=xbK.substr(0,xoL);
var XYB=xbK.substr(xoL);
xbK=XYA.replace('mhtml:file:///','mhtml:').replace(/\//g,'\\')+XYB;}}
return xbK;}
Url.prototype.XDf=function(){
var xbK=
'|'+this.xzk+
'|'+this.XIG+
'|'+this.xay+
'|'+this.XHF+
'|'+this.xbo+
'|'+this.xaz+
'|'+this.XHA+
'|'+this.XFf+
'|';
return xbK;}
Url.prototype.XQl=function(){
var xbK='';
for(var name in Url.prototype.XMU){
xbK+=','+name+':'+Url.prototype.XMU[name];}
return 'Url.specialProtocolContainer_={'+xbK.substr(1)+'}';}
Url.prototype.xc3=function(XCR){
var xAD=(typeof(XCR)=='string'?new Url(XCR):XCR);
var x7N=false;
if(this.xzk==''){
this.xzk=xAD.xzk;}else{
if(xAD.xzk!=''&&
xAD.xzk!=this.xzk)
{
x7N=true;}}
if(!x7N&&this.XHF==''){
this.XHF=xAD.XHF;
this.XIG=xAD.XIG;
this.xay=xAD.xay;
this.xbo=xAD.xbo;}
else{
if(xAD.XHF!=''&&
xAD.XHF!=this.XHF)
{
x7N=true;}}
if(!x7N){
if(this.xaz==''){
this.xaz=xAD.xaz;}
else{
if(this.xaz.substr(0,1)=='/'){if(xAD.xaz!=this.xaz){
x7N=true;}}
else{
if(xAD.Xxe=='mhtml:'){
var path=this.xaz;
this.Xxj('http://dgo_mht_proxy/'+this.xaz);
this.xaz=xAD.xaz;}
else{
x7N=true;
if(xAD.xaz.indexOf('/')>=0){
var path=this.xaz;
this.XC4(xAD.xaz,true);
this.XC5();
this.XCJ(path,true);}}}}}
if(!x7N&&this.XHA==''){
this.XHA=xAD.XHA;}
else{
if(xAD.XHA!=''&&
xAD.XHA!=this.XHA)
{
x7N=true;}}
if(!x7N&&this.XFf==''){
this.XFf=xAD.XFf;}
return true;}
Url.prototype.xc4=function(xa6){
var url=new Url(xa6);
url.x6K=url.xc3(this);
return url;}
Url.prototype.XC7=function(xFR){
this.xzk=xFR;
return true;}
Url.prototype.XCa=function(xFR,XWj){
this.XIG=(XWj?xFR:escape(xFR));
return true;}
Url.prototype.XC3=function(xFR,XWj){
this.xay=(XWj?xFR:escape(xFR));
return true;}
Url.prototype.XC9=function(xFR,XWj){
this.XHF=(XWj?xFR:escape(xFR));
return true;}
Url.prototype.XC6=function(xFR){
this.xbo=xFR;
return true;}
Url.prototype.XC4=function(xFR,XWj){
var x=xFR.replace(XEk,'/');
this.xaz=(XWj?x:escape(x));
this.XK6();
return true;}
Url.prototype.XC5=function(){
var i=this.xaz.lastIndexOf('/');
if(i<0){
this.xaz='';}
else if(i+1<this.xaz.length){
this.xaz=this.xaz.substr(0,i);}
return this.xaz;}
Url.prototype.XC8=function(xFR){
this.xd6=null;
this.xd9=null;
this.XHA=xFR;
return true;}
Url.prototype.XC2=function(xFR,XWj){
this.XFf=(XWj?xFR:escape(xFR));
return true;}
Url.prototype.XCJ=function(XCA,XWj){
var add=XCA.replace(XEk,'/');
if(!XWj){
add=escape(add);}
var xkI=this.xaz.length;
var path=(this.xaz.substr(xkI-1)=='/'?
this.xaz.substr(0,xkI-1):this.xaz);
this.xaz=path+'/'+
(add.substr(0,1)=='/'?add.substr(1):add);
this.XK6();
return this.xaz;}
Url.prototype.Xxj=function(XCA){
this.Xxl=new Url(XCA);
if(this.Xxl.x6K||XCA==''){
this.Xxe='mhtml:';}
else{
this.Xxe='';}
return this.Xxl.xaz;}
Url.prototype.Xxc=function(){
return this.Xxl;}
Url.prototype.XCK=function(xFR,XWj){
if(!xFR){
return;}
this.xd6=null;
this.xd9=null;
this.XHA+=(this.XHA?'&':'')+
(XWj?xFR:escape(xFR));
return this.XHA;}
Url.prototype.XWg=function(xfK,XIH,XWj){
if(!xfK&&!XIH){
return;}
this.xd6=null;
this.xd9=null;
this.XHA+=(this.XHA?'&':'')+xfK+'='+
(XWj?XIH:escape(XIH));
return this.XHA;}
Url.prototype.Xxe='';
Url.prototype.Xxl=null;
Url.prototype.xzk='';
Url.prototype.XIG='';
Url.prototype.xay='';
Url.prototype.XHF='';
Url.prototype.xbo='';
Url.prototype.xaz='';
Url.prototype.XHA='';
Url.prototype.xd6=null;
Url.prototype.xd9=null;
Url.prototype.XFf='';
Url.prototype.XMU={
https:false,
http:false,
ftp:false,
file:false,
archie:false,
gopher:false};
var XEk=/\\/g;
var XkD=/^[a-zA-Z]$/;
var xKJ=/^[a-zA-Z][:]$/;
var xDO=/^(([^:\/?#]+):)?(\/\/(([^:@\/?#]*)?(:([^@\/?#]*))?@)?([^:\/?#]*)(:([^\/?#]+))?)?((\/)?[^?#]*)?(\?([^#]*))?(#(.*))?$/;
Url.prototype.xax=function(XkX){
if(XkX.substr(0,11)=='javascript:'){
this.xzk='javascript';
this.XIG='';
this.xay='';
this.XHF='';
this.xbo='';
this.xaz=XkX.substr(11);
this.XHA='';
this.XFf='';
return true;}
if(XkX.substr(0,6)=='mhtml:'){
this.Xxe='mhtml:';
XkX=XkX.substr(6);
var xoL=XkX.indexOf('!');
this.Xxj(XkX.substr(xoL+1));
XkX=XkX.substr(0,xoL);}
var xHQ=XkX.replace(XEk,'/');
var xDk=xDO.exec(xHQ)||[];
this.xzk=xDk[2]||'';
this.XIG=xDk[5]||'';
this.xay=xDk[7]||'';
this.XHF=xDk[8]||'';
this.xbo=xDk[10]||'';
this.xaz=xDk[11]||'';
this.XHA=xDk[14]||'';
this.XFf=xDk[16]||'';
if(this.xzk=='mk'&&this.XHF==''){
var xoL=this.xaz.indexOf('::');
if(xoL>=0){
this.XHF=this.xaz.substr(0,xoL+2);
this.xaz=this.xaz.substr(xoL+2);}}
if(!this.XIG&&!this.xay&&!this.xbo){
if(!this.XHF&&this.xzk.match(XkD)){
this.XHF=this.xzk+':';
this.xzk='file';}
else if(this.xzk=='file'&&
this.xaz.substr(0,1)==':'&&
this.XHF.match(XkD))
{
this.XHF+=':';
this.xaz=this.xaz.substr(1);}
else if(this.xzk=='file'&&
!this.XHF&&
this.xaz.substr(2,1)==':'&&
this.xaz.substr(1,1).match(XkD))
{
this.xzk='file';
this.XHF=this.xaz.substr(1,2);
this.xaz=this.xaz.substr(3);}
else if(this.xzk==''&&
XkX.substr(0,2)=='\\\\'&&
this.XHF.indexOf('.')<0)
{
this.xzk='file';}}
this.XHF=XWf(this.XHF);
this.xaz=XWf(this.xaz);
this.XK6();
this.xd6=null;
this.xd9=null;
return(XkX&&(this.Xxe==''||this.Xxl.x6K)?
xDk.length>0:false);}
Url.prototype.XK6=function(){
if(!this.xaz){
return true;}
this.xaz=this.xaz.replace(/\\/g,'/');
if(XRl){
var xBr=new RegExp('/'+'/','g');
do{
var xBq=this.xaz;
this.xaz=this.xaz.replace(xBr,'/');}
while(xBq!=this.xaz);}
var XK8=this.xaz.split('/');
var xkI=XK8.length;
var i=0;
var XK7;
while(i<xkI){
XK7=XK8[i];
if(XK7=='.'){
if(i+1==xkI){
XK8[i]='';}else{
if(i>0||xkI!=2||(XK8[1]!=''&&XK8[1]!='.')){
var XL8=[];
if(i>0){
XL8=XL8.concat(XK8.slice(0,i));}
if(i<xkI){
XL8=XL8.concat(XK8.slice(i+1));}
XK8=XL8;
--i;
--xkI;}}}
else if(XK7=='..'){
if(i>0&&XK8[i-1]&&XK8[i-1]!='..'){
var XL8=[];
if(i-1>0){
XL8=XL8.concat(XK8.slice(0,i-1));}
if(i<xkI){
XL8=XL8.concat(XK8.slice(i+1));}
XK8=XL8;
xkI-=2;
i-=2;}}
++i;}
this.xaz='';
for(i=0;i<XK8.length;++i){
this.xaz+=(i>0?'/':'')+XK8[i];}
return true;}
Url.prototype.XMO=function(){
var x7C;
while(typeof(
x7C=this.XMU[this.xzk])=='object'&&
x7C)
{
if(this.xzk=='mht'){
this.x6K=this.xax(x7C.toString()+this.xaz);}
else{
this.XC7(x7C.XFJ_());
this.xc3(x7C);}}
return false;}
Url.prototype.xav=function(){
this.xd6=[];
this.xd9=[];
if(!this.XHA){
return true;}
var xar=this.XHA.split('&');
for(var i=0;i<xar.length;++i){
var xPL=xar[i];
var xLI=xPL.search('=');
if(xLI>=0){
this.xd6[i]=xPL.substr(0,xLI);
this.xd9[i]=xPL.substr(xLI+1);}
else{
this.xd6[i]=xPL;
this.xd9[i]='';}}
return true;}
if(self.XI7){
XI7.XJB(new XIX('url.js'));}

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
