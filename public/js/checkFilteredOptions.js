const filtered1 = document.getElementById("filterSelect1");
const filtered2 = document.getElementById("filterSelect2");
const filtered3 = document.getElementById("filterSelect3");
const filtered4 = document.getElementById("filterSelect4");

const filtered1Styles = window.getComputedStyle(filtered1);
const filtered2Styles = window.getComputedStyle(filtered2);
const filtered3Styles = window.getComputedStyle(filtered3);

export function checkForSelectedFilters() {
  filtered1Styles.getPropertyValue("display") === "block" ||
  filtered2Styles.getPropertyValue("display") === "block" ||
  filtered3Styles.getPropertyValue("display") === "block"
    ? (filtered4.style.display = "block")
    : (filtered4.style.display = "none");
}