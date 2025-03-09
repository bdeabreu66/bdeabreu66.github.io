datos_menus=[{"datos":[{"id":"P_1",forma:'circle r="10" cx="425" cy="600"',act:"0"},
                      {"id":"P_2",forma:'circle r="10" cx="511" cy="490"',act:"0"},
                      {"id":"P_3",forma:'circle r="10" cx="450" cy="430"',act:"0"},
                      {"id":"P_4",forma:'circle r="10" cx="325" cy="600"',act:"0"},
                      {"id":"P_5",forma:'circle r="10" cx="555" cy="600"',act:"0"},
                      {"id":"P_6",forma:'circle r="10" cx="540" cy="430"',act:"0"},
                      {"id":"P_7",forma:'circle r="10" cx="640" cy="470"',act:"0"},
//                      {"id":"P_8",forma:'circle r="10" cx="680" cy="600"',act:"0"}
                     {"id":"P_8",forma:'polygon points="511,490 450,430 325,600"',act:"0"}
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
{"datos":[{"id":"P_1",forma:'polygon points="199,30 217,27 221,63 220,101 210,145 185,142 184,116 191,77 199,27"',act:"0"},
          {"id":"P_2",forma:'polygon points="262,25 304,27 339,34 359,45 355,58 327,70 296,80 281,84 274,59 268,41 260,31"',act:"0"},
                      {"id":"P_3",forma:'polygon points="282,94 347,73 335,96 321,117 306,134 280,155 277,150 282,129 283,114 281,116"',act:"0"},
                      {"id":"P_4",forma:'polygon points="222,28 237,33 248,44 256,58 261,87 220,107 222,77 224,52"',act:"0"},
                      {"id":"P_5",forma:'polygon points="221,115 261,99 263,127 260,143 257,163 233,172 218,176 205,153 214,131"',act:"0"},
                      {"id":"P_6",forma:'polygon points="99,161 154,138 174,153 175,166 165,182 144,194 126,207 104,227"',act:"0"},
                      {"id":"P_7",forma:'polygon points="40,142 63,135 85,131 135,131 135,145 102,160 99,187 67,240 55,229 44,217 41,202"',act:"0"},
                      {"id":"P_8",forma:'polygon points="39,114 49,71 62,47 59,49 80,26 104,17 141,18 118,61 109,83 103,104 101,113 126,119 102,126 64,121 51,120"',act:"0"},
                      {"id":"P_9",forma:'polygon points="153,17 183,18 197,29 192,111 180,121 105,113 111,83 124,53 140,32"',act:"0"}
                                      ],
             "anchor":"400",
	     "nomba":"Segmentos-hepaticos.jpg",
             "altor":"250",
 	     "enlaces": ["setUbic(0)",
 			 "setUbic(1)", 
			 "setUbic(2)",
			 "setUbic(3)",
 			 "setUbic(4)",
 			 "setUbic(5)", 
			 "setUbic(6)",
			 "setUbic(7)",
			 "setUbic(8)"
                        ],
            },        
{"datos":[{"id":"P_1",forma:'polygon points="146,68 158,98 169,109 180,125 188,147 145,171 125,168 116,146 116,104 117,91 125,77"',act:"0"},
                      {"id":"P_2",forma:'polygon points="154,61 172,59 201,60 201,143 191,146 185,131 169,106 161,97 155,79"',act:"0"},
                      {"id":"P_3",forma:'polygon points="202,60 215,62 253,53 299,59 299,105 276,112 267,118 253,129 241,139 223,144 204,142"',act:"0"},
                      {"id":"P_4",forma:'polygon points="300,59 320,59 331,60 338,67 337,78 332,88 318,99 302,106"',act:"0"},
                                      ],
             "anchor":"400",
	     "nomba":"pancreas.png",
             "altor":"250",
 	     "enlaces": ["setUbic(0)",
 			 "setUbic(1)", 
			 "setUbic(2)",
			 "setUbic(3)"
 			 
                        ],
            },        
{"datos":[{"id":"P_1",forma:'polygon points="163,57 178,120 181,149 162,179 155,176 138,160 134,128 137,101 143,93"',act:"0"},
                      {"id":"P_2",forma:'polygon points="246,61 260,95 265,154 240,179 229,180 221,157 221,121"',act:"0"},
                      {"id":"P_3",forma:'polygon points="185,122 209,124 219,114 218,150 200,156 200,155 184,152 179,136"',act:"0"},
                                      ],
             "anchor":"400",
	     "nomba":"tiroides.png",
             "altor":"250",
 	     "enlaces": ["setUbic(0)",
 			 "setUbic(1)", 
			 "setUbic(2)",
			 
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
//if (o.datos[i].act=="0") {relleno='fill="black"'} else {relleno='fill="yellow"'}
if (o.datos[i].act=="0") {relleno='opacity= "0.2"'} else {relleno='fill="yellow" opacity= "0.4"'}

textoT+='<'+resu+' id="'+o.datos[i].id+'" name="r1" onclick="cambiacolor('+K+','+i+');" stroke="black" stroke-width="8"'+relleno+'/>'; 

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