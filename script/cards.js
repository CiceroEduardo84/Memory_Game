function backPage() {
  const playerResp = confirm(
    "Deseja sair do jogo? Você perderá seu progresso!"
  );
  if (playerResp) {
    window.history.back();
  }
}

function createCards() {
  gridCards.innerHTML = "";
  sortedCards.forEach((value) => {
    gridCards.innerHTML += `          
      <div class="card" name="${value}">
        <div class="front ">
          <img src="../images/${value}.jpg" alt="" />
        </div>

        <div class="back">
          <img src="../images/yugioh-card-back.png" alt="" />
        </div>
      </div>
    `;
  });
}

const playerName = document.querySelector(".playerName");
const backButton = document.querySelector(".backButton");
const gridCards = document.querySelector(".gridCards");
const storagePlayerName = localStorage.getItem("@memoryGame:playerName");

playerName.innerHTML = storagePlayerName;
backButton.addEventListener("click", backPage);

const cardNames = [
  "card_1",
  "card_2",
  "card_3",
  "card_4",
  "card_5",
  "card_6",
  "card_7",
  "card_8",
  "card_9",
  "card_10",
  "card_11",
  "card_12",
  "card_13",
  "card_14",
  "card_15",
  "card_16",
  "card_17",
  "card_18",
  "card_19",
];

const arrayCardsNames = cardNames
  .sort(() => Math.random() - 0.5)
  .filter((value, index) => index < 12);

const sortedCards = [...arrayCardsNames, ...arrayCardsNames].sort(
  () => Math.random() - 0.5
);

createCards();
