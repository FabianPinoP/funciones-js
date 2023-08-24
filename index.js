// // ejemplo de sintaxis basica de una funcion en javascript

// // Declaracion de la funcion

// function ejemplo(parametro1, parametro2) {
//   // codigo a ejecutar cuando se invoque la funcion
// }

// // Ejemplo de funcion
// function saludar(nombre) {
//   return `Hola ${nombre}`;
// }

// // Invocacion de la funcion
// const saludo = saludar("Fernando");

// //consoleamos el resultado
// console.log("saludo: ", saludo);

// // Ejemplo Funcion de flecha

// const ejemplo2 = (parametro1, parametro2) => {
//   // codigo a ejecutar cuando se invoque la funcion
// };

// // Ejecutando una funcion de flecha
// const saludar2 = (nombre) => {
//   return `Hola ${nombre}`;
// };

// // Invocacion de la funcion
// const saludo2 = saludar2("Fernando desde funcio flecha");

// //consoleamos el resultado
// console.log("saludo2: ", saludo2);

// // Ejemplo Funcion de flecha con return implicito

// //sintaxis
// const test3 = (parametro1, parametro2) => "expresion a retornar";

// // Ejecutando una funcion de flecha con return implicito
// const saludar3 = (message) => `Hola ${message}`;

// // Invocacion de la funcion
// const saludo3 = saludar3("Fernando desde funcion flecha con return implicito");

// //consoleamos el resultado
// console.log("saludo3: ", saludo3);

// // Ejemplo Funcion de flecha con un solo parametro

// //sintaxis
// const test4 = (parametro1) => "expresion a retornar";

// // Ejecutando una funcion de flecha con un solo parametro
// const saludar4 = (nombre) => {
//   `Hola ${nombre}`;
// };

// // Invocacion de la funcion
// const saludo4 = saludar4("Fernando desde funcio flecha con un solo parametro");

// //consoleamos el resultado
// console.log("saludo4: ", saludo4);

// // Ejemplo Funcion de flecha con parametros por defecto

// //sintaxis
// const test5 = (parametro1 = valorPorDefecto, parametro2 = valorPorDefecto) =>
//   "expresion a retornar";
// //Ejemplo sin retorno implicito
// const test6 = (parametro1 = valorPorDefecto, parametro2 = valorPorDefecto) => {
//   return "expresion a retornar";
// };

// // Ejecutando una funcion de flecha con parametros por defecto
// const saludar5 = (nombre = "Fernando", apellido = "Herrera") =>
//   `Hola ${nombre} ${apellido}`;

// // Invocacion de la funcion
// const saludo5 = saludar5();

// //consoleamos el resultado
// console.log("saludo5: ", saludo5);

// // Ejemplo Funcion de flecha con parametros por defecto y retorno implicito

// //Ejecutando una funcion de flecha con parametros por defecto sin return implicito

// const saludar6 = (nombre = "Fernando", apellido = "Herrera") => {
//   return `Hola ${nombre} ${apellido}`;
// };

// // Invocacion de la funcion
// const saludo6 = saludar6();

// //consoleamos el resultado
// console.log("saludo6: ", saludo6);

// //Ejecutando una funcion de flecha con parametros por defecto sobreescritos

// const saludar7 = (nombre = "Fernando", apellido = "Herrera") => {
//   return `Hola ${nombre} ${apellido}`;
// };

// // Invocacion de la funcion
// const saludo7 = saludar7("Melissa", "Flores");

// //consoleamos el resultado
// console.log("saludo7: ", saludo7);

// //buenas practicas para nombrar funciones
// //camelCase

// //ejemplo funcion con nombre en camelCase y sin buenas practicas
// const name = (nombre, apellido) => {
//   return `Hola ${nombre} ${apellido}`;
// };

// //malas practicas para nombrar funciones
// const tot = (quantity, price) => {
//   return quantity * price;
// };

// //ejemplo funcion con nombre en camelCase y siguiendo buenas practicas
// const nombreCompleto = (nombre, apellido) => {
//   return `Hola ${nombre} ${apellido}`;
// };

// //nombrar funciones con verbos que indiquen que hace la funcion

// //mal
// const name2 = (nombre, apellido) => {
//   return `Hola ${nombre} ${apellido}`;
// };

// //bueno
// const getFullName = (nombre, apellido) => {
//   return `Hola ${nombre} ${apellido}`;
// };

// //Ejemplo de funcion anonima como expresion

// //sintaxis

// const test7 = function (parametro1, parametro2) {
//   // codigo a ejecutar cuando se invoque la funcion
// };

// // Ejecutando una funcion anonima con arrow function
// const saludar8 = (nombre) => {
//   return `Hola ${nombre}`;
// };

// //Ejemplo de funcion IIFE

// //sintaxis

// (function () {
//   // codigo a ejecutar cuando se invoque la funcion
// })();

// // Ejecutando una funcion IIFE con parametros

// (function (nombre) {
//   console.log(`Hola ${nombre}`);
// })("Fernando");

// // Ejemplo de funcion IIFE con arrow function

// //sintaxis

// (() => {
//   // codigo a ejecutar cuando se invoque la funcion
// })();
// // Ejecutando una funcion IIFE con arrow function y parametros

// ((nombre) => {
//   console.log(`Hola ${nombre}`);
// })("Fernando");

// //Ejemplo de funciones como argumentos de otras funciones

// //sintaxis

// function principal(parametro1, parametro2, otraFuncion) {
//   // codigo a ejecutar cuando se invoque la funcion
//   otraFuncion(parametro1, parametro2);
// }

// function multiplicar(parametro1, parametro2) {
//   return parametro1 * parametro2;
// }

// // Ejecutando una funcion como argumento de otra funcion
// const resultado = principal(2, 3, multiplicar);

// //consoleamos el resultado
// console.log("resultado: ", resultado);

// //Ejemplo invocando funciones desde otras funciones

// function inicial(parametro1, parametro2) {
//   let parametros = parametro1 + parametro2;
//   // puede recibir variables u otros datos depende de la logica de la
//   // funcion o incluso no recibir nada como  parametro y ejecutar una logica x
//   test8(parametros);
// }

// function test8(parametros) {
//   let resultado = parametros + 1;
//   return resultado;
// }

// // Ejemplo arrow function invocando funciones desde otras funciones

// const inicial2 = (parametro1, parametro2) => {
//   let parametros = parametro1 + parametro2;
//   // puede recibir variables u otros datos depende de la logica de la
//   // funcion o incluso no recibir nada como  parametro y ejecutar una logica x
//   test9(parametros);
// };

// const test9 = (parametros) => {
//   let resultado = parametros + 1;
//   return resultado;
// };

// //ejecucion de la funcion
// const resultado2 = inicial2(2, 3);

// //consoleamos el resultado
// console.log("resultado2: ", resultado2);


// const saludar9 = (nombre, apellido, direccion) => {
//   return `Hola ${nombre} ${apellido} ${direccion}`;
// }


// function saludar10(nombre, apellido, direccion) {
//   return `Hola ${nombre} ${apellido} ${direccion}`;
// }

// function ejecutarOperacion(operacion, num1, num2){
//   return operacion(num1,num2); //entra 2 y 3 a la funcion sumar
// }

// function sumar(num1, num2){
//   return num1+num2; //5
// }

// function restar(num1,num2){
//   return num1-num2; //1
// }

// console.log(ejecutarOperacion(restar,2,3));

// //ejemplo hoisting

// let algo;
// console.log("algo-->>", algo); //undefined


// algo = 2

// console.log("algo asignado", algo); //2

const name = document.querySelector(".name");
const button = document.querySelector(".sendName");

button.addEventListener("click", () => {
  console.log(name.value);
})