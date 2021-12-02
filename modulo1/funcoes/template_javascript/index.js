// Exercicios
// 1:
function minhaFuncao(variavel) {
  return variavel * 5;
}

console.log(minhaFuncao(2));
console.log(minhaFuncao(10));

// 10 e 50
// nada

// 2:
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function (texto) {
  return texto.toLowerCase().includes("cenoura");
};

const resposta = outraFuncao(textoDoUsuario);
console.log(resposta);

// A function retorna o texto em minusculo e diz se existe a palavra cenoura.
// i. eu gost de cenoura true
// ii. cenoura e bom pra vista true
// iii. cenouras crescem na terra true

// Exercicios de codigo
// 1:
const autoGreeter = () =>
  console.log("Eu sou Lucas, tenho 19 anos, moro em curitiba e sou estudante.");

const greeter = (name, age, city, occupation) =>
  console.log(
    `Eu sou ${name}, tenho ${age} anos, moro em ${city} e sou ${occupation}.`
  );

// 2:
const sum = (num1, num2) => num1 + num2;
console.log(sum(1, 2));

const greaterChecker = (num1, num2) => num1 >= num2;

const evenChecker = (num) => num % 2 === 0;

const sizeCheckerAndUpper = (string) => {
  console.log(string.toUpperCase);
  console.log(string.length);
}
