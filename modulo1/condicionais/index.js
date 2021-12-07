// 1 a) Testa se o numero e par
// b) numeros pares
// c) numeros impares

// 2 a) Ver precos de frutas
// b) O preco da fruta maca e R$ 2.25
// c) Sera impresso todos os cases abaixo

// 3 a) Cria um prompt pare input do usuario
// b) Esse numero passou no teste
// c) Sim, nao foi definida uma variavel mensagem no scope global

// 1:
const age = Number(prompt("Qual a sua idade?"));

if (age > 18) {
  console.log("Você pode dirigir");
} else {
  console.log("Você não pode dirigir.");
}

// 2:
const turno = prompt("Qual seu turno? M ou V ou N");

if (turno === "M") {
  console.log("Bom Dia!");
} else if (turno === "V") {
  console.log("Boa Tarde!");
} else if (turno === "N") {
  console.log("Boa Noite!");
}

// 3:
switch (turno) {
  case "M":
    console.log("Bom Dia!");
    break;
  case "V":
    console.log("Boa Tarde!");
    break;
  case "N":
    console.log("Boa Noite!");
}

// 4:
const genre = prompt("Qual o genero do filme?");
const price = Number(prompt("Qual o preco do ingresso?"));
const food = prompt("Qual lanche voce vai querer?");

if (genre === "fantasia" && price < 15 ) {
  console.log(`Bom filme! aproveite o seu ${food}!`);
} else {
  console.log("Escolha outro filme :(");
};