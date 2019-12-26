//
//
function XLc(XCI,XCt){
if(!XCI)return;
XLD.XHO(this,XCI,XCt);
var dgo=XCI.Xn5();
if(dgo&&!dgo.RenderHighlight_evalLeft4Line){
dgo.RenderHighlight_evalLeft4Line=RenderHighlight_evalLeft4Line;
dgo.RenderHighlight_evalTop4Line=RenderHighlight_evalTop4Line;
dgo.RenderHighlight_evalWidth4Line=RenderHighlight_evalWidth4Line;
dgo.RenderHighlight_evalLeft4BoxB=RenderHighlight_evalLeft4BoxB;
dgo.RenderHighlight_evalTop4BoxB=RenderHighlight_evalTop4BoxB;
dgo.RenderHighlight_evalWidth4BoxB=RenderHighlight_evalWidth4BoxB;}}
function XB7(){
XLc.prototype=new XLD;
XLc.prototype.XMd=true;
XLc.prototype.XUh=function(XUa){
this.XU3=false;
this.XUv=0;
return true;}
XLc.prototype.XUU=function(XUa,XU2){
var XM6=(this.x6U()==null);
switch(this.xGQ){
case 'underline':
case 'zoom':
case 'zoom_in':
case 'zoom_out':
if(this.XUv<1){
this.XUv=Math.min(XU2*1.5,1);
this.xb1();}
break;
case 'flash':
this.XU3=(XU2>=1?false:!this.XU3);
this.xb1();
break;
default:
break;}
XM6&&this.XL0();
return true;}
XLc.prototype.XUi=function(XUa){
this.XU3=false;
this.XUv=null;
if(this.xfK==X3B('','hl')){
this.XCI.x6b().remove(this,true);}
return true;}
XLc.prototype.XUc=0;XLc.prototype.XU3=false;
XLc.prototype.XUv=null;
XLc.prototype.x4o=function(x5g){
if(!x5g.display||!x5g.visibility){
return this.Xnd();}
return this.x4n({
xbF:x5g.xbF,
x7d:x5g.x7d,
x8t:x5g.x8t,
XLp:this.x8o(this.xfK+'B')});}
XLc.prototype.x4f=function(x5g){
this.XCI.x6b().X8E(this);
var parent=this.XL7(x5g);
var XLp=this.XL6('div',parent,this.xfK+'B','dgoHL',this.x4d,
{position:x5g.position,x5w:true});
if(!XLp||XLp.tagName!='DIV'){
var xbK='Highlight "'+this.xfK+
'":no bottom div('+XLp+')';
dgo7.Xpr('R '+xbK,'error');
return false;}
var x2H={
xbF:x5g.xbF,
position:x5g.position,
x7d:x5g.x7d,
x8t:x5g.x8t,
XLp:XLp};
var xd2=this.x4e(x2H);
if(xd2){
if(this.XAo){var XML,X9A;
var W=this.x7Q;
var x7d=XCi(
x5g.x7d,this.xVG.document.body);
var x=x7d.x;
var y=x7d.y;
if(this.xGQ=='line'||this.xGQ=='underline'){
XML=new XAi(x,y,
x+x5g.x8t.x-1,y+x5g.x8t.y+W-1);
X9A=(this.XAo!=-1||
this.X9E(XML));}
else{x=Math.floor(x+x5g.x8t.x*this.x7f+
(this.x7p||0)+0.5);
y=Math.floor(y+x5g.x8t.y*this.x7m+
(this.x7q||0)+0.5);
var X9J=x+(x5g.x8t.x*(this.x7w-this.x7f));
var X9K=y+(x5g.x8t.y*(this.x7x-this.x7m));
XML=new XAi(x-W,y-W,X9J+W-1,X9K+W-1);
X9A=(this.XAo!=-1||
this.X9E(XML));}
X9A&&this.xHF([ x5g.xbF,XML ],true);}
this.XUt(this.XbM)
?(xd2=true)
:this.XbM(x2H);}
return xd2;}
XLc.prototype.XbM=function(x5g){
var XM6=(!this.xVG);
var xa7=x5g?this.x4n(x5g):this.xb1();
if(xa7){
this.XLA(this.Xd4());
if(this.XUc>0){
this.XCI.x6b().XU6().add(
this,this.xUi,this.XUc,
this.XCI.XRN().XTw?0:XrQ);}}
XM6&&this.XL0();
if(this.XTT){
this.XTT=false;
if(this.XUc>0){}
else{
this.xb1();}}}
XLc.prototype.x4d=function(xbI,XCt,xau){
var color=XCt.color||this.x8h;
var style=xbI.style;
style.borderWidth='0px';
style.margin='0px';
style.padding='0px';
style.lineHeight='1px';
style.fontSize=1;
style.zIndex=10000;
style.left='0px';
style.top='0px';
style.width='1px';
style.height='1px';
style.visibility='hidden';
if(XCt.position){
style.position=XCt.position;}
if(color.substr(0,4)=='img:'){
var x4y=color.lastIndexOf('.');
this.x8s(xbI,this.XCI.Xu().xNI(
'widgets/highlight2/'+
(x4y>=4?color.substr(4,x4y-4):color.substr(4))).toString());}
else{
var xoL=color.indexOf('#');
if(xoL==0){
color=color.substr(1);}
var xoL=color.indexOf('0x');
if(xoL==0){
color=color.substr(2);}
if(xAn(color)){
style.backgroundColor='#'+color;}
else{
style.backgroundColor=color;}
style.backgroundImage='none';}
if(XCt.x5w&&this.XCI.XFI_('ie','5')){
xbI.innerHTML='&nbsp;';}
return xau.appendChild(xbI);}
XLc.prototype.x4r=function(XVK){
var xbK='R unapply '+this.xGQ+' "'+this.xfK+'":'
var xa7;
if(this.XUc>0){
xa7=this.XCI.x6b().XU6().remove(this);
xbK+=' animation.remove='+(xa7?'ok':'error');}
if(XVK){
return true;}
var x5y=this.x8o(this.xfK,true);
if(x5y){
xa7=this.x8S(this.xfK);}
else if(x5y===null){
xa7=this.x8S(this.xfK+'B');}
else{
this.XCI.Xpr(xbK+'frameDiv="'+x5y+'"','error');
return false;}
var xd2=(xa7===false
?xa7:this.x4q(x5y===null));
this.XCI.Xpr(xbK+' retval='+xd2,xd2?'success':'error');
return xd2;}
XLc.prototype.xCU=function(){
return this.xCW||false;}}
function RenderHighlight_evalLeft4Line(xoO){
return XPF(xoO).left+'px';}
function RenderHighlight_evalTop4Line(xoO){
return(XPF(xoO).bottom+1)+'px';}
function RenderHighlight_evalWidth4Line(xoO,XU2){
var XML=XPF(xoO);
return(XU2*(XML.right-XML.left+1))+'px';}
function RenderHighlight_evalLeft4BoxB(
xoO,x7f,x7w,Xn8,XU2,x7Q,Xn4,xGQ)
{
var XML=XPF(xoO);
var Xna=XML.right-XML.left+1;
switch(xGQ){
case 'zoom':
case 'zoom_in':
return Math.floor(XU2*(XML.left+Xn8+(x7f*Xna))-
x7Q+0.5)+'px';
case 'zoom_out':
return Math.floor(XML.left+Xn8+(x7f*Xna)+
(1-XU2)*0.5*(x7w-x7f)-
x7Q+0.5)+'px';
default:
return Math.floor(XML.left+Xn8+(x7f*Xna)-
x7Q-Xn4+0.5)+'px';}}
function RenderHighlight_evalTop4BoxB(
xoO,x7m,x7x,Xn9,XU2,x7Q,Xn4,xGQ)
{
var XML=XPF(xoO);
var Xnb=XML.bottom-XML.top+1;
var y=XML.top+Xn9+(x7x*Xnb);
switch(xGQ){
case 'zoom':
case 'zoom_in':
var X1J=Xn1(xoO,4);
return Math.floor(y+(1-XU2)*(X1J.y-y)+0.5)+'px';
case 'zoom_out':
return Math.floor(y-
(1-XU2)*0.5*(x7x-x7m)*Xnb+0.5)+'px';
default:
return Math.floor(y+Xn4+0.5)+'px';}}
function RenderHighlight_evalWidth4BoxB(
xoO,x7f,x7w,XU2,x7Q,Xn4,xGQ)
{
var XML=XPF(xoO);
var Xna=XML.right-XML.left+1;
switch(xGQ){
case 'zoom':
case 'zoom_in':
var X1J=Xn1(xoO,4);
var w=(x7w-x7f)*Xna;
return Math.floor(w-(1-XU2)*(X1J.x-w)+
x7Q+x7Q+0.5)+'px';
case 'zoom_out':
return Math.floor(XU2*(x7w-x7f)*Xna+
x7Q+x7Q+0.5)+'px';
default:
return Math.floor((x7w-x7f)*Xna+
x7Q+x7Q+Xn4+Xn4+0.5)+'px';}}
function XLe(xGQ,xfK,XCI,XCt){
if(!XCI)return;
this.xGQ=xGQ;
this.xfK=xfK;
XLc.XHO(this,XCI,XCt);
if(xGQ=='underline'){
this.XUc=50;
if(this.xUi==null){this.xUi=1000;}}}
function XBc(){
XLe.prototype=new XLc;
XLe.prototype.toString=function(){
var xbK=XLD.prototype.toString.XHO(this);
with(this){
xbK+=',interval:'+XUc+
(XU3?',flash':'');}
return 'RenderHighlightLine={'+xbK+'}';}
XLe.prototype.x4n=function(XCt){
this.xCW=false;
if(XCt.XLp){
var style=XCt.XLp.style;
var x8u=XCt.x8t.x*this.x7w;
var x8v=XCt.x8t.y*this.x7x;
if(this.Xn3){
var uid=XCt.xbF.uniqueID;
style.setExpression('left',"dgo.RenderHighlight_evalLeft4Line("+
uid+")");
style.setExpression('top',"dgo.RenderHighlight_evalTop4Line("+
uid+")");
style.height=this.x7Q+'px';
style.setExpression('width',"dgo.RenderHighlight_evalWidth4Line("+
uid+','+
(this.XUv==null?1:this.XUv)+")");
style.setExpression('display',
"dgo.RenderBase_evalParentDisplay("+uid+")");
style.setExpression('visibility',
"dgo.RenderBase_evalParentVisibility("+uid+")");}
else{
var x7Z=XEA(XCt.XLp);
var x7d=XCt.x7d;
style.left=(x7d.x-x7Z.x+parseInt(style.left))+'px';
style.top=
(x8v+x7d.y-x7Z.y+parseInt(style.top))+'px';
style.height=this.x7Q+'px';
style.width=Math.floor((this.XUv==null?
1:this.XUv)*x8u+0.5)+'px';
XAa(style,'visibility','visible');}
this.xCW=XPF(XCt.XLp,true);
var x4K=XPD(this.xVG,this.XCI.XVy());
this.xCW.moveBy(x4K.x,x4K.y);}
return true;}
XLe.prototype.x4e=function(XCt){
var style=XCt.XLp.style;
style.height=this.x7Q+'px';
style.width=XCt.x8t.x*this.x7w+'px';
return true;}
XLe.prototype.x4q=function(){
return true;}
XLe.prototype.Xnd=function(){
var x3E;
if(x3E=this.x8o(this.xfK+'B')){
XAa(x3E.style,'visibility','hidden');}
this.XCI.Xpr('RH line '+this.xfK+' now invisible','success');
return true;}}
function XLd(xGQ,xfK,XCI,XCt){
if(!XCI)return;
this.xGQ=xGQ;
this.xfK=xfK;
XLc.XHO(this,XCI,XCt);
switch(xGQ){
case 'flash':
this.xUi=this.xUi||1500;
this.XUc=100;
break;
case 'zoom':
case 'zoom_in':
this.xUi=this.xUi||1500;
this.XUc=100;
break;
case 'zoom_out':
this.xUi=this.xUi||1000;
this.XUc=100;
break;
default:
break;}
if((!this.XCI.XFI_('ie','4')||
this.XCI.XFI_('ie','5.5'))&&
XCt.x6T)
{
this.x5l=XCt.x6T();}}
function XUk(){
XLd.prototype=new XLc;
XLd.prototype.toString=function(){
var xbK=XLD.prototype.toString.XHO(this);
with(this){
xbK+=',interval:'+XUc+
',fillColor:'+x5l+
(XU3?',flash':'');}
return 'RenderHighlightBox={'+xbK+'}';}
XLd.prototype.x5l=null;
XLd.prototype.x4n=function(XCt){
var x5p=false;
var x3E;
var x7Z;
var style;
var W=this.x7Q;
var XUS=(this.XU3?this.x7Q:0);
var XU1=(this.XUv==null?1:this.XUv);
var x7e=Math.floor(XCt.x7d.x+XCt.x8t.x*this.x7f+
(this.x7p||0)+0.5);
var x7l=Math.floor(XCt.x7d.y+XCt.x8t.y*this.x7m+
(this.x7q||0)+0.5);
var x8u=Math.floor(XCt.x8t.x*
(this.x7w-this.x7f)+0.5);
var x8v=Math.floor(XCt.x8t.y*
(this.x7x-this.x7m)+0.5);
switch(this.xGQ){
case 'zoom':
case 'zoom_in':{
var XVB=(1-XU1);
x7e=Math.floor(x7e*XU1+0.5);
x7l=Math.floor(x7l*XU1+0.5);
x8u=Math.floor(x8u+(xxR(this.xVG)-W-x8u)*XVB+0.5);
x8v=Math.floor(x8v+(xyR(this.xVG)-W-x8v)*XVB+0.5);}break;
case 'zoom_out':{
var XVB=(1-XU1);
x7e=Math.floor(x7e+x8u*XVB*0.5+0.5);
x7l=Math.floor(x7l+x8v*XVB*0.5+0.5);
x8u=Math.floor(x8u*XU1+0.5);
x8v=Math.floor(x8v*XU1+0.5);}break;
default:
break;}
this.xCW=false;
if(x3E=XCt.XLp||this.x8o(this.xfK+'B')){
x7Z=XEA(x3E);
style=x3E.style;
if(this.Xn3){
var uid=XCt.xbF.uniqueID;
style.setExpression('left',"dgo.RenderHighlight_evalLeft4BoxB("+
uid+','+this.x7f+','+this.x7w+','+
this.x7p+','+XU1+','+W+','+XUS+
",'"+this.xGQ+"')");
style.setExpression('top',"dgo.RenderHighlight_evalTop4BoxB("+
uid+','+this.x7m+','+this.x7x+','+
this.x7q+','+XU1+','+W+','+XUS+
",'"+this.xGQ+"')");
style.setExpression('width',"dgo.RenderHighlight_evalWidth4BoxB("+
uid+','+this.x7f+','+this.x7w+','+
XU1+','+W+','+XUS+",'"+this.xGQ+"')");
style.height=W+'px';
style.setExpression('display',
"dgo.RenderBase_evalParentDisplay("+uid+")");
style.setExpression('visibility',
"dgo.RenderBase_evalParentVisibility("+uid+")");}
else{
style.left=(x7e-x7Z.x+parseInt(style.left)-W-XUS)+'px';
style.top=(x8v+x7l-x7Z.y+parseInt(style.top)+XUS)+'px';
style.width=(W+XUS+x8u+XUS+W)+'px';
style.height=W+'px';
XAa(style,'visibility','visible');}
this.xCW=XPF(x3E,true);}
else{
x5p=true;}
if(x3E=XCt.x9H||this.x8o(this.xfK+'T')){
x7Z=XEA(x3E);
style=x3E.style;
style.left=(x7e-x7Z.x+parseInt(style.left)-W-XUS)+'px';
style.top=(x7l-x7Z.y+parseInt(style.top)-XUS-W)+'px';
style.width=(W+XUS+x8u+XUS+W)+'px';
style.height=W+'px';
XAa(style,'visibility','visible');
if(this.xCW){
this.xCW.add(XPF(x3E,true));}
else{
this.xCW=XPF(x3E,true);}}
else{
x5p=true;}
if(x3E=XCt.x6s||this.x8o(this.xfK+'L')){
x7Z=XEA(x3E);
style=x3E.style;
style.left=(x7e-x7Z.x+parseInt(style.left)-XUS-W)+'px';
style.top=(x7l-x7Z.y+parseInt(style.top)-XUS)+'px';
style.width=W+'px';
style.height=(x8v+XUS+XUS)+'px';
XAa(style,'visibility','visible');
if(this.xCW){
this.xCW.add(XPF(x3E,true));}
else{
this.xCW=XPF(x3E,true);}}
else{
x5p=true;}
if(x3E=XCt.x8d||this.x8o(this.xfK+'R')){
x7Z=XEA(x3E);
style=x3E.style;
style.left=(x8u+x7e-x7Z.x+parseInt(style.left)+XUS)+'px';
style.top=(x7l-x7Z.y+parseInt(style.top)-XUS)+'px';
style.width=W+'px';
style.height=(x8v+XUS+XUS)+'px';
XAa(style,'visibility','visible');
if(this.xCW){
this.xCW.add(XPF(x3E,true));}
else{
this.xCW=XPF(x3E,true);}}
else{
x5p=true;}
if(this.x5l){
if(x3E=XCt.XLs||this.x8o(this.xfK+'C')){
x7Z=XEA(x3E);
style=x3E.style;
style.left=(x7e-x7Z.x+parseInt(style.left)-XUS)+'px';
style.top=(x7l-x7Z.y+parseInt(style.top)-XUS)+'px';
style.width=(x8u+XUS+XUS)+'px';
style.height=(x8v+XUS+XUS)+'px';
XAa(style,'visibility','visible');
if(this.xCW){
this.xCW.add(XPF(x3E,true));}
else{
this.xCW=XPF(x3E,true);}}
else{
x5p=true;}}
if(this.xCW){
var x4K=XPD(this.xVG,this.XCI.XVy());
this.xCW.moveBy(x4K.x,x4K.y);}
if(x5p){
this.XCI.Xpr('Rbox "'+this.xfK+
'"(or part)has gone:Refresh maybe incomplete.','warning');
return false;}
return true;}
XLd.prototype.x4e=function(XCt){
var x5p=false;
var style;
var parent=XCt.XLp.parentNode;
var x9H=this.XL6(
'div',parent,this.xfK+'T','dgoHL',this.x4d,
{position:XCt.position,x5w:true});
if(x9H){
style=x9H.style;
style.width=(XCt.x8t.x*
(this.x7w-this.x7f)+2*this.x7Q)+'px';
style.height=this.x7Q+'px';
XCt.x9H=x9H;}
else{
x5p=true;}
var x6s=this.XL6(
'div',parent,this.xfK+'L','dgoHL',this.x4d,
{position:XCt.position});
if(x6s){
style=x6s.style;
style.width=this.x7Q+'px';
style.height=(XCt.x8t.y*
(this.x7x-this.x7m))+'px';
XCt.x6s=x6s;}
else{
x5p=true;}
var x8d=this.XL6(
'div',parent,this.xfK+'R','dgoHL',this.x4d,
{position:XCt.position});
if(x8d){
style=x8d.style;
style.width=this.x7Q+'px';
style.height=(XCt.x8t.y*
(this.x7x-this.x7m))+'px';
XCt.x8d=x8d;}
else{
x5p=true;}
if(this.x5l){
var XLs=this.XL6(
'div',parent,this.xfK+'C','dgoHLfill',this.x4d,
{position:XCt.position,color:this.x5l});
if(XLs){
style=XLs.style;
style.width=(XCt.x8t.x*
(this.x7w-this.x7f))+'px';
style.height=(XCt.x8t.y*
(this.x7x-this.x7m))+'px';
XCt.XLs=XLs;}
else{
x5p=true;}}
if(x5p){
var xbK='Highlight "'+this.xfK+
'":Incomplete tag generation:Abort.';
dgo7.Xpr('R '+xbK,'error');
return false;}
style=XCt.XLp.style;
style.width=(XCt.x8t.x*
(this.x7w-this.x7f)+2*this.x7Q)+'px';
style.height=this.x7Q+'px';
return true;}
XLd.prototype.x4q=function(XKB){
var xa7=true;
if(XKB){
xa7=this.x8S(this.xfK+'T');
if(xa7)
xa7=this.x8S(this.xfK+'L');
if(xa7)
xa7=this.x8S(this.xfK+'R');
if(this.x5l&&xa7)
xa7=this.x8S(this.xfK+'C');}
return xa7;}
XLd.prototype.Xnd=function(){
var x3E;
if(x3E=this.x8o(this.xfK+'B')){
XAa(x3E.style,'visibility','hidden');}
if(x3E=this.x8o(this.xfK+'T')){
XAa(x3E.style,'visibility','hidden');}
if(x3E=this.x8o(this.xfK+'L')){
XAa(x3E.style,'visibility','hidden');}
if(x3E=this.x8o(this.xfK+'R')){
XAa(x3E.style,'visibility','hidden');}
if(this.x5l){
if(x3E=this.x8o(this.xfK+'C')){
XAa(x3E.style,'visibility','hidden');}}
this.XCI.Xpr('RH box '+this.xfK+' now invisible','success');
return true;}}
function XB5(){
XB7();
XBc();
XUk();}
if(self.XI7){XI7.XJB(new XIX('../render_highlight.js',
['../render_base.js','../render_container.js','animation.js'],
XB5));}
else{
XB5();}

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
