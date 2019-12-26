
function XKq(){
var XKp;
if(!(XKp=self.document.applets.XCI_)){
return false;}
if(typeof(XKp)!='object'&&typeof(XKp)!='function'){
return false;}
if(typeof(XKp.GetStatus)=='undefined'){
return false;}
if((XKp.GetStatus()+'')!='empty'){
return false;}
return true;}
var dgoH=null;
function x3J(){
if(XKq()){
self.clearInterval(dgoH);
parent.frames.trainer_program_frame.dgoO.XCQ.XGj();
return true;}
return false;}
function do_onload(){
dgoH=self.setInterval(x3J,50);
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
