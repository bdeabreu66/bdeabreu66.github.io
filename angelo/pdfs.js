function hacerfactura_pago(){
function lineHeight(){
return doc.getLineHeight("Text") / doc.internal.scaleFactor;
}

function escribirparrafo(parrafo,yinicio){
var lines =parrafo.split(/\r\n|\r|\n/g);
var lineTop=yinicio;
for(var i=0;i<lines.length;i++){
  var splittedText = doc.splitTextToSize(lines[i], 180)
  var nlines = splittedText.length  // splitted text is a string array
  var blockHeight = nlines * lineHeight();
  doc.text(pageLeft, lineTop, lines[i], { align: "justify", maxWidth: 180 });
lineTop += blockHeight;
}
return lineTop;
}

function imprimirImagenes(im1,im2){
}

function escribirtop(){
//doc.addImage(logodata, 'Jmage/PNG', lMargin, tMargin+15, 80, 15);
doc.setFontSize(sFont2);
doc.text(pageCenter,tMargin+lineHeight(),titulo,{ align: "center" });

  doc.setFontSize(sFont1);
doc.line(pageCenter,  ylinea-lineHeight(),pageRight, ylinea-lineHeight());
doc.setFillColor(220,220,220);
doc.rect(pageCenter, ylinea-0.8*lineHeight(),pageRight-pageCenter,3*lineHeight(),'F');
ylinea+=1*lineHeight();
ylinea+=1.6*lineHeight();

doc.setFillColor(220,220,220);
doc.rect(lMargin, ylinea-0.8*lineHeight(),pageRight-lMargin,2.6*lineHeight(),'F');
ylinea+=lineHeight();
doc.setFillColor(220,220,220);
doc.rect(lMargin, ylinea-0.8*lineHeight(),pageRight-lMargin,1.1*lineHeight(),'F');
}


function escribirbottom(){
var posy= pageHeight-altofirma- 3 * lineHeight();
posy+=lineHeight();
var posxfirma2=120;
var posxfirma1=120;
var posyfirma1=posy-4*lineHeight();
//if (dataurl[0]!="" ){doc.addImage(dataurl[0], 'PNG', posxfirma1,posyfirma1 , anchofirma, altofirma);}

doc.line(posxfirma1, posyfirma1+altofirma,posxfirma1+anchofirma, posyfirma1+altofirma);
doc.text(posxfirma1, posyfirma1+altofirma+lineHeight(), ctexto30,{ align: "left" });
posy+=lineHeight();
posy+=1.3*lineHeight();

}

// comienzo pdfs
    doc = new jsPDF("p","mm","a4");
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
    var titulo="Recibo de pago";
    var nombrepdf="recibo.pdf";
         doc.setFontSize(sFont1);
         doc.setTextColor('#000000');
         doc.setFont("times");
    var paragraph="Apple's  iPhone 7  is officially upon  us. After a week of pre-orders, the latest in the iPhone lineup officially launches today.\r\n	Eager Apple  fans will be lining up out the door at Apple and carrier stores around the country to grab up the iPhone 7 and iPhone 7 Plus, while Android owners look on bemusedly.\n     During the Apple Event last week, the tech giant revealed a number of big, positive changes coming to the iPhone 7. It's thinner. The camera is better. And, perhaps best of all, the iPhone 7 is finally water resistant.\n     Still, while there may be plenty to like about the new iPhone, there's plenty more that's left us disappointed. Enough, at least, to make smartphone shoppers consider waiting until 2017, when Apple is reportedly going to let loose on all cylinders with an all-glass chassis design.";
    var ylinea=40;
    // Encabezado
    escribirtop();
    // Encabezado
    ylinea+=0.5*lineHeight();
    doc.setFillColor(220,220,220);
    doc.rect(lMargin, ylinea-0.8*lineHeight(),pageRight-lMargin,1.1*lineHeight(),'F');
    ylinea+=1.2*lineHeight();
    ylinea=escribirparrafo(paragraph,ylinea);
     ylinea+=1.2*lineHeight();
     doc.setFillColor(220,220,220);
     doc.rect(lMargin, ylinea-0.8*lineHeight(),pageRight-lMargin,1.1*lineHeight(),'F');
     // tope
    // escribirbottom();
     //tope
    doc.save(nombrepdf);
    doc.output('datauristring');
//if (!app) {var string = doc.output('datauristring');} else {grabapdfapp(nombrepdf);}
//alert(string);
//var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>"

//var x = window.open();
//x.document.open();
//x.document.write(iframe);
//x.document.write(string);
//x.document.close();
}
