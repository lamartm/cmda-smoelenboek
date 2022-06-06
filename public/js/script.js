const Keyboard = window.SimpleKeyboard.default;

const teachers = document.getElementsByClassName("teacher");
const keyboardSimple = document.getElementById("keyboard");
const keyboardBackground = document.getElementById("keyboard-bg");

const keyboard = new Keyboard({
  onChange: (input) => onChange(input),
  onKeyPress: (button) => onKeyPress(button),
});

document.getElementById("search-input").addEventListener("click", (d) => {
  keyboardBackground.style.display = "initial";
  keyboardSimple.style.display = "initial";
});

keyboardBackground.addEventListener("click", (d) => {
  keyboardBackground.style.display = "none";
  keyboardSimple.style.display = "none";
});

document.getElementById("search-teacher").addEventListener("submit", (d) => {
  d.preventDefault();
  Array.from(teachers).forEach((element) => {
    element.classList.remove("found");
    if (
      element.textContent.trim().toLowerCase() ==
      d.target[1].value.toLowerCase()
    ) {
      element.className += " found";
      element.scrollIntoView({ behavior: "smooth" });
      console.log("found");
    }
  });
});

document.querySelector(".input").addEventListener("input", (event) => {
  keyboard.setInput(event.target.value);
});

console.log(keyboard);

function onChange(input) {
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
}

function onKeyPress(button) {
  console.log("Button pressed", button);
}

// Scrollen
function goPrecious() {
  document.querySelector("html").scrollBy({
    top: -320,
    behavior: "smooth",
  });
}

function goNext() {
  document.querySelector("html").scrollBy({
    top: 320,
    behavior: "smooth",
  });
}
