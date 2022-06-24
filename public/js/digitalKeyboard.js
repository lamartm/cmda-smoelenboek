import { checkForSelectedFilters } from "./checkFilteredOptions.js";

const Keyboard = window.SimpleKeyboard.default;
const searchInput = document.getElementById("search-input");
const specialtyTeacher = document.querySelectorAll(".specialty-teacher");
const keyboardSimple = document.getElementById("keyboard");
const keyboardBackground = document.getElementById("keyboard-bg");
const markInstance = new Mark(document.querySelectorAll(".teacher-name"));
const filtered1 = document.getElementById("filterSelect1");
let clearKeyboard = [];

let scrolled = true;

const keyboard = new Keyboard({
  onChange: (input) => onChange(input),
  onKeyPress: (button) => onKeyPress(button),
  inputName: "keyboard",
});

window.addEventListener("scroll", clear);
document.body.addEventListener("mousedown", clear);
window.addEventListener("load", clear);

searchInput.addEventListener("click", (d) => {
  keyboardBackground.style.display = "initial";
  keyboardSimple.style.display = "initial";
});

keyboardBackground.addEventListener("click", (d) => {
  keyboardBackground.style.display = "none";
  keyboardSimple.style.display = "none";
});

document.getElementById("search-teacher").addEventListener("submit", (d) => {
  d.preventDefault();
  keyboardBackground.style.display = "none";
  keyboardSimple.style.display = "none";
});

document.querySelector(".input").addEventListener("input", (event) => {
  event.target.value === ""
    ? (filtered1.style.display = "none")
    : (filtered1.style.display = "initial");

  keyboard.setInput(event.target.value);
});

function performMark() {
  let keyword = searchInput.value;

  markInstance.unmark({
    done: function () {
      markInstance.mark(keyword);
    },
  });
}

function onChange(input) {
  document.querySelector(".input").value = input;
  input === ""
    ? (filtered1.style.display = "none")
    : (filtered1.style.display = "initial");

  checkForSelectedFilters();
  performMark();

  Array.from(specialtyTeacher).forEach((element) => {
    if (element.innerText.toLowerCase().includes(input.toLowerCase())) {
      element.classList.remove("filterText");
    } else {
      element.classList.add("filterText");
    }
  });
}

function onKeyPress(button) {
  console.log("Button pressed", button);
}

function clear() {
  if (scrolled === true) {
    scrolled = false;

    clearTimeout(clearKeyboard);
    clearKeyboard.push(
      setTimeout(() => {
        filtered1.style.display = "none";
        performMark();
        Array.from(specialtyTeacher).forEach((element) => {
          element.classList.remove("filterText");
        });
        keyboard.clearInput();
      }, 60000)
    );
  }

  setTimeout(() => {
    scrolled = true;
  }, 30000);
}