//
var XbA=null;var XcK=null;var XFb=null;var XTm=false;
var Xaz=0;var XnO=0;
function XEw(){
var name,href;
try{
name=this.efp_frame.name;
href=this.efp_frame.location.href;}
catch(xa8){
name='{no-access}';
href='{no-access}';}
return 'EFP={'+this.efp_path+';"'+name+'"='+href+
';forms '+this.efp_formNames+'}';}
function XF6(XfA){
if(!XfA){
return false;}
var xUG=XfA.x6U();
var path=XfA.XFG(true);
var XjE=XcK[path];
var xd2;
XcK[path]=XfA;
if(XjE){xd2=false;
dgoAgent.XRN().xuQ>=3&&
dgoAgent.Xpr('API frametracking OVERWRITE '+XfA);}
else{
xd2=XbA.xbz(new String(path));
dgoAgent.XRN().xuQ>=3&&
dgoAgent.Xpr('API frametracking ADD '+XfA+
(XTm?' CALL ontrack':''));
if(xd2&&XTm){
XTm=false;
Xaz=0;
dgoAgent.Xlc().add(new XbY(
'Track',self,self.XF7));}}
return xd2;}
function XF7(){
if(dgoAgent.XFV()!=XBR){
if(++Xaz % 10==1&&
dgoAgent.XRN().xuQ>=3)
{
dgoAgent.Xpr('API ontrack waits for PAUSE:'+
Xaz);}
dgoAgent.Xlc().add(new XbY('TrackWait4Pause',
self,self.XF7,null,333));
return;}
if(typeof(XFb)=='string'){
dgoAgent.XRN().xuQ>=2&&
dgoAgent.Xpr('API CALL ontrack "'+XFb+'"');
dgoAgent.Xlf().Xsl(XFb);}}
function Xax(xVG){
var XTu=':';
var x4E=xVG.document;
var form;
for(var i=0;i<x4E.forms.length;++i){
form=x4E.forms[i];
if(form&&form.tagName&&form.tagName=='FORM'){
XTu+=(form.name||'');}
XTu+=':';}
return XTu;}
function XnJ(XDx){
var x8Q=this.dgoc;
if(!x8Q){
return;}
if(XDx.type=='submit'){
XnP(x8Q,this);}
else if(this.tagName=='A'&&XDx.type=='click'){
XrZ(x8Q,this);}
else{
XnK(x8Q,this.dgoB||0);}}
function XnN(XDx){
var Xjj=this;
var X1K=function(){
var XGB=Xjj.dgo50;
Xjj.dgo50=null;
Xjj.target=XGB;}
this.dgoc.setTimeout(X1K,1);}
function XrZ(x9Q,xcF){
XnK(x9Q,xcF.dgoB);
var name='dgoWindow_'+(++XnO);
dgoAgent.Xpr('API clicked twisted '+
XA6(xcF));
var x8Q=x9Q.open('',name,null,false,xcF.dgoB);
if(!x8Q){
return;}
xcF.dgo50=xcF.target;
xcF.target=name;
return true;}
function XnP(x9Q,XN3){
XnK(x9Q,XN3.dgoB);
var name='dgoWindow_'+(++XnO);
dgoAgent.Xpr('API submitted twisted '+
XA6(XN3));
var x8Q=x9Q.open('',name,null,false,XN3.dgoB);
if(!x8Q){
return;}
XN3.dgo50=XN3.target;
XN3.target=name;
return true;}
function XnK(x9Q,dgoB){
var options=dgoB||0;
x9Q.dgoB=dgoB;
if(options & CFG_TWIST_OPTION_PARENT){
XnK(x9Q.parent,options & !CFG_TWIST_OPTION_PARENT);}
if(x9Q&&x9Q.open!=XnL){
x9Q.dgo51||
(x9Q.dgo51=x9Q.open);
x9Q.open=XnL;}
return true;}
function XnL(xMj,xfK,xji,x5q){
if(!this.dgo51){
var xbK='API TwistedWindowOpen('+xMj+'):no .dgoSavedOpen_';
dgoAgent.Xpr('API '+xbK,'error');
return null;}
var XVO=XTd(dgoAgent.XRN().XoM);
XVO.cfg_name=xfK;
XVO.cfg_features=xji;
XVO.cfg_replace=x5q;
XVO.cfg_flagReuse=xfK?true:false;
XVO.cfg_flagPollOnly=true;
XVO.opener=this;
XVO.dgoB=this.dgoB;
XVO.XhZ=((XVO.dgoB & CFG_TWIST_INJECT_TRAINER)==
CFG_TWIST_INJECT_TRAINER);
XVO.XrN=XVO;
XVO.open=function(xvk,xwk,xaf,xae){
return this.dgo51(xvk,xwk,xaf,xae);}
var x8Q=XaB(xMj,XVO,
null,XrB,
dgoAgent.XRN().xuQ>=3?XAU:null);
return x8Q;}
function XrB(x9Q,XVO){
if(!x9Q){
dgoAgent.Xpr(
'API TwistedWindowOpen_cb_():no window(closed?)','warning');
return;}
dgoAgent.XRN().xuQ>=3&&
dgoAgent.Xpr('API TwistedWindowOpen_cb_()');
var XfQ=dgoAgent.Xd6();
var XW6,XXI;
if(typeof(x9Q.name)=='string'&&x9Q.name){
XW6=XfQ.XoD(x9Q.name);
XXI=XoC(x9Q);
if(XW6&&XXI&&XW6!=XXI){
var xbK='Different TFrames,byName '+
XW6+' fromOpen '+XXI;
dgoAgent.Xpr('API TwistedWindowOpen_():'+xbK,'error');
return;}
if(XXI){
dgoAgent.Xpr('API TwistedWindowOpen_():Re-using '+XXI);
return;}}
XfQ.XcR(null,x9Q,'',XVO.XhZ);}
if(self.XI7){XI7.XJB(new XIX('../api_impl.js',
['queue.js','../agent.js','../xbrowser.js','../render_container.js' ]));}

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
