//
function Xwu(){
var XGB=new String(window.location.search);
if(XGB.substr(0,1)=='?'){
XGB=XGB.substr(1);}
var xRQ=[];
if(XGB.length&&XGB.length>0){
xRQ=XGB.split('&');}
var XxA=[];
for(var i=0;i<xRQ.length;i++){
var XT6=xRQ[i].split('=');
XxA[XT6[0]]=XT6[1];}
return XxA;}
function Trainer_startLibrary_onload(){
var xRQ=Xwu();
dgoDOMAIN=xRQ['dgoDOMAIN']||'';
if(dgoDOMAIN!=''){
if(self.location.protocol=='http:'||
self.location.protocol=='https:')
{
self.document.domain=dgoDOMAIN;}}
var XLk=parent.frames.trainer_program_frame&&parent.frames.trainer_program_frame.dgo7;
if(XLk){
var Xwr=XLk?XLk.XRR().XSv():false;
if(!Xwr){}}
else{
Xwr=false;}
return Xwr;}

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
