const Keyboard = window.SimpleKeyboard.default;
const teachers = document.getElementsByClassName("teacher-link");
const specialtyTeacher = document.querySelectorAll(".specialty-teacher");
const keyboardSimple = document.getElementById("keyboard");
const keyboardBackground = document.getElementById("keyboard-bg");
const upButton = document.getElementById("upButton");
const downButton = document.getElementById("downButton");
const filter = document.getElementById("filter");
const specialtySelection = document.getElementById("specialty-filter");
const checkBoxes = document.querySelectorAll("input[name=specialty]");

let filterPressed = false;

// AUTOMATISCHE DATUM
const getCurrentTimeDate = () => {
  let currentTimeDate = new Date();

  var weekday = new Array(7);
  weekday[0] = "Zondag";
  weekday[1] = "Maandag";
  weekday[2] = "Dinsdag";
  weekday[3] = "Woensdag";
  weekday[4] = "Donderdag";
  weekday[5] = "Vrijdag";
  weekday[6] = "Zaterdag";

  var month = new Array();
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

  var currentDay = weekday[currentTimeDate.getDay()];
  var currentDate = currentTimeDate.getDate();
  var currentMonth = month[currentTimeDate.getMonth()];

  var fullDate = `${currentDate} ${currentMonth}`;

  document.getElementById("date").innerHTML = currentDay + " " + fullDate;

  setTimeout(getCurrentTimeDate, 3600000);
};

getCurrentTimeDate();

// NAVIGATIE ZOEKEN

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

// NAVIGATIE SCROLLEN

const element = document.querySelector(".goPrecious");
element.addEventListener("click", goPrecious);

function goPrecious() {
  document.querySelector("html").scrollBy({
    top: -320,
    behavior: "smooth",
  });
}

const el = document.querySelector(".goNext");
el.addEventListener("click", goNext);

function goNext() {
  document.querySelector("html").scrollBy({
    top: 320,
    behavior: "smooth",
  });
}
