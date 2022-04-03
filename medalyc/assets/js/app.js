function show(value) {
  document.querySelector(".dropdown-input").value = value;
}
let dropdownWithValue = document.querySelector(".dropdown-with-value");
dropdownWithValue.onclick = function (event) {
  event.stopPropagation();
  dropdownWithValue.classList.toggle("active");
};
let dropdown = document.querySelector(".dropdown");
dropdown.onclick = function (event) {
  event.stopPropagation();
  dropdown.classList.toggle("active");
};
let dropdownSelect = document.querySelector(".dropdown-with-select");
dropdownSelect.onclick = function (event) {
  event.stopPropagation();
  dropdownSelect.classList.toggle("active");
};

window.onclick = function (event) {
  dropdown.classList.remove("active");
  dropdownWithValue.classList.remove("active");
  dropdownSelect.classList.remove("active");
};

function showSelectValue(value) {
  document.querySelector(".dropdown-input-select").value = value;
}

function openSchedule(elem) {
  elem.parentNode.parentNode.parentNode.classList.add("active");
}

function closeSchedule(elem) {
  elem.parentNode.parentNode.parentNode.parentNode.classList.remove("active");
}
