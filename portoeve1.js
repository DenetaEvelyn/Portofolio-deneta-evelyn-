const nameText = "Deneta Evelyn Simamora";
const typedName = document.getElementById("typed-name");
const nameHeading = document.querySelector(".name-heading");

const typingSpeed = 140;
const deletingSpeed = 75;

if (typedName && nameHeading) {
  let index = 0;
  let deleting = false;

  function typeName() {
    typedName.textContent = nameText.slice(0, index);

    if (!deleting && index < nameText.length) {
      index++;
      setTimeout(typeName, typingSpeed);
    } else if (!deleting) {
      deleting = true;
      setTimeout(typeName, 1800);
    } else if (index > 0) {
      index--;
      setTimeout(typeName, deletingSpeed);
    } else {
      deleting = false;
      setTimeout(typeName, 400);
    }
  }

  typedName.textContent = "";
  typeName();
}

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const navbar = document.querySelector(".navbar");

if (hamburger && mobileMenu && navbar) {
  const menuLinks = mobileMenu.querySelectorAll("a");

  function setMenuOpen(isOpen) {
    mobileMenu.classList.toggle("open", isOpen);
    hamburger.classList.toggle("is-open", isOpen);
    navbar.classList.toggle("menu-open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
    hamburger.setAttribute(
      "aria-label",
      isOpen ? "Tutup menu navigasi" : "Buka menu navigasi",
    );
  }

  hamburger.addEventListener("click", () => {
    setMenuOpen(hamburger.getAttribute("aria-expanded") !== "true");
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });
}

const sections = [
  "home",
  "about",
  "projects",
  "activities",
  "certifications",
  "contact",
]
  .map((id) => document.getElementById(id))
  .filter(Boolean);
const navLinks = document.querySelectorAll(
  ".nav-links a[href^='#'], .mobile-menu a[href^='#']",
);

function updateActiveLink() {
  const marker = window.scrollY + window.innerHeight * 0.6;
  let currentSection = sections[0];

  sections.forEach((section) => {
    if (section.offsetTop <= marker) {
      currentSection = section;
    }
  });

  if (!currentSection) return;

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${currentSection.id}`;

    link.classList.toggle("active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

window.addEventListener("scroll", updateActiveLink, { passive: true });
window.addEventListener("resize", updateActiveLink);
window.addEventListener("load", updateActiveLink);
updateActiveLink();

const homeSection = document.getElementById("home");
const heroPhoto = document.querySelector(".hero-photo");
const homeSocialLinks = document.querySelector(".banner-copy .social-links");

if (homeSection && "IntersectionObserver" in window) {
  const homeEffectsObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (heroPhoto) {
          heroPhoto.classList.remove("photo-animate");
          void heroPhoto.offsetWidth;
          heroPhoto.classList.add("photo-animate");
        }

        if (homeSocialLinks) {
          homeSocialLinks.classList.remove("social-animate");
          void homeSocialLinks.offsetWidth;
          homeSocialLinks.classList.add("social-animate");
        }
      } else {
        heroPhoto?.classList.remove("photo-animate");
        homeSocialLinks?.classList.remove("social-animate");
      }
    },
    { threshold: 0.3 },
  );

  homeEffectsObserver.observe(homeSection);
}

const aboutRevealTarget = document.querySelector(".about-section");

if (aboutRevealTarget && "IntersectionObserver" in window) {
  const aboutRevealWatcher = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        aboutRevealTarget.classList.remove("about-reveal-active");
        void aboutRevealTarget.offsetWidth;
        aboutRevealTarget.classList.add("about-reveal-active");
      } else {
        aboutRevealTarget.classList.remove("about-reveal-active");
      }
    },
    { threshold: 0.2 },
  );

  aboutRevealWatcher.observe(aboutRevealTarget);
}
const projectsSection = document.querySelector(".projects-section");

if (projectsSection && "IntersectionObserver" in window) {
  const projectsObserver = new IntersectionObserver(
    ([entry]) => {
      projectsSection.classList.toggle(
        "projects-reveal-active",
        entry.isIntersecting,
      );
    },
    { threshold: 0.2 },
  );

  projectsObserver.observe(projectsSection);
}
const activitiesRevealTarget = document.querySelector(".activities-section");

if (activitiesRevealTarget && "IntersectionObserver" in window) {
  const activitiesRevealWatcher = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        activitiesRevealTarget.classList.remove("activities-reveal-active");
        void activitiesRevealTarget.offsetWidth;
        activitiesRevealTarget.classList.add("activities-reveal-active");
      } else {
        activitiesRevealTarget.classList.remove("activities-reveal-active");
      }
    },
    { threshold: 0.2 },
  );

  activitiesRevealWatcher.observe(activitiesRevealTarget);
}
const certificationsRevealTarget = document.querySelector(
  ".certifications-section",
);

if (certificationsRevealTarget && "IntersectionObserver" in window) {
  const certificationsRevealWatcher = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        certificationsRevealTarget.classList.remove(
          "certifications-reveal-active",
        );
        void certificationsRevealTarget.offsetWidth;
        certificationsRevealTarget.classList.add(
          "certifications-reveal-active",
        );
      } else {
        certificationsRevealTarget.classList.remove(
          "certifications-reveal-active",
        );
      }
    },
    { threshold: 0.2 },
  );

  certificationsRevealWatcher.observe(certificationsRevealTarget);
}
