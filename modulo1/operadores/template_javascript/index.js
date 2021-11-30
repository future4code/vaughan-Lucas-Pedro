// Exercicios de interpretacao
//
// Exercicio 1:
const bool1 = true;
const bool2 = false;
const bool3 = !bool2;

let resultado = bool1 && bool2;
console.log("a. ", resultado);

resultado = bool1 && bool2 && bool3;
console.log("b. ", resultado);

resultado = !resultado && (bool1 || bool2);
console.log("c. ", resultado);

console.log("d. ", typeof resultado);

// a. false
// b. false
// c. true
// d. boolean

// Exercicio 2:
let primeiroNumero = prompt("Digite um numero!");
let segundoNumero = prompt("Digite outro numero!");

const soma = primeiroNumero + segundoNumero;

console.log(soma);

// Sera impresso o primeiro numero em forma de string concatenado ao segundo

// Exercicio 3:
// Para se resolver use Number()
