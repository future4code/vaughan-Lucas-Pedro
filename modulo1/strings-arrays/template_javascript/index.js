// Exercicios de interpretacao
// 1:
let array;
console.log("a. ", array);

array = null;
console.log("b. ", array);

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log("c. ", array.length);

let i = 0;
console.log("d. ", array[i]);

array[i + 1] = 19;
console.log("e. ", array);

const valor = array[i + 6];
console.log("f. ", valor);

// a. undefined
// b. null
// c. 11
// d. 3
// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f. 9

//2:
const frase = prompt("Digite uma frase");

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length);
// SUBI NUM ONIBUS EM MIRROCOS 27

// CODING EXERCISES
//1:
const userName = prompt("Digite o seu nome:");
const userEmail = prompt("Digite o seu email:");

console.log(
  `O e-mail ${userEmail} foi cadastrado com sucesso. Seja bem-vinda(o), ${userName}!`
);

