// ejercicio 1

function determinarSigno(numero) {
  if (numero > 0) {
    return "positivo";
  } else if (numero < 0) {
    return "negativo";
  } else {
    return "cero";
  }
}

const numeroPrueba = -7;
const signo = determinarSigno(numeroPrueba);
console.log(`El número ${numeroPrueba} es ${signo}.`);


//ejercicio 2

function sumarNumeros(firstNumber, secondNumber) {
  let suma = firstNumber + secondNumber;
  return suma;
}

const resultadoSuma = sumarNumeros(2, 3);
console.log("La suma de los números es: ", resultadoSuma);


//ejercicio 3

function esParOImpar(numero) {
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "impar";
  }
}

console.log(esParOImpar(4)); // Salida: "par"
console.log(esParOImpar(7)); // Salida: "impar"
console.log(esParOImpar(0)); // Salida: "par"
console.log(esParOImpar(-1)); // Salida: "impar"


//ejercicio 4

function sumar(a, b) {
  return a + b;
}

function calcularResultado(num1, num2) {
  const resultadoMultiplicacion = num1 * 2;
  const resultadoFinal = sumar(resultadoMultiplicacion, num2);
  return resultadoFinal;
}

const numero1 = 5;
const numero2 = 10;
const resultado = calcularResultado(numero1, numero2);
console.log("El resultado es:", resultado);


