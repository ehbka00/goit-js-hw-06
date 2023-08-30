const incrementButton = document.querySelector(
    'button[data-action="increment"]',
  );
  const decrementButton = document.querySelector(
    'button[data-action="decrement"]',
  );
  const currentCounterValue = document.querySelector("#value");
  
  let counterValue = 0;
  
  incrementButton.addEventListener("click", () => handleClick(1));
  decrementButton.addEventListener("click", () => handleClick(-1));
  
  function updateCounter(value) {
    currentCounterValue.textContent = value;
  }
  
  function handleClick(change) {
    counterValue += change;
    updateCounter(counterValue);
  }
  