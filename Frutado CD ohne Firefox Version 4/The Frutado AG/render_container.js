//
//
function XLY(XCI){
if(!XCI)return;
var A=XCI;
this.x8Y=function(XDx,xVG){var Xz7=xVG||this;
if(!Xz7.tagName){var XW6=XoC(Xz7);
if(A.XFI_('ie','5')){
var size=XR6(Xz7,2);
if((Xz7.document.body.dgoe||0)==size.x&&
(Xz7.document.body.dgoC||0)==size.y)
{
if(!xVG){
A.Xpr('Onresize found no frame size change in '+
(XW6||'[no TFrame]')+':'+size.x+'x'+
size.y);
return true;}
else{
A.Xpr('Refreshing all fx in '+
(XW6||'[no TFrame]')+':'+size.x+'x'+
size.y);}}
Xz7.document.body.dgoe=size.x;
Xz7.document.body.dgoC=size.y;}
var XMN=A.x6b();
if(!XMN||XMN.XV1()){
A.Xpr('Onresize inhibited in '+(XW6||'[no TFrame]'));
return true;}
A.Xpr('Onresize '+(XW6||'[no TFrame]'),'user',2);
var XfQ=A.Xd6();
var XYc=XfQ.Xd7(
A.X1O(Xz7));
var XVm=
XfQ.XdV(XYc);
if(!XVm){
var xbK='No frame container for "'+XYc+'"';
A.Xpr('RC Onresize:'+xbK,'error');
return false;}
var xa7;
if(A.XRN().XTw){
xa7=XVm.Xeb();}
else{
try{
xa7=XVm.Xeb();}
catch(xa8){
var xaw=new x6C(xa8);
A.Xpr('RC resize:'+xaw,'exc');}}
if(xa7==2){
if(XRl){var xBg=XMN;
var X1K=function(){
xBg.XpI();}
self.setTimeout(X1K,1);}
else{
XMN.XpI();}
A.Xpr('RC Onresize+refresh done');}
else{
if(!xVG){
A.Xpr('RC Onresize:no frameset size changes');}
else{
XMN.Xzb();
A.Xpr('RC Onresize+refresh done');}}}
return true;}
this.XCI=XCI;
this.xUE=new Object;
this.XGg=0;
this.XUW=new XJW(
this.XCI.XRN().xuQ>=1?XAU:null);
this.X9m=new X4N(XCI,
XCI.Xu().xGk(XCI.XRN().X9p),
XCI.XRN().xBb);
XCI.XXe().XaI(
XBB,this,this.XaQ);
this.x6K=true;}
var XBf=11;
var XTE=12;
XLY.prototype={
x6K:false
,error:'ok'
,add:function(x8f){
var xUG=x8f.x8b();
var name=x8f.getName();
if(xUG&&x8f.XXP()){
var x9W=this.XTo(x8f.Xd4());
if(x9W){
x9W.add(x8f);}}
if(this.xUE[name]){
var xbK='Cannot add:Rendering object "'+name+'" exists';
this.XCI.Xpr('RC add '+xbK+';old:'+
this.xUE[name]+';new:'+x8f,'error');
return false;}
this.xUE[name]=x8f;
++this.XGg;
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('RC add "'+name+'":'+
(xUG?'':'[no frame] ')+x8f+'==>'+this,
(xUG||!x8f.XXP()?'success':'warning'));}
return this.x8W();}
,XTo:function(XfA){
var xUG=XfA.x6U();
var x9W=xUG.dgo38;
if(!x9W){
var target;
x9W=new XLZ(this,XfA);
if(this.XCI.XFI_('ie','5')){
var size=XR6(xUG,2);
xUG.document.body.dgoe=size.x;
xUG.document.body.dgoC=size.y;}}
xA7(xUG,xUG.document.body,'resize',
this.x8Y,xA3);
return x9W;}
,x8F:function(){
return this.x8A(true);}
,XU6:function(){
return this.XUW;}
,X9h:function(){
return this.X9m;}
,XV1:function(){
return this.XLq;}
,x6X:function(){
return this.x6r;}
,X04:function(X0P){
this.XCI.X0X().xmj(null,null,null,false);
return this.X05('mou','Default Mouse');}
,XCs:function(xsF){
return this.X05('bu','Default Bubble');}
,XCr:function(xsF){
var xAe=xsF.getName();
if(xAe){
var XEg=X3B(xAe,'x');
var x8e=this.x8n(XEg);
if(x8e){
if(!this.remove(x8e,true)){
this.XCI.Xpr('OFF target "'+xAe+
'"==>"'+XEg+'" remove failure','error');}}
else{
this.XCI.Xpr('OFF target "'+xAe+
'"==>"'+XEg+'" not found','warning');}}
else{
this.XCI.Xpr('Empty OFF ignored','warning');}
return XMs;}
,handleEvent:function(xsF){
var x8e=this.x8U(null,null,xsF);
if(!x8e){
return XMq;}
if(x8e.x6K){
if(x8e.Xpc()){
return(XMs | XMu);}}
else{
if(x8e.error=='frame'){
var xJI=xsF.Xiu();
if(xJI<xsF.Xfps()){
this.XCI.Xpr('RC AGAIN','warning');
this.XCI.XXe().xa0(xsF);}
else{
this.XCI.Xpr('RC issue count('+xJI+
')too high;fp='+xsF.XEY(),'error');}}
else{
this.XCI.Xpr('RC handle '+xsF+
':"'+x8e.error+'"','error');}}
return XMs;}
,x7y:function(XUO){
this.XXO(true);
var XUN=XUO||this.XpH;
var xYE=0;
var x8e;
if(this.XCI.XRN().XTw){
for(var name in this.xUE){
x8e=this.xUE[name];
if(x8e&&XUN(x8e)){
x8e.xb1()&&(xYE+=1);
x8e.XL0();}}}
else{
try{
for(var name in this.xUE){
x8e=this.xUE[name];
if(x8e&&XUN(x8e)){
x8e.xb1()&&(xYE+=1);
x8e.XL0();}}}
catch(xa8){
var xaw=new x6C(xa8);
this.XCI.Xpr('RC refresh:'+xaw,'exc');}}
this.XXO(false);
return xYE;}
,XpI:function(){
return this.x7y(this.XpJ);}
,Xzb:function(){
return this.x7y(this.Xza);}
,XpK:function(XpE){
if(!XpE){
return this.x7y(this.XpL);}
var XpC=XpE;
var Xjj=this;
var XUN=function(x8f){
var xvg=x8f.XpF?x8f.XpF():x8f;
var XpO=XpC.XpF?XpC.XpF():XpC;
return Xjj.XpL(x8f)&&
x8f!=XpC&&x8f!=XpO&&xvg!=XpC&&xvg!=XpO;}
return this.x7y(XUN);}
,remove:function(x8f,x5v,xfK){
var name=xfK||x8f.getName();
var x8e=this.xUE[name];
var xbK='RC remove('+name+'=>'+x8e+')';
if(x8e){
var xUG;
if(x8f.XXP()){
if((xUG=x8f.x8b(this.XcN))&&
typeof(xUG)=='object'&&
typeof(xUG.dgo38)=='object'&&
xUG.dgo38&&xUG.dgo38.remove)
{
x8f.x9T(x5v?false:true);
xUG.dgo38.remove(x8f);}}
else{
x8f.x9T(x5v?false:true);}
this.xUE[name]=null;
--this.XGg;
this.x8W();
return true;}
this.XCI.Xpr(xbK,'warning');
this.x8W();
return false;}
,XPA:function(){
var xd2;
var XM1=this.x8n(
X3B('condition'),true);
if(XM1){
if((xd2=this.remove(XM1,true))){
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('ASSERT removed:'+XM1+'/'+this);}}
else{
this.XCI.Xpr('ASSERT '+XM1+' remove failure','error');}}
else{
xd2=false;}
return xd2;}
,X9d:function(){
var xd2;
var pause=this.x8n(X3B('pause'),true);
if(pause){
if((xd2=this.remove(pause,true))){
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('PAUSE removed:'+pause+'/'+this);}}
else{
this.XCI.Xpr('PAUSE '+pause+' remove failure','error');}}
else{
xd2=false;}
return xd2;}
,x8A:function(x5v){
var x8e;
for(var name in this.xUE){
x8e=this.xUE[name];
if(x8e){this.remove(x8e,x5v);
this.xUE[name]=null;}}
return this.x8W();}
,Xwq:function(XwN){
var x8e;
for(var name in this.xUE){
x8e=this.xUE[name];
if(x8e){if(x8e.XEY){
var XYc=x8e.XEY();
if(XYc){var xoL=XYc.indexOf(':');
XYc=(xoL<0?XYc:XYc.substr(0,xoL));
if(XYc-0==XwN-0){
this.remove(x8e,true);
this.xUE[name]=null;}}}}}
return this.x8W();}
,x8T:function(xVG,xeF,XCt){
var xbK='RC render(frame '+xVG.name+
'='+xVG.location.href+
',el '+(xeF?xeF.tagName:'-')+
',data '+XCt+')';
var x8e=this.x8U(xVG,xeF,XCt);
if(!x8e){
this.XCI.Xpr(xbK+':no object created','error');
return null;}
if(x8e.x6K){
this.XCI.Xpr(xbK+':'+this.x6r,'success');
return this.x6r;}
this.XCI.Xpr(xbK+'['+(x8e.error||'?')+']','error');
return null;}
,x8n:function(xfK,XYa){
var x8e=this.xUE[xfK];
if(XYa!==true){
this.XCI.Xpr(
'RC searchByName('+xfK+')',(x8e?'success':'warning'));}
return x8e||null;}
,XXO:function(XXL){
var XLw=this.XLq;
this.XLq=XXL;
return XLw;}
,XMx:function(xVG){
return this.Xi7(
XLk.Xd6().Xd7(
XLk.X1O(xVG)),
xVG);}
,X8E:function(x8f){
if(!this.XCI.XRN().Xct){
return true;}
var XW6=x8f.Xd4();
var XYc=XW6.XVz()+'';
var xuQ=(this.XCI.XRN().xuQ>=2);
if(XYc==this.XfT){
xuQ&&this.XCI.Xpr(
'RC setFocusOnWindowChange():Yet on win='+XYc);
return false;}
if(XYc.substr(0,1)=='-'&&XYc!='-1'){
xuQ&&this.XCI.Xpr(
'RC setFocusOnWindowChange():Ignoring win='+XYc);
return false;}
return this.Xi7(XYc,XW6.x6U());}
,XUA:function(xfK,xEL){
var x8e=this.xUE[xfK];
if(!x8e){
this.XCI.Xpr('RC setOption:not found:"'+xfK+'"');
return false;}
var xa7;
switch(xEL){
case XBf:
if(x8e.XMc&&!x8e.XIa){
if(x8e.XWE&&x8e.XVZ&&!x8e.XVZ.XIa){
if(x8e.XVZ.XFV&&x8e.XVZ.XFV()!=2){xa7=x8e.XVZ.XTx();}}
else{
if(x8e.XFV&&x8e.XFV()!=2){xa7=x8e.XTx();}}
this.XCI.Xpr('RC setOption:"'+xfK+'" minimized.',
xa7?'success':'error');
return !(!xa7);}
break;
case XTE:
if(x8e.XMc&&!x8e.XIa){
if(x8e.XWE&&x8e.XVZ&&!x8e.XVZ.XIa){
if(x8e.XVZ.XFV&&x8e.XVZ.XFV()!=2){xa7=x8e.XVZ.XTz();}}
else{
if(x8e.XFV&&x8e.XFV()!=2){xa7=x8e.XTz();}}
this.XCI.Xpr('RC setOption:"'+xfK+'" restored.',
xa7?'success':'error');
return !(!xa7);}
break;
default:break;}
this.XCI.Xpr('RC setOption:on "'+xfK+'" failed.','error');
return false;}
,XaS:function(x6r){
this.x6r=x6r;
this.XaR=true;}
,toString:function(){
var xbK='';
var x8e;
for(var name in this.xUE){
x8e=this.xUE[name];
xbK+=';'+name+(x8e?'+':'-');}
return 'RenderContainer:{'+this.XGg+':'+xbK.substr(1)+'}';}
,XCI:null
,xUE:null,XGg:null,XUW:null,X9m:null,XL5:1000,x8Y:null
,XLq:false
,XaR:false,x6r:null,XfT:'0'
,X05:function(xGQ,XGE){
var name=X3B('',xGQ);
var x8e=this.x8n(name);
if(x8e){
if(!this.remove(x8e,true)){
this.XCI.Xpr(xbK+' remove failure','error');}}
return XMs;}
,XpH:function(Xcs){
return true;}
,XpJ:function(x8f){
return x8f.XXS();}
,Xza:function(x8f){
return(x8f.XWE&&x8f.Xz9()||!x8f.XWE&&x8f.XMc);}
,XpL:function(x8f){
return x8f.x4X();}
,x8U:function(xVG,xeF,XCt){
if(xVG){
var xQG=xVG;
XCt.x6U=function(){
return xQG;}}
if(xeF){
var xbF=xeF;
XCt.x6G=function(){
return xbF;}}
if(XCt.XVz){
var XxD=XCt.XVz();}
else{
XxD=0;}
var x8Q=null;
if(XRl&&XxD-0>0){var XVm=this.XCI.Xd6().XdV(XxD);
if(XVm){
x8Q=XVm.XF3();
x8Q=this.XCI.XvR(x8Q).frames['trainer_program_frame'];}}
if(x8Q){
var x8e=x8Q.XLb(this.XCI,XCt);}
else{
var x8e=XLb(this.XCI,XCt);}
if(x8e&&x8e.x6K){
var name=x8e.getName();
var XLw=this.x8n(name,true);
var xaw=null;
var xa7;
this.XXO(true);
if(XLw){
if(this.XCI.XRN().XTw){
xa7=XLw.XMK(x8e);}
else{
try{
xa7=XLw.XMK(x8e);}
catch(xa8){
xaw=new x6C(xa8);}}
if(xaw){
this.XCI.Xpr('RC reapply('+name+'):'+xaw,'exc');}
else if(xa7){
this.XaR||(this.x6r=name);
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('RC reapply('+name+')','success');}}
else{
this.XCI.Xpr('RC reapply('+name+')='+xa7,
'error');}
this.XaR=false;}
else{
if(this.XCI.XRN().XTw||
(this.XCI.XRN().xhg&&name=='jsevent'))
{
xa7=x8e.xmC();}
else{
try{
xa7=x8e.xmC();}
catch(xa8){
xaw=new x6C(xa8);}}
if(xaw){
this.XCI.Xpr('RC apply('+name+'):'+xaw,'exc');}
else if(xa7){
if(x8e.XXR()){
this.add(x8e);}
this.XaR||(this.x6r=name);
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('RC apply('+name+')','success');}}
else{
this.XCI.Xpr('RC apply('+name+')='+xa7,'error');}
this.XaR=false;}
this.XXO(false);
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('RC render_('+name+'):'+this);}
x8e.XL0();}
return x8e;}
,x8W:function(){
if(--this.XL5<=0){
this.XL5=1000;
this.XGg=0;
var x8e;
var XVL={};
for(var name in this.xUE){
x8e=this.xUE[name];
if(x8e){
XVL[name]=x8e;
++this.XGg;}}
this.xUE=XVL;
this.XCI.Xpr('RC reorganize done:'+this);}
return true;}
,Xi7:function(XfU,xVG){
this.XfT=XfU;
try{
XQI(xVG).focus();
xVG.focus();
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('RC Focus now in "'+
xVG.name+'"='+xVG.location,'info');}}
catch(xa8){
this.XCI.Xpr('RC setFocus_():Focusing "'+
xVG.name+'"='+xVG.location+
':'+(new x6C(xa8)),'exc');
return false;}
return true;}
,xC2:function(X9H,XGT){
var xCL=false;
var x8e;
for(var name in this.xUE){
if(x8e=this.xUE[name]){
if(x8e!=XGT){
if(x8e.xCU){
var xC1=x8e.xCU();
var XXN=X9H.Xxw(xC1);
if(XXN.XMB){
if(xCL){
if(xCL.width*xCL.height<
XXN.width*XXN.height)
{
xCL=XXN;}}
else{
xCL=XXN;}}}}}}
return xCL;}
,XaQ:function(xsF){
var xfK=xsF.xFO.X9k||'_default';
if(xfK){
false&&this.XCI.XRN().Xxb&&
xfK.indexOf('.mht')<0&&
(xfK+='.mht');
this.X9m.xvD(xfK);}
return true;}}
var Xtb=false;
var Xu7=false;
var Xsc=new Date();
function Xt7(){
if(!Xu7){
return;}
var xmE=new Date();
if((xmE-Xsc)<300){
Xtb=true;
var X9t=dgo7&&dgo7.Xlc();
X9t&&X9t.add(new XbY(
'RenderContainerScrollEvent',Xu7,Xt7));
return;}
if(!Xtb){return;}
Xtb=false;
var x6i=Xu7.dgo41||
(Xu7.dgoc?Xu7.dgoc.dgo41:null);
if(!x6i){x6i=Xu7.document.body.dgo41;}
var x8Q=Xu7.dgoc||Xu7;
var xUG=x8Q;
while(xUG&&!xUG.dgo38&&xUG!=xUG.parent){
xUG=xUG.parent;}
if(xUG.dgo38){
xUG.dgo38.XMf(xUG,x6i&&x6i.X75());}
else{
var xbK='xref NULL in '+x8Q.name+'="'+x8Q.location.href+'"';
dgo7.Xpr('RX onscroll:'+xbK,'warning');}
Xu7=false;
return true;}
function XM3(XDx){
if(XRl){
Xu7=this;
var xmE=new Date();
Xsc=xmE;
if(!Xtb){
Xtb=true;
var X9t=dgo7&&dgo7.Xlc();
X9t&&X9t.add(new XbY(
'RenderContainerScrollEvent',this,Xt7));}
return true;}
var x6i=this.dgo41||
(this.dgoc?this.dgoc.dgo41:null);
if(!x6i){x6i=this.document.body.dgo41;}
var x8Q=this.dgoc||this;
var xUG=x8Q;
while(xUG&&!xUG.dgo38&&xUG!=xUG.parent){
xUG=xUG.parent;}
if(xUG.dgo38){
xUG.dgo38.XMf(xUG,x6i&&x6i.X75());}
else{
var xbK='xref NULL in '+x8Q.name+'="'+x8Q.location.href+'"';
dgo7.Xpr('RX onscroll:'+xbK,'warning');}
return true;}
function XLZ(x6v,XfA){
if(!x6v)return;
this.xUE=new Object;
this.x6v=x6v;
this.XfL=XfA.Xdl(this,this.x7W);
XfA.x6U().dgo38=this;
return true;}
XLZ.prototype={
x6K:false
,error:'ok'
,add:function(x8f){
this.xUE[x8f.getName()]=x8f;}
,remove:function(x8f,xfK){
var name=xfK||x8f.getName();
var x8e=this.xUE[name];
if(x8e){
this.xUE[name]=null;
return true;}
return false;}
,x8A:function(x5v){
var xYE=0;
for(var name in this.xUE){
x8e=this.xUE[name];
if(x8e){
this.x6v.remove(x8e,x5v)&&(++xYE);
this.xUE[name]=null;}}
this.xUE=new Object;
return xYE;}
,x8n:function(xfK){
var x8e=this.xUE[xfK];
return x8e||null;}
,x7y:function(){
var Xn6=this.x6v;
var XLk=Xn6.XCI;
Xn6.XXO(true);
var xYE=0;
var x8e;
if(XLk.XRN().XTw){
for(var name in this.xUE){
x8e=this.xUE[name];
if(x8e){
x8e.xb1()&&(xYE+=1);
x8e.XL0();}}}
else{
try{
for(var name in this.xUE){
x8e=this.xUE[name];
if(x8e){
x8e.xb1()&&(xYE+=1);
x8e.XL0();}}}
catch(xa8){
var xaw=new x6C(xa8);
XLk.Xpr('RX refresh:'+xaw,'exc');}}
Xn6.XXO(false);
return xYE;}
,x6v:null,xUE:null,XfL:null
,x7W:function(XfA){
var xbK=XfA.toString();
var x8e;
for(var name in this.xUE){
xbK+=';'+name;
x8e=this.xUE[name];
if(x8e){xbK+='!';
try{
this.x6v.remove(x8e,false,name);}
catch(xa8){}
try{
if(this.remove(x8e,name)){
xbK+='!';}}
catch(xa8){}}}
try{
xA8(XfA.x6U(),
'resize',
this.x6v.x8Y,
xA4);}
catch(xa8){}
try{
var xa7=XfA.XfI(this.XfL);}
catch(xa8){
xa7=-1;}
try{
XfA.x6U()&&
XfA.x6U().dgo38&&
XfA.x6U().dgo38.x8A(true);}
catch(xa8){}
try{
XfA.x6U().dgo38=undefined;
XfA.x6U().dgop=null;}
catch(xa8){}
try{
this.x6v.XCI.Xpr('RX onunload_:'+xbK);}
catch(xa8){}
return true;}
,XMf:function(xVG,XV6){
var XLk=this.x6v.XCI;
if(this.x6v.XV1()){
XLk.Xpr('Onscroll inhibited');
return true;}
var xuQ=XLk.XRN().xuQ;
(xuQ>=1)&&XLk.Xpr(
'Onscroll "'+xVG.name+'"='+xVG.location,'user',2);
(xuQ>=2)&&XLk.Xpr('RX Objects:'+this.x6v);
var x8e,name,XM6;
for(name in this.xUE){
x8e=this.xUE[name];
if(x8e&&(x8e.x4X())){
XM6=(!x8e.x6U());
(xuQ>=2)&&XLk.Xpr(
'RX onscroll_('+XV6+'):"'+name+'"');
x8e.onscroll(XV6);
XM6&&x8e.XL0();}
else{
(xuQ>=2)&&XLk.Xpr(
'RX onscroll_ nothing:"'+name+'"');}}
var xHL=xVG;
while(xHL&&(xHL=(xHL==xHL.parent?null:xHL.parent))){
if(typeof(xHL.dgo38)=='object'&&xHL.dgo38){
(xuQ>=1)&&XLk.Xpr('Onscroll parent:"'+
xHL.name+'"='+xHL.location);
xHL.dgo38.XMf(xHL,XV6);
xHL=null;}}
(xuQ>=1)&&XLk.Xpr('Onscroll done');
return true;}}
if(self.XI7){XI7.XJB(new XIX('../render_container.js',
['../frame.js',
'../imagedir.js',
'../render_base.js',
'../render.js']));}

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
