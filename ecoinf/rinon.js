function showRd(){
divA.style.visibility="hidden";
divRd=document.getElementById('RD');
divRd.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Ri&nacute;on derecho','showAbdominal','divRd');
texto+=' <p class="menuc">General</p>';
texto+=' <p class="menuc">Litos</p>';
texto+=' <p class="menuc">Nodulos</p>';
texto+=' <p class="menuc" onclick="showRdTam();">Medidas</p>';
divRd.innerHTML=texto;
divRd.style.visibility="visible";
if (typeof(Examen.rd)==='undefined')  {Examen.rd=new Object();}

}

function setRD(){

try {Examen.rd.RDTam1=document.getElementById('RDTam1').value;} catch {console.log("error")}
try {Examen.rd.RDTam2=document.getElementById('RDTam2').value;} catch {console.log("error")}
try {Examen.rd.RDTam3=document.getElementById('RDTam3').value;} catch {console.log("error")}
try {Examen.rd.RDTam4=document.getElementById('RDTam4').value;} catch {console.log("error")}
try {Examen.rd.RDTam5=document.getElementById('RDTam5').value;} catch {console.log("error")}

}
function showRdTam(){
divRd.style.visibility="hidden";
divRdT=document.getElementById('RDTam');
divRdT.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Ri&nacute;on derecho','showRd','divRdT');

if (typeof(Examen.rd.RDTam1)==='undefined') 
 {Examen.rd.RDTam1=0;v1=0} else {v1=Examen.rd.RDTam1}
if (typeof(Examen.rd.RDTam2)==='undefined') 
 {Examen.rd.RDTam2=0;v2=0} else {v2=Examen.rd.RDTam2}
if (typeof(Examen.rd.RDTam3)==='undefined') 
 {Examen.rd.RDTam3=0;v3=0} else {v3=Examen.rd.RDTam3}
if (typeof(Examen.rd.RDTam4)==='undefined') 
 {Examen.rd.RDTam4=0;v4=0} else {v4=Examen.rd.RDTam4}
if (typeof(Examen.rd.RDTam5)==='undefined') 
 {Examen.rd.RDTam5=0;v5=0} else {v5=Examen.rd.RDTam5}


texto+=' <label for="RDTam1">Eje transversal (cm):</label><input type="number" onchange="setRD()" id="RDTam1" value="'+v1+'"><br>';
texto+=' <label for="RDTam2">Eje vertical(cm):</label><input type="number" onchange="setRD()" id="RDTam2" value="'+v2+'"><br>';
texto+=' <label for="RDTam3">Eje Longitudinal (cm):</label><input type="number" onchange="setRD()" id="RDTam3" value="'+v3+'"><br>';
texto+=' <label for="RDTam4">Ancho parenquima(cm):</label><input type="number" onchange="setRD()" id="RDTam4" value="'+v4+'"><br>';
texto+=' <label for="RDTam5">Ancho seno renal(cm):</label><input type="number" onchange="setRD()" id="RDTam5" value="'+v5+'"><br>';

divRdT.innerHTML=texto;
divRdT.style.visibility="visible";
}

function showRi(){
divA.style.visibility="hidden";
divRi=document.getElementById('RI');
divRi.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Ri&nacute;on izquierdo','showAbdominal','divRi');
texto+=' <p class="menuc">General</p>';
texto+=' <p class="menuc">Litos</p>';
texto+=' <p class="menuc">Nodulos</p>';
texto+=' <p class="menuc" onclick="showRiTam();">Medidas</p>';
divRi.innerHTML=texto;
divRi.style.visibility="visible";
if (typeof(Examen.ri)==='undefined')  {Examen.ri=new Object();}

}

function setRI(){
try {Examen.ri.RITam1=document.getElementById('RITam1').value;} catch {console.log("error")}
try {Examen.ri.RITam2=document.getElementById('RITam2').value;} catch {console.log("error")}
try {Examen.ri.RITam3=document.getElementById('RITam3').value;} catch {console.log("error")}
try {Examen.ri.RITam4=document.getElementById('RITam4').value;} catch {console.log("error")}
try {Examen.ri.RITam5=document.getElementById('RITam5').value;} catch {console.log("error")}

}
function showRiTam(){
divRi.style.visibility="hidden";
divRiT=document.getElementById('RITam');
divRiT.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Ri&nacute;on Izquierdo','showRi','divRiT');

if (typeof(Examen.ri.RITam1)==='undefined') 
 {Examen.ri.RITam1=0;v1=0} else {v1=Examen.ri.RITam1}
if (typeof(Examen.ri.RITam2)==='undefined') 
 {Examen.ri.RDTam2=0;v2=0} else {v2=Examen.ri.RITam2}
if (typeof(Examen.ri.RITam3)==='undefined') 
 {Examen.ri.RITam3=0;v3=0} else {v3=Examen.ri.RITam3}
if (typeof(Examen.ri.RITam4)==='undefined') 
 {Examen.ri.RITam4=0;v4=0} else {v4=Examen.ri.RITam4}
if (typeof(Examen.ri.RITam5)==='undefined') 
 {Examen.ri.RITam5=0;v5=0} else {v5=Examen.ri.RITam5}


texto+=' <label for="RITam1">Eje transversal (cm):</label><input type="number" onchange="setRI()" id="RITam1" value="'+v1+'"><br>';
texto+=' <label for="RITam2">Eje vertical(cm):</label><input type="number" onchange="setRI()" id="RITam2" value="'+v2+'"><br>';
texto+=' <label for="RITam3">Eje Longitudinal (cm):</label><input type="number" onchange="setRI()" id="RITam3" value="'+v3+'"><br>';
texto+=' <label for="RITam4">Ancho del par&eacute;nquima (cm):</label><input type="number" onchange="setRI()" id="RITam4" value="'+v4+'"><br>';
texto+=' <label for="RITam5">Seno renal (cm):</label><input type="number" onchange="setRI()" id="RITam5" value="'+v5+'"><br>';


divRiT.innerHTML=texto;
divRiT.style.visibility="visible";
}
