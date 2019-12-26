//
//
function XAL(XCI){
this.XCI=XCI;
this.XfC=XCI.XVy();
if(!this.XfC){
var xbK='Could not activate DOM help:no top frame';
this.XCI.Xpr('@@ '+xbK);
alert(xbK);
return false;}
var xxk='width=950,height=300,left=0'+
',top='+(window.screen.height-500)+
',resizable=yes,scrollbars=yes';
window.dgo2=this;
var url=this.XCI.Xu().external('agent_ui.html');
if(this.XCI.XRN().domain){
url.XC8(this.XCI.XRN().domain);}
if(!X7T){X7T="AgentUI_"+(new Date).valueOf();}
this.x9Q=window.open(url.toString(),X7T,xxk);
return this.x9Q?true:false;}
Xr1=function(){
return this.dgoc.dgo2.Xr3(this);}
XAL.prototype.XKK=function(x9Q){
this.x9Q=x9Q;
this.x9Q.dgo2=this;
this.xNF=XJo(this.x9Q,'Url');
this.XI2=XJo(this.x9Q,'Path');
this.XAO=XJo(this.x9Q,'FramePath');
this.XJm=XJo(this.x9Q,'Collection');
this.XBx=XJo(this.x9Q,'Index');
this.XDV=XJo(this.x9Q,'SubIndex');
this.xOF=XJo(this.x9Q,'Zoom');
this.X0i=XJo(this.x9Q,'Ori');
this.XTb=XJo(this.x9Q,'ElX');
this.X0Q=XJo(this.x9Q,'ElY');
this.XAQ=XJo(this.x9Q,'HTML');
this.xbm=XJo(this.x9Q,'OFF');
this.XJq=XJo(this.x9Q,'EEP');
this.XDW=XJo(this.x9Q,'TREE');
this.Xr2=XJo(this.x9Q,'Window');
this.xrC=XJo(this.x9Q,'X');
this.XBd=XJo(this.x9Q,'Y');
this.XJr=XJo(this.x9Q,"TESTIFRAME");
var x4E=this.x9Q.document;
var Xnz=this.XCI.Xd6().Xd8();
var i,x8Q,XNz;
for(i in Xnz){
if(i!=0){
x8Q=Xnz[i];
XNz=x4E.createElement('OPTION');
XNz.value=i+'';
XNz.text=i+':'+(typeof(x8Q.name)=='string'?x8Q.name:'window')
this.Xr2.options.add(XNz);}}
xA7(this.x9Q,this.Xr2,'change',Xr1);
this.show('debug',false);}
XAL.prototype.close=function(){
if(this.XCI){
this.XKS();
this.XCI.xMF();}
this.xuE();
this.x9Q=null;
return true;}
XAL.prototype.xuE=function(){this.x9Q.dgo2=null;
this.XCI=null;
return true;}
XAL.prototype.show=function(XM2,xtg){
switch(XM2){
case 'debug':
this.xuN=xtg;
var x4E=this.x9Q.document;
var XDD=['DebugEep+Geo'];
var x1K;
for(var i=0;i<XDD.length;++i){
x1K=x4E.getElementById(XDD[i]);
if(x1K){
XAa(x1K.style,'display',(xtg?'block':'none'));}}
break;
default:
break;}
return true;}
X7T=null;
XAL.prototype.XCI=null;XAL.prototype.XfC=null;XAL.prototype.x9Q=null;XAL.prototype.XEs=false;XAL.prototype.xoO=null;XAL.prototype.xNi=null;XAL.prototype.Xr4='0';
XAL.prototype.xAk=0;XAL.prototype.xuN=false;
XAL.prototype.XHl=null;XAL.prototype.XKL=null;
XAL.prototype.xNF=null;XAL.prototype.XI2=null;
XAL.prototype.XAO=null;
XAL.prototype.XJm=null;
XAL.prototype.XBx=null;
XAL.prototype.XDV=null;
XAL.prototype.xOF=null;
XAL.prototype.X0i=null;
XAL.prototype.XTb=null;
XAL.prototype.X0Q=null;
XAL.prototype.XAQ=null;
XAL.prototype.xbm=null;
XAL.prototype.XJq=null;
XAL.prototype.XDW=null;
XAL.prototype.Xr2=null;
XAL.prototype.xrC=null;
XAL.prototype.XBd=null;
XAL.prototype.XJr=null;
XAL.prototype.XER=function(XKG){
var XG8=XKG-0;
this.xAk+=XG8;
if(this.xAk<0)
this.xAk=0;
this.xOF.value=this.xAk;
return this.xAk;}
XAL.prototype.Xdx=function(){
var url=this.xNF.value;
var xPG='0'+(this.XAO.value?':'+this.XAO.value:'');
var x0g=this.x9Q.document.getElementById('EXPR').value;
this.XCI.XF3().evt_url(-1,xPG,url,null,x0g?'MATCH '+x0g:'');
return true;}
XAL.prototype.Xc5=function(){
this.XCI.XF3().evt_loaded(-1);
return true;}
XAL.prototype.XGY=function(XDx,xVG){
if(!this.XCI||
this.XCI.XFV()!=XBR||
!this.XEs)
{
return;}
var target=XDx.srcElement||XDx.target;
if(target){
this.xoO=target;
this.xNi=xVG;
this.XDd();}
return true;}
XAL.prototype.Xr3=function(XOJ){
this.XEs&&this.XKS();
var XFi=XOJ.options[XOJ.selectedIndex].value-0;
var xbK=XFi+'="'+XOJ.options[XOJ.selectedIndex].text+'"';
var x8Q=this.XCI.Xd6().Xd5(XFi);
if(x8Q){
this.XfC=x8Q;
this.Xr4=XFi;
xbK='Window '+xbK+' set for DOM inspection';}
else{
xbK='Cannot set window '+xbK+' for DOM inspection';}
this.x9Q.alert(xbK);
return true;}
XAL.prototype.XEN=function(){
var x=this.xoO;
if(!x){
return null;}
if(x.nodeType==3){x=x.parentNode;}
else if(x.nodeType!=1||x.tagName=='!'){return null;}
for(var xhS=this.xAk;xhS>0&&x.parentNode;--xhS){
x=x.parentNode;}
return x;}
XAL.prototype.XEU=function(xFR,xVG){
var XDu=new ElementRef;
this.XES(xFR,XDu,xVG);
return XDu.toString();}
XAL.prototype.XES=function(xFR,XDq,xVG){
if(!xFR){
return false;}
var Xam=Xab(xFR,xVG);
XDq.xMk=Xam?Xam.n:'';
XDq.index=Xam?Xam.i:0;
XDq.xPh=Xam?Xam.ii:0;
XDq.path=XJv(xFR,0);return true;}
function XCE(XJQ){
return typeof(XJQ)=='number'?XJQ:'-';}
function xbl(XGT){
var x6L=[];
var xa7=xYD(XGT,['borderLeftWidth','borderTopWidth',
'paddingLeft','paddingTop','marginLeft','marginTop','position',
'overflow','overflowX','overflowY'],
x6L);
var xd2=
XCE(XGT.offsetLeft)+','+
XCE(XGT.offsetTop)+'/'+
XCE(XGT.offsetWidth)+','+
XCE(XGT.offsetHeight)+' '+
XCE(XGT.clientLeft)+','+
XCE(XGT.clientTop)+'/'+
XCE(XGT.clientWidth)+','+
XCE(XGT.clientHeight)+' '+
XCE(XGT.scrollLeft)+','+
XCE(XGT.scrollTop)+'/'+
XCE(XGT.scrollWidth)+','+
XCE(XGT.scrollHeight);
xd2+=(xa7?' '+x6L[6]+
' b:'+x6L[0]+','+x6L[1]+
' p:'+x6L[2]+','+x6L[3]+
' m:'+x6L[4]+','+x6L[5]+
' ov:'+x6L[7]+','+x6L[8]+','+x6L[9]:
' CSS error');
xd2+=(XRC(XGT)?' SCR':' NSCR');
return xd2;}
XAL.prototype.xiG=function(){
var xUG=XBs(
this.XAO.value,this.XfC);
var XKE={Xl:''};
var xpK=xjH(xUG,this.XI2.value,0,XKE);
var html=XA6(xpK)+'\r\n'+XKE.Xl;
this.XAQ.value=html;
return true;}
XAL.prototype.XDd=function(){
var xpK=this.XEN();
var XDu=new Object;
this.XES(xpK,XDu,this.xNi);
this.xNF.value=this.xNi.location.href;
this.XI2.value=XDu.path;
this.XJm.value=XDu.xMk;
this.XBx.value=XDu.index;
this.XDV.value=XDu.xPh;
this.XAO.value=Xko(this.xNi,this.XfC);
var html='0.)'+XA6(xpK)+'\r\n';
var x=xpK.parentNode;
var i=1;
while(x){
html+=(''+i+'.)'+XA6(x)+'\r\n');
x=x.parentNode;
++i;}
this.XAQ.value=html;
if(!this.xuN||!xpK.tagName){
return true;}
var xoL=XEA(xpK);
this.xrC.value=xoL.x;
this.XBd.value=xoL.y;
html='0.)'+XA6(xpK)+' '+
xbl(xpK)+'\r\n';
x=xpK.offsetParent;
i=1;
while(x){
html+=(''+i+'.)'+XA6(x)+' '+
xbl(x)+'\r\n');
x=x.offsetParent||(x.tagName=='BODY'?x.parentNode:null);
++i;}
this.xbm.value=html;
var XHZ=this.x9Q.frames['TESTIFRAME'].Eep_generate(
xpK,this.xNi);
var Xl=new Object;
var x1K=Eep_resolve(XHZ,this.xNi,Xl);
if(xpK!=x1K){
this.XJq.style.color='red';
this.XJq.value='EEP error. '+
'Current:'+XA6(xpK)+
'\r\nPer-eep:'+XA6(x1K)+
'\r\nLog\r\n'+Xl.Xl+
'\r\nEEP\r\n'+XHZ;
return false;}
var XEm=this.XAO.value;
var XEj=this.x9Q.frames['TESTIFRAME'].XBs(
XEm,this.XfC);
if(XEj!=this.xNi){
this.XJq.style.color='yellow';
this.XJq.value='EEP frame error. '+
'\r\nCurrent:"'+this.XAO.value+'":'+
this.xNi+' '+this.xNi.name+
'\r\nper-oldFP:"'+XEm+
'":'+XEj+' '+(XEj?XEj.name:'');
return false;}
var Xl2=new Object;
var XKZ=this.x9Q.frames['TESTIFRAME'].Eep_resolve2simple(
XHZ,XEm,this.XfC,0,Xl2);
var XrJ=new Object;
var XrK=this.x9Q.frames['TESTIFRAME'].Eep_resolve2simple(
XHZ,XEm,this.XfC,4,XrJ);
if(typeof(XKZ)!='string'||XKZ!=XDu.path){
this.XJq.style.color='magenta';
this.XJq.value='Eep_resolve2simple error. '+
'Current:'+XA6(xpK)+
'\r\nFrame "'+XEm+'":'+XEj+' '+XEj.name+
'\r\nPath "'+XKZ+'(should "'+XDu.path+'")'+
'\r\nLog\r\n'+Xl2.Xl+
'\r\nOri.Log\r\n'+Xl.Xl;
return false;}
if(typeof(XrK)!='string'||XrK!=XDu.path){
this.XJq.style.color='blue';
this.XJq.style.backgroundColor='yellow';
this.XJq.value='Eep_resolve2simple(TopDown)error. '+
'Current:'+XA6(xpK)+
'\r\nFrame "'+XEm+'":'+XEj+' '+XEj.name+
'\r\nPath "'+XrK+'(should "'+XDu.path+'")'+
'\r\nLog\r\n'+XrJ.Xl+
'\r\nOri.Log\r\n'+Xl.Xl;
return false;}
this.XJq.style.color='black';
this.XJq.value=XHZ;
return true;}
XAL.prototype.xJh=function(XM2){
var xpK=this.XEN();
var xUG=this.xNi;
if(!xpK||!xUG){
return false;}
var xQG=Xko(xUG,this.XfC);
var XDu=new ElementRef;
xQG=this.Xr4+(xQG?':':'')+xQG;
this.XES(xpK,XDu,xUG);
this.XCI.Xpr('@@ Highlight '+XM2+' in frame "'+xQG+'" '+XDu);
var x1K=this.XCI.XF3();
switch(XM2){
case 'perm':
x1K.evt_highlight2([-1,'_dgo_ui_hl_'],xQG,XDu,'box',3,
'#00ff00','img:yellow25tr');
break;
case 'off':
x1K.evt_off([-1,'_dgo_ui_hl_']);
break;
case 'old':
default:
x1K.evt_highlight2(-1,xQG,XDu,'flash',3);
break;}
return true;}
XAL.prototype.XNG=function(XM2){
var xpK=this.XEN();
var xUG=this.xNi;
if(!xpK||!xUG){
return false;}
var xQG=Xko(xUG,this.XfC);
var XDu=new ElementRef;
xQG=this.Xr4+(xQG?':':'')+xQG;
this.XES(xpK,XDu,xUG);
this.XCI.Xpr('@@ Highlight '+XM2+' in frame "'+xQG+'" '+XDu);
var x1K=this.XCI.XF3();
var style={};
var xYk=this.X0i.options[this.X0i.selectedIndex].text;
switch(XM2){
case 'off':
x1K.evt_off([-1,'_dgo_ui_bu_']);
break;
case 'xbbl':
x1K.evt_textbubble([-1,'_dgo_ui_bu_'],xQG,XDu,
{x:this.XTb.value-0,y:this.X0Q.value-0},
null,null,{cfg_xframe:true},xYk,
'START<br><br><br><br><br><b><font size=+2>Cross-Frame</font></b>'+
'<br><b>Textbubble</b><br><br>at node<br><br><b>'+
XJn(XA6(xpK))+'</b><br><br><br><br><br>END',
true,150,0,'element',true);
break;
case 'tbbl':
style={cfg_onTop:true};
default:
x1K.evt_textbubble([-1,'_dgo_ui_bu_'],xQG,XDu,
{x:this.XTb.value-0,y:this.X0Q.value-0},
null,null,style,xYk,
'<b>Textbubble</b><br><br>at node<br><br><b>'+
XJn(XA6(xpK))+'</b>',
true,150,0,'element',true);
break;}
return true;}
var XAN=false;
function XAM(xFR){
if(XAN)
return true;
XAN=true;
if(!xFR){
dgo7.Xpr('@@ dump:null');
return false;}
for(XCM in xFR){
dgo7.Xpr('@@ '+XCM+'="'+xFR[XCM]+'"');}
return true;}
function XAP(xVG,XCH){
xVG.dgo5=XCH;
xVG.document.body.dgoR=xVG.document.body.onmouseover;
var x=xVG;
xVG.document.body.onmouseover=function(e){
if(x.dgo5){
return x.dgo5.XGY(e||x.event,x);}}
return true;}
function XAR(xVG){
xVG.dgo5=null;
if(xVG.document.body.dgoR){
xVG.document.body.onmouseover=xVG.document.body.dgoR;
xVG.document.body.dgoR=null;}
return true;}
XAL.prototype.XKR=function(){
XJp(this.XfC,XAP,this);
this.XEs=true;
this.XCI.Xpr('@@ DOM help activated');
return true;}
XAL.prototype.XKS=function(){
XJp(this.XfC,XAR,this);
this.XEs=false;
this.XCI.Xpr('@@ DOM help de-activated');
return true;}
function XJl(XGR,xPF,xoK){
var title='';
var tagName='';
var nodeType,type,xbK;
if(xoK==0){
xPF.XKL=[xPF.XHl.xpM];
xPF.XHl.xpM.title=title;
return true;}
nodeType=(XGR.tagName&&XGR.tagName=='!'?
800:XGR.nodeType);
switch(nodeType){
case 3:
type='node_text';
title='"'+XGR.nodeValue+'"';
break;
case 8:
type='node_comment';
title='"'+XGR.nodeValue+'"';
break;
case 800:
type='node_comment';
title='"'+XGR.nodeValue+'" [IE]';
break;
case 1:
switch(XGR.tagName){
case 'DIV':
case 'FORM':
case 'TABLE':
case 'TBODY':
case 'TR':
case 'TD':
case 'SPAN':
type='group';
break;
default:
type='node';}
title=XGR.tagName+' '+
XJv(XGR,1)+' '+
XA6(XGR);
break;
default:
type='node_unknown';
title=XA6(XGR);
break;}
xPF.XKL[xoK]=
xPF.XKL[xoK-1].xkK(title,type);
return true;}
XAL.prototype.XHT=function(XKB){
if(typeof(xMC)!='function'){
alert('DOM tree only available in verbose mode');
return false;}
var xpK=(XKB&&this.xNi?
this.xNi.document.body:this.XEN());
if(!xpK){
alert('Select frame or element first to show DOM tree');
return false;}
this.XHl=new xKC('DOM Tree','group');
this.XHl.xpM.title=XA6(xpK);
XAc(xpK,XJl,this);
this.XKL=[];
this.XHl.XHH();
new xMC(this.XHl,this.XDW,'logging',this.x9Q);
this.XHl.xaJ=false;
this.XHl.xvQ.xSD();
this.XHl.xaJ=true;
return true;}
function xAy(XGR){
var XLl=XGR.x2P.XLl;
var XLk=XLl.XCI;
if(XGR.type=='group'){
XGR.xBL=true;
return XLl.x5A(XGR);}
self.dgo3=XGR.x4v;
self.dgo4=XGR.x4x;
var XVO={
cfg_features:'resizable=yes,scrollbars=yes'
,cfg_height:350
,cfg_name:'dgoAgentUIprop'
,cfg_orientation:'NW'
,cfg_width:800};
this.xCR=XaB(
XLk.Xu().external('agent_ui_prop.html')+'?'+
(XLk.XF3().xNE.domain?
XLk.XF3().xNE.domain:''),XVO);
return true;}
XAL.prototype.x4z=function(){
return this.x5A(null,this.xNi);}
XAL.prototype.x5A=function(xd3,x4u){
var x4s=(xd3?
xd3.x4w:(x4u||this.XEN()));
if(!x4s){
alert('Select frame or element first to show Property tree');
return false;}
var xpM;if(xd3){
xpM=xd3;}
else{
var action={
xOJ:xAy,
xEN:xAy}
var XGO;
var XBz=[];
XBz[XGO]=action;
XBz['group']=action;
XBz['trace']=action;
XBz['event']=action;
this.XHl=new xKC('dummy','group',XBz);
this.XHl.x4t=x4s;
this.XHl.XLl=this;
xpM=this.XHl.xpM;
xpM.title=XA6(x4s);}
var xoQ;
var title;
var type;
for(var XCM in x4s){
xoQ=x4s[XCM];
switch(typeof(xoQ)){
case 'undefined':
title='undefined';
type='error';
break;
case 'object':
if(xoQ){
title=''+xoQ;
type='group';}
else{
title='null';
type='warning';}
break;
case 'string':
title=(xoQ.length>50?xoQ.substr(0,46)+' ...':xoQ);
type='trace';
break;
case 'function':
var x3F=''+xoQ;
title=(x3F.length>50?x3F.substr(0,46)+' ...':x3F);
type='event';
break;
case 'boolean':
case 'number':
title=''+xoQ;
type='print';
break;}
var x9S=xpM.xkK(XCM+':'+title,type);
x9S.x4w=xoQ;
x9S.x4x=''+xoQ;
x9S.x4v=(xpM.x4v?
xpM.x4v+'.'+XCM:XCM);}
var cursor=this.x9Q.document.body.style.cursor;
this.x9Q.document.body.style.cursor='wait';
this.XHl.XHH();
new xMC(this.XHl,this.XDW,'logging',this.x9Q);
this.XHl.xaJ=false;
this.XHl.xvQ.xSD();
this.XHl.xaJ=true;
this.x9Q.document.body.style.cursor=cursor;
return true;}
XAL.prototype.XLu=function(){
var x1F=this.x9Q.document.getElementById('EXPR').value;
var element=this.XEN();
var xa7;
var xaw=null;
try{
xa7=eval('with(element){'+x1F+'}');}
catch(xa8){
xaw=new x6C(xa8);}
this.x9Q.alert('"'+x1F+'"=\r\n'+(xaw
?'Exception\r\n'+xaw:typeof(xa7)+'\r\n'+xa7));}
if(self.XI7){XI7.XJB(new XIX('../agent_ui.js'));}

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
