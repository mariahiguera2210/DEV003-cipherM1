import cipher from "./cipher.js";

function miMensaje() {
  const mensaje = document.getElementById("texto").value.toUpperCase(); //llama el mensaje de textarea

  const seleccionado = document.querySelector(
    'input[name="mensaje"]:checked'
  ).value;
  const desplazamientos = parseInt(
    document.getElementById("ndesplazamiento").value
  );
  //console.log(mensaje, seleccionado, desplazamientos);
  const mensaje2 = document.getElementById("texto2");

  if (seleccionado === "Encriptar") {
    const mensajeEncriptado = cipher.encode(desplazamientos, mensaje);
    mensaje2.value = mensajeEncriptado;
  } else if (seleccionado === "Desencriptar") {
    const mensajeDesencriptado = cipher.decode(desplazamientos, mensaje);
    mensaje2.value = mensajeDesencriptado;
  } else {
    mensaje2.value = "Revisa tu mensaje, algo anda mal";
  }
}

const boton = document.getElementById("enviar"); // se crea la variable para el boton
boton.addEventListener("click", miMensaje); // es para realizar un evento cuando se hace click

const teclado= document.getElementById("texto")
teclado.addEventListener( 'keyup' ,mayus)

function mayus() {
  teclado.value=teclado.value.toUpperCase()
}

const limpiarForm= document.getElementById("limpiar");
limpiarForm.addEventListener("click", miMensaje).reset();


// window.addEventListener('load',mayus,true)

// function mayus() {
//   document.getElementById("texto").addEventListener( 'keyup' , function () {
//     this.value=this.value.toUpperCase()
//   });
// }
