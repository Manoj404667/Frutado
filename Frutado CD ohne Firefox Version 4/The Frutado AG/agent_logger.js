//
var Xkf=/;[ ]*/;
function XAW(XCI){
if(!XCI)return;
this.XCI=XCI;
this.error+='@L log:"'+XCI.XRN().Xl+'"\r\n';
this.xMj=XCI.Xu().xNI(XCI.XRN().Xl);
this.error+='@L url:"'+this.xMj+'"\r\n';
if(this.xMj.XFJ_().substr(0,4)!='http'){
this.error='@L no logging,prot='+this.xMj.XFJ_();
this.xMj=null;
this.x6K=true;
return;}
if(this.XCI.XRN().domain){
this.xMj.XC8('');
this.xMj.XWg(
'domain',this.XCI.XRN().domain);
this.error+='@L url+domain:"'+unescape(this.xMj)+'"\r\n';}
this.xVG=XCI.XF3().parent.frames.trainer_log_frame;
if(!this.xVG){
this.error='frame '+"trainer_log_frame"+' not found';
return;}
var XF0=XCI.XF3().document.cookie.split(Xkf);
var XK1='logid=';
var XEX;
for(var i=0;i<XF0.length;++i){
XEX=XF0[i].substr(0,6);
if(XEX==XK1){
this.XK2=XF0[i].substr(6);
i=XF0.length;}}
this.error+='@L logid:"'+this.XK2+'"';
this.x6K=true;}
XAW.prototype={
x6K:false
,error:''
,load:function(){
if(!this.xMj){
return true;}
this.XKn='';
this.XCt='';
this.xhQ=false;
this.XkN=0;
this.x6P=0;
this.XK3=-1;
this.xfQ=false;
this.xVG.location.replace(this.xMj.toString());
return true;}
,XEu:function(XEt,xfK,XIH,Xk0,Xk1){
if(!this.xMj){
return true;}
var Xkd='';
switch(xfK){
case 'applet':
case 'user':
Xkd='<'+xfK+' event="'+XIH+'" '+this.XKh()+'/>';
break;
case 'buffer':
Xkd='<buffer duration="'+XIH+'" '+this.XKh()+'/>';
break;
case 'markerhit':
Xkd='<markerhit marker="'+XIH+'" '+this.XKh()+'/>';
break;
case 'page':
Xkd='<page url="'+XJn(XIH)+'" frame="'+Xk0+
'" duration="'+Xk1+'" '+this.XKh()+'/>';
break;
case 'pause':
Xkd='<pause duration="'+XIH+'" begin="'+Xk0+
'" end="0" '+this.XKh()+'/>';
break;
case 'score':
Xkd='<score current="'+XIH+
'" max="'+Xk0+'" mastery="'+Xk1+'"/>';
break;
case 'stop':
Xkd='<stop '+this.XKh()+'/>';
break;
case 'stream':
Xkd='<stream state="'+XIH+'"'+
(Xk0?' trans="'+Xk0+'" ':' ')+this.XKh()+'/>';
break;
case 'tourlink':
var url=new Url(XIH);
var XK5=url.XFQ();
var Xka=url.XFR();
var xar='';
for(var i=0;i<XK5.length;++i){
xar+=' '+XK5[i]+'="'+Xka[i]+'"';}
url.XC8('');
url.XC2('');
Xkd='<tourlink base="'+url+'"'+xar+' '+this.XKh()+'/>';
break;
case 'xml':
if(XIH.substr(0,6)!='<poll-'){
Xkd=''+XIH;}
break;
default:
if(XEt){
Xkd='<'+xfK+' '+this.XKh()+'>'+
XJn(XIH)+'</'+xfK+'>';}else{
this.XKn+=(' '+xfK+'="'+XJn(XIH)+'"');}
break;}
if(Xkd){
this.XCt+=((this.XCt?'\r\n\ ':' ')+Xkd);}
return true;}
,send:function(x6P){
if(!this.xMj){
this.XCI.Xpr('@L SEND Request ignored(wrong protocol)');
return true;}
this.XCI.Xpr('@L SEND Request');
++this.XkN;
this.x6P=x6P;
this.xhQ=true;
if(this.xfQ){
this.XkI();}
return true;}
,XCI:null
,xMj:null
,xVG:null
,XKn:''
,XCt:''
,xfQ:false,xhQ:false,XRA:false,XkN:0
,XK2:null
,x6P:0
,XK3:-1
,XKh:function(){
var xVM=(new Date()).valueOf()-this.XCI.XKg();
var XkV=this.XCI.XKj();
if(typeof(XkV)=='number'){
if(this.XK3<XkV){
this.XK3=XkV;}}
else{
XkV=this.XK3;}
return 'realtime="'+xVM+'" tourtime="'+XkV+'"';}
,XkI:function(){
if(this.xhQ&&(this.XKn||this.XCt)){
var Xl=this.xVG.document.XkG['log'];Xl.value=
'<webridelog start="'+this.XCI.XKg()+
'" invocation="'+this.XCI.XKi()+
'" trigger="'+this.x6P+
'" issue="'+this.XkN+
'" logid="'+this.XK2+
'" '+this.XKn+
'>\r\n'+this.XCt+'\r\n</webridelog>\r\n';
this.XRA=true;
this.xVG.document.XkG.encoding='multipart/form-data';
this.xVG.document.XkG.method='post';
this.xVG.document.XkG.action=this.xMj.toString();
this.xVG.document.XkG.submit();
this.xfQ=false;
this.XCt='';
this.XCI.Xpr('@L POST To "'+this.xVG.document.XkG.action+'"');}
this.xhQ=false;
return true;}
,XGj:function(){
this.XRA=false;
this.xfQ=true;
this.XCI.Xpr('@L POSTer LOAD "'+this.xVG.location.href+'"');
if(this.xhQ&&(this.XKn||this.XCt)){
this.XCI.Xlc().add(new XbY(
'LOGsend',this,this.XkI));}
return true;}}
if(self.XI7){XI7.XJB(new XIX('../agent_logger.js',['url.js']));}

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
