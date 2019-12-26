//
function XcP(XCI){
this.XCI=XCI;
this.Xkv=this.XCI.XRN().xuQ;
this.XcT={};
this.Xdv=new Xbn();
this.XfJ=new Xbn();
this.XdM={
'0':new XSe(this,
XCI.XVy(),'0',XCI.Xjt())};
this.x6K=true;
this.error='ok';}
XcP.prototype={
x6K:false
,error:'-'
,Xdf:function(xsF){
var XW6=this.Xep(
xsF.XEY(),this.XcM);
var xa7,xbK;
if(XW6){
var url=xsF.Xu();
url&&(url=this.XCI.Xu().xaK(url).toString());
xbK='Load URL "'+url+'"';
if(url){
xa7=XW6.Xdx(url,xsF.Xsp());}
else{
xbK+=';empty URL';
xa7=true;}}
else{
xa7='Cannot resolve framepath "'+xsF.XEY()+'"';}
this.Xdy(xa7,xbK);
if(xa7!==true){
var xJI=xsF.Xiu();
if(xJI<(xsF.Xfps()-1)){
this.XCI.XXe().xa0(xsF);
this.XCI.Xpr('W AGAIN','warning');}
else{
this.XCI.Xpr('W URL issue count('+xJI+
')too high;fp='+xsF.XEY(),'error');}}
return(XMs | XMu);}
,Xdb:function(xsF){
var xa7,xbK;
if(this.Xcr){
xa7='Ignore Loaded Event:Yet loading';
xbK=xsF.toString();}
else{
xa7=this.xvD(true);
if(xa7){
if(this.Xee()){
xbK='Loaded,thus unblocking';}
else{
xbK='Loaded. Now handling AGAIN';}}
else{
xbK='Loading,thus blocking';}
xa7=true;}
this.Xdy(xa7,xbK);
if(this.Xkv>=3){
this.XCI.Xpr('W '+this);}
return XMs;}
,XwQ:function(x,y,w,h,Xw8){
var style='position:absolute;border:0px;margin:0px;padding:0px;'+Xw8+';';
(typeof(x)=='number')&&(style+='left:'+Math.abs(x)+'px;');
(typeof(y)=='number')&&(style+='top:'+Math.abs(y)+'px;');
(typeof(w)=='number')&&(style+='width:'+Math.abs(w)+'px;')||
(typeof(w)=='string')&&(style+='width:'+w+';');
(typeof(h)=='number')&&(style+='height:'+Math.abs(h)+'px;')||
(typeof(h)=='string')&&(style+='height:'+h+';');;
return ' style="'+style+'" ';}
,Xdg:function(xsF){
var XYc=xsF.XVz();
var XVm=this.XdV(
XYc,true);
var xbK='';
var url,xa7,x8Q,XfD;
if(url=xsF.Xu()){
url=this.XCI.Xu().xaK(url).toString();}
else{
if(this.XCI.XRN().domain){
url='relax_domain.html?dgoDOMAIN='+this.XCI.XRN().domain;}
else{
url='about_blank.html';}}
if(XVm){
var X2A;
if((XfD=XVm.XVh(''))&&
(X2A=XfD.x6U()))
{
if(X2A.closed||
XfD.Xd2()==XcC)
{
if(X2A.closed){
xbK='Remove closed window';}
else{
xbK='Remove+close inaccessible window';
X2A.close();}
xa7=XVm.Xeh();xbK+=(xa7===true?';':',rc='+xa7+';');
XVm=null;}}
else{
var x8Q=XVm.XF3();
xa7=XVm.Xeh();xbK='No top frame;Remove+close container'+
(xa7===true?';':',rc='+xa7+';');
x8Q&&!x8Q.closed&&x8Q.close();
XVm=null;}}
if(XVm){
xbK='Reuse window;Load URL "'+url+'"';
if(url){
this.Xes();
xa7=XfD.Xdx(url,'');
try{
XfD.x6U().top.focus();}
catch(xa8){};
xbK+=' '+XfD;}
else{
xa7=true;
xbK+=';empty URL';}}
else{
var XVO=XTd(this.XCI.XRN().XoM);
XVO.cfg_features=xsF.Xf();
XVO.cfg_name=xsF.Xwn();
XVO.cfg_width=xsF.Xw()>=0?xsF.Xw():null;
XVO.cfg_height=xsF.Xh()>=0?xsF.Xh():null;
var XBi=Math.abs(this.XCI.XRN().xuQ-0);
var xAJ=this.XCI.XRN().xAJ;
var xfH=this.XCI.XRN().xfH;
xfH=(xfH=='true'||xfH=='1'||
(this.XCI.XRN().xvO||this.XCI.XRN().xnN)=='hidden');
var XRX=this.XCI.XRN().XRX;
if(url.toString().indexOf('/jswidget/')<0){XVO.cfg_iframes=true;
XVO.cfg_domain=this.XCI.XRN().domain||'';
XVO.cfg_gzip=this.XCI.XRN().Xat||'false';
XVO.cfg_dynloaderSupport=this.XCI.XRN().XuW||'false';
XVO.cfg_tourframename=this.XCI.XvT();}
if(xsF.Xo()){
XVO.cfg_orientation=xsF.Xo();}
else{
if(xsF.Xd0()>=0){
XVO.cfg_left=xsF.Xd0();}
if(xsF.Xd1()>=0){
XVO.cfg_top=xsF.Xd1();}}
XVO.XwK=XYc;
var Xjj=this;
var XwI=XYc;
var Xqm=url;
var X1K=function(x9Q){
Xjj.Xqk(x9Q,XwI,Xqm);};
this.Xes();
x8Q=XaB(url,XVO,null,X1K,
this.Xkv>=3?XAU:null);
if(x8Q===false){
this.XfM();
this.XCI.xwF('ex',XQK('TOK_POPUPBLOCKER_EXC'));
return XMs;}
if(x8Q){
xbK+=' window no. '+XYc+' "'+
XVO.cfg_name+'"='+url+';features:"'+
XVO.cfg_features+'"';
xa7=true;}
else{
this.XfM();
xbK+='window no. '+XYc;
xa7=false;}}
this.Xdy(xa7,xbK);
return(XMs | XMu);}
,Xdh:function(xsF){
var xa7=this.Xeh(xsF.XVz(),true);
this.Xdy(xa7,xsF);
return(XMs | XMu);}
,XnD:function(XfU,x9Q,Xhr){
var XYc=this.XnG(XfU);
if(!XYc){
return null;}
this.XCI.Xpr('W '+XYc+' addExternalWindow()','info');
this.XcR(XYc,x9Q,false,Xhr);
var XVO=XTd(this.XCI.XRN().XoM);
XVO.XrN=XYc;
XoA(x9Q,XVO,this,this.Xqi,
this.Xkv>=3?XAU:null);
return XYc;}
,XcR:function(XfU,x9Q,xMj,Xhr){
var XYc=this.XnG(XfU);
Xhr=Xhr||false;
if(!XYc){
return null;}
var xbK;
try{
xbK='"'+x9Q.name+'"='+x9Q.location;}
catch(xa8){
xbK='no access';}
if(typeof(x9Q.frames[this.XCI.XvT()])=='object'){
XVm=new XSe(this,
x9Q.frames[this.XCI.XvT()],
XYc,'',Xhr);
this.XdM[XYc]=XVm;}
else{
var XVm=new XSe(this,x9Q,XYc,xMj,Xhr);
this.XdM[XYc]=XVm;}
this.XCI.Xpr('['+XYc+'] '+xbK,'newwin',2);
return XVm;}
,xvD:function(Xcw){
var XYc,XVm,xd2;
var xa7=true;
for(XYc in this.XdM){
if(XVm=this.XdM[XYc]){
xa7=xa7&&XVm.Xc2();}}
if(xa7!=(xd2=this.x6p())){
this.XCI.Xpr('W CONCURRENT on(un)load:ready state change '+
xa7+'==>'+xd2,'warning');
var Xjj=this;
var X1K=function(){
Xjj.Xdb({});}}
if(Xcw){
if(xd2){
this.XfG();}
else{
this.Xes();
this.Xkv>=2&&this.Xck();}}
return xd2;}
,Xcd:function(XdB,XdJ){
var xYE=(XdJ?-1:1);
this.XdN+=xYE;
if(XdB){
this.Xd9+=xYE;}
else{
this.XcY+=xYE;}
return this.XdN;}
,Xck:function(XdK){
var xbK='TRACKING:'+this.XcY+
' unready frame(s)of '+this.XdN;
var xa7,XVm;
XdK||this.XCI.Xpr('W '+xbK);
for(var XYc in this.XdM){
if(XVm=this.XdM[XYc]){
xa7=XVm.Xcl(XdK);
XdK&&(xbK+=xa7);}}
return(XdK?xbK:'');}
,x8F:function(){
var xYE=0;
for(var XYc in this.XdM){
if(XYc!='0'&&XYc!='-1'){
this.Xeh(XYc,true);}}
return xYE;}
,XdO:function(XfA,XeN,
XeS,XeP,XdG)
{
var XeF=XfA.XdW();
var XeJ=XfA.Xd2();
var XeH=XfA.XdZ();
var XdE=XcI(
XeF,XeJ,XeH);
var XdH=XcI(
XeN,XeS,XeP);
if(XdE==XdH){
return 0;}
if(this.Xcr&&this.Xkv>=2){
this.XCI.Xpr('W state change in '+XfA+
'==>all/good/bad '+this.XdN+'/'+
this.Xd9+'/'+this.XcY,
XdE?'success':'warning');}
if(XdE){
++this.Xd9;
--this.XcY;
return 1;}
--this.Xd9;
++this.XcY;
return-1;}
,XVp:function(){
return this.XCI;}
,Xcu:function(){
return this.XdN;}
,XdR:function(){
return this.XcY;}
,XdS:function(){
return this.Xd9;}
,XdT:function(){
return this.Xcn;}
,xAi:function(xVG){
for(var n in this.XdM){
var XVm=this.XdM[n];
if(XVm.XVg(xVG)){
return XVm;}}
return null;}
,XdV:function(XfU,XdF){
var XYc=this.Xc9(XfU,XdF);
if(!XYc){
return null;}
return this.XdM[XYc];}
,XnG:function(XfU){
var XYc=(XfU||(++this.XcW));
((XYc-0)>this.XcW)&&(this.XcW=(XYc-0));
XYc=this.Xc9(XYc,true);
if(!XYc){
return null;}
if(this.XdM[XYc]){
this.XCI.Xpr('W window-no '+XfU+
' yet exists','error');
return null;}
return XYc;}
,XoD:function(xfK){
var xUG;
for(XYc in this.XdM){
if(XVm=this.XdM[XYc]){
if(xUG=XVm.XoD(xfK)){
return xUG;}}}
return null;}
,Xd5:function(XfU){
var XYc=this.Xc9(XfU);
if(!XYc){
return null;}
return this.XdM[XYc].XF3();}
,Xd8:function(){
var xd2={};
var XYc,XVm;
for(XYc in this.XdM){
if(XVm=this.XdM[XYc]){
xd2[XYc]=XVm.XF3();}}
return xd2;}
,Xd7:function(x9Q){
var XYc,XVm;
for(XYc in this.XdM){
if((XVm=this.XdM[XYc])&&
(x9Q==XVm.XF3()||
x9Q==this.XCI.XvR(XVm.XF3()))
)
{
return XYc;}}
return null;}
,Xdj:function(XCZ,XCY){
var Xbm=this.Xdv.add(XCZ,XCY);
var X1K=function(XfA){
if(XfA.XdW()==Xbr&&
XfA.Xd2()==XcA)
{
Xbm.exec('',XfA);
return true;}};
var XYc,XVm;
for(XYc in this.XdM){
if(XVm=this.XdM[XYc]){
XVm.Xch(X1K);}}
return Xbm;}
,Xdl:function(XCZ,XCY){
return this.XfJ.add(XCZ,XCY);}
,x6p:function(){
return this.XdR()<=0;}
,XeA:function(XfA){
return this.Xdv.exec('',XfA);}
,XeB:function(XfA){
return this.XfJ.exec('',XfA);}
,Xeh:function(XfU,Xcy){
var XYc=this.Xc9(XfU);
if(!XYc){
return 'Wrong windowNo '+XfU;}
((XYc-0)==this.XcW)&&(this.XcW=(XYc-0)-1);
var XVm=this.XdM[XYc];
if(!XVm){
this.XCI.Xpr('W window-no '+XfU+
' does not exist','error');
return 'Missing windowNo '+XfU;}
XVm.x8F();
if(Xcy){
XVm.close();}
this.XdM[XYc]=null;
if(this.Xkv>=2){
this.XCI.Xpr('W window-no '+XfU+' removed'+
(Xcy?' and closed':'')+'==>'+
this.toString(1),'success');}
this.XfG();
return true;}
,XjH:function(){
this.XcT={};
return true;}
,Xem:function(){
return this.Xel();}
,Xen:function(XVa,Xda,XcZ){
this.Xd9-=Xda;
this.XcY-=XcZ;
return(this.XdN-=XVa);}
,XcO:1,XcM:2,XEh:4 
,Xep:function(xaz,XKQ){
if(typeof(xaz)!='string'){
return null;}
var options=XKQ||0;
var xuQ=this.Xkv>=2&&!(options & this.XcO);
var xbK='RESOLVE frame "'+xaz+'"';
var path=xaz;
if(options & this.XEh){
var XHB=true;
var XcU;
while(XHB&&path){
if(XcU=this.XcT[path]){
XHB=false;
xbK+=';ALIAS['+path+']='+XcU;
path=XcU+xaz.substr(path.length);
xbK+='==>"'+path+'"';}
else{
path=path.substr(0,path.lastIndexOf(':'));}}
XHB&&(path=xaz);}
var xoL=path.indexOf(':');
var XYc,Xe3;
if(xoL>=0){
XYc=path.substr(0,xoL)-0;
Xe3=path.substr(xoL+1);}
else{
XYc=path-0;
Xe3='';}
xbK+=';PATH '+XYc+'+'+Xe3;
var XVm=this.XdV(XYc);
if(!XVm){
this.XCI.Xpr(xbK+';FC missing','error');
return null;}
xbK+=';FC found';
var XW6=XVm.Xep(Xe3);
if(typeof(XW6)!='object'){
this.XCI.Xpr(xbK+';log '+XW6,'error');
return null;}
if(!(options & this.XcM)&&!XW6.Xdq()){
this.XCI.Xpr(xbK+';ill.state:'+XW6,'error');
return null;}
xuQ&&this.XCI.Xpr(xbK+'='+XW6,'success');
return XW6;}
,Xeu:function(Xcn){
if(typeof(Xcn)=='function'||
typeof(Xcn)=='object')
{
this.Xcn=Xcn;}
else{
if(typeof(Xcn)!='string'){
return false;}
try{
this.Xcn=eval(Xcn);}
catch(xa8){
this.XCI.Xpr('W Cannot set EEP resolver function:"'+
Xcn+'" ['+(new x6C(xa8))+']','exc');
return false;}}
this.XCI.Xpr('W EEP resolver function set:'+
this.Xcn,'success');
return true;}
,Xev:function(XcV,xVG){
var XEm=Xkq(this.XCI,xVG);
this.XcT[XcV]=XEm;
return XEm;}
,Xqr:function(xaz,Xe4){
var XW6;
if(!(XW6=this.Xep(
xaz,this.XcM | this.XEh)))
{
return false;}
return XW6.Xqr(Xe4);}
,XfG:function(){
if(this.x6p()&&
this.Xcr&&
this.XfM())
{
this.XCI.Xpr('W All loaded:Unblocking!','success');}}
,XfH:function(XC0){
return this.Xdv.remove(XC0);}
,XfI:function(XC0){
return this.XfJ.remove(XC0);}
,toString:function(XKQ){
var xbK='';
var options=XKQ | 0;
var xbK='';
if(!(options & 1)){
for(var XYc in this.XdM){
xbK+=',"'+XYc+'":'+this.XdM[XYc];}}
return 'WindowContainer={all/good/bad:'+this.XdN+
'/'+this.Xd9+'/'+this.XcY+
':'+xbK.substr(1)+'}';}
,XCI:null
,Xcn:null
,Xkv:0
,XcW:0,XdM:null,XcT:null,Xdv:null,XfJ:null 
,Xc1:null,XdM:null 
,Xcr:false
,XcS:null
,XdN:0,Xd9:0,XcY:0 
,Xqi:function(x9Q,XfU,XVO){
if(!x9Q){
this.Xeh(XfU);
var xbK='addExternalWindow()failure:no window returned';
this.XCI.Xpr('W addExternalWindow('+
XfU+')failed(window closed?)','warning');
return;}
var XW6;
this.XCI.Xpr('W '+XfU+' opened','newwin',2);
if(!(XW6=this.Xep(''+XfU,
this.XcO | this.XcM | this.XEh)))
{
var xbK='TFrame "'+XfU+'" not found';
this.XCI.Xpr('W '+xbK,'error');
this.Xkv>0&&alert(xbK);}
if(typeof(x9Q.frames[this.XCI.XvT()])=='object'){
XW6.Xey(x9Q.frames[this.XCI.XvT()],null,true);}
else{
XW6.Xey(x9Q,null,true);}}
,Xc9:function(XfU,XdF){
var XYc=(XfU-0);
if(XYc<-2){
this.XCI.Xpr('W '+
':window-no '+XfU+' too small','error');
return false;}
if(XYc!=Math.floor(XYc)){
this.XCI.Xpr('W '+':window-no '+XfU+
' has fraction','error');
return false;}
if(!XdF){
if(XYc>this.XcW){
this.XCI.Xpr('W '+':window-no '+XfU+
' too large [max:'+this.XcW+']','error');
return false;}
if(!this.XdM[XYc+'']){
this.XCI.Xpr('W '+':window-no '+XfU+
' has no frame container','error');
return false;}}
return XYc+'';}
,XnT:function(XnE){
return typeof(XnE)=='object'
?XnE.location.href
:XnE||this.XCI.Xu().start().toString();}
,Xqk:function(x9Q,XfU,xMj){
var Xp3=x9Q;
var NO=XfU;
var Xqm=xMj;
var Xjj=this;
var X1K=function(){
Xjj.Xqq(Xp3,NO,Xqm);}
self.setTimeout(X1K,1);}
,Xqq:function(x9Q,XfU,xMj){
++XrA;
var xbK=XfU+',url='+xMj;
if(x9Q){
var XW6;
if(x9Q.closed){
xbK+=' opened is already closed in handleWindow_cb2_';
this.XCI.Xpr('W '+xbK,'warning');
return;}
if(XSN||(XfU-0<=0)||
!x9Q.frames[this.XCI.XvT()])
{
xbK+=this.Xqp(x9Q,XfU)
?' opened+registered'
:' opened';}
else{
var XVm=x9Q.frames['trainer_program_frame'].XVm;
if(XVm){
XVm.XfU=XfU;
var XYc=this.XnG(XfU);
this.XdM[XYc]=XVm;}}
if(!(XW6=this.Xep(''+XfU,
this.XcO | this.XcM | this.XEh)))
{
var XYB='TFrame "'+XfU+'" not found';
this.XCI.Xpr('W '+XYB,'error');
xbK+=';'+XYB;}
if((XfU-0)>0&&
typeof(x9Q.frames[this.XCI.XvT()])=='object')
{
Xwv=this.XdM[XfU].XVh('-3');
Xwv&&Xwv.xTN(Xbr,XcA);
this.XfG();}
else{
XW6.Xey(x9Q,xMj,true);}}
else{
xbK+=' open failed';
this.Xeh(XfU,true);}
if(!x9Q||this.Xkv>=2){
this.XCI.Xpr('W '+xbK,x9Q?'success':'error');}}
,Xqp:function(x9Q,XfU){
if(typeof(this.XdM[XfU])!='object'||
!this.XdM[XfU])
{
this.XCI.Xpr('W '+XfU+' handleWindow2_():no entry','info');
this.XcR(XfU,x9Q,true);
return true;}
this.XCI.Xpr('W '+XfU+' handleWindow2_():entry exists:'+
this.XdM[XfU],'info');
return false;}
,Xee:function(){
var Xea=this.XCI.XXe();
if(Xea.XCC()>0){
var xYE=Xea.xb9();
Xea.xbz(new xyj(-1));
this.Xkv>=2&&
this.XCI.Xpr('W AGAIN '+xYE+' events;'+Xea);
return false;}
return true;}
,Xel:function(){
this.Xcr=false;
this.XcS=XAB;
return true;}
,Xes:function(){
var x1N=this.XCI.XFV();
if(x1N==XAD){return true;}
this.XcS=x1N;
this.Xcr=true;
this.XCI.xTN(XAD);
return true;}
,XfM:function(){
if(!this.Xee()){
return false;}
this.Xcr=false;
this.XCI.xTN(this.XcS);
this.XcS=XAB;
return true;}
,Xdy:function(XbF,XGE){
if(XbF!==true||this.Xkv>=2){
this.XCI.Xpr('W '+XGE+
(XbF===true||!XbF?'':':'+XbF),
XbF===true?'success':'error');}}}
if(self.XI7){XI7.XJB(new XIX('../window_container.js',
[ '../frame_container.js','../frame.js','../eep.js' ]));}

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
