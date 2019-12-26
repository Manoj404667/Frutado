//
var dgou=false;
function dgo53(){
dgou=true;}
function XGr(){
var xHL=dgoAgent;
var c=true;
while(c&&!dgou){
var e=xHL.Xje();
if(e&&e.Xeti()!=5021){
xJH(e);}else{
c=false;}}
if(c&&dgou){
dgoAgent.Xpr('X YIELD','info');}
dgou=false;
return true;}
function xJH(e){}
var dgoQ=0;
function Xiz(x9Q){
++dgoQ;
var x8Q=x9Q||window;
if(xNE.xuQ>=4){
alert('Onbeforeunload event no.'+dgoQ+
' on '+x8Q.name+'="'+x8Q.location+'"');}
if(dgoQ>1){
return;}
if(!dgoAgent.XN5()){
dgoAgent.Xoua(1020);}
var i;
var ii;
var xAL;
var xVg;
var xWg;
var cfg_onbeforeunload=
dgoAgent.Xlf().Xls().cfg_onbeforeunload;
if(typeof(cfg_onbeforeunload)=='object'&&
typeof(cfg_onbeforeunload.length)!='undefined'&&
typeof(cfg_onbeforeunload.length)!='unknown')
{
var ctx;
var ctx_control;
var ctx_frame;
var ctx_window;
var ctx_element;
for(i=0;i<cfg_onbeforeunload.length;++i){
ctx=dgoAgent.Xlf().Xls();
ctx_control=dgoAgent.Xlf().Xls();
ctx_frame=null;
ctx_window=null;
ctx_element=null;
if(typeof(cfg_onbeforeunload[i])=='function'||
typeof(cfg_onbeforeunload[i])=='object')
{
cfg_onbeforeunload[i]();
cfg_onbeforeunload[i]=null;}}}
if(typeof(self.xXg)=='object'&&
typeof(self.xXg.length)!='undefined'&&
typeof(self.xXg.length)!='unknown')
{
for(i=0;i<self.xXg.length;++i){
if(typeof self.xXg[i]=='object'&&
typeof self.xXg[i].xRg=='object')
{
xAL=self.xXg[i].xRg;
xWg=self.xXg[i].xZg;
for(ii=0;ii<xWg.length;++ii){
var xVg=xWg[ii];
if(typeof xAL[xVg]!='undefined'&&
typeof xAL[xVg]!='unknown')
{
xAL[xVg]=null;}}
self.xXg[i].xRg=null;
self.xXg[i].xZg=null;
self.xXg[i]=0;}}}}
var dgoh=0;
function XjA(x9Q){
++dgoh;
var x8Q=x9Q||window;
if(xNE.xuQ>=4){
alert('Onunload event no.'+dgoh+
' on '+x8Q.name+'="'+x8Q.location+'"');}
if(dgoh>1){
return;}
dgoAgent.Xpr('X ONUNLOAD-------------------------------------');
if(!dgoAgent.XN5()){
dgoAgent.Xoua(1021);}
window.onerror=null;
window.onunload=null;
window.onbeforeunload=null;
window.onresize=null;}
function xcI(url){
if(xNE.xuQ>=4){
alert('Unload request,url:'+url);}
dgoAgent.XOZ();
var xVQ=url.substring(0,2047);
if(xVQ){
dgoAgent.Xoua(1022);
var body=dgoAgent.XF3().parent.document.body;
if(XRl&&
dgoAgent.XQE.X6s!='')
{
body.style.filter=dgoAgent.XQE.X6s;
body.filters[0].Apply();}
dgoAgent.XF3().parent.location.assign(xVQ);
if(XRl&&
dgoAgent.XQE.X6s!=''&&
body.filters[0])
{
body.filters[0].Play();}}
else{
dgoAgent.Xoua(1022);}
return true;}
function xJM(x){return x+'px';}
function ElementRef(xHL,c,i,ii,XHZ){
this.path=''+(xHL||'');
this.xMk=''+(c||'');
this.index=(i||0)-0;
this.xPh=(ii||-1)-0;
this.XHZ=''+(XHZ||'');}
ElementRef.prototype={
toString:function(){
return 'ER={'+this.path+','+this.xMk+','+
this.index+','+this.xPh+','+
(this.XHZ.length>100?this.XHZ.substr(0,96)+' ...':this.XHZ)+
'}';}}
if(self.XI7){XI7.XJB(new XIX('../xbrowser.js',[ 'dict.js' ]));}

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
