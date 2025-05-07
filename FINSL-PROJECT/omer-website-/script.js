// Darkmode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("light");
    document.querySelector("header").classList.toggle("light");
    const toggleButton = document.querySelector(".toggle-button");
    toggleButton.classList.toggle("light");
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.classList.toggle("light");
    });
}