
/*
getFile = new selectFile;
getFile.targets('choose','selected');
archivos1=document.getElementById('choose');
archivos1.addEventListener('change', function(e){procesar(e)}, false);
*/

function procesar(e){
   var archivos=e.target.files;
   for(var f=0;f<archivos.length;f++){
      var archivo=archivos[f];
      if(archivo.type.match(/image.*/i)){
          //alert("m1 ");
       getOrientation(archivo, function(orientation) {
         //alert(orientation);
          var lector=new FileReader();
          lector.addEventListener("load",function(e){mostrar(e,orientation);},false);
          lector.readAsDataURL(archivo); 
    
       });
        }  
    } 
} 

function mostrar(e,orientation){   
var resultado=e.target.result; 
imagen=new Image();
imagen.src=resultado;
imagen.addEventListener("load", function(){
divlienzo.style.display="block";
var himagen=imagen.height;
var wimagen=imagen.width;

//alert("Ancho: "+imagen.width+" Alto: "+imagen.height+" "+orientation);

    switch (orientation) {
      case 2:
        // horizontal flip
        aspecto=wimagen/himagen;
        anchoimagen=wimagen;
        altoimagen=himagen;
        lienzo.save();
        elemento.height=elemento[num].width/aspecto[num];
        lienzo.translate(elemento[num].width,0);
        lienzo.scale(-1,1);
        lienzo.drawImage(imagen,0,0, imagen.width,imagen.height,0,0, elemento.width, elemento.height);
        lienzo.restore(); 
       break
      case 3:
        // 180° rotate left
        aspecto=wimagen/himagen;
        anchoimagen=wimagen;
        altoimagen=himagen;
        elemento.height=elemento.width/aspecto;
        lienzo.save();
        lienzo.translate(elemento.width,elemento.height);
        lienzo.rotate(-180*Math.PI/180);
        lienzo.drawImage(imagen,0,0, imagen.width,imagen.height,0,0, elemento.width, elemento.height);
        lienzo.restore();
        break
      case 4:
        // vertical flip
        aspecto=wimagen/himagen;
        anchoimagen=wimagen;
        altoimagen=himagen;
        lienzo.save();
        elemento.height=elemento.width/aspecto;
        lienzo.translate(0,elemento.height);
        lienzo.scale(1,-1);
        lienzo.drawImage(imagen,0,0, imagen.width,imagen.height,0,0, elemento.width, elemento.height);
        lienzo.restore(); 
       break
      case 5:
        // vertical flip + 90 rotate right
        himagen=imagen.width;
        wimagen=imagen.height;
        aspecto=wimagen/himagen;
        anchoimagen=wimagen;
        altoimagen=himagen;
        lienzo.save();
        elemento.height=elemento.width/aspecto;
        lienzo.rotate(0.5 * Math.PI);
        lienzo.scale(1,-1);
        lienzo.drawImage(imagen,0,0, imagen.width,imagen.height,0,0, elemento.height, elemento.width);
        lienzo.restore(); 
        break
      case 6:
        himagen=imagen.width;
        wimagen=imagen.height;
        aspecto=wimagen/himagen;
        anchoimagen=wimagen;
        altoimagen=himagen;
        elemento.height=elemento.width/aspecto;
        lienzo.save();
        lienzo.translate(elemento.width,0);
        lienzo.rotate(90*Math.PI/180);
        lienzo.drawImage(imagen,0,0, imagen.width,imagen.height,0,0, elemento.height, elemento.width);
        lienzo.restore();
        break
      case 7:
        // horizontal flip + 90 rotate right
        himagen=imagen.width;
        wimagen=imagen.height;
        aspecto=wimagen/himagen;
        anchoimagen=wimagen;
        altoimagen=himagen;
        elemento.height=elemento.width/aspecto;
        lienzo.save();
        lienzo.rotate(90*Math.PI/180);
        lienzo.translate(elemento.height,-elemento.width);
        lienzo.scale(-1,1);
        lienzo.drawImage(imagen,0,0, imagen.width,imagen.height,0,0, elemento.height, elemento.width);
        lienzo.restore()
        break
      case 8:
        // 90° rotate left
        himagen=imagen.width;
        wimagen=imagen.height;
        aspecto=wimagen/himagen;
        anchoimagen=wimagen;
        altoimagen=himagen;
        elemento.height=elemento.width/aspecto;
        lienzo.save();
        lienzo.translate(0,elemento.height);
        lienzo.rotate(-90*Math.PI/180);
        lienzo.drawImage(imagen,0,0, imagen.width,imagen.height,0,0, elemento.height, elemento.width);
        lienzo.restore();
        break
    default:
        aspecto=wimagen/himagen;
        anchoimagen=wimagen;
        altoimagen=himagen;
        elemento.height=elemento.width/aspecto;
        lienzo.drawImage(imagen,0,0, imagen.width,imagen.height,0,0, elemento.width, elemento.height);
    break
    }
dataurlimagen=elemento.toDataURL("image/jpeg");
 } , false);
} 

function getOrientation(file, callback) {
  var reader = new FileReader();

  reader.onload = function(event) {
    var view = new DataView(event.target.result);
    if (view.getUint16(0, false) != 0xFFD8) return callback(-2);
    var length = view.byteLength,
        offset = 2;
    while (offset < length) {
      var marker = view.getUint16(offset, false);
      offset += 2;
      if (marker == 0xFFE1) {
        if (view.getUint32(offset += 2, false) != 0x45786966) {
          return callback(-1);
        }
        var little = view.getUint16(offset += 6, false) == 0x4949;
        offset += view.getUint32(offset + 4, little);
        var tags = view.getUint16(offset, little);
        offset += 2;

        for (var i = 0; i < tags; i++)
          if (view.getUint16(offset + (i * 12), little) == 0x0112)
            return callback(view.getUint16(offset + (i * 12) + 8, little));
      }
      else if ((marker & 0xFF00) != 0xFF00) break;
      else offset += view.getUint16(offset, false);
    }
    return callback(-1);
  };
  reader.readAsArrayBuffer(file.slice(0, 64 * 1024));
};
