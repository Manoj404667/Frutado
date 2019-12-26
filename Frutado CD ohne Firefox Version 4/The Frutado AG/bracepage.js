//
function x0M(XGE){
var xbK=XGE.replace('&','&amp;');
xbK=xbK.replace(/[<]/g,'&lt;');
xbK=xbK.replace(/[>]/g,'&gt;');
xbK=xbK.replace(/[""]/g,'&quot;');
xbK=xbK.replace(/['']/g,'&#39;');
return xbK;}
function XS9(xMj){
var XRr=new Templater(Templater_OPTIONS_NONE);
if(!XRr.cfg_initConfig(xMj,self,null,XSt)){
XT8();
return false;}
return true;}
function XSt(XS8){
XT8();
if(!XS8.cfg_ok){
return false;}
if(!XS8.cfg_apply(self,Templater_OPTIONS_NONE)){
return false;}
var Xl=self.document.getElementById('logging');
Xl&&Xl.appendChild(self.document.createTextNode(XS8.cfg_getLog()));
return true;}
function XT8(){
self.document.body.style.visibility='visible';}
function TemplaterCloseWindow(){
if(navigator.appName=='Microsoft Internet Explorer'){
var X1K=function(){
self.top.opener=self.top;
self.top.open('','_parent');
self.top.close();}
window.setTimeout(X1K,2000);}
else{
self.setTimeout(xDK,2000);}}
function xDK(){
try{
self.top.close();}
catch(xaw){}
if(self.top&&!self.top.closed){
try{
netscape.security.PrivilegeManager.enablePrivilege(
'UniversalPreferencesRead UniversalPreferencesWrite');
navigator.preference('dom.allow_scripts_to_close_windows',true);
self.top.close();}
catch(xaw){alert('Cannot close browser window.\n\n'+
'To allow automatic window close,\n'+
'change the setting "dom.allow_scripts_to_close_windows"\n'+
'in "about:config" to true!');}}}
function dgo17(){
var XGB=new String(window.location.search);
if(XGB.substr(0,1)=='?'){
XGB=XGB.substr(1);}
var xRQ=[];
if(XGB.length&&XGB.length>0){
xRQ=XGB.split('&');}
var XN4=false;
var html=[];
var name,value;
var x5J,appName,XKz;
var xKK,XkL,XSp,XSi;
for(var i=0;i<xRQ.length;++i){
XGB=xRQ[i].split('=',2);
name=(XGB[0]||'');
value=unescape((XGB[1]||''));
if(!XRl&&name=='dgoDOMAIN'){
if(value!=''){
if(self.location.protocol=='http:'||
self.location.protocol=='https:')
{
self.document.domain=value;}}}
else if(name=='restart'){
XkL=value;}
else if(name=='mode'){
xKK=value;}
else if(name=='restart_title'){
XSp=unescape(value);}
else{
if(name=='referrer_url'){
XSi=value;}
else if(name=='appurl'){
x5J=value;}
else if(name=='appname'){
appName=value;}
else if(name=='apptimeout'){
XKz=value-0;}
if(!XN4){
XN4=true;
html[html.length]=
'<tr><td class=parameter-title>${TOK_BP_PARAMETER}</td>';
html[html.length]=
'<td class=parameter-title>${TOK_BP_VALUE}</td></tr>';}
html[html.length]='<tr><td class=parameter-name>'+
x0M(name)+'</td>';
html[html.length]='<td class=parameter-value>'+
x0M(value)+'</td></tr>';}}
if(!XN4){
XN4=true;
html[html.length]=
'<tr><td class=parameter-title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>';
html[html.length]=
'<td class=parameter-title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr>';
html[html.length]='<tr><td class=parameter-name>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>';
html[html.length]='<td class=parameter-value></td></tr>';}
var XJZ=(xRQ.length>0&&!XkL);
var x4E=window.document;
x4E.open();
x4E.writeln('<body class='+pagetype+' onload="return '+"XS9"+'(Tourlink);"'+
' style="visibility:hidden;">');
x4E.writeln('<table cellpadding=0 cellspacing=1 width=100%><tr>');
x4E.writeln('<td class="logo">');
x4E.writeln('<img src="skin/datango_logo.gif" '+
'dgosrc="trainer:skin/datango_logo.gif"></td>');
x4E.writeln('<td class=title2 style="padding:0px;" width=100% valign=top>');
x4E.writeln('<table class=title cellpadding=0 cellspacing=0 width=100%>');
x4E.writeln('<tr height=50%>');
if(XJZ){
x4E.writeln('<td class=title valign=middle>'+
(XSp||'${TOK_TRAINER}')+'</td>');}
else{
x4E.writeln('<td class=title valign=middle>${TOK_TRAINER}'+
(xKK?' '+xKK+'-'+'${TOK_BP_MODE}':'')+'</td>');}
x4E.writeln('</tr><tr>');
x4E.writeln('<td class=title2 valign=middle>'+pagetype+'</td>');
x4E.writeln('</tr></table>');
x4E.writeln('</td>');
for(i=0;i<html.length;++i){
x4E.writeln(html[i]);}
x4E.writeln('</table><br>');
if(!XJZ){
if(top&&top.opener&&top.opener!=top){
x4E.writeln('<a href="javascript:TemplaterCloseWindow()">'+
'${TOK_BP_CLOSEWINDOW}</a>&nbsp;');}
if(XSi){
x4E.writeln('<a '+
(pagetype=='Start'?'target=_top ':'')+
'href="'+XSi+'">${TOK_BP_GOBACK}</a>&nbsp;');}
if(XkL){
x4E.writeln('<a target=_top href="'+XkL+'">'+
'${TOK_BP_RESTARTPROGRAM}</a>&nbsp;');}
var xkI=self.location;
x4E.writeln('<a target=_top href="'+
xkI.href.substr(0,xkI.href.length-xkI.search.length-xkI.hash.length)+
'/../index.htm">${TOK_BP_STARTANOTHER}</a>&nbsp;');
if(navigator.userAgent.indexOf('MSIE')<0){
x4E.writeln('<a href="javascript:">${TOK_BP_JSCONSOLE}</a>&nbsp;');}
if(pagetype=='Start'){
x4E.writeln('<a href="javascript:ctx&&ctx.cfg_action(1001);">'+
'${TOK_BP_GOON}</a>&nbsp;');}
if(x5J){
x4E.writeln('<p>Manual<a href="'+x5J+'" target=_top>'+
(appName?'<b>'+appName+'</b>':'Application')+
'</a>Start</p>');
x4E.writeln('<p>Manueller Start '+(appName?'von':'der')+
'<a href="'+x5J+'" target=_top>'+
(appName?'<b>'+appName+'</b>':' Applikation')+
'</a></p>');
if(pagetype=='Start'&&XKz){
self.setTimeout('self.top.location="'+x5J+'"',
XKz*1000);}}}
x4E.writeln('</body>');
x4E.close();}
dgo17();

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
