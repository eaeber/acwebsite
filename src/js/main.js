import { loadPage } from "/src/js/SPA.js";
import { initializeLanguage } from "/src/js/lang.js";

// load navigation
function loadNav() {
    fetch("/components/nav.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("nav-container").innerHTML = html;
            document.dispatchEvent(new Event("navLoaded"));
        })
        .catch(error => console.error("Error loading navigation:", error));
}

// on doc load
document.addEventListener("DOMContentLoaded", () => {
    loadNav();
    loadPage(window.location.pathname);
    initializeLanguage();
});