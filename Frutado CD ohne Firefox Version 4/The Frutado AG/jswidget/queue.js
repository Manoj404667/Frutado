//
function XBb(){}
XBb.prototype.XEp=null;XBb.prototype.XGf=null;XBb.prototype.XGg=0;
XBb.prototype.x1D=function(){
this.XEp=null;
this.XGf=null;
this.XGg=0;
return true;}
XBb.prototype.XEJ=function(){
var x=this.XEp;
if(x==null){
this.XGg=0;
this.XGf=null;
return null;}
if(this.XGg<=1){
this.XGg=1;
this.XEp=null;
this.XGf=null;}
else{
this.XEp=x.XBw.XGM;
if(this.XEp){
this.XEp.XBw.xbq=null;}}
x.XBw=null;
--this.XGg;
//DBG XAU('@Q Queue:get()='+x+'/'+this);
return x;}
XBb.prototype.XFD=function(){
return this.XGg;}
XBb.prototype.insertBefore=function(XlV,xFR){
if(!XlV){
return this.xbz(xFR);}
var XLw=XlV.XBw;
if(!XLw){
return false;}
xFR.XBw=new Object;
xFR.XBw.Xea=this;
xFR.XBw.XGM=XlV;
if(this.XEp==XlV){
xFR.XBw.xbq=null;
this.XEp=xFR;}
else{
xFR.XBw.xbq=XLw.xbq;
XLw.xbq.XBw.XGM=xFR;}
XLw.xbq=xFR;
this.XGg++;
return true;}
XBb.prototype.Xlg=function(xFR){
return xFR.XBw&&xFR.XBw.Xea==this;}
XBb.prototype.xbc=function(){
return this.XEp;}
XBb.prototype.xbd=function(xFR){
return xFR.XBw.XGM;}
XBb.prototype.xbz=function(xFR){
xFR.XBw=new Object;
xFR.XBw.Xea=this;
xFR.XBw.XGM=null;
if(++this.XGg<=1){
this.XGg=1;
xFR.XBw.XGM=null;
xFR.XBw.xbq=null;
this.XEp=xFR;}
else{
xFR.XBw.xbq=this.XGf;
this.XGf.XBw.XGM=xFR;}
this.XGf=xFR;
//DBG XAU('@Q Queue:put('+xFR+')/'+this);
return true;}
XBb.prototype.valueOf=function(){
return this.toString();}
XBb.prototype.toString=function(){
var xbK='Queue={'+this.XGg;
xbK+=',first:'+this.XEp;
xbK+=',last:'+this.XGf;
return xbK+'}';}
if(self.XI7){
XI7.XJB(new XIX('queue.js'));}

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
