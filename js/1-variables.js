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
//alert('esto es una prueba de alerta');

let color = prompt('Ingresa un color');
console.log(color);

//solictar al usuario un numero, y al numero indicado por el usuario sumar por 15
let numeroSeleccionado = parseInt(prompt('ingrese un numero del 1 a 100'));
console.log(numeroSeleccionado);
console.log(numeroSeleccionado + 15);

//parseInt ('10') devuelve 10 - transforma un string en un numero (int)
//parseFloat ('10.5') devuelve 10.5