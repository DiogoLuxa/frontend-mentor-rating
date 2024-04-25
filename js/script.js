// card rating
const cardContainer = document.querySelector(".card-container");
const cardButtons = document.querySelectorAll(".card__button");
const submitButton = document.querySelector(".card__submit");
// card thank
const cardTagParagraph = document.querySelector(".card__tag__paragraph");

function updateRatingMessage(idx) {
  cardTagParagraph.textContent = `You selected ${idx + 1} out of 5`;
}

function clearAllSelected() {
  cardButtons.forEach((button) => {
    button.classList.remove("selected");
  });
}

function selectButton(button) {
  button.classList.add("selected");
}

cardButtons.forEach((button, idx) => {
  button.addEventListener("click", () => {
    clearAllSelected();
    updateRatingMessage(idx);
    selectButton(button);
  });
  button.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      clearAllSelected();
      updateRatingMessage(idx);
      selectButton(button);
    }
  });
});

submitButton.addEventListener("click", () => {
  const hasSelected = Array.from(cardButtons).some((button) =>
    button.classList.contains("selected")
  );

  hasSelected
    ? cardContainer.classList.add("flip")
    : console.log("Please select a rating");
});
