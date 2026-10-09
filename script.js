// Update these values with your real contact details before publishing.
const PORTFOLIO_EMAIL = "your.email@example.com";
const GITHUB_URL = "https://github.com/your-username";
const LINKEDIN_URL = "https://www.linkedin.com/in/your-profile";

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", nav.classList.contains("open") ? "true" : "false");
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));

const copyButton = document.getElementById("copyEmail");
copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(PORTFOLIO_EMAIL);
    copyButton.innerHTML = "Email copied <span>✓</span>";
  } catch {
    window.prompt("Copy your email address:", PORTFOLIO_EMAIL);
  }
});

// Quick setup: update the social links in index.html to match GITHUB_URL and LINKEDIN_URL.
