function showTesD(){
divTes.style.visibility="hidden";
divTesD=document.getElementById('TesD');
divTesD.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Test&iacute;culo Derecho','showTesticular','divTesD');
texto+=' <p class="menuc" onclick="showTesDDet();">General</p>';
texto+=' <p class="menuc">Focal</p>';
texto+=' <p class="menuc" onclick="showTesDTam();">Medidas</p>';
divTesD.innerHTML=texto;
divTesD.style.visibility="visible";
if (typeof(Examen.tesd)==='undefined')  {Examen.tesd=new Object();}

}

function setTesD(){
try { Examen.tesd.TesDTam1=document.getElementById('TesDTam1').value;} catch {console.log('Error')}

try {

if (document.getElementById("TesDVis").checked)  {Examen.tesd.TesDVis='checked'} else {Examen.tesd.TesDVis=''}
} catch {console.log('Error')}
}

function showTesDTam(){
divTesD.style.visibility="hidden";
divTesDT=document.getElementById('TesDTam');
divTesDT.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Test&iacute;culo derecho','showTesD','divTesDT');
if (typeof(Examen.tesd.TesDTam1)==='undefined') 
 {Examen.tesd.TesDTam1=0;v1=0} else {v1=Examen.tesd.TesDTam1}

texto+=' <label for="TesDTam1">A-P(cm):</label><input onchange="setTesD()" type="number" id="TesDTam1" value="'+v1+'"><br>';

divTesDT.innerHTML=texto;
divTesDT.style.visibility="visible";
}

function showTesDDet(){
divTesD.style.visibility="hidden";
divTesDD=document.getElementById('TesDDet');
divTesDD.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Test&iacute;culo derecho','showTesD','divTesDD');
if (typeof(Examen.tesd.TesDVis)==='undefined') 
 {Examen.tesd.TesDVis="checked";v1="checked"} else {v1=Examen.tesd.TesDVis}

texto+='<label for="TesDVis">Visible</label><input type="checkbox" id="TesDVis" '+ v1 +' onchange="setTesD()"><br>';

divTesDD.innerHTML=texto;
divTesDD.style.visibility="visible";
}

function showTesI(){
divTes.style.visibility="hidden";
divTesI=document.getElementById('TesI');
divTesI.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Test&iacute;culo izquierdo','showTesticular','divTesI');
texto+=' <p class="menuc" onclick="showTesIDet();">General</p>';
texto+=' <p class="menuc">Focal</p>';
texto+=' <p class="menuc" onclick="showTesITam();">Medidas</p>';
divTesI.innerHTML=texto;
divTesI.style.visibility="visible";
if (typeof(Examen.tesi)==='undefined')  {Examen.tesi=new Object();}

}

function setTesI(){
try { Examen.tesi.TesITam1=document.getElementById('TesITam1').value;} catch {console.log('Error')}

try {

if (document.getElementById("TesIVis").checked)  {Examen.tesi.TesIVis='checked'} else {Examen.tesi.TesIVis=''}
} catch {console.log('Error')}
}

function showTesITam(){
divTesI.style.visibility="hidden";
divTesIT=document.getElementById('TesITam');
divTesIT.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Test&iacute;culo izquierdo','showTesI','divTesIT');
if (typeof(Examen.tesi.TesITam1)==='undefined') 
 {Examen.tesi.TesITam1=0;v1=0} else {v1=Examen.tesi.TesITam1}

texto+=' <label for="TesITam1">A-P(cm):</label><input onchange="setTesI()" type="number" id="TesITam1" value="'+v1+'"><br>';

divTesIT.innerHTML=texto;
divTesIT.style.visibility="visible";
}

function showTesIDet(){
divTesI.style.visibility="hidden";
divTesID=document.getElementById('TesIDet');
divTesID.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Test&iacute;culo izquierdo','showTesI','divTesID');
if (typeof(Examen.tesi.TesIVis)==='undefined') 
 {Examen.tesi.TesIVis="checked";v1="checked"} else {v1=Examen.tesi.TesIVis}

texto+='<label for="TesIVis">Visible</label><input type="checkbox" id="TesIVis" '+ v1 +' onchange="setTesI()"><br>';

divTesID.innerHTML=texto;
divTesID.style.visibility="visible";
}
