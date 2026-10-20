// ===== CAKEDINE NAVBAR FUNCTIONALITY =====

const hamburger = document.querySelector(".hamburger");
const navlist = document.querySelector(".navlist");
const navlinks = document.querySelectorAll(".navlinks");

// Toggle mobile menu
hamburger.addEventListener("click", () => {
    navlist.classList.toggle("active");
    hamburger.classList.toggle("active");
});

// Close menu after clicking a link
navlinks.forEach((link) => {
    link.addEventListener("click", () => {
        navlist.classList.remove("active");
        hamburger.classList.remove("active");
    });
});

// Active navigation link
navlinks.forEach((link) => {
    link.addEventListener("click", () => {
        navlinks.forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});

console.log("CakeDine JavaScript loaded successfully!");