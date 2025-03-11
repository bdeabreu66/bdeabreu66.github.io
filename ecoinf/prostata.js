
function showProstata(){
divPelvis.style.visibility="hidden";
divProst=document.getElementById('Prostata');
divProst.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
if (typeof(Examen.prostata)==='undefined')  {Examen.prostata=new Object();}

var texto=Titulo('Prostata','showPelvico','divProst');
texto+=' <p class="menuc" onclick="showProstDet();">General</p>';
if (typeof(Examen.prostata.ubic)==='undefined')  {Examen.prostata.ubic=new Object;
Examen.prostata.ubic=[];
Examen.prostata.ubic[0]="Polo superior"
Examen.prostata.ubic[1]="Polo inferior";
Examen.prostata.ubic[2]="Hemisferio derecho";
Examen.prostata.ubic[3]="Hemisferio iquierdo";
}
Examen.prostata.ubic=[];
Examen.prostata.ubic[0]="Polo superior"
Examen.prostata.ubic[1]="Polo inferior";
Examen.prostata.ubic[2]="Hemisferio derecho";
Examen.prostata.ubic[3]="Hemisferio iquierdo";

ubicaciones=Examen.prostata.ubic;
if (typeof(Examen.prostata.masas)==='undefined')  {Examen.prostata.masas=new Object;
Examen.prostata.masas.dmasa=[]}
//Examen.prostata.masas=new Object;
//Examen.prostata.masas.dmasa=[];
Examen.prostata.masas.pos=1;
omasa=Examen.prostata.masas;

//alert(Object.keys(omasa));
texto+=' <p class="menuc" onclick="showFocal(\'Prostata\',\'showProstata\',divProst);">Focal</p>';
texto+=' <p class="menuc" onclick="showProstTam();">Medidas</p>';
divProst.innerHTML=texto;
divProst.style.visibility="visible";

}

function setProstata(){
try { Examen.prostata.ProstTam1=document.getElementById('ProstTam1').value;} catch {console.log('Error')}
try { Examen.prostata.ProstTam2=document.getElementById('ProstTam2').value;} catch {console.log('Error')}
try { Examen.prostata.ProstTam3=document.getElementById('ProstTam3').value;} catch {console.log('Error')}

try {

if (document.getElementById("ProstVis").checked)  {Examen.prostata.ProstVis='checked'} else {Examen.prostata.ProstVis=''}
} catch {console.log('Error')}
}

function showProstTam(){
divProst.style.visibility="hidden";
divProstT=document.getElementById('ProstTam');
divProstT.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Prostata','showProstata','divProstT');
if (typeof(Examen.prostata.ProstTam1)==='undefined') 
 {Examen.prostata.ProstTam1=0;v1=0} else {v1=Examen.prostata.ProstTam1}
if (typeof(Examen.prostata.PanTam2)==='undefined') 
 {Examen.prostata.ProstTam2=0;v2=0} else {v2=Examen.prostata.ProstTam2}
if (typeof(Examen.prostata.ProstTam3)==='undefined') 
 {Examen.prostata.ProstTam3=0;v3=0} else {v3=Examen.prostata.ProstTam3}

texto+=' <label for="ProstTam1">A-P(cm):</label><input onchange="setProstata()" type="number" id="ProstTam1" value="'+v1+'"><br>';
texto+=' <label for="ProstTam2">Transversal (cm):</label><input onchange="setProstata()" type="number" id="ProstTam2" value="'+v2+'"><br>';
texto+=' <label for="ProstTam3">Longitudinal(cm):</label><input onchange="setProstata()" type="number" id="ProstTam3" value="'+v3+'"><br>';

divProstT.innerHTML=texto;
divProstT.style.visibility="visible";
}

function showProstDet(){
divProst.style.visibility="hidden";
divProstD=document.getElementById('ProstDet');
divProstD.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Prostata','showProstata','divProstD');
if (typeof(Examen.prostata.ProstVis)==='undefined') 
 {Examen.prostata.ProstVis="checked";v1="checked"} else {v1=Examen.prostata.ProstVis}

texto+='<label for="ProstVis">Visible</label><input type="checkbox" id="ProstVis" '+ v1 +' onchange="setProstata()"><br>';

divProstD.innerHTML=texto;
divProstD.style.visibility="visible";
}
