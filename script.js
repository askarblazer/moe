const themeButton = document.getElementById("theme-toggle");
const body = document.body;
const yearSpan = document.getElementById("year");
const contactForm = document.getElementById("contact-form");

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
}

if (themeButton) {
  themeButton.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Сообщение успешно отправлено!");
    contactForm.reset();
  });
}