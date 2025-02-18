function showCarotida(){
divVasc.style.visibility="hidden";
divCarot=document.getElementById('Carotidas');
divCarot.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Carotidas','showVascular','divCarot');
/*texto+=' <p class="menuc" onclick="showCarotCder();">Carotida comun derecha</p>';
texto+=' <p class="menuc" onclick="showCarotIder();">Carotida interna derecha</p>';
texto+=' <p class="menuc" onclick="showCarotEder();">Carotida externa derecha</p>';
texto+=' <p class="menuc" onclick="showVertebralder();">Vertebral derecha</p>';
texto+=' <p class="menuc" onclick="showCarotCizq();">Carotida comun izquierda</p>';
texto+=' <p class="menuc" onclick="showCarotIizq();">Carotida interna izquierda</p>';
texto+=' <p class="menuc" onclick="showCarotEizq();">Carotida externa izquierda</p>';
texto+=' <p class="menuc" onclick="showVertebralizq();">Vertebral izquierda</p>';
*/
texto+='<div id="slide" ><input onchange="redibuja(0);" type="range" min="1" max="100" value="50" class="slider" id="myRange"></div>';
texto+='<div id="svg"></div>'
divCarot.innerHTML=texto;
divCarot.style.visibility="visible";
redibuja(0);
//if (typeof(Examen.higado)==='undefined')  {Examen.higado=new Object();}
}
function showCarotCder(){
divCarot.style.visibility="hidden";
divCarotCder=document.getElementById('CarotCder');
divCarotCder.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Carotida Com&uacute;n derecha','showCarotida','divCarotCder');
divCarotCder.innerHTML=texto;
divCarotCder.style.visibility="visible";
}
function showCarotIder(){
divCarot.style.visibility="hidden";
divCarotIder=document.getElementById('CarotIder');
divCarotIder.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Carotida interna derecha','showCarotida','divCarotIder');
divCarotIder.innerHTML=texto;
divCarotIder.style.visibility="visible";
}

function showCarotEder(){
divCarot.style.visibility="hidden";
divCarotEder=document.getElementById('CarotEder');
divCarotEder.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Carotida externa derecha','showCarotida','divCarotEder');
divCarotEder.innerHTML=texto;
divCarotEder.style.visibility="visible";
}
function showVertebralder(){
divCarot.style.visibility="hidden";
divVertebralder=document.getElementById('Vertebralder');
divVertebralder.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Vertebral derecha','showCarotida','divVertebralder');
divVertebralder.innerHTML=texto;
divVertebralder.style.visibility="visible";
}

function showCarotCizq(){
divCarot.style.visibility="hidden";
divCarotCizq=document.getElementById('CarotCizq');
divCarotCizq.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Carotida Com&uacute;n izquierda','showCarotida','divCarotCizq');
divCarotCizq.innerHTML=texto;
divCarotCizq.style.visibility="visible";
}
function showCarotIizq(){
divCarot.style.visibility="hidden";
divCarotIizq=document.getElementById('CarotIizq');
divCarotIizq.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Carotida interna derecha','showCarotida','divCarotIizq');
divCarotIizq.innerHTML=texto;
divCarotIizq.style.visibility="visible";
}

function showCarotEizq(){
divCarot.style.visibility="hidden";
divCarotEizq=document.getElementById('CarotEizq');
divCarotEizq.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Carotida externa derecha','showCarotida','divCarotEizq');
divCarotEizq.innerHTML=texto;
divCarotEizq.style.visibility="visible";
}
function showVertebralizq(){
divCarot.style.visibility="hidden";
divVertebralizq=document.getElementById('Vertebralizq');
divVertebralizq.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Vertebral izquierda','showCarotida','divVertebralizq');
divVertebralizq.innerHTML=texto;
divVertebralizq.style.visibility="visible";
}
/*
// Actualiza Higado
function setHigado(){
 try {Examen.higado.HigTam1=document.getElementById('HigTam1').value;} catch {console.log("error")};
 try {Examen.higado.HigTam2=document.getElementById('HigTam2').value;} catch {console.log("error")};
 try {Examen.higado.HigTam3=document.getElementById('HigTam3').value;} catch {console.log("error")};
 try {Examen.higado.HigTam4=document.getElementById('HigTam4').value;} catch {console.log("error")};
 try {
  if (document.getElementById("Higborde1").checked) {Examen.higado.borde="liso"}
  if (document.getElementById("Higborde2").checked) {Examen.higado.borde="no_liso"}
 } catch {console.log("error")}
try {
  if (document.getElementById("HigCap").checked) {Examen.higado.capsula="checked";}
   else {Examen.higado.capsula="";}
 } catch {console.log("error")}
try {
  if (document.getElementById("HigDia").checked) {Examen.higado.dia="checked";}
   else {Examen.higado.dia="";}
 } catch {console.log("error")}


}
// Medidas del higado
function showHigTam(){
divH.style.visibility="hidden";
divHT=document.getElementById('HigTam');
divHT.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Higado','showHigado','divHT');
if (typeof(Examen.higado.HigTam1)==='undefined') 
 {Examen.higado.HigTam1=0;v1=0} else {v1=Examen.higado.HigTam1}
if (typeof(Examen.higado.HigTam2)==='undefined') 
 {Examen.higado.HigTam2=0;v2=0} else {v2=Examen.higado.HigTam2}
if (typeof(Examen.higado.HigTam3)==='undefined') 
 {Examen.higado.HigTam3=0;v3=0} else {v3=Examen.higado.HigTam3}
if (typeof(Examen.higado.HigTam4)==='undefined') 
 {Examen.higado.HigTam4=0;v4=0} else {v4=Examen.higado.HigTam4}

texto+=' <label for="HigTam1">L&oacute;bulo derecho (cm):</label><input onchange="setHigado()" type="number" id="HigTam1" value='+v1+'><br>';
texto+=' <label for="HigTam2">L&oacute;bulo izquierdo (cm):</label><input onchange="setHigado()" type="number" id="HigTam2" value='+v2+'><br>';
texto+=' <label for="HigTam3">L&oacute;bulo caudado (cm):</label><input onchange="setHigado()" type="number" id="HigTam3" value='+v3+'><br>';
texto+=' <label for="HigTam4">Di&aacute;metro Vena Porta (cm):</label><input onchange="setHigado()" type="number" id="HigTam4" value='+v4+'><br>';

divHT.innerHTML=texto;
divHT.style.visibility="visible";
}
function showHigDet(){
divH.style.visibility="hidden";
divHD=document.getElementById('HigDet');
divHD.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Higado','showHigado','divHD');
if (typeof(Examen.higado.borde)==='undefined') {Examen.higado.borde="liso";v1="checked";v2=""} 
if (Examen.higado.borde=="liso") {v1="checked";v2="";} else {v1="";v2="checked"}
if (typeof(Examen.higado.capsula)==='undefined') 
 {Examen.higado.capsula="checked";v3="checked"} else {v3=Examen.higado.capsula}
if (typeof(Examen.higado.dia)==='undefined') 
 {Examen.higado.dia="checked";v4="checked"} else {v4=Examen.higado.dia}

texto+='Borde:<br><label for="HigBorde1">&nbsp &nbsp Liso</label><input type="radio" id="HigBorde1" name="HigBorde" '+ v1 +' onchange="setHigado()"><br>';
texto+='<label for="HigBorde2">&nbsp &nbsp Festoneado</label><input type="radio" id="HigBorde2" name="HigBorde" '+ v2 +' onchange="setHigado()"><br>';
texto+='<label for="HigCap">Linea de la c&aacute;psula: </label><input type="checkbox" id="HigCap" '+ v3 +' onchange="setHigado()"><br>';
texto+='<label for="HigDia">Linea diafragm&aacute;tica: </label><input type="checkbox" id="HigDia" '+ v4 +' onchange="setHigado()"><br>';


divHD.innerHTML=texto;
divHD.style.visibility="visible";
}
*/