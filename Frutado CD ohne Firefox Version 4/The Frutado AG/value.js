//
//
function X39(XCI,xsF){
this.XWs=false;
this.xfK='trackValue';
XLD.XHO(this,XCI,xsF);
this.xsF=xsF;
this.XAo=0;
this.XWq=false;
this.XWr=false;}
function X3a(){
X39.prototype=new XLD;
X39.prototype.xsF=null;
X39.prototype.x4f=function(){
var xbF=this.X8Z();
if(!xbF){
return false;}
var xGO=this.XCI.X4r(true);
var X6o=X33(xbF);
if(X6o){
var X6P=X6o.X5C();
if(X6P.name&&X6P.xGO==xGO.X3m()){
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr(
'V re-using "'+X6P.X62+'":'+this);}
this.XCI.x6b().XaS(X6P.name);
return true;}}
var xa7=this.XCI.X5P().X6n(
this.x6U(),xbF,this.xsF,xGO);
if(xa7&&(X6o=X33(xbF))){
this.XCI.x6b().XaS(X6o.X5C().name);}
return xa7;}
X39.prototype.x4r=function(XVK){
return true;}}
var XaU=0;
function X30(xEO,xVG,xcF,XFj,xsF,X6i){
if(!xEO)return;
++XaU;
var options=xsF.X5B();
var name=(xsF.getName()||'FLD_'+XaU);
this.xEO=xEO;
this.XFj=XFj;
this.X6f(name,X6i,options);
this.X6g(options);
if(xcF){
if(options & VALUE_PROTECTED){
this.X4k=true;}
if(options & VALUE_SNAPSHOT){
if(!(options & VALUE_GLOBAL)){
this.X5x(xVG);
this.xVG=xVG;
this.xcF=xcF;}}
else{
if(!(options & VALUE_GLOBAL)){
this.X5x(xVG);
this.XQP=xsF.X9Z();
this.xVG=xVG;
this.xcF=xcF;}
if(options & VALUE_INIT){
this.X91(xsF.X90());}
this.X5o(xVG,xcF);
var X7c=xVG.document.activeElement;if(X7c&&X7c==xcF){
this.X7Z(xcF,true);}}
this.xEO.X4G(this.X6Q,XFj,this.XOH(xcF));}
else{
this.xEO.X4G(this.X6Q,XFj,
this.X4F(xsF.X5N()));}
this.x6K=true;}
function X33(xcF){
var X6o=xcF.dgog;
if(!X6o&&xcF.tagName&&xcF.tagName=='INPUT'&&
xcF.type&&xcF.type=='radio')
{
var Xbe=XbS(xcF);
for(var i=0;!X6o&&i<Xbe.length;++i){
if(Xbe[i].dgog&&
Xbe[i].dgog.xQl==false)
{
X6o=Xbe[i].dgog;}}}
if(!X6o){
return false;}
return(X6o==X6o.X5I().X5H(
X6o.X5C(),X6o.XFj)?X6o:null);}
function X7f(xcF,X8L,Xl9){
var X1K;
if(xcF){
var type=(xcF.type||'');
switch(xcF.tagName||''){
case 'SELECT':
X1K=(xcF.multiple
?X7h:X7i);
break;
case 'TEXTAREA':
X1K=X7k;
break;
case 'INPUT':
switch(type){
case '':
case 'text':
case 'hidden':
case 'password':
X1K=X7k;
break;
case 'checkbox':
X1K=X7g;
break;
case 'radio':
X1K=Xl9?X7j:XfS;
break;
default:
break;}
break;
default:
break;}}
return X1K?X1K(xcF,X8L):null;}
function X34(XDx){
var X6o;
if(!(X6o=this.dgog)){
return true;}
var X9r=X6o.x6G()
?X7f(X6o.x6G(),true):null;
this.dgof=X6o.XOH(this);
X6o.xEO.X3z(X6o.X5C(),
X6o.XFj,'value',this.dgof,X9r,this);
return true;}
var X32={};
X32['click']='clickCount';
X32['dblclick']='dblclickCount';
X32['contextmenu']='rclickCount';
function X35(XDx){
var X6o;
if(!(X6o=this.dgog)){
return true;}
X6o.xEO.X3z(X6o.X5C(),this.XFj,
X32[XDx.type]);
return true;}
function X37(XDx){
if(!this.dgog){
return true;}
var type=XDx.type;
var X6o=this.dgog;
if(XDx.type=='mouseover'){
X6o.xEO.X3z(X6o.X5C(),
X6o.XFj,'mouse',true);}
else if(XDx.type=='mouseout'){
X6o.xEO.X3z(X6o.X5C(),
X6o.XFj,'mouse',false);}
return false;}
function X36(XDx){
if(!this.dgog||!this.dgoc){
return true;}
var type=XDx.type;
var X6o=this.dgog;
if(XDx.type=='focus'){
if(this.autocomplete){
this.dgor=this.autocomplete;
this.autocomplete='off';}
X6o.X7Z(this,true);
X6o.xEO.X3z(X6o.X5C(),
X6o.XFj,'focus',true);}
else if(XDx.type=='blur'){
if(this.dgor){
this.autocomplete=this.dgor;}
X6o.xEO.X3z(X6o.X5C(),
X6o.XFj,'focus',false);
X6o.X7Z(this,false);}
return true;}
function X31(XDx){
if(typeof(this.dgow)=='object'&&
this.dgow.length)
{
var X6r=this.dgow;
var X6o;
for(var i=0;i<X6r.length;++i){
X6o=X6r[i];
X6o.remove();}
this.dgow=null;}}
function Xmo(XDx){
if(XDx&&XDx.keyCode==XPT['enter']){
XP2(XDx);}
return true;}
X30.prototype={
x6K:false
,error:'ok'
,X5I:function(){
return this.xEO;}
,X5C:function(){
return this.X6Q;}
,X5z:function(){
return this.X4k;}
,x6U:function(){
return this.xVG;}
,x6G:function(){
return this.xcF;}
,X50:function(){
return this.xcF!=null&&this.XQP!=null&&this.XQP!=='';}
,X6d:function(X49){
this.X7N();}
,remove:function(){
this.xEO.X65(this.X6Q,this.XFj);
if(this.xVG&&this.xcF){
try{this.X7H(this.xVG,this.xcF);}
catch(xa8){
this.xEO.XCI.Xpr('V remove '+this.X6Q.X62+
':'+new x6C(xa8),'exc');}}
else{
this.xEO.XCI.Xpr('V remove '+this.X6Q.X62+
':no frame/el','warning');}}
,X7Z:function(xcF,X70){
return this.X7Y(xcF,X70);}
,xEO:null,X6Q:null,XFj:0,xVG:null,xcF:null,XQP:null,xGQ:0,X4k:false 
,X6f:function(xfK,X6i,XKQ){
this.X6Q=X3g(xfK,X6i,XKQ);}
,X6g:function(XKQ){
if(XKQ & VALUE_BOOL){
this.xGQ=VALUE_BOOL;}
else if(XKQ & VALUE_NUMBER){
this.xGQ=VALUE_NUMBER;}
else if(XKQ & VALUE_DATE){
this.xGQ=VALUE_DATE;}}
,X91:function(XIH){
if(!this.xcF){
return true;}
var xoQ;
if(typeof(XIH)=='undefined'){
if(typeof(this.xcF.dgoG)=='undefined'){
this.xcF.dgoG=this.XOH(this.xcF);
return true;}
xoQ=this.xcF.dgoG;}
else{
xoQ=XIH;}
this.X4S(this.X4F(xoQ));
this.xEO.XCI.Xpr(
'V init '+this.X6Q+'"'+xoQ+'"','success');}
,X4R:function(xcF){}
,XOH:function(xcF){
return this.X4F(this.X4R(xcF));}
,X4S:function(XIH){}
,X7N:function(){
return this.xcF
?this.X4S(this.X4F(this.XQP)):true;}
,X4F:function(XIH){
var value;
switch(this.xGQ){
case VALUE_BOOL:
value=!(!XIH);
break;
case VALUE_NUMBER:
value=XIH-0;
break;
case VALUE_DATE:
value=XIH;
break;
default:
value=XIH;
break;}
return value;}
,X7Y:function(xcF,X70){
return true;}
,X5x:function(xVG){
if(!xVG.dgow){
xA7(xVG,xVG,'unload',
X31,xA3);
xVG.dgow=[];}
xVG.dgow[
xVG.dgow.length]=this;}
,X5o:function(xVG,xcF){
xcF.dgog=this;
this.X5u(false,xVG,xcF);
this.X5b(false,xVG,xcF);
this.X5s(false,xVG,xcF);
this.X5m(false,xVG,xcF);}
,X7H:function(xVG,xcF){
this.X5u(true,xVG,xcF);
this.X5b(true,xVG,xcF);
this.X5s(true,xVG,xcF);
this.X5m(true,xVG,xcF);
xcF.dgog=null;}
,XUa:function(xsP,xVG,xcF,xfK,XUa,X60){
if(xsP){
xA8(xcF,xfK,XUa,
xA4);
return;}
var X6W=X60||120;
xA7(xVG,xcF,xfK,XUa,
xA2 |
xA3,X6W);}
,X5u:function(xsP,xVG,xcF){}
,X5b:function(xsP,xVG,xcF){
this.XUa(xsP,xVG,xcF,'click',X35)
this.XUa(xsP,xVG,xcF,'dblclick',X35)
this.XUa(xsP,xVG,xcF,'contextmenu',X35)}
,X5s:function(xsP,xVG,xcF){
this.XUa(xsP,xVG,xcF,'mouseover',X37)
this.XUa(xsP,xVG,xcF,'mouseout',X37)}
,X5m:function(xsP,xVG,xcF){
this.XUa(xsP,xVG,xcF,'focus',X36)
this.XUa(xsP,xVG,xcF,'blur',X36)}}
function X4w(xEO,xVG,xcF,XFj,xsF,X6i){
X30.XHO(this,xEO,xVG,xcF,XFj,xsF,X6i);}
X4w.prototype=new X30;
X4w.prototype.X4x=null;function X7k(xcF,X8L){
return xcF.value;}
X4w.prototype.X4R=function(xcF,X8L){
return X7k(xcF);}
X4w.prototype.X4S=function(XIH){
this.xcF.value=XIH;
this.X7Y(this.xcF,(this.xcF.value?true:false));
return true;}
X4w.prototype.X7Y=function(xcF,X70){
if(X70){
var Xka=[];
xYD(xcF,['backgroundImage'],Xka);
this.X4x=Xka[0];
xcF.style.backgroundImage='none';}
else{
if(!xcF.value&&this.X4x!=null){
xcF.style.backgroundImage=this.X4x;}}
return true;}
X4w.prototype.X5u=function(xsP,xVG,xcF){
this.XUa(xsP,xVG,xcF,'change',X34);
this.XUa(xsP,xVG,xcF,'keyup',X34);}
function X38(xEO,xVG,xcF,XFj,xsF,X6i){
X30.XHO(this,xEO,xVG,xcF,XFj,xsF,X6i);}
X38.prototype=new X30;
function X7g(xcF,X8L){
if(X8L){
return XQK(xcF.checked?'ON':'OFF');}
return(xcF.checked?'1':'0');}
X38.prototype.X4R=function(xcF){
return X7g(xcF);}
X38.prototype.X4S=function(XIH){
this.xcF.checked=(XIH&&XIH!=='0'?true:false);
return true;}
X38.prototype.X5u=function(
xsP,xVG,xcF)
{
this.XUa(xsP,xVG,xcF,'click',X34);}
function X3c(xEO,xVG,xcF,XFj,xsF,X6i){
X30.XHO(this,xEO,xVG,xcF,XFj,xsF,X6i);}
X3c.prototype=new X30;
function X7i(xcF,X8L){
if(X8L){
return xcF.options[xcF.selectedIndex].text;}
return(xcF.selectedIndex>=0?''+xcF.selectedIndex:'');}
X3c.prototype.X4R=function(xcF){
return X7i(xcF);}
X3c.prototype.X4S=function(XIH){
if(XIH==''){
XIH=0;}
else{
if(!XIH&&XIH!==0){
return false;}
XIH=(XIH-0);}
if(XIH<-1||XIH>=this.xcF.options.length){
return false;}
this.xcF.selectedIndex=XIH;
return true;}
X3c.prototype.X5u=function(
xsP,xVG,xcF)
{
this.XUa(xsP,xVG,xcF,'change',X34);
this.XUa(xsP,xVG,xcF,'keydown',Xmo);}
function X3b(xEO,xVG,xcF,XFj,xsF,X6i){
X30.XHO(this,xEO,xVG,xcF,XFj,xsF,X6i);}
X3b.prototype=new X30;
function X7h(xcF,X8L){
var xd2='';
var options=xcF.options;
for(var i=0;i<options.length;++i){
if(options[i].selected){
if(X8L){
xd2+=','+options[i].text;}
else{
xd2+=','+i;}}}
return xd2.substr(1);}
X3b.prototype.X4R=function(xcF){
return X7h(xcF);}
X3b.prototype.X4S=function(XIH){
if(typeof(XIH)=='number'){
XIH=''+XIH;}
if(typeof(XIH)!='string'){
return false;}
var Xka=XIH.split(',');
var options=this.xcF.options;
var i,XFi;
for(i=0;i<options.length;++i){
options[i].selected=false;}
for(i=0;i<Xka.length;++i){
XFi=Xka[i]-0;
if(XFi>=0&&XFi<options.length){
options[XFi].selected=true;}}
return true;}
X3b.prototype.X5u=function(
xsP,xVG,xcF)
{
this.XUa(xsP,xVG,xcF,'change',X34);}
function X7S(XDx){
var target=XDx.srcElement||XDx.target;
if(target&&target.tagName&&target.tagName=='INPUT'&&
target.type&&target.type=='radio')
{
var Xbe=XbS(target);
for(var i=0;i<Xbe.length;++i){
if(Xbe[i].dgog){
X34.XHO(Xbe[i],XDx);}}}
return true;}
function XDB(XDx){
return X7S.XHO(this,XDx);}
function X7Q(xEO,xVG,xcF,XFj,xsF,X6i,xQl){
this.xQl=!(!xQl);X30.XHO(this,xEO,xVG,xcF,XFj,xsF,X6i);}
X7Q.prototype=new X30;
X7Q.prototype.xQl=false;
function XfS(xcF,X8L){
return X7j(xcF,X8L,true);}
function X7j(xcF,X8L,Xl8){
if(X8L&&xcF.value){
return(xcF.checked?xcF.value:'');}
var Xbe=XbS(xcF);
if(Xbe.length<=0){return '';}
var xd2='';
var Xbb=(Xl8?false:true);
var Xbd,X6o;
for(var i=0;i<Xbe.length;++i){
Xbd=Xbe[i];
if(Xbd.checked){
xd2=''+i;}
if((X6o=Xbd.dgog)&&!X6o.xQl){
Xbb=false;}}
if(Xbb){
return X7g(xcF,X8L);}
return xd2;}
X7Q.prototype.X4R=function(xcF){
return X7j(xcF);}
X7Q.prototype.X4S=function(XIH){
var Xbe=XbS(this.xcF);
if(Xbe.length<=0){return 0;}
if((XIH=(XIH-0))>=Xbe.length){
return 0;}
Xbe[XIH].checked=true;
return Xbe.length;}
X7Q.prototype.X5u=function(
xsP,xVG,xcF)
{
var Xbe=XbS(this.xcF);
for(var i=0;i<Xbe.length;++i){
if(Xbe[i]==xcF){
this.XUa(xsP,xVG,xcF,'click',XDB);}
else{if(xsP){
xA8(Xbe[i],
'click',X7S);}
else{
xA7(xVG,Xbe[i],
'click',X7S,
xA2,120);}}}}
function XLj(XFj,XIH,XQP){
this.value=XIH;
this.X58={
XFi:XFj}}
XLj.prototype={
value:null
,mouse:false
,focus:false
,clickCount:0
,dblclickCount:0
,rclickCount:0
,X5N:function(){
return this.value;}
,valueOf:function(){
return this.value;}
,toString:function(){
return ''+this.value;}
,X58:null }
function X3d(XCI){
this.XCI=XCI;
this.X6S={};
this.X6E={};
this.x6K=true;}
var X7b='^/#';
function X3g(xfK,X6i,XKQ){
var options=XKQ||0;
var xd2;
if(options & VALUE_GLOBAL){
var name=xfK.X3m();
xd2={
xGO:''
,name:name
,X62:name}}
else{
xd2={
xGO:X6i.X3m()
,name:xfK.X3m()}
xd2.X62=xd2.xGO+X7b+xd2.name;}
return xd2;}
X3d.prototype={
x6K:false
,error:'ok'
,X5X:function(xsF){
this.X6n(null,null,
xsF,this.XCI.X4r(true));
return XMs;}
,X5V:function(xsF){
var options=xsF.X5B();
if(options & CLEAR_LOCAL_ALL){
this.X64();}
else if(options & CLEAR_ALL){
this.x8A();}
else{
var X6h=this.XCI.X4r(true);
var X6P=X3g(xsF.getName(),X6h,VALUE_GLOBAL);
var X6o=this.X5H(X6P);
if(!X6o){
X6P=X3g(xsF.getName(),X6h,0);
X6o=this.X5H(X6P);}
X6o&&X6o.remove();}
return XMs;}
,X6n:function(xVG,xcF,xsF,X6i){
var X6o=this.X6p(xVG,xcF,xsF,X6i);
if(!X6o){
return false;}
this.X6E[X6o.X5C().X62]=X6o;
return true;}
,X4G:function(X6Q,XFj,XIH){
var xGO=X6Q.xGO;
var name=X6Q.name;
var X6j;
if(xGO){
if(!this.X6S[xGO]){
this.X6S[xGO]={};
this.XCI.Xpr('V sub-par "'+xGO+'" created','info');}
X6j=this.X6S[xGO];}
else{
X6j=this.X6S;}
X6j[name]=new XLj(XFj,XIH);
this.XCI.Xpr('V "'+xGO+'.'+name+'"="'+
XIH+'" created','info');
return true;}
,X3z:function(X6Q,XFj,X3n,XIH,X9s,Xui){
var X6R=this.X5O(X6Q,XFj,true);
if(!X6R){
return false;}
if(XIH==undefined){
if(typeof(X6R[X3n])=='number'){
XIH=++(X6R[X3n]);}}
else{
if(X6R[X3n]==XIH){
return true;}
X6R[X3n]=XIH;}
if(X3n=='value'){
this.XBJ=XIH;
this.X9q=X9s;
this.Xv5=Xui;
this.XCI.Xpr('V changed "'+X6Q.xGO+'.'+
X6Q.name+'"="'+XIH+'" ['+
typeof(XIH)+']','info',2);}
return true;}
,x8A:function(){
var xYE=0;
var xuQ=(this.XCI.XRN().xuQ>=3);
var X62,xoQ;
for(X62 in this.X6E){
if(xoQ=this.X6E[X62]){
xoQ.remove();
xuQ&&this.XCI.Xpr('V cleared '+X62,'success');
xYE++;}}
this.X6S={};
this.X6E={};
return true;}
,X64:function(){
var xYE=0;
var xuQ=(this.XCI.XRN().xuQ>=3);
var X8P=this.XCI.XFJ().Xti();
var X6h,xkI,X62,xoQ;
for(var i=0;i<X8P.length;++i){
if(X6h=X8P[i]){
X6h=X6h.X3m()+X7b;
xkI=X6h.length;
xuQ&&this.XCI.Xpr('V clearing in "'+X6h+'"');
for(X62 in this.X6E){
if(xoQ=this.X6E[X62]){
if(X62.substr(0,xkI)==X6h){
xuQ&&this.XCI.Xpr(
'V cleared local '+X62,'success');
xoQ.remove();
xYE++;}}}}}
return xYE;}
,X65:function(X6Q,XFj){
this.X6E[X6Q.X62]=null;
var X6R=this.X5O(X6Q,XFj,true);
var xGO=X6Q.xGO;
var name=X6Q.name;
if(X6R){
var X6j=(xGO?this.X6S[xGO]:this.X6S);
X6j[name]=null;}
if(!X6R||this.XCI.XRN().xuQ>=3){
this.XCI.Xpr('V remove "'+xGO+'.'+name+'"',
X6R?'info':'warning');}
return(X6R?true:false);}
,XA7:function(){
return this.XBJ;}
,X9j:function(){
return this.X9q;}
,XvS:function(){
if(this.Xv5){
return this.Xv5;}
else{
var xoQ;
for(var X62 in this.X6E){
if((xoQ=this.X6E[X62])&&xoQ.X50()){
if(xoQ.XOH(xoQ.xcF).toUpperCase()!=xoQ.XQP.toUpperCase()){
return xoQ.xcF;}}}}}
,XED:function(){
this.XBJ=null;
this.X9q=null;
this.Xv5=null;}
,X5H:function(X6Q,XFj){
return(this.X5O(X6Q,XFj,true)
?(this.X6E[X6Q.X62]==undefined
?null:this.X6E[X6Q.X62])
:null);}
,X5I:function(X4e,X4j){
var xd2=[];
var xoQ,xGO;
for(var X62 in this.X6E){
if(xoQ=this.X6E[X62]){
xGO=xoQ.X5C().xGO;
if((X4e&&!xGO||!X4e&&xGO)&&
(X4j||!xoQ.X5z()))
{
xd2[xd2.length]=xoQ;}}}
return xd2;}
,XMV:function(){
var xYE=0;
var xoQ;
for(var X62 in this.X6E){
if((xoQ=this.X6E[X62])&&xoQ.X50()){
xoQ.X6d();
++xYE;}}
return xYE;}
,XEJ:function(){
return this.X6S;}
,X82:function(){
var xd2=[];
var X6q=this.X5I(
false,false);
var X6o,xUG,xbF,Xbe,ii;
for(var i=0;i<X6q.length;++i){
X6o=X6q[i];
xUG=X6o.x6U();
xbF=X6o.x6G();
if(xUG&&xbF){
if(xbF.tagName=='INPUT'&&xbF.type=='radio'&&
!X6o.xQl)
{
var Xbe=XbS(xbF);
for(var ii=0;ii<Xbe.length;++ii){
xd2[xd2.length]=[xUG,Xbe[ii],4];}}
else{
xd2[xd2.length]=[xUG,xbF,4];}}}
return xd2;}
,toString:function(){
var XYA='par:';
var X6h,xGO,XCM;
for(X6h in this.X6S){
xGO=this.X6S[X6h];
XYA+=X6h+':{';
if(xGO){
for(XCM in xGO){
if(xGO[XCM]){
XYA+=XCM+'="'+xGO[XCM]+'";';}}}
XYA+='}';}
var XYB='map:';
for(XCM in this.X6E){
XYB+=XCM+(this.X6E[XCM]?'+':'-');}
return 'Values={'+XYA+';'+XYB+'}';}
,XCI:null 
,X6S:null
,X6E:null,X7J:0,XBJ:null,X9q:null,Xv5:null 
,X5O:function(X6Q,XFj,x5r){
var xGO=X6Q.xGO;
var name=X6Q.name;
var X6j;
if(xGO){
if(typeof(this.X6S[xGO])!='object'){
if(!x5r){
this.XCI.Xpr('V sub-par "'+xGO+'" not found','error');}
return null;}
X6j=this.X6S[xGO];}
else{
X6j=this.X6S;}
if(typeof(X6j[name])!='object'){
if(!x5r){
this.XCI.Xpr('V "'+name+'" in sub-par "'+
xGO+'" not found(1)['+typeof(X6j[name])+']','error');}
return null;}
var xd2=X6j[name];
if(typeof(xd2)!='object'||!xd2||!xd2.X58){
if(!x5r){
this.XCI.Xpr('V "'+name+'" in sub-par "'+
xGO+'" not found(2)['+typeof(xd2)+']','error');}
return null;}
if(XFj==undefined){
return xd2;}
if(XFj!=xd2.X58.XFi){
if(!x5r){
this.XCI.Xpr('V "'+name+'" in sub-par "'+
xGO+'" not up-to-date:idx '+XFj+'/'+
xd2.X58.XFi,'error');}
return null;}
return xd2;}
,X6p:function(xVG,xcF,xsF,X6i){
var X6o=null;
var XFi=++this.X7J;
if(!xVG&&!xcF){
X6o=new X30(this,null,null,XFi,xsF,X6i);}
else if(xcF.tagName=='TEXTAREA'||xcF.tagName=='INPUT'&&
(xcF.type=='text'||xcF.type=='hidden'||xcF.type=='password'))
{
X6o=new X4w(this,xVG,xcF,XFi,xsF,X6i);}
else if(xcF.tagName=='SELECT'){
X6o=(xcF.multiple
?new X3b(this,xVG,xcF,XFi,xsF,X6i)
:new X3c(this,xVG,xcF,XFi,xsF,X6i));}
else if(xcF.tagName=='INPUT'){
if(xcF.type=='checkbox'){
X6o=new X38(
this,xVG,xcF,XFi,xsF,X6i);}
else if(xcF.type=='radio'){
if(xsF.X5B()& VALUE_RADIO_SINGLE){
X6o=new X7Q(this,xVG,xcF,
XFi,xsF,X6i,true);}
else{
X6o=new X7Q(this,xVG,xcF,
XFi,xsF,X6i);}}}
else{
this.XCI.Xpr(
'V cannot create:tag!=input,textarea,select('+
XA6(xcF)+')','error');
return false;}
return X6o;}}
function X3e(xEO,XUM){
this.xEO=xEO;
this.XCI=xEO.XCI;
this.XUM=XUM;}
function X3f(
XDw,ctx_control,ctx_par,X4H)
{
var ctx=ctx_control;
if(X4H){
with(ctx_control){
with(ctx_par){
with(X4H){
return(eval(XDw)?true:false);}}}}
else{
with(ctx_control){
with(ctx_par){
return(eval(XDw)?true:false);}}}}
X3e.prototype={
toString:function(){
var xbK;
if(typeof(this.XUM)!='object'||!this.XUM){
xbK='[empty]';}
else if(this.XUM.rules==undefined){
xbK='"'+this.XUM.desc+'":'+this.XUM.js;}
else if(typeof(this.XUM.rules)){
if(this.XUM.combine===1){
xbK='OR:';}
else{
xbK='AND:';}
var X6a;
for(var i=0;i<this.XUM.rules.length;++i){
X6a=this.XUM.rules[i];
xbK+=i+':"'+X6a.desc+'":'+X6a.js+';';}}
else{
xbK='[invalid]';}
return 'ValuesCondition={'+xbK+'}';}
,xvD:function(Xcz){
if(!this.XUM||typeof(this.XUM)!='object'){}
else if(this.XUM.rules==undefined){
var xa7=this.X4A(this.XUM.js);
if(xa7===false){
return{
xjM:false
,desc:this.XUM.desc
,highlights:this.XUM.highlights
,bubble:this.XUM.bubble};}
else if(xa7!==true){
return{xjM:false,desc:xa7};}}
else if(typeof(this.XUM.rules)){
if(this.XUM.combine===1){
return this.X4C();}
else{
return this.X4B(Xcz);}}
else{
return{xjM:false,desc:'[invalid condition]'};}
return{xjM:true,desc:''};}
,xEO:null,XUM:null 
,X4B:function(Xcz){
var rules=this.XUM.rules;
var desc='';
var highlights=[];
var xjM=true;
var X9u=XQK('EXER_AND');
var xa7,X6a;
for(var i=0;i<rules.length;++i){
X6a=rules[i];
xa7=this.X4A(X6a.js);
if(xa7===false){
if(!Xcz){
return{
xjM:false
,desc:X6a.desc
,highlights:X6a.highlights};}
xjM=false;
desc+=(desc?X9u+X6a.desc:X6a.desc);
highlights=highlights.concat(X6a.highlights);}
else if(xa7!==true){
xjM=false;
desc+=(desc?X9u+xa7:xa7);}}
return{xjM:xjM,desc:desc,highlights:highlights};}
,X4C:function(){
var rules=this.XUM.rules;
var desc='';
var X7E=XQK('EXER_OR');
var xa7,X6a;
for(var i=0;i<rules.length;++i){
X6a=rules[i];
xa7=this.X4A(X6a.js);
if(xa7===true){
return{xjM:true,desc:''};}
else if(xa7===false){
desc+=(desc?X7E+X6a.desc:X6a.desc);}
else if(xa7!==true){
desc+=(desc?X7E+xa7:xa7);}}
return{xjM:false,desc:desc};}
,X4A:function(X6b){
if(typeof(X6b)!='string'){
return '[invalid rule:type '+typeof(X6b)+']';}
var xa7={};
var xGO=this.XCI.X4r(false).X3m();
var xOL=this.xEO.XEJ();
var X6j=(typeof(xOL[xGO])=='object'?xOL[xGO]:null);
if(this.XCI.XRN().XTw){
xa7.xd2=X3f(X6b,
this.XCI.Xlf().Xls(),xOL,X6j);}
else{
xa7=X3f.xkF(X6b,
this.XCI.Xlf().Xls(),xOL,X6j);}
if(xa7.type){var xbK=xa7.type+' in javascript condition:\r\n'+xa7;
this.XCI.Xpr('V '+xbK,'exc');
if(this.XCI.XRN().xhg){
alert(xbK);}
return '[exc '+xa7.type+' evaluating rule]';}
return xa7.xd2;}}
if(self.XI7){XI7.XJB(new XIX('../value.js',
['../render_base.js','../render_container.js','dict.js'],
X3a));}
else{
X3a();}

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
