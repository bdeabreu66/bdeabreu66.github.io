function showOvD(){
divPelvis.style.visibility="hidden";
divOvD=document.getElementById('OvD');
divOvD.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Ovario Derecho','showPelvico','divOvD');
texto+=' <p class="menuc" onclick="showOvDDet();">General</p>';
if (typeof(Examen.ovd.masas)==='undefined')  {Examen.ovd.masas=new Object;
Examen.ovd.masas.dmasa=[]}
//Examen.prostata.masas=new Object;
//Examen.prostata.masas.dmasa=[];
omasa=Examen.ovd.masas;

texto+=' <p class="menuc" onclick="showFocal(\'Ovario derecho\',\'showOvD\',divOvD);">Focal</p>';
texto+=' <p class="menuc" onclick="showOvDTam();">Medidas</p>';
divOvD.innerHTML=texto;
divOvD.style.visibility="visible";
if (typeof(Examen.ovd)==='undefined')  {Examen.ovd=new Object();}

}

function setOvD(){
try { Examen.ovd.OvDTam1=document.getElementById('OvDTam1').value;} catch {console.log('Error')}

try {

if (document.getElementById("OvDVis").checked)  {Examen.ovd.OvDVis='checked'} else {Examen.ovd.OvDVis=''}
} catch {console.log('Error')}
}

function showOvDTam(){
divOvD.style.visibility="hidden";
divOvDT=document.getElementById('OvDTam');
divOvDT.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Ovario derecho','showOvD','divOvDT');
if (typeof(Examen.ovd.OvDTam1)==='undefined') 
 {Examen.ovd.OvDTam1=0;v1=0} else {v1=Examen.ovd.OvDTam1}

texto+=' <label for="OvDTam1">A-P(cm):</label><input onchange="setOvD()" type="number" id="OvDTam1" value="'+v1+'"><br>';

divOvDT.innerHTML=texto;
divOvDT.style.visibility="visible";
}

function showOvDDet(){
divOvD.style.visibility="hidden";
divOvDD=document.getElementById('OvDDet');
divOvDD.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Ovario derecho','showOvD','divOvDD');
if (typeof(Examen.ovd.OvDVis)==='undefined') 
 {Examen.ovd.OvDVis="checked";v1="checked"} else {v1=Examen.ovd.OvDVis}

texto+='<label for="OvDVis">Visible</label><input type="checkbox" id="OvDVis" '+ v1 +' onchange="setOvD()"><br>';

divOvDD.innerHTML=texto;
divOvDD.style.visibility="visible";
}

function showOvI(){
divPelvis.style.visibility="hidden";
divOvI=document.getElementById('OvI');
divOvI.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Ovario izquierdo','showPelvico','divOvI');
texto+=' <p class="menuc" onclick="showOvIDet();">General</p>';
texto+=' <p class="menuc">Focal</p>';
texto+=' <p class="menuc" onclick="showOvITam();">Medidas</p>';
divOvI.innerHTML=texto;
divOvI.style.visibility="visible";
if (typeof(Examen.ovi)==='undefined')  {Examen.ovi=new Object();}

}

function setOvI(){
try { Examen.ovi.OvITam1=document.getElementById('OvITam1').value;} catch {console.log('Error')}

try {

if (document.getElementById("OvIVis").checked)  {Examen.ovi.OvIVis='checked'} else {Examen.ovi.OvIVis=''}
} catch {console.log('Error')}
}

function showOvITam(){
divOvI.style.visibility="hidden";
divOvIT=document.getElementById('OvITam');
divOvIT.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Ovario izquierdo','showOvI','divOvIT');
if (typeof(Examen.ovi.OvITam1)==='undefined') 
 {Examen.ovi.OvITam1=0;v1=0} else {v1=Examen.ovi.OvITam1}

texto+=' <label for="OvITam1">A-P(cm):</label><input onchange="setOvI()" type="number" id="OvITam1" value="'+v1+'"><br>';

divOvIT.innerHTML=texto;
divOvIT.style.visibility="visible";
}

function showOvIDet(){
divOvI.style.visibility="hidden";
divOvID=document.getElementById('OvIDet');
divOvID.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Ovario izquierdo','showOvI','divOvID');
if (typeof(Examen.ovi.OvIVis)==='undefined') 
 {Examen.ovi.OvIVis="checked";v1="checked"} else {v1=Examen.ovi.OvIVis}

texto+='<label for="OvIVis">Visible</label><input type="checkbox" id="OvIVis" '+ v1 +' onchange="setOvI()"><br>';

divOvID.innerHTML=texto;
divOvID.style.visibility="visible";
}
