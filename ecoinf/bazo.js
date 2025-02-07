
function showBazo(){
divA.style.visibility="hidden";
divB=document.getElementById('Bazo');
divB.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Bazo','showAbdominal','divB');
texto+=' <p class="menuc">General</p>';
texto+=' <p class="menuc">Focal</p>';
texto+=' <p class="menuc" onclick="showBazTam();">Medidas</p>';
divB.innerHTML=texto;
divB.style.visibility="visible";
if (typeof(Examen.bazo)==='undefined')  {Examen.bazo=new Object();}

}

function setBazo(){
Examen.bazo.BazoTam1=document.getElementById('BazoTam1').value;
Examen.bazo.BazoTam2=document.getElementById('BazoTam2').value;
Examen.bazo.BazoTam3=document.getElementById('BazoTam3').value;
}

function showBazTam(){
divB.style.visibility="hidden";
divBT=document.getElementById('BazTam');
divBT.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Bazo','showBazo','divBT');
if (typeof(Examen.bazo.BazoTam1)==='undefined') 
 {Examen.bazo.BazoTam1=0;v1=0} else {v1=Examen.bazo.BazoTam1}
if (typeof(Examen.bazo.BazoTam2)==='undefined') 
 {Examen.bazo.BazoTam2=0;v2=0} else {v2=Examen.bazo.BazoTam2}
if (typeof(Examen.bazo.BazoTam3)==='undefined') 
 {Examen.bazo.BazoTam3=0;v3=0} else {v3=Examen.bazo.BazoTam3}
if (typeof(Examen.bazo.BazoTam4)==='undefined') 
 {Examen.bazo.BazoTam4=0;v4=0} else {v4=Examen.bazo.BazoTam4}

texto+=' <label for="BazoTam1">A-P (cm):</label><input type="number" id="BazoTam1" onchange="setBazo()" value="'+v1+'" ><br>';
texto+=' <label for="BazoTam2">Transverso (cm):</label><input type="number" id="BazoTam2" onchange="setBazo()" value="'+v2+'" ><br>';
texto+=' <label for="BazoTam3">Longitudinal (cm):</label><input type="number" id="BazoTam3" onchange="setBazo()" value="'+v3+'"><br>';
divBT.innerHTML=texto;
divBT.style.visibility="visible";
}

