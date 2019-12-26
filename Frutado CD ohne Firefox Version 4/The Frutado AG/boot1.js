//
function XPl(){
return Math.abs(self.dgo.xGB.xuQ-0);}
function XPm(XDx){
var xrF=XDx||self.frames.trainer_gui_frame.event;
if(xrF&&xrF.shiftKey){
XPw('GUI onclick');}}
function boot1_framesetOnload_(){
if(!document.dgo&&!navigator.dgo){
self.location.replace(self.location.href);
return false;}
self.dgo=document.dgo||navigator.dgo;
document.dgo=null;
navigator.dgo=null;
Xtp(self.dgo.xGB,'[object dgoConfig.sub]');
Xtp(self.dgo.XMW,'[object dgoControl.sub]');
if(XPl()>=4){
XPw('boot1_framesetOnload_()');}
if(self.dgo.RescueInitId){self.clearTimeout(self.dgo.RescueInitId);}
self.frames.trainer_gui_frame.document.onclick=XPm;
var XV8=self.document.getElementById("trainer_audio_frame");
var XV9=self.document.getElementById("trainer_tour_frame");
var XVk=self.document.getElementById("trainer_log_frame");
var Xmz=self.document.getElementById(self.dgo.xGB.Xvw);
if(typeof(XV8.readyState)=='string'){
XV8.onreadystatechange=XP9;
XV9.onreadystatechange=XP9;
XVk.onreadystatechange=XP9;
Xmz.onreadystatechange=XP9;}
else{
XV8.addEventListener('load',XP9,true);
XV9.addEventListener('load',XP9,true);
XVk.addEventListener('load',XP9,true);
Xmz.addEventListener('load',XP9,true);}
XV8.src=self.dgo.XzY+'about_blank.html';
XV9.src=self.dgo.XzY+'about_blank.html';
XVk.src=self.dgo.XzY+'about_blank.html';
Xmz.src=self.dgo.XzY+'about_blank.html';
self.XI7=null;
self.frames.trainer_dynloader_frame.location.replace(
self.dgo.XzY+
(self.dgo.XAE=='explorer'?
'jswidget/dynloader_explorer.html':'jswidget/dynloader.html'));
return true;}
function XP9(){
if(typeof(this.readyState)=='string'){
if(this.readyState!='complete'){
return true;}
this.onreadystatechange=null;}
else{
this.removeEventListener('load',XP9,true);}
return XP7('empty frame');}
function XI8(){self.dgo.XNx=self.dgo.XOf;
self.dgo.XmS=self.dgo.XOg;
self.dgo.XOf=[];
self.dgo.XOg=[];
XI7.XmM(self,XUG,XPl());
if(XPl()>=4){
var xbK='boot1_loadDynloader()-Loaded Frames:\n';
var x3F;
for(var i=0;i<self.frames.length;++i){
x3F=self.frames[i];
xbK+=i+':'+x3F.name+'="'+x3F.location.href+'"\n';}
alert(xbK);}
if(!self.dgo.xGB.Xat){
XI7.XT5();
XUG('Turning Compression OFF');}
XI7.XJG(self.frames.trainer_program_frame);
var XJJ=[ 'callback.js','config.js'
,'dhtml.js'
,'dhtml_'+self.dgo.XAE+'.js'
,'dict.js'
,'log_tree.js'
,'tree_explorer.js','url.js'
,'../agent_urler.js'
,'../boot2.js'];
if(!XI7.load(XJJ,XUF)){
var xbK='dynloader.load(I)abort';
XPw(xbK);
XPi('ex',xbK);
return false;}
return XP7('dynLoader_ready()');}
function XUF(XDv){
if(XDv>0){
var xbK='dynloader.load(I):'+XDv+' error(s)';
XPw(xbK);
XPi('ex',xbK);
return false;}
return XP7('dynloader.load(I)');}
var dgo10=0;
var dgo11=6;
function XP7(XGE){
++dgo10;
if(XPl()>=5){
alert('boot1_ready('+XGE+'),count/limit='+
dgo10+'/'+dgo11);}
if(dgo10<dgo11){
return true;}
if(self.dgo.xGB.Xat){
if(!XI7.XKb()){
self.dgo.xGB.Xat=false;
XUG('Compression was turned OFF');}}
self.dgo.XOb.XP6=(new Date).valueOf();
var XUS=self.frames.trainer_program_frame;
XUS.XPi=self.XPi;
XUS.XQA=self.XQA;
XUS.dgo=self.dgo;
XUS.XM4=self.XM4;
return XUS.XP8();}

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
