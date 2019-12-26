//==============================================================================
//==============================================================================
//
//
//
//
//
//
//
//
//==============================================================================
function XBo(xLi,XDY,XDa){
var XHu=window.document.getElementById('treeiconcell'+XDa.id);
var XHv=window.document.getElementById('treetitlecell'+XDa.id);
if(XHu&&XHv){
var x1K=window.event.srcElement;
while(x1K&&(!x1K.clientHeight||x1K.clientHeight<=0)&&
(x1K.tagName=='SPAN'||x1K.tagName=='TD'||
x1K.tagName=='TBODY'||x1K.tagName=='TR'))
{
x1K=x1K.parentNode;}
var XFv;
if(xLi=='link'||XDa==XDa.x2P.xpM){
XFv=2;}else{
XFv=XHn(XDa);
if(XFv==0)
XFv=1;}
if(XFv==1){
XAa(XHu.style,'borderLeft','');
XAa(XHv.style,'borderLeft','');
XAa(XHu.style,'borderTop','red 1px solid');
XAa(XHv.style,'borderTop','red 1px solid');
XAa(XHu.style,'borderRight','');
XAa(XHv.style,'borderRight','');
XAa(XHu.style,'borderBottom','');
XAa(XHv.style,'borderBottom','');
Xl("### mark top:'"+XHu.style.border+
"/"+XHu.style.borderTop+"'");}else if(XFv==3){
XAa(XHu.style,'borderLeft','');
XAa(XHv.style,'borderLeft','');
XAa(XHu.style,'borderTop','');
XAa(XHv.style,'borderTop','');
XAa(XHu.style,'borderRight','');
XAa(XHv.style,'borderRight','');
XAa(XHu.style,'borderBottom','red 1px solid');
XAa(XHv.style,'borderBottom','red 1px solid');
Xl("### mark bottom:'"+XHu.style.border+
"/"+XHu.style.borderBottom+"'");}else{
XAa(XHu.style,'borderLeft','red 1px solid');
XAa(XHv.style,'borderLeft','');
XAa(XHu.style,'borderTop','red 1px solid');
XAa(XHv.style,'borderTop','red 1px solid');
XAa(XHu.style,'borderBottom','red 1px solid');
XAa(XHv.style,'borderBottom','red 1px solid');
XAa(XHu.style,'borderRight','');
XAa(XHv.style,'borderRight','red 1px solid');
Xl('### mark center');}}}
function XBp(XDY,XDa){
var XHu=window.document.getElementById('treeiconcell'+XDa.id);
var XHv=window.document.getElementById('treetitlecell'+XDa.id);
if(XHu&&XHv){
XAa(XHu.style,'borderLeft','');
XAa(XHv.style,'borderLeft','');
XAa(XHu.style,'borderTop','');
XAa(XHv.style,'borderTop','');
XAa(XHu.style,'borderRight','');
XAa(XHv.style,'borderRight','');
XAa(XHu.style,'borderBottom','');
XAa(XHv.style,'borderBottom','');}
Xl('### unmark');}
function XBn(xLi,XDY,XDa){
if(xLi=='move'){
var XFv=XHn(XDa);
switch(XFv){
case 1:
Xl('### move before '+
XDa.parent.id+' '+XDa.parent.index+
' #'+XDa.index);
XDY.XG9(XDa.parent,XDa.index);
break;
case 3:
Xl('### move after '+
XDa.parent.id+' '+XDa.parent.index+
' #'+XDa.index+1);
XDY.XG9(XDa.parent,XDa.index+1);
break;
default:
Xl('### move to group '+
XDa.id+' '+XDa.index);
XDY.XG9(XDa);
break;}}
else if(xLi=='copy'){
var XFv=XHn(XDa);
switch(XFv){
case 1:
Xl('### copy before '+
XDa.parent.id+' '+XDa.parent.index+
' #'+XDa.index);
XDY.XCq(XDa.parent,XDa.index);
break;
case 3:
Xl('### copy after '+
XDa.parent.id+' '+XDa.parent.index+
' #'+XDa.index+1);
XDY.XCq(XDa.parent,XDa.index+1);
break;
default:
Xl('### copy into group '+
XDa.id+' '+XDa.index);
XDY.XCq(XDa);
break;}}}
//==============================================================================
function XHs(){
var xpK=XBj(window.event.srcElement.id);
XHm(xpK);
if(!xpK)
return;
if(xpK.x2P.xvQ.x8Q.XDi){
Xl('### stop editing,span:'+xpK.x2P.xvQ.x8Q.XDi.innerText);
xpK.x2P.xvQ.XDs();}
var XCu=XD3(window);
if(!XCu)
return;
return XCu.xJF(xpK.type,xpK);}
function XHo(){
var xpK=XBj(window.event.srcElement.id);
XHm(xpK);
if(!xpK)
return;
var XCu=XD3(window);
if(!XCu)
return;
return XCu.XD4();}
function XHp(){
var xpK=XBj(window.event.srcElement.id);
XHm(xpK);
if(!xpK)
return;
if(xpK.x2P.xvQ.x8Q.XDi){
Xl('### stop editing,span:'+xpK.x2P.xvQ.x8Q.XDi.innerText);
xpK.x2P.xvQ.XDs();}
var XCu=XD3(window);
if(!XCu)
return;
return XCu.XD5(xpK.type,xpK);}
function XHr(){
var xpK=XBj(window.event.srcElement.id);
XHm(xpK);
if(!xpK){
return;}
var XCu=XD3(window);
if(!XCu)
return;
return XCu.XD7();}
function XHq(){
var xpK=XBj(window.event.srcElement.id);
XHm(xpK);
if(!xpK)
return;
var XCu=XD3(window);
if(!XCu)
return;
return XCu.XD6();}
function XHt(){
var xpK=XBj(window.event.srcElement.id);
XHm(xpK);
if(!xpK)
return;
var XCu=XD3(window);
if(!XCu)
return;
return XCu.xLF();}
//==============================================================================
var XBX='_NodeCreator';
function XBW(xCR,XFh,xGQ,xgP){
this.XGT=xCR.document.getElementById(XFh);
if(xGQ)
this.type=xGQ;
if(xgP)
this.title=xgP;
if(this.XGT){
this.xCR=xCR;
this.XFh=XFh;}else{
Xl("### NodeCreator not found:"+XFh);}}
XBW.prototype.title='New Group';XBW.prototype.type='group';XBW.prototype.xCR=null;XBW.prototype.XFh=null;XBW.prototype.XGT=null;XBW.prototype.XCS=null;
XBW.prototype.XEe=function(){
XD3(this.xCR).xJF(XBX,this);}
XBW.prototype.XEa=function(){
XD3(this.xCR).XD4();}
XBW.prototype.XEf=function(){
Xl('### Creator '+this.type+' drop');
XD3(this.xCR).xLF();
Xl('### Creator '+this.type+' drop done');}
XBW.prototype.xLF=function(XGR){
Xl('### NodeCreator.drop '+XGR.type+' '+XGR.id);
var XFv=XHn(XGR);
var xpK;
switch(XFv){
case 1:
Xl('### create new '+this.type+' before '+
XGR.id+' '+XGR.index);
xpK=XGR.parent.xkK(this.title,this.type,'',XGR.index);
break;
case 3:
Xl('### create new '+this.type+' after '+
XGR.id+' '+XGR.index);
xpK=XGR.parent.xkK(this.title,this.type,'',XGR.index+1);
break;
default:
Xl('### create new '+this.type+' in group '+
XGR.id+' '+XGR.index);
xpK=XGR.xkK(this.title,this.type,'');
break;}
if(XGR.type==XGR.x2P.xpM.type&&!XGR.xBL)
XGR.xjP();
if(xpK)
xpK.x2P.xvQ.XHU(xpK);}
function XBZ(xLi,XBY,XDb){
if(xLi!='copy'){
alert('Cannot '+xLi+' from Creator!');
return false;}
XBY.xLF(XDb);
return true;}
//==============================================================================
var XB1='_NodeRemover';
function XB0(xCR,XFh){
this.XGT=xCR.document.getElementById(XFh);
if(this.XGT){
this.xCR=xCR;
this.XFh=XFh;}else{
Xl("### NodeRemover not found:"+XFh);}}
XB0.prototype.xCR=null;XB0.prototype.XFh=null;XB0.prototype.XGT=null;XB0.prototype.XCS=null;
XB0.prototype.XEb=function(){
XD3(this.xCR).XD5(XB1,this);}
XB0.prototype.XEd=function(){
XD3(this.xCR).XD7();}
XB0.prototype.XEc=function(){
XD3(this.xCR).XD6();}
XB0.prototype.XEf=function(){
XD3(this.xCR).xLF();}
XB0.prototype.xCK=function(){
if(!this.XCS)
this.XCS=this.XGT.style.border;
XAa(this.XGT.style,'border','red 1px solid');}
XB0.prototype.XHy=function(){
Xl("### NodeRemover unmark reset border to "+this.XCS);
XAa(this.XGT.style,'border','');
this.XCS=null;
Xl("### NodeRemover unmark set border done");}
XB0.prototype.xLF=function(XGR){
XGR.remove();
this.XHy();}
function XB3(xLi,XDY,XGQ){
Xl("### NodeRemover mark "+XGQ);
Xl("### NodeRemover mark "+XGQ.XGT);
Xl("### NodeRemover mark "+XGQ.XGT.id);
return XGQ.xCK();}
function XB4(XDY,XGQ){
Xl("### NodeRemover unmark drag="+XDY.type+
" "+XDY.name+"/"+XDY.id+
";"+XGQ.type+" "+XGQ.XFh);
return XGQ.XHy();}
function XB2(xLi,XDY,XGQ){
if(xLi!='move'){
alert('Cannot '+xLi+' into Trash!');
return false;}
XGQ.xLF(XDY);
return true;}
//==============================================================================
function XHn(XGR){if(!window.event.srcElement)
return 0;
if(XGR==XGR.x2P.xpM)
return 2;
var x1K=window.event.srcElement;
while(x1K&&(!x1K.clientHeight||x1K.clientHeight<=0)&&
(x1K.tagName=='SPAN'||x1K.tagName=='TD'||
x1K.tagName=='TBODY'||x1K.tagName=='TR'))
{
x1K=x1K.parentNode;}
if(!window.event.offsetY||!x1K||!x1K.clientHeight)
return 0;
if(XGR.type==XGR.x2P.xpM.type&&
XGR.XGZ&&
window.event.offsetY*3<x1K.clientHeight||
(XGR.type!=XGR.x2P.xpM.type||!XGR.XGZ)&&
window.event.offsetY*2<x1K.clientHeight)
{
return 1;}
if(XGR.type==XGR.x2P.xpM.type&&
XGR.XGZ&&
window.event.offsetY*3>x1K.clientHeight*2||
(XGR.type!=XGR.x2P.xpM.type||!XGR.XGZ)&&
window.event.offsetY*2>=x1K.clientHeight)
{
return 3;}
return((XGR.type==XGR.x2P.xpM.type&&XGR.XGZ)?2:1);}
function XHm(xpK){
var XGP;
if(xpK){
XGP=xpK.type+' '+xpK.name+' '+xpK.title+
(xpK.xHI()?' open':'')+
(xpK.xGI()?' last':'')+
(xpK.xFI()?' empty':'');}else{
XGP='';}
if(!window.event){
Xl("### Unknown window.event '"+xbK+"'");
return;}
var src='nosrc';
if(event.srcElement)
src=event.srcElement.tagName+' '+event.srcElement.id;
Xl('# '+window.event.type+":"+XAY+":"+src
+'/'+XGP+'/'
+(window.event.ctrlKey?' ctrl':'-')
+(window.event.altKey?' alt':'-')
+(window.event.shiftKey?' shift':'-')
+",XJ0="+window.event.clientX+"x"+window.event.clientY
+" Off="+window.event.offsetX+"x"+window.event.offsetY
+" Siz="+window.event.srcElement.width+"x"+window.event.srcElement.height
);}
//==============================================================================

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
