const changeColorBtn = document.querySelector(".change-color");
const docBody = document.querySelector("body");
const docBodyColorText = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  docBodyColorText.textContent = newColor;
  docBody.style.backgroundColor = newColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
