//
//
function XAI(XCI){
this.XCI=XCI;
if(XCI.XF3().parent.dgoy){
this.Xio=true;}
else{
this.XCI.Xpr('@Q Producer interface not found');}
this.XFc=new Object;
this.XaH=new Object;
this.XH9=new XBb;
this.XCD=new XBb;
this.XFn=new XBb;
this.X98=new XBb;
this.x6K=true;}
var XMt=0;
var XMq=0;var XMs=1024;var XMu=2048;
var X95=0;
var X93=1;
var X94=2;
XAI.prototype={
x6K:false
,xbz:function(xsF){
var time=(typeof(xsF.Xtm)=='function'||
typeof(xsF.Xtm)=='object'
?xsF.Xtm():null);
if(time===false){return true;}
this.X9i(xsF);
if(time==null||time<0){
return this.XFn.xbz(xsF);}
if(this.XCI.XFJ().X4p()>0){
return this.X98.xbz(xsF);}
return this.XH9.xbz(xsF);}
,xa0:function(xsF){
var xd2=this.XCD.xbz(xsF);
return xd2;}
,XCC:function(){
return this.XCD.XFD();}
,xb9:function(){
var event;
var xYE=0;
while(this.XCD.XFD()>0){
event=this.XCD.XEJ();
if(typeof(event.Xfps)=='function'||
typeof(event.Xfps)=='object')
{
if(event.Xiu()>=event.Xfps()){
var xbK='issue>framepathSize:'+x;
this.XCI.Xpr('@Q ERROR requeueAgain():'+xbK,'error');
event=null;}}
if(event){
event.XFq();
this.XCI.Xpr('@Q requeueAgain:'+event);
this.XFn.xbz(event);
++xYE;}}
return xYE;}
,XHG:function(XHY){
this.X96=XHY;
return this.X96;}
//
//
//
,XEJ:function(xCl){
var event;
var xfG;
var XFd=XMs;
while(XFd!=XMq&&
!(XFd & XMu))
{
this.XEv=false;
if(this.XFn.XFD()>0){
xfG='immediate';
event=this.XFn.XEJ();
XFd=this.XCU(xCl,xfG,event);}
else if(this.X96!=X93&&
this.XCI.XFE()!=XBP&&
this.XCI.XFE()!=XBO&&
this.X98.XFD()>0)
{
xfG='call';
event=this.X98.XEJ();
XFd=this.XCU(xCl,xfG,event);}
else if(this.X96==X95&&
this.XCI.XFE()!=XBP&&
this.XCI.XFE()!=XBO&&
this.XH9.XFD()>0&&
this.XH9.xbc().Xtm()<=xCl)
{
xfG='timed';
event=this.XH9.XEJ();
if(this.Xio){
try{
var time=this.XCI.XFJ().XFY(
this.XCI.X8p())+event.Xtm();
this.XCI.XF3().parent.external.set_current_time(time);
this.XCI.Xpr('@Q producer-time('+time+')');}
catch(xa8){
this.XCI.Xpr('@Q setting producer-time '+time+
':'+(new x6C(xa8)),'exc');}}
XFd=this.XCU(xCl,xfG,event);}
else{
event=new xNh(XAw,false);
xfG='';
XFd=XMq;}}
if(XFd & XMu){
dgo53();
if(XFd & XMs){
event=new xNh(XAw,false);}}
else if(event.Xeti()!=XAw){
this.XGn(xCl,xfG,event);}
return event;}
,x1D:function(){
this.XCD.x1D();
this.X98.x1D();
this.XFn.x1D();
this.XH9.x1D();
return true;}
//
,XFz:function(XFh,XCZ,XCY){
this.XFc[XFh]=new XAZ(XCZ,XCY);
return true;}
,XaI:function(XFh,XCZ,XCY){
this.XaH[XFh]=new XAZ(XCZ,XCY);
return true;}
,valueOf:function(){
return this.toString();}
,toString:function(){
var xbK='AgentQueue={'+this.XH9.XFD();
xbK+=',#:'+this.XFn.XFD();
xbK+=',a:'+this.XCD.XFD();
switch(this.X96){
case X95:break;
case X93:xbK+=',block-all';break;
case X94:xbK+=',block-timed';break;
default:xbK+=',block-???';break;}
return xbK+'}';}
,XCI:null,Xio:null
,X96:0,XEv:false 
,XFc:null 
,XaH:null 
,XH9:null,XCD:null,XFn:null 
,XCU:function(xCl,XEI,xsF){
var id=xsF.Xeti();
var XNd=this.XFc[id];
if(!XNd){
return XMq;}
if(!this.XEv){
this.XGo(xCl,XEI,xsF);}
return XNd.exec('exec handler for '+xsF.XEW(),xsF);}
,X9i:function(xsF){
var id=xsF.Xeti();
var XNd=this.XaH[id];
if(XNd){
XNd.exec('exec onQueueHandler for '+xsF.XEW(),xsF);}}
,XGo:function(xCl,XEI,xsF){
this.XEv=true;
return this.XCI.Xpr('@Q'+xCl+','+XEI+':'+
xsF,'evt_'+xsF.XEW(),2);}
,XGn:function(xCl,XEI,xsF){
if(this.XEv){
//DBG return this.XCI.Xpr('@@ EXTERNAL EVENT HANDLING');
return true;}
this.XEv=true;
return this.XCI.Xpr('@Q'+xCl+','+XEI+':'+
xsF+' EXTERNAL HANDLING','evt_'+xsF.XEW(),2);}}
if(self.XI7){XI7.XJB(new XIX(
'../agent_queue.js',['queue.js','../events.js']));}

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
