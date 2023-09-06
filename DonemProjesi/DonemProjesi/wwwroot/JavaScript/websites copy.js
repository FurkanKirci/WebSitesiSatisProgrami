let iframe = document.querySelector(".website");
let navbarHeader = document.querySelector(".header-navbar-option");
let navbarColor = document.querySelector(".Navbar-color");
let navbarLinks = document.querySelector(".nbar-links-color");
let navbarBtnStyle = document.querySelector(".btn-navbar-select");
let navbarButton = document.querySelector(".btn-navbar-color");
let showcaseHeader = document.querySelector(".header-showcase-option");
let showcaseHeaderText = document.querySelector(".showcase-header");
let showcaseContentText = document.querySelector(".showcase-content");

showcaseHeader.addEventListener("click", () => {
  if (
    document.querySelector(".option-showcase__items").classList[2] == "deactive"
  ) {
    document.querySelector(".header-showcase-option").style.animation =
      "Rainbow 10s alternate infinite, borderLighting 2s alternate infinite";
    document.getElementById("logo-showcase").style.animation =
      "rotate 1s forwards";
    document
      .querySelector(".option-showcase__items")
      .classList.remove("deactive");
  } else {
    document.querySelector(".header-showcase-option").style.animation = "";
    document.getElementById("logo-showcase").style.animation =
      "rotateBack 1s forwards";
    document.querySelector(".option-showcase__items").classList.add("deactive");
  }
});
navbarHeader.addEventListener("click", () => {
  if (
    document.querySelector(".option-navbar__items").classList[2] == "deactive"
  ) {
    document.querySelector(".header-navbar-option").style.animation =
      "Rainbow 10s alternate infinite, borderLighting 2s alternate infinite";
    document.getElementById("logo-navbar").style.animation =
      "rotate 1s forwards";
    document
      .querySelector(".option-navbar__items")
      .classList.remove("deactive");
  } else {
    document.querySelector(".header-navbar-option").style.animation = "";
    document.getElementById("logo-navbar").style.animation =
      "rotateBack 1s forwards";
    document.querySelector(".option-navbar__items").classList.add("deactive");
  }
});
navbarColor.addEventListener("input", () => {
  var element = iframe.contentDocument || iframe.contentWindow.document;
  console.log(
    (element.querySelector(".main-header").style.backgroundColor =
      navbarColor.value)
  );
});
navbarLinks.addEventListener("input", () => {
  var element = iframe.contentDocument || iframe.contentWindow.document;
  var links = element.querySelectorAll(".navbar-link");
  console.log(links);
  links.forEach((links) => {
    links.style.color = navbarLinks.value;
  });
});
navbarBtnStyle.addEventListener("input", () => {
  var element = iframe.contentDocument || iframe.contentWindow.document;
  element
    .querySelector(".btn-navbar")
    .classList.remove(element.querySelector(".btn-navbar").classList[2]);
  element.querySelector(".btn-navbar").classList.add(navbarBtnStyle.value);
  var secondClass = element.querySelector(".btn-navbar").classList[2];
  if (secondClass == "btn-primary") {
    navbarButton.value = "#fc997c";
  } else if (secondClass == "btn-secondary") {
    navbarButton.value = "#2e4c6d";
  } else if (secondClass == "btn-outline-primary") {
    navbarButton.value = "#ffffff";
  } else {
    navbarButton.value = "#ffffff";
  }
  // element.querySelector(`.${secondClass}`).style.backgroundColor = navbarButton.value;
});
navbarButton.addEventListener("input", () => {
  let element = iframe.contentDocument || iframe.contentWindow.document;
  var secondClass = element.querySelector(".btn-navbar").classList[2];
  let style = element.createElement("style");
  style.innerHTML = `.bg {background-color: ${navbarButton.value}}`;
  element.head.appendChild(style);
  element.querySelector(`.${secondClass}`).classList.add("bg");
});
showcaseHeaderText.addEventListener("input", () => {
  if (showcaseHeaderText.value.trim().length == 0) {
    let element = iframe.contentDocument || iframe.contentWindow.document;
    element.querySelector(".content__header").innerText = "Welcome to MovieApp";
  } else {
    let element = iframe.contentDocument || iframe.contentWindow.document;
    element.querySelector(".content__header").innerText = showcaseHeaderText.value;
  }
});
showcaseContentText.addEventListener("input", () => {
  if (showcaseContentText.value.trim().length == 0) {
    let element = iframe.contentDocument || iframe.contentWindow.document;
    element.querySelector(".content__main").innerText = "Millions of movies, TV showes and people to discover. Explore Now";
  } else {
    let element = iframe.contentDocument || iframe.contentWindow.document;
    element.querySelector(".content__main").innerText = showcaseContentText.value;
  }
});
