//
function xGB(xVG,XmO,XmJ,XHh){
this.XHh=XHh||XPR;
if(!xVG||!xVG.document||!xVG.document.body){
this.error='base frame unready(doc.body missing)';
var xbK='Config:'+this.error;
this.XHh('CFG '+xbK,'error');
return;}
if(xVG.document.body.tagName!='BODY'){
this.error='base frame must not be '+
xVG.document.body.tagName+'(need BODY)';
var xbK='Config:'+this.error;
this.XHh('CFG '+xbK,'error');
return;}
this.xVG=xVG;
var XmN=XmO||{};
var x7C;
if(typeof(XmN.XVW)=='string'){
var href=XmN.XVW;
var xHL=href.indexOf('?');
x7C=(xHL>=0?href.substr(0,xHL):href);}
else{
var x=self.location.search+self.location.hash;
var href=self.location.href;
x7C=href.substr(0,href.length-x.length);}
x7C=x7C.substr(0,x7C.lastIndexOf('/')+1);
this.XPz=x7C;
this.Xar=
typeof(XmN.Xa9)=='string'&&XmN.Xa9
?XmN.Xa9:x7C+'projects/global.js';
this.XmH=
typeof(XmN.XmG)=='string'&&XmN.XmG
?XmN.XmG:x7C+'projects/global_${mode}.js';
this.XXA=
typeof(XmN.XVq)=='boolean'
&&XmN.XVq?true:false;
this.x5r=
typeof(XmN.Xmn)=='boolean'&&
XmN.Xmn?true:false;
this.Xmm=
typeof(XmN.Xml)=='boolean'&&
XmN.Xml?true:false;
this.XmJ=XmJ;
this.XHh('CFG settings.base "'+x7C+'"','info');
this.XHh('CFG settings.global "'+this.Xar+'"','info');
this.XHh('CFG settings.mode-pat "'+this.XmH+'"','info');
this.XHh('CFG settings.flags'+
(this.XXA?' original':'')+
(this.x5r?' silent':'')+
(this.Xmm?' ignore-local-errs':''),
'info');
try{
this.dgoDOMAIN=parent.dgoDOMAIN;}
catch(xa8){
this.dgoDOMAIN=false;}
this.error='ok';
this.x6K=true;}
function XOh(){
var xd2='';
var name,XBK,value,xFJ;
var xAT=0;
for(name in this.XSI){
XBK=this.XSI[name];
value=this[XBK];
xFJ=name+':'+typeof(value)+' "'+value+'"';
if(xFJ.length+xAT>80){
if(xAT>0){
xd2+='\n\r';
xAT=0;}}
xd2+=xFJ+';';
xAT+=xFJ.length;}
return xd2;}
function XmX(){
var xbK='ctx';
for(var XCM in this){
XCM.substr(0,3)=='dgo'||(xbK+='\n\r'+
typeof(this[XCM])+' '+XCM+'="'+this[XCM]+'"');}
return xbK;}
function XPR(XGE,xGQ){
return true;};
xGB.prototype={
x6K:false
,error:'no-init'
,x1D:function(){
this.XmL(this.X7z);
this.X7z=null;
this.XmL(this.X53);
this.X53=null;
this.XmL(this.X8Y);
this.X8Y=null;
return true;}
,XnF:function(){
return this.XPz;}
,XRN:function(XGT,x8I){
var x1K=XGT||{};
this.XmD.XRK(x1K,this.XmJ,x8I);
x1K.toString=XOh;
return x1K;}
,X85:function(XGT){
var x1K={};
if(typeof(XGT)=='object'){
XA4(XGT,x1K,true);}
else{
x1K.udc={};}
this.X8w&&this.X8w.XZf(x1K);
this.XmE&&this.XmE.XZf(x1K);
this.XmD&&this.XmD.XZf(x1K);
return x1K;}
,X8v:function(X5Q,xfK){
var XGO;var i,xPL;
for(i=0;i<X5Q.length;++i){
xPL=X5Q[i];
if(xfK==xPL.n){
return this.XmD.X8v(xPL);}}
return XGO;}
,load:function(XQD,XCZ,XCY){
this.X7z||
(this.X7z=this.XVX());
this.X53||
(this.X53=this.XVX());
this.X8Y||
(this.X8Y=this.XVX());
if(this.dgoDOMAIN){if(XRl&&Xbp(this.X7z)||
XRl&&Xbp(this.X53)||
XRl&&Xbp(this.X8Y)||
XSS(this.X7z.contentWindow)||
XSS(this.X53.contentWindow)||
XSS(this.X8Y.contentWindow))
{var XwD=XQD;
var XwB=XCZ;
var XwA=XCY;
var Xjj=this;
var X1K=function(){
Xjj.load(XwD,XwB,XwA);}
this.XHh('CFG load->waiting for relaxation','info');
window.setTimeout(X1K,100);
return true;}}
this.XGh=new XAZ(XCZ,XCY);
this.XmD=new XJ2(XQD,this.XPz,this.XHh);
this.XHh('CFG load "'+XQD+'"','info');
if(!this.XmD.load(this.X7z,
this,this.XmB))
{
if(this.XmD.x6K||this.Xmm){
this.XHh('CFG Local config:'+
this.XmD.error,'warning');
this.XmD.x6K=true;
this.XmD.error='';
this.XmB(this.XmD);
return true;}
this.x6K=false;
this.error='Cannot load local config:'+this.XmD.error;
var xbK='Config::load:'+this.error;
this.XHh('CFG '+xbK,'error');
return false;}
return true;}
,xVG:null
,X7z:null
,X53:null
,X8Y:null
,XPz:null
,Xar:null
,XmH:null
,XmI:null
,Xmm:null
,XXA:null
,x5r:false
,XmF:'\$\{mode\}' 
,XmD:null
,X8w:null
,XmE:null
,XGh:null
,XHh:null
,XVX:function(){
var x4E=this.xVG.document;
var XDm=x4E.createElement('IFRAME');
if(!XDm){
return null;}
if(this.dgoDOMAIN){XDm.src=this.XPz+'relax_domain.html?dgoDOMAIN='+this.dgoDOMAIN;}
else{
XDm.src=this.XPz+'about_blank.html';}
XDm.style.display='none';
return x4E.body.appendChild(XDm);}
,XmB:function(XQE){
if(XQE.x6K){
this.XHh('CFG Config::loadLocalCb_:'+XQE.error);}
else{
this.error='Cannot read configfile "'+
XQE.Xu()+'":'+XQE.error;
var xbK='Config::loadLocalCb_:'+this.error;
if(!this.Xmm){
this.x6K=false;
this.XHh('CFG '+xbK,'error');
return this.XGh.exec('Config::loadLocalCb_():err1',this);}
this.XHh('CFG '+xbK,'warning');
XQE.x6K=true;
XQE.error='';}
this.XmD=XQE;
this.X8w=new XJ2(
'config='+this.Xar+'&ok=true','',this.XHh);
if(!this.X8w.load(this.X53,
this,this.XmA))
{
this.x6K=false;
this.error='Cannot load global configfile "'+
this.Xar+'":'+this.X8w.error;
xbK='Config::loadLocalCb_:'+this.error;
this.XHh('CFG '+xbK,'error');
return this.XGh.exec('Config::loadLocalCb_():err2',this);}
return true;}
,XmA:function(XQE){
if(!XQE.x6K){
this.x6K=false;
this.error='Cannot read global configfile "'+
XQE.Xu()+'":'+XQE.error;
var xbK='Config::loadGlobalCb_():'+this.error;
this.XHh('CFG '+xbK,'error');
return this.XGh.exec('Config::loadGlobalCb_():err1',this);}
var xKK=this.XmD.XEJ('mode');
if(!xKK){
var xAJ=this.XmD.XEJ('library');
if(xAJ&&xAJ!=''){
xKK='lib';}}
this.XHh('CFG Config::loadGlobalCb_:'+XQE.error+
',mode:"'+xKK+'"');
this.X8w=XQE;
if(!xKK){
return this.XIp('global');}
if(!this.X8Y){
this.XHh('CFG Config:cannot load mode:no IFRAME');
return this.XIp('global');}
this.XmI=this.XmH.replace(this.XmF,xKK);
this.XmE=new XJ2(
'config='+this.XmI+'&ok=true','',this.XHh);
if(!this.XmE.load(
this.X8Y,this,this.XmC))
{
this.x6K=false;
this.error='Cannot load mode configfile "'+
this.XmI+'":'+this.XmE.error;
xbK='Config::loadGlobalCb_:'+this.error;
this.XHh('CFG '+xbK,'error');
return this.XGh.exec('Config::loadGlobalCb_():err2',this);}
return true;}
,XmC:function(XQE){
if(!XQE.x6K){
this.x6K=false;
this.error='Cannot read mode configfile "'+
XQE.Xu()+'":'+XQE.error;
var xbK='Config::loadModeCb_():'+this.error;
this.XHh('CFG '+xbK,'error');
return this.XGh.exec('Config::loadModeCb_():err1',this);}
this.XmE=XQE;
this.XHh('CFG Config::loadModeCb_:'+XQE.error);
return this.XIp('mode');}
,XIp:function(XGE){
this.XHh('CFG Config::loaded_('+XGE+')');
this.XmD.XUI(this.XmJ,
this.X8w,this.XmE,this.XXA);
return this.XGh.exec('Config::loaded_():ok',this);}
,XmL:function(xsH){
var xpK=xsH&&xsH.parentNode.removeChild(xsH);
return xpK!=null;}}
//
function XJ2(xMj,XPz,XHh){
this.XPz=XPz||'';
this.XHh=XHh||XPR;
this.XT9={};
this.X2o={};
this.XQQ();
this.XS4(xMj);
try{
this.dgoDOMAIN=parent.dgoDOMAIN;}
catch(xa8){
this.dgoDOMAIN=false;}
this.error='ok';
this.x6K=true;}
function XJh(){
if(typeof(this.readyState)=='string'){
if(this.readyState!='complete'){
return true;}
this.onreadystatechange=null;}
else{
this.removeEventListener('load',XJh,true);}
if(!this.dgo32){
return false;}
var x=this.dgo32;
this.dgo32=null;
return x.XRo();}
XJ2.prototype={
x6K:false
,Xxb:false
,error:'no-init'
,XZf:function(XQF){
if(typeof(XQF.dgox)!='number'){
XQF.dgox=0;}
var XT6=this.XRT();
for(var XCM in XT6){
if(XCM.substr(0,4)=='udc.'){
if(typeof(XQF['udc'])=='undefined'){
XQF['udc']={};
++XQF.dgox;}
XQF.udc[XCM.substr(4)]=XT6[XCM];}
if(XCM.substr(0,12)=='control.udc.'){
if(typeof(XQF['udc'])=='undefined'){
XQF['udc']={};
++XQF.dgox;}
XQF.udc[XCM.substr(12)]=XT6[XCM];}
else if(XCM.substr(0,8)=='control.'){
XQF[XCM.substr(8)]=XT6[XCM];
++XQF.dgox;}}
if(this.xVG&&
this.xVG.cfg_control&&
typeof(this.xVG.cfg_control)=='object')
{
var xWE=this.xVG.cfg_control;
for(var XCM in xWE){
++XQF.dgox;
if(typeof(xWE[XCM])=='object'){
XA4(xWE[XCM],XQF[XCM],true);}
else{
XQF[XCM]=xWE[XCM];}}}}
,XUI:function(XQN,XUJ,XUK,X80){
var XGO;var xPL,name,value,X2q;
for(var i=0;i<XQN.length;++i){
xPL=XQN[i];
name=xPL.n;
if(xPL.xkI<=1){X2q=(XUK?XUK.XEJ(name):XGO);
if(typeof(X2q)=='undefined'){
value=(XUJ?XUJ.XEJ(name):XGO);
if(typeof(value)=='undefined'){
if(X80){
xPL.X55=xPL.xmE;
xPL.XPg=0;}}
else{
xPL.X55=value;
xPL.XPg=1;}}
else{
xPL.X55=X2q;
xPL.XPg=2;}}
else{
if(X80){
xPL.X55=xPL.xmE;
xPL.XPg=0;}}}}
,XEJ:function(xfK,XQP){
var xoQ=this.XRW(xfK);
if(typeof(xoQ)=='undefined'){
xoQ=this.XRO(xfK);}
if(typeof(xoQ)=='undefined'&&typeof(XQP)!='undefined'){
xoQ=XQP;}
return xoQ;}
,XRK:function(XGT,XQN,x8I){
var x7I=x8I||0;
var xYE=0;
var XSI={};
var i,xPL,name,value,X2q;
for(i=0;i<XQN.length;++i){
xPL=XQN[i];
XSI[xPL.n]=xPL.x;}
XGT.XSI=XSI;
for(i=0;i<XQN.length;++i){
xPL=XQN[i];
name=xPL.n;
if(xPL.xkI<=x7I){
value=this.XEJ(name,xPL.X55);
if(value===xPL.X55&&xPL.XPg==0&&
(xPL.xwK & 1))
{
X2q=this.X2U(name.toLowerCase());
if(typeof(X2q)!='undefined'){
value=X2q;}}
if(xPL.m){
if((xPL.XPg!=0)||(!this.X8v(xPL))){switch(name){
case 'keys_invertedkeys_PLAY':
if(!XGT.X6C){
XGT.X6C={};}
XGT.X6C['f8']=null;
value=value.split(',');
for(var n=0;n<value.length;n++){
XGT.X6C[value[n].XZA()]="_PLAY";}
break;
case 'keys_invertedkeys_STOP':
if(!XGT.X6C){
XGT.X6C={};}
XGT.X6C['f12']=null;
value=value.split(',');
for(var n=0;n<value.length;n++){
XGT.X6C[value[n].XZA()]="_STOP";}
break;
case 'keys_invertedkeys_PAUSE':
if(!XGT.X6C){
XGT.X6C={};}
XGT.X6C['pause']=null;
value=value.split(',');
for(var n=0;n<value.length;n++){
XGT.X6C[value[n].XZA()]="_PAUSE";}
break;
case 'keys_invertedkeys_PREV':
if(!XGT.X6C){
XGT.X6C={};}
XGT.X6C['shif_f8']=null;
value=value.split(',');
for(var n=0;n<value.length;n++){
XGT.X6C[value[n].XZA()]="_PREV";}
break;
case 'keys_invertedkeys_BACK':
if(!XGT.X6C){
XGT.X6C={};}
XGT.X6C['alt_up']=null;
value=value.split(',');
for(var n=0;n<value.length;n++){
XGT.X6C[value[n].XZA()]="_BACK";}
break;
case 'keys_invertedkeys_NEXT':
if(!XGT.X6C){
XGT.X6C={};}
XGT.X6C['alt_down']=null;
value=value.split(',');
for(var n=0;n<value.length;n++){
XGT.X6C[value[n].XZA()]="_NEXT";}
break;
case 'window_cfg_top':
case 'window_cfg_left':
case 'window_cfg_width':
case 'window_cfg_height':
case 'window_cfg_orientation':
case 'window_cfg_name':
if(!XGT.window){
XGT.window={};}
XGT.window[xPL.x.substr(7)]=this.XV5(value,xPL.js);
break;
case 'window_cfg_features_fullscreen':
case 'window_cfg_features_menubar':
case 'window_cfg_features_toolbar':
case 'window_cfg_features_location':
case 'window_cfg_features_resizable':
case 'window_cfg_features_scrollbars':
case 'window_cfg_features_status':
if(!XGT.window){
XGT.window={};}
if(value){
value='1';}
else{
value='0';}
if(!XGT.window.cfg_features){
XGT.window.cfg_features=name.substr(20)+'='+value;}
else{
XGT.window.cfg_features+=','+name.substr(20)+'='+value;}
break;
case 'topmost_style_cfg_base':
case 'topmost_style_cfg_scrollable':
case 'topmost_style_cfg_show_startpage':
case 'topmost_style_cfg_minigui':
case 'topmost_style_cfg_closeOnIdle':
case 'topmost_style_cfg_skin':
if(!XGT.Xok){
XGT.Xok={};}
XGT.Xok[xPL.x.substr(14)]=this.XV5(value,xPL.js);
break;
case 'lms_cfg_deactivate_lms':
case 'lms_cfg_ignore_errors':
case 'lms_cfg_use_original_max':
case 'lms_cfg_score_percentage_100':
case 'lms_cfg_score_precision':
case 'lms_cfg_only_one_commit':
case 'lms_cfg_score_precedence_lms':
case 'lms_cfg_decide_completeness':
if(!XGT.X27){
XGT.X27={};}
XGT.X27[xPL.x.substr(4)]=this.XV5(value,xPL.js);
break;
case 'librarydefaults_INP_Search':
case 'librarydefaults_INP_Filter':
case 'librarydefaults_INP_FlagInDescription':
case 'librarydefaults_INP_FlagInTitle':
case 'librarydefaults_INP_FlagKeepCourse':
case 'librarydefaults_INP_FlagNewWindow':
if(!XGT.XNl){
XGT.XNl={};}
XGT.XNl[xPL.x.substr(16)]=this.XV5(value,xPL.js);
break;}}}
else{
XGT[xPL.x]=this.XV5(value,xPL.js);}}}
XGT.xNE=(typeof(this.XQD)=='string'?this.XQD:'');
XGT.Xxb=this.Xxb;
for(i=0;i<XQN.length;++i){
xPL=XQN[i];
XGT[xPL.x]=this.XbW(XGT[xPL.x],XGT);}
return xYE;}
,x6U:function(){
return this.xVG;}
,Xu:function(){
return this.XQD;}
,XRT:function(){
return this.XT9;}
,X8v:function(XQN){
var name=XQN.n;
var xoQ;
if(XQN.xwK & 1){
if(this.X2U(name.toLowerCase())){
return false;}}
else{
xoQ=this.XRW(name)
if(typeof(xoQ)!='undefined'){
return false;}}
xoQ=this.XRO(name);
if(typeof(xoQ)!='undefined'){
return false;}
return(XQN.XPg==0);}
,load:function(XbL,XCZ,XCY){
this.XC0=new XAZ(XCZ,XCY);
if(this.XS3<=0){
this.error='Not loaded. No URL param.';
this.x6K=true;
return false;}
else if(!this.XQS()){
this.error='Not loaded. Neither tour nor config URL param.';
this.x6K=true;
return false;}
if(this.XQD===false){
this.error='Not loaded. program/library passed.';
this.x6K=true;
return false;}
this.XbL=XbL;
this.xVG=XbL.contentWindow;
this.error='Loading "'+this.XQD+'".';
if(!this.XRn()){
this.x6K=false;
return false;}
return true;}
,XPz:null
,XC0:null
,XbL:null
,xVG:null
,XT9:null,X2o:null,XT7:0
,XQD:null 
,XbV:/\$\{([a-zA-Z0-9_]+)\}/,XbX:/^\/[a-zA-Z]:$/
,XbW:function(XIH,XQE){
var xd2=XIH;
var match,name,value;
while(match=this.XbV.exec(xd2)){
name=match[1];
value=(XQE[XQE.XSI[name]]||'');
xd2=xd2.replace(new RegExp('\\$\\{'+name+'\\}','g'),value);}
return xd2;}
,XQQ:function(){
var XGO;
for(var XCM in this.xVG){
if(XCM.substr(0,4)=='cfg_'){
this.xVG[XCM]=XGO;}}
return true;}
,XQS:function(){
var Xav=this.XRW('tour');
if(Xav){
this.XQD='/tours/'+Xav;
return true;}
var xNE=this.XRW('config');
var mht=null;
var xKK=this.XRW('mode');
if(!xNE){
mht=this.XRW('mht');
xNE=mht;
if(!xKK){
xKK='demo';}}
if(xNE){
var xoL=xNE.indexOf('://');
if(xoL>=0){
xoL=(xNE.substr(xoL+3,3).search(this.XbX)==0
?xoL+6:xNE.indexOf('/',xoL+3));
this.XQD=xNE.substr(0,xoL)+
escape(xNE.substr(xoL));}
else if(xNE.substr(0,1)=='/'){
if((xoL=this.XPz.indexOf('://'))>=0){
xoL=this.XPz.indexOf('/',xoL+3);
this.XQD=(xoL>=0
?this.XPz.substr(0,xoL)+escape(xNE)
:this.XPz+'/'+escape(xNE));}
else{
this.XQD=escape(xNE);}}
else{
this.XQD=this.XPz+escape(xNE);}
if(mht){
this.XQD='mhtml:'+this.XQD+
'!http://dgo_mht_proxy/'+xKK+'.js';
this.Xxb=true;}
return true;}
var xBH=this.XRW('program')||this.XRW('library');
if(xBH){
this.XQD=false;
return true;}
return false;}
,XV5:function(XV7,Xlx){
if(Xlx==0){
return XV7;}
if(typeof(XV7)!='string'){
if(Xlx==1){return(typeof(XV7)=='object'&&XV7?XV7:null);}
return XV7;}
if(!XV7){
return null;}
try{
var XjL;
eval("XjL="+XV7);
return XjL;}
catch(xa8){}
return{
toString:function(){
return '{empty:eval("'+XV7+'")failed}';}};}
,XRW:function(xfK){
return this.XT9[xfK];}
,X2U:function(xfK){
return this.X2o[xfK];}
,XRO:function(xfK){
var XGO;
return(this.xVG?this.xVG['cfg_'+xfK]:XGO);}
,XRn:function(){
this.XbL.dgo32=this;
if(typeof(this.XbL.readyState)=='string'){
this.XbL.onreadystatechange=XJh;}
else{
this.XbL.addEventListener('load',XJh,true);}
var charset=this.XRW('charset')||'iso-8859-1';
var html=
'<html><head><meta http-equiv=Content-Type'+
' content="text/html;charset='+charset+'">\r\n';
if(this.dgoDOMAIN){
if(self.location.protocol=='http:'||
self.location.protocol=='https:')
{
html+=
'<script language=javascript>self.document.domain="'+
this.dgoDOMAIN+
'";</script>\r\n';}}
html+=
'<script language=javascript>\r\n'+
'var cfg_control={};\r\n'+
'cfg_control.udc={};\r\n'+'var udc=cfg_control.udc;\r\n'+
'</script>\r\n'+
'<script language=javascript id="config" src="'+this.XQD+
'"></'+'script>\r\n'+
'</head><body>datango Config</body></html>\r\n';
var x4E=this.xVG.document;
x4E.open('text/html');
try{
x4E.charset=charset;}
catch(xa8){
this.error+=' Exception setting charset to "'+charset+'";';}
x4E.write(html);
x4E.close();
return true;}
,XRo:function(){
if(this.XRW('ok')=='true'||this.xVG.cfg_ok){
this.error='Configfile "'+this.XQD+'" read.';
this.x6K=true;}
else{
this.error='Configfile "'+this.XQD+
'" not published or not found.';
this.x6K=false;}
this.XC0.exec('loaded',this);
return true;}
,XS4:function(xMj){
var xoL=xMj.indexOf('#');
var url=xoL>=0?xMj.substr(0,xoL):xMj;
var xPL=url.indexOf('?')>=0?url.split(/[?]/,2)[1]:url;
var XJj=xPL.split('&');
var xYE=0;
var name,value;
for(var i=0;i<XJj.length;++i){
xPL=XJj[i].split('=',2);
name=xPL[0];
if(name){
value=unescape(xPL[1]);
this.XT9[name]=value;
this.X2o[name.toLowerCase()]=value;
++this.XT7;}}
return this.XT7;}}
if(self.XI7){
XI7.XJB(new XIX('config.js'),['callback.js']);}

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
