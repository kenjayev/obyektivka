const getAllRelativesInfo = function () {
  const arr = [];
  let relative = {};
  const relativeInputs = document.querySelectorAll(
    ".add__relatives__info input, .add__relatives__info select"
  );
  relativeInputs.forEach((input) => {
    if (relative[input.name]) {
      arr.push(relative);
      relative = {};
      relative[input.name] = input.value;
      return;
    }
    relative[input.name] = input.value;
  });
  arr.push(relative);
  return arr;
};
const getImgSrc = function () {
  return new Promise((resolve, reject) => {
    const file = document.querySelector("#img_src_input").files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        resolve(e.target.result);
      };
      reader.onerror = function () {
        reject("Rasmni o'qishda xato yuz berdi");
      };
      reader.readAsDataURL(file);
    } else {
      reject("Fayl tanlanmagan");
    }
  });
};

/* --- Main function --- */
async function getUserArr() {
  const fullName = document.querySelector("#full__name_input").value;
  const birthDate = document.querySelector("#birth__date_input").value;
  const birthRegion = document.querySelector("#birth__region_input").value;
  const birthDistrict = document.querySelector("#birth__district_input").value;
  const nationality = document.querySelector("#nationality_input").value;
  const id = new Date().getTime();
  let src;
  try {
    src = await getImgSrc();
  } catch (error) {
    console.log(error);
  }
  return {
    id,
    fullName,
    birthDate,
    birthRegion,
    birthDistrict,
    nationality,
    user_img_src: src,
    relative: getAllRelativesInfo(),
  };
}
