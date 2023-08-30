const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const newItemsArray = [];
const listElements = ingredients
  .map((item) => {
    let newItem = document.createElement("li");
    newItem.textContent = item;
    newItemsArray.push(newItem);
  });

  list.append(...newItemsArray);
