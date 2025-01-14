const teacherName = document.getElementById("teacher-info-name");
const imgAnimation = document.getElementById("extra-img-animation");
const imgAnimation2 = document.getElementById("extra-img-animation2");

// ANIMATIE EASTEREGGS

let count = 0;

const extraImgMoving = [
  { right: "0%", top: "7%", opacity: "0%" },
  { right: "-27%", top: "-6%", opacity: "100%" },
];

const extraImg2Moving = [
  { right: "0%", top: "7%", opacity: "0%" },
  { right: "-27%", top: "25%", opacity: "100%" },
];

const extraImgTiming = {
  duration: 800,
  iterations: 1,
  fill: "forwards",
};

const titleShaking = [
  { transform: "rotate(-5deg)" },
  { transform: "rotate(5deg)" },
  { transform: "rotate(-5deg)" },
  { transform: "rotate(0deg)" },
];

const titleTiming = {
  duration: 800,
  iterations: 1,
};

document.addEventListener(
  "contextmenu",
  function (e) {
    e.preventDefault();
  },
  false
);

teacherName.addEventListener("click", () => {
  count++;
  teacherName.animate(titleShaking, titleTiming);

  if (count === 3) {
    imgAnimation.animate(extraImgMoving, extraImgTiming);
    imgAnimation2.animate(extraImg2Moving, extraImgTiming);
  }
});

// TIME OUT DETAIL TERUG NAAR HOME

function redirect() {
  window.location.href = "/";
}
var initial = setTimeout(redirect, 60000);
document.addEventListener("click", test);
window.addEventListener("scroll", test);

function test(event) {
  console.log(initial);
  clearTimeout(initial);
  console.log(initial);
  initial = setTimeout(redirect, 60000);
}