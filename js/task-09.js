function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const buttonChangeColor = document.querySelector(".change-color");
let colorCode = document.querySelector(".color");

buttonChangeColor.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor(event) {
  body.style.backgroundColor = getRandomHexColor();
  colorCode.textContent = `${getRandomHexColor()}`;
}
