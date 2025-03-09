const routes = {
    "/": "/src/pages/home.html",
    "/about": "/src/pages/about.html",
    "/contact": "/src/pages/contact.html",
};

// Function to load content dynamically
export function loadPage(path) {
    let page = routes[path]
    if(!page) {
        page = routes["/"]
        path = "/"
    }
    fetch(page)
        .then((response) => response.text())
        .then((html) => {
            history.pushState({}, "", path);
            document.getElementById("app").innerHTML = html;
            document.dispatchEvent(new Event("pageLoad"));
            
        })
        .catch((error) => console.error("Error loading page:", error));
}

// Intercept back/forward buttons to prevent page reload (and keep SPA)
window.onpopstate = () => {
    const path = window.location.pathname;
    loadPage(path);
};

