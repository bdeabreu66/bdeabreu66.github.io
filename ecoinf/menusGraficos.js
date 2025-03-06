datos_menus=[{"datos":[{"id":"P_1",forma:'circle r="10" cx="425" cy="600"'},
                      {"id":"P_2",forma:'circle r="10" cx="511" cy="490"'},
                      {"id":"P_3",forma:'circle r="10" cx="450" cy="430"'},
                      {"id":"P_4",forma:'circle r="10" cx="325" cy="600"'},
                      {"id":"P_5",forma:'circle r="10" cx="555" cy="600"'},
                      {"id":"P_6",forma:'circle r="10" cx="540" cy="430"'},
                      {"id":"P_7",forma:'circle r="10" cx="640" cy="470"'},
//                      {"id":"P_8",forma:'circle r="10" cx="680" cy="600"'}
                     {"id":"P_8",forma:'polygon points="511,490 450,430 325,600"'}
                                      ],
             "anchor":"999",
	     "nomba":"menu0.jpg",
             "altor":"999",
 	     "enlaces": ["showCarotCder()",
 			 "showCarotIder()", 
			 "showCarotEder()",
			 "showVertebralder()",
 			 "showCarotCizq()",
 			 "showCarotIizq()", 
			 "showCarotEizq()",
			 "showVertebralizq()"
                        ],
            },
{"datos":[{"id":"P_1",forma:'circle r="10" cx="425" cy="600"'},
                      {"id":"P_2",forma:'polygon points="251,20 355,49 295,80"'},
                      {"id":"P_3",forma:'circle r="10" cx="450" cy="430"'},
                      {"id":"P_4",forma:'circle r="10" cx="325" cy="600"'},
                      {"id":"P_5",forma:'circle r="10" cx="555" cy="600"'},
                      {"id":"P_6",forma:'circle r="10" cx="540" cy="430"'},
                      {"id":"P_7",forma:'circle r="10" cx="640" cy="470"'},
//                      {"id":"P_8",forma:'circle r="10" cx="680" cy="600"'}
                     {"id":"P_8",forma:'polygon points="511,490 450,430 325,600"'}
                                      ],
             "anchor":"400",
	     "nomba":"Segmentos-hepaticos.jpg",
             "altor":"250",
 	     "enlaces": ["showCarotCder()",
 			 "setUbic(1)", 
			 "showCarotEder()",
			 "showVertebralder()",
 			 "showCarotCizq()",
 			 "showCarotIizq()", 
			 "showCarotEizq()",
			 "showVertebralizq()"
                        ],
            },        


      
          ];

function cambiacolor(K,num){
eval(datos_menus[K].enlaces[num]);
}

function despliega_slider(){
var divslider=document.getElementById("Myrange");
divslider.hidden=false;
}

function oculta_slider(){
var divslider=document.getElementById("Myrange");
divslider.hidden=true;
}

vzmax=2;
vzmin=1;
function redibuja(K){
var fuente=datos_menus[K].nomba;
var vsl=document.getElementById("myRange");
var zoom=((vzmax-vzmin)/(vsl.max-vsl.min))*(vsl.value-vsl.min)+vzmin;
//var zoom=1;
var anchor=parseInt(datos_menus[K].anchor*zoom);
var altor=parseInt(datos_menus[K].altor*zoom);

muestrasvg(datos_menus[K],anchor,altor,fuente,K)
}

function escala(a,fx,fy){
var resultado=a;

if (a.indexOf('circle')>-1) {
var p1=a.indexOf('cx="');
var p2=a.indexOf('"',p1+4);
var cx=parseInt(fx*a.substring(p1+4,p2));
var p1=a.indexOf('cy="');
var p2=a.indexOf('"',p1+4);
var cy=parseInt(fy*a.substring(p1+4,p2));
var p1=a.indexOf('r="');
var p2=a.indexOf('"',p1+3);
var r=parseInt(fx*a.substring(p1+3,p2));
resultado='circle cx="'+cx+'" cy="'+cy+'" r="'+r+'"';
}
if (a.indexOf('polygon')>-1) {
var p1=a.indexOf('points="');
var p2=a.indexOf('"',p1+8);
var puntos=a.substring(p1+8,p2).split(" ");
resultado='polygon points="';
for (var k=0;k<puntos.length;k++){
 var px=parseInt(fx*puntos[k].split(",")[0]);
 var py=parseInt(fy*puntos[k].split(",")[1]);
 resultado+=px+','+py+' ';
}
resultado+='"';
}

return resultado;
}

function muestrasvg(o,ancho,alto,imagen,K){
var divsvg = document.getElementById("svg");
divsvg.style="height: 70%; width:100% ;background-color: white;color:green; text-align: left; border: 1px solid #73AD21; overflow-x: scroll; overflow-y: scroll;";

var textoT='';
divsvg.hidden=false;
textoT+='<svg position: relative; width="'+ancho+'" height="'+alto+'">';
textoT+='<image id="imag" width="'+ancho+'" height="'+alto+'" href='+imagen+' />';

var n=o.datos.length;
for (var i=0;i<n;i++) {
var fx=(ancho/o.anchor);
var fy=(alto/o.altor)
var resu=escala(o.datos[i].forma,fx,fy);
//var centx=o.datos[i].cx*(ancho/o.anchor);
//var centy=o.datos[i].cy*(alto/o.altor);
//var radio=o.datos[i].r*(ancho/o.anchor);
//console.log(centx+" "+centy+" "+radio);
//textoT+='<circle name="r1"  onclick="cambiacolor(this);" cx="30" cy="30" r="10" />';
//textoT+='<'+o.datos[i].forma+' id="'+o.datos[i].id+'" name="r1" onclick="cambiacolor('+K+','+i+');" stroke="black" stroke-width="3" opacity= "1"/>'; 
textoT+='<'+resu+' id="'+o.datos[i].id+'" name="r1" onclick="cambiacolor('+K+','+i+');" stroke="black" stroke-width="3" opacity= "0.5"/>'; 

//console.log(textoT);
}
/*
var n=o.coordenadas1.length;
var color="blue";
for (var i=0;i<n;i++) {
var px=o.coordenadas1[i].cx*(ancho/o.anchor);
var py=o.coordenadas1[i].cy*(ancho/o.anchor);
if (i>0) {
   textoT+='<line x1="'+pxant+'" y1="'+pyant+'" x2="'+px+'" y2="'+ py+'" stroke="'+color+'" stroke-width="3"  />'
}
var pxant=px;
var pyant=py;
}

var n=o.coordenadas2.length;
var color="black";
for (var i=0;i<n;i++) {
var px=o.coordenadas2[i].cx*(ancho/o.anchor);
var py=o.coordenadas2[i].cy*(ancho/o.anchor);
if (i>0) {
   textoT+='<line x1="'+pxant+'" y1="'+pyant+'" x2="'+px+'" y2="'+ py+'" stroke="'+color+'" stroke-width="3"  />'
}
var pxant=px;
var pyant=py;
}
*/

textoT+='</svg>';
textoT+='<br><span id="mleyenda" ></span><br>';
textoT+='<button onclick="quitarsvg();">Ok </button>';
divsvg.innerHTML=textoT;
//for (var i=0;i<n;i++) {
//  document.getElementsByName("r1")[i].style.fill="black"; 
//}

var img = document.getElementById('imag');
    var altoDefinido = img.height; // 300
    var altoOriginal = img.naturalHeight; // 600
    var anchoDefinido = img.width; // 300
    var anchoOriginal = img.naturalWidth; // 600

}

function quitarsvg(){
var divsvg = document.getElementById("svg");
divsvg.style.display="none";
var divsvg = document.getElementById("svg_content");
divsvg.style.display="none";
}