/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
const printCards = (player, card1, card2, points) => {
   console.log(`${player} - cartas: ${card1.texto} ${card2.texto}  - pontuação ${points}`);
};

const checkWinner = (points1, points2) => {
   if(points1 > points2) {
      console.log("O usuário ganhou!");
   } else if(points1 < points2) {
      console.log("O computador ganhou!");
   } else {
      console.log("Empate!")
   }
};

console.log("Boas vindas ao jogo de Blackjack!");

if (confirm("Quer iniciar uma nova rodada?")) {
  let userPoints = 0;
  let compPoints = 0;

  userCard1 = comprarCarta();
  userCard2 = comprarCarta();

  compCard1 = comprarCarta();
  compCard2 = comprarCarta();

   userPoints = userCard1.valor + userCard2.valor;
   compPoints = compCard1.valor + compCard2.valor;

   printCards("usuario", userCard1, userCard2, userPoints);
   printCards("computador", compCard1, compCard2, compPoints);

   checkWinner(userPoints, compPoints);
} else {
  console.log("O jogo acabou");
}
