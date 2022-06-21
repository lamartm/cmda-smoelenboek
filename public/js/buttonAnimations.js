const filterButton = document.getElementById("filter");
const searchForm = document.getElementById("search-teacher");
const searchButton = document.getElementById("search-teacher-btn");
const searchInput = document.getElementById("search-input");
const alphabetField = document.getElementById("alphabet-filter");
const alphabetButton = document.getElementById("alphabet-filter-btn");
const specialties = document.getElementById("specialty-filter");
const allAlphabetInput = document.getElementById("All");

const specialtyTeacher = document.querySelectorAll(".specialty-teacher");

const filtersButton = document.getElementById("filters");

const showElement = (element) => {
  return `1s ease-in-out 0s 1 normal forwards running show${element}ToScreen`;
};

const removeElement = (element) => {
  return `1s ease-in-out 0s 1 normal none running remove${element}FromScreen`;
};

filtersButton.addEventListener("click", () => {
  const filterStyles = window.getComputedStyle(filterButton);
  const searchStyles = window.getComputedStyle(searchForm);
  const alphabetStyles = window.getComputedStyle(alphabetButton);

  filterButton.style.animation =
    filterStyles.getPropertyValue("animation") ===
      "0s ease 0s 1 normal none running none" ||
    filterStyles.getPropertyValue("animation") === removeElement("FilterButton")
      ? showElement("FilterButton")
      : removeElement("FilterButton");

  searchForm.style.animation =
    searchStyles.getPropertyValue("animation") ===
      "0s ease 0s 1 normal none running none" ||
    searchStyles.getPropertyValue("animation") === removeElement("SearchButton")
      ? showElement("SearchButton")
      : removeElement("SearchButton");

  alphabetButton.style.animation =
    alphabetStyles.getPropertyValue("animation") ===
      "0s ease 0s 1 normal none running none" ||
    alphabetStyles.getPropertyValue("animation") ===
      removeElement("AlphabetButton")
      ? showElement("AlphabetButton")
      : removeElement("AlphabetButton");

  if (alphabetField.style.animation === showElement("Alphabet")) {
    alphabetField.style.animation = removeElement("Alphabet");
  }

  if (specialties.style.animation === showElement("Specialties")) {
    specialties.style.animation = removeElement("Specialties");
  }

  if (searchInput.style.animation === showElement("Search")) {
    searchInput.style.animation = removeElement("Search");
  }
});

alphabetButton.addEventListener("click", () => {
  let computedStyles = window.getComputedStyle(alphabetField);
  alphabetField.style.animation =
    computedStyles.getPropertyValue("animation") ===
      "0s ease 0s 1 normal none running none" ||
    computedStyles.getPropertyValue("animation") === removeElement("Alphabet")
      ? showElement("Alphabet")
      : removeElement("Alphabet");

  if (
    alphabetField.style.animation === showElement("Alphabet") &&
    searchInput.style.animation === showElement("Search")
  ) {
    searchInput.style.animation = removeElement("Search");
  }

  if (
    alphabetField.style.animation === showElement("Alphabet") &&
    specialties.style.animation === showElement("Specialties")
  ) {
    specialties.style.animation = removeElement("Specialties");
  }
});

filterButton.addEventListener("click", () => {
  const specialtiesStyles = window.getComputedStyle(specialties);

  specialties.style.animation =
    specialtiesStyles.getPropertyValue("animation") ===
      "0s ease 0s 1 normal none running none" ||
    specialtiesStyles.getPropertyValue("animation") ===
      removeElement("Specialties")
      ? showElement("Specialties")
      : removeElement("Specialties");

  if (
    specialties.style.animation === showElement("Specialties") &&
    alphabetField.style.animation === showElement("Alphabet")
  ) {
    alphabetField.style.animation = removeElement("Alphabet");
  }

  if (
    specialties.style.animation === showElement("Specialties") &&
    searchInput.style.animation === showElement("Search")
  ) {
    searchInput.style.animation = removeElement("Search");
  }
});

searchButton.addEventListener("click", () => {
  let searchStyles = window.getComputedStyle(searchInput);
  searchInput.style.animation =
    searchStyles.getPropertyValue("animation") ===
      "0s ease 0s 1 normal none running none" ||
    searchStyles.getPropertyValue("animation") === removeElement("Search")
      ? showElement("Search")
      : removeElement("Search");

  if (
    searchInput.style.animation === showElement("Search") &&
    alphabetField.style.animation === showElement("Alphabet")
  ) {
    alphabetField.style.animation = removeElement("Alphabet");
  }

  if (
    searchInput.style.animation === showElement("Search") &&
    specialties.style.animation === showElement("Specialties")
  ) {
    specialties.style.animation = removeElement("Specialties");
  }

  Array.from(specialtyTeacher).forEach((element) => {
    element.classList.remove("is-hidden");
  });
});
