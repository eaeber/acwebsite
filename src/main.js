import { loadPage } from "/src/js/SPA.js";

// load navigation
function loadNav() {
    fetch("/src/components/nav.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("nav-container").innerHTML = html;
        })
        .catch(error => console.error("Error loading navigation:", error));
}

// on doc load
document.addEventListener("DOMContentLoaded", () => {
    loadNav();
    loadPage(window.location.pathname);
});