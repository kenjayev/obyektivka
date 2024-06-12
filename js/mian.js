let inputs = document.querySelectorAll("input");
const user = getToLocalStorage("users-lens") || [];

const saveModalData__btn = document.querySelector(".modal-body");
saveModalData__btn.addEventListener("submit", addUser);

async function addUser(e) {
  e.preventDefault();

  /* getUserArr.js -> Fo'rmadagi input qiymatlarni Arr qilib yig'ib berish uchun */
  const userObj = await getUserArr();
  user.push(userObj);
  /* drawUserData.js -> fo'rmadagi insonni chizish uchun */
  drawUserData(userObj);
  /* Set data to Local Storage */
  setToLocalStorage("users-lens", user);
  /* closeModal.js -> formani yopish uchun funksiya */
  closeModal();
  /* showSuccessModal.js -> when add user successful then show success modal and then close this modal */
  showSuccessModal();
  /* saveUsers.js -> add new option for new user. */
  addOptionUser(userObj);
}

/* --- Set Items to Local Storage --- */
function setToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
/* --- Get Items to Local Storage --- */
function getToLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
