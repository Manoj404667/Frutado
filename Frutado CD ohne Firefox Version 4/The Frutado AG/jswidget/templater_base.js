var Templater_OPTIONS_NONE=0;
function Templater(XKQ){
this.XKQ=XKQ||0;
var Xjj=this;
this.XHh=function(XGE,X7a){
Xjj.XGp(XGE,X7a);};
this.cfg_error='ok';
this.cfg_ok=true;}
var Templater_TYPE_STRING=1;
var Templater_TYPE_URL=2;
var Templater_TYPE_STYLEURL=3;
Templater.prototype={
cfg_ok:false
,cfg_error:'?'
,X78:{
'INPUT':[ Templater_TYPE_STRING,'value' ]
,'IMG':[ Templater_TYPE_URL,'src' ]
,'LINK':[ Templater_TYPE_URL,'href' ]
,'ALL_':[ Templater_TYPE_STRING,'title'
,Templater_TYPE_STRING,'alt'
,Templater_TYPE_STYLEURL,'style' ]}
,cfg_apply:function(xVG,XKQ){
this.XGp('TPLR apply('+xVG.name+'='+xVG.location+')start');
this.xVG=xVG;
this.XKQ |=(XKQ||0);
var x4E=xVG.document;
if(!x4E||!x4E.body){
this.cfg_ok=false;
this.cfg_error='No doc or doc.body';
this.XGp('TPLR apply():'+this.cfg_error);
return false;}
x4E.title=this.Xmd(x4E.title);
this.Xmh(x4E.documentElement);
this.XGp('TPLR apply():ok');
return(this.cfg_ok=true);}
,cfg_clearLog:function(){
this.XGE='';
return true;}
,cfg_getLog:function(){
return this.XGE;}
,cfg_getCtx:function(){
return this.XQF;}
,cfg_initConfig:function(XPz,XgP,XCZ,XCY){
this.XGp('TPLR initConfig('+XPz+')called');
this.XPz=XPz;
this.XgP=XgP;
this.XQE=null;
this.XQF=null;
this.Xh2=null;
this.xVG=null;
var Xjj=this;
var xNE=new xGB(this.XgP,{
Xml:true
,XVq:true
,Xmn:true
,XVW:this.XPz},XM4,this.XHh);
if(!xNE.x6K){
this.cfg_ok=false;
this.cfg_error='Config ctor:'+xNE.error;
this.XGp('TPLR '+this.cfg_error);
return false;}
this.Xh2=new XAZ(XCZ,XCY,this.XHh);
this.XGp('TPLR calling initConfig()');
if(!xNE.load(this.XPz,this,this.Xh5)){
this.cfg_ok=false;
this.cfg_error='Config::load():'+xNE.error;
this.XGp('TPLR '+this.cfg_error);
return false;}
this.XGp('TPLR initConfig()ok...waiting for cb.');
this.cfg_ok=true;
return true;}
,Xmj:function(XQE,XPz,XQF){
this.XPz=null;
this.XgP=null;
this.XPz=XPz;
this.XQE=XQE||{};
this.XQF=XQF||{};
this.Xh2=null;
this.xVG=null;
this.XGp('TPLR useConfig()done.');
this.cfg_ok=true;}
,xVG:null
,XgP:null
,XPz:null
,XQE:null,XQF:null
,Xh2:null
,XHh:null,XGE:'',XKQ:0
,Xh5:function(XQE){
this.XGp('TPLR initConfig():called...now loading dict.');
if(!XQE.x6K){
this.cfg_ok=false;
this.cfg_error='Config::load()cb:'+XQE.error;
this.XGp('TPLR '+this.cfg_error);
this.Xh2.exec('load failure',this);
this.Xh2=null;
return false;}
this.XQE=XQE.XRN(null,2);
this.XQF=XQE.X85();
XQE.x1D();
this.Xu5(this.XQE,'[object dgoConfig.sub]');
this.Xu5(this.XQF,'[object dgoControl.sub]');
var Xh6=','+this.XQE.Xf2+',';
this.XQE.XBe=
Xw5(this.XQE.XBe);
if(Xh6.indexOf(','+this.XQE.XBe+',')>=0){
this.XQE.XLf=this.XQE.XBe;}
else{
if(Xh6.indexOf(','+this.XQE.XLf+',')<0){
this.XQE.XLf=
XOk(this.XQE.Xf2);}}
this.XGp('TPLR Config:'+this.XQE);
var x7C=new Url(this.XPz);
xLJ('trainer',x7C);
var xAZ=new Url(this.XQE.xNE);
xAZ.xc3(x7C);
var XMH=new Url(this.XQE.XMG);
XMH.xc3(x7C);
var x=new Url(this.XQE.xGk||'data/');
x.xc3(x7C);
xLJ('data',x);
if(this.XQE.xAJ){
x=new Url(this.XQE.xAJ);
x.xc3(x7C);
xLJ('library',x);
xLJ('library-config',xAZ);
xLJ('library-project',XMH);}
else{
xLJ('trainer-config',xAZ);
xLJ('project',XMH);
x=new Url(this.XQE.xBH);
x.xc3(x7C);
xLJ('program',x);}
var Xmg=new Url('textatoms.'+this.XQE.XLf+'.txt');
Xmg.xc3(this.XPz);
this.XGp('TPLR Load Dict,lang='+
this.XQE.XLf+',url='+Xmg);
var xa7;
if(0<(xa7=XP0(Xmg.toString(),
this.XgP,this,this.Xm5,
this.XQE.xBb)))
{
return true;}
this.XGp('TPLR Dict_load()='+xa7);
return this.Xm5();}
,Xm5:function(X6k){
this.XGp('TPLR Dict loaded:'+(typeof(X6k)=='number'
?X6k+' entries read':X6k));
this.XGp('TPLR Add cfg_tr to Dict');
var xa7;
if(0<(xa7=XXt(this.XQE.xyP,
this.XQE.XBe,this.XPz,
this.XgP,this,this.Xm4)))
{
return true;}
this.XGp('TPLR Dict_setFromConfig()='+xa7);
return this.Xm4(0);}
,Xm4:function(X6k){
this.XGp('TPLR Dict(custom)loaded:'+
(typeof(X6k)=='number'
?X6k+' entries read':X6k));
this.XgP=null;
this.cfg_ok=true;
this.Xh2.exec('init ready',this);
this.Xh2=null;}
,XGp:function(XGE,X7a){
this.XGE+=XGE+(X7a?'':'\n\r');}
,Xu5:function(XQE,XGE){
var name,x;
var Xt3=XGE||'[dgo]';
var X1K=function(){return Xt3;}
for(name in XQE){
x=XQE[name];
if(x&&typeof(x)=='object'&&typeof(x.toString)=='undefined'){
x.toString=X1K;}}}
,Xmf:function(XGR){
var nodeType=XGR.nodeType;
if(nodeType==1){
this.Xm9(XGR);}
else if(nodeType==3){
XGR.nodeValue=this.Xmd(XGR.nodeValue);}}
,Xm9:function(XGR){
this.XGp('TPLR subst('+XGR.tagName+' '+XGR.id+')');
var XV3=this.X78['ALL_'].concat(
this.X78[XGR.tagName.toUpperCase()]||[]);
var i,xkI,type,a,xoQ;
for(i=0,xkI=XV3.length;i<xkI;++i){
type=XV3[i];
a=XV3[++i];
switch(type){
case Templater_TYPE_STRING:
if(typeof(xoQ=XGR[a])=='string'){
this.XGp('TPLR subst STRING '+a+'="'+xoQ+'"');
XGR[a]=this.Xmd(xoQ);}
else{
this.XGp('TPLR cannot subst '+a+
' ['+typeof(xoQ)+']:should be STRING');}
break;
case Templater_TYPE_URL:
xoQ=XOj(XGR,'dgo'+a)||
XOj(XGR,a);
XGR[a]=this.Xme(xoQ);
break;
case Templater_TYPE_STYLEURL:
this.Xmb(XGR);
break;
default:
this.XGp('TPLR cannot subst TYPE '+type+':not yet supported');
break;}}}
,Xma:/(url\()([^\)]*)(\))/i
,Xmb:function(XGR){
var src,X79;
if(XGR.style&&typeof(XGR.style.cssText)=='string'){
src=XGR.style.cssText;
X79=true;}
else if(XGR.attributes&&XGR.attributes['style']&&
XGR.attributes['style'].nodeValue)
{
src=XGR.attributes['style'].nodeValue;
X79=false;}
else{
return false;}
var XLw=src;
var xAc='';
var match=this.Xma.exec(src);
var url;
while(match){
xAc+=src.substr(0,match.index);
if(match[2]&&match[2]=='none'){
xAc+=match[0];}
else{
url=new Url(match[2]||'');
url.xc3(this.XPz);
xAc+=(match[1]||'')+url+(match[3]||'');}
src=src.substr(match.index+match[0].length);
match=this.Xma.exec(src);}
this.XGp('TPLR StyleURL:"'+XLw+'"==>"'+xAc+'"');
if(X79){
XGR.style.cssText=xAc+src;}
else{
XGR.attributes['style'].nodeValue=xAc+src;}
return true;}
,Xmc:/\$\{[A-Za-z_][A-Za-z0-9_.]+\}/
,Xmd:function(xyO){
var src=xyO;
var xAc='';
var xoL=src.search(this.Xmc);
var XYt,xkP;
while(xoL>=0){
xAc+=src.substr(0,xoL);
src=src.substr(xoL+2);
XYt=src.indexOf('}');
if(XYt>=0){
xkP=src.substr(0,XYt);
xAc+=XQK(xkP);
src=src.substr(XYt+1);
xoL=src.search(this.Xmc);}
else{
xoL=-1;}}
xAc+=src;
this.XGp('TPLR subst "'+xyO+'"=>"'+xAc+'"');
return xAc;}
,Xme:function(Xmi){
var url=new Url(Xmi);
this.XGp('TPLR URL:"'+Xmi+'"==>"'+url+'"');
return url.toString();}
,Xmh:function(XGR){
var children=XGR.childNodes;
var xkI=children.length;
var i,child;
this.Xmf(XGR);
for(i=0;i<xkI;++i){
child=children[i];
this.Xmh(child);}
return true;}}
if(self.XI7){
XI7.XJB(new XIX('templater_base.js'));}

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
