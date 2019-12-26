//
//
function xLC(xAD,x9Q,xFO){
this.x9C=xAD;
if(xAD.charAt(xAD.length-1)!='/'){
xAD+='/';}
this.x8C=xFO.XUs;
this.x9Q=x9Q;
this.xFO=xFO||{};
this.x6K=true;}
xLC.prototype={
x6K:false
,XuP:[]
,XSn:function(x9Q){
this.x9Q=x9Q;
return true;}
,xwK:function(XGR,XPy){
return this.x9Q.document.getElementById(this.xeO(XGR,XPy));}
,XYw:function(XGR){
if(XGR.xFI()&&XGR.XGZ){
return 'space';}
return 'port';}
,xLQ:function(XGR){
var s='port_';
if(XGR.xFI()&&XGR.XGZ){
s+='empty';}else if(XGR.xBL){
s+='opened';}else{
s+='closed';}
return this.x8C+'/'+s+'.gif';}
,xJQ:function(XGR){
var xkM=this.x9C+'/'+XGR.type;
for(var i=0;i<XGR.x2P.x1N.length;++i){
var xkP=XGR.x1N[XGR.x2P.x1N[i]];
if(xkP){
xkM+='_'+xkP;}}
xkM+='.gif';
return xkM;}
,xeO:function(XGR,XPy){
return XGR.id+'_tree'+XPy;}
,xfO:function(XGR,XHS,XPy){
return '<img border=0 src="'+XHS+'" class="tree'+XPy+
'" id='+this.xeO(XGR,XPy)+'>';}
,xWO:function(XGR,XPy,x6n,xji){
var t='<td valign=top class="tree'+XPy+'"';
var s='';
var xxk=xji||{};
if(xxk.XPv){
t+=' align=center';}
if(xxk.colspan&&xxk.colspan>1){
t+=' colspan='+xxk.colspan;}
if(xxk.hint&&XGR&&XGR.hint){
t+=' title="'+XOi(XGR.hint)+'"';}
if(XGR){
t+=' id='+this.xeO(XGR,XPy);}
return t+'>'+'<div style="background-color:transparent;white-space:nowrap">'+
(xxk.XpX?XJn(x6n||''):(x6n||''))+'</div></td>\n';}
,XTC:function(XGR){
var t=
'<tr class='+"tree"+'>'+
this.xWO(XGR,'icon',
this.xfO(XGR,this.xJQ(XGR),'icim'))+
this.xWO(XGR,'title',XGR.title,{XpX:true,hint:true});
if(this.xFO.xGk){
return t+this.xWO(XGR,'data',XGR.xGk,{XpX:true});}
return t+'</tr>\n';}
,XTD:function(XGR,XQy,XQz){
var t='<table width=100% class='+"tree"+' cellpadding=0 cellspacing=0';
if(XQz){
t+=" onmousemove='if(this.dgoj)return "+
"this.dgoj.XQh(arguments[0],self,this);'"+
" onmouseout='if(this.dgoj)return "+
"this.dgoj.XQi(arguments[0],self,this);'"+
" onmousedown='if(this.dgoj)return "+
"this.dgoj.XQg(arguments[0],self,this);'"+
" onmouseup='if(this.dgoj)return "+
"this.dgoj.XQj(arguments[0],self,this);'"+
" onclick='if(this.dgoj)return "+
"this.dgoj.XQe(arguments[0],self,this);'"+
" ondblclick='if(this.dgoj)return "+
"this.dgoj.XQf(arguments[0],self,this);'"+
'"';}
t+=' id='+this.xeO(XGR,'')+'>\n'+this.XTC(XGR);
if(XQy&&XGR.xHI()&&!XGR.Xv3()){
var xVO,child;
for(var i=0;i<XGR.child.length;++i){
child=XGR.child[i];
if(!child.Xv3()){
if(this.XuP.search(child)==-1){
xVO=
'\n<tr class='+"treespace"+'>'+
this.xWO(null,'space','<img class='+"treespace"+
' src="'+this.x8C+'/1.gif">',{colspan:2})+
'</tr>'+
'\n<tr class='+"tree"+' id='+this.xeO(child,'tr')+'>'+
this.xWO(child,this.XYw(child),
this.xfO(child,this.xLQ(child),'poim'),
{XPv:true})+
this.xWO(child,'sub',
this.XTD(child,true),
{colspan:(this.xFO.xGk?2:1)})+
'</tr>\n';
t+=xVO;}}}}
return t+'</table>\n';}
,XZO:function(xFO,XFj,XRd,X17,XYq){
if(X17){
var xoQ;
for(var XCM in X17){
if(XCM=='cursor'){
xoQ=X17[XCM];
XAa(xFO,XCM,xoQ=='hand'?X2F:xoQ);}
else{
XAa(xFO,XCM,X17[XCM]);}}}
var XLn=(XYq?'1px solid '+XYq:'0px');
var x2k=(XYq?'1px':'2px');
XAa(xFO,'borderTop',XLn);
XAa(xFO,'borderBottom',XLn);
XAa(xFO,'paddingTop',x2k);
XAa(xFO,'paddingBottom',x2k);
if(XFj==0){
XAa(xFO,'borderLeft',XLn);
XAa(xFO,'paddingLeft',x2k);}
if(XFj==XRd-1){
XAa(xFO,'borderRight',XLn);
XAa(xFO,'paddingRight',x2k);}
return true;}
,xbD:function(XGR){
var img=this.xwK(XGR,'icim');
if(img){
var xMj=this.xJQ(XGR);
if(img.dgoq!=xMj){
img.dgoq=xMj;
img.src=xMj;}
return true;}
return false;}
,XPq:function(XGR,xGQ){
if(xGQ){
var style=this.xFO;
var XPu=this.xwK(XGR,'port');
if(XPu){
switch(xGQ){
case 1:this.XZO(XPu.style,0,1,
style.X1h,style.XSd);
break;
case 2:this.XZO(XPu.style,0,1,
style.X1j,style.X1g);
break;
case 3:this.XZO(XPu.style,0,1,
style.X1i,style.X1f);
break;
default:break;}}}
var img=this.xwK(XGR,'poim');
img&&(img.src=this.xLQ(XGR));
return true;}
,XPp:function(XGR,X1s){
var style=this.xFO;
var XZV=(style.xGk?[ 'icon','title','data' ]
:[ 'icon','title' ]);
var X1u=(X1s
?[ X1s.XZ1,X1s.X1y,X1s.XZW ]
:[ style.XZ1,style.X1y,style.XZW ]);
var borderColor=(X1s?X1s.borderColor
:style.XSC);
var XPu;
for(var i=0;i<XZV.length;++i){
if(XPu=this.xwK(XGR,XZV[i])){
this.XZO(XPu.style,i,XZV.length,X1u[i],borderColor);}}
return true;}}
function xMC(x2P,x3E,x7C,x8Q,xFO){
var XQO={
xGk:false
,XUs:'jswidget/icons'
,XSC:''
,X19:'#e0e0e0'
,X18:'#e0e0c0'
,XZ1:{
backgroundColor:'transparent',
cursor:'hand',
height:'16px',
width:'16px'}
,X1h:{
backgroundColor:'transparent',
cursor:'hand',
height:'16px',
width:'16px'}
,X1y:{
backgroundColor:'transparent',
color:'black',
cursor:'hand',
height:'auto',
textAlign:'left',
textDecoration:'none',
width:'auto'}
,X1z:{
backgroundColor:'#f0f0f0',
color:'blue',
cursor:'hand',
textDecoration:'underline'}
,XZl:{
backgroundColor:'#ffffe0',
color:'#000040',
cursor:'wait'}
,XZW:{
backgroundColor:'transparent',
color:'#404040',
cursor:'auto',
height:'auto',
textAlign:'left',
width:'auto'}
,XZY:{
backgroundColor:'#f0f0f0',
color:'#ffc0c0',
cursor:'text'}
,XZX:{
backgroundColor:'#ffff80',
color:'#ffffe0',
cursor:'wait'}};
var style=xFO||{};
var XCM,XZ0,X1e,X1v;
for(XCM in XQO){
if(typeof(style[XCM])=='undefined'){
style[XCM]=XQO[XCM];}
else if(typeof(style[XCM])=='object'&&
typeof(XQO[XCM])=='object')
{
X1e=style[XCM];
XZ0=XQO[XCM];
for(X1v in XZ0){
if(typeof(X1e[X1v])=='undefined'){
X1e[X1v]=XZ0[X1v];}}}}
var XNB=[
"portBorderColor","X1g","X1f",
"X1R","X1Q",
"X1j","X1i" ];
var XZZ=[
"nodeBorderColor","X19","X18",
"X1z","XZl",
"X1z","XZl" ];
for(var i=0;i<XNB.length;++i){
XCM=XNB[i];
if(typeof(style[XCM])=='undefined'){
style[XCM]=style[XZZ[i]];}}
this.x2P=x2P;
this.x3E=x3E;
this.x8Q=(x8Q?x8Q:window);
this.xTD=new xLC(x7C,this.x8Q,style);
this.x2P.xaJ=false;
this.x2P.xvQ=this;
this.X1l({
name:'_CLICK',
X1y:style.XZl,
XZ1:style.X1Q,
XZW:style.XZX,
borderColor:style.X18});
this.X1l({
name:'_MOUSE',
X1y:style.X1z,
XZ1:style.X1R,
XZW:style.XZY,
borderColor:style.X19});
this.x6K=true;}
xMC.prototype={
x6K:false
,XSn:function(x9Q){
this.x8Q=(x9Q||window);
if(this.xTD){
this.xTD.XSn(this.x8Q);}
return true;}
,x8F:function(){
this.xuE();
this.x3E.innerHTML='';
return true;}
,xuE:function(){
var XTZ=this.xTD.xwK(this.x2P.xpM,'');
if(XTZ){
XTZ.onmousemove=null;
XTZ.onmouseout=null;
XTZ.onmousedown=null;
XTZ.onmouseup=null;
XTZ.onclick=null;
XTZ.ondblclick=null;
XTZ.dgoj=null;}
var xa7=this.XoS(['_CLICK','_MOUSE']);
return true;}
,XuO:function(XuX){
this.xTD.XuP=XuX;}
,xSD:function(XGR){
if(this.x2P.xaJ){
return false;}
return this.XoJ(XGR);}
,XoJ:function(XGR){
var html,XTZ;
if(XGR&&XGR!=this.x2P.xpM){html=this.xTD.XTD(XGR,true);
XTZ=this.xTD.xwK(XGR,'sub');
if(!XTZ){
alert('TreeView error:Node "'+XGR+'" has no "'+
this.xTD.xeO(XGR,'sub')+'"!');
return false;}
XTZ.innerHTML=html;
this.x2P.XHj(XPJ,this,XGR);}
else{html=this.xTD.XTD(this.x2P.xpM,true,true);
this.x3E.innerHTML=html;
XTZ=this.xTD.xwK(this.x2P.xpM,'');
if(!XTZ){
alert('TreeView error:Tree root not found:"'+
this.xTD.xeO(this.x2P.xpM,'')+'"!');
return false;}
XTZ.dgoj=this.x2P.xvQ;
this.x2P.XHj(XPJ,this);}
return true;}
,open:function(XGR){
this.xTD.XPq(XGR);
return this.xSD(XGR);}
,add:function(XGR){
this.xSD();
return true;}
,x1N:function(XGR){
var XTB=this.x2P.x1N;
var XRB=false;
var XTA;
for(var i=0;!XRB&&i<XTB.length;++i){
XTA=XTB[i];
if(typeof(XTA)=='object'&&XGR.x1N[XTA.name]){
this.xTD.XPp(XGR,XTA);
XRB=true;}}
XRB||this.xTD.XPp(XGR);return this.xTD.xbD(XGR);}
,XHU:function(XGR){
var XHQ=this.xTD.xwK(XGR,'title');
if(!XHQ){
alert('Error in startEdit():Not found:"'+
this.xTD.xeO(XGR,'title')+'"!');
return false;}
if(!XHQ.focus){
return false;}
if(this.XDi&&XHQ!=this.XDi){
this.XDs();}
XHQ.focus();
this.XDi=XHQ;
this.Xlv=XGR;
this.XDj=XHQ.style.border;
this.XDl=XHQ.innerText;
this.XDk=this.x8Q.document.body.ondeactivate;
this.x8Q.document.body.Xlw=this;
this.x8Q.document.body.ondeactivate=XPI;
XHQ.contentEditable='true';
XHQ.style.border='1px solid black';
return true;}
,XDs:function(){
if(!this.XDi)
return false;
var XHQ=this.XDi;
XHQ.contentEditable='false';
XHQ.style.border=this.XDj;
var xpK=this.x2P.Xni(XHQ.id);
if(xpK){
var xRM=/^[ \t]*$/g;
if(XHQ.innerText.match(xRM)){
XHQ.innerText=this.XDl;}
else if(XHQ.innerText!=this.XDl){
xpK.title=XHQ.innerText;
xpK.action().XCb&&xpK.action().XCb(xpK);}}
XHQ.innerHtml=XHQ.innerText;
this.XDi=null;
this.Xlv=null;
this.XDj=null;
this.XDl=null;
this.x8Q.document.body.Xlw=null;
this.x8Q.document.body.ondeactivate=this.XDk;
this.XDk=null;}
,XQh:function(XPS,x9Q,XTH){
var xCi=this.XRZ(XPS,x9Q,XTH);
if(xCi&&xCi.x8D&&xCi.xpK){
xCi.x8D=='port'?
this.xTD.XPq(xCi.xpK,2):
xCi.xpK.xkD('_MOUSE',true);
return true;}
return false;}
,XQi:function(XPS,x9Q,XTH){
var xCi=this.XRZ(XPS,x9Q,XTH);
if(xCi&&xCi.x8D&&xCi.xpK){
xCi.x8D=='port'?
this.xTD.XPq(xCi.xpK,1):
xCi.xpK.xkD('_MOUSE',false),
xCi.xpK.xkD('_CLICK',false);
return true;}
return false;}
,XQg:function(XPS,x9Q,XTH){
var xCi=this.XRZ(XPS,x9Q,XTH);
if(xCi&&xCi.x8D&&xCi.xpK){
xCi.x8D=='port'?
this.xTD.XPq(xCi.xpK,3):
xCi.xpK.xkD('_CLICK',true);
return true;}
return false;}
,XQj:function(XPS,x9Q,XTH){
var xCi=this.XRZ(XPS,x9Q,XTH);
if(xCi&&xCi.x8D&&xCi.xpK){
xCi.x8D=='port'?
this.xTD.XPq(xCi.xpK,1):
xCi.xpK.xkD('_CLICK',false);
return true;}
return false}
,XQe:function(XPS,x9Q,XTH){
var xCi=this.XRZ(XPS,x9Q,XTH);
if(!xCi||!xCi.x8D){
return false;}
switch(xCi.x8D){
case 'port':
var XGm=this.x2P.xaJ;
this.x2P.xaJ=false;
xCi.xpK.xjP();
this.x2P.xaJ=XGm;
break;
case 'icon':
xCi.xpK.action().xEN&&xCi.xpK.action().xEN(xCi.xpK);
break;
case 'title':
case 'data':
xCi.xpK.action().xOJ&&xCi.xpK.action().xOJ(xCi.xpK);
break;
default:
return false;}
return true;}
,XQf:function(XPS,x9Q,XTH){
var xCi=this.XRZ(XPS,x9Q,XTH);
if(!xCi||!xCi.x8D){
return false;}
switch(xCi.x8D){
case 'port':
var XGm=this.x2P.xaJ;
this.x2P.xaJ=false;
xCi.xpK.xjP();
this.x2P.xaJ=XGm;
break;
case 'icon':
case 'title':
case 'data':
xCi.xpK.action().X4I&&xCi.xpK.action().X4I(xCi.xpK);
break;
default:
return false;}}
,XRZ:function(XPS,x9Q,XTH){
var xrF=XPS||x9Q.event;
var xbF=xrF.srcElement||xrF.target;
var x8D=xbF.className;
while(xbF&&
(xbF.tagName!='TD'||
(x8D!='treeport'&&x8D!='treeicon'&&
x8D!='treetitle'&&x8D!='treedata')))
{
xbF=xbF.parentNode;
xbF&&(x8D=xbF.className);}
if(!xbF){
return null;}
return{xbF:xbF
,x8D:x8D.substr(4)
,xpK:this.x2P.Xni(xbF.id)};}
,XoS:function(XZw){
var xYE=0;
var X1t=this.x2P.x1N;
var XTA;
for(var i=0;i<X1t.length;++i){
XTA=X1t[i];
if(typeof(XTA)=='object'&&XTA.name&&
XZw.search(XTA.name)>=0)
{
++xYE;
X1t[i]=null;}}
X1t.X67();
return xYE;}
,X1l:function(X1s){
var X1t=this.x2P.x1N;
var xPB=-1;
var XTA;
for(var i=0;i<X1t.length&&xPB<0;++i){
XTA=X1t[i];
if(typeof(XTA)=='object'&&XTA.name==X1s.name){
xPB=i;}}
(xPB<0)&&(xPB=X1t.length);
X1t[xPB]=XA4(X1s);
return xPB;}}
function XPJ(XGR,XT0){
XT0.x1N(XGR);}
function XPI(){
this.Xlw.Xlv.x2P.xvQ.XDs();}
if(self.XI7){
XI7.XJB(new XIX('tree_explorer.js',
['tree.js','dhtml.js']));}

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
