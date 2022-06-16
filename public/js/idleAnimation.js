const specialtyTeacher = document.querySelectorAll(".specialty-teacher");

let resetTimeout = [];
let count = 0;
let scrolled = true;

Array.from(specialtyTeacher).forEach((element, index) => {
  count += 200;
  element.style.animation = `1.8s linear ${count}ms infinite alternate alternateWave`;
});

window.addEventListener("scroll", stopAnimation);
document.body.addEventListener("mousedown", stopAnimation);
window.addEventListener("load", stopAnimation);

function stopAnimation() {
  if (scrolled === true) {
    scrolled = false;
    count = 0;

    resetTimeoutFunc(resetTimeout);
    adjustAnimations();

    function adjustAnimations() {
      Array.from(specialtyTeacher).forEach((element, index) => {
        element.style.animation = "none";

        resetTimeout.push(
          setTimeout(() => {
            count += 200;
            element.style.animation = `1.8s linear ${count}ms infinite alternate alternateWave`;
          }, 30000)
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
