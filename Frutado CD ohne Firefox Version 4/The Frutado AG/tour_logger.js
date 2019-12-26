//
function XAW(XCI){
if(!XCI)return;
this.XCI=XCI;
this.error+='@TL log:"'+XCI.XRN().XzA+'"\r\n';
this.xMj=XCI.Xu().xNI(XCI.XRN().XzA);
this.error+='@TL url:"'+this.xMj+'"\r\n';
if(this.xMj.XFJ_().substr(0,4)!='http'){
this.error='@TL no logging,prot='+this.xMj.XFJ_();
this.xMj=null;
this.x6K=true;
return;}
if(this.XCI.XRN().domain){
this.xMj.XC8('');
this.xMj.XWg(
'domain',this.XCI.XRN().domain);
this.error+='@TL url+domain:"'+unescape(this.xMj)+'"\r\n';}
this.xVG=XCI.XF3().parent.frames.trainer_log_frame;
if(!this.xVG){
this.error='frame '+"trainer_log_frame"+' not found';
return;}
this.x6K=true;}
XAW.prototype={
x6K:false
,error:''
,load:function(){
return true;}
,XEu:function(XEt,xfK,XIH,Xk0,Xk1){
return true;}
,submit:function(XCt,XCV,xLj){
this.XCV=XCV||null;
var method=xLj||'GET';
this.Xyy++;
var XDm=this.XVX(this.xVG,'dynLogIFrame_'+this.Xyy)
var Xys=this.Xyq(XDm);
if(this.XCI.XRN().Xyz){
XCt+=(XCt?'&':'')+'username='+this.XCI.XRN().Xyz;}
if(this.XCI.XRN().XjP){
XCt+=(XCt?'&':'')+'password='+this.XCI.XRN().XjP;}
if(this.XCI.XRN().Xvr){
XCt+=(XCt?'&':'')+'logsid='+this.XCI.XRN().Xvr;}
if(method.toUpperCase()=='GET'){
var XzI=this.xMj+'?'+XCt;
var Xyu=this.Xyr(Xys,'dynLogIFrame_'+this.Xyy);
if(typeof(document.all)=='undefined'){
this.XzJ(XDm);
Xys.location.href=XzI.toString();}else{
this.XzJ(Xyu);
Xyu.location.href=XzI.toString();}
return true;}else if(method.toUpperCase()=='POST'){
var xRQ=[];
if(XCt.length&&XCt.length>0){
xRQ=XCt.split('&');}
var Xyp={};
var name,value;
for(var i=0;i<xRQ.length;++i){
XCt=xRQ[i].split('=',2);
name=(XCt[0]||'');
value=unescape((XCt[1]||''));
Xyp[escape(name)]=escape(value);}
var Xyv=null;
if(typeof(XDm.contentDocument)!='undefined'){
Xyv=this.XVX(XDm,'dynLogTargetIFrame_'+this.Xyy)}else{
var Xyv='<iframe name="dynLogTargetIFrame_'+this.Xyy+
'" id="dynLogTargetIFrame_'+this.Xyy+'" src="about_blank.html"></iframe>';
Xys.body.innerHTML=Xyv;}
Xyv=this.Xyr(Xys,'dynLogTargetIFrame_'+this.Xyy);
var XzC=Xys.createElement('FORM');
XzC.name='dynLogForm_'+this.Xyy;
XzC.id='dynLogForm_'+this.Xyy;
XzC.action=this.xMj;
XzC.target='dynLogTargetIFrame_'+this.Xyy;
var XzB=Xys.body.appendChild(XzC);
for(var xGk in Xyp){
var XzD=Xys.createElement('TEXTAREA');
XzD.name=xGk;
XzD.value=Xyp[xGk];
XzB.appendChild(XzD);}
this.XzJ(Xyv);
Xys.forms[0].submit();
return true;}}
,send:function(x6P){
return true;}
,XCI:null
,xMj:null
,xVG:null
,XCt:''
,Xyy:0
,XCV:null
,XDm:null
,Xys:null
,XzK:null
,XVX:function(XzG,xfK){
var XzE=this.Xyq(XzG);
var Xyt=XzE.createElement('IFRAME');
Xyt.name=xfK;
Xyt.id=xfK;
Xyt.src='about_blank.html';
var XDm=XzE.body.appendChild(Xyt);
return XDm;}
,Xyq:function(xsH){
var Xys=null;
if(typeof(xsH.contentDocument)!='undefined'){
Xys=xsH.contentDocument;}else{
Xys=xsH.document;}
return Xys;}
,Xyr:function(XzF,xfK){
var Xyu=null;
if(typeof(document.all)=='undefined'){
Xyu=XzF.getElementById(xfK);}else{
Xyu=XzF.frames[xfK];}
return Xyu;}
,XzJ:function(Xyx){
if(typeof(this.XCV)=='function'){
var Xjj=this;
this.Xyv=Xyx;
if(typeof(document.all)=='undefined'){
this.Xyv.addEventListener('load',function(){Xjj.XzH();},1);}else{
this.Xyv.frameElement.onreadystatechange=function(){if(this.readyState=="complete"){Xjj.XzH();}}}
this.XzK=new XbY(
'ServerTourLogTimeout',this,this.XzH,'timeout',5000);
this.XCI.Xlc().add(this.XzK);}}
,XzH:function(xEL){
this.XCI.Xlc().remove(this.XzK);
if(xEL&&xEL=='timeout'){
this.XCV('');
return;}
var Xyw=null;
try{
if(typeof(document.all)=='undefined'){
Xyw=this.Xyv.contentDocument;}else{
Xyw=this.Xyv.document;}
this.XCV(Xyw.body.innerHTML);}catch(Xyl){
this.XCV('');}}}
if(self.XI7){XI7.XJB(new XIX('../tour_logger.js',['url.js']));}

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
