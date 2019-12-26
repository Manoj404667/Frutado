function XyK(XgN,Xim,XgS){
XS6.XHO(this,XgN,Xim,XgS);}
function Xyi(){
XyK.prototype=new XS6;
XyK.prototype.Xyh=function(XdQ,Xym,Xyn){
try{
if(eval("typeof(this.GAPI."+XdQ+")")=='function'||
eval("typeof(this.GAPI."+XdQ+")")=='object'){
eval("this.GAPI."+XdQ+"(Xym,Xyn)");}}catch(Xyl){}}
XyK.prototype.Xf1=function(Xfh){
if(this.Xfq()!=XBh&&
this.Xfq()!=XyY){
this.XiE('-CLOSED-');
this.XiG('0:00');
this.Xyh('OnDisablePlay');
this.Xyh('OnDisablePause');
this.Xyh('OnDisableStop');
this.Xyh('OnDisableNext');
this.Xyh('OnDisablePrev');
this.XTR();}
try{
this.Xfj().Xf1(this.XgJ());}catch(Xyl){}}
XyK.prototype.onresize=function(){
if(this.Xfq()==XHI){this.Xyh('OnUpdateSynopsis');}}
XyK.prototype.xb1=function(){
if(this.Xfq()==XHI){
this.Xyh('OnUpdateSynopsis');}
this.XiG(this.Xfy());
return true;}
XyK.prototype.XiG=function(Xgg){
this.Xyh('OnTimeTextChange',
(!this.Xfj().x5t?'-':'')+Xgg);}
XyK.prototype.Xyb=function(xyO,x8I){
this.Xyh('OnStatusChange',xyO,x8I);}
XyK.prototype.XUB=function(){
var Xjj=this;
this.GAPI.TaskClicked=function(e){
Xjj.Xfj().XgI().exec('onclick',e);}
this.Xyh('OnShowTaskButton');
this.Xyh('OnEnableTaskButton');}
XyK.prototype.XTR=function(){
this.Xyh('OnDisableTaskButton');
this.Xyh('OnHideTaskButton');}
XyK.prototype.XWL=function(){
this.Xyh('PrevTipText',XQK('TIP_BACK'));
this.Xyh('NextTipText',XQK('TIP_NEXT'));
this.Xyh('PlayTipText',XQK('TIP_PLAY'));
this.Xyh('StopTipText',XQK('TIP_STOP'));
this.Xyh('PauseTipText',XQK('TIP_PAUSE'));
this.Xyh('TaskTipText',XQK('TIP_TASK'));}
XyK.prototype.XVi=function(){
if(this.XjM().cfg_clock){
this.Xyh('OnShowTime');}else{
this.Xyh('OnHideTime');}
if(this.XRN().xND){
this.Xyh('OnShowBrand');}else{
this.Xyh('OnHideBrand');}
if(this.XRN().xPO){
this.Xyh('OnShowSynopsis');}else{
this.Xyh('OnHideSynopsis');}
var Xjj=this;
this.GAPI.ChangeTimeDirection=function(e){
Xjj.XiW();}
this.GAPI.PrevClicked=function(e){
Xjj.Xfj().Xfi().exec('onclick',e);}
this.GAPI.NextClicked=function(e){
Xjj.Xfj().XgA().exec('onclick',e);}
this.GAPI.PlayClicked=function(e){
Xjj.Xfj().XgC().exec('onclick',e);}
this.GAPI.StopClicked=function(e){
Xjj.Xfj().XgF().exec('onclick',e);}
this.GAPI.PauseClicked=function(e){
Xjj.Xfj().XgB().exec('onclick',e);}
this.GAPI.TourstopClicked=function(Xii){
if(Xjj.XRN().xoN){
var xCi=Xjj.Xfj();
xCi.Xfw(Xii).exec();}}
this.GAPI.GuiPosition=function(x6I,xlP){
xNE.Xy7.x=x6I;
xNE.Xy7.y=xlP;}
this.GAPI.GuiIFrame=function(){
return Xjj.Xfo();}
this.GAPI.GuiRedraw=function(){
readjustSizes(true);}
this.GAPI.Skip=function(){
return Xjj.XRN().xoN;}
this.GAPI.Synopsis=function(){
return Xjj.XRN().xPO;}
this.Xhq(XGG);
return true;}
XyK.prototype.Xg6=function(){
if(this.Xfq()!=XBh&&
this.Xfq()!=XyY)
{
var Xjj=this;
this.GAPI.Tourstops=function(){
return Xjj.XgE();}
this.GAPI.VisibleTourstops=function(){
return Xjj.XhS();}
this.GAPI.CurrentTourstop=function(){
var Xyg=Xjj.Xfk();
Xyg.DurationTextMMSS=function(){
return Xyg.Xfl();}
Xyg.HasNext=function(){
return Xyg.Xhn();}
Xyg.HasPrev=function(){
return Xyg.Xhp();}
Xyg.Index=function(){
return Xyg.Xi();}
Xyg.VisibleIndex=function(){
return Xyg.Xf9();}
Xyg.Jumpable=function(){
return Xyg.X4y();}
Xyg.LastVisibleIndex=function(){
return Xyg.Xfa();}
Xyg.NextVisibleIndex=function(){
return Xyg.Xg2();}
Xyg.StartTime=function(){
return Xyg.Xtm();}
Xyg.Title=function(){
return Xyg.Xti();}
Xyg.Visible=function(){
return Xyg.XhE();}
Xyg.Visited=function(){
return Xyg.XgK();}
return Xyg;}
this.GAPI.Tourstop=function(XFj){
if(XFj!=-1){
var Xyj=Xjj.XgD(XFj);
if(Xyj){
Xyj.DurationTextMMSS=function(){
return Xyj.Xfl();}
Xyj.HasNext=function(){
return Xyj.Xhn();}
Xyj.HasPrev=function(){
return Xyj.Xhp();}
Xyj.Index=function(){
return Xyj.Xi();}
Xyj.VisibleIndex=function(){
return Xyj.Xf9();}
Xyj.Jumpable=function(){
return Xyj.X4y();}
Xyj.LastVisibleIndex=function(){
return Xyj.Xfa();}
Xyj.NextVisibleIndex=function(){
return Xyj.Xg2();}
Xyj.StartTime=function(){
return Xyj.Xtm();}
Xyj.Title=function(){
return Xyj.Xti();}
Xyj.Visible=function(){
return Xyj.XhE();}
Xyj.Visited=function(){
return Xyj.XgK();}
return Xyj;}else{
return null;}}else{
return null;}}
this.GAPI.Duration=function(){
return Xjj.XjN();}
this.GAPI.Time=function(XFj){
return Xjj.XFJ().Xtm(XFj);}
this.GAPI.CurrentTime=function(){
return Xjj.Xfz();}
this.Xyh('OnInitSynopsis');
if(this.Xfq()==XHI){this.Xyh('OnUpdateSynopsis');}}
return true;}
XyK.prototype.XhN=function(){
if(this.XHY){
(this.XHY.Xac()?this.Xyh('OnEnablePlay'):this.Xyh('OnDisablePlay'));
(this.XHY.Xap()?this.Xyh('OnEnablePause'):this.Xyh('OnDisablePause'));
(this.XHY.Xas()?this.Xyh('OnEnableStop'):this.Xyh('OnDisableStop'));
if(this.XHY.Xaj()&&this.XRN().xoN){
(this.Xfk().Xhn()?this.Xyh('OnEnableNext'):this.Xyh('OnDisableNext'));
(this.Xfk().Xhp()?this.Xyh('OnEnablePrev'):this.Xyh('OnDisablePrev'));}else{
this.Xyh('OnDisableNext');
this.Xyh('OnDisablePrev');}
if(this.XHY.XCG==XAB){
this.Xyh('OnDisablePlay');
this.Xyh('OnDisablePause');
this.Xyh('OnDisableStop');
this.Xyh('OnDisableNext');
this.Xyh('OnDisablePrev');
this.Xyh('_CLEAR');
readjustSizes(false);}else{
readjustSizes(true);}}else{
this.Xyh('OnDisablePlay');
this.Xyh('OnDisablePause');
this.Xyh('OnDisableStop');
this.Xyh('OnDisableNext');
this.Xyh('OnDisablePrev');}}}
if(self.XI7){XI7.XJB(new XIX('../gui_api.js',[],Xyi));}
else{
Xyi();}

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
