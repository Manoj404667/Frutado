//
//
//
function XBL(XB8){
var XBV;
if(typeof(XB8)=='function'||
typeof(XB8)=='object')
{
XBV='LOG';
this.xCR=window.open("","Logging",
"width="+window.screen.width*0.9+
",height="+window.screen.height*0.45+
",left="+window.screen.width*0.0+
",top="+window.screen.height*0.50+
",resizable=yes,scrollbars=yes");
if(this.xCR==null){
alert("Logging():window open failed");
return;}
this.xCR.dgo24=true;
var XAd=this.xCR.document;
XAd.open();
XAd.writeln("<HTML><TITLE>Logging</TITLE>");
XAd.writeln("<BODY ONUNLOAD='if(!window.dgoDetached_)LoggingObject.close();' ");
XAd.writeln("ONBEFOREUNLOAD='if(!window.dgoDetached_)LoggingObject.close();'>");
XAd.writeln("<B>Logging</B>");
XAd.writeln("<INPUT ID='CLOSE' TYPE=BUTTON ONCLICK='window.close();' value='Close'>");
XAd.writeln("<INPUT ID='CLEAR' TYPE=BUTTON ONCLICK='if(!window.dgoDetached_)return LoggingObject.x1D()' value='Clear'>");
XAd.writeln("<BR><PRE><SPAN ID='LOG'></SPAN></PRE>");
XAd.writeln("<INPUT ID='CLOSE2' TYPE=BUTTON ONCLICK='window.close();' value='Close'>");
XAd.writeln("<INPUT ID='CLEAR2' TYPE=BUTTON ONCLICK='if(!window.dgoDetached_)return LoggingObject.x1D()' value='Clear'>");
XAd.writeln("</BODY></HTML>");
XAd.close();
this.XCh=XB8;
this.xCR.dgo24=false;}
else if(typeof(XB8)=='string'){
this.xCR=window;
XBV=XB8;}
else{
this.x6K=true;
return;}
this.xCR.XBN=this;
this.xd3=this.xCR.document.getElementById(XBV);
if(this.xd3==null){
XA_("Logging():root object '"+XBV+"' not found");}
this.x6K=true;}
XBL.prototype.x6K=false;
XBL.prototype.Xl=function(XB9,XBa){
var xpM=this.xd3;
if(xpM){
if(xpM.innerHTML.length==0){
xpM.innerHTML=XB9;}
else{
if(this.window&&this.xCR.dgo25){
return true;}
if(xpM.insertAdjacentText){xpM.insertAdjacentText('beforeEnd',XB9+
XBa?'':'<BR>');}
else{xpM.firstChild.appendData(XB9+
(XBa?'':'\r\n'));}
if(this.xCR&&
(typeof(this.xCR.dgo25)!='boolean'||
!this.xCR.dgo25))
{
this.xCR.scrollTo(this.xCR.document.body.scrollLeft,
this.xCR.document.body.scrollHeight-
this.xCR.document.body.clientHeight);}}}
return true;}
XBL.prototype.XGq=function(XB9,XBa){
var xbK=XB9.replace('&','&amp;');
xbK=xbK.replace(/[<]/g,'&lt;');
xbK=xbK.replace(/[>]/g,'&gt;');
xbK=xbK.replace(/["]/g,'&quot;');
msg=msg.replace(/[']/g,'&#39;');
return this.Xl(msg,Pi_noNewline_);}
Logging.prototype.x1D=function(){
var root=this.root_;
if(root)
root.innerHTML='';
return true;}
Logging.prototype.close=function(){
var root=this.root_;
if(root){
this.root_=null;
if(this.close_callback_){
this.close_callback_();
this.close_callback_=null;}}
this.window_.dgoClosed_=true;
return true;}
Logging.prototype.detach=function(){
this.Xl("===XBL detached=============================");
this.window_.dgoDetached_=true;
return true;}
Logging.prototype.getWindow=function(){
return this.window_;}
Logging.prototype.root_=null;
Logging.prototype.window_=null;
Logging.prototype.close_callback_=null;

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
