const usersInput = document.querySelector("#validation-input");

usersInput.addEventListener("blur", handler);

function handler(event) {
  const target = event.currentTarget;
  const targetValue = target.value.trim();
  const targetRequiredLength = Number(target.dataset.length);

  switch (true) {
    case targetValue.length === targetRequiredLength:
      addClass(target, target.classList, "valid");
      break;
    case targetValue === "":
      removeAllClasses(target);
      break;
    default:
      addClass(target, target.classList, "invalid");
      break;
  }
}

function addClass(target, classList, className) {
  removeAllClasses(target);
  classList.add(className);
}
function removeAllClasses(target) {
  target.className = "";
}
