/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let strChain1 = "Hola"
let strChain2 = "JavaScript Basic"
console.log(strChain1 + " " + strChain2 + "!"); // Hola JavaScript Basic
// 2. Muestra la longitud de una cadena de texto
console.log(strChain1.length); // 4
// 3. Muestra el primer y último carácter de un string
console.log(strChain1[0]); // H
console.log(strChain1[strChain1.length - 1]); // a
console.log(strChain1[-1]); // H
// 4. Convierte a mayúsculas y minúsculas un string
console.log(strChain1.toUpperCase()); // HOLA
console.log(strChain1.toLowerCase()); // hola
// 5. Crea una cadena de texto en varias líneas
let multiLineString = `Hola, este
es un string
multilínea`;
console.log(multiLineString);

// 6. Interpola el valor de una variable en un string
console.log(`${strChain1} ${strChain2}!`); // Hola JavaScript Basic!

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(strChain2.replace(" ", "-")); // Hola-JavaScript-Basic

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(strChain2.includes("Java")); // true

// 9. Comprueba si dos strings son iguales
console.log(strChain1 === "Hola"); // true
console.log(strChain1 === "Adiós"); // false

// 10. Comprueba si dos strings tienen la misma longitud
console.log(strChain1.length === strChain2.length); // false