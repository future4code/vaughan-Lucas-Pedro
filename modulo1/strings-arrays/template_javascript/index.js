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

//2:
const foodArray = [
  "pizza",
  "hamburguer",
  "sandwish",
  "french fries",
  "brigadeiro",
];

console.log(foodArray);
console.log(`Essas são as minhas comidas preferidas:`);
console.log(foodArray[0]); // poderia ser feito com um loop
console.log(foodArray[1]); // mas ainda n aprendemos ent nao vou usar
console.log(foodArray[2]);
console.log(foodArray[3]);
console.log(foodArray[4]);

const userFood = prompt("Qual a sua comida favorita?");
foodArray[1] = userFood;

// 3:
const listaDeTarefas = [];

listaDeTarefas[0] = prompt("Digite uma tarefa:");
listaDeTarefas[1] = prompt("Digite outra tarefa:");
listaDeTarefas[2] = prompt("Digite mais uma tarefa:");

console.log(listaDeTarefas);

const index = prompt("Digite um indice de uma tarefa para remover:");
listaDeTarefas.splice(index, 1);

console.log(listaDeTarefas);

// Desafios
// 1:
const arrayToSplit = "Essa e uma frase que sera dividida em array!"
arrayToSplit.split(" ");

// 2:
const fruits = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
const pineappleIndex = fruits.indexOf("Abacaxi");

console.log(pineappleIndex, fruits.length);