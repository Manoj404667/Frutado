//
//
function X3L(X6w,xfK,XUM,xGQ,X7G,X4W){
this.X6w=X6w;
this.xfK=xfK;
if(xGQ & TRANSITION_GLOBAL){
this.X7r=true;
xGQ-=TRANSITION_GLOBAL;}
if(xGQ==TRANSITION_JUMP&&X7G==''){
this.xGQ=TRANSITION_CONTINUE;}
else if(xGQ==TRANSITION_JUMP||xGQ==TRANSITION_CALL||
xGQ==TRANSITION_JAVASCRIPT)
{
this.xGQ=xGQ;
this.X7G=X7G;}
else{
this.xGQ=TRANSITION_CONTINUE;}
if(typeof(XUM)=='object'&&XUM){
this.XUM=XUM;}
if(typeof(X4W)=='number'){
this.X4W=X4W;}}
X3L.prototype={
x6K:true
,X7x:function(){
return this.X7r;}
,xvD:function(){
if(!this.XUM){
return true;}
var xa7=this.XUM.xvD(this.X6w.X8q()&
WATCH_COMPLETE_FEEDBACK?true:false);
if(xa7.xjM===false){
this.X6w.XCI.Xpr(
'TRANS '+this+' check failed('+xa7.desc+')','info');
return xa7;}
return true;}
,exec:function(){
var xbK,xa7;
this.X6w.X8t();
switch(this.xGQ){
case TRANSITION_JUMP:
xbK='jump "'+this.X7G+'"';
xa7=X3y(this.X7G);
if(xa7){
xbK+=';points:'+this.X6w.X6U;
this.X6w.X69(true);
this.X6w.X3j();}
else if(this.X6w.XCI.XRN().xuQ>=1){
var XYB='JUMP "'+this.X7G+'" failed'
xbK+=';'+XYB;
alert(XYB);}
break;
case TRANSITION_CALL:
xbK='call "'+this.X7G+'"';
xa7=X3x(this.X7G,0);
if(xa7){
if(this.X6w.X8q()& WATCH_ONTRIGGER_CONTINUE)
{
xbK+=';continue';
xa7=this.X6w.X8m();
xbK+=';points:'+this.X6w.X6U
this.X6w.X3j();}}
else{
if(this.X6w.XCI.XRN().xuQ>=1){
var XYB='CALL "'+this.X7G+'" failed'
xbK+=';'+XYB;
alert(XYB);}}
break;
case TRANSITION_CONTINUE:
xbK='continue';
xa7=this.X6w.X8m();
if(xa7){
xbK+=';points:'+this.X6w.X6U;
this.X6w.X3j();}
break;
case TRANSITION_JAVASCRIPT:
xbK='javascript "'+this.X7G+'"';
xa7=this.x5e();
if(xa7&&
(this.X6w.X8q()& WATCH_ONTRIGGER_CONTINUE))
{
xbK+=';continue';
xa7=this.X6w.X8m();
if(xa7){
xbK+=';points:'+this.X6w.X6U;
this.X6w.X3j();}}
break;
default:
return false;}
if(!xa7){
this.X6w.XCI.Xpr(
'TRANS "'+this.xfK+'" exec '+xbK+':rc='+xa7,'error');}
this.X6w.XCI.xCI(6003,
'Transition ['+this.xfK+','+this.xGQ+']:'+
xbK+':rc='+xa7,
this.X6w.xCF,this.X6w.X6U);
return true;}
,X4v:function(){
return this.X4W;}
,toString:function(){
var type;
switch(this.xGQ){
case TRANSITION_JUMP:type='jump "'+this.X7G+'"';break;
case TRANSITION_CALL:type='call "'+this.X7G+'"';break;
case TRANSITION_CONTINUE:type='continue';break;
case TRANSITION_JAVASCRIPT:type='js "'+this.X7G+'"';break;
default:type='[invalid:'+this.xGQ+']';}
return 'Transition={'+this.xfK+' '+type+
(this.X7r?'(global)':'')+
',cond:'+this.XUM+
',errpts:'+this.X4W+'}';}
,X6w:null
,XUM:null,X7r:false,xGQ:null,X7G:null,X6U:null,xCF:null,X4W:null 
,x5e:function(){
return this.X6w.XCI.Xlf().Xsl(this.X7G);}}
function X3M(XCI){
this.XCI=XCI;
this.X6E={};
this.X4L('_PLAY',null,TRANSITION_JAVASCRIPT_GLOBAL,
'ctx_control.cfg_action("PLAY")');
this.X4L('_PAUSE',null,TRANSITION_JAVASCRIPT_GLOBAL,
'ctx_control.cfg_action("PAUSE")');
this.X4L('_STOP',null,TRANSITION_JAVASCRIPT_GLOBAL,
'ctx_control.cfg_action("STOP")');
this.X4L('_PREV',null,TRANSITION_JAVASCRIPT_GLOBAL,
'ctx_control.cfg_action("PREV")');
this.X4L('_BACK',null,TRANSITION_JAVASCRIPT_GLOBAL,
'ctx_control.cfg_action("BACK")');
this.X4L('_NEXT',null,TRANSITION_JAVASCRIPT_GLOBAL,
'ctx_control.cfg_action("NEXT")');
this.X84=[
{effect:'frame',border:2,color:'#ff0000'},{effect:'frame',border:2,color:'#80ff80'},{effect:'frame',border:2,color:'#ffff00'},{effect:'frame',border:2,color:'#00ffff'},{effect:'line',border:3,color:'#80ff80'},{effect:'frame',border:2,color:'#0000ff'},{effect:'frame',border:2,color:'#a52a2a'},{effect:'frame',border:2,color:'#ff9900'}];
this.Xtu=(this.XCI.XRN().Xvq==1)||
((this.XCI.XRN().Xvq==0)&&
((this.XCI.XRN().Xf7+'').toLowerCase()=='screendump'));
this.xC0=(this.XCI.XRN().Xvq==-2)||
(this.XCI.XRN().Xvq==-3);
this.xCZ=(this.XCI.XRN().Xvq==-3);
XCI.XRN().Xah&&
this.X6e(XCI.XRN().Xah);
this.x6K=true;}
function X3Q(xVG,X6w){
return X6w.X5k(xVG);}
function X3O(XDx){
if((!Xuo&&!Xx4&&
(!XRD||XSN))||
(XRl&&XDx.button==4)||(XSN&&XDx.button==1))
{
var X6v=this.dgok||
(this.dgoc?this.dgoc.dgok:null);
if(typeof(X6v)=='object'&&X6v){
X6v.X42(XDx,this,this.dgoc);
return void(null);}}
XRD=false;
Xuo=false;
Xx4=false;}
function X3N(XDx){
var X6v=this.dgok||
(this.dgoc?this.dgoc.dgok:null);
if(typeof(X6v)=='object'&&X6v){
return X6v.X41(XDx,this,this.dgoc);}}
function X3P(XDx){
var X6v=this.dgok||
(this.dgoc?this.dgoc.dgok:null);
if(typeof(X6v)=='object'&&X6v){
return X6v.X43(XDx,this,this.dgoc);}}
function XO9(XDx){
XP2(XDx);
xZC(XDx);
XDx.returnValue=false;
var target=XDx.srcElement||XDx.target;
if(!Xuo&&!target.Xv1){
var X6v=this.dgok||
(this.dgoc?this.dgoc.dgok:null);
if(typeof(X6v)=='object'&&X6v){
var Xx3={};
XTd(XDx,Xx3);
var Xjj=this;
var Xx2=this.dgoc;
var X1K=function(){
Xur=false;
XRD=true;
Xx4=false;
return X6v.XvL(Xx3,Xjj,Xx2);}
window.setTimeout(X1K,1);}}
return false;}
var Xzg=null;
function Xum(XDx){
var X6v=this.dgok||
(this.dgoc?this.dgoc.dgok:null);
if(typeof(X6v)=='object'&&X6v){
if((XRl&&XDx.button==4)||
(XSN&&XDx.button==1))
{}
else if(XDx.type=='mousedown'){
Xx7=false;
Xur=true;
Xuo=false;
Xx4=false;
Xup=XDx.screenX;
Xuq=XDx.screenY;
if(XSN){
var target=XDx.target;
if(target.focus){
try{
target.focus();}
catch(e){}}
try{
Xzg=window.getSelection().getRangeAt(0);}
catch(xa8){
Xzg=null;}}
else{
if(XDx.srcElement.componentFromPoint(XDx.clientX,XDx.clientY)!=''){
Xur=false;}}
return;}
else if(XDx.type=='selectionchange'){
if(!Xx7){
Xur=false;
Xuo=false;
Xx4=true;}
return;}
else if(XDx.type=='mouseout'){
if(Xur){
if(Math.abs(Xup-XDx.screenX)>5||
Math.abs(Xuq-XDx.screenY)>5)
{
var Xx3={};
XTd(XDx,Xx3);
Xjj=this;
var Xx2=this.dgoc;
var X1K=function(){
if(Xur){
if(!Xuo){
Xur=false;
XRD=true;
Xx4=false;
return X6v.XvL(Xx3,Xjj,Xx2);}}}
window.setTimeout(X1K,100);}}}
else{if(Xur){
if(!Xuo){
if(XSN){
try{
if(Xzg!=window.getSelection().getRangeAt(0)){
Xx4=true;}}
catch(xa8){}}
if(!Xx4){
if(Math.abs(Xup-XDx.screenX)>5||
Math.abs(Xuq-XDx.screenY)>5)
{
var Xx3={};
XTd(XDx,Xx3);
Xjj=this;
var Xx2=this.dgoc;
var X1K=function(){
if(Xur){
if(!Xuo){
Xur=false;
XRD=true;
Xx4=false;
return X6v.XvL(Xx3,Xjj,Xx2);}}}
window.setTimeout(X1K,100);}}}
else{
xAI(XDx);}}}}}
function XPh(XDx){
XP2(XDx);
xZC(XDx);
XDx.returnValue=false;
return false;}
function Xun(XDx){
if(!XRD||XSN){
var X6v=this.dgok||
(this.dgoc?this.dgoc.dgok:null);
if(typeof(X6v)=='object'&&X6v){
var X2A=X6v.XCI.X1O(window);
XJp(X2A,Xuv);
if(Xuo){
Xur=false;
if(XSN){
Xuo=false;}
xAK();
return X6v.XvM(XDx,this,this.dgoc);}}}
Xur=false;}
X3M.prototype={
x6K:false
,error:'ok'
,X5W:function(xsF){
this.X4L(xsF.getName().X3m(),
new X3e(this.XCI.X5P(),xsF.X4q()),
xsF.Xty(),xsF.X5M(),xsF.X4v());
return XMs;}
,X5T:function(xsF){
if(xsF.X5B()& CLEAR_ALL){
this.x8A();}
else{
this.xb6(xsF.getName().X3m());}
return XMs;}
,X8r:function(xsF){
if(this.X8o){
var xbK='';
var XEE=xsF.X5B()||0;
if((XEE & WATCH_KEEP)==(this.X8u & WATCH_KEEP)){
xbK='Options unchanged';}
else{
xbK='Option change';
if(XEE & WATCH_KEEP){
this.X8u+=WATCH_KEEP;}
else{
this.X8u-=WATCH_KEEP;}}
this.X6U+=xsF.X5E();
this.xCF=this.X6U;
this.XCI.Xpr('TRANS Yet watching. '+xbK+':'+
(this.X8u & WATCH_KEEP?'keep':'no-keep'),'info');}
else{
this.X8o=true;
this.X8n=false;
this.X8u=xsF.X5B()||0;
this.X4U=xsF.X4u()||'';
this.X6U=xsF.X5E();
this.xCF=this.X6U;
this.X4W=xsF.X4v();
if(this.XCI.XRN().xuQ>=3){
this.XCI.Xpr('TRANS WATCH:'+this);
this.XCI.Xpr('TRANS WATCH:'+this.XCI.X5L());
this.XCI.Xpr('TRANS WATCH:'+this.XCI.X5P());}
this.X5j();
this.X4b=false;}
return XMs;}
,X5Y:function(xsF){
this.X7M=xsF.X5B()||0;
if(this.X8n){
this.X8k();}
else{
this.X4m=true;
this.XCI.xTN(XAA);}
if(this.XCI.XRN().xuQ>=3){
this.XCI.Xpr('TRANS WAIT:'+this);
this.XCI.Xpr('TRANS WAIT:'+this.XCI.X5L());
this.XCI.Xpr('TRANS WAIT:'+this.XCI.X5P());}
this.X8n=false;
return XMs;}
,X5S:function(xsF){
this.X69();
return XMs;}
,X8m:function(){
if(this.X8s()){
if(this.X6A()){
this.X69();}
else{
this.X8k();
this.X8n=true;}}
else{if(this.X6A()){
this.X69();}}
return true;}
,X69:function(X4g){
this.X8k();
this.X7M=0;
if(this.X4m){
this.X8n=false;
if(!X4g){if(this.XCI.XFV()==XAA){
this.XCI.xTN(XA0);}}}
this.X4m=false;
return true;}
,X8t:function(){
this.X4b=false;
return this.X63();}
,X8k:function(){
if(!(this.X8u & WATCH_KEEP)){
var xd2=this.X8l();
return xd2;}
return true;}
,XuK:function(){
return this.Xtu;}
,XTG:function(){
this.Xtk}
,XaV:function(){
return this.x6r;}
,Xtr:function(xfK){
return(this.X6E[xfK]?this.X6E[xfK]:null);}
,X8q:function(){
return this.X8u;}
,X6A:function(){
return this.X4m;}
,X8s:function(){
return this.X8o;}
,x8A:function(){
var X8D={};
var X6s;
for(var name in this.X6E){
X6s=this.X6E[name];
if(X6s&&X6s.X7x()){
X8D[name]=X6s;}}
this.X6E=X8D;
return true;}
,X4X:function(X48){
this.XCI.X5P().XMV();
var X6x=this.XCI.X5L().X4t();
var X6t='';
var X6s=null;
if(X6x){
X6t=X6x.Xtr();
X6s=(X6t
?this.Xtr(X6t):null);}
if(X6s){
X6s.exec();}
else{
this.X69();
this.XCI.Xpr(
'TRANS continuing [no default;trigger,name,object:'+
X6x+','+X6t+','+X6s+']');}
return true;}
,X76:function(X77){
this.X71=X77;}
,Xvy:function(Xvx){
this.X84=[
{effect:'frame',border:2,color:'#ff0000'},{effect:'frame',border:2,color:'#80ff80'},{effect:'frame',border:2,color:'#ffff00'},{effect:'frame',border:2,color:'#00ffff'},{effect:'line',border:3,color:'#80ff80'},{effect:'frame',border:2,color:'#0000ff'},{effect:'frame',border:2,color:'#a52a2a'},{effect:'frame',border:2,color:'#ff9900'}];
this.Xtu=(Xvx.Xvq==1)||
((Xvx.Xvq==0)&&
((Xvx.Xf7+'').toLowerCase()=='screendump'));
this.xC0=(Xvx.Xvq==-2)||
(Xvx.Xvq==-3);
this.xCZ=(Xvx.Xvq==-3);
Xvx.Xah&&
this.X6e(Xvx.Xah);}
,X6e:function(XGT){
if(typeof(XGT.highlight)=='object'&&XGT.highlight&&
typeof(XGT.highlight.length)=='number'&&XGT.highlight.length)
{
var x6l;
for(var i=0;i<this.X84.length;++i){
if(i<XGT.highlight.length&&
(x6l=XGT.highlight[i])&&typeof(x6l)=='object')
{
(typeof(x6l.effect)=='string')&&
(this.X84[i].effect=x6l.effect);
(typeof(x6l.border)=='number')&&
(this.X84[i].border=x6l.border);
(typeof(x6l.color)=='string')&&
(this.X84[i].color=x6l.color);}}}
if(typeof(XGT.textbubble)=='object'&&XGT.textbubble){
XGT.textbubble.style&&(this.X3s=XGT.textbubble.style);
XGT.textbubble.orientation&&(this.X3r=XGT.textbubble.orientation);
XGT.textbubble.width&&(this.X3t=XGT.textbubble.width);
XGT.textbubble.height&&(this.X3q=XGT.textbubble.height);
XGT.textbubble.spike&&(this.Xto=XGT.textbubble.spike);
XGT.textbubble.position&&(this.Xtn=XGT.textbubble.position);}
if(typeof(XGT.XuA)=='object'&&XGT.XuA){
XGT.XuA.style&&(this.Xtk=XGT.XuA.style);
this.Xtk.Xuy=true;
XGT.XuA.Xu0&&(this.Xtd=XGT.XuA.Xu0);
XGT.XuA.Xu1&&(this.Xte=XGT.XuA.Xu1);
XGT.XuA.width&&(this.Xtl=XGT.XuA.width);
XGT.XuA.height&&(this.Xtc=XGT.XuA.height);
XGT.XuA.Xub&&(this.Xth=XGT.XuA.Xub);
XGT.XuA.Xuc&&(this.Xtj=XGT.XuA.Xuc);
XGT.XuA.Xu2&&(this.Xtf=XGT.XuA.Xu2);
XGT.XuA.Xu3&&(this.Xtg=XGT.XuA.Xu3);}}
,Xog:function(X6U){
this.X6U=(X6U||0);
(this.X6U<=0)&&(this.X4b=true);
return this.X6U;}
,X42:function(XDx,xcF,xVG){
if(!this.X8s()){
return;}
var target=XDx.srcElement||XDx.target;
if(typeof(target.nodeType)=='number'&&target.nodeType==3||
target.tagName!=target.tagName.toUpperCase()||
target.toString().indexOf('XUL')>=0)
{
target=target.parentNode;}
if(target){
var X8M=target;
while(target&&target.id&&
target.id.indexOf(this.X5D)>=0)
{
target=target.parentNode;}
if(((XDx.type=='click')||(XDx.type=='mousedown'))&&
X8M==target&&
target&&target.tagName)
{
switch(target.tagName){
case 'INPUT':
if(target.type=='radio'||target.type=='checkbox'){
return this.X41(XDx,xcF,xVG);}
if(target.type!='button'&&target.type!='submit'){
return;}
break;
case 'TEXTAREA':
case 'SELECT':
case 'OPTION':
case 'BODY':
return;
default:
break;}}}
if(!(this.X8u & WATCH_FORBID_CLICKS)){
return;}
if(XaT(this.XCI,target)){
return;}
if(this.XCI.XFI_('moz','1')){
if(XDx.which==3&&typeof(xcF.location)=='object'){
this.XCI.Xpr('TRANS Re-routing event '+XDx.type+
' on '+XA6(target),'info');
xVG.routeEvent(XDx);
return;}}
var type,X8N,text,X6m;
switch(XDx.type){
case 'click':
type=TRIGGER_CLICK;
X8N=this.X8Q;
if(this.X84[0 ].border>0){
text=XQK('EXER_FAILCLICK_HELP');
X6m=XQK('EXER_FAILCLICK0_HELP');}
else{
text=XQK('EXER_FAILCLICK');
X6m=text;
text+=XQK('EXER_FAILCLICK_NOMARK_HELP');
X6m+=XQK('EXER_FAILCLICK0_NOMARK_HELP');}
break;
case 'dblclick':
type=TRIGGER_DBLCLICK;
X8N=this.X8S;
if(this.X84[0 ].border>0){
text=XQK('EXER_FAILDBLCLICK_HELP');
X6m=XQK('EXER_FAILDBLCLICK0_HELP');}
else{
text=XQK('EXER_FAILDBLCLICK');
X6m=text;
text+=XQK('EXER_FAILDBLCLICK_NOMARK_HELP');
X6m+=XQK('EXER_FAILDBLCLICK0_NOMARK_HELP');}
break;
case 'mousedown':
if((XRl&&XDx.button==1)||
(XSN&&XDx.button==0))
{
return;}
else if((XRl&&XDx.button==4)||
(XSN&&XDx.button==1))
{
if(target.tagName&&
(target.tagName=='INPUT'||target.tagName=='TEXTAREA'))
{
return;}
type=TRIGGER_MCLICK;
X8N=this.xCv;
if(this.X84[0 ].border>0){
text=XQK('EXER_FAILMCLICK_HELP');
X6m=XQK('EXER_FAILMCLICK0_HELP');}
else{
text=XQK('EXER_FAILMCLICK');
X6m=text;
text+=XQK('EXER_FAILMCLICK_NOMARK_HELP');
X6m+=XQK('EXER_FAILMCLICK0_NOMARK_HELP');}
break;}
case 'contextmenu':
if(target.tagName&&
(target.tagName=='INPUT'||target.tagName=='TEXTAREA'))
{return;}
type=TRIGGER_RCLICK;
X8N=this.X8U;
if(this.X84[0 ].border>0){
text=XQK('EXER_FAILRCLICK_HELP');
X6m=XQK('EXER_FAILRCLICK0_HELP');}
else{
text=XQK('EXER_FAILRCLICK');
X6m=text;
text+=XQK('EXER_FAILRCLICK_NOMARK_HELP');
X6m+=XQK('EXER_FAILRCLICK0_NOMARK_HELP');}
break;
default:
var xbK='Unexpected '+XDx.type+' on '+
XA6(target)+'/this:'+xcF;
this.XCI.Xpr(xbK,'error',2);
return;}
if(xcF.dgo41.X75()==this.X71){
this.XCI.Xpr(XDx.type+' yet handled on '+XA6(target)+
'/this:'+xcF,'user',2);
return;}
if(this.XCI.XRN().xuQ>0){
this.XCI.Xpr(XDx.type+
' @client '+XDx.clientX+','+XDx.clientY+
' @offset '+XDx.offsetX+','+XDx.offsetY+
' @screen '+XDx.screenX+','+XDx.screenY+
' @ '+XDx.x+','+XDx.y+
(XDx.xAW?' bubbles':'')+
(typeof(XDx.which)=='number'?' which='+XDx.which:'')+
' on '+XA6(target)+
'/this:'+xcF,'user',2);}
var highlights=this.XCI.X5L().X81(type);
var X8K=(highlights.length>0);
if(xVG){
var X0w=null;
var XEq=null;
if(target.tagName=='BODY'||target.tagName=='FRAMESET'){
var size=(this.XCI.XRN().Xbh & 4096)?
XWB:X8x;
var XML=XPF(target,false,size);}
else{
XML=XPF(target);}
if(XML.width>200||XML.height>200||
XML.width+XML.height>600)
{
var X4M=XCx(
{x:XDx.clientX,y:XDx.clientY},xVG.document.body);
var offsetX=X4M.x-XML.left;
var offsetY=X4M.y-XML.top;
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('T feedback click:el@'+XML+
'/click@ '+offsetX+','+offsetY);}
X0w={
x:Math.max(0,(offsetX-20)/XML.width)
,y:Math.max(0,(offsetY-20)/XML.height)};
XEq={
x:Math.min(1,(offsetX+20)/XML.width)
,y:Math.min(1,(offsetY+20)/XML.height)};}
highlights.unshift([ xVG,target,0,
X0w,XEq ]);}
var bubble=[];
if(this.Xtu){
if(xcF&&xcF.tagName!='BODY'){
bubble[bubble.length]=xVG;
bubble[bubble.length]=xcF;}
else{
if(this.Xtk.cfg_xframe&&
this.XCI.XvR(xVG).document.body.tagName=='BODY')
{
bubble[bubble.length]=this.XCI.XvR(xVG);
bubble[bubble.length]=this.XCI.XvR(xVG).document.body;}
else{
bubble[bubble.length]=xVG;
bubble[bubble.length]=xcF;}}}
if(X8K){
this.X4Z(xVG,X8N,null,text,highlights,bubble);}
else{
this.X4Z(xVG,X8N+this.X8b,
null,X6m,highlights,bubble);}
return xZC(XDx);}
,X41:function(XDx,xcF,xVG){
if(!this.X8s()){
return;}
if(!(this.X8u & WATCH_FORBID_CHANGES)){
return;}
var target=XDx.srcElement||XDx.target;
var X6o;
if((X6o=X33(target))&&!X6o.X5z()){
return;}
if(xcF.dgo41.X75()==this.X71){
this.XCI.Xpr('Change yet handled on '+XA6(target)+
'/this:'+xcF,'user',2);
return;}
if(target.dgof!=undefined&&target.dgof!=null){
if(target.dgof==X7f(
target,false,true))
{
this.XCI.Xpr('TRANS ignoring onchange(no change)on '+
XA6(target));
target.dgof=null;return;}
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('TRANS Value tracker active on '+
XA6(target),'info');}
target.dgof=null;}
this.XCI.Xpr('Change '+XA6(target)+
'/this:'+xcF,'user',2);
var highlights=this.XCI.X5P().X82();
var X8K=(highlights.length>0);
if(xVG){
highlights.unshift([ xVG,target,0 ]);}
var text,X6m;
if(this.X84[0 ].border>0){
text=XQK('EXER_FAILCHANGE_HELP');
X6m=XQK('EXER_FAILCHANGE0_HELP');}
else{
text=XQK('EXER_FAILCHANGE');
X6m=text;
text+=XQK('EXER_FAILCHANGE_NOMARK_HELP');
X6m+=XQK('EXER_FAILCHANGE0_NOMARK_HELP');}
var bubble=[];
if(this.Xtu){
if(xcF&&xcF.tagName!='BODY'){
bubble[bubble.length]=xVG;
bubble[bubble.length]=xcF;}
else{
if(this.Xtk.cfg_xframe&&
this.XCI.XvR(xVG).document.body.tagName=='BODY')
{
bubble[bubble.length]=this.XCI.XvR(xVG);
bubble[bubble.length]=this.XCI.XvR(xVG).document.body;}
else{
bubble[bubble.length]=xVG;
bubble[bubble.length]=xcF;}}}
if(X8K){
this.X4Z(xVG,this.X8O,null,text,highlights,bubble);}
else{
this.X4Z(xVG,this.X8O+
this.X8b,null,X6m,highlights,bubble);}}
,X43:function(XDx,xcF,xVG){
if(!this.X8s()){
return;}
if(!(this.X8u & WATCH_FORBID_KEYS)){
return;}
if(XDx.keyCode==0||(XDx.keyCode>=16&&XDx.keyCode<=20)){
return;}
if(!XDx.shiftKey&&!XDx.altKey&&!XDx.ctrlKey&&
(XDx.keyCode>=96&&XDx.keyCode<=105)||(XDx.keyCode==XPT['back']||
XDx.keyCode==XPT['space']||
XDx.keyCode==XPT['ins']||
XDx.keyCode==XPT['del']))
{
return;}
if(((!XDx.altKey&&!XDx.ctrlKey)||
(XDx.altKey&&XDx.ctrlKey&&XDx.ctrlLeft===true))&&
((XDx.keyCode>=48&&XDx.keyCode<=93)||XDx.keyCode==XPT['tab']||
XDx.keyCode==XPT['numdiv']||
XDx.keyCode==XPT['numx']||
XDx.keyCode==XPT['numminus']||
XDx.keyCode==XPT['numplus']||
XDx.keyCode==XPT['numcomma']||
(XDx.keyCode>=33&&XDx.keyCode<=40)||XDx.keyCode>=XPT['numlock'])){
var X6C=this.XCI.X5L().X83();
if(X6C==''){return;}}
var target=XDx.srcElement||XDx.target;
if(xcF.dgo41.X75()==this.X71){
this.XCI.Xpr('Key '+XDx.keyCode+' yet handled on '+
XA6(target),'user',2);
return;}
if(!XDx.altKey&&target.tagName&&(target.tagName=='TEXTAREA'||
(target.tagName=='INPUT'&&target.type&&
(target.type=='text'||target.type=='password'))))
{
if(XDx.keyCode>=33&&XDx.keyCode<=40||
XDx.keyCode==XPT['back'])
{
return;}
if(XDx.ctrlKey&&
(XDx.keyCode==XPT['a']||
XDx.keyCode==XPT['c']||
XDx.keyCode==XPT['v']||
XDx.keyCode==XPT['x']||
XDx.keyCode==XPT['y']||
XDx.keyCode==XPT['z']))
{return;}
if(!XDx.ctrlKey&&target.tagName=='TEXTAREA'&&
XDx.keyCode==XPT['enter'])
{return;}}
this.XCI.Xpr('Key '+XDx.keyCode+' on '+
XA6(target),'user',2);
var X7y=X8I(XDx);
var X6C=this.XCI.X5L().X83();
var xbK=(X7y
?XQK('EXER_FAILKEY_HELP1',X7y,X6C)
:XQK('EXER_FAILKEY_HELP0',X6C))+
(X6C?XQK('EXER_FAILKEY_HELP2',X6C):'');
var bubble=[];
if(this.Xtu){
if(xcF&&xcF.tagName!='BODY'){
bubble[bubble.length]=xVG;
bubble[bubble.length]=xcF;}
else{
if(this.Xtk.cfg_xframe&&
this.XCI.XvR(xVG).document.body.tagName=='BODY')
{
bubble[bubble.length]=this.XCI.XvR(xVG);
bubble[bubble.length]=this.XCI.XvR(xVG).document.body;}
else{
bubble[bubble.length]=xVG;
bubble[bubble.length]=xcF;}}}
this.X4Z(xVG,this.X8T+
(X6C?0:this.X8b),null,xbK,null,bubble);
return xZC(XDx);}
,XvL:function(XDx,xcF,xVG){
if(!this.X8s()){
return;}
if(!(this.X8u & WATCH_FORBID_DRAG_DROP)){
return;}
var target=XDx.srcElement||XDx.target;
if(xcF.dgo41.X75()==this.X71){
this.XCI.Xpr('Drag yet handled on '+
XA6(target),'user',2);
return;}
this.XCI.Xpr('Drag on '+
XA6(target),'user',2);
if(this.X84[0 ].border>0){
text=XQK('EXER_FAILDRAG');
text+=XQK('EXER_FAILDRAG_HELP');
X6m=XQK('EXER_FAILDRAG0_HELP');}
else{
text=XQK('EXER_FAILDRAG');
X6m=text;
text+=XQK('EXER_FAILDRAG_NOMARK_HELP');
X6m+=XQK('EXER_FAILDRAG0_NOMARK_HELP');}
var highlights=this.XCI.X5L().XvU();
var X8K=(highlights.length>0);
if(xVG){
var X0w=null;
var XEq=null;
if(target.tagName=='BODY'||target.tagName=='FRAMESET'){
var size=(this.XCI.XRN().Xbh & 4096)?
XWB:X8x;
var XML=XPF(target,false,size);}
else{
XML=XPF(target);}
if(XML.width>200||XML.height>200||
XML.width+XML.height>600)
{
var X4M=XCx(
{x:XDx.clientX,y:XDx.clientY},xVG.document.body);
var offsetX=X4M.x-XML.left;
var offsetY=X4M.y-XML.top;
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('T feedback click:el@'+XML+
'/click@ '+offsetX+','+offsetY);}
X0w={
x:Math.max(0,(offsetX-20)/XML.width)
,y:Math.max(0,(offsetY-20)/XML.height)};
XEq={
x:Math.min(1,(offsetX+20)/XML.width)
,y:Math.min(1,(offsetY+20)/XML.height)};}
highlights.unshift([ xVG,target,0,
X0w,XEq ]);}
var bubble=[];
if(this.Xtu){
if(xcF&&xcF.tagName!='BODY'){
bubble[bubble.length]=xVG;
bubble[bubble.length]=xcF;}
else{
if(this.Xtk.cfg_xframe&&
this.XCI.XvR(xVG).document.body.tagName=='BODY')
{
bubble[bubble.length]=this.XCI.XvR(xVG);
bubble[bubble.length]=this.XCI.XvR(xVG).document.body;}
else{
bubble[bubble.length]=xVG;
bubble[bubble.length]=xcF;}}}
if(X8K){
this.X4Z(xVG,this.XvJ,null,text,highlights,bubble);}
else{
this.X4Z(xVG,this.XvJ+this.X8b,
null,X6m,highlights,bubble);}
return xZC(XDx);}
,XvM:function(XDx,xcF,xVG){
if(!this.X8s()){
return;}
if(!(this.X8u & WATCH_FORBID_DRAG_DROP)){
return;}
var target=XDx.srcElement||XDx.target;
if(xcF.dgo41.X75()==this.X71){
this.XCI.Xpr('Drop yet handled on '+
XA6(target),'user',2);
return;}
this.XCI.Xpr('Drop on '+
XA6(target),'user',2);
if(this.X84[0 ].border>0){
text=XQK('EXER_FAILDROP');
text+=XQK('EXER_FAILDROP_HELP');
X6m=XQK('EXER_FAILDROP0_HELP');}
else{
text=XQK('EXER_FAILDROP');
X6m=text;
text+=XQK('EXER_FAILDROP_NOMARK_HELP');
X6m+=XQK('EXER_FAILDROP0_NOMARK_HELP');}
var highlights=this.XCI.X5L().XvV();
var X8K=(highlights.length>0);
if(X8K){
var Xuw=this.XCI.X5L().XvU();
if(Xuw.length==0){
var Xvj=XQK('EXER_FAILDROP_NODRAG_HELP')}
else{
Xvj='';}
text+=Xvj;
X6m+=Xvj;}
if(xVG){
var X0w=null;
var XEq=null;
if(target.tagName=='BODY'||target.tagName=='FRAMESET'){
var size=(this.XCI.XRN().Xbh & 4096)?
XWB:X8x;
var XML=XPF(target,false,size);}
else{
XML=XPF(target);}
if(XML.width>200||XML.height>200||
XML.width+XML.height>600)
{
var X4M=XCx(
{x:XDx.clientX,y:XDx.clientY},xVG.document.body);
var offsetX=X4M.x-XML.left;
var offsetY=X4M.y-XML.top;
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('T feedback click:el@'+XML+
'/click@ '+offsetX+','+offsetY);}
X0w={
x:Math.max(0,(offsetX-20)/XML.width)
,y:Math.max(0,(offsetY-20)/XML.height)};
XEq={
x:Math.min(1,(offsetX+20)/XML.width)
,y:Math.min(1,(offsetY+20)/XML.height)};}
highlights.unshift([ xVG,target,0,
X0w,XEq ]);}
var bubble=[];
if(this.Xtu){
if(xcF&&xcF.tagName!='BODY'){
bubble[bubble.length]=xVG;
bubble[bubble.length]=xcF;}
else{
if(this.Xtk.cfg_xframe&&
this.XCI.XvR(xVG).document.body.tagName=='BODY')
{
bubble[bubble.length]=this.XCI.XvR(xVG);
bubble[bubble.length]=this.XCI.XvR(xVG).document.body;}
else{
bubble[bubble.length]=xVG;
bubble[bubble.length]=xcF;}}}
if(X8K){
this.X4Z(xVG,this.XvK,null,text,highlights,bubble);}
else{
this.X4Z(xVG,this.XvK+this.X8b,
null,X6m,highlights,bubble);}
return xZC(XDx);}
,X8Q:1
,X8S:2
,X8U:3
,X8O:4
,X8T:5
,X8R:8
,XvJ:16
,XvK:32
,xCv:64
,X8b:1024
,X4Z:function(xVG,X8V,
X4W,X4U,X52,XYv)
{
this.X63();
var X4V=(typeof(X4W)=='number'
?X4W:this.X4W);
var X6T=this.X6U;
this.X6U=Math.max(0,this.X6U-X4V);
this.XCI.xCI(6000,
'Failure ['+X8V+']:'+X4U,
this.xCF,
X4V,
this.X6U);
if(X6T<=0&&!this.X4b&&
(!(this.X8u & WATCH_FOREVER)))
{
if(!this.xCZ){
this.X5R();}}
else{
if(!this.xC0&&!(this.X8u & WATCH_SILENT)){
var xbK=(X6T&&(this.X8u & WATCH_SHOWSCORE)
?(X4V==1
?XQK('EXER_FAIL1',this.X6U)
:XQK('EXER_FAIL2',X4V,this.X6U))
:XQK('EXER_FAIL0'));
this.XCI.Xpr('WAIT penalty "'+xbK+'"','info');
if((this.X8u & WATCH_HELP)&&
(X4U||X52&&X52.length>0||XYv))
{
var Xuf=(typeof(XYv)=='object'&&XYv.length&&
XYv[0]&&XYv[1]);
if(Xuf){
xbK=xbK.replace(/\r\n/gi,'<BR>');
if(XRl){
xbK='<font color="#201204">'+xbK+'</font><br>'+
'<table class="dgoBU" cellspacing="0px" width="100%"><tr>'+
'<td valign="bottom" width="100%" colspan=2 '+
'align="left" style="padding-bottom:2px;padding-top:2px;">'+
'<font color="#201204">'+
XQK('EXER_FAIL_ASK4HELP')+
'</font><br></td></tr>'+
'<tr"><td valign="top" align="right" style="padding:2px;">'+
'%FeedbackHelpBtn%&nbsp;</td>'+
'<td valign="middle" align="left">&nbsp;<font color="#201204">'+
XQK('TIP_HELPBUBBLE')+
'</font></td></tr>'+
'<tr><td valign="top" align="right" style="padding:2px;">'+
'%FeedbackGoOnBtn%&nbsp;</td>'+
'<td valign="middle" align="left">&nbsp;<font color="#201204">'+
XQK('TIP_GOONBUBBLE')+
'</font></td>'+
'</tr></table>';}
else{
xbK='<font color="#201204">'+xbK+'</font><br>'+
'<table class="dgoBU" cellspacing="0px" width="100%">'+
'<tr><td width="100%" '+
'align="left" style="padding-bottom:2px;padding-top:2px;">'+
'<font color="#201204">'+
XQK('EXER_FAIL_ASK4HELP')+
'</font></td></tr>'+
'<tr><td valign="middle" align="left" style="padding:2px;">'+
'&nbsp;&nbsp;%FeedbackHelpBtn%'+
'&nbsp;&nbsp;<font color="#201204">'+
XQK('TIP_HELPBUBBLE')+
'</font></td></tr>'+
'<tr><td valign="middle" align="left" style="padding:2px;">'+
'&nbsp;&nbsp;%FeedbackGoOnBtn%'+
'&nbsp;&nbsp;<font color="#201204">'+
XQK('TIP_GOONBUBBLE')+
'</font></td>'+
'</tr></table>';}
if(this.X6U){
if(this.X8u & WATCH_SHOWSCORE){
xbK+='<br><font color="#201204">'+
XQK('EXER_HINT_HELPCANCELS')+
'</font>';}}
else{
if(!this.X4b){
if(!(this.X8u & WATCH_FOREVER)){
xbK+='<br><font color="#201204">'+
XQK('EXER_HINT_WOULDGOON')+
'</font>';}}}}
else{
xbK+=XQK('EXER_FAIL_ASK4HELP');
if(this.X6U){
if(this.X8u & WATCH_SHOWSCORE){
xbK+=XQK('EXER_HINT_HELPCANCELS');}}
else{
if(!(this.X8u & WATCH_FOREVER)){
xbK+=XQK('EXER_HINT_WOULDGOON');}}}
if(Xuf){
var X3s={};
XA4(this.Xtk,X3s,false);
if(XYv[1].tagName=='BODY'){
var Xtn=this.Xtf;
var X3r=this.Xtd;
var Xto=this.Xth;
X3s.xCN=true;}
else{
Xtn=this.Xtg;
X3r=this.Xte;
Xto=this.Xtj;}
var event=evt_textbubble([false,this.Xtt],null,null,
Xtn,null,null,
X3s,X3r,
xbK,true,this.Xtl,this.Xtc,
false,Xto);
var Xjj=this;
var XtY=xVG;
var XtX=X8V;
var XtW=X4U;
var Xt0=X52;
var XMr=XYv;
var Xua=function(event){
Xjj.X4b=true;
Xjj.X46(XtY,XtX,XtW,Xt0,XMr,true);
Xjj.X6U=0;
var XDx=event||XtY.event;
xZC(XDx);
try{
var Xuz=
Xjj.XCI.X5P().XvS();
Xuz&&Xuz.focus();}
catch(e){}}
var X5R=function(event){
Xjj.X4b=false;
Xjj.X6U=0;
Xjj.X5R();
var XDx=event||XtY.event;
xZC(XDx);}
var XMN=this.XCI.x6b();
event.Xu9=Xua;
event.XuN=X5R;
event.XZv(false);
if(name=XMN.x8T(XYv[0],XYv[1],event)){
this.X44=name;
var x4C=XMN.x8n(this.X44);
if(x4C){
x4C.Xu9=Xua;
x4C.XuN=X5R;
if(!Xto){
x4C.XVZ&&(x4C=x4C.XVZ);
XzT(x4C);}}}
var xuQ=(this.XCI.XRN().xuQ>=2);
(!name||xuQ)&&this.XCI.Xpr('T failure bubble on '+
XA6(XYv[1])+':'+name,
name?'success':'error');}
else{
var xa7=xVG.confirm(xbK);
if(xa7){
this.X4b=true;
this.X46(xVG,
X8V,X4U,X52,XYv);
this.X6U=0;}
else{
this.X4b=false;
if(this.X6U<=0){
this.X5R();}}}}
else{
xVG.alert(xbK);}}}}
,X3j:function(){
var X6c=this.XCI.X1N().X5G();
var X6M=(X6c.current||0)+this.X6U;
this.XCI.X1N().X2i(null,null,X6M);
return X6M;}
,toString:function(){
var xbK='';
var X6s;
for(var name in this.X6E){
if(X6s=this.X6E[name]){
if(X6s.X7x()){
xbK+=';'+name+':global';}
else{
xbK+=';'+name+':'+this.X6E[name];}}
else{
xbK+=';'+name+':[removed]';}}
return 'Transitions={'+this.X4U+
',pts:'+this.X6U+'/'+this.X4W+
',watch:'+this.X8u+
',wait:'+this.X7M+
',map:['+xbK.substr(1)+']}';}
,XCI:null,X84:null,X3s:{cfg_onTop:true
,cfg_autoplace:true
,cfg_closable:true
,cfg_cover:true
,cfg_minimizable:true
,cfg_minimized:false
,cfg_movable:true
,cfg_naked:false
,cfg_posFromCookie:false
,cfg_transparent:true
,cfg_xframe:false
,cfg_imagedir:'_feedback'},Xtn:{x:1.0,y:1.0}
,X3r:'SE',Xto:true,X3t:150,X3q:80 
,Xtk:{cfg_onTop:true
,cfg_autoplace:true
,cfg_closable:false
,cfg_cover:true
,cfg_minimizable:false
,cfg_minimized:false
,cfg_unrestaurable:true
,cfg_movable:true
,cfg_naked:false
,cfg_posFromCookie:false
,cfg_transparent:true
,cfg_xframe:true
,cfg_imagedir:'_feedback'
,cfg_initialSound:'error.wav'
,Xuy:true},Xtf:{x:0.5,y:0.5}
,Xtd:'C',Xth:false,Xtg:{x:1.0,y:1.0}
,Xte:'SE',Xtj:true,Xtl:240,Xtc:80 
,X5D:'__feedback'
,Xtt:'__BubbleFeedback'
,Xtu:false
,xC0:false
,xCZ:false
,X4b:false
,X45:null,X44:''
,X8o:false,X4m:false,X71:0,X8u:0,X7M:0,X4U:0,X6U:3,X4W:1,X6E:null,X77:0,x6r:null 
,X4L:function(xfK,XUM,xGQ,X7G,X4W){
++this.X77;
var name=xfK||('TRANS_'+this.X77);
var X6s=new X3L(this,
name,XUM,xGQ,X7G,X4W);
if(!X6s.x6K){
this.XCI.Xpr('T "'+name+'" not defined:'+
X6s.error,'error');
return null;}
this.X6E[name]=X6s;
this.x6r=name;
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('T "'+name+'"+defined:'+X6s,'success');}
return X6s;}
,xb6:function(xfK){
XLw=this.X6E[xfK];
this.X6E[xfK]=null;
var X1q=(typeof(XLw)=='object'?'success':'warning');
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('T removed:'+XLw,X1q);}
return true;}
,X8l:function(){
if(this.X8o){
this.X8o=false;
this.XCI.X5L().x8A();
this.x8A();
this.XCI.X5P().X64();
this.XCI.X5P().XED();
this.X5j(true);
this.X63();
this.X4b=false;
this.X8u=0;}
this.X8o=false;
return true;}
,XUa:function(xsP,xVG,xfK,XUa,xcF){
var xbF=xcF||xVG.document.body;
if(!xbF){
return false;}
if(xsP){
xA8(xbF,xfK,XUa,
xA4);
xVG.dgok=null;
return true;}
xVG.dgok=this;
xA7(xVG,xbF,xfK,XUa,
xA2 |
xA3,100);
return true;}
,X5g:function(xVG,xsP){
this.XUa(xsP,xVG,'click',X3O);
this.XUa(xsP,xVG,'dblclick',X3O);
this.XUa(xsP,xVG,'mousedown',X3O);}
,X5i:function(xVG,xsP){
var x4E=xVG.document;
var XNg=[];
XNg.X3i(x4E.getElementsByTagName('INPUT'));
XNg.X3i(x4E.getElementsByTagName('TEXTAREA'));
XNg.X3i(x4E.getElementsByTagName('SELECT'));
var i,input,X6o;
for(i=0;i<XNg.length;++i){
input=XNg[i];
X6o=X33(input);
if(xsP||!X6o||X6o.X5z()){
if(input.tagName!='INPUT'||
(input.type!='checkbox'&&input.type!='radio'))
{
this.XUa(xsP,xVG,'change',
X3N,input);}
else{
this.XUa(xsP,xVG,'click',
X3O);}
input.dgof=X7f(
input,false,true);}}}
,X5h:function(xVG,xsP){
this.XUa(xsP,xVG,'keydown',X3P,xVG);}
,X5e:function(xsP){
this.xcF.Xv1=true;
return this.XUa(xsP,'mousedown',TRIGGER_DRAG,X3W)&&
this.XUa(xsP,'mousemove',TRIGGER_DRAG_OVER,X3W);}
,X5f:function(xsP){
this.xcF.Xv2=true;
return this.XUa(xsP,'mouseup',TRIGGER_DROP,X3W);}
,XvZ:function(xVG,xsP){
if(XRl){
this.XUa(xsP,xVG,'dragstart',XO9,
xVG.document.body);
this.XUa(xsP,xVG,'dragenter',XO9,
xVG.document.body);
this.XUa(xsP,xVG,'dragover',XO9,
xVG.document.body);
this.XUa(xsP,xVG,'selectionchange',Xum,
xVG.document);
this.XUa(xsP,xVG,'mousedown',Xum,xVG.document.body)&&
this.XUa(xsP,xVG,'mouseout',Xum,xVG.document.body);}
else{
this.XUa(xsP,xVG,'draggesture',XO9,
xVG);}
this.XUa(xsP,xVG,'mousemove',Xum,xVG.document.body);}
,Xv0:function(xVG,xsP){
this.XUa(xsP,xVG,'drop',XPh,xVG.document.body);
this.XUa(xsP,xVG,'mouseup',Xun,xVG.document.body);}
,X5k:function(xVG){
var xWR=!this.X8o;
if((xVG.id=='trainer_gui_frame')||(xVG.name=='trainer_gui_frame')){
return true;}
if((xVG.parent.id=='trainer_gui_frame')||
(xVG.parent.name=='trainer_gui_frame'))
{
return true;}
if(this.X8u & WATCH_FORBID_CLICKS){
this.X5g(xVG,xWR);}
if(this.X8u & WATCH_FORBID_CHANGES){
this.X5i(xVG,xWR);}
if(this.X8u & WATCH_FORBID_KEYS){
this.X5h(xVG,xWR);}
if(this.X8u & WATCH_FORBID_DRAG_DROP){
this.Xv0(xVG,xWR);}
if(this.X8u & WATCH_FORBID_DRAG_DROP){
this.XvZ(xVG,xWR);}
return true;}
,X5j:function(xsP){
var XfP=this.XCI.Xd6().Xd8();
var XYc,x7C,x8Q;
for(XYc in XfP){
if(XYc!='-1'){
x7C=this.XCI.XvR(XfP[XYc]);
if(!x7C.closed){
XJp(x7C,X3Q,this);}}}
return true;}
,X8c:function(xaq,
X52,X7B,X8a,X8f)
{
if(X7B.length>0){
if(xaq.X8d){
xaq.xbK+=(X8f
?XQK('EXER_HINT_ADDITIONALLY_VALID')
:XQK('EXER_HINT_ONLY_VALID'));
xaq.X8d=false;}
X52.X3i(X7B);
xaq.xbK+=X8a;}
return true;}
,X46:function(xVG,X8V,X4U,X52,XYv,XuJ){
var X8N=X8V;
var X8e=true;
if(X8N & this.X8b){
X8e=false;
X8N=X8V-this.X8b;}
var XMN=this.XCI.x6b();
var highlights=X52||[];
var xbK=X4U;
if(X8N!=this.X8R){
var xPL={X8d:true,xbK:xbK};
if(X8N!=this.X8Q){
this.X8c(xPL,highlights,
this.XCI.X5L().X81(TRIGGER_CLICK),
XQK('EXER_HINT_CLICK_MARKED'),X8e);}
if(X8N!=this.XvJ){
this.X8c(xPL,highlights,
this.XCI.X5L().XvU(),
XQK('EXER_HINT_DRAG_MARKED'),X8e);}
if(X8N!=this.XvK){
var Xuw=this.XCI.X5L().XvU();
if(Xuw.length==0){
this.X8c(xPL,highlights,
this.XCI.X5L().XvV(),
XQK('EXER_HINT_DROP_MARKED'),X8e);
this.X8c(xPL,highlights,
this.XCI.X5L().XvV(),
XQK('EXER_FAILDROP_NODRAG_HELP'),X8e);}
else{
this.X8c(xPL,highlights,
this.XCI.X5L().XvV(),
XQK('EXER_HINT_DROP_MARKED'),X8e);}}
if(X8N!=this.X8O){
this.X8c(xPL,highlights,
this.XCI.X5P().X82(),
XQK('EXER_HINT_CHANGABLE_MARKED'),X8e);}
if(X8N!=this.X8S){
this.X8c(xPL,highlights,
this.XCI.X5L().X81(TRIGGER_DBLCLICK),
XQK('EXER_HINT_DBLCLICK_MARKED'),X8e);}
if(X8N!=this.X8U){
this.X8c(xPL,highlights,
this.XCI.X5L().X81(TRIGGER_RCLICK),
XQK('EXER_HINT_RCLICK_MARKED'),X8e);}
if(X8N!=this.xCv){
this.X8c(xPL,highlights,
this.XCI.X5L().X81(TRIGGER_MCLICK),
XQK('EXER_HINT_MCLICK_MARKED'),X8e);}
if(X8N!=this.X8T){
var X6C=this.XCI.X5L().X83();
this.X8c(xPL,highlights,
[],XQK('EXER_HINT_KEYS',X6C),X8e);}
xbK=xPL.xbK;}
var xuQ=(this.XCI.XRN().xuQ>=3);
this.XCI.xCI(6001,
'Help ['+X8V+']:'+xbK,
this.xCF,0);
if(highlights.length>0){
var x6l,i,ii,XDI,event,name,X0w,XEq;
this.X45=[];
for(i=0;i<highlights.length;++i){
x6l=highlights[i];
if(x6l&&x6l[0]&&x6l[1]&&
(ii=x6l[2]-0)>=0&&ii<this.X84.length&&
this.X84[ii].border>0)
{
X0w=x6l[3]||null;
XEq=x6l[4]||null;
XDI=this.X45.length;
event=evt_highlight2([false,this.X5D+'_'+XDI],
null,null,
this.X84[ii].effect,
this.X84[ii].border,
this.X84[ii].color,
null,X0w,XEq);
if(name=XMN.x8T(x6l[0],x6l[1],event)){
this.X45[XDI]=name;}
(!name||xuQ)&&this.XCI.Xpr('T feedback on '+
XA6(x6l[1])+':'+name,
name?'success':'error');}}}
if(typeof(XYv)=='object'&&XYv.length&&
XYv[0]&&XYv[1])
{
var X3s={};
XA4(this.Xtk,X3s,false);
if(XYv[1].tagName=='BODY'){
var Xtn=this.Xtf;
var X3r=this.Xtd;
var Xto=this.Xth;
X3s.xCN=true;}
else{
Xtn=this.Xtg;
X3r=this.Xte;
Xto=this.Xtj;}
X3t=this.Xtl;
X3q=this.Xtc;
if(XuJ){
X3s.cfg_initialSound='pop.wav';}
xbK=xbK.replace(/\r\n/gi,'<BR>');
event=evt_textbubble([false,this.Xtt],null,null,
Xtn,null,null,
X3s,X3r,
xbK,true,X3t,X3q,false,Xto);
event.XZv(false);
if(name=XMN.x8T(XYv[0],XYv[1],event)){
this.X44=name;
var x4C=XMN.x8n(this.X44);
if(x4C){
if(!Xto){
x4C.XVZ&&(x4C=x4C.XVZ);
XzT(x4C);}}}
(!name||xuQ)&&this.XCI.Xpr('T feedback bubble on '+
XA6(XYv[1])+':'+name,
name?'success':'error');}
else{
xVG.alert(xbK);}
return true;}
,X5R:function(){
this.X6U=0;
this.XCI.xCI(6002,
'Go on',
this.xCF,0);
if(!(this.X8u & WATCH_FOREVER)){
if(this.X8u & WATCH_DEFAULT){
this.X4X();
this.X69();}
else if(this.X8u & WATCH_DEFAULT_ANIMATED){
this.X4X(true);
this.X69();}
else{
this.X69();}}}
,X63:function(){
var XMN=this.XCI.x6b();
var xbK='';
var name,x8e;
if(this.X45&&this.X45.length){
for(var i=0;i<this.X45.length;++i){
if((name=this.X45[i])&&
(x8e=XMN.x8n(name)))
{
XMN.remove(x8e,true);
xbK+=','+name;}
else{
xbK+=',?:'+name;}}
xbK=';'+' highlights '+xbK.substr(1);}
if(this.X44&&XMN.x8n(this.X44)){
XMN.remove(XMN.x8n(this.X44),true);
xbK+=';bubble '+this.X44;}
if(xbK&&this.XCI.XRN().xuQ>=3){
this.XCI.Xpr('TRANS remove old feedback:'+xbK.substr(2));}
this.X45=null;
this.X44=''
return true;}}
if(self.XI7){XI7.XJB(new XIX('../transition.js',['../value.js']));}

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
