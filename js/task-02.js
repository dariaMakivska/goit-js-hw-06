// // Напиши скрипт, который для каждого элемента 
// массива ingredients:
// // Создаст отдельный элемент <li>. Обзательно 
// используй метод document.createElement().
//   // Добавит название ингредиента как его текстовое 
//   содержимое.
// // Добавит элементу класс item.
// // После чего вставит все <li> за одну операцию в 
// список ul#ingredients.



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

ingredients.forEach((ingredient) => {
  const componentsListEl = document.createElement("li");
  componentsListEl.textContent = ingredient;
  componentsListEl.classList.add("item");
  ingredientsEl.append(componentsListEl);
});
