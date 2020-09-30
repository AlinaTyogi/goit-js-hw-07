const incrementBtnEl = document.querySelector('[data-action="increment"]');
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector("#value");
let counterValue = 0;

incrementBtnEl.addEventListener("click", onIncrClick);
decrementBtnEl.addEventListener("click", onDecrClick);

function onIncrClick(event) {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
onIncrClick();

function onDecrClick(event) {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}
