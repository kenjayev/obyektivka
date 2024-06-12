/* --- check empty input value --- */
document.querySelectorAll("input").forEach((inp) => {
  inp.addEventListener("input", () => checkInput(inp));
  inp.addEventListener("blur", () => checkInput(inp));
});

function checkInput(inp) {
  inp.value
    ? addRemoveErrorClass(inp)
    : addRemoveErrorClass(inp, "add", "Bo'sh qoldirmang!");
}
function addRemoveErrorClass(inp, addOrRemove = "remove", message = "") {
  inp.previousElementSibling.classList[addOrRemove]("error");
  inp.classList[addOrRemove]("error");

  inp.nextElementSibling.textContent = message;
}
