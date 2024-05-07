var enviado = document.getElementById("enviado");
var a = document.getElementById("a");

function enviar() {
  a.style.display = "none";
  enviado.style.animation = "2.5s cubic-bezier(.25, 1, .30, 1) wipe-in-right both";
  enviado.style.display = "block";

  setTimeout(function() {

    enviado.style.animation = "2.5s cubic-bezier(.25, 1, .30, 1) wipe-out-left both";
    setTimeout(function() {
      reversa();
    }, 1000); 
  }, 2500);
}

function reversa(){
  a.style.display = "block";
  enviado.style.display = "none";
  var com = document.getElementById("comentario");
  com.value = "";
}
