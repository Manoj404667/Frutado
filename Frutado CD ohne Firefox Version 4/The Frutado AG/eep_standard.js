
//
function XBs(xaz,x9Q,XKQ){
var xUG=x9Q||window;
if(xaz=='')
return xUG;
var options=XKQ||0;
var path=xaz.split(':');
for(var i=0;xUG&&i<path.length;++i){
var XFi=path[i]-0;
xUG=(XFi<xUG.frames.length?xUG.frames[XFi]:null);}
return xUG;}
function xjH(xVG,xaz,XKQ,XKF,Xjk){
var xbF=xVG.document.body;
if(xaz=='')
return xbF;
xbF=Xjk||xbF;
var options=XKQ||0;
var XKE=XKF||new Object;
XKE.Xl='frame '+xVG.name+'="'+xVG.location.href+'";';
var path=xaz.split(':');
var i,XFi,children,ii,child,type;
for(i=0;xbF&&i<path.length;++i){
XFi=path[i]-0;
children=(options & 1
?xbF.childNodes 
:xbF.children||xbF.childNodes);
xbF=null;
XKE.Xl+=(i+1)+'.)'+children.length+' children.\r\n';
for(ii=0;xbF==null&&ii<children.length;++ii){
child=children[ii];
type=(options & 1&&child.tagName&&child.tagName=='!'?
8:child.nodeType);
XKE.Xl+=' '+ii+'/'+XFi+':'+xap(child);
if(type==1&&XFi==0){
XKE.Xl+=' ok.';
xbF=child;}
else{
if(options & 1){
if(type==1){--XFi;}}else{
if(type!=3){--XFi;}}}
XKE.Xl+='\r\n';}}
return xbF;}
////
function Eep_generate(XGT,xVG){
var eep_useInnerText=':A:TD:SPAN:NOBR:LABEL:';
var eep_textTruncation=50;
var x1K=(XGT.nodeType==3?XGT.parentNode:XGT);
var options=1+(eep_useInnerText?2:0);
var xzg='eep_path="'+XJv(x1K,1)+'";\r\n';
xzg+='eep_options='+options+';eep_version="6.1.1";\r\n';
xzg+=('eep_atts={'+XJs(
x1K,xVG,options,eep_useInnerText,eep_textTruncation)+'};\r\n');
xzg+=('eep_coll={'+xdQ(
x1K,xVG)+'};\r\n');
xzg+=('eep_parents=['+XJt(
x1K,xVG,options)+'];');
return xzg+'\r\neep_siblingTags2="'+
XJu(x1K)+'";';}
function XJv(XGT,XKQ){
var options=XKQ||0;
if(options & 4){
return XrE(XGT,options);}
var XDu='';var x=XGT;var i,ii,xHL,children,xjI,child;
if(x.nodeType==3||
(x.tagName&&x.tagName!='APPLET'&&x.tagName!='EMBED'&&
(x.tagName!=x.tagName.toUpperCase()||
x.toString().indexOf('XUL')>=0)))
{
x=x.parentNode;}
while(x&&(xHL=x.parentNode)!=null&&
typeof(x.tagName)=='string'&&
x.tagName!='BODY'&&x.tagName!='FRAMESET')
{
children=(options & 1
?xHL.childNodes 
:xHL.children||xHL.childNodes);
xjI=-1;
for(ii=0;child!=x&&ii<children.length;++ii){
child=children[ii];
if(options & 1){
if(child.nodeType==1&&child.tagName!='!'){
++xjI;}}
else{if(child.nodeType!=3){++xjI;}}}
if(child!=x){
alert('Simple EP generation error(child not found)at\n"'+
XDu+'",'+ii+','+xjI+':\n'+xap(XGT));
return '';}
if(XDu)
XDu=':'+XDu;
XDu=xjI+XDu;
x=xHL;}
return XDu;}
var XKU=['id','name','tagName','type'];
function XJs(
XGT,xVG,XKQ,x8z,Xb9)
{
var XH1='';
var i,XCM,xoQ,t;
for(i=0;i<XKU.length;++i){
XCM=XKU[i];
xoQ=XGT[XCM];
t=typeof(xoQ);
if(xoQ&&t=='string'){
if(XCM=='id'){
var xbF;
if(xVG.document.all&&
(xbF=xVG.document.all[xoQ])&&
typeof(xbF.length)=='number'&&
xbF.length!=1)
{}}
if(XCM=='name'){
if(xVG.document.getElementsByName(xoQ).length!=1){}}}
if(xoQ||(t!='undefined'&&t!='unknown'&&t!='string')){
if(XH1)
XH1+=',';
if(XCM=='type'&&xoQ=='radio'){
XH1+=('value:'+XGT.value.XPC()+',');}
if(t=='number'){
XH1+=(XCM+':'+xoQ);}else{
if(XCM=='tagName'&&xoQ=='FRAME'){
xoQ='BODY';}
XH1+=(XCM+':"'+xoQ+'"');}}}
if(XGT.tagName&&x8z&&
x8z.indexOf(':'+XGT.tagName+':')>=0)
{var t=Xkm(
XGT,Xb9,true);
if(t){
XH1+=(Xb9>0
?',L:'+Xb9+',firstText:'+t.XPC()
:',firstText:'+t.XPC());}}
return XH1;}
function Xkm(XGT,Xb9,Xb7){
var xpK=Xkn(XGT);
if(!xpK||typeof(xpK.nodeValue)!='string'){
return '';}
var xd2=(new String(xpK.nodeValue)).XZA();
return Xb9>0&&xd2.length>Xb9
?xd2.substr(0,Xb9)+(Xb7?'^':'')
:xd2;}
var Xkj=/[']?[^ \r\n\t][']?/;
function Xkn(XGT){
var children=XGT.childNodes||[];var xpK;
for(var i=0;i<children.length;++i){
xpK=children[i];
if(xpK.nodeType&&xpK.nodeType==3&&
xpK.nodeValue.search(Xkj)>=0)
{
return xpK;}}
return null;}
function XJt(XGT,xVG,XKQ,x8z){
if(!XGT||XGT.tagName=='BODY'||
XGT.tagName=='FRAME'||!XGT.parentNode)
{
return '';}
var XH1='';
var xHL=XGT.parentNode;
while(xHL&&xHL.tagName!='BODY'&&xHL.tagName!='FRAME'){
XH1+=(',\r\n{'+XJs(
xHL,xVG,XKQ,x8z)+'}');
xHL=xHL.parentNode;}
return XH1.substr(3);}
function XJu(XGT){
if(!XGT||!XGT.parentNode||
XGT.tagName=='BODY'||XGT.tagName=='FRAME')
{
return '';}
var XH1='';
var children=XGT.parentNode.childNodes;var child;
for(var i=0;i<children.length;++i){
child=children[i];
if(child.nodeType==1&&child.tagName!='!'){
if(child.tagName.substr(0,1)!='/'){if(child==XGT){
XH1+=(':_'+children[i].tagName+'_');}
else{
XH1+=(':'+children[i].tagName);}}}}
return XH1.substr(1);}
function xdQ(xFR,xVG){
var xd2=Xab(xFR,xVG);
return(xd2?
'n:"'+xd2.n+'",i:'+xd2.i+',ii:'+xd2.ii:
'n:"",i:0,ii:-1');}
function Xab(xFR,xVG){
if(!xFR){
return null;}
var xd2=null;
switch(xFR.tagName){
case 'INPUT':
case 'TEXTAREA':
case 'SELECT':
case 'OPTION':
case 'BUTTON':
case 'FORM':
xd2=xzM('forms',xFR,xVG);
break;
case 'IMG':
xd2=xzM('images',xFR,xVG);
break;
case 'A':
xd2=xzM(
(xFR.name?'anchors':'links'),xFR,xVG);
break;
case 'DIV':
xd2=xzM('layers',xFR,xVG);
break;
case 'APPLET':
xd2=xzM('applets',xFR,xVG);
break;
case 'EMBED':
xd2=xzM('embeds',xFR,xVG);
break;
default:
break;}
return xd2;}
function xzM(XCm,xFR,xVG){
var XCl=(xVG?xVG.document[XCm]:null);
if(typeof(XCl)=='object'&&XCl&&typeof(XCl.length)=='number'){
var XCk;
var ii;
for(var i=0;i<XCl.length;++i){
XCk=XCl[i];
if(XCk==xFR){
return{n:XCm,i:''+i,ii:'-1'};}
else if(typeof(XCk)=='object'&&typeof(XCk.length)=='number'){
for(ii=0;ii<XCk.length;++ii){
if(XCk[ii]==xFR){
return{n:XCm,
i:''+i,ii:''+ii};}}}}}
return{n:'',i:'0',ii:'-1'};}
function Xki(XGT,xVG){
var XCl=Xab(XGT,xVG)||
{n:'',i:'0',ii:'-1'};
return new ElementRef(
XJv(XGT),
XCl.n,XCl.i,XCl.ii,
Eep_generate(XGT,xVG));}
function XJy(xVG,XFh,Xb1){
if(!XFh)
return null;
if(!Xb1&&Xb5(XFh)){
return 'dgo';}
if(xVG.document.all&&
xVG.document.all[XFh]&&
typeof(xVG.document.all[XFh].length)=='number'&&
xVG.document.all[XFh].length!=1)
{return xVG.document.all[XFh].length;}
return xVG.document.getElementById(XFh);}
function XJz(xVG,xfK,XkR,XKD){
if(!xfK)
return null;
var XKI=xVG.document.getElementsByName(xfK);
if(XKI.length==0||XKD&&XKI.length>1){
return null;}
return XKI[0];}
function Xku(xVG,XkR,xGQ,xfK,XIH){
if(XkR!='INPUT'&&xGQ!='radio'){
return null;}
var XKI=xVG.document.getElementsByName(xfK);
if(XKI.length==0){
return null;}
var x1K;
for(var i=0;i<XKI.length;++i){
x1K=XKI[i];
if(x1K.type=='radio'&&x1K.value==XIH){
return x1K;}}
return null;}
function Xkt(
xVG,XkR,x5n,XKQ,Xb9)
{
if(!x5n){
return null;}
if(Xb9>0&&x5n.length==Xb9+1&&
x5n.charAt(Xb9)=='^')
{
x5n=x5n.substr(0,Xb9);}
var x7S=[];
var XKI=xVG.document.getElementsByTagName(XkR);
var XL2=Xkp(x5n,XKQ);
var i,x1K,XL3;
if(XL2){
for(i=0;i<XKI.length;++i){
x1K=XKI[i];
XL3=Xkm(x1K,Xb9);
if(XL2==Xkp(XL3,XKQ)){
x7S[x7S.length]=x1K;}}}
else{
for(i=0;i<XKI.length;++i){
x1K=XKI[i];
XL3=Xkm(x1K,Xb9);
if(x5n==XL3){
x7S[x7S.length]=x1K;}}}
return(x7S.length==1?x7S[0]:null);}
function xhC(xVG,XkR,Xk7){
return null;}
function Xkr(XGT,XDe,XKQ){
if(XDe.firstText){
var firstText=XDe.firstText;
var Xb8=XDe.L||0;
if(Xb8>0&&firstText.length==Xb8+1&&
firstText.charAt(Xb8)=='^')
{
firstText=firstText.substr(0,Xb8);}
var XCk=Xkp(firstText,XKQ);
if(XCk){
if(XCk!=Xkp(
Xkm(XGT,Xb8),XKQ))
{
return '!=TextRE';}}
else{
if(firstText.XZA()!=
Xkm(XGT,Xb8))
{
return '!=TextTRIM';}}}
return true;}
function XrE(XGT,XKQ){
var options=XKQ||0;
var XDu='';var x=XGT;var i,ii,xHL,children,xjI,child;
if(x.nodeType==3||
(x.tagName&&x.tagName!='APPLET'&&x.tagName!='EMBED'&&
(x.tagName!=x.tagName.toUpperCase()||
x.toString().indexOf('XUL')>=0)))
{
x=x.parentNode;}
var body;
if(x&&x.ownerDocument){body=x.ownerDocument.body;}
else{
var xHL=x;
while(xHL&&xHL.tagName!='BODY'){
xHL=xHL.parentNode;}
if(!xHL){
return 'EPerr:above_body';}
body=xHL;}
var xd2=XrF(body,x,XKQ);
return xd2===false?'EPerr:not_found':xd2;}
function XrF(xau,XGT,XKQ){
if(xau==XGT){
return '';}
var children=(XKQ & 1
?xau.childNodes 
:xau.children||xau.childNodes);
var xjI=-1;
var i,child,xa7;
for(i=0;i<children.length;++i){
child=children[i];
if(XKQ & 1){
if(child.nodeType==1&&child.tagName!='!'){
++xjI;}}
else{if(child.nodeType!=3){++xjI;}}
if(child.nodeType==1&&child.tagName!='!'&&
false!==(xa7=XrF(child,XGT,XKQ)))
{
return xa7?xjI+':'+xa7:''+xjI;}}
return false;}
function xap(XGT){
if(typeof(XA6)=='function'||
typeof(XA6)=='object')
{
return XA6(XGT);}
if(!XGT)
return '(null)';
if(typeof(XGT)!='object'){
return '"'+XGT+'" ['+typeof(XGT)+']';}
if(XGT.tagName)
return XGT.tagName;
if(XGT.nodeType)
return '(nodetype='+XGT.nodeType+')';
return '(?)';}
function xIF(){
Eep.prototype.Xb2=function(xVG,XGT){
var xMk=Xab(XGT,xVG);
if(!xMk||!xMk.n||!this.eep_coll.n){
return true;}
return(xMk.n==this.eep_coll.n&&
xMk.i==this.eep_coll.i&&
xMk.ii==this.eep_coll.ii?true:'!=COLL');}
Eep.prototype.XKO=function(XGT){
if(!XGT)
return false;
if(XGT.tagName=='BODY'||XGT.tagName=='FRAME')
return true;
var i=0;
var xHL=XGT.parentNode;
var parent,XNB;
while(xHL&&xHL.tagName!='BODY'&&xHL.tagName!='FRAME'&&
typeof(this.eep_parents[i])=='object')
{
parent=this.eep_parents[i];
XNB=parent.eep_atts||parent;
if(!XJw(xHL,XNB)){
return '!=PATH('+i+')';}
xHL=xHL.parentNode;
++i;}
return true;}
Eep.prototype.Xb4=function(XGT){
if(typeof(this.eep_siblingTags2)!='string'){
return true;}
return(XJu(XGT)==
this.eep_siblingTags2?true:'!=SIBL');}
Eep.prototype.xtG=function(xVG){
var XKH=null;
var path=this.eep_path;
var XKJ,Xb6,xbK;
for(var i=0;XKH==null&&i<this.eep_parents.length;++i){
path=path.substr(0,path.lastIndexOf(':'));
XKJ=this.eep_parents[i];
Xb6=XKJ.eep_atts||XKJ;
if(Xb6.id){
XKH=XJy(xVG,Xb6.id,false);
xbK='corr id "'+Xb6.id+'":'+xap(XKH);
if(typeof(XKH)!='object'){
XKH=null;}}
else if(Xb6.name){
XKH=XJz(
xVG,Xb6.name,true);
xbK='corr name "'+Xb6.name+'":'+
xap(XKH);}}
if(!XKH){
return false;}
var XBt=XJv(XKH,this.eep_options);
this.xaz=XBt+this.xaz.substr(path.length);
this.XGp(xbK+';corrEP "'+path+'"=>"'+
XBt+'"=>"'+this.xaz+'"');
return true;}}
if(self.XI7){XI7.XJB(new XIX(
'../eep_standard.js',['../eep.js'],xIF));}
else{
xIF();}

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
