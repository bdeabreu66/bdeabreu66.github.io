function hacerRetencion(){
function lineHeight(){
return doc.getLineHeight("Text") / doc.internal.scaleFactor;
//return 1.15;
}

function escribirparrafo(parrafo,yinicio,k){
var lines =parrafo.split(/\r\n|\r|\n/g);
var lineTop=yinicio;
for(var i=0;i<lines.length;i++){
  var splittedText = doc.splitTextToSize(lines[i], k)
  var nlines = splittedText.length  // splitted text is a string array
  var blockHeight = nlines * lineHeight();
  doc.text(pageLeft, lineTop, lines[i], { align: "justify", maxWidth: k });
lineTop += blockHeight;
}
return lineTop;
}

function imprimirImagenes(im1,im2){
}

function escribirtop(){
var esqx;
var ancho;
doc.setLineWidth(0.5);
//doc.addImage(logodata, 'Jmage/PNG', lMargin, tMargin+15, 80, 15);
doc.setFontSize(sFont3);
doc.setFontStyle('bold');
doc.text(pageLeft+10,tMargin+lineHeight(),titulo,{ align: "left" });
doc.setFontStyle('normal');
//
esqx=130;ancho=46;altura=12;esqy=tMargin+lineHeight();
doc.setFontStyle('bold');
doc.text(esqx+ancho/2,esqy,"0.NRO COMPROBANTE",{ align: "center" });
doc.setFontStyle('normal');
doc.text(esqx+ancho/2,esqy+5,NRO_COMPROB,{ align: "center" });
doc.rect(esqx,20,ancho,altura,'S');
//
esqx=208;ancho=46;altura=12;esqy=tMargin+lineHeight();
doc.setFontStyle('bold');
doc.text(esqx+ancho/2,esqy,"1. FECHA",{ align: "center" });
doc.setFontStyle('normal');
doc.text(esqx+ancho/2,esqy+5,FECHA_PAGO,{ align: "center" });
doc.rect(esqx,20,ancho,altura,'S');
doc.setFontSize(sFont3);
ylinea=escribirparrafo(paragraph,ylinea,120);
doc.setFontSize(sFont3);
//
esqx=pageLeft;ancho=78;altura=12;esqy=ylinea+lineHeight();
doc.setFontStyle('bold');
doc.text(esqx+ancho/2,esqy+1*lineHeight(),"2.Nombre o Raz\u00F3n Social del agente de Retenci\u00F3n",{ align: "center" });
doc.setFontStyle('normal');
doc.text(esqx+ancho/2,esqy+2*lineHeight(),NOMB_DIST,{ align: "center" });
doc.rect(esqx,esqy,ancho,altura,'S');
//
esqx=pageLeft+90;ancho=86;altura=12;esqy=ylinea+lineHeight();
doc.setFontStyle('bold');
doc.text(esqx+ancho/2,esqy+1*lineHeight(),"3.Registro de informaci\u00F3n Fiscal del Agente de Retenci\u00F3n",{ align: "center" });
doc.setFontStyle('normal');
doc.text(esqx+ancho/2,esqy+2*lineHeight(),RIF_FISCAL,{ align: "center" });
doc.rect(esqx,esqy,ancho,altura,'S');
//
esqx=208;ancho=50;altura=12;esqy=ylinea+lineHeight();
doc.setFontStyle('bold');
doc.text(esqx+ancho/2,esqy+1*lineHeight(),"4.Periodo Fiscal",{ align: "center" });
doc.setFontStyle('normal');
doc.text(esqx+ancho/2,esqy+2*lineHeight(),"A\u00F1o:"+ P_FISCAL_A+" Mes: "+P_FISCAL_M,{ align: "center" });
doc.rect(esqx,esqy,ancho,altura,'S');
//
ylinea=ylinea+5*lineHeight();
esqx=pageLeft;ancho=140;altura=12;esqy=ylinea+lineHeight();
doc.setFontStyle('bold');
doc.text(esqx+ancho/2,esqy+1*lineHeight(),"5.Direcci\u00F3n Fiscal del Agente de Retenci\u00F3n",{ align: "center" });
doc.setFontStyle('normal');
doc.text(esqx+ancho/2,esqy+2*lineHeight(),DIR_FISCAL,{ align: "center" });
doc.rect(esqx,esqy,ancho,altura,'S');
//
ylinea=ylinea+5*lineHeight();
esqx=pageLeft;ancho=80;altura=12;esqy=ylinea+lineHeight();
doc.setFontStyle('bold');
doc.text(esqx+ancho/2,esqy+1*lineHeight(),"6.Nombre o raz\u00F3n Social del Sujeto Retenido",{ align: "center" });
doc.setFontStyle('normal');
doc.text(esqx+ancho/2,esqy+2*lineHeight(),nomb_emp,{ align: "center" });
doc.rect(esqx,esqy,ancho,altura,'S');
//
esqx=pageLeft+90;ancho=80;altura=12;esqy=ylinea+lineHeight();
doc.setFontStyle('bold');
doc.text(esqx+ancho/2,esqy+1*lineHeight(),"7.Registro de informaci\u00F3n Fiscal del Sujeto Retenido",{ align: "center" });
doc.setFontStyle('normal');
doc.text(esqx+ancho/2,esqy+2*lineHeight(),rif_emp,{ align: "center" });
doc.rect(esqx,esqy,ancho,altura,'S');

ylinea=ylinea+7*lineHeight();
var la=Anchos.length;
esqx=pageLeft;
esqy=ylinea;
for (var i=0;i<la;i++){
doc.rect(esqx,esqy,Anchos[i],Alto_rotulo,'S');
esqx+=Anchos[i];
}
doc.setFontStyle('bold');
//
var xbase=pageLeft;
doc.text(xbase+Anchos[0]/2,esqy+2*lineHeight(),"Oper. Nro",{ align: "center" });
//
xbase+=Anchos[0];
doc.text(xbase+Anchos[1]/2,esqy+2*lineHeight(),"Fecha de la",{ align: "center" });
doc.text(xbase+Anchos[1]/2,esqy+3*lineHeight(),"Factura",{ align: "center" });
//
xbase+=Anchos[1];
doc.text(xbase+Anchos[2]/2,esqy+2*lineHeight(),"N\u00FAmero de",{ align: "center" });
doc.text(xbase+Anchos[2]/2,esqy+3*lineHeight(),"Factura",{ align: "center" });

//
xbase+=Anchos[2];
doc.text(xbase+Anchos[3]/2,esqy+2*lineHeight(),"N\u00FAmero de",{ align: "center" });
doc.text(xbase+Anchos[3]/2,esqy+3*lineHeight(),"Control de",{ align: "center" });
doc.text(xbase+Anchos[3]/2,esqy+4*lineHeight(),"Factura",{ align: "center" });
//
xbase+=Anchos[3];
doc.text(xbase+Anchos[4]/2,esqy+2*lineHeight(),"N\u00FAmero de",{ align: "center" });
doc.text(xbase+Anchos[4]/2,esqy+3*lineHeight(),"(Nota D\u00E9edito)",{ align: "center" });
//
xbase+=Anchos[4];
doc.text(xbase+Anchos[5]/2,esqy+2*lineHeight(),"Tipo de",{ align: "center" });
doc.text(xbase+Anchos[5]/2,esqy+3*lineHeight(),"Transacci\u00F3n",{ align: "center" });
//
xbase+=Anchos[5];
doc.text(xbase+Anchos[6]/2,esqy+2*lineHeight(),"N\u00FAmero ",{ align: "center" });
doc.text(xbase+Anchos[6]/2,esqy+3*lineHeight(),"de Facturas",{ align: "center" });
doc.text(xbase+Anchos[6]/2,esqy+4*lineHeight(),"Afectadas",{ align: "center" });

//
xbase+=Anchos[6];
doc.text(xbase+Anchos[7]/2,esqy+2*lineHeight(),"Total compra",{ align: "center" });
doc.text(xbase+Anchos[7]/2,esqy+3*lineHeight(),"incluyendo",{ align: "center" });
doc.text(xbase+Anchos[7]/2,esqy+4*lineHeight(),"el IVA",{ align: "center" });

//
xbase+=Anchos[7];
doc.text(xbase+Anchos[8]/2,esqy+2*lineHeight(),"Compra sin",{ align: "center" });
doc.text(xbase+Anchos[8]/2,esqy+3*lineHeight(),"derecho a ",{ align: "center" });
doc.text(xbase+Anchos[8]/2,esqy+4*lineHeight(),"cr\u00E9dito IVA",{ align: "center" });
//
xbase+=Anchos[8];
doc.text(xbase+Anchos[9]/2,esqy+2*lineHeight(),"Base imponible",{ align: "center" });
//
xbase+=Anchos[9];
//doc.text(xbase+Anchos[10]/2,esqy+2*lineHeight(),"%",{ align: "center" });
doc.text(xbase+Anchos[10]/2,esqy+2*lineHeight(),"Al\u00EDcuota",{ align: "center" });
//
xbase+=Anchos[10];
doc.text(xbase+Anchos[11]/2,esqy+2*lineHeight(),"Impuesto IVA",{ align: "center" });
//
xbase+=Anchos[11];
doc.text(xbase+Anchos[12]/2,esqy+2*lineHeight(),"IVA retenido",{ align: "center" });
doc.setFontStyle('normal');
}
function pd(a){
if (ptodecimal) {return a.replace(',','.');}
return a.replace('.',',');
}

function escribircuerpo(){
var la=Anchos.length;
var esqy
esqy=ylinea+Alto_rotulo;
Ybase_tabla=esqy; 
for (var j=0;j<Max_F;j++){
var esqx=pageLeft;
ylinea+=lineHeight();
for (var i=0;i<la;i++){
doc.rect(esqx,esqy,Anchos[i],Alto_fila,'S');
esqx+=Anchos[i];
} 
esqy+=Alto_fila;
}
var posy=Ybase_tabla; 
var sumat=0;
var sumats=0;
var suma_baseimp=0;
var suma_IMPIVA=0;
var BASE_IMP;
var COMPRA_SIN_IVA;
var baseimp;
var RET;
var sumaRET=0;
var nid=0;
for (var k=0;k<datos_ret.length;k++){
if (parseFloat(datos_ret[k]["C_IVA"])!=0) {
 nid++;
 var xbase=pageLeft;
 console.log('k= '+k);
// Columna 1 (id)
 doc.text(xbase+Anchos[0]/2,posy+Alto_fila/2,(nid).toString(),{ align: "center" });
 xbase+=Anchos[0];
// Columna 2 
 doc.text(xbase+Anchos[1]/2,posy+Alto_fila/2,datos_ret[k]["fecha"].toString(),{ align: "center" });
 xbase+=Anchos[1];
// Columna 3 
 doc.text(xbase+Anchos[2]/2,posy+Alto_fila/2,datos_ret[k]["nro_factura"].toString(),{ align: "center" });
 xbase+=Anchos[2];
// Columna 4 
 doc.text(xbase+Anchos[3]/2,posy+Alto_fila/2,datos_ret[k]["nro_control"].toString(),{ align: "center" });
 xbase+=Anchos[3];
// Columna 5 
// doc.text(xbase+Anchos[4]/2,posy+Alto_fila/2,datos_ret[k]["nnd"].toString(),{ align: "center" });
doc.text(xbase+Anchos[4]/2,posy+Alto_fila/2,"",{ align: "center" });
 xbase+=Anchos[4];
// Columna 6 
 doc.text(xbase+Anchos[5]/2,posy+Alto_fila/2,datos_ret[k]["tt"].toString(),{ align: "center" });
 xbase+=Anchos[5];
// Columna 7 
 doc.text(xbase+Anchos[6]/2,posy+Alto_fila/2,datos_ret[k]["nfa"].toString(),{ align: "center" });
 xbase+=Anchos[6];
// Columna 8 
 BASE_IMP=parseFloat(datos_ret[k]["C_IVA"]);
 doc.text(xbase+Anchos[7]-2,posy+Alto_fila/2,pd(datos_ret[k]["C_IVA"].toString()),{ align: "right" });
 xbase+=Anchos[7];
sumat+=BASE_IMP 
// Columna 9 
 doc.text(xbase+Anchos[8]-2,posy+Alto_fila/2,pd(datos_ret[k]["C_SIVA"].toString()),{ align: "right" });
 xbase+=Anchos[8];
COMPRA_SIN_IVA=parseFloat(datos_ret[k]["C_SIVA"]);
sumats+=COMPRA_SIN_IVA;
// Columna 10
 baseimp=(parseFloat(datos_ret[k]["C_IVA"]-COMPRA_SIN_IVA)/FIVA);
 console.log('baseimp'+baseimp);
 suma_baseimp+=baseimp;
 doc.text(xbase+Anchos[9]-2,posy+Alto_fila/2, pd(baseimp.toFixed(2)),{ align: "right" });
 xbase+=Anchos[9];

// Columna 11
 
 doc.text(xbase+Anchos[10]/2,posy+Alto_fila/2, TASA_IVA.toString()+" %",{ align: "center" });
 xbase+=Anchos[10];
  
// Columna 12
 IMP_IVA=baseimp*(FIVA-1);
 suma_IMPIVA+=IMP_IVA;
 doc.text(xbase+Anchos[11]-2,posy+Alto_fila/2, pd(IMP_IVA.toFixed(2)),{ align: "right" });
 xbase+=Anchos[11];

// Columna 13
 RET=IMP_IVA*FACTOR_RET;
 sumaRET+=RET;
 doc.text(xbase+Anchos[12]-2,posy+Alto_fila/2, pd(RET.toFixed(2)),{ align: "right" });
// xbase+=Anchos[12];
posy+=Alto_fila;
}
} 
doc.setFontStyle('bold');
// Agrega totales
xbase=pageLeft+Anchos[0]+Anchos[1]+Anchos[2]+Anchos[3]+Anchos[4]+Anchos[5];
posy=Ybase_tabla+Alto_fila*Max_F;

// c7
doc.rect(xbase,posy,Anchos[6],Alto_fila,'S');
doc.text(xbase+Anchos[6]/2,posy+lineHeight(),"Totales",{ align: "center" });
xbase+=Anchos[6];
// c8
console.table(sumat);
doc.rect(xbase,posy,Anchos[7],Alto_fila,'S');
doc.text(xbase+Anchos[7]-2,posy+lineHeight(),(sumat.toFixed(2)).toString(),{ align: "right" });
xbase+=Anchos[7];
// c9
console.table(suma_baseimp);
doc.rect(xbase,posy,Anchos[8],Alto_fila,'S');
doc.text(xbase+Anchos[8]-2,posy+lineHeight(),pd(sumats.toFixed(2)),{ align: "right" });
xbase+=Anchos[8];
// c10
doc.rect(xbase,posy,Anchos[9],Alto_fila,'S');
doc.text(xbase+Anchos[9]-2,posy+lineHeight(),pd(suma_baseimp.toFixed(2)),{ align: "right" });
xbase+=Anchos[9];
// c11
doc.rect(xbase,posy,Anchos[10],Alto_fila,'S');
doc.text(xbase+Anchos[10]/2,posy+lineHeight(),TASA_IVA + " %",{ align: "center" });
xbase+=Anchos[10];
// c12
doc.rect(xbase,posy,Anchos[11],Alto_fila,'S');
doc.text(xbase+Anchos[11]-2,posy+lineHeight(),pd(suma_IMPIVA.toFixed(2)),{ align: "right" });
xbase+=Anchos[11];
// c13
doc.rect(xbase,posy,Anchos[12],Alto_fila,'S');
doc.text(xbase+Anchos[12]-2,posy+lineHeight(),pd(sumaRET.toFixed(2)),{ align: "right" });

// Firmas
doc.setFontStyle('normal');
doc.setFontSize(sFont3);
doc.text(pageLeft+40,posy+8*lineHeight(),"Agente de Retenci\u00F3n",{ align: "center" });
doc.text(pageLeft+150,posy+8*lineHeight(),"Sujeto Retenido",{ align: "center" });

doc.line(pageLeft+15,posy+7*lineHeight(),pageLeft+70,posy+7*lineHeight());
doc.line(pageLeft+120,posy+7*lineHeight(),pageLeft+180,posy+7*lineHeight());


}
 function ceros(n){
  var s='';
  for (var i=0;i<n;i++) s+='0';
  return s;
  }
// comienzo pdfs
    
    const doc = new jsPDF("landscape","mm","a4");
    doc.setLanguage("es-AR");
    var lMargin=15; //left margin in mm
    var rMargin=15; //right margin in mm
    var tMargin=20; //right margin in mm
    var bMargin=15; //right margin in mm
    var pdfInMM=210;  // width of A4 in mm
    var pageCenter=pdfInMM/2;
    var pageThird=pdfInMM/3;
    var pageHeight=260;
    var pageLeft=lMargin;
    var pageRight=pdfInMM-rMargin;
    var altofirma=15; 
    var anchofirma=50; 
    var sFont1=12;
    var sFont2=18;
    var sFont3=8;
    var sFont4=6;
    var ptodecimal=false;
    var titulo="COMPROBANTE DE RETENCI\u00D3N AL VALOR AGREGADO";
    //var nro_comp="20220200000982";
    //var nombre_comp='Distribuidora Pita Orozco, C.A.';
    //var rif_comp='J-07590071-5';
    //var dir_comp='Calle ppal. Manzana #9 casa #3, Urb Valle Verde. San Diego. Edo Carabobo. Tlf 0414-4405044';
    var nomb_emp='ALIMENTOS POLAR COMERCIAL, C.A.';
    var rif_emp='J-00041312-6';
    //var FECHA_PAGO="25/02/2022";
    var P_FISCAL_A=year_estandar(FECHA_PAGO);
    var P_FISCAL_M=mes_estandar(FECHA_PAGO);
    NRO_COMPROB=P_FISCAL_A+P_FISCAL_M+ceros(8-NRO_RET.length)+NRO_RET;
    var nombrepdf="Retencion "+NRO_RET+" "+NOMB_DIST+".pdf";
         doc.setFontSize(sFont1);
         doc.setTextColor('#000000');
         doc.setFont("times");
    var Anchos=[15,20,20,20,20,16,18,20,24,24,16,20,20];
    var Alto_rotulo=15;
    var Alto_fila=7;
    //var Nro_filas_max=7;
    var Ybase_tabla;
    //var TASA_IVA=16;
    var FIVA=(1+TASA_IVA/100);
    //var FACTOR_RET=0.75;
    var paragraph='(Ley IVA-Art 11: "Ser\u00E1n responsables del pago del impuesto en calidad de agentes de retenci\u00F3n. los compradores o adquirientes de determinados bienes muebles y los receptores de ciertos servicios, a quienes la administraci\u00F3n tributaria designe como tal"';
    var ylinea=40;


   console.log(RIF_FISCAL);




    // Encabezado
    escribirtop();
     escribircuerpo();
    doc.save(nombrepdf);
    //doc.output('datauristring');

}
