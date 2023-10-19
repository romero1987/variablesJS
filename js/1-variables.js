// esto es un comentario de una unica linea


/* esto es un comentario de
multiples 
lineas */

//declarar una variable (var - let - const) PERO SE USA LET
let anioActual = 2023

const url = "www.google.com";

//mostrar mensajes
console.log("este es un mensaje de prueba");
console.log(anioActual)
console.log(url);
console.log("Año: "+ (anioActual+2));

// modificar el contenido de una variable
anioActual = 2024;
console.log(anioActual);

//url="otro valor";
console.log(url);

document.write("<h1>Esto es un mensaje por pantalla</h1>");
document.write("Año: "+ anioActual + "<br>")
document.write("Año: "+ anioActual)

//ventanas emergentes
alert('esto es una prueba de alerta');

let color = prompt('Ingresa un color');
console.log(color);
