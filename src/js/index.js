// Tavbar

const nav = document.querySelector("#nav");

function onClickOpenMenu() {
  nav.classList.add("is-navbar-open");
}

function onClickCloseMenu() {
  nav.classList.remove("is-navbar-open");
}

// Tabs
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
  document.querySelector(target).classList.add("is-tab-visible");
}

// Subscription
const emailWrapper = document.querySelector("#emailWrapper");
const inputField = emailWrapper.querySelector("input");
const message = emailWrapper.querySelector("p");

function validateEmail(email) {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}

function showFieldError() {
  inputField.classList.add("border-soft-red");
  message.classList.remove("hidden");
}

function removeFieldError() {
  inputField.classList.remove("border-soft-red");
  message.classList.add("hidden");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const serialized = {};
  const data = new FormData(form);

  for (const [name, value] of data) {
    serialized[name] = value;
  }

  const { email } = serialized;

  if (validateEmail(email)) {
    removeFieldError();
    alert("You'll recive the latest updates of BOOKMARK");
  } else {
    showFieldError();
  }
});
