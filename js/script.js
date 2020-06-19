"use strict";

// search
{
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
}

// slide
const contentsWrap = document.querySelectorAll(".contentsWrap");
const slideWrap = document.querySelectorAll(".slideWrap");
const slideList = document.querySelectorAll(".slideList");
const slideContent = document.querySelectorAll(".slideContent");
const contentWidth = slideContent[0].offsetWidth;
const provBtn = document.querySelector(".provBtn");
const nextBtn = document.querySelector(".nextBtn");
let slideHeight = 0;
let currentIdx = 0;
const slideSpeed = 300;

for (let i = 0; i < slideContent.length; i++) {
  // slideContent[i].style.left = i * slideContent.length * contentWidth + "px";
  slideContent[i].style.left = i * 100 + "%";
}

function calcHeight() {
  for (let i = 0; i < slideContent.length; i++) {
    if (
      document.querySelector(".content_class").offsetHeight +
        slideContent[i].offsetHeight >
      slideHeight
    ) {
      slideHeight =
        document.querySelector(".content_class").offsetHeight +
        slideContent[i].offsetHeight;
    }
  }
  contentsWrap[0].style.height = slideHeight + "px";
}
calcHeight();

function Sliding(curidx) {
  slideWrap[0].style.transition = slideSpeed + "ms ease";
  slideWrap[0].style.left = "-" + curidx * contentWidth + "px";
  currentIdx = curidx;
  console.log(slideWrap[0].style.left);

  idxUpDating();
}

function idxUpDating() {
  if (currentIdx <= 0) {
    provBtn.classList.add("disabled");
  } else {
    provBtn.classList.remove("disabled");
  }

  if (currentIdx >= slideContent.length - 3) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
}

nextBtn.addEventListener("click", function () {
  Sliding(currentIdx + 2);
});

provBtn.addEventListener("click", function () {
  Sliding(currentIdx - 2);
});

Sliding(0);
