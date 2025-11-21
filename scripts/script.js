// Hamburger toggle
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");

hamburgerBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Contact button redirect to Gmail
const contactBtn = document.getElementById("btnMessage");
contactBtn.addEventListener("click", () => {
  window.location.href = "mailto:otuakpan05@gmail.com";
});