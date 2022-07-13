const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

console.log(decrementBtn)
console.log(incrementBtn)
console.log(valueEl)

let counterValue = 0;

decrementBtn.addEventListener("click", () => {
    counterValue -= 1
    valueEl.textContent = counterValue
console.log(decrementBtn)
});

incrementBtn.addEventListener("click", () => {
    counterValue += 1
    valueEl.textContent = counterValue
    console.log(incrementBtn)
});


