/* --- draw html data --- */
function drawUserData(user) {
  const img_box = document.querySelector(".img");
  const table = document.querySelector("table");
  const secondListTilt = document.querySelector(".secondList.title");
  for (const data in user) {
    let element = document.querySelector(`#${data}`);
    if (element) element.textContent = user[data];
  }
  secondListTilt.innerHTML = `${user.fullName}ning yaqin qarindoshlari <br /> MA'LUMOT`;
  img_box.src = user.user_img_src;
  table.appendChild(getTbody(user.relative));
}
/* --- end of Draw html Data --- */

function getTbody(arr) {
  const tBody = document.createElement("tbody");
  arr.forEach((relative) => {
    tBody.innerHTML += tableRowHtml(relative);
  });
  return tBody;
}

function tableRowHtml(relative) {
  return `
  <tr>
  <th style="width: 15%">${relative.relativeType}</th>
  <td style="width: 15%">${relative.relativeFullName}</td>
  <td style="width: 20%">
    ${relative.relativeBirthRegion}
  </td>
  <td style="width: 25%">${relative.relativeProfession}</td>
</tr>
  `;
}
