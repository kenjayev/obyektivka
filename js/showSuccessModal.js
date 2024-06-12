function showSuccessModal() {
  const overLine = document.querySelector(".overLine");
  const secondBox = document.querySelector(".modal_success .second");
  const successModal = document.querySelector(".modal_success");
  const checkmark = document.querySelector(".checkmark_circle");

  overLine.classList.remove("hidden");
  successModal.classList.remove("close");
  successModal.classList.add("show");
  checkmark.classList.add("show");

  let second = 4;
  const interval = setInterval(() => {
    secondBox.textContent = `00:0${second}`;
    second--;
  }, 1000);
  setTimeout(() => {
    clearInterval(interval);
    overLine.classList.add("hidden");
    successModal.classList.add("close");
    successModal.classList.remove("show");
    checkmark.classList.remove("show");
  }, 5000);
}
