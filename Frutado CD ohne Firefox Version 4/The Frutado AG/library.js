//
function XOp(XCI){
this.XCI=XCI;
this.x6K=true;}
XOp.prototype={
x6K:false
,error:''
//
//
,load:function(xMj,xVG,XQd,XCZ,XCY){
this.xMj=xMj;
this.xVG=xVG||window;
this.xVG.dgoK=this;
this.XRf=(typeof(XQd)=='object'&&XQd?
XQd:
this.xVG.document.getElementById(
typeof(XQd)=='string'&&XQd?
XQd:"DIV_LibraryTree"));
if(!this.XRf){
this.XNV=1;
this.error='Library Tree DIV "'+
(XQd||"DIV_LibraryTree")+'" not found.';
return false;}
this.XC0=new XAZ(XCZ,XCY,XAU);
this.XTf=new XMw(this.xVG,
typeof(XAU)=='function'||
typeof(XAU)=='object'?XAU:null,
this.XCI.XRN().Xv7);
this.XNV=0;
if(this.xVG.cfg_libraryicons&&
typeof(this.xVG.cfg_libraryicons)=='string')
{
this.XUx=this.xVG.cfg_libraryicons;}
if(this.xVG.cfg_libraryformats&&
typeof(this.xVG.cfg_libraryformats)=='object')
{
this.XUw=this.xVG.cfg_libraryformats;}
if(this.xVG.cfg_librarytreestyle&&
typeof(this.xVG.cfg_librarytreestyle)=='object')
{
this.X11=this.xVG.cfg_librarytreestyle;}
else{
this.X11={};}
this.XuG=this.XCI.XRN().libraryfilter||'';
this.X17=this.XCI.XRN().Xv6||false;
this.XCI.Xpr('lib:before setting wait feedback');
XlN(
this.XCI.XVy(),1,0,null);
this.XCI.Xlc().add(new XbY(
'LIBloadXml',this,this.Xli));
return true;}
,Xli:function(){
this.XCI.Xpr('lib:loadCb0 '+this.xMj);
return this.XTf.load(this.xMj,this,this.XGj);}
,XO5:function(){
return(this.XTf?this.XTf.XO5():true);}
,XHV:function(XSG){
this.XVN=null;
var xpK;
if(typeof(XSG)=='undefined'){xpK=this.XQb;}
else if(typeof(XSG)=='string'){xpK=this.XRg.Xni(XSG);
if(!xpK||xpK.x2P!=this.XRg){
var xbK='node with ID '+XSG+' not in tree';
this.XCI.Xpr('L startTour():'+xbK);
return false;}}else{
xpK=XSG;}
var XSm=this.XRS(xpK);
if(!XSm){
this.XCI.Xpr('L startTour():consecutive.','error');
return false;}
this.XCI.Xpr(XSm.href,'tour',2);
if(xpK.type.substr(0,4)=='tour'&&XSm.href){
var x4E=this.xVG.document;
var xrP=XSm.href;
var i=xrP.indexOf('?');
var XR0=(i>=0?xrP.substr(i+1):xrP);
if((i=XR0.indexOf('config='))>=0){
XR0=XR0.substr(0,i+7)+
escape(XR0.substr(i+7));}
XR0+=(xpK.parameters?'&'+xpK.parameters:'');
if(x4E.FORM_Library.INP_FlagNewWindow&&
x4E.FORM_Library.INP_FlagNewWindow.checked)
{
this.XCI.Xpr('L startTour(win)"'+
XR0+'"','trace',3);
if((i=xrP.indexOf('config='))>=0){
xrP=xrP.substr(0,i+7)+
escape(xrP.substr(i+7));}
this.XVN=this.XCI.Xu().external(xrP);
this.XVN.XCK(
xpK.parameters||'',true);
var XZG=new xGB(this.XCI.XF3(),{
XVq:true
,XVW:this.XCI.Xu().xNI('').toString()},XM4,XAU);
if(!XZG.x6K){
this.XCI.Xpr('L startTour(win):Config creation:'+
XZG.error,'error');
XZG.x1D();
return false;}
if(!XZG.load(XR0,this,this.XW5)){
this.XCI.Xpr('L startTour(win):Config load:'+
XZG.error,'error');
XZG.x1D();
return false;}
return true;}
if(this.XQC){
this.Xt8&&this.Xt8.XA_();
this.XCI.XFV()==XAB||
this.XCI.XTK('lib-tourstart');}
this.XCI.Xpr('L configload "'+XR0+'"','trace',3);
var XZG=new xGB(this.XCI.XF3(),{
XVq:false
,XVW:this.XCI.Xu().xNI('').toString()},XM4,XAU);
if(!XZG.x6K){
this.XCI.Xpr('L startTour():Config creation:'+
XZG.error,'error');
XZG.x1D();
return false;}
if(!XZG.load(XR0,this,this.XSy)){
this.XCI.Xpr('L startTour():Config load:'+
XZG.error,'error');
XZG.x1D();
return false;}
var XMe=this.XRg.xd5('SHOW',true);
XMe[0]&&XMe[0].xkD('SHOW',false);
XMe=this.XRg.xd5('PLAY',true);
XMe[0]&&XMe[0].xkD('PLAY',false);
this.XQb=null;
if(!this.X17){
xpK.xkD('PLAY',true);}else{
xpK.parent.xkD('PLAY',true);}
var XSO=x4E.getElementById("BTN_Start");
if(XSO){
XSO.disabled=true;}}
return true;}
,Xzd:function(XMn){
var xUG=this.XCI.XVy();
var x4E=this.xVG.document;
if(x4E.FORM_Library.INP_FlagNewWindow&&
x4E.FORM_Library.INP_FlagNewWindow.checked){
window.open(XMn);}else{
xUG.document.location.replace(XMn);
var options=(xNE.xfH?0:2);
var x4E=this.xVG.document;
options+=(x4E.FORM_Library.INP_FlagKeepCourse&&
x4E.FORM_Library.INP_FlagKeepCourse.checked?1:0);
this.XCI.XSw(options);
var XSL=this.xVG.document.getElementById("BTN_Close");
if(XSL){
XSL.style.visibility='visible';
XSL.disabled=false;}}}
,XOY:function(XGR){
var XSm;
if(XGR.type=='group'||XGR.type=='empty'){
this.XCI.Xpr('L openDocument():Wrong type:'+
XGR.type,'warning');
return false;}
if(!(XSm=this.XRS(XGR))){
this.XCI.Xpr('L openDocument():No ressource found for '+
XGR,'error');
return false;}
var href=this.XCI.Xu().external(XSm.href);
href.XCK(XGR.parameters||'',true);
var x8Q=window.open(href);
if(!x8Q||this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('L openDocument():"'+href+'"',
x8Q?'success':'error');}
return x8Q;}
,XSu:function(XGR){
var xUG=this.XCI.XVy();
var XMe=this.XRg.xd5('PLAY',true);
XMe[0]&&XMe[0].xkD('PLAY',false);
XMe=this.XRg.xd5('SHOW',true);
XMe[0]&&XMe[0].xkD('SHOW',false);
this.XQb=XGR;
var XSL=this.xVG.document.getElementById("BTN_Close");
if(XSL){
XSL.style.visibility='hidden';
XSL.disabled=true;}
if(xUG.document.getElementById('dgoLibraryDetails')){
return this.XSv(XGR);}
if(this.XQC){
this.Xt8&&this.Xt8.XA_();
this.XCI.XFV()==XAB||
this.XCI.XTK('lib-detail');}
if(this.XCI.XRN().domain&&
xUG.location.protocol.substr(0,4)=='http')
{
xUG.location.replace(
this.XCI.Xu().xNI(
this.XCI.XRN().Xlz).toString()+
'?dgoDOMAIN='+this.XCI.XRN().domain);}
else{
xUG.location.replace(
this.XCI.Xu().xNI(
this.XCI.XRN().Xlz).toString());}
return true;}
,XUP:function(xgP){
return this.XRg.XHj(XUE,xgP);}
,search:function(xaq){
if(xaq.XQr){
alert('Warning:Content search not yet implemented!');}
xaq.xRM=new RegExp();
xaq.xRM.compile(xaq.text,'i');
this.XSq=xaq;
if(this.XSq.text.XZA()!=''){
XlN(this.xVG,1,0);
this.XCI.Xlc().add(new XbY(
'LIBsearch1',this,this.xab));}
return true;}
,x1D:function(){
XlN(this.xVG,1,0);
return this.XCI.Xlc().add(new XbY(
'LIBclear',this,this.XlW));}
,XlW:function(){
this.XRg.XHj(XOr);
this.XRg.xpM.xHI()||this.XRg.xpM.xjP();
var XSK=this.xVG.document.getElementById("BTN_Clear");
if(XSK){
XSK.disabled=true;}
this.XRg.xaJ=false;
this.XRg.xvQ.xSD();
this.XRg.xaJ=true;
XlN(this.xVG,-1);}
,XuD:function(xaq){
this.XuG=xaq||'';
XlN(this.xVG,1,0);
return this.XCI.Xlc().add(new XbY(
'LIBfilter',this,this.XuB));}
,XuB:function(){
this.Xu4=[];
this.XRg.XHj(Xt1,this);
this.XRg.xaJ=false;
this.XRg.xvQ.XuO(Xt2(this));
this.XRg.xvQ.xSD();
this.XRg.xaJ=true;
XlN(this.xVG,-1);
return true;}
,x6U:function(){
return this.xVG;}
,XRP:function(){
return this.XNV;}
,Xti:function(){
return this.XRg&&this.XRg.xpM?this.XRg.xpM.title:'?';}
,XZT:function(){
return this.XRg;}
,Xu:function(){
return this.xMj;}
,XCI:null,xVG:null,xMj:null,XC0:null,XQC:null,Xt8:null,XNV:0,XTf:null,XSq:null,XuG:'',XRe:null,XRg:null,XRf:null,XUx:'icons'
,XUw:[{xRM:'datango',xqH:'tour',name:'Datango Learning Object'}]
,X11:null,Xu4:[],XQb:null,XVN:null,X17:false
,XTe:{
tagName:null,type:'#lib'
,name:'identifier'
,title:'@title'
,XQR:'@dc:description'
,Xtv:'@categories'
,x7C:'@dgo:base'
,href:null
,contains:['item']
,objects:{item:{
type:'#group'
,name:'identifier'
,XR4:'identifierref'
,parameters:'@parameters'
,title:'@title'
,x7C:'@dgo:base'
,x3C:'@dgo:autostart'
,XQR:'@dc:description'
,Xtv:'@categories'
,contains:['item']}}}
,XZS:function(XGR){
var XSm=this.XRS(XGR,true);
if(!XSm){
return null;}
var href=XSm.href;
var xoL=href.indexOf('projects/');
var XYz=xoL+(xoL==-1?1:9);
var XYt=href.indexOf('/',XYz);
return(XYt<0
?href.substr(xoL)+'/'
:href.substr(xoL,XYt-xoL+1));}
,XGj:function(XNV){
if(XNV){
XlN(this.XCI.XVy(),-1);
this.XNV=XNV;
this.error=XQK(
'TOK_COULD_NOT_READ_EXC',XQK('TOK_LIB'),this.xMj);
this.XC0.exec(this.error,this);
return false;}
this.XRe={};
var XQo=[];
if(this.XCI.XRN().xuQ>2){
this.XCI.Xpr('L load_cb_():before makeAssocArray');}
this.XTf.XRp('resource',
['identifier','@dc:format','@dc:author','@dc:category','href'],
["XR3","XQM","XQL","dc_category","href"],
this.XRe,XQo);
if(XQo.length>0){
alert('Warning:'+XQK('TOK_LIB')+' "'+this.xMj+'"\ncontains '+
XQo.length+' duplicate tours!');}
if(this.XCI.XRN().xuQ>2){
this.XCI.Xpr('L load_cb_():after makeAssocArray');}
this.XuS={};
var XQo=[];
this.XTf.XRp('filter',
['name','value'],
["name","value"],
this.XuS,XQo);
if(XQo.length>0){
alert('Warning:'+XQK('TOK_LIB')+' "'+this.xMj+'"\ncontains '+
XQo.length+' duplicate filters!');}
var xpM=this.XTf.XN7().getElementsByTagName('organizations');
if(xpM.length>=1){
xpM=this.XTf.XRL(xpM[0],'organization');
if(!xpM){
XlN(this.XCI.XVy(),-1);
this.XNV=1;
this.error='Error:'+XQK('TOK_LIB')+' "'+this.xMj+
'"\ndoes not contain required "<organization>" tag!';
alert(this.error);
this.XC0.exec(this.error,this);
return false;}}
else{
xpM=this.XTf.XN7().getElementsByTagName('organization');
if(xpM.length>=1){
alert('Warning:'+XQK('TOK_LIB')+' "'+this.xMj+
'"\ndoes not contain required "<organizations>tag!\n'+
'Using first "<organization>" instead.');
xpM=xpM[0];}
else{
XlN(this.XCI.XVy(),-1);
this.XNV=1;
this.error='Error:'+XQK('TOK_LIB')+' "'+this.xMj+
'"\ndoes neither contain required "<organizations>",'+
' nor "<organization>" tag!';
alert(this.error);
this.XC0.exec(this.error,this);
return false;}}
if(this.XCI.XRN().xuQ>2){
this.XCI.Xpr('L load_cb_():before makeTree');}
this.XRg=this.XTf.XNp(this.XTe,xpM);
if(!this.XRg){
XlN(this.XCI.XVy(),-1);
this.XNV=1;
this.error='Internal Error creating library tree from XML document.';
alert(this.error);
this.XC0.exec(this.error,this);
return false;}
if(this.XCI.XRN().xuQ>2){
this.XCI.Xpr('L load_cb_():after makeTree;before applyResources');}
this.XRg.XRh=this;
this.XRg.XHj(XOq,this);
var x4E=this.xVG.document;
var XOo=this;
var XuC=0;
var XuZ=x4E.getElementById("INP_Filter");
if(XuZ){
if(this.XuS){
var Xng=false;
for(var xpK in this.XuS){
var XuF=x4E.createElement('OPTION');
XuF.value=this.XuS[xpK]['value'];
var XuE=x4E.createTextNode(this.XuS[xpK]['name']);
XuF.appendChild(XuE);
if(this.XuG==this.XuS[xpK]['value']){
Xng=true;
XuF.selected='true';}
XuZ.appendChild(XuF);
XuC++;}
if(!Xng&&XuC>0&&this.XuG!=''){
var XuG=this.XuG;
this.XuG='';
for(var i=0;i<XuZ.options.length;i++){
var xpK=XuZ.options[i];
if(XuG==xpK.text){
this.XuG=xpK.value;
xpK.selected=true;
break;}}}}
XuZ.onchange=function(){
return XOo.XuD(
XuZ[XuZ.selectedIndex].value);}}
if(XuC>0){
var XuY=x4E.getElementById("DGO_FilterBox");
if(XuY){
XuY.style.display='';}}
if(this.XuG){
this.XRg.XHj(Xt1,this);}
this.XRg.x1N[0]='SEL';
if(this.XCI.XRN().xuQ>2){
this.XCI.Xpr('L load_cb_():after applyResources');}
this.XRg.x1N[1]={name:'_CLICK'};
this.XRg.x1N[2]=this.XSa(
this.X11.cfg_playStyle);
this.XRg.x1N[2].name='PLAY';
this.XRg.x1N[2].XZ1=this.XRg.x1N[2].X1y;
this.XRg.x1N[3]=this.XSa(
this.X11.cfg_showStyle);
this.XRg.x1N[3].name='SHOW';
this.XRg.x1N[3].XZ1=this.XRg.x1N[3].X1y;
this.XRg.x1N[4]={name:'_MOUSE'};
this.XRg.x1N[5]=this.XSa(
this.X11.cfg_findStyle);
this.XRg.x1N[5].name='FIND';
this.XRg.x1N[5].XZ1=this.XRg.x1N[5].X1y;
var style={};
style.xGk=false;
style.XUs=this.XCI.Xu().xNI('jswidget/icons').toString();
style.XSC=this.X11.cfg_nodeBorderColor;
style.X19=this.X11.cfg_nodeBorderColorMouse;
style.X18=this.X11.cfg_nodeBorderColorClick;
style.X1y=this.X11.cfg_titleStyle;
style.X1z=this.X11.cfg_titleStyleMouse;
style.XZl=this.X11.cfg_titleStyleClick;
style.X1h=this.X11.cfg_portStyle;
style.XZ1=this.X11.cfg_iconStyle;
var XNA=this.XRg.action('tour');
var XMy=this.XRg.action('group');
var XPN=this.XRg.action('lib');
XNA.xEN=XOw;
XNA.xBL=XOu;
XNA.closed=XOu;
XNA.xOJ=XOt;
XNA.X4I=XOs;
XMy.xEN=XOw;
XMy.xBL=XOu;
XMy.closed=XOu;
XMy.xOJ=XOt;
XPN.xEN=XOw;
XPN.xOJ=XOt;
var XUp;
for(var i=0;i<this.XUw.length;++i){
XUp=this.XUw[i];
this.XRg.action(XUp.cfg_icon,XNA);}
this.xMj=this.XTf.Xu();
xLJ('library',this.xMj);
var XST=x4E.getElementById("SPAN_LibraryName");
XST&&XpS(XST,this.Xti());
if(this.XCI.XRN().xuQ>0){
var XSU=x4E.getElementById("DIV_LibraryUrl");
if(XSU){
XSU.style.display='block';
XSU=x4E.getElementById("SPAN_LibraryUrl");
XSU&&XpS(XSU,this.Xu());}}
this.XRg.XHH();
new xMC(this.XRg,
this.XRf,this.XUx,this.xVG,style);
if(this.XCI.XRN().xuQ>2){
this.XCI.Xpr('L load_cb_():before show Tree');}
this.XRg.xaJ=false;
this.XRg.xvQ.XuO(Xt2(this));
this.XRg.xvQ.xSD();
this.XRg.xaJ=true;
if(this.XCI.XRN().xuQ>2){
this.XCI.Xpr('L load_cb_():after show Tree');}
var XSO=x4E.getElementById("BTN_Start");
if(XSO){
XSO.onclick=function(){
return XOo.XHV();}}
var XNw=x4E.FORM_Library;
if(XNw){
XDT(XNw,
this.XCI.XRN().XNl||{});
XNw.onsubmit=function(){
XOo.search({
text:(XNw.INP_Search.value?
XNw.INP_Search.value:'')
,XQt:(XNw.INP_FlagInTitle?
XNw.INP_FlagInTitle.checked:true)
,XQs:(XNw.INP_FlagInDescription?
XNw.INP_FlagInDescription.checked:true)});
return false;}}
var XSK=x4E.getElementById("BTN_Clear");
if(XSK){
XSK.onclick=function(){
return XOo.x1D();}}
var XSL=x4E.getElementById("BTN_Close");
if(XSL){
XSL.onclick=function(){
return XOo.XCI.XSw(
XOo.XCI.XRN().xfH?0:2);}}
var XSM=x4E.getElementById("BTN_Exit");
if(XSM){
XSM.onclick=function(){
XOo.XCI.XOZ();
if(XOo.XQC){
XOo.Xt8&&XOo.Xt8.XA_();
XOo.XCI.XFV()==XAB||
XOo.XCI.XTK('lib-exit');}
return XOo.XCI.x8F('lib-exit');}}
var XSo=function(){
return XOo.XSs();}
var XZH=x4E.getElementById("BTN_Options");
if(XZH){
XZH.onclick=function(){
var XZJ=x4E.getElementById('DIV_Options');
if(XZJ.style.display=='none'){
XZJ.style.display='';
XZH.value=XQK('TOK_LIB_BTN_LESS');}
else{
XZJ.style.display='none';
XZH.value=XQK('TOK_LIB_BTN_MORE');}
XSo();}}
if(this.XCI.XFI_('moz','1')){
this.xVG.onresize=XSo;}
else{
x4E.body.onresize=XSo;}
this.XRf.style.overflow='auto';
this.XSs();
XlN(this.XCI.XVy(),-1);
this.XC0.exec('Library Tree and View built',this);
return true;}
,XSa:function(XS7){
if(!XS7){
return{};}
XS7.X1y=XS7.cfg_titleStyle;
XS7.X1h=XS7.cfg_portStyle;
XS7.XZ1=XS7.cfg_iconStyle;
return XS7;}
,XW5:function(XmW){
if(!XmW){
this.XCI.Xpr('L startTourWin_cb_:consecutive.','error');
XmW.x1D();
return false;}
var XLk=this.XCI;
var XRs=new Object;
XmW.XRN(XRs,2);
XQA(XmW,XM4,XRs);
XLk.X5J().Xvy(XRs);
XmW.x1D();
XLk.Xpr('L startTourWin_cb_:"'+
this.XVN+'" in new window;cfg_window="'+
XRs.window+'"','trace');
var XVO=XTd(XRs.window);
XVO.cfg_flagRecursiveCall=true;
var x8Q=XaB(this.XVN.toString(),
XVO,null,null,
XLk.XRN().xuQ>=3?XAU:null);
this.XVN=null;
if(!x8Q){
XLk.Xpr('L window open:no window','warning');
return false;}
return true;}
,XSy:function(XmW){
if(!XmW){
this.XCI.Xpr('L startTour_cb_:consecutive.','error');
XmW.x1D();
return false;}
var XRs=new Object;
XTd(xNE,XRs);
XmW.XRN(XRs,0);
XQA(XmW,XM4,XRs);
this.XCI.X5J().Xvy(XRs);
XmW.x1D();
XRs.xAJ=null;
XRs.XRk=true;
this.XCI.Xpr('L Config:'+XRs,'trace');
this.XCI.Xpr('L Control(depth=2):'+
XA5(this.XCI.Xlf().Xls(),2),'trace');
var xBH=XRs.xBH||XRs.xoM||'';
if(!xBH){
var xbK='Tour in Library misses program/ride config parameter';
this.XCI.Xpr('L configload_cb_:'+xbK,'error');
alert(xbK);
return false;}
this.XCI.Xpr('L Program:"'+xBH+'"');
this.XQC=xNE;
xNE=XRs;
var XTa=this.XCI.Xu();
XTa.XPQ(xNE);
this.XCI.XPZ(xNE);
this.XCI.Xpr('URLs:'+XTa,'trace');
this.XCI.Xpr('URL protocols:'+
Url.prototype.XQl(),'trace');
if(xNE.title){
var x4E=this.XCI.XF3().parent.document;
x4E.dgos=x4E.title;
x4E.title=xNE.title;}
var XSL=this.xVG.document.getElementById("BTN_Close");
if(XSL){
XSL.style.visibility='visible';
XSL.disabled=false;}
if(xNE.x0N){
var x0N=XTa.xMD('start',xNE,
this.XCI.Xlf().Xls(),true,true).toString();
var frameElement=XPB(this.XCI.XF3().parent.frames[1]);
if(XRl&&
xNE.X6s!='')
{
frameElement.style.filter=xNE.X6s;
frameElement.filters[0].Apply();}
this.XCI.XF3().parent.frames[1].location.href=x0N;
if(XRl&&
xNE.X6s!=''&&
frameElement.filters[0])
{
frameElement.filters[0].Play();}
this.XCI.Xpr('L Startpage "'+x0N+'"','trace');}
else{
this.XCI.Xpr('L No startpage','trace');}
if(xNE.xuQ>=3){
alert('library-program start "'+xBH+
'"\nConfiguration is:\n'+xNE);}
var options=(xNE.xfH?0:2);
var x4E=this.xVG.document;
options+=(x4E.FORM_Library.INP_FlagKeepCourse&&
x4E.FORM_Library.INP_FlagKeepCourse.checked?1:0);
this.XCI.XSw(options);
this.Xt8=new XAJ(this.XCI);
this.Xt8.xb0(this,this.XpW);
return true;}
,XpW:function(XGw){
this.Xt8=null;
if(XGw!=null){
if(XGw<0){
this.XTM();
return false;}
xNE.XCv=XGw;}
var xBH=xNE.xBH||xNE.xoM||'';
if(!cfg_tourload(xBH,this,this.XTM)){
this.XCI.Xpr('L cfg_tourload()','error');
this.XCI.XSw(1);
return false;}
return true;}
,XTM:function(){
this.XCI.Xpr('Tour STOP','lib',2);
var x4E=this.XCI.XF3().parent.document;
if(x4E.dgos){
x4E.title=x4E.dgos;}
var XSL=this.xVG.document.getElementById("BTN_Close");
if(XSL){
XSL.style.visibility='hidden';
XSL.disabled=true;}
xNE.XRk=false;
xNE=this.XQC;
this.XQC=null;
this.XCI.XPZ(xNE);
this.XCI.Xu().XPQ(xNE);
if(xNE.xDJ){
this.XCI.XSw(1);}
return true;}
,XSv:function(XGR){
if(XGR){
this.XQb=XGR;}
else{
if(this.XQb){
XGR=this.XQb;}
else{
return false;}}
var x4E=this.XCI.XVy().document;
var xbK='L showDetails_cb():';
var XSm;
var XZU=XGR;
var XZP=false;
var XYu;
var Xvi=new Array();var Xu8=null;
if(XGR.type=='group'||(XGR.x2P.XRh.X17&&XGR.type=='tour')){
if(XGR.child){
for(var i=0;i<XGR.child.length&&!Xu8;++i){
if(XGR.child[i].x3C=='true'){
Xu8=XGR.child[i];}}
for(var i=0;i<XGR.child.length&&!XZQ;++i){
if(XGR.child[i].XR4){
Xvi[Xvi.length]=XGR.child[i];}}}
if(XGR.x7C&&typeof(XGR.x7C)=='string'){
XYu=XGR.x7C;}else{
if(XGR.name.substr(0,3)=='PRJ'||XGR.name.substr(0,3)=='GRP'){
xbK+='IS project folder;';
var XZQ=false;
var child;
for(var i=0;i<XGR.child.length&&!XZQ;++i){
if(XGR.child[i].XR4&&
XGR.child[i].XR4.substr(0,4)=='TOUR')
{
XZQ=true;
XZU=XGR.child[i];
xbK+='project node:'+XZU+';';}}}else{
XZP=true;
xbK+='NOT project folder;it is:"'+XGR.name+'"';}}
XSm={href:'',XQL:'',XQM:''};}
else if(XGR.type=='lib'||
XGR.type=='empty')
{
if(XGR.x2P.XRh.X17){
for(var i=0;i<XGR.child.length;++i){
if(XGR.child[i].XR4){
Xvi[Xvi.length]=XGR.child[i];}}}
XSm={href:'',XQL:'',XQM:''};
XZP=true;
if(XGR.x7C&&typeof(XGR.x7C)=='string'){
XYu=XGR.x7C;
XZP=false;}}
else if(!XGR.x2P.XRh.X17&&!(XSm=this.XRS(XGR))){
this.XCI.Xpr('L showDetails_cb():consecutive.','error');
return false;}
if(Xu8){
if(Xu8.type.substr(0,4)=='tour'){
this.XHV(Xu8);}else if(Xu8.type=='html'){
var href=this.XCI.Xu().external(this.XRS(Xu8).href);
href.XCK(Xu8.parameters||'',true);
this.Xzd(href);}else{
this.XOY(Xu8);}
return;}
var XYn,XYu;
if(!XZP&&!XYu){
XYu=this.XZS(XZU);}
if(XZP||!XYu){
var xGk=this.XCI.Xu().xGk();
xbK+='data="'+xGk+'";';
XYn=xGk.toString();}
else{
xbK+='href="'+XSm.href+'"/"'+XYu+'";';
XYn=this.XCI.Xu().external(XYu).toString();}
if(this.XCI.XRN().xuQ>=2){
this.XCI.Xpr(xbK+'set to "'+XYn+'"');}
var XSX,XSY,XSV,XSR,XSP,XSJ;
var xUG=this.XCI.XVy();
xUG.dgoK=this;
if(this.XCI.XRN().xuQ>0){
var Xlu=xUG.document.getElementById("DIV_Href");
Xlu&&(Xlu.style.display='block');}
if(!(XSY=XJo(xUG,"SPAN_Type"))||
!(XSX=XJo(xUG,"SPAN_Title"))||
!(XSV=XJo(xUG,"SPAN_Link"))||
!(XSR=XJo(xUG,"SPAN_Href"))||
!(XSP=XJo(xUG,"SPAN_Description"))||
!(XSJ=XJo(xUG,"SPAN_Author")))
{
this.XCI.Xpr('L showDetails_cb():Page content missing.','error');
return false;}
var Xvf=XJo(xUG,"SPAN_TourBar");
var Xvb=XJo(xUG,"SPAN_DocBar");
var Xve=XJo(xUG,"DGO_TourBarRow");
var Xva=XJo(xUG,"DGO_DocBarRow");
var Xvd=XJo(xUG,"DGO_TitleRow");
var Xvc=XJo(xUG,"DGO_Title2Row");
var XTW=XGR.XQR;
if(XTW){
var xBr=new RegExp('<a(.*?)href\s*=\s*"(javascript:[^"]*)'+
'"','gi');
XTW=XTW.replace(xBr,'<Xa$1href="$2"');
xBr=new RegExp('<a(.*?)href\s*=\s*["'+
"']([^"+
'"'+
"']*)["+
'"'+
"']",'gi');
XTW=XTW.replace(xBr,'<a$1href="project:$2"');
xBr=new RegExp('<Xa(.*?)href\s*=\s*"([^"]*)'+
'"','gi');
XTW=XTW.replace(xBr,'<a$1href="$2"');
xBr=new RegExp('<img(.*?)src\s*=\s*["'+
"']([^"+
'"'+
"']*)["+
'"'+
"'"+
']','gi');
XTW=XTW.replace(xBr,'<img$1src="project:$2"');
var xBf=/\$\{[a-z]*:\}|\$\[[a-z]*:\]/g;
var xoL=XTW.match(xBf);
while(xoL){
var xBa=XTW.substring(xoL.index+2,xoL.lastIndex-1);
var xMj=new Url(xBa).toString();
XTW=XTW.substring(0,xoL.index)+xMj+XTW.substr(xoL.lastIndex);
xoL=XTW.match(xBf);}}
if(XGR.x2P.XRh.X17){
XpS(XSY,'');
XpS(XSX,XGR.title);
XpS(XSJ,XGR.XQL);
var Xvl='';
var XvE='';
var Xvm=0;
var XvF=0;
var Xv9=XGR.title;
if(Xvi.length>0){
Xvl='<table cellpadding="0" cellspacing="'+
(XSN?'2px':'0')+
'"><tbody><tr><td align="left">';
XvE='<table cellpadding="0" cellspacing="'+
(XSN?'2px':'0')+
'"><tbody><tr><td align="left">';
for(var t=0;t<Xvi.length;t++){
var XvA=Xvi[t];
var XvB=XvA.title;
if(XvA.type.substr(0,4)=='tour'){
if(XvB.indexOf(Xv9)==0)XvB=XvB.replace(Xv9,'');
if(XvB.indexOf('_')==0)XvB=XvB.replace('_','');
if(XvB.indexOf(' ')==0)XvB=XvB.replace(' ','');
if(XvB.length==0)XvB=XvA.title;}
XSm=this.XRS(XvA);
if(!XSm){
this.XCI.Xpr('L startTour():consecutive.','error');
continue;}
var XSO=this.xVG.document.getElementById("BTN_Start");
var href=this.XCI.Xu().external(XSm.href);
href.XCK(XvA.parameters||'',true);
var Xv4=''
Xv4+='<span class="DGO_TourBarItem"';
Xv4+=' style="white-space:nowrap"';
Xv4+=' title="'+XOi(XvA.hint)+'">';
if(XvA.type.substr(0,4)=='tour'){
Xv4+='<a class="DGO_TourButton" href="javascript:';
Xv4+="dgoK.XHV('"+XvA.id+"');void(0);"+'">';}else if(XvA.type=='html'){
Xv4+='<a class="DGO_DocButton" href="javascript:';
Xv4+="dgoK.Xzd('"+href+"');void(0);"+'">';}else{
Xv4+='<a class="DGO_DocButton" target=_blank href="'+href+'">';}
Xv4+='<img align="absmiddle" class="DGO_TourBarIcon"';
Xv4+=' id="dgo_img" src="';
Xv4+=this.XCI.Xu().xNI('skin/library/icons')+'/'+
XvA.type+'.gif"';
Xv4+=' border="0">&nbsp;&nbsp;';
Xv4+=XvB;
Xv4+='</a>';
Xv4+='</span>\r\n';
if(XvA.type.substr(0,4)=='tour'){
Xvm++;
Xvl+=Xv4;}else{
XvF++;
XvE+=Xv4;}
XSR.innerHTML=XJn(href.toString());}
Xvl+='</td></tr></tbody></table>';
XvE+='</td></tr></tbody></table>';}
Xvb.innerHTML=XvE;
Xva.style.display=XvF>0?'':'none';
Xvf.innerHTML=Xvl;
Xve.style.display=Xvm>0?'':'none';
Xvc.style.display='none';
XSP.innerHTML=(XTW||'');}else{
XpS(XSY,XGR.XT3);
XpS(XSX,XGR.title);
XpS(XSJ,XGR.XQL);
Xvf.innerHTML='';
Xve.style.display='none';
Xvb.innerHTML='';
Xva.style.display='none';
XSP.innerHTML=(XTW||'');
Xvc.style.display='';}
var XTO=x4E.getElementsByTagName('A');
for(var t=0;t<XTO.length;t++){
if(!XTO[t].id||
(XTO[t].id&&XTO[t].id.substr(0,3).toLowerCase()!='dgo'))
{
var XRH=XTO[t].href;
if(XRH.indexOf('project:')>-1){
XRH=XRH.substr(8,XRH.length);}
XRH=new Url(XRH);
XRH.xc3(XYn);
XTO[t].href=XRH;}}
var XvY=x4E.getElementsByTagName('IMG');
for(var t=0;t<XvY.length;t++){
if(!XvY[t].id||
(XvY[t].id&&XvY[t].id.substr(0,3).toLowerCase()!='dgo'))
{
var XTU=XvY[t].src;
if(XTU.indexOf('project:')>-1){
XTU=XTU.substr(8,XTU.length);}
XTU=new Url(XTU);
XTU.xc3(XYn);
XvY[t].src=XTU;}}
if(!XGR.x2P.XRh.X17){
if(!XSm.href||XGR.type=='group'||XGR.type=='empty'){
XSV.style.visibility='hidden';
XSR.style.visibility='hidden';
XSV.innerHTML='';
XSR.innerHTML='';}
else{
XSV.style.visibility='inherit';
XSR.style.visibility='inherit';
var XSO=this.xVG.document.getElementById("BTN_Start");
var href=this.XCI.Xu().external(XSm.href);
href.XCK(XGR.parameters||'',true);
if(XGR.type.substr(0,4)=='tour'){
XSV.innerHTML='<a href="javascript:'+
"dgoK.XHV('"+
XGR.id+"');void(0);"+'">'+XQK('TOK_START_TOUR')+'</a>';
if(XSO){
XSO.disabled=false;}}
else if(XGR.type=='html'){
XSV.innerHTML='<a href="javascript:'+
"dgoK.Xzd('"+href+"');void(0);"+'">'+XQK('TOK_OPEN')+'</a>';
if(XSO){
XSO.disabled=true;}}
else{
XSV.innerHTML=
'<a target=_blank href="'+href+'">'+XQK('TOK_OPEN')+'</a>';
if(XSO){
XSO.disabled=true;}}
XSR.innerHTML=XJn(href.toString());}}
XGR.xkD('SHOW',true);
return true;}
,xab:function(xaq){
this.XRg.XG1_(true);
this.XCI.Xlc().add(new XbY(
'LIBsearch2',this,this.x8M));
return true;}
,x8M:function(xaq){
this.XRg.XHj(XOv,this.XSq);
this.XCI.Xlc().add(new XbY(
'LIBsearch3',this,this.x9M));
return true;}
,x9M:function(xaq){
this.XRg.xaJ=false;
this.XRg.xvQ.xSD();
this.XRg.xaJ=true;
XlN(this.xVG,-1);
var XSK=this.xVG.document.getElementById("BTN_Clear");
if(XSK){
XSK.disabled=false;}
this.XSq=null;
return true;}
,XSs:function(){
var x4E=this.xVG.document;
var XSQ=x4E.getElementById("DIV_Footer");
var X1a=x4E.FORM_Library.INP_Search;
var XjB=x4E.getElementById("BTN_Search");
var XgU=x4E.getElementById("BTN_Clear");
var XuZ=x4E.getElementById("INP_Filter");
if(!XSQ||!X1a){
return false;}
var X1J;
if(this.xVG.innerWidth&&this.xVG.innerHeight){X1J={
x:this.xVG.innerWidth,y:this.xVG.innerHeight};}
else{
X1J=XR6(this.xVG,1);}
var XRF=xaQ(XSQ);
var XTX=XEA(this.XRf);
var X1m=XPF(X1a);
var xVF=(this.XCI.XFI_('moz','1')?-4:0);
var XRv=X1J.x-XTX.x+xVF-3;
var XRu=X1J.y-XTX.y-XRF.y;
var X16=Math.floor(Math.max(180,XRF.x-XPF(XgU).width-XPF(XjB).width-
50))+'px';
this.XCI.Xpr(
'L Tree DIV size:page sz='+X1J.x+','+X1J.y+
',footer sz:'+XRF.x+','+XRF.y+
',search rect:'+X1m+
',search size old/new:'+X1a.size+'/'+X16+
',tree pos:'+XTX.x+','+XTX.y+
',tree sz(new):'+XRv+','+XRu);
if(XRv>10){
this.XRf.style.width=Math.floor(XRv+0.5)+'px';}
if(XRu>10){
this.XRf.style.height=Math.floor(XRu+0.5)+'px';}
X1a.style.width=X16;
XuZ.style.width=Math.floor(Math.max(180,XRF.x-20));
return true;}
,XRS:function(XGR,XZR){
var xd2='';
var xbK='';
if(XGR.XR4){
xd2=this.XRe[XGR.XR4];
if(!xd2){
xbK='was not found!';}
else if(!xd2.href){
xbK='has no .href!';}
else if(!xd2.XQM){
xbK='has no .dc_format!';}}
else{
xbK=':node.identifierref missing!';}
if(xbK&&!XZR){
xbK='Library inconsistency:Resource "'+
(XGR.XR4||'?')+'" '+xbK;
this.XCI.Xpr('L getResource4Node_():'+xbK,'error');
alert(xbK);
return false;}
return xd2;}}
function XOx(){
return 'LibraryNode={'+this.type+','+this.name+','+
this.title+',ref:'+this.XR4+'}';}
function XA9(xUE,XUq){
var XUp;
for(var i=0;i<xUE.length;++i){
XUp=xUE[i];
if(XUq.search(XUp.cfg_re)>=0){
return XUp;}}
return{cfg_icon:'unknown',cfg_name:'Unknown Document Type'};}
function Xt2(XRh){
var XMe=[];
for(var i=0;i<XRh.Xu4.length;i++){
var xpK=XRh.Xu4[i];
if(xpK){
XMe[XMe.length]=xpK;}}
return XMe;}
function Xt1(XGR,XRh){
var XuH=XRh.XuG.split(";");
if(XRh.XuG&&XuH.length>0){
if(!XGR.Xtv||typeof(XGR.Xtv)!='string'){
XRh.Xu4[XRh.Xu4.length]=XGR;}else{
var Xtz=true;
for(var i=0;i<XuH.length;i++){
if(XGR.Xtv.split(";").search(XuH[i])>-1){
Xtz=false;}}
if(Xtz){
XRh.Xu4[XRh.Xu4.length]=XGR;}}}}
function XOq(XGR,XRh){
XGR.toString=XOx;
if(XGR.type=='lib'){
XGR.XT3=XQK('TOK_LIB');}
else if(XGR.type=='group'){
if(XGR.XR4==null){if(!XGR.x2P.XRh.X17){
XGR.XT3=XQK('TOK_DIR');}else{
var Xvk=false;
if(XGR.child){
for(var i=0;i<XGR.child.length&&!Xvk;++i){
if(XGR.child[i].XR4!=null){
Xvk=true;}}}
if(Xvk){
var XUp=XA9(
XRh.XUw,'datango');
XGR.type=XUp.cfg_icon;
XGR.XT3=XQK('TOK_DIR');}else{
XGR.XT3=XQK('TOK_DIR');}}}
else if(XGR.XR4!=''){var XSm=(XGR.XR4?
XRh.XRS(XGR):null);
if(XSm&&XSm.XQM&&typeof(XSm.XQM)=='string'){
var XUp=XA9(
XRh.XUw,XSm.XQM);
XGR.type=XUp.cfg_icon;
XGR.XT3=XUp.cfg_name;}
else{
XGR.type='unknown';
XGR.XT3=XQK('MIME_UNKNOWN');}
XGR.hint=XGR.title+' ['+XSm.href+']';
XGR.x2P.XRh.X17&&XGR.hide();}
else{
XGR.type='empty';
XGR.XT3=XQK('TOK_LIB_EMPTY');
XGR.x2P.XRh.X17&&XGR.hide();}}}
function XUE(XGR,xgP){
if(!XGR.x2P.XRh.X17){
return xgP==XGR.title?XGR:0;}else{
if(xgP==XGR.title){
if(XGR.XR4==null){
return XGR;}else{
return XGR.parent;}}
return 0;}}
function XOv(XGR,xaq){
var match=false;
if(xaq.XQt){
match=xaq.xRM.test(XGR.title);}
if(!match&&xaq.XQs){
match=xaq.xRM.test(XGR.XQR);}
if(match){
if(XGR.x2P.XRh.X17&&XGR.XR4!=null){
XGR=XGR.parent;}
XGR.xkD('FIND',true);
var xHL=XGR.parent;
while(xHL){
if(!xHL.xBL){
xHL.xjP();}
xHL=xHL.parent;}}
else{
XGR.xkD('FIND',false);}}
function XOr(XGR){
XGR.xkD('FIND',false);
XGR.xHI()&&XGR.xjP();}
function XOw(XGR){
XGR.x2P.XRh.XCI.Xpr('select '+XGR,'user',2);
if(XGR.type=='lib'||XGR.type=='group'){
XGR.x2P.xaJ=false;
XGR.xjP();
XGR.x2P.xaJ=true;
return true;}
return XOt(XGR);}
function XOu(XGR){
XGR.x2P.XRh.XCI.Xpr('opened '+XGR,'user',2);
XGR.xkD('SEL',XGR.xHI()?'selected':'');
return true;}
function XOt(XGR){
XGR.x2P.XRh.XCI.Xpr('link '+XGR,'user',2);
if(XGR.x2P.XRh.X17){
if(XGR.type=='lib'||XGR.type=='group'){
XGR.x2P.xaJ=false;
XGR.xjP();
XGR.x2P.xaJ=true;}else if(XGR.type=='tour'){
XGR.x2P.XHj(Xul,XGR);}}
return XGR.x2P.XRh.XSu(XGR);}
function Xul(XGR,xEL){
if(XGR.type=='tour'&&XGR===xEL){
XGR.xkD('SEL','selected');}else{
XGR.xkD('SEL','');}}
function XOs(XGR){
XGR.x2P.XRh.XCI.Xpr('dblclick '+XGR,'user',2);
if(!XGR.x2P.XRh.X17){
if(XGR.type.substr(0,4)=='tour'){
return XGR.x2P.XRh.XHV(XGR);}
return XGR.x2P.XRh.XOY(XGR)==null?false:true;}}
if(self.XI7){XI7.XJB(new XIX(
'../library.js',[ 'batch.js','xml.js' ]));}

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
