
//
//
function Eep_resolve2simple(xVh,xcG,x9Q,XKQ,XKF){
var xUG=XBs(xcG,x9Q);
if(!xUG)
return-1;
var eep_resolveOptions={
eep_firstTextRe:null
,eep_useText:true
,eep_version:'6.1.1'};
var XHZ=new Eep(xVh,eep_resolveOptions);
var x1K=XHZ.eep_resolve(xUG,XKF);
return(typeof(x1K)=='object'?XJv(x1K,XKQ):x1K);}
////
var Eep_resolve;
var eep_resolveOptions={
eep_firstTextRe:null
,eep_useText:true
,eep_version:'6.1.1'};
Eep_resolve=function(xVh,xVG,XKF){
var XHZ=new Eep(xVh,eep_resolveOptions);
return XHZ.eep_resolve(xVG,XKF);}
//
//
function Xkq(XCI,xVG){
if(!XCI){
return null;}
if(typeof(xVG)!='object'||!xVG||xVG!=xVG.self){
return null;}
if(xVG==XCI.XJ1()){
return '-1';}
if(xVG==XCI.XvR(xVG)){
var XYc=XCI.Xd6().Xd7(xVG);
if(XYc){return XYc+':-3';}}
var X2A=XCI.X1O(xVG);
var XYc=XCI.Xd6().Xd7(X2A);
var xPG=Xko(xVG,X2A);
if(typeof(xPG)!='string'){
return null;}
if(XYc){return XYc+(xPG?':'+xPG:'');}
return false;}
//
function Xko(xVG,xlP){
var i=1;
var path='';
var xUG=xVG;
var parent=xVG.parent;
while(parent&&xUG!=parent&&xUG!=xlP&&
(!xUG.window||xUG.window!=xlP.window))
{
var XHB=true;
for(var ii=0;
ii<parent.frames.length&&XHB;
++ii)
{
try{
if(xUG==parent.frames[ii]||
(xUG.window&&(xUG.window==parent.frames[ii].window)))
{
XHB=false;
path=':'+ii+path;}}
catch(xa8){}}
xUG=parent;
parent=xUG.parent;
++i;}
return path.substr(1);}
function Xkp(x5n,XKQ){
if(!XKQ||
!XKQ.eep_firstTextRe||
typeof(XKQ.eep_firstTextRe.exec)!='function')
{
return null;}
var xa7=XKQ.eep_firstTextRe.exec(x5n);
if(!xa7||xa7.length<=1){return '';}
var xd2='';
for(var i=1;i<xa7.length;++i){
xd2+=xa7[i];}
return xd2;}
function Xks(XGT,XDe){
if(!XGT)
return false;
if(XGT.tagName){
if(XGT.tagName!=XDe.tagName){
return((XGT.tagName=='INPUT'||
XGT.tagName=='TEXTAREA'||
XGT.tagName=='SELECT')&&
(XDe.tagName=='INPUT'||
XDe.tagName=='TEXTAREA'||
XDe.tagName=='SELECT')?true:'!=TAG');}
if(XGT.tagName=='INPUT'&&
XGT.type=='radio'&&XDe.type=='radio'&&
XGT.value&&XGT.value!=XDe.value)
{
return '!=RadioVAL';}}
return true;}
function XJw(XGT,XDe,XKQ){
var xa7;
if(true!==(xa7=Xks(XGT,XDe))){
return xa7;}
if(XGT.id&&XDe.id&&!Xb5(XDe.id)&&XGT.id!=XDe.id){
return '!=ID';}
if(XGT.name&&XDe.name&&XGT.name!=XDe.name){
return '!=NAME';}
if(true!==(xa7=Xkr(XGT,XDe,XKQ))){
return xa7;}
return true;}
function Eep(xVh,x8c){
with(this){
XKQ=x8c||{};
x1Q=xVh;
eval(xVh);
xaz=eep_path;
Xk7=(typeof(eep_coll)=='object'&&eep_coll?
{xMk:eep_coll.n,index:eep_coll.i,xPh:eep_coll.ii}:
{xMk:'',index:0,xPh:-1});
x6K=true;}}
var Xb0='dgo_##_id_';
var XIP='dgo_::_id_';
function Xb5(XFh){
var id=XFh.substr(0,Xb0.length);
return id==Xb0||id==XIP;}
Eep.prototype={
x6K:false,
eep_path:null,eep_options:null,eep_atts:null,eep_coll:null,eep_parents:null,eep_siblingTags2:null,
eep_resolve:function(xVG,XKF){
this.XKF=XKF||new Object;
this.XKF.Xl='';
if(this.XKQ.eep_version){
this.XGp('Version "'+this.XKQ.eep_version+'"'+
(this.XKQ.eep_useText?';use text':'')+
(this.XKQ.eep_firstTextRe?(';textRe '+
this.XKQ.eep_firstTextRe):''));}
if(!this.eep_path){
this.XGp('Path "":BODY');
return xVG.document.body;}
if(!this.eep_atts.tagName){
this.XGp('tagName "":BODY');
return xVG.document.body;}
var x1K,xbK,xa7;
if(this.eep_atts.id){
x1K=XJy(xVG,this.eep_atts.id,false);
xbK='ID:'+xap(x1K);
if(typeof(x1K)=='number'){
this.XGp(xbK+':'+x1K+' DUP');}
else if(typeof(x1K)=='string'){
this.XGp(xbK+':warn "'+x1K+'"');}
else if(x1K){
if(true===(xa7=this.x7s(x1K))){
this.XGp(xbK);
return x1K;}
this.XGp(xbK+' rej "'+xa7+'"');
x1K=Xku(xVG,
this.eep_atts.tagName,this.eep_atts.type,
this.eep_atts.name,this.eep_atts.value);
if(x1K){
this.XGp('VALUE:'+xap(x1K));
return x1K;}}
else{
this.XGp(xbK);}}
x1K=XJz(xVG,
this.eep_atts.name,this.eep_atts.tagName,true);
if(x1K){
this.XGp('NAME:'+xap(x1K));
return x1K;}
x1K=xjH(xVG,this.xaz,this.eep_options);
xbK='EP "'+this.xaz+'":'+xap(x1K);
if(true===(xa7=this.XKM(x1K))){
this.XGp(xbK);
return x1K;}
this.XGp(xbK+' rej "'+xa7+'"');
if(this.XKQ.eep_useText){
x1K=Xkt(xVG,this.eep_atts.tagName,
this.eep_atts.firstText,this.XKQ,this.eep_atts.L||0);
xbK='TEXT "'+this.eep_atts.firstText+'"'+
(this.eep_atts.L||'')+':'+xap(x1K);
if(true===(xa7=this.XKN(x1K))){
this.XGp(xbK);
return x1K;}
this.XGp(xbK+' rej "'+xa7+'"');}
x1K=xhC(xVG,this.eep_atts.tagName,this.Xk7);
if(x1K){
this.XGp('COLL:'+xap(x1K));
return x1K;}
if(this.xtG(xVG)){
x1K=xjH(xVG,this.xaz,this.eep_options);
xbK='corrEP "'+this.xaz+'":'+xap(x1K);
if(true===(xa7=this.XKN(x1K))){
this.XGp(xbK);
return x1K;}
this.XGp(xbK+' rej "'+xa7+'"');}
if(this.eep_atts.id&&Xb5(this.eep_atts.id)){
x1K=XJy(xVG,this.eep_atts.id,true);
xbK='DGO ID '+this.eep_atts.id+':'+xap(x1K);
if(typeof(x1K)=='object'&&x1K){
if(true===(xa7=this.XKN(x1K))){
this.XGp(xbK);
return x1K;}
this.XGp(xbK+' rej "'+xa7+'"');}
else{
this.XGp(xbK);}}
x1K=this.xB6(xVG,this.eep_atts);
if(x1K){
this.XGp('BYTAGNAME:'+xap(x1K));
return x1K;}
x1K=this.xB7(xVG);
if(x1K){
this.XGp('BYCOLLHARDPROOF:'+xap(x1K));
return x1K;}
this.XGp('(-1==cannot find)'+this);
return-1;},
xB7:function(xVG){
try{
if(!this.eep_coll||!this.eep_coll.n){
return null;}
if(!xVG.document[this.eep_coll.n]){
return null;}
if(!xVG.document[this.eep_coll.n][this.eep_coll.i]){
return null;}
var x1K=xVG.document[this.eep_coll.n][this.eep_coll.i][this.eep_coll.ii];}
catch(xa8){
x1K=null;}
if(x1K){
var xB8=true;
for(var XCM in this.eep_atts){
if(x1K[XCM]!=this.eep_atts[XCM]){
xB8=false;
break;}}
if(xB8){
return x1K;}}
return null;},
xB6:function(xVG,eep_atts){
if(!eep_atts.tagName){
return null;}
var XKI=xVG.document.getElementsByTagName(eep_atts.tagName);
if(XKI.length==0){
return null;}
var x1K;
var xB9=null;
for(var i=0;i<XKI.length;++i){
x1K=XKI[i];
var xB8=true;
for(var XCM in eep_atts){
if(x1K[XCM]!=eep_atts[XCM]){
xB8=false;
break;}}
if(xB8){
if(xB9){
return null;}
xB9=x1K;}}
return xB9;},
toString:function(){
if(this.x1Q){
return 'Eep={path:"'+this.xaz+
'",opt:"'+this.XKQ+
'",ori:"'+this.x1Q+'"}';}
return 'Eep='+XA5(this);},
valueOf:function(){
return this.toString();},
XKQ:null,xaz:null,Xk7:null,x4F:1,x1Q:null,XKF:null,
XGp:function(XGE,XKC){
this.XKF.Xl+=XGE;
if(XKC)
return;
this.XKF.Xl+='\r\n';},
XKN:function(XGT){
return XJw(XGT,this.eep_atts,this.XKQ);},
x7s:function(XGT){
return Xks(XGT,this.eep_atts);},
XKM:function(XGT){
var xa7;
if(true!==(xa7=this.XKN(XGT))){
return xa7;}
return this.XKO(XGT);}}
if(self.XI7){XI7.XJB(new XIX('../eep.js'));}

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
