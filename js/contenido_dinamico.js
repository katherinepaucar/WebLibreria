if(document.getElementById("btn-enviar")){
document.getElementById("btn-enviar").addEventListener("click", function () { 
  if (!confirm("¿Desea enviar el Formulario?"))
   event.preventDefault();
 });
}

if(document.getElementById("btn-limpiar")){
document.getElementById("btn-limpiar").addEventListener("click", function () { 
  if (!confirm("¿Desea limpiar el Formulario?"))
   event.preventDefault();
 });
}

if( document.getElementById("btn-eliminar")){
 document.getElementById("btn-eliminar").addEventListener("click", function () { 
  if (!confirm("¿Desea eliminar el libro?"))
   event.preventDefault();
 });
}


if( document.getElementById("btn-consultar")){
  document.getElementById("btn-consultar").addEventListener("click", function () { 
   if (!confirm("¿Desea consultar el libro?"))
    event.preventDefault();
  });
 }
 
 if( document.getElementById("btn-buscar")){
  document.getElementById("btn-buscar").addEventListener("click", function () { 
   if (!confirm("¿Desea consultar el libro?"))
    event.preventDefault();
  });
 }

 if( document.getElementById("btn-mod")){
  document.getElementById("btn-mod").addEventListener("click", function () { 
   if (!confirm("¿Desea modificar el precio del libro?"))
    event.preventDefault();
  });
 }

/*Contenido Dinamico pagina INDEX*/

if (document.getElementById("texto")) {
  document.getElementById("texto").className = "textoestilo";
}

if (document.getElementById("cuadroInfo")) {
  document.getElementById("cuadroInfo").onclick = function () {
    myFunction();
  };

  function myFunction() {
    document.getElementById("texto").innerHTML = "Mensaje";
    document.getElementById("cuadroInfo").innerHTML =
      "<p style='color:#000051;font-size:35px;text-shadow: 2px 2px 5px purple'>¡Bienvenido/a a mi WEB!<br/><p>" +
      "<img src='images/libros3.jpg' width='50%'/>";
  }
}

if (document.getElementById("cuadroInfo")) {
  document.getElementById("img1").className = "fotoestilo";
}
