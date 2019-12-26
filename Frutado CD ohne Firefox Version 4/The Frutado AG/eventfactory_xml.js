//
function XIx(Xkd){
this.Xkd=Xkd;
this.xfK=Xkd.Xu().XFG();
var XXh=this.xfK.lastIndexOf('/')+1;var XXi=this.xfK.indexOf('.',XXh);
this.xfK=(XXi>=0
?this.xfK.substr(XXh,XXi-XXh):this.xfK.substr(XXh));
this.XXy.fileurl=this.XXy.url;
this.XXy.XYU=this.XYV;
this.error=this.xfK+' initialized';
this.x6K=true;}
function XJa(XCt){
return new xJj(
[ XCt.xCl ],
XCt.shape,
XCt.orientation,
XCt.rgbcolor
);}
function XMv(XCt){
return new xuh(
[ XCt.xCl ],
XCt.xaz,
XCt.XDq,
XCt.suppressHandler,
XCt.checked
);}
function XND(XCt){
return new xgj(
[ XCt.xCl ],
XCt.xaz,
XCt.XDq,
XCt.suppressHandler,
XCt.xvi,
XCt.xqi
);}
function XMz(XCt){
return new xTj(
[ XCt.xCl ],
XCt.xaz,
XCt.XDq,
XCt.suppressHandler,
XCt.selected,
XCt.duration
);}
function XNm(XCt){
return new xwj(
[ XCt.xCl ],
XCt.xaz,
XCt.XDq,
XCt.suppressHandler,
XCt.start,
XCt.end,
XCt.text
);}
function XQT(XCt){
return new Xkx(
[ XCt.xCl,XCt.object_name ],
XCt.xaz,
XCt.XDq,
XCt.effect,
XCt.border,
XCt.style||XCt.rgbcolor,
XCt.fillstyle,
XCt.xqL,
XCt.xmN,
null,null,XCt.x5K
);}
function XQU(XCt){
return new x1h(
[ XCt.xCl ],
XCt.xaz,
XCt.XDq,
XCt.text
);}
function XQV(XCt){
return new xyj([ XCt.xCl ]);}
function XQW(XCt){
return(XCt.type=='hide'
?new xbj([ XCt.xCl ])
:new xxh(
[ XCt.xCl ],
XCt.xaz,
XCt.XDq,
XCt.xqL,
null,XCt.x5K,
XCt.type,
XCt.duration
)
);}
function XQX(XCt){
return(XCt.type=='timeout'
?new xFh([ XCt.xCl ],XCt.timeout)
:new xei([ XCt.xCl ]));}
function XQY(XCt){
return new xBl(
[ XCt.xCl,XCt.object_name ],
XCt.xaz,
XCt.XDq,
XCt.xqL,
null,XCt.orientation,
XCt.duration
);}
function XQZ(XCt){
return(XCt.type=='close'
?(XCt.object_name
?new xvF([ XCt.xCl,XCt.object_name ])
:new xIi([ XCt.xCl ]))
:new xLh(
[ XCt.xCl,XCt.object_name ],
XCt.xaz,
XCt.XDq,
XCt.xqL,
null,XCt.x5K,
XCt.XTp,
XCt.orientation,
XCt.text,
XCt.replace,
XCt.width,
XCt.height,
XCt.noSpike?false:true
)
);}
function XQ0(XCt){
return new xwi(
[ XCt.xCl ],
XCt.xaz,
XCt.url,
XCt.insertSession,
XCt.sessionPattern,
XCt.method
);}
var XJU={
XYD:[ 'height','left','top','width' ],
XQ9:[ 'fullscreen','location','menubar','resizable',
'scrollbars','status','toolbar' ]};
function XQ2(XCt){
var xxk='';
var XK5=XJU.XYD;
var i,name;
for(i=0;i<XK5.length;++i){
name=XK5[i];
if(XCt[name]!=null){
xxk+=','+name+'='+XCt[name];}}
XK5=XJU.XQ9;
for(i=0;i<XK5.length;++i){
name=XK5[i];
if(XCt[name]!=null){
xxk+=','+name+'='+(XCt[name]?'1':'0');}}
return xxk.substr(1);}
function XQ1(XCt){
return(XCt.type=='close'
?new xMi([ XCt.xCl ],XCt.xaz)
:new xlj(
[ XCt.xCl ],
XCt.xaz,
XCt.url,
XCt.name,
XQ2(XCt)
)
);}
XIx.prototype={
x6K:null
,error:'ok'
,XYJ:function(XUn){
XUn.subs=[];
XUn.userHeader={};
var XYG=this.Xkd.XNb();
if(XYG.nodeName.toLowerCase()!='tour'&&
XYG.nodeName.toLowerCase()!='project')
{
return this.xfK+':root neither<tour>,nor<project>';}
this.XXg(XYG,XUn.userHeader);
var x4E=this.Xkd.XN7();
var XQ7=x4E.getElementsByTagName('AudioFormat')||[];
var XXv=x4E.getElementsByTagName('Marker')||[];
var XY4=x4E.getElementsByTagName('Take')||[];
if(XQ7.length!=1||
XY4.length<1||
XXv.length>0&&
XXv.length-1!=XY4.length)
{
return this.xfK+':Node count(s)incorrect:'+
XQ7.length+'<AudioFormat>'+
XXv.length+'<Marker>'+
XY4.length+'<Take>';}
this.XXf(XQ7,
XXv,XY4,XUn.subs);
return true;}
,XX8:function(xa5,XFj,xUi,XYZ){
var x4E=this.Xkd.XN7();
var XY4=x4E.getElementsByTagName('Take')||[];
if(XFj<0||XFj>=XY4.length){
return 'Too less<Take>nodes:'+XY4.length+
';needed:'+(XFj-1);}
var XY3=XY4[XFj];
var XA8=this.Xkd.XRL(XY3,'EventClip');
if(!XA8){XA8=this.Xkd.XRL(XY3,'MacroTrack');}
if(!XA8){
return 'Not found:<MacroTrack>in<Take>no.'+XFj;}
xa5.xbz(new xNh(XBA,-1));
var child,event;
for(var i=0;i<XA8.childNodes.length;++i){
child=XA8.childNodes[i];
if(child.tagName=='event'&&child.childNodes.length>0){
event=this.XYL(child,XYZ);
if(typeof(event)!='object'){
return event;}
xa5.xbz(event);}}
xa5.xbz(new xNh(XAz,xUi));
return true;}
,XYL:function(XX7,XYZ){
var value=XOj(XX7,'pos');
var xGk={xCl:
(typeof(value)=='undefined'?0:value-0)/XYZ};
var XX5=null;
var i=0;
while(i<XX7.childNodes.length&&!XX5){
if(XX7.childNodes[i].nodeType==1){
XX5=XX7.childNodes[i];}
++i;}
if(!XX5){
return '<event>at '+XCt.xCl+' has no content';}
var child;
for(i=0;i<XX5.childNodes.length;++i){
child=XX5.childNodes[i];
if(child.tagName=='relpos'){
xGk.XYX=child;}}
var xa7=this.XYM(
XX5,XX5.tagName,xGk);
return(xa7===true?xGk.XX9(xGk):xa7);}
,Xkd:null
,xfK:null
,XY6:[
'find_element',
'mouse_color','mouse_just','mouse_style',
'start_script','stop_script','error_script'
]
,XXy:{
fileurl:null 
,xJB:[
"&XG6" ]
,XEi:[
"@xJB","&ElementRef" ]
,XI5:[
"@XEi"
,"&XKk","&XJ0" ]
,ElementRef:[
'string path'
,'string ID'
,'string elementCollection'
,'number elementIndex'
,'number subElementIndex'
]
,XXZ:[
'bool alwaystop','bool autoplace'
,'bool closable'
,'bool cover'
,'bool minimizable'
,'bool minimized'
,'bool movable'
,'bool naked'
,'bool posFromCookie'
,'bool transparent'
,'bool x_frame'
]
,cursor:[
XJa
,'string shape'
,'string orientation'
,'string rgbcolor'
]
,formcheck:[
XMv
,"@XEi"
,'bool checked'
,'bool suppressHandler'
]
,formselect:[
XND
,"@XEi"
,"&XFI"
,"&XJi"
,'bool suppressHandler'
]
,formselect1:[
XMz
,"@XEi"
,'number duration'
,'number selected'
,'bool suppressHandler'
]
,formtext:[
XNm
,"@XEi"
,'number end'
,'number start'
,'bool suppressHandler'
,'string text'
]
,highlight:[
XQT
,"@XI5"
,"&XGk",'number border'
,'string effect'
,'string fillstyle'
,'string object_name'
,'string rgbcolor'
,'string style'
]
,javascript:[
XQU
,"@XEi"
,'#stringtrim text','string text'
]
,loaded:[
XQV
]
,mouse:[
XQW
,"@XI5"
,"&XGk"
,'number duration'
,'string type'
]
,pause:[
XQX
,'string type'
,'number timeout'
]
,scroll:[
XQY
,"@XI5"
,'number duration'
,'string orientation'
]
,textbubble:[
XQZ
,"@XI5"
,"&XXZ","&XGk",'number height'
,'bool noSpike'
,'string object_name'
,'string orientation'
,'bool replace'
,'string style'
,'bool spike'
,'#stringtrim text','string text'
,'string type'
,'number width'
]
,url:[
XQ0
,"@xJB"
,'string url'
,'string method'
,'bool insertSession'
,'string sessionPattern'
]
,window:[
XQ1
,"@xJB"
,'bool fullscreen'
,'number height'
,'number left'
,'bool location'
,'bool menubar'
,'string name'
,'bool resizable'
,'bool scrollbars'
,'bool status'
,'bool toolbar'
,'number top'
,'string type'
,'string url'
,'number width'
]}
,XYM:function(XX6,XkR,XCt){
var XX1=this.XXy[XkR]||{};
var XXx,XXz,type,name;
for(var i=0;i<XX1.length;++i){
XXx=XX1[i];
if(typeof(XXx)=='function'||typeof(XXx)=='object'){
XCt.XX9=XXx;}
else if(XXx.substr(0,1)=='&'){
if(XXx=="&ElementRef"){
XCt.XDq=this.XYK(XCt.XYX);}
else if(XXx=="&XG6"){
XCt.xaz=this.XYN(XCt.XYX);}
else if(XXx=="&XJ0"){
XCt.xqL=this.XYR(XCt.XYX);}
else if(XXx=="&XKk"){
XCt.xmN=this.XYS(XCt.XYX);}
else if(XXx=="&XGk"){
XCt.x5K=this.XYP(XCt.XYX);}
else if(XXx=="&XXZ"){
XCt.XTp=this.XYI(XX6);
if(typeof(XCt.XTp)!='object'){
return XCt.XTp;}}
else if(XXx=="&XJi"){
XCt.xvi=this.XYO(
XX6,'selected');}
else if(XXx=="&XFI"){
XCt.xqi=this.XYO(
XX6,'deselected');}}
else if(XXx.substr(0,1)=='@'){
this.XYM(
XX6,XXx.substr(1),XCt);}
else if(XXx.substr(0,1)=='#'){
XXz=XXx.substr(1).split(' ',2);
type=XXz[0];
name=XXz[1];
if(!XCt[name]){
XCt[name]=this.XXu(
XOl(XX6),type);}}
else{
XXz=XXx.split(' ',2);
type=XXz[0];
name=XXz[1];
if(!XCt[name]){
XCt[name]=this.XXu(
XOj(XX6,name),type);}}}
return true;}
,XXu:function(XIH,xGQ){
if(typeof(XIH)!='string'){
return null;}
if(xGQ=='number'){
return XIH-0;}
else if(xGQ=='bool'){
return(XIH&&XIH!='0'?true:false);}
else if(xGQ=='stringtrim'){
return XIH.XZA();}
return XIH;}
,XXg:function(XYH,XIC){
var name,value;
for(var i=0;i<this.XY6.length;++i){
name=this.XY6[i];
value=XOj(XYH,name);
if(typeof(value)!='undefined'){
XIC[name]=value;}}
return true;}
,XXf:function(XQ8,XXw,XY5,XY2){
var i,XY3,xGO,value,XX2,XYC;
var xlC=0;
var XQ6=XQ8[0];
var value=XOj(XQ6,'SamplesPerSecond');
var XYY=
(typeof(value)=='undefined'?8000:value-0)/1000;
XY2.XYZ=XYY;
for(i=0;i<XY5.length;++i){
XY3=XY5[i];
xGO={};
if(XXw.length>0){value=XOj(XXw[i+1],'pos');
xGO.duration=((typeof(value)=='undefined'?0:value-0)/
XYY)-xlC;}
else{value=XOj(XY3,'duration');
xGO.duration=((typeof(value)=='undefined'
?0:value-0)/XYY);}
XX2=this.Xkd.XRL(XY3,'data')||XY3;
value=XOj(XX2,'caption');
xGO.title=(typeof(value)=='undefined'
?'unknown_'+i:value);
value=XOj(XX2,'show');
xGO.visible=(typeof(value)=='undefined'
?true:value-0>0);
value=XOj(XX2,'jump');
xGO.jumpable=(typeof(value)=='undefined'
?true:value-0>0);
value=XOj(XX2,'call');
xGO.callable=(typeof(value)=='undefined'
?false:value-0>0);
XYC='0000'+i;
xGO.audio=this.xfK+'_'+XYC.substr(XYC.length-4,4);
xlC+=xGO.duration;
XY2[XY2.length]=xGO;}}
,XYO:function(XX6,XkR,
XXm,XXk)
{
var XXl=XXm||'index';
var XXj=XXk||'index';
var xd2='';
var XXn=this.Xkd.XRL(XX6,XkR);
if(!XXn){
return '';}
var child;
for(var i=0;i<XXn.childNodes.length;++i){
child=XXn.childNodes[i];
if(child.tagName==XXl){
xd2+=(','+
(XOj(child,XXj)||''));}}
return xd2.substr(1);}
,XYN:function(XYX){
var path='';
var XXd=(XYX
?this.Xkd.XRL(XYX,'frame'):null);
if(XXd){
path=XOj(XXd,'path');
if(path&&path.substr(0,1)==':'){
path=path.substr(1);}}
return path;}
,XYK:function(XYX){
var XX3=(XYX
?this.Xkd.XRL(XYX,'element'):null);
if(!XX3){
return new ElementRef('','',-1,-1);}
var xGk={};
var xzy=this.Xkd.XRL(XX3,'ID');
xGk.ID=(xzy?XOl(xzy):'');
if(true!==this.XYM(XX3,"ElementRef",xGk)){
return false;}
if(xGk.path&&xGk.path.substr(0,1)==':'){
xGk.path=xGk.path.substr(1);}
return new ElementRef(xGk.path,
xGk.elementCollection,xGk.elementIndex,
xGk.subElementIndex,xGk.ID);}
,XYR:function(XYX){
var XYF=(XYX
?this.Xkd.XRL(XYX,'posElement'):null);
if(!XYF){
return null;}
return XYF
?{x:(XOj(XYF,'x')||0)-0
,y:(XOj(XYF,'y')||0)-0}:null;}
,XYS:function(XYX){
var XYW=(XYX
?this.Xkd.XRL(XYX,'rectElement'):null);
if(!XYW){
return null;}
return XYW
?{x:(XOj(XYW,'x')||0)-0
,y:(XOj(XYW,'y')||0)-0}:null;}
,XYP:function(XYX){
return(XYX?{
x:(XOj(XYX,'offsetX')||0)-0
,y:(XOj(XYX,'offsetY')||0)-0}:null);}
,XYI:function(XQa){
var xGk={};
if(!XQa){
return xGk;}
var xa7=this.XYM(XQa,"XXZ",xGk);
return(xa7===true
?{cfg_onTop:xGk.alwaystop
,cfg_autoplace:xGk.autoplace
,cfg_closable:xGk.closable
,cfg_cover:xGk.cover
,cfg_minimizable:xGk.minimizable
,cfg_minimized:xGk.minimized
,cfg_unrestaurable:xGk.XxZ
,cfg_movable:xGk.movable
,cfg_naked:xGk.naked
,cfg_posFromCookie:xGk.posFromCookie
,cfg_transparent:xGk.transparent
,cfg_xframe:xGk.x_frame}:xa7);}};
if(self.XI7){XI7.XJB(new XIX(
'../eventfactory_xml.js',['xml.js','../events.js']));}

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
