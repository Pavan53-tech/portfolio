// Typing Effect for Hero Text
const typingText = document.querySelector(".typing-text");
const phrases = [
  "Full Stack Developer",
  "React & Node.js Enthusiast",
  "UI/UX Designer",
  "Problem Solver",
];
let phraseIndex = 0;
let letterIndex = 0;
let currentText = "";
let isDeleting = false;
let typingSpeed = 100;

function type() {
  if (phraseIndex >= phrases.length) phraseIndex = 0;
  const fullText = phrases[phraseIndex];

  if (!isDeleting) {
    currentText = fullText.substring(0, letterIndex + 1);
    letterIndex++;
    typingText.textContent = currentText;

    if (letterIndex === fullText.length) {
      isDeleting = true;
      typingSpeed = 2000; // pause at full text
    } else {
      typingSpeed = 100;
    }
  } else {
    currentText = fullText.substring(0, letterIndex - 1);
    letterIndex--;
    typingText.textContent = currentText;

    if (letterIndex === 0) {
      isDeleting = false;
      phraseIndex++;
      typingSpeed = 500;
    } else {
      typingSpeed = 50;
    }
  }

  setTimeout(type, typingSpeed);
}
type();

// Smooth Scroll & Active Link Highlight
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70, // offset for fixed header
        behavior: "smooth",
      });
    }
  });
});

window.addEventListener("scroll", () => {
  let current = "";
  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
});

// Simple Form Validation
const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.querySelector('input[type="text"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();
  const message = form.querySelector("textarea").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Message sent successfully! Thank you.");
  form.reset();
});

function validateEmail(email) {
  // Basic email validation regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
