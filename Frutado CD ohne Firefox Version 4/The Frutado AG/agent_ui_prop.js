//
function XPP(){
var x4E=self.document;
var XSW=x4E.forms.XLC.XLB;
var XSZ=x4E.forms.XLC.XLj;
var W=self.innerWidth||x4E.documentElement.scrollWidth;
var XOn=self.innerHeight||x4E.documentElement.scrollHeight;
XSW.style.width=(W-104)+'px';
XSZ.style.width=(W-42)+'px';
XSZ.style.height=(XOn-80)+'px';}
function XLm(){
var x4E=self.document;
var XSW=x4E.forms.XLC.XLB;
var XSZ=x4E.forms.XLC.XLj;
self.document.body.onresize=XPP;
self.onresize=XPP;
XPP();
XSW.value=self.opener.dgo3;
XSZ.value=self.opener.dgo4;
self.opener.dgo3=null;
self.opener.dgo4=null;
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
