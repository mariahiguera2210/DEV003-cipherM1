import cipher from "./cipher.js";

function miMensaje() {
  const mensaje = document.getElementById("texto").value; //llama el mensaje de textarea
  const seleccionado = document.querySelector(
    'input[name="mensaje"]:checked'
  ).value;
  const desplazamientos = parseInt(document.getElementById("ndesplazamiento").value);
  //console.log(mensaje, seleccionado, desplazamientos);
  const mensaje2 = document.getElementById("texto2");
  const mensajeEncriptado = cipher.encode(desplazamientos, mensaje);
  const mensajeDesencriptado = cipher.decode(desplazamientos, mensaje);

  if (seleccionado === "Encriptar") {
    mensaje2.value = mensajeEncriptado;
  } else if (seleccionado === "Desencriptar")
    mensaje2.value = mensajeDesencriptado;
  else mensaje2.value = "Revisa tu mensaje, algo anda mal";

  
}

const boton = document.getElementById("enviar"); // se crea la variable para el boton
boton.addEventListener("click", miMensaje); // es para realizar un evento cuando se hace click
