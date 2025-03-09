import { loadPage } from "./SPA.js";

function updateActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll(".nav-link");
    let activeFound = false
    let foundLink = null;

    navLinks.forEach(link => {
        link.classList.remove("active-link");
        if (link.getAttribute("href") === currentPath) {
            activeFound = true
            foundLink = link

        }
    });

    if (activeFound === true) foundLink.classList.add("active-link");
    else document.querySelector(`a[href="/"]`).classList.add("active-link"); //if no matching route just go to home page
}

// keep SPA principle by preventing page reload
document.addEventListener("click", (event) => {
    if (event.target.matches("a.nav-link")) {
      event.preventDefault();
      loadPage(event.target.getAttribute("href"));
    }
  });

document.addEventListener("pageLoad", () => {
    updateActiveNav()
});
