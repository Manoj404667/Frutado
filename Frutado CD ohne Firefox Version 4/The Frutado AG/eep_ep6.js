
//////
var Eep_resolve_ep6;
var XoZ={
eep_firstTextRe:null
,eep_useText:false
,eep_version:"6.1.0-ep6"};
var XoY=/^(htmlb_[0-9]+_[0-9]+)_[0-9]+[-_][-a-zA-Z0-9_]/;
var XoX=/^htmlb_[0-9]+_[0-9]+/;
Eep_resolve_ep6=function(xVh,xVG,XKF){
var XHZ=new Eep(xVh,XoZ);
if(typeof(XHZ.eep_atts.id)=='string'&&
XHZ.eep_atts.id.search(XoY)==0)
{
Xo0(XHZ,xVG,XKF);}
return XHZ.eep_resolve(xVG,XKF);}
function Xo0(XoW,xVG,XKF){
var forms=xVG.document.getElementsByTagName('FORM');
if(forms.length<=0){
return false;}
var match=XoW.eep_atts.id.match(XoY);
var Xo3,xkI,i,xLI,form;
if(!match||!(Xo3=match[1])){
return false;}
xkI=Xo3.length;
var Xo5=XoW.eep_parents;
var Xo4=-1;
for(i=0;Xo4<0&&i<Xo5.length;++i){
xHL=Xo5[i];
if(xHL&&xHL.tagName=='FORM'&&
((typeof(xHL.id)=='string'&&
xHL.id.substr(0,xkI)==Xo3)||
(typeof(xHL.name)=='string'&&
xHL.name.substr(0,xkI)==Xo3)))
{
Xo4=i;}}
if(Xo4<0){
return false;}
var Xo2=0;
var Xo1=null;
for(xLI=0;xLI<forms.length;++xLI){
form=forms[xLI];
if(typeof(form.id)=='string'&&
form.id.search(XoX)==0)
{
++Xo2;
Xo1=form;}}
if(Xo2!=1){
return false;}
XoW.x1Q=null;
XoW.eep_atts.id=Xo1.id+XoW.eep_atts.id.substr(xkI);
for(i=Xo4;i>=0;--i){
xHL=Xo5[i];
if(typeof(xHL.id)=='string'&&xHL.id.substr(0,xkI)==Xo3){
xHL.id=Xo1.id+xHL.id.substr(xkI);}
if(typeof(xHL.name)=='string'&&xHL.name.substr(0,xkI)==Xo3){
xHL.name=Xo1.id+xHL.name.substr(xkI);}}
return true;}

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
