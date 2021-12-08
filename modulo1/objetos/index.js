// Inicio dos exercicios

// 1: "Matheus Nachtergaele" \n "Virginia Cavendish" \n "Canal Brasil" (suposicao, nao reliable)

// 2: a) nome: "Juca", idade: 3, raca: "SRD"
// nome: "Juba", idade: 3, raca: "SRD"
// nome: "Jubo", idade: 3, raca: "SRD"

// b) copia o conteudo do objeto

// 3: false \n undefined
// pois a key chamada nao foi definida

// Exercicios de codigo

// 1:
const person = {
  nome: "Lucas",
  apelidos: ["Lu", "Luca", "Luc"],
};

const printPerson = (personObject) => {
  console.log(
    `Eu sou ${personObject.nome}, mas pode me chamar de: ${personObject.apelidos[0]}, ${personObject.apelidos[1]} ou ${personObject.apelidos[2]}`
  );
};

const newNickname = {
  ...pessoa,
  apelidos: ["Uca", "Lusca", "Lul"],
};

printPerson(newNickname);

// 2:
const workingPerson = {
  name: "Lucas",
  age: 20,
  occupation: "Student",
};

const workingPerson2 = {
  name: "Roberto",
  age: 26,
  occupation: "Programmer",
};

const makeArray = (object) => {
  return [
    object.name,
    object.name.length,
    object.age,
    object.occupation,
    object.occupation.length,
  ];
};

// 3:
const carrinho = [];

const maca = {
  nome: "maca",
  diponibilidade: true
};

const banana = {
  nome: "banana",
  diponibilidade: true
};

const laranja = {
  nome: "laranja",
  diponibilidade: false
};

const addToCart = (object) => {
  carrinho.push(object);
};

addToCart(maca);
addToCart(banana);
addToCart(laranja);

console.log(carrinho);