//
function XAS(xMj,XSk){
this.XSz=new Url(xMj);
this.XSj=new Url(XSk);
this.XPO=new Url(xMj);
this.XPO.XC8('');
this.XPO.XC2('');
this.XPO.XC5();
this.XPO.XCJ('/');
this.Xk8=
(this.XPO.XFJ_()=='http'||
this.XPO.XFJ_()=='https');
xLJ('trainer',this.XPO);
xLJ('program',null);
this.x6K=true;}
XAS.prototype={
x6K:false
,XSz:'',XPO:'',XSj:'',xbv:'',XHf:null,XMl:null,xzV:null,xbx:null,XR5:false,Xk8:false,Xxb:false 
,XPQ:function(XQE){
this.XR5=XQE.xkg;
this.xbx=(XQE.x5L?XQE.x5L:null);
this.Xxb=XQE.Xxb;
var xAZ=new Url(XQE.xNE);
xAZ.xc3(this.XPO);
if(XQE.xNE.substr(0,6)=='mhtml:'){
var Xxd=new Url(XQE.xNE);
Xxd.Xxj('http://dgo_mht_proxy/');
xAZ=Xxd.toString();
xLJ('mht',Xxd.toString());
XQE.x7C='mht:';
XQE.XMP='mht:';
XQE.XMG='mht:';
XQE.xBH='mht:tour.js';}
var XMH=new Url(XQE.XMG);
XMH.xc3(this.XPO);
this.xzV=new Url(XQE.xGk||'data/');
this.xzV.xc3(this.XPO);
xLJ('data',this.xzV.toString());
if(XQE.xAJ){
var XRi=new Url(XQE.xAJ);
XRi.xc3(this.XPO);
xLJ('library',XRi);
xLJ('library-config',xAZ);
xLJ('library-project',XMH);
xLJ('trainer-config',null);
xLJ('project',null);}
else{
xLJ('trainer-config',xAZ);
xLJ('project',XMH);
if(XQE.x7C){
this.XHf=new Url(XQE.x7C);
this.XHf.xc3(this.XPO);
if(XQE.x7C=='mht:'){
this.XHf.Xxj('http://dgo_mht_proxy/');}
else{
this.XHf.XCJ('/');}}else{
this.XHf=null;}
if(XQE.XMP){
this.XMl=
new Url(XQE.XMP);
this.XMl.xc3(this.XPO);
if(XQE.x7C=='mht:'){
this.XMl.Xxj('http://dgo_mht_proxy/');}
else{
this.XMl.XCJ('/');}
xLJ('resourcebase',this.XMl.toString());}else{
this.XMl=null;}
if(XQE.xAU){
var xAU=new Url(XQE.xAU);
xAU.xc3(this.XPO);
XQE.xAU=xAU.toString();}else{
XQE.xAU=null;}}
return true;}
,xCe:function(){
return this.xbv;}
,XHJ:function(xbu){
this.xbv=new Url(xbu);
var url=this.xbv.XCf();
url.xc3(this.XPO);
xLJ('program',url);
return true;}
,start:function(){
return this.XSz;}
,referrer:function(){
return this.XSj;}
,xRL:function(XIM){
return this.XPO.xc4(XIM);}
,xNI:function(xc9){
return this.XPO.xc4(xc9);}
,xGk:function(xzU){
return this.xzV.xc4(xzU);}
,XMZ:function(xc9){
return(this.XMl?
this.XMl.xc4(xc9):
xc9);}
,xaK:function(
XHg,XE1,XEz)
{
var xWQ=(this.XHf&&!XEz?
this.XHf.XCf():
this.xbv.XCf());
if(XEz&&this.Xxb){
var xXQ=xWQ.XCf();}
else{
xWQ.xc3(this.XPO);
xXQ=xWQ.xc4(XHg);}
var xd2=(XE1||
this.XR5||!this.xbx||!this.Xk8?
xXQ:this.xBB(xXQ));
return xd2;}
,x3G:function(XFA_){
var url=this.XPO.xc4(XFA_);
if(this.XR5||!this.xbx||!this.Xk8){
return url;}
return this.xBB(url);}
,external:function(XEl){
return this.XPO.xc4(XEl);}
,xMD:function(xGQ,XQE,XQF,XQu,XQw){
var XT4=xGQ+'page';
var xMD=XQE[XQE.XSI[XT4]]||'';
if(!xMD){
return '';}
var url=this.XPO.xc4(xMD);
if(url.XFJ_()!='javascript'&&url.XFJ_()!='mk'){
if(XQE.xkQ){
url.XCK(this.XSz.XFP(),true);}
if(XQE.xOG&&typeof(XQF)=='object'&&XQF){
var xTQ=XQE.xOG.split(/[;,:]/);
var xOG,xoQ;
for(var i=0;i<xTQ.length;++i){
xOG=xTQ[i];
if(xOG.match('^[A-Za-z_][A-Za-z0-9_]*$')&&
typeof(xoQ=XQF[xOG])!='undefined')
{
url.XWg(xOG,xoQ);}}}
if(XQE.xAU){
url.XWg('appurl',XQE.xAU);}
if(XQE.XG0){
url.XWg('appname',XQE.XG0);}
if(XQE.XG1){
url.XWg('apptimeout',XQE.XG1);}
if(XQE.referrer){
url.XWg('referrer_url',this.XSj);}
if(XQw){
url.XWg('restart_title',XQE.title);}
else{
url.XWg('restart',this.XSz.toString());}
if(this.XR5||!this.Xk8){
var path=url.XFG();
var XRb=path.lastIndexOf('.');
var XRc=path.lastIndexOf('/');
if(XRc<(path.length-1)&&XRb<=XRc){
url.XC4(path+'.html',true);}}
else{
if(XQu&&this.xbx){
url=this.xBB(url);}
var x=url.XFG()+'?'+url.XFP();
url=this.external('bracepage');
url.XWg('name',xGQ);
url.XWg('href',x);}}
return url;}
,toString:function(){
var XJZ=
(Url.prototype.XMU['library']?true:false);
var xbK='AgentUrler={'+(this.Xk8?'HTTP':'no HTTP');
xbK+=','+this.XPO;
if(XJZ){
xbK+=',lib:'+(new Url('library:'));
xbK+=',cfg:'+(new Url('library-config:'));
xbK+=',prj:'+(new Url('library-project:'));}
else{
xbK+=',cfg:'+(new Url('trainer-config:'));
xbK+=',prj:'+(new Url('project:'));
xbK+=',resbas:'+(new Url('resourcebase:'));}
xbK+=',bas:'+this.XHf;
xbK+=',prg:'+this.xbv;
xbK+=',data:'+this.xzV;
return xbK+',proxy:'+this.xbx+'}';}
,xBB:function(xIL){
var xd2=xIL.XCf();
xd2.XC9(this.XPO.XFT(),true);
xd2.XC6(this.XPO.XFH());
var xSb=xIL.XFH();
xd2.XC4(this.xbx+xIL.XFT()+
(xSb?':'+xSb:'')+xIL.XFG(),true);
return xd2;}}
if(self.XI7){XI7.XJB(new XIX('../agent_urler.js'));}

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
