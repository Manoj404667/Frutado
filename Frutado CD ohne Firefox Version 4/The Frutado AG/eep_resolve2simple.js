
//
//
function Eep_resolve2simple(xVh,xcG,x9Q,XKQ,XKF){
var xUG=XBs(xcG,x9Q);
if(!xUG)
return-1;
var eep_resolveOptions={
eep_firstTextRe:null
,eep_useText:true
,eep_version:'6.1.1'};
var XHZ=new Eep(xVh,eep_resolveOptions);
var x1K=XHZ.eep_resolve(xUG,XKF);
return(typeof(x1K)=='object'?XJv(x1K,XKQ):x1K);}
////
var Eep_resolve;
var eep_resolveOptions={
eep_firstTextRe:null
,eep_useText:true
,eep_version:'6.1.1'};
Eep_resolve=function(xVh,xVG,XKF){
var XHZ=new Eep(xVh,eep_resolveOptions);
return XHZ.eep_resolve(xVG,XKF);}
//
//
function Xkq(XCI,xVG){
if(!XCI){
return null;}
if(typeof(xVG)!='object'||!xVG||xVG!=xVG.self){
return null;}
if(xVG==XCI.XJ1()){
return '-1';}
if(xVG==XCI.XvR(xVG)){
var XYc=XCI.Xd6().Xd7(xVG);
if(XYc){return XYc+':-3';}}
var X2A=XCI.X1O(xVG);
var XYc=XCI.Xd6().Xd7(X2A);
var xPG=Xko(xVG,X2A);
if(typeof(xPG)!='string'){
return null;}
if(XYc){return XYc+(xPG?':'+xPG:'');}
return false;}
//
function Xko(xVG,xlP){
var i=1;
var path='';
var xUG=xVG;
var parent=xVG.parent;
while(parent&&xUG!=parent&&xUG!=xlP&&
(!xUG.window||xUG.window!=xlP.window))
{
var XHB=true;
for(var ii=0;
ii<parent.frames.length&&XHB;
++ii)
{
try{
if(xUG==parent.frames[ii]||
(xUG.window&&(xUG.window==parent.frames[ii].window)))
{
XHB=false;
path=':'+ii+path;}}
catch(xa8){}}
xUG=parent;
parent=xUG.parent;
++i;}
return path.substr(1);}
function Xkp(x5n,XKQ){
if(!XKQ||
!XKQ.eep_firstTextRe||
typeof(XKQ.eep_firstTextRe.exec)!='function')
{
return null;}
var xa7=XKQ.eep_firstTextRe.exec(x5n);
if(!xa7||xa7.length<=1){return '';}
var xd2='';
for(var i=1;i<xa7.length;++i){
xd2+=xa7[i];}
return xd2;}
function Xks(XGT,XDe){
if(!XGT)
return false;
if(XGT.tagName){
if(XGT.tagName!=XDe.tagName){
return((XGT.tagName=='INPUT'||
XGT.tagName=='TEXTAREA'||
XGT.tagName=='SELECT')&&
(XDe.tagName=='INPUT'||
XDe.tagName=='TEXTAREA'||
XDe.tagName=='SELECT')?true:'!=TAG');}
if(XGT.tagName=='INPUT'&&
XGT.type=='radio'&&XDe.type=='radio'&&
XGT.value&&XGT.value!=XDe.value)
{
return '!=RadioVAL';}}
return true;}
function XJw(XGT,XDe,XKQ){
var xa7;
if(true!==(xa7=Xks(XGT,XDe))){
return xa7;}
if(XGT.id&&XDe.id&&!Xb5(XDe.id)&&XGT.id!=XDe.id){
return '!=ID';}
if(XGT.name&&XDe.name&&XGT.name!=XDe.name){
return '!=NAME';}
if(true!==(xa7=Xkr(XGT,XDe,XKQ))){
return xa7;}
return true;}
function Eep(xVh,x8c){
with(this){
XKQ=x8c||{};
x1Q=xVh;
eval(xVh);
xaz=eep_path;
Xk7=(typeof(eep_coll)=='object'&&eep_coll?
{xMk:eep_coll.n,index:eep_coll.i,xPh:eep_coll.ii}:
{xMk:'',index:0,xPh:-1});
x6K=true;}}
var Xb0='dgo_##_id_';
var XIP='dgo_::_id_';
function Xb5(XFh){
var id=XFh.substr(0,Xb0.length);
return id==Xb0||id==XIP;}
Eep.prototype={
x6K:false,
eep_path:null,eep_options:null,eep_atts:null,eep_coll:null,eep_parents:null,eep_siblingTags2:null,
eep_resolve:function(xVG,XKF){
this.XKF=XKF||new Object;
this.XKF.Xl='';
if(this.XKQ.eep_version){
this.XGp('Version "'+this.XKQ.eep_version+'"'+
(this.XKQ.eep_useText?';use text':'')+
(this.XKQ.eep_firstTextRe?(';textRe '+
this.XKQ.eep_firstTextRe):''));}
if(!this.eep_path){
this.XGp('Path "":BODY');
return xVG.document.body;}
if(!this.eep_atts.tagName){
this.XGp('tagName "":BODY');
return xVG.document.body;}
var x1K,xbK,xa7;
if(this.eep_atts.id){
x1K=XJy(xVG,this.eep_atts.id,false);
xbK='ID:'+xap(x1K);
if(typeof(x1K)=='number'){
this.XGp(xbK+':'+x1K+' DUP');}
else if(typeof(x1K)=='string'){
this.XGp(xbK+':warn "'+x1K+'"');}
else if(x1K){
if(true===(xa7=this.x7s(x1K))){
this.XGp(xbK);
return x1K;}
this.XGp(xbK+' rej "'+xa7+'"');
x1K=Xku(xVG,
this.eep_atts.tagName,this.eep_atts.type,
this.eep_atts.name,this.eep_atts.value);
if(x1K){
this.XGp('VALUE:'+xap(x1K));
return x1K;}}
else{
this.XGp(xbK);}}
x1K=XJz(xVG,
this.eep_atts.name,this.eep_atts.tagName,true);
if(x1K){
this.XGp('NAME:'+xap(x1K));
return x1K;}
x1K=xjH(xVG,this.xaz,this.eep_options);
xbK='EP "'+this.xaz+'":'+xap(x1K);
if(true===(xa7=this.XKM(x1K))){
this.XGp(xbK);
return x1K;}
this.XGp(xbK+' rej "'+xa7+'"');
if(this.XKQ.eep_useText){
x1K=Xkt(xVG,this.eep_atts.tagName,
this.eep_atts.firstText,this.XKQ,this.eep_atts.L||0);
xbK='TEXT "'+this.eep_atts.firstText+'"'+
(this.eep_atts.L||'')+':'+xap(x1K);
if(true===(xa7=this.XKN(x1K))){
this.XGp(xbK);
return x1K;}
this.XGp(xbK+' rej "'+xa7+'"');}
x1K=xhC(xVG,this.eep_atts.tagName,this.Xk7);
if(x1K){
this.XGp('COLL:'+xap(x1K));
return x1K;}
if(this.xtG(xVG)){
x1K=xjH(xVG,this.xaz,this.eep_options);
xbK='corrEP "'+this.xaz+'":'+xap(x1K);
if(true===(xa7=this.XKN(x1K))){
this.XGp(xbK);
return x1K;}
this.XGp(xbK+' rej "'+xa7+'"');}
if(this.eep_atts.id&&Xb5(this.eep_atts.id)){
x1K=XJy(xVG,this.eep_atts.id,true);
xbK='DGO ID '+this.eep_atts.id+':'+xap(x1K);
if(typeof(x1K)=='object'&&x1K){
if(true===(xa7=this.XKN(x1K))){
this.XGp(xbK);
return x1K;}
this.XGp(xbK+' rej "'+xa7+'"');}
else{
this.XGp(xbK);}}
x1K=this.xB6(xVG,this.eep_atts);
if(x1K){
this.XGp('BYTAGNAME:'+xap(x1K));
return x1K;}
x1K=this.xB7(xVG);
if(x1K){
this.XGp('BYCOLLHARDPROOF:'+xap(x1K));
return x1K;}
this.XGp('(-1==cannot find)'+this);
return-1;},
xB7:function(xVG){
try{
if(!this.eep_coll||!this.eep_coll.n){
return null;}
if(!xVG.document[this.eep_coll.n]){
return null;}
if(!xVG.document[this.eep_coll.n][this.eep_coll.i]){
return null;}
var x1K=xVG.document[this.eep_coll.n][this.eep_coll.i][this.eep_coll.ii];}
catch(xa8){
x1K=null;}
if(x1K){
var xB8=true;
for(var XCM in this.eep_atts){
if(x1K[XCM]!=this.eep_atts[XCM]){
xB8=false;
break;}}
if(xB8){
return x1K;}}
return null;},
xB6:function(xVG,eep_atts){
if(!eep_atts.tagName){
return null;}
var XKI=xVG.document.getElementsByTagName(eep_atts.tagName);
if(XKI.length==0){
return null;}
var x1K;
var xB9=null;
for(var i=0;i<XKI.length;++i){
x1K=XKI[i];
var xB8=true;
for(var XCM in eep_atts){
if(x1K[XCM]!=eep_atts[XCM]){
xB8=false;
break;}}
if(xB8){
if(xB9){
return null;}
xB9=x1K;}}
return xB9;},
toString:function(){
if(this.x1Q){
return 'Eep={path:"'+this.xaz+
'",opt:"'+this.XKQ+
'",ori:"'+this.x1Q+'"}';}
return 'Eep='+XA5(this);},
valueOf:function(){
return this.toString();},
XKQ:null,xaz:null,Xk7:null,x4F:1,x1Q:null,XKF:null,
XGp:function(XGE,XKC){
this.XKF.Xl+=XGE;
if(XKC)
return;
this.XKF.Xl+='\r\n';},
XKN:function(XGT){
return XJw(XGT,this.eep_atts,this.XKQ);},
x7s:function(XGT){
return Xks(XGT,this.eep_atts);},
XKM:function(XGT){
var xa7;
if(true!==(xa7=this.XKN(XGT))){
return xa7;}
return this.XKO(XGT);}}
var XWC=/^[ \r\n\t\xA0]*(.*$)/m;
var XWw=/[ \r\n\t\xA0]*$/m;
String.prototype.XZB=function(){
return XWC.exec(this)[1];}
String.prototype.XZD=function(){
var match=XWw.exec(this);
return this.substr(0,this.length-match[0].length);}
String.prototype.XZA=function(){
var xd2=this.XZB();
return xd2.XZD();}
String.prototype.XPC=function(){
xd2=new String(this);
xd2=xd2.replace(/[\\]/g,"\\\\");
xd2=xd2.replace(/[""]/g,'\\"');
xd2=xd2.replace(/[\n]/g,'\\n');
xd2=xd2.replace(/[\r]/g,'\\r');
xd2=xd2.replace(/[\t]/g,'\\t');
return '"'+xd2+'"';}
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
