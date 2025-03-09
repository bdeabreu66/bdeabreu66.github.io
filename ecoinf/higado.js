function showHigado(){
divA.style.visibility="hidden";
divH=document.getElementById('Higado');
divH.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Higado','showAbdominal','divH');
texto+=' <p class="menuc" onclick="showHigDet();">General</p>';
if (typeof(Examen.higado)==='undefined')  {Examen.higado=new Object();}
if (typeof(Examen.higado.ubic)==='undefined')  {Examen.higado.ubic=new Object;
}
Examen.higado.ubic=[];
Examen.higado.ubic[0]="Segmento I"
Examen.higado.ubic[1]="Segmento II";
Examen.higado.ubic[2]="Segmento III";
Examen.higado.ubic[3]="Segmento IVa";
Examen.higado.ubic[4]="Segmento IVb"
Examen.higado.ubic[5]="Segmento V";
Examen.higado.ubic[6]="Segmento VI";
Examen.higado.ubic[7]="Segmento VII";
Examen.higado.ubic[8]="Segmento VIII";
ubicaciones=Examen.higado.ubic;
if (typeof(Examen.higado.masas)==='undefined')  {Examen.higado.masas=new Object;
Examen.higado.masas.dmasa=[]}
Examen.higado.masas.pos=1;
omasa=Examen.higado.masas;

texto+=' <p class="menuc" onclick="showFocal(\'Higado\',\'showHigado\',divH);">Focal</p>';
texto+=' <p class="menuc" onclick="showHigVasc();">Vascular</p>';
texto+=' <p class="menuc" onclick="showHigTam();">Medidas</p>';
divH.innerHTML=texto;
divH.style.visibility="visible";
}


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
function showHigVasc(){
divH.style.visibility="hidden";
divHV=document.getElementById('HigVasc');
divHV.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Vascular Higado','showHigado','divHV');
texto+=' <p class="menuc" onclick="showHigPorta();">Vena Porta</p>';
texto+=' <p class="menuc" onclick="showHigArtHep();">Arteria Hep&aacute;tica</p>';

divHV.innerHTML=texto;
divHV.style.visibility="visible";
}

function showHigPorta(){
divHV.style.visibility="hidden";
divHVP=document.getElementById('HigVascPorta');
divHVP.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Vena Porta','showHigVasc','divHVP');
if (typeof(Examen.higado.porta)==='undefined')  {Examen.higado.porta=new Object();}
ovaso=Examen.higado.porta;
texto+=' <p class="menuc" onclick="showVascGen(\'Vena Porta\',\'showHigPorta\',divHVP);">General</p>';
texto+=' <p class="menuc" onclick=";">Placas</p>';
texto+=' <p class="menuc" onclick="">Trombos</p>';
divHVP.innerHTML=texto;
divHVP.style.visibility="visible";
}