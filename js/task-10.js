const createBtn = document.querySelector("button[data-create]");
const destroyeBtn = document.querySelector("button[data-destroy]");
const amountInput = createBtn.previousElementSibling;
const content = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  createBoxes(amountInput.value);
});

destroyeBtn.addEventListener("click", destroy);

function createBoxes(usersCount) {
  const newItems = [];
  const minCount = Number(amountInput.min);
  const maxCount = Number(amountInput.max);
  const step = Number(amountInput.step);
  let width = 30;

  if (usersCount >= minCount && usersCount <= maxCount) {
    for (let i = 0; i < usersCount; i += step) {
      let newDiv = document.createElement("div");
      newDiv.style.backgroundColor = getRandomHexColor();
      newDiv.style.width = `${width}px`;
      newDiv.style.height = `${width}px`;
      newItems.push(newDiv);
      width += 10;
    }
    content.append(...newItems);
  } else {
    alert('Invalid value of range!');
  }
}

function destroy() {
  content.innerHTML = "";
  amountInput.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  }
