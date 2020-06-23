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
const contents = document.getElementById("contents");
const contentsWrap = document.querySelectorAll(".contentsWrap");
const slideWrap = document.querySelectorAll(".slideWrap");
const slideList = document.querySelectorAll(".slideList");
const slideContent = document.querySelectorAll(".slideContent");
const contentWidth = slideContent[0].offsetWidth;
const provBtn = document.querySelector(".provBtn");
const nextBtn = document.querySelector(".nextBtn");
let slideHeight = 0;
let currentIdx = 0;
const slideSpeed = 200;

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

  for (let i = 0; i < contentsWrap.length; i++) {
    contentsWrap[i].style.height = slideHeight + "px";
  }
  contents.style.height = slideHeight * contentsWrap.length + "px";
}
calcHeight();

function Sliding(curidx, i) {
  slideWrap[i].style.transition = slideSpeed + "ms";
  slideWrap[i].style.transform = `translate3d(-${
    curidx * contentWidth
  }px, 0px, 0px)`;

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

  if (currentIdx >= slideContent.length - 4) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
}

nextBtn.addEventListener("click", function () {
  Sliding(currentIdx + 3);
});

provBtn.addEventListener("click", function () {
  Sliding(currentIdx - 3);
});

for (let i = 0; i < contentsWrap.length; i++) {
  Sliding(0, i);
}
