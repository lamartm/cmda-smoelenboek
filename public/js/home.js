import "./alphabetFilter.js";
import "./idle.js";
import "./buttonAnimations.js";
import "./digitalKeyboard.js";
import { checkForSelectedFilters } from "./checkFilteredOptions.js";

const specialtyTeacher = document.querySelectorAll(".specialty-teacher");
const teacher = document.querySelectorAll(".teacher");
const searchInput = document.getElementById("search-input");

const filtered3 = document.getElementById("filterSelect3");

const upButton = document.getElementById("upButton");
const downButton = document.getElementById("downButton");
const checkBoxes = document.querySelectorAll("input[name=specialty]");

const markInstance = new Mark(document.querySelectorAll(".teacher-name"));

// NAVIGATIE ZOEKEN

document.addEventListener(
  "contextmenu",
  function (e) {
    e.preventDefault();
  },
  false
);

searchInput.addEventListener("input", (d) => {
  const currentSearch = document.getElementById("search-input").value;
  performMark();
  Array.from(specialtyTeacher).forEach((element) => {
    if (element.innerText.toLowerCase().includes(currentSearch.toLowerCase())) {
      element.classList.remove("filterText");
    } else {
      element.classList.add("filterText");
    }
  });
});

// NAVIGATIE SCROLLEN

downButton.addEventListener("click", (element) => {
  document.querySelector("html").scrollBy({
    top: 180,
    behavior: "smooth",
  });
});

let holdState;

downButton.addEventListener("mousedown", (element) => {
  holdState = setInterval(() => {
    document.querySelector("html").scrollBy({
      top: 180,
      behavior: "smooth",
    });
  }, 500);
});

downButton.addEventListener("mouseup", (element) => {
  clearInterval(holdState);
});

let holdStateTwo;

upButton.addEventListener("mousedown", (element) => {
  holdStateTwo = setInterval(() => {
    document.querySelector("html").scrollBy({
      top: -180,
      behavior: "smooth",
    });
  }, 500);
});

upButton.addEventListener("mouseup", (element) => {
  clearInterval(holdStateTwo);
});

upButton.addEventListener("click", (element) => {
  document.querySelector("html").scrollBy({
    top: -180,
    behavior: "smooth",
  });
});

function performMark() {
  let keyword = searchInput.value;

  markInstance.unmark({
    done: function () {
      markInstance.mark(keyword);
    },
  });
}

// SPLIT SCREEN

if (window.location.pathname === "/") {
  window.onload = () => {
    window.scrollTo({
      top: 640,
      behavior: "smooth",
    });
  };
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

  checkedBoxes.length === 0
    ? (filtered3.style.display = "none")
    : (filtered3.style.display = "initial");

  checkForSelectedFilters();

  checkedBoxes.forEach((d) => {
    specialties.push(d.value.toLowerCase());
  });

  specialties.length === 0
    ? specialtyTeacher.forEach((specialty) => {
        specialty.classList.remove("filterSpecialty");
      })
    : specialtyTeacher.forEach((specialty) => {
        specialties.some((d) =>
          specialty.getAttribute("data-value").includes(d)
        )
          ? specialty.classList.remove("filterSpecialty")
          : specialty.classList.add("filterSpecialty");
      });
};

checkBoxes.forEach((d) => {
  d.addEventListener("click", filterOnSpecialty);
});

// TIME OUT FLIP TERUG NAAR HOME

let initial;

function redirectFlip() {
  Array.from(teacher).forEach((element) => {
    element.classList.remove("is-flipped");
  });
}

document.addEventListener("click", testt);
window.addEventListener("scroll", testt);

function testt(event) {
  clearTimeout(initial);
  initial = setTimeout(redirectFlip, 60000);
}

// ANIMATIE FLIP

[...teacher].forEach((teacher) => {
  teacher.addEventListener("click", function () {
    teacher.classList.toggle("is-flipped");
  });
});

// ANIMATIE CONFETTI

confetti();

function confetti() {
  setTimeout(() => {
    document.getElementById("confetti-wrapper").style.display = "initial";
    setTimeout(confettiNone, 10000);
  });
}

function confettiNone() {
  setTimeout(() => {
    document.getElementById("confetti-wrapper").style.display = "none";
    setTimeout(confetti, 60000);
  });
}

// ANIMATIE RANDOM

function GetValue() {
  var myarray = new Array("item1", "item2", "item3");
  var random = myarray[Math.floor(Math.random() * myarray.length)];
  document.getElementById("light").innerHTML = random;
}
