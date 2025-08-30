// Tahun footer otomatis
document.getElementById("year").textContent = new Date().getFullYear();

// Toggle navbar (mobile)
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}
