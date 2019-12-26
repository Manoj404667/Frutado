//
//
//
var XBO=1;var XBP=2;var XBS=3;var XQ3=4;var XBQ=5;
//
function XBT(XCI,XCZ,XCY){
this.XCI=XCI;
this.x9Q=XCI.XF3();
this.XCZ=XCZ;
this.XCY=XCY;
if(!this.XCI.XFI_('ie','6.0')){
var xa1=this.XCI.XRN().XG3.split(';');
this.XCI.XRN().XG3=xa1[0];
if(this.XCI.XRN().XCv>1){
this.XCI.XRN().XCv=1;}}
this.XHY=XBO;
this.x6K=true;}
XBT.prototype.x6K=false;
XBT.prototype.x8F=function(){
if(this.XHY!=XBO){
this.x7N();}
if(this.XCQ){
this.XCQ.x8F();
this.XCQ=null;}
this.x9Q.dgoO=null;
this.XCI.Xpr('M FINISHED');}
XBT.prototype.XGJ=function(
XEn,xa3,XDh,XEy,XGV,XE3)
{
this.XCI.Xpr('M NEWAUDIO('+XEn+','+xa3+
','+XEy+','+XGV+','+
XE3+'):state '+this.XHY+
'=='+this.XFW(),'info');
this.XCe=0;
this.XCc=0;
this.XCd=XGV;
this.XHc=0;
var XGW_=this.XHY;
this.XHY=XBP;
this.XCI.XGy();
if(XGW_==XBO){
this.x9Q.dgoO=this;}
else{
if(this.XCQ){
this.XCQ.x7N();
this.XCQ.x8F();
this.XCQ=null;}}
this.XEn=XEn;
this.XDh=XDh;
if(this.xa3!=null&&xa3==null){
xa3=this.xa3;}
this.xa3=(xa3==null
?this.XCI.XRN().XCv:(xa3-0));
this.XHK();
var XK9=(typeof(this.XCI.XRN().xcK)=='string'?
this.XCI.XRN().xcK.toUpperCase():
(this.XCI.XFI_('ie','5.5')?'SMIL2':'JAP'));
if(this.xa4==''||XK9&&XK9!='SMIL2'&&XK9!='JAP'){
this.XGK(XE3?(XGV||0):XGV);}
else if(!this.XEn){var XkA=this.xa3;
this.XGK();
this.xa3=XkA;}
else{
if(XK9=='SMIL2'){
this.XCQ=new XBU(this,(XEy?true:false),
XGV||0,(XE3?true:false));
if(this.XCQ&&this.XCQ.x6K){
this.XCI.Xpr('M newAudio():loading SMIL 2.0');
this.XCQ.load();}
else{
this.XCI.Xpr('M newAudio():NOT loading SMIL 2.0','error');
this.XGK(XE3?(XGV||0):XGV);}}
else{this.XCQ=new x5D(this,(XEy?true:false),
XGV||0,(XE3?true:false));
if(this.XCQ&&this.XCQ.x6K){
this.XCI.Xpr('M newAudio():loading JAP');
this.XCQ.load();}
else{
this.XCI.Xpr('M newAudio():NOT loading JAP','error');
this.XGK(XE3?(XGV||0):XGV);}}}
if(this.XFg){
this.x9Q.clearInterval(this.XFg);
this.XFg=null;}
var Xjj=this;
this.XFg=this.x9Q.setInterval(
function(){Xjj&&Xjj.XGr();},this.XFB());
return true;}
XBT.prototype.x7N=function(){
if(this.XHY!=XBS&&
this.XHY!=XQ3&&
this.XHY!=XBQ&&
this.XHY!=XBP)
{
var xbK='Media::stop():not running:'+this.XHY;
this.XCI.Xpr('M '+xbK+' ['+this+']','error');
return false;}
if(this.XFg){
this.x9Q.clearInterval(this.XFg);
this.XFg=null;}
this.XH0();
if(this.XCQ){
this.XCQ.x7N();
this.XCQ.x8F();
this.XCQ=null;}
this.XEn=null;
this.XCI.Xpr('M STOPPED '+this,'info');
return true;}
XBT.prototype.pause=function(XEx){
if(this.XHY!=XBS&&
this.XHY!=XQ3&&
this.XHY!=XBP&&
this.XHY!=XBQ)
{
var xbK='Media::pause():not playing:'+this.XHY;
this.XCI.Xpr('M '+xbK+' ['+this+']','error');
return false;}
if(XEx&&this.XHY==XBQ){
this.XCI.xbs('M YET MUTING ');}
else if(!XEx&&this.XHY==XQ3){
this.XCI.xbs('M YET PAUSING ');}
else{
this.xba(XEx);
this.XCQ&&this.XCQ.pause();
this.XHX=this.XHY;
this.XHY=(XEx?XBQ:XQ3);
this.XCI.xbs('M PAUSED ','info');}
this.XCI.Xpr(this);
return true;}
XBT.prototype.xd0=function(XCL){
if(this.XHY!=XQ3&&
this.XHY!=XBQ)
{
var xbK='Media::resume():not paused:'+this.XHY;
this.XCI.Xpr('M '+xbK+' ['+this+']','error');
return false;}
this.xd1();
this.XCQ&&this.XCQ.xd0(XCL);
this.XCI.Xpr('M RESUMED '+this,'info');
return true;}
XBT.prototype.XFo=function(XFp){
this.XCw+=XFp;
return this.XCw;}
XBT.prototype.XY0=function(XXL){
this.XXb=XXL;
return this.XXb;}
XBT.prototype.XFB=function(){
return this.XCI.XRN().xWP;}
XBT.prototype.XFU=function(){
return this.XHW;}
XBT.prototype.XFC=function(){
return this.XGe;}
XBT.prototype.XFL=function(){
return(this.xa4?this.xa3:0);}
XBT.prototype.XFK=function(){
return this.xa4;}
XBT.prototype.XFN=function(){
if(this.XCQ&&
this.XHY!=XBO&&
this.XHY!=XBQ&&
this.XHY!=XBP)
{
var xd2=this.XCQ.XFN()-this.XY1;
return xd2;}
return this.XGe-
this.XHW-this.XCw-this.XY1;}
XBT.prototype.XFM=function(){
return(new Date()).valueOf()-this.XHW;}
XBT.prototype.XFV=function(){
return this.XHY;}
XBT.prototype.XFW=function(){
var text;
if(this.XHY==XBO){
text='empty';}
else if(this.XHY==XBP){
text='loading(hanging at '+this.XFN()+')';}
else if(this.XHY==XBS){
text='playing at '+this.XFN();}
else if(this.XHY==XQ3){
text='paused at '+this.XFN();}
else if(this.XHY==XBQ){
text='muting at '+this.XFN();}
else{
text='unknown('+this.XHY+')';}
return text;}
XBT.prototype.toString=function(){
var XH1='Media={'+this.XFW()+';';
XH1+=('file='+this.XEn+':'+this.xa4+';');
XH1+=('s='+this.XHW+';');
XH1+=('dif='+(this.XGe-this.XHW)+';');
XH1+=('del='+this.XCw+';');
XH1+=('off='+this.x5K+';');
XH1+=((this.XCQ?'audio='+this.XCQ:'no audio')+';');
XH1+=('shift='+this.XY1+
(this.XXb?',on':',off')+';');
return XH1+'}';}
XBT.prototype.valueOf=function(){
return this.toString();}
XBT.prototype.XCI=null;
XBT.prototype.x9Q=null;
XBT.prototype.XCZ=null;
XBT.prototype.XCY=null;
XBT.prototype.XEn=null;
XBT.prototype.XCQ=null;XBT.prototype.xa3=null;
XBT.prototype.xa4='';
XBT.prototype.XDh=null;
XBT.prototype.XHW=0;
XBT.prototype.XFg=null;
XBT.prototype.XGe=0;
XBT.prototype.XCw=0;
XBT.prototype.XXb=false;
XBT.prototype.XY1=0;
XBT.prototype.XHY=0;
XBT.prototype.XHX=0;
XBT.prototype.XCe=0;
XBT.prototype.XCd=0;
XBT.prototype.XCc=0;
XBT.prototype.XHc=0;
XBT.prototype.XvI=-1;
XBT.prototype.XC0=function(){
if(this.XCZ){
return this.XCY.XHO(this.XCZ,this);}
return this.XCY(this);}
XBT.prototype.XGr=function(){
++XrA;
if(this.XCQ){
this.XCQ.XGr();}
if(this.XHY==XBO){
return;}
var XGS=(new Date()).valueOf();
if(this.XHY==XBS){
if(this.XCQ){
var XH7=this.XCQ.XFN();
var XH6=this.XHW+XH7;
this.XCw=XGS-XH6;
if(this.XCe>0&&
(this.XCe-this.XHW)>1000&&
(XH7-this.XCd)>1000)
{
if((XGS-this.XCe)>1000){
if(this.XCw-this.XCc>250){
++this.XHc;
this.XCI.Xpr(
'M DELAY NEW='+this.XCw+
' OLD='+this.XCc+
',too-slow count='+this.XHc,
'warning',2);}
if(this.XHc>=2&&this.xa3>1){
return this.XGJ(this.XEn,this.xa3-1,
this.XDh,false,XH7,true);}
this.XCe=XGS;
this.XCc=this.XCw;}}
else{
this.XCe=XGS;
this.XCc=this.XCw;}}
if(this.XXb){
this.XY1+=(XGS-this.XGe);}}
else{
this.XCe=0;
this.XCc=0;
if(this.XHY==XQ3||
this.XHY==XBP)
{
this.XFo(XGS-this.XGe);}
else if(this.XHY==XBQ&&this.XXb){
this.XY1+=(XGS-this.XGe);}}
this.XGe=XGS;
return this.XC0();}
XBT.prototype.XHK=function(){
var xa1=this.XCI.XRN().XG3.split(';');
var xgQ=(this.XCI.XRN().xcK===true||
this.XCI.XRN().xcK>0);
if(xgQ||this.xa3<=0||xa1.length==0){
this.xa4='';
this.xa3=0;
return '';}
if(this.xa3>xa1.length){
this.XCI.Xpr(
'M confGetAudioQuality_():'+
'wrong "config"/index combination:"'+
this.XCI.XRN().XG3+'"/'+
this.xa3,'warning');
this.xa3=xa1.length;}
this.xa4=xa1[this.xa3-1];}
XBT.prototype.XGL=function(XCL){
var XGS=(new Date()).valueOf();
this.XHW=XGS;
this.XGe=XGS+(XCL||0);
this.XCw=0;
this.XY1=0;
return true;}
XBT.prototype.XGK=function(XCL){
this.XCQ=null;
this.xa3=0;
if(!XCL){
this.XGL();}
this.XHY=XBQ;
this.XCI.XGy();
return true;}
XBT.prototype.xba=function(XEx){
this.XGe=(new Date()).valueOf();
return true;}
XBT.prototype.xd1=function(){
var XGS=(new Date()).valueOf();
if(this.XHY==XQ3){
this.XFo(XGS-this.XFC());}
this.XGe=XGS;
this.XHY=(this.XHX==XBQ?
XBQ:XBS);
return true;}
XBT.prototype.XH0=function(){
this.XHW=0;
this.XGe=0;
this.XCw=0;
this.XY1=0;
this.XHY=XBO;
return true;}
function XBU(XG2,XEy,XGV,XE3){
this.XG2=XG2;
this.XEt_=XEy||false;
this.x5K=(XGV/1000)||0;
this.XE3=(XE3?true:false);
this.XG2.XHY=(this.XEt_?
XBQ:XBP);
this.xVG=this.XG2.x9Q.parent.frames.trainer_audio_frame;
if(!this.xVG){
var xbK='frame '+"trainer_audio_frame"+' not found!';
this.XG2.XCI.Xpr('MX ERROR ctor:'+xbK);
alert('Cannot play audio:'+xbK);
return;}
this.x6K=true;}
XBU.prototype.x6K=false;
XBU.prototype.x8F=function(){}
XBU.prototype.load=function(){
this.xVG.location.replace(this.XG2.XCI.Xu().xNI(
'navigator_audio_smil2.html').toString());
return true;}
XBU.prototype.xbL=function(){
this.XDv=0;
this.XGT.src=this.XG2.XEn+this.XG2.xa4;
this.XGT.beginElement();
this.XG2.XCI.Xpr('MX PLAY START @'+this.x5K+
'sec in "'+this.XGT.src+
'" '+this.XGT.clipBegin+'-'+this.XGT.clipEnd);
return true;}
XBU.prototype.pause=function(){
this.XGT&&this.XGT.pauseElement();
return true;}
XBU.prototype.xd0=function(XCL){
this.XGT&&this.XGT.resumeElement();
return true;}
XBU.prototype.x7N=function(){
if(this.XGT){
this.XG2.XCI.Xpr('MX stop():end');
this.XGT.endElement();}
if(this.XG2&&this.XG2.XFg){
this.XG2.x9Q.clearInterval(this.XG2.XFg);
this.XG2.XFg=null;}
return true;}
XBU.prototype.XFN=function(){
if(!this.XGT||!this.XGT.currTimeState){return-1;}
if(!this.XGT.currTimeState.progress){
return 0;}
var xd2=
this.XGT.currTimeState.progress*
this.XGT.currTimeState.simpleDur+
(this.XE3?this.x5K:0);
return Math.floor(1000*xd2);}
XBU.prototype.toString=function(){
var XH1='MediaSmil2={';
if(!this.XGT){
return XH1+'obj_ null}';}
XH1+=this.XGT.currTimeState.stateString+';';
XH1+=('tim='+this.XFN()+';');
XH1+=('src='+this.XGT.src+';');
XH1+=('begin-end='+this.XGT.clipBegin+'-'+this.XGT.clipEnd+';');
return XH1+'}';}
XBU.prototype.valueOf=function(){
return this.toString();}
XBU.prototype.XG2=null;XBU.prototype.xVG=null;XBU.prototype.XGT=null;XBU.prototype.XEt_=true;
XBU.prototype.x5K=0;XBU.prototype.XE4=false;
XBU.prototype.XzR=false;
XBU.prototype.XE3=false;
XBU.prototype.XFg=null;
XBU.prototype.XDv=0;
XBU.prototype.XHR=null;
var XzS=false;
XBU.prototype.XGr=function(XDx){
var XGS=new Date();
if(this.XGT&&this.XGT.currTimeState&&this.XGT.currTimeState.stateString=="holding"&&
(this.XE4||
this.XzR||
this.XGT.currTimeState.activeTime>this.XGT.currTimeState.parentTimeEnd))
{if(XzS&&((XGS-XzS)>300)){
XzS=false;}}
else{
if(XzS&&((XGS-XzS)>1500)){
XzS=false;}}
if(!XzS&&this.XGT&&this.XGT.currTimeState&&this.XGT.currTimeState.activeDur==Infinity){
this.XG2.XHc=2;this.XG2.XCI.Xpr(
'M activeDur==Ininity:Increasing too-slow count='+this.XHc,
'warning',2);}
if(this.XG2.XHc>=2){
this.XG2.XCI.Xpr(
'M DELAY NEW='+this.XCw+
' OLD='+this.XCc+
',too-slow count='+this.XHc,
'warning',2);
this.XG2.XHc=0;
XzS=XGS;
if(this.XGT.currTimeState.stateString=="holding"){
if(this.XE4||
this.XzR||
this.XGT.currTimeState.activeTime>this.XGT.currTimeState.parentTimeEnd)
{this.XG2.XGL();
this.XG2.XHY=XBS;
this.XGT.clipEnd=(this.XG2.XDh/1000)+60;
return true;}
else{if(this.XGT.currTimeState.progress<0.01)
{
if(this.XG2.xa3>1){
return this.XG2.XGJ(this.XG2.XEn,this.XG2.xa3-1,
this.XG2.XDh,false,this.XG2.XFN(),true);}
else{
return this.XG2.XGJ(this.XG2.XEn,this.XG2.xa3,
this.XG2.XDh,false,this.XG2.XFN(),true);}}}}}
if(XzS&&this.XGT&&this.XGT.currTimeState&&this.XGT.currTimeState.activeDur!=Infinity){
XzS=XGS;}
return true;}
XBU.prototype.XFk=function(XDx){
this.XG2.XCI.xbs('MX EVENT "'+XDx.type+'"');
switch(XDx.type){
case 'begin':
this.XzR=false;
break;
case 'end':
this.XzR=true;
break;
case 'mediacomplete':
if(!this.XE4){
this.XE4=true;
this.XGT&&this.XGT.seekTo(0,this.x5K);
this.XG2.XCI.xbs(',seek to '+this.x5K);}
this.XG2.XGL();
this.XG2.XHY=XBS;
this.XGT&&(this.XGT.clipEnd=(this.XG2.XDh/1000)+60);
this.XG2.XCI.Xpr(',playing,DUR='+this.XGT.simpleDur+
';'+this.XGT.clipBegin+'-'+this.XGT.clipEnd);
break;
case 'mediaerror':
this.XG2.XCI.Xpr('src="'+this.XGT.src+'"');
if(0>=this.XDv++){
this.XG2.XHY=XBO;
var xbK='Cannot play audio file "'+this.XGT.src+'"!';
this.XG2.XCI.Xpr('M '+xbK,'error',2);
alert(xbK+'\r\nContinuing without sound!');
this.XG2.XGK(0);}
break;
case 'outofsync':
this.XG2.XCI.Xpr(',too-slow count='+
(++this.XG2.XHc),'warning',2);
if(this.XHc>=2&&this.xa3>1){
return this.XGJ(this.XG2.XEn,this.XG2.xa3-1,
this.XG2.XDh,false,this.XFN(),true);}
this.XG2.XHY=XBP;
break;
case 'syncrestored':
this.XG2.XCI.Xpr(',too-slow count='+
(++this.XG2.XHc),'warning',2);
this.XG2.XHY=XBS;
break;
default:
break;}
this.XG2.XCI.XGy();
return true;}
XBU.prototype.XGj=function(){
this.XG2.XCI.Xpr('MX FRAME LOADED');
this.XGT=this.xVG.document.getElementById("XCI_");
if(!this.XGT){
var xbK='audio object '+"XCI_"+' not found!';
this.XG2.XCI.Xpr('MX ERROR load_cb_():'+xbK);
alert('Cannot play audio:'+xbK);
return false;}
this.XHR=this.xVG.document.getElementById("xWC");
if(!this.XEt_){
this.xbL();}
this.XG2.XCI.Xpr('MX load_cb_()done:'+this.XG2);
return true;}
function x5D(XG2,XEy,XGV,XE3){
var xbK='';
if(!(this.xVG=XG2.x9Q.parent.frames.trainer_audio_frame)){
xbK='Frame '+"trainer_audio_frame"+' not found!';}
else if(!navigator.javaEnabled()){
xbK='Java not enabled.';}
if(xbK){
XG2.XCI.Xpr('MJ ERROR ctor:'+xbK);
alert('Cannot play audio:'+xbK);
this.error=xbK;
return;}
this.XG2=XG2;
this.XEt_=XEy||false;
this.x5K=(XGV/1000)||0;
this.XE3=(XE3?true:false);
this.XG2.XHY=(this.XEt_?
XBQ:XBP);
this.x6K=true;}
x5D.prototype.x6K=false;
x5D.prototype.error='ok';
x5D.prototype.x8F=function(){
this.x7N();
this.XG2.XCI.Xpr('MJ FINISH DONE '+this);}
x5D.prototype.load=function(){
var x4E=this.xVG.document;
var html='<html><head><title>datango Java based audio player</title>\r\n'+
'<meta http-equiv=Content-Type content="text/html;charset=utf-8">'+
'</head>\r\n<body bgcolor="#4d7aa6" onload="return do_onload()">\r\n';
html+='<script language=javascript>\r\n'+
'if(self.location.search.length>1){\r\n'+
' self.document.domain=self.location.search.substr(1);\r\n}</'+
'script>\r\n<script src="'+
this.XG2.XCI.Xu().xNI('navigator_audio_java.js')+'" '+
'language=javascript></'+'script>\r\n';
html+='<form name="'+"x8k"+'">\r\n'+
'<b>JAP state:</b>\r\n'+
'<input name="'+"xWC"+
'"size=80 value="not initialized">\r\n</form><br>\r\n';
html+='<applet id="'+"XCI_"+'" name="'+
"XCI_"+'" code="JavaAudioApplet.class"\r\n'+
'width=0 height=0 archive="'+
this.XG2.XCI.Xu().xNI('jap.jar')+'">\r\n';
html+='<param name="lowwater" value="'+
this.XG2.XCI.XRN().Xal+'">\r\n';
html+='<param name="highwater" value="'+
this.XG2.XCI.XRN().xoh+'">\r\n';
html+='<param name="maxbandwidth" value="'+
this.XG2.XCI.XRN().XbH+'">\r\n';
html+='</applet></body></html>';
x4E.write(html);
x4E.close();
return true;}
x5D.prototype.xbL=function(){
var xeQ=this.XG2.XEn+this.XG2.xa4;
this.XDv=0;
this.XTv=true;
if(this.XGT&&
(typeof(this.XGT)=='object'||typeof(this.XGT)=='function'))
{
this.XGT.Play(xeQ,''+
(this.XE3?this.x5K:0));
this.XG2.XCI.Xpr('MJ PLAY "'+xeQ+
'" @'+this.x5K+' '+this);}
else{
this.XG2.XCI.Xpr('MJ Cannot play:no object('+
typeof(this.XGT)+')','error');}
return true;}
x5D.prototype.pause=function(){
if(this.XGT&&
(typeof(this.XGT)=='object'||typeof(this.XGT)=='function'))
{
this.XGT.Pause();}
else{
this.XG2.XCI.Xpr('MJ Cannot pause:no object('+
typeof(this.XGT)+')','error');}
this.XG2.XCI.Xpr('MJ PAUSED '+this);
return true;}
x5D.prototype.xd0=function(XCL){
if(this.XGT&&
(typeof(this.XGT)=='object'||typeof(this.XGT)=='function'))
{
this.XGT.Resume();}
else{
this.XG2.XCI.Xpr('MJ Cannot resume:no object('+
typeof(this.XGT)+')','error');}
this.XG2.XCI.Xpr('MJ RESUMED '+this);
return true;}
x5D.prototype.x7N=function(){
if(this.XFg){
this.XG2.x9Q.clearInterval(this.XFg);
this.XFg=null;}
if(this.XGT){
if(typeof(this.XGT)=='object'||typeof(this.XGT)=='function'){
this.XGT.Stop();}
this.XG2.XCI.Xpr('MJ STOP '+this);
this.XGT=null;}
return true;}
x5D.prototype.XFN=function(){
if(!this.XGT||
(typeof(this.XGT)!='object'&&typeof(this.XGT)!='function'))
{
return-1;}
if(this.Xag=='stopped'){
return this.Xad+(new Date).valueOf()-this.XkQ;}
return this.Xaf+(this.XE3?this.x5K:0);}
x5D.prototype.toString=function(){
var XH1='MediaJava={';
if(!this.XGT){
return XH1+'obj_ null}';}
XH1+=''+this.Xag+';';
XH1+=('tim='+this.XFN()+';');
XH1+=('off='+this.Xaf+';');
XH1+=('buf='+this.Xad+';');
if(this.Xag=='error'){
XH1+=('err='+this.Xae+';');}
return XH1+'}';}
x5D.prototype.valueOf=function(){
return this.toString();}
x5D.prototype.XG2=null;x5D.prototype.xVG=null;x5D.prototype.XGT=null;x5D.prototype.XEt_=true;
x5D.prototype.XTv=false;
x5D.prototype.x5K=0;x5D.prototype.XE3=null;
x5D.prototype.XFg=null;
x5D.prototype.XDv=0;
x5D.prototype.XkQ=null;x5D.prototype.Xag=null;x5D.prototype.Xaf=null;x5D.prototype.Xad=null;x5D.prototype.Xae=null;
var xaa=/[;]/;
x5D.prototype.XGr=function(){
if(!this.XGT||
(typeof(this.XGT)!='object'&&typeof(this.XGT)!='function'))
{
return false;}
var color=null;
var Xai=this.Xag;
var all=(this.XGT.GetAll()+'').split(xaa);
this.Xaf=Math.floor(1000*parseFloat(all[0]));
this.Xad=Math.floor(1000*parseFloat(all[1]));
this.Xag=all[2];
this.Xae=all[3];
if(this.Xag!=Xai){
this.XkQ=null;
switch(this.Xag){
case 'empty':
this.XG2.XHY=XBO;
color='white';
break;
case 'playing':
if(this.XTv){
this.XTv=false;
this.XG2.XGL();}
this.XG2.XHY=XBS;
color='green';
break;
case 'pausing':
this.XG2.XHY=XQ3;
color='red';
break;
case 'loading':
this.XG2.XHY=XBP;
color='yellow';
break;
case 'stopped':
this.XG2.XHY=XBS;
this.XkQ=(new Date).valueOf();
color='blue';
break;
case 'error':
this.XG2.XCI.Xpr(
'MJ ABORT "'+this.Xae+'"','error');
alert('Java Audio Player error:'+this.Xae);
this.x7N();
color='magenta';
this.XG2.XGK();
break;
default:
this.XG2.XCI.Xpr(
'MJ wrong state:"'+this.Xag+'"');
++this.XDv;
color='silver';
break;}
if(this.Xag!='error'){
this.XG2.XCI.Xpr('MJ '+this+' ['+
Xai+','+this.XDv+' errors]');
this.XG2.XCI.XGy();}}
return true;}
x5D.prototype.XGj=function(){
this.XG2.XCI.Xpr('MJ FRAME LOADED');
this.XGT=this.xVG.document.applets.XCI_;
if(!this.XGT){
var xbK='audio object '+"XCI_"+' not found!';
this.XG2.XCI.Xpr('MJ load_cb_():'+xbK,'error');
alert('Cannot play audio:'+xbK);
return;}
if(!this.XEt_){
if(!this.xbL()){
this.XG2.XCI.Xpr('MJ ABORT(cannot play)','error');
this.XG2.XGK();}}
return true;}
if(self.XI7){XI7.XJB(new XIX('../media.js',['../agent.js']));}

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
