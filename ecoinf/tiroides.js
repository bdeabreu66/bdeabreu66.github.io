function showIstmo(){
divTir.style.visibility="hidden";
divIstmo=document.getElementById('Istmo');
divIstmo.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Istmo','showTiroides','divIstmo');


divIstmo.innerHTML=texto;
divIstmo.style.visibility="visible";
if (typeof(Examen.tistmo)==='undefined')  {Examen.tistmo=new Object();}

}



function showTirD(){
divTir.style.visibility="hidden";
divTirD=document.getElementById('TirD');
divTirD.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Tiroides derecha','showTiroides','divTirD');
texto+=' <p class="menuc" onclick="showTirDDet();">General</p>';
texto+=' <p class="menuc">Focal</p>';
texto+=' <p class="menuc" onclick="showTirDTam();">Medidas</p>';
divTirD.innerHTML=texto;
divTirD.style.visibility="visible";
if (typeof(Examen.tird)==='undefined')  {Examen.tird=new Object();}

}

function setTirD(){
try { Examen.tird.TirDTam1=document.getElementById('TirDTam1').value;} catch {console.log('Error')}

try {

if (document.getElementById("TirDVis").checked)  {Examen.tird.TirDVis='checked'} else {Examen.tird.TirDVis=''}
} catch {console.log('Error')}
}

function showTirDTam(){
divTirD.style.visibility="hidden";
divTirDT=document.getElementById('TirDTam');
divTirDT.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Tiroides derecha','showTirD','divTirDT');
if (typeof(Examen.tird.TirDTam1)==='undefined') 
 {Examen.tird.TirDTam1=0;v1=0} else {v1=Examen.tird.TirDTam1}

texto+=' <label for="TirDTam1">A-P(cm):</label><input onchange="setTirD()" type="number" id="TirDTam1" value="'+v1+'"><br>';

divTirDT.innerHTML=texto;
divTirDT.style.visibility="visible";
}

function showTirDDet(){
divTirD.style.visibility="hidden";
divTirDD=document.getElementById('TirDDet');
divTirDD.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Tiroides derecha','showTirD','divTirDD');
if (typeof(Examen.tird.TirDVis)==='undefined') 
 {Examen.tird.TirDVis="checked";v1="checked"} else {v1=Examen.tird.TirDVis}

texto+='<label for="TirDVis">Visible</label><input type="checkbox" id="TirDVis" '+ v1 +' onchange="setTirD()"><br>';

divTirDD.innerHTML=texto;
divTirDD.style.visibility="visible";
}

function showTirI(){
divTir.style.visibility="hidden";
divTirI=document.getElementById('TirI');
divTirI.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Tiroides izquierda','showTiroides','divTirI');
texto+=' <p class="menuc" onclick="showTirIDet();">General</p>';
texto+=' <p class="menuc">Focal</p>';
texto+=' <p class="menuc" onclick="showTirITam();">Medidas</p>';
divTirI.innerHTML=texto;
divTirI.style.visibility="visible";
if (typeof(Examen.tiri)==='undefined')  {Examen.tiri=new Object();}

}

function setTirI(){
try { Examen.tiri.TirITam1=document.getElementById('TirITam1').value;} catch {console.log('Error')}

try {

if (document.getElementById("TirIVis").checked)  {Examen.tiri.TirIVis='checked'} else {Examen.tiri.TirIVis=''}
} catch {console.log('Error')}
}

function showTirITam(){
divTirI.style.visibility="hidden";
divTirIT=document.getElementById('TirITam');
divTirIT.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Tiroides izquierda','showTirI','divTirIT');
if (typeof(Examen.tiri.TirITam1)==='undefined') 
 {Examen.tiri.TirITam1=0;v1=0} else {v1=Examen.tiri.TirITam1}

texto+=' <label for="TirITam1">A-P(cm):</label><input onchange="setTirI()" type="number" id="TirITam1" value="'+v1+'"><br>';

divTirIT.innerHTML=texto;
divTirIT.style.visibility="visible";
}

function showTirIDet(){
divTirI.style.visibility="hidden";
divTirID=document.getElementById('TirIDet');
divTirID.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Tiroides izquierda','showTirI','divTirID');
if (typeof(Examen.tiri.TirIVis)==='undefined') 
 {Examen.tiri.TirIVis="checked";v1="checked"} else {v1=Examen.tiri.TirIVis}

texto+='<label for="TirIVis">Visible</label><input type="checkbox" id="TirIVis" '+ v1 +' onchange="setTirI()"><br>';

divTirID.innerHTML=texto;
divTirID.style.visibility="visible";
}
