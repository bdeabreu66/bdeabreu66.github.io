function SEco(){
if (omasa.dmasa[indmasa].eco.ana) return 'Anaecoico';
if (omasa.dmasa[indmasa].eco.anadif) return 'Anaecoico Difuminado';
if (omasa.dmasa[indmasa].eco.hipo) return 'Hipoecoico';
if (omasa.dmasa[indmasa].eco.hiper) return 'Hiperecoico';
}
function quitaEco(){
divsel.style.visibility='hidden';
document.getElementById("butEco").innerHTML=SEco();
}
function ChEco(){
var texto='';
divsel=document.getElementById("divSel");
divsel.style="position:fixed;top:25%;left:0%;height:60%;width:100%;background-color:gray;";
texto+='<label for="Eco1'+indmasa+'"> &nbsp&nbsp anecoico </label><input type="radio" id="Eco1'+indmasa+'" name="Eco'+indmasa+'" '+ omasa.dmasa[indmasa].eco.ana +' onchange="setEco();quitaEco()" ><br>';
texto+='<label for="Eco4'+indmasa+'"> &nbsp&nbsp anecoico difuminado </label><input type="radio" id="Eco4'+indmasa+'" name="Eco'+indmasa+'"'+ omasa.dmasa[indmasa].eco.anadif +' onchange="setEco();quitaEco()"><br>';
texto+='<label for="Eco2'+indmasa+'"> &nbsp&nbsp hipoecoico</label><input type="radio" id="Eco2'+indmasa+'" name="Eco'+indmasa+'"'+ omasa.dmasa[indmasa].eco.hipo +' onchange="setEco();quitaEco()"><br>';
texto+='<label for="Eco3'+indmasa+'"> &nbsp&nbsp hiperecoico </label><input type="radio" id="Eco3'+indmasa+'" name="Eco'+indmasa+'" '+ omasa.dmasa[indmasa].eco.hiper  +' onchange="setEco();quitaEco()"><br>';
//texto+='<button onclick="quitaEco()">Ok</button>';
divsel.innerHTML=texto;
divsel.style.visibility='visible';
}
function setEco(){
var j=indmasa;
var ne='Eco1'+j;
if (document.getElementById(ne).checked) {omasa.dmasa[j].eco.ana="checked";}
 else {omasa.dmasa[j].eco.ana="";}
var ne='Eco4'+j;
if (document.getElementById(ne).checked) {omasa.dmasa[j].eco.anadif="checked";}
 else {omasa.dmasa[j].eco.anadif="";}
var ne='Eco2'+j;
if (document.getElementById(ne).checked) {omasa.dmasa[j].eco.hipo="checked";}
 else {omasa.dmasa[j].eco.hipo="";}
var ne='Eco3'+j;
if (document.getElementById(ne).checked) {omasa.dmasa[j].eco.hiper="checked";}
 else {omasa.dmasa[j].eco.hiper="";}
}
function SHom(){
if (omasa.dmasa[indmasa].homo) return 'Homog&eacute;neo';
if (omasa.dmasa[indmasa].hetero) return 'Heter&oacute;geneo';
}
function ChHom(){
var texto='';
divsel=document.getElementById("divSel");
divsel.style="position:fixed;top:25%;left:0%;height:60%;width:100%;background-color:gray;";
texto+='<label for="Homo1'+indmasa+'"> &nbsp&nbsp homogeneo </label><input type="radio" id="Homo1'+indmasa+'" name="homo'+indmasa+'" '+ omasa.dmasa[indmasa].homo +' onchange="setHom();quitaHom()"><br>';
texto+='<label for="Homo2'+indmasa+'"> &nbsp&nbsp heterogeneo </label><input type="radio" id="Homo2'+indmasa+'" name="homo'+indmasa+'" '+ omasa.dmasa[indmasa].hetero +' onchange="setHom();quitaHom()"><br>';
divsel.innerHTML=texto;
divsel.style.visibility='visible';
}
function quitaHom(){
divsel.style.visibility='hidden';
document.getElementById("butHom").innerHTML=SHom();
}
function setHom(){
var j=indmasa;
var ne='Homo1'+j;
if (document.getElementById(ne).checked) {omasa.dmasa[j].homo="checked";}
 else {omasa.dmasa[j].homo="";}
var ne='Homo2'+j;
if (document.getElementById(ne).checked) {omasa.dmasa[j].hetero="checked";}
 else {omasa.dmasa[j].hetero="";}
}
function SDop(){
if (omasa.dmasa[indmasa].dopp) return 'Positivo';
if (omasa.dmasa[indmasa].dopn) return 'Negativo';
if (omasa.dmasa[indmasa].dops) return 'No utilizado';
}
function ChDop(){
var texto='';
divsel=document.getElementById("divSel");
divsel.style="position:fixed;top:25%;left:0%;height:60%;width:100%;background-color:gray;";
texto+='<label for="Dop1'+indmasa+'"> &nbsp&nbsp Positivo </label><input type="radio" id="Dop1'+indmasa+'" name="Dop'+indmasa+'" '+ omasa.dmasa[indmasa].dopp +' onchange="setDop();quitaDop();"><br>';
texto+='<label for="Dop2'+indmasa+'"> &nbsp&nbsp Negativo </label><input type="radio" id="Dop2'+indmasa+'" name="Dop'+indmasa+'" '+ omasa.dmasa[indmasa].dopn +' onchange="setDop();quitaDop();"><br>';
texto+='<label for="Dop3'+indmasa+'"> &nbsp&nbsp No utilizado </label><input type="radio" id="Dop3'+indmasa+'" name="Dop'+indmasa+'" '+ omasa.dmasa[indmasa].dops +' onchange="setDop();quitaDop();"><br>';
divsel.innerHTML=texto;
divsel.style.visibility='visible';
}
function quitaDop(){
divsel.style.visibility='hidden';
document.getElementById("butDop").innerHTML=SDop();
}
function setDop(){
var j=indmasa;
var ne='Dop1'+j;
if (document.getElementById(ne).checked) {omasa.dmasa[j].dopp="checked";}
 else {omasa.dmasa[j].dopp="";}
var ne='Dop2'+j;
if (document.getElementById(ne).checked) {omasa.dmasa[j].dopn="checked";}
 else {omasa.dmasa[j].dopn="";}
var ne='Dop3'+j;
if (document.getElementById(ne).checked) {omasa.dmasa[j].dops="checked";}
 else {omasa.dmasa[j].dops="";}
}
function SMov(){
if (omasa.dmasa[indmasa].movp) return 'Movil';
if (omasa.dmasa[indmasa].movn) return 'Inmovil';
}
function ChMov(){
var texto='';
divsel=document.getElementById("divSel");
divsel.style="position:fixed;top:25%;left:0%;height:60%;width:100%;background-color:gray;";
texto+='<label for="Mov1'+indmasa+'"> &nbsp&nbsp Movil </label><input type="radio" id="Mov1'+indmasa+'" name="Mov'+indmasa+'" '+ omasa.dmasa[indmasa].movp +' onchange="setMov();quitaMov();"><br>';
texto+='<label for="Mov2'+indmasa+'"> &nbsp&nbsp Inmovil </label><input type="radio" id="Mov2'+indmasa+'" name="Mov'+indmasa+'" '+ omasa.dmasa[indmasa].movn +' onchange="setMov();quitaMov();"><br>';
divsel.innerHTML=texto;
divsel.style.visibility='visible';
}
function quitaMov(){
divsel.style.visibility='hidden';
document.getElementById("butMov").innerHTML=SMov();
}
function setMov(){
var j=indmasa;
var ne='Mov1'+j;
if (document.getElementById(ne).checked) {omasa.dmasa[j].movp="checked";}
 else {omasa.dmasa[j].movp="";}
var ne='Mov2'+j;
if (document.getElementById(ne).checked) {omasa.dmasa[j].movn="checked";}
 else {omasa.dmasa[j].movn="";}
}