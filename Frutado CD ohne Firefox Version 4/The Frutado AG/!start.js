//
function do_onload(){
var Xv='datango trainer';
if(XM4){
Xv=XM4[0]&&XM4[0].xmE;
if(Xv){
var i=Xv.search(/[ ]*[\[\](){}]/);
var XQv=(i>=0?Xv.substr(0,i):Xv);
self.document.title=XQv;
var XSX=self.document.getElementById('title');
if(Xv&&XSX){
XSX.innerHTML=Xv.substr(Xv.search(/[0-9]/));}}}
var value=XOD('dgo_prefs');
if(value){
document.XNe.XOA.value=value;
XOF();}
XVe(document.XO3.XWW);
XNN(document.XO3.XON);
XUZ(document.XO3.XUY);
return XOQ();}
var dgo34=' expires=Mon,'+' 31 Dec 2035 23:59:59 UTC;';
function XNK(){
XOA=document.XNe.XOA.value;
var value='dgo_prefs='+escape(XOA)+
';'+dgo34+' path=/';
document.cookie=value;
return true;}
var XO8;
function XOF(){
XO8=new XMw;
var url=new Url(document.XNe.XOA.value);
url.xc3(self.location.href);
var xa7=XO8.load(url.toString(),null,XOG);
if(!xa7){
alert(XO8.error);}
return xa7;}
function XOG(XDv){
if(XDv){
alert('Preferences file "'+
document.XNe.XOA.value+'" could not be found');
return false;}
XNW(
self.document,XO8,
document.XO3.XOM,'tour')
XNW(
self.document,XO8,
document.XNe.XOO,'host')
XO8.XO5();
XO8=null;
XOR();
return true;}
function XNW(XI6,Xkd,XOJ,XkR,XNZ){
if(!XNZ){
XOJ.innerHTML='';}
var x4E=Xkd.XN7();
if(!x4E){
return-1;}
var XOX=x4E.getElementsByTagName(XkR);
var XNy;
var value;
for(var i=0;i<XOX.length;++i){
XNy=XI6.createElement('option');
value=XOl(XOX[i]);
XNy.value=value;
XNy.appendChild(XI6.createTextNode(value));
XOJ.appendChild(XNy);}
return i;}
function XO7(){
var form=document.XO3;
var input;
var XNf;
var XNg;
var value;
var Xka='';
var ii;
for(var i=0;i<form.elements.length;++i){
input=form.elements[i];
if(input.name.length>0){
XNg=form[input.name];
if(XNg.length){
XNf=null;
if(XNg[0].tagName=='OPTION'){
if(XNf==null)XNf=0;}
else{
for(ii=0;
XNf==null&&ii<XNg.length;
++ii)
{
if(input==XNg[ii]){
XNf=ii;}}}}
else{
XNf=0;}
value='';
if(input.tagName=='SELECT'){
if(input.multiple){
for(ii=0;ii<input.options.length;++ii){
if(input.options[ii].selected){
value+=','+ii;}}
value=value.substr(1);}
else{
value+=input.selectedIndex;}}
else if(input.tagName=='INPUT'){
switch(input.type){
case 'radio':
case 'checkbox':
value=(input.checked?'X':'-');
break;
case 'hidden':
case 'button':
value=null;
break;
default:
value=input.value;
break;}}
else if(input.tagName=='TEXTAREA'){
value=input.value;}
if(value!=null){
Xka+=':'+input.name+
(XNf>0?'-'+XNf:'')+'='+escape(value);}}}
document.cookie='dgo_start='+Xka.substr(1)+
';'+dgo34+' path=/';
return true;}
function XOD(xfK){
var XF0=document.cookie.split(';');
var name=xfK+'=';
var xkI=name.length;
for(var i=0;i<XF0.length;++i){
if(XF0[i].substr(0,xkI)==name){
return unescape(XF0[i].substr(xkI));}}
return '';}
function XOE(){
var XF0=document.cookie.split(';'+' ');
var name;
var XNt;
var value;
var Xka;
var XNg;
var input;
var cookie='';
for(var i=0;(!cookie)&&i<XF0.length;++i){
if(XF0[i].substr(0,10)=='dgo_start='){
cookie=XF0[i].substr(10);}}
XF0=cookie.split(':');
for(var i=0;i<XF0.length;++i){
value=XF0[i].split('=',2);
name=value[0].split('-',2);
if(name.length<=1){
name=value[0];
XNt=0;}
else{
XNt=name[1]-0;
name=name[0];}
value=unescape(value[1]);
XNg=document.XO3[name];
if(XNg){
if(!XNg.length||XNg.length<1||
XNg[0].tagName=='OPTION')
{input=XNg;
XNg=[];
XNg[0]=input;}
input=XNg[XNt];
if(input.tagName=='SELECT'){
if(input.multiple){
var ii;
for(ii=0;ii<input.options.length;++ii){
input.options[ii].selected=false;}
Xka=value.split(',');
for(ii=0;ii<Xka.length;++ii){
input.options[Xka[ii]-0].selected=true;}}
else{
if((value-0)>0||value=='0'){
input.selectedIndex=(value-0);}}}
else if(input.tagName=='INPUT'){
switch(input.type){
case 'radio':
case 'checkbox':
if(value=='X'){
input.checked=true;}
else if(value=='-'){
input.checked=false;}
break;
case 'hidden':
case 'button':
break;
default:
input.value=value;
break;}}
else if(input.tagName=='TEXTAREA'){
input.value=value;}}
else{}}}
function XN8(xau,xGQ){
var c=(xau.childNodes||[]);
var e;
for(var i=0;i<c.length;++i){
e=c[i];
if(e.nodeType&&e.nodeType==xGQ){
return e;}}
return null;}
function XNa(XOC){
for(var i=0;i<XOC.length;++i){
if(XOC[i].checked){
return XOC[i].value;}}
return '';}
function XN6(XOK,XI4){
var XI3=(XI4||0);
var xd2=XI3;
var options=XOK.options;
var XNz;
for(var i=0;i<options.length;++i){
XNz=options[i];
if(XNz.selected){
xd2+=(typeof(XI3)=='number'?
XNz.value-0:XI3+XNz.value);}}
return(typeof(XI3)=='number'?xd2:xd2.substr(XI3.length*2));}
function XOR(){
var XTN=self.location.host+self.location.pathname;
var xkI=XTN.length;
var x1K=document.XNe.XOO;
var value;
var XR9;
for(var i=0;i<x1K.options.length;++i){
value=''+x1K.options[i].value;
XR9=Math.min(xkI,value.length);
if(value.substr(0,XR9)==XTN.substr(0,XR9)){
x1K.selectedIndex=i;
return true;}}
return false;}
function XNO(XNv){
if(!XNv)
return true;
return self.location.assign('http://'+XNv+
self.location.search+self.location.hash);}
function XVe(XOI){
document.XO3.XNj.value=XOI.value;
XOQ();
return true;}
function XVf(XOI){
var XWO=document.getElementById('starttype_lib');
if(XWO){
XWO.checked=true;
document.XO3.XNj.value=XOI.value;
XOQ();
XNI();}
return true;}
function XNM(XOI){
document.XO3.xNE.value=XOI.value;
XOQ();
return true;}
function XNL(XOI){
var XOL=document.getElementById('starttype_config');
if(XOL){
XOL.checked=true;
document.XO3.xNE.value=XOI.value;
XOQ();
XNI();}
return true;}
function XVd(XGT,XN1,xmN){
var x1K=XGT||null;
if(!x1K){
return false;}
XNM(x1K);
var size=xmN||3;
if(XN1){
x1K.size=x1K.options.length;}
else{
x1K.size=size;
x1K.scrollTop=Math.max(0,x1K.selectedIndex-1)
*x1K.scrollHeight/x1K.options.length;}
return true;}
function XNH(XN1){
var XNE=document.getElementById('flags_div_1');
var XNF=document.getElementById('flags_div_2');
if(XN1){
XNF.style.display='none';
XNE.style.display='block';
var e=XN8(XNE,1);
e&&e.focus();}
else{
XNE.style.display='none';
XNF.style.display='block';}
return true;}
function XNN(XOI){
document.XO3.Xb.value=
XN6(XOI,',');
return XOQ();}
function XU0(XN1){
var XNE=document.getElementById('xflags_div_1');
var XNF=document.getElementById('xflags_div_2');
if(XN1){
XNF.style.display='none';
XNE.style.display='block';
var e=XN8(XNE,1);
e&&e.focus();}
else{
XNE.style.display='none';
XNF.style.display='block';}
return true;}
function XUZ(XOI){
document.XO3.XUj.value=
XN6(XOI,',');
return XOQ();}
function XN9(){
var XN0=
(self.location.host.match('daimlerchrysler')||
self.location.pathname.match('(_nojs/|\.dgohtml$)')?true:false);
var xHQ='frameset.';
var xoQ=XNa(document.XO3.XOU);
if(xoQ=='asp'){
xHQ+='asp';}
else if(xoQ=='cgi'){
xHQ+='cgi';}
else{
xHQ+=(XN0?'dgohtml':'html');}
xoQ=XNa(document.XO3.XOV);
if(xoQ=='program'){
xHQ+='?program='+escape(document.XO3.xBH.value);}
else if(xoQ=='tour'){
xHQ+='?tour='+escape(document.XO3.Xav.value);}
else if(xoQ=='lib'){
xHQ+='?library='+escape(document.XO3.XNj.value);}
else{
xHQ+='?config='+escape(document.XO3.xNE.value);}
var xnN=document.XO3.XOP.selectedIndex;
xnN=document.XO3.XOP.options[
Math.max(xnN,0)].value;
if(document.XO3.Xaq.checked){
if(xnN=='hidden'){
xnN='timebar-narrow';}
xHQ+='&verbose='+document.XO3.XO6.value+
'&ui=true&hidden=false';}
if(xnN!='default'){
xHQ+=(xnN=='hidden'?'&hidden=true':'&skin='+xnN);}
var xPO=document.XO3.XjI.selectedIndex;
xPO=document.XO3.XjI.options[
Math.max(xPO,0)].value;
if(xPO!=''){
xHQ+='&guistyle='+escape('{cfg_background:"url(background57.gif)"'+
',cfg_synopsis:"'+xPO+'"}');}
var lang=document.XO3.XbZ.selectedIndex;
lang=document.XO3.XbZ.options[
Math.max(lang,0)].value;
if(lang!='default'){
xHQ+=('&contentlanguage='+lang);}
lang=document.XO3.Xm8.selectedIndex;
lang=document.XO3.Xm8.options[
Math.max(lang,0)].value;
if(lang!='default'){
xHQ+=('&guilanguage='+lang);}
if(document.XO3.title.value.length>0){
xHQ+='&title='+escape(document.XO3.title.value);}
if(document.XO3.timeout.value.length>0){
xHQ+='&timeout='+document.XO3.timeout.value;}
if(document.XO3.xKK.value.length>0){
xHQ+='&mode='+document.XO3.xKK.value;}
var options=document.XO3.XON.options;
var XNz;
for(var i=0;i<options.length;++i){
XNz=options[i];
if(XNz.selected){
xHQ+='&'+XNz.value+'=true';}}
options=document.XO3.XUY.options;
for(var i=0;i<options.length;++i){
XNz=options[i];
if(XNz.selected){
xHQ+='&'+XNz.value+'=false';}}
if(document.XO3.Xpm.checked&&
(document.XO3.X2l.checked||
document.XO3.X7U.checked||
document.XO3.X26.checked||
document.XO3.X2p.value))
{
xoQ='';
document.XO3.X2l.checked&&
(xoQ+=',cfg_use_original_max:true');
document.XO3.X7U.checked&&
(xoQ+=',cfg_score_precedence_lms:true');
document.XO3.X26.checked&&
(xoQ+=',cfg_only_one_commit:true');
document.XO3.X2p.value&&
(xoQ+=',cfg_decide_completeness:'+
document.XO3.X2p.value);
xHQ+='&lms='+escape('{'+xoQ.substr(1)+'}');}
if(document.XO3.XOS.value.length>0){
xHQ+='&'+document.XO3.XOS.value;}
if(document.XO3.XIR.value.length>0){
xHQ+='#'+escape(document.XO3.XIR.value);}
return xHQ;}
function XOQ(){
document.XO3.xOJ.value=XN9();
return true;}
var Xp2={
Xpj:null
,Xpq:function(){
var Xph,className;
if(typeof(this.Xpi)=='number'){
Xph=this.Xpi;
className=this.Xpk>=Xph?'passed':'failed';}
else{
Xph='-';
className='unknown';}
this.Xp8='<span class='+className+'>'+
this.Xpk+'/'+Xph+'/'+this.X28+
'</span>'+(this.X0D?'('+this.X0D+')<br>':'<br>')+
this.Xp7+' commits;time:'+this.xCl+
'<br>bookmark:'+this.X0s+';exit:'+this.Xpa;
this.Xpj&&(this.Xpj.innerHTML=this.Xp8);}
,LMSInitialize:function(Xpl){
this.Xp9='';
this.xSL='';
this.Xp8='initialized';
this.Xpk='';
this.Xpi='';
this.X28='';
this.X0D='';
this.xCl='?';
this.Xpa='-';
this.X0s='';
this.Xp7=0;
this.Xpj=self.document.getElementById('lmstrace');
this.Xpq();
return 'true';}
,LMSFinish:function(){
this.Xp8+=';finished';
this.Xpq();
this.Xpj=null;
return 'true';}
,LMSSetValue:function(xfK,XIH){
switch(xfK){
case 'cmi.core.lesson_status':this.X0D=XIH;break;
case 'cmi.core.session_time':this.xCl=XIH;break;
case 'cmi.core.lesson_location':this.X0s=XIH;break;
case 'cmi.core.exit':this.Xpa=XIH;break;
case 'cmi.core.score.raw':this.Xpk=XIH-0;break;
case 'cmi.core.score.max':
this.X28=XIH-0;
this.Xpi='';
break;
case 'cmi.student_data.mastery_score':
this.Xpi=XIH-0;
break;
default:
this.Xp9='401';
this.xSL='not implemented:set "'+xfK+'"';
return 'false';}
this.Xpq();
return 'true';}
,LMSGetValue:function(xfK){
switch(xfK){
case 'cmi.core.student_id':
case 'cmi.core.student_name':
case 'cmi.core.total_time':
case 'cmi.core.entry':
case 'cmi.core.exit':
break;
case 'cmi.core.lesson_status':
return this.X0D;
case 'cmi.core.session_time':
return this.xCl;
case 'cmi.student_preference.language':
return document.XO3.XNC.value;
case 'cmi.core.score.max':
typeof(this.X28)!='number'&&
document.XO3.X21.value&&
(this.X28=document.XO3.X21.value-0);
return this.X28+'';
case 'cmi.student_data.mastery_score':
typeof(this.Xpi)!='number'&&
document.XO3.Xph.value&&
(this.Xpi=document.XO3.Xph.value-0);
return this.Xpi+'';
case 'cmi.core.score.raw':
return this.Xpk+'';
case 'cmi.core.lesson_location':
this.X0s==''&&
document.XO3.lms_bookmark.value&&
(this.X0s=document.XO3.lms_bookmark.value);
return this.X0s+'';
default:
this.Xp9='401';
this.xSL='not implemented:get "'+xfK+'"';
return 'false';}
return '';}
,LMSCommit:function(Xpl){
++this.Xp7;
this.Xpq();
return 'true';}
,LMSGetLastError:function(){
return this.Xp9||'';}
,LMSGetErrorString:function(){
return this.xSL||'';}
,LMSGetDiagnostic:function(){
return this.Xp8||'';}};
var Xp1={
Xpj:null
,Initialize:Xp2.LMSInitialize
,Terminate:Xp2.LMSFinish
,SetValue:Xp2.LMSSetValue
,GetValue:Xp2.LMSGetValue
,GetLastError:Xp2.LMSGetLastError
,GetErrorString:Xp2.LMSGetErrorString
,GetDiagnostic:Xp2.LMSGetDiagnostic};
var API_1484_11=null;
var API=null;
var XSh=(new Date).valueOf()-0;
function XNI(){
var Xpg=self.document.getElementById('lmstrace');
Xpg&&(Xpg.innerHTML='no LMS');
var xoQ=XNa(document.XO3.XOU);
if(document.XO3.window.checked){
if(document.XO3.Xpm.checked){
if(document.XO3.Xpn&&
document.XO3.Xpn.checked)
{
API_1484_11=Xp1;
API=null;}
else{
API_1484_11=null;
API=Xp2;}}
else{
API_1484_11=null;
API=null;}
var xxk=(document.XO3.Xaq.checked?
'location=yes,menubar=yes,resizable=yes,scrollbars=yes,'+
'status=yes,titlebar=yes,toolbar=yes':
'location=no,menubar=no,resizable=yes,scrollbars=yes,'+
'status=yes,titlebar=yes,toolbar=no');
var XVO={
cfg_name:'datango_trainer' 
,cfg_features:xxk};
var x8Q=(xoQ=='asp'
?XaB(document.XO3.xOJ.value,XVO,
self,self.Xrr)
:XaB(document.XO3.xOJ.value,XVO));
return true;}
else{
if(xoQ=='asp'){
var form=document.XkG;
form.action=document.XO3.xOJ.value;
form.target='_self';
form.submit();}
else{
self.location.replace(document.XO3.xOJ.value);}}
return false;}
function Xrr(x9Q){
var xoQ=XNa(document.XO3.XOU);
if(xoQ=='asp'){
var form=document.XkG;
form.action=document.XO3.xOJ.value;
form.target=x9Q.name;
form.submit();
x9Q.focus();}
return true;}
function XNJ(){
self.location.replace(self.location.href+
'/../frameset.html?library='+document.XNe.XNj.value);
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
