//
function XPi(Xcp,XE6){
var xkg=self.dgo.xGB.xkg||true;
if(xkg=='0'||xkg=='false'||
self.dgo.Url.substr(0,5)=='http:'||
self.dgo.Url.substr(0,6)=='https:')
{
xkg=true;}
var xVQ=self.dgo.xGB.xqF||'error';
if(xVQ.substr(0,11)!='javascript:'&&
self.dgo.Url.substr(0,3)!='mk:')
{
var url='?restart='+escape(self.dgo.Url);
if(Xcp){
url+='&code='+Xcp;}
if(XE6){
url+='&context='+escape(XE6);}
if(self.dgo.xGB.referrer){
url+='&referrer='+escape(self.dgo.Referrer);}
if(self.dgo.xGB.xAU){
url+='&appurl='+escape(self.dgo.xGB.xAU);}
if(self.dgo.xGB.XG0){
url+='&appname='+escape(self.dgo.xGB.XG0);}
if(self.dgo.xGB.XG1){
url+='&apptimeout='+self.dgo.xGB.XG1;}
if(self.dgo.xGB.xkQ){
url+='&'+self.dgo.UrlParam;}
if(xkg){
if(xVQ.search(/\.html$/)<0&&xVQ.search(/\.htm$/)<0){
xVQ+='.html';}
xVQ=self.dgo.Home+xVQ+url;}
else{
xVQ='bracepage?name=error&href='+xVQ+escape(url);}}
self.location.replace(xVQ);}
function XPw(XGE){
var xbK='';
var i,xkI,xlI;
for(i=0,xkI=self.dgo.XOf.length,xlI=1;i<xkI;++i){
xbK+='\n\r'+self.dgo.XOg[i]+' '+self.dgo.XOf[i];
if(((i+1)% 10)==0||(i+1)==xkI){
alert(XGE+'\n\r\n\rBOOT Trace '+xlI+'-'+(i+1)+
' of '+xkI+':'+xbK);
xlI=i+1;
xbK='';}}
return true;}
function Xyo(X8B){
switch(X8B.toLowerCase()){
case 'br':return 'pt-BR';
case 'de':return 'de-DE';
case 'es':return 'es-ES';
case 'en':return 'en-US';
case 'fr':return 'fr-FR';
case 'hr':return 'hr-HR';
case 'it':return 'it-IT';
case 'nl':return 'nl-NL';
case 'nn':return 'nb';
case 'no':return 'nb';
case 'pt':return 'pt-PT';
case 'sv':return 'sv-SE';
case 'tw':return 'zh-TW';
case 'zh':return 'zh-CN';}
if(X8B.indexOf('-')>0){
return X8B;}
else{
return X8B.toLowerCase();}}
function XQA(XUH,XmJ,XQE){
if(XQE.xBH){
XQE.xoM='';}
else if(XQE.xoM){
XQE.xBH=XQE.xoM;
XQE.xoM='';}
else if(XQE.xAJ){
if(XUH.X8v(XmJ,'passive')){
XQE.xkg=true;}}
if(XUH.X8v(XmJ,'proxypath')){
XQE.x5L='/proxyf/';}
if(XQE.XRk){
if(XUH.X8v(XmJ,'startpage')){
XQE.x0N='';}}
if(XQE.XnH){
XQE.XTw=true;}
if(XQE.xkg){if(XUH.X8v(XmJ,'log')){
XQE.Xl=null;}}
if(typeof(XQE.domain)!='string'){
XQE.domain='';}
if(XQE.XLf!==''){
XQE.XLf=Xyo(XQE.XLf+'');}
if(XQE.XBe!==''){
XQE.XBe=Xyo(XQE.XBe+'');}
if((XQE.Xf7+'').toLowerCase()=='screendump'){
if(XUH.X8v(XmJ,'mousetick')){
XQE.Xod=50;}}
XQE.XoM==null&&(XQE.XoM={});
var XoM=XQE.XoM;
typeof(XoM.cfg_maxcount_all)=='number'||
(XoM.cfg_maxcount_all=20);
typeof(XoM.cfg_maxcount_complete)=='number'||
(XoM.cfg_maxcount_complete=1);
typeof(XoM.cfg_maxcount_html_present)=='number'||
(XoM.cfg_maxcount_html_present=2);
typeof(XoM.cfg_maxcount_interactive)=='number'||
(XoM.cfg_maxcount_interactive=3);
typeof(XoM.cfg_maxcount_no_access)=='number'||
(XoM.cfg_maxcount_no_access=-1);
typeof(XoM.XnV)=='boolean'||
(XoM.XnV=true);
XQE.Xok==null&&(XQE.Xok={});
return true;}
function Xtp(XQE,XGE){
var name,x;
var Xt3=XGE||'[dgo]';
var X1K=function(){return Xt3;}
for(name in XQE){
x=XQE[name];
if(x&&typeof(x)=='object'&&typeof(x.toString)=='undefined'){
x.toString=X1K;}}}
function XUG(XGE,xGQ){
var xbK=XGE||'-';
var type=xGQ||'trace';
var xkI=self.dgo.XOf.length;
self.dgo.XOf[xkI]=xbK;
self.dgo.XOg[xkI]=(new String(type)).toUpperCase();
return true;}

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
