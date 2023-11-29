function backPage() {
  window.history.back();
}

const backButton = document.querySelector(".backButton");

backButton.addEventListener("click", backPage);
