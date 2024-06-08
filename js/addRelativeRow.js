const addInfoRow_btn = document.querySelector("#addInfoRow");
const add__relatives__info = document.querySelector(".add__relatives__info");

addInfoRow_btn.addEventListener("click", addRowForRelative);
function addRowForRelative(e) {
  e.preventDefault();
  const relativeRowsLength =
    document.querySelectorAll(".row.relative_row").length;
  const newRow = document.createElement("div");
  newRow.setAttribute("class", "row relative_row");
  newRow.innerHTML = rowHTMLCode(relativeRowsLength + 1);
  add__relatives__info.appendChild(newRow);

  inputs = document.querySelectorAll("input");
  inputs.forEach((inp) => {
    inp.addEventListener("input", () => checkInput(inp));
    inp.addEventListener("blur", () => checkInput(inp));
  });
}

/* --- Forma for relative info --- */
function rowHTMLCode(index) {
  return `
  <div class="cal-1">
    <label for="relative_type_input_${index}">Qarindoshlik shakli</label>
    <select required name="relativeType" id="relative_type_input_${index}">
      <option value="" disabled selected>Qarindoshingiz</option>
      <option value="otasi">Otasi</option>
      <option value="onasi">Onasi</option>
      <option value="akasi">Akasi</option>
      <option value="ukasi">Ukasi</option>
      <option value="opasi">Opasi</option>
      <option value="singlisi">Singlisi</option>
    </select>
    <span class="note error"></span>
  </div>
  
  <div class="cal-3">
    <label for="relative_full_name_input_${index}">
      Qarindoshining to'liq ismi (F.I.SH)
    </label>
    <input
      required
      type="text"
      name="relativeFullName"
      id="relative_full_name_input_${index}"
      placeholder="To'liq ismini kriting (F.I.SH)"
    />
    <span class="note error"></span>
  </div>

  <div class="cal-2">
    <label for="relative_birth__region_input_${index}">
      Tug'ulgan Manzili (Viloyat va tuman):
    </label>
    <input
      required
      type="text"
      name="relativeBirthRegion"
      id="relative_birth__region_input_${index}"
      placeholder="Qashqadaryo viloyati, Dehqonobod Tumani"
    />
    <span class="note error"></span>
  </div>

  <div class="cal-1">
    <label for="relative_profession_input_${index}"> Kasbi (VInjiner): </label>
    <input
      required
      type="text"
      name="relativeProfession"
      id="relative_profession_input_${index}"
      placeholder="Injiner"
    />
    <span class="note error"></span>
  </div>
  `;
}
