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

// Exercicios de codigo:
// Exercicio 1:
const age = Number(prompt("Digite sua idade:"));
const friendAge = Number(prompt("Digete a idade de seu melhor amigue:"));

console.log("Sua idade é maior do que a do seu melhor amigo?", age > friendAge);
console.log(age - friendAge);

// Exercicio 2:
const number = Number(prompt("Digite um numero par:"));
console.log(number % 2);

// O resto sempre sera 0
// O resto sera maior do que 0

// Exercicio 3:
const age = Number(prompt("Digite sua idade:"));
const months = age * 12;
const days = months * 4 * 7;
const hours = days * 24;

console.log("Idade em meses:", months);
console.log("Idade em dias:", days);
console.log("Idade em horas:", hours);

// Exercicio 4:
const firstNumber = Number(prompt("Digite um numero:"));
const secondNumber = Number(prompt("Digite outro numero:"));

console.log(
  "O primeiro numero é maior que segundo?",
  firstNumber > secondNumber
);
console.log(
  "O primeiro numero é igual ao segundo?",
  firstNumber === secondNumber
);
console.log(
  "O primeiro numero é divisível pelo segundo?",
  firstNumber % secondNumber === 0
);
console.log(
  "O segundo numero é divisível pelo primeiro?",
  secondNumber % firstNumber === 0
);

// Desafio:
// 1:
let kelvin = (77 - 32) * (5 / 9) + 273.15;
console.log(`${kelvin}K`);

let fahrenheit = 80 * (9 / 5) + 32;
console.log(`${fahrenheit}°F`);

fahrenheit = 30 * (9 / 5) + 32;
kelvin = (fahrenheit - 32) * (5 / 9) + 273.15;

console.log(`${fahrenheit}°F e ${kelvin}K`);

// 2:
const kwhPrice = 0.05;
const energyUsage = 280;
const discountPercentage = 15;

const result = energyUsage * kwhPrice;
const discount = (discountPercentage / 100) * result;
const discountedResult = result - discount;

// 3:
const lbsToKg = 20 * 0.45359237;
console.log(`20lb equivalem a ${lbsToKg}kg`);

const ozToKg = 5 * 0.02834952;
console.log(`5oz equivalem a ${ozToKg}kg`);

const miToM = 100 / 0.00062137;
console.log(`100mi equivalem a ${miToM}M`);

const ftToM = 50 / 3.2808;
console.log(`50ft equivalem a ${ftToM}M`);

const galToL = 103.56 / 0.264172;
console.log(`103.56gal equivalem a ${galToL}L`);

const xicToL = 450 / 0.24;
console.log(`450xic equivalem a ${xicToL}L`);

const inputFt = Number(prompt("Digite um valor em ft e retornarei em M:"));
const result = inputFt / 3.2808;
console.log(`50ft equivalem a ${result}M`);
