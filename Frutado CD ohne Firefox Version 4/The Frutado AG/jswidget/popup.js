//
function Xj7(x9Q,xGL,x7Q,xdH,xFR,xeS,XUb,xFO,XCI,XCY){
this.error='Initializing';
this.x9Q=x9Q;
this.XCI=XCI;
this.XC0=new XAZ(XCI,XCY);
x7Q&&(this.x7Q=x7Q);
xdH&&(this.xdH=xdH);
xFR&&(this.xFR=xFR);
xeS&&(this.xeS=xeS);
this.xFO={};
(typeof(XUb)=='number')&&(this.XUb=XUb);
typeof(xFO)=='object'&&xFO&&(this.xFO=xFO);
this.XyP=dgo7.XRN().XyX;
this.XyH=dgo7.XRN().XyW;
if(this.xFO.cfg_closeOnIdle){
this.xBi=this.xFO.cfg_closeOnIdle*1000;}
else{
this.xBi=false;}
this.xBm=new Date();
this.xBh=false;
if(typeof(xGL)=='string'){
xGL&&(this.xGL=xGL);
this.Xjy();}
this.cfg_skin=false;
if(this.xFO.cfg_skin&&(this.xFO.cfg_skin!='')){
this.xFO.cfg_base=new Url('trainer:popup/'+this.xFO.cfg_skin).toString();
this.xFO.cfg_skin=new Url('trainer:popup/'+this.xFO.cfg_skin+'/popup.html').toString();
this.cfg_skin=this.xFO.cfg_skin;
this.x6K=true;
return true;}
else{
this.xFO.cfg_base||(this.xFO.cfg_base=self.location.href);}
this.x6K=this.x4H();}
function Xja(){
if(this.dgoz){
this.dgoz.close();
var xAX=this.dgoz.Xjs();
xAX&&xAX.exec('popup_closed',this.dgoz);
return true;}
return false;}
var XyG=null;
var XyE=10;
var XyF=10;
var XyD=10;
var XyC=10;
function XyB(){
if(this.dgoz){
this.childNodes(0).src=this.childNodes(0).src.replace('restore.gif','minimize.gif');
this.onclick=XyA;
var x4E=this.dgoz.XlH.document;
x4E.getElementById('ne').style.background=
x4E.getElementById('ne').style.background.replace('ne_min.gif','ne.gif');
x4E.getElementById('nw').style.background=
x4E.getElementById('nw').style.background.replace('nw_min.gif','nw.gif');
this.dgoz.XyQ('nw');
this.dgoz.XyQ('n');
this.dgoz.XyQ('ne');
this.dgoz.XyQ('w');
this.dgoz.XyQ('e');
this.dgoz.XyQ('sw');
this.dgoz.XyQ('s');
this.dgoz.XyQ('se');
this.dgoz.XyM=this.dgoz.XyU;
this.dgoz.XyL=this.dgoz.XyR;
this.dgoz.XyN=this.dgoz.XyS;
this.dgoz.XyO=this.dgoz.XyT;
var x4C=this.dgoz.XlH.document.getElementById('b');
x4C.dgoz.disabled=false;
if(this.dgoz.XyH){
Xt6();}
else{
this.dgoz.xFR=this.dgoz.XyN;
this.dgoz.xeS=this.dgoz.XyO;
this.dgoz.x7Q=this.dgoz.XyM;
this.dgoz.xdH=this.dgoz.XyL;
this.dgoz.XlF();
this.dgoz.Xa6(true);}
return true;}
return false;}
function Xt6(){
if(XyG){
if(XyG.xFR<XyG.XyN){
XyG.xFR=Math.min(XyG.XyN,
XyG.xFR+XyE);}
else if(XyG.xFR>XyG.XyN){
XyG.xFR=Math.max(XyG.XyN,
XyG.xFR-XyE);}
if(XyG.xeS<XyG.XyO){
XyG.xeS=Math.min(XyG.XyO,
XyG.xeS+XyF);}
else if(XyG.xeS>XyG.XyO){
XyG.xeS=Math.max(XyG.XyO,
XyG.xeS-XyF);}
if(XyG.x7Q<XyG.XyM){
XyG.x7Q=Math.min(XyG.XyM,
XyG.x7Q+XyD);}
else if(XyG.x7Q>XyG.XyM){
XyG.x7Q=Math.max(XyG.XyM,
XyG.x7Q-XyD);}
if(XyG.xdH<XyG.XyL){
XyG.xdH=Math.min(XyG.XyL,
XyG.xdH+XyC);}
else if(XyG.xdH>XyG.XyL){
XyG.xdH=Math.max(XyG.XyL,
XyG.xdH-XyC);}
XyG.XlF();
XyG.Xa6(true);
if(XyG.xFR!=XyG.XyN||
XyG.xeS!=XyG.XyO||
XyG.x7Q!=XyG.XyM||
XyG.xdH!=XyG.XyL)
{
setTimeout(Xt6,200);}}}
function xBc(){
cfg_action(1001);}
function xBd(){
cfg_action(1003);}
function Xnc(){
cfg_action(1016);}
function XyA(){
if(this.dgoz){
this.childNodes(0).src=this.childNodes(0).src.replace('minimize.gif','restore.gif');
this.onclick=XyB;
this.dgoz.XyU=this.dgoz.x7Q;
this.dgoz.XyR=this.dgoz.xdH;
this.dgoz.XyS=this.dgoz.xFR;
this.dgoz.XyT=this.dgoz.xeS;
this.dgoz.XyN=this.dgoz.xFR;
this.dgoz.XyO=this.dgoz.xeS;
this.dgoz.XyL=22;
this.dgoz.XyM=this.dgoz.x7Q;
switch(this.dgoz.XyP){
case 0:this.dgoz.XyM=160;
this.dgoz.XyN=0;
this.dgoz.XyO=screen.availHeight-22;
break;
case 3:this.dgoz.XyM=160;
this.dgoz.XyN=this.dgoz.XyS+this.dgoz.XyU-160;
break;
case 2:this.dgoz.XyM=160;
break;
case 1:break;}
var x4E=this.dgoz.XlH.document;
x4E.getElementById('ne').style.background=
x4E.getElementById('ne').style.background.replace('ne.gif','ne_min.gif');
x4E.getElementById('nw').style.background=
x4E.getElementById('nw').style.background.replace('nw.gif','nw_min.gif');
this.dgoz.XyI('nw');
this.dgoz.XyI('n');
this.dgoz.XyI('ne');
this.dgoz.XyI('w');
this.dgoz.XyI('e');
this.dgoz.XyI('sw');
this.dgoz.XyI('s');
this.dgoz.XyI('se');
XyG=this.dgoz;
XyE=Math.round(Math.abs(this.dgoz.xFR-this.dgoz.XyN)/4);
XyF=Math.round(Math.abs(this.dgoz.xeS-this.dgoz.XyO)/4);
XyD=Math.round(Math.abs(this.dgoz.x7Q-
this.dgoz.XyM)/4);
XyC=Math.round(Math.abs(this.dgoz.xdH-
this.dgoz.XyL)/4);
var x4C=this.dgoz.XlH.document.getElementById('b');
x4C.dgoz.disabled=true;
if(this.dgoz.XyH){
Xt6();}
else{
this.dgoz.xFR=this.dgoz.XyN;
this.dgoz.xeS=this.dgoz.XyO;
this.dgoz.x7Q=this.dgoz.XyM;
this.dgoz.xdH=this.dgoz.XyL;
this.dgoz.XlF();
this.dgoz.Xa6(true);}}
return false;}
function Xjb(){
return false;}
function Xjc(){
if(this.dgoz){
this.dgoz.xBm=new Date();
return this.dgoz.XlC(this);}
return false;}
function X7o(){
if(this.dgoz){
return this.dgoz.Xf4(this);}
return false;}
function Xjd(){
if(this.dgoz){
var xrF=this.dgoz.XlH.document.parentWindow.event;
if(xrF){
var x=xrF.screenX;
var y=xrF.screenY;
if(this.dgoz.xBo!=x||
this.dgoz.xBp!=y)
{
this.dgoz.xBo=x;
this.dgoz.xBp=y;
this.dgoz.xBm=new Date();}}
return this.dgoz.XlD(this);}
return false;}
function xBe(){
if(this.dgoz){
var xrF=this.dgoz.XlH.document.parentWindow.event;
if(xrF){
var x=xrF.screenX;
var y=xrF.screenY;
if(this.dgoz.xBo!=x||
this.dgoz.xBp!=y)
{
this.dgoz.xBo=x;
this.dgoz.xBp=y;
this.dgoz.xBm=new Date();}}}
return false;}
function Xjf(){
if(this.dgoz){
this.dgoz.xBm=new Date();
return this.dgoz.XlE(this);}
return false;}
Xj7.prototype={
x6K:false
,error:'none'
,constructor:Xj7
,close:function(){
if(this.XlH){
this.Xh9();
var XlG=this.XlH;
this.XlH=null;
XlG.hide();
this.Xjv();}
this.XlH=null;
return true;}
,XkM:function(){
if(dgoAgent.XlH&&dgoAgent.XlH.XlH){
dgoAgent.XlH.Xh9();
var XlG=dgoAgent.XlH.XlH;
dgoAgent.XlH.XlH=null;
XlG.hide();
dgoAgent.XlH.Xjv();
var xAX=dgoAgent.XlH.Xjs();
xAX&&xAX.exec('popup_closed',XlG);}
dgoAgent.XlH&&(dgoAgent.XlH.XlH=null);
return true;}
,xBI:function(xFR,xeS,x7Q,xdH){
if(dgoAgent.XlH){
var XlG=dgoAgent.XlH;
XlG.xFR=xFR;
XlG.xeS=xeS;
XlG.x7Q=x7Q;
XlG.xdH=xdH;
XlG.XlF();
XlG.Xa6(true);
return true;}}
,Xh9:function(){
var XDm=this.x9Q.document.getElementById(this.Xgu);
XDm&&(XDm.parentNode.removeChild(XDm));
return(XDm!=null);}
,Xfs:function(){
var XDm=this.x9Q.document.getElementById(this.Xgu);
if(!XDm){
var x4E=this.x9Q.document;
XDm=x4E.createElement('IFRAME');
if(!XDm){
return null;}
XDm.id=this.Xgu;
XDm.name=this.Xgu;
XDm.src=Xcf+'/about_blank.html';
XDm.style.display='none';
XDm=x4E.body.appendChild(XDm);}
return XDm.id==this.Xgu?XDm:null;}
,Xjr:function(){
return this.XlH.document.getElementById('bd');}
,Xjs:function(){
return this.XlB;}
,Xju:function(){
return this.XlH.document.parentWindow;}
,Xjt:function(){
return this.XlH;}
,X7q:function(){
return new XAi(this.xFR,this.xeS,
this.xFR+this.x7Q-1,this.xeS+this.xdH-1);}
,Xoa:function(){
return this.Xol;}
,XF3:function(){
return this.x9Q;}
,Xkw:function(Xjw){
return this.X8h(Xjw,XZj);}
,Xdx:function(xMj,XCZ,XCY){
this.XGh=new XAZ(XCZ,XCY);
this.xBS=(this.xBP!=this.xMj);
this.xMj=xMj+'';
this.xBP=this.xMj;
this.xBm=new Date();
var XDm=this.x9Q.document.getElementById(this.Xgu);
XGH(
this.x9Q,XDm,this,this.XlA);
++this.Xol;
XDm.src=this.xMj;
return true;}
,XlJ:function(XCZ,XCY){
this.XlB=new XAZ(XCZ,XCY);
return this.XlB;}
,XlK:function(xgP){
var XGT=this.XlH.document.getElementById('tt')||
this.XlH.document.getElementById('SynopsisTitle');
if(XGT){
XGT.innerHTML=xgP;}}
,show:function(Xjq){
if(Xjq==this.XYf){
return true;}
this.xBm=new Date();
if(Xjq){
return this.Xa6();}
return this.Xjv();}
,toString:function(){
if(!this.x6K){
return 'Popup={error='+this.error+'}';}
return 'Popup={'+this.xGL+';'+
this.x7Q+'x'+this.xdH+'@'+
this.xFR+','+this.xeS+';int:'+this.XUb+'ms}';}
,XlH:null
,x9Q:null
,xFO:{}
,xGL:'se'
,x7Q:400
,xdH:250
,xFR:0
,xeS:0
,XUb:200
,XkF:null
,XYf:false
,XGh:null
,XlB:null
,xMj:null
,xBP:null
,xBS:true
,Xol:0
,Xkg:-1
,Xkh:-1
,Xk3:-1
,Xkc:-1
,XnX:null 
,Xgu:'dgoPopupHelper_'
,Xtk:{cfg_onTop:false
,cfg_autoplace:false
,cfg_closable:false
,cfg_cover:false
,cfg_minimizable:false
,cfg_minimized:false
,cfg_unrestaurable:true
,cfg_movable:true
,cfg_naked:false
,cfg_posFromCookie:false
,cfg_transparent:true
,cfg_xframe:true
,cfg_imagedir:'_feedback'
,cfg_initialSound:'blip.wav'
,Xuy:true}
,Xjv:function(){
if(this.XkF){
this.x9Q.clearInterval(this.XkF);
this.XkF=null;}
this.XYf=false;
return true;}
,x4H:function(){
var x4E,XlG;
this.XlH=null;
if(!(XlG=this.x9Q.createPopup())){
this.error='popup';
return false;}
if(!this.Xfs()){
this.error='iframe';
return false;}
x4E=XlG.document;
this.XlH=XlG;
if(!this.Xjx()){
this.error='html';
return false;}
this.xBm=new Date();
if(this.xFO.cfg_show){
if(!this.Xa6(true)){
this.error='show';
return false;}}
x4E.body.dgoz=this;
x4E.body.onmouseenter=X7o;
this.error='ok';
this.xBm=new Date();
return true;}
,xBz:function(){
var XlG;
this.XlH=null;
if(!(XlG=this.x9Q.createPopup())){
this.error='popup';
return false;}
if(!this.Xfs()){
this.error='iframe';
return false;}
this.XlH=XlG;}
,xCA:function(){
var x4E=this.XlH.document;
if(!this.Xjx()){
this.error='html';
return false;}
this.xBm=new Date();
if(this.xFO.cfg_show){
if(!this.Xa6(true)){
this.error='show';
return false;}}
x4E.body.dgoz=this;
x4E.body.onmouseenter=X7o;
this.error='ok';
this.xBm=new Date();
this.XC0&&this.XC0.exec();
return true;}
,xBN:function(){
var Xbf=this.XlH.document.getElementsByTagName('HEAD');
var X7t;
if(Xbf.length>0){
X7t=Xbf[0];}
else{
X7t=this.XlH.document.createElement('HEAD');
X7t=this.XlH.document.documentElement.appendChild(X7t);}
var xMj=dgoAgent.Xu().xNI('widgets/bubble2/xbrowser.css');
var XZL=this.XlH.document.createElement('LINK');
XZL.id='dgoCSS';
XZL.href=xMj+'';
XZL.type='text/css';
XZL.rel='stylesheet';
XZL=X7t.appendChild(XZL);
if(dgoAgent.XRN().XZL){
xMj=dgoAgent.Xu().xGk(dgoAgent.XRN().XZL);
XZL=this.XlH.document.createElement('LINK');
XZL.id='dgoCSSCust';
XZL.href=xMj+'';
XZL.type='text/css';
XZL.rel='stylesheet';
XZL=X7t.appendChild(XZL);}
xMj=new Url(this.xFO.cfg_skin);
xMj.XC5();
xMj.XCJ('xbrowser.css');
XZL=this.XlH.document.createElement('LINK');
XZL.id='dgoCSSTopMost';
XZL.href=xMj+'';
XZL.type='text/css';
XZL.rel='stylesheet';
XZL=X7t.appendChild(XZL);}
,xBT:function(xB1,xBQ){
var Xbf=this.XlH.document.getElementsByTagName('HEAD');
var X7t;
if(Xbf.length>0){
X7t=Xbf[0];}
else{
X7t=this.XlH.document.createElement('HEAD');
X7t=this.XlH.document.documentElement.appendChild(X7t);}
var X0F=this.XlH.document.getElementsByTagName('STYLE');
for(var n=X0F.length-1;n>=0;n--){
X0F[n].parentNode.removeChild(X0F[n]);}
var links=this.XlH.document.getElementsByTagName('LINK');
for(n=links.length-1;n>=0;n--){
links[n].parentNode.removeChild(links[n]);}
if(xBQ){
for(n=0;n<xBQ.length;n++){
var src=xBQ[n].outerHTML;
var url=new Url(this.xMj);
for(i=0;i<this.xB2.length;++i){
var xAc='';
xRM=this.xB2[i];
match=xRM.exec(src);
while(match){
if(match[2]&&match[2]=='none'&&
match[1]&&match[1].substr(0,6)=='style=')
{
r=match[2];}
else{
r=match[2]?url.xc4(match[2])+'':'';}
xAc+=(src.substr(0,match.index)+
(match[1]||'')+r+(match[3]||''));
src=src.substr(match.index+match[0].length);
match=xRM.exec(src);}
xAc+=src;
src=xAc;}
var xOJ=this.XlH.document.createElement(xAc);
X7t.appendChild(xOJ);}}
if(xB1){
for(var n=0;n<xB1.length;n++){
var style=this.XlH.document.createElement('STYLE');
X7t.appendChild(style);
style.styleSheet.cssText=xB1[n].styleSheet.cssText;}}
this.xBN();}
,Xak:function(xyO){
if(xyO){
xyO=xyO.replace(/\${cfg_base}/gi,this.xFO.cfg_base);
var scripts=xyO;
var xoL=scripts.indexOf('<script')
if(xoL==-1){
xoL=scripts.indexOf('<SCRIPT');}
while(xoL>=0){
scripts=scripts.substr(xoL+1);
var XYt=scripts.indexOf('>');
if(XYt>=0){
scripts=scripts.substr(scripts.indexOf('>')+1);
XYt=scripts.indexOf('</script>')||scripts.indexOf('</SCRIPT>');
if(XYt>=0){
var XIy=scripts.substr(0,XYt);
scripts=scripts.substr(XYt+1);
eval(XIy);
xoL=scripts.indexOf('<script')
if(xoL==-1){
xoL=scripts.indexOf('<SCRIPT');}}
else{
xoL=-1;}}
else{
xoL=-1;}}
this.xBz();
this.XlH.document.body.innerHTML='';
this.XlH.document.body.innerHTML=xyO;
this.xBN();
this.XlH.document.body.className='dgoBody';
this.xCA();}
else{
XPi('popup',this.cfg_skin+' not found');}}
,xBR:function(XDx,XF2){
XF2.scrollTop=0;
XF2.scrollLeft=0;}
,xBU:function(xFO,xyO){
if(this.TAPI){
var x4C=this.XlH.document.getElementById('BubbleText');
if(x4C){
if(this.XCI.XRN().xCz!=''){
x4C.style.filter=this.XCI.XRN().xCz;
x4C.filters[0].Apply();}
x4C.className=xFO;
x4C.innerHTML=xyO;
x4C.scrollLeft=0;
x4C.scrollTop=0;
this.XqM=[{
xnM:''
,XqO:false
,xKI:false
,XqI:false
,XqN:0
,XqK:''
,XqH:''}];
if(!XAc(x4C,XnC,this)){
this.XqM=null;
if(this.XCI.XRN().xuQ>=1){
this.XCI.Xpr('POPUP:cannot traverse bubble body');}
x4C.className='dgoScroll';
if(this.XCI.XRN().xCz!=''&&
x4C.filters[0])
{
x4C.filters[0].Play();}
return false;}
x4C.className='dgoScroll';
this.XqM=null;
if(this.XCI.XRN().xCz!=''&&
x4C.filters[0])
{
x4C.filters[0].Play();}
return true;}}
return false;}
,Xjx:function(){
if(this.xFO.cfg_skin&&this.xFO.cfg_skin!=''){
if(typeof(this.TAPI)!='object'){
return false;}
Function.prototype['simplecall']=Function.prototype.XHO;
this.TAPI.XlH=this;
this.TAPI.dgoz=this;
this.TAPI['minimizePosition']=this.XyP;
this.TAPI['animateMinimize']=this.XyH;
this.TAPI['DoClose']=this.XkM;
this.TAPI['DoRefreshGeometry']=this.xBI;
this.TAPI['resetIdleTimer']=xBe;
this.TAPI.document=this.XlH.document;
var Xjj=this;
var X1K=function(XDx){
Xjj.xBR(XDx,Xjj.XlH.document.body);}
this.XlH.document.body.onscroll=X1K;
this.TAPI['popup']=this.XlH;
this.XlH.document.getElementById('bd').style.overflow=
this.xFO.cfg_scrollable?'auto':'hidden';
this.TAPI.width=this.x7Q;
this.TAPI.height=this.xdH;
this.TAPI.x=this.xFR;
this.TAPI.y=this.xeS;
return true;}
else{
var x4C=new Url(this.xFO.cfg_base);
x4C.XC5();
x4C.XCJ('icons/');
x4C.XCJ('pop_');
x4C=x4C+'';
var html=
'<table id=main style="width:'+this.x7Q+'px;height:'+this.xdH+'px;" cellpadding=0 border=0 cellspacing=0><tr>'+
'<td id=nw style="height:22px;cursor:nw-resize;background:url('+x4C+'nw.gif)'+
' repeat-x;"><img src="'+x4C+'1.gif"></td>'+
'<td id=n width="100%" style="cursor:n-resize;background:url('+x4C+'n.gif)'+
' repeat-x;">'+
'<img id=n0 src="'+x4C+'n0.gif" style="width:'+(this.x7Q-16)+'px;height:14px;">'+
'<table id=t cellpadding=0 cellspacing=0 style="position:absolute;color:white;font:12px sans-serif;font-weight:bolder;cursor:hand;"><tr><td id=tt>&nbsp;</td></tr></table>';
if(this.xFO.cfg_minigui){
html+='<button id=b5 hidefocus="true" style="border:1px ridge;position:absolute;left:0px;top:0px;width:12px;height:12px;">'+
'<img hidefocus="true" src="'+x4C+'back.gif"></button>'+
'<button id=b4 hidefocus="true" style="border:1px ridge;position:absolute;left:0px;top:0px;width:12px;height:12px;">'+
'<img hidefocus="true" src="'+x4C+'pause.gif"></button>'+
'<button id=b3 hidefocus="true" style="border:1px ridge;position:absolute;left:0px;top:0px;width:12px;height:12px;">'+
'<img hidefocus="true" src="'+x4C+'forward.gif"></button>';}
html+='<button id=b2 hidefocus="true" style="border:1px ridge;position:absolute;left:0px;top:0px;width:12px;height:12px;">'+
'<img hidefocus="true" src="'+x4C+'minimize.gif"></button>'+
'<button id=b hidefocus="true" style="border:1px ridge;position:absolute;left:0px;top:0px;width:12px;height:12px;">'+
'<img hidefocus="true" src="'+x4C+'close.gif"></button></td>'+
'<td id=ne style="cursor:ne-resize;background:url('+x4C+'ne.gif)'+
' repeat-x;"><img src="'+x4C+'1.gif"></td></tr><tr>'+
'<td id=w style="cursor:w-resize;background:url('+x4C+'w.gif)'+
' repeat-y;"><img src="'+x4C+'1.gif" width=8></td>'+
'<td height="100%" width="100%">'+
'<div id=bd height=100 width=200 style="overflow:hidden;">&nbsp;</div></td>'+
'<td id=e style="width:8px;cursor:e-resize;background:url('+x4C+'e.gif)'+
' repeat-y;"><img src="'+x4C+'1.gif" width=8></td></tr><tr>'+
'<td id=sw style="height:8px;cursor:sw-resize;background:url('+x4C+'sw.gif)'+
' repeat-x;"><img src="'+x4C+'1.gif"></td>'+
'<td id=s style="cursor:s-resize;background:url('+x4C+'s.gif)'+
' repeat-x;"><img src="'+x4C+'1.gif"></td>'+
'<td id=se style="cursor:se-resize;background:url('+x4C+'se.gif)'+
' repeat-x;"><img src="'+x4C+'1.gif"></td></tr></table>';
this.XlH.document.body.innerHTML=html;
this.XlF();}
this.XkE('t');
this.XkE('nw');
this.XkE('n');
this.XkE('ne');
this.XkE('w');
this.XkE('e');
this.XkE('sw');
this.XkE('s');
this.XkE('se');
var x4C=this.XlH.document.getElementById('b');
x4C.dgoz=this;
x4C.onclick=Xja;
x4C=this.XlH.document.getElementById('b2');
if(x4C){
x4C.dgoz=this;
x4C.onclick=XyA;}
x4C=this.XlH.document.getElementById('b3');
if(x4C){
x4C.dgoz=this;
x4C.onclick=xBc;}
x4C=this.XlH.document.getElementById('b4');
if(x4C){
x4C.dgoz=this;
x4C.onclick=xBd;}
x4C=this.XlH.document.getElementById('b5');
if(x4C){
x4C.dgoz=this;
x4C.onclick=Xnc;}
x4C=this.XlH.document.getElementById('bd');
if(x4C){
x4C.ondragstart=Xjb;
x4C.style.overflow=this.xFO.cfg_scrollable?'auto':'hidden';
x4C.dgoz=this;
x4C.onmousemove=xBe;}
this.XlH.document.body.className='dgoBody';
this.xBN();
return true;}
,XkE:function(XFh){
var xbF=this.XlH.document.getElementById(XFh);
xbF.dgoz=this;
xbF.ondragstart=Xjb;
xbF.onmousedown=Xjc;
xbF.onmouseup=Xjf;}
,XyI:function(XFh){
var xbF=this.XlH.document.getElementById(XFh);
xbF.ondragstart=null;
xbF.onmousedown=null;
xbF.onmouseup=null;
xbF.style.XyJ=xbF.style.cursor;
xbF.style.cursor='default';}
,XyQ:function(XFh){
var xbF=this.XlH.document.getElementById(XFh);
xbF.ondragstart=Xjb;
xbF.onmousedown=Xjc;
xbF.onmouseup=Xjf;
xbF.style.cursor=xbF.style.XyJ;}
,Xjy:function(){
var W=self.top.screen.availWidth;
var XOn=self.top.screen.availHeight;
switch((this.xGL+'').toLowerCase()){
case 'nw':
case 'w':
case 'sw':
this.xFR=0;
break;
case 'n':
case 's':
case 'c':
this.xFR=Math.floor((W-this.x7Q)/2+0.5);
break;
case 'ne':
case 'e':
case 'se':
this.xFR=W-this.x7Q;
break;
default:}
switch((this.xGL+'').toLowerCase()){
case 'nw':
case 'n':
case 'ne':
this.xeS=0;
break;
case 'w':
case 'e':
case 'c':
this.xeS=Math.floor((XOn-this.xdH)/2+0.5);
break;
case 'sw':
case 's':
case 'se':
this.xeS=XOn-this.xdH;
break;
default:}
return true;}
,X8h:function(Xjw,xBS,xB1,xBQ){
var XLn=this.XlH.document.getElementById('bd');
if(this.XCI.XRN().X6s!=''){
XLn.style.filter=this.XCI.XRN().X6s;
XLn.filters[0].Apply();}
XLn.innerHTML=Xjw;
this.xBT(xB1,xBQ);
if(xBS){
XLn.scrollLeft=0;
XLn.scrollTop=0;}
if(this.XCI.XRN().X6s!=''&&
XLn.filters[0])
{
XLn.filters[0].Play();}
if(this.TAPI&&this.TAPI.OnHtmlLoaded){
this.TAPI.OnHtmlLoaded();}
return true;}
,XlL:[
/(<img[^>]*src=")([^"][^"]*)("[^>]*>)/i
,/(<img[^>]*src=')([^'][^']*)('[^>]*>)/i
,/(style="[^"]*url\()([^\)]*)(\)[^"]*")/i
,/(style='[^']*url\()([^\)]*)(\)[^']*')/i
]
,xB2:[
/(<xOJ[^>]*href=")([^"][^"]*)("[^>]*>)/i
,/(<xOJ[^>]*href=')([^'][^']*)('[^>]*>)/i
]
,XlA:function(xsH){
XVo(xsH);
var Xga=xsH.contentWindow.document;
xsH.dgoA=true;
if(Xga.body.tagName!='BODY'){
this.X8h(XQK('TOK_IEPOPUP_FRAMESET_EXC'),true);}
else if(Xga.getElementsByTagName('IFRAME').length>0){
this.X8h(XQK('TOK_IEPOPUP_IFRAME_EXC'),true);}
else{
var x4E=this.XlH.document;
var XLn=x4E.body;
var i,xkI;
var X0F=Xga.getElementsByTagName('STYLE');
var links=Xga.getElementsByTagName('LINK');
var xAc,xRM,match,r;
for(i=0;i<Xga.images.length;i++){
if(Xga.images[i].title){
Xga.images[i].title=Xga.images[i].title.replace('<','@&lt;@');
Xga.images[i].title=Xga.images[i].title.replace('>','@&gt;@');}
if(Xga.images[i].alt){
Xga.images[i].alt=Xga.images[i].alt.replace('<','@&lt;@');
Xga.images[i].alt=Xga.images[i].alt.replace('>','@&gt;@');}}
var html=Xga.body.innerHTML;
var src=html;
var url=new Url(this.xMj);
for(i=0;i<this.XlL.length;++i){
xAc='';
xRM=this.XlL[i];
match=xRM.exec(src);
while(match){
if(match[2]&&match[2]=='none'&&
match[1]&&match[1].substr(0,6)=='style=')
{
r=match[2];}
else{
r=match[2]?url.xc4(match[2])+'':'';}
xAc+=(src.substr(0,match.index)+
(match[1]||'')+r+(match[3]||''));
src=src.substr(match.index+match[0].length);
match=xRM.exec(src);}
xAc+=src;
src=xAc;}
xAc=xAc.replace('@&amp;lt;@','<');
xAc=xAc.replace('@&amp;gt;@','>');
this.X8h('<body>\n'+xAc+'\n</body>',false,X0F,links);}
if(this.XGh){
this.XGh.exec('POPUP loaded "'+this.xMj+'"',this);}
this.xMj=null;
this.XGh=null;
this.xBm=new Date();
return true;}
,XlC:function(xcF){
this.Xkg=-1;
this.Xkh=-1;
this.Xk3=-1;
this.Xkc=-1;
var xrF=this.XlH.document.parentWindow.event;
var x=xrF.screenX;
var y=xrF.screenY;
switch(xcF.id){
case 'nw':
this.Xkg=x;
this.Xkh=y;
this.Xk3=x;
this.Xkc=y;
break;
case 'n':
this.Xkh=y;
this.Xkc=y;
break;
case 'ne':
this.Xkg=x;
this.Xkh=y;
this.Xkc=y;
break;
case 'w':
this.Xkg=x;
this.Xk3=x;
break;
case 'e':
this.Xkg=x;
break;
case 'sw':
this.Xkg=x;
this.Xkh=y;
this.Xk3=x;
break;
case 's':
this.Xkh=y;
break;
case 'se':
this.Xkg=x;
this.Xkh=y;
break;
case 't':
this.Xk3=x;
this.Xkc=y;
xcF.style.cursor='move';
this.XnX=xcF;
break;
default:
return false;}
var XLn=this.x9Q.document.body;
XLn.dgoz=this;
XLn.setCapture();
XLn.onmousemove=Xjd;
XLn.onmouseup=Xjf;
XLn.onclick=Xjf;
xrF.cancelBubble=true;
return true;}
,Xf4:function(xcF){
this.XlH.document.body.setActive();
this.x9Q.focus();
return true;}
,XlD:function(xcF){
var xrF=this.x9Q.event;
var x=xrF.screenX;
var y=xrF.screenY;
var Xjo=false;
var Xjp=false;
if(this.Xk3>=0){
this.xFR=Math.max(0,this.xFR+x-this.Xk3);
this.Xk3=x;
Xjo=true;}
if(this.Xkg>=0){
this.x7Q=Math.max(40,Xjo
?this.x7Q+this.Xkg-x
:this.x7Q+x-this.Xkg);
this.Xkg=x;}
if(this.Xkc>=0){
this.xeS=Math.max(0,this.xeS+y-this.Xkc);
this.Xkc=y;
Xjp=true;}
if(this.Xkh>=0){
this.xdH=Math.max(50,Xjp
?this.xdH+this.Xkh-y
:this.xdH+y-this.Xkh);
this.Xkh=y;}
this.XlF();
this.XlI();
if(xrF.button!=1){return this.XlE(xcF);}
if(this.xFR<0){
this.xFR=0;}
if(this.xFR>screen.availWidth-this.x7Q){
this.xFR=screen.availWidth-this.x7Q;}
if(this.xeS<0){
this.xeS=0;}
if(this.xeS>screen.availHeight-this.xdH){
this.xeS=screen.availHeight-this.xdH;}
return true;}
,XlE:function(xcF){
if(this.XnX){
this.XnX.style.cursor='hand';
this.XnX=null;}
var XLn=this.x9Q.document.body;
XLn.dgoz=this;
XLn.onmousemove=xBe;
XLn.onmouseup=null;
XLn.onclick=null;
XLn.releaseCapture();
var xrF=this.XlH.document.parentWindow.event||this.x9Q.event;
this.Xkg=-1;
this.Xkh=-1;
this.Xk3=-1;
this.Xkc=-1;
return true;}
,XlF:function(){
if(this.TAPI){
this.TAPI.x=this.xFR;
this.TAPI.y=this.xeS;
this.TAPI.width=this.x7Q;
this.TAPI.height=this.xdH;
return this.TAPI.OnResized();}
else{
var x4E=this.XlH.document;
var style=x4E.getElementById('main').style;
style.width=this.x7Q+'px';
style.height=this.xdH+'px';
style=x4E.getElementById('t').style;
style.left='12px';
style.top='3px';
style.width=(this.x7Q-16)+'px';
style=x4E.getElementById('n0').style;
style.width=(this.x7Q-16)+'px';
style=x4E.getElementById('b').style;
style.top='5px';
style.left=(this.x7Q-18)+'px';
X0a&&(style.width='10px');
if(x4E.getElementById('b2')){
style=x4E.getElementById('b2').style;
style.top='5px';
style.left=(this.x7Q-31)+'px';
X0a&&(style.width='10px');}
if(x4E.getElementById('b3')){
style=x4E.getElementById('b3').style;
style.top='5px';
style.left=(this.x7Q-50)+'px';
X0a&&(style.width='10px');}
if(x4E.getElementById('b4')){
style=x4E.getElementById('b4').style;
style.top='5px';
style.left=(this.x7Q-63)+'px';
X0a&&(style.width='10px');}
if(x4E.getElementById('b5')){
style=x4E.getElementById('b5').style;
style.top='5px';
style.left=(this.x7Q-76)+'px';
X0a&&(style.width='10px');}
var XLn=x4E.getElementById('bd');
var X0H=XLn.parentNode;
style=XLn.style;
style.width=(this.x7Q-16)+'px';
if(this.xdH-30>=0){
style.height=(this.xdH-30)+'px';}
else{
style.height='0px';}
style.backgroundColor='#cccccc';
return true;}}
,XlI:function(){
if(this.XlH&&this.xBi){
var XGS=new Date();
if(XGS-this.xBm>=this.xBi){
var xBt=30000-(XGS-this.xBm-this.xBi);
if(xBt<=0){
this.close();
var xAX=this.Xjs();
xAX&&xAX.exec('popup_idle_closed',this);
return true;}
else{
if(this.xBn!=Math.round(xBt/1000)){
this.xBh=false;}
if(!this.xBh){
this.xBn=Math.round(xBt/1000);
this.xBh=true;
var Xtn={x:0.5,y:0.5};
var X3r='C';
var Xto=false;
if(this.xBn==30||this.xBn<10){
this.Xtk.cfg_initialSound='blip.wav';}
else{
this.Xtk.cfg_initialSound='quiet.wav';}
var xbK=XQK('MSG_WILLAUTOCLOSE').replace('@1',this.xBn);
var event=evt_textbubble([false,'dgoBubbleClose'],null,null,
Xtn,null,null,
this.Xtk,X3r,
xbK,true,240,80,
false,false);
var XMN=dgo7.x6b();
event.XZv(false);
var bubble=[];
bubble[bubble.length]=dgo7.XVy();
bubble[bubble.length]=dgo7.XVy().document.body;
var name;
if(name=XMN.x8T(bubble[0],bubble[1],event)){
this.X44=name;
var x4C=XMN.x8n(this.X44);
if(x4C){
x4C.XVZ&&(x4C=x4C.XVZ);
XzT(x4C);}}}}}
else{
XMN=dgo7.x6b();
x4C=XMN&&XMN.x8n(this.X44);
if(x4C){
XMN.remove(x4C,true);}}}
if(this.XlH){
this.XlH.show(this.xFR,this.xeS,this.x7Q,this.xdH);}}
,xb1:function(){
this.XlI();}
,Xa6:function(){
if(this.XUb){
var Xjj=this;
this.XkF=this.x9Q.setInterval(
function(){Xjj.XlI();},this.XUb);}
else{
this.XkF=null;}
this.XlI();
this.XYf=true;
return true;}}
if(self.XI7){
XI7.XJB(new XIX('popup.js',
['callback.js','dhtml_explorer.js','url.js']));}

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
