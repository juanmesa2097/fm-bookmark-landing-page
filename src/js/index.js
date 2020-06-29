// navbar

const nav = document.querySelector("#nav");

function onClickOpenMenu() {
  nav.classList.add("is-navbar-open");
}

function onClickCloseMenu() {
  nav.classList.remove("is-navbar-open");
}

// tabs
const tabs = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");
const activeClass = "border-soft-red";

function onClickTab(e, target) {
  tabs.forEach((tab) => (tab.className = tab.className.replace(activeClass)));
  contents.forEach((tab) => tab.classList.remove("is-tab-visible"));
  e.target.classList.add(activeClass);
  document.querySelector(target).classList.add("is-tab-visible");
}
