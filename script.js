// MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

  navLinks.classList.toggle("active");

  const isOpen = navLinks.classList.contains("active");

  menuBtn.textContent = isOpen ? "✕" : "☰";

  menuBtn.setAttribute("aria-expanded", isOpen);

});

// CLOSE MENU AFTER CLICKING A LINK

const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {

  link.addEventListener("click", function() {

    navLinks.classList.remove("active");

    menuBtn.textContent = "☰";

    menuBtn.setAttribute("aria-expanded", "false");

  });

});

// AUTOMATIC COPYRIGHT YEAR

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

// WELCOME MESSAGE IN CONSOLE

console.log("Welcome to Tigistu Mamo's Portfolio!");
