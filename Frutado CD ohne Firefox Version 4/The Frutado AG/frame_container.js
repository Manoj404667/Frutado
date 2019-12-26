//
function XSe(XfR,x9Q,XfU,XlM,
Xhr)
{
this.XfR=XfR;
this.x9Q=x9Q;this.XfU=XfU;
this.XdP={};
this.Xdv=new Xbn();
this.XfJ=new Xbn();
if(XRl&&(this.XfU-0)>0){this.XiT=Xhr||false;}
else{
this.XiT=false;}
if(this.XiT){
this.x6K=true;
this.XhZ();
return;}
var XLk=this.XfR.XVp();
if(x9Q!=XLk.XvR(x9Q)){if((this.XfU-0)>=0){var XW6=new xJB(this,XLk.XvR(x9Q),'-3',false);this.XcQ(XW6);
if((this.x9Q!=this.x9Q.top)&&(this.XfU-0)==0)
{XW6.xTN(Xbr,XcA);
XW6.XjW(XLk);
XW6.Xdm();}}}
else{
if(XLk.XRN().xuQ>=2){
XLk.Xpr("FC running in IFRAME");}}
if(XlM===false){
this.XcQ(new xJB(this,x9Q,'',false));
this.x6K=true;
return;}
if(XlM){
if(typeof(XlM)=='string'){
this.XcQ(new xJB(this,x9Q,'',XlM));}
else if(typeof(XlM)=='object'){
typeof(Xj7)=='undefined'||
this.XcQ(XlM.constructor==Xj7
?new Xj8(this,x9Q,'',XlM)
:XlM);}}
this.Xc2();
this.x6K=true;}
XSe.prototype={
x6K:false
,XiT:false
,XhZ:function(){
if(this.XiT){
if(!this.XdP['']){
var XW6=new xJB(this,this.x9Q,'',false);
this.XcQ(XW6);}
var XiU=false;
try{
if(!this.x9Q.frames['program_frame']){
var x4E=this.x9Q.document;
if(!x4E.scripts['dgoTrainerInject']){
var Xbf=x4E.getElementsByTagName('HEAD');
var X7t;
if(Xbf.length>0){
X7t=Xbf[0];}
else{
X7t=x4E.createElement('HEAD');
X7t=x4E.documentElement.appendChild(X7t);}
if(X7t){
var Xiv=x4E.createElement('SCRIPT');
Xiv.type='text/javascript';
Xiv.id='dgoTrainerInject';
Xiv.name='dgoTrainerInject';
var url=new Url('../boot_sec_live.js');
url.xc3(self.location.href);
Xiv=X7t.appendChild(Xiv);
var Xfu=new Url('./dynloader_explorer.html');
Xfu.xc3(self.location.href);
var XLk=this.XfR.XVp();
Xiv.src=url.toString()+'?dgoDOMAIN='+
(XLk.XRN().domain||'')+
'&dgoGZIP='+(XLk.XRN().Xat||'false')+
'&dynloaderSupport='+(XLk.XRN().XuW||'false')+
'&dynloaderExplorer='+escape(Xfu.toString())+
'&WindowNoFromOpener='+this.XfU;}}
var Xjj=this;
var XTh=this.XdP[''];
var X1K=function(){
XTh.xTN(Xbr,XcA);
Xjj.Xd6().XfG();}
this.x9Q.XY8=new XAZ(this,X1K);}}
catch(e){
XiU=true;}}
if(XiU||
!this.x9Q.XZI||
!this.x9Q.XY8)
{
var XWQ=this;
var Xgz=function(){
XWQ.XhZ();}
window.setTimeout(Xgz,100);}
else{
this.x9Q.setTimeout(this.x9Q.XZI,1);}
return true;}
,XcQ:function(XfA){
this.XdP[XfA.XFG()]=XfA;}
,Xc2:function(){
if(this.XDA){
return true;}
var XLk=this.XfR.XVp();
var xd2;
this.Xcx=true;
if(XLk.XRN().xuQ>=3){
XLk.Xpr("FC checkAll()"+this);}
this.XeL=this.XdP;
this.XdP={};
this.XfR.Xen(
this.XdN,this.Xd9,this.XcY);
this.XdN=0;
this.Xd9=0;
this.XcY=0;
if(this.x9Q!=XLk.XvR(this.x9Q)){if(this.XeL['-3']){
var XW6=this.XeL['-3'];
this.XcQ(XW6);
this.Xcd(XW6.Xdr());
if((this.XfU-0)==0)
{if(this.x9Q!=this.x9Q.top){
XW6.xTN(Xbr,XcA);
XW6.XjW(XLk);
XW6.Xdm();}}
else{
var webride_frame=this.XeL[''];
if(webride_frame&&webride_frame.Xdr()){XW6.xTN(Xbr,XcA);
XW6.XjW(XLk);
XW6.Xdm();}}}
else{
if(this.x9Q!=XLk.XvR(this.x9Q)){if((this.XfU-0)>=0){if(XLk.XRN().xuQ>=2){
XLk.Xpr("FC running in IFRAME was not right");}
var XW6=new xJB(this,XLk.XvR(this.x9Q),'-3',false);this.XcQ(XW6);
if((this.x9Q!=this.x9Q.top)&&(this.XfU-0)==0)
{XW6.xTN(Xbr,XcA);
XW6.XjW(XLk);
XW6.Xdm();}}}}}
if(XLk.XRN().XTw){
xd2=this.Xc3(this.x9Q,'',null);}
else{
try{
xd2=this.Xc3(this.x9Q,'',null);}
catch(xa8){
XLk.Xpr('FC checkAll():'+(new x6C(xa8)),'exc');
xd2=false;}}
this.Xcx=false;
this.XeL=null;
var i,element;
if(this.XeU){
for(i=0;i<this.XeU.length;++i){
element=this.XeU[i];
element.XW6.Xdc(
element.xUG,element.frameElement);}}
if(this.XeV){
for(i=0;i<this.XeV.length;++i){
this.XeV[i].XW6.Xdd();}}
this.Xd6().XfG();
return(this.XDA?true:xd2);}
,Xc4:function(XfA){
var XLk=this.XfR.XVp();
var xa7,xaw;
XfA.xvD();
xa7=XfA.Xdr();
if(xa7){
if(XfA.XFG()==''){var XXI=this.XdP['-3'];
if(XXI){
if(XXI!=XfA){XXI.xTN(Xbr,XcA);
XXI.XjW(XLk);}}}}
if(XfA.Xd2()==XcC){
if(XLk.XRN().xuQ>=2){
XLk.Xpr('FC cannot check children(no access):'+
XfA,'warning');}}
else{
try{
xa7=this.Xc7(XfA);}
catch(xa8){
xaw=new x6C(xa8);
XLk.Xpr('FC checkChildren():'+(new x6C(xa8)),'exc');
XfA.xvD();}}
if(XLk.XRN().xuQ>=3){
XLk.Xpr('FC after '+"checkChildren()="+xa7+':'+this);}
return xa7;}
,close:function(){
var XW6=this.XdP['-3']||this.XdP[''];
XW6&&XW6.close();}
,Xcd:function(XdB,XdJ,Xcw){
if(this.XDA){
return true;}
var xYE=(XdJ?-1:1);
this.XdN+=xYE;
if(XdB){
this.Xd9+=xYE;}
else{
this.XcY+=xYE;}
this.XfR.Xcd(
XdB,XdJ,Xcw);}
,Xch:function(XdQ){
var path,XW6;
for(path in this.XdP){
if(XW6=this.XdP[path]){
if(!XdQ(XW6)){
return false;}}}
return true;}
,XVg:function(xVG){
var path,XW6;
for(path in this.XdP){
if((XW6=this.XdP[path])&&
XW6.x6U()==xVG)
{
return XW6;}}
return null;}
,XVh:function(xaz){
return this.XdP[xaz];}
,XVj:function(XWR){
var XWS=
(typeof(XWR)=='object'&&XWR.length>=1
?XWR:[ XWR ]);
var xd2=[];
var path,XW6,i,XfB,XML,r,XWM;
for(path in this.XdP){
if((XW6=this.XdP[path])&&
XW6.Xdr()&&(XfB=XW6.XVu()))
{
XWM=null;
for(i=0;i<XWS.length;++i){
XML=XWS[i];
r=xZD(XfB,XML);
if(r.XMB===true){
if(XWM){
XWM.XWS[XWM.XWS.length]=r;}
else{
XWM={XWS:[ r ],XW6:XW6};}}}
if(XWM){
xd2[xd2.length]=XWM;}}}
return xd2;}
,x8F:function(){
this.XfR.Xen(this.XdN,this.Xd9,this.XcY);
return this.XDA=true;}
,XdO:function(XfA,
XeN,XeS,XeP,XdG)
{
if(this.XDA){
return true;}
var XeF=XfA.XdW();
var XeJ=XfA.Xd2();
if(!XdG){
if(XeF==Xbt||
XeF==Xbu&&
XeJ==XcB)
{
this.Xet(XfA,Xbu);}
else if(XeF==Xbr&&
XeJ==XcC)
{
this.Xet(XfA,
Xbr,XcC);}}
var xa7=this.XfR.XdO(XfA,XeN,
XeS,XeP,XdG);
if(xa7==1){
++this.Xd9;
if(--this.XcY<0){
var xbK='Bad frame count<0\r\nduring state change of '+
XfA+'\r\n(from '+
XcF(XeN)+'/'+
XcH(XeS)+')\r\n'+this;
this.XfR.XVp().Xpr('FC '+xbK,'error');}
return true;}
else if(xa7==-1){
if(--this.Xd9<0){
var xbK='Good frame count<0\r\nduring state change of '+
XfA+'\r\n(from '+
XcF(XeN)+'/'+
XcH(XeS)+')\r\n'+this;
this.XfR.XVp().Xpr('FC '+xbK,'error');}
++this.XcY;}
return false;}
,Xcu:function(){
return this.XdN;}
,XdR:function(){
return this.XcY;}
,XdS:function(){
return this.Xd9;}
,XoD:function(xfK){
var path,XW6,xUG;
for(path in this.XdP){
if(XW6=this.XdP[path]){
try{
if((xUG=XW6.x6U())&&xUG.name==xfK){
return XW6;}}
catch(xa8){}}}
return null;}
,XF3:function(){
return this.x9Q;}
,Xd6:function(){
return this.XfR;}
,XVz:function(){
return this.XfU;}
,Xdn:function(){
return this.Xcx;}
,Xdo:function(){
return this.XDA;}
,Xdj:function(XCZ,XCY){
var Xbm=this.Xdv.add(XCZ,XCY);
this.Xch(function(XfA){
if(XfA.XdW()==Xbr&&
XfA.Xd2()==XcA)
{
Xbm.exec('',XfA);
return true;}});
return Xbm;}
,Xdl:function(XCZ,XCY){
return this.XfJ.add(XCZ,XCY);}
,XeA:function(XfA){
var xd2=this.Xdv.exec('',XfA);
return xd2+this.XfR.XeA(XfA);}
,XeB:function(XfA){
var xd2=this.XfJ.exec('',XfA);
return xd2+this.XfR.XeB(XfA);}
,Xeb:function(){
var xd2=this.Xed(this.x9Q,'');
var XLk=this.XfR.XVp();
if(this.XdP['-3']){
this.XdP['-3'].Xeb(null);}
if(!xd2||XLk.XRN().xuQ>=3){
XLk.Xpr('FC '+"refreshGeometry()"+' in "'+this.x9Q.name+
'" '+this.x9Q.location+';rc='+xd2+':'+this,
xd2>0?'success':'error');}
return xd2;}
,Xqv:0 
,XaC:1
,Xqu:2
,Xeg:function(XfA,xEL){
var XNz=xEL||this.Xqv;
var XLk=this.XfR.XVp();
var Xe2=XfA.XFG();
XNz==this.Xqv&&
this.Xcd(XfA.Xdr(),true);
if(this.XdP[Xe2]){
if(XNz!=this.Xqu){
this.XdP[Xe2]=null;
if(XLk.XRN().xuQ>=3){
XLk.Xpr('FC removing '+XfA+'==>'+this);}}
if(XNz!=this.Xqv){
Xe2+=':';
for(var path in this.XdP){
if(path.substr(0,Xe2.length)==Xe2&&
this.XdP[path])
{
this.Xeg(this.XdP[path],
this.XaC);}}}}
else{
if(XLk.XRN().xuQ>=3){
XLk.Xpr('FC yet removed:'+XfA);}}
return true;}
,Xeh:function(){
if(this.XDA){
return true;}
return this.XfR.Xeh(this.XfU);}
,Xep:function(xaz){
var XW6;
if(XW6=this.XVh(xaz)){
return XW6;}
var path=xaz.substr(0,xaz.lastIndexOf(':'));
while(!XW6){
if(!(XW6=this.XVh(path))||XW6.Xdt()){
if(!path){
if(XW6){
return 'not found;new check failed(root still loading)';}
return 'root frame is missing';}
path=path.substr(0,path.lastIndexOf(':'));}}
this.Xc4(XW6);
if(XW6=this.XVh(xaz)){
return XW6;}
return 'not found';}
,Xeq:function(XfA,xVG,XbL){
this.XeU||(this.XeU=[]);
this.XeU[this.XeU.length]={
XW6:XfA
,xUG:xVG
,frameElement:XbL}}
,Xer:function(XfA){
this.XeV||(this.XeV=[]);
this.XeV[this.XeV.length]={
XW6:XfA}}
,XfH:function(XC0){
return this.Xdv.remove(XC0);}
,XfI:function(XC0){
return this.XfJ.remove(XC0);}
,toString:function(XKQ){
var options=XKQ | 0;
var xbK='';
if(!(options & 1)){
for(var path in this.XdP){
xbK+=',"'+path+'":'+this.XdP[path];}}
return "FrameContainer={"+this.XfU+
':all/good/bad '+this.XdN+'/'+this.Xd9+
'/'+this.XcY+';'+xbK.substr(1)+'}';}
,XfR:null
,x9Q:null
,XfU:null
,Xcx:false
,XeU:null
,XeV:null
,XDA:false 
,Xdv:null,XfJ:null,XeL:null,XdP:null,XdN:0,Xd9:0,XcY:0 
,Xc3:function(xVG,xaz,Xe0){
var XW6=this.XeL[xaz];
var xd2,xbK;
if(XW6){
this.Xcd(XW6.Xdr());
XW6.Xey(xVG);
xd2=XW6.Xdr();
xbK='re-using';}
else{
XW6=new xJB(this,xVG,xaz,Xe0);
xbK='new';
xd2=XW6.Xdr();
this.Xcd(xd2);}
this.XdP[xaz]=XW6;
var XYB;
var XLk=this.XfR.XVp();
if(XW6.Xdr()){
if(xaz==''&&xVG==XLk.XvR(xVG))
{this.XdP['-3']=XW6;}
var frames=xVG.frames;
var xkI=frames.length;
XYB='';
var Xca,xa7;
for(var i=0;i<xkI;++i){
Xca=(xaz?xaz+':':'')+i;
if(XLk.XRN().XnH){
xa7=this.Xc3((Xbp(frames[i])
?frames[i]:frames[i].window),Xca,XW6);
XYB+=Xca+'['+(xa7?'good':'bad')+'];';}
else{
try{
xa7=this.Xc3((Xbp(frames[i])
?frames[i]:frames[i].window),Xca,XW6);}
catch(xa8){
xa7=false;
XYB+=Xca+'[EXC '+(new x6C(xa8))+'];';
XW6.Xqz();
this.Xeg(XW6,this.Xqu);}}
xd2=xd2&&xa7;}}
if(XLk.XRN().xuQ>=3){
XLk.Xpr('FC '+this.XfU+
" checkAllRek_()="+xd2+' '+xbK+' '+XW6+
';sub-frames '+(XYB||'-;')+
' counts:'+this.toString(1)+
' '+this.XfR.toString(1));}
return xd2;}
,Xc7:function(XfA){
var XLk=this.XfR.XVp();
var path=XfA.XFG();
var XW6=this.XdP[path];
var xbK='';
var xd2;
if(XW6){
if(XW6!=XfA){
xbK='inconsistent tFrames in "'+path+'"';
XLk.Xpr('FC '+xbK,'error');
return false;}
xd2=XW6.Xdr();}
else{
xbK=XfA+'missing in container';
XLk.Xpr('FC '+xbK,'error');
return false;}
if(xd2){
var frames=XfA.x6U().frames;
var xkI=frames.length;
var i,Xca,Xcb,Xcc,XdA,xa7;
for(i=0;i<xkI;++i){
Xca=(path?path+':':'')+i;
Xcb=this.XdP[Xca];
Xcc=(Xbp(frames[i])
?frames[i]:frames[i].window);
xbK+=';'+Xca+'['+(Xcb?'re-use':'new');
if(Xcb){
XdA=Xcb.Xey(Xcc);}
else{
Xcb=new xJB(this,Xcc,Xca,XW6);
this.XdP[Xca]=Xcb;
XdA=Xcb.Xdr();
xd2=xd2&&XdA;
this.Xcd(XdA);}
xbK+=','+(XdA?'good':'bad')+']';
if(Xcb.Xd2()!=XcC){
if(XLk.XRN().XnH){
xa7=this.Xc7(Xcb);}
else{
try{
xa7=this.Xc7(Xcb);}
catch(xa8){
xa7=false;
XLk.Xpr("FC checkRek_()"+' EXC "'+(new x6C(xa8))+
'" in '+Xcb,'warning');
Xcb.Xqz();
this.Xeg(Xcb,this.Xqu);}}
xd2=xd2&&xa7;}}
if(XLk.XRN().xuQ>=3){
XLk.Xpr("FC checkRek_("+XfA+
')='+xd2+' found '+xkI+' frames:'+xbK.substr(1));}}
else{
if(XLk.XRN().xuQ>=3){
XLk.Xpr("FC checkRek_("+XfA+')='+
xd2+':not loaded');}}
return xd2;}
,Xcl:function(XdK){
var xd2='';
var XLk=this.XfR.XVp();
var XW6,xbK;
for(var path in this.XdP){
XW6=this.XdP[path];
if(XW6&&!XW6.Xdr()){
xbK='TRACKING:Bad '+XW6;
if(XdK){
xd2+='\r\n'+xbK;}
else{
XLk.Xpr('FC '+xbK);}}}
return xd2;}
,Xed:function(xVG,xaz,XeZ){
var XW6=this.XdP[xaz];
if(!XW6){
if(XeZ){
this.XfR.XVp().Xpr('FC '+
"refreshGeometryRek_("+xaz+
')incomplete frame state','warning');
this.Xc7(XeZ);
return 2;}
var xbK='root frame is missing';
this.XfR.XVp().Xpr(
'FC '+"refreshGeometryRek_()"+':'+xbK,'error');
return 0;}
var xa7,XeQ;
if(!XW6.Xdr()||XW6.Xty()=='DGO'||
!(XeQ=XW6.XVu()))
{
return 1;}
XW6.Xeb(XeZ);
var XJ9=XW6.XVu();
var Xcv=(!XeQ.XWN(XJ9));
var frames=xVG.frames;
if(Xcv&&this.XfR.XVp().XRN().xuQ>=3){
this.XfR.XVp().Xpr(
'FC change '+XW6+' old:'+XeQ);}
for(var i=0;i<frames.length;++i){
if(typeof(frames[i])!='unknown'){if(typeof(frames[i].window)=='object'){
xa7=this.Xed(
frames[i].window,(xaz?xaz+':':'')+i,XW6);
Xcv=Xcv||(xa7>=2);}}}
return Xcv?2:1;}
,Xet:function(XfA,Xdw,Xej){
var XeW=XfA.XFG();
var XeX=XeW.length;
var xbK='';
var Xca;
for(Xca in this.XdP){
if(Xca.length>XeW.length&&
Xca.substr(0,XeX)==XeW)
{
this.XdP[Xca]&&
this.XdP[Xca].xTN(Xdw,Xej);}}}}
if(self.XI7){XI7.XJB(new XIX('../frame_container.js',
[ '../frame.js','../eep.js' ]));}

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
