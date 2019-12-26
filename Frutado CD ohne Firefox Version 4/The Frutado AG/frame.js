//
function XoC(xVG){
return(xVG&&xVG.dgop)?xVG.dgop:null;}
function XcL(XDx){if(this.dgop&&this.dgop.Xcj()){
this.dgop=null;
return true;}
this.dgop=null;
return false;}
function X7m(XDx){if(XDx.propertyName=='innerHTML'&&
this.dgoc&&this.dgoc.dgop)
{
return this.dgoc.dgop.XnY();}
return true;}
var Xbq=1000;
var Xbs=1001;
var Xbr=1002;
var Xbt=1003;
var Xbu=1004;
var XcE=2000;
var XcB=2001;
var XcA=2002;
var XcD=2003;
var XcC=2004;
var Xql=2005;
var Xbx=3000;
var Xbw=3001;
var Xby=3002;
var Xbv=3003;
function XcF(Xdw){
switch(Xdw){
case Xbs:return 'loading';
case Xbr:return 'loaded';
case Xbu:return 'unloading';
case Xbt:return 'unloaded';
default:break;}
return '[unknown frame load state '+Xdw+']';}
function XcH(Xej){
switch(Xej){
case XcE:return 'unknown';
case XcB:return 'issued';
case XcA:return 'fulfilled';
case XcD:return 'no-match';
case XcC:return 'no-access';
case Xql:return 'opening';
default:break;}
return '[unknown frame req state '+Xej+']';}
function XcG(Xe8){
switch(Xe8){
case Xbx:return 'none';
case Xbw:return 'init';
case Xby:return 'poll';
case Xbv:return 'done';
default:break;}
return '[unknown frame poll state '+Xe8+']';}
function XcI(Xdw,Xej,Xe8){
if(Xe8!=Xbx){
return false;}
switch(Xdw){
case Xbr:
switch(Xej){
case XcA:
case XcC:
return true;
case XcE:
case XcB:
return false;
case XcD:
return false;
default:
return false;}
case Xbs:
case Xbu:
case Xbt:
return false;
default:
break;}
return false;}
var Xbz=500;
XRl&&(Xbz=100);
function xJB(X0U,xVG,xaz,
Xe1)
{
if(!X0U)
return;
var XLk=X0U.Xd6().XVp();
this.Xkv=XLk.XRN().xuQ;
this.X0U=X0U;
this.xVG=xVG;
this.xaz=xaz;
this.Xdv=new Xbn();
this.XfJ=new Xbn();
if(typeof(Xe1)=='object'){
this.XdC=(Xe1
?Xe1.XY9()||
Xe1.Xty()=='IFRAME'||
Xe1.Xty()=='IFRAMESET':false);}
else if(typeof(Xe1)=='string'){
this.Xex(Xe1);}
else if(Xe1===false){
this.Xew(Xbs,Xql);
X0U.Xcd(false);
this.x6K=true;
return;}
if(typeof(xVG)=='object'&&xVG){
this.xvD();
if(Xe1==null&&
this.Xdw!=Xbr&&
!this.xaz&&this.xVG==this.xVG.top&&
xaz!='-3')
{
this.Xe7();}
if(this.Xdr()&&
X0U.XF3()==XLk.XJ1())
{
var XnU=XLk.Xfn().Xfx();
if(XnU){
this.Xeo=XnU.Xhi;}}
this.x6K=true;}
else{
this.error='Frame is null or not object:'+typeof(xVG);}}
xJB.prototype={
x6K:false
,error:''
,xvD:function(XhB){
if((this.Xdw==Xbs&&
this.Xej==Xql)||
(!XhB&&this.Xe8!=Xbx))
{
return false;}
if((this.X0U.XF3().closed||
(this.xVG&&this.xVG.closed))&&!this.XkK)
{
this.X0U.Xd6().XVp().Xpr(
'F window closed:'+this,'user',2);
this.error='window closed';
this.Xew(Xbt);
this.Xe6();
this.X0U.Xeh();
return false;}
if(!this.xVG){
if(this.Xdw==Xbt){
this.error='no frame(unloaded)';}
else{
var xbK='no frame:'+this;
this.X0U.Xd6().XVp().Xpr(
'F '+xbK,'error');}
return false;}
this.error=Xbp(this.xVG);
if(this.error){
this.Xew(Xbr,XcC);
this.Xdk(true);return false;}
this.error=XSS(this.xVG);
if(this.error){this.Xew(Xbs);
this.Xdk(true);
return false;}
if(!this.xVG||
!this.xVG.document||
!this.xVG.document.body||
typeof(this.xVG.document.body.tagName)!='string')
{this.error='no access to frame body';
this.Xew(Xbs);
this.Xdk(true);
return false;}
var xa7;
if((this.Xej!=XcB||
this.xVG==this.xVG.top)&&
(xa7=this.Xc6()))
{
this.error='';
try{
if(this.X0U.Xd6().XVp().XVy()){
if(this.X0U.Xd6().XVp().XVy().document){
if(this.xVG.top.document.title!=(this.X0U.Xd6().XVp().XRN().title||this.X0U.Xd6().XVp().XVy().document.title)){
this.xVG.top.document.title=this.X0U.Xd6().XVp().XRN().title||this.X0U.Xd6().XVp().XVy().document.title;}}}}
catch(xa8){}
if(xa7==1){
this.Xew(Xbr,XcC);}
else if(xa7==2){
this.XdD();
this.Xdm();
var XLk=this.X0U.Xd6().XVp();
if(XLk.XRN().Xzh&&
XRl&&
!X0a&&
this.xVG.document.compatMode!=this.xVG.parent.document.compatMode)
{
var Xjj=this;
var X1K=function(){
try{
var XMN=dgoAgent.x6b();
XMN.x8Y(null,Xjj.xVG);}
catch(xa8){}}
try{
XLk.XVy().clearInterval(XLk.XVy().Xz4);}
catch(xa8){}
try{
XLk.XVy().Xz4=XLk.XVy().setInterval(X1K,1000);}
catch(xa8){}}}}
else{
this.Xew(Xbs);}
this.Xdk(XhB);
return XcI(
this.Xdw,this.Xej,this.Xe8);}
,close:function(){
if(this.xVG.Xw4){var XLk=this.X0U.Xd6().XVp();
XLk.Xfn().Xf1(this.xVG.Xw4.XgJ());
this.xVG.Xw4.Xhq(-1);
this.xVG.Xw4.Xf1();}
if(this.xVG==this.xVG.top){
if(this.xVG&&!this.xVG.closed&&
!this.xVG.opener){
if(navigator.appName=='Microsoft Internet Explorer'){
var X1K=function(){
self.top.opener=self.top;
self.top.open('','_parent');
self.top.close();}
window.setTimeout(X1K,2000);}
else{
try{
this.xVG.close();}
catch(xaw){}
if(this.xVG&&!this.xVG.closed){
try{
netscape.security.PrivilegeManager.enablePrivilege(
'UniversalPreferencesRead UniversalPreferencesWrite');
navigator.preference('dom.allow_scripts_to_close_windows',true);
this.xVG.close();}
catch(xaw){alert('Cannot close browser window.\n\n'+
'To allow automatic window close,\n'+
'change the setting "dom.allow_scripts_to_close_windows"\n'+
'in "about:config" to true!');}}}}
else{
this.xVG&&this.xVG.close();}}
this.Xqn=true;
this.Xe6();}
,x6U:function(){
if(this.Xej==XcC){
this.xvD();
if(this.Xej==XcC){
this.X0U.Xd6().XVp().Xpr(
'F still no access:'+this,'warning');
return this.xVG;}
if(!this.xVG){
return null;}
var frameElement=XPB(this.xVG);
frameElement&&(this.xVG=frameElement.contentWindow);}
return this.xVG;}
,XdU:function(){
return this.X0U;}
,XdW:function(){
return this.Xdw;}
,XdX:function(){
return XcF(this.Xdw);}
,XdY:function(){
if(!this.xaz){return null;}
return this.X0U.XVh(
this.xaz.substr(0,this.xaz.lastIndexOf(':')));}
,XFG:function(Xcz){
if(Xcz){
return this.X0U.XVz()+
(this.xaz?':'+this.xaz:'');}
return this.xaz;}
,XdZ:function(){
return this.Xe8;}
,XVu:function(){
return this.X9H;}
,Xd2:function(){
return this.Xej;}
,Xd3:function(){
return XcH(this.Xej);}
,XFW:function(){
return XcF(this.Xdw)+
'/'+XcH(this.Xej)+
'/'+XcG(this.Xe8)+
(this.Xe5?this.Xe5:'');}
,Xty:function(){
return this.xGQ;}
,XVz:function(){
return this.X0U.XVz();}
,Xdc:function(xVG,XbL){
var XW6=this.X0U.XVh(this.xaz);
return(XW6?XW6.Xci(xVG,XbL):false);}
,Xdd:function(){
var XW6=this.X0U.XVh(this.xaz);
return(XW6?XW6.Xcj():false);}
,XY9:function(){
return this.XdC;}
,Xdj:function(XCZ,XCY){
return this.Xdv.add(XCZ,XCY);}
,Xdl:function(XCZ,XCY){
return this.XfJ.add(XCZ,XCY);}
,Xdp:function(){
return this.Xdw==Xbu||
(this.Xdw==Xbr&&
this.Xej==XcA);}
,Xdq:function(){
return(this.Xdw==Xbu||
(this.Xdw==Xbr&&
(this.Xej==XcA||
this.Xej==XcD)));}
,Xdr:function(){
return XcI(
this.Xdw,this.Xej,this.Xe8);}
,Xdt:function(){
return this.Xdw==Xbu||
(this.Xdw==Xbr&&
this.Xej==XcD);}
,Xdx:function(xMj,Xe4){
var xUG=this.xVG||this.X0U.XF3();
var frameElement=XPB(xUG);
this.xVG=xUG;
this.Xej==XcC||this.Xdm();
if(!xMj||
xMj==''||
xMj.toLowerCase()=='about:blank'||
xMj.toLowerCase()=='about_blank.html'){
var XLk=this.X0U.Xd6().XVp();
if(XLk.XRN().domain){
xMj='relax_domain.html?dgoDOMAIN='+this.XCI.XRN().domain;}
else{
xMj='about_blank.html';}
var url=new Url(xMj);
url.xc3(self.location.href);
xMj=url.toString();}
this.Xek=xMj;
this.X0U.XfR.XCI.xCI(7000,'LOAD:'+this.Xek);
this.XfN=
(Xe4.substr(0,6)=='MATCH '?Xe4.substr(6):'');
this.Xe6(true);
this.Xew(Xbu,XcB);
var Xqt;
try{
if(frameElement&&frameElement.src!=xMj){
Xqt=false;
try{
this.Xdk();}
catch(e){}
if(XRl&&
this.X0U.XfR.XCI.XRN().X6s!='')
{
frameElement.style.filter=this.X0U.XfR.XCI.XRN().X6s;
frameElement.filters[0].Apply();}
if(xMj.indexOf('mhtml:')==0){
xUG.document.open();
xUG.document.write('');
xUG.document.close();
frameElement.src=xMj;}
else{
frameElement.src=xMj;}
if(XRl&&
this.X0U.XfR.XCI.XRN().X6s!=''&&
frameElement.filters[0])
{
frameElement.filters[0].Play();}}
else{
Xqt=(xUG==xUG.top);
this.Xdk();
if(XRl&&
this.X0U.XfR.XCI.XRN().X6s!=''&&
frameElement)
{
frameElement.style.filter=
this.X0U.XfR.XCI.XRN().X6s;
frameElement.filters[0].Apply();}
xUG.location.assign(xMj);
if(XRl&&
this.X0U.XfR.XCI.XRN().X6s!=''&&
frameElement&&
frameElement.filters[0])
{
frameElement.filters[0].Play();}}}
catch(xa8){
this.error='Cannot load url:'+(new x6C(xa8));
this.X0U.Xd6().XVp().Xpr(
'F '+this.error,'error');
this.Xew(Xbr,XcC);
return this.error;}
!this.xaz&&Xqt&&this.Xe7();
return true;}
,Xeb:function(){
return this.XWK();}
,Xeo:function(XDq,Xjk){
var XfQ=this.X0U.Xd6();
var XLk=XfQ.XVp();
var Xcm=XfQ.XdT();
var xd2;
if(!this.Xdp()){
XLk.Xpr('RESOLVE element:Ill.state '+this,'error');
return null;}
var Xcq={};
var element,xbK;
if(Xcm&&XDq.XHZ&&!Xjk){
element=Xcm(XDq.XHZ,this.xVG,Xcq);
if((typeof(element)=='object'||
typeof(element)=='function')&&element)
{
if(this.Xkv>=2){
XLk.Xpr('RESOLVE element(EEP):'+
XA6(element),'success');}
return element;}}
var Xez={};
element=xjH(this.xVG,XDq.path,
0,Xez,Xjk);
if(element){
xbK=(this.Xkv>=2?XA6(element):'');
if(Xcq.Xl){
xbK+=';EEP error:'+Xcq.Xl;}
if(xbK){
XLk.Xpr('RESOLVE element(no EEP):'+xbK,
Xcm&&XDq.XHZ?'warning':'success');}
return element;}
XLk.Xpr('RESOLVE element:EEP '+
Xcq.Xl+';EP '+Xez.Xl,'error');
return null;}
,Xqz:function(){
this.Xew(Xbr,XcC);}
,xTN:function(Xdw,Xej){
this.Xew(Xdw,Xej,null,true);}
,Xqr:function(Xe4){
var Xqs=
(Xe4.substr(0,6)=='MATCH '?Xe4.substr(6):'');
if(Xqs!=this.XfN){
this.XfN=Xqs;
if(this.Xdw==Xbr&&
this.Xej!=XcC)
{
this.XdD();
this.X0U.Xdo()||
this.X0U.Xd6().XfG();}
this.Xkv>=2&&
this.X0U.Xd6().XVp().Xpr(
'F setUrlPattern('+this.XfN+'):'+this);}
return true;}
,Xey:function(xVG,xMj,Xqo){
this.xVG=xVG;
this.Xex(xMj,Xqo);
this.xvD();
return this.Xdr();}
,XfH:function(XC0){
return this.Xdv.remove(XC0);}
,XfI:function(XC0){
return this.XfJ.remove(XC0);}
,toString:function(){
return 'Frame={'+this.xGQ+
(this.XdC?'(has IFrameParent),':',')+
this.XFW()+(this.error?'('+this.error+')':'')+
',path='+this.XFG(true)+','+this.xfK+
'@'+this.X9H+'}';}
,X0U:null
,xGQ:null,xaz:null,xVG:null,XdC:false
,xfK:null,Xkv:0
,Xek:'',XfN:'' 
,Xqn:false
,XdI:false
,Xdw:Xbq
,Xej:XcE
,Xe8:Xbx
,Xe5:0
,Xqx:0
,X9H:null
,Xdv:null,XfJ:null,XfK:true 
,XcX:function(XfA,XGE){
if(this!=XfA){
xbK='Mismatch in '+XGE+
':\r\n '+this+' \r\nvs. saved \r\n'+XfA;
this.X0U.Xd6().XVp().Xpr(
'F '+xbK,XfA?'error':'warning');
return false;}
return true;}
,Xc6:function(){
var x4E=this.xVG.document;
if(typeof(x4E.readyState)=='string'){
if(x4E.readyState=='interactive'){
var XLk=this.X0U.Xd6().XVp();
if(XLk.XRN().XoM.cfg_twistIeDocWrite&&
x4E.parentWindow)
{
var frameElement=XPB(x4E.parentWindow);
if(frameElement&&
XoO(frameElement))
{
return 1;}}}
else if(x4E.readyState=='complete'){
return 2;}
return 0;}
var tagName=x4E.body.tagName;var XLk=this.X0U.Xd6().XVp();
if(tagName=='BODY'){
var Xdi=x4E.getElementsByTagName('IFRAME');
if((!XLk.XFI_('moz','1.0')||
XLk.XFI_('moz','1.7'))&&
Xdi.length!=this.xVG.frames.length)
{
this.error='IFRAME count '+Xdi.length+
'!=expected '+this.xVG.frames.length;
return 0;}}
else if(tagName=='FRAMESET'){
var frames=x4E.getElementsByTagName('FRAME');
if((!XLk.XFI_('moz','1.0')||
XLk.XFI_('moz','1.7'))&&
frames.length!=this.xVG.frames.length)
{
this.error='FRAME count '+frames.length+
'!=expected '+this.xVG.frames.length;
return 0;}}
else{
this.error='Wrong BODY tagName '+tagName;
return 0;}
return 2;}
,XdD:function(){
var xd2;
if(this.Xek){
var href=''+this.xVG.location.href;
if(this.XkK||this.XfN
?href.search(this.XfN)>=0
:(href==this.Xek||
href==this.Xek+'&move=1'))
{
xd2=true;
this.Xew(
Xbr,XcA);}
else if(this.Xek.substr(0,6)=='mhtml:'&&
this.Xek.indexOf('!'+href)==
this.Xek.length-('!'+href).length)
{
xd2=true;
this.Xew(
Xbr,XcA);}
else{
xd2=false;
this.Xew(
Xbr,XcD);}}
else{
xd2=true;
this.Xew(
Xbr,XcA);}
return xd2;}
,Xc8:function(){
var xUG=this.xVG;
if(xUG==this.X0U.XF3()||
xUG==xUG.top)
{this.xGQ=xUG.document.body.tagName;
this.xfK=xUG.name||xUG.location.href;}
else{
var frameElement=XPB(xUG);
var XdL;
if(frameElement){if(XdL=Xbo(frameElement)){
this.xGQ='XXX';
this.xfK='['+xUG.location+']';
this.error='No access to frameElement:'+XdL;
return;}}
else{}
if(xUG.document.body.tagName=='FRAMESET'){
this.xGQ=frameElement.tagName+'SET';
this.xfK=xUG.name||xUG.location.href;}
else{
if(frameElement.id.substr(0,9)=='dgoRender'){
this.xGQ='DGO';this.xfK=frameElement.id;}
else{
this.xGQ=frameElement.tagName;
this.xfK=xUG.name+'/id:'+
frameElement.id+'='+xUG.location.href;}}}
return this.xGQ;}
,Xci:function(XbL){
var XVm=this.X0U;
var XLk=XVm.Xd6().XVp();
var XjC,xbK;
if(XLk.XFV()==XOc||
XLk.XFV()==XAB)
{
return true;}
try{if(XjC=XbL.contentWindow){
this.xVG=XjC;}
if(!this.xVG){
xbK='[no window in frameElement]';}
else if(Xbp(this.xVG,true)){
xbK='[forbidden window in frameElement]';}
else{
xbK='"'+this.xVG.name+'"='+this.xVG.location+
';compatMode '+this.xVG.document.compatMode+
';lastMod '+this.xVG.document.lastModified;
this.xfK=this.xVG.name+',id:'+XbL.id;}}
catch(xa8){
xbK='Cannot access frame('+(new x6C(xa8))+
'),frameElement "'+XbL.name+'"='+XbL.src;
this.xfK=xbK;}
if(XVm.Xdn()){
XLk.Xpr('Onload saved:'+this,'user',2);
return XVm.Xeq(
this,XjC,XbL);}
var XW6=XVm.XVh(this.xaz);
XLk.Xpr('Onload '+xbK+' '+(XW6||'no tFrame'),'user',2);
if(!XW6){XVm.XcQ(this);
XVm.Xcd(this.Xdr());
XW6=this;
if(this.Xkv>=2){
XLk.Xpr('F '+this+' was missing in container==>'+
XVm,'warning');}}
if(!this.XcX(XW6,'onload')){
if(this.Xkv>=2){
XLk.Xpr('F No assertTFrame!!! tFrame==>'+
XW6,'warning');}
return false;}
if(this.Xej==XcB){
this.Xej=XcE;}
if(typeof(XbL.readyState)=='string'&&
XbL.readyState=='interactive')
{this.Xew(Xbr,XcC);}
else{
XVm.Xc4(this);
if(this.Xej==XcC){
if(XLk.XRN().XoM.cfg_noAccessFramePolling>1){
var XGS=new Date();
this.XvN=XGS;
if(this.Xkv>=2){
XLk.Xpr('F No Access for the first Time tFrame==>'+
XW6,'warning');}
this.Xe7();
XLk.Xlc().add(new XbY(
'NoAccessFramePoll',this,this.Xv8,null,100));}}else{
this.xVG&&this.XjW(XLk);}}
XVm.Xdo()||XVm.Xd6().XfG();
return true;}
,Xv8:function(){
var XVm=this.X0U;
var XfA=XVm.XVh(this.xaz);
var XLk=XVm.Xd6().XVp();
if(XfA.Xkv>=2){
XLk.Xpr('F noAccessFramePoll_ tFrame==>'+XfA);}
if(XfA.Xej==XcA){
if(XfA.Xkv>=2){
XLk.Xpr('F Frame is finally ready... tFrame==>'+
XfA,'success');}}
else{
var XGS=new Date();
if(XfA.XvN>=XGS-
XLk.XRN().XoM.cfg_noAccessFramePolling){
if(XfA.Xkv>=2){
XLk.Xpr('F Restart Batch Poll Process for tFrame==>'+
XfA,'warning');}
XLk.Xlc().add(new XbY(
'NoAccessFramePoll',XfA,XfA.Xv8,null,500));}
else{
if(XfA.Xkv>=2){
XLk.Xpr('F Batch process not restarted anymore tFrame==>'+
XfA,'warning');}}}}
,XnY:function(){var XVm=this.X0U;
var XLk=XVm.Xd6().XVp();
var xUG=this.xVG;
if(XLk.XFV()==XOc||
XLk.XFV()==XAB)
{
return true;}
XLk.Xpr('HTML change "'+xUG.name+'"='+xUG.location+
' '+XW6,'user',2);
var XW6=XVm.XVh(this.xaz);
if(!this.XcX(XW6,'HTML change')){
return false;}
var XeM=this.Xdw;
var XeR=this.Xej;
XVm.Xc4(this);
if(XeM==this.Xdw&&
XeR==this.Xej)
{
this.Xdz();}
return true;}
,Xcj:function(){
var XVm=this.X0U;
var XLk=XVm.Xd6().XVp();
if(XLk.XFV()==XOc||
XLk.XFV()==XAB)
{
return true;}
if(XVm.Xdn()){
XLk.Xpr('Onunload saved:'+this,'user',2);
return XVm.Xer(this);}
var xUG=this.xVG;
if(xUG.closed){
XLk.Xpr('Onunload closed '+this,'user',2);
this.xvD();return true;}
var XW6=XVm.XVh(this.xaz);
XLk.Xpr('Onunload "'+xUG.name+'"='+xUG.location+
' '+XW6,'user',2);
this.X0U.XfR.XCI.xCI(7001,'UNLOAD:'+xUG.location);
if(!this.XcX(XW6,'onunload')){
return false;}
var frameElement=XPB(xUG);
if(!this.xaz&&!frameElement&&xUG==xUG.top){
this.Xe7();}
if(this.Xej==XcB||
this.Xej==XcD||
this.Xek)
{
this.Xew(Xbs);
this.Xdk();}
else{
var xbK,XeD,XdL;
if(!frameElement){
xbK='no frameElement-onload handler cannot be removed';
XeD='warning';}
else if(XdL=Xbo(frameElement)){
xbK='no access to frameElement ['+XdL+
']-onload handler cannot be removed';
XeD='warning';}
else{
var x8Q=this.xVG.parent;
if(!x8Q||x8Q.closed){xbK=(x8Q?'no parent':'parent closed')+'-removing onload handler';
XeD='info';
XVo(frameElement);}
else{xbK='parent not closed-keep onload handler';
XeD='trace';}}
xA8(xUG,'unload',XcL,
xA4);
if(typeof(this.xVG.document)=='object'&&this.xVG.document&&
typeof(this.xVG.document.body)=='object'&&this.xVG.document.body)
{
xA8(this.xVG.document.body,
'propertychange',X7m,
xA4);}
this.error='';
this.Xew(Xbt);
if(this.Xkv>=3){
var XfQ=XVm.Xd6();
XLk.Xpr('F "'+xUG.name+'"='+xUG.location+
' unloaded. '+xbK+'. '+
XVm.toString(1)+'/'+
XfQ.toString(1),XeD);}
if(xUG!=XVm.XF3()){
XVm.Xeg(this,XVm.Xqv);}}
return true;}
,XWK:function(XeZ){
if(this.xGQ=='DGO'||this.xGQ=='XXX'){
return false;}
var x4K;
if(XeZ&&(XeZ.xGQ!='DGO'&&XeZ.xGQ!='XXX')){var XeY=XeZ.XVu();
x4K=XPD(this.xVG,XeZ.x6U())
x4K.x+=XeY.left;
x4K.y+=XeY.top;}
else{var XLk=this.X0U.Xd6().XVp();
x4K=XPD(
this.xVG,XLk.XvR(this.X0U.XF3()));}
var XaL=XR6(this.xVG,2);
this.X9H=new XAi(x4K.x,x4K.y,
x4K.x+XaL.x-1,x4K.y+XaL.y-1);
return true;}
,XjW:function(XCI){
this.xVG.ctx=XCI.Xlf().Xls();
this.xVG.ctx_control=XCI.Xlf().Xls();
this.xVG.udc=XCI.Xlf().Xls().udc;}
,Xdk:function(XhB){
var XLk=this.X0U.Xd6().XVp();
var frameElement=XPB(this.xVG);
if(this.xGQ=='DGO'){
return true;}
if(this.XkK){
this.XjW(XLk);
return true;}
if(this.Xej!=XcC&&
!XhB)
{
this.Xdm();
this.XjW(XLk);}
if(!frameElement){
return false;}
var XdL;
if(XdL=Xbo(frameElement)){
XLk.Xpr('F no frameElement access ['+XdL+
'] for '+this,'warning');
return false;}
XGH(this.xVG.parent,frameElement,
this,this.Xci,XLk.XRN().XoM.cfg_twistIeDocWrite
?XoE:0);
return true;}
,Xdm:function(){
if(this.XkK||this.xGQ=='DGO'){
return true;}
var XLk=this.X0U.Xd6().XVp();
if(XLk.XRN().XnH){
this.xVG.dgop=this;
if(this.xaz!='-3'){
xA7(this.xVG,this.xVG.document.body,
'unload',XcL,xA3);
xA7(this.xVG,this.xVG.document.body,
'propertychange',X7m,
xA3);}}
else{
try{
this.xVG.dgop=this;
if(this.xaz!='-3'){
xA7(this.xVG,this.xVG.document.body,
'unload',XcL,
xA3);
xA7(this.xVG,this.xVG.document.body,
'propertychange',X7m,
xA3);}}
catch(xa8){
XLk.Xpr('F installOnunload:"'+
(new x6C(xa8))+'"','exc');}}
return true;}
,Xdz:function(){
this.XfK=false;
var xd2=this.Xdv.exec('',this);
return xd2+this.X0U.XeA(this);}
,XeC:function(){
if(this.XfK){
return 0;}
this.XfK=true;
var xd2=this.XfJ.exec('',this);
return xd2+this.X0U.XeB(this);}
,Xe7:function(){
if(this.Xe8!=Xbx||this.Xqn){
return false;}
this.Xe5=0;
this.Xqx=0;
this.Xew(this.Xdw,this.Xej,Xbw);
var XLk=this.X0U.Xd6().XVp();
XLk.XAT().xBK(
'pollLoad_'+this.X0U.XVz(),this,this.Xe9);
if(this.Xkv>=3){
XLk.Xpr('F POLL init '+
this.X0U.XVz()+' '+this);}
return true;}
,Xqy:function(XLk,XVm){
++this.Xe5;
if(this.Xe5 % 20==1&&this.Xkv>=3){
XLk.Xpr('F POLL:'+this);}
if(this.Xe8==Xbw){
if(this.Xe5*XLk.XRN().xWP
>=Xbz)
{
this.Xew(this.Xdw,this.Xej,
Xby);}}
else if(this.Xe8==Xbv&&
this.Xe5*XLk.XRN().xWP
>=Xbz)
{
this.Xe6();}
if(this.Xe8!=Xby){
return;}
this.xvD(true);
if(this.Xdw==Xbr){
if(++this.Xqx>=4){
this.Xew(this.Xdw,this.Xej,
Xbv);}
if(this.Xkv>=3){
XLk.Xpr('F POLL '+XVm.XVz()+
';cnt='+this.Xe5+
';readyCnt='+this.Xqx+
(this.Xe8==Xbv?'=>DONE':''));}}
else{
this.Xqx=0;}}
,Xe9:function(){
var XVm=this.X0U;
var XLk=XVm.Xd6().XVp();
this.xVG=this.X0U.XF3();
if(XLk.XRN().XnH){
this.Xqy(XLk,XVm);}
else{
try{
this.Xqy(XLk,XVm);}
catch(xa8){
XLk.Xpr('F POLL:"'+(new x6C(xa8)+'" in '+this),'exc');}}
return true;}
,Xe6:function(Xqw){
var XVm=this.X0U;
var XLk=XVm.Xd6().XVp();
XLk.XAT().XMM(
'pollLoad_'+XVm.XVz());
if(this.Xkv>=3){
XLk.Xpr('F POLL remove:'+XVm.XVz(),
this.Xe8==Xbv?'success':'warning');}
if(this.Xe8!=Xbv&&!Xqw){
return false;}
this.Xew(this.Xdw,this.Xej,Xbx);
this.Xe5=0;
this.Xqx=0;
if(!Xqw){
(this.xVG&&this.xVG.closed)||
XVm.Xc4(this);
XVm.Xdo()
||XVm.Xd6().XfG();}
return true;}
,Xew:function(XeG,XeK,XeI,
XdG)
{
var XeM=this.Xdw;
var XeR=this.Xej;
var XeO=this.Xe8;
if(!XeK){
XeK=(XeR==XcB
?XcB:XcE);}
if(!XeI){
XeI=XeO;}
if(XeM==XeG&&
XeR==XeK&&
XeO==XeI)
{
return true;}
var XLk=this.X0U.Xd6().XVp();
var XeT=this.XFW()
this.Xdw=XeG;
this.Xej=XeK;
this.Xe8=XeI;
if(XeM==Xbr&&
XeG!=Xbr)
{
this.XeC();}
if(this.x6K){this.X0U.XdO(this,XeM,
XeR,XeO,XdG);}
if(XeG!=XeM||XeK!=XeR){
switch(XeG){
case Xbr:
switch(XeK){
case XcA:
this.Xc8();
this.XWK(this.XdY());
this.Xdz();
break;
case XcC:{
var frameElement=XPB(this.xVG);
var XdL;
this.xGQ='XXX';
this.xfK=(frameElement
?(XdL=Xbo(frameElement)
?'['+XdL+']':frameElement.src)
:'[cannot access frameElement]');}break;
case XcD:
this.xGQ='';
this.xfK='[req '+this.Xek+',loaded '+
this.xVG.location+
(this.XfN?',pat '+this.XfN:'')+']';
break;
default:
case XcB:
this.error='Invalid new request state:'+
this.XFW();
XLk.Xpr('F '+this.error,'error');}
break;
case Xbs:
case Xbu:
this.xGQ='';
if(XeK==XcB){
this.xfK='['+this.Xek+
(this.XfN?' MATCH '+this.XfN:'')+
']';}
else{
this.xfK='?';
this.Xek='';
this.XfN='';}
break;
case Xbt:
this.xGQ='';
this.xfK='?';
this.Xek='';
this.XfN='';
if(this.Xe8==Xbx){
this.xVG=null;}
break;
default:
this.error='Invalid new load state:'+this.XFW();
XLk.Xpr('F '+this.error,'error');
break;}}
if(this.x6K){
if(this.Xkv>=2){
var XVm=this.X0U;
var XfQ=XVm.Xd6();
XLk.Xpr('F state changed from '+XeT+
':'+this+' Frames count/good/bad '+
XVm.toString(1)+'/'+
XfQ.toString(1),'info');}}
else{if(this.Xkv>=2){
XLk.Xpr('F initial state '+this,'info');}}}
,Xex:function(xMj,Xqo){
typeof(xMj)=='string'&&(this.Xek=xMj);
if(typeof(Xqo)=='boolean'){
this.Xew(Xqo?Xbs
:Xbu,XcB);
var xa7=this.Xdk(true);
if(!xa7&&!this.xaz&&this.xVG==this.xVG.top){
this.Xe7();
return false;}}
return true;}}
if(self.XI7){XI7.XJB(new XIX('../frame.js',[ '../eep.js' ]));}

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
