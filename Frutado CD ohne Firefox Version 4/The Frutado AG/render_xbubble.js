//
//
function XVQ(X15,XCI,xsF){
if(!X15)return;
if(typeof(X15)=='object'){var bubble=X15;
this.x6K=false;
this.error='cloning';
var XJb=bubble.x6K;
var XGx=bubble.error;
bubble.x6K=false;
bubble.error='cloning';
XTd(bubble,this);
bubble.x6K=XJb;
bubble.error=XGx;
this.x6K=true;
this.error='cloned';
return;}
this.xfK=X15;
var event,duration;
if(xsF.Xeti()==XAu){
this.X06=XCI.X0X().X0Y();
event=new xLh([
xsF.Xtm()
,xsF.getName()
,xsF.Xdu()
,xsF.XUz()]
,xsF.XEY()
,xsF.XES()
,xsF.X02(),null 
,xsF.X01()
,{cfg_xframe:true,cfg_cover:false,cfg_naked:true,cfg_initialSound:'click.wav'}
,'C'
,XCI.X0X().X0Z(XCI)
,true,0,0,false);
duration=xsF.Xdu();
this.xyi=xsF;}
else if(xsF.Xeti()==XAm){
event=new xLh([
xsF.Xtm()
,xsF.getName()
,xsF.Xdu()
,xsF.XUz()]
,xsF.XEY()
,xsF.XES()
,{x:0.5,y:1},null 
,{x:0,y:0}
,{cfg_xframe:true,cfg_cover:true,cfg_naked:true,cfg_initialSound:'blip.wav'}
,'S' 
,'' 
,true,0,0,false);
duration=xsF.Xdu();
this.XZz=xsF.Xs()-0;
this.XTJ=xsF.Xsh();
this.X0T=xsF;}
else{
duration=null;
event=xsF;}
XLD.XHO(this,XCI,event);
this.Xpp(true);
var style=event.Xsy();
if(xsF.Xeti()==XAu){
style.XuQ='mouse.wav';
style.closable=false;
style.minimizable=false;
style.minimized=false;
style.movable=false;
style.cover=false;
style.autoplace=false;
style.Xta=false;
this.xBw=(this.xyi.x7p||0);
this.xBx=(this.xyi.x7q||0);}
else if(xsF.Xeti()==XAm){
style.XuQ='blip.wav';
style.closable=false;
style.minimizable=false;
style.minimized=false;
style.movable=false;
style.cover=true;
style.autoplace=false;
style.Xta=false;
this.xBw=(this.X0T.x7p||0);
this.xBx=(this.X0T.x7q||0);}
else{
this.x8b();
var Xwy=this.x6U();
if(Xwy){
Xwy=this.XCI.XvR(Xwy);
if(Xwy.document.body.tagName!='BODY'){
style.closable=false;
style.minimizable=false;
style.minimized=false;
style.movable=false;
style.cover=true;
style.Xta=false;
style.autoplace=false;}
		 else{
style.autoplace=this.XCI.XRN().autoplace;
style.Xta=this.XCI.XRN().xbubble_autohide;
		}}
this.xBw=(this.x7p||0);
this.xBx=(this.x7q||0);}
this.xGL=xBD(
(''+event.Xo()).toLowerCase());
this.XJg=this.xGL;
this.XKX=this.x7f;
this.XKY=this.x7m;
style.XLx=true;
this.XWE=true;
this.xUi=duration;
this.xsF=event;
this.XuR=1;}
function XVR(){
XVQ.prototype=new XLD;
XVQ.prototype.XMc=true;
XVQ.prototype.XWE=true;
XVQ.prototype.xsF=null;XVQ.prototype.XWt=null;XVQ.prototype.xyi=null;XVQ.prototype.X0T=null;
XVQ.prototype.xUi=0;XVQ.prototype.XXa=false;
XVQ.prototype.XZz=null;XVQ.prototype.XTJ=null;
XVQ.prototype.XU2=null;
XVQ.prototype.Xly=0;
XVQ.prototype.X06=null;
XVQ.prototype.X0d=null;
XVQ.prototype.X0e=null;
XVQ.prototype.XZu=null;
XVQ.prototype.XVZ=null;XVQ.prototype.XV2=null;XVQ.prototype.XWV=null;XVQ.prototype.XYb=null;XVQ.prototype.XZp=false;
XVQ.prototype.x4o=function(x5g){
var xd2;
this.XuR++;
if(!this.XVZ){
return false;}
var XVm=this.Xd4().XdU();
XVm.Xeb();
var x4K=this.XWz(XVm,
this.xsF.XVs(),
this.XWt.XVs());
this.Xzc=x4K;
if(!this.XCI.Xvz){
this.XVZ.XW1(x4K);}
xd2=this.XVZ.xb1();
if(this.XCI.XRN().xuQ>=1){
this.XCI.Xpr('RXB do_refresh_('+this.XU2+
')on '+XA6(this.xcF)+
';pos='+(x5g.x7d?x5g.x7d.x:0)+','+
(x5g.x7d?x5g.x7d.y:0)+
';remote bubble 1:'+this.XVZ+
';new Offset:'+x4K.x+','+x4K.y,
(xd2?'success':'error'));}
this.XXF(this.XVZ,1);
this.XWV=this.XV2;
if(this.XCI.XRN().XTw){
xd2=this.XWn(x5g);}
else{
try{
xd2=this.XWn(x5g);}
catch(xa8){var xaw=new x6C(xa8);
if(this.XCI.XRN().xuQ>=1){
this.XCI.Xpr('RXB Exception '+xaw,'error');}}}
var bubble;
var XMN=this.XCI.x6b();
for(var path in this.XWV){
if(this.XWV[path]){
bubble=this.XWV[path];
this.XXF(bubble,-1);
if(XMN.remove(bubble,true)){
if(this.XCI.XRN().xuQ>=1){
this.XCI.Xpr(
'RXB removed '+bubble.getName(),'success');}}
else{
if(this.XCI.XRN().xuQ>=1){
this.XCI.Xpr('RXB Error removing '+bubble,'error');}}
this.XWV[path]=null;}}
this.XVZ.XL0();
this.XWV={};
return xd2;}
XVQ.prototype.x4f=function(x5g){
this.xsF.XWZ(this.XEY());
this.xsF.XWX(this.XuL());
var xa7=this.XbP(x5g);
if(xa7==-1){
return true;}
if(!xa7||!this.XVZ.x6K){
if(this.XCI.XRN().xuQ>=1){
this.XCI.Xpr('RXB do_apply_('+this.xfK+
'):Pre:'+xa7+'/ok:'+this.XVZ.x6K+
'/err:'+this.XVZ.error,'error');}
return false;}
this.Xpu(true);
xa7=this.XVZ.xmC(this,this.XbO);
if(xa7&&this.XXa){
this.XCI.xTN(XAA);}
return xa7;}
XVQ.prototype.XYi=function(x5g){
if(!this.XAo){
return false;}
//
//
//
//
//
//
var XWA=this.XCI.XRN();
var X9B=
!(this.xsF.Xsy().naked||
this.xyi||
this.X0T||
this.xB3
)&&
((this.xsF.Xo().toLowerCase()=='c'||
!this.xsF.Xspi()||
(this.XAo==-1&&!this.X9E())));
var XYe,XYk;
if(!X9B){
var x7d=XCi(
x5g.x7d,this.xVG.document.body);
XYe=new XAi(x7d.x,x7d.y,
x7d.x+x5g.x8t.x-1,x7d.y+x5g.x8t.y-1);
XYk=XCF(this.xVG,
XYe,this.xVG.document.body,
XWA.xuQ>=2?XAU:null);}
var XYd=this.XVZ.XVv(true)[0];
var Xwy=this.XCI.XvR(this.x6U());
if(Xwy.document.body.tagName=='BODY'){
var X2A=Xwy;}
else{
var X2A=this.XCI.X1O(this.xVG);}
var XYj=
(this.xsF.Xsy().naked||
this.xyi||
this.X0T||
this.xB3?
null
:XCF(X2A,
XYd,X2A.document.body,
XWA.xuQ>=2?XAU:null));
if(X9B&&!XYj){
if(this.XCI.XRN().xuQ>=1){
this.XCI.Xpr(
'RXB handleAutoscroll_():visible:bubble '+XYd);}
return false;}
if(!XYk&&!XYj){
if(this.XCI.XRN().xuQ>=1){
this.XCI.Xpr('RXB handleAutoscroll_():visible:el '+
XYe+',bubble '+XYd);}
return false;}
var XYl=(X9B
?{x:XWA.XMQ,y:XWA.XMR}
:this.XYh());
var XQ4=this.XCI.Xvz;
var xa7=(X9B
?xYF([ this.xcF,XYd ],
X2A,XYl.x,XYl.y,true,true,XQ4)
:xYF(
this.xcF,this.xVG,XYl.x,XYl.y,true,XQ4));
this.Xd4().Xeb();
if(xa7&&xa7.scroll&&xa7.scroll.length>0){
if(this.XCI.Xvz){
var XLn=this.XCI.Xjt().Xjt().document.getElementById('bd');
XLn.style.visibility='visible';
XLn.style.visibility='';}
this.XCI.x6b().XpK(this);}
return true;}
XVQ.prototype.XbP=function(x5g){
var xuQ=(this.XCI.XRN().xuQ>=2);
xuQ&&this.XCI.Xpr('RXB do_apply_ '+this);
if(x5g.xbF.tagName=='BODY'){
this.XEL(x5g);
this.xsF.XW1({x:this.x7p,y:this.x7q});
this.xsF.XW2({x:this.x7b,y:this.x7c});
this.xsF.XW3({x:this.x7f,y:this.x7m});
if(this.xyi){
this.xyi.XW1({x:this.x7p,y:this.x7q});
this.xyi.XW2({x:this.x7b,
y:this.x7c});
this.xyi.XW3({x:this.x7f,y:this.x7m});}
else if(this.X0T){
this.X0T.XW1({x:this.x7p,y:this.x7q});
this.X0T.XW2({x:this.x7b,
y:this.x7c});
this.X0T.XW3({x:this.x7f,
y:this.x7m});}}
var XfQ=this.XCI.Xd6();
var XYc=this.xsF.XVz();
var XVm=XfQ.XdV(XYc);
XVm.Xeb();
this.XCI.x6b().X8E(this);
if(this.xyi){
this.X03(x5g,XVm);}
else if(this.X0T){
if(0==this.XZs(x5g,XVm)){
return-1;}}
this.XWt={};
XTd(this.xsF,this.XWt);
var xUG=this.x6U();
var XW0=[];var XWx=[];
var XjS=null;
var Xwy=this.XCI.XvR(this.x6U());
if(Xwy.document.body.tagName=='BODY'){
XjS=Xwy;}
else{
XjS=this.XCI.X1O(xUG);}
var XjQ=XjS.document.body.tagName;
if(XjQ!='BODY'&&XjQ!='FRAMESET'){
if(this.XCI.XRN().xuQ>=1){
xbK='top must be BODY or FRAMESET:"'+XjQ+'"';
this.XCI.Xpr('RXB do_apply_():'+xbK,'error');}
return false;}
var xHL=xUG;
var path=this.xsF.XEY();
var XW6,type,x9W;
var xbK='Top:'+XjQ+';Checking:'+path;
if(Xwy.document.body.tagName=='BODY'){
while(xHL&&xHL!=xHL.parent){
xHL=xHL.parent;
if(path==''){xHL=false;}
if(xHL){
path=path.substr(0,path.lastIndexOf(':'));
XW0[XW0.length]=xHL;
XWx[XWx.length]=path;
xbK+=','+path;
if(XW6=XfQ.Xep(path)){
type=XW6.Xty();
(!XW6.XY9()&&
(type=='BODY'||type=='FRAME'))&&
(xUG=xHL);
x9W=this.XCI.x6b().XTo(XW6);
x9W&&x9W.add(this);}
else{
xbK+=' ERROR resolving "'+path+'";';}
xuQ&&(xbK+=' '+(XW6||path)+';');}
else{
xbK+='-';}}
this.XYb=XWx;
var xPG=this.xsF.XEY();
var X1I=this.xsF.XVs();
var X1H,x4K;
xbK+=';Parents:';
if(this.XCI.Xvz){
xUG=this.x6U();
X1H=X1I;
var style=this.xsF.Xsy();
style.XLx=false;
			style.Xta=false;
style.cover=false;
xbK+=' NONE(onTop Window)';}
else if(xUG==this.x6U()==Xwy){
X1H=X1I;
xbK+=' NONE';}
else{
xUG=Xwy;
X1H='-3';
x4K=this.XWz(XVm,X1I,X1H);
xuQ&&
(xbK+=':"'+X1H+'" off:'+x4K.x+','+x4K.y);
this.Xzc=x4K;
this.XWt.XWZ(XYc+':'+X1H);
this.XWt.XWX(new ElementRef());
this.XWt.x6G=null;
this.XWt.x6U=null;
this.XWt.XW3({x:0,y:0});
this.XWt.XW2({x:0,y:0});
this.XWt.XW1(x4K);}}
else{
while(xHL&&xHL!=XjS){
xHL=xHL.parent;
(XjQ=='FRAMESET'&&xHL==XjS)&&(xHL=null);
if(xHL){
path=path.substr(0,path.lastIndexOf(':'));
XW0[XW0.length]=xHL;
XWx[XWx.length]=path;
xbK+=','+path;
if(XW6=XfQ.Xep(path)){
type=XW6.Xty();
(!XW6.XY9()&&
(type=='BODY'||type=='FRAME'))&&(xUG=xHL);
x9W=this.XCI.x6b().XTo(XW6);
x9W&&x9W.add(this);}
else{
xbK+=' ERROR resolving "'+path+'";';}
xuQ&&(xbK+=' '+(XW6||path)+';');}
else{
xbK+='-';}}
this.XYb=XWx;
var XYc=this.xsF.XVz();
var xPG=this.xsF.XEY();
var X1I=this.xsF.XVs();
var X1H,x4K;
xbK+=';Parents:';
if(xUG==this.x6U()){
X1H=X1I;
xbK+=' NONE';}
else{
X1H=Xko(xUG,
this.XCI.X1O(xUG));
x4K=this.XWz(XVm,X1I,X1H);
xuQ&&
(xbK+=':"'+X1H+
'" off:'+x4K.x+','+x4K.y);
this.XWt.XWZ(
XYc+(X1H?':'+X1H:''));
this.XWt.XWX(new ElementRef());
this.XWt.x6G=null;
this.XWt.x6U=null;
this.XWt.XW3({x:0,y:0});
this.XWt.XW2({x:0,y:0});
this.XWt.XW1(x4K);}}
xuQ&&
this.XCI.Xpr('RXB IFrame handling:'+xbK);
this.XVZ=new XLI(this.xfK+'_'+
this.XWt.XEY(),this.XCI,this.XWt);
this.XVZ.show(false);this.XVZ.XXG(this);
if(xUG!=this.x6U()){
this.XoB(3);
this.XVZ.XoB(3);}
else{
this.XoB(2);
this.XVZ.XoB(2);}
return true;}
XVQ.prototype.XWn=function(x5g){
this.XV2={};
var XfQ=this.XCI.Xd6();
var XVm=XfQ.XdV(
this.XWt.XVz());
if(!XVm){
if(this.XCI.XRN().xuQ>=1){
var xUG=this.x6U();
var xbK='frameContainer missing for '+
this.XEY()+'=="'+
xUG.name+'" '+xUG.location;
this.XCI.Xpr('RXB applyOrRefreshPost_():'+xbK,'error');}
return false;}
var XW9=this.XWt.XVs();
var XW7=XVm.XVh(XW9);
if(!XW7){
if(this.XCI.XRN().xuQ>=1){
var xbK='no tFrame for path '+XW9;
this.XCI.Xpr('RXB applyOrRefreshPost_():'+xbK,'error');}
return false;}
var XWb=XW7.XVu();
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('RXB applyOrRefreshPost_():tFrame '+XW7);}
var xUG=XW7.x6U();
if(xUG==XVm.XF3()&&
xUG.document.body.tagName=='BODY')
{
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('RXB Only one bubble;in top BODY','info');}
return true;}
var Xwy=this.XCI.XvR(xUG);
if(Xwy.document.body.tagName=='BODY'){
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('RXB Only one bubble;in top dgoBODY','info');}
return true;}
var XWS=this.XVZ.XVv(true);
var i,XML;
for(i=0;i<XWS.length;++i){
XML=XWS[i];
XML.left+=XWb.left;
XML.top+=XWb.top;
XML.right+=XWb.left;
XML.bottom+=XWb.top;
if(this.XCI.XRN().xuQ>=3){
this.XCI.Xpr('RXB Bubble rect '+i+':'+XML);}}
var XWP=XVm.XVj(XWS);
if(XWP.length<=0){
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('RXB no overlaps','warning');}
return true;}
var XW6,type,XW8,XWa,XWJ,
bubble,XV0,XVY,x4K,XaK;
for(i=0;i<XWP.length;++i){
XW6=XWP[i].XW6;
type=XW6.Xty();
if(type=='FRAMESET'||type=='IFRAME'||type=='IFRAMESET'||
XW6.XY9()||XW6.XFG()==XW9)
{
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('RXB Ignore tFrame '+XW6);}}
else{
XW8=this.xsF.XVz()+
(XW6.XFG()?':'+XW6.XFG():'');
XWa=XW6.XVu();
x4K=this.XVZ.XVw(true);
x4K.x-=(XWa.left-XWb.left);
x4K.y-=(XWa.top-XWb.top);
if(this.XWV[XW8]){
bubble=this.XWV[XW8];
this.XWV[XW8]=null;
XV0=bubble.x8b();
if(XV0){
XaK=XCx(
x4K,XV0.document.body);
bubble.XW1(XaK);
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('RXB move Bubble in '+XW6+
':Off:'+x4K.x+','+x4K.y+
';off2:'+XaK.x+','+XaK.y+
';bbl1 rect:+'+XWb);}
if(bubble.xb1()){
this.XXF(bubble,1);
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr(
'RXB Bubble refreshed','success');}}
else{
if(this.XCI.XRN().xuQ>=1){
this.XCI.Xpr(
'RXB Error refreshing '+bubble,'error');}}}
else{
if(this.XCI.XRN().xuQ>=1){
this.XCI.Xpr(
'RXB Error resolving '+XW8,'error');}}}
else{
XWJ={};
XTd(this.xsF,XWJ);
XWJ.XZv(0);
XWJ.XWZ(XW8);
XWJ.XWX(new ElementRef());
XWJ.x6G=null;
XWJ.x6U=null;
XWJ.XW3({x:0,y:0});
XWJ.XW2({x:0,y:0});
XaK=XCx(
x4K,XW6.x6U().document.body);
XWJ.XW1(XaK);
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('RXB new Bubble,offset:'+
x4K.x+','+x4K.y+
' [frames @ '+XWa.left+','+XWa.top+
'/'+XWb.left+','+XWb.top+']');}
bubble=new XLI(
this.xfK+'_'+XW8,this.XCI,XWJ);
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('RXB Bubble created:'+bubble+
' [in '+XW6+']');}
bubble.show(false);
bubble.XXG(this);
if(!bubble.xmC(this,this.X7V)){
if(this.XCI.XRN().xuQ>=1){
this.XCI.Xpr('RXB Error applying '+bubble,
'error');}}}
this.XV2[XW8]=bubble;}}
return true;}
XVQ.prototype.X7V=function(XYv){
xUG=XYv.x8b();
this.X72(XYv.x6U());
this.XXF(XYv,1);
XYv.show(true);
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('RXB Bubble "'+XYv.getName()+
'" applied','success');}
this.XCI.x6b().add(XYv);
XYv.XL0();}
XVQ.prototype.XbO=function(){
var x2H={};
if(!this.x6O(x2H)){
this.Xpu(false);
if(this.XXa&&
this.XCI.XFV()==XAA)
{
this.XCI.xTN(XA0);}
return;}
var XLw=this.XCI.x6b().XXO(true);
if(this.XCI.XRN().XTw){
this.XbN(x2H);}
else{
try{
this.XbN(x2H);}
catch(xa8){
if(this.XCI.XRN().xuQ>=1){
this.XCI.Xpr('RC do_applyPost_:'+
(new x6C(xa8)),'exc');}
this.Xpu(false);}}
this.XCI.x6b().XXO(XLw);}
XVQ.prototype.XbN=function(x5g){
this.Xpu(false);
var XWA=this.XCI.XRN();
var xuQ=(XWA.xuQ>=2);
var x4K;
var xUG=this.x6U();
if(!this.XIa){
if(this.XYi(x5g)){
var XVm=this.Xd4().XdU();
XVm.Xeb();
if(!this.XCI.Xvz){
x4K=this.XWz(this.XfA.XdU(),
this.XfA,this.XVZ.Xd4());
this.XVZ.XW1(x4K);}
this.xb1();}}
if(!this.XVZ){
xuQ&&this.XCI.Xpr('RXB do_apply_('+this.xfK+
'):applyOrRefreshPost_()bbl1 unset','warning');
return;}
this.X72(xUG);
this.XXF(this.XVZ,1);
this.XVZ.show(true);
this.XWV={};
this.Xpu(true);
if(this.XWn(x5g)){
this.Xpu(false);
this.XCI.x6b().add(this.XVZ);
this.XVZ.XL0();
this.XLA(this.Xd4());
if(this.XCI.Xvz){
if(this.xsF.Xsy().minimized){
this.xb1();}}
if(this.xUi>100){
this.XCI.x6b().XU6().add(
this,this.xUi,(XWA.Xod-0)||200,
XWA.XTw?0:XrQ);
xuQ&&this.XCI.Xpr(
'RXB do_apply_()+add2Animator(tick:'+
XWA.Xod+'):'+this,'success');}
else{
xuQ&&this.XCI.Xpr(
'RXB do_apply_():'+this,'success');}}
else{
this.Xpu(false);
if(this.XCI.XRN().xuQ>=1){
this.XCI.Xpr('RXB do_apply_('+this.xfK+
'):applyOrRefreshPost_()failure','error');}}}
XVQ.prototype.XXF=function(XYv,xEL){
var Xwy=this.x6U();
if(Xwy){
Xwy=this.XCI.XvR(Xwy);}
else{
return true;}
if(Xwy.document.body.tagName=='BODY'){
return true;}
var XM6=(!XYv.x6U());
var xUG=XYv.x8b();
if(!xUG){
return false;}
var body=xUG.document.body;
var XWp=body.style;
var xbK=';';
if(typeof(body.dgoS)=='undefined'||
typeof(body.dgoT)=='undefined'||
typeof(body.dgoU)=='undefined')
{
if(xEL>=0){
if(typeof(XWp.overflowX)=='string'&&
typeof(XWp.overflowY)=='string'&&
!XWp.overflow)
{
body.dgoS=null;
typeof(body.dgoT)=='undefined'&&
(body.dgoT=XWp.overflowX);
typeof(body.dgoU)=='undefined'&&
(body.dgoU=XWp.overflowY);
xbK+='saveXY '+XWp.overflowX+','+
XWp.overflowY+';';}
else{
body.dgoS=XWp.overflow;
body.dgoT=null;
body.dgoU=null;
xbK+='save '+XWp.overflow+';';}}
else{
return false;}}
var XWu=true;
var XWv=true;
if(xEL>=0){
xbK+='hidden:';
var size=XR6(xUG,2);
var XWS=XYv.XVv(true);
var i,XML;
for(i=0;i<XWS.length;++i){
XML=XWS[i];
if(XML.right>size.x){
XWu=false;
xbK+=i+'X;';}
if(XML.bottom>size.y){
XWv=false;
xbK+=i+'Y;';}}}
else{
xbK+='unset;';}
var XGO;
if(body.dgoS===null){
if(XWu){
if(XYv.XqB()){
XYv.XqE(false);
if(0==(body.dgon=
typeof(body.dgon)=='number'
?Math.max(0,body.dgon-1):0))
{
XAa(XWp,'overflowY',body.dgoU);
xbK+='restoreY('+body.dgoU+');';
body.dgoU=XGO;}
else{
xbK+='keepY('+body.dgon+');';}}
else{
xbK+='otherY('+body.dgon+');';}}
else{
if(XYv.XqB()){
xbK+='againY('+body.dgon+');';}
else{
XYv.XqE(true);
body.dgon=
typeof(body.dgon)=='number'
?body.dgon+1:1
XAa(XWp,'overflowY','hidden');
xbK+='hideY;';}}
if(XWv){
if(XYv.XqA()){
XYv.XqD(false);
if(0==(body.dgol=
typeof(body.dgol)=='number'
?Math.max(0,body.dgol-1):0))
{
XAa(XWp,'overflowX',body.dgoT);
xbK+='restoreX('+body.dgoT+');';
body.dgoT=XGO;}
else{
xbK+='keepX('+body.dgol+');';}}
else{
xbK+='otherX('+body.dgol+');';}}
else{
if(XYv.XqA()){
xbK+='againX('+body.dgol+');';}
else{
XYv.XqD(true);
body.dgol=
typeof(body.dgol)=='number'
?body.dgol+1:1
XAa(XWp,'overflowX','hidden');
xbK+='hideX;';}}}
else{
if(XWu&&XWv){
if(XYv.Xpz()){
XYv.XqC(false);
if(0==(body.dgoM=
typeof(body.dgoM)=='number'
?Math.max(0,body.dgoM-1):0))
{
XAa(XWp,'overflow',body.dgoS);
xbK+='restore('+body.dgoS+');';
body.dgoS=XGO;}
else{
xbK+='keep('+body.dgoM+');';}}
else{
xbK+='other('+body.dgoM+');';}}
else{
if(XYv.Xpz()){
xbK+='again('+body.dgoM+');';}
else{
XYv.XqC(true);
body.dgoM=
typeof(body.dgoM)=='number'
?body.dgoM+1:1
XAa(XWp,'overflow','hidden');
xbK+='hide;';}}}
if(this.XCI.XRN().xuQ>=3){
this.XCI.Xpr('RXB setOverflowIf('+XYv.getName()+
','+xEL+'):'+xbK.substr(1));}
XM6&&(XYv.XL0());
return true;}
XVQ.prototype.XYh=function(){
var XWA=this.XCI.XRN();
var n=XWA.XYm;
var xYk=this.xsF.Xo().toLowerCase();
switch(xYk){
case 'se':x=n;y=n;break;
case 's':x=0.5;y=n;break;
case 'sw':x=1-n;y=n;break;
case 'w':x=1-n;y=0.5;break;
case 'nw':x=1-n;y=1-n;break;
case 'n':x=0.5;y=1-n;break;
case 'ne':x=n;y=1-n;break;
case 'e':x=n;y=0.5;break;
default:
case 'c':x=XWA.XMQ;y=XWA.XMR;break;}
return{x:x,y:y};}
XVQ.prototype.x9K=function(
x5g,XL9,XCZ,XCY)
{
var xbK='RXB reapply "'+this.xsF.getName()+'" '+XL9+':';
if(XL9.XWE&&
XL9.xsF&&
XL9.xsF.Xr&&
!XL9.xsF.Xr())
{
XL9.xsF.setText(
this.xsF.Xtx()+XL9.xsF.Xtx());
XL9.xsF.XzL(true)
xbK+='append XB text';}
else if(XL9.XMc&&
XL9.x5q===false)
{
XL9.xyO=this.xsF.Xtx()+XL9.xyO;
XL9.x5q=true;
xbK+='append text';}
else{
xbK+='replace text';}
var xd2=XLD.prototype.x9K.XHO(
this,x5g,XL9,XCZ,XCY);
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr(xbK,(xd2?'success':'error'));}
return xd2;}
XVQ.prototype.XFA=function(X6S){
var XLk=this.XCI;
if(XLk.XFV()==XAB||
XLk.XFV()==XOc)
{
return false;}
if(!this.XIa){
this.XVZ&&(this.XVZ.XIa=false);
if(this.XCI.XRN().xuQ>=1){
XLk.Xpr('RBX "'+this.xfK+'" reapply autoplace canceled',
'warning');}
return false;}
var XJS=new XVQ(this);
XJS.x5q=true;
XJS.XuR=1;
XJS.x7f=X6S.XJY-0;
XJS.x7m=X6S.XJ7-0;
var x4K={x:this.xBw,y:this.xBx};
x4K=xBu(x4K,this.XJg,X6S.XJT)
XJS.xGL=X6S.XJT;
XJS.XJg=this.XJg;
XJS.xBw=this.xBw;
XJS.xBx=this.xBx;
XJS.x7p=x4K.x;
XJS.x7q=x4K.y;
XJS.xsF.XW1({x:XJS.x7p,y:XJS.x7q});
XJS.xsF.XW3({x:XJS.x7f,y:XJS.x7m});
XJS.xsF.X0B(xBD(X6S.XJT));
XJS.XHY=this.XVZ?this.XVZ.XHY:this.XHY;
XJS.xsF.xFO.minimized=(XJS.XHY==3);
if(XJS.x6K){
var xa7;
if(XLk.XRN().XnH){
xa7=this.XMK(XJS);}
else{
try{
xa7=this.XMK(XJS);}
catch(xa8){
if(this.XCI.XRN().xuQ>=1){
XLk.Xpr('RBX "'+this.xfK+'" reapply:'+
(new x6C(xa8)),'exc');}
this.XIa=false;
XJS.XIa=false;
return false;}}
this.XIa=false;
XJS.XIa=false;
if(!xa7||XLk.XRN().xuQ>=2){
if(XLk.XRN().xuQ>=1){
XLk.Xpr('RBX "'+this.xfK+'" reapply done',
xa7?'success':'error');}}}
else{
if(this.XCI.XRN().xuQ>=1){
XLk.Xpr('RBX "'+this.xfK+
'" clone:'+XJS.error,'error');}}
return true;}
XVQ.prototype.x4r=function(XVK){
if(XVK){
var Xwy=this.x6U();
if(Xwy){
Xwy=this.XCI.XvR(Xwy);
if(Xwy.document.body.tagName=='BODY'){
XVK=false;}}}
this.XZp=true;
if(this.XCI.XRN().xuQ>=1){
this.XCI.Xpr('RXB unapply '+this);}
var xbK=';';
if((this.xyi||this.X0T)&&this.xUi>100){
this.XCI.x6b().XU6().remove(this);
xbK+='animation;'}
var XMN=this.XCI.x6b();
if(!this.XVZ){
if(this.XCI.XRN().xuQ>=1){
var xbK='bbl1 unset';
this.XCI.Xpr('RXB do_unapply_():'+xbK,'warning');}}
else{
this.XXF(this.XVZ,-1);
var xd2=XMN.remove(this.XVZ,XVK?false:true);
xbK+='bbl1 in '+this.XVZ.XEY()+';';}
var bubble;
for(var path in this.XV2){
if(this.XV2[path]){
bubble=this.XV2[path];
this.XV2[path]=null;
this.XXF(bubble,-1);
XMN.remove(bubble,XVK?false:true);
xbK+='-bbl in '+path+';';}}
if(this.XYb){
var XfQ=this.XCI.Xd6();
var XW6,xUG,x9W,x8e;
for(var i=0;i<this.XYb.length;++i){
XW6=XfQ.Xep(
this.XYb[i]);
x9W=(XW6?XW6.x6U().dgo38:null);
if(x9W){x8e=x9W.x8n(this.xfK);
x8e&&x9W.remove(x8e);}}}
this.XVZ=null;
this.XV2=null;
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('RXB unapply:'+xbK.substr(1),
(xd2?'success':'error'));}
return xd2;}
var XZ5='dgoRender__pu__div';
var XZ7='dgoRender__pu__t';
var XZ8='dgoRender__pu__td';
var XZ6='dgoRender__pu__sel';
var XZ3=[
'fontFamily','fontSize','fontWeight','fontStyle'];
var XZ2=[
'font-family','font-size','font-weight','font-style'];
XVQ.prototype.XZk=function(XOJ){
var xbK='';
var xUG=this.x6U();
var x4E=xUG.document;
var x3E=x4E.createElement('DIV');
if(x3E){
x3E.id=XZ5;
x3E.className='dgoPU';
var style=x3E.style;
style.position='absolute';
style.left='0px';
style.top='0px';
style.visibility='hidden';
x3E=x4E.body.appendChild(x3E);}
if(!x3E){
if(this.XCI.XRN().xuQ>=1){
xbK='DIV "'+XZ5+'" not created/appended';
this.XCI.Xpr('RXB findFormSel1Styles_():'+xbK,'error');}
return [];}
x3E.innerHTML='<select id='+XZ6+
' class="'+XOJ.className+'"><option>hugo</option></select>';
var xDN=x4E.getElementById(XZ6);
if(!xDN){
if(this.XCI.XRN().xuQ>=1){
xbK='SELECT "'+XZ6+
'" not found in HTML '+x3E.innerHTML+'"';
this.XCI.Xpr('RXB findFormSel1Styles_():'+xbK,'error');}
return [];}
var XZb=[];
var XZe=[];
var X1k=xYD(x4E.body,
XZ3,
XZb);
var x7t=xYD(xDN,
XZ3,
XZe);
if(!X1k||!x7t){
if(this.XCI.XRN().xuQ>=1){
xbK='CSS values "'+XZ4+
'" not found in'+(X1k?'':' BODY')+(x7t?'':' SELECT');
this.XCI.Xpr('RXB findFormSel1Styles_():'+xbK,'error');}
return [];}
var X0F={js:[],XZL:[]};
var xoQ;
for(var i=0;i<XZ3.length;++i){
xoQ=XOJ.style[XZ3[i]]||'';
if(XZb[i]!=XZe[i]||xoQ){
X0F.js[X0F.js.length]=XZ3[i];
X0F.XZL[X0F.XZL.length]=XZ2[i];}}
X0F.js[X0F.js.length]='color';
X0F.XZL[X0F.XZL.length]='color';
x4E.body.removeChild(x3E);
return X0F;}
XVQ.prototype.Xoz=/^([0-9]+)%$/;
XVQ.prototype.XZr=function(x1M,XOJ,xEL){
var html='';
var XK5=x1M.js.concat(['backgroundColor']);
var XZd=[];
var XZc=[];
var X1k=xYD(XOJ,XK5,XZd);
var x7t=(xEL?xYD(xEL,XK5,XZc):true);
if(!X1k||!x7t){
if(this.XCI.XRN().xuQ>=1){
var xbK='CSS values "'+XK5+'" not found in'+
(X1k?'':' SELECT')+(x7t?'':' OPTION');
this.XCI.Xpr('RXB getStylesHTML_():'+xbK,'error');}
return '';}
var XZt=XZd.length-1;
var i,xoQ,name,match;
for(i=0;i<XZt;++i){
xoQ=(xEL?XZc[i]||XZd[i]:XZd[i]);
if(xoQ){
if((name=XK5[i])=='fontSize'&&XRl){
if(match=this.Xoz.exec(xoQ)){
xoQ=Math.floor(parseInt(match[1])*0.7+0.5)+'%';}}
html+=(x1M.XZL[i]+':'+xoQ+';');}}
var XP4=(xEL
?XZc[XZt]||XZd[XZt]:XZd[XZt]);
if(XP4&&XP4!='transparent'){
html+=('background-color:'+XP4+';');}
html+='white-space:nowrap;';
return(html?' style="'+html+'"':'');}
XVQ.prototype.XZs=function(x5g,X0U){
this.XZu=null;
var xDN=x5g.xbF;
if(this.xUi==0||xDN.size>1){
this.XWs=false;
var Xmx=new XRx(this.XCI,this.X0T);
if(Xmx.x6K){
Xmx.xmC();}
return 0;}
if(this.xUi<0){
this.XXa=true;
this.xUi=1000+333*Math.min(
20,Math.abs(xDN.selectedIndex-this.XZz));
if(this.XCI.XRN().xuQ>=1){
this.XCI.Xpr('RXB handleFormSel1Apply_:curr '+
xDN.selectedIndex+' new '+this.XZz+
'==>autodur '+this.xUi);}}
var X0F=this.XZk(xDN);
var html='';
var i,XNz;
for(i=0;i<xDN.options.length;++i){
XNz=xDN.options[i];
html+='<tr class=dgoPU><td NOWRAP class=dgoPU width=100% id='+
XZ8+
i+this.XZr(X0F,xDN,XNz)+
'>'+(XNz.innerHTML||'&nbsp;')+'</td></tr>';}
var h=Math.min(11,xDN.options.length)*(xDN.offsetHeight-4);
var w=(this.XCI.XFI_('moz','1')
?''+(xDN.offsetWidth-18):'"100%"');
html='<div class=dgoPU id='+XZ5+
' style="width:'+xDN.offsetWidth+'px;height:'+h+
'px;overflow-x:hidden;">'+
'<table class=dgoPU cellpadding=0 cellspacing=0 id='+
XZ7+
this.XZr({js:['color'],XZL:['color']},xDN)+'>'+
html+'</table></div>';
this.xsF.setText(html);
this.xsF.X0C(xDN.offsetWidth);
this.xsF.X0A(h);
var X2A=this.XCI.X1O(this.xVG);
var X0I=XPF(X2A.document.body,
null,
X8x);
var x4K=XPD(this.xVG,X2A);
var XZy=new XAi(x5g.x7d.x,x5g.x7d.y+x5g.x8t.y,
x5g.x7d.x+xDN.offsetWidth-1,
x5g.x7d.y+x5g.x8t.y+h-1);
XZy.moveBy(x4K.x,x4K.y);
var X0j=xZD(XZy,X0I);
var X0K=null;
if(X0j.height+5<XZy.height){
var XZx=new XAi(x5g.x7d.x,x5g.x7d.y-h,
x5g.x7d.x+xDN.offsetWidth-1,
x5g.x7d.y-1);
XZx.moveBy(x4K.x,x4K.y);
X0K=xZD(XZx,X0I);
if(X0K.height<X0j.height+5||
X0K.height*1.2<XZx.height)
{
X0K=null;}}
if(X0K){this.xsF.XW3({x:0.5,y:0});
this.xsF.X0B('N');}
return 1;}
XVQ.prototype.X0G=function(XV2,XFj,XZo){
var bubble,xUG,xbF,x4E,x3E,xnO,X0H,style;
var X89,X87,X88;
for(var i=0;i<XV2.length;++i){
bubble=XV2[i];
xUG=bubble.x8b();
xbF=this.X8Z();
if(xUG&&xbF&&xbF.options.length>0){
x4E=xUG.document;
x3E=x4E.getElementById(XZ5);
xnO=x4E.getElementById(XZ7);
X0H=x4E.getElementById(XZ8+XFj);
if(x3E&&xnO&&X0H){
style=X0H.style;
if(XZo){
X0H.dgo26=style.color;
style.color='white';
X0H.dgo8=style.backgroundColor;
style.backgroundColor='darkblue';
style.border='1px solid #808080';
X89=x3E.offsetHeight;
X87=x3E.scrollHeight;
X88=(X87-4)/xbF.options.length;
if(X89<X87){
x3E.scrollTop=Math.max(0,(XFj-0.5*
(Math.floor(X89/X88+1)-1))*
X88);}}
else{
style.color=X0H.dgo26;
style.backgroundColor=X0H.dgo8;
style.border='0px';}}}}}
XVQ.prototype.XZ9=function(){
var XM6=(this.xcF==null);
var xbF=this.X8Z();
if(typeof(xbF.selectedIndex)!='number'){
return XM6;}
var xVF=this.XZz-xbF.selectedIndex;
var XFi;
var XUS=Math.floor(this.XU2*20)/20;
if(Math.abs(xVF)>8&&XUS<=0.4){
var Xow=(xVF>0
?this.XZz-8:this.XZz+8);
XFi=xbF.selectedIndex+
Math.floor((Xow-xbF.selectedIndex)*XUS*2.5);}
else if(XUS<0.8){
var XpN=(Math.abs(xVF)>8
?(xVF>0?this.XZz-16:this.XZz+16)
:xbF.selectedIndex);
XFi=XpN+
Math.floor((this.XZz-XpN)*XUS*1.25);}
else{
XFi=this.XZz;}
XFi<1&&(XFi=0);
if(this.XZu==null||XFi!=this.XZu){
var xAW=[this.XVZ];
var path,bubble;
for(path in this.XV2){
(bubble=this.XV2[path])&&
(xAW[xAW.length]=bubble);}
if(this.XZu!=null){
this.X0G(xAW,this.XZu,false);}
this.X0G(xAW,XFi,true);
this.XZu=XFi;
return true;}
return XM6;}
XVQ.prototype.X72=function(xVG){
if(xVG&&this.X0T&&this.xcF){
var x4E=xVG.document;
var x3E=x4E.getElementById(XZ5);
var xnO=x4E.getElementById(XZ7);
var X0H=x4E.getElementById(XZ8+'0');
if(!x3E||!xnO||!X0H){
xVG=this.XCI.XvR(xVG);
if(xVG){
x4E=xVG.document;
x3E=x4E.getElementById(XZ5);
xnO=x4E.getElementById(XZ7);
X0H=x4E.getElementById(XZ8+'0');}}
if(x3E&&xnO&&X0H){
var h=Math.min(11,this.xcF.options.length)*X0H.offsetHeight+4;
xVG.setTimeout(
'document.getElementById("'+XZ5+
'").style.height="'+h+'px"',1);
var w=this.xcF.offsetWidth;
x3E.style.width=w+'px';
xnO.style.overflow='hidden';
xnO.style.overflowX='hidden';
if(this.xcF.options.length<=11){
xnO.width=w;
xnO.style.width=w+'px';
x3E.style.overflow='hidden';}
else{
x3E.style.overflow='auto';
xnO.width=x3E.clientWidth-2;
xnO.style.width=(x3E.clientWidth-2)+'px';}}}
return true;}
XVQ.prototype.X03=function(x5g,X0U){
var offsetX=(this.xyi.Xox()||0);
var offsetY=(this.xyi.Xoy()||0);
var XXC=x5g.x7d.x+
x5g.x8t.x*this.xyi.Xpex()+offsetX;
var XXD=x5g.x7d.y+
x5g.x8t.y*this.xyi.Xpey()+offsetY;
var X0N=this.XCI.X0X().X0W();
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('RXB applyMouse():'+X0N+
',el @'+x5g.x7d.x+','+x5g.x7d.y+
',size '+x5g.x8t.x+'x'+x5g.x8t.y+
',target @'+XXC+','+XXD+
',offset '+offsetX+','+offsetY);}
if(X0N.XEm==null||
X0N.XYc!=this.xyi.XVz()||
this.xUi>=0&&this.xUi<=100)
{
this.xUi=0;
this.XCI.X0X().xmj(
this.xyi.XEY(),0,0,false);
this.xsF.XW1({x:offsetX+this.X06.x
,y:offsetY+this.X06.y});
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('RXB applyMouse():offset==hot spot');}}
else{
var XfQ=this.XCI.Xd6()
var X0c=XfQ.Xep(
X0N.XEm);
var X0g=XfQ.Xep(
this.xyi.XEY());
if(!X0c||!X0g){
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('RXB applyMouse():'+
' last/this tFrame '+X0c+'/'+X0g,'error');}
this.xUi=0;
this.XCI.X0X().xmj(null,0,0,false);
return false;}
var X0b=X0c.XVu();
var X09=XPF(
X0c.x6U().document.body,true);
var X0f=X0g.XVu();
this.X0d=Math.floor(0.5+
X0b.left+X09.left+X0N.X0o-
X0f.left-XXC);
this.X0e=Math.floor(0.5+
X0b.top+X09.top+X0N.X0q-
X0f.top-XXD);
this.xsF.XW1({
x:offsetX+this.X06.x+this.X0d
,y:offsetY+this.X06.y+this.X0e});
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('RXB applyMouse():offset='+
this.X0d+','+this.X0e+
'(lastFrame '+X0b+
' lastBody '+X09+
' lastCursor @'+X0N.X0o+','+
X0N.X0q+',thisFrame '+X0f+')');}
if(this.xUi<0){
var xVF=Math.abs(offsetX-this.X0d);
var xWF=Math.abs(offsetY-this.X0e);
var XU1=(this.XCI.XRN().Xoc-0)||1.5;
this.XXa=true;
this.xUi=Math.floor(500+
(xVF+xWF)*XU1);
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('RXB handleMouseApply_:500+(dx:'+
xVF+'+dy:'+xWF+')*spd:'+XU1+'==>autodur '+
this.xUi);}}}
this.XCI.X0X().xmj(
this.xyi.XEY(),XXC,XXD,null);
return true;}
XVQ.prototype.XWz=function(XWG,XEC,XWH){
var XW6,XXI;
if(typeof(XEC)=='string'){
XW6=XWG.XVh(XEC);}
else{
XW6=XEC;
XEC=XW6.XFG();}
if(typeof(XWH)=='string'){
XXI=XWG.XVh(XWH);}
else{
XXI=XWH;
XWH=XXI.XFG();}
if(!XW6||!XXI){
if(this.XCI.XRN().xuQ>=1){
this.XCI.Xpr('RXB getOffset_('+this.xfK+
'):tFrame missing [ori:'+XW6+'/'+XXI+
'] for paths "'+XEC+'"/"'+XWH+'"','error');}
return false;}
if(!this.xcF){
this.X8Z();}
var XML=XPF(this.xcF,true);
var XXC=XML.left+XML.width*this.xsF.Xpex();
var XXD=XML.top+XML.height*this.xsF.Xpey();
var r=XW6.XVu();
var xPM=XXI.XVu();
var XmK=XCi(
{x:xPM.left,y:xPM.top},
XXI.x6U().document.body);
var x4K={
x:XXC+r.left-XmK.x+this.xsF.Xox()
,y:XXD+r.top-XmK.y+this.xsF.Xoy()};
x4K.y=Math.round(x4K.y);
x4K.x=Math.round(x4K.x);
if(this.XCI.XRN().xuQ>=3){
this.XCI.Xpr('RXB getOffset_:frames '+XEC+'/'+XWH+
' @ '+r.left+','+r.top+'/'+xPM.left+','+xPM.top+
'(scrolled '+XmK.x+','+XmK.y+')'+
';el(scrolled)@'+XML+
';rel.pos '+this.xsF.Xpex()+
','+this.xsF.Xpey()+
'=>'+XXC+','+XXD+
'=>offset:'+x4K.x+','+x4K.y);}
return x4K;}
XVQ.prototype.Xz9=function(){
if(!this.XVZ){
return false;}
var XfQ=this.XCI.Xd6();
var XVm=XfQ.XdV(
this.XWt.XVz());
var x4K=this.XWz(XVm,
this.xsF.XVs(),
this.XWt.XVs());
if(this.Xzc){
if(this.Xzc.x!=x4K.x||
this.Xzc.y!=x4K.y)
{
this.Xzc=x4K;
return true;}
else{
return false;}}
else{
this.Xzc=x4K;
return true;}}
XVQ.prototype.XSc=function(){
return this.xcF?XQG('onchange',this.xVG,this.xcF):true;}
XVQ.prototype.XUh=function(XUa){
return true;}
XVQ.prototype.XUU=function(XUa,XU2){
var XM6=false;
this.XU2=XU2;
if(this.xyi){
var XUS=1-XU2;
this.xsF.XW1({
x:(this.xyi.Xox()||0)+
this.X06.x+XUS*this.X0d
,y:(this.xyi.Xoy()||0)+
this.X06.y+XUS*this.X0e});
this.xb1();
XM6=true;}
else if(this.X0T){
if(this.XZ9()){
this.xb1();
XM6=true;}}
if(XM6){
var path,bubble;
for(path in this.XV2){
bubble=this.XV2[path];
bubble&&bubble.XL0();}}
return true;}
XVQ.prototype.XUi=function(XUa){
this.XU2=0;
this.X0d=0;
this.X0e=0;
if(this.X0T){
var XM6=(this.xcF==null);
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('RXB formSel1 stopAnimation()');}
this.X8Z();
if(this.xcF){
if(typeof(this.xcF.selectedIndex)=='number'){
this.xcF.selectedIndex=this.XZz;
this.XTJ||this.XSc();}
if(!this.XZp){
this.XCI.x6b().remove(this,true);}
if(this.XXa&&
this.XCI.XFV()==XAA)
{
this.XCI.xTN(XA0);}
XM6&&this.XL0();}}
else if(this.xyi){
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('RXB mouse stopAnimation()');}
if(this.XXa&&
this.XCI.XFV()==XAA)
{
this.XCI.xTN(XA0);}}
return true;}
XVQ.prototype.onscroll=function(XV6){
if(XV6<=this.Xly){
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr(
'RXB ignore onscroll(eventNo='+XV6+
',lastEventNo='+this.Xly+')');}
return true;}
this.Xly=XV6;
return this.xb1();}
XVQ.prototype.toString=function(){
var xbK='';
if(this.xyi){
xbK='mouse:'+this.xyi.Xin()+
',dur:'+this.xUi;}
else if(this.X0T){
xbK='formSelect1:'+this.XZz+
(this.XTJ?',suppress':',fire')+
',dur:'+this.xUi;}
return 'RenderXBubble={'+xbK+','+
XLD.prototype.toString.XHO(this)+' '+
this.xsF+'}';}}
if(self.XI7){XI7.XJB(new XIX(
'../render_xbubble.js',
[ '../render_bubble.js','../render_base.js','../render_container.js' ],
XVR));}
else{
XVR();}

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
