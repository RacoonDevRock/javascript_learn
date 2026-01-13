// patron de modulo
// funcion anonima
const myModule = (() => {
  "use strict";

  /**
   * 2C = Two of Clubs (Tréboles)
   * 2D = Two of Diamonds (Diamantes)
   * 2H = Two of Hearts (Corazones)
   * 2S = Two of Spades (Picas)
   */

  let deck = [];
  const types = ["C", "D", "H", "S"],
    specials = ["A", "J", "Q", "K"];

  let playersPoints = [];

  // REFERENCES HTML
  const btnGive = document.querySelector("#btnGive"),
    btnNew = document.querySelector("#btnNew"),
    btnStop = document.querySelector("#btnStop");

  const HTMLpoints = document.querySelectorAll("small");

  const divCardsPlayers = document.querySelectorAll(".divCards");

  // this functions initializes the game
  const initializeGame = (NPlayers = 2) => {
    deck = createDeck();

    playersPoints = [];
    for (let i = 0; i < NPlayers; i++) {
      playersPoints.push(0);
    }

    HTMLpoints.forEach((player) => (player.innerText = 0));
    divCardsPlayers.forEach((card) => (card.innerHTML = ""));

    btnGive.disabled = false;
    btnStop.disabled = false;
  };

  // create a new deck(random order with shuffle)
  const createDeck = () => {
    deck = [];
    for (let i = 2; i <= 10; i++) {
      for (const type of types) {
        deck.push(i + type);
      }
    }

    for (let type of types) {
      for (let special of specials) {
        deck.push(special + type);
      }
    }
    return _.shuffle(deck);
  };

  // this function give a new card
  const giveCard = () => {
    if (deck.length === 0) throw "No cards in the deck";
    return deck.pop();
  };

  const cardValue = (card) => {
    let value = card.substring(0, card.length - 1);
    return isNaN(value) ? (value === "A" ? 11 : 10) : parseInt(value);
  };

  // turn: 0 = first player, and last player is computer
  const pointAccumulated = (turn, carta) => {
    playersPoints[turn] += cardValue(carta);
    HTMLpoints[turn].innerText = playersPoints[turn];
    return playersPoints[turn];
  };

  const createCard = (carta, turn) => {
    const imgCard = document.createElement("img");
    imgCard.src = `assets/cartas/${carta}.png`;
    imgCard.classList.add("carta");
    divCardsPlayers[turn].append(imgCard);
  };

  const determineWinner = () => {
    const [playerPoints, computerPoints] = playersPoints;

    setTimeout(() => {
      computerPoints === playerPoints
        ? alert("Nadie gana")
        : computerPoints > 21
        ? alert("Jugador gana")
        : alert("Computadora gana");
    }, 100);
  };

  // computer turn
  const computerTurn = (playerPoints) => {
    let computerPoints = 0;
    do {
      const carta = giveCard();
      computerPoints = pointAccumulated(playersPoints.length - 1, carta);
      createCard(carta, playersPoints.length - 1);
    } while (computerPoints <= playerPoints && playerPoints <= 21);

    determineWinner();
  };

  // EVENTS
  // recibe el tipo de evento y un callback(funcion flecha)
  btnGive.addEventListener("click", () => {
    const carta = giveCard();
    const playerPoints = pointAccumulated(0, carta);
    createCard(carta, 0);

    if (playerPoints > 21) {
      console.warn("You lost...");
      btnGive.disabled = true;
      btnStop.disabled = true;
      computerTurn(playerPoints);
    } else if (playerPoints === 21) {
      btnGive.disabled = true;
      btnStop.disabled = true;
      console.warn("21, you win!");
    }
  });

  btnStop.addEventListener("click", () => {
    btnGive.disabled = true;
    btnStop.disabled = true;

    computerTurn(playersPoints);
  });

  // btnNew.addEventListener(onclick, () => initializeGame());

  return {
    newGame: initializeGame,
  };
})();
