const routes = {
    "/": "/assets/pages/home.html",
    "/about": "/assets/pages/about.html",
    "/contact": "/assets/pages/contact.html",
    "/project": "/assets/pages/project.html"
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
            console.log(path);
            if(path == "/project") document.dispatchEvent(new Event("projectLoad"));
        })
        .catch((error) => console.error("Error loading page:", error));
}

// Intercept back/forward buttons to prevent page reload (and keep SPA)
window.onpopstate = () => {
    const path = window.location.pathname;
    loadPage(path);
};

