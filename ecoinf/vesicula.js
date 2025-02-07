function showVesBil(){
divA.style.visibility="hidden";
divVB=document.getElementById('VesBil');
divVB.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Ves&iacute;cula Biliar','showAbdominal','divVB');
texto+=' <p class="menuc">General</p>';
texto+=' <p class="menuc">Focal</p>';
texto+=' <p class="menuc" onclick="showVesBilTam();">Medidas</p>';
divVB.innerHTML=texto;
divVB.style.visibility="visible";
if (typeof(Examen.VB)==='undefined')  {Examen.VB=new Object();}

}
function setVB(){
Examen.VB.VBTam1=document.getElementById('VBTam1').value;
Examen.VB.VBTam2=document.getElementById('VBTam2').value;
Examen.VB.VBTam3=document.getElementById('VBTam3').value;
Examen.VB.VBTam4=document.getElementById('VBTam4').value;
}

function showVesBilTam(){
divVB.style.visibility="hidden";
divVBT=document.getElementById('VesBilTam');
divVBT.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Ves&iacute;cula Biliar','showVesBil','divVBT');
if (typeof(Examen.VB.VBTam1)==='undefined') 
 {Examen.VB.VBTam1=0;v1=0} else {v1=Examen.VB.VBTam1}
if (typeof(Examen.VB.VBTam2)==='undefined') 
 {Examen.VB.VBTam2=0;v2=0} else {v2=Examen.VB.VBTam2}
if (typeof(Examen.VB.VBTam3)==='undefined') 
 {Examen.VB.VBTam3=0;v3=0} else {v3=Examen.VB.VBTam3}
if (typeof(Examen.VB.VBTam4)==='undefined') 
 {Examen.VB.VBTam4=0;v4=0} else {v4=Examen.VB.VBTam4}
texto+=' <label for="VBTam1">A-P (cm):</label><input onchange="setVB()" type="number" id="VBTam1" value="'+v1+'" ><br>';
texto+=' <label for="VBTam2">Transverso (cm):</label><input onchange="setVB()" type="number" id="VBTam2" value="'+v2+'"><br>';
texto+=' <label for="VBTam3">Longitudinal (cm):</label><input onchange="setVB()" type="number" id="VBTam3" value="'+v3+'"><br>';
texto+=' <label for="VBTam4">Espesor de pared (mm):</label><input onchange="setVB()" type="number" id="VBTam4" value="'+v4+'"><br>';
divVBT.innerHTML=texto;
divVBT.style.visibility="visible";

}
