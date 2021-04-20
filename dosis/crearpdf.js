function hacerpdf(){

function lineHeight(){
return doc.getLineHeight("Text") / doc.internal.scaleFactor;
}

function lineasparrafo(parrafo,xinicio,yinicio){
  var lines =parrafo.split(/\r\n|\r|\n/g);
  var lineTop=yinicio;
  for(var i=0;i<lines.length;i++){
    var splittedText = doc.splitTextToSize(lines[i], 120)
    var nlines = splittedText.length  // splitted text is a string array
    var blockHeight = nlines * lineHeight();
//    doc.text(xinicio, lineTop, lines[i], { align: "justify", maxWidth: 120 });
    lineTop += blockHeight;
}
return lineTop;
}


function escribirparrafo(parrafo,xinicio,yinicio){
  var lines =parrafo.split(/\r\n|\r|\n/g);
  var lineTop=yinicio;
  for(var i=0;i<lines.length;i++){
    var splittedText = doc.splitTextToSize(lines[i], 120)
    var nlines = splittedText.length  // splitted text is a string array
    var blockHeight = nlines * lineHeight();
    doc.text(xinicio, lineTop, lines[i], { align: "justify", maxWidth: 120 });
    lineTop += blockHeight;
}
return lineTop;
}


var baserecipey;
var yinicio;

function imprimirrecipes(ind1,ind2){
var dia=fechaderecipe.getDate().toString();
if (dia.length==1) {dia="0"+dia}
var mes=(fechaderecipe.getMonth()+1).toString();
if (mes.length==1) {mes="0"+mes}
var fechaaimprimir=dia+"/"+mes+"/"+fechaderecipe.getFullYear()

function imprimirdatos(){
//var anchofecha=doc.getTextDimensions(fechaaimprimir).w;
var anchofecha=3.5*doc.getTextDimensions(fechaaimprimir).w;

//alert(anchofecha);
doc.text(pageLeft, ancho1+holg+2*h, "Nombre: "+nombpac);
doc.text(pageLeft,ancho1+holg+h, "Fecha: "+fechaaimprimir);
doc.text(pageCenter+pageLeft, ancho1+holg+2*h, "Nombre: "+nombpac);
doc.text(pageCenter+pageLeft, ancho1+holg+h, "Fecha: "+fechaaimprimir);
}

  var ylineas2;
  var maximoy=190;
  doc.setFontSize(tamanoletra);
 // doc.setFontSize(30);

 doc.setFont(fuenteletra);
 doc.setFontType(tipofuenteletra);

  doc.setFont(fuenteletra);
  var h=lineHeight();
  var by=baserecipey;
  var ylinea1m=by;
  var ylinea2m=by;
  var ylinea1mc,ylinea2mc;
 yinicio=1;
 doc.setPage(0);
 escribirtop();
imprimirdatos();
 for(var i=ind1;i<ind2;i++){
        var texto1= "- "+recipesA[i].trim();
        var texto2= recipesB[i];
// A ver si caben en pagina
         ylineas1mc=lineasparrafo(texto1,pageLeft,ylinea1m);
   
         ylineas2mc=lineasparrafo(texto1,pageCenter+pageLeft,ylinea2m);
         ylineas2mc=lineasparrafo(texto2,pageCenter+pageLeft,ylineas2mc);

         if ((ylineas1mc>=maximoy) || (ylineas2mc>=maximoy)) { 
           //  alert("pag ad ");
             doc.addPage();
             ylinea1m=by;
             ylinea2m=by;
             escribirtop();
             imprimirdatos();

          }

         ylinea1m=escribirparrafo(texto1,pageLeft,ylinea1m);
         ylinea1m+=2*h;
         ylinea2m=escribirparrafo(texto1,pageCenter+pageLeft,ylinea2m);
         ylinea2m=escribirparrafo(texto2,pageCenter+pageLeft,ylinea2m);
         ylinea2m+=h;
}

}



var largo1;
var largo2;
var ancho1=30;
var ancho2=20;
var holg=4;

function escribirtop(){
//doc.addImage(logodata, 'Jmage/PNG', lMargin, tMargin+15, 80, 15);
// doc.addImage(dataurlimagen[0], 'Jmage/JPEG', lmimagen, tmimagen, iancho, ialto*0.8);
var sep=10;
var margenrecipe=20;
//var holg=4;
//var ancho1=30;
//var ancho2=20;
largo1=(pdfInMM-sep)/2;
largo2=(pdfInMM-sep)/2;
baserecipey=ancho1+holg+12;

//alert(largo1);
if (dataurlimagen[0]!="") {
 doc.addImage(dataurlimagen[0], 'Image/JPEG', 0,0,largo1, ancho1);
 doc.addImage(dataurlimagen[0], 'Image/JPEG', pdfInMM-largo1,0, largo1, ancho1);
}
 doc.line(largo1+sep/2,0,largo1+sep/2,pageHeight); // linea vertical

if (dataurlimagen[1]!="") {

 doc.addImage(dataurlimagen[1], 'Image/JPEG', 0,pageHeight-ancho2, largo2, ancho2);
 doc.addImage(dataurlimagen[1], 'Image/JPEG', largo2+sep/2,pageHeight-ancho2, largo2, ancho2);
}


 doc.line(margenrecipe/2,ancho1+holg , largo1-margenrecipe/2 , ancho1+holg ); // linea horizontal
 doc.line(largo1+sep+margenrecipe/2,ancho1+holg, largo1+sep+largo1-margenrecipe/2,ancho1+holg ); // linea horizontal
 doc.line(margenrecipe/2,pageHeight-ancho2-holg ,largo2-margenrecipe/2,pageHeight-ancho2 -holg); // linea horizontal
 doc.line(largo2+sep+margenrecipe/2,pageHeight-ancho2-holg ,largo2+sep+largo2-margenrecipe/2,pageHeight-ancho2-holg ); // linea horizontal
}

function escribirbottom(){
var posy= pageHeight-altofirma- 3 * lineHeight();

posy+=lineHeight();
// nombre
doc.text(lMargin, posy, texto31+":"+document.getElementById("v28").value);
posy+=lineHeight();
}


    doc = new jsPDF("l","mm","a4");
    var lMargin=15; //left margin in mm
    var rMargin=15; //right margin in mm
    var tMargin=20; //right margin in mm
    var bMargin=15; //right margin in mm
    var pdfInMM=300;  // width of A4 in mm
    var pageCenter=pdfInMM/2;
    var pageThird=pdfInMM/3;
    doc.Page=0;
  //alert(Object.keys(doc.getFontList()));
  //  var pageHeight=300;
    var pageHeight=doc.internal.pageSize.getHeight();
//alert(pageHeight);


    var pageLeft=lMargin;
    var pageRight=pdfInMM-rMargin;
    var altofirma=15; 
    var anchofirma=50; 
//    var nombrepdf="WO"+document.getElementById('v2').value+"SR"+document.getElementById('v1').value+".pdf";
    var nombrepdf="pruebarecipe.pdf";
    doc.setFontSize(tamanoletra);
    doc.setTextColor('#000000');
    doc.setFont(fuenteletra);
//    var paragraph="Apple's  iPhone 7  is officially upon  us. After a week of pre-orders, the latest in the iPhone lineup officially launches today.\r\n	Eager Apple  fans will be lining up out the door at Apple and carrier stores around the country to grab up the iPhone 7 and iPhone 7 Plus, while Android owners look on bemusedly.\n     During the Apple Event last week, the tech giant revealed a number of big, positive changes coming to the iPhone 7. It's thinner. The camera is better. And, perhaps best of all, the iPhone 7 is finally water resistant.\n     Still, while there may be plenty to like about the new iPhone, there's plenty more that's left us disappointed. Enough, at least, to make smartphone shoppers consider waiting until 2017, when Apple is reportedly going to let loose on all cylinders with an all-glass chassis design.";
//    var ylinea=40;
      baserecipey=60;
     imprimirrecipes(0,recipes.length);

//var condpag="1";
//var ind1=0;
//var recporpagina=5;
//var ind2=Math.min(recporpagina,recipes.length);
//    while (condpag=="1") {
//       escribirtop();
//       imprimirrecipes(ind1,ind2);
//       alert(ind1+"  "+ind2+" "+ recipes.length);
//       if (ind2<recipes.length) {ind1=ind2; ind2=ind1+Math.min(recporpagina,recipes.length-recporpagina);} else {condpag="0"}
//       alert(ind1+"  "+ind2);
//       if (condpag=="1") {doc.addPage();}
//     }
     
//     ylinea+=0.5*lineHeight();
  //   doc.setFillColor(220,220,220);
  //   doc.rect(lMargin, ylinea-0.8*lineHeight(),pageRight-lMargin,1.1*lineHeight(),'F');
  //   doc.text(lMargin, ylinea, "Prueba",{ align: "left"});

  //   ylinea+=1.2*lineHeight();
//     ylinea=escribirparrafo(document.getElementById("v26").value,ylinea);
//     ylinea+=1.2*lineHeight();

//    doc.setFillColor(220,220,220);
  //  doc.rect(lMargin, ylinea-0.8*lineHeight(),pageRight-lMargin,1.1*lineHeight(),'F');

//    doc.text(lMargin, ylinea, "Prueba",{ align: "left"});

//     ylinea+=2*lineHeight();
    // ylinea=escribirparrafo(document.getElementById("v27").value,ylinea);
    //escribirbottom();
    //  doc.addPage();

//     doc.text(20, 20, 'Do you like that');


    //window.open(doc.output('bloburl'), '_blank'); 
    //doc.output('pdfjsnewwindow');
   //if (dataurlimagen[0]!="" || dataurlimagen[1]!="" || dataurlimagen[2]!="" || dataurlimagen[3]!="" ) {imprimirImagenes(0,3);}
   //  if (dataurlimagen[4]!="" || dataurlimagen[5]!="" || dataurlimagen[6]!="" || dataurlimagen[7]!="" ) {imprimirImagenes(4,7);}

doc.save(nombrepdf);

//if (!app) {var string = doc.output('datauristring');} else {grabapdfapp(nombrepdf);}
//alert(string);
//var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>"

//var x = window.open();
//x.document.open();
//x.document.write(iframe);
//x.document.write(string);
//x.document.close();
}
