const Keyboard = window.SimpleKeyboard.default;

const teachers = document.getElementsByClassName("teacher-link");
const keyboardSimple = document.getElementById("keyboard");
const keyboardBackground = document.getElementById("keyboard-bg");
const button1 = document.getElementById("button");
const button2 = document.getElementById("button2");

console.log("hey");

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
  keyboardBackground.style.display = "none";
  keyboardSimple.style.display = "none";
});

document.getElementById("search-input").addEventListener("input", (d) => {
  const currentSearch = document.getElementById("search-input").value;
  Array.from(teachers).forEach((element) => {
    if (
      element.innerText.toLowerCase().startsWith(currentSearch.toLowerCase())
    ) {
      element.classList.remove("is-hidden");
    } else {
      element.classList.add("is-hidden");
    }
  });
});

document.querySelector(".input").addEventListener("input", (event) => {
  keyboard.setInput(event.target.value);
});

button1.addEventListener("click", (element) => {
  document.querySelector("html").scrollBy({
    top: 380,
    behavior: "smooth",
  });
});

button2.addEventListener("click", (element) => {
  document.querySelector("html").scrollBy({
    top: -380,
    behavior: "smooth",
  });
});

function onChange(input) {
  document.querySelector(".input").value = input;
  Array.from(teachers).forEach((element) => {
    if (element.innerText.toLowerCase().startsWith(input.toLowerCase())) {
      element.classList.remove("is-hidden");
    } else {
      element.classList.add("is-hidden");
    }
  });
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
