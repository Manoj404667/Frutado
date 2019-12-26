//
function X3S(XCI,xsF){
this.XWs=false;
this.xfK='installTrigger';
XLD.XHO(this,XCI,xsF);
this.xsF=xsF;
this.XAo=0;
this.XWq=false;
this.XWr=false;}
function X3T(){
X3S.prototype=new XLD;
X3S.prototype.xsF=null;
X3S.prototype.x4f=function(){
var xbF=this.X8Z();
if(!xbF){
return false;}
return this.XCI.X5L().X7w(
this.x6U(),xbF,this.xsF);}
X3S.prototype.x4r=function(XVK){
return true;}
X3V['click']=TRIGGER_CLICK;
X3V['submit']=TRIGGER_CLICK;
X3V['change']=TRIGGER_CHANGE;
X3V['dblclick']=TRIGGER_DBLCLICK;
X3V['contextmenu']=TRIGGER_RCLICK;
X3V['mclick']=TRIGGER_MCLICK;
X3V['mouseover']=TRIGGER_MOUSE_ENTER;
X3V['mouseout']=TRIGGER_MOUSE_LEAVE;
X3V['focus']=TRIGGER_FOCUS_ENTER;
X3V['blur']=TRIGGER_FOCUS_LEAVE;
X3V['help']=TRIGGER_KEYPRESS;
X3V['keydown']=TRIGGER_KEYPRESS;
X3V['keyup']=TRIGGER_CHANGE;
X3V['mousedown']=TRIGGER_DRAG;
X3V['dragenter']=TRIGGER_DRAG_ENTER;
X3V['mousemove']=TRIGGER_DRAG_OVER;
X3V['mouseup']=TRIGGER_DROP;}
function X3R(X7D,xGQ,X7G,X6u,XKQ,XUM){
this.X7D=X7D;
this.xGQ=xGQ;
this.X7G=X7G;
this.X6u=X6u;
if(typeof(XKQ)=='number'){
this.XKQ=XKQ;}
if(typeof(XUM)=='object'&&XUM){
this.XUM=XUM;}
if(xGQ==TRIGGER_RCLICK||xGQ==TRIGGER_MCLICK){
this.XKQ |=(TRIGGER_BLOCK_ONSUCCESS | TRIGGER_BLOCK_ONERROR);}
this.x6K=true;}
var X3V={};
function X7P(XDx){
var xd2=true;
var xYE=0;
var target=XDx.srcElement||XDx.target;
var Xbe;
if(target&&target.tagName&&target.tagName=='INPUT'&&
target.type&&target.type=='radio')
{
dgo7.Xpr('Fire '+XDx.type+' on '+
XA6(target),'user',2);
Xbe=XbS(target);
var Xbd,X6y;
for(var i=0;i<Xbe.length;++i){
Xbd=Xbe[i];
if(typeof(Xbd.dgoi)=='object'&&
(X6y=Xbd.dgoi[TRIGGER_CHANGE])&&
X6y.length>0)
{
++xYE;
if(Xbd.dgo23!=Xbd.checked){
Xbd.dgo23=Xbd.checked;
xd2=xd2&&X6y[0].X7D.X47(
XDx,X6y,Xbd,this.dgoc);
if(!XDx.returnValue){
this.dgo41.x8p();}}}}}
return xd2;}
function Xuu(XGR){
if(typeof(XGR.XvD)=='string'){
XGR.style.cursor=XGR.XvD;
XGR.XvD=false;}
for(var i=0;i<XGR.childNodes.length;i++){
Xuu(XGR.childNodes[i]);}}
function Xuv(x9Q){
Xuu(x9Q.document.body);}
function Xus(XGR,XvH){
if(XGR.style){
if(typeof(XGR.XvD)!='string'){
XGR.XvD=XGR.style.cursor||'';}
if(XGR.Xv2){
var url=new Url('trainer:widgets/drag.cur');
url.xc3(self.location.href);
if(XRl){
var XTS='url('+url.toString()+'),drag';}
else{
XTS='copy';}
XGR.style.cursor=XTS;}
else{
XGR.style.cursor=XvH;}}
for(var i=0;i<XGR.childNodes.length;i++){
Xus(XGR.childNodes[i],XvH);}}
function Xut(x9Q,XvH){
Xus(x9Q.document.body,XvH);}
function xAN(XGR,x6m,Xsw){
if(dgoAgent.XFI_('ie','5.5')){
if(typeof(Xsw)!='string'){
Xsw='scale';}
XGR.style.filter=
'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+
x6m+'",sizingMethod='+Xsw+')';}
else{
XGR.style.backgroundImage='url("'+x6m+'")';}
XGR.style.backgroundColor="transparent";
return true;}
function xAM(xcF,XTt,xAf){
var XW6,XXI;
var XfQ=dgoAgent.Xd6();
var XWG=XfQ.xAi(XTt)
if(!XWG){
XfQ.xAi(xAf);}
XWG.Xeb();
XW6=XWG.XVg(XTt);
XTt=XW6.XFG();
XXI=XWG.XVg(xAf);
xAf=XXI.XFG();
if(!XW6||!XXI){
dgoAgent.Xpr('TR getOffset_:tFrame missing [ori:'+XW6+'/'+XXI+
'] for paths "'+XTt+'"/"'+xAf+'"','error');
return false;}
if(xcF){
var XML=XPF(xcF,true);}
else{
XML=new XAi(0,0,0,0);}
var XXC=XML.left;
var XXD=XML.top;
var r=XW6.XVu();
var xPM=XXI.XVu();
var XmK=XCi(
{x:xPM.left,y:xPM.top},
XXI.x6U().document.body);
var x4K={
x:XXC+r.left-XmK.x
,y:XXD+r.top-XmK.y};
x4K.y=Math.round(x4K.y);
x4K.x=Math.round(x4K.x);
if(dgoAgent.XRN().xuQ>=3){
dgoAgent.Xpr('TR getOffset_:frames '+XTt+'/'+xAf+
' @ '+r.left+','+r.top+'/'+xPM.left+','+xPM.top+
'(scrolled '+XmK.x+','+XmK.y+')'+
';el(scrolled)@'+XML+
'=>'+XXC+','+XXD+
'=>offset:'+x4K.x+','+x4K.y);}
return x4K;}
var Xup=-1;
var Xuq=-1;
var xAO=-1;
var xAP=-1;
var Xur=false;
var Xuo=false;
var Xx4=false;
var Xx7=false;
var XRD=false;
var xAG=null;
function xAK(){
if(xAG){
xA8(xAG,'mousemove',xAI);
X2A=dgoAgent.XvR(self);
try{
X2A.document.body.removeChild(xAG);}
catch(xa8){};
xAG=null;}}
function xAr(){
var url=new Url('trainer:widgets/drag.cur');
url.xc3(self.location.href);
if(XRl){
var XTS='url('+url.toString()+'),drag';}
else{
XTS='copy';}
if(xAG.style.cursor!=XTS){
xAG.XvD=xAG.style.cursor;
xAG.style.cursor=XTS;}}
function xAp(){
if(xAG.XvD){
xAG.style.cursor=xAG.XvD;
xAG.XvD=null;}}
function xAH(XDx){
if(xAG){
var xA1=false;
var xAb=dgoAgent.X5L().XvV();
for(var n=0;n<xAb.length;n++){
var XML=XPF(xAb[n][1],true,0);
if(xAE(XML,{x:XDx.clientX,y:XDx.clientY})){
xA1=true;
var xrF=XTd(XDx);
xrF.srcElement=xAb[n][1];
xrF.target=xAb[n][1];
return X3W.XHO(xAb[n][1],xrF);}}
var target=XDx.srcElement||XDx.target;
var xVG=xAC(target);
var xAg=
xAB(xVG,{x:XDx.clientX,y:XDx.clientY});
if(!xAg){
xAg=xVG;}
xrF=XTd(XDx);
xrF.srcElement=xAg.document.body;
xrF.target=xAg.document.body;
var x4K=xAM(null,xAg,xVG)
xrF.clientX-=x4K.x;
xrF.clientY-=x4K.y;
xrF.screenX-=x4K.x;
xrF.screenY-=x4K.y;
Xun.XHO(xAg.document.body,xrF);}}
function xAI(XDx){
if(xAG){
var xA1=false;
var xAb=dgoAgent.X5L().XvV();
for(var n=0;n<xAb.length;n++){
var XML=XPF(xAb[n][1],true,0);
if(xAE(XML,{x:XDx.clientX,y:XDx.clientY})){
xA1=true;
break;}}
if(xA1){
self.setTimeout(xAr,1);}
else if(xAG.XvD){
self.setTimeout(xAp,1);}
xAG.style.left=(xAO-Xup+XDx.screenX)+'px';
xAG.style.top=(xAP-Xuq+XDx.screenY)+'px';}}
function xAF(XDx,XvG,X2A,target,dgok){
if(xAG){
try{
X2A.document.body.removeChild(xAG);}
catch(xa8){};
xAG=null;}
xAG=X2A.document.createElement('div');
xAG.id='dgoDrag';
xAG.name='dgoDrag';
xAG.className='dgoBU';
xAG.style.position='relative';
xAG.style.zIndex=++XLX;
if(target.xA0>0){
xAG.style.width=target.xA0+'px';}
else{
xAG.style.width=target.offsetWidth+'px';}
if(target.xAS>0){
xAG.style.height=target.xAS+'px';}
else{
xAG.style.height=target.offsetHeight+'px';}
xAG.style.cursor=XvG;
var x4K=xAM(target,
xAC(target),
X2A);
xAO=x4K.x;
xAP=x4K.y;
xAG.style.top=xAP+'px';
xAG.style.left=xAO+'px';;
if(target.xAY){
x6m=new Url(target.xAY);}
else{
x6m=new Url('trainer:widgets/drag.png');}
xAN(xAG,
x6m.toString(),0);
xAG.XvD=null;
xAG=X2A.document.body.appendChild(xAG);
xA7(X2A,xAG,'mousemove',xAI,
xA2 |
xA3,110);
xA7(X2A,xAG,'mouseup',xAH,
xA2 |
xA3,110);
xAG.dgok=dgok;
Xup=XDx.screenX;
Xuq=XDx.screenY;}
function X3W(XDx){
var XnI=this.dgoi||
(this.dgoc?this.dgoc.dgoi:null);
if(typeof(XnI)=='object'&&XnI){
var target=XDx.srcElement||XDx.target;
var type=X3V[XDx.type];
if(!type){
return false;}
dgo7.Xpr('Fire '+XDx.type+' on '+
XA6(target),'user',2);
var X6y=XnI[type]||[];
var X7D;
if(X6y.length>0){
X7D=X6y[0].X7D;}
var target=XDx.srcElement||XDx.target;
if(type==TRIGGER_CLICK&&this.tagName&&
((this.tagName=='INPUT'&&this.type&&this.type=='checkbox')||
(this.tagName=='SELECT'&&this.options.length<=1)))
{
var X7F=TRIGGER_CHANGE;
var X6z=XnI[X7F]||[];
X6y=X6y.concat(X6z);}
if(type==TRIGGER_DRAG){
if(((XSN)&&(XDx.button==1))||
((XRl)&&(XDx.button==4)))
{
type=TRIGGER_MCLICK;
X6y=XnI[type]||[];}
else{
Xur=true;
Xx7=true;
Xuo=false;
XRD=false;
Xup=XDx.screenX;
Xuq=XDx.screenY;
XP2(XDx);
xZC(XDx);
XDx.returnValue=false;
return false;}}
else if(type==TRIGGER_MOUSE_LEAVE){if(Xur){
if(!Xuo){
Xuo=true;
if(X7D){
var url=new Url('trainer:widgets/no-drop.cur');
url.xc3(self.location.href);
if(XRl){
var XTV='url('+url.toString()+'),not-allowed';}
else{
XTV='not-allowed';}
var url=new Url('trainer:widgets/drag.cur');
url.xc3(self.location.href);
if(XRl){
var XTS='url('+url.toString()+'),drag';}
else{
XTS='copy';}
var X2A=X7D.XVp().X1O(window);
var XvG=(X7D.X5J().X8q()&
WATCH_ALLOW_DROP_ONLY_ON_DESTINATIONS)?XTV:XTS;
XJp(X2A,Xut,XvG);
if(X7D.X5J().X8q()&
WATCH_DRAG_WITH_IMAGE)
{
X2A=X7D.XVp().XvR(self);
xAF(XDx,
XvG,
X2A,
target,
X7D.X5J());}}}
XP2(XDx);
xZC(XDx);
XDx.returnValue=false;}
return false;}
else if(type==TRIGGER_DRAG_OVER){
if(Xur){
if(!Xuo){
if(Math.abs(Xup-XDx.screenX)>5||
Math.abs(Xuq-XDx.screenY)>5)
{
Xuo=true;
if(X7D){
var url=new Url('trainer:widgets/no-drop.cur');
url.xc3(self.location.href);
if(XRl){
var XTV='url('+url.toString()+'),not-allowed';}
else{
XTV='not-allowed';}
var url=new Url('trainer:widgets/drag.cur');
url.xc3(self.location.href);
if(XRl){
var XTS='url('+url.toString()+'),drag';}
else{
XTS='copy';}
var X2A=X7D.XVp().X1O(window);
var XvG=(X7D.X5J().X8q()&
WATCH_ALLOW_DROP_ONLY_ON_DESTINATIONS)?XTV:XTS;
XJp(X2A,Xut,XvG);
if(X7D.X5J().X8q()&
WATCH_DRAG_WITH_IMAGE)
{
X2A=X7D.XVp().XvR(self);
xAF(XDx,
XvG,
X2A,
target,
X7D.X5J());}}}}
else{
xAI(XDx);}
XP2(XDx);
xZC(XDx);
XDx.returnValue=false;}
return false;}
else if(type==TRIGGER_DROP){
Xur=false;
if(target.XvD){
target.style.cursor=target.XvD;
target.XvD=false;}
xAK();
if(X7D){
var X2A=X7D.XVp().X1O(window);
XJp(X2A,Xuv);}}
if(X6y.length>0){
if(XDx.returnValue==undefined){XDx.returnValue=true;}
var xa7=X6y[0].X7D.X47(
XDx,X6y,this,this.dgoc);
if(target.tagName&&target.tagName=='INPUT'&&
target.type&&target.type=='submit')
{this.dgo41.x8p();
return xZC(XDx);}
if(!XDx.returnValue){
this.dgo41.x8p();}
return xa7;}}}
function XwT(XDx){
var XvQ=XTd(XDx);
var Xjj=this;
var XnI=this.dgoi||
(this.dgoc?this.dgoc.dgoi:null);
if(typeof(XnI)=='object'&&XnI){
var target=XDx.srcElement||XDx.target;
var type=X3V[XDx.type];
if(!type){
return false;}
dgo7.Xpr('Fire '+XDx.type+' on '+
XA6(target),'user',2);
var X6y=XnI[type]||[];
var X7D;
if(X6y.length>0){
var X7D=X6y[0].X7D;}
if(target.tagName&&target.tagName=='INPUT'&&
target.type&&target.type=='submit')
{Xjj.dgo41.x8p();
return xZC(XvQ);}
if(X6y.length>0){
var X1K=function(){
if(X6y.length>0){
if(XvQ.returnValue==undefined){XvQ.returnValue=true;}
var xa7=X6y[0].X7D.X47(
XvQ,X6y,Xjj,Xjj.dgoc);
if(!XvQ.returnValue){
this.dgo41.x8p();}
return xa7;}}
window.setTimeout(X1K,500);}}}
var XoV=0;
function X3U(XDx){
var XnI=this.dgoi||
(this.dgoc?this.dgoc.dgoi:null);
if(typeof(XnI)=='object'&&XnI){
var target=XDx.srcElement||XDx.target;
if(XDx.type=='help'){
XDx.keyCode=XPT['f1'];}
if(dgo7.XRN().xuQ>0){
dgo7.Xpr('Fire'+
(XDx.altKey?' alt':'')+
(XDx.shiftKey?' shift':'')+
(XDx.ctrlKey?' ctrl':'')+
(XDx.altLeft?' altLeft':'')+
(XDx.shiftLeft?' shiftLeft':'')+
(XDx.ctrlLeft?' ctrlLeft':'')+
' '+XDx.type+'(key '+XDx.keyCode+
','+XDx.charCode+')'+
XA6(target),'user',2);}
var X6y=XnI[TRIGGER_KEYPRESS]||[];
XoV=0;
if(X6y.length>0){
if(XDx.returnValue==undefined){XDx.returnValue=true;}
var xa7=X6y[0].X7D.X47(XDx,X6y,this,this.dgoc);
if(!XDx.returnValue){
this.dgo41.x8p();
xZC(XDx);if(XRl){XDx.keyCode=0;}
else{XoV=XDx.keyCode;}}
return xa7;}}}
function Xnl(XDx){
if(XDx&&XoV!=0){
XoV=0;
return xZC(XDx);}
XoV=0;}
function X3X(xVG,x6P){
return x6P.X5p(xVG);}
function X3Y(xVG,x6P){
return x6P.X7I(xVG);}
X3R.prototype={
x6K:false
,error:'ok'
,X59:function(xVG,xcF){
this.xVG=xVG;
this.xcF=xcF;
return this.X5y(false);}
,Xty:function(){
return this.xGQ;}
,X4z:function(){
if(this.xGQ!=TRIGGER_KEYPRESS){
return '';}
return this.X7G;}
,X6F:function(XDx){
if(this.xGQ!=TRIGGER_KEYPRESS){
return false;}
var XR7=this.X6B;
if(XPT[XR7]==undefined){
return false;}
if(XDx.keyCode!=XPT[XR7]){
return false;}
var modifiers=(XDx.ctrlKey?1:0)+
(XDx.shiftKey?2:0)+(XDx.altKey?4:0);
if(modifiers!=this.X6G){
return false;}
return true;}
,X47:function(xcF){
var xbK='TRIGG fire '+this;
var X6v=this.X7D.X5J();
if(!this.X7x()&&!X6v.X8s()){
this.X7D.XVp().Xpr(
xbK+' abort:not watching','warning');
return-1;}
if(this.xGQ==TRIGGER_DROP){
if((this.X7D.XvU().length>0&&!Xuo)||
!xcF.Xv2)
{
return 0;}
Xuo=false;
Xur=false;}
var xa7=this.X4D();
if(typeof(xa7)=='object'){
this.X7D.XVp().Xpr(xbK+':trigger check failed');
return xa7;}
var X6s=X6v.Xtr(this.X6u);
if(!X6s){
this.X7D.XVp().Xpr(xbK+':transition "'+
this.X6u+'" not found','warning');
return 0;}
xa7=X6s.xvD();
if(typeof(xa7)=='object'){
if(this.xGQ==TRIGGER_CHANGE){
return 0;}
this.X7D.XVp().Xpr(xbK+':transition check failed');
return xa7;}
this.X7D.XVp().Xpr(xbK+':exec transition "'+
this.X6u+'"','info');
return(X6s.exec()?1:-2);}
,Xtr:function(){
return this.X6u;}
,x6U:function(){
return this.xVG;}
,x6G:function(){
return this.xcF;}
,X7x:function(){
return(this.XKQ & TRIGGER_GLOBAL);}
,X5B:function(){
return this.XKQ;}
,X7W:function(){
return this.XKQ & TRIGGER_BLOCK_ONERROR;}
,X7X:function(){
return this.XKQ & TRIGGER_BLOCK_ONSUCCESS;}
,remove:function(){
var xa7=true;
try{xa7=this.X5y(true);}
catch(xa8){
var XLk=this.X7D.XVp();
xa7=true;
if(XLk.XRN().xuQ>=3){
XLk.Xpr('TRIGG remove '+
this+':'+new x6C(xa8),'exc');}}
this.xVG=null;
this.xcF=null;
return xa7;}
,toString:function(){
var type;
switch(this.xGQ){
case TRIGGER_CHANGE:type='change';break;
case TRIGGER_CLICK:type='click';break;
case TRIGGER_DBLCLICK:type='dblclick';break;
case TRIGGER_RCLICK:type='rclick';break;
case TRIGGER_MCLICK:type='mclick';break;
case TRIGGER_MOUSE_ENTER:type='mouseenter';break;
case TRIGGER_MOUSE_LEAVE:type='mouseleave';break;
case TRIGGER_FOCUS_ENTER:type='focusenter';break;
case TRIGGER_FOCUS_LEAVE:type='focusleave';break;
case TRIGGER_KEYPRESS:type='key '+this.X7G;break;
case TRIGGER_DRAG:type='drag';break;
case TRIGGER_DROP:type='drop';break;
default:type='[invalid:'+this.xGQ+']';}
var X7R=(this.XKQ & TRIGGER_IS_DEFAULT?'+':'-')+'dflt';
X7R+=(this.XKQ & TRIGGER_HOTKEY_FRAMESET?'+':'-')+'frameset';
X7R+=(this.XKQ & TRIGGER_BLOCK_ONSUCCESS?'+':'-')+'blockonsuc';
X7R+=(this.XKQ & TRIGGER_BLOCK_ONERROR?'+':'-')+'blockonerr';
X7R+=(this.XKQ & TRIGGER_NOERROR_ON_CONDITION_FAIL?'+':'-')+'noerr';
X7R+=(this.XKQ & TRIGGER_RADIO_SINGLE?'+':'-')+'radiosingle';
X7R+=(this.XKQ & TRIGGER_FEEDBACK_USERINPUT?'+':'-')+'feedb';
X7R+=(this.XKQ & TRIGGER_GLOBAL?'+':'-')+'global';
return 'Trigger={'+type+
(this.xVG
?' in '+this.xVG.name+'='+this.xVG.location:'')+
(this.xcF?'::'+XA6(this.xcF):'')+
(this.X7x()?'(global)':'')+
',cond:'+this.XUM+',opt:'+X7R+
',trans:'+this.X6u+'}';}
,X7D:null,xGQ:0,X7G:null,X6u:'',XKQ:0,XUM:null 
,X6B:'',X6G:0,XHb:1,X3D:2,XCj:4 
,xVG:null,xcF:null 
,X4D:function(){
if(!this.XUM){
return true;}
var xa7=this.XUM.xvD(
this.X7D.X5J().X8q()&
WATCH_COMPLETE_FEEDBACK?true:false);
if(xa7.xjM===false){
this.X7D.XVp().Xpr(
'TRIGG '+this+' check failed('+xa7.desc+')','info');
return xa7;}
return true;}
,X5y:function(xsP){
var xa7;
switch(this.xGQ){
case TRIGGER_CHANGE:xa7=this.X5a(xsP);break;
case TRIGGER_CLICK:xa7=this.X5c(xsP);break;
case TRIGGER_DBLCLICK:xa7=this.X5d(xsP);break;
case TRIGGER_RCLICK:xa7=this.X5v(xsP);break;
case TRIGGER_MCLICK:xa7=this.xCw(xsP);break;
case TRIGGER_MOUSE_ENTER:xa7=this.X5r(xsP);break;
case TRIGGER_MOUSE_LEAVE:xa7=this.X5t(xsP);break;
case TRIGGER_FOCUS_ENTER:xa7=this.X5l(xsP);break;
case TRIGGER_FOCUS_LEAVE:xa7=this.X5n(xsP);break;
case TRIGGER_KEYPRESS:xa7=this.X5q(xsP);break;
case TRIGGER_DRAG:xa7=this.X5e(xsP);break;
case TRIGGER_DROP:xa7=this.X5f(xsP);break;
default:
this.error='invalid trigger type:"'+this.xGQ+'"';
return false;}
return xa7;}
,Xbc:function(xsP){
var xd2=true;
var Xbe=XbS(this.xcF);
for(var i=0;i<Xbe.length;++i){
if(Xbe[i]==this.xcF){
xd2=xd2&&this.XUa(xsP,
'click',TRIGGER_CHANGE,X7P);}
else{if(xsP){
xA8(Xbe[i],
'click',X7P);}
else{
xA7(this.xVG,Xbe[i],
'click',X7P,0,110);}}}
this.xcF.dgo23=(xsP?null:this.xcF.checked);
return xd2;}
,X5a:function(xsP){
var tagName=this.xcF.tagName;
if(tagName=='SELECT'){
if(this.xcF.options.length>1){
return this.XUa(xsP,'change',TRIGGER_CHANGE,X3W);}
else{
return this.XUa(xsP,'click',TRIGGER_CHANGE,X3W);}}
if(tagName!='INPUT'&&tagName!='TEXTAREA'){
this.error='trigger onchange on tag!=input,textarea,select:'+
tagName;
return false;}
var type=this.xcF.type;
var xd2;
if(tagName=='INPUT'&&type=='checkbox'){
xd2=this.XUa(xsP,'click',TRIGGER_CHANGE,X3W);}
else if(tagName=='INPUT'&&type=='radio'){
xd2=this.Xbc(xsP);}
else{
xd2=this.XUa(xsP,'keyup',TRIGGER_CHANGE,XwT);}
return xd2;}
,X5c:function(xsP){
if(this.xcF&&this.xVG&&
!(this.X7D.X5J().X8q()&
WATCH_KEEP_NAVIGATION))
{
this.XrI();
if(this.xcF.type&&this.xcF.type=='submit'){
this.Xob();}}
return this.XUa(xsP,'click',TRIGGER_CLICK,X3W);}
,X5d:function(xsP){
return this.XUa(xsP,'dblclick',TRIGGER_DBLCLICK,X3W);}
,X5v:function(xsP){
return this.XUa(xsP,'contextmenu',TRIGGER_RCLICK,X3W);}
,xCw:function(xsP){
return this.XUa(xsP,'mousedown',TRIGGER_MCLICK,X3W);}
,X5r:function(xsP){
return this.XUa(xsP,'mouseover',TRIGGER_MOUSE_ENTER,X3W);}
,X5t:function(xsP){
return this.XUa(xsP,'mouseout',TRIGGER_MOUSE_LEAVE,X3W);}
,X5l:function(xsP){
return this.XUa(xsP,'focus',TRIGGER_FOCUS_ENTER,X3W);}
,X5n:function(xsP){
return this.XUa(xsP,'blur',TRIGGER_FOCUS_LEAVE,X3W);}
,X5q:function(xsP){
var name=this.X7G.toLowerCase();
var modifiers=0;
var xoL=name.indexOf('ctrl ');
if(xoL>=0){
modifiers |=this.XHb;
name=name.substr(0,xoL)+name.substr(xoL+5);}
var xoL=name.indexOf('shift ');
if(xoL>=0){
modifiers |=this.X3D;
name=name.substr(0,xoL)+name.substr(xoL+6);}
var xoL=name.indexOf('alt ');
if(xoL>=0){
modifiers |=this.XCj;
name=name.substr(0,xoL)+name.substr(xoL+3);}
this.X6B=name.XZA();
this.X6G=modifiers;
if(this.XKQ & TRIGGER_HOTKEY_FRAMESET){
var X2A=this.X7D.XVp().XvR(this.xVG);
return XJp(X2A,(xsP
?X3Y
:X3X),this);}
!xsP&&this.X6B=='enter'&&
this.Xob();
if(XSN){return(this.X6B=='f1'
?this.XUa(xsP,'help',TRIGGER_KEYPRESS,X3U,
this.xVG,this.xcF||this.xVG.document.body)&&
this.XUa(xsP,'keypress',TRIGGER_KEYPRESS,
Xnl,
this.xVG,this.xcF||this.xVG.document.body)
:this.XUa(xsP,'keydown',TRIGGER_KEYPRESS,X3U,
this.xVG,this.xcF||this.xVG)&&
this.XUa(xsP,'keypress',TRIGGER_KEYPRESS,
Xnl,
this.xVG,this.xcF||this.xVG.document.body));}
else{
return(this.X6B=='f1'
?this.XUa(xsP,'help',TRIGGER_KEYPRESS,X3U,
this.xVG,this.xcF||this.xVG.document.body)
:this.XUa(xsP,'keydown',TRIGGER_KEYPRESS,X3U,
this.xVG,this.xcF||this.xVG));}}
,X5p:function(xVG){
this.X6B=='enter'&&this.Xob();
if(XSN){return(this.X6B=='f1'
?this.XUa(false,'help',TRIGGER_KEYPRESS,X3U,
xVG,xVG.document.body)&&
this.XUa(false,'keypress',TRIGGER_KEYPRESS,
Xnl,
xVG,xVG.document.body)
:this.XUa(false,'keydown',TRIGGER_KEYPRESS,X3U,
xVG,xVG)&&
this.XUa(false,'keypress',TRIGGER_KEYPRESS,
Xnl,
xVG,xVG.document.body));}
else{
return(this.X6B=='f1'
?this.XUa(false,'help',TRIGGER_KEYPRESS,X3U,
xVG,xVG.document.body)
:this.XUa(false,'keydown',TRIGGER_KEYPRESS,X3U,
xVG,xVG));}}
,XrL:function(){
return xZC();}
,XrI:function(){
var xbF=this.xcF;
while(xbF&&xbF.tagName!='BODY'){
if(xbF.tagName=='A'){
if(typeof(xbF.href)=='string'&&xbF.href){
xbF.href='javascript:void(0);';}
xbF.onclick=this.XrL;}
xbF=xbF.parentNode;}
return true;}
,Xob:function(){
var forms=this.xVG.document.getElementsByTagName('FORM');
for(var i=0;i<forms.length;++i){
if(typeof(forms[i].action)=='string'&&forms[i].action){
forms[i].action='javascript:void(0);';}
forms[i].onsubmit=this.XrL;}
return true;}
,X7I:function(xVG){
return(this.X6B=='f1'
?this.XUa(true,'help',TRIGGER_KEYPRESS,X3U,
xVG,xVG.document.body)&&
(XSN&&this.XUa(true,'keypress',TRIGGER_KEYPRESS,
Xnl,
xVG,xVG.document.body))
:this.XUa(true,'keydown',TRIGGER_KEYPRESS,X3U,
xVG,xVG))&&
(XSN&&this.XUa(true,'keypress',TRIGGER_KEYPRESS,
Xnl,
xVG,xVG.document.body));}
,X5e:function(xsP){
this.xcF.Xv1=true;
if((typeof(this.X7G)=='object')&&this.X7G){
if(typeof(this.X7G.src)=='string'){
this.xcF.xAY=this.X7G.src;}
if(typeof(this.X7G.width)=='number'){
this.xcF.xA0=this.X7G.width;}
if(typeof(this.X7G.height)=='number'){
this.xcF.xAS=this.X7G.height;}}
return this.XUa(xsP,'mousedown',TRIGGER_DRAG,X3W)&&
this.XUa(xsP,'mouseout',TRIGGER_MOUSE_LEAVE,X3W)&&
this.XUa(xsP,'mousemove',TRIGGER_DRAG_OVER,X3W);}
,X5f:function(xsP){
this.xcF.Xv2=true;
return this.XUa(xsP,'mouseup',TRIGGER_DROP,X3W)&&
this.XUa(xsP,'mouseout',TRIGGER_MOUSE_LEAVE,X3W)&&
this.XUa(xsP,'mousemove',TRIGGER_DRAG_OVER,X3W);}
,XUa:function(xsP,xfK,xGQ,XUa,xVG,xcF){
var xUG=xVG||this.xVG;
var xbF=xcF||this.xcF;
var X54=false;
var X6y=(xbF.dgoi?xbF.dgoi[xGQ]:null);
if(xsP){
var XLk=this.X7D.XVp();
var X8X=0;
if(X6y){
var X6x;
for(var i=0;i<X6y.length;++i){
if((X6x=X6y[i])){
if(X6x==this){
X6y[i]=null;
X6y.X67();
X54=true;
i=X6y.length;}
else{
++X8X;}}}
if(!X54){
XLk.Xpr('TRIGG '+this+
' uninstall failed:not found in '+
XA6(xbF),'error');}}
if(X8X<=0){
xA8(xbF,xfK,XUa,
xA4);}
return X54;}
if(xfK!='keypress'){if(!X6y){
X6y=[];
if(!xbF.dgoi){
xbF.dgoi={};}
xbF.dgoi[xGQ]=X6y;}
X6y[X6y.length]=this;}
xA7(xUG,xbF,xfK,XUa,
xA2 |
xA3,110);
return true;}}
function X3Z(XCI){
this.XCI=XCI;
this.X6E={};
this.x6K=this.X7v();}
X3Z.prototype={
x6K:false
,error:'ok'
,X5U:function(xsF){
if(xsF.X5B()& CLEAR_ALL){
this.x8A();}
else{
this.remove(xsF.getName().X3m());}
return XMs;}
,X7w:function(xVG,xcF,xsF){
var name=this.X5w(xVG,xcF,
xsF.getName().X3m(),xsF.X5B(),
xsF.Xty(),xsF.X5M(),
xsF.Xtr(),xsF.X4q());
if(name){
if(xsF.Xty()==TRIGGER_RCLICK||
xsF.Xty()==TRIGGER_DBLCLICK)
{
xa7=this.X5w(xVG,xcF,'dgo!dummy_'+name,
xsF.X5B()| TRIGGER_NOERROR_ON_CONDITION_FAIL,
TRIGGER_CLICK,null,'',null);}}
return(name?true:false);}
,X5w:function(
xVG,xcF,xfK,XKQ,xGQ,X7G,X6u,XUM)
{
++this.X77;
var name=xfK||('TRG_'+this.X77);
var X6t=(typeof(X6u)=='string'
?X6u:this.XCI.X5J().XaV());
var xbK='TRIGG '+name;
var X6x=new X3R(this,
xGQ,X7G,X6t,XKQ,
new X3e(this.XCI.X5P(),XUM));
var xa7;
if(X6x.x6K){
xbK+=' install';
xa7=X6x.X59(xVG,xcF);}
else{
xbK+=' ctor';
xa7=false;}
if(!xa7){
this.XCI.Xpr(xbK+' failure:'+
xa7+'/'+X6x.error,'error');
return false;}
if(XKQ & TRIGGER_GLOBAL){
this.xzz++;}
else{
if(this.XVa==this.xzz||XKQ & TRIGGER_IS_DEFAULT){
this.X4K=name;}}
this.X6E[name]=X6x;
this.XVa++;
if(this.XCI.XRN().xuQ>=(XKQ & TRIGGER_GLOBAL?4:3)){
this.XCI.Xpr(xbK+';'+X6x+
';count='+this.XVa+'/global:'+this.xzz,'success');}
return name;}
,remove:function(xfK){
var XLk=this.XCI;
var xbK='TRIGG '+xfK+' remove';
var X6x;
if(X6x=this.X5K(xfK)){
X6x.remove();
this.X6E[xfK]=null;
this.XVa--;
(X6x.XKQ & TRIGGER_GLOBAL)&&this.xzz--;
if(XLk.XRN().xuQ>=3){
XLk.Xpr(xbK+';count='+this.XVa+
'/global:'+this.xzz,'success');}
return true;}
XLk.Xpr(xbK+':not found','error');
return false;}
,x8A:function(){
var X8D={};
var X8C=0;
var X6x;
for(var name in this.X6E){
X6x=this.X6E[name];
if(X6x){
if(X6x.X7x()){
X8D[name]=X6x;
++X8C;}
else{
this.remove(name);}}}
this.X6E=X8D;
this.XVa=X8C;
this.xzz=X8C;
this.XCI.Xpr('TRIGG remove all;remaining globals:'+
this.xzz,'success');
return true;}
,X47:function(xsF,X7A,xcF,xVG){
var X7E=XQK('EXER_OR');
var X40=[];
var X4T='';
var X4l=true;
var X4c=true;
var X4d=false;
var X4f=false;
var X74=true;
var XvO=true;
var X9Y=false;
var Xuz=null;
var X6v=X7A[0].X7D.X5J();
var i,X6x,xa7,X6D;
for(i=0;i<X7A.length&&X4c;++i){
X6x=X7A[i];
X9Y |=(X6x.X5B()& TRIGGER_FEEDBACK_USERINPUT);
if(X9Y&&XvO){
XvO=false;
Xuz=Xuz||
this.XCI.X5P().XvS();}
if(X6x.Xty()==TRIGGER_KEYPRESS){
if(X6x.X6F(xsF)){
xa7=X6x.X47(null);}
else{
xa7=0;}}
else{
xa7=X6x.X47(xcF);}
if(typeof(xa7)=='object'){if(X6x.X5B()& TRIGGER_NOERROR_ON_CONDITION_FAIL){
this.XCI.Xpr('TRIGG ignore [noerr-on-cond-fail] '+
xa7.desc,'info');}
else{X4T=(X4T
?X4T+=(X7E+xa7.desc):xa7.desc);
X40[X40.length]=X6x;
X6D=xa7;}
if(X6x.X7W()){
X4l=false;}
X74=false;}
else if(xa7<0){X4c=false;
X4f=true;
X74=false;
if(X6x.X7W()){
X4l=false;}}
else if(xa7>0){
X4d=true;
X4c=false;
X74=false;
if(X6x.X7X()){
X4l=false;}}
else if(X6x.Xtr()==''){
if(X6x.X5B()& TRIGGER_NOERROR_ON_CONDITION_FAIL){
X4d=true;
X4c=false;
X74=false;
this.XCI.Xpr('TRIGG dummy transition','warning');
if(X6x.X7X()){
X4l=false;}}
else{
if(X6x.X7W()){
X4l=false;}}}}
if(!X74){
//
XP2(xsF);
X6v.X76(xcF.dgo41.X75());}
if(!X4d){
var X6v=this.X5J();
if(Xuz){
xcF=Xuz;
if(XSN){
xVG=Xuz.ownerDocument.defaultView;}
else{
xVG=XbT(Xuz).parentWindow;}}
if(X6D){
var bubble=X6D.bubble||[];
if(X6v&&X6v.XuK()&&bubble.length==0){
if(!Xuz&&X6D.highlights&&
X6D.highlights.length>0)
{
bubble[bubble.length]=X6D.highlights[0][0];
bubble[bubble.length]=X6D.highlights[0][1];}
else if(xcF&&xcF.tagName!='BODY'){
bubble[bubble.length]=xVG;
bubble[bubble.length]=xcF;}
else{
if(X6v.XTG().cfg_xframe&&
this.XCI.XvR(xVG).document.body.tagName=='BODY')
{
bubble[bubble.length]=this.XCI.XvR(xVG);
bubble[bubble.length]=this.XCI.XvR(xVG).document.body;}
else{
bubble[bubble.length]=xVG;
bubble[bubble.length]=xcF;}}}}
if(X40.length==1){
var X6s=X6v.Xtr(
X40[0].Xtr());
var X4V=(X6s?X6s.X4v():null);
if(X9Y){
var input=xcF?X7f(
xcF,true,true):null;
if(input==null){
input=this.XCI.X5P().X9j()||
this.XCI.X5P().XA7();}
var highlights=X6D.highlights||[];
highlights[highlights.length]=[xVG,xcF,0];
X6v.X4Z(xVG,X6v.X8R,
X4V,input
?XQK('EXER_HINT_YOURINPUT',input)+X4T
:X4T,highlights,bubble);}
else{
X6v.X4Z(xVG,X6v.X8R,
X4V,X4T,X6D.highlights,bubble);}
this.XCI.Xpr('TRIGG failure '+
X40[0]+'/'+X6s,'warning');}
else if(X40.length==0){
if(X4f){
if(this.XCI.XRN().xuQ>=1){
alert('Internal Error firing Trigger-see log!');}
this.XCI.Xpr('TRIGG unknown failure','error');}}
else{
if(X9Y){
var input=xcF?X7f(
xcF,true,true):null;
if(input==null){
input=this.XCI.X5P().XA7();}
input&&(X4T=
XQK('EXER_HINT_YOURINPUT',input)+X4T);}
X6v.X4Z(xVG,
X6v.X8R,null,X4T,null,bubble);
this.XCI.Xpr('TRIGG failure ['+X4T+'] in '+
X40.length+' triggers','warning');}}
if(!X4l){
return xZC(xsF);}}
,XVp:function(){
return this.XCI;}
,X5K:function(xfK){
return(this.X6E[xfK]?this.X6E[xfK]:null);}
,X4t:function(){
return(this.X4K
?this.X5K(this.X4K):null);}
,X5L:function(xGQ){
var xd2=[];
var t;
for(var name in this.X6E){
if((t=this.X6E[name])&&(xGQ==undefined||t.Xty()==xGQ)){
xd2[xd2.length]=t;}}
return xd2;}
,X81:function(type){
var xd2=[];
var X7C=this.X5L(type);
var XFi=type-1;if(XFi==13){
XFi=7;}
var X6x,xUG,xbF;
for(var i=0;i<X7C.length;++i){
X6x=X7C[i];
xUG=X6x.x6U();
xbF=X6x.x6G();
if(!X6x.X7x()&&X6x.Xtr()&&
xUG&&!Xbp(xUG)&&xbF)
{
xd2[xd2.length]=[xUG,xbF,XFi];}}
return xd2;}
,XvU:function(){
var xd2=[];
var X7C=this.X5L(TRIGGER_DRAG);
var X6x,xUG,xbF;
for(var i=0;i<X7C.length;++i){
X6x=X7C[i];
xUG=X6x.x6U();
xbF=X6x.x6G();
if(!X6x.X7x()&&X6x.Xtr()&&
xUG&&!Xbp(xUG)&&xbF)
{
xd2[xd2.length]=[xUG,xbF,5];}}
return xd2;}
,XvV:function(){
var xd2=[];
var X7C=this.X5L(TRIGGER_DROP);
var X6x,xUG,xbF;
for(var i=0;i<X7C.length;++i){
X6x=X7C[i];
xUG=X6x.x6U();
xbF=X6x.x6G();
if(!X6x.X7x()&&X6x.Xtr()&&
xUG&&!Xbp(xUG)&&xbF)
{
xd2[xd2.length]=[xUG,xbF,6];}}
return xd2;}
,X83:function(){
var X7C=this.X5L(TRIGGER_KEYPRESS);
var X6C='';
var X6x,xbF;
for(var i=0;i<X7C.length;++i){
X6x=X7C[i];
xbF=X6x.x6G();
if(!X6x.X7x()&&
X6x.Xtr()&&
xbF==xVD(xbF))
{
X6C+=','+' '+X6x.X4z();}}
return X6C.substr(2);}
,X5J:function(){
return this.XCI.X5J();}
,toString:function(){
var xbK='';
var X6x;
for(var name in this.X6E){
if(X6x=this.X6E[name]){
if(X6x.X7x()){
xbK+=';'+name+':global';}
else{
xbK+=';'+name+':'+X6x;}}
else{
xbK+=';'+name+':[removed]';}}
return 'Triggers={'+this.XVa+
'/global:'+this.xzz+
',trg:'+this.X4K+
',map:['+xbK.substr(1)+']}';}
,XCI:null 
,X6E:null,XVa:0,xzz:0,X4K:null,X8A:null,X77:0 
,X7v:function(){
this.X8A=this.XCI.XRN().X6C||{};
this.XCI.Xd6().Xdj(
this,this.X7u);
return true;}
,X7u:function(XfA){
var X7y,X6s,X8H;
for(var xhI in this.X8A){
X6s=this.X8A[xhI];
if(typeof(X6s)=='string'&&
X6s&&
XfA.Xdp())
{
X7y=xhI.replace(/_/g,' ');
X8H=X6s+'_'+XfA.XFG(true);
this.X5w(XfA.x6U(),null,X8H,
TRIGGER_GLOBAL | TRIGGER_BLOCK_ONSUCCESS | TRIGGER_BLOCK_ONERROR,
TRIGGER_KEYPRESS,X7y,X6s);}}
return true;}}
if(self.XI7){XI7.XJB(new XIX('../trigger.js',
['../events.js','../render_base.js',
'../render_container.js','dict.js'],
X3T));}
else{
X3T();}

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
