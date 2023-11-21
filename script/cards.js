const playerName = document.querySelector(".playerName");
const storagePlayerName = localStorage.getItem("@memoryGame:playerName");

console.log(storagePlayerName);
console.log(playerName.innerHTML);
playerName.innerHTML = storagePlayerName;
