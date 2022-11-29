import cipher from './cipher.js';

console.log(cipher);


function miMensaje() {

    let mensaje = document.getElementById("texto").value
    let seleccionado = document.querySelector('input[name="mensaje"]:checked').value;
    let respuesta;
    let desplazamientos= document.getElementById('ndesplazamiento').value;
    console.log(mensaje, seleccionado, desplazamientos)

    if(seleccionado == "Encriptar" ) 
        respuesta = "formula para encriptar el mensaje"

    else if(seleccionado == "Desencriptar")
        respuesta = "formula para desencriptar el mensaje"


    

}


let boton= document.getElementById('enviar');
boton.addEventListener("click",miMensaje);
