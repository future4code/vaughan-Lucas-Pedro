let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

// Respostas:
// 10
// 10 10

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

// Respostas:
// 10 10 10

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

// Respostas:
// Variavel p poderia ter o nome: horasDeTrabalho
// Variavel t poderia ter o nome: salarioDiario

// Fim dos Exercicios de analise

//Programa 1:

let nome;
let idade;

nome = prompt("Qual o seu nome?:");
idade = prompt("Qual a sua idade?:");

console.log(typeof(nome));
console.log(typeof(idade));

console.log("Olá", nome, "você tem", idade, "anos.");

//Retorna string como typeof

//Programa 2:

let roupaVermelha = "Você está usando uma roupa vermelha hoje?";
let roupaAzul = "Você está usando uma roupa azul hoje?";
let roupaAmarela = "Você está usando uma roupa amarela hoje?";

let respostaRoupaVermelha = prompt(roupaVermelha);
let respostaRoupaAzul = prompt(roupaAzul);
let respostaRoupaAmarela = prompt(roupaAmarela);

console.log(roupaVermelha, "-", respostaRoupaVermelha);
console.log(roupaVermelha, "-", respostaRoupaVermelha);
console.log(roupaVermelha, "-", respostaRoupaVermelha);

// Programa 3:

let a = 10
let b = 25
let bufferA;
let bufferB;

a = bufferB;
b = bufferA;

console.log("O novo valor de a é", a);
console.log("O novo valor de b é", b);

//Desafio:

let firstNumber = prompt("Digite um numero:");
let secondNumber = prompt("Digite mais um numero:");
let sumResult = Number(firstNumber) + Number(secondNumber);
let multResult = Number(firstNumber) * Number(secondNumber);

console.log("O primeiro número somado ao segundo número resulta em:", sumResult);
console.log("O primeiro número multiplicado pelo segundo número resulta em:", multResult);

// Fim do desafio.