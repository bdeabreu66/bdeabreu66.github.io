function showUtero(){
divPelvis.style.visibility="hidden";
divUt=document.getElementById('Utero');
divUt.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Utero','showPelvico','divUt');
texto+=' <p class="menuc" onclick="showUteroDet();">General</p>';
texto+=' <p class="menuc">Focal</p>';
texto+=' <p class="menuc" onclick="showUteroTam();">Medidas</p>';
divUt.innerHTML=texto;
divUt.style.visibility="visible";
if (typeof(Examen.utero)==='undefined')  {Examen.utero=new Object();}

}

function setUtero(){
try { Examen.utero.UtTam1=document.getElementById('UtTam1').value;} catch {console.log('Error')}

try {

if (document.getElementById("UtVis").checked)  {Examen.utero.UtVis='checked'} else {Examen.utero.UtVis=''}
} catch {console.log('Error')}
}

function showUteroTam(){
divUt.style.visibility="hidden";
divUtT=document.getElementById('UtTam');
divUtT.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Utero','showUtero','divUtT');
if (typeof(Examen.utero.UtTam1)==='undefined') 
 {Examen.utero.UtTam1=0;v1=0} else {v1=Examen.utero.UtTam1}

texto+=' <label for="UtTam1">A-P(cm):</label><input onchange="setUtero()" type="number" id="UtTam1" value="'+v1+'"><br>';

divUtT.innerHTML=texto;
divUtT.style.visibility="visible";
}

function showUteroDet(){
divUt.style.visibility="hidden";
divUtD=document.getElementById('UtDet');
divUtD.style="position:fixed;top:25%;left:0%;height:60%;width:100%;overflow-y:auto;"
var texto=Titulo('Utero','showUtero','divUtD');
if (typeof(Examen.utero.UtVis)==='undefined') 
 {Examen.utero.UtVis="checked";v1="checked"} else {v1=Examen.utero.UtVis}

texto+='<label for="UtVis">Visible</label><input type="checkbox" id="UtVis" '+ v1 +' onchange="setUtero()"><br>';

divUtD.innerHTML=texto;
divUtD.style.visibility="visible";
}
