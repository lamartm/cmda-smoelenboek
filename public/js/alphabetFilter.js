const alphabet = 
["A", "B", "C", "D", "E", "F", "G",
"H", "I", "J", "K", "L", "M", "N",
"O", "P", "Q", "R", "S", "T", "U",
"V", "W", "X", "Y", "Z" ];

const alphabetField = document.getElementById("alphabet-filter");
const alphabetFilterBtn = document.getElementById("alphabet-filter-btn");
const specialtyTeacher = document.querySelectorAll(".specialty-teacher");

const searchInput = document.getElementById("search-input");

const newLabel = document.createElement("label");
const newInput = document.createElement("input");

alphabet.forEach((letter) => {
  const addInput = alphabetField.appendChild(newInput.cloneNode(true));
  const addLabel = alphabetField.appendChild(newLabel.cloneNode(true));

  addLabel.setAttribute("class", "letterLabel");
  addLabel.setAttribute("for", letter);
  addLabel.textContent = letter;

  addInput.setAttribute("class", "letterInput");
  addInput.setAttribute("type", "radio");
  addInput.setAttribute("id", letter);
  addInput.setAttribute("name", "alphabet");
  addInput.setAttribute("value", letter);
});

const alphabetInput = document.querySelectorAll("input[name=alphabet]");

alphabetInput.forEach((input) => {
  input.addEventListener("change", filterOnAlphabet);
});

alphabetFilterBtn.addEventListener("click", () => {
  let computedStyles = window.getComputedStyle(alphabetField);
  alphabetField.style.animation =
    computedStyles.getPropertyValue("animation") ===
      "0s ease 0s 1 normal none running none" ||
    computedStyles.getPropertyValue("animation") ===
      "1s ease-in-out 0s 1 normal none running removeAlphabetFromScreen"
      ? "1s ease-in-out 0s 1 normal forwards running showAlphabetToScreen"
      : "1s ease-in-out 0s 1 normal none running removeAlphabetFromScreen";

  if (
    alphabetField.style.animation ===
      "1s ease-in-out 0s 1 normal forwards running showAlphabetToScreen" &&
    (searchInput.style.animation ===
      "1s ease-in-out 0s 1 normal forwards running showSearchToScreen" ||
      searchInput.style.animation === "0s ease 0s 1 normal none running none")
  ) {
    searchInput.style.animation =
      "1s ease-in-out 0s 1 normal none running removeSearchFromScreen";
  }
});

function filterOnAlphabet(d) {
  if (d.target.value === "All") {
    Array.from(specialtyTeacher).forEach((element) => {
      element.classList.remove("is-hidden");
    });
  } else {
    Array.from(specialtyTeacher).forEach((element) => {
      const names = element.innerText.trim().toLowerCase().split(" ");
      if (
        names[0].startsWith(d.target.value.toLowerCase()) ||
        names[1].startsWith(d.target.value.toLowerCase())
      ) {
        element.classList.remove("is-hidden");
      } else {
        element.classList.add("is-hidden");
      }
    });
  }
}
