//
function Xa2(x9Q){
this.x9Q=x9Q||self;
this.x9Q.dgo9=this;
this.x9Q.dgoW=XKc;
this.Xlo=new XBb;this.x6K=true;}
function XKc(){
return(this.dgo9
?this.dgo9.x5e(this):false);}
Xa2.prototype={
x6K:false
,add:function(Xln){
return this.XCA((new Date).valueOf(),Xln);}
,x8F:function(){
this.x8A();
if(this.x9Q){
this.x9Q.dgo9=null;
this.x9Q.dgoW=null;}
return true;}
,x8A:function(){
this.Xlj&&this.x9Q.clearTimeout(this.Xlj);
this.Xlj=null;
this.Xlk=null;
this.Xlo=new XBb;
return true;}
,remove:function(Xln){
Xln.XlX();
return this.Xf3((new Date).valueOf());}
,toString:function(){
var xbK='';
var i=0;
var xHL=this.Xlo.xbc();
while(xHL){
xbK+=';'+(++i)+'.)'+xHL;
xHL=this.Xlo.xbd(xHL);}
return 'BatchManager={next:'+
this.Xlj+'@'+this.Xlk+
',count:'+this.Xlo.XFD()+':'+
xbK.substr(1)+'}';}
,x9Q:null,Xlo:null 
,Xlj:null
,Xlk:null
,XCA:function(Xll,Xln){
Xln.Xlq(Xll+Xln.Xld());
var xFD=this.Xlp(Xln.Xlb());
this.Xlo.insertBefore(xFD,Xln);
return this.Xf3(Xll);}
,Xf3:function(Xll){
var Xl6=this.Xl5();
if(Xl6&&this.Xlk&&
this.Xlk==Xl6.Xlb())
{
return true;}
this.Xlj&&this.x9Q.clearTimeout(this.Xlj);
this.Xlk=null;
this.Xlj=null;
if(Xl6){
this.Xlk=Xl6.Xlb();
this.Xlj=this.x9Q.setTimeout(
this.x9Q.dgoW,Xl6.Xlb()-Xll);}
return true;}
,x5e:function(){
++XrA;
this.Xlj=null;
this.Xlk=null;
var XrP={};
var XrO=[];
var XGS=(new Date).valueOf();
var Xlm=this.Xlo.xbc();
while(Xlm&&Xlm.Xlb()<=XGS){
this.Xlo.XEJ();
if(Xlm.XrS()&&
Xlm.getName()&&
XrP[Xlm.getName()])
{
XrO.xag(Xlm);}
else if(Xlm.Xlh()){
Xlm.exec();Xlm.getName()&&(XrP[Xlm.getName()]=true);
Xlm=null;
XGS=(new Date).valueOf();}
Xlm=this.Xlo.xbc();}
for(var i=0;i<XrO.length;++i){
Xlm=XrO[i];
Xlm.XrT(1);
this.XCA(XGS,Xlm);}
this.Xf3(XGS);
return true;}
,Xl5:function(){
var xHL=this.Xlo.xbc();
while(xHL){
if(xHL.Xlh()){
return xHL;}
xHL=this.Xlo.xbd(xHL);}
return null;}
,Xlp:function(Xlr){
var xHL=this.Xlo.xbc();
while(xHL){
if(xHL.Xlh()&&xHL.Xlb()>Xlr){
return xHL;}
xHL=this.Xlo.xbd(xHL);}
return null;}}
function XbY(xfK,XGT,Xla,xaq,XCw,XrR){
typeof(xfK)=='string'&&(this.xfK=xfK);
this.XC0=new XAZ(XGT,Xla
);
typeof(xaq)=='undefined'||(this.xaq=xaq);
typeof(XCw)=='number'&&(this.XCw=XCw);
typeof(XrR)=='boolean'&&(this.XrR=XrR);
xaq=null;
Xla=null;
XGT=null;
this.x6K=true;}
XbY.prototype={
x6K:false
,XlX:function(){
return(this.XlY=true);}
,exec:function(){
var xd2=this.XC0.exec('batch "'+this.xfK+'"',this.xaq);
this.xaq=null;
this.XC0.XCZ=null;
this.XC0.XCY=null;
this.XC0.XHh=null;
this.XC0.xaq=null;
this.XC0=null;
return xd2;}
,Xlb:function(){
return this.Xlr;}
,Xld:function(){
return this.XCw;}
,Xlh:function(){
return this.XlY==false;}
,getName:function(){
return this.xfK;}
,XrS:function(){
return this.XrR;}
,Xlq:function(Xlr){
this.Xlr=Xlr;}
,XrT:function(XCw){
this.XCw=XCw;}
,toString:function(){
return 'BatchProcess={'+this.xfK+
(this.Xlr>=0?'@'+this.Xlr:'')+
',delay:'+this.XCw+
',param:'+this.xaq+
(this.XlY?',dis':'')+
(this.XrR?',yld':'')+'}';}
,XC0:null
,XCw:1
,XlY:false
,XrR:false
,xfK:'batch'
,xaq:null
,Xlr:-1}
if(self.XI7){
XI7.XJB(new XIX(
'batch.js',['js_extensions.js','queue.js']));}

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
