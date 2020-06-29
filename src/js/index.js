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
  tabs.forEach(
    (tab) =>
      (tab.className = tab.className
        .replace("border-soft-red", "")
        .replace("font-medium", ""))
  );
  contents.forEach((tab) => tab.classList.remove("is-tab-visible"));
  e.target.className += " border-soft-red font-medium";
  console.log(e.target);
  document.querySelector(target).classList.add("is-tab-visible");
}
