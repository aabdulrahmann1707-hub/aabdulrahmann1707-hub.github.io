const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("open");

        const expanded = nav.classList.contains("open");

        menuToggle.setAttribute("aria-expanded", expanded);
        menuToggle.setAttribute(
            "aria-label",
            expanded ? "Close navigation" : "Open navigation"
        );
    });

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
        });
    });
}

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}
