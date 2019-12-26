//
//
function XRw(XCI,XCt){
if(!XCI)return;
this.xfK=X3B('','form');
XLD.XHO(this,XCI,XCt);
this.XWr=false;
this.XWq=false;
this.XWs=false;
this.XTJ=XCt.Xsh();
this.XXa=(this.xUi==-1);}
function XSB(){
XRw.prototype=new XLD;
XRw.prototype.X1S=true;
XRw.prototype.XUh=function(XUa){
this.XUv=0;
if(this.XXa){
this.XCI.xTN(XAA);}
return true;}
XRw.prototype.XUU=function(XUa,XU2){
var XM6=(this.xcF==null);
this.XUv=XU2;
var xa7=this.X8Z()?this.XSb():false;
XM6&&this.XL0();
if(!xa7||this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('R form '+this+' animate('+XU2+')',
(xa7?'success':'error'));
return false;}
return true;}
XRw.prototype.XUi=function(XUa){
if(this.XUv!=null&&this.XUv<1){
this.XUU(XUa,1);}
this.XUv=null;
this.XTJ||this.XSc();
if(this.XXa&&this.XCI.XFV()==XAA){
this.XCI.xTN(XA0);}
this.XCI.x6b().remove(this);
return true;}
XRw.prototype.toString=function(){
var xbK=XLD.prototype.toString.XHO(this);
with(this){
xbK+=(this.xLO?',force':',noforce')+
(this.XTJ?',suppress':',fire')+
(this.XXa?',autodur':',noautodur');}
return 'RenderForm={'+xbK+'}';}
XRw.prototype.XUv=null;
XRw.prototype.XTJ=true;XRw.prototype.XXa=false;
XRw.prototype.x4o=function(){
return false;}
XRw.prototype.x4f=function(x5g){
var XWA=this.XCI.XRN();
this.XCI.x6b().X8E(this);
if(this.XXa){
this.xUi=this.X1L();}
if(this.xUi>100){
this.XCI.x6b().XU6().add(this,this.xUi,200,
XWA.XTw?0:XrQ);}
else{
this.XUv=1;
var xa7=this.X8Z()?this.x4e():false;
if(!xa7||XWA.xuQ>=2){
this.XCI.Xpr('R form '+this+' apply',
(xa7?'success':'error'));}
xa7&&(!this.XTJ)&&this.XSc();
this.XCI.x6b().remove(this);}
return true;}
XRw.prototype.x4r=function(XVK){
this.XCI.x6b().XU6().remove(this);
return true;}}
function XRx(XCI,XCt){
if(!XCI)return;
XRw.XHO(this,XCI,XCt);
this.xUi=0;if(XCt.Xc){
this.XTI=XCt.Xc();
if(this.XTI=='0'||
this.XTI=='1')
{
this.XTI=this.XTI-0;}
else if(this.XTI=='true'||
this.XTI=='false')
{
this.XTI=(this.XTI=='true');}
else{
if(typeof(this.XTI)!='integer'&&
typeof(this.XTI)!='boolean')
{
this.XTI=null;}}}
else{
this.XTI=null;}
this.XZz=(XCt.Xs?XCt.Xs()-0:null);}
function XSD(){
XRx.prototype=new XRw;
XRx.prototype.XTI=null;XRx.prototype.XZz=null;
XRx.prototype.toString=function(){
return 'RenderFormCheck={'+
XRw.prototype.toString.XHO(this)+
','+XR1(this.XTI,'checked','not-checked')+
',idx:'+(this.XZz==null?'null':this.XZz)+
'}';}
XRx.prototype.X1L=function(){
return 0;}
XRx.prototype.Xmp=function(){
this.X8Z();
this.xcF&&(this.xcF.checked=this.XTI);
return true;}
XRx.prototype.x4e=function(){
var xd2;
if(!this.xcF){
xd2=true;}
else if(this.XTI!=null){
if(typeof(this.xcF.checked)=='boolean'){
this.xcF.setAttribute('checked',this.XTI);
if(this.XCI.XFI_('moz','1.0')){
this.XCI.Xlc().add(new XbY(
'RenderFormCheck',this,this.Xmp,null,1));}
xd2=true;}
else{
xd2=false;}}
else if(this.XZz!=null){
if(typeof(this.xcF.selectedIndex)=='number'){
this.xcF.selectedIndex=this.XZz;
xd2=true;}
else{
xd2=false;}}
return xd2;}
XRx.prototype.XSc=function(){
var xd2;
if(!this.xcF){
xd2=true;}
else if(this.XTI!=null){
xd2=XQG('onclick',this.xVG,this.xcF)}
else if(this.XZz!=null){
var X1k=XQG('onchange',this.xVG,this.xcF)
var x7t=XQG('onclick',this.xVG,this.xcF)
xd2=X1k&&x7t;}
return xd2;}}
function XRy(XCI,XCt){
if(!XCI)return;
XRw.XHO(this,XCI,XCt);
this.xvi=XCt.XFS().split(',');
this.xqi=XCt.XEM().split(',');}
function XSE(){
XRy.prototype=new XRw;
XRy.prototype.xvi=null;XRy.prototype.xqi=null;
XRz.prototype.X1U=-1;
XRy.prototype.toString=function(){
return 'RenderFormSelect={'+
XRw.prototype.toString.XHO(this)+
',sel:'+this.xvi+',desel:'+this.xqi+'}';}
XRy.prototype.X1L=function(){
var xd2=Math.max(0,
this.xvi.length+this.xqi.length-1)*200;
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('R formselect auto duration='+
xd2+'('+this.xvi+'/'+this.xqi+')');}
return xd2;}
XRy.prototype.x4e=function(XVa){
if(this.xcF){
if(this.xcF.multiple!==true){
return false;}
var X1c=(XVa==undefined?
this.xvi.length+this.xqi.length:XVa);
var options=this.xcF.options;
var L=options.length||0;
var i,ii;
this.XCI.Xpr('R formsel.apply('+
XVa+'):'+X1c+' of '+
(this.xvi.length+this.xqi.length)+
' length='+L);
for(i=0;i<this.xqi.length&&i<X1c;++i){
ii=this.xqi[i]-0;
(ii<L)&&(options[ii].selected=false);
this.XCI.Xpr('R formsel--'+i+':'+ii);}
X1c-=this.xqi.length;
for(i=0;i<this.xvi.length&&i<X1c;++i){
ii=this.xvi[i]-0;
(ii<L)&&(options[ii].selected=true);
this.XCI.Xpr('R formsel++'+i+':'+ii);}}
return true;}
XRy.prototype.XSb=function(){
var xYE=1+Math.floor(this.XUv*
(this.xvi.length+this.xqi.length-1)+0.5);
if(xYE<=this.X1U){
return true;}
this.X1U=xYE;
return this.x4e(xYE);}
XRy.prototype.XSc=function(){
if(this.xcF){
var X1k=XQG('onclick',this.xVG,this.xcF);
var x7t=XQG('onchange',this.xVG,this.xcF);
return X1k&&x7t;}
return true;}}
function XRz(XCI,XCt){
if(!XCI)return;
XRw.XHO(this,XCI,XCt);
this.x0i=XCt.Xst();
this.x6j=XCt.Xend();
this.xyO=XCt.Xtx();}
function XSF(){
XRz.prototype=new XRw;
XRz.prototype.x0i=null;XRz.prototype.x6j=null;XRz.prototype.xyO=null;
XRz.prototype.X1d=null;XRz.prototype.X1V=-1;
XRz.prototype.toString=function(){
return 'RenderFormText={'+
XRw.prototype.toString.XHO(this)+
','+this.x0i+'-'+this.x6j+',"'+this.xyO+'"}';}
XRz.prototype.X1L=function(){
var xd2=Math.max(0,this.xyO.length-1)*200;
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('R formtext auto duration='+xd2+
'('+this.x0i+','+this.x6j+'"'+this.xyO+'")');}
return xd2;}
XRz.prototype.x4e=function(XRd){
if(this.xcF){
if(typeof(this.xcF.value)!='string'){
return false;}
if(this.X1d==null){
this.X1d=new String(this.xcF.value);}
var X1b=new String(this.xcF.value);
var X10=(XRd==undefined?this.xyO.length:XRd);
if(this.x6j==-1){
switch(this.x0i){
case 0:
this.xcF.value=this.xyO.substr(0,X10);
this.XCI.Xpr('R formtext 0,-1:"'+
X1b+'"=>"'+this.xcF.value+'"');
break;
case-1:
this.xcF.value=this.X1d+this.xyO.substr(0,X10);
this.XCI.Xpr('R formtext-1,-1:"'+
X1b+'"=>"'+this.xcF.value+'"');
break;
default:
this.xcF.value=this.X1d.substring(0,this.x0i)+
this.xyO.substr(0,X10);
this.XCI.Xpr('R formtext*,-1:"'+
X1b+'"=>"'+this.xcF.value+'"');
break;}}
else{
this.xcF.value=this.X1d.substring(0,this.x0i)+
this.xyO.substr(0,X10)+this.X1d.substring(this.x6j);
this.XCI.Xpr('R formtext*:"'+
X1b+'"=>"'+this.xcF.value+'"');}}
return true;}
XRz.prototype.XSb=function(){
var X10=1+Math.floor(this.XUv*
(this.xyO.length-1)+0.5);
if(X10<=this.X1V){
return true;}
this.X1V=X10;
return this.x4e(X10);}
XRz.prototype.XSc=function(){
return this.xcF?XQG('onchange',this.xVG,this.xcF):true;}}
function XSA(){
XSB();
XSD();
XSE();
XSF();}
if(self.XI7){XI7.XJB(new XIX('../render_form.js',
['../render_base.js','../render_container.js','animation.js'],
XSA));}
else{
XSA();}

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
