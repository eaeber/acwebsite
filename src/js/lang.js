export function initializeLanguage() {
    let savedLang = localStorage.getItem("language");
    if (!savedLang) {
        savedLang = getBrowserLanguage();
        localStorage.setItem("language", savedLang);
    }
    setLanguage(savedLang);
}

document.addEventListener("navLoaded", () => {
    document.getElementById("lang-de").addEventListener("click", () => {setLanguage("de"); localStorage.setItem("language", "de")});
    document.getElementById("lang-en").addEventListener("click", () => {setLanguage("en"); localStorage.setItem("language", "en")});
});

function getBrowserLanguage() {
    const browserLang = navigator.language || navigator.languages[0];
    if (browserLang.startsWith("de")) return "de";
    return "en";
}

function setLanguage(lang) {
    //TODO set lang
    console.log("TODO: SETTING LANG TO: ", lang)
}

