//
function xvC(xGQ,XIJ){
XIJ=XIJ+'';
if(xGQ=='nc'&&XIJ>='7'){
xGQ='moz';
if(XIJ>='7.2'){
XIJ='1.7';}else if(XIJ>='7.1'){
XIJ='1.4';}else{
XIJ='1.0';}}
var xjM=xMB();
return(xGQ==xjM.type&&XIJ>=xjM.Xv);}
function xMB(){
var xGk=[
[ 'op',null,'Opera','Opera ' ]
,[ 'saf',null,'Safari','Safari/' ]
,[ 'lynx',null,'Lynx','Lynx/' ]
,[ 'konq',null,'Konqueror','KHTML','Konqueror/' ]
,[ 'ie',null,'Internet Explorer','MSIE ' ]
,[ 'moz','Netscape','Netscape 7/Mozilla',
'Gecko/','Mozilla/5','Netscape/','rv:' ]
,[ 'moz','Netscape','Mozilla','Gecko/','Mozilla/5','rv:' ]
,[ 'nc','Netscape','Netscape','Mozilla/','Netscape6/' ]
,[ 'nc','Netscape','Netscape','Mozilla/' ]
];
var xNQ=navigator.userAgent;
var i,keywords,ii,xiI,xoL;
for(i=0;i<xGk.length;++i){
keywords=xGk[i];
for(ii=3,xoL=0;xoL>=0&&ii<keywords.length;++ii){
xiI=keywords[ii];
xoL=xNQ.indexOf(xiI);}
if(keywords[1]&&navigator.appName!=keywords[1]){
xoL=-1;}
if(xoL>=0){
var Xv=(parseFloat(
xNQ.substr(xoL+xiI.length))+'.0').substr(0,3);
return{
type:keywords[0],
Xv:Xv,
name:keywords[2]+' '+Xv};}}
return{type:'?',Xv:'0.0',name:'{unknown}'};}

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
