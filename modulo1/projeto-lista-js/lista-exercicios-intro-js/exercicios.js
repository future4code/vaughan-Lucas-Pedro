// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const height = Number(prompt("What is the height?"));
  const length = Number(prompt("What is the length?"));

  const area = Number(height) * Number(length);
  console.log(area);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const currentYear = Number(prompt("What is the current year?"));
  const birthYear = Number(prompt("What is your birth year?"));

  const age = currentYear - birthYear;
  console.log(age);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura);
  return imc;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const name = prompt("Qual o seu nome?");
  const age = prompt("Quantos anos voce tem?");
  const email = prompt("Qual o seu email?");

  console.log(`Meu nome é ${name}, tenho ${age} anos, e o meu email é ${email}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const favoriteColorsArr = [];

  const favoriteColor1 = prompt("Qual a sua cor favorita?");
  const favoriteColor2 = prompt("Qual a sua segunda cor favorita?");
  const favoriteColor3 = prompt("Qual a sua terceira cor favorita?");

  favoriteColorsArr.push(favoriteColor1);
  favoriteColorsArr.push(favoriteColor2);
  favoriteColorsArr.push(favoriteColor3);

  console.log(favoriteColorsArr);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const hasToSell =  custo / valorIngresso;
  return hasToSell;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  bufferLast = array[array.length - 1];
  
  array[array.length - 1] = array[0];
  array[0] = bufferLast;
  return(array);
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() === string2.toLowerCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const currentYear = Number(prompt("Qual o ano atual?"));
  const birthYear = Number(prompt("Qual o seu ano de nascimento?"));
  const rgEmission = Number(prompt("Em que ano seu RG foi emitido?"));

  const age = currentYear - birthYear;
  const rgAge = currentYear - rgEmission;
  
  if (age <= 20) {
    console.log(rgAge >= 5);
  } else if (age > 20 && age < 50) {
    console.log(rgAge >= 10);
  } else if (age > 50) {
    console.log(rgAge >= 15);
  }
}
// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const above18 = prompt("Voce tem 18 anos ou mais?");
  const highSchool = prompt("voce terminou o ensino medio?");
  const availability = prompt("voce tem disponibilidade durante o horario do curso?");

  console.log((above18 === "sim") && (highSchool === "sim") && (availability === "sim"));

}