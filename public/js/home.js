const Keyboard = window.SimpleKeyboard.default;
const teachers = document.getElementsByClassName("teacher-link");
const keyboardSimple = document.getElementById("keyboard");
const keyboardBackground = document.getElementById("keyboard-bg");

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
  var currentDate  = currentTimeDate.getDate();
  var currentMonth = month[currentTimeDate.getMonth()];

  var fullDate = `${currentDate} ${currentMonth}`;

  document.getElementById("date").innerHTML = currentDay + " " +  fullDate;
 
  setTimeout(getCurrentTimeDate, 3600000);
}

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

// ANIMATIE FLIP

var teacher = document.querySelectorAll('.teacher');

[...teacher].forEach((teacher)=>{
  teacher.addEventListener( 'click', function() {
    teacher.classList.toggle('is-flipped');
  });
});

// ANIMATIE CONFETTI

confetti()

function confetti() {
  setTimeout(() => {
    document.getElementById("confetti-wrapper").style.display = "initial"
    setTimeout(confettiNone, 10000)
  })
}


function confettiNone() {
  setTimeout(() => {
    document.getElementById("confetti-wrapper").style.display = "none"
    setTimeout(confetti, 60000)
  })
}