//
//
function XAH(XCI,xMj){
if(!XCI)return;
this.XCI=XCI;
this.xMj=xMj;
this.xVG=XCI.XF3().parent.frames.trainer_tour_frame;
if(!this.xVG){
var xbK='frame '+"trainer_tour_frame"+' not found';
XCI.Xpr('@P ctor:'+xbK,'error');
this.error=xbK;
return;}
this.XCo=[];
this.Xmv=[];
this.Xmw=[];
this.XIC={};
this.x6K=true;}
var XE2=1;
var XHa=2;
XAH.prototype.x6K=false;
XAH.prototype.error='?';
XAH.prototype.Xof=function(XFj,xtg){
if(XFj<0||XFj>=this.Xcu())
return false;
this.XCo[XFj].jumpable=!(!xtg);
return true;}
XAH.prototype.X9P=function(Xcp){
this.X9M=Xcp;
return true;}
XAH.prototype.X9Q=function(Xcp){
this.X9O=Xcp;
return true;}
XAH.prototype.X9L=function(){
if(this.XCI){
this.XCI.XE6.Xsl(this.XCI.xbw.Xin('error_script'));
if(typeof(this.X9M)=='string'){
this.XCI.XE6.Xsl(this.X9M);}}
return true;}
XAH.prototype.X9N=function(){
if(this.XCI){
this.XCI.XE6.Xsl(this.XCI.xbw.Xin('stop_script'));
if(typeof(this.X9O)=='string'){
this.XCI.XE6.Xsl(this.X9O);}}
return true;}
XAH.prototype.load=function(XCZ,XCY){
this.XC0=new XAZ(XCZ,XCY,
(this.XCI.XRN().xuQ>=2?XAU:null));
var XXc=false;
var url=this.xMj.XCf();
var path=url.XFG();
this.XFD_=null;
if(path.substr(path.length-4)=='.dmf'){
path=path.substr(0,path.length-4);
var xoL=path.lastIndexOf('/');
if(xoL>=0){
url.XC4(path.substr(0,xoL+1)+
'jfn/'+path.substr(xoL+1)+'.js');}
else{
url.XC4('jfn/'+path+'.js');}
this.XFD_=url.toString();
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('@P changed url to "'+this.XFD_+'"');}}
else if(path.substr(path.length-4)=='.xml'){
XXc=true;
if(this.XTf){
this.XTf.XO5();}
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('@P attempt to load XML tour');}}
if(!XXc){
this.XTf&&this.XTf.XO5();
this.XTf=null;}
this.XCI.XkZ();
this.XXc=XXc;
this.xMj=url.XCf();
var xAA=this.XCI.XRN().xAA;
if(xAA!=''){
return this.Xzz(xAA);}
else{
return this.Xzy();}}
XAH.prototype.Xzz=function(xAA){
var xuQ=this.XCI.XRN().xuQ>=1;
if(X9w('trainer:macrosets/'+xAA+'/jsfiles.txt',
self,this,this.Xzy,
xuQ?XAU:null,
this.XCI.XRN().xBb)!=1){
xuQ&&XAU('AP cannot load:'+'trainer:'+xAA+'jsfiles.txt','error');
return false;}
return true;}
XAH.prototype.Xzy=function(xyO){
if(xyO){
var Xsi=xyO.split(Xr6);
for(var n=0;n<Xsi.length;n++){
Xsi[n]=(new Url('trainer:macrosets/'+
this.XCI.XRN().xAA+
'/'+
Xsi[n])).toString();}
Xsi[Xsi.length]=(new Url('trainer:EventWrapper.js')).toString();
Xsi[Xsi.length]=(new Url('trainer:projects/'+
this.XCI.XRN().xAA+
'_defaults.js;')).toString();
this.XCI.XRN().XrC=Xsi.join(';');}
else if(xyO===false){return XPi('program','could not load '+
new Url('trainer:macrosets/'+
this.XCI.XRN().xAA+
'/jsfiles.txt'));}
return(this.XXc?this.XXq(this.xMj):this.XXo(this.xMj));}
XAH.prototype.exec=function(XFj,XKQ){
var options=(XKQ||0);
var X4a=(options & XE2);
var xbK;
if(X4a){
if(XFj<this.X56||XFj>=this.Xcu()){
xbK='AgentProgram::exec(CALL)failure:'+XFj+
'>=callable count '+this.Xcu();}}
else{
if(XFj<0||XFj>=this.X56){
xbK='AgentProgram::exec()failure:'+XFj+
'>=sub count '+this.X56;}}
if(xbK){
this.XCI.Xpr('@P '+xbK,'error',1);
alert(xbK);
return false;}
this.XCI.Xpr(this.Xti(XFj),(X4a?'call':'sub'),1);
if(this.XTf){
this.X6V(XFj,options);
var xa7=(new XIx(this.XTf)).
XX8(this.XCI.XXe(),XFj,
this.XEO(XFj),
this.XYZ);
if(xa7!==true){
var xbK='AgentProgram::exec('+XFj+')failure '+
(xa7?' ['+xa7+']':'');
this.XCI.Xpr('@P '+xbK,'error');
this.XCI.xwF('program',xbK);
return false;}
return true;}
var X1K=this.XCo[XFj].name;
if(typeof(X1K)!='function'){
X1K=this.xVG[this.XCo[XFj].name];}
if(typeof(X1K)!='function'){
var xbK='AgentProgram::exec('+XFj+
')failure:Not function:"'+
this.XCo[XFj].name+'" ['+
typeof(X1K)+']';
this.XCI.Xpr('@P '+xbK,'error',1);
this.XCI.xwF('ex',xbK);
return false;}
this.X6V(XFj,options);
var xa7=X1K(this.XCI.Xlf().Xls());
if(!xa7){
var xbK='AgentProgram::exec('+XFj+')failure:"'+
X1K+'"='+xa7;
this.XCI.Xpr('@P '+xbK,'error',1);
this.XCI.xwF('ex',xbK);
return false;}
return true;}
XAH.prototype.XZE=function(){
if(this.XZF){
return this.exec(this.X56,XE2);}
return true;}
XAH.prototype.x6U=function(){
return this.xVG;}
XAH.prototype.Xu=function(){
return this.xMj;}
XAH.prototype.X4J=function(){
if(this.X3v<=0){
this.X3v=0;
return 0;}
this.X97[this.X3v]=-1;
if(this.X3v==this.X3u){
this.X3u=0;}
if(this.X3v==1){
this.X97=null;}
return--this.X3v;}
XAH.prototype.Xba=function(){
while(this.X4p()>0){
this.X4J();
this.XCI.Xpr('return','call_ret',1);}
return true;}
XAH.prototype.X4p=function(){
return this.X3v;}
XAH.prototype.X9c=function(){
if(this.X3v<=0){
return-1;}
return this.X97[this.X3v];}
XAH.prototype.X4o=function(){
return this.X3u>0;}
XAH.prototype.XEO=function(XFj){
var xd2=0;
if(typeof(XFj)=='number'){
if(XFj<0||XFj>=this.Xcu()){
return 0;}
if(this.XCo[XFj].audio_duration&&
!this.XCI.XRN().xcK)
{xd2=Math.max(this.XCo[XFj].audio_duration,
this.XCo[XFj].duration);}else{
xd2=this.XCo[XFj].duration;}}else{
for(var i=0;i<this.X56;++i){
if(this.XCo[i].audio_duration&&
!this.XCI.XRN().xcK)
{xd2+=Math.max(this.XCo[i].audio_duration,
this.XCo[i].duration);}else{
xd2+=this.XCo[i].duration;}}}
return xd2;}
XAH.prototype.Xin=function(xzj){
return this.XIC[xzj]||'';}
XAH.prototype.Xcu=function(X4i){
if(X4i){
return this.X56;}
return this.XCo.length;}
XAH.prototype.getName=function(XFj){
if(XFj<0||XFj>=this.Xcu())
return '';
return this.XCo[XFj].name;}
XAH.prototype.XEK=function(XFj){
if(XFj<0||XFj>=this.Xcu())
return '';
var name=this.XCo[XFj].audio;
if(!name)
return '';
return(this.XFD_?'jfn/':'')+name;}
XAH.prototype.Xo9=function(XFj){
if(XFj<0||XFj>=this.Xcu())
return-1;
for(var i=0;i<this.Xmv.length;++i){
if(this.Xmv[i]==XFj){
return i;}}
return-1;}
XAH.prototype.Xmt=function(xgP){
var i;
for(i=0;i<this.X56;++i){
if(this.Xti(i)==xgP){
return i;}}
i=xgP-1;
if(i>=0&&i<this.Xcu()){
i=this.Xmv[i];
if(i>=0&&i<this.X56){
return i;}}
return-1;}
XAH.prototype.Xz1=function(Xzf){
var i;
for(i=0;i<this.X56;++i){
if(this.Xz8(i)==Xzf){
return i;}}
i=Xzf-1;
if(i>=0&&i<this.Xcu()){
i=this.Xmv[i];
if(i>=0&&i<this.X56){
return i;}}
return-1;}
XAH.prototype.XO0=function(xgP){
for(var i=0;i<this.Xcu();++i){
if(this.Xti(i)==xgP){
return i;}}
var XFi=xgP-0;
if(XFi>=0&&XFi<this.Xcu()){
return XFi;}
return-1;}
XAH.prototype.XzZ=function(Xzf){
for(var i=0;i<this.Xcu();++i){
if(this.Xz8(i)==Xzf){
return i;}}
var XFi=Xzf-0;
if(XFi>=0&&XFi<this.Xcu()){
return XFi;}
return-1;}
XAH.prototype.Xti=function(XFj){
var XCn;
if(XFj==undefined){var xd2=[];
for(var i=0;i<this.Xcu();++i){
XCn=this.XCo[i];
xd2[xd2.length]=(XCn.title||XCn.name||'');}
return xd2;}
if(XFj<0||XFj>=this.Xcu())
return '';
XCn=this.XCo[XFj];
return XCn.title||XCn.name||'';}
XAH.prototype.Xz8=function(XFj){
if(XFj<0||XFj>=this.Xcu())
return '';
var XCn=this.XCo[XFj];
return XCn.uid||'';}
XAH.prototype.Xgso=function(XFj){
if(XFj<0||XFj>=this.Xcu())
return false;
return this.XCo[XFj].visible;}
XAH.prototype.X4y=function(XFj){
if(XFj<0||XFj>=this.Xcu())
return false;
return this.XCo[XFj].jumpable;}
XAH.prototype.Xmu=function(XFj){
if(XFj<0||XFj>=this.Xcu())
return 0;
return this.Xmw[XFj];}
XAH.prototype.XFY=function(XFj){
if(XFj<0||XFj>=this.Xcu())
return 0;
var t=0;
for(var i=0;i<XFj;++i){
if(this.XCo[i].audio_duration){
t+=Math.max(this.XCo[i].audio_duration,
this.XCo[i].duration);}else{
t+=this.XCo[i].duration;}}
return t;}
XAH.prototype.Xtm=function(XFj){
return this.XFY(XFj)/1000;}
XAH.prototype.X5A=function(XFj){
if(XFj<-1||XFj+1>=this.Xcu(true))
return-1;
var XFi=XFj+1;
while(XFi<this.Xcu()&&
!this.XCo[XFi].jumpable)
{
++XFi;}
return(XFi<this.Xcu()?XFi:-1);}
XAH.prototype.X5F=function(XFj){
if(XFj<1||XFj>this.Xcu(true))
return-1;
var XFi=XFj-1;
while(XFi>=0&&!this.XCo[XFi].jumpable){
--XFi;}
return(XFi>=0?XFi:-1);}
XAH.prototype.toString=function(){
var i,xGO,name;
var XYA='';
for(i=0;i<this.XCo.length;++i){
xGO=this.XCo[i];
XYA+=';'+i+':"'+xGO.title+'",'+xGO.duration+'ms,'+
(xGO.visible?'+':'-')+'vis,'+
(xGO.jumpable?'+':'-')+'jump,'+
(xGO.callable?'+':'-')+'call,'+
'audio "'+xGO.audio+'",'+
'ori['+this.Xmv[i]+']:'+
this.Xmw[i]+'ms';}
var XYB='';
for(name in this.XIC){
XYB+=';'+name+':"'+this.XIC[name]+'"'}
return 'AgentProgram.content={'+this.XCo.length+
' subs:'+XYA.substr(1)+'},headers:{'+XYB.substr(1)+'}}';}
XAH.prototype.XCI=null;
XAH.prototype.xMj=null;XAH.prototype.xVG=null;
XAH.prototype.XFD_=null;
XAH.prototype.X3v=0;XAH.prototype.X3u=0;XAH.prototype.X97=null;XAH.prototype.XC0=null;XAH.prototype.XTf=null;
XAH.prototype.XY7=0;
XAH.prototype.XZF=false;XAH.prototype.X9O=null;XAH.prototype.X9M=null;
XAH.prototype.XCo=[];
XAH.prototype.Xmv=null;XAH.prototype.Xmw=null;XAH.prototype.XYZ=8;
XAH.prototype.X56=0;
XAH.prototype.XIC={};
XAH.prototype.XrH=/[;]/;
XAH.prototype.XrG=function(){
var a=this.XCI.XRN().XrC;
var XTa=this.XCI.Xu();
var xd2='';
if(!a){
return '';}
a=a.split(this.XrH);
for(var i=0;i<a.length;++i){
xd2+='<script language=javascript src='+
XTa.xNI(a[i])+'></script>\n';}
return xd2;}
XAH.prototype.X66=function(XY2){
var subs=[];
var X3w=[];
var Xmr=[];
var Xms=[];
var title=XY2[0].title.toLowerCase();
var i,xGO,x4K;
if(title=='init'||title=='start'){
XY2[0].callable=true;
XY2[0].visible=false;
XY2[0].jumpable=false;
this.XZF=true;}
for(i=0,x4K=0;i<XY2.length;++i){
xGO=XY2[i];
if(xGO.callable){
Xmr[X3w.length]=i;
Xms[X3w.length]=x4K;
X3w[X3w.length]=xGO;}
else{
this.Xmv[i]=subs.length;
this.Xmw[subs.length]=x4K;
subs[subs.length]=xGO;}
x4K+=xGO.duration;}
this.X56=subs.length;
for(i=0;i<X3w.length;++i){
this.Xmv[Xmr[i]]=subs.length;
this.Xmw[subs.length]=Xms[i];
subs[subs.length]=X3w[i];}
this.XCo=subs;
return this.X56;}
XAH.prototype.XXo=function(xMj){
var x4E=this.xVG.document;
x4E.open('text/html');
var domain=this.XCI.XRN().domain;
if(domain){
if(self.location.protocol=='http:'||
self.location.protocol=='https:')
{
x4E.domain=domain;}}
var charset=this.XCI.XRN().charset;
try{
x4E.charset=charset;}
catch(xa8){
var xaw=new x6C(xa8);
this.XCI.Xpr('@P Exception setting charset to "'+
charset+'":'+xaw+' [no umlaut support]',
'error');}
//
var frameElement=XPB(this.xVG);
var xHL=this.xVG.parent;
xHL.ctx_control=this.XCI.Xlf().Xls();
xHL.udc=this.XCI.Xlf().Xls().udc;
XGH(xHL,frameElement,this,this.XXp);
var html='<html>';
html+='<head><meta http-equiv=Content-Type';
html+=' content="text/html;charset='+charset+'">\n';
html+='<script language=javascript>';
html+='var ctx=ctx_control=parent.ctx_control;';
html+='var udc=parent.udc;';
html+='</script>\n';
html+=this.XrG();
html+='</head>';
html+='<body bgcolor="#4d7aa6"><script language=javascript';
html+=' src="'+xMj+'"';
html+='></script></body></html>';
x4E.write(html);
x4E.close();
return true;}
XAH.prototype.XXp=function(XbL){
XVo(XbL);
var XLk=this.XCI;
var xuQ=XLk.XRN().xuQ;
var url=this.XFD_||this.xMj;
if(typeof(this.xVG.getWebAutomationProgramContent)!='function'){
if(XLk.XKf()){
XLk.Xpr('@P loadJs_Cb_ compression failure','warning');
XLk.XkZ();
XLk.Xlc().add(new XbY(
'ProgramReloadNoGzip',this,this.xaA));
return false;}
var xbK='SCRIPT '+url+
':typeof getWebAutomationProgramContent not function('+
typeof(this.xVG.getWebAutomationProgramContent)+')';
XLk.Xpr('@P loadJs_Cb_():'+xbK,'error');
XLk.xwF('program',xbK);
return false;}
var XCn=this.xVG.getWebAutomationProgramContent();
if(typeof(XCn)!='object'||typeof(XCn.subs)!='object'||
typeof(XCn.subs.length)!='number'||typeof(XCn.userHeader)!='object')
{
var xbK='SCRIPT '+url+
':retval of getWebAutomationProgramContent not object ['+
typeof(XCn)+']';
XLk.Xpr('@P loadJs_Cb_():'+xbK,'error');
XLk.xwF('program',xbK);
return false;}
this.X66(XCn.subs);
this.XIC=XCn.userHeader;
if(xuQ>=2){
var x4E=this.xVG.document;
XLk.Xpr('@P loaded:(charset '+x4E.charset+
',characterSet '+x4E.characterSet+')'+this,'success');}
return this.XC0.exec('@P loaded');}
XAH.prototype.XXq=function(xMj){
this.XY7=0;
this.XFD_=xMj;var XJJ=[ '../eventfactory_xml.js' ];var XX0=this;
var XUL=function(XNV){
return XX0.XXr(XNV);}
if(!XI7.load(XJJ,XUL)){
var xbK=' error calling dynloader.load(eventfactory_xml)';
this.XCI.Xpr('@P loadXml_():'+xbK,'error');
alert(xbK);
this.XCI.xwF('program',xbK);
return false;}
return true;}
XAH.prototype.XXr=function(XNV){
if(XNV>0){
var xbK=XNV+
' error(s)during dynloader.load(eventfactory_xml)';
this.XCI.Xpr('@P loadXml_():'+xbK,'error');
alert(xbK);
this.XCI.xwF('program',xbK);
return false;}
var xMj=this.XFD_;this.XFD_=null;
if(!this.XTf){
this.XTf=new XMw(this.xVG,
typeof(XAU)=='function'||
typeof(XAU)=='object'?XAU:null);}
if(!this.XTf.load(xMj,this,this.XXs)){
var xbK=' error calling XmlData.load('+xMj+')';
this.XCI.Xpr('@P loadXml_Cb1_():'+xbK,'error');
alert(xbK);
this.XCI.xwF('program',xbK);
return false;}
return true;}
XAH.prototype.XXs=function(XNV){
var XLk=this.XCI;
if(XNV>0){
if(XLk.XKf()){
XLk.Xpr(
'@P compression failure. Re-loading without.','warning');
XLk.XkZ();
XLk.Xlc().add(new XbY(
'ProgramReloadNoGzip',this,this.xaA));
return false;}
var xbK=XNV+' error(s)loading XML program "'+
this.xMj+'"';
XLk.Xpr('@P loadXml_():'+xbK,'error');
XLk.xwF('program',xbK);
return false;}
var XCn={};
var xa7=(new XIx(this.XTf)).XYJ(XCn);
this.X66(XCn.subs);
this.XYZ=XCn.subs.XYZ;
this.XIC=XCn.userHeader;
if(xa7!==true){
var xbK='XML reader:Cannot read program content'+
(xa7?' ['+xa7+']':'');
XLk.Xpr('@P loadXml_():'+xbK,'error');
XLk.xwF('program',xbK);
return false;}
XLk.Xpr('@P XML loaded:'+this,'info');
return this.XC0.exec('@P XML loaded');}
XAH.prototype.xaA=function(){
return this.load(this.XC0.XKe(),this.XC0.XKd());}
XAH.prototype.X6V=function(XFj,XKQ){
if(XKQ & XE2){
if(++this.X3v==1){
this.X97=[];}
this.X97[this.X3v]=XFj;
if(XKQ & XHa){
this.X3u=this.X3v;}}}
function XAK(xbw,XFr){
this.XFr=XFr;
this.xbw=xbw;}
XAK.prototype.XFr=0;
XAK.prototype.xbw=null;
XAK.prototype.Xi=function(){
return this.XFr;}
XAK.prototype.XFJ=function(){
return this.xbw;}
XAK.prototype.Xhn=function(){
var xd2=this.XFr+1<this.xbw.Xcu(true);
return xd2;}
XAK.prototype.Xhp=function(){
var xd2=true;return xd2;}
if(self.XI7){XI7.XJB(new XIX('../program.js'));}

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
