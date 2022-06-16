import "./alphabetFilter.js";
import "./idleAnimation.js";

const Keyboard = window.SimpleKeyboard.default;
const specialtyTeacher = document.querySelectorAll(".specialty-teacher");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-teacher-btn");
const alphabetField = document.getElementById("alphabet-filter");
const allAlphabetInput = document.getElementById("All");

const keyboardSimple = document.getElementById("keyboard");
const keyboardBackground = document.getElementById("keyboard-bg");
const upButton = document.getElementById("upButton");
const downButton = document.getElementById("downButton");
const filter = document.getElementById("filter");
const specialtySelection = document.getElementById("specialty-filter");
const checkBoxes = document.querySelectorAll("input[name=specialty]");

let filterPressed = false;

const markInstance = new Mark(document.querySelectorAll(".teacher-name"));

// NAVIGATIE ZOEKEN

const keyboard = new Keyboard({
  onChange: (input) => onChange(input),
  onKeyPress: (button) => onKeyPress(button),
});

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

searchButton.addEventListener("click", () => {
  let computedStyles = window.getComputedStyle(searchInput);
  searchInput.style.animation =
    computedStyles.getPropertyValue("animation") ===
      "0s ease 0s 1 normal none running none" ||
    computedStyles.getPropertyValue("animation") ===
      "1s ease-in-out 0s 1 normal none running removeSearchFromScreen"
      ? "1s ease-in-out 0s 1 normal forwards running showSearchToScreen"
      : "1s ease-in-out 0s 1 normal none running removeSearchFromScreen";

  if (
    searchInput.style.animation ===
      "1s ease-in-out 0s 1 normal forwards running showSearchToScreen" &&
    (alphabetField.style.animation ===
      "1s ease-in-out 0s 1 normal forwards running showAlphabetToScreen" ||
      alphabetField.style.animation === "0s ease 0s 1 normal none running none")
  ) {
    alphabetField.style.animation =
      "1s ease-in-out 0s 1 normal none running removeAlphabetFromScreen";
  }

  allAlphabetInput.checked = true;

  Array.from(specialtyTeacher).forEach((element) => {
    element.classList.remove("is-hidden");
  });
});

searchInput.addEventListener("input", (d) => {
  const currentSearch = document.getElementById("search-input").value;
  performMark();
  Array.from(specialtyTeacher).forEach((element) => {
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

// NAVIGATIE SCROLLEN

downButton.addEventListener("click", (element) => {
  document.querySelector("html").scrollBy({
    top: 380,
    behavior: "smooth",
  });
});

upButton.addEventListener("click", (element) => {
  document.querySelector("html").scrollBy({
    top: -380,
    behavior: "smooth",
  });
});

filter.addEventListener("click", (element) => {
  if (filterPressed === false) {
    filterPressed = true;
    specialtySelection.style.display = "initial";
  } else {
    filterPressed = false;
    specialtySelection.style.display = "none";
  }
});

function performMark() {
  let keyword = searchInput.value;

  console.log(keyword);

  markInstance.unmark({
    done: function () {
      markInstance.mark(keyword);
    },
  });
}

// AUTOMATISCHE DATUM
const getCurrentTimeDate = () => {
  let currentTimeDate = new Date();

  const weekday = new Array(7);
  weekday[0] = "Zondag";
  weekday[1] = "Maandag";
  weekday[2] = "Dinsdag";
  weekday[3] = "Woensdag";
  weekday[4] = "Donderdag";
  weekday[5] = "Vrijdag";
  weekday[6] = "Zaterdag";

  const month = new Array();
  month[0] = "januari";
  month[1] = "februari";
  month[2] = "maart";
  month[3] = "april";
  month[4] = "mei";
  month[5] = "juni";
  month[6] = "juli";
  month[7] = "augustus";
  month[8] = "september";
  month[9] = "oktober";
  month[10] = "november";
  month[11] = "december";

  const currentDay = weekday[currentTimeDate.getDay()];
  const currentDate = currentTimeDate.getDate();
  const currentMonth = month[currentTimeDate.getMonth()];

  const fullDate = `${currentDate} ${currentMonth}`;

  document.getElementById("date").innerHTML = currentDay + " " + fullDate;

  setTimeout(getCurrentTimeDate, 3600000);
};

getCurrentTimeDate();

const filterOnSpecialty = (e) => {
  const checkedBoxes = document.querySelectorAll(
    "input[name=specialty]:checked"
  );

  let specialties = [];

  checkedBoxes.forEach((d) => {
    specialties.push(d.value.toLowerCase());
  });

  specialties.length === 0
    ? specialtyTeacher.forEach((specialty) => {
        specialty.classList.remove("is-hidden");
      })
    : specialtyTeacher.forEach((specialty) => {
        specialties.some((d) =>
          specialty.getAttribute("data-value").includes(d)
        )
          ? specialty.classList.remove("is-hidden")
          : specialty.classList.add("is-hidden");
      });
};

checkBoxes.forEach((d) => {
  d.addEventListener("click", filterOnSpecialty);
});

function onChange(input) {
  document.querySelector(".input").value = input;
  performMark();
  Array.from(specialtyTeacher).forEach((element) => {
    if (element.innerText.toLowerCase().includes(input.toLowerCase())) {
      element.classList.remove("is-hidden");
    } else {
      element.classList.add("is-hidden");
    }
  });
}

function onKeyPress(button) {
  console.log("Button pressed", button);
}
