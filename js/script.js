/* let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//let numerosPares = [2,4,2,6,2];
//numeros= numerosPares;

// Verificar si todos los números son pares y positivos
let sonParesYPositivos = numeros.every(num => num > 0 && num % 2 === 0);

if (sonParesYPositivos) {
    // Si todos son pares y positivos, calcular el producto de los pares y la suma de los positivos
    let productoPares = numeros.reduce((producto, num) => num % 2 === 0 ? producto * num : producto, 1);
    console.log("Producto de todos los números pares:", productoPares);
} else {
   // let sumaPositivos = numeros.reduce((suma, num) => num > 0 ? suma + num : suma, 0);
   let sumaImpares = numeros.reduce((suma, num) => num % 2 !== 0 ? suma + num : suma, 0);
   console.log("Suma de todos los números impares:", sumaImpares);
   
    //console.log("No todos los números son pares y positivos.");
} */

/* Realizar un programa que cargue un vector con 
los valores que introduzca el usuario, el usuario 
podrá introducir valores hasta que introduzca 
el valor FIN */

/* // Inicializamos el array vacío
let valores = [];

// Bucle para ingresar valores
while (true) {
    // Solicitamos un valor al usuario
    let valor = prompt("Introduce un valor (o escribe 'FIN' para terminar):");
    
    // Si el valor es 'FIN', se detiene el bucle
    if (valor.toUpperCase() === "FIN") {
        break;
    }
    
    // Se agrega el valor al array
    valores.push(valor);
}

// Mostramos los valores introducidos
console.log("Valores introducidos:");
valores.forEach(function(valor) {
    console.log(valor);
}); */

/* Realizar un programa que permita cargar 
un vector de 10 posiciones, que llamaremos ciudades*/
/* 
// Inicializamos un array vacío de ciudades
let ciudades = [];

// Bucle para solicitar 10 ciudades
for (let i = 0; i < 10; i++) {
    let ciudad = prompt(`Introduce el nombre de la ciudad #${i + 1}:`);
    
    // Se agrega cada ciudad al array
    ciudades.push(ciudad);
}

// Mostramos las ciudades introducidas
console.log("Ciudades introducidas:");
ciudades.forEach(function(ciudad, index) {
    console.log(`${index + 1}: ${ciudad}`);
}); */

/* Muestra el contenido del vector anterior 
realizando el recorrido de 4 formas diferentes, 
el vector tendremos que pasarlo como parámetro */

/* // Inicializamos un array de ciudades con 10 posiciones (simulando que ya ha sido cargado)
let ciudades = [];

// Función para solicitar las ciudades al usuario
function cargarCiudades() {
    for (let i = 0; i < 10; i++) {
        let ciudad = prompt(`Introduce el nombre de la ciudad #${i + 1}:`);
        ciudades.push(ciudad);
    }
}

// Forma 1: Recorrer el array con un bucle "for"
function recorrerConFor(array) {
    console.log("Recorrido con bucle 'for':");
    for (let i = 0; i < array.length; i++) {
        console.log(`#${i + 1}: ${array[i]}`);
    }
}

// Forma 2: Recorrer el array con un bucle "for...of"
function recorrerConForOf(array) {
    console.log("Recorrido con bucle 'for...of':");
    let index = 1;
    for (let ciudad of array) {
        console.log(`#${index}: ${ciudad}`);
        index++;
    }
}

// Forma 3: Recorrer el array con un bucle "forEach"
function recorrerConForEach(array) {
    console.log("Recorrido con bucle 'forEach':");
    array.forEach((ciudad, index) => {
        console.log(`#${index + 1}: ${ciudad}`);
    });
}

// Forma 4: Recorrer el array con un bucle "while"
function recorrerConWhile(array) {
    console.log("Recorrido con bucle 'while':");
    let i = 0;
    while (i < array.length) {
        console.log(`#${i + 1}: ${array[i]}`);
        i++;
    }
}

// Llamada para cargar las ciudades
cargarCiudades();

// Mostramos las ciudades de 4 maneras diferentes
recorrerConFor(ciudades);
recorrerConForOf(ciudades);
recorrerConForEach(ciudades);
recorrerConWhile(ciudades);
 */

/* Crear una función para que el usuario pueda elegir el método
con el que quiere que se realice el recorrido 
del vector realizado en el ejercicio anterior. */
/* 
function elegirMetodoDeRecorrido(array) {
    // Solicitar la elección del método
    let eleccion = prompt(
        "Elige el método de recorrido:\n" +
        "1 - Recorrido con 'for'\n" +
        "2 - Recorrido con 'for...of'\n" +
        "3 - Recorrido con 'forEach'\n" +
        "4 - Recorrido con 'while'"
    );

    // Validar la elección y ejecutar el método correspondiente
    switch (eleccion) {
        case "1":
            recorrerConFor(array);
            break;
        case "2":
            recorrerConForOf(array);
            break;
        case "3":
            recorrerConForEach(array);
            break;
        case "4":
            recorrerConWhile(array);
            break;
        default:
            console.log("Opción inválida. Por favor, elige un número entre 1 y 4.");
            break;
    }
}

// Llamada para cargar las ciudades
cargarCiudades();

// Llamada a la función para elegir el método de recorrido
elegirMetodoDeRecorrido(ciudades); 
*/
/* Ordena el contenido del vector y muéstralo
con el método que quieras de los que has creado
anteriormente */
/* 
function ordenarYMostrar(array) {
    // Ordenar el array alfabéticamente (método sort)
    array.sort();
    
    // Mostrar el array ya ordenado utilizando "forEach"
    console.log("\nCiudades ordenadas alfabéticamente:");
    recorrerConForEach(array);
}
    // Llamada para cargar las ciudades
cargarCiudades();

// Llamada a la función para ordenar y mostrar el contenido del array
ordenarYMostrar(ciudades);
     */
    
/*Invierte el contenido del vector y muéstralo */

/* 
// Función para invertir y mostrar el contenido del array
function invertirYMostrar(array) {
    // Invertir el array usando el método reverse()
    array.reverse();
    
    // Mostrar el array ya invertido utilizando "forEach"
    console.log("\nCiudades en orden invertido:");
    recorrerConForEach(array);
}
// Llamada a la función para invertir y mostrar el contenido del array
invertirYMostrar(ciudades);
*/

/* Crea una función que añada Moscú en la primea 
posición del vector y Buenos Aires al final de 
nuestro vector y muéstralo. Tanto Moscú como 
Buenos Aires, serán parámetros que le pasaremos 
a la función*/

/* 
// Función para añadir "Moscú" y "Buenos Aires" como parámetros
function agregarCiudades(array, ciudadInicio, ciudadFin) {
    // Añadir "Moscú" al principio
    array.unshift(ciudadInicio);

    // Añadir "Buenos Aires" al final
    array.push(ciudadFin);

    // Mostrar el array con las nuevas ciudades añadidas
    console.log("\nCiudades con Moscú al inicio y Buenos Aires al final:");
    recorrerConForEach(array);
}

// Llamada para cargar las ciudades
cargarCiudades();

// Llamada a la función para agregar "Moscú" y "Buenos Aires"
agregarCiudades(ciudades, "Moscú", "Buenos Aires");
*/

/* Elimina la última y la primera posición 
del vector y muéstralo */

/* 
// Función para eliminar la primera y última ciudad y mostrar el array
function eliminarPrimeraYUltima(array) {
    // Eliminar la primera ciudad con shift()
    array.shift();

    // Eliminar la última ciudad con pop()
    array.pop();

    // Mostrar el array con las ciudades modificadas
    console.log("\nCiudades después de eliminar la primera y la última:");
    recorrerConForEach(array);
}

// Llamada para cargar las ciudades
cargarCiudades();

// Llamada a la función para eliminar la primera y la última ciudad
eliminarPrimeraYUltima(ciudades);
*/

/* Muestra el tamaño del Array */
/* 
ciudades.length;
*/


/* Comprueba si existe Madrid dentro del
vector, en caso de que exista elimina Madrid del
vector, en caso de que no exista añ
ádelo al final del vector */
/* 
// Función para comprobar si "Madrid" existe en el array
function comprobarYModificarCiudad(array, ciudad) {
    const index = array.indexOf(ciudad);

    if (index !== -1) {
        // Si "Madrid" existe, eliminarlo
        array.splice(index, 1);
        console.log(`Se ha eliminado "${ciudad}" del array.`);
    } else {
        // Si "Madrid" no existe, añadirlo
        array.push(ciudad);
        console.log(`Se ha añadido "${ciudad}" al final del array.`);
    }

    // Mostrar el array actualizado
    console.log("\nArray actualizado:");
    recorrerConForEach(array);
}

// Llamada para cargar las ciudades
cargarCiudades();

// Llamada a la función para comprobar y modificar "Madrid"
comprobarYModificarCiudad(ciudades, "Madrid");

*/

/* Convierte el contenido del array en una cadena
 de caracteres y muestra la variable en la que 
 hayas guardado la cadena */

 /* 
 // Función para convertir el array en una cadena de caracteres
function convertirArrayACadena(array) {
    // Convertir el array a una cadena usando join()
    let cadena = array.join(", "); // Separa las ciudades con comas y espacios
    console.log("\nCadena de caracteres:");
    console.log(cadena); // Muestra la cadena resultante
}
 
// Llamada para cargar las ciudades
cargarCiudades();

// Llamada a la función para convertir el array a cadena
convertirArrayACadena(ciudades);  
 */







