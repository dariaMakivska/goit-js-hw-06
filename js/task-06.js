const inputEl = document.querySelector("#validation-input");
const validEl = parseInt(inputEl.getAttribute("data-length"));

inputEl.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === validEl) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.remove("valid");
  }
});
