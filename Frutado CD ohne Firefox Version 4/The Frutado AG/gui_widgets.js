
function XTs(XGT){
if(!XGT){
return;}
this.XGT=XGT;}
XTs.prototype={
Xw:function(){
return parseInt(this.XGT.width);}
,Xgb:function(Xff){
if(Xff==true){
this.XHY.disabled=false;
this.Xhs('default');
this.XTy();}else{
this.XHY.disabled=true;
this.Xhs('disabled');
this.XfZ();}}
,Xgd:function(Xff){
if(Xff==true){
this.XGT.style.visibility='visible';
this.XGT.style.display='block';}else{
this.XGT.style.visibility='hidden';
this.XGT.style.display='none';}}
,Xgh:function(e){}
,Xgj:function(e){}
,Xgl:function(e){}
,Xgn:function(e){}
,Xgp:function(e){}
,Xgr:function(e){}
,Xhv:function(XC0){
this.Xgi=XC0;}
,Xhw:function(XC0){
this.Xgk=XC0;}
,Xhx:function(XC0){
this.Xgm=XC0;}
,Xhy:function(XC0){
this.Xgo=XC0;}
,Xhz:function(XC0){
this.Xgq=XC0;}
,Xit:function(XC0){
this.Xgt=XC0;}
,X0C:function(x7Q){
this.XGT.style.width=x7Q;}
,XiK:function(xFR){
this.XGT.style.left=xFR;}
,XiM:function(xeS){
this.XGT.style.top=xeS;}
,XGT:null
,XgQ:null
,Xg4:null
,Xgi:null
,Xgo:null
,Xgq:null
,XHY:{disabled:false,xYC:false,x0L:false}
,XTy:function(){
if(XSS(this.XgQ)){
return;}
this.XGT.Xfe=this;
try{
xA7(this.XgQ,this.XGT,'mouseover',this.XhL,
xA3);
xA7(this.XgQ,this.XGT,'mouseout',this.XhK,
xA3);
xA7(this.XgQ,this.XGT,'click',this.XhH,
xA3);
xA7(this.XgQ,this.XGT,'mousedown',this.XhJ,
xA3);
xA7(this.XgQ,this.XGT,'mouseup',this.XhM,
xA3);
xA7(this.XgQ,this.XGT,'dblclick',this.XhI,
xA3);}catch(xa8){
var xbK='Object was not available! Window closed?';
return false;}}
,XfZ:function(){
try{
xA8(this.XGT,'mouseover',this.XhL,
xA4);
xA8(this.XGT,'mouseout',this.XhK,
xA4);
xA8(this.XGT,'click',this.XhH,
xA4);
xA8(this.XGT,'mousedown',this.XhJ,
xA4);
xA8(this.XGT,'mouseup',this.XhM,
xA4);
xA8(this.XGT,'dblclick',this.XhI,
xA4);}catch(xa8){
var xbK='Object was not available! Window closed?';
return false;}}
,XhH:function(e){
this.Xfe.Xhs('active');
if(this.Xfe.Xgi)
{this.Xfe.Xgi.exec('onclick',e)}
this.Xfe.Xgh(e);}
,XhI:function(e){
this.Xfe.Xhs('pressed');
if(this.Xfe.Xgk)
{this.Xfe.Xgk.exec('ondblclick',e)}
this.Xfe.Xgj(e);}
,XhJ:function(e){
this.Xfe.Xhs('pressed');
if(this.Xfe.Xgm)
{this.Xfe.Xgm.exec('onmousedown',e)}
this.Xfe.Xgl(e);}
,XhK:function(e){
this.Xfe.Xhs('default');
if(this.Xfe.Xgo)
{this.Xfe.Xgo.exec('onmouseout',e)}
this.Xfe.Xgn(e);}
,XhL:function(e){
this.Xfe.Xhs('active');
if(this.Xfe.Xgq)
{this.Xfe.Xgq.exec('onmouseover',e)}
this.Xfe.Xgp(e);}
,XhM:function(e){
this.Xfe.Xhs('active');
if(this.Xfe.Xgt)
{this.Xfe.Xgt.exec('onmouseup',e)}
this.Xfe.Xgr(e);}
,Xhs:function(XHY){
try{
if(this.XGT.src){
var xRM=new RegExp('(.*)\/([^_]+)_([^\.]+)\.([^\/]+)$','i');
var Xhj=this.XGT.src.match(xRM);
if(Xhj&&Xhj[3]!=XHY){
this.XGT.src=Xhj[1]+'/'+Xhj[2]+'_'+XHY+
'.'+Xhj[4];}
else if(!Xhj){
var xbK='setImageState_()wrong name for dynamic Image:'+
this.XGT.src;}}}catch(xa8){
var xbK='Object was not available! Window closed?';
return false;}}}
function XXK(XgQ,XhF){
if(!XhF){
return;}
this.XgQ=XgQ;
this.XGT=new XZK(this.XgQ,XhF)
if(!this.XGT||!this.XGT.id){
return;}
this.x6K=true;
XTs.XHO(this,this.XGT);}
XXK.prototype=new XTs;
XXK.prototype.XGT=null;
XXK.prototype.x6K=false;
function XXU(XgQ,XhF){
if(!XhF){
return;}
this.XgQ=XgQ;
this.XGT=new XZK(this.XgQ,XhF);
if(!this.XGT||!this.XGT.id){
return null;}
this.x6K=true;
this.xyO='';
XTs.XHO(this,this.XGT);}
XXU.prototype=new XTs;
XXU.prototype.Xtx=function(){
return this.xyO;}
XXU.prototype.setText=function(xyO,x8I){
var color='#FFFFFF;';
if(x8I==11){color='#404040;';}
try{
this.xyO=xyO;
this.XGT.innerHTML='<span style="color:'+color+'">'+xyO+'</span>';}catch(xa8){
var xbK='Object was not available! Window closed?';
return false;}}
XXU.prototype.XGT=null;
XXU.prototype.x6K=false;
XXU.prototype.xyO='';
function XS5(XGT){
if(!XGT||!XGT.id){return}this.XGT=XGT;
XTs.XHO(this,this.XGT);
this.x6K=true;}
XS5.prototype=new XTs;
XS5.prototype.Xfv=function(){
return this.XGT;}
XS5.prototype.Xhl=function(XUD){
try{
this.XGT.alt=XUD;}catch(xa8){
var xbK='Object was not available! Window closed?';
return false;}}
XS5.prototype.XiC=function(XHS){
try{
this.XGT.src=XHS;}catch(xa8){
var xbK='Object was not available! Window closed?';
return false;}}
XS5.prototype.XGT=null;
XS5.prototype.x6K=false;
function XHL(XgQ,Xg3,XiQ){
this.XgQ=XgQ;
this.XiQ=XiQ||null;
this.Xg4=new XZK(this.XgQ,Xg3);
if(this.Xg4==null||!this.Xg4.id){
return;}
this.x6K=true;
XS5.XHO(this,this.Xg4);
this.XiR='';
this.Xgf='';}
XHL.prototype=new XS5;
XHL.prototype.x6K=false;
XHL.prototype.Xgn=function(xsF){
if(this.Xgf&&this.XiQ){
this.XiQ.setText(this.Xgf,11);
this.Xgf='';}}
XHL.prototype.Xgp=function(xsF){
if(this.XiR&&this.XiQ){
this.Xgf=this.XiQ.Xtx();
this.XiQ.setText(this.XiR,11);}}
XHL.prototype.XiH=function(Xi9,Xia){
try{
var Xj5=Xi9||'';
this.Xg4.title=Xj5;
this.Xg4.alt=Xj5;}catch(xa8){
var xbK='Object was not available! Window closed?';
return false;}
this.XiR=Xia||'';
var Xf0=this.XiR.indexOf(';');
if(Xf0>0){
this.XiR=this.XiR.substring(0,Xf0);}}
XHL.prototype.Xg4=null;
XHL.prototype.Xgf='';
XHL.prototype.XiQ=null;XHL.prototype.XiR='';
function XTn(XgQ,Xg3){
this.XgQ=XgQ;
this.Xg4=new XZK(this.XgQ,Xg3);
if(!this.Xg4){
return;}
this.x6K=true;
XS5.XHO(this,this.Xg4);
this.Xgb(true);}
XTn.prototype=new XS5;
XTn.prototype.x6K=false;
function XTi(){}
XTi.prototype={
x6K:false
,X7p:function(xbw){}
,Xf1:function(){}
,xb1:function(){}}
function XOy(XF4){
this.XF4=XF4;
this.XgQ=XF4.Xfo();
this.Xi0=new XXU(this.XgQ,'SynopsisCounter');
this.XiY=new XXU(this.XgQ,'SynopsisTitle');
this.x6K=true;}
XOy.prototype=new XTi;
XOy.prototype={
x6K:false
,X7p:function(xbw){
this.Xi0.setText('0/'+this.Xfr().XgE());
this.Xi0.XiK('400');
return true;}
,Xf1:function(){
return true;}
,xb1:function(){
this.Xi0.setText(this.Xfr().Xfk().Xi()+
'/'+this.Xfr().XgE());
this.Xi0.XiK('400');
if(this.Xfr().Xfk().XhE()){
this.Xhb(this.Xfr().Xfk());}
return true;}
,XgQ:null
,XF4:null
,Xi0:null
,XiY:null
,Xfr:function(){
return this.XF4;}
,Xhb:function(Xii){
if(Xii&&this.XiY){
this.XiY.setText(Xii.Xti());}}}
function XTY(XF4){
this.XF4=XF4;
this.XgQ=XF4.Xfo();
this.Xi0=new XXK(this.XgQ,'Synopsis');
this.XiY=new XXU(this.XgQ,'SynopsisTitle');
this.x6K=true;}
XTY.prototype=new XTi;
XTY.prototype={
x6K:false
,X7p:function(xbw){
if(this.XjK){
var XNz;
for(var i=0;i<this.Xfr().XgE();++i){
if(this.Xfr().XgD(i).XhE()){
try{
XNz=this.XgQ.document.createElement('option');
XNz.text=this.Xfr().XgD(i).Xti();
XNz.XC0=new XAZ(this,this.XhO,
'',this.Xfr().XgD(i));
this.XgH().appendChild(XNz);}catch(xa8){
var xbK='Object was not available! Window closed?';
this.Xfr().Xpr(xbK,'error');
return false;}}}
if(this.Xfr().XRN().xoN){
this.XgH().onchange=function(){
this.options[(this.selectedIndex)].XC0.exec();};}else{
this.XgH().disabled=true;}}
return true;}
,Xf1:function(){
return true;}
,Xgd:function(XjK){
this.XjK=XjK;
this.XiY.Xgd(XjK);
this.Xi0.Xgd(XjK);}
,xb1:function(){
if((this.Xfr().Xfk().Xi()!=
this.Xge)||(this.Xge==-1)){
this.Xge=
this.Xfr().Xfk().Xi();
this.Xhh();}
return true;}
,XgQ:null
,XF4:null
,Xge:-1,Xi0:null
,XiY:null
,XjK:true
,Xfr:function(){
return this.XF4;}
,XgH:function(){
if(this.Xi0){
return this.Xi0.XGT;}
return false;}
,XhO:function(xsF,Xii){
var xCi=this.Xfr().Xfj();
xCi.Xhf(Xii);
xCi.Xfw(Xii).exec();}
,Xhh:function(){
var Xib,XNy;
var XjG=0;
var XeE=this.Xfr().Xfk();
for(var i=0;i<this.Xfr().XgE();++i){
var Xie=this.Xfr().XgD(i);
if(Xie.XhE()){
Xib='';
try{
XNy=this.XgH().options[XjG];}catch(xa8){
var xbK='Object was not available! Window closed?';
this.Xfr().Xpr(xbK,'error');
return false;}
if(Xie.Xi()<XeE.Xfa()){
try{
XNy.text=Xie.Xti();
XNy.selected=false;}
catch(xa8){}}
else
if(Xie.Xi()==XeE.Xi()||
Xie.Xi()==XeE.Xfa())
{
try{
XNy.text=Xie.Xti();
XNy.selected=true;}
catch(xa8){}}
else
{
try{
XNy.text=Xie.Xti();
XNy.selected=false;}
catch(xa8){}}
XjG++;}}
return true;}}
function XTj(XF4){
this.XF4=XF4;
this.XgQ=XF4.Xfo();
this.Xi0=new XXK(this.XgQ,'Synopsis');
this.XiY=new XXU(this.XgQ,'SynopsisTitle');
this.Xhk=new XS5(
new XZK(this.XgQ,'Ruler'));
this.Xi8=new XS5(
new XZK(this.XgQ,'Timeline'));
this.Xi5=new XS5(
new XZK(this.XgQ,'Timeline0'));
this.x6K=true;
this.Xij=new Array;}
XTj.prototype=new XTi;
XTj.prototype={
x6K:false
,X7p:function(){
if(this.XjK){
var html='';
for(var i=0;i<this.Xfr().XgE();++i){
if(this.Xfr().XgD(i).XhE()){
html+=
'<img style="position:absolute;top:0px;left:0px;"'+
' id="'+this.Xgc(i)+'"'+
' class="'+"XBg"+'"'+
' style="cursor:'+X2F+';"'+
' src="'+this.Xfr().Xft()+
'synopsis/tourstopfuture_default.gif"'+
' width="11"'+
' height="16"'+
' border="0"'+
' ondrag="return false;">\n';}}
if(this.Xi0){
this.Xi0.XGT.innerHTML=html;}
return this.Xfc();}}
,Xf1:function(){
this.Xfg=true;
return true;}
,Xgd:function(XjK){
this.XjK=XjK;
this.Xi0.Xgd(XjK);
this.XiY.Xgd(XjK);
this.Xhk.Xgd(XjK);
this.Xi8.Xgd(XjK);
this.Xi5.Xgd(XjK);}
,xb1:function(){
if(!this.Xfg&&this.XjK&&
this.Xfr()&&
this.Xfr().Xfq()!=XBh){
this.Xhh();
this.Xhd(this.Xfr().Xfz());
if(this.Xfr().Xfk().XhE()){
this.Xhb(this.Xfr().Xfk());}}
return true;}
,Xfg:false,XgQ:null
,XF4:null
,Xhk:null
,Xi0:null
,XiY:null
,XiZ:300
,Xi8:null
,Xi5:null
,XjK:true
,XgG:function(){
return Math.max(150,(this.XgQ.document.body.offsetWidth-
this.Xi0.XGT.offsetLeft)-10);}
,Xfc:function(){
var Xih;
for(var i=0;i<this.Xfr().XgE();i++){
if(this.Xfr().XgD(i).XhE()){
Xih=new XTn(
this.XgQ,this.Xgc(i));
if(this.Xfr().XRN().xoN){
Xih.Xgb(
this.Xfr().XgD(i).X4y());
Xih.XGT.style.cursor=X2F;}
else{
Xih.Xgb(false);}
with(Xih){
Xhz(new XAZ(this,this.XhR,'',
this.Xfr().XgD(i)));
Xhy(new XAZ(this,this.XhQ));
Xhv(new XAZ(this,this.XhP,'',
this.Xfr().XgD(i)));}
this.Xij[i]=Xih;}}
return true;}
,Xfr:function(){
return this.XF4;}
,Xgc:function(i){
return 'SynopsisIcon'+i;}
,XhP:function(xsF,Xii){
var xCi=this.Xfr().Xfj();
xCi.Xhf(Xii);
xCi.Xfw(Xii).exec();}
,XhQ:function(){
if(this.XiY){
this.XiY.setText(this.Xfr().Xfk().Xti());}}
,XhR:function(xsF,Xii){
if(this.XiY){
this.XiY.setText(Xii.Xti()+Xii.Xic);}}
,Xhb:function(Xii){
if(Xii&&this.XiY){
this.XiY.setText(Xii.Xti());}}
,Xhh:function(){
var XhT=this.Xfr().Xft();
var XeE=this.Xfr().Xfk();
for(var i=0;i<this.Xfr().XgE();++i){
var Xie=this.Xfr().XgD(i);
if(Xie.XhE()){
if(Xie.Xi()<XeE.Xfa()){
Xgy=XhT+'synopsis/tourstoppast_default.gif';}
else
if(Xie.Xi()==XeE.Xi()||
Xie.Xi()==XeE.Xfa()){
Xgy=XhT+'synopsis/tourstopcurrent_default.gif';}
else
{
Xgy=XhT+'synopsis/tourstopfuture_default.gif';}
this.Xij[i].Xhl('['+Xie.Xfl()+'] '+
Xie.Xti());
this.Xij[i].XiC(Xgy);
var Xir;
if(this.Xfr().XjM().cfg_clock){
var duration=this.Xfr().XjN();
var time=this.Xfr().XFJ().Xtm(i);
var position=Math.floor(time/duration*this.XgG());
Xir=position||0;}else{
var position=Math.floor(this.XgG()/
this.Xfr().XhS()*
Xie.Xf9());
Xir=(position>this.XgG()?
this.XgG():position)||0;}
Xie.XiL(Xir);Xir=Xir-2;
this.Xij[i].XiK(Xir);}}
return true;}
,Xhd:function(Xgv){
var Xay=this.Xfr().Xfk();
var X9T=this.Xfr().XgD(
Xay.Xg2());
var X9R=this.Xfr().XgD(
Xay.Xfa());
var XhC,XhA;
if(this.Xfr().XjM().cfg_clock){
var xyM=this.XgG()/
(this.Xfr().XjN()||1);
XhC=Math.floor(Xgv*xyM);
this.Xi8.X0C(XhC||0);}
else if(X9R){
var duration,Xf8;
var Xmq=Math.max(0,Xgv-X9R.Xtm());
if(X9T){
duration=X9T.Xtm()-X9R.Xtm();
Xf8=X9T.XgL()-X9R.XgL();}
else{
duration=this.Xfr().XjN()-X9R.Xtm();
Xf8=this.XgG()-X9R.XgL();}
var xyM=Xf8/(duration||1);
XhC=X9R.XgL()+Math.floor(Xmq*xyM);
this.Xi8.X0C(
XhC<Xay.XgL()
?Xay.XgL():XhC);}
else{
this.Xi8.X0C(this.XgG());}
this.Xi5.X0C(this.XgG());}}
if(self.XI7){XI7.XJB(new XIX(
'../gui_widgets.js',['dhtml.js']));}

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
