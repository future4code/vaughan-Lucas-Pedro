// Interpretacao

// 1: Esta rodando um loop, sera impresso: 0 1 2 3 4 um valor em cada linha

// 2 a) 19, 21, 23, 25, 27, 30 um em cada linha
// b) nao, pode ser utilizado uma variavel que conta o indice

// 3: ****

// Codigo

// 1:
const pets = Number(prompt("Quantos bixinhos de estimacao voce tem?"));
if (pets === 0) {
  console.log("Que pena! Você pode adotar um pet!");
} else if (pets > 0) {
  let countPets = 0;
  let petArray = [];

  while (countPets < pets) {
    const petName = prompt("Qual o nome do seu pet?");
    petArray.push(petName);
  }
}
console.log(petArray);

// 2:
const arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenArray = [];
let index = 0;

for (number of arrayOriginal) {
  console.log(number);
  console.log(number / 10);

  if (number % 2 === 0) {
    evenArray.push(number);
  };

  console.log(`O elemento do index ${index} e: ${number}`);
  index++;
};
console.log(evenArray);
