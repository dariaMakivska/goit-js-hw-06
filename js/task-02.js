const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const ingredientsMaker = (ingredientsArray) => {
  return ingredientsArray.map((ingredient) => {
    const componentsListEl = document.createElement("li");
    componentsListEl.textContent = ingredient;
    componentsListEl.classList.add("item");
    componentsListEl.textContent = ingredient;
    return componentsListEl;
  });
};

const elements = ingredientsMaker(ingredients);
ingredientsEl.append(...elements);
