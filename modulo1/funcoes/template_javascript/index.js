// Exercicios
// 1:
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

// 10 e 50
// nada

// 2:
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

// A function retorna o texto em minusculo e diz se existe a palavra cenoura.
// i. eu gost de cenoura true
// ii. cenoura e bom pra vista true
// iii. cenouras crescem na terra true

