//
var XAw=5021;
var XYQ=3804;
var XYT=3822;
var X2r=3812;
var X2s=3803;
var XAj=3013;
var X2t=3821;
var Xuj=4000;
var XAk=3011;
var XAl=3010;
var XAm=3009;
var XAn=3008;
var XAq=3004;
var xA9=3024;
var X2u=3811;
var XAr=3014;
var XAt=3007;
var Xzj=3830;
var XAu=3003;
var XAv=3016;
var x2i=3025;
var XAx=3006;
var XAy=3002;
var X2v=3802;
var XAz=3902;
var XBA=3901;
var XBB=3012;
var XBC=3017;
var XBD=3019;
var XBE=3023;
var X2w=3801;
var XBF=3001;
var X2x=3806;
var X8i=3805;
var XBG=3015;
var XBH=3018;
function xNh(XFh,x9k){
if(!XFh)return;
this.xOk=XFh;
var xAa=typeof(x9k);
if(xAa=='number'||xAa=='boolean'){
this.xCl=XKy(x9k);
this.xfK='';
this.xAd=null;
this.XAo=-1;}
else if(xAa=='object'&&typeof(x9k.length)=='number'){
this.xCl=XKy(
(typeof(x9k[0])=='number'?x9k[0]:false));
this.xfK=xNJ(x9k[1]||'');
this.xAd=(x9k[2]==0?0:
xMJ(x9k[2]||null));
this.XAo=(typeof(x9k[3])=='number'?x9k[3]:-1);}
else{
this.xCl=false;
this.xfK='';
this.xAd=null;
this.XAo=-1;}
this.XFC_=0;}
function XKy(xCl){
return xCl;}
function xNJ(xfK){
return xfK;}
function xMJ(xAd){
return xAd;}
xNh.prototype.Xeti=function(){
return this.xOk;}
xNh.prototype.XEW=function(){
return XBu(this.xOk);}
xNh.prototype.Xiu=function(){
return this.XFC_;}
xNh.prototype.XFq=function(){
return++this.XFC_;}
xNh.prototype.Xtm=function(){
return this.xCl;}
xNh.prototype.getName=function(){
return this.xfK;}
xNh.prototype.XXE=function(xfK){
return this.xfK=xfK;}
xNh.prototype.Xdu=function(){
return this.xAd;}
xNh.prototype.XUz=function(){
return this.XAo;}
xNh.prototype.XZv=function(XAo){
return this.XAo=XAo;}
xNh.prototype.valueOf=function(){
return this.toString();}
xNh.prototype.toString=function(){
xbK='WebrideEvent={'+XBu(this.xOk);
xbK+='@'+this.xCl;
if(this.xAd!=null){
xbK+=',d'+this.xAd;}
this.xfK&&
(xbK+=',n:'+this.xfK);
this.XAo==-1||
(xbK+=',scr:'+this.XAo);
this.XFC_==0||
(xbK+=',i:'+this.XFC_);
return xbK+'}';}
function XBu(XFh){
if(XFh==XAw){
return 'none';}else if(XFh==XYQ){
return 'cancelwait';}else if(XFh==XYT){
return 'cleartransition';}else if(XFh==X2r){
return 'cleartrigger';}else if(XFh==X2s){
return 'clearvalue';}else if(XFh==XAj){
return 'cursor';}else if(XFh==X2t){
return 'definetransition';}else if(XFh==Xuj){
return 'eventsfinished';}else if(XFh==XAk){
return 'formcheck';}else if(XFh==XAl){
return 'formselect';}else if(XFh==XAm){
return 'formselect1';}else if(XFh==XAn){
return 'formtext';}else if(XFh==XAq){
return 'highlight';}else if(XFh==xA9){
return 'highlight2';}else if(XFh==X2u){
return 'installtrigger';}else if(XFh==XAr){
return 'javascript';}else if(XFh==XAt){
return 'loaded';}else if(XFh==Xzj){
return 'macrocall';}else if(XFh==XAu){
return 'mouse';}else if(XFh==XAv){
return 'mousehide';}else if(XFh==x2i){
return 'off';}else if(XFh==XAx){
return 'pause';}else if(XFh==XAy){
return 'scroll';}else if(XFh==X2v){
return 'storevalue';}else if(XFh==XBA){
return 'start';}else if(XFh==XAz){
return 'end';}else if(XFh==XBB){
return 'textbubble';}else if(XFh==XBC){
return 'textclose';}else if(XFh==XBD){
return 'textwindow';}else if(XFh==X2w){
return 'trackvalue';}else if(XFh==XBE){
return 'timeout';}else if(XFh==XBF){
return 'url';}else if(XFh==X2x){
return 'wait';}else if(XFh==X8i){
return 'watch';}else if(XFh==XBG){
return 'window';}else if(XFh==XBH){
return 'windowclose';}
return 'unknown [id='+XFh+']';}
function xeh(id,xCi,xUG){
if(!id)return;
xNh.XHO(this,id,xCi);
this.XWZ(xUG);}
xeh.prototype=new xNh;
xeh.prototype.XEY=function(){
return this.xcG;}
xeh.prototype.XVs=function(){
var i=this.xcG.indexOf(':');
return(i>=0?this.xcG.substr(i+1):'');}
xeh.prototype.XVz=function(){
if(!this.xcG){return 0;}
var i=this.xcG.indexOf(':');
return(i>=0?this.xcG.substr(0,i):this.xcG);}
xeh.prototype.XWZ=function(XEF){
this.xcG=XEF;
this.XEH=(XEF&&
typeof(XEF)=='string'?XEF.split(':'):[]);
return this.xcG;}
xeh.prototype.Xfps=function(){
return this.XEH.length;}
xeh.prototype.Xfpi=function(i){
return this.XEH[i];}
xeh.prototype.valueOf=function(){
return this.toString();}
xeh.prototype.toString=function(){
xbK='FrameEvent={'+xNh.prototype.toString.XHO(this);
xbK+=',fp:'+this.xcG;
return xbK+'}';}
function xVi(id,xCi,xUG,xES){
if(!id)return;
xeh.XHO(this,id,xCi,xUG);
this.XWX(xES);}
xVi.prototype=new xeh;
xVi.prototype.XES=function(){
return this.xES;}
xVi.prototype.XWX=function(xES){
this.xES=xES||new ElementRef;
this.XDr=this.xES.path.split(':');
return this.xES;}
xVi.prototype.XEQ=function(){
return this.xES.path;}
xVi.prototype.Xec=function(){
return this.xES.xMk;}
xVi.prototype.Xei=function(){
return this.xES.index;}
xVi.prototype.Xsei=function(){
return this.xES.xPh;}
xVi.prototype.Xeps=function(){
return this.XDr.length;}
xVi.prototype.Xepi=function(i){
return this.XDr[i];}
xVi.prototype.Xgei=function(){
return this.xES.XHZ;}
xVi.prototype.valueOf=function(){
return this.toString();}
xVi.prototype.toString=function(){
xbK='ElementEvent={'+xeh.prototype.toString.XHO(this);
return xbK+','+this.xES+'}';}
function xUj(id,xCi,xUG,element,x3k,x2k,off,x2H,xfk){
if(!id)return;
xVi.XHO(this,id,xCi,xUG,element);
this.xHh=(x3k?x3k.x||0:0);
this.xRh=(x3k?x3k.y||0:0);
this.xQh=(x2k?x2k.x||0:0);
this.xTh=(x2k?x2k.y||0:0);
this.xWj=(off?off.x||0:0);
this.xcj=(off?off.y||0:0);
this.xUi=(typeof(xfk)=='undefined'?null:xfk);
this.x5g=x2H||'';}
xUj.prototype=new xVi;
xUj.prototype.X02=function(){
return{x:this.xHh,y:this.xRh};}
xUj.prototype.Xpex=function(){
return this.xHh;}
xUj.prototype.Xpey=function(){
return this.xRh;}
xUj.prototype.XW3=function(xqL){
this.xHh=xqL.x||0;
this.xRh=xqL.y||0;
return{x:this.xHh,y:this.xRh};}
xUj.prototype.Xw2=function(){
return{x:this.xQh,y:this.xTh};}
xUj.prototype.Xpdx=function(){
return this.xQh;}
xUj.prototype.Xpdy=function(){
return this.xTh;}
xUj.prototype.XW2=function(xqL){
this.xQh=xqL.x||0;
this.xTh=xqL.y||0;
return{x:this.xQh,y:this.xTh};}
xUj.prototype.X01=function(){
return{x:this.xWj,y:this.xcj};}
xUj.prototype.Xox=function(){
return this.xWj;}
xUj.prototype.Xoy=function(){
return this.xcj;}
xUj.prototype.XW1=function(x5K){
this.xWj=x5K.x||0;
this.xcj=x5K.y||0;
return{x:this.xWj,y:this.xcj};}
xUj.prototype.Xin=function(){
return this.x5g;}
xUj.prototype.Xdu=function(){
return typeof(this.xAd)=='number'?this.xAd
:typeof(this.xUi)=='number'?this.xUi:null;}
xUj.prototype.valueOf=function(){
return this.toString();}
xUj.prototype.toString=function(){
xbK='ElementPositionEvent={'+
xVi.prototype.toString.XHO(this);
xbK+=',posEl x/y:'+this.xHh+'/'+this.xRh;
xbK+=',posDoc x/y:'+this.xQh+'/'+this.xTh;
xbK+=',off x/y:'+this.xWj+'/'+this.xcj;
xbK+=',info:'+this.x5g;
xbK+=',dur:'+this.xUi;
return xbK+'}';}
function xok(id,xCi,xUG,element,xSh){
if(!id)return;
xVi.XHO(this,id,xCi,xUG,element);
this.xGl=xSh||false;}
xok.prototype=new xVi;
xok.prototype.Xsh=function(){
return this.xGl;}
xok.prototype.valueOf=function(){
return this.toString();}
xok.prototype.toString=function(){
xbK='FormEvent={'+xVi.prototype.toString.XHO(this);
xbK+=',suppresshandler:'+this.xGl;
return xbK+'}';}
function XLF(xCi,XKQ){
if(xCi==undefined)return;
xNh.XHO(this,XYQ,xCi);
this.XKQ=XKQ;}
XLF.prototype=new xNh;
XLF.prototype.X5B=function(){
return this.XKQ;}
XLF.prototype.toString=function(){
return 'CancelWaitEvent={'+
xNh.prototype.toString.XHO(this)+
',opt:'+this.XKQ+'}';}
var CLEAR_ALL=1;
var CLEAR_LOCAL_ALL=2;
function XLG(xCi,XKQ){
if(xCi==undefined)return;
xNh.XHO(this,XYT,xCi);
this.XKQ=XKQ;}
XLG.prototype=new xNh;
XLG.prototype.X5B=function(){
return this.XKQ;}
XLG.prototype.toString=function(){
return 'ClearTransitionEvent={'+
xNh.prototype.toString.XHO(this)+
',opt:'+this.XKQ+'}';}
function XL4(xCi,XKQ){
if(xCi==undefined)return;
xNh.XHO(this,X2r,xCi);
this.XKQ=XKQ;}
XL4.prototype=new xNh;
XL4.prototype.X5B=function(){
return this.XKQ;}
XL4.prototype.toString=function(){
return 'ClearTriggerEvent={'+
xNh.prototype.toString.XHO(this)+
',opt:'+this.XKQ+'}';}
function XMa(xCi,XKQ){
if(xCi==undefined)return;
xNh.XHO(this,X2s,xCi);
this.XKQ=XKQ;}
XMa.prototype=new xNh;
XMa.prototype.X5B=function(){
return this.XKQ;}
XMa.prototype.toString=function(){
return 'ClearValueEvent={'+
xNh.prototype.toString.XHO(this)+
',opt:'+this.XKQ+'}';}
function xJj(xCi,shape,orientation,rgbcolor){
if(xCi==undefined)return;
xNh.XHO(this,XAj,xCi);
this.x0h=shape||'';
this.xGL=orientation||'';
this.xkk=rgbcolor||'';}
xJj.prototype=new xNh;
xJj.prototype.Xgs=function(){
return this.x0h;}
xJj.prototype.Xo=function(){
return this.xGL;}
xJj.prototype.Xgrc=function(){
return this.xkk;}
xJj.prototype.toString=function(){
return 'CursorEvent={'+
xNh.prototype.toString.XHO(this)+
',shape:'+this.x0h+
',ori:'+this.xGL+
',rgb:'+this.xkk+'}';}
function XPE(X6b){
var X6a=X6b||this;
if(X6a.js){
return X6a.js+' ['+X6a.desc+']';}
if(X6a.xvD){
var xbK='Check "'+X6a.op1+'"';
if(typeof(X6a.X6N)!='undefined'){
xbK+=',"'+X6a.X6N+'"';}
if(typeof(X6a.X6O)!='undefined'){
xbK+=',"'+X6a.X6O+'"';}
return xbK+' for '+X6a.xvD;}
return '{Invalid ConditionRule}';}
function XPG(){
var xbK;
if(this.X6a){
xbK=XPE(this.X6a);}
else if(this.rules){
for(var i;i<this.rules.length;++i){
xbK+=i+':'+XPE(this.rules[i])+';';}}
return '{Cond '+(this.combine==2?'OR':'AND')+':'+xbK+'}';}
var TRANSITION_JUMP=1;
var TRANSITION_CONTINUE=2;
var TRANSITION_CALL=3;
var TRANSITION_JAVASCRIPT=4;
var TRANSITION_GLOBAL=8;
var TRANSITION_JUMP_GLOBAL=9;
var TRANSITION_CONTINUE_GLOBAL=10;
var TRANSITION_CALL_GLOBAL=11;
var TRANSITION_JAVASCRIPT_GLOBAL=12;
function XP5(xCi,
X4E,xGQ,X7G,X4W)
{
if(xCi==undefined)return;
xNh.XHO(this,X2t,xCi);
this.X4E=X4E;
if(typeof(X4E)=='object'&&X4E){
this.X4E.toString=XPG;}
this.xGQ=xGQ;
this.X7G=X7G;
this.X4W=X4W;}
XP5.prototype=new xNh;
XP5.prototype.X4q=function(){
return this.X4E;}
XP5.prototype.Xty=function(){
return this.xGQ;}
XP5.prototype.X5M=function(){
return this.X7G;}
XP5.prototype.X4v=function(){
return this.X4W;}
XP5.prototype.toString=function(){
return 'DefineTransitionEvent={'+
xNh.prototype.toString.XHO(this)+
','+this.X4E+
',type:'+this.xGQ+
' '+this.X7G+
',errpts:'+this.X4W+'}';}
function xuh(xCi,xUG,element,xSh,checked){
if(xCi==undefined)return;
xok.XHO(this,
XAk,xCi,xUG,element,xSh);
this.xrh=checked||false;}
xuh.prototype=new xok;
xuh.prototype.Xc=function(){
return this.xrh;}
xuh.prototype.toString=function(i){
xbK='FormCheckEvent={'+xok.prototype.toString.XHO(this);
xbK+=(this.xrh?'checked':'not checked');
return xbK+'}';}
function xTj(xCi,xUG,element,xSh,selected,duration){
if(xCi==undefined)return;
xok.XHO(this,
XAm,xCi,xUG,element,xSh);
this.xvi=selected||0;
this.xUi=duration||0;}
xTj.prototype=new xok;
xTj.prototype.Xs=function(){
return this.xvi;}
xTj.prototype.Xdu=function(){
return typeof(this.xAd)=='number'?this.xAd
:typeof(this.xUi)=='number'?this.xUi:null;}
xTj.prototype.toString=function(){
xbK='FormSelect1Event={'+xok.prototype.toString.XHO(this);
xbK+=',sel:'+this.xvi;
xbK+=',dur:'+this.xUi;
return xbK+'}';}
function xgj(xCi,xUG,element,xSh,xDN,xSj){
if(xCi==undefined)return;
xok.XHO(this,
XAl,xCi,xUG,element,xSh);
this.XHD=(xDN?xDN:'');
this.XCy=(xSj?xSj:'');
this.xvi=(xDN&&typeof xDN=='string'?xDN.split(','):[]);
this.xqi=(xSj&&typeof xSj=='string'?xSj.split(','):[]);}
xgj.prototype=new xok;
xgj.prototype.Xssz=function(){
return this.xvi.length;}
xgj.prototype.XFS=function(){
return this.XHD;}
xgj.prototype.Xs=function(i){
return this.xvi[i]-0;}
xgj.prototype.Xds=function(){
return this.xqi.length;}
xgj.prototype.XEM=function(){
return this.XCy;}
xgj.prototype.Xd=function(i){
return this.xqi[i]-0;}
xgj.prototype.toString=function(i){
xbK='FormSelectEvent={'+xok.prototype.toString.XHO(this);
xbK+=',sel:'+this.xvi;
xbK+=',de:'+this.xqi;
return xbK+'}';}
function xwj(xCi,xUG,element,xSh,start,end,text){
if(xCi==undefined)return;
xok.XHO(this,
XAn,xCi,xUG,element,xSh);
this.x0i=start||0;
this.x6j=end||0;
this.xyO=text||'';}
xwj.prototype=new xok;
xwj.prototype.Xst=function(){
return this.x0i;}
xwj.prototype.Xend=function(){
return this.x6j;}
xwj.prototype.Xtx=function(){
return this.xyO;}
xwj.prototype.toString=function(){
xbK='FormTextEvent={'+xok.prototype.toString.XHO(this);
xbK+=',pos:'+this.x0i+'..'+this.x6j;
xbK+=',t:"'+this.xyO;
return xbK+'"}';}
function Xkx(xCi,xUG,element,effect,
width,color,x5f,x3k,xRM,x2k,xAl,off,xfk)
{
if(xCi==undefined)return;
xUj.XHO(this,xA9,xCi,xUG,element,
x3k,x2k,off,null,xfk);
this.xLi=effect||'box';
this.x7Q=width||4;
this.x8h=color||'img:black25tr.png';
this.x5l=x5f;
this.xpj=(xRM?xRM.x:1.0);
this.xtj=(xRM?xRM.y:1.0);
this.xfi=(xAl?xAl.x:0.5);
this.xii=(xAl?xAl.y:0.5);}
Xkx.prototype=new xUj;
Xkx.prototype.Xef=function(){
return this.xLi;}
Xkx.prototype.Xw=function(){
return this.x7Q;}
Xkx.prototype.Xco=function(){
return this.x8h;}
Xkx.prototype.x6T=function(){
return this.x5l;}
Xkx.prototype.Xrex=function(){
return this.xpj;}
Xkx.prototype.Xrey=function(){
return this.xtj;}
Xkx.prototype.Xrdx=function(){
return this.xfi;}
Xkx.prototype.Xrdy=function(){
return this.xii;}
Xkx.prototype.toString=function(){
xbK='Highlight2Event={'+xUj.prototype.toString.XHO(this);
xbK+=',e:'+this.xLi;
xbK+=',w:'+this.x7Q;
xbK+=',c:'+this.x8h;
xbK+=',fc:'+this.x5l;
xbK+=',rectEl x/y:'+this.xpj+'/'+this.xtj;
xbK+=',rectDoc x/y:'+this.xfi+'/'+this.xii;
return xbK+'}';}
var TRIGGER_CHANGE=1;
var TRIGGER_CLICK=2;
var TRIGGER_DBLCLICK=3;
var TRIGGER_RCLICK=4;
var TRIGGER_MOUSE_ENTER=5;
var TRIGGER_MOUSE_LEAVE=6;
var TRIGGER_FOCUS_ENTER=7;
var TRIGGER_FOCUS_LEAVE=8;
var TRIGGER_KEYPRESS=9;
var TRIGGER_DRAG=10;
var TRIGGER_DROP=11;
var TRIGGER_DRAG_ENTER=12;
var TRIGGER_DRAG_OVER=13;
var TRIGGER_MCLICK=14;
var TRIGGER_lclick=TRIGGER_CLICK;
var TRIGGER_ldblclick=TRIGGER_DBLCLICK;
var TRIGGER_rclick=TRIGGER_RCLICK;
var TRIGGER_rdblclick=TRIGGER_RCLICK;
var TRIGGER_mclick=TRIGGER_MCLICK;
var TRIGGER_mdblclick=TRIGGER_MCLICK;
var TRIGGER_drag=TRIGGER_DRAG;
var TRIGGER_drop=TRIGGER_DROP;
var TRIGGER_enter=TRIGGER_MOUSE_ENTER;
var lclick=TRIGGER_CLICK;
var ldblclick=TRIGGER_DBLCLICK;
var rclick=TRIGGER_RCLICK;
var rdblclick=TRIGGER_RCLICK;
var mclick=TRIGGER_MCLICK;
var mdblclick=TRIGGER_MCLICK;
var xDF=TRIGGER_DRAG;
var xLF=TRIGGER_DROP;
var xlF=TRIGGER_MOUSE_ENTER;
var TRIGGER_IS_DEFAULT=1;
var TRIGGER_HOTKEY_FRAMESET=2;
var TRIGGER_BLOCK_ONSUCCESS=4;
var TRIGGER_BLOCK_ONERROR=8;
var TRIGGER_NOERROR_ON_CONDITION_FAIL=16;
var TRIGGER_RADIO_SINGLE=32;
var TRIGGER_GLOBAL=64;
var TRIGGER_FEEDBACK_USERINPUT=128;
function X2y(xCi,xUG,element,
xGQ,X7G,X6u,XKQ,X4E)
{
if(xCi==undefined)return;
xVi.XHO(this,X2u,xCi,xUG,element);
this.xGQ=xGQ;
this.X7G=X7G;
this.X6u=X6u;
this.XKQ=XKQ;
this.X4E=X4E;
if(typeof(X4E)=='object'&&X4E){
this.X4E.toString=XPG;}}
X2y.prototype=new xVi;
X2y.prototype.Xty=function(){
return this.xGQ;}
X2y.prototype.X5M=function(){
return this.X7G;}
X2y.prototype.Xtr=function(){
return this.X6u;}
X2y.prototype.X5B=function(){
return this.XKQ;}
X2y.prototype.X4q=function(){
return this.X4E;}
X2y.prototype.XaW=function(xGQ){
this.xGQ=xGQ;
return this.xGQ;}
X2y.prototype.XaX=function(X7G){
this.X7G=X7G;
return this.X7G;}
X2y.prototype.toString=function(){
return 'InstallTriggerEvent={'+
xVi.prototype.toString.XHO(this)+
',type:'+this.xGQ+
' '+this.X7G+
',trans:'+(this.X6u||'{auto}')+
',opt:'+this.XKQ+
','+this.X4E+
',errpts:'+this.X4W+'}';}
function x1h(xCi,xUG,element,text){
if(xCi==undefined)return;
xVi.XHO(this,XAr,xCi,xUG,element);
this.xyO=text||'';}
x1h.prototype=new xVi;
x1h.prototype.Xtx=function(){
return this.xyO;}
x1h.prototype.toString=function(){
xbK='JavaScriptEvent={'+xVi.prototype.toString.XHO(this);
xbK+=',t:"'+(this.xyO.length>50?
this.xyO.substr(0,46)+' ...':this.xyO);
return xbK+'"}';}
function xyj(xCi){
if(xCi==undefined)return;
xNh.XHO(this,XAt,xCi);}
xyj.prototype=new xNh;
function Xzk(xCi,xUG,element,Xzn,Xzr){
if(xCi==undefined)return;
xVi.XHO(this,Xzj,xCi,xUG,element);
this.xyO='';
this.Xzo=Xzn;
this.Xzs=Xzr;}
Xzk.prototype=new xVi;
Xzk.prototype.Xzp=function(){
return this.Xzo;}
Xzk.prototype.Xzq=function(){
return this.Xzs;}
Xzk.prototype.Xtx=function(){
return this.xyO;}
Xzk.prototype.toString=function(){
xbK='MacrocallEvent={'+xNh.prototype.toString.XHO(this);
xbK+=',func:'+this.Xzp();
xbK+=',params:'+this.Xzq();
return xbK+'"}';}
function xxh(xCi,xUG,element,x3k,x2k,off,type,duration){
if(xCi==undefined)return;
xUj.XHO(this,
XAu,xCi,xUG,element,x3k,x2k,off,type,duration);}
xxh.prototype=new xUj;
function xbj(xCi){
if(xCi==undefined)return;
xNh.XHO(this,XAv,xCi);}
xbj.prototype=new xNh;
function xvF(xCi){
if(xCi==undefined)return;
xNh.XHO(this,x2i,xCi);}
xvF.prototype=new xNh;
function xei(xCi){
if(xCi==undefined)return;
xNh.XHO(this,XAx,xCi);}
xei.prototype=new xNh;
function xBl(xCi,xUG,element,x3k,x2k,xYk,duration,XFs){
if(xCi==undefined)return;
xUj.XHO(this,
XAy,xCi,xUG,element,x3k,x2k,null,xYk,duration);
this.xLO=(typeof(XFs)=='undefined'?true:XFs);}
xBl.prototype=new xUj;
xBl.prototype.Xo=function(){
return this.x5g;}
xBl.prototype.XVV=function(){
return this.xLO;}
xBl.prototype.toString=function(){
xbK='ScrollEvent={'+xUj.prototype.toString.XHO(this);
xbK+=',ori:'+this.Xo();
xbK+=(this.xLO?',force':',noforce');
return xbK+'"}';}
function X3E(xCi,XIH,XKQ){
if(xCi==undefined)return;
xNh.XHO(this,X2v,xCi);
this.XIH=XIH;
this.XKQ=XKQ;}
X3E.prototype=new xNh;
X3E.prototype.X5N=function(){
return this.XIH;}
X3E.prototype.X5B=function(){
return this.XKQ;}
X3E.prototype.toString=function(){
return 'StoreValueEvent={'+
xNh.prototype.toString.XHO(this)+
',val:'+this.XIH+
',opt:'+this.XKQ+'}';}
function xIJ(){
if(!this)
return '?';
var xbK=(this.type||'?');
if(typeof(this.XpP)=='string')
xbK+=',cl:'+this.XpP;
if(typeof(this.X9k)=='string')
xbK+=',id:'+this.X9k;
if(typeof(this.autoplace)=='boolean')
xbK+=(this.autoplace?'+':'-')+'autopl';
if(typeof(this.closable)=='boolean')
xbK+=(this.closable?'+':'-')+'canclos';
if(typeof(this.cover)=='boolean')
xbK+=(this.cover?'+':'-')+'cover';
if(typeof(this.minimizable)=='boolean')
xbK+=(this.minimizable?'+':'-')+'canmin';
if(typeof(this.minimized)=='boolean')
xbK+=(this.minimized?'+':'-')+'min';
if(typeof(this.movable)=='boolean')
xbK+=(this.movable?'+':'-')+'canmov';
if(typeof(this.naked)=='boolean')
xbK+=(this.naked?'+':'-')+'naked';
if(typeof(this.XLx)=='boolean')
xbK+=(this.XLx?'+':'-')+'ontop';
if(typeof(this.posFromCookie)=='boolean')
xbK+=(this.posFromCookie?'+':'-')+'cookpos';
if(typeof(this.transparent)=='boolean')
xbK+=(this.transparent?'+':'-')+'transp';
if(typeof(this.xcS)=='boolean')
xbK+=(this.xcS?'+':'-')+'xframe';
return xbK;}
function xLh(xCi,xUG,element,x3k,x2k,off,style,xYk,
text,replace,w,h,spike)
{
if(xCi==undefined)return;
xUj.XHO(this,
XBB,xCi,xUG,element,x3k,x2k,off);
if(typeof(style)=='object'){
this.xFO={
type:'bubble',
autoplace:typeof(style.cfg_autoplace)=='boolean'
?style.cfg_autoplace:
(typeof(style.cfg_autoplace)=='integer'?
!(!(style.cfg_autoplace)):true),
XpP:style.cfg_class||'',
closable:typeof(style.cfg_closable)=='boolean'
?style.cfg_closable:
(typeof(style.cfg_closable)=='integer'?
!(!(style.cfg_closable)):true),
cover:typeof(style.cfg_cover)=='boolean'
?style.cfg_cover:
(typeof(style.cfg_cover)=='integer'?
!(!(style.cfg_cover)):true),
X9k:style.cfg_imagedir||'',
minimizable:typeof(style.cfg_minimizable)=='boolean'
?style.cfg_minimizable:
(typeof(style.cfg_minimizable)=='integer'?
!(!(style.cfg_minimizable)):true),
minimized:typeof(style.cfg_minimized)=='boolean'
?style.cfg_minimized:
(typeof(style.cfg_minimized)=='integer'?
!(!(style.cfg_minimized)):false),
XxZ:typeof(style.cfg_unrestaurable)=='boolean'
?style.cfg_unrestaurable:
(typeof(style.cfg_unrestaurable)=='integer'?
!(!(style.cfg_unrestaurable)):false),
movable:typeof(style.cfg_movable)=='boolean'
?style.cfg_movable:
(typeof(style.cfg_movable)=='integer'?
!(!(style.cfg_movable)):true),
naked:typeof(style.cfg_naked)=='boolean'
?style.cfg_naked:
(typeof(style.cfg_naked)=='integer'?
!(!(style.cfg_naked)):false),
XLx:typeof(style.cfg_onTop)=='boolean'
?style.cfg_onTop:
(typeof(style.cfg_onTop)=='integer'?
!(!(style.cfg_onTop)):false),
posFromCookie:typeof(style.cfg_posFromCookie)=='boolean'
?style.cfg_posFromCookie:
(typeof(style.cfg_posFromCookie)=='integer'?
!(!(style.cfg_posFromCookie)):false),
transparent:typeof(style.cfg_transparent)=='boolean'
?style.cfg_transparent:
(typeof(style.cfg_transparent)=='integer'?
!(!(style.cfg_transparent)):true),
xcS:typeof(style.cfg_xframe)=='boolean'
?style.cfg_xframe:
(typeof(style.cfg_xframe)=='integer'?
!(!(style.cfg_xframe)):false),
XvX:typeof(style.Xuy)=='boolean'
?style.Xuy:
(typeof(style.Xuy)=='integer'?
!(!(style.Xuy)):false),
xCV:
typeof(style.xCN)=='boolean'
?style.xCN:
(typeof(style.xCN)=='integer'?
!(!(style.xCN)):false),
XuQ:style.cfg_initialSound||'pop.wav',
toString:xIJ}}
else{
this.xFO={
type:'bubble',
autoplace:false,
XpP:'',
closable:false,
cover:true,
X9k:'',
minimizable:false,
minimized:false,
movable:false,
naked:false,
XLx:true,
posFromCookie:false,
transparent:false,
xcS:false,
XuQ:'pop.wav',
toString:xIJ};}
this.xLl=(typeof(spike)=='boolean'?spike:
(typeof(spike)=='integer'?
!(!(spike)):true));
this.xGL=(xYk+'').toUpperCase();
this.setText(text);
this.xPi=replace||false;
if(typeof(this.xFO)=='string'){this.x7Q=w||120;
this.xdH=h||80;}else{this.x7Q=w||0;
this.xdH=h||0;}}
xLh.prototype=new xUj;
xLh.prototype.Xtx=function(){
return this.xyO;}
xLh.prototype.setText=function(xyO){
this.xyO=new String(xyO||'');
return this.xyO;}
xLh.prototype.Xr=function(){
return this.xPi;}
xLh.prototype.XzL=function(xPi){
this.xPi=xPi;
return this.xPi;}
xLh.prototype.Xo=function(){
return this.xGL;}
xLh.prototype.X0B=function(xGL){
this.xGL=xGL;
return this.xGL;}
xLh.prototype.Xsy=function(){
return this.xFO;}
xLh.prototype.Xspi=function(){
return this.xLl;}
xLh.prototype.Xw=function(){
return this.x7Q;}
xLh.prototype.X0C=function(x7Q){
this.x7Q=x7Q;
return x7Q;}
xLh.prototype.Xh=function(){
return this.xdH;}
xLh.prototype.X0A=function(xdH){
this.xdH=xdH;
return xdH;}
xLh.prototype.toString=function(){
xbK='TextBubbleEvent={'+xUj.prototype.toString.XHO(this);
xbK+=',style:'+this.xFO;
xbK+=',ori:'+this.xGL;
xbK+=',sz w/h:'+this.x7Q+'/'+this.xdH;
xbK+=(this.xPi?',replace':',append');
xbK+=(this.xLl?',spike':',nospike');
xbK+=',t:"'+(this.xyO.length>50?
this.xyO.substr(0,46)+' ...':this.xyO);
return xbK+'"}';}
function xIi(xCi){
if(xCi==undefined)return;
xNh.XHO(this,XBC,xCi);}
xIi.prototype=new xNh;
function xFh(xCi,timeout){
if(xCi==undefined)return;
xNh.XHO(this,XBE,xCi);
this.xjh=timeout||0;}
xFh.prototype=new xNh;
xFh.prototype.Xtmo=function(){
return this.xjh;}
xFh.prototype.toString=function(){
return 'TimeOutEvent={'+xNh.prototype.toString.XHO(this)+
',to:'+this.xjh+'}';}
var VALUE_PROTECTED=1;
var VALUE_GLOBAL=2;
var VALUE_SNAPSHOT=4;
var VALUE_CHECK_ONCHANGE=8;var VALUE_KEEP_OLD=16;var VALUE_RADIO_SINGLE=32;
var VALUE_INIT=64;
var VALUE_BOOL=1024;
var VALUE_NUMBER=2048;
var VALUE_DATE=4096;
function X3K(
xCi,xUG,element,XKQ,X4E,X4s,X91)
{
if(xCi==undefined)return;
xVi.XHO(this,X2w,xCi,xUG,element);
this.XKQ=XKQ;
this.X4E=X4E;if(typeof(X4E)=='object'&&X4E){
this.X4E.toString=XPG;}
this.X4s=X4s;
this.X91=X91;}
X3K.prototype=new xVi;
X3K.prototype.X5B=function(){
return this.XKQ;}
X3K.prototype.X4q=function(){
return this.X4E;}
X3K.prototype.X9Z=function(){
return this.X4s;}
X3K.prototype.X90=function(){
return this.X91;}
X3K.prototype.toString=function(){
return 'TrackValueEvent={'+
xVi.prototype.toString.XHO(this)+
',opt:'+this.XKQ+
','+this.X4E+
',init:'+this.X91+
',dflt:'+this.X4s+'}';}
function xwi(xCi,xUG,url,Xss,x0g,method,encoding,xlh){
if(xCi==undefined)return;
this.XBI(XBF,xCi,xUG);
this.xMj=url;
this.xri=Xss||'';
this.xak=x0g||'';
this.xLj=method||'GET';
this.x4i=encoding||'';
this.xMh=xlh||'';}
xwi.prototype=new xeh;
xwi.prototype.XBI=xeh;
xwi.prototype.Xu=function(){
return this.xMj;}
xwi.prototype.Xm=function(){
return this.xLj;}
xwi.prototype.Xpd=function(){
return this.xMh;}
xwi.prototype.Xenc=function(){
return this.x4i;}
xwi.prototype.Xis=function(){
return this.xri;}
xwi.prototype.Xsp=function(){
return this.xak;}
xwi.prototype.valueOf=function(){
return this.toString();}
xwi.prototype.toString=function(){
xbK='UrlEvent={'+xeh.prototype.toString.XHO(this);
xbK+=',u:'+this.xMj;
xbK+=',m:'+this.xLj;
xbK+=',enc:'+this.x4i;
xbK+=',sess:'+this.xri;
xbK+=',pat:'+this.xak;
xbK+=',post:"'+this.xMh;
return xbK+'"}';}
var WAIT_MUTE=2;var WAIT_POLL=4;
function X3h(xCi,XKQ){
if(xCi==undefined)return;
xNh.XHO(this,X2x,xCi);
this.XKQ=XKQ;}
X3h.prototype=new xNh;
X3h.prototype.X5B=function(){
return this.XKQ;}
X3h.prototype.toString=function(){
return 'WaitEvent={'+
xNh.prototype.toString.XHO(this)+
',opt:'+this.XKQ+'}';}
var WATCH_KEEP=1;
var WATCH_SILENT=8;
var WATCH_HELP=16;
var WATCH_FORBID_CLICKS=32;
var WATCH_FORBID_KEYS=64;
var WATCH_FORBID_CHANGES=128;
var WATCH_ONTRIGGER_CONTINUE=256;
var WATCH_DEFAULT=512;
var WATCH_DEFAULT_ANIMATED=1024;var WATCH_FOREVER=2048;
var WATCH_SHOWSCORE=4096;
var WATCH_COMPLETE_FEEDBACK=8192;
var WATCH_KEEP_NAVIGATION=16384;
var WATCH_FORBID_DRAG_DROP=32768;
var WATCH_ALLOW_DROP_ONLY_ON_DESTINATIONS=65536;
var WATCH_DRAG_WITH_IMAGE=131072;
var WATCH_FORBID_ALL=WATCH_FORBID_CHANGES+
WATCH_FORBID_CLICKS+
WATCH_FORBID_KEYS+
WATCH_FORBID_DRAG_DROP;
function X8j(xCi,XKQ,X4U,X6U,X4W){
if(xCi==undefined)return;
xNh.XHO(this,X8i,xCi);
this.XKQ=XKQ;
this.X4U=X4U;
this.X6U=(typeof(X6U)=='number'?Math.max(X6U,1):3);
this.X4W=(typeof(X4W)=='number'
?Math.max(X4W,1):1);}
X8j.prototype=new xNh;
X8j.prototype.X5B=function(){
return this.XKQ;}
X8j.prototype.X4u=function(){
return this.X4U;}
X8j.prototype.X5E=function(){
return this.X6U;}
X8j.prototype.X4v=function(){
return this.X4W;}
X8j.prototype.toString=function(){
return 'WatchEvent={'+
xNh.prototype.toString.XHO(this)+
',opt:'+this.XKQ+
',msg:'+this.X4U+
',pts:'+this.X6U+
',errpts'+this.X4W+'}';}
function xMi(xCi,xUG){
if(xCi==undefined)return;
xeh.XHO(this,XBH,xCi,xUG);}
xMi.prototype=new xeh;
function xlj(x9k,XEC,xMj,xfK,xji,
XfV,xeS,x7Q,xdH)
{
if(x9k==undefined)return;
xeh.XHO(this,XBG,x9k,XEC);
this.xMj=xMj||'';
this.x6g=xfK||'';
this.xji=xji||'';
if(typeof(XfV)=='string'){
this.xGL=XfV;
this.xFR=-1;
this.xeS=-1;
this.x7Q=(typeof(x7Q)=='number'?x7Q:800);
this.xdH=(typeof(xdH)=='number'?xdH:600);}
else{
if(typeof(XfV)=='number'){
this.xGL=null;
this.xFR=XfV;
this.xeS=xeS;}
this.x7Q=(typeof(x7Q)=='number'?x7Q:-1);
this.xdH=(typeof(xdH)=='number'?xdH:-1);}}
xlj.prototype=new xeh;
xlj.prototype.Xu=function(){
return this.xMj;}
xlj.prototype.Xwn=function(){
return this.x6g;}
xlj.prototype.Xf=function(){
return this.xji;}
xlj.prototype.Xo=function(){
return this.xGL;}
xlj.prototype.Xd0=function(){
return this.xFR;}
xlj.prototype.Xd1=function(){
return this.xeS;}
xlj.prototype.Xw=function(){
return this.x7Q;}
xlj.prototype.Xh=function(){
return this.xdH;}
xlj.prototype.valueOf=function(){
return this.toString();}
xlj.prototype.toString=function(){
return 'WindowEvent={'+xeh.prototype.toString.XHO(this)+
',u:'+this.xMj+
',n:'+this.x6g+
',f:'+this.xji+
'@'+(this.xGL?this.xGL:this.xFR+','+this.xeS)+
',sz:'+this.x7Q+
'x'+this.xdH+'}';}
if(self.XI7){XI7.XJB(new XIX('../events.js'));}

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
