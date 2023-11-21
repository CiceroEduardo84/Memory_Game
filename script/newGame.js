const inputName = document.querySelector(".inputName");
const newGameButton = document.querySelector(".newGameButton");
const newGameForm = document.querySelector(".newGameForm");

function validateInput(event) {
  if (event.target.value.length >= 3) {
    //remove disable
    newGameButton.removeAttribute("disabled");
  } else {
    //set disable
    newGameButton.setAttribute("disabled", "true");
  }
}

function handleSubmitNewGame(event) {
  event.preventDefault();
  localStorage.setItem("@memoryGame:playerName", inputName.value);
  inputName.value = "";
  window.location.href = "pages/cards.html"
}

inputName.addEventListener("input", validateInput);
newGameForm.addEventListener("submit", handleSubmitNewGame);
