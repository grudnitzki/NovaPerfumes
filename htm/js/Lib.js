function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function EnviaEmailLB() {
  if (document.NewsLB.Email.value=="") {
    alert("Informe seu e-mail.");
    document.NewsLB.Email.focus();
    return false;
  }
  if (!ValidaEmail(document.NewsLB.Email.value)) {
    alert("E-mail inválido.");
    document.NewsLB.Email.focus();
    return false;
  }
  document.getElementById('light').style.display='none';
  document.getElementById('fade').style.display='none';
  IFEntradaLB.location.href='/lojas/00000003/asp/GravaEmailLB.asp?IDloja=3&Email='+ document.NewsLB.Email.value;
  return false;
}

function CloseLB() {
  document.getElementById('light').style.display='none';
  document.getElementById('fade').style.display='none';
  IFEntradaLB.location.href='/lojas/00000003/asp/GravaEmailLB.asp?IDloja=3&IsCad=1';
}

function GetCookie(name){
var arg=name+"=";
var alen=arg.length;
var clen=document.cookie.length;
var i=0;
while (i<clen){
var j=i+alen;
if(document.cookie.substring(i,j)==arg)return getCookieVal(j);
i=document.cookie.indexOf(" ",i)+1;
if(i==0)break;
}
return null;
}


function getCookieVal(offset){
var endstr=document.cookie.indexOf(";",offset);
if (endstr==-1)endstr=document.cookie.length;
return unescape(document.cookie.substring(offset,endstr));
}


function SetCookie(name,value){
var argv=SetCookie.arguments;
var argc=SetCookie.arguments.length;
var expires=(argc>2)?argv[2]:null;
var path=(argc>3)?argv[3]:null;
var domain=(argc>4)?argv[4]:null;
var secure=(argc>5)?argv[5]:false;
document.cookie=name+"="+escape(value)+((expires==null)?"":(";expires=" + expires.toGMTString()))+((path==null)?"":(";path="+path))+((domain==null)?"":(";domain="+domain))+((secure==true)?"; secure":"");
}

function PosSelectOrder(){
  if(oOrder){
    if(posOrder!=-1){      
      if(!isNaN(iOrderCurrent))if(iOrderCurrent>=0){
        var i=0;
        while(i<oOrder.length && oOrder.options[i].value!=iOrderCurrent)i++;
        if(i<oOrder.length)oOrder.selectedIndex=i;
      }
    }
  }
}

function NewOrder(){
  var iOrder=oOrder.options[oOrder.selectedIndex].value;
  if(iOrder>=0){
    var sURL=document.location.href+'#';
    if(posOrder!=-1){document.location.href=sURL.replace('order='+iOrderCurrent,'order='+iOrder+'&Pag=1');}
    else{document.location.href=sURL.replace('#','&order='+iOrder+'&Pag=1#');}
  }
}




function LeadingZero(Time) {
  return (Time<10)?"0"+Time:+Time;
}

function UpdateTimer(TimerID,iTotalSeconds) {
  var Timer=document.getElementById(TimerID);
  var Seconds=iTotalSeconds;
  var Hours=Math.floor(Seconds/3600);
  Seconds-=Hours*3600;
  var Minutes=Math.floor(Seconds/60);
  Seconds-=Minutes*60;
  var TimeStr="<div class='bgtime'>Termina em <span class=DestPromCapa>"+ LeadingZero(Hours) +":"+ LeadingZero(Minutes) +":"+ LeadingZero(Seconds) +"</span></div>";
  Timer.innerHTML=TimeStr;
}

function Tick(TimerID) {
  eval('Segundos'+ TimerID +'--;');
  eval('var TickTotalSeconds=Segundos'+ TimerID +';');
  UpdateTimer(TimerID,TickTotalSeconds);
  window.setTimeout("Tick('"+ TimerID +"')",1000);
}

function CreateTimer(TimerID,Segundos) {
  eval('Segundos'+ TimerID +'='+ Segundos +';');
  TotalSeconds=Segundos;
  UpdateTimer(TimerID,TotalSeconds);
  window.setTimeout("Tick('"+ TimerID +"')",1000);
}
