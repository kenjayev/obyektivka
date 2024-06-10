/* --- Set Items to Local Storage --- */
function setToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
/* --- Get Items to Local Storage --- */
function getToLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
console.log(getToLocalStorage("data"));
