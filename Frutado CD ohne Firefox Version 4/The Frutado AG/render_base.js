//
//
function XLE(XCI,XCt){
if(!XCI)return;
this.XCI=XCI;
if(XCt.x6U){
this.xVG=XCt.x6U();
if(this.xVG){
this.x5x=Xkq(this.XCI,this.xVG);
this.Xhe=true;
this.x8b(this.XcN);}}
if(!this.xVG&&XCt.XEY){
this.x5x=XCt.XEY();
var xa7=this.x8b(this.XcN);
if(xa7===false){
if(this.XWh){
return;}}
else{
this.xVG=xa7;}}
if(XCt.x6G){
this.xcF=XCt.x6G();
if(this.xcF&&this.xVG){
this.xES=Xki(this.xcF,this.xVG);}}
if(!this.xcF&&XCt.XES){
this.xES=XCt.XES();}
if(XCt.Xpex){
this.x7f=XCt.Xpex()-0;
this.x7m=XCt.Xpey()-0;}
else{
this.x7f=0;this.x7m=1;}
if(XCt.Xrex){
this.x7w=XCt.Xrex()-0;
this.x7x=XCt.Xrey()-0;}
else{
this.x7w=1;
this.x7x=1;}
if(XCt.Xpdx){
this.x7b=XCt.Xpdx()-0;
this.x7c=XCt.Xpdy()-0;}
if(XCt.Xrdx){
this.x7u=XCt.Xrdx()-0;
this.x7v=XCt.Xrdy()-0;}
if(XCt.Xox){
this.x7p=XCt.Xox()-0;
this.x7q=XCt.Xoy()-0;}
if(XCt.Xw){
this.x7Q=XCt.Xw()-0;}
if(XCt.Xh){
this.xdH=XCt.Xh()-0;}
if(XCt.Xco){
this.x8h=XCt.Xco()+'';}
if(XCt.Xdu){
this.xUi=XCt.Xdu();
if(this.xUi!=null){
this.xUi-=0;}}
if(XCt.XUz){
this.XAo=XCt.XUz();
if(this.XAo==-1&&!this.XCI.XRN().XqP){
this.XAo=0;}}
this.x6K=true;}
XLE.prototype={
x6K:false
,error:'ok'
,Xty:function(){
return this.xGQ;}
,getName:function(){
return this.xfK;}
,XEY:function(){
return this.x5x;}
,XuL:function(){
return this.xES;}
,x8r:function(xVG){
this.xVG=xVG;
return true;}
,x6U:function(){
return this.xVG;}
,Xd4:function(){
return this.XfA;}
,XL0:function(){
this.xcF=null;
this.XfA=null;
this.xVG=null;
return true;}
,XcN:1
,XcO:2
,x8b:function(XKQ){
var options=XKQ||0;
var Xnr=this.xVG;
var XfQ=this.XCI.Xd6();
var XW6=XfQ.Xep(this.x5x,
XfQ.XcM |
(options & this.XcO?XfQ.XcO:0)|
(this.Xhe
?XfQ.XcO:XfQ.XEh));
this.Xhe=true;
if(XW6&&XW6.Xdp()){
var path=XW6.XFG(true);
if(path!=this.x5x){
if(!(options & this.XcO)){
this.XCI.Xpr('R Framepath correction "'+
this.x5x+'"=>"'+path+'"','warning');}
this.x5x=path;}
this.xVG=XW6.x6U();
this.XfA=XW6;}
else{
if(XW6&&XW6.Xdt()){
this.error='frame';
this.xVG=false;
this.XfA=false;}
else{
var xuQ=(this.XCI.XRN().xuQ>=2);
xuQ&&this.XCI.Xpr('R Framepath not resolvable "'+
this.x5x,'warning');
this.error='no_frame';
this.xVG=false;
this.XfA=false;}}
try{(Xnr==this.xVG)||(this.xcF=null);}
catch(xa8){
this.xcF=null;}
return this.xVG;}
,X8Z:function(){
if(this.xcF){
return this.xcF;}
if(!this.xES){
this.xcF=null;
return null;}
if(!this.XfA){
if(!this.x8b(this.XcN)){
this.xcF=null;
return null;}}
this.xcF=this.XfA.Xeo(this.xES);
return this.xcF;}
,x8q:function(xcF){
this.xcF=xcF;
return true;}
,XW1:function(x5K){
this.x7p=x5K.x;
this.x7q=x5K.y;
return{x:this.x7p,y:this.x7q};}
,XXP:function(){
return this.XWh;}
,XCI:null
,xfK:null,x5x:null,xVG:null,XfA:null,xES:null,xcF:null,x7f:null
,x7m:null
,x7w:null
,x7x:null
,x7b:null
,x7c:null
,x7u:null
,x7v:null
,x7p:null
,x7q:null
,x7Q:null
,xdH:null
,x8h:''
,xUi:null
,XAo:null
,XWh:true 
,XfT:'0' 
,Xhe:false }
function RenderBase_evalParentDisplay(XGR){
var xHL=XGR.parentNode;
while(xHL&&xHL.nodeType==1){
if(xHL.currentStyle.display=='none'){
return 'none';}
xHL=(xHL==xHL.parentNode?null:xHL.parentNode);}
return XGR.currentStyle.display;}
function RenderBase_evalParentVisibility(XGR){
var xHL=XGR.parentNode;
while(xHL&&xHL.nodeType==1){
if(xHL.currentStyle.visibility=='hidden'){
return 'hidden';}
xHL=(xHL==xHL.parentNode?null:xHL.parentNode);}
return XGR.currentStyle.visibility;}
function XLD(XCI,XCt){
if(!XCI)return;
XLE.XHO(this,XCI,XCt);
if(XCI.XFI_('moz','1.0')&&
!XCI.XFI_('moz','1.7'))
{
this.X9V=true;}
var dgo=XCI.Xn5();
if(dgo&&!dgo.RenderBase_evalParentDisplay){
dgo.RenderBase_evalParentDisplay=RenderBase_evalParentDisplay;
dgo.RenderBase_evalParentVisibility=RenderBase_evalParentVisibility;}}
XLD.prototype=new XLE;
XLD.prototype.X9V=false;
XLD.prototype.XnS=false;
XLD.prototype.xmC=function(XCZ,XCY){
if(this.XCI&&this.XCI.XlH){this.XCI.XlH.xb1();}
var x2H=null;
if(this.XWq){
x2H={};
if(!this.x6O(x2H)){
return false;}}
var xd2=this.x4f(x2H,XCZ,XCY);
this.xAt=false;
return xd2;}
XLD.prototype.XMK=function(XL9,XCZ,XCY){
var x2H=null;
if(this.XWq){
x2H={};
if(!this.x6O(x2H)){
x2H=null;}}
return this.x9K(x2H,XL9,XCZ,XCY);}
XLD.prototype.onscroll=function(){
return this.xb1();}
XLD.prototype.xb1=function(){
if(this.XCI&&this.XCI.XlH){this.XCI.XlH.xb1();}
var xuQ=(this.XCI.XRN().xuQ>=2);
if(this.Xps){
xuQ&&this.XCI.Xpr(
'R "'+this.getName()+'":refresh inhibited','warning');
return false;}
xuQ&&this.XCI.Xpr('R "'+this.getName()+'" refresh');
var x2H=null;
if(this.XWq){
x2H={};
if(!this.x6O(x2H)){
return false;}}
var xd2=this.x4o(x2H);
xuQ&&this.XCI.Xpr('R "'+this.getName()+'" refresh done:'+
xd2,xd2?'success':'error');
return xd2;}
XLD.prototype.x9T=function(XVK){
this.XnS=true;
return this.x4r(XVK);}
Xji=[
/(<img[^>]*src=")([^"][^"]*)("[^>]*>)/i
,/(<img[^>]*src=')([^'][^']*)('[^>]*>)/i
,/(<a[^>]*href=")([^"][^"]*)("[^>]*>)/i
,/(<a[^>]*href=')([^'][^']*)('[^>]*>)/i
,/(style="[^"]*url\()([^\)]*)(\)[^"]*")/i
,/(style='[^']*url\()([^\)]*)(\)[^']*')/i
];
Xjg=
/(<a[^>]*)(href='javascript:)([^'][^']*'[^>]*>)/gi;
Xjh=
/(<a[^>]*)(href="javascript:)([^"][^"]*"[^>]*>)/gi;
XLD.prototype.XCO=function(xyO){
var src=xyO;
var XTa=this.XCI.Xu();
var xuQ=(this.XCI.XRN().xuQ>=2);
var Xov=(this.XCI.XRN().xuQ>=3);
var xAc,xRM,match;
for(var i=0;i<Xji.length;++i){
xAc='';
xRM=Xji[i];
match=xRM.exec(src);
while(match){
if(match[2]&&match[2]=='none'&&
match[1]&&match[1].substr(0,6)=='style=')
{
xAc+=(src.substr(0,match.index)+
(match[1]||'')+match[2]+(match[3]||''));}
else{
xAc+=(src.substr(0,match.index)+
(match[1]||'')+
(match[2]?XTa.XMZ(match[2]):'')+
(match[3]||''));}
src=src.substr(match.index+match[0].length);
match=xRM.exec(src);}
xAc+=src;
src=xAc;}
var XW6=this.Xd4();
if(XW6&&XW6.XkK){
xAc=src.replace(Xjg,'$1 style='+
'"color:blue;text-decoration:underline;cursor:'+
X2F+';" onclick='+"'"+'$3');
xAc=xAc.replace(Xjh,'$1 style='+
'"color:blue;text-decoration:underline;cursor:'+
X2F+';" onclick='+'"'+'$3');
(xuQ&&src!=xAc)&&this.XCI.Xpr(
'R POPUP subst href=javascript:"'+src+'"==>"'+xAc+'"');}
Xov&&this.XCI.Xpr('R subst result "'+xAc+'"');
return xAc;}
XLD.prototype.XUt=function(XCY){
if(this.xVG.dgoA){
return false;}
var xuQ=(this.XCI.XRN().xuQ>=2);
this.xVG.dgo=this.XCI.Xn5();
this.Xa5=new XAZ(this,XCY
);
var url=this.XCI.Xu().xNI('widgets/bubble2/xbrowser.css');
xuQ&&this.XCI.Xpr(
'R "'+this.getName()+'" load std css "'+url+'"');
var dgoDOMAIN='';
if(XSN&&this.XCI.XRN().domain&&
this.xVG.location.protocol.substr(0,4)=='http'){
dgoDOMAIN=this.XCI.XRN().domain;}
XF5(this.xVG,'dgoCSS',url.toString(),
new XAZ(this,this.Xbi
),dgoDOMAIN);
return true;}
XLD.prototype.Xbi=function(Xbj){
var xuQ=(this.XCI.XRN().xuQ>=2);
xuQ&&this.XCI.Xpr(
'R "'+this.getName()+'" load std css cb"');
if(this.XCI.XFV()==XOc||this.XnS){
xuQ&&this.XCI.Xpr(
'R "'+this.getName()+'" load css cb came back too late!"');
return;}
var XM6=(!this.xVG);
this.x8b();
if(this.xVG){
if(!Xbj){
this.xVG.dgoA=true;
this.Xa5.exec('css load error '+this.XfA);
XM6&&this.XL0();
return;}
var XZM=this.XCI.XRN().XZL;
if(XZM){
XZM=this.XCI.Xu().xGk(XZM);
xuQ&&this.XCI.Xpr(
'R "'+this.getName()+'" load custom css "'+XZM+'"');
this.x8b();
var dgoDOMAIN='';
if(XSN&&this.XCI.XRN().domain&&
this.xVG.location.protocol.substr(0,4)=='http'){
dgoDOMAIN=this.XCI.XRN().domain;}
XF5(this.xVG,'dgoCustomCSS',XZM.toString(),
new XAZ(this,this.Xbg
),dgoDOMAIN);}
else{
this.x8b();
if(this.xVG){
this.xVG.dgoA=true;
this.Xa5.exec('css std loaded '+this.XfA);}
else{this.Xa5.exec('css std not loaded,no frame->'+this.XfA);}}}
else{this.Xa5.exec('css std not loaded,no frame->'+this.XfA);}
XM6&&this.XL0();}
XLD.prototype.Xbg=function(Xbj){
var xuQ=(this.XCI.XRN().xuQ>=2);
xuQ&&this.XCI.Xpr(
'R "'+this.getName()+'" load custom css cb"');
if(this.XCI.XFV()==XOc||this.XnS){
xuQ&&this.XCI.Xpr(
'R "'+this.getName()+'" load custom css cb came back too late!"');
return;}
var XM6=(!this.xVG);
this.x8b();
this.xVG.dgoA=true;
this.Xa5.exec('css std+cust loaded '+this.XfA);
this.Xa5=null;
XM6&&this.XL0();}
XLD.prototype.XXQ=function(){
return this.XWq;}
XLD.prototype.XXR=function(){
return this.XWs;}
XLD.prototype.x4X=function(){
return this.XDJ;}
XLD.prototype.XXS=function(){
return this.XWr;}
XLD.prototype.Xpc=function(X0J){
var xd2=this.Xpb;
this.Xpb=false;
return xd2;}
XLD.prototype.Xpu=function(xtg){
var XLw=this.Xps;
this.Xps=xtg;
return XLw;}
XLD.prototype.XoB=function(XIH){
this.XDJ=Math.max(XIH,this.XDJ);
return this.XDJ;}
XLD.prototype.Xpp=function(X0J){
return(this.Xpb=X0J);}
XLD.prototype.toString=function(){
var xbK='';
with(this){
xbK+=',fp:'+this.x5x+',ep:'+this.xES+
',p:'+x7f+','+x7m+
',r:'+x7w+','+x7x+
',pd:'+x7b+','+x7c+
',rd:'+x7u+','+x7v+
',off:'+x7p+','+x7q+
',size:'+x7Q+'x'+xdH+
',color:'+x8h+',dur:'+xUi;}
return 'RenderBase={'+this.xfK+xbK+'}';}
XLD.prototype.xAt=true;
XLD.prototype.xCx=true;
XLD.prototype.xCy=true;
XLD.prototype.Xn3=false;
XLD.prototype.Xps=false;
XLD.prototype.XWq=true;XLD.prototype.XWr=true;XLD.prototype.Xpb=false;XLD.prototype.XWs=true;XLD.prototype.XDJ=0;
XLD.prototype.Xa5=null;
var dgov=';P;DIV;TD;TH;CENTER;HR;PRE;BODY;'+
'H1;H2;H3;H4;H5;H6;LI;DD;DIR;OL;UL;DL;BLOCKQUOTE;INS;DEL;'+
'ISINDEX;NOSCRIPT;HTML;FRAME;FRAMESET;';
function XLH(XGR){
var xHL=XGR;
if(xHL&&xHL.tagName=='BODY'){
return xHL;}
while(xHL&&xHL!=xHL.parentNode){
xHL=xHL.parentNode;
if(xHL&&dgov.indexOf(';'+xHL.tagName+';')>=0){
return xHL;}}
return null;}
XLD.prototype.x6O=function(x5g){
if(!this.x8b()){
return false;}
if(!this.XCI.x6b().XTo(this.XfA)){
return false;}
var XLk=this.XCI;
x5g.xbF=this.X8Z();
if(!x5g.xbF){
x5g.x5W=null;
x5g.position=null;
XLk.Xpr('R "'+this.xfK+
'" No element for '+this.xES+' in frame '+
this.xVG.name+'="'+this.xVG.location.href+'"',
'error');
return false;}
var x6L=[];
var xHL=x5g.xbF;
while(xHL&&xHL.nodeType==1){
xYD(xHL,['display','visibility'],x6L);
if(x6L[0]=='none'){
x5g.display=false;
return true;}
if(x6L[1]=='none'){
x5g.visibility=false;
return true;}
xHL=(xHL==xHL.parentNode?null:xHL.parentNode);}
x5g.display=true;
x5g.visibility=true;
if(XLk.XFI_('moz','1')&&
!XLk.XFI_('moz','1.4')||
XLk.XFI_('ie','5')&&
!XLk.XFI_('ie','5.5'))
{
x5g.x5W=xVD(x5g.xbF);
x5g.position='absolute';
this.XoB(1);}
else if(XLk.XFI_('ie','5.5')&&
XLk.XRN().XoM.cfg_useIeDynProps)
{
x5g.x5W=xVD(x5g.xbF);
x5g.position='absolute';
this.Xn3=true;}
else{
x6L=[];
xYD(x5g.xbF,['position'],x6L);
if(x6L[0]=='absolute'){
x5g.position='absolute';}
else{
x5g.position=(this.XCI.XFI_('moz','1')?
'relative':'absolute');}
if(!(x5g.x5W=XLH(x5g.xbF))){
x5g.position=null;
this.XCI.Xpr('R "'+this.xfK+
'" No block parent element for '+this.xES+' in frame '+
this.xVG.name+'="'+this.xVG.location.href+'"',
'error');
return false;}}
if(this.xsF&&this.xsF.xFO){var XvX=(this.xsF.xFO.XvX==true);}
else{
if(this.Xsy){XvX=(this.Xsy().XvX==true);}
else{
XvX=false;}}
x5g.x7d=XEA(x5g.xbF);
if((x5g.xbF.tagName=='BODY')&&
(this.XCI.XRN().Xbh & 4096)&&
!XvX)
{x5g.x8t=xaQ(x5g.xbF);}
else{
x5g.x8t=xaQ(x5g.xbF,X8x);}
if((this.XCI.XRN().Xbh & 1)==1){
if(x5g.xbF.tagName=='BODY'){
if(this.x7f>1||this.x7m>1){if(this.XCI.Xvz){this.x7f=0.5;this.x7m=0.5;
this.x7b=0.5;
this.x7c=0.5;}
else if((this.XCI.XRN().Xbh & 4096)==4096){
var x8t=xaQ(x5g.xbF,X8x);
if((x8t.y<x5g.x8t.y*this.x7m)||
(x8t.x<x5g.x8t.x*this.x7f))
{
x5g.x8t=x8t;}}
else{}}}}
return true;}
XLD.prototype.XEL=function(x5g){
var xuQ=(this.XCI.XRN().xuQ>=2);
var xbK;
xuQ&&(xbK='pos '+this.x7f+','+this.x7m+
';size '+x5g.x8t.x+'x'+x5g.x8t.y+
';off '+this.x7p+','+this.x7q);
this.x7p=x5g.x8t.x*this.x7f+(this.x7p||0);
this.x7q=x5g.x8t.y*this.x7m+(this.x7q||0);
this.x7f=0;
this.x7m=0;
this.x7b=0;
this.x7c=0;
xuQ&&this.XCI.Xpr('R transformed:'+
xbK+'==>'+this.x7p+','+this.x7q);
return true;}
XLD.prototype.XL6=function(
XkR,xau,XFh,XGX,XCY,XCt)
{
var xbK,x3E;
var x4E=this.xVG.document;
if(!(x3E=x4E.createElement(XkR))){
return false;}
var xa7=true;
x3E.id=XFh;
XGX&&(x3E.className=XGX);
XCY&&(xa7=XCY.call(this,x3E,XCt,xau));
if(xa7&&!XCY){
return xau.appendChild(x3E)||false;}
return xa7;}
XLD.prototype.x9X=function(xbI,XCt,xau){
var style=xbI.style;
style.position='relative';
style.left='0px';
style.top='0px';
style.width='0px';
style.height='0px';
style.borderWidth='0px';
style.margin='0px';
style.padding='0px';
style.lineHeight='1px';
return xau.appendChild(xbI);}
XLD.prototype.XL7=function(x5g,xfK){
if(x5g.position=='relative'){
var name=xfK||this.xfK;
var x5y=this.XL6(
'div',x5g.x5W,name,'dgoXXframe',this.x9X);
if(!x5y||x5y.tagName!='DIV'){
return false;}
return x5y;}
return x5g.x5W;}
XLD.prototype.x8o=function(XFh,x5r){
var xUG=this.x8b(this.XcN);
var xbK='R searchDOM_('+XFh+')';
if(xUG){
var x4E=xUG.document;
var x1K=x4E.getElementById(XFh);
if(!x1K&&!x5r){
this.XCI.Xpr(xbK,'error');}
return x1K;}
if(!x5r){
this.XCI.Xpr(xbK+':no frame','error');}
return false;}
XLD.prototype.x8S=function(XFh,x5r){
var x3E=this.x8o(XFh,x5r);
if(x3E){
return !(!(x3E.parentNode.removeChild(x3E)));}
return(x3E===null?true:false);}
XLD.prototype.XJc=/^dgoRender/;
XLD.prototype.XLA=function(XfA){
var Xno=0;
if(Xno=this.x4X()){
var xuQ=this.XCI.XRN().xuQ-0;
var xUG=XfA.x6U();
var X2A=this.XCI.X1O(xUG);
var XOX=XTF();
var frames=[];
var elements=[];
var element=this.X8Z();
var xHL=(element.tagName=='BODY'?element:element.parentNode);
var frameElement,xbK;
while(xHL&&xHL.nodeType==1){
if(XOX.search(';'+xHL.tagName+';')>=0){
frames.xag(xUG);
elements.xag(xHL);
xuQ>=3&&(xbK+=xHL.tagName+' '+(xHL.id||xHL.name)+';');}
if(xHL.parentNode==null||xHL.parentNode==xHL||xHL.parentNode.nodeType!=1){
if(Xno>=3&&xUG!=X2A){
frameElement=XPB(xUG);
if(!frameElement||
(frameElement.tagName!='IFRAME'&&
frameElement.tagName!='FRAME')){
xHL=null;}
else{
xHL=frameElement;
xUG=xUG.parent;
xuQ>=3&&(xbK+=
'+IFRAME "'+xUG.name+'"='+xUG.location+':');}}
else{
xHL=null;}}
else{
xHL=xHL.parentNode;}}
if(Xno>=3){
var Xnz=XAp(xUG);
var XDm;
for(var ii=0;ii<Xnz.length;++ii){
XDm=Xnz[ii];
XW6=XoC(XDm);
if(XW6&&
XW6.Xty()!='XXX'&&
XW6.Xty()!='DGO'&&
XW6.Xty()!='FRAMESET'&&
XW6.Xdq())
{
if(typeof(XDm.document)=='object'&&
typeof(XDm.document.body)=='object'&&
XDm.document.body)
{
xuQ>=3&&(xbK+=
'"'+XDm.name+'"='+XDm.location+';');
frames.xag(XDm);
elements.xag(XDm.document.body);}}}}
var Xnn=null;
for(var i=0;i<elements.length;++i){
element=elements[i];
if(!element.id||element.id.search(this.XJc)<0){
xuQ>=3&&(xbK+=(Xnn==frames[i]
?' ':' in frame "'+frames[i].name+'"='
+frames[i].location+':')+
element.tagName+' '+(element.id||element.name)+';');
xA7(frames[i],element,'scroll',
XM3,
xA3);
Xnn=frames[i];}}
xuQ>=3&&this.XCI.Xpr('R scroll handlers added for "'+
this.xfK+'":'+xbK);}
return true;}
XLD.prototype.X9E=function(X9H){
var XM6=(!this.xcF);
var xbF=this.X8Z();
if(!xbF){
return false;}
var xd2,xbK;
var tagName=xbF.tagName;
if(tagName=='INPUT'||tagName=='TEXTAREA'||
tagName=='SELECT'||tagName=='OPTION'||
tagName=='SPAN'||tagName=='A')
{
xd2=true;
xbK='form tag';}
else if(!X9H&&(tagName=='BODY'||tagName=='FRAMESET')){
xd2=false;
xbK='body';}
else{
var xUG=this.x6U();
var X8z=(X9H
?{x:X9H.width,y:X9H.height}:xaQ(xbF));
var X8y=xaQ(xUG.document.body,X8x);
//
if(X8y.x<=150||X8y.y<=100){
xd2=true;
xbK='small frame';}
else if(X8z.x>X8y.x*0.667&&X8z.y>X8y.y*0.8||
X8z.x>X8y.x||
X8z.y>X8y.y)
{
xd2=false;
xbK='large element:'+X8z.x+','+X8z.y;}
else{
xd2=true;
xbK='small element:'+X8z.x+','+X8z.y;}}
if(this.XCI.XRN().xuQ>=3){
this.XCI.Xpr('R isAutoScrollableElement_:'+xd2+
' ['+xbK+']','info');}
XM6&&(this.XL0());
return xd2;}
XLD.prototype.xHF=function(XKo,X9C){
if(this.xAt){
if(this.XAo!=0){
var c=this.XCI.XRN();
var XQ4=this.XCI.Xvz;
var XGD=0;
if(this.XCI.Xvz&&this.XCI.Xjt().TAPI){
XGD=250;}
var xa7=(this.XAo>=2
?xYF(XKo,this.xVG,
c.XMQ,c.XMR,true,X9C,XQ4,XGD)
:xYF(XKo,this.xVG,
-1,-1,false,X9C,XQ4,XGD));
if(c.xuQ>=3){
var xbK='';
var scroll;
for(var i=0;i<xa7.scroll.length;++i){
scroll=xa7.scroll[i];
xbK+=';'+' '+i+':'+' '+scroll.left+','+
scroll.top+' '+XA6(scroll.x1K);}
var XYB='';
if(!X9C){
XYB='el'+':'+XPF(
XKo.length>=1?XKo[0]:XKo,
true)+';';}
for(i=1;i<XKo.length;++i){
XYB+='rect'+i+':'+XKo[i]+';';}
this.XCI.Xpr('R scrollIntoView_ ['+
XYB+'] '+xbK.substr(2));}
if(xa7&&xa7.scroll&&xa7.scroll.length>0){
this.XTT=true;
this.XCI.x6b().XpK(this);}}}
return true;}
XLD.prototype.x8s=function(XGR,x6m,XtQ,Xsw){
var Xrz=XtQ==1?'.gif':'.png';
if(!XtQ&&this.XCI.XFI_('ie','5.5')&&
!this.XCI.XFI_('ie','7.0')){
if(typeof(Xsw)!='string'){
Xsw='scale';}
XGR.style.filter=
'progid:DXImageTransform.Microsoft.AlphaImageLoader'+
'(src='+
"'"+
x6m+Xrz+
"'"+
',sizingMethod='+
"'"+
Xsw+
"'"+
');';}
else{
XGR.style.backgroundImage='url('+
"'"+
x6m+Xrz+
"'"+
')';}
XGR.style.backgroundColor="transparent";
return true;}
XLD.prototype.x9Y=function(x6m,XtQ,Xsw){
var html;
var Xrz=this.Xzw?'.bmp':(XtQ==1?'.gif':'.png');
if(!this.Xzw&&!XtQ&&this.XCI.XFI_('ie','5.5')&&
!this.XCI.XFI_('ie','7.0')){
if(typeof(Xsw)!='string'){
Xsw='scale';}
html='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader'+
'(src='+
"'"+
x6m+Xrz+
"'"+
',sizingMethod='+
"'"+
Xsw+
"'"+
');'+
'background-color:transparent;';}
else{
html='background-image:url('+
"'"+
x6m+Xrz+
"'"+
');'+
'background-color:transparent;';}
return html;}
XLD.prototype.x4f=function(){
var xbK='Cannot render:no derived do_apply_()';
this.XCI.Xpr('R '+xbK,'error');
this.error=xbK;
return false;}
XLD.prototype.x9K=function(x5g,XL9,XCZ,XCY){
if(this.XCI.XRN().xuQ>=3){
this.XCI.Xpr('R "'+this.getName()+'" do_reapply()');}
var XMN=this.XCI.x6b();
XMN.remove(this,true);
if(XL9.xmC(XCZ,XCY)){
if(XL9.XXR()){
XMN.add(XL9);}}
else{
this.XCI.Xpr('R "'+this.getName()+'" apply(new="'+
XL9.getName()+'")failure','error');
return false;}
if(this.XCI.XRN().xuQ>=3){
this.XCI.Xpr('R "'+this.getName()+'" do_reapply()done',
'success');}
return true;}
XLD.prototype.x4o=function(){
var xbK='Cannot render:no derived do_refresh_()';
this.XCI.Xpr('R '+xbK,'error');
this.error=xbK;
return false;}
XLD.prototype.x4r=function(){
var xbK='Cannot stop rendering:no derived do_unapply_()';
this.XCI.Xpr('R '+xbK,'error');
this.error=xbK;
return false;}
if(self.XI7){XI7.XJB(new XIX('../render_base.js',
[ '../window_container.js' ]));}

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
