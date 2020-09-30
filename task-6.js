const InputEl = document.querySelector("#validation-input");

InputEl.addEventListener("blur", InputCheck);

function InputCheck(event) {
  if (
    event.currentTarget.getAttribute("data-length") >
    event.currentTarget.value.length
  ) {
    InputEl.classList.add("invalid");
    InputEl.classList.remove("valid");
  } else {
    InputEl.classList.add("valid");
    InputEl.classList.remove("invalid");
  }
}
