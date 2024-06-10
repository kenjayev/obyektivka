/* --- Start of Close Modal Section --- */
const modal = document.querySelector("#modal");
const overLine = document.querySelector(".overLine");
const closeModal__btn = document.querySelector("#close");

overLine.addEventListener("click", closeModal);
closeModal__btn.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => e.key == "Escape" && closeModal());
function closeModal(e) {
  modal.classList.add("hidden");
  overLine.classList.add("hidden");
  clearAllInputs();
}
/* clear form and remove error class */
function clearAllInputs() {
  const inputs = document.querySelectorAll("inputs");
  document.querySelector("form").reset();
  inputs.forEach((inp) => addRemoveErrorClass(inp));
}
