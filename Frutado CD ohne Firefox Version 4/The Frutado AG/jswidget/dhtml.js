//
var XrA=0;
var XRl=(navigator.appName=='Microsoft Internet Explorer');
var Xcf;
function Xcg(){
var XIy=self.document.getElementById('dgo_dhtml.js');
var url;
if(XIy&&XIy.tagName=='SCRIPT'){
url=new Url(XIy.src);
url.xc3(self.location.href);
url.XC5();}
else{
url=new Url(this.XHS);
url.XC8('');
url.XC2('');
url.XC5();}
Xcf=url.toString();
XlO=Xcf+'/icons/';}
//
//
//
var X7e=0;
function xA6(XDx){
if(typeof(X7e)!='number'){
return;}
var x1K=this;
var xrF=XDx||
(this.dgoc?this.dgoc.event:null)||
this.event;
if(!xrF){
return false;}
++XrA;
var x6i=x1K.dgo41;
if(!x6i){if(typeof(x1K.document)!='object'||!x1K.document||
typeof(x1K.document.body)!='object'||!x1K.document.body||
typeof(x1K.document.body.dgo41)!='object'||
!x1K.document.body.dgo41)
{
return false;}
x6i=x1K.document.body.dgo41;}
return x6i.x5e(x1K,xrF);}
var XnA=0;
function xA5(){
this.x6e={};
this.XFh=++XnA;
this.x6K=true;}
xA5.prototype={
x6K:false
,status:null 
,X75:function(){
return X7e;}
,Xx6:function(){
try{
var XxD=top.XwK;
if(!XxD){
XxD=0;}}
catch(e){
XxD=0;}
++X7e;
if(XxD>0){
if(top.opener){
try{X7e=++top.opener.X7e;}
catch(xa8){}}}
return X7e;}
,x8p:function(){
this.x5o=true;
return true;}
,XFh:null,x5o:false,x6e:null 
,XCA:function(x5c,x7G,XKQ,X60){
var X6W=X60||0;
var x6d=this.x6e[x5c];
if(!x6d){
x6d={x5z:[],X6Z:[]};
this.x6e[x5c]=x6d;}
var XFi;
if(XKQ & xA3){
for(XFi=0;XFi<x6d.x5z.length;++XFi){
if(x6d.x5z[XFi]==x7G){
return false;}}}
if(XKQ & xA2){
XFi=0;
while(XFi<x6d.X6Z.length&&
X6W<x6d.X6Z[XFi])
{
++XFi;}
x6d.x5z.XDn(XFi,x7G);
x6d.X6Z.XDn(XFi,X6W);}
else{
x6d.x5z[x6d.x5z.length]=x7G;
x6d.X6Z[x6d.X6Z.length]=-1;}
return true;}
,xb6:function(x5c,x6f,XKQ){
var x6d=this.x6e[x5c];
var xa7=false;
if(x6d){
var X4n=x6d.x5z;
var X6X=x6d.X6Z;
var X6I=[];
var X6K=[];
for(var i=X4n.length-1;i>=0;--i){
if(X4n[i]==x6f){
if(!(XKQ &
xA4))
{
x6f=null;}
xa7=true;}
else{
X6I.unshift(X4n[i]);
X6K.unshift(X6X[i]);}}
x6d.x5z=X6I;
x6d.X6Z=X6K;}
return xa7;}
,Xvg:function(x5c){
var x6d=this.x6e[x5c];
var xa7=false;
if(x6d){
var X6I=[];
var X6K=[];
x6d.x5z=X6I;
x6d.X6Z=X6K;
xa7=true;}
return xa7;}
,x8A:function(){
var xa7=false;
var x6e=this.x6e;
if(this.x6e){
for(i=0;i<this.x6e.length;i++){
this.x6e[i].x5z=undefined;
this.x6e[i].X6Z=undefined;
this.x6e[i]=null;}
this.x6e={};
xa7=true;}
return xa7;}
,x5e:function(XGT,XDx){
if(typeof(X7e)!='number'){
return;}
var x5b=XDx.type;
var x6d=this.x6e[x5b];
X7e=this.Xx6();
if(x6d){
this.x5o=false;
this.status=undefined;
var xDk=x6d.x5z.concat([]);
for(var i=0;!this.x5o&&i<xDk.length;++i){
this.status=xDk[i].call(XGT,XDx);}
if(x5b=='unload'){this.x6e={};}}
return x5b=='beforeunload'&&this.status===true?
undefined:this.status;}
,toString:function(){
var xd2='DHtml_EventHandler={'+this.XFh+';ok:'+this.x6K;
xd2+=';status:'+this.status;
xd2+=';flagAbort_:'+this.x5o+'\r\n';
var i,xCS,X6Y;
for(var type in this.x6e){
xCS=this.x6e[type].x5z;
X6Y=this.x6e[type].X6Z;
if(xCS.length<=0){
xd2+=(type+':---\r\n');}
else{
xd2+=(type+':'+xCS.length+' function(s):\r\n');
for(i=0;i<xCS.length;++i){
xd2+=(i+'.)'+xCS[i]+
' ['+X6Y[i]+']\r\n');}}}
return xd2+'}';}}
function XAi(x6I,xlP,XMC,XHP){
this.left=x6I;
this.top=xlP;
this.right=XMC;
this.bottom=XHP;
this.XAs();}
XAi.prototype={
XCf:function(){
return new XAi(this.left,this.top,this.right,this.bottom);}
,toString:function(){
var xbK;
if(typeof(this.XMB)=='undefined'){
xbK='';}
else{
switch(this.XMB){
case true:xbK=';overlap';break;
case false:xbK=';no overlap';break;
case null:xbK=';touch';break;
default:xbK=';?overlap?';break;}}
return 'Rect={'+this.left+','+this.top+
'/'+this.right+','+this.bottom+xbK+'}';}
,add:function(XXN){
var xd2=false;
if(XXN.left<this.left){
xd2=true;
this.left=XXN.left;}
if(XXN.right>this.right){
xd2=true;
this.right=XXN.right;}
if(XXN.top<this.top){
xd2=true;
this.top=XXN.top;}
if(XXN.bottom>this.bottom){
xd2=true;
this.bottom=XXN.bottom;}
return xd2;}
,Xxw:function(XXN){
var r=xZD(this,XXN);
if(r.XMB){
var xPM=new XAi(0,0,0,0);
if(this.width==r.width||
this.left<r.left)
{
xPM.left=this.left;}
else{
xPM.left=r.right;}
if(this.width==r.width&&
this.height!=r.height)
{
xPM.right=xPM.left+this.width;}
else{
xPM.right=xPM.left+this.width-r.width;}
if(this.height==r.height||
this.top<r.top)
{
xPM.top=this.top;}
else{
xPM.top=r.bottom;}
if(this.height==r.height&&
this.width!=r.width)
{
xPM.bottom=xPM.top+this.height;}
else{
xPM.bottom=xPM.top+this.height-r.height;}
xPM.XAs();
xPM.XMB=true;}
else{
xPM=this.XCf();}
return xPM;}
,XYg:function(XXN){
return new XAi(
this.left-XXN.left
,this.right-XXN.right
,this.top-XXN.top
,this.bottom-XXN.bottom
);}
,moveBy:function(xFR,xeS,xa6,XCR){
this.left+=xFR;
this.top+=xeS;
this.right+=(typeof(xa6)=='number'?xa6:xFR);
this.bottom+=(typeof(XCR)=='number'?XCR:xeS);
this.XAs();
return this;}
,XWN:function(XXN){
return(
this.left==XXN.left&&
this.right==XXN.right&&
this.top==XXN.top&&
this.bottom==XXN.bottom);}
,XAs:function(){
this.width=(this.right==this.left)?0:this.right-this.left+1;
this.height=(this.bottom==this.top)?0:this.bottom-this.top+1;
return this;}}
function XPF(xcF,XM0,X9I){
var xoL=XEA(xcF,XM0);
var size=xaQ(xcF,X9I);
return new XAi(xoL.x,xoL.y,xoL.x+size.x-1,xoL.y+size.y-1);}
var XWB=1;var X8x=2;
function xaQ(xcF,X9G){
var X9F=X9G||0;
var w,h;
if(xcF.tagName=='BODY'||xcF.tagName=='FRAMESET'||
xcF.tagName=='HTML')
{
var XjT=null;
if(!Xjl){
if(xcF.tagName=='HTML'){
var x4E=XbT(xcF);
XjT=x4E?x4E.body:null;}
else{
XjT=(xcF.parentNode&&xcF.parentNode.tagName=='HTML'
?xcF.parentNode:null);}}
if(X9F==X8x){
w=(xcF.offsetWidth||xcF.clientWidth);
h=(xcF.offsetHeight||xcF.clientHeight);
if(XRl&&xcF.scrollWidth>0&&xcF.scrollWidth<w){
w=xcF.scrollWidth;}
else if(!XRl&&xcF.offsetWidth>0&&
xcF.offsetWidth<xcF.clientWidth){
w=xcF.offsetWidth;}
else if(XjT){
w=(xcF.clientWidth||xcF.offsetWidth);
w=Math.min(w,XjT.offsetWidth||XjT.clientWidth);}
if(XRl&&xcF.scrollHeight>0&&xcF.scrollHeight<h){
h=xcF.scrollHeight;}
else if(!XRl&&xcF.offsetHeight>0&&
xcF.offsetHeight<xcF.clientHeight){
h=xcF.offsetHeight;}
else if(XjT){
h=(xcF.clientHeight||xcF.offsetHeight);
h=Math.min(h,XjT.offsetHeight||XjT.clientHeight);}}
else{
w=(xcF.scrollWidth||xcF.offsetWidth||xcF.clientWidth);
h=(xcF.scrollHeight||xcF.offsetHeight||xcF.clientHeight);
if(XjT){
w=Math.max(w,XjT.scrollWidth||XjT.offsetWidth||
XjT.clientWidth);
h=Math.max(h,XjT.scrollHeight||XjT.offsetHeight||
XjT.clientHeight);}}
return{x:w,y:h};}
if(X9F==XWB){
return{
x:xcF.scrollWidth||xcF.offsetWidth||xcF.clientWidth
,y:xcF.scrollHeight||xcF.offsetHeight||xcF.clientHeight};}
return{
x:xcF.offsetWidth||xcF.clientWidth||0
,y:xcF.offsetHeight||xcF.clientHeight||0};}
function XR6(xVG,xEL){
if(XSS(xVG)){
return{x:0,y:0};}
if(typeof(xVG.document)!='object'||!xVG.document||
typeof(xVG.document.body)!='object'||
!xVG.document.body)
{
return{x:0,y:0};}
return Xn2(xVG.document.body,xEL);}
function Xn1(xcF,xEL){
var XLn=xVD(xcF);
if(!XLn){
return{x:0,y:0};}
return Xn2(XLn,xEL);}
function XPD(xVG,XVU){
if(!xVG||!XVU){
return{x:0,y:0};}
if(xVG==XVU){
return{x:0,y:0};}
var xUG=xVG;
var frameElement=XPB(xUG);
var xd2={x:0,y:0};
var xoL,x,y;
while(frameElement){
xoL=XEA(frameElement,true);
xd2.x+=xoL.x;
xd2.y+=xoL.y;
x6L=[];
xa7=xYD(frameElement,
['borderLeftWidth','borderTopWidth'],x6L);
x=parseInt(x6L[0]||'0');
y=parseInt(x6L[1]||'0');
isNaN(x)||(xd2.x+=x);
isNaN(y)||(xd2.y+=y);
if(xUG.parent&&
xUG.parent!=xUG&&
xUG.parent!=XVU)
{
xUG=xUG.parent;
frameElement=XPB(xUG);}
else{
xUG=xUG.parent;
frameElement=null;}}
if(!xUG||xUG!=XVU){
return{x:0,y:0};}
return xd2;}
function Xbp(x9Q,Xr0){
if(XRl){
var xbK='';
var xYE=0;
if(typeof(x9Q.location)=='unknown'){
xbK+=';win.loc unknown';
++xYE;}
else if(x9Q.location&&typeof(x9Q.location.protocol)=='unknown'){
xbK+='win.loc.protocol unknown';
++xYE;}
if(typeof(x9Q.document)=='unknown'){
xbK+=';win.doc unknown';
++xYE;}
else if(x9Q.document&&typeof(x9Q.document.readyState)=='unknown'){
xbK+=';win.doc.rs unknown';
++xYE;}
if(typeof(x9Q.name)=='unknown'){
xbK+='win.name unknown';
++xYE;}
if(xYE>1){
return xbK;}
if(Xr0){
return '';}
var XWi=false;
try{
XWi=
typeof(x9Q.document)=='object'&&x9Q.document&&
typeof(x9Q.document.body)!='unknown'&&!x9Q.document.body&&
x9Q.document.readyState=='complete';}
catch(xa8){
return 'win.doc.body exc';}
if(XWi){
var xkI;
if(0<(xkI=x9Q.document.getElementsByTagName('HTML').length)){
return 'complete,but no body;'+xkI+' HTML tag';}}}
else{
try{
var x=x9Q.location.protocol;
x=x9Q.name;}catch(e){
return 'window access exception';}}
return '';}
function XSS(x9Q){
if(XRl){
var xa7=Xbp(x9Q);
if(xa7){
return xa7;}
if(typeof(x9Q.closed)!='boolean'){
return 't(win.closed)'+typeof(x9Q.closed);}
if(typeof(x9Q.document)!='object'){
return 't(win.doc)'+typeof(x9Q.document);}
if(!x9Q.document){
return 'win.doc null';}
if(typeof(x9Q.document.body)!='object'){
return 't(win.doc.body)'+typeof(x9Q.document.body);}
if(!x9Q.document.body){
return 'win.doc.body null';}
if(typeof(x9Q.document.readyState)!='string'){
return 't(win.doc.rs)'+typeof(x9Q.document.readyState);}
if(typeof(x9Q.frames)!='object'){
return 't(win.frames)'+typeof(x9Q.frames);}
if(!x9Q.frames){
return 'win.frames null';}
if(typeof(x9Q.frames.length)!='number'){
return 't(win.frames.length)'+typeof(x9Q.frames.length);}}
else{
var xa7=Xbp(x9Q);
if(xa7){
return xa7;}
if(typeof(x9Q.closed)!='boolean'){
return 'typeof win.closed '+typeof(x9Q.closed);}
if(typeof(x9Q.document)!='object'){
return 'typeof win.doc '+typeof(x9Q.document);}
if(!x9Q.document){
return 'win.doc null';}
if(typeof(x9Q.document.body)!='object'){
return 'typeof win.doc.body '+typeof(x9Q.document.body);}
if(!x9Q.document.body){
return 'win.doc.body null';}
if(typeof(x9Q.frames)!='object'){
return 'typeof win.frames '+typeof(x9Q.frames);}
if(!x9Q.frames){
return 'win.frames null';}
if(typeof(x9Q.frames.length)!='number'){
return 'typeof win.frames.length '+typeof(x9Q.frames.length);}}
return '';}
function XPB(x9Q){
if(typeof(x9Q.top)=='unknown'){
return null;}
if(typeof(x9Q.closed)!='boolean'||x9Q.closed){
return null;}
if(x9Q==x9Q.top){
return null;}
if((!XRl||window.top==x9Q.top)&&
!Xbp(x9Q)&&
typeof(x9Q.frameElement)=='object')
{
return x9Q.frameElement;}
var parent,XVW;
try{
parent=x9Q.parent;
XVW=new Url(''+parent.location.href);}
catch(xa8){
return null;}
var x4E=parent.document;
var XVn=x4E.getElementsByTagName('FRAME');
var XWD=x4E.getElementsByTagName('IFRAME');
var i;
var elements=[];
for(i=0;i<XVn.length;++i){
elements[elements.length]=XVn[i];}
for(i=0;i<XWD.length;++i){
elements[elements.length]=XWD[i];}
var XWI=null;
var element,XCM,match,XdL,XW4;
for(var i=0;i<elements.length;++i){
element=elements[i];
match=null;
if(element.contentWindow){
match=(element.contentWindow==x9Q);}
if(!X9S&&!Xbp(x9Q)){
if(match!==false&&element.name){
match=(element.name==x9Q.name);}
if(match==null&&element.src){
XW4=new Url(element.src);
XW4.xc3(XVW);
match=(XW4.toString()==x9Q.location.href);}}
if(match===true){
if(XWI){}
else{
XWI=element;}}}
return XWI;}
function XAp(x9Q){
var xd2=[];
var i;
try{
var Xdi=[];
Xdi.X3i(x9Q.document.getElementsByTagName('IFRAME'));
Xdi.X3i(x9Q.document.getElementsByTagName('FRAME'));
for(i=0;i<Xdi.length;++i){
xd2.X3i(XAp(Xdi[i].contentWindow));}}
catch(xa8){}
return xd2;}
function Xj2(XF2){
var xVF,xWF;
if(Xj4){
xVF=0;
xWF=0;}
else{
var x6L=[];
xa7=xYD(XF2,
['borderLeftWidth','borderTopWidth'],x6L);
xVF=parseInt(x6L[0]||'0');
xWF=parseInt(x6L[1]||'0');
isNaN(xVF)&&(xVF=0);
isNaN(xWF)&&(xWF=0);}
var html=XDz(XF2);
return{
x:(XF2.scrollLeft||0)+(html.scrollLeft||0)-xVF,
y:(XF2.scrollTop||0)+(html.scrollTop||0)-xWF};}
function XCi(xqL,XF2){
var xa7=Xj2(XF2);
return{
x:xqL.x-xa7.x
,y:xqL.y-xa7.y};}
function XCx(xqL,XF2){
var xa7=Xj2(XF2);
return{
x:xqL.x+xa7.x
,y:xqL.y+xa7.y};}
function XaA(XMA,xji,x0Q,x2G){
var xYk=(XMA||'C').toUpperCase();
var xxk=','+(xji||'')+',';
var screen=self.screen;
var W,XOn,xWF;
if(XRl){
W=screen.availWidth;
XOn=screen.availHeight;
xWF=0;}
else{
W=screen.width;
XOn=screen.height;
xWF=0;}
var x=0;
var y=0;
if(xYk=='NE'||xYk=='E'||xYk=='SE'){
x=W-x0Q;}
else if(xYk=='N'||xYk=='C'||xYk=='S'){
x=Math.floor((W-x0Q)/2+0.5);}
if(xYk=='SW'||xYk=='S'||xYk=='SE'){
y=XOn-x2G;}
else if(xYk=='W'||xYk=='C'||xYk=='E'){
y=Math.floor((XOn-x2G)/2+0.5);}
return{x:x,y:y};}
//
//
function XaB(xMj,XVP,XCZ,XCY,XHh){
XHh||(XHh=function(){});
XVP||(XVP={});
typeof(XVP.cfg_maxcount_all)=='number'||
(XVP.cfg_maxcount_all=20);
typeof(XVP.cfg_maxcount_complete)=='number'||
(XVP.cfg_maxcount_complete=1);
typeof(XVP.cfg_maxcount_html_present)=='number'||
(XVP.cfg_maxcount_html_present=2);
typeof(XVP.cfg_maxcount_interactive)=='number'||
(XVP.cfg_maxcount_interactive=3);
typeof(XVP.cfg_maxcount_no_access)=='number'||
(XVP.cfg_maxcount_no_access=-1);
var w=typeof(XVP.cfg_width)=='number'?XVP.cfg_width:-1;
var h=typeof(XVP.cfg_height)=='number'?XVP.cfg_height:-1;
var xYk=typeof(XVP.cfg_orientation)=='string'
?XVP.cfg_orientation.toUpperCase():'';
var xxk=XVP.cfg_features?','+XVP.cfg_features+',':'';
var url=null;
if(X0a){
xxk=xxk.replace(/fullscreen=0,/gi,'');
xxk=xxk.replace(/fullscreen=XYC,/gi,'');}
if(XVP.cfg_flagAutosize){
w=Math.max(104,w);
h=Math.max(102,h);}
var x=null;
var y=null;
if(xYk){
var xoL=XaA(xYk,xxk,w,h);
typeof(XVP.cfg_left)=='number'&&(xoL.x+=XVP.cfg_left);
typeof(XVP.cfg_top)=='number'&&(xoL.y+=XVP.cfg_top);
x=xoL.x;
y=xoL.y;
xxk+=',left='+x;
xxk+=',top='+y;}
else{
if(typeof(XVP.cfg_left)=='number'){
x=XVP.cfg_left;
xxk+=',left='+x;}
if(typeof(XVP.cfg_top)=='number'){
y=XVP.cfg_top;
xxk+=',top='+y;}}
(w>=0)&&(xxk+=',width='+w);
(h>=0)&&(xxk+=',height='+h);
var name=XVP.cfg_name||'datango';
XVP.cfg_flagReuse||(name+='_'+(new Date).valueOf());
var x1K,X1K,xbK;
if(XVP.opener&&XVP.open){
x1K=XVP.opener;
X1K=XVP.open;
xbK=' ';}
else{
x1K=self;
X1K=function(xvk,xwk,xaf,xae){return this.open(xvk,xwk,xaf,xae);}
xbK=' self.';}
if(xMj){
url=new Url(xMj);
if(XRl){
url.xc3(x1K.location.href);}
else{
if(x1K.dgo){
url.xc3(''+x1K.dgo.Url+'');}
else{
url.xc3(x1K.location.href);}}
XVP.cfg_flagRecursiveCall&&
url.XWg('open','1',true);}
var XxB=url?url.toString():'';
var xCi={
name:name
,xAX:XCY?new XAZ(
XCZ,XCY,XHh,XVP.XrN):null
,Xnv:0
,Xnk:0
,XaJ:0
,X9f:0
,X2N:0
,xxk:xxk
,xYk:xYk,x:x,y:y,w:w,h:h
,XfF:XHh
,url:XxB
,XVO:XVP
,XwK:XVP.XwK};
var Xqj=typeof(XVP.cfg_replace)=='boolean'
?XVP.cfg_replace:null;
if(xMj!=''&&XVP.cfg_iframes){
if(XRl){
url=new Url('../boot_sec_ie.html');
url.xc3(x1K.location.href);}
else{
if(x1K.dgo){
url=new Url('./boot_sec_std.html');
url.xc3(''+x1K.dgo.Url+'');}
else{url=new Url('../boot_sec_std.html');
url.xc3(x1K.location.href);}}
XxB=url.toString()+'?'+'URL='+escape(XxB)+
'&dgoDOMAIN='+XVP.cfg_domain+
'&dgoGZIP='+(XVP.cfg_gzip=='true')+
'&dynloaderSupport='+(XVP.cfg_dynloaderSupport=='true')+
'&tourframename='+XVP.cfg_tourframename;}
var x8Q=X1K.call(x1K,XxB,name,xxk,Xqj);
var xa7;
while(!x8Q&&!XVP.cfg_blockerAbort){
xa7=self.confirm(XQK('TOK_POPUPBLOCKER_CONFIRM'));
if(!xa7){
return false;}
x8Q=X1K.call(x1K,xCi.url,name,xxk,Xqj);}
if(!x8Q){
return null;}
xCi.x8Q=x8Q;
try{
if(x8Q.external){
x8Q.external.hide_browser_bar();
XHh('window.external.hide_browser_bar was called');}}
catch(xa8){
XHh('Exception calling window.external.hide_browser_bar:'+xa8);}
XDF(xCi);
return x8Q;}
function XDK(x9k){
var x8Q=x9k.x8Q;
var xbK='';
var xd2=0;
var name,x4E,url;
try{
if(x8Q.closed){
XMb(x9k,'closed');
return 2;}
name=x8Q.name;
x4E=x8Q.document;
url=x8Q.location.href;
if(XRl){
if(typeof(x4E.readyState)=='string'&&
x4E.readyState=='complete')
{
if(++x9k.X9f>=x9k.XVO.cfg_maxcount_complete)
{
XMb(
x9k,'compl#'+x9k.X9f);
return 1;}
x9k.Xnk=0;
xbK+='compl#'+x9k.X9f+';';}
else{
x9k.X9f=0;
xbK+='compl#0;';}}
else{
if(XSS(x8Q)){
x9k.X9f=0;
xbK+='compl#0;';}
else{
if(++x9k.X9f>=x9k.XVO.cfg_maxcount_complete)
{
XMb(
x9k,'body#'+x9k.X9f);
return 1;}
x9k.Xnk=0;
xbK+='compl#'+x9k.X9f+';';}}
if(typeof(x4E.documentElement)=='object'&&x4E.documentElement){
if(++x9k.XaJ>=
x9k.XVO.cfg_maxcount_html_present)
{
XMb(
x9k,'html#'+x9k.XaJ);
return 1;}
xbK+='html#'+x9k.XaJ+';';}
else{
x9k.XaJ=0;
xbK+='html#0;';}
if(typeof(x4E.readyState)=='string'&&
x4E.readyState=='interactive')
{
if(++x9k.Xnk>=
x9k.XVO.cfg_maxcount_interactive)
{
XMb(x9k,'ia#'+x9k.Xnk);
return 1;}
xbK+='ia#'+x9k.Xnk+';';}
else{
x9k.Xnk=0;
xbK+='ia#0;';}
x9k.Xnv=0;}
catch(xa8){
++x9k.Xnv;
if(x9k.XVO.cfg_maxcount_no_access>0&&
x9k.Xnv>=x9k.XVO.cfg_maxcount_no_access)
{
XMb(x9k,'exc#'+x9k.Xnv);
return 1;}
x9k.X9f=0;
x9k.XaJ=0;
x9k.Xnk=0;
xbK+='exc#'+x9k.Xnv+';';
xd2=-1;}
if(++x9k.X2N>=x9k.XVO.cfg_maxcount_all){
XMb(x9k,'all#'+x9k.X2N);
return 1;}
return xd2;}
function XDE(){
++XrA;
XMo=null;
var name,xCi,xa7;
for(name in XaN){
if(xCi=XaN[name]){
xa7=XDK(xCi);
if(xa7>=1){
XaN[name]=null;
if(--XMh<=0){
XaN={};
XMh=0;}}}}
XMh&&XMo==null&&
(XMo=self.setTimeout(
XDE,X13));}
function XDF(x9k){
if(0<XDK(x9k)){
return;}
++XMh;
XaN[x9k.name]=x9k;
if(!XMo){
XMo=self.setTimeout(
XDE,X13);}}
function XMb(x9k,XGE){
x9k.XfF('DHtml_openWindow_execCb_('+x9k.name+'):'+XGE);
var x8Q=x9k.x8Q;
if(x8Q.closed){
x9k.xAX&&x9k.xAX.exec('DHtml_openWindow_execCb_:closed',null);
return;}
if(x9k.XVO.cfg_html){
var x4E;
if(typeof(x4E=x8Q.document)!='object'||!x4E){
x9k.xAX&&x9k.xAX.exec('DHtml_openWindow()error',null);
return;}
x4E.open('text/html');
x4E.write(x9k.XVO.cfg_html);
x4E.close();
if(x9k.XVO.cfg_flagAutosize){
Xot(x8Q,x9k.xYk,200);}}
else{
if(x9k.XVO.cfg_iframes){
if(x9k.XVO.cfg_flagAutosize){
Xot(x8Q,x9k.xYk,200);}}}
x9k.XVO.cfg_flagPollOnly||
XaE(x8Q,x9k.xYk,x9k.x,x9k.y,
x9k.xxk,x9k.XfF);
if(x9k.XVO.cfg_iframes){
x8Q.xAX=x9k.xAX;
x8Q.XwK=x9k.XwK;}
else{
x9k.xAX&&x9k.xAX.exec('DHtml_openWindow_execCb_',x8Q);}}
function XaE(x9Q,XMA,xFR,xeS,xji,XHh){
if(x9Q.dgoP){
return true;}
var xYk=XMA||'C';
var x=xFR-0;
var y=xeS-0;
var xxk=','+(xji||'')+',';
var xVF=0;
var xWF=0;
if((x>0||y>0)&&
xxk.search(',fullscreen=1,')<0&&
xxk.search(',fullscreen=yes,')<0)
{
if(XRl){
if(xYk=='S'||xYk=='SE'||xYk=='SW'){
if(X0a){
xWF+=x9Q.screenTop-xeS+2;}
else{
xWF+=x9Q.screenTop-xeS+8;
if(xxk.search(',status=1,')>=0||
xxk.search(',status,')>=0||
xxk.search(',status=yes,')>=0)
{
xWF+=20;}
if(xxk.search(',menubar=1,')>=0||
xxk.search(',menubar,')>=0||
xxk.search(',menubar=yes,')>=0)
{
xWF+=19;}}}
if(xYk=='E'||xYk=='SE'||xYk=='NE'){
xVF+=x9Q.screenLeft-xFR+7;}
if(xYk=='C'){
xVF=Math.floor(xVF*0.5);
xWF=Math.floor(xWF*0.5);}
try{
x9Q.moveBy((xVF>0?-xVF:0),(xWF>0?-xWF:0));
x9Q.dgoP=true;}catch(xa8){}}
else{
x9Q.setTimeout('self.moveBy(0,0)',1);
x9Q.dgoP=true;}}
else{
try{
x9Q.dgoP=true;}catch(xa8){}}
return true;}
function XaF(x9Q,XMA){
var XLn,Xor,Xon;
if(typeof(x9Q.document)!='object'||!x9Q.document||
typeof(XLn=x9Q.document.body)!='object'||!XLn||
typeof(XLn.innerHTML)!='string')
{
(typeof(self.dgo27)=='number')||(self.dgo27=0);
if(self.dgo27<3){
Xot(x9Q,XMA,200);
++self.dgo27;}
return;}
self.dgo27=null;
if(XRl||typeof(x9Q.innerWidth)!='number'){
Xor=(XLn.offsetWidth||XLn.clientWidth);
Xon=(XLn.offsetHeight||XLn.clientHeight);}
else{Xor=x9Q.innerWidth;
Xon=x9Q.innerHeight;}
var Xoq=(XLn.scrollWidth||XLn.offsetWidth);
var Xom=(XLn.scrollHeight||XLn.offsetHeight);
var XjT=(Xjl||!XLn.parentNode||
XLn.parentNode.tagName!='HTML')?null:XLn.parentNode;
if(XjT){
if(XRl||typeof(x9Q.innerWidth)!='number'){
Xor=Math.max(Xor,XjT.offsetWidth||XjT.clientWidth);
Xon=Math.max(Xon,XjT.offsetHeight||XjT.clientHeight);}
Xoq=Math.max(Xoq,XjT.scrollWidth||XjT.offsetWidth);
Xom=Math.max(Xom,XjT.scrollHeight||XjT.offsetHeight);}
var xVF=Xoq-Xor>0?Xoq-Xor:0;
var xWF=Xom-Xon>0?Xom-Xon:0;
var XkU=0;
var Xlt=0;
var xYk=XMA||'';
if(xYk=='S'||xYk=='SE'||xYk=='SW'){
Xlt=-xWF;}
if(xYk=='NE'||xYk=='E'||xYk=='SE'){
XkU=-xVF;}
if(xYk=='S'||xYk=='N'||xYk=='C'){
XkU=-Math.floor((xVF+1)*0.5);}
if(xYk=='W'||xYk=='E'||xYk=='C'){
Xlt=-Math.floor((xWF+1)*0.5);}
if(XRl){
(XkU!=0||Xlt!=0)&&x9Q.moveBy(XkU,Xlt);
(xVF>0||xWF>0)&&x9Q.resizeBy(xVF,xWF);}
else{
(xVF>0||xWF>0)&&x9Q.resizeBy(xVF+1,xWF+1);
x9Q.moveBy(XkU,Xlt);
(xVF>0||xWF>0)&&x9Q.resizeBy(-1,-1);}
if(typeof(x9Q.dgo1)!='number'||x9Q.dgo1==0){
x9Q.dgo1=0;
Xot(x9Q,xYk,500);
++x9Q.dgo1;}}
function Xot(x9Q,XMA,XGD){
var W=x9Q;
var XaO=XMA;
var X1K=function(){
XaF(W,XaO);};
x9Q.opener.setTimeout(X1K,XGD);}
var XMh=0;
var XMo=null;
var X13=50;
var XaN={};
var Xqg=0;
function XoA(x9Q,XVP,XCZ,XCY,XHh){
XVP||(XVP={});
XHh||(XHh=function(){});
XVP.cfg_flagPollOnly=true;
var name=typeof(x9Q.name)=='string'
?x9Q.name:'datangoPoll_'+(++Xqg);
var xCi={
name:name
,xAX:XCY?new XAZ(
XCZ,XCY,XHh,XVP.XrN):null
,Xnv:0
,Xnk:0
,XaJ:0
,X9f:0
,X2N:0
,XfF:XHh
,x8Q:x9Q
,XVO:XVP};
XDF(xCi);}
//
function XCF(xVG,XGt,XMX,XK0,Xxz){
var XML,xHL;
if(typeof(XGt.top)=='number'){
XML=XGt;
XML.XAs();
xHL=XMX;}
else{
XML=XPF(XGt,true);
xHL=XMX||XGt.parentNode;}
var xbK;
if(XK0){
var XH4=(XGt.tagName
?XGt.tagName+' '+XGt.id:'');
xbK='JD Visibility test:'+XH4+
' ['+XML.left+','+XML.top+'/'+
XML.right+','+XML.bottom+']:';}
var xoL,x,y,w,h,XMF,r,x6L,xa7,frameElement,XHE,x4K;
var xUG=xVG;
while(xHL&&xHL.tagName!='HTML'){
if(xHL.tagName=='BODY'||xHL.tagName=='FRAMESET'){
xoL=XEA(xHL,true);
x=Math.max(0,xoL.x+(xHL.clientLeft||0));
y=Math.max(0,xoL.y+(xHL.clientTop||0));
XMF=new XAi(x,y,
x+(xHL.clientWidth||xHL.offsetWidth)-1,
y+(xHL.clientHeight||xHL.offsetHeight)-1);
r=xZD(XML,XMF);
if(XK0){
xbK+=';'+xHL.tagName+' ['+XMF+']=>'+r;}
if(r.width<XML.width||r.height<XML.height){
XK0&&XK0(xbK+' NO');
if(Xxz){
Xxz.XML=r;
if(r.height<0){
r.height=0;}
if(r.width<0){
r.width=0;}
Xxz.Xxx=r.width*r.height;}
return xHL;}
if((xHL=xHL.parentNode)&&xHL.tagName=='HTML'){
frameElement=XPB(xUG);
XHE=xUG;
xUG=xUG.parent;
while(frameElement&&
frameElement.tagName&&
frameElement.tagName!='IFRAME')
{
if(frameElement=XPB(xUG)){
xUG=xUG.parent;
XK0&&(xbK+=';PASS '+frameElement.tagName+
' '+(frameElement.name||frameElement.id)+
'='+frameElement.src);}}
if(frameElement&&
frameElement.tagName&&
frameElement.tagName=='IFRAME')
{
xHL=frameElement;
x4K=XPD(XHE,xUG);
XML.moveBy(x4K.x,x4K.y);
XK0&&(xbK+=';CHECK '+frameElement.tagName+
' off '+x4K.x+','+x4K.y+
' '+(frameElement.name||frameElement.id)+
'='+frameElement.src);}}}
else{
x6L=[];
xa7=xYD(xHL,
['overflow','overflowX','overflowY'],x6L);
if(xa7&&(
(typeof(x6L[0])=='string'&&x6L[0]!='visible')||
(typeof(x6L[1])=='string'&&x6L[1]!='visible')||
(typeof(x6L[2])=='string'&&x6L[2]!='visible')))
{
xoL=XEA(xHL,true);
var x=xoL.x+(xHL.clientLeft||0);
var y=xoL.y+(xHL.clientTop||0);
XMF=new XAi(x,y,
x+(xHL.clientWidth||xHL.offsetWidth)-1,
y+(xHL.clientHeight||xHL.offsetHeight)-1);
r=xZD(XML,XMF);
if(XK0){
xbK+=';'+XA6(xHL)+
' ['+XMF+']=>'+r;}
if(r.width<XML.width||r.height<XML.height){
XK0&&XK0(xbK+' NO');
if(Xxz){
Xxz.XML=r;
if(r.height<0){
r.height=0;}
if(r.width<0){
r.width=0;}
Xxz.Xxx=r.width*r.height;}
return xHL;}}
xHL=xHL.parentNode;}}
if(Xxz){
if(XML.left<0){
XML.left=0;}
if(XML.top<0){
XML.top=0;}
XML.XAs();
if(XML.height<0){
XML.height=0;}
if(XML.width<0){
XML.width=0;}
Xxz.XML=XML;
Xxz.Xxx=XML.width*XML.height;}
XK0&&XK0(xbK+' YES');
return null;}
function XPa(Xt9){
var XML,xHL;
var x8Q=XbT(Xt9).parentWindow;
if(XRl){
XML=new XAi(Xt9.offsetLeft,
Xt9.offsetTop,
Xt9.offsetLeft+Xt9.offsetWidth-1,
Xt9.offsetTop+Xt9.offsetHeight-1);
if(Xt9.tagName=='BODY'||
Xt9.tagName=='FRAMESET'){
xHL=XPB(x8Q);}
else{
xHL=Xt9.offsetParent;}
while(xHL){
if(xHL.scrollLeft||xHL.scrollTop){
XML.moveBy(-xHL.scrollLeft,-xHL.scrollTop);}
if(XML.left-0<xHL.clientLeft-0){
XML.left=xHL.clientLeft;}
if(XML.top-0<xHL.clientTop-0){
XML.top=xHL.clientTop;}
if(XML.right>xHL.clientWidth){
XML.right=xHL.clientWidth;}
if(XML.bottom>xHL.clientHeight){
XML.bottom=xHL.clientHeight;}
XML.moveBy(xHL.offsetLeft+xHL.clientLeft,xHL.offsetTop+xHL.clientTop);
XML.XAs();
if((XML.width<=0)||(XML.height<=0)){
return true;}
if(xHL.tagName=='BODY'||xHL.tagName=='FRAMESET'){
if(XbT(xHL).parentWindow){
xHL=XPB(XbT(xHL).parentWindow);}
else{
xHL=null;}}
else{
xHL=xHL.offsetParent;}}}
else{XML=XPF(Xt9,false);
xHL=Xt9.offsetParent;
var x,y,w,h,XMF,x6L,xa7,frameElement,XHE,x4K;
var xUG=Xt9.ownerDocument.defaultView.frameElement;
while(xUG&&xHL&&xHL.tagName!='HTML'){
if(xHL.tagName=='BODY'||xHL.tagName=='FRAMESET'){
XMF=new XAi(0,0,
(xHL.clientWidth||xHL.offsetWidth),
(xHL.clientHeight||xHL.offsetHeight));
XML.moveBy(-xHL.scrollLeft-xHL.offsetLeft,-xHL.scrollTop-xHL.offsetTop);
XML=xZD(XML,XMF);
XML.XAs();
if(XML.width<=0||XML.height<=0){
return true;}
if(xUG.offsetParent){
xHL=xUG.offsetParent;
XML.moveBy(xUG.offsetLeft,xUG.offsetTop);
if(xHL){
xUG=xHL.ownerDocument.defaultView.frameElement;}
else{
xUG=null;}}
else{if(xUG.parentNode&&
xUG.parentNode.ownerDocument&&
xUG.parentNode.ownerDocument.defaultView&&
xUG.parentNode.ownerDocument.defaultView.frameElement)
{
xUG=xUG.parentNode.ownerDocument.defaultView.frameElement;
xHL=xUG.offsetParent;
XML.moveBy(xUG.offsetLeft,xUG.offsetTop);
if(xHL){
xUG=xHL.ownerDocument.defaultView.frameElement;}
else{
xUG=null;}}
else{
xHL=null;
xUG=null;}}}
else{
x6L=[];
xa7=xYD(xHL,
['overflow','overflowX','overflowY'],x6L);
if(xa7&&
((typeof(x6L[0])=='string'&&x6L[0]!='visible')||
(typeof(x6L[1])=='string'&&x6L[1]!='visible')||
(typeof(x6L[2])=='string'&&x6L[2]!='visible')))
{
xoL=XEA(xHL,false);
XMF=new XAi(0,0,
(xHL.clientWidth||xHL.offsetWidth),
(xHL.clientHeight||xHL.offsetHeight));
XML.moveBy(-xHL.scrollLeft,-xHL.scrollTop);
XML=xZD(XML,XMF);
XML.XAs();
if(XML.width<=0||XML.height<=0){
return true;}}
XML.moveBy(xHL.offsetLeft,xHL.offsetTop);
xHL=xHL.offsetParent;}}}
return false;}
function XbS(XbU){
var xd2=[];
var x4E=XbT(XbU);
if(!x4E||!XbU.tagName||XbU.tagName!='INPUT'&&
!XbU.type||XbU.type!='radio')
{
return xd2;}
var XMe=x4E.getElementsByName(XbU.name);
var i,xpK;
for(i=0;i<XMe.length;++i){
xpK=XMe[i];
if(xpK.form==XbU.form&&
xpK.type&&xpK.type=='radio')
{
xd2[xd2.length]=xpK;}}
return xd2;}
function xAC(xcF){
if(!xcF||typeof(xcF)!='object'){
return null;}
if(typeof(xcF.nodeType)!='number'||xcF.nodeType!=9){
xcF=XbT(xcF);}
if(xcF){if(xcF.parentWindow){return xcF.parentWindow;}
else if(xcF.defaultView){return xcF.defaultView;}}
return null;}
function XbT(xcF){
if(xcF.ownerDocument){return xcF.ownerDocument;}
if(xcF.document){return xcF.document;}
while(xcF&&xcF.tagName&&!xcF.document){
xcF=xcF.parentNode;}
if(xcF&&xcF.document){
return xcF.document;}
return null;}
function XDz(xcF){
if(xcF&&xcF.ownerDocument){xcF=xcF.ownerDocument.documentElement;}
else{
while(xcF&&xcF.tagName!='HTML'){
xcF=xcF.parentNode;}}
return xcF;}
function xVD(xcF){
if(xcF&&xcF.ownerDocument){return xcF.ownerDocument.body;}
if(xcF&&xcF.document){return xcF.document.body;}
while(xcF&&xcF.tagName!='BODY'&&
xcF.tagName!='FRAMESET'&&xcF.tagName!='HTML')
{
xcF=xcF.parentNode;}
return xcF;}
function XQI(xUG){
var xoI=xUG;
while(xUG&&(xUG!=xUG.top)&&(xUG.top!=xUG)){
xoI=xUG;
xUG=xUG.top;}
return xUG?xUG:xoI;}
function XOj(XGR,xfK){
var XNB=XGR.attributes;
var XCM;
if(typeof(XNB[xfK])!='unknown'&&XNB[xfK]){
XCM=XNB[xfK];if(XCM.nodeName==xfK){
return XCM.nodeValue;}}
for(var i=0;i<XNB.length;++i){
XCM=XGR.attributes[i];
if(XCM.nodeName==xfK){
return XCM.nodeValue;}}
return undefined;}
function XOl(XGR){
var xd2='';
var child;
for(var i=0;i<XGR.childNodes.length;++i){
child=XGR.childNodes[i];
if(child.nodeType==3){
xd2+=child.nodeValue;}}
return xd2;}
function XpS(xcF,xyO,XNZ){
var x4E=XbT(xcF);
if(x4E){
XNZ||(xcF.innerHTML='');
return xcF.appendChild(x4E.createTextNode((xyO||'')+''));}}
var XVt=
';APPLET;BODY;FRAMESET;IFRAME;CUSTOM;DIV;EMBED;OBJECT;TABLE;';
var XWT=
';APPLET;CUSTOM;DIV;EMBED;OBJECT;TABLE;';
function XTF(XXH){
return XXH?XWT:XVt;}
var XS0=';P;DIV;CENTER;HR;PRE;BODY;LI;DD;DEL;'+
'OL;UL;DFN;DIR;DL;DT;H1;H2;H3;H4;H5;H6;'+
'BLOCKQUOTE;INS;DEL;ISINDEX;NOSCRIPT;HTML;FRAME;FRAMESET;';
var XpB=';A;ACRONYM;ADDRESS;B;BIG;CITE;CODE;'+
'EM;FONT;I;INS;KBD;LABEL;LEGEND;LISTING;PLAINTEXT;PRE;'+
'Q;RT;SMALL;SPAN;STRIKE;STRONG;SUB;SUP;TT;U;VAR;';
function XqF(xRg){
if(!xRg.tagName){
return false;}
return XS0.indexOf(';'+xRg.tagName+';')>=0;}
function XRC(xRg){
var x6L=[];
var xa7=xYD(xRg,['position'],x6L);
var position=x6L[0];
var W,XOn;
var x4E=XbT(xRg);
var XjR=x4E&&x4E.compatMode&&x4E.compatMode=='CSS1Compat';
var XpM=XRl&&!XjR
?XS0+XpB
:XS0;
if(xRg.tagName=='HTML'||
xRg.tagName=='BODY'||xRg.tagName=='FRAMESET')
{
if(XjR){
W=xRg.clientWidth;
XOn=xRg.clientHeight;
var XjT;
if(xRg.tagName=='HTML'){
var x4E=XbT(xRg);
XjT=x4E?x4E.body:null;}
else{
XjT=(xRg.parentNode&&xRg.parentNode.tagName=='HTML'
?xRg.parentNode:null);}
if(XjT){
XjT.clientWidth&&(W=Math.min(W,XjT.clientWidth));
XjT.clientWidth&&(XOn=Math.min(XOn,XjT.clientHeight));}}
else{
W=xRg.clientWidth||xRg.offsetWidth||0;
XOn=xRg.clientHeight||xRg.offsetHeight||0;}}
else{
W=Math.max(xRg.offsetWidth||0,xRg.clientWidth||0);
XOn=Math.max(xRg.offsetHeight||0,xRg.clientHeight||0);}
if(W<=10||XOn<=10){
return false;}
var XVT=xRg.scrollWidth||0;
var XVM=xRg.scrollHeight||0;
if(XVT>W||XVM>XOn){
return true;}
if(position=='absolute'||position=='relative'){
return false;}
var xHL=xRg.parentNode||null;
if(xHL&&XpM.indexOf(';'+xHL.tagName+';')>=0){
var XVS=Math.max(xHL.offsetWidth||0,
xHL.clientWidth||0,xHL.scrollWidth||0);
var XVI=Math.max(xHL.offsetHeight||0,
xHL.clientHeight||0,xHL.scrollHeight||0);
if(XVS>10&&XVS+10<W||XVI>10&&XVI+10<XOn){
return true;}}
return false;}
function XpA(xRg){
var x4E=XbT(xRg);
if(!x4E){
return null;}
var XjR=x4E.compatMode&&x4E.compatMode=='CSS1Compat';
var XpM=XRl&&!XjR
?XS0+XpB
:XS0;
var xHL=xRg.parentNode;
while(xHL&&XpM.indexOf(';'+xHL.tagName+';')<0){
xHL=xHL.parentNode;}
return xHL||x4E.body;}
var XpY=null;
var XpZ=-1;
var Xp0=-1;
function XLg(x9Q,xcF,xFR,xeS){
if(XpY){
self.clearTimeout(XpY);
XpY=null;}
var Xp3=x9Q;
var XpT=xcF;
var XpV=xcF.onscroll||null;
XpZ=typeof(xFR)=='number'?xFR:-1;
Xp0=typeof(xeS)=='number'?xeS:-1;
var X1K=function(){
XpY=null;
var xaw=null;
if(XSN&&XpT&&XpT.tagName=='BODY'){
var X1K=Xp3.onscroll;
Xp3.onscroll=null;}
else{
X1K=XpT.onscroll;
XpT.onscroll=null;}
try{
XpZ>=0&&(XpT.scrollLeft=XpZ);
Xp0>=0&&(XpT.scrollTop=Xp0);}
catch(xa8){
xaw=xa8;}
if(XSN&&XpT&&XpT.tagName=='BODY'){
Xp3.onscroll=X1K;}
else{
XpT.onscroll=X1K;}
XpZ=-1;
Xp0=-1;
if(XSN&&XpT&&XpT.tagName=='BODY'){
xaw||XQG('onscroll',Xp3,Xp3);}
else{
xaw||XQG('onscroll',Xp3,XpT);}}
XpY=self.setTimeout(X1K,1);
return true;}
var Xky=null;
var Xnf=-1;
var Xny=-1;
var Xkz=-1;
var X9X=-1;
function X9W(x9Q,x7Q,xdH,xFR,xeS){
if(Xky){
self.clearTimeout(Xky);
Xky=null;}
var Xp3=x9Q;
Xnf=(typeof(xFR)=='number'||typeof(xFR)=='string')?xFR:false;
Xny=(typeof(xeS)=='number'||typeof(xeS)=='string')?xeS:false;
Xkz=(typeof(x7Q)=='number')?x7Q:-1;
X9X=(typeof(xdH)=='number')?xdH:-1;
var X1K=function(){
Xky=null;
var xaw=null;
var X1K=Xp3.onresize;
Xp3.onresize=null;
try{
(Xkz>0)&&(X9X>0)&&Xp3.resizeTo(Xkz,X9X);
if(Xnf&&Xnf){
if(Xnf=='C'){
Xnf=(screen.availWidth-Xkz)/2;}
if(Xny=='C'){
Xny=(screen.availHeight-X9X)/2;}
Xp3.moveTo(Xnf,Xny);}}
catch(xa8){
xaw=xa8;}
Xp3.onresize=X1K;
Xnf=-1;
Xny=-1;
Xkz=-1;
X9X=-1;
xaw||XQG('onresize',Xp3,Xp3.document.body);}
XpY=self.setTimeout(X1K,1);
return true;}
function Xw5(X8B){
switch(X8B.toLowerCase()){
case 'br':return 'pt-BR';
case 'de':return 'de-DE';
case 'es':return 'es-ES';
case 'en':return 'en-US';
case 'fr':return 'fr-FR';
case 'hr':return 'hr-HR';
case 'it':return 'it-IT';
case 'nl':return 'nl-NL';
case 'nn':return 'nb';
case 'no':return 'nb';
case 'pt':return 'pt-PT';
case 'sv':return 'sv-SE';
case 'tw':return 'zh-TW';
case 'zh':return 'zh-CN';}
if(X8B.indexOf('-')>0){
return X8B;}
else{
return X8B.toLowerCase();}}
function XOk(Xh7){
var Xh6=','+(Xh7||'en')+',';
var lang=Xw5((navigator.language||
navigator.browserLanguage||'').substr(0,2));
if(Xh6.indexOf(','+lang+',')>=0){
return lang;}
return Xh6.substr(1,Xh6.indexOf(',',1)-1);}
function XAa(xRg,xQg,XIH){
if(xRg[xQg]!=XIH){
xRg[xQg]=XIH;
return true;}
return false;}
function XQJ(XHS,XCz,XZw,XZi,XZm){
var XZh=XZi||{};
var xYE=0;
var i,XCM,xoQ,x;
for(i=0;i<XZw.length;++i){
XCM=XZw[i];
xoQ=XHS[XCM];
x=XZh[XCM];
if((XZm||xoQ)&&(x==undefined||xoQ!=x)){
XCz[XCM]=x;
++xYE;}}
return xYE;}
function XA4(XHS,XCz,Xzt){
if(typeof(Xzt)=='undefined'){
Xzt=false;}
var xAc=XCz||{};
var XCM,xoQ,xmE;
for(XCM in XHS){
xoQ=XHS[XCM];
switch(typeof(xoQ)){
case 'unknown':
case 'undefined':break;
case 'object':xAc[XCM]=Xzt?XA4(xoQ,xAc[XCM],Xzt):
XA4(xoQ);
break;
default:xAc[XCM]=xoQ;break;}}
return xAc;}
function XTd(XHS,XCz){
var xAc=XCz||{};
for(XCM in XHS){
xAc[XCM]=XHS[XCM];}
return xAc;}
function XR1(XZa,X0J,XZj){
switch(XZa){
case undefined:return 'undefined';
case null:return 'null';
case true:return(X0J||'true');
case false:return(XZj||'false');
default:break;}
return '?['+XZa+']';}
function XA5(XGT,xa9,xoK){
if(!XGT){
return '{null}';}
var xRM=(typeof(xa9)=='object'?xa9:null);
var XpR=(typeof(xa9)=='number'?xa9:9999);
var t=typeof(XGT);
if(t!='object'){
return '{'+t+' "'+XGT+'"}';}
var xbK='';
var xII=xoK||1;
var XCM,x,xoQ,n;
for(XCM in XGT){
if(!xRM||XCM.search(xRM)>=0){
try{t=typeof(XGT[XCM]);}
catch(xa8){
t='[exc "'+(new x6C(xa8))+'"]';}
if(t=='function'){
xbK+=(','+XCM+':function');}
else{
try{x=XGT[XCM];
xoQ=(t=='object'
?xII<XpR
?XA5(x,xa9,xII+1)
:'[object]'
:''+x);}
catch(xa8){
xoQ='[exc "'+(new x6C(xa8))+'"]';}
n=(x&&t=='object'&&typeof(x.length)=='number'
?'['+x.length+']':'');
xbK+=(','+XCM+':'+t+n+' "'+xoQ+'"');}}}
return '{'+xbK.substr(1)+'}';}
//
var XqR=0;
function XqQ(x9Q,XFh,xMj,XCZ,XCY){
++XqR;
var x8Q=x9Q||self;
var x4E=x8Q.document;
var XDm=x4E.createElement('IFRAME');
if(!XDm){
return 'createElement';}
XDm.style.display='none';
XDm.id=XFh||('dgoIFRAME_'+XqR);
XDm.src=xMj||(Xcf+'/about_blank.html');
XGH(x8Q,XDm,XCZ,XCY);
if(!(XDm=x4E.body.appendChild(XDm))){
return 'appendChild';}
return XDm;}
function XA3(XI6,xau,XkR,XDe){
var xpK=XI6.createElement(XkR);
if(xpK){
if(typeof(XDe)=='object'&&XDe){
XTd(XDe,xpK);}
xpK=xau.appendChild(xpK);}
return xpK;}
function XF5(x9Q,XFh,XMn,XC0,dgoDOMAIN_){
var x4E=x9Q.document;
if(dgoDOMAIN_==''){var XZL=XZN(x9Q,XMn,3);
if(XZL){
XZL.dgo21.add(XC0);
return true;}}
var Xbf=x4E.getElementsByTagName('HEAD');
var X7t;
XZL=null;
if(Xbf.length>0){
X7t=Xbf[0];}
else{
X7t=x4E.createElement('HEAD');
X7t=x4E.documentElement.appendChild(X7t);}
if(X7t){
if(dgoDOMAIN_==''){XZL=x4E.createElement('LINK');
XZL.id=XFh;
XZL.href=XMn;
XZL.type='text/css';
XZL.rel='stylesheet';
XZL=X7t.appendChild(XZL);}
else{XZL=x4E.createElement('STYLE');
XZL.id=XFh;
XZL.type='text/css';
XZL=X7t.appendChild(XZL);
var Xwg=new XMLHttpRequest();
if(Xwg.overrideMimeType){
Xwg.overrideMimeType('text/plain');}
if(!Xwg){
XC0.exec('Dhtml load error:Cannot create an XMLHTTP instance',null);
return false;}
var XwF=Xwg;
var XwJ=x9Q;
var XwE=XZL;
var XwC=XC0;
var X1K=function(){
var xAX=XwC;
if(XwF.readyState==4){
if(XwF.status==200){
var xyO=XwF.responseText;
XwF=null;
XLr(XwJ,XwE,XwC,xyO);
return true;}
else{
xAX.exec('dhtml.js insertCSS:not found. Http_request_.status='+
Xwh.status,null);
return false;}}
else{
return true;}}
Xwg.onreadystatechange=X1K;
Xwg.open('GET',XMn,true);
Xwg.send(null);
return true;}}
if(!XZL){
XC0.exec('css load error',null);
return false;}
XLr(x9Q,XZL,XC0);
return true;}
function XZN(x9Q,XMn,XKQ){
var x4E=x9Q.document;
var XZL=new Url(XMn);
var options=XKQ||0;
var x7C=new Url(x9Q.location+'');
var links=[];
var i,xOJ,url,xd2;
XZL.xc3(x7C);
XZL=XZL.toString();
links.X3i(x4E.getElementsByTagName('LINK'));
for(i=0;i<links.length;++i){
xOJ=links[i];
url=new Url(xOJ.href);
url.xc3(x7C);
if(XZL==url.toString()){
if((options & 1)&&xOJ.dgo21){
xd2=xOJ;}
else{
xOJ.parentNode.removeChild(xOJ);}}}
return(options & 2)?xd2||null:null;}
function XAc(XGT,XC0,XCt,XEr,xoK){
var xII=xoK||0;
if(!XEr){
if(!XC0(XGT,XCt,xII)){
return false;}}
var children=XGT.childNodes;
if(children){
var xgI=xII+1;
for(var i=0;i<children.length;++i){
if(!XAc(
children[i],XC0,XCt,XEr,xgI))
{
return false;}}}
if(XEr){
if(!XC0(XGT,XCt,xII)){
return false;}}
return true;}
function XJp(x9Q,XC0,XCt){
if(XSS(x9Q)){
return true;}
if(x9Q.frames&&x9Q.frames.length){
for(var i=0;i<x9Q.frames.length;++i){
if(typeof(x9Q)!='unknown'&&
typeof(x9Q.frames)!='unknown'&&
typeof(x9Q.document)!='unknown')
{if(typeof(x9Q.frames[i])!='unknown'){if(!XJp(x9Q.frames[i],XC0,XCt)){
return false;}}}}}
return XC0(x9Q,XCt);}
var xA2=512;
var xA3=1024;
//
function xA7(
x9Q,XGT,x5c,x7G,XKQ,X60)
{
var x1K=XP3(x9Q,XGT,x5c);
var xbK='';
if(!x1K){return null;}
if(XGT.dgo41){}
else{
var x6i;
if(!XGT.tagName&&XGT.history){
if(typeof(XGT.document)=='object'&&XGT.document&&
typeof(XGT.document.dgo41)=='object'&&
XGT.document.dgo41)
{
x6i=XGT.document.dgo41;}
if(typeof(XGT.document)=='object'&&XGT.document&&
typeof(XGT.document.body)=='object'&&XGT.document.body&&
typeof(XGT.document.body.dgo41)=='object'&&
XGT.document.body.dgo41)
{
x6i=XGT.document.body.dgo41;}
x6i||(x6i=new xA5);}
else if(XGT.nodeType==9){
x6i=new xA5;}
else{
x6i=new xA5;}
XGT.dgo41=x6i;}
if(!XGT.dgoc){
XGT.dgoc=x9Q;}
else{try{
x1K.dgoc.event==null;}
catch(xa8){x1K.dgoc=x9Q;}}
if(x1K!=XGT||XGT!=x1K){
x1K.dgo41||(x1K.dgo41=XGT.dgo41);
x1K.dgoc||(x1K.dgoc=x9Q);}
var xa7=true;
var X5Z='on'+x5c;
var x7T=x1K[X5Z];
x1K[X5Z]=xA6;
if(x7T&&x7T!=xA6){
try{
xa7=x1K.dgo41.XCA(x5c,x7T);}
catch(xa8){
x6i=new xA5;
XGT.dgo41=x6i;
xa7=x1K.dgo41.XCA(x5c,x7T);}}
if(xa7){
try{
xa7=x1K.dgo41.XCA(x5c,x7G,XKQ,X60);}
catch(xa8){
x6i=new xA5;
XGT.dgo41=x6i;
xa7=x1K.dgo41.XCA(x5c,x7G,XKQ,X60);}}
return xa7;}
function XL1(x9Q,XMi,
x5c,x7G,XJd)
{
var xbK='';
var XMe,xpK,target;
for(i=0;i<XMi.length;++i){
XMe=x9Q.document.getElementsByTagName(XMi[i]);
for(ii=0;ii<XMe.length;++ii){
xpK=XMe[ii];
target=((xpK.tagName||'')=='BODY'&&XSN?x9Q:xpK);
if(!xpK.id||!XJd.test(xpK.id)){
xA7(x9Q,target,x5c,x7G,
xA3);
xbK+=','+xpK.tagName+' '+xpK.id;}}}
return 'Nodes:'+xbK.substr(1)+'.';}
var xA4=2048;
function xA8(XGT,x5c,x6f,XKQ){
var x1K=XP3(XGT,XGT,x5c);
if(typeof(x1K)!='object'||!x1K||
typeof(x1K.dgo41)!='object'||!x1K.dgo41)
{return false;}
var xd2=x1K.dgo41.xb6(x5c,x6f,XKQ);
return xd2;}
function Xuh(XGT,x5c){
var x1K=XP3(XGT,XGT,x5c);
if(typeof(x1K)!='object'||!x1K||
typeof(x1K.dgo41)!='object'||!x1K.dgo41)
{return false;}
var xd2=x1K.dgo41.Xvg(x5c);
return xd2;}
function Xug(x9Q,XF2){
x9Q.dgo41=new xA5;
XF2.dgo41=new xA5;}
var XoE=256;
function xZC(XDx){
if(XDx){
XDx.returnValue=false;
if(XDx.xbr){
try{
XDx.xbr();}
catch(xa8){}}
XDx.cancelBubble=true;
if(XDx.stopPropagation){
try{
XDx.stopPropagation();}
catch(xa8){}}}
return false;}
function XP2(XDx){
if(XDx){
XDx.cancelBubble=true;
if(XDx.stopPropagation){
try{
XDx.stopPropagation();}
catch(xa8){}}}}
function X8I(XDx){
var name='';
if(XDx.shiftKey){
name+=' '+XQK('SHIFTKEY');}
if(XDx.ctrlKey){
name+=' '+XQK('CTRLKEY');}
if(XDx.altKey){
name+=' '+XQK('ALTKEY');}
for(var XCM in XPT){
if(XPT[XCM]==XDx.keyCode){
name+=' '+XCM;
return name.substr(1);}}
return '';}
var XPT={};XPT['a']=65;
XPT['alt']=18;
XPT['b']=66;
XPT['back']=8;
XPT['blank']=32;
XPT['c']=67;
XPT['capslock']=20;
XPT['ctrl']=17;
XPT['d']=68;
XPT['del']=46;
XPT['down']=40;
XPT['e']=69;
XPT['end']=35;
XPT['enter']=13;
XPT['esc']=27;
XPT['f']=70;
XPT['f1']=112;
XPT['f2']=113;
XPT['f3']=114;
XPT['f4']=115;
XPT['f5']=116;
XPT['f6']=117;
XPT['f7']=118;
XPT['f8']=119;
XPT['f9']=120;
XPT['f10']=121;
XPT['f11']=122;
XPT['f12']=123;
XPT['g']=71;
XPT['h']=72;
XPT['home']=36;
XPT['i']=73;
XPT['ins']=45;
XPT['j']=74;
XPT['k']=75;
XPT['l']=76;
XPT['left']=37;
XPT['m']=77;
XPT['n']=78;
XPT['numlock']=144;XPT['o']=79;
XPT['p']=80;
XPT['pause']=19;
XPT['pgup']=33;
XPT['pgdown']=34;
XPT['q']=81;
XPT['r']=82;
XPT['right']=39;
XPT['roll']=145;
XPT['rwin']=92;XPT['s']=83;
XPT['shift']=16;
XPT['space']=32;
XPT['start']=93;XPT['t']=84;
XPT['tab']=9;
XPT['u']=85;
XPT['up']=38;
XPT['v']=86;
XPT['w']=87;
XPT['win']=91;XPT['x']=88;
XPT['y']=89;
XPT['z']=90;
XPT['0']=48;
XPT['1']=49;
XPT['2']=50;
XPT['3']=51;
XPT['4']=52;
XPT['5']=53;
XPT['6']=54;
XPT['7']=55;
XPT['8']=56;
XPT['9']=57;
XPT['num0']=96;
XPT['num1']=97;
XPT['num2']=98;
XPT['num3']=99;
XPT['num4']=100;
XPT['num5']=101;
XPT['num6']=102;
XPT['num7']=103;
XPT['num8']=104;
XPT['num9']=105;
XPT['numlock']=144;
XPT['numdiv']=111;
XPT['numx']=106;
XPT['numminus']=109;
XPT['numplus']=107;
XPT['numcomma']=110;
function xdF(XMI,XMJ){
return(XMI.left>=XMJ.left&&XMI.left<=XMJ.right||
XMI.right>=XMJ.left&&XMI.right<=XMJ.right||
XMJ.left>=XMI.left&&XMJ.left<=XMI.right||
XMJ.right>=XMI.left&&XMJ.right<=XMI.right)&&
(XMI.top>=XMJ.top&&XMI.top<=XMJ.bottom||
XMI.bottom>=XMJ.top&&XMI.bottom<=XMJ.bottom||
XMJ.top>=XMI.top&&XMJ.top<=XMI.bottom||
XMJ.bottom>=XMI.top&&XMJ.bottom<=XMI.bottom);}
function xAE(xa6,XMX){
return(xa6.left<=XMX.x&&xa6.right>=XMX.x)&&
(xa6.top<=XMX.y&&xa6.bottom>=XMX.y);}
function xZD(XMI,XMJ){
var xd2={};
if(XMI.left>=XMJ.left&&XMI.left<=XMJ.right){
xd2.left=XMI.left;}
else if(XMJ.left>=XMI.left&&XMJ.left<=XMI.right){
xd2.left=XMJ.left;}
else{
xd2.left=Math.max(XMI.left,XMJ.left);}
if(XMI.right>=XMJ.left&&XMI.right<=XMJ.right){
xd2.right=XMI.right;}
else if(XMJ.right>=XMI.left&&XMJ.right<=XMI.right){
xd2.right=XMJ.right;}
else{
xd2.right=Math.min(XMI.right,XMJ.right);}
if(XMI.top>=XMJ.top&&XMI.top<=XMJ.bottom){
xd2.top=XMI.top;}
else if(XMJ.top>=XMI.top&&XMJ.top<=XMI.bottom){
xd2.top=XMJ.top;}
else{
xd2.top=Math.max(XMI.top,XMJ.top);}
if(XMI.bottom>=XMJ.top&&XMI.bottom<=XMJ.bottom){
xd2.bottom=XMI.bottom;}
else if(XMJ.bottom>=XMI.top&&XMJ.bottom<=XMI.bottom){
xd2.bottom=XMJ.bottom;}
else{
xd2.bottom=Math.min(XMI.bottom,XMJ.bottom);}
if(xd2.left<xd2.right&&xd2.top<xd2.bottom){
xd2.XMB=true;}
else if(xd2.left>xd2.right||xd2.top>xd2.bottom){
xd2.XMB=false;}
else{
xd2.XMB=null;}
var XML=new XAi(xd2.left,xd2.top,xd2.right,xd2.bottom);
XML.XAs();
XML.XMB=xd2.XMB;
return XML;}
function XDS(XGT,xau){
var XML=XPF(XGT);
var XME=XEA(xau);
var x=XME.x+(xau.clientLeft||0);
var y=XME.y+(xau.clientTop||0);
var XMF=new XAi(x,y,
x+xau.clientWidth-1,y+xau.clientHeight-1);
return xZD(XML,XMF);}
//
function XJR(XLi,xVG,xFR,xeS,
xLO,X9D)
{
var xd2={XML:null,scroll:[]};
var x1K,XWS;
if(typeof(XLi.length)=='number'&&XLi.length>0&&
(typeof(XLi.tagName)!='string'||
typeof(XLi.id)!='string'))
{
var XKI=XLi.XCf();
x1K=XKI.shift();
XWS=XKI;}
else{
x1K=XLi;
XWS=[];}
if(typeof(x1K)!='object'||!x1K||
x1K.tagName=='FRAMESET'||x1K.tagName=='HTML'||
(X9D&&XWS.length<=0))
{
return xd2;}
if(xFR==-1){xeS=-1;
xLO=true;}
else{
xFR=Math.min(1,xFR);
xFR=Math.max(0,xFR);
xeS=Math.min(1,xeS);
xeS=Math.max(0,xeS);}
var xHL,XML,XME,html,XjV,XjU,XMF,r,XLo,XLt,
XZC,Xj0,XjX,XjY,XjZ,target;
var xUG=xVG||null;
if(X9D){
xHL=x1K;
XML=XWS[0];}
else{
xHL=x1K.parentNode;
XML=XPF(x1K,true);}
for(var i=(X9D?1:0);i<XWS.length;++i){
XML.add(XWS[i]);}
XML.XAs();
XML.XMB=true;
var x4E=XbT(x1K);
var XjR=x4E&&x4E.compatMode&&x4E.compatMode=='CSS1Compat';
while(xHL){
if(XRC(xHL)){
if(xHL.tagName&&(xHL.tagName=='BODY'||xHL.tagName=='HTML')){
XME={x:0,y:0};
if(xHL.tagName=='BODY'&&XjR){
html=xHL.parentNode;
XjV=html.clientWidth;
XjU=html.clientHeight;
Xj0=html.scrollWidth;
XjX=html.scrollHeight;
XjY=html.scrollLeft;
XjZ=html.scrollTop;}
else{
XjV=xHL.clientWidth;
XjU=xHL.clientHeight;
Xj0=xHL.scrollWidth;
XjX=xHL.scrollHeight;
XjY=xHL.scrollLeft;
XjZ=xHL.scrollTop;}}
else{
XME=XEA(xHL,true);
XjV=xHL.clientWidth;
XjU=xHL.clientHeight;
Xj0=xHL.scrollWidth;
XjX=xHL.scrollHeight;
XjY=xHL.scrollLeft;
XjZ=xHL.scrollTop;}
XMF=new XAi(XME.x,XME.y,XME.x+XjV-1,XME.y+XjU-1);
r=xZD(XML,XMF);
if(xLO||r.width<XML.width||r.height<XML.height||
((xHL.tagName=='HTML'||xHL.tagName=='BODY')&&
(XML.left<0||XML.top<0)))
{
if(xFR==-1){if(XML.width>XjV){XLo=XjY-XME.x+XML.left;}
else if(XML.left<XME.x){XLo=XjY-XME.x+XML.left;}
else if(XML.right>XME.x+XjV-1){XLo=XjY-XME.x+XML.right-XjV;}
else{XLo=XjY;}
if(XML.height>XjU){XLt=XjZ-XME.y+XML.top;}
else if(XML.top<XME.y){XLt=XjZ-XME.y+XML.top;}
else if(XML.bottom>XME.y+XjU-1){XLt=XjZ-XME.y+XML.bottom-XjU;}
else{XLt=XjZ;}}
else{
if(XML.width>XMF.width){
XLo=XjY-XME.x+XML.left;}
else{
XLo=XjY-XME.x+XML.left-
((XjV-XML.width)*xFR);}
if(XML.height>XjU){
XLt=XjZ-XME.y+XML.top;}
else{
XLt=XjZ-XME.y+XML.top-
((XjU-XML.height)*xeS);}}
XLo=Math.floor(Math.min(Xj0-XjV,
Math.max(0,XLo))+0.5);
XLt=Math.floor(Math.min(XjX-XjU,
Math.max(0,XLt))+0.5);
if(XjY!=XLo||XjZ!=XLt){
target=(xHL.tagName=='BODY'&&XjR?xHL.parentNode:xHL);
xd2.scroll.xag({
x1K:target,xUG:xUG,left:XLo,top:XLt});}
r.left=XML.left+(XjY-XLo);
r.top=XML.top+(XjZ-XLt);
r.width=Math.min(XML.width,XjV);
r.height=Math.min(XML.height,XjU);
r.right=r.left+r.width-1;
r.bottom=r.top+r.height-1;}
XML=r;}
if(xHL.tagName=='BODY'||xHL.tagName=='HTML'){
if(xUG){
var frameElement=XPB(xUG);
XZC=xUG.parent;
while(frameElement&&
frameElement.tagName&&
frameElement.tagName!='IFRAME')
{
frameElement=XPB(XZC);
XZC=XZC.parent;}
if(frameElement&&
frameElement.tagName&&
frameElement.tagName=='IFRAME')
{
xHL=frameElement.parentNode;
var x4K=XPD(xUG,XZC);
XML.moveBy(x4K.x,x4K.y);
xUG=XZC;
x4E=xUG.document;
XjR=x4E&&
x4E.compatMode&&x4E.compatMode=='CSS1Compat';}
else{
xHL=null;}}
else{
xHL=null;}}
else{
xHL=xHL.parentNode;}}
xd2.XML=(XML.XMB?XML:null);
return xd2;}
function xYF(XLi,xVG,
xFR,xeS,xLO,X9D,XQ4,XGD)
{
var xa7=XJR(
XLi,xVG,xFR,xeS,xLO,X9D);
var s;
var xHL=(XQ4?-1:xa7.scroll.length);
for(var i=0;i<xa7.scroll.length;++i){
s=xa7.scroll[i];
if(XQ4&&
(i==xa7.scroll.length-1)&&
s.x1K.tagName=='BODY')
{
break;}
if(!XGD){
s.x1K.scrollLeft=s.left;
s.x1K.scrollTop=s.top;}
else{
var xB5=XGD/xa7.scroll.length;
var xBY=Math.max(Math.abs(s.x1K.scrollLeft-s.left),
Math.abs(s.x1K.scrollTop-s.top));
var xBZ=(s.left-s.x1K.scrollLeft)/xBY;
var xB0=(s.top-s.x1K.scrollTop)/xBY;
var xBX=xB5/xBY;
var xB4=0;
var xBV=s.x1K.scrollLeft;
var xBW=s.x1K.scrollTop;
var XGS=new Date().valueOf();
var start=XGS;
while(XGS<start+xB5){
XGS=new Date().valueOf();
if(XGS<start+xB4*xBX){
continue;}
xB4++;
xBV+=xBZ;
xBW+=xB0;
s.x1K.scrollLeft=xBV;
s.x1K.scrollTop=xBW;}
s.x1K.scrollLeft=s.left;
s.x1K.scrollTop=s.top;}}
return xa7;}
var XlO;
function XlP(XDx){
if(this.dgoE&&this.dgoF){
this.dgod=XlQ;
this.dgod();}
return true;}
function XlN(xVG,Xl4,XCw,Xl1,XlR){
var x4E=xVG.document;
var XlZ=xVG.dgoE;
var Xl0=xVG.dgoF;
var XlT=(typeof(XCw)=='number'?XCw:333);
var XlU=xVG.dgo36;
if(Xl4==-1||(Xl4==0&&(XlZ||Xl0||XlU))){
xVG.dgoE=null;
xVG.dgoF=null;
xVG.dgod=null;
xVG.dgo36=null;
XlU&&xVG.clearTimeout(XlU);
xA8(xVG,'resize',XlP,
xA4);
xA8(xVG,'scroll',XlP,
xA4);
XlZ&&(XlZ.parentNode.removeChild(XlZ));
Xl0&&(Xl0.parentNode.removeChild(Xl0));
return true;}
if((Xl4!=1&&Xl4!=0)||XlZ||Xl0||XlU){
return false;}
xVG.dgod=XlQ;
XlT
?(xVG.dgo36=xVG.setTimeout("self.dgod"+
'("'+(Xl1||'')+'","'+(XlR||'')+'");',XlT))
:xVG.dgod(Xl1,XlR);
return true;}
function XlQ(Xl1,XlR){
this.dgo36=null;
this.dgod=null;
var x4E=this.document;
var X1J=XR6(this,2);
var XLn=x4E.body;
var X8y=xaQ(XLn);
var xoL=XCx({x:0,y:0},XLn)
var XlZ,Xl0,style;
if(this.dgoE&&this.dgoF){
XlZ=this.dgoE;
Xl0=this.dgoF;}
else{
var XlS=new Url(XlR||
(XlO+'wait_bgr.png'));
var Xl3=Xl1||(XlO+'wait_hourglas.gif');
XlZ=x4E.createElement('img');
style=XlZ.style;
style.position='absolute';
style.zIndex=999999998;
style.visibility='hidden';
style.cursor='wait';
if(XRl&&!X0a){
XlZ.src=XlO+'1.gif';
style.filter=
('progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+
XlS.X9v()+'",sizingMethod="scale")');}
else{
XlZ.src=XlS;}
Xl0=x4E.createElement('img');
Xl0.src=Xl3;
style=Xl0.style;
style.position='absolute';
style.visibility='hidden';
style.zIndex=999999999;
style.cursor='wait';
XlZ=XLn.appendChild(XlZ);
Xl0=XLn.appendChild(Xl0);
this.dgoE=XlZ;
this.dgoF=Xl0;
xA7(this,this,'resize',XlP,
xA3);
xA7(this,XLn,'scroll',XlP,
xA3);}
style=XlZ.style;
style.width=X8y.x+'px';
style.height=X8y.y+'px';
style.left='0px';
style.top='0px';
style.visibility='visible';
style=Xl0.style;
style.left=(xoL.x+(X1J.x-Xl0.offsetWidth)/2)+'px';
style.top=(xoL.y+(X1J.y-Xl0.offsetHeight)/2)+'px';
style.visibility='visible';
return true;}
function XJo(x9Q,XFh){
var x4E=x9Q.document;
var x1K=x4E.getElementById(XFh);
if(!x1K){
alert('Object with id="'+XFh+
'" not found in "'+x4E.location.href+'"');
return false;}
return x1K;}
function XDT(XN3,XGT){
if(typeof(XN3)!='object'||!XN3||
typeof(XGT)!='object'||!XGT)
{
return 0;}
var i=0;
for(var XCM in XGT){
++i;
if(XN3[XCM]){
switch(XN3[XCM].tagName){
case 'BUTTON':
case 'SELECT':
case 'TEXTAREA':
XN3[XCM].value=XGT[XCM];
break;
case 'INPUT':
switch(XN3[XCM].type){
case 'checkbox':
case 'radio':
XN3[XCM].checked=(XGT[XCM]?true:false);
break;
default:
XN3[XCM].value=XGT[XCM];
break;}
default:
break;}}}
return i;}
function XOi(XGE){
var xbK=new String(XGE);
xbK=xbK.replace(/[&]/g,'&amp;');
xbK=xbK.replace(/[""]/g,'&quot;');
xbK=xbK.replace(/['']/g,'&#39;');
return xbK;}
function XJn(XGE){
var xbK=new String(XGE);
xbK=xbK.replace(/[&]/g,'&amp;');
xbK=xbK.replace(/[<]/g,'&lt;');
xbK=xbK.replace(/[>]/g,'&gt;');
xbK=xbK.replace(/[""]/g,'&quot;');
xbK=xbK.replace(/['']/g,'&#39;');
return xbK;}
function XA6(xFR){
if(!xFR)
return '(null)';
if(typeof(xFR)!='object'){
return '"'+xFR+'" ['+typeof(xFR)+']';}
if((typeof(xFR.start)=='function'||typeof(xFR.start)=='object')&&
(typeof(xFR.x7N)=='function'||typeof(xFR.x7N)=='object')||
typeof(xFR.nodeType)!='number')
{
return ''+xFR;}
if(typeof(xFR.location)=='object'&&typeof(xFR.document)=='object'){
return 'frame '+(xFR.name?xFR.name+'=':'')+xFR.location;}
var xbK;
switch(xFR.nodeType){
case 3:
xbK='"'+xFR.nodeValue+'"';
break;
case 1:
xbK='<'+xFR.tagName;
if(xFR.type)xbK+=' TYPE='+xFR.type;
if(xFR.id)xbK+=' ID='+xFR.id;
if(xFR.name)xbK+=' NAME='+xFR.name;
if(xFR.className)xbK+=' CLASS='+xFR.className;
if(xFR.src)xbK+=' SRC='+xFR.src;
if(xFR.href)xbK+=' HREF='+xFR.href;
if(xFR.value)xbK+=' VALUE='+xFR.value;
if(xFR.target)xbK+=' TARGET='+xFR.target;
xbK+='>';
break;
case 9:
xbK='[DOCUMENT]';
break;
case 8:
xbK='[COMMENT]';
break;
default:
xbK='[NODETYPE='+xFR.nodeType+']';
break;}
return xbK;}
function Xr5(XGT,X0O){
try{if(XGT){
if(XGT.style){
XGT.style.cursor='';
XGT.style.cursor=X0O;}
if(XGT.childNodes){
for(var i=0;i<XGT.childNodes.length;i++){
Xr5(XGT.childNodes[i],X0O);}}}}
catch(xa8){}}
function xAB(xAq,XMX){
if(!xAq){
return null;}
if(xAq.style){
if(xAq.style.visibility=='hidden'||
xAq.style.display=='none')
{
return null;}}
var XML=XPF(xAq.document.body,true,XWB);
if(!xAE(XML,XMX)){
return null;}
for(var n=0;n<xAq.frames.length;n++){
var xAQ=xAB(xAq.frames[n],XMX);
if(xAQ){
return xAQ;}}
return xAq;}
var xAm=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
function xAs(xAR){
for(xLI=0;xLI<xAm.length;xLI++){
if(xAR==xAm[xLI]){
return true;}}
return false;}
function xAn(XzO){
if(XzO.length!=6){
return false;}
XzO=XzO.toUpperCase();
for(xAo=0;xAo<6;xAo++){
if(!xAs(XzO.charAt(xAo))){
return false;}}
return true;}
if(self.XI7){XI7.XJB(new XIX('dhtml.js',
['js_extensions.js','callback.js','dict.js','url.js'],Xcg));}
else{
Xcg();}

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
