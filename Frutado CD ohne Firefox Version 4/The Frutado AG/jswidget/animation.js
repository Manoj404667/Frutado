//
var XU8=0;
var XrQ=1024;
function XJW(XHh){
this.XU9=new XBb;
this.XHh=XHh||function(){};
this.x6K=true;}
XJW.prototype={
x6K:false
,add:function(XGT,XDh,XUb,XKQ){
var h=new XUR(this,XGT,XDh,XUb,XKQ);
this.XU9.xbz(h);
this.XrX(h);
this.XrU(h,0);
return h;}
,XUU:function(XUT){
this.XU4=false;
var XUf=new XBb;
var i=0;
var h,XVA,XUd,XU1,XUo;
while(this.XU9.XFD()>0){
h=this.XU9.XEJ();
++i;
if(h.XEO()<=0&&h.XEO()!=-1||
h.XFB()<=0)
{
var xbK='Animation::animate():Illegal duration/interval:'+
h.XEO()+'/'+h.XFB();
this.XHh('ANI '+xbK,'error');}
else if(h.XU7()==null||
XUT-h.XU7()>=h.XFB())
{
this.XUX=h;
XVA=h.XU7();
h.XUg(XUT);
XUo=XUT-h.XKg();
if(XUo<h.XEO()||
h.XEO()==-1)
{
XU1=(XUo>=h.XEO()-h.XFB()?
1:
XUo/(h.XEO()-h.XFB()));
this.XrU(h,XU1);
h.XVH(XU1);
if(this.XU4){
h.XVH(1);
this.XrY(h);
this.XU4=false;}
else{
XUf.xbz(h);}}
else{
if(h.XUr()!=1){
this.XrU(h,1);
h.XVH(1);}
this.XrY(h);
this.XU4=false;}}
else{
XUf.xbz(h);}}
this.XUX=null;
this.XU9.x1D();
this.XU9=XUf;
return XUf.XFD();}
,x3J:function(){
this.XUU((new Date).valueOf());
return true;}
,remove:function(XGT){
var xd2=false;
if(this.XUX&&XGT==this.XUX.XKe()){
this.XU4=true;
xd2=true;}
else{
var XUf=new XBb;
var i=0;
var h;
while(this.XU9.XFD()>0){
h=this.XU9.XEJ();
++i;
if(XGT==h.XKe()){
h.XVH(1);
this.XrY(h);
xd2=true;}
else{
XUf.xbz(h);}}
this.XU9.x1D();
this.XU9=XUf;}
return xd2;}
,x8A:function(Xmy){
var h;
while(this.XU9.XFD()>0){
h=this.XU9.XEJ();
Xmy||h.XVH(1);
this.XrY(h);}
return true;}
,XU9:null,XUX:null,XU4:false
,XHh:null
,XrU:function(XUa,XU2){
var xwK=XUa.XKe();
if(XUa.XrW()){
try{
xwK.XUU(XUa,XU2);}
catch(xa8){
this.XHh('ANI('+XU2+')'+XUa,'exc');}}
else{
xwK.XUU(XUa,XU2);}}
,XrX:function(XUa){
var xwK=XUa.XKe();
if(XUa.XrW()){
try{
xwK.XUh(XUa);}
catch(xa8){
this.XHh('ANI start '+XUa,'exc');}}
else{
xwK.XUh(XUa);}}
,XrY:function(XUa){
var xwK=XUa.XKe();
if(XUa.XrW()){
try{
xwK.XUi(XUa);}
catch(xa8){
this.XHh('ANI stop '+XUa,'exc');}}
else{
xwK.XUi(XUa);}}}
function XUR(XUV,XGT,XDh,XUb,XKQ)
{
var options=XKQ||0;
this.XUV=XUV;
this.XDh=XDh;
this.XrV=(options & XrQ);
this.XUb=XUb;
this.XGT=XGT;
this.XkO=(new Date).valueOf();
this.x6K=true;}
XUR.prototype={
x6K:false
,XU5:function(){
return this.XUV;}
,XEO:function(){
return this.XDh;}
,XrW:function(){
return this.XrV;}
,XFB:function(){
return this.XUb;}
,XKg:function(){
return this.XkO;}
,XU7:function(){
return this.XUe;}
,XUg:function(t_){
this.XUe=t_;
return t_;}
,XUr:function(){
return this.XUv;}
,XVH:function(XTt){
this.XUv=XTt;
return XTt;}
,XKe:function(){
return this.XGT;}
,XUV:null
,XDh:null
,XrV:false
,XUb:null
,XUv:null
,XUe:null
,XGT:null
,XkO:null}
if(self.XI7){
XI7.XJB(new XIX(
'animation.js',['queue.js','js_extensions.js']));}

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
