import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";

const content = document.getElementById("content");
const tabs = document.querySelectorAll(".tab");

// Helper to clear active class
function clearActive() {
  tabs.forEach((tab) => tab.classList.remove("active"));
}

// Helper to clear content and append new page
function loadPage(pageFn) {
  content.innerHTML = "";
  content.appendChild(pageFn());
}

// Add event listeners to tabs
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    clearActive();
    tab.classList.add("active");

    switch (tab.textContent) {
      case "Home":
        loadPage(loadHome);
        break;
      case "Menu":
        loadPage(loadMenu);
        break;
      case "About":
        loadPage(loadAbout);
        break;
    }
  });
});

// Load default page
loadPage(loadHome);
