const inputs = document.querySelectorAll("input");
const user = getToLocalStorage("users-lens") || [];
const currentUser = [];

class User {
  constructor(fullName, birthDate, birthRegion, birthDistrict, nationality) {
    this.fullName = fullName;
    this.birthDate = birthDate;
    this.birthRegion = birthRegion;
    this.birthDistrict = birthDistrict;
    this.nationality = nationality;
  }
}
const saveModalData__btn = document.querySelector("#save");
saveModalData__btn.addEventListener("click", addUser);
function addUser(e) {
  e.preventDefault();
  const fullName = document.querySelector("#full__name_input").value;
  const birthDate = document.querySelector("#birth__date_input").value;
  const birthRegion = document.querySelector("#birth__region_input").value;
  const birthDistrict = document.querySelector("#birth__district_input").value;
  const nationality = document.querySelector("#nationality_input").value;

  if (fullName && birthDate && birthRegion && birthDistrict && nationality) {
    const userObj = new User(
      fullName,
      birthDate,
      birthRegion,
      birthDistrict,
      nationality
    );

    user.push(userObj);
    setToLocalStorage("users-lens", user);
    drawDataToHTML(userObj);
    closeModal();
  } else {
    alert("You have a wrong");
    inputs.forEach((inp) => checkInput(inp));
  }
}

/* --- draw html data --- */
function drawDataToHTML(user) {
  for (const data in user) {
    document.querySelector(`#${data}`).textContent = user[data];
  }
}
/* --- end of Draw html Data --- */

/* --- Set Items to Local Storage --- */
function setToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
/* --- Set Items to Local Storage --- */
/* --- Get Items to Local Storage --- */
function getToLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
/* --- Get Items to Local Storage --- */

/* --- Close modal section --- */
const modal = document.querySelector("#modal");
const closeModal__btn = document.querySelector("#close");
const overLine = document.querySelector(".overLine");

closeModal__btn.addEventListener("click", closeModal);
overLine.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => e.key == "Escape" && closeModal());

function closeModal(e) {
  modal.classList.add("hidden");
  overLine.classList.add("hidden");
  /* clear form and remove error class */
  document.querySelector("form").reset();
  inputs.forEach((inp) => addRemoveErrorClass(inp));
}
/* --- End of Close Modal Section --- */

/* --- check empty input value --- */
inputs.forEach((inp) => {
  inp.addEventListener("input", () => checkInput(inp));
  inp.addEventListener("blur", () => checkInput(inp));
});
function checkInput(inp) {
  inp.value
    ? addRemoveErrorClass(inp)
    : addRemoveErrorClass(inp, "add", "Qatorni bo'sh qoldirmang!!");
}

function addRemoveErrorClass(inp, addOrRemove = "remove", message = "") {
  inp.previousElementSibling.classList[addOrRemove]("error");
  inp.classList[addOrRemove]("error");

  inp.nextElementSibling.textContent = message;
}
