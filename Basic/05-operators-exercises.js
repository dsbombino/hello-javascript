/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let a = 2;
let b = 3;
let c = 5;
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let sum = a + b;          // Suma
let difference = a - b; // Resta
let product = a * b;     // Multiplicación
let quotient = a / b;   // División
let modulo = a % b;      // Módulo
let exponent = a ** b;   // Exponente

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(a < b); // a menor que b
console.log(a + b >= c); // suma de a y b mayor que c
console.log(a * b === 6); // producto de a y b es igual a 6
console.log(a != b); // suma de a y c mayor que b
console.log((a + b) % c == 0); // suma de a y b módulo c es igual a 0
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(a > b); // a mayor que b
console.log(a + b < c); // suma de a y b menor que c
console.log(a * b != 6); // producto de a y b no es igual a 6
console.log(a === b); // a es igual a b
console.log((a + b) % c != 0); // suma de a y b módulo c no es igual a 0

// 5. Utiliza el operador lógico and
console.log(a < b && c > b); // True

// 6. Utiliza el operador lógico or
console.log(a < b || c < b); // True

// 7. Combina ambos operadores lógicos
console.log((a < b && c > b) || (a < c || b < c)); // True

// 8. Añade alguna negación
console.log(!(a < b)); // False
console.log(!(a > b)); // True

// 9. Utiliza el operador ternario
console.log(a < b ? "a es menor que b" : "a no es menor que b"); // "a es menor que b"
console.log(a > b ? "a es mayor que b" : "a no es mayor que b"); // "a no es mayor que b"

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log((a + b > c) && (a * b < c) ? "La suma de a y b es mayor que c y el producto de a y b es menor que c" : "No se cumple la condición"); // "La suma de a y b es mayor que c y el producto de a y b es menor que c"