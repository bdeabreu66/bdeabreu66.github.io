
//const qrcode = window.qrcode;

const video = document.createElement("video");
const canvasElement = document.getElementById("qr-canvas");
const canvas = canvasElement.getContext("2d");

const qrResult = document.getElementById("qr-result");
const ouputResult = document.getElementById("outputResult");

divData = document.getElementsByName("divdata");
console.log(divData.length);
const outputData = document.getElementsByName("outputData");
console.log(outputData.length);

const btnScanQR = document.getElementById("btn-scan-qr");
const btnCancelQR = document.getElementById("btn-cancel-qr");

let scanning = false;
var prueba="2021%03%24%18%30%P1%1%Dill%15%ET-ET-ET-ET-ET-BO-W-W%17-20%13%177%20";

function accion(comando,ind){
 function Nombre(nom){
   if (nom=="ET") return "Empty Try"
   if (nom=="BO") return "Black Out"
   if (nom=="W") return "Weigth"
   return nom
}
var acciones=comando.split("-");
console.log(acciones.length)
console.log(ind);
if ((ind>=0) && (ind<acciones.length)) {resp=Nombre(acciones[ind])} else {resp="Luz"}
return resp
}

qrcode.callback = (res) => {
  if (res) {
    //outputResult.innerText = res;
    //res=prueba;
    var datos=res.split("%");
    //var datos=prueba.split("%");
    if (datos.length==14) {
      var fechainicio=new Date(datos[0],parseInt(datos[1])-1,datos[2],datos[3],datos[4])
      console.log(fechainicio);
      const Hoy=new Date();  
      console.log(Hoy);
      var diasdif=Hoy.getTime()-fechainicio.getTime();
      // Dias transcurridos
      var diastotales=diasdif/(1000*60*60*24);
      var contdias=Math.trunc(diastotales);
      var horastotales=(diastotales-contdias)*24; 
      var conthoras=Math.trunc(horastotales);
      var mintotales=(horastotales-conthoras)*60;
      var contmin=Math.trunc(mintotales);
      console.log(contdias); 
      // Variedad
      outputData[1].innerText=datos[7];
      // Bandeja
      outputData[0].innerText=datos[6];
      // Proveedor
      outputData[2].innerText=datos[5];
      // Fecha de siembra
      outputData[3].innerText=datos[2]+"/"+datos[1]+"/"+datos[0]+" "+datos[3]+":"+datos[4];
      // Dia
      outputData[4].innerText=contdias.toString()+" dias "+conthoras.toString()+" horas "+contmin.toString()+" minutos";
      // Peso Inicial
      outputData[7].innerText=datos[8]+ " gramos";
      // Accion
      outputData[5].innerText=accion(datos[9],contdias);
      // Dias de crecimiento
      outputData[6].innerText=datos[10]+ " dias";
      // Peso cosecha
      outputData[8].innerText=datos[12]+ " gramos";
      // Hoja verdadera
      outputData[9].innerText=datos[11];
      scanning = false;
    video.srcObject.getTracks().forEach(track => {track.stop();});
    console.log(":"+divData.length); 
    for (var i=0;i<divData.length;i++){
      divData[i].hidden=false;
     }
     qrResult.hidden = false;
     btnScanQR.hidden = false;
     btnCancelQR.hidden = true;
     canvasElement.hidden = true;
     } else {  qrResult.hidden = false;
               qrResult.hidden = false;outputResult.innerText ="Codigo QR invalido";
             }  
  }
};

function tick() {
  canvasElement.height = video.videoHeight;
  canvasElement.width = video.videoWidth;
  canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);

  scanning && requestAnimationFrame(tick);
}

function scan() {
  try {
    qrcode.decode();
  } catch (e) {
    setTimeout(scan, 300);
  }
}

btnScanQR.onclick = () =>
  navigator.mediaDevices
    .getUserMedia({ video: { facingMode: "environment" } })
    .then(function(stream) {
      scanning = true;
      qrResult.hidden = true;
      for (var i=0;i<divData.length;i++){
         divData[i].hidden=true;
      }

        btnScanQR.hidden = true;
        btnCancelQR.hidden = false;
        canvasElement.hidden = false;

      video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
      video.srcObject = stream;
      video.play();
      tick();
      scan();
    });
