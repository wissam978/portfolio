/* ======================================
   Theme toggle (dark / light)
   ====================================== */
(function initTheme() {
  const root = document.documentElement;
  const stored = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = stored || (prefersDark ? "dark" : "light");
  root.setAttribute("data-theme", theme);
})();

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");
  const root = document.documentElement;

  const updateIcon = () => {
    const current = root.getAttribute("data-theme");
    if (toggle) {
      toggle.innerHTML = current === "dark"
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
    }
  };
  updateIcon();

  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = root.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      updateIcon();
    });
  }

  /* ======================================
     Mobile menu toggle
     ====================================== */
  const menuBtn = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  /* ======================================
     Highlight active page in nav
     ====================================== */
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });

  /* ======================================
     Scroll reveal animations (IntersectionObserver)
     ====================================== */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // animate skill bars when they appear
            const bar = entry.target.querySelector(".skill-bar-fill");
            if (bar && bar.dataset.level) {
              bar.style.width = bar.dataset.level + "%";
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("visible"));
  }

  /* ======================================
     Typing effect on hero (homepage)
     ====================================== */
  const typed = document.getElementById("typedText");
  if (typed) {
    const words = ["Étudiant en BTS SIO", "Option SISR", "Admin systèmes & réseaux", "Passionné d'infrastructure"];
    let wordIdx = 0, charIdx = 0, deleting = false;
    function type() {
      const word = words[wordIdx];
      typed.textContent = word.substring(0, charIdx);
      if (!deleting && charIdx < word.length) {
        charIdx++;
        setTimeout(type, 100);
      } else if (deleting && charIdx > 0) {
        charIdx--;
        setTimeout(type, 50);
      } else {
        deleting = !deleting;
        if (!deleting) wordIdx = (wordIdx + 1) % words.length;
        setTimeout(type, 1200);
      }
    }
    type();
  }

  /* ======================================
     Falling sakura petals (auto if #petals exists)
     ====================================== */
  const petalsContainer = document.getElementById("petals");
  if (petalsContainer && petalsContainer.children.length === 0) {
    const PETAL_COUNT = 35;
    for (let i = 0; i < PETAL_COUNT; i++) {
      const petal = document.createElement("div");
      petal.className = "petal";
      const size = 14 + Math.random() * 22;
      petal.style.width = size + "px";
      petal.style.height = size + "px";
      petal.style.left = (Math.random() * 100) + "vw";
      petal.style.opacity = (0.55 + Math.random() * 0.45).toFixed(2);
      petal.style.setProperty("--fall-duration", (8 + Math.random() * 12).toFixed(1) + "s");
      petal.style.setProperty("--fall-delay", (-Math.random() * 18).toFixed(1) + "s");
      petal.style.setProperty("--sway-duration", (2.2 + Math.random() * 3).toFixed(1) + "s");
      petal.style.setProperty("--rotate-end", Math.round(Math.random() * 720 + 360) + "deg");
      petalsContainer.appendChild(petal);
    }
  }
});
