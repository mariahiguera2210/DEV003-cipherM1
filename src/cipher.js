const cipher = {
  encode: (desplazamientos, mensaje) => {
    if (typeof desplazamientos !== "number" || typeof mensaje !== "string") {
      throw TypeError();
    }

    let solucion = "";
    let posicionCesar;

    for (let i = 0; i < mensaje.length; i++) {
      //i++ = i+1
      let char;
      const posicionAscci = mensaje.charCodeAt(i); //charcodeat, me da la posicion de la letra en el alfabeto ascci
      //String.fromCharcode, convierte los numeros en String.

      if (posicionAscci >= 65 && posicionAscci <= 90) {
        posicionCesar = ((posicionAscci - 65 + desplazamientos) % 26) + 65;
        char = String.fromCharCode(posicionCesar);
      } 
      if (posicionAscci === 32) {
        char = " ";
      }

      solucion = solucion + char;
    }

    return solucion;
  },

  decode: (desplazamientos, mensaje) => {
    let solucion = "";

    if (typeof desplazamientos !== "number" || typeof mensaje !== "string") {
      throw TypeError();
    }

    for (let i = 0; i < mensaje.length; i++) {
      let char = mensaje[i];
      const posicionAscci = mensaje.charCodeAt(i);

      if (posicionAscci >= 65 && posicionAscci <= 90) {
        char = String.fromCharCode(
          ((posicionAscci - 90 - desplazamientos) % 26) + 90
        );
      }
      if (posicionAscci === 32) {
        char = " ";
      }

      solucion = solucion + char;
    }

    return solucion;
  },
};

export default cipher;
