const savedUsers = document.querySelector("#savedUsers");
function addOptionUser(currentUser) {
  let option = document.createElement("option");
  option.value = currentUser.id;
  savedUsers.value = currentUser.id;
  option.textContent = currentUser.fullName;
  savedUsers.appendChild(option);
}
user.forEach((element) => {
  addOptionUser(element);
});
savedUsers.value = "";

savedUsers.addEventListener("change", () => {
  const selectedUser = user.find((user) => user.id == savedUsers.value);
  if (selectedUser) {
    drawUserData(selectedUser);
  }
});
