//
//
function XDN(XUM){
if(!XUM)return;}
XDN.prototype={
ctx_condition:null
,cfg_relax:function(xtg){
return true;}
,cfg_prepare:function(){
return Xp6('cfg_prepare');}
,cfg_unloadlatency:function(){
return true;}
,cfg_type:function(){
return Xp6('cfg_type');}
,cfg_style:function(){
return Xp6('cfg_style');}
,cfg_orientation:function(){
return Xp6('cfg_orientation');}
,cfg_width:function(){
return Xp6('cfg_width');}
,cfg_height:function(){
return Xp6('cfg_height');}
,cfg_left:function(){
return Xp6('cfg_left');}
,cfg_top:function(){
return Xp6('cfg_top');}
,cfg_offset:function(xEQ,xFQ){
return Xp6('cfg_offset');}
,cfg_text:function(){
return Xp6('cfg_text');}
,cfg_reuse:function(xtg){
return true;}
,cfg_spike:function(){
return Xp6('cfg_spike');}
,cfg_retry:function(){
return Xp6('cfg_retry');}
,cfg_abort:function(){
return Xp6('cfg_abort');}
,cfg_ignore:function(){
return Xp6('cfg_ignore');}
,Xp6:function(XGE){
alert('Obsolete ASSERT function '+XGE+' called. Ignoring...');
return false;}};
function XDM(XCI,XCt){
if(!XCI)return;
var text=XCt.Xtx()||'';
var match,code,xiI;
if((match=text.match(XDQ))){code=text.substr(0,match.index);
if(code.search(XDO)<0){
this.xyO=code;}
else{
this.xyO='';}
xiI='ASSERT';
text=text.substr(match.index+match[0].length);
while(match){
match=text.match(XDP);
if(match){
code=text.substr(0,match.index);
text=text.substr(match.index+match[0].length);}
else{
code=text;
text=null;}
if(code.search(XDO)>=0){
this.x6K=false;
this.error='empty '+xiI+' clause';
XCI.Xpr('CO "'+XCt.Xtx()+'":'+
this.error,'error');
return;}
if(xiI=='ASSERT'){
this.XQ5=code;}
else if(xiI=='EXPLAIN'){
this.XVc=code;}
else if(xiI=='CONTINUE'){
this.XVJ=code;}
else if(xiI=='INIT'){
this.x4H=code;}
else if(xiI=='PREPARE'){
this.xyL=code;}
xiI=(match?match[1]:null);}
this.xfK=X3B('condition');
this.XIF=new XDN(this);}
else{this.xyO=text;
this.XQ5=null;if(XCt.Xzp){
this.Xzo=XCt.Xzp();
this.Xzs=XCt.Xzq();}
this.XWs=false;
this.xfK='jsevent';this.XIF=XCI.Xlf().Xls();}
if(!this.xyO||
this.xyO.search(XDO)>=0)
{
this.XWh=false;}
XLD.XHO(this,XCI,XCt);
this.XAo=0;
this.XWq=false;
this.XWr=false;}
var XDO=/^\s*$/;
var XDQ=/\s*ASSERT\s/;
var XDP=/\s(EXPLAIN|CONTINUE|INIT|PREPARE)\s/;
function XDR(){
XDM.prototype=new XLD;
XDM.prototype.XUh=function(XUa){
this.XCI.xTN(XAA);
this.XXT=true;
return true;}
XDM.prototype.XUU=function(XUa){
var xUG=this.x8b();
if(!xUG){
return false;}
if(xUG.document.body!=this.X1T){
this.X1T=xUG.document.body;
this.XL0();}
var xbF=this.X8Z();
if(xbF&&this.XQ5){
var xa7=this.XTq(this.XQ5);
if(xa7===true){
this.XCI.x6b().remove(this,true);}}
return true;}
XDM.prototype.XUi=function(XUa){
if(this.XXT){
if(this.XCI.XFV()==XAA){
this.XCI.xTN(XA0);}
else{
this.XCI.xki(XA0);}}
return true;}
XDM.prototype.toString=function(){
var xbK=XLD.prototype.toString.XHO(this);
xbK+='JS:'+this.xyO;
if(this.XQ5){
xbK+=',ASSERT:'+this.XQ5+
',CONTINUE:'+this.XVJ+
',EXPLAIN:'+this.XVc+
',INIT:'+this.x4H+
',PREPARE:'+this.xyL;}
return 'Condition2={'+xbK+'}';}
XDM.prototype.xyO=null;
XDM.prototype.XQ5=null;
XDM.prototype.XVJ=null;
XDM.prototype.XVc=null;
XDM.prototype.x4H=null;
XDM.prototype.xyL=null;
XDM.prototype.XIF=null;
XDM.prototype.X1T=null;XDM.prototype.XXT=false;XDM.prototype.XXY=false;XDM.prototype.XXV=false;XDM.prototype.XXW=false;XDM.prototype.XVb=true;
XDM.prototype.XTq=function(Xcp){
this.XIF.ctx_condition=this.XIF;
var xa7=this.XTr(Xcp);
this.XIF.ctx_condition=null;
return xa7;}
XDM.prototype.XTr=function(Xcp){
return this.XCI.Xlf().Xsl(Xcp,
this.XIF,this.XfA,this.xVG,this.xcF);}
XDM.prototype.Xzl=function(Xzo,Xzs){
return this.XCI.Xlf().Xzm(Xzo,Xzs,
this.XIF,this.XfA,this.xVG,this.xcF);}
XDM.prototype.x4o=function(){
if(!this.XXY){
if(this.xyO){this.XTr(this.xyO);
this.Xpp(Xp4());}
else{if(this.Xzo){
this.Xzl(this.Xzo,this.Xzs);
this.Xpp(true);}}
this.XXY=true;}
return true;}
XDM.prototype.x4f=function(){
var xbF=this.X8Z();
var XWA=this.XCI.XRN();
if(this.XQ5){
this.XCI.x6b().XU6().add(this,-1,
XWA.xWP-0,XWA.XTw?0:XrQ);}
if(xbF){
this.xHF(xbF);}
return(xbF||this.Xzo?this.x4o():(this.XQ5?true:false));}
XDM.prototype.x4r=function(XVK){
if(this.XQ5){
this.XCI.x6b().XU6().remove(this);}
return true;}}
if(self.XI7){XI7.XJB(new XIX('../condition.js',
['../render_base.js','../render_container.js','animation.js'],
XDR));}
else{
XDR();}

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
