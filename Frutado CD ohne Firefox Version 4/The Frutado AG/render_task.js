//
function XaY(xfK,XCI,XCt){
this.xfK=xfK;
this.XCI=XCI;
this.XCt=XCt;
this.XWh=false;
this.xGL=XCt.Xo().toLowerCase();
XLD.XHO(this,XCI,XCt);
this.Xpp(true);
this.XWr=false;
this.XWq=false;
this.XWs=true;
this.xyO=XCt.Xtx();
this.x6K=true;}
function XpD(XDx){
if(this.dgoo){
return this.dgoo.XpG();}}
function Xa0(XDx){
this.dgoo&&this.dgoo.Xa4();}
function XaZ(){
XaY.prototype=new XLD;
XaY.prototype.toString=function(){
return 'RenderTask={'+XLD.prototype.toString.XHO(this)+
',t:"'+(this.xyO.length>50
?this.xyO.substr(0,46)+' ...':this.xyO)+'}';}
XaY.prototype.xyO='';
XaY.prototype.xCR=null;
XaY.prototype.xVG=null;
XaY.prototype.x4o=function(X07){
var Xou=this.x7Q<=0||this.xdH<=0;
var html='<body class="dgoTASK"><div class="'+
(Xou?(XRl?'dgoTASKautosizeIE':'dgoTASKautosize')
:'dgoTASK')+'">'+this.XCO(this.xyO)+
'</div></body>';
if(this.xCR){
try{
this.xCR.document.body.innerHTML=html;
this.xCR.focus();}
catch(xa8){
this.xCR=null;
this.XCI.Xpr('RT '+this.xfK+
' no access any more:detaching ['+
(new x6C(xa8))+']');}}
if(!this.xCR){
var X7t='<head><meta http-equiv=Content-Type content="text/html;'+
' charset=utf-8"><link rel=stylesheet href="'+
this.XCI.Xu().xNI('widgets/bubble2/xbrowser.css')+
'" type="text/css">';
if(parent.dgoDOMAIN){
X7t+='<script language=javascript>self.document.domain="'+
parent.dgoDOMAIN+'";</script>';}
X7t+='</head>';
var XVO=XTd(this.XCI.XRN().XoM);
XVO.cfg_features='resizable=1,toolbar=0,location=0,menubar=0,status=0';
XVO.cfg_flagAutosize=Xou;
XVO.cfg_height=this.xdH;
XVO.cfg_html=X7t+html;
XVO.cfg_left=this.x7p;
XVO.cfg_name='datangoTask';
XVO.cfg_orientation=this.xGL;
XVO.cfg_top=this.x7q;
XVO.cfg_width=this.x7Q;
if(parent.dgoDOMAIN){
this.xCR=XaB('../jswidget/relax_domain.html?dgoDOMAIN='+
parent.dgoDOMAIN,XVO,
this,this.Xnx,
this.XCI.XRN().xuQ>=3?XAU:null);}
else{
this.xCR=XaB('',XVO,
this,this.Xnx,
this.XCI.XRN().xuQ>=3?XAU:null);}
if(!this.xCR){
this.XCI.xwF('ex',XQK('TOK_POPUPBLOCKER_EXC'));
return false;}}
return true;}
XaY.prototype.Xnx=function(x9Q){
this.xCR=x9Q;
this.XCI.Xfn().Xa1(
new XAZ(this,this.xb1));
this.Xa6();}
XaY.prototype.x4f=function(X07){
return this.x4o(X07);}
XaY.prototype.Xa6=function(){
if(XSS(this.xCR)){
this.XCI.Xlc().add(new XbY(
'RenderTaskShow',this,this.Xa6,null,333));
this.XCI.Xpr('RT '+this.xfK+' show later');
return;}
this.xCR.dgoo=this;
this.xCR.document.title=XQK('TIP_TASK');
xA7(this.xCR,this.xCR.document.body,'beforeunload',
XpD,xA3);
xA7(this.xCR,this.xCR.document.body,'unload',
Xa0,xA3);
this.XCI.Xpr('RT '+this.xfK+' show');}
XaY.prototype.XpG=function(){
this.XCI.Xpr('RT onbeforeunload','user',2);
return XQK('TOK_CLOSE_TASK');}
XaY.prototype.Xa4=function(){
var xd2=true;
var xbK='';
if(this.xCR&&!this.xCR.dgo37&&
!XSS(this.xCR)&&
this.xCR.document.body.className=='dgoTask')
{
this.xCR.dgo37=true;
this.xCR=null;
xbK=';nulled all';}
this.XCI.Xpr('RT '+this.xfK+' close'+xbK,'user',2);
return xd2;}
XaY.prototype.x4r=function(XVK){
this.XCI.Xpr('RT '+this.xfK+
' unapply'+(XVK?' lazy':''));
if(!XVK&&this.xCR&&!this.xCR.closed){
try{xA8(this.xCR,'beforeunload',
XpD,
xA4);
xA8(this.xCR,'unload',Xa0,
xA4);
this.xCR.dgo37=true;
this.xCR.close();}
catch(xa8){
this.XCI.Xpr('RT '+this.xfK+
' unapply:'+(new x6C(xa8)),'exc');}}
return true;}}
if(self.XI7){XI7.XJB(new XIX(
'../render_task.js',['../render_base.js','../render_container.js'],
XaZ));}
else{
XaZ();}

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
