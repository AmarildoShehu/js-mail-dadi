//1. agganciamo tutti i file tra cui html e js;
console.log('JS OK');
// -----------------------------//
// 4. recupero le classi in js
const playerElm = document.querySelector('.player');
const computerElm = document.querySelector('.computer');
const playbtnElm = document.querySelector('.playbtn');
const winnerElm = document.querySelector('.winner');

// 5. creo la funzione del bottone
playbtnElm.addEventListener('click', gioca);

function gioca() {
    let playerTurn = Math.floor(Math.random() * 6) + 1;
    console.log(playerTurn);
    let computerTurn = Math.floor(Math.random() * 6) + 1;
    console.log(computerTurn);
  
    playerElm.textContent = playerTurn;
    computerElm.textContent = computerTurn;
  
    let winnerText;
    if (playerTurn === computerTurn) {
        winnerText = "Pareggio!";
    } else if (playerTurn > computerTurn) {
        winnerText = "Player!";
    } else {
        winnerText = "Computer!";
    }

    winnerElm.textContent = "Il vincitore è: " + winnerText;
  }