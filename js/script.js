"use strict";

// search
const searchButton = document.querySelectorAll("#headerRight label");
const searchBar = document.querySelector("#searchArea");

searchButton[1].addEventListener("click", function () {
  searchBar.style.display = "block";
  searchButton[1].style.display = "none";
});

searchBar.addEventListener("focusout", function () {
  searchBar.style.display = "none";
  searchButton[1].style.display = "inline";
});
