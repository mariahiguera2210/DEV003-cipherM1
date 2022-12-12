# Cifrado César

### Cihper

Este proyecto permite que parejas o amigos puedan encriptar y/o desencriptar mensajes que solo ellos puedan ver.  

Para realizar este proyecto se siguieron los siguientes pasos:
1. Leí el Readme y vi los videos explicando como funciona el código Ceasar y el Codigo ASCII, para empezar a entender qué es lo que necesito que haga en términos generales mi proyecto 
2. En paint hice un borrador de como quería que fuera mi html

[![Screenshot-20221212-122440.png](https://i.postimg.cc/PJrxB7j8/Screenshot-20221212-122440.png)](https://postimg.cc/HcRdMBjp)

3. Luego en Visual pasé el diseño del html, pero sin funcionar
4. En un diagrama de flujo organicé la funcionalidad del proyecto, para antes de empezar a realizar codigo. 
[![Screenshot-20221212-120528.png](https://i.postimg.cc/WzJKbNTR/Screenshot-20221212-120528.png)](https://postimg.cc/CnSJcVRJ)
5. Para darle funcionalidad al botón enviar, cree un evento en el index.js. Donde creé una función y el evento addEventListener(), que al hacer click, me llame la función

6. 	Se hizo el funcionamiento del cuadro de texto, para esto, dentro de la misma función se creó una variable que con el evento getElementById(" ").value, me llame el valor dentro del cuadro, y luego se llama el valor que sea seleccionado por la usuaria, en los radio buttoms (Encriptar - Desencriptar)

7.	Se empezó luego a trabajar con el objeto cipher, usando al propiedad Encode, y sus parámetros de desplazamiento y mensaje. 
8.	Se empezó a trabar también bucles, como el for, el for se utilizó para que me coja una por una cada letrar que la usuaria ingrese dentro del mensaje, dando la posición de cada una dentro del array, para así poder aplicar las fórmulas, para encriptar y desencriptar los mensajes. 




