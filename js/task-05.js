const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

let spanNameOutputEl = "Anonymous";

inputEl.addEventListener("change", onInputChange);

function onInputChange(event) {
  spanNameOutputEl = event.currentTarget.value;
  spanEl.textContent = spanNameOutputEl;

  if (spanEl.textContent === "") {
    spanEl.textContent = "Anonymous";
  }
}
