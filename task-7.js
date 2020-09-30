const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", InputFontSize);

function InputFontSize(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
}
