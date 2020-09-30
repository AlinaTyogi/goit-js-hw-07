const inputEl = document.querySelector("#name-input");
const OutputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onOutput);
function onOutput(event) {
  if (event.currentTarget.value !== ``) {
    OutputEl.textContent = event.currentTarget.value;
  } else {
    OutputEl.textContent = "незнакомец";
  }
}
