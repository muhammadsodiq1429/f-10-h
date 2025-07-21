import { DATA } from "./data.js";
const contentEl = document.querySelector(".content");
const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = inputEl.value.trimEnd();
  if (!value) return null;

  const divEl = document.createElement("div");
  divEl.className = "msg me";

  divEl.innerHTML = `<p>${value}</p>
  <span>${new Date().getHours()}:${new Date().getMinutes()}</span>`;

  contentEl.appendChild(divEl);
  inputEl.value = "";
});
