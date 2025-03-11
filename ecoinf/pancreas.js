function showPancreas(){
divA.style.visibility="hidden";
divPan=document.getElementById('Pancreas');
divPan.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
//var texto='<h4 style="text-align:center;color:yellow;"> Pancreas ';
var texto=Titulo('Pancreas','showAbdominal','divPan');

if (typeof(Examen.pancreas)==='undefined')  {Examen.pancreas=new Object();}
if (typeof(Examen.pancreas.ubic)==='undefined')  {Examen.pancreas.ubic=new Object;
}
Examen.pancreas.ubic=[];
Examen.pancreas.ubic[0]="Cabeza"
Examen.pancreas.ubic[1]="Cuerpo";
Examen.pancreas.ubic[2]="Cola";
ubicaciones=Examen.pancreas.ubic;
if (typeof(Examen.pancreas.masas)==='undefined')  {Examen.pancreas.masas=new Object;
Examen.pancreas.masas.dmasa=[]}
Examen.pancreas.masas.pos=2;
omasa=Examen.pancreas.masas;
texto+=' <p class="menuc" onclick="showPanDet();">General</p>';
texto+=' <p class="menuc" onclick="showFocal(\'Pancreas\',\'showPancreas\',divPan);">Focal</p>';
texto+=' <p class="menuc" onclick="showPanTam();">Medidas</p>';
divPan.innerHTML=texto;
divPan.style.visibility="visible";
if (typeof(Examen.pancreas)==='undefined')  {Examen.pancreas=new Object();}

}

function setPancreas(){
try { Examen.pancreas.PanTam1=document.getElementById('PanTam1').value;} catch {console.log('Error')}
try { Examen.pancreas.PanTam2=document.getElementById('PanTam2').value;} catch {console.log('Error')}
try { Examen.pancreas.PanTam3=document.getElementById('PanTam3').value;} catch {console.log('Error')}
try { Examen.pancreas.PanTam4=document.getElementById('PanTam4').value;} catch {console.log('Error')}

if (document.getElementById("PanVis").checked)  {Examen.pancreas.PanVis='checked'} else {Examen.pancreas.PanVis=''}
if (document.getElementById("PanHom").checked)  {Examen.pancreas.PanHom='checked'} else {Examen.pancreas.PanHom=''}

if (document.getElementById("PanEco1").checked) {Examen.pancreas.PanEco='hipo'} 
if (document.getElementById("PanEco2").checked) {Examen.pancreas.PanEco='hiper'} 
if (document.getElementById("PanEco3").checked) {Examen.pancreas.PanEco='normal'} 

}

function showPanTam(){
divPan.style.visibility="hidden";
divPT=document.getElementById('PanTam');
divPT.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Pancreas','showPancreas','divPT');
if (typeof(Examen.pancreas.PanTam1)==='undefined') 
 {Examen.pancreas.PanTam1=0;v1=0} else {v1=Examen.pancreas.PanTam1}
if (typeof(Examen.pancreas.PanTam2)==='undefined') 
 {Examen.pancreas.PanTam2=0;v2=0} else {v2=Examen.pancreas.PanTam2}
if (typeof(Examen.pancreas.PanTam3)==='undefined') 
 {Examen.pancreas.PanTam3=0;v3=0} else {v3=Examen.pancreas.PanTam3}
if (typeof(Examen.pancreas.PanTam4)==='undefined') 
 {Examen.pancreas.PanTam4=0;v4=0} else {v4=Examen.pancreas.PanTam4}

texto+=' <label for="PanTam1">Cabeza (cm):</label><input onchange="setPancreas()" type="number" id="PanTam1" value="'+v1+'"><br>';
texto+=' <label for="PanTam2">Cuerpo (cm):</label><input onchange="setPancreas()" type="number" id="PanTam2" value="'+v2+'"><br>';
texto+=' <label for="PanTam3">Cola (cm):</label><input onchange="setPancreas()" type="number" id="PanTam3" value="'+v3+'"><br>';
texto+=' <label for="PanTam4">Espesor conducto pancreatico (mm): </label><input onchange="setPancreas()" type="number" id="PanTam4" value="'+v4+'"><br>';
divPT.innerHTML=texto;
divPT.style.visibility="visible";
}

function showPanDet(){
divPan.style.visibility="hidden";
divPD=document.getElementById('PanDet');
divPD.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Pancreas','showPancreas','divPD');
if (typeof(Examen.pancreas.PanVis)==='undefined') 
 {Examen.pancreas.PanVis="checked";v1="checked"} else {v1=Examen.pancreas.PanVis}
if (typeof(Examen.pancreas.PanHom)==='undefined') 
 {Examen.pancreas.PanHom="checked";v2="checked"} else {v2=Examen.pancreas.PanHom}
v3='';v4='';v5='';
if (typeof(Examen.pancreas.PanEco)==='undefined') 
 {Examen.pancreas.PanEco="normal";v5="checked"} 

 else {
if (Examen.pancreas.PanEco=="normal") v5='checked';
if (Examen.pancreas.PanEco=="hipo") v3='checked';
if (Examen.pancreas.PanEco=="hiper") v4='checked';

}
texto+='<label for="PanVis">Visible</label><input type="checkbox" id="PanVis" '+ v1 +' onchange="setPancreas()"><br>';
texto+='<label for="PanHom">Parenquima homogeneo</label><input type="checkbox" id="PanHom" '+ v2 +' onchange="setPancreas()"><br>';
texto+='Ecogenicidad: <br><label for="PanEco1"> &nbsp&nbsp Hipoecoico </label><input type="radio" id="PanEco1" name="PanEco"'+ v3 +' onchange="setPancreas()"><br>';
texto+='<label for="PanEco2"> &nbsp&nbsp HiperEcoico</label><input type="radio" id="PanEco2" name="PanEco"'+ v4 +' onchange="setPancreas()"><br>';
texto+='<label for="PanEco3"> &nbsp&nbsp Propia </label><input type="radio" id="PanEco3" name="PanEco"'+ v5 +' onchange="setPancreas()"><br>';

divPD.innerHTML=texto;
divPD.style.visibility="visible";
}
