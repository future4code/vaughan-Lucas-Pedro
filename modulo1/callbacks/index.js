// Respostas

// 1 a) Todo o objeto, seu indice e a array de objetos.

// 2 a) A propriedade nome dos objetos.

// 3 a) { nome: "Amanda Rangel", apelido: "Mandi" } e { nome: "Laís Petra", apelido: "Laura" }.

// Exercicios de codigo:
// 1:
const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
];

const dogNames = pets.map((pet) => pet.nome);

const dogSalsichas = pets.filter((pet) => {
  return pet.raca === "Salsicha";
});

const poddles = pets.filter((pet) => {
  return pet.raca === "Poodle";
});

const poddlesMessages = poddles.map((pet) => {
  return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`;
});

// 2:
const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];

const itemNames = produtos.map((item) => item.nome);

const discountedItems = produtos.map((item) => {
  let name = item.nome;
  let price = item.preco;
  return { nome: name, preco: price - price * 0.05 };
});

const drinks = produtos.filter((item) => {
  return item.categoria === "Bebidas";
});

const ypeItems = produtos.filter((item) => {
  return item.nome.includes("Ypê");
});

const buyYpeMessage = ypeItems.map((item) => {
  return `Compre ${item.nome} por ${item.preco}`;
});

// Desafio:
const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
];

const pokemonNames = pokemons.map((pokemon) => pokemon.nome);
pokemonNames.sort();

const pokemonTypes = pokemons.map((pokemon) => pokemon.tipo);
const uniqTypes = [...new Set(pokemonTypes)];