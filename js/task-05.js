const usersInput = document.querySelector("#name-input");
const usersOutput = document.querySelector("#name-output");

usersInput.addEventListener("input", (event) => {
  const inputText = event.currentTarget.value.trim();
  usersOutput.textContent = inputText === "" ? "Anonymous" : inputText;
});
