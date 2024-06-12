const openModal = document.querySelector("#openModal");

openModal.addEventListener("click", openModalFunction);
function openModalFunction() {
  const modal = document.querySelector("#modal");
  const overLine = document.querySelector(".overLine");
  modal.classList.remove("hidden");
  overLine.classList.remove("hidden");
}
