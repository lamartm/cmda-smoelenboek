const specialtyTeacher = document.querySelectorAll(".specialty-teacher");
const searchInput = document.getElementById("search-input");
const all = document.getElementById("All");
const checkBoxes = document.querySelectorAll("input[name=specialty]");

const filtered1 = document.getElementById("filterSelect1");
const filtered2 = document.getElementById("filterSelect2");
const filtered3 = document.getElementById("filterSelect3");
const filtered4 = document.getElementById("filterSelect4");

let resetTimeout = [];
let clearFilters = [];

let count = 0;
let scrolled = true;

Array.from(specialtyTeacher).forEach((element, index) => {
  count += 200;
  element.style.animation = `8.8s linear ${count}ms infinite alternate alternateWave`;
});

window.addEventListener("scroll", stopAnimation);
document.body.addEventListener("mousedown", stopAnimation);
window.addEventListener("load", stopAnimation);

function stopAnimation() {
  if (scrolled === true) {
    scrolled = false;
    count = 0;

    resetTimeoutFunc(clearFilters);
    clearFilters.push(
      setTimeout(() => {
        all.checked = true;
        filtered1.style.display = "none";
        filtered2.style.display = "none";
        filtered3.style.display = "none";
        filtered4.style.display = "none";

        Array.from(checkBoxes).forEach((element) => {
          element.checked = false;
        });

        Array.from(specialtyTeacher).forEach((element) => {
          element.classList.remove("filterAlphabet");
          element.classList.remove("filterSpecialty");
        });

        searchInput.value = "";
      }, 10000)
    );

    resetTimeoutFunc(resetTimeout);
    adjustAnimations();

    function adjustAnimations() {
      Array.from(specialtyTeacher).forEach((element, index) => {
        element.style.animation = "none";

        resetTimeout.push(
          setTimeout(() => {
            count += 200;
            element.style.animation = `8.8s linear ${count}ms infinite alternate alternateWave`;
          }, 60000)
        );
      });
    }

    setTimeout(() => {
      scrolled = true;
    }, 5000);

    function resetTimeoutFunc(d) {
      d.forEach((timeout) => {
        clearTimeout(timeout);
      });
    }
  }
}
