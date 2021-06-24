const form=document.getElementById("formulario");
const id=document.getElementById("id_libro");
const titulo=document.getElementById("titulo_id");
const autoresselect=document.getElementById("autor_id");  
const editorial=document.getElementById("editorial_id");
const isbn=document.getElementById("isbn_id");
const precio=document.getElementById("precio_id");
const publicacion=document.getElementById("publicacion_id");
const descripcion=document.getElementById("descrip");


//Funcion para rellenar el combo de autores
function autores(){
  const autores_lista= ['Maria Dueñas','Daniel Silva','Claudia Garcia'];
  for(var i=0;i<autores_lista.length;i++){
    var opt = new Option(autores_lista[i], i);
   document.getElementById("autor_id").options[i+1]=opt;

 }
}

//Para que no envie el formulario por defecto
form.addEventListener('submit', event=>{
  
    event.preventDefault();
    validarFormulario(); //llamamos a la funcion
});

function  validarFormulario(){
  //Con trim quitamos los espacios en blanco al incio y final
  const idValue=id.value.trim();
  const tituloValue=titulo.value.trim();
  const autorValue=autoresselect.options[autoresselect.selectedIndex].text;
  const editorialValue=editorial.value.trim();
  const isbnValue=isbn.value.trim();
  console.log("hola"+isbnValue+"Hola");
  const precioValue=precio.value.trim();
  const publicacionValue=publicacion.value.trim();
  const descripcionValue=descripcion.value.trim();
  
    //Validad ID
  if (idValue.length == 0 || idValue ==0 || !(/^\d{1,5}$/.test(idValue)) || /^\s+$/.test(idValue)){
    error(id,'Introduce un ID válido');
  }else{
    success(id);
  }
    //Validad Titulo
  if (tituloValue.length == 0 || /^\s+$/.test(tituloValue)){
    error(titulo,'Introduce un Título');
  }else{
    success(titulo);
  }
    //Validar Autor selecionado
  if (autorValue == "-Selecciona autor/a--"){
    error(autoresselect,'Selecciona un valor de la lista de Autores');
  }else{
    success(autoresselect);
  }
    //Validar editorial
  if (editorialValue.length == 0 || /^\s+$/.test(editorialValue)){
    error(editorial,'Introduce una Editorial');
  }else{
    success(editorial);
  }

    //Validar ISBN
 
  const expISBN=/^(97(8|9))?\d{9}(\d|X)$/;
  if (isbnValue.length == 0 || !expISBN.test(isbnValue)||/^\s+$/.test(isbnValue)){
    error(isbn,'Introduce un ISBN válido');
  }else{
    success(isbn);
  }
    //Validad Precio
  const expPrecio=/^[0-9]+((.||,){1}[0-9]{2})?$/;
  if (precioValue.length == 0 || precioValue ==0 || !(expPrecio.test(precioValue)) || /^\s+$/.test(precioValue)){
    error(precio,'Introduce un Precio válido, 2 decimales como máximo');
  }else{
    success(precio);
  }
    //Validar Publicacion
  const expPublicacion=/^[0-9]{4}$/;
  if (publicacionValue.length == 0 || publicacionValue ==0 || !(expPublicacion.test(publicacionValue)) || /^\s+$/.test(publicacionValue)){
    error(publicacion,'Introduce el año de la publicación');
  }else{
    success(publicacion);
  }
    //Validar Descripcion
  if (descripcionValue.length == 0 || /^\s+$/.test(descripcionValue)){
    error(descripcion,'Introduce una descripción');
  }else{
    success(descripcion);
  }
}

//Funcion para que muestre el mensaje de error con un estilo
function error(input,message){
  const formGroup=input.parentElement;
    //añadimos estilo mediante la clase
  formGroup.className='form-group error';
    //Seleccionar el elemento small del formulario
  const small=formGroup.querySelector('small');
    //mostramos el mensaje
  small.innerText=message;


}

function success(input){
  const formGroup=input.parentElement;
  formGroup.className='form-group success';

}