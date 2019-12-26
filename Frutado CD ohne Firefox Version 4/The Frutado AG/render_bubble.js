//
//
function XLI(X15,XCI,XCt){
if(!X15)return;
if(typeof(X15)=='object'){var bubble=X15;
this.x6K=false;
this.error='cloning';
var XJb=bubble.x6K;
var XGx=bubble.error;
bubble.x6K=false;
bubble.error='cloning';
XTd(bubble,this);
bubble.x6K=XJb;
bubble.error=XGx;
this.x6K=true;
this.error='cloned';
return;}
this.xfK=X15;
XLD.XHO(this,XCI,XCt);
this.Xpp(true);
this.xyO=XCt.Xtx();
this.x5q=XCt.Xr();
this.xGL=xBD(
(''+XCt.Xo()).toLowerCase());
this.XJg=this.xGL;
this.XKX=this.x7f;
this.XKY=this.x7m;
this.xBw=(this.x7p||0);
this.xBx=(this.x7q||0);
this.xFO={};
this.x5s=XCt.Xspi();
XTd(XCt.Xsy(),this.xFO);
this.xFO.X9k||(this.xFO.X9k='_default');
false&&this.XCI.XRN().Xxb&&
this.xFO.X9k.indexOf('.mht')<0&&
(this.xFO.X9k+='.mht');
this.xFO.toString=XCt.Xsy().toString;
this.xFO.XuQ||(this.xFO.XuQ='pop.wav');
if(this.xFO.minimized===true){
this.xFO.minimizable=true;}
if(this.xFO.minimizable){
this.xFO.XxZ=false;}
if(this.xFO.naked===true){
this.x5s=false;
this.xFO.autoplace=false;}
if(!this.XCI.XRN().autoplace){
this.xFO.autoplace=false;}
if(XCI.Xvz&&
(typeof(XCt.XEY)=='function'||
typeof(XCt.XEY)=='object')&&
XCt.XEY()=='0')
{
this.xFO.XLx=false;}
if(typeof(this.Xq9)!='number'){
XLI.prototype.Xq9=
typeof(XCI.XRN().XoM.cfg_miniBubbleZIndex)=='number'
?XCI.XRN().XoM.cfg_miniBubbleZIndex
:10900;}
this.Xu9=XCt.Xu9;this.XuN=XCt.XuN;this.x6m=null;
this.x4H();}
function XAb(){
XLI.prototype=new XLD;
XLI.prototype.XMc=true;
XLI.prototype.XTz=function(){
var xUG=this.x8b();
if(xUG&&this.XHY!=1){
var Xu6=this.XHY;
this.XHY=1;
var x6u=xUG.document.getElementById(this.xfK+'_main');
var x6z=xUG.document.getElementById(this.xfK+'_mini');
var Xsj=xUG.document.getElementById(this.xfK+'_mini2');
var spike=xUG.document.getElementById(this.xfK+'_spike');
var Xwj=xUG.document.getElementById(this.xfK+
'_iframeMini');
var Xwi=xUG.document.getElementById(this.xfK+
'_iframeMain');
var XLn;
++XLX;
x6u&&(x6u.style.zIndex=XLX);
if(this.Xzw){
this.XHY=2;var xnO=xUG.document.getElementById(this.xfK+'_table');
var min=xUG.document.getElementById(this.xfK+'_div_min');
var max=xUG.document.getElementById(this.xfK+'_div_max');
xnO.style.height=xnO.XyR;
xnO.style.width=xnO.XyU;
max.style.display='none';
max.style.visibility='hidden';
min.style.display='inline';
min.style.visibility='visible';
xnO.rows[1].style.display='';
xnO.rows[2].style.display='';
xnO.rows[3].style.display='';
xnO.rows[4].style.display='';
this.Xxh('restore.wav');}
else{
XLU(x6u,Xwi);
if(x6u){
if(this.XCI.Xvz){
this.XYf&&(x6u.style.display='');}
else{
this.XYf&&(x6u.style.visibility='visible')&&
(x6u.style.display='');}
x6u.style.zIndex=++XLX;
if(spike){
if(this.XCI.Xvz){
this.XYf&&(spike.style.display='');}
else{
this.XYf&&(spike.style.visibility='visible')&&
(spike.style.display='');}
spike.style.zIndex=XLX;}}
if(this.XCI.Xvz){
x6z&&(x6z.style.display='none');
Xsj&&(Xsj.style.display='none');}
else{
x6z&&(x6z.style.visibility='hidden');
Xsj&&(Xsj.style.visibility='hidden');}
Xwj&&(Xwj.style.display='none');
if(Xu6==3){this.Xxh('restore.wav');}
else{this.Xxh(this.xFO.XuQ);}
if(this.x5s&&this.xGL!='c'&&
(XLn=xUG.document.getElementById(this.xfK+'b2')))
{
var Xrv=this.XtP==1?'connect':'edge0';
var Xrw=this.XtP==1?this.xGL:
this.xGL.substr(0,1);
var XJx=(this.xGL.substr(0,1)=='n'&&
!this.xFO.movable?Xrv+'1_':Xrv+'_');
this.x8s(XLn,this.x6m+XJx+
Xrw,this.XtQ);}}
if(this.XXJ){
this.XXJ.xb1();}
this.xb1();
return xUG;}
return false;}
XLI.prototype.XTx=function(){
var xUG=this.x8b();
if(xUG&&this.XHY!=3){
var xQD=xUG.document.getElementById(this.xfK+'_min');
if(xQD&&xQD.dgo48){
if(this.XCI.XRN().xuQ>=1){
this.XCI.Xpr('RB '+this.xfK+
' minimize:button still focused','warning');}
return null;}
this.XHY=3;this.XoN();
this.Xxh('minimize.wav');
if(this.Xzw){
var xnO=xUG.document.getElementById(this.xfK+'_table');
var min=xUG.document.getElementById(this.xfK+'_div_min');
var max=xUG.document.getElementById(this.xfK+'_div_max');
xnO.XyR=xnO.style.height;
xnO.XyU=xnO.style.width;
xnO.style.width=xnO.offsetWidth+'px';
xnO.style.height='0px';
max.style.display='inline';
max.style.visibility='visible';
min.style.display='none';
min.style.visibility='hidden';
xnO.rows[1].style.display='none';
xnO.rows[2].style.display='none';
xnO.rows[3].style.display='none';
xnO.rows[4].style.display='none';
this.XHY=2;}
else{
var x6u=xUG.document.getElementById(this.xfK+'_main');
var x6z=xUG.document.getElementById(this.xfK+'_mini');
var Xsj=xUG.document.getElementById(this.xfK+'_mini2');
var spike=xUG.document.getElementById(this.xfK+'_spike');
var Xwi=xUG.document.getElementById(this.xfK+
'_iframeMain');
var Xwj=xUG.document.getElementById(this.xfK+
'_iframeMini');
XLU(x6u,Xwi);
if(x6u){if(this.XCI.Xvz){
x6u.style.display='none';
this.XYf&&x6z&&(x6z.style.display='');
this.XYf&&Xsj&&(Xsj.style.display='');}
else{
x6u.style.visibility='hidden';
Xwi&&(Xwi.style.display='none');
this.XYf&&x6z&&(x6z.style.visibility='visible');
this.XYf&&Xsj&&(Xsj.style.visibility='visible');
Xsj&&this.x8s(Xsj,this.x6m+'mini',this.XtQ,'image');}}
if(this.XCI.Xvz){
spike&&(spike.style.display='none');}
else{
spike&&(spike.style.visibility='hidden');}
if(Xsj&&Xwj){
this.Xwt(Xsj);}}
if(this.XXJ){
this.XXJ.xb1();}
this.xb1();
return xUG;}
return false;}
XLI.prototype.show=function(XIS){
var xUG=this.x8b();
var xuQ=this.XCI.XRN().xuQ>=3;
if(!xUG){
xuQ&&this.XCI.Xpr(
'RB force unshow(frame cannot be resolved)','warning');
this.XYf=false;
return false;}
if(this.XHY>0&&XIS!=this.XYf){
var x6u=xUG.document.getElementById(this.xfK+'_main');
var x6z=xUG.document.getElementById(this.xfK+'_mini');
var Xsj=xUG.document.getElementById(this.xfK+'_mini2');
var spike=xUG.document.getElementById(this.xfK+'_spike');
var Xwi=xUG.document.getElementById(this.xfK+
'_iframeMain');
var Xwj=xUG.document.getElementById(this.xfK+
'_iframeMini');
if(XIS){
switch(this.XHY){
default:
case 1:
xuQ&&this.XCI.Xpr('RB show state 1');
x6u&&(x6u.style.visibility='visible');
x6z&&(x6z.style.visibility='hidden');
Xsj&&(Xsj.style.visibility='hidden');
spike&&(spike.style.visibility='visible');
Xwi&&(this.Xws(x6u,true));
Xwj&&(Xwj.style.display='none');
break;
case 2:
xuQ&&this.XCI.Xpr('RB show state 2');
x6u&&(x6u.style.visibility='visible');
x6z&&(x6z.style.visibility='visible');
Xsj&&(Xsj.style.visibility='visible');
spike&&(spike.style.visibility='hidden');
Xwi&&(this.Xws(x6u,true));
Xwj&&(this.Xwt(Xsj,true));
break;
case 3:
xuQ&&this.XCI.Xpr('RB show state 3');
x6u&&(x6u.style.display='none');
x6z&&(x6z.style.display='');
Xsj&&(Xsj.style.display='');
spike&&(spike.style.display='none');
Xwi&&(Xwi.style.display='none');
Xwj&&(this.Xwt(Xsj,true));
break;}
this.XYf=true;}
else{
xuQ&&this.XCI.Xpr('RB unshow');
x6u&&(x6u.style.visibility='hidden');
x6z&&(x6z.style.visibility='hidden');
Xsj&&(Xsj.style.visibility='hidden');
spike&&(spike.style.visibility='hidden');
Xwi&&(Xwi.style.display='none');
Xwj&&(Xwj.style.display='none');
this.XYf=false;}}
else{
this.XYf=(XIS?true:false);
xuQ&&this.XCI.Xpr('RB show(state 0)'+XIS);}
return this.XYf;}
XLI.prototype.onscroll=function(XV6){
return(this.xFO.xcS&&this.XXJ?
this.XXJ.onscroll(XV6):
this.xb1());}
XLI.prototype.Xpz=function(){
return this.Xpy;}
XLI.prototype.XqA=function(){
return this.Xpw;}
XLI.prototype.XqB=function(){
return this.Xpx;}
XLI.prototype.xCU=function(){
var xd2=new XAi(0,0,0,0);
var XM6=(this.x6U()==null);
var xUG=this.x8b();
if(xUG){
var x6u=xUG.document.getElementById(this.xfK+'_main');
var XML;
x6u&&(XML=XPF(x6u,true));
if(this.XCI.XFI_('moz','1')&&x6u){
var xnO=xUG.document.getElementById(this.xfK+'_table');
xnO&&XML.add(XPF(xnO,true));}
XML&&(xd2=XML);}
XM6&&(this.XL0());
return xd2;}
XLI.prototype.XVv=function(XM0){
var xd2=[];
var XM6=(this.x6U()==null);
var xUG=this.x8b();
if(xUG){
var x6u=xUG.document.getElementById(this.xfK+'_main');
var spike=xUG.document.getElementById(this.xfK+'_spike');
var XML;
x6u&&(XML=XPF(x6u,XM0));
if(this.XCI.XFI_('moz','1')&&x6u){
var xnO=xUG.document.getElementById(this.xfK+'_table');
xnO&&XML.add(XPF(xnO,XM0));}
XML&&(xd2[xd2.length]=XML);
spike&&(xd2[xd2.length]=XPF(spike,XM0));}
XM6&&(this.XL0());
return xd2;}
XLI.prototype.XVw=function(XM0){
var XM6=(this.x6U()==null);
var element=this.X8Z();
if(!element){
if(this.XCI.XRN().xuQ>=1){
this.XCI.Xpr('RB getTargetPos():element missing','error');}
return{x:0,y:0};}
var xoL=XEA(element,XM0);
var size=xaQ(element);
xd2={
x:xoL.x+size.x*this.x7f+(this.x7p||0)
,y:xoL.y+size.y*this.x7m+(this.x7q||0)}
XM6&&(this.XL0());
return xd2;}
XLI.prototype.XpF=function(){
return this.XXJ;}
XLI.prototype.XW1=function(XXB){
this.x7p=XXB.x;
this.x7q=XXB.y;
return true;}
XLI.prototype.XqC=function(xtg){
this.Xpy=typeof(xtg)=='boolean'?xtg:true;}
XLI.prototype.XqD=function(xtg){
this.Xpw=typeof(xtg)=='boolean'?xtg:true;}
XLI.prototype.XqE=function(xtg){
this.Xpx=typeof(xtg)=='boolean'?xtg:true;}
XLI.prototype.XXG=function(XXJ){
this.XXJ=XXJ;
return true;}
XLI.prototype.XFV=function(){
return this.XHY;}
XLI.prototype.Xsy=function(){
return this.xFO;}
XLI.prototype.XLS=function(){
return this.XsL;}
XLI.prototype.XLW=function(){
return Xrb;}
XLI.prototype.XBm=function(){
return this.B_;}
XLI.prototype.XDC=function(){
return this.BT_;}
XLI.prototype.Xw=function(){
return this.x7Q;}
XLI.prototype.Xh=function(){
return this.xdH;}
XLI.prototype.XKa=function(){
return this.x5s;}
XLI.prototype.Xo=function(){
return this.xGL;}
XLI.prototype.XLT=function(){
return this.XJg;}
XLI.prototype.toString=function(){
var xbK=XLD.prototype.toString.XHO(this);
with(this){
xbK+=',style:'+xFO+',ori:'+xGL+
(x5q?',replace':',append')+
(x5s?',spike':',no spike')+
',t:"'+(xyO.length>50?
xyO.substr(0,46)+' ...':xyO)+
',autopl-count:'+XJM;}
return 'RenderBubble={'+xbK+'}';}
XLI.prototype.xyO='';
XLI.prototype.x5q=true;
XLI.prototype.xGL='c';
XLI.prototype.XJg=null;
XLI.prototype.XKX=null;
XLI.prototype.XKY=null;
XLI.prototype.xFO=null;
XLI.prototype.x5s=true;
XLI.prototype.XYf=true;
XLI.prototype.Xpy=false;XLI.prototype.Xpw=false;XLI.prototype.Xpx=false;XLI.prototype.XXJ=null;XLI.prototype.XaP=null;XLI.prototype.XqM=null;
XLI.prototype.Xxn=false;
XLI.prototype.Xxm=XRl;
XLI.prototype.x6m=null;
XLI.prototype.Xq9=null;
XLI.prototype.XHY=0;XLI.prototype.Xw9=false;
XLI.prototype.Xwa=false;
XLI.prototype.XIa=false;
XLI.prototype.x7X=null;
XLI.prototype.XRt=null;
XLI.prototype.L_=0;XLI.prototype.T_=0;
XLI.prototype.xPC=0;XLI.prototype.xNB=0;
XLI.prototype.XCR=0;
XLI.prototype.x2G=0;
XLI.prototype.B_=0;XLI.prototype.BT_=0;
XLI.prototype.XNY={
n:{L:-10,xmB:0,W:20,XOn:61,h:61,x4C:10},
ne:{L:-40,xmB:0,W:40,XOn:61,h:61,x4C:-10},
e:{L:-61,xmB:0,W:61,XOn:30,h:30,x4C:20},
se:{L:-40,xmB:-61,W:40,XOn:61,h:71,x4C:-10},
s:{L:-10,xmB:-61,W:20,XOn:61,h:61,x4C:null},
sw:{L:0,xmB:-61,W:40,XOn:61,h:50,x4C:10},
w:{L:0,xmB:0,W:61,XOn:30,h:null,x4C:null},
nw:{L:0,xmB:0,W:40,XOn:61,h:-61,x4C:10},
c:{L:0,xmB:0,W:0,XOn:0,h:null,x4C:null}};
XLI.prototype.XJM=0;
XLI.prototype.XsL=null;
var Xrb={
XIJ:{name:'version_',
Xrq:1,
Xsv:'version'},
X17:{name:'newStyle_',
Xrq:0,
Xsv:'newStyl'},
Xzw:{name:'enlightStyle_',
Xrq:0,
Xsv:'enlightStyl'},
Xzx:{name:'fontColor_',
Xrq:-1,
Xsv:'fontColor'},Xzu:{name:'backgroundColor_',
Xrq:-1,
Xsv:'bgColor'},Xrh:{name:'animateButtons_',
Xrq:0,
Xsv:'aniBtns'},
XtQ:{name:'useGIFs_',
Xrq:0,
Xsv:'gif'},
XxY:{name:'textStyle_',
Xrq:'StyleA',
Xsv:'textStyle'},
XsK:{name:'imagesBorderWidth_',
Xrq:1,
Xsv:'iBW'},
Xsa:{name:'innerBorder_',
Xrq:9,
Xsv:'iB'},
Xsz:{name:'spikeDockWidth_',
Xrq:20,
Xsv:'spDW'},
xBG:{name:'spikeWidth_',
Xrq:40,
Xsv:'spWth'},
xBF:{name:'spikeHorHeight_',
Xrq:30,
Xsv:'spHHeight'},
XtA:{name:'spikeLength_',
Xrq:61,
Xsv:'spLen'},
Xsx:{name:'spikeDockOverlap_',
Xrq:0,
Xsv:'spDO'},
XtP:{name:'useConnects_',
Xrq:0,
Xsv:'useCon'},
Xrl:{name:'captionBorderHeight_',
Xrq:0,
Xsv:'cBH'},
Xrm:{name:'captionInnerHeight_',
Xrq:10,
Xsv:'cIH'},
Xs9:{name:'images_min_width_',
Xrq:8,
Xsv:'iMinW'},
Xs2:{name:'images_min_height_',
Xrq:8,
Xsv:'iMinH'},
XsT:{name:'images_close_width_',
Xrq:8,
Xsv:'iCloW'},
XsM:{name:'images_close_height_',
Xrq:8,
Xsv:'iCloH'},
Xs1:{name:'images_max_width_',
Xrq:5,
Xsv:'iMaxW'},
XsU:{name:'images_max_height_',
Xrq:4,
Xsv:'iMaxH'},
XxP:{name:'images_max_divWidth_',
Xrq:16,
Xsv:'iMaxdivW'},
XxO:{name:'images_max_divHeight_',
Xrq:16,
Xsv:'iMaxdivH'},
Xs7:{name:'images_min_offX_',
Xrq:-2,
Xsv:'iMinX'},
Xs8:{name:'images_min_offY_',
Xrq:2,
Xsv:'iMinY'},
XsR:{name:'images_close_offX_',
Xrq:-6,
Xsv:'iCloX'},
XsS:{name:'images_close_offY_',
Xrq:2,
Xsv:'iCloY'},
XsZ:{name:'images_max_offX_',
Xrq:4,
Xsv:'iMaxX'},
Xs0:{name:'images_max_offY_',
Xrq:4,
Xsv:'iMaxY'},
Xs6:{name:'images_min_moz_width_',
Xrq:8,
Xsv:'iMinMozW'},
Xs3:{name:'images_min_moz_height_',
Xrq:8,
Xsv:'iMinMozH'},
XsQ:{name:'images_close_moz_width_',
Xrq:8,
Xsv:'iCloMozW'},
XsN:{name:'images_close_moz_height_',
Xrq:8,
Xsv:'iCloMozH'},
XsY:{name:'images_max_moz_width_',
Xrq:8,
Xsv:'iMaxMozW'},
XsV:{name:'images_max_moz_height_',
Xrq:8,
Xsv:'iMaxMozH'},
Xs4:{name:'images_min_moz_offX_',
Xrq:-2,
Xsv:'iMinMozX'},
Xs5:{name:'images_min_moz_offY_',
Xrq:2,
Xsv:'iMinMozY'},
XsO:{name:'images_close_moz_offX_',
Xrq:-7,
Xsv:'iCloMozX'},
XsP:{name:'images_close_moz_offY_',
Xrq:2,
Xsv:'iCloMozY'},
XsW:{name:'images_max_moz_offX_',
Xrq:4,
Xsv:'iMaxMozX'},
XsX:{name:'images_max_moz_offY_',
Xrq:4,
Xsv:'iMaxMozY'},
Xvv:{name:'images_help_width_',
Xrq:16,
Xsv:'iHelpW'},
Xvu:{name:'images_help_height_',
Xrq:16,
Xsv:'iHelpH'},
Xvt:{name:'images_goon_width_',
Xrq:16,
Xsv:'iGoOnW'},
Xvs:{name:'images_goon_height_',
Xrq:16,
Xsv:'iGoOnH'},
Xw3:{name:'image_included_',
Xrq:'',
Xsv:'iInc'},
XxN:{name:'image_included_width_',
Xrq:0,
Xsv:'iIncWidth'},
XxF:{name:'image_included_height_',
Xrq:0,
Xsv:'iIncHeight'},
XxG:{name:'image_included_left_',
Xrq:0,
Xsv:'iIncLeft'},
XxL:{name:'image_included_top_',
Xrq:0,
Xsv:'iIncTop'},
XxM:{name:'image_included_valign_',
Xrq:'top',
Xsv:'iIncVAlign'},
Xwp:{name:'image_included_align_',
Xrq:'left',
Xsv:'iIncAlign'},
XxI:
{name:'image_included_placeholder_width_',
Xrq:-1,
Xsv:'iIncPHldWidth'},
XxH:
{name:'image_included_placeholder_height_',
Xrq:-1,
Xsv:'iIncPHldHeight'},
XxK:{name:'image_included_space_',
Xrq:0,
Xsv:'iIncSpc'},
XxJ:{name:'image_included_position_',
Xrq:'w',
Xsv:'iIncPos'}}
XLI.prototype.Xrg=function(Xrk){
if(this.Xzw){
this.xFO.XxZ=true;
this.x5s=false;}
this.B_=this.Xsa+
this.XsK;
this.BT_=this.Xrm+
2*this.XsK+
(this.XIJ>=2?
this.Xrl:0);
if(Xrk){this.XNY={
n:{L:-Math.round(this.Xsz/2),
xmB:0,
W:this.Xsz,
XOn:this.XtA,
h:this.XtA,
x4C:this.B_},
ne:{L:-this.xBG,
xmB:0,
W:this.xBG,
XOn:this.XtA,
h:this.XtA,
x4C:-this.B_},
e:{L:-this.XtA,
xmB:0,
W:this.XtA,
XOn:this.xBF,
h:this.xBF,
x4C:this.Xsz},
se:{L:-this.xBG,
xmB:-this.XtA,
W:this.xBG,
XOn:this.XtA,
h:this.XtA+this.B_,
x4C:-this.B_},
s:{L:-Math.round(this.Xsz/2),
xmB:-this.XtA,
W:this.Xsz,
XOn:this.XtA,
h:this.XtA,
x4C:0},
sw:{L:0,
xmB:-this.XtA,
W:this.xBG,
XOn:this.XtA,
h:this.XtA-this.B_,
x4C:this.B_},
w:{L:0,
xmB:0,
W:this.XtA,
XOn:this.xBF,
h:this.xBF,
x4C:null},
nw:{L:0,
xmB:0,
W:this.xBG,
XOn:this.XtA,
h:-this.XtA,
x4C:this.B_},
c:{L:0,xmB:0,W:0,XOn:0,h:0,x4C:0}}}
if(this.xFO.naked){
this.L_=0;
this.T_=0;
this.xPC=0;
this.xNB=0;
this.B_=0;
this.BT_=0;
this.x2G=0;
this.XCR=0;}
else{
var XNX=this.XNY[this.xGL];
if(!XNX){
this.x6K=false;
this.error='Wrong orientation:"'+this.xGL+'"';
return;}
this.L_=XNX.L;
this.T_=XNX.xmB;
this.xPC=XNX.W;
this.xNB=XNX.XOn;
if(!this.x5s&&!(this.XCI.XRN().Xbh & 2048)){
this.x2G=XNX.h;
this.XCR=XNX.x4C;}}}
XLI.prototype.x4H=function(){
this.XsL=
new Xr8(Xrb,
this.XCI.XRN().xuQ>=3?
XAU:null
);
this.XsL.Xri(this);
this.Xrg(false);}
XLI.prototype.x4o=function(XCt){
if(!XCt.display||!XCt.visibility){
return this.Xnd();}
if(this.xB3){
this.XCI.Xjt()&&
this.XCI.Xjt().xBU(this.xFO.XpP,
this.Xud(this.XCO(this.xyO)));
return true;}
var x6u=this.x8o(this.xfK+'_main',true);
var bubble=this.x8o(this.xfK,true)||x6u;
if(!bubble){
if(this.XCI.XRN().xuQ>=1){
this.XCI.Xpr('RB "'+this.xfK+
'" has gone. No Refresh','warning');}
return false;}
var xHL=XpA(bubble);
this.x8b();
if(!this.xVG){
return false;}
this.xFO.cover&&this.XwY(this.xFO.XLx?
xVD(XCt.x5W):XCt.x5W);
this.xFO.cover&&this.XwZ(this.xFO.XLx?
xVD(XCt.x5W):XCt.x5W);
var style;
var x6u=XCt.x6u||this.x8o(this.xfK+'_main');
var body=(this.xFO.naked
?x6u:this.x8o(this.xfK+'_bd'));
var spike=XCt.spike||
this.x8o(this.xfK+'_spike',true);
var x6z=XCt.x6z||this.x8o(this.xfK+'_mini');
var Xsj=XCt.Xsj||this.x8o(this.xfK+'_mini2');
var x7e=(XCt.x7d.x+XCt.x8t.x*this.x7f+
(this.x7p||0));
var x7l=(XCt.x7d.y+XCt.x8t.y*this.x7m+
(this.x7q||0));
if(this.XXJ){if(this.XuR==this.XXJ.XuR){
if(this.XCI.XRN().xuQ>=1){
this.XCI.Xpr('RB "'+this.xfK+' '+
'" was just refreshed.','info');}
return true;}
this.XuR=this.XXJ.XuR;
if(this.XCI.XRN().xuQ>=1){
this.XCI.Xpr('RB "'+this.xfK+' '+
'" lastRefreshCtr='+this.XuR,'info');}}
if(this.xFO.Xta||this.XXJ&&
this.XXJ.xFO&&
this.XXJ.xFO.Xta)
{
if(this.XXJ&&this.XXJ.xcF){
var Xue=this.XXJ.xcF;}
else{
Xue=this.xcF;}
if(XPa(Xue)){
return this.Xnd();}}
if(!x6u||!body||
(!spike&&this.xGL!='c'&&this.x5s))
{
if(this.XCI.XRN().xuQ>=1){
this.XCI.Xpr('RB "'+this.xfK+
'"(or part)has gone. No Refresh','warning');}
return false;}
if(spike){
style=spike.style;
if(this.XHY!=2){
var x7r=XEA(spike);
style.left=Math.floor(x7e+parseInt(style.left)-
x7r.x+this.L_)+'px';
style.top=Math.floor(x7l+parseInt(style.top)-
x7r.y+this.T_)+'px';}}
if(XRl&&
this.XCI.XRN().xCz!='')
{
if((this.XXJ&&this.XXJ.xCx)||
(!this.XXJ&&this.xCx))
{
this.XXJ&&(this.XXJ.xCx=false);
this.xCx=false;
x6u&&(x6u.style.filter=this.XCI.XRN().xCz);
x6u&&x6u.filters[0].Apply();}}
var XLn,B,xbK;
var x5O=0;
var x5S=0;
var x7n=XEA(x6u);
style=x6u.style;
this.XRt=body.offsetHeight||body.clientHeight;
this.Xuk=body.offsetWidth||body.clientWidth;
if(this.Xuk<=0||
this.XRt<=0)
{
var Xjj=this.XXJ||this;
this.XCI.XlH&&this.XCI.XlH.xb1();
var X1K=function(){
		Xjj.xb1();}
if(this.XCI.XRN().xuQ>=1){
this.XCI.Xpr('RB "'+this.xfK+
'" geometry not still ready... No Refresh. Trying later.','warning');}
style=null;
window.setTimeout(X1K,100);
return true;}
this.xDB=this.XRt;
this.xDC=this.Xuk;
if(this.XCI.XRN().xuQ>=2){
xbK='el '+XCt.x8t.x+'x'+XCt.x8t.y+
'@'+XCt.x7d.x+','+XCt.x7d.y+
';ev-pos '+this.x7f+','+this.x7m+
';off '+(this.x7p||0)+','+(this.x7q||0)+
':'+x7e+','+x7l+
';style@'+style.left+','+style.top+
';main '+this.Xuk+'x'+this.XRt+
'@'+x7n.x+','+x7n.y;}
switch(this.xGL){
case 'ne':
if(this.XHY!=2){
if(spike){
style.left=Math.floor(x7e+parseInt(style.left)-
x7n.x-this.Xuk-this.B_+this.XCR)+
'px';
style.top=Math.floor(x7l+parseInt(style.top)-
x7n.y+this.xNB-this.x2G-
this.Xsx)+'px';}else{
style.left=Math.floor(x7e+parseInt(style.left)-
x7n.x-this.Xuk-2*this.B_)+
'px';
style.top=Math.floor(x7l+parseInt(style.top)-
x7n.y)+'px';}}
x5O=-this.XxP+6;
x5S=-4;
break;
case 'n':
if(this.XHY!=2){
style.left=Math.floor(x7e+parseInt(style.left)-
x7n.x-(this.Xuk/2)-
this.B_)+'px';
style.top=Math.floor(x7l+parseInt(style.top)-
x7n.y+this.xNB-this.x2G-
this.Xsx)+'px';
if(!this.xFO.naked&&spike){
if(this.XHY==1){
B=Math.round((this.Xuk-this.Xsz)/2);
XLn=this.x8o(this.xfK+'b1');
XLn&&(XLn.style.width=B+'px');
XLn=this.x8o(this.xfK+'b3');
XLn&&(XLn.style.width=B+'px');}}}
x5O=-this.XxP/2;
x5S=-4;
break;
case 'nw':
if(this.XHY!=2){
style.left=Math.floor(x7e+parseInt(style.left)-
x7n.x-this.B_+this.XCR)+'px';
style.top=Math.floor(x7l+parseInt(style.top)-
x7n.y+this.xNB+this.x2G-
this.Xsx)+'px';}
x5O=-6;
x5S=-4;
break;
case 'se':
if(this.XHY!=2){
if(spike){
style.left=Math.floor(x7e+parseInt(style.left)-
x7n.x-this.Xuk-this.B_+this.XCR)+
'px';
style.top=Math.floor(x7l+parseInt(style.top)-x7n.y-
this.xNB+this.x2G-this.XRt-this.B_+
this.XCR-this.BT_+
this.Xsx)+'px';}else{
style.left=Math.floor(x7e+parseInt(style.left)-
x7n.x-this.Xuk-2*this.B_)+
'px';
style.top=Math.floor(x7l+parseInt(style.top)-x7n.y-
this.XRt-this.B_-this.BT_)+'px';}}
x5O=-this.XxP+6;
x5S=-this.XxO+4;
break;
case 's':
if(this.XHY!=2){
style.left=Math.floor(x7e+parseInt(style.left)-
x7n.x-(this.Xuk/2)-
this.B_)+'px';
style.top=Math.floor(x7l+parseInt(style.top)-x7n.y-
this.xNB+this.x2G-this.XRt-this.B_-
this.BT_+this.Xsx)+
'px';
if(!this.xFO.naked&&spike){
if(this.XHY==1){
B=Math.round((this.Xuk-this.Xsz)/2);
XLn=this.x8o(this.xfK+'b1');
XLn&&(XLn.style.width=B+'px');
XLn=this.x8o(this.xfK+'b3');
XLn&&(XLn.style.width=B+'px');}}}
x5O=-this.XxP/2;
x5S=-this.XxO+4;
break;
case 'sw':
if(this.XHY!=2){
style.left=Math.floor(x7e+parseInt(style.left)-
x7n.x-this.B_+this.XCR)+'px';
style.top=Math.floor(x7l+parseInt(style.top)-x7n.y-
this.xNB+this.x2G-this.XRt-this.B_+
this.XCR-this.BT_+
this.Xsx)+'px';}
x5O=-6;
x5S=-this.XxO+4;
break;
case 'w':
if(this.XHY!=2){
if(spike){
style.left=Math.floor(x7e+parseInt(style.left)-
x7n.x+this.xPC-this.Xsx)+
'px';
style.top=Math.floor(x7l+parseInt(style.top)-
x7n.y-this.BT_+this.xBF-
this.Xsz)+
'px';}else{
style.left=Math.floor(x7e+parseInt(style.left)-
x7n.x)+'px';
style.top=Math.floor(x7l+parseInt(style.top)-
x7n.y-(this.XRt/2)-this.BT_)+
'px';}
if(!this.xFO.naked&&spike){
if(this.XHY==1){
XLn=this.x8o(this.xfK+'b3');
XLn&&(XLn.style.height=this.XRt-
(this.Xsz)+
'px');}}}
x5O=-4;
x5S=-this.XxO/2;
break;
case 'e':
if(this.XHY!=2){
if(spike){
style.left=Math.floor(x7e+parseInt(style.left)-
x7n.x-this.Xuk-this.xPC-
this.B_-this.B_+this.Xsx)+
'px';
style.top=Math.floor(x7l+parseInt(style.top)-
x7n.y-this.BT_+this.xBF-
this.Xsz)+
'px';}else{
style.left=Math.floor(x7e+parseInt(style.left)-
x7n.x-this.Xuk-2*this.B_)+
'px';
style.top=Math.floor(x7l+parseInt(style.top)-
x7n.y-(this.XRt/2)-this.BT_)+
'px';}
if(!this.xFO.naked&&spike){
if(this.XHY==1){
XLn=this.x8o(this.xfK+'b3');
XLn&&(XLn.style.height=this.XRt-
(this.Xsz)+
'px');}}}
x5O=-this.XxP+4;
x5S=-this.XxO/2;
break;
case 'c':
var xbK='';
if(this.XHY!=2){
style.left=Math.floor(x7e+parseInt(style.left)-
x7n.x-(this.Xuk/2)-
this.B_)+'px';
style.top=Math.floor(x7l+parseInt(style.top)-
x7n.y-(this.XRt/2)-
this.BT_)+'px';}
x5O=-this.XxP/2;
x5S=-this.XxO/2;
break;
default:
break;}
if(this.XCI.XRN().xuQ>=3){
this.XCI.Xpr('RB "'+this.xfK+'" refresh:'+
xbK+'=>'+style.left+','+style.top);}
var XII=false;
if(this.xGL=='c'&&this.XAo&&!this.xFO.xcS){
var XYd=XPF(x6u,true);
var element=this.X8Z();
if(element){
this.xHF([ element,XYd ],true);}}
else{
if(this.XHY==1&&
this.XFZ&&this.xFO.autoplace&&
(!this.XIa||
(this.XXJ&&!this.XXJ.XIa))&&
this.xGL!='c')
{
XII=this.XJN(XCt);}}
if(XII){
if(this.XCI.XRN().xuQ>=3){
this.XCI.Xpr('RB "'+this.xfK+'":REAPPLY to follow.');}}
else{
this.XYf&&spike&&XAa(spike.style,'visibility',
this.XHY==1?'visible':'hidden');
this.XYf&&XAa(style,'visibility',
this.XHY==3?'hidden':'visible');
if(x6z){
var x7o=XEA(x6z);
style=x6z.style;
style.left=(x7e+parseInt(style.left)-x7o.x+x5O)+
'px';
style.top=(x7l+parseInt(style.top)-x7o.y+x5S)+'px';
x6z.title=XRl?(body.innerText||body.x9A||''):
(body.innerText||
body.x9A||
'').replace(/\r\n/g,' ');
this.XYf&&XAa(style,'visibility',
this.XHY==3||this.XHY==2 
?'visible':'hidden');}
if(Xsj){
var x7o=XEA(Xsj);
style=Xsj.style;
style.left=(x7e+parseInt(style.left)-x7o.x+x5O)+
'px';
style.top=(x7l+parseInt(style.top)-x7o.y+x5S)+'px';
Xsj.title=XRl?(body.innerText||body.x9A||''):
(body.innerText||
body.x9A||
'').replace(/\r\n/g,' ');
this.XYf&&XAa(style,'visibility',
this.XHY==3||this.XHY==2 
?'visible':'hidden');}
if(this.XHY==3){
Xsj&&this.Xwt(Xsj,true);}
else{
if(this.XHY==2){
Xsj&&this.Xwt(Xsj,true);}
this.Xws(x6u,true);}}
if(this.Xzw&&this.XHY==3){
this.XHY=2;
this.XTx();}
if((this.XCI.XRN().Xbh & 1)==1){
if((this.xcF.tagName=='BODY')&&
(!this.x5s||(this.xGL=='c')))
{
if(this.XXJ){
var element=this.XXJ.X8Z();
if(this.XXJ.xcF.tagName=='BODY'){
XzT(this,true);}}
else{
XzT(this,true);}}}
if(this.xFO.xCV){
this.xFO.xCV=false;
if(this.xGL=='c'){
XYd=this.xCU();
var xCL;
var XMN=this.XCI.x6b();
if(X9H=XMN.xC2(XYd,this)){
var x=XYd.left+XYd.width/2;
var y=XYd.top+XYd.height/2;
var xCM=XPF(this.XCI.XVy().document.body,
true,
X8x);
if(xCM.width>xCM.height){
var xCQ=0.90;
var xCO=0.10;
var xCT=0.90;
var xCP=0.10*xCM.height/xCM.width;}
else{
xCQ=0.90;
xCO=0.10*xCM.width/xCM.height;
xCT=0.90;
xCP=0.10;}
while(((xCQ>0)||(xCT>0))&&X9H){
var xCX=x*xCQ;
var xCY=y*xCT;
xCQ-=xCO;
xCT-=xCP;
var xYk=[ 'n','ne','e','se','s','sw','w','nw' ];
for(var n=0;(n<xYk.length)&&X9H;n++){
switch(xYk[n]){
case 'ne':var xCX=x*(2-xCQ);
var xCY=y*xCT;
break;
case 'e':xCX=x*(2-xCQ);
xCY=y;
break;
case 'se':xCX=x*(2-xCQ);
xCY=y*(2-xCT);
break;
case 's':xCX=x;
xCY=y*(2-xCT);
break;
case 'sw':xCX=x*xCQ;
xCY=y*(2-xCT);
break;
case 'w':xCX=x*xCQ;
xCY=y;
break;
case 'nw':xCX=x*xCQ;
xCY=y*xCT;
break;
case 'n':xCX=x;
xCY=y*xCT;
break;}
var XXN=XYd.XCf();
XXN.moveBy(Math.round(xCX-x),Math.round(xCY-y));
if(XXN.bottom+xCM.top>xCM.bottom){
XXN.top=xCM.bottom-XXN.height-xCM.top;}
if(XXN.right+xCM.left>xCM.right){
XXN.left=xCM.right-XXN.width-xCM.left;}
if(XXN.top<-xCM.top){
XXN.moveBy(0,-xCM.top-XXN.top);}
if(XXN.left<-xCM.left){
XXN.moveBy(-xCM.left-XXN.left,0);}
if(X9H=XMN.xC2(XXN,this)){
if(xCL){
if(xCL.width*xCL.height<
X9H.width*X9H.height)
{
xCL=X9H;}}
else{
xCL=X9H;}}}}
if(!X9H){
xCX=XXN.left;
xCY=XXN.top;}
else{
xCX=xCL.left;
xCY=xCL.top;}
x6u.style.left=xCX+'px';
x6u.style.top=xCY+'px';
XzT(this,true);}}}
if(XRl&&
this.XCI.XRN().xCz!=''&&
x6u.filters[0])
{
if((this.XXJ&&this.XXJ.xCy)||
(!this.XXJ&&this.xCy))
{
this.XXJ&&(this.XXJ.xCy=false);
this.xCy=false;
x6u&&x6u.filters[0].Play();}}
if(XSN){
var Xjj=this;
var X1K=function(){
Xjj.xDA.XHO(Xjj);}
this.xVG.setTimeout(X1K,1);}
else if(X0a){var XtY=this.xVG;
var X1K=function(){
try{
XtY.document.body.style.visibility='visible';
XtY.document.body.style.visibility='';}
catch(xa8){};}
this.xVG.setTimeout(X1K,1);}
style=null;
return true;}
XLI.prototype.xDA=function(){
try{
var x6u=this.x8o(this.xfK+'_main');
var body=(this.xFO.naked
?x6u:this.x8o(this.xfK+'_bd'));
this.XRt=body.offsetHeight||body.clientHeight;
this.Xuk=body.offsetWidth||body.clientWidth;
if(this.xDB!=this.XRt||
this.xDC!=this.Xuk)
{
if(this.XXJ){
this.XXJ.xb1();}
else{
this.xb1();}}}
catch(xa8){}}
XLI.prototype.XLv={
n:[ 'n','ne','e','se','s','sw','w','nw' ],
ne:[ 'ne','e','se','s','sw','w','nw','n' ],
e:[ 'e','se','s','sw','w','nw','n','ne' ],
se:[ 'se','s','sw','w','nw','n','ne','e' ],
s:[ 's','sw','w','nw','n','ne','e','se' ],
sw:[ 'sw','w','nw','n','ne','e','se','s' ],
w:[ 'w','nw','n','ne','e','se','s','sw' ],
nw:[ 'nw','n','ne','e','se','s','sw','w' ]};
XLI.prototype.XJN=function(XCt){
++this.XJM;
if(this.XXJ){
var Xwo=false;
for(var path in this.XXJ.XV2){
Xwo=true;
break;}
if(!Xwo){var x2H={};
if(!this.XXJ.x6O(x2H)){
return false;}
var xGk=x2H;}
else{
return false;}}
else{
xGk=XCt;}
var XLn;var x6u=this.x8o(this.xfK+'_main',true);
var xnO=this.x8o(this.xfK+'_table',true);
var bubble=this.x8o(this.xfK,true)||x6u;
var xHL=XpA(bubble);
var X2A=this.Xd4().XdU().XVh('').x6U();
if(!X2A){return false;}
var Xxy={};
var XJ9;
if(this.XXJ){
XJ9=xBE(this.XXJ,xGk,
this.XCI.XFI_('moz','1')?
xnO:x6u,
this.xGL,true);
var Xxv=XJ9.width*XJ9.height;
var x4K=XPD(X2A,this.xVG);
if(XJ9.left<x4K.x){XJ9.left=x4K.x;}
if(XJ9.right<x4K.x){XJ9.right=x4K.x;}
XJP=XCF(this.xVG,
XJ9,xHL,
this.XCI.XRN().xuQ>=3?
XAU:null,
Xxy);
if(Xxy.XML.width<0){
Xxy.XML.width=0;}
if(Xxy.XML.height<0){
Xxy.XML.height=0;}
Xxy.Xxx=Xxy.XML.width*Xxy.XML.height;
var XJf=self.parent.document.getElementById('trainer_gui_frame');
if(XJf){
var Xxs=new XAi(XJf.offsetLeft,
XJf.offsetTop,
XJf.offsetLeft+XJf.offsetWidth,
XJf.offsetTop+XJf.offsetHeight);
x4K=XPD(XJf.contentWindow.parent,this.xVG);
Xxs.moveBy(x4K.x,x4K.y);
Xxy.XML=Xxy.XML.Xxw(Xxs);
if(Xxy.XML.width<0){
Xxy.XML.width=0;}
if(Xxy.XML.height<0){
Xxy.XML.height=0;}
Xxy.Xxx=Xxy.XML.width*Xxy.XML.height;}
if(Xxv!=Xxy.Xxx){
XJP=true;}}
else{
XJP=XCF(this.xVG,
this.XCI.XFI_('moz','1')?
xnO:x6u,
xHL,
this.XCI.XRN().xuQ>=3?
XAU:null,
Xxy);}
if(!XJP){
return false;}
var Xxu=Xxy.Xxx;
var Xxt=this.xGL;
var Xxr=Xxy.Xxx;
var Xxp=this.xGL;
var Xxq=new XAi();
var XMD=this.XLv[this.XJg]||[];
var XJT='';
for(var XJe=0;XJe<XMD.length&&XJP;++XJe){
XJT=XMD[XJe];
if(XJT!=this.xGL){
Xxy={};
if(this.XXJ){
XJ9=xBE(this.XXJ,xGk,
this.XCI.XFI_('moz','1')?
xnO:x6u,
XJT,false);
Xxv=XJ9.width*XJ9.height;
x4K=XPD(X2A,this.xVG);
if(XJ9.left<x4K.x){XJ9.left=x4K.x;}
if(XJ9.right<x4K.x){XJ9.right=x4K.x;}
XJ9.id=XJT;
XJP=XCF(this.xVG,
XJ9,xHL,
this.XCI.XRN().xuQ>=2?
XAU:null,
Xxy);
XJf=self.parent.document.getElementById('trainer_gui_frame');
if(XJf){
Xxs=new XAi(XJf.offsetLeft,
XJf.offsetTop,
XJf.offsetLeft+XJf.offsetWidth,
XJf.offsetTop+XJf.offsetHeight);
x4K=XPD(XJf.contentWindow.parent,this.xVG);
Xxs.moveBy(x4K.x,x4K.y);
Xxy.XML=Xxy.XML.Xxw(Xxs);
if(Xxy.XML.width<0){
Xxy.XML.width=0;}
if(Xxy.XML.height<0){
Xxy.XML.height=0;}
Xxy.Xxx=Xxy.XML.width*Xxy.XML.height;}
if(Xxv!=Xxy.Xxx){
XJP=true;}}
else{
XJ9=xBE(this,xGk,
this.XCI.XFI_('moz','1')?
xnO:x6u,
XJT);
XJ9.id=XJT;
XJP=XCF(this.xVG,
XJ9,xHL,
this.XCI.XRN().xuQ>=2?
XAU:null,
Xxy);}
if(XJP&&
(Xxy.Xxx>Xxu*1.2)&&
(Xxy.Xxx>Xxr))
{
Xxr=Xxy.Xxx;
Xxp=XJT;
Xxq.XJY=XJ9.XJY;
Xxq.XJ7=XJ9.XJ7;}
else{
if(!XJP){
Xxr=Xxy.Xxx;
Xxp=XJT;
Xxq.XJY=XJ9.XJY;
Xxq.XJ7=XJ9.XJ7;}}}}
if(XJP){
if(Xxp!=this.xGL){
XJT=Xxp;
XJ9.XJY=Xxq.XJY;
XJ9.XJ7=Xxq.XJ7;}
else{
XJT=false;;}}
if(XJT&&XJT!=this.xGL){
this.XIa=true;
if(this.XXJ){this.XXJ.XIa=true;
this.XCI.Xlc().add(new XbY(
'RenderBubbleReapply',this.XXJ,this.XXJ.XFA,{
XJT:XJT
,XJY:XJ9.XJY
,XJ7:XJ9.XJ7}));}
else{
this.XCI.Xlc().add(new XbY(
'RenderBubbleReapply',this,this.XFA,{
XJT:XJT
,XJY:XJ9.XJY
,XJ7:XJ9.XJ7}));}
if(this.XCI.XRN().xuQ>=3){
this.XCI.Xpr('RB "'+this.xfK+
'" reapply:ori='+this.xGL+'=>'+XJT+
',x='+XJ9.XJY+
',y='+XJ9.XJ7);}
return true;}
return false;}
xBD=function(XMA){
var xYk;
switch(XMA){
case 'nw':xYk='se';break;
case 'n':xYk='s';break;
case 'ne':xYk='sw';break;
case 'e':xYk='w';break;
case 'se':xYk='nw';break;
case 's':xYk='n';break;
case 'sw':xYk='ne';break;
case 'w':xYk='e';break;
case 'c':
default:xYk=XMA;break;}
return xYk;}
xBE=function(x4C,XCt,x6w,XMA,xBy){
var size=xaQ(x6w);
var x7d=XCi(XCt.x7d,x4C.xVG.document.body);
if(xBy){
var XFy=0;var XGF=0;
var XFt=x4C.XKX;
var XFu=x4C.XKY;
var xVF=x7d.x+XCt.x8t.x*XFt;var xWF=x7d.y+XCt.x8t.y*XFu;}
else{
if((x4C.x7f==0||x4C.x7f==0.5||x4C.x7f==1)&&
(x4C.x7m==0||x4C.x7m==0.5||x4C.x7m==1))
{
XFy=x7d.x+XCt.x8t.x*0.5;
XGF=x7d.y+XCt.x8t.y*0.5;
XFt=Math.abs(x4C.XKX-0.5);
XFu=Math.abs(x4C.XKY-0.5);
xVF=XCt.x8t.x*XFt;xWF=XCt.x8t.y*XFu;}
else{
xBy=true;
XFy=0;XGF=0;
XFt=x4C.XKX;
XFu=x4C.XKY;
xVF=x7d.x+XCt.x8t.x*XFt;xWF=x7d.y+XCt.x8t.y*XFu;}}
var XNX=x4C.XVZ?x4C.XVZ.XNY[XMA]:x4C.XNY[XMA];
var x,y,XJY,XJ7;
if(xBy){XJY=x4C.x7f;
XJ7=x4C.x7m;
switch(XMA){
case 'n':
x=xVF-(size.x/2);
y=xWF+XNX.XOn;
break;
case 'ne':
x=xVF-size.x+(x4C.XVZ?x4C.XVZ.B_:x4C.B_);
y=xWF+XNX.XOn;
break;
case 'nw':
x=xVF-(x4C.XVZ?x4C.XVZ.B_:x4C.B_);
y=xWF+XNX.XOn;
break;
case 'e':
x=xVF-size.x-XNX.W;
y=xWF;
break;
case 'se':
x=xVF-size.x+(x4C.XVZ?x4C.XVZ.B_:x4C.B_);
y=xWF-size.y-XNX.XOn;
break;
case 's':
x=xVF-(size.x/2);
y=xWF-size.y-XNX.XOn;
break;
case 'sw':
x=xVF-(x4C.XVZ?x4C.XVZ.B_:x4C.B_);
y=xWF-size.y-XNX.XOn;
break;
case 'w':
x=xVF+XNX.W;
y=xWF;
break;
case 'c':
x=xVF-(size.x/2);
y=xWF-(size.y/2);
default:
break;}}
else{
switch(XMA){
case 'n':
x=XFy-(size.x/2);
y=XGF+xWF+XNX.XOn;
XJY=0.5;
XJ7=0.5+XFu;
break;
case 'ne':
x=XFy-xVF-size.x+(x4C.XVZ?x4C.XVZ.B_:x4C.B_);
y=XGF+xWF+XNX.XOn;
XJY=0.5-XFt;
XJ7=0.5+XFt;
break;
case 'e':
x=XFy-xVF-size.x-XNX.W;
y=XGF;
XJY=0.5-XFt;
XJ7=0.5;
break;
case 'se':
x=XFy-xVF-size.x+(x4C.XVZ?x4C.XVZ.B_:x4C.B_);
y=XGF-xWF-size.y-XNX.XOn;
XJY=0.5-XFt;
XJ7=0.5-XFt;
break;
case 's':
x=XFy-(size.x/2);
y=XGF-xWF-size.y-XNX.XOn;
XJY=0.5;
XJ7=0.5-XFu;
break;
case 'sw':
x=XFy+xVF-(x4C.XVZ?x4C.XVZ.B_:x4C.B_);
y=XGF-xWF-size.y-XNX.XOn;
XJY=0.5+XFt;
XJ7=0.5-XFt;
break;
case 'w':
x=XFy+xVF+XNX.W;
y=XGF;
XJY=0.5+XFt;
XJ7=0.5;
break;
case 'nw':
x=XFy+xVF-(x4C.XVZ?x4C.XVZ.B_:x4C.B_);
y=XGF+xWF+XNX.XOn;
XJY=0.5+XFt;
XJ7=0.5+XFt;
break;
case 'c':
x=XFy;
y=XGF;
XJY=0.5;
XJ7=0.5;
default:
break;}}
if(x4C.XVZ){
var X2A=x4C.Xd4().x6U();
if(X2A){var x4K=XPD(X2A,x4C.XVZ.xVG);
x+=x4K.x;
y+=x4K.y;}}
x4K=xBu({x:x4C.xBw,y:x4C.xBx},x4C.XJg,XMA);
x+=x4K.x;
y+=x4K.y;
var xd2=new XAi(x,y,x+size.x,y+size.y);
xd2.XJY=XJY;
xd2.XJ7=XJ7;
return xd2;}
xBu=function(x4K,XJg,XMA){
if(XJg=='n'||XJg=='s'){
x4K.x=0;}
else if(XJg=='e'||XJg=='w'){
x4K.y=0;}
var xBv=x4K;
switch(XJg){
case 'n':
switch(XMA){
case 'n':
xBv.x=0;
break;
case 'ne':
xBv.x=-x4K.y;
break;
case 'e':
xBv.x=-x4K.y;
xBv.y=0;
break;
case 'se':
xBv.x=-x4K.y;
xBv.y=-x4K.y;
break;
case 's':
xBv.x=0;
xBv.y=-x4K.y;
break;
case 'sw':
xBv.x=x4K.y;
xBv.y=-x4K.y;
break;
case 'w':
xBv.x=x4K.y;
xBv.y=0;
break;
case 'nw':
xBv.x=x4K.y;
break;}
break;
case 'ne':
switch(XMA){
case 'n':
xBv.x=0;
break;
case 'ne':
break;
case 'e':
xBv.y=0;
break;
case 'se':
xBv.y=-x4K.y;
break;
case 's':
xBv.x=0;
xBv.y=-x4K.y;
break;
case 'sw':
xBv.x=-x4K.x;
xBv.y=-x4K.y;
break;
case 'w':
xBv.x=-x4K.x;
xBv.y=0;
break;
case 'nw':
xBv.x=-x4K.x;
break;}
break;
case 'e':
switch(XMA){
case 'n':
xBv.x=0;
xBv.y=-x4K.x;
break;
case 'ne':
xBv.y=-x4K.x;
break;
case 'e':
xBv.y=0;
break;
case 'se':
xBv.y=x4K.x;
break;
case 's':
xBv.x=0;
xBv.y=x4K.x;
break;
case 'sw':
xBv.x=-x4K.x;
xBv.y=x4K.x;
break;
case 'w':
xBv.x=-x4K.x;
xBv.y=0;
break;
case 'nw':
xBv.x=-x4K.x;
xBv.y=-x4K.x;
break;}
break;
case 'se':
switch(XMA){
case 'n':
xBv.x=0;
xBv.y=-x4K.y;
break;
case 'ne':
xBv.y=-x4K.y;
break;
case 'e':
xBv.y=0;
break;
case 'se':
break;
case 's':
xBv.x=0;
break;
case 'sw':
xBv.x=-x4K.x;
break;
case 'w':
xBv.x=-x4K.x;
xBv.y=0;
break;
case 'nw':
xBv.x=-x4K.x;
xBv.y=-x4K.y;
break;}
break;
case 's':
switch(XMA){
case 'n':
xBv.x=0;
xBv.y=-x4K.y;
break;
case 'ne':
xBv.x=x4K.y;
xBv.y=-x4K.y;
break;
case 'e':
xBv.x=x4K.y;
xBv.y=0;
break;
case 'se':
xBv.x=x4K.y;
break;
case 's':
xBv.x=0;
break;
case 'sw':
xBv.x=-x4K.y;
break;
case 'w':
xBv.x=-x4K.y;
xBv.y=0;
break;
case 'nw':
xBv.x=-x4K.y;
xBv.y=-x4K.y;
break;}
break;
case 'sw':
switch(XMA){
case 'n':
xBv.x=0;
xBv.y=-x4K.y;
break;
case 'ne':
xBv.x=-x4K.x;
xBv.y=-x4K.y;
break;
case 'e':
xBv.x=-x4K.x;
xBv.y=0;
break;
case 'se':
xBv.x=-x4K.x;
break;
case 's':
xBv.x=0;
break;
case 'sw':
break;
case 'w':
xBv.y=0;
break;
case 'nw':
xBv.y=-x4K.y;
break;}
break;
case 'w':
switch(XMA){
case 'n':
xBv.x=0;
xBv.y=x4K.x;
break;
case 'ne':
xBv.x=-x4K.x;
xBv.y=x4K.x;
break;
case 'e':
xBv.x=-x4K.x;
xBv.y=0;
break;
case 'se':
xBv.x=-x4K.x;
xBv.y=-x4K.x;
break;
case 's':
xBv.x=0;
xBv.y=-x4K.x;
break;
case 'sw':
xBv.x=-x4K.x;
xBv.y=-x4K.x;
break;
case 'w':
xBv.y=0;
break;
case 'nw':
xBv.y=x4K.x;
break;}
break;
case 'nw':
switch(XMA){
case 'n':
xBv.x=0;
break;
case 'ne':
xBv.x=-x4K.x;
break;
case 'e':
xBv.x=-x4K.x;
xBv.y=0;
break;
case 'se':
xBv.x=-x4K.x;
xBv.y=-x4K.y;
break;
case 's':
xBv.x=0;
xBv.y=-x4K.y;
break;
case 'sw':
xBv.y=-x4K.y;
break;
case 'w':
xBv.y=0;
break;
case 'nw':
break;}
break;}
return xBv;}
XLI.prototype.x4m=function(xbI,XCt,xau){
xbI.tabIndex=-1;
var style=xbI.style;
style.position=XCt;
style.left='0px';
style.top='0px';
style.width=this.XxP+'px';
style.height=this.XxO+'px';
style.borderWidth='0px';
style.margin='0px';
style.padding='0px';
style.lineHeight='1px';
style.backgroundColor="transparent";
style.zIndex=this.Xq9+1;
style.outline="0px none black";
if(this.XCI.Xvz){
style.display='none';}
else{
style.visibility='hidden';}
if(XRl){
var XtN=this.Xs0;
var Xsf=this.XsZ;
var XtT=this.Xs1;
var XsI=this.XsU;}
else{
XtN=this.XsX;
Xsf=this.XsW;
XtT=this.XsY;
XsI=this.XsV;}
var x4C=this.x6V('max',
Xsf,
XtN,
XQK('TIP_MAXBUBBLE'),
XtT,
XsI);
if(X0a&&
this.XCI.XRN().Xxb&&
this.x6m.indexOf('.mht')>0)
{
this.x8s(xbI,this.x6m+'1',true,'image');}
var xd2=xau.appendChild(xbI);
xbI.innerHTML=x4C;
return xd2;}
XLI.prototype.Xrs=function(xbI,XCt,xau){
xbI.tabIndex=-1;
var style=xbI.style;
style.position=XCt;
style.left='0px';
style.top='0px';
style.width=this.XxP+'px';
style.height=this.XxO+'px';
style.borderWidth='0px';
style.margin='0px';
style.padding='0px';
style.lineHeight='0px';
style.backgroundColor="transparent";
style.zIndex=this.Xq9;
style.outline="0px none black";
if(this.XCI.Xvz){
style.display='none';}
else{
style.visibility='hidden';}
this.x8s(xbI,this.x6m+'mini',this.XtQ,'image');
style.backgroundRepeat='no-repeat';
return xau.appendChild(xbI);}
XLI.prototype.x4p=function(xbI,XCt,xau){
xbI.tabIndex=-1;
var style=xbI.style;
style.position=XCt;
style.border='0px none black';
style.borderWidth='0px';
style.margin='0px';
style.padding='0px';
style.lineHeight='1px';
style.left='0px';
style.top='0px';
style.width=this.xPC+'px';
style.height=this.xNB+'px';
style.zIndex=XLX;
style.visibility='hidden';
style.overflow='hidden';
style.backgroundRepeat='no-repeat';
style.outline="0px none black";
this.x8s(xbI,this.x6m+'spike'+
(!this.xFO.movable&&this.xGL.substr(0,1)=='n'?
'1_':'_')+this.xGL,
this.XtQ);
return xau.appendChild(xbI);}
XLI.prototype.XwY=function(xau){
if(this.xFO.cover&&!this.Xw9&&
this.XCI.XFI_('ie','5.5')&&
!this.XCI.Xvz)
{
this.Xw9=true;
xau.insertAdjacentHTML('beforeEnd',
'<iframe id='+this.xfK+'_iframeMain '+' src="'+
this.XCI.Xu().xNI('about_blank.html')+
'" frameborder=0 scrolling=no'+
' style="position:absolute;width:1px;height:1px;'+
' FILTER:progid:DXImageTransform.Microsoft.Alpha('+
'style=0,opacity=0);'+
' display:none;z-index:0;"></iframe>');}}
XLI.prototype.XwZ=function(xau){
if(!this.xFO.XxZ&&this.xFO.cover&&
!this.Xwa&&
this.XCI.XFI_('ie','5.5')&&
!this.XCI.Xvz)
{
this.Xwa=true;
xau.insertAdjacentHTML('beforeEnd',
'<iframe id='+this.xfK+'_iframeMini '+' src="'+
this.XCI.Xu().xNI('about_blank.html')+
'" frameborder=0 scrolling=no'+
' style="position:absolute;width:1px;height:1px;'+
' FILTER:progid:DXImageTransform.Microsoft.Alpha('+
'style=0,opacity=0);'+
' display:none;z-index:0;"></iframe>');}}
XLI.prototype.x6V=function(XFh,l_,t_,x9G,x0Q,x2G,Xzv,XJ){
if(this.X17||this.Xzw){
var Xrz=this.Xzw?'.bmp':(this.XtQ==1?'.gif':'.png');
var xd2='<div align="right" class="dgoBUbtn" id="'+this.xfK+
'_div_'+XFh+'" style="position:absolute;top:'+t_+'px;left:'+
l_+'px;width:'+x0Q+'px;height:'+x2G+
(Xzv?(';display:'+Xzv):'')+
(XJ?(';visibility:'+XJ):'')+
'px;cursor:'+X2F+';"'+
' title="'+x9G+
'"><img class="dgoBUbtn" id="'+this.xfK+'_'+XFh+
'" style="position:relative;top:0px;left:0px;width:'+
x0Q+'px;height:'+x2G+
'px;cursor:'+X2F+
';border:0px none black"'+
' title="'+x9G;
if(this.Xzw){
switch(XFh){
case 'close':XFh='Close';break;
case 'max':XFh='RollDown';break;
case 'min':XFh='RollUp';break;}
xd2+='" src="'+this.x6m+XFh+'1'+Xrz+'"';
if(this.XCI.XFI_('ie','5.5')){
xd2+=' onmouseenter="this.src='+
"'"+this.x6m+
XFh+'2'+Xrz+
"'"+'"';
xd2+=' onmouseleave="this.src='+
"'"+this.x6m+
XFh+'1'+Xrz+
"'"+'"';}
else{
xd2+=' onmouseover="this.src='+
"'"+this.x6m+
XFh+'2'+Xrz+
"'"+'"';
xd2+=' onmouseout="this.src='+
"'"+this.x6m+
XFh+'1'+Xrz+
"'"+'"';}
xd2+=' onmousedown="this.src='+
"'"+this.x6m+
XFh+'1'+Xrz+
"'"+'"';
xd2+='></div>';}
else{
if(this.XCI.XFI_('ie','5.5')){
xd2+='" src="'+this.x6m+XFh+Xrz+'"';
if(this.Xrh==1){
xd2+=' onmouseenter="this.src='+
"'"+this.x6m+
XFh+'_inv'+Xrz+
"'"+'"';
xd2+=' onmouseleave="this.src='+
"'"+this.x6m+
XFh+Xrz+
"'"+'"';}}
else{
xd2+='" src="'+this.x6m+XFh+'_moz'+Xrz+'"';
if(this.Xrh==1){
xd2+=' onmouseover="this.src='+
"'"+this.x6m+
XFh+'_moz_inv'+Xrz+
"'"+'"';
xd2+=' onmouseout="this.src='+
"'"+this.x6m+
XFh+'_moz'+Xrz+
"'"+'"';}}
xd2+=' onmousedown="this.src='+
"'"+this.x6m+
XFh+Xrz+
"'"+'"';
xd2+='></div>';}}
else{
xd2=(this.XCI.XFI_('moz','1')?
'<div align="right" class="dgoBUbtn" id="'+this.xfK+'_'+
XFh+'" style="position:absolute;top:'+t_+'px;left:'+
l_+'px;width:'+x0Q+'px;height:'+x2G+
'px;cursor:'+X2F+';"'+
' title="'+x9G+
'"><img align="top" style="position:absolute;top:0px;left:'+
'0px;width:'+x0Q+'px;height:'+x2G+
'px;cursor:'+X2F+';"'+
' title="'+x9G+
'" src="'+this.x6m+XFh+'_moz.png"></div>'
:
'<button class="dgoBUbtn" tabindex=-1 id="'+this.xfK+'_'+
XFh+'" style="border-style:outset;position:absolute;top:'+t_+
'px;left:'+l_+'px;width:9px;height:8px;line-height:8px;">'+
'<img class="dgoBUbtn" style="cursor:'+X2F+
';position:relative;border:0px none black;top:-1px;left:-1px;"'+
' title="'+x9G+
'" src="'+this.x6m+XFh+'.png">'+
'</button>');}
return xd2;}
XLI.prototype.XuM=function(XFh,x9G,x0Q,x2G,Xtw){
var Xrz=this.XtQ==1?'.gif':'.png';
var xd2='<img align="absmiddle" class="dgoBUbtn" id="'+this.xfK+'_'+XFh+
'" style="width:'+
x0Q+'px;height:'+x2G+
'px;cursor:'+X2F+';border:0px none black"'+
' title="'+x9G;
if(this.XCI.XFI_('ie','5.5')){
xd2+='" src="'+this.x6m+XFh+Xrz+'"';
if(this.Xrh==1){
xd2+=' onmouseenter="this.src='+
"'"+this.x6m+
XFh+'_inv'+Xrz+
"'"+'"';
xd2+=' onmouseleave="this.src='+
"'"+this.x6m+
XFh+Xrz+
"'"+'"';}}
else{
xd2+='" src="'+this.x6m+XFh+Xrz+'"';
if(this.Xrh==1){
xd2+=' onmouseover="this.src='+
"'"+this.x6m+
XFh+'_inv'+Xrz+
"'"+'"';
xd2+=' onmouseout="this.src='+
"'"+this.x6m+
XFh+Xrz+
"'"+'"';}}
xd2+=' onmousedown="this.src='+
"'"+this.x6m+
XFh+Xrz+
"'"+'"';
xd2+=' onclick="'+Xtw+';" ';
xd2+='>';
return xd2;}
XLI.prototype.x6W=function(XFh,x0H,x0Q,x2G,x6n,
xFO){
var html='<td '+(XFh?'id='+this.xfK+'_'+XFh:'')+
' class="dgoBU" style="'+(xFO||'line-height:1px;')+
(x0Q>0?'width:'+x0Q+'px;':'')+
(x2G>0?'height:'+x2G+'px;':'');
if(x0H){
html+=this.x9Y(
this.x6m+x0H,this.XtQ);}
else{
html+='background-color:transparent;';}
html+='"\r\n>';
if(x6n){
html+=x6n;}
else{
html+='<img class=dgoBU src="'+this.x6m+'1.gif"';
if(x0Q>0){
html+=' width='+x0Q;}
if(x2G>0){
html+=' height='+x2G;}
html+=' style="padding:0px;margin:0px;border:0px;">';}
return html+'</td>';}
var xBf=/\$\{[a-z]*:\}|\$\[[a-z]*:\]/g;
var xC5=/\$\{[A-Z_]*\}/gi;
XLI.prototype.Xud=function(xyO){
if(xyO=='<B><CENTER>OK.</CENTER></B>'){
xyO='<B><CENTER>${TOK_OK}</CENTER></B>';}
var xoL=xyO.indexOf('%FeedbackHelpBtn%');
while(xoL>=0){
var XtM=(this.xFO.movable?X2F:'default');
var xQD='';
var Xts=this.Xvv;
var Xtq=this.Xvu;
xQD+=this.XuM('help',
XQK('TIP_HELPBUBBLE'),
Xts,
Xtq,
'RenderBubble_clickHelp_(event)');
xyO=xyO.substr(0,xoL)+xQD+
xyO.substr(xoL+17);
xoL=xyO.indexOf('%FeedbackHelpBtn%');}
xoL=xyO.indexOf('%FeedbackGoOnBtn%');
while(xoL>=0){
var XtM=(this.xFO.movable?X2F:'default');
var xQD='';
var Xts=this.Xvt;
var Xtq=this.Xvs;
xQD+=this.XuM('goon',
XQK('TIP_GOONBUBBLE'),
Xts,
Xtq,
'RenderBubble_clickGoOn_(event)');
xyO=xyO.substr(0,xoL)+xQD+
xyO.substr(xoL+17);
xoL=xyO.indexOf('%FeedbackGoOnBtn%');}
xoL=xyO.match(xBf);
while(xoL){
if(XRl){
var XFr=xoL.index;
var xCC=xoL.lastIndex;}
else{
if(xoL[0]){
XFr=xyO.indexOf(xoL[0]);
xCC=XFr+xoL[0].length;}
else{
xoL=false;
continue;}}
var xBa=xyO.substring(XFr+2,xCC-1);
var xMj=new Url(xBa).toString();
xyO=xyO.substring(0,XFr)+xMj+xyO.substr(xCC);
xoL=xyO.match(xBf);}
xoL=xyO.match(xC5);
while(xoL){
if(XRl){
var XFr=xoL.index;
var xCC=xoL.lastIndex;}
else{
if(xoL[0]){
XFr=xyO.indexOf(xoL[0]);
xCC=XFr+xoL[0].length;}
else{
xoL=false;
continue;}}
var xkP=xyO.substring(XFr+2,xCC-1);
xyO=xyO.substring(0,XFr)+
XQK(xkP)+
xyO.substr(xCC);
xoL=xyO.match(xC5);}
return xyO;}
XLI.prototype.x4l=function(xbI,XCt,xau){
xbI.tabIndex=-1;
var style=xbI.style;
style.position=XCt;
style.borderWidth='0px';
style.margin='0px';
style.padding='0px';
style.left='0px';
style.top='0px';
style.zIndex=++XLX;
style.outline="0px none black";
style.visibility='hidden';
if(this.xFO.naked){
var xd2=xau.appendChild(xbI);
xbI.innerHTML=this.Xud(this.XCO(this.xyO));
return xd2;}
if(XRl||this.Xzw){
var XtL=this.XsS;
var Xse=this.XsR-
this.XsT;
if(!this.X17){
Xse-=this.XsK;}
if(this.XsK>1&&!this.X17){
XtL+=this.XsK;}
var XtS=this.XsT;
var XsH=this.XsM;
var XtO=this.Xs8;
if(this.XsK>1&&!this.X17){
XtO+=this.XsK;}
var Xsg=Xse+this.Xs7-
this.Xs9;
var XtU=this.Xs9;
var XsJ=this.Xs2;}
else{
XtL=this.XsP;
Xse=this.XsO-
this.XsQ;
XtS=this.XsQ;
XsH=this.XsN;
XtO=this.Xs5;
Xsg=Xse+this.Xs4-
this.Xs6;
XtU=this.Xs6;
XsJ=this.Xs3;}
var XtK=false;
var xQD='';
var XtM=(this.xFO.movable?X2F:'default');
if(this.xFO.closable||this.xFO.minimizable){
xQD='<div valign="top" class="dgoBUbtn"'+
' id="'+this.xfK+'_btn"'+
' style="position:relative;left:0px;top:0px;width:0px;height:0px;'+
' margin:0px;padding:0px;border:0px none black;'+
'overflow:visible;cursor:'+XtM+';display:block;"'+
' onmousedown="event.cancelBubble=true;'+
' arguments[0]&&arguments[0].stopPropagation();return true;">';
if(!this.xFO.closable){XtO=XtL;
Xsg=Xse;}
else if(!this.xFO.minimizable){XtO=XtL;
Xsg=Xse;}
if(this.xFO.minimizable){
xQD+=this.x6V('min',
Xsg,
XtO,
XQK('TIP_MINBUBBLE'),
XtU,
XsJ,
this.xFO.minimized===true?'none':false,
this.xFO.minimized===true?'hidden':false);
if(this.Xzw){
xQD+=this.x6V('max',
Xsg,
XtO,
XQK('TIP_MAXBUBBLE'),
XtU,
XsJ,
this.xFO.minimized===true?false:'none',
this.xFO.minimized===true?false:'hidden');}}
if(this.xFO.closable){
xQD+=this.x6V('close',
Xse,
XtL,
XQK('TIP_CLOSEBUBBLE'),
XtS,
XsH);}
xQD+='</div>';}
else{
if(!this.xFO.movable&&this.X17){
this.BT_=this.B_;XtK=true;}}
var Xrv=this.XtP==1?'connect':'edge0';
var Xrx=XtK?
(this.XtP==1?'connect2':'edge2'):
(this.XtP==1?'connect':'edge0');
var Xru=XtK?'edge2':'edge';
var Xsn=(XtK?'corner2':'corner');
var Xrw=this.XtP==1?this.xGL:
this.xGL.substr(0,1);
var XtM=(this.xFO.movable?X2F:'default');
var Xux=(this.x5s&&this.xGL!='c')?
3*this.Xsz:0;
Xux=Math.max(Xux,
(this.xFO.closable||this.xFO.minimizable)?
Math.abs(Xsg):0);
var XtJ=(this.x7Q>this.B_+Xux+this.B_?
this.x7Q:
this.B_+Xux+this.B_);
var xID;
var html='<table id="'+this.xfK+'_table"'+
' class=dgoBU border=0 cellpadding=0 cellspacing=0 ondrag="return false;" style="'+
'position:relative;';
if(this.Xzw){
if(this.Xzu!=-1){
html+='background-color:'+this.Xzu+';';}
if(this.Xzx!=-1){
html+='font-color:'+this.Xzx+';';}}
this.x7Q=XtJ;
html+='width:'+XtJ+'px;height:'+
(this.xdH>this.B_+this.BT_?
this.xdH-
((this.XCI.XRN().Xbh & 1024)?this.B_+this.BT_:
0):this.B_+this.BT_)+
'px;table-layout:auto;">';
html+='<tr id='+this.xfK+'_trn class=dgoBU style="cursor:'+
XtM+';height:'+this.BT_+'px">';
var x=this.x6W('nw',this.Xzw?'TopLeftEnd':
(Xsn+(this.xFO.movable?'_nw':'1_nw')),
this.B_,this.BT_,
this.Xzw?
'<div class=dgoBU style="width:'+this.B_+'px;"></div>':'');
html+=x;
var n='<table id='+this.xfK+'_tn class=dgoBU'+
' cellpadding=0 cellspacing=0 style="cursor:'+XtM+
';width:100%;height:'+
this.BT_+'px;table-layout:auto;">'+
'<tr class=dgoBU style="height:'+this.BT_+'px">';
xID=this.Xzw?'TopTile':(Xru+(this.xFO.movable?'_n':'1_n'));
if(this.Xzw){
n+='<td class="dgoBU" style="background-image:url('+
this.x6m+xID+
'.bmp);height:'+this.BT_+'px;width:100%">&nbsp;</td>';}
else{
if(this.x5s&&this.xGL.substr(0,1)=='n'){
xID=null;
var W1=0;
var W2=this.Xsz;
var W3=0;
if(this.xGL=='nw'){
W1=this.xBG-this.Xsz;
W3='100%';}
else if(this.xGL=='n'){
W1='100%';
W2=this.Xsz;
W3='100%';}
else{W1='100%';
W3=this.xBG-this.Xsz;}
if(W1){
(W1!='100%')&&(W1+='px');
n+='<td id='+this.xfK+'b1 class="dgoBU" style="height:'+
this.BT_+'px;'+('width:'+W1+';')+
this.x9Y(this.x6m+Xru+
(this.xFO.movable?'_n':'1_n'),
this.XtQ)+
'"><img class=dgoBU '+'width="'+W1+'"'+
' height='+this.BT_+' src="'+
this.x6m+'1.gif"'+
' style="padding:0px;margin:0px;border:0px;"></td>';}
n+='<td id='+this.xfK+'b2 class="dgoBU" style="height:'+
this.BT_+'px;'+(W2?'width:'+W2+'px;':'')+
this.x9Y(this.x6m+
(this.xFO.movable?Xrx+'_'+Xrw:
Xrx+'1_'+Xrw),
this.XtQ)+
'"><img class=dgoBU width="'+(W2?W2+'px;':'100%')+
'" height='+this.BT_+' src="'+
this.x6m+'1.gif"'+
' style="padding:0px;margin:0px;border:0px;"></td>';
if(W3){
(W3!='100%')&&(W3+='px');
n+='<td id='+this.xfK+'b3 class="dgoBU" style="height:'+
this.BT_+'px;'+'width:'+W3+'px;'+
this.x9Y(this.x6m+Xru+
(this.xFO.movable?'_n':'1_n'),
this.XtQ)+
'"><img class=dgoBU '+'width="'+W3+'" '+
' height='+this.BT_+
' src="'+this.x6m+'1.gif"'+
' style="padding:0px;margin:0px;border:0px;"></td>';}}
else{
n+='<td class="dgoBU" style="background-color:transparent;'+
'height:'+this.BT_+'px;width:100%"><img class=dgoBU src="'+
this.x6m+'1.gif"'+
' height="'+this.BT_+'px"'
' width="100%"'+
' style="padding:0px;margin:0px;border:0px;"></td>';}}
x=this.x6W('n',xID,-1,this.BT_,n+'</tr></table>');
html+=x;
x=this.x6W('ne',this.Xzw?'TopRightEnd':
Xsn+(this.xFO.movable?'_ne':'1_ne'),
this.B_,
this.BT_,
this.Xzw?
'<div class=dgoBU style="width:'+this.B_+'px;"></div>':'');
html+=x;
html+='<td class="dgoBU" width="0px" '+
' style="width:0px;height:0px;overflow:visible;padding:0px;'+
'margin:0px;border:0px none black;"" valign="top" '+
' align="left">'+xQD+'</td>';
html+='</tr>';
if(this.Xzw){
html+='<tr id='+this.xfK+'_tr0 class=dgoBU valign=top'+
' style="height:'+(this.B_)+'px">';
html+=this.x6W('ncl','VertLeftTop',-1,this.B_,'&nbsp;');
html+='<td></td>';
html+=this.x6W('ncr','VertRightTop',-1,this.B_,'&nbsp;');
html+='</tr>';}
html+='<tr id='+this.xfK+'_tr class=dgoBU valign=top'+
' style="height:'+(this.Xsz)+'px">';
var w=null;
xID=this.Xzw?'VertLeftTile':'edge_w';
if(this.x5s&&this.xGL=='w'){
xID=null;
w='<table cellpadding=0 cellspacing=0 class=dgoBU style="width:'+
this.B_+'px;height:100%;">'+
'<tr class=dgoBU'+
' style="width:'+this.B_+'px;height:'+(this.Xsz)+
'px;"><td id='+this.xfK+'b2 class="dgoBU" style="width:'+
this.B_+'px;height:'+(this.Xsz)+'px;'+
this.x9Y(this.x6m+Xrv+'_w',
this.XtQ)+
'"><img class="dgoBU" src="'+
this.x6m+'1.gif"'+
' style="width:'+this.B_+'px;height:'+
(this.Xsz)+
'px;padding:0px;margin:0px;border:0px;"></td></tr>'+
'<tr class="dgoBU" style="width:'+this.B_+
'px;height:100%;"><td id='+
this.xfK+'b3 class="dgoBU" style="width:'+this.B_+
'px;height:100%;'+
this.x9Y(this.x6m+'edge_w',
this.XtQ)+
'"><img class="dgoBU" src="'+
this.x6m+'1.gif"'+
' style="width:'+this.B_+
'px;height:100%;padding:0px;margin:0px;border:0px;">'+
'</td></tr></table>';}
if(this.x5s&&this.xGL=='w'&&!XRl){
x=this.x6W('w style="height:50px;" ',xID,this.B_,-1,w);}
else{
x=this.x6W('w ',xID,this.B_,-1,this.Xzw?'&nbsp':w);}
html+=x;
var Xw1='<div class="'+(this.xFO.XpP||'dgoBUmain')+
'" style="display:block;position:static;overflow:visible;';
if(this.Xzw){
Xw1+='padding-left:'+(this.B_)+'px;';
Xw1+='padding-right:'+(this.B_)+'px;';}
Xw1+='">'+
this.Xud(this.XCO(this.xyO))+
'</div>';
var XxW=Xw1;
if(this.Xw3){
this.XwH=function(XUn){
var width=this.XxI>-1?
this.XxI:
this.XxN;
var height=this.XxH>-1?
this.XxH:
this.XxF;
return '<div class="dgoBU" style="position:relative;width:'+width+'px;height:'+
height+'px;">'+XUn+'</div>';}
this.XYs=function(x6m,XxQ){
var XxU=(XxQ.substr(XxQ.length-4).toLowerCase()!='.gif')?0:1;
var html;
var XTU=new Url(XxQ);
XTU.xc3(x6m);
if(!XxU&&this.XCI.XFI_('ie','5.5')&&
!this.XCI.XFI_('ie','7.0')){
html=';filter:progid:DXImageTransform.Microsoft.AlphaImageLoader'+
'(src='+XTU+',sizingMethod=scale);'+
'background-color:transparent;">';}
else{
html='"><img class="dgoBU" src="'+XTU+'" style="width:'+
this.XxN+'px;height:'+
this.XxF+'px;">';}
return html;}
var XxS=this.XxK+'px;';
var XxT=';width:'+this.XxN+'px;height:'+
this.XxF+'px;position:absolute;left:'+
this.XxG+'px;top:'+this.XxL+'px;';
var XxR='vertical-align:'+this.XxM+';'+
'text-align:'+this.Xwp+';';
XxW='<table class="dgoBU" width="100%"><tbody class="dgoBU"><tr class="dgoBU">';
switch(this.XxJ.toLowerCase()){
case 'n':
XxW+='<td class="dgoBU" style="'+XxR+'">'+
this.XwH
(
'<div class="dgoBU" style="margin-bottom:'+
XxS+XxT+
this.XYs(this.x6m,this.Xw3)+
'</div>'
)+
'</td></tr><tr class="dgoBU"><td class="dgoBU">'+Xw1;
break;
case 's':
XxW+='<td class="dgoBU">'+Xw1+'</td></tr><tr class="dgoBU">'+
'<td class="dgoBU" style="'+XxR+'">'+
this.XwH
(
'<div class="dgoBU" style="margin-top:'+
XxS+XxT+
this.XYs(this.x6m,this.Xw3)+
'</div>'
);
break;
case 'e':
XxW+='<td class="dgoBU">'+Xw1+'</td>'+
'<td class="dgoBU" style="'+XxR+'">'+
this.XwH
(
'<div class="dgoBU" style="margin-left:'+
XxS+XxT+
this.XYs(this.x6m,this.Xw3)+
'</div>'
);
break;
default:
case 'w':
XxW+='<td class="dgoBU" style="'+XxR+'">'+
this.XwH
(
'<div class="dgoBU" style="margin-right:'+
XxS+XxT+
this.XYs(this.x6m,this.Xw3)+
'</div>'
)+
'</td><td class="dgoBU">'+Xw1;
break;}
XxW+='</td></tr></tbody></table>'}
x=this.x6W('bd','body',
(this.x7Q>this.B_+this.B_&&
this.XCI.XFI_('ie','5')?
this.x7Q-this.B_-this.B_:-1),
(this.xdH>this.B_+this.BT_?
this.xdH-this.B_-this.BT_:-1),
XxW,
'font-family:sans-serif;font-style:normal;font-size:11px;'+
'font-weight:normal;font-variant:normal;line-height:normal;'+
'text-align:left;');
html+=x;
var e=null;
xID=this.Xzw?'VertRightTile':'edge_e';
if(this.x5s&&this.xGL=='e'){
xID=null;
e='<table cellpadding=0 cellspacing=0 class="dgoBU" style="width:'+
this.B_+'px;height:100%;">'+
'<tr class="dgoBU" style="width:'+this.B_+'px;height:'+
(this.Xsz)+'px;"><td id='+
this.xfK+'b2 class="dgoBU" style="width:'+this.B_+
'px;height:'+
(this.Xsz)+'px;'+
this.x9Y(this.x6m+Xrv+'_e',
this.XtQ)+
'"><img class="dgoBU" src="'+
this.x6m+'1.gif"'+
' style="width:'+this.B_+'px;height:'+
(this.Xsz)+
'px;padding:0px;margin:0px;border:0px;">'+
'</td></tr><tr class="dgoBU"'+
' style="width:'+this.B_+'px;height:100%"><td id='+
this.xfK+'b3 class="dgoBU" style="width:'+this.B_+'px;'+
this.x9Y(this.x6m+'edge_e',
this.XtQ)+
'"><img class="dgoBU" src="'+
this.x6m+'1.gif"'+
' style="width:'+this.B_+
'px;height:100%;padding:0px;margin:0px;border:0px;">'+
'</td></tr></table>';}
if(this.x5s&&this.xGL=='e'&&!XRl){
x=this.x6W('e style="height:100%;" ',xID,this.B_,-1,e);}
else{
x=this.x6W('e ',xID,this.B_,-1,this.Xzw?'&nbsp':e);}
html+=x;
html+='</tr>';
if(this.Xzw){
html+='<tr id='+this.xfK+'_tr2 class=dgoBU valign=top'+
' style="height:'+(this.B_)+'px">';
html+=this.x6W('scl','VertLeftBottom',-1,this.B_,'&nbsp;');
html+='<td></td>';
html+=this.x6W('scr','VertRightBottom',-1,this.B_,'&nbsp;');
html+='</tr>';}
html+='<tr class="dgoBU" style="height:'+this.B_+';">';
x=this.x6W('sw',this.Xzw?'BottomLeftEnd':'corner_sw',
this.B_,this.B_,this.Xzw?'&nbsp;':'');
html+=x;
var s=null;
xID=this.Xzw?'BottomTile':'edge_s';
if(this.x5s&&this.xGL.substr(0,1)=='s'){
xID=null;
var W1=0;
var W2=this.Xsz;
var W3=0;
if(this.xGL=='sw'){
W1=this.xBG-this.Xsz;
W3='100%';}
else if(this.xGL=='s'){
W1='100%';
W2=this.Xsz;
W3='100%';}
else{W1='100%';
W3=this.xBG-this.Xsz;}
s='<table cellpadding=0 cellspacing=0 class="dgoBU" width="'+
'100%" height='+(this.B_)+'><tr class="dgoBU" style="height:'+
(this.B_)+'px;">';
if(W1){
(W1!='100%')&&(W1+='px');
s+='<td id='+this.xfK+'b1 class="dgoBU" style="height:'+
(this.B_)+'px;'+
('width:'+W1+';')+
this.x9Y(this.x6m+'edge_s',
this.XtQ)+
'"><img class="dgoBU" '+'width="'+W1+'"'+
' height='+(this.B_)+' src="'+
this.x6m+'1.gif"'+
' style="padding:0px;margin:0px;border:0px;"></td>';}
s+='<td id='+this.xfK+'b2 class="dgoBU" style="height:'+
this.B_+';'+
'width:'+W2+'px;'+
this.x9Y(this.x6m+Xrv+'_'+
Xrw,this.XtQ)+
'"><img class="dgoBU" width="'+W2+'px;'+
'" height='+this.B_+' src="'+
this.x6m+'1.gif"'+
' style="padding:0px;margin:0px;border:0px;"></td>';
if(W3){
(W3!='100%')&&(W3+='px');
s+='<td id='+this.xfK+'b3 class="dgoBU" style="height:'+
this.B_+';'+
'width:'+W3+';'+
this.x9Y(this.x6m+'edge_s',
this.XtQ)+
'"><img class="dgoBU" '+'width="'+W3+'" '+
' height='+this.B_+
' src="'+this.x6m+'1.gif"'+
' style="padding:0px;margin:0px;border:0px;"></td>';}
s+='</tr></table>';}
else if(this.Xzw){
s='&nbsp;';}
x=this.x6W('s',xID,
this.x7Q>=this.B_+this.B_&&
!this.XCI.XFI_('ie','1')?
this.x7Q-this.B_-this.B_:-1,this.B_,s);
html+=x;
x=this.x6W('se',this.Xzw?'BottomRightEnd':'corner_se',
this.B_,this.B_,
this.Xzw?'&nbsp;':'');
html+=x;
html+='</tr></table>';
var xd2=xau.appendChild(xbI);
xbI.innerHTML=html;
xbI.dgo20=this;
return xd2;}
XLI.prototype.X9n=function(X9o){
var XM6=(this.x6U()==null);
var xa7=this.xmC(this.XaP.XKe(),this.XaP.XKd());
if(!xa7||this.XCI.XRN().xuQ>=2){
this.XCI.Xpr('RB '+this.xfK+" imagedirTable_cb_("+
X9o.getName()+')with apply',(xa7?'success':'error'));}
xa7||this.x9T(false);
XM6&&this.XL0();}
XLI.prototype.x4f=function(x5g,XCZ,XCY){
this.XaP=new XAZ(XCZ,XCY);
var xnO;
if(this.XCI.Xvz&&
this.XCI.Xjt().TAPI)
{
if(!this.XXJ||
!(this.XXJ.xyi||
this.XXJ.X0T))
{
if(this.XCI.Xjt().xBU(this.xFO.XpP,
this.Xud(this.XCO(this.xyO))))
{
this.xB3=true;
this.XXJ&&(this.XXJ.xB3=true);
this.XaP.exec('RB onTop Window',this);
this.XaP=null;
return true;}}}
if(this.xFO.X9k){
xnO=this.XCI.x6b().X9h();
switch(xnO.xvD(this.xFO.X9k,
this,this.X9n))
{
case-9:case 0:this.xFO.X9k=null;
break;
case 1:var Xrk=xnO.XsF(this.xFO.X9k);
var xbK;
if(Xrk){
if(this.XsL){
this.XsL.Xsq(Xrk,this);
this.Xrg(Xrk);}
xbK='imagedir '+this.xFO.X9k+' found';}
else{
xbK='imagedir '+this.xFO.X9k+' not found';}
this.XCI.XRN().xuQ>=2&&this.XCI.Xpr(xbK);
break;
default:return true;}}
if(this.xFO.X9k){
this.xFO.transparent=true;
var xfK=this.xFO.X9k.toLowerCase();
this.x6m=xnO.X9g().toString()+
xfK;
var xoL=xfK.lastIndexOf('.');
if(xoL>0){
if(xfK.substr(xoL)=='.mht'){
if(this.XCI.XRN().Xxb){
if(X0a){
if(navigator.userAgent.indexOf('Windows NT 6.0')>0){this.x6m=' mhtml:'+this.x6m;}
else{if(this.xFO.xcS){
this.x6m=' mhtml:'+this.x6m;}
else{
this.x6m='%20mhtml:'+this.x6m;}}}
else{
this.x6m=' mhtml:'+this.x6m;}}
else{this.x6m='mhtml:'+this.x6m;}
this.x6m+='!http://dgo_mht_proxy/';}
else{
this.x6m+='/';}}
else{
this.x6m+='/';}
if(!this.xFO.XpP){
this.xFO.XpP=this.XxY;}}
else{
this.x6m=this.XCI.Xu().xNI(
'widgets/bubble2/').toString();
this.xFO.transparent||(this.XtQ=1);}
if(this.xFO.autoplace){
this.XoB(1);}
if(this.xFO.cover){
this.XoB(2);}
if(x5g.xbF.tagName=='BODY'){
this.XEL(x5g);}
if(!this.xFO.xcS){
this.XCI.x6b().X8E(this);}
var parent=this.XL7(x5g);
var Xj1,position;
if(this.xFO.XLx){
var Xix=XTd(x5g);
Xix.x5W=xVD(x5g.x5W);
Xix.position='absolute';
position='absolute';
Xj1=this.XL7(Xix,this.xfK+'__');
this.XoB(1);}
else{
Xj1=parent;
position=x5g.position;}
if(!this.xFO.XxZ&&(this.xFO.minimizable||this.xFO.movable)){
var x6z=this.XL6('div',Xj1,
this.xfK+'_mini','dgoBUmini',this.x4m,
x5g.position);
var Xsj=this.XL6('div',Xj1,
this.xfK+'_mini2','dgoBUmini',this.Xrs,
x5g.position);}
else{
x6z=null;
Xsj=null;}
var spike=null;
if(this.x5s&&this.xGL!='c'){
spike=this.XL6('div',Xj1,
this.xfK+'_spike','dgoBUspike',this.x4p,
position);}
var x6u=this.XL6('div',Xj1,
this.xfK+'_main','dgoBUmain',this.x4l,position);
if(this.XCI.XRN().XyV){
if((this.XXJ&&this.XXJ.XVZ&&(this.XXJ.XVZ==this))||
!this.XXJ)
{
this.Xxa();}}
var XDm=null;
x6u.dgo14=Xj1;
x6u.dgo15=position;
if(this.XCI.XFI_('ie','5.5')){
x6u.onmouseenter=XLQ;
x6u.onmouseleave=XLR;}
else{
x6u.onmouseover=XLQ;
x6u.onmouseout=XLR;}
x6u.dgo20=this;
x6u.onclick=x3I;
if(spike){
spike.dgo20=this;
spike.onclick=x3I;}
if(this.xFO.movable){
var x8y=this.xVG.document.getElementById(this.xfK+'_tn');
var x9R=this.xVG.document.getElementById(this.xfK+'_trn');
if(x8y&&x9R){
x8y.dgo20=this;
x8y.onmousedown=XLL;
x8y.onclick=x3I;
x9R.dgo20=this;
x9R.onmousedown=XLL;}}
var xQD=this.xVG.document.getElementById(this.xfK+'_close');
if(xQD){
xQD.dgo20=this;
xQD.onclick=XLM;}
var xQD=this.xVG.document.getElementById(this.xfK+'_help');
if(xQD){
xQD.dgo20=this;
xQD.onclick=Xt5;}
var xQD=this.xVG.document.getElementById(this.xfK+'_goon');
if(xQD){
xQD.dgo20=this;
xQD.onclick=Xt4;}
xQD=this.xVG.document.getElementById(this.xfK+'_max');
if(xQD){
xQD.dgo20=this;
xQD.onclick=XLN;}
xQD=this.xVG.document.getElementById(this.xfK+'_min');
if(xQD){
xQD.dgo20=this;
xQD.dgo48=false;
xA7(this.xVG,xQD,'click',
XLO,xA3);
xA7(this.xVG,xQD,'mousedown',
Xo6,xA3);
xA7(this.xVG,xQD,'mouseup',
Xo6,xA3);
xA7(this.xVG,xQD,'mouseleave',
Xo6,xA3);}
if(this.XAo&&!this.xFO.xcS){
if(this.xGL!='c'){
if(this.xGL!='c'&&
(this.XAo!=-1||this.X9E()))
{this.xHF(x5g.xbF);}else{
var x7d=XCi(
x5g.x7d,this.xVG.document.body);
var x=x7d.x+x5g.x8t.x*this.x7f+
(this.x7p||0);
var y=x7d.y+x5g.x8t.y*this.x7m+
(this.x7q||0);
var XML=new XAi(x,y,x,y);
this.xHF([ x5g.xbF,XML ],true);}
if(!this.x6O(x5g)){
return false;}}}
this.XHY=(this.xFO.minimized===true?3:
1);
var xd2;
if(this.XUt(this.XbM)){
this.Xpu(true);
xd2=true;}
else{
this.XrM();
if(xd2=this.x4o({display:x5g.display,
visibility:x5g.visibility,
x5W:x5g.x5W,
x7d:x5g.x7d,
x8t:x5g.x8t,
x6z:x6z,
Xsj:Xsj,
spike:spike,
x6u:x6u}))
{
this.XLA(this.Xd4());
this.XaP.exec('RB apply(CSS yet there)',this);
this.XaP.XCZ=null;
this.XaP.XCY=null;
this.XaP.XHh=null;
this.XaP.xaq=null;
this.XaP=null;}
if(!this.XIa){
this.Xxh(this.xFO.XuQ);}}
return xd2;}
XLI.prototype.XbM=function(){
this.XrM();
this.Xpu(false);
var XM6=(!this.xVG);
if(this.xb1()){
this.XLA(this.Xd4());}
if(XSN){
var Xjj=this;
var X1K=function(){
Xjj.xDA.XHO(Xjj);}
this.xVG.setTimeout(X1K,1);}
this.Xxh(this.xFO.XuQ);
this.XaP.exec('RB apply(post CSS)',this);
this.XaP.XCZ=null;
this.XaP.XCY=null;
this.XaP.XHh=null;
this.XaP.xaq=null;
this.XaP=null;
XM6&&this.XL0();}
XLI.prototype.x9K=function(
x5g,XL9,XCZ,XCY)
{
var xbK;
var xuQ=this.XCI.XRN().xuQ>=3;
xuQ&&(xbK='RB '+this.xfK+' reapply '+XL9+':');
if(XL9.XWE&&
XL9.xsF&&
XL9.xsF.Xr&&
!XL9.xsF.Xr())
{
XL9.xsF.setText(
this.xyO+XL9.xsF.Xtx());
XL9.xsF.XzL(true);
xuQ&&(xbK+='append XB text');}
else if(XL9.XMc&&
XL9.x5q===false)
{
XL9.xyO=this.xyO+XL9.xyO;
XL9.x5q=true;
xuQ&&(xbK+='append text');}
else{
xuQ&&(xbK+='replace text');}
var xd2=XLD.prototype.x9K.XHO(
this,x5g,XL9,XCZ,XCY);
((!xd2&&(this.XCI.XRN().xuQ>=1))
||xuQ)&&this.XCI.Xpr(xbK,(xd2?'success':'error'));
return xd2;}
XLI.prototype.x4r=function(XVK){
var xd2=true;
if(this.xB3){
this.XCI.Xjt()&&this.XCI.Xjt().xBU('','');
return xd2;}
if(Xrc.Xrp){
this.XCI.XF3().clearTimeout(
Xrc.Xrp);
Xrc.Xrp=false;}
if(XRl){
var xUG=this.x8b();
if(xUG){
var x6u=xUG.document.getElementById(this.xfK+'_main');
var x6z=xUG.document.getElementById(this.xfK+'_mini');
var Xsj=xUG.document.getElementById(this.xfK+'_mini2');
var spike=xUG.document.getElementById(this.xfK+'_spike');
var x8y=this.xVG.document.getElementById(this.xfK+'_tn');
var x9R=this.xVG.document.getElementById(this.xfK+'_trn');
x6u&&(x6u.onmouseenter=null);
x6u&&(x6u.onmouseleave=null);
x6u&&(x6u.onclick=null);
x6u&&(x6u.dgo14=null);
x6u&&(x6u.dgo15=null);
spike&&(spike.onclick=null);
x6u&&(x6u.dgo20=null);
x6z&&(x6z.dgo20=null);
Xsj&&(Xsj.dgo20=null);
spike&&(spike.dgo20=null);
x8y&&(x8y.dgo20=null);
x8y&&(x8y.onmousedown=null);
x8y&&(x8y.onclick=null);
x9R&&(x9R.dgo20=null);
x9R&&(x9R.onmousedown=null);
var xQD=this.xVG.document.getElementById(this.xfK+'_close');
if(xQD){
xQD.dgo20=null;
xQD.onclick=null;}
var xQD=this.xVG.document.getElementById(this.xfK+'_help');
if(xQD){
xQD.dgo20=null;
xQD.onclick=null;}
var xQD=this.xVG.document.getElementById(this.xfK+'_goon');
if(xQD){
xQD.dgo20=null;
xQD.onclick=null;}
xQD=this.xVG.document.getElementById(this.xfK+'_max');
if(xQD){
xQD.dgo20=null;
xQD.onclick=null;}
xQD=this.xVG.document.getElementById(this.xfK+'_min');
if(xQD){
xQD.dgo20=null;
xQD.onclick=null;
xQD.dgo48=null;
xA8(xQD,'click',
XLO,xA4);
xQD.onclick=null;
xA8(xQD,'mousedown',
Xo6,xA4);
xQD.mousedown=null;
xA8(xQD,'mouseup',
Xo6,xA4);
xQD.mouseup=null;
xA8(xQD,'mouseleave',
Xo6,xA4);
xQD.mouseleave=null;
xQD.dgo41.x8A();
xQD.dgo41=null;
xQD.dgoc=null;}
var XLn=this.x8o(this.xfK+
(this.xFO.naked?'_main':'_bd'));
if(XLn){
XLn.dgo20=null;
XLn.onclick=null;}
x6u&&(x6u.innerHTML='');
x6z&&(x6z.innerHTML='');
Xsj&&(Xsj.innerHTML='');
spike&&(spike.innerHTML='');
this.XsL&&(this.XsL.Xro=null);
this.XsL=null;}}
if(XVK){
var Xwy=this.x6U();
if(Xwy){
Xwy=this.XCI.XvR(Xwy);
if(Xwy.document.body.tagName=='BODY'){
XVK=false;}}}
if(!XVK){
if(!this.xFO.XxZ){
xa7=this.x8S(this.xfK+'_mini');
xd2=xd2&&xa7;
xa7=this.x8S(this.xfK+'_mini2');
xd2=xd2&&xa7;}
xa7=this.x8S(this.xfK+'_spike',true);
xd2=xd2&&xa7;
xa7=this.x8S(this.xfK+'_main');
xd2=xd2&&xa7;
if(XRl){
this.x8S(this.xfK+'_iframeMain',true);
if(!this.xFO.XxZ){
this.x8S(this.xfK+'_iframeMini',true);}}
else{
xa7=this.x8S(this.xfK);
xd2=xd2&&xa7;
if(this.xFO.XLx){
xa7=this.x8S(this.xfK+'__',true);
xd2=xd2&&xa7;}}}
return xd2;}
XLI.prototype.Xnd=function(){
var x3E;
if(x3E=this.x8o(this.xfK+
(this.xFO.naked?'_bd':'_main')))
{
if(this.XCI.Xvz){
XAa(x3E.style,'display','none');}
else{
XAa(x3E.style,'visibility','hidden');}}
if(x3E=this.x8o(this.xfK+'_spike',true)){
if(this.XCI.Xvz){
XAa(x3E.style,'display','none');}
else{
XAa(x3E.style,'visibility','hidden');}}
if(!this.xFO.XxZ){
if(x3E=this.x8o(this.xfK+'_mini')){
if(this.XCI.Xvz){
XAa(x3E.style,'display','none');}
else{
XAa(x3E.style,'visibility','hidden');}}
if(x3E=this.x8o(this.xfK+'_mini2')){
if(this.XCI.Xvz){
XAa(x3E.style,'display','none');}
else{
XAa(x3E.style,'visibility','hidden');}}}
if(x3E=this.x8o(this.xfK+'_iframeMain')){
if(this.XCI.Xvz){
XAa(x3E.style,'display','none');}
else{
XAa(x3E.style,'visibility','hidden');}}
if(!this.xFO.XxZ){
if(x3E=this.x8o(this.xfK+'_iframeMini')){
if(this.XCI.Xvz){
XAa(x3E.style,'display','none');}
else{
XAa(x3E.style,'visibility','hidden');}}}
if(this.XCI.XRN().xuQ>=1){
this.XCI.Xpr('RB '+this.xfK+' now invisible','success');}
return true;}
XLI.prototype.XFA=function(X6S){
var XLk=this.XCI;
if(XLk.XFV()==XAB||
XLk.XFV()==XOc)
{
return false;}
if(!this.XIa){
if(this.XCI.XRN().xuQ>=1){
XLk.Xpr('RB "'+this.xfK+'" reapply autoplace canceled',
'warning');}
return false;}
var XJS=new XLI(this);
XJS.Xw9=false;
XJS.Xwa=false;
XJS.x5q=true;
XJS.x7f=X6S.XJY-0;
XJS.x7m=X6S.XJ7-0;
var x4K={x:this.xBw,y:this.xBx};
x4K=xBu(x4K,this.XJg,X6S.XJT)
XJS.xGL=X6S.XJT;
XJS.XJg=this.XJg;
XJS.xBw=this.xBw;
XJS.xBx=this.xBx;
XJS.x7p=x4K.x;
XJS.x7q=x4K.y;
XJS.x4H();
if(XJS.x6K){
var xa7;
if(XLk.XRN().XnH){
xa7=this.XMK(XJS);}
else{
try{
xa7=this.XMK(XJS);}
catch(xa8){
if(this.XCI.XRN().xuQ>=1){
XLk.Xpr('RB "'+this.xfK+'" reapply:'+
(new x6C(xa8)),'exc');}
this.XIa=false;
XJS.XIa=false;
return false;}}
this.XIa=false;
XJS.XIa=false;
if(!xa7||XLk.XRN().xuQ>=2){
XLk.Xpr('RB "'+this.xfK+'" reapply done',
xa7?'success':'error');}}
else{
if(this.XCI.XRN().xuQ>=1){
XLk.Xpr('RB "'+this.xfK+
'" clone:'+XJS.error,'error');}}
return true;}
XLI.prototype.XrM=function(){
var XLn=this.x8o(this.xfK+
(this.xFO.naked?'_main':'_bd'));
if(XLn){
this.XqM=[{
xnM:''
,XqO:false
,xKI:false
,XqI:false
,XqN:0
,XqK:''
,XqH:''}];
if(!XAc(XLn,XnC,this)){
this.XqM=null;
if(this.XCI.XRN().xuQ>=1){
this.XCI.Xpr('RB '+this.xfK+
':cannot traverse bubble body');}
return false;}
this.XqM=null;
XLn.dgo20=this;
XLn.onclick=XBr;}}
XLI.prototype.Xws=function(XGT,XKV){
if(!this.XCI.XFI_('ie','5.5')){
return true;}
var XDm=this.xVG.document.getElementById(this.xfK+
'_iframeMain');
if(XDm){
var XO1=XDm.outerHTML;
var XO2=XDm.style.zIndex;
var style=XGT.style;
if(!XKV){
XAa(XDm.style,'display','none');
XDm.style.zIndex=2;}
XAa(XDm.style,'display','block');
var Xwx=style.pixelTop-0;
var Xww=style.pixelLeft-0;
XDm.style.pixelTop=Xwx;
XDm.style.pixelHeight=XGT.offsetHeight;
XDm.style.pixelLeft=Xww;
XDm.style.pixelWidth=XGT.offsetWidth;
XDm.style.zIndex=1;}
else{
if(this.xFO.cover){
if(this.XCI.XRN().xuQ>=1){
this.XCI.Xpr('R setIframeIf_ missing:IFRAME "'+
this.xfK+'_iframeMain"','warning');}}}
return true;}
XLI.prototype.Xwt=function(XGT,XKV){
if(!this.XCI.XFI_('ie','5.5')){
return true;}
var XDm=this.xVG.document.getElementById(this.xfK+
'_iframeMini');
if(XDm){
var XO1=XDm.outerHTML;
var XO2=XDm.style.zIndex;
var style=XGT.style;
if(!XKV){
XAa(XDm.style,'display','none');
XDm.style.zIndex=2;}
XAa(XDm.style,'display','block');
XDm.style.pixelTop=style.pixelTop;
XDm.style.pixelHeight=XGT.offsetHeight;
XDm.style.pixelLeft=style.pixelLeft;
XDm.style.pixelWidth=XGT.offsetWidth;
XDm.style.zIndex=1;}
else if(this.xFO.cover){
if(this.XCI.XRN().xuQ>=1){
this.XCI.Xpr('R setIframeIf_ missing:IFRAME "'+
this.xfK+'_iframeMini"','warning');}}
return true;}
XLI.prototype.XoN=function(){
if(this.XHY==2&&
Xrc.XtH==this)
{var XM6=(this.x6U()==null);
var xUG=this.x8b();
if(xUG){
var XCt={Xry:['mousemove','mouseup','dragstart'],
XsG:[XLJ,
XLK,
XKs],
XKQ:xA4};
XJp(xUG,
Xra,
XCt);}
XM6&&(this.XL0());}
return true;}
XLI.prototype.Xxa=function(){
if(this.Xxn){
var Xxf='div';
var XuV='dgo_objMediaPlayerDivSmil';}
else if(this.Xxm){
Xxf='bgsound';
XuV='dgo_objMediaPlayerBG';}
else{
Xxf='div';
XuV='dgo_objMediaPlayerDiv';}
XuT=this.xVG.document.getElementById(XuV);
if(!XuT){
var XuU=this.XL6(Xxf,
this.xVG.document.body,
XuV);
XuU.style.width='0px';
XuU.style.height='0px';
XuU.style.overflow='hidden';
XuU.style.visibility='hidden';
if(!this.Xxm){
if(XRl){
if(this.Xxn){
var html='<XML:NAMESPACE PREFIX="t2">'+
'<t2:AUDIO style="behavior:url(#default#time2);" '+
'name="dgo_objMediaPlayerSmil" '+
'id="dgo_objMediaPlayerSmil" t2:syncbehavior="canSlip" '+
't2:restart="always" t2:player="DMusic"/>'+
'</XML:NAMESPACE>';}
else{html='<OBJECT ID="dgo_objMediaPlayer" WIDTH=0 HEIGHT=0 '+
'CLASSID="CLSID:22D6F312-B0F6-11D0-94AB-0080C74C7E95" '+
'codeBase='+
'http://activex.microsoft.com/activex/controls/mplayer/en/'+
'nsmp2inf.cab#Version=5,1,52,701'+
'TYPE="application/x-oleobject" '+
'style="visibility:hidden">'+
'<PARAM NAME="ShowControls" VALUE="0">'+
'<PARAM NAME="ShowDisplay" VALUE="0">'+
'<PARAM NAME="ShowStatusBar" VALUE="0">'+
'<PARAM NAME="Autostart" VALUE="1">'+
'<PARAM NAME="AutoSize" VALUE="0">'+
'</OBJECT>';}
XuU.insertAdjacentHTML('beforeEnd',html);}
else{
XuU.innerHTML='<embed ID="dgo_objMediaPlayerEmbed" '+
'type="application/x-mplayer2" width="0" '+
'height="0" align="middle" '+
'vspace="0" showcontrols="0" showdisplay="0" '+
'showstatusbar="0" autostart="true" '+
'autosize="0" hspace="0"></embed>';}}
XuT=this.xVG.document.getElementById(XuV);}
if(!XuT){
if(this.XCI.XRN().xuQ>=1){
this.XCI.Xpr('RB MediaPlayer embed could not be created.','error');}}}
var Xx8=new Array();
var Xx9=false;
XLI.prototype.Xxg=function(){
if(Xx8){
if(Xx8.length>=3){
var bubble=Xx8[0];
var Xxi=Xx8[1];
var Xxk=Xx8[2];
try{
var xUG=bubble.x8b();}
catch(e){
xUG=null;}
if(xUG){
var XuV='dgo_objMediaPlayerSmil';
var XuT=xUG.document.getElementById(XuV);
if(XuT){
if(!Xxi){
Xx8[1]=true;
XuT.volume=80;
XuT.src=Xxk;
XuT.beginElement();
XuT.beginElement();
XuT.beginElement();
XuT.beginElement();
XuT.seekTo(0,0);
Xx9=false;
xUG.setTimeout(bubble.Xxg,500);}
else{
if(XuT.currTimeState.stateString=='inactive'){
Xx8.shift();
Xx8.shift();
Xx8.shift();
Xx9=false;
if(Xx8.length>0){
xUG.setTimeout(bubble.Xxg,500);}
else{}}
else if(XuT.currTimeState.stateString=='cueing'){
Xx9=false;
xUG.setTimeout(bubble.Xxg,500);}
else if(XuT.currTimeState.stateString=='active'){
if(!Xx9){
Xx9=(new Date).valueOf()-0;}
else{
if((new Date).valueOf()-Xx9>3000){var XuV='dgo_objMediaPlayerDivSmil';
XuT=xUG.document.getElementById(XuV);
if(XuT){
XuT.parentNode.removeChild(XuT);}
Xx8=new Array();
Xx9=false;
return;}}
xUG.setTimeout(bubble.Xxg,500);}
else{
Xx9=false;
XuT.beginElement();
XuT.seekTo(0,0);
xUG.setTimeout(bubble.Xxg,500);}}}}}}}
XLI.prototype.Xxh=function(Xxo){
if(this.XCI.XRN().XyV){
var xUG=this.x8b();
if(this.Xxn){
var XuV='dgo_objMediaPlayerSmil';}
else if(this.Xxm){
XuV='dgo_objMediaPlayerBG';}
else{
XuV='dgo_objMediaPlayer'+(XSN?'Embed':'');}
var XuT=xUG.document.getElementById(XuV);
if(XuT){
if(XRl){
if(this.Xxn){
if(X0a){
XuT.volume=80;
XuT.src=this.x6m+Xxo;
XuT.beginElement();}
else{
Xx8[Xx8.length]=this;
Xx8[Xx8.length]=false,
Xx8[Xx8.length]=this.x6m+Xxo;
this.Xxg();}}
else if(this.Xxm){
XuT.volume=0;
XuT.src=this.x6m+Xxo;}
else{
XuT.XtZ=this.x6m+Xxo;}}
else{
XuT=XuT.parentNode.removeChild(XuT);
XuT.volume=80;
XuT.src=(this.x6m+Xxo);
xUG.document.body.appendChild(XuT);}}
else{
if(XRl&&this.Xxn){this.Xxa();
if(X0a){
XuT.volume=80;
XuT.src=this.x6m+Xxo;
XuT.beginElement();}
else{
Xx8[Xx8.length]=this;
Xx8[Xx8.length]=false,
Xx8[Xx8.length]=this.x6m+Xxo;
this.Xxg();}}
else{}}}}
XLI.prototype.XFZ=true;}
function XLU(x6w,xsH){
if(x6w&&x6w.parentNode!=x6w.dgo14){
x6w=x6w.parentNode.removeChild(x6w);
x6w.style.position=x6w.dgo15;
x6w.dgo14.appendChild(x6w);
if(xsH){
xsH=xsH.parentNode.removeChild(xsH);
x6w.dgo14.appendChild(xsH);}}
return true;}
function Xt5(XDx){
var x4C=this.dgo20;
var XM6=(x4C.x6U()==null);
var xUG=x4C.x8b();
if(xUG&&x4C.Xu9){
x4C.Xu9(XDx||xUG.event);
xZC(XDx||xUG.event);}
else if(xUG&&x4C.XXJ&&x4C.XXJ.Xu9){x4C.XXJ.Xu9(XDx||xUG.event);
xZC(XDx||xUG.event);}
XM6&&(x4C.XL0());
return false;}
function Xt4(XDx){
var x4C=this.dgo20;
var XM6=(x4C.x6U()==null);
var xUG=x4C.x8b();
if(xUG&&x4C.XuN){
x4C.XuN(XDx||xUG.event);
xZC(XDx||xUG.event);}
else if(xUG&&x4C.XXJ&&x4C.XXJ.XuN){x4C.XXJ.XuN(XDx||xUG.event);
xZC(XDx||xUG.event);}
XM6&&(x4C.XL0());
return false;}
function XLM(XDx){
var x4C=this.dgo20;
var XM6=(x4C.x6U()==null);
var xUG=x4C.x8b();
if(xUG){
var x6u=x4C.x8o(x4C.xfK+'_main');
var XDm=x4C.x8o(x4C.xfK+'_iframeMain',true);
XLU(x6u,XDm);
x4C.Xxh('close.wav');
xZC(XDx||xUG.event);}
x4C.x9T(false);
XM6&&(x4C.XL0());
return false;}
function XLN(XDx){
var xUG;
if(xUG=this.dgo20.XTz()){
xZC(XDx||xUG.event);}
return false;}
function Xo6(XDx){
var xrF=XDx||this.dgoc.event;
var x4C=this.dgo20;
if(!xrF||!x4C){
return;}
this.dgo48=(xrF.type=='mousedown');}
function XLO(XDx){
var xUG;
if(xUG=this.dgo20.XTx()){
xZC(XDx||xUG.event);
return false;}
return true;}
var XLX=20000;
function XBr(XDx){
var x4C=this.dgo20;
var XM6=(x4C.x6U()==null);
var xUG=x4C.x8b();
if(xUG){
var x6u=xUG.document.getElementById(x4C.xfK+'_main');
if(x6u){
x6u.style.zIndex=++XLX;
var spike=xUG.document.getElementById(x4C.xfK+'_spike');
if(spike){
spike.style.zIndex=XLX;}}}
XM6&&(x4C.XL0());
return true;}
function XLQ(){
var x4C=this.dgo20;
var XM6=(x4C.x6U()==null);
var xUG=x4C.x8b();
var Xsj=(xUG?
xUG.document.getElementById(x4C.xfK+'_mini2'):null);
if(Xsj){
x4C.x8s(Xsj,x4C.x6m+'miniactive',x4C.XtQ,'image');}
XM6&&(x4C.XL0());
return true;}
function XLR(){
var x4C=this.dgo20;
var XM6=(x4C.x6U()==null);
var xUG=x4C.x8b();
var Xsj=(xUG?
xUG.document.getElementById(x4C.xfK+'_mini2'):null);
if(Xsj){
x4C.x8s(Xsj,x4C.x6m+'mini',x4C.XtQ,'image');}
XM6&&(x4C.XL0());
return true;}
var Xrc={
XtH:null,XtI:null
,Xsu:null
,Xsk:0
,Xsm:0
,XtC:0
,XtD:0
,XtF:0
,XtE:0
,Xsd:0
,Xsb:0
,Xsc:null
,Xrp:false};
function XLV(XDx,xcF,XtG,xVG){
Xrc.XtF=xVG.document.body.scrollTop;
Xrc.XtE=xVG.document.body.scrollLeft;
Xrc.Xsk=XDx.screenX;
Xrc.Xsm=XDx.screenY;
Xrc.XtC=parseInt(xcF.style.left);
Xrc.XtD=parseInt(xcF.style.top);
Xrc.Xsu=xVG;
Xrc.XtI=XtG;
if(Xrc.Xrp&&
Xrc.XtH)
{
Xrc.XtH.XCI.XF3().clearTimeout(
Xrc.Xrp);}
Xre();
Xrc.Xrp=
Xrc.XtH.XCI.XF3().setTimeout(
Xre,100);}
function Xre(){
try{Xrc.Xrp=false;
Xr5(
Xrc.XtI.rows[0],'move');
var Xso=
Xrc.XtI.parentNode.parentNode.parentNode;
Xr5(Xso.rows[0],'move');
Xqh(Xrc.Xsu);}
catch(xa8){}}
function Xrd(){
try{if(Xrc.Xrp){
Xrc.XtH.XCI.XF3().clearTimeout(
Xrc.Xrp);}
Xrc.Xrp=false;
Xr5(Xrc.XtI.rows[0],
X2F);
var Xso=
Xrc.XtI.parentNode.parentNode.parentNode;
Xr5(Xso.rows[0],X2F);
Xqh(Xrc.Xsu);}
catch(xa8){}
Xrc.XtI=null;
Xrc.Xsu=null;}
function x3I(XDx){
var x4C=this.dgo20;
var XM6=(x4C.x6U()==null);
var xUG=x4C.x8b();
if(xUG){
var x6u=xUG.document.getElementById(x4C.xfK+'_main');
if(x6u){
x6u.style.zIndex=++XLX;
var spike=xUG.document.getElementById(x4C.xfK+'_spike');
if(spike){
spike.style.zIndex=XLX;}}}
XM6&&(x4C.XL0());
return true;}
function Xr9(x9Q,XCt){
var target=XSN?x9Q:x9Q.document.body;
for(var i=0;i<XCt.Xry.length;i++){
xA7(x9Q,
target,
XCt.Xry[i],
XCt.XsG[i],
XCt.XKQ);}
return true;}
function Xra(x9Q,XCt){
var target=XSN?x9Q:x9Q.document.body;
for(var i=0;i<XCt.Xry.length;i++){
xA8(target,
XCt.Xry[i],
XCt.XsG[i],
XCt.XKQ);}
return true;}
function XLL(XDx){
var x4C=this.dgo20;
Xrc.XtH=x4C;
var XM6=(x4C.x6U()==null);
var xUG=x4C.x8b();
if(xUG){
var xrF=(XDx||xUG.event);
var spike=xUG.document.getElementById(x4C.xfK+'_spike');
var x6u=xUG.document.getElementById(x4C.xfK+'_main');
var x6z=xUG.document.getElementById(x4C.xfK+'_mini');
var Xsj=xUG.document.getElementById(x4C.xfK+'_mini2');
var xnO=xUG.document.getElementById(x4C.xfK+'_tn');
var XLn;
if(!x6u||(!spike&&x4C.xGL!='c'&&x4C.x5s)){
if(this.XCI.XRN().xuQ>=1){
x4C.XCI.Xpr('RB "'+x4C.xfK+
'"(or part)has gone. No move.','warning');}
XM6&&(x4C.XL0());
return false;}
if(x4C.x5s&&x4C.xGL!='c'&&
(XLn=xUG.document.getElementById(x4C.xfK+'b2')))
{
var XJx=(x4C.xGL.substr(0,1)=='n'&&
!x4C.xFO.movable?'edge1_':'edge_');
x4C.x8s(XLn,x4C.x6m+XJx+
x4C.xGL.substr(0,1),x4C.XtQ);}
if(x4C.XHY!=2){
x6u=x6u.parentNode.removeChild(x6u);
x6u.style.position='absolute';
if(x4C.XCI.Xvz){
var XLn=x4C.XCI.Xjt().Xjt().document.getElementById('bd');
XLn.appendChild(x6u);}
else{
xUG.document.body.appendChild(x6u);}
Xsj&&x4C.Xwt(Xsj,true);
var Xwi=xUG.document.getElementById(x4C.xfK+'_iframeMain');
if(Xwi){
Xwi=Xwi.parentNode.removeChild(Xwi);
Xwi.style.position='absolute';
xUG.document.body.appendChild(Xwi);}
var Xwj=xUG.document.getElementById(x4C.xfK+'_iframeMini');
Xrc.Xsd=
xUG.document.body.scrollTop;
Xrc.Xsb=
xUG.document.body.scrollLeft;
Xrc.Xsc=(new Date).valueOf()-0;
var Xsr=x4C.XFZ;
x4C.XFZ=false;
x4C.xb1();
x4C.XHY=2;
x4C.XFZ=Xsr;
if(x4C.XCI.Xvz){
x4C.XYf&&x6z&&(x6z.style.display='');
x4C.XYf&&x6z&&(Xsj.style.display='');
spike&&(spike.style.display='none');}
else{
x4C.XYf&&x6z&&(x6z.style.visibility='visible');
x4C.XYf&&x6z&&(Xsj.style.visibility='visible');
spike&&(spike.style.visibility='hidden');}
if(x4C.XXJ){
x4C.XXJ.xb1();}
if(x4C.XCI.XRN().xuQ>=2){
x4C.XCI.Xpr('RB "'+x4C.xfK+'" START MOV;main:'+
x6u+';spike:'+spike+';mini:'+x6z+';mini2:'+Xsj);}}
x4C.Xxh('move.wav');
++XLX;
x6u.style.zIndex=XLX;
var XCt={Xry:['mousemove','mouseup','dragstart'],
XsG:[XLJ,
XLK,
XKs],
XKQ:xA3};
XJp(xUG,
Xr9,
XCt);
XLV(xrF,
x6u,
xnO,
xUG);}
else{
if(this.XCI.XRN().xuQ>=1){
x4C.XCI.Xpr('R mousedown:no frame','warning');}}
XM6&&(x4C.XL0());
return xZC(xrF);}
function XKs(XDx){
var xrF;
if(Xrc.XtH&&
Xrc.XtH.xVG&&
Xrc.XtH.xVG.event)
{
xrF=Xrc.XtH.xVG.event;}
return xZC(XDx||xrF);}
function XzT(x4C,xAu){
var XM6=(x4C.x6U()==null);
var xUG=x4C.x8b();
if(xUG){
var x6u=xUG.document.getElementById(x4C.xfK+'_main');
if(x6u){
var style=x6u.style;
var XsA=parseInt(style.left);
var XsB=parseInt(style.top);
if((XsA+parseInt(x6u.offsetWidth)>
x6u.offsetParent.scrollLeft+x6u.offsetParent.clientWidth)&&
(x6u.offsetParent.clientWidth>=parseInt(x6u.offsetWidth)))
{XsA=x6u.offsetParent.scrollLeft+
x6u.offsetParent.clientWidth-
parseInt(x6u.offsetWidth);}
if((XsA<x6u.offsetParent.scrollLeft)&&
(x6u.offsetParent.clientWidth>=parseInt(x6u.offsetWidth)))
{XsA=x6u.offsetParent.scrollLeft;}
var XRX=0;
if(x4C.XCI.XvR(xUG).frames['trainer_gui_frame']&&
xUG==x4C.XCI.XvR(xUG)){
XRX=
XPB(x4C.XCI.XvR(xUG).frames['trainer_gui_frame']).offsetHeight;}
if((XsB+parseInt(x6u.offsetHeight)>
x6u.offsetParent.scrollTop+x6u.offsetParent.clientHeight-
XRX)&&
(x6u.offsetParent.clientHeight>=parseInt(x6u.offsetHeight)))
{XsB=x6u.offsetParent.scrollTop+
x6u.offsetParent.clientHeight-
parseInt(x6u.offsetHeight)-
XRX;}
if((XsB<x6u.offsetParent.scrollTop)&&
(x6u.offsetParent.clientHeight>=parseInt(x6u.offsetHeight)))
{XsB=x6u.offsetParent.scrollTop;}
if(x4C.XCI.Xvz){
if(XsA<8){
XsA=8;}
if(XsB<22){
XsB=22;}}
if(x4C.XXJ||
parseInt(style.left)!=XsA||
parseInt(style.top)!=XsB)
{
if(!x4C.xFO.XxZ){
x4C.x8S(x4C.xfK+'_mini');
x4C.x8S(x4C.xfK+'_mini2');
x4C.x8S(x4C.xfK+'_iframeMini',true);}
x4C.XHY=2;
x4C.xFO.XxZ=true;
if(x4C.XXJ){
x4C.XXJ.XHY=2;
x4C.XXJ.xsF.xFO.XxZ=true;
x4C.XXJ.XWt.xFO.XxZ=true;}
style.left=(XsA)+'px';
style.top=(XsB)+'px';
x4C.Xws(x6u,true);
if(!xAu){
if(x4C.XXJ){
x4C.XXJ.xb1();}
x4C.xb1();}}}}
XM6&&(x4C.XL0());
return true;}
function XLJ(XDx){
if(!Xrc.XtH){
return true;}
var x4C=Xrc.XtH;
var XM6=(x4C.x6U()==null);
var xUG=x4C.x8b();
if(xUG){
var xrF=(XDx||xUG.event);
if(Xrc.Xsd!=
xUG.document.body.scrollTop||
Xrc.Xsb!=
xUG.document.body.scrollLeft)
{
var XGS=(new Date()).valueOf()-0;
if(Xrc.Xsc+400>XGS){
Xqh(Xrc.Xsu);
return xZC(xrF);}}
Xrc.Xsd=xUG.document.body.scrollTop;
Xrc.Xsb=xUG.document.body.scrollLeft;
Xrc.Xsc=(new Date).valueOf()-0;
var x6u=xUG.document.getElementById(x4C.xfK+'_main');
if(x6u){
var xVF=-Xrc.XtE+
Xrc.Xsb+xrF.screenX-
Xrc.Xsk;
var xWF=-Xrc.XtF+
Xrc.Xsd+xrF.screenY-
Xrc.Xsm;
var style=x6u.style;
var XsA=Xrc.XtC+xVF;
var XsB=Xrc.XtD+xWF;
if((XsA+parseInt(x6u.offsetWidth)>
x6u.offsetParent.scrollLeft+x6u.offsetParent.clientWidth)&&
(x6u.offsetParent.clientWidth>=parseInt(x6u.offsetWidth)))
{if((parseInt(style.left)+parseInt(x6u.offsetWidth)>
x6u.offsetParent.scrollLeft+
x6u.offsetParent.clientWidth)&&
(XsA>=parseInt(style.left))){XsA=parseInt(style.left);}
else{
if(parseInt(style.left)>=XsA){}
else{
XsA=x6u.offsetParent.scrollLeft+
x6u.offsetParent.clientWidth-
parseInt(x6u.offsetWidth);}}}
if((XsA<x6u.offsetParent.scrollLeft)&&
(x6u.offsetParent.clientWidth>=parseInt(x6u.offsetWidth)))
{
if((parseInt(style.left)<x6u.offsetParent.scrollLeft)&&
(XsA<=parseInt(style.left))){XsA=parseInt(style.left);}
else{
if(parseInt(style.left)<=XsA){}
else{
XsA=x6u.offsetParent.scrollLeft;}}}
var XRX=0;
if(x4C.XCI.XvR(xUG).frames['trainer_gui_frame']&&
xUG==x4C.XCI.XvR(xUG)){
XRX=
XPB(x4C.XCI.XvR(xUG).frames['trainer_gui_frame']).offsetHeight;}
if((XsB+parseInt(x6u.offsetHeight)>
x6u.offsetParent.scrollTop+x6u.offsetParent.clientHeight-
XRX)&&
(x6u.offsetParent.clientHeight>=parseInt(x6u.offsetHeight)))
{if((parseInt(style.top)+parseInt(x6u.offsetHeight)>
x6u.offsetParent.scrollTop+
x6u.offsetParent.clientHeight-
XRX)&&
(XsB>=parseInt(style.top))){XsB=parseInt(style.top);}
else{
if(parseInt(style.top)>=XsB){}
else{
XsB=x6u.offsetParent.scrollTop+
x6u.offsetParent.clientHeight-
parseInt(x6u.offsetHeight)-
XRX;}}}
if((XsB<x6u.offsetParent.scrollTop)&&
(x6u.offsetParent.clientHeight>=parseInt(x6u.offsetHeight)))
{
if((parseInt(style.top)<x6u.offsetParent.scrollTop)&&
(XsB<=parseInt(style.top))){XsB=parseInt(style.top);}
else{
if(parseInt(style.top)<=XsB){}
else{
XsB=x6u.offsetParent.scrollTop;}}}
style.left=(XsA)+'px';
style.top=(XsB)+'px';
Xrc.Xrp=
Xrc.XtH.XCI.XF3().setTimeout(
Xre,100);
x4C.Xws(x6u,true);}}
XM6&&(x4C.XL0());
return xZC(xrF);}
function XLK(XDx){
if(!Xrc.XtH){
return true;}
Xrd();
var x4C=Xrc.XtH;
Xrc={};
x4C.XoN();
x4C.Xxh('move.wav')
return true;}
function XLP(){
this.blur();
return false;}
function XaT(XCI,xcF){
var xbF=(xcF&&typeof(xcF.tagName)=='string'?xcF:null);
var id,xkI,name,bubble;
while(xbF&&typeof(id=xbF.id)=='string'){
xkI=id.length;
if(id.substr(0,9)=='dgoRender'){
name='';
if(xbF.className=='dgoBUmini'&&id.substr(xkI-5)=='_mini'){
name=id.substr(0,xkI-5);}
else if(xbF.className=='dgoBUmini'&&id.substr(xkI-6)=='_mini2'){
name=id.substr(0,xkI-6);}
else if(xbF.className=='dgoBUspike'&&
id.substr(xkI-6)=='_spike')
{
name=id.substr(0,xkI-6);}
else if(xbF.className=='dgoBUmain'&&
id.substr(xkI-5)=='_main')
{
name=id.substr(0,xkI-5);}
if(name){
bubble=XCI.x6b().x8n(name);
return(bubble.XMc?bubble:null);}}
xbF=(xbF.tagName=='BODY'?null:xbF.parentNode);}
return null;}
var XqG=[
'color'
,'fontFamily'
,'fontSize'
,'fontStyle'
,'fontWeight'
,'textDecoration'
,'textAlign'
];
function XnC(xcF,XYv,xoK){
if(xcF.nodeType==1&&xcF.tagName!='!'){
var XqJ;
var x6L=[];
if(xcF.className){
XqJ=true;
xa7=xYD(xcF,XqG,x6L);
xa7||(x6L=[]);}
else{
XqJ=false;
xcF.className=(XYv.xFO.XpP||'dgo');}
var XqL=xoK>0
?XTd(XYv.XqM[xoK-1])
:XYv.XqM[xoK];
XYv.XqM[xoK]=XqL;
switch(xcF.tagName){
case 'FONT':
xcF.color&&(XqL.xnM=xcF.color);
xcF.face&&(XqL.XqK=xcF.face);
if(xcF.size){
var size=Math.max(1,xcF.size-0);
XqL.XqN=(size>=Xpv.length
?7*size:Xpv[size]);}
break;
case 'U':
XqL.XqO=true;
break;
case 'EM':
XqL.xKI=true;
break;
case 'STRONG':
XqL.XqI=true;
break;
case 'P':
case 'DIV':
xcF.align&&(XqL.XqH=xcF.align);
break;
default:
break;}
if(typeof(xcF.style.color)=='string'){
if(xcF.style.color){
XqL.xnM=xcF.style.color;}
else if(XqJ&&x6L[0]){
XqL.xnM=x6L[0];}
XqL.xnM&&
XAa(xcF.style,'color',XqL.xnM);}
if(typeof(xcF.style.fontFamily)=='string'){
if(xcF.style.fontFamily){
XqL.XqK=xcF.style.fontFamily;}
else if(XqJ&&x6L[1]){
XqL.XqK=x6L[1];}
XqL.XqK&&
XAa(xcF.style,'fontFamily',XqL.XqK);}
if(typeof(xcF.style.fontSize)=='string'){
if(xcF.style.fontSize){
XqL.XqN=xcF.style.fontSize;}
else if(XqJ&&x6L[2]){
XqL.XqN=x6L[2];}
XqL.XqN&&
XAa(xcF.style,'fontSize',XqL.XqN);}
if(XqF(xcF)&&
typeof(xcF.style.textAlign)=='string')
{
if(xcF.style.textAlign){
XqL.XqH=xcF.style.textAlign;}
else if(XqJ&&x6L[6]){
XqL.XqH=x6L[6];}
XqL.XqH&&
XAa(xcF.style,'textAlign',XqL.XqH);}
if(typeof(xcF.style.fontStyle)=='string'){
if(xcF.style.fontStyle){
XqL.xKI=(xcF.style.fontStyle=='italic');}
else if(XqJ&&x6L[0]){
XqL.xKI=(x6L[0]=='italic');}
XqL.xKI&&
XAa(xcF.style,'fontStyle','italic');}
if(typeof(xcF.style.fontWeight)=='string'){
if(xcF.style.fontWeight){
XqL.XqI=(xcF.style.fontWeight=='bold');}
else if(XqJ&&x6L[0]){
XqL.XqI=(x6L[0]=='bold');}
XqL.XqI&&
XAa(xcF.style,'fontWeight','bold');}
if(typeof(xcF.style.textDecoration)=='string'){
if(xcF.style.textDecoration){
XqL.XqO=(xcF.style.textDecoration=='underline');}
else if(XqJ&&x6L[0]){
XqL.XqO=(x6L[0]=='underline');}
XqL.XqO&&
XAa(xcF.style,'textDecoration','underline');}}
return true;}
if(self.XI7){XI7.XJB(new XIX(
'../render_bubble.js',['object_configurator.js',
'../render_base.js',
'../render_container.js'],
XAb));}
else{
XAb();}

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
