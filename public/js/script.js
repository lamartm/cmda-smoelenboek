const teachers = document.getElementsByClassName("teacher");

document.getElementById("search-teacher").addEventListener("submit", (d) => {
  d.preventDefault();
  Array.from(teachers).forEach((element) => {
    element.classList.remove("found");
    if (
      element.textContent.trim().toLowerCase() ==
      d.target[0].value.toLowerCase()
    ) {
      element.className += " found";
      element.scrollIntoView({ behavior: "smooth" });
      console.log("found");
    }
  });
});
