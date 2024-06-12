function addOptionUser(currentUser) {
  const savedUsers = document.querySelector("#savedUsers");
  let option = document.createElement("option");
  option.selected = true;
  option.value = currentUser.id;
  option.textContent = currentUser.fullName;
  savedUsers.appendChild(option);
}
user.forEach((element) => {
  addOptionUser(element);
});

savedUsers.addEventListener("change", () => {
  const selectedUser = user.find((user) => user.id == savedUsers.value);
  if (selectedUser) {
    drawUserData(selectedUser);
  }
});
