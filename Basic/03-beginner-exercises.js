/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
// esto es un comentario en una línea

// 2. Escribe un comentario en varias líneas
/* 
esto es un comentario
en varias lineas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let nombre = "Jhon"; // String
let edad = 30; // Number   
let altura = 1.74; // Number (Decimal)
let esEstudiante = true; // Boolean
let esProfesor = false; // Boolean
let valorIndefinido; // Undefined
let valorNulo = null; // Null
let miSimbolo = Symbol("miSimbolo"); // Symbol
let miBigInt = BigInt(123456789012345678901234567890); // BigInt
// 4. Imprime por consola el valor de todas las variables
console.log(nombre);
console.log(edad);
console.log(altura);
console.log(esEstudiante);
console.log(esProfesor);
console.log(valorIndefinido);
console.log(valorNulo);
console.log(miSimbolo);
console.log(miBigInt);

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof altura);
console.log(typeof esEstudiante);
console.log(typeof esProfesor);
console.log(typeof valorIndefinido);
console.log(typeof valorNulo);
console.log(typeof miSimbolo);
console.log(typeof miBigInt);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
nombre = "Jane"; // String
edad = 25; // Number
altura = 1.65; // Number (Decimal)
esEstudiante = false; // Boolean
esProfesor = true; // Boolean 
valorIndefinido = undefined; // Undefined
valorNulo = null; // Null
miSimbolo = Symbol("nuevoSimbolo"); // Symbol
miBigInt = BigInt(987654321098765432109876543210); // BigInt

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
nombre = 123; // Cambiamos a Number
edad = "treinta"; // Cambiamos a String
altura = "alta"; // Cambiamos a Boolean
esEstudiante = 1; // Cambiamos a Number
esProfesor = "no" // Cambiamos a String
valorIndefinido = true; // Cambiamos a Boolean
valorNulo = 0; // Cambiamos a Number
miSimbolo = 456; // Cambiamos a Number 
miBigInt = "mil"; // Cambiamos a String

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const constanteNombre = "Constante Jhon"; // String
const constanteEdad = 40; // Number
const constanteAltura = 1.80; // Number (Decimal)
const constanteEsEstudiante = true; // Boolean
const constanteEsProfesor = false; // Boolean
const constanteValorIndefinido = undefined; // Undefined
const constanteValorNulo = null; // Null
const constanteMiSimbolo = Symbol("constanteSimbolo"); // Symbol
const constanteMiBigInt = BigInt(123456789012345678901234567890); // BigInt

// 9. A continuación, modifica los valores de las constantes
constanteEdad = 40; // Number
constanteAltura = 1.80; // Number (Decimal)
constanteEsEstudiante = true; // Boolean
constanteEsProfesor = false; // Boolean
constanteValorIndefinido = undefined; // Undefined
constanteValorNulo = null; // Null
constanteMiSimbolo = Symbol("constanteSimbolo"); // Symbol
constanteMiBigInt = BigInt(123456789012345678901234567890); // BigInt

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse