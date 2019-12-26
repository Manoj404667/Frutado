
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
