function showVejiga(){
divPelvis.style.visibility="hidden";
divVejiga=document.getElementById('Vejiga');
divVejiga.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Vejiga','showPelvico','divVejiga');
texto+=' <p class="menuc" onclick="showVejDet();">General</p>';
texto+=' <p class="menuc">Focal</p>';
texto+=' <p class="menuc" onclick="showVejTam();">Medidas</p>';
divVejiga.innerHTML=texto;
divVejiga.style.visibility="visible";
if (typeof(Examen.vejiga)==='undefined')  {Examen.vejiga=new Object();}

}

function setVejiga(){
try { Examen.vejiga.VejTam1=document.getElementById('VejTam1').value;} catch {console.log('Error')}
try { Examen.vejiga.VejTam2=document.getElementById('VejTam2').value;} catch {console.log('Error')}
try { Examen.vejiga.VejTam3=document.getElementById('VejTam3').value;} catch {console.log('Error')}
try { Examen.vejiga.VejTam4=document.getElementById('VejTam4').value;} catch {console.log('Error')}
try { Examen.vejiga.VejTam5=document.getElementById('VejTam5').value;} catch {console.log('Error')}
try { Examen.vejiga.VejTam6=document.getElementById('VejTam6').value;} catch {console.log('Error')}
try { Examen.vejiga.VejTam7=document.getElementById('VejTam7').value;} catch {console.log('Error')}
try { Examen.vejiga.VejTam8=document.getElementById('VejTam8').value;} catch {console.log('Error')}

try {

if (document.getElementById("VejVis").checked)  {Examen.vejiga.VejVis='checked'} else {Examen.vejiga.VejVis=''}
} catch {console.log('Error')}
}

function showVejTam(){
divVejiga.style.visibility="hidden";
divVejT=document.getElementById('VejTam');
divVejT.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Vejiga','showVejiga','divVejT');
if (typeof(Examen.vejiga.VejTam1)==='undefined') 
 {Examen.vejiga.VejTam1=0;v1=0} else {v1=Examen.vejiga.VejTam1}
if (typeof(Examen.vejiga.PanTam2)==='undefined') 
 {Examen.vejiga.VejTam2=0;v2=0} else {v2=Examen.vejiga.VejTam2}
if (typeof(Examen.vejiga.VejTam3)==='undefined') 
 {Examen.vejiga.VejTam3=0;v3=0} else {v3=Examen.vejiga.VejTam3}
if (typeof(Examen.vejiga.VejTam4)==='undefined') 
 {Examen.vejiga.VejTam4=0;v4=0} else {v4=Examen.vejiga.VejTam4}

if (typeof(Examen.vejiga.VejTam5)==='undefined') 
 {Examen.vejiga.VejTam5=0;v5=0} else {v5=Examen.vejiga.VejTam5}
if (typeof(Examen.vejiga.PanTam6)==='undefined') 
 {Examen.vejiga.VejTam6=0;v6=0} else {v6=Examen.vejiga.VejTam6}
if (typeof(Examen.vejiga.VejTam7)==='undefined') 
 {Examen.vejiga.VejTam7=0;v7=0} else {v7=Examen.vejiga.VejTam7}
if (typeof(Examen.vejiga.VejTam8)==='undefined') 
 {Examen.vejiga.VejTam8=0;v8=0} else {v8=Examen.vejiga.VejTam8}

texto+='Pre-miccional;<br>';
texto+=' <label for="VejTam1">A-P(cm):</label><input onchange="setVejiga()" type="number" id="VejTam1" value="'+v1+'"><br>';
texto+=' <label for="VejTam2">Transversal (cm):</label><input onchange="setVejiga()" type="number" id="VejTam2" value="'+v2+'"><br>';
texto+=' <label for="VejTam3">Longitudinal(cm):</label><input onchange="setVejiga()" type="number" id="VejTam3" value="'+v3+'"><br>';
texto+=' <label for="VejTam4">Espesor pared (cm):</label><input onchange="setVejiga()" type="number" id="VejTam4" value="'+v4+'"><br>';
texto+=' <br>';
texto+='Post-miccional;<br>';
texto+=' <label for="VejTam5">A-P(cm):</label><input onchange="setVejiga()" type="number" id="VejTam5" value="'+v5+'"><br>';
texto+=' <label for="VejTam6">Transversal (cm):</label><input onchange="setVejiga()" type="number" id="VejTam6" value="'+v6+'"><br>';
texto+=' <label for="VejTam7">Longitudinal(cm):</label><input onchange="setVejiga()" type="number" id="VejTam7" value="'+v7+'"><br>';
texto+=' <label for="VejTam8">Espesor pared (cm):</label><input onchange="setVejiga()" type="number" id="VejTam8" value="'+v8+'"><br>';

divVejT.innerHTML=texto;
divVejT.style.visibility="visible";
}

function showVejDet(){
divVejiga.style.visibility="hidden";
divVejD=document.getElementById('VejDet');
divVejD.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Vejiga','showVejiga','divVejD');
if (typeof(Examen.vejiga.VejVis)==='undefined') 
 {Examen.vejiga.VejVis="checked";v1="checked"} else {v1=Examen.vejiga.VejVis}
/*
if (typeof(Examen.vejiga.PanHom)==='undefined') 
 {Examen.vejiga.PanHom="checked";v2="checked"} else {v2=Examen.vejiga.PanHom}
v3='';v4='';v5='';
if (typeof(Examen.vejiga.PanHom)==='undefined') 
 {Examen.vejiga.PanEco="normal";v5="checked"} 

 else {
if (Examen.vejiga.PanEco=="normal") v5='checked';
if (Examen.vejiga.PanEco=="hipo") v3='checked';
if (Examen.vejiga.PanEco=="hiper") v4='checked';
}
*/
texto+='<label for="VejVis">Visible</label><input type="checkbox" id="VejVis" '+ v1 +' onchange="setVejiga()"><br>';
/*texto+='<label for="PanHom">Parenquima homogeneo</label><input type="checkbox" id="PanHom" '+ v2 +' onchange="setVejiga()"><br>';
texto+='Ecogenicidad: <br><label for="PanEco1"> &nbsp&nbsp Hipoecoico </label><input type="radio" id="PanEco1" name="PanEco"'+ v3 +' onchange="setVejiga()"><br>';
texto+='<label for="PanEco2"> &nbsp&nbsp HiperEcoico</label><input type="radio" id="PanEco2" name="PanEco"'+ v4 +' onchange="setVejiga()"><br>';
texto+='<label for="PanEco3"> &nbsp&nbsp Propia </label><input type="radio" id="PanEco3" name="PanEco"'+ v5 +' onchange="setVejiga()"><br>';
*/
divVejD.innerHTML=texto;
divVejD.style.visibility="visible";
}
