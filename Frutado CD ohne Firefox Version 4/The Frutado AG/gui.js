
function XZK(xVG,XhG){
try{
var x1K=xVG.document.getElementById(XhG);}catch(xa8){
var xbK='Object was not available! Window closed?';
return null;}
return x1K;}
function XTl(XFr,xgP){
this.XFr=XFr;
this.xgP=xgP;}
XTl.prototype={
Xfl:function(){
return this.Xfd;}
,Xhn:function(){
return this.XgZ;}
,Xhp:function(){
return true;}
,Xi:function(){
return this.XFr;}
,Xf9:function(){
return this.Xiy;}
,X4y:function(){
return this.Xg8;}
,Xfa:function(){
return this.Xip;}
,Xg2:function(){
return this.Xiw;}
,Xtm:function(){
return this.xCl;}
,Xti:function(){
return this.xgP;}
,XhE:function(){
return this.XjK;}
,XgK:function(){
return this.Xiq;}
,xUi:''
,Xfd:''
,XgZ:false
,Xg0:false
,XFr:-1
,Xip:-1
,Xiw:-1
,Xiy:0
,Xg8:false
,xCl:''
,xgP:''
,Xic:''
,XjK:false
,Xiq:false}
var XBh=-1;var XET=0;
var XGG=1;
var XHI=2;
var XyY=3;
var dgoQ=0;
var dgoh=0;
function XCN(XgN,Xim,XgS){
if(!XgN)
return;
this.XgN=XgN;
this.Xim=Xim;
this.XgS=XgS;
this.XbR=new XBb;
this.Xh1=[];
this.XjD=[];
this.error='ok';
this.x6K=true;}
XCN.prototype={
x6K:false
,error:'no-init'
,GAPI:{}
,XUC:function(xsF){
this.XbR.xbz(xsF);
this.XgY();}
,X7p:function(xVG,xFR,xeS,x7Q,xdH){}
,Xf1:function(XF4){}
,XVp:function(){
return this.Xfj().XVp();}
,XRN:function(){
return this.Xfj().XRN();}
,Xfj:function(){
return this.XgN;}
,Xfk:function(){
return this.XfY;}
,Xfm:function(){
return this.XbR;}
,Xfq:function(){
return this.XgT;}
,XjM:function(){
return this.XgV;}
,Xfp:function(){
return this.XgS;}
,Xft:function(){
return this.XVp().Xu().xNI(
'skin/'+this.Xfp()+'/').toString();}
,Xfy:function(){
return this.Xfj().Xfy();}
,Xfz:function(){
return this.Xfj().Xfz();}
,XFJ:function(){
return this.xbw;}
,XgE:function(){
return this.Xh1.length;}
,XgD:function(XFr){
return this.Xh1[XFr];}
,XjN:function(){
return this.Xid;}
,XgJ:function(){
return this.Xim;}
,XhS:function(){
return this.XjJ;}
,onresize:function(){}
,onunload:function(x9Q){
if(this.Xfq()<XGG){
this.Xhq(XBh);}else{
this.Xhq(XyY);}
this.Xf1();}
,Xpr:function(XGE,xGQ,xat){
this.Xfj().Xpr(XGE,xGQ,xat);}
,xb1:function(){}
,Xhi:function(Xg1){
XF4=this.X0U.Xd6().XVp().
Xfn().Xfx();
return XF4.Xfo().document.body;}
,Xhm:function(XfY){
this.XfY=XfY;}
,XiA:function(XFr,XIH){
this.Xh1[XFr]=XIH;}
,XgN:null,XgS:''
,XgT:XET
,XbR:null
,XgV:{}
,x6m:'',xbw:null,Xh1:null
,XHY:null,XjD:null
,Xid:0
,XjJ:0
,XUB:function(){}
,XTR:function(){}
,XWF:function(){}
,XWL:function(Xh8){}
,XRZ:function(xsF){
if(this.Xfq()!=XBh){
switch(xsF.type){
case XJV:
this.XUB();
break;
case XM9:
this.XTR();
break;
case XRq:
this.XWL(xsF.language);
break;
case XKT:
this.xb1();
break;
case XKW:
this.Xhg(xsF.XfW);
break;
case XLa:
this.XiE(xsF.XiP,xsF.XiN);
break;
case XLz:
this.XiI(xsF.xBH);
break;
case XNc:
this.Xil(xsF.x1N);
break;
default:
var xbK='handleEvent()unknown event:'+xsF.type;
this.Xpr('GUI '+xbK,'error');
return false;}}
return true;}
,XgY:function(){
if(this.Xfq()>=XGG){
while(this.Xfm().XFD()>0){
var XgO=this.Xfm().xbc();
if(XgO.type==XNc&&
this.Xfq()!=XHI)
{return false;}
XgO=this.Xfm().XEJ();
this.XRZ(XgO);}}
return true;}
,Xg6:function(){}
,Xg9:function(){
this.XgV={};
this.XgV.cfg_clock=this.XRN().clock||false;}
,XhN:function(){}
,Xhg:function(XfX){
this.Xhm(this.XgD(XfX));}
,Xhq:function(XgT){
this.XgT=XgT;
if(this.Xfq()==XGG&&
this.XgJ()==0){
this.Xfj().XgR(this.Xfo());}
this.XgY();
return true;}
,XiE:function(xyO,x8I){
this.XjD[x8I]=xyO;
var x7I=-1;
var text='';
for(var i=this.XjD.length-1;i>=0;--i){
if(typeof this.XjD[i]!='undefined'&&this.XjD[i]!=''){
text=this.XjD[i];
x7I=i;
break;}}
this.Xyb(text,x7I);
if(!this.XRN().xfH){window.status=text;}}
,XiI:function(xbw){
this.xbw=xbw;
var XhD=this.xbw.Xcu(true);
this.Xid=(XhD>0?
this.xbw.XEO()/1000:0);
var Xik;
this.Xh1=[];
this.XjJ=0;
for(var i=0;i<XhD;i++){
var Xig=this.xbw.XFY(i);
var Xif=this.XVp().XFX(Xig,true);
var Xie=new XTl(i,this.xbw.Xti(i));
with(Xie){
xUi=Xig/1000;
Xfd=Xif;
Xg0=true;
XgZ=(i+1<XhD);
Xg8=this.xbw.X4y(i)?1:0;
xCl=this.xbw.Xtm(i);
Xiq=true;if(this.xbw.Xgso(i)){
Xiy=this.XjJ;
this.XjJ++;
Xik=i;
XjK=true;}
Xip=Xik;
for(var t=i+1;t<XhD;t++){
if(this.xbw.Xgso(t)&&Xiw==-1){
Xiw=t;}}}
this.XiA(i,Xie);
if(i==0){
this.Xhm(Xie);}}
this.Xhq(XHI);
this.Xg6();}
,XiW:function(){
this.Xfj().x5t=!this.Xfj().x5t;}
,Xil:function(XHY){
var xlK=XHY.Xns();
switch(xlK){
case 1:
this.XiE(XQK('TOK_CONNECTING'),0);
break;
case 2:
this.XiE(XQK('TOK_OPENING'),0);
break;
case 3:
this.XiE(XQK('TOK_OPEN'),0);
break;
case 4:
this.XiE(XQK('TOK_IDLE'),0);
break;
case 5:
if(XHY.Xtr()==108){
this.XiE(XQK('TOK_PAUSED'),0);}else{
this.XiE(XQK('TOK_WAITING'),0);}
break;
case 6:
if(XHY.Xtr()==109){
this.XiE(XQK('TOK_BUFFERING'),0);}else{
if(XHY.X5B()& XEG){
this.XiE(XQK('TOK_USERINPUT'),0);}
else{
this.XiE(XQK('TOK_PLAYING'),0);}}
break;}
this.XHY=XHY;
this.XhN();}}
function XS6(XgN,Xim,XgS){
if(!XgN)
return;
XCN.XHO(this,XgN,Xim,XgS);}
XS6.prototype=new XCN;
XS6.prototype.X7p=function(xVG,xFR,xeS,x7Q,xdH){
this.xVG=xVG;
this.xFR=xFR||0;
this.xeS=xeS||0;
this.x7Q=x7Q||'100%';
this.xdH=xdH||'100%';
this.Xg9();
this.X7s();}
XS6.prototype.Xfo=function(){
return this.XgQ;}
XS6.prototype.XgQ=null;
XS6.prototype.XjO=null;
XS6.prototype.xdH=0;
XS6.prototype.x7Q=0;
XS6.prototype.xFR=0;
XS6.prototype.xeS=0;
XS6.prototype.Xya=function(xsH){
XVo(xsH);
this.XjO=xsH;
if(typeof this.Xfo().GAPI=='object'&&
(typeof this.Xfo().GAPI._INIT=='function'||
typeof this.Xfo().GAPI._INIT=='object'))
{
this.GAPI=this.Xfo().GAPI;
this.GAPI.GCONF=this.Xfo().parent.GCONF;
this.GAPI._INIT();}else{
XPi('boot','GAPI not initialized. This GUI is not compatible.');
return;}
this.XVi();
this.XWL();}
XS6.prototype.X7s=function(){
var Xgw='dgoNavi'+this.XgJ()+'Frame';
var Xgx='<iframe src="'+this.XVp().Xu().xNI(
'relax_domain.html?dgoDOMAIN='+this.XVp().XRN().domain)+
'" id="'+Xgw+'" name="'+
Xgw+'" border="0" frameborder="0" scrolling="no" style="'+
'position:absolute;width:'+this.x7Q+';height:'+this.xdH+
';left:0;top:0;z-index:9999;visibility:'+
'visible;border:0px"></iframe>';
this.xVG.document.body.innerHTML=
this.xVG.document.body.innerHTML+Xgx;
if(!this.xVG.frames[Xgw]){
var xbK='createNavFrame_()iFrame for GUI could not be created!';
this.Xpr('GUI '+xbK,'error');
return false;}
this.XjO=this.xVG.document.getElementById(Xgw);
this.XgQ=this.XjO.contentWindow;
this.xVG.XhU=new XAZ(this,this.onresize);
this.xVG.XjF=function(){this.XhU.exec()};
xA7(this.xVG,this.xVG.document.body,
'resize',this.xVG.XjF,
xA3);
this.xVG.XhV=new XAZ(this,this.onunload);
this.xVG.XhW=function(){this.XhV.exec()};
xA7(this.xVG,this.xVG.document.body,
'unload',this.xVG.XhW,
xA3);
var XRY=this.XVp().Xu().xNI('skin/'+this.Xfp()+
'/gui.html').toString();
this.XRN().domain&&(XRY+='?'+this.XRN().domain);
XGH(
this.xVG,this.XjO,this,this.Xya);
this.XgQ.location.replace(XRY);}
if(self.XI7){XI7.XJB(new XIX('../gui.js',
['../gui_widgets.js','../gui_events.js']));}

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
