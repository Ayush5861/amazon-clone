// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Create and append dark mode toggle button
const toggleButton = document.createElement("button");
toggleButton.innerText = "🌙 Toggle Dark Mode";
toggleButton.style.position = "fixed";
toggleButton.style.bottom = "20px";
toggleButton.style.right = "20px";
toggleButton.style.padding = "10px 15px";
toggleButton.style.borderRadius = "8px";
toggleButton.style.background = "#333";
toggleButton.style.color = "#fff";
toggleButton.style.border = "none";
toggleButton.style.cursor = "pointer";
toggleButton.style.zIndex = "1000";
document.body.appendChild(toggleButton);

// Dark mode logic
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
