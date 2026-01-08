// ===========================
// Navigation Toggle
// ===========================
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// ===========================
// Navbar Scroll Effect
// ===========================
const navbar = document.querySelector(".navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  lastScroll = currentScroll;
});

// ===========================
// Smooth Scroll for Anchor Links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// ===========================
// Intersection Observer for Animations
// ===========================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all animatable elements
document
  .querySelectorAll(
    ".skill-category, .timeline-item, .project-card, .education-card"
  )
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

// Add animation class styles
const style = document.createElement("style");
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ===========================
// Active Section Highlight
// ===========================
const sections = document.querySelectorAll("section[id], header[id]");
const navLinksItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinksItems.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Add active link styles
const activeStyle = document.createElement("style");
activeStyle.textContent = `
    .nav-links a.active {
        color: var(--text-primary);
    }
    .nav-links a.active::after {
        width: 100%;
    }
`;
document.head.appendChild(activeStyle);

// ===========================
// Typing Animation for Hero
// ===========================
const heroTitle = document.querySelector(".hero-title");
if (heroTitle) {
  heroTitle.style.opacity = "0";
  heroTitle.style.transform = "translateY(20px)";

  setTimeout(() => {
    heroTitle.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    heroTitle.style.opacity = "1";
    heroTitle.style.transform = "translateY(0)";
  }, 200);
}

// ===========================
// Skill Tags Hover Effect
// ===========================
document.querySelectorAll(".skill-tag").forEach((tag) => {
  tag.addEventListener("mouseenter", () => {
    tag.style.transform = "scale(1.05)";
    tag.style.transition = "transform 0.2s ease";
  });

  tag.addEventListener("mouseleave", () => {
    tag.style.transform = "scale(1)";
  });
});

// ===========================
// Console Welcome Message
// ===========================
console.log(
  "%c👋 Hello! Thanks for checking out my resume!",
  "color: #6366f1; font-size: 16px; font-weight: bold;"
);
console.log(
  "%c💼 Open to opportunities - feel free to reach out!",
  "color: #0ea5e9; font-size: 14px;"
);
