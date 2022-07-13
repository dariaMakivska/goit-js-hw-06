const allList = document.querySelectorAll(".item");
const numberOfCategories = allList.length;

console.log(`Number of categories: ${numberOfCategories}`);

allList.forEach((element) => {

    const nameOfElements = element.querySelector("h2");

    const numberOfElements = element.querySelectorAll("li");
    const amountOfElements = numberOfElements.length;

    console.log(`Category: ${nameOfElements.textContent}`);
    console.log(`Elements: ${amountOfElements}`)
});