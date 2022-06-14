const alphabet = 
["A", "B", "C", "D", "E", "F", "G",
"H", "I", "J", "K", "L", "M", "N",
"O", "P", "Q", "R", "S", "T", "U",
"V", "W", "X", "Y", "Z" ];

const alphabetField = document.getElementById("alphabet-filter");
const specialtyTeacher = document.querySelectorAll(".specialty-teacher");

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
  input.addEventListener("change", test);
});

function test(d) {
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
