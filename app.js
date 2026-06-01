const experiences = [
  {
    id: 1,
    title: "Charcuterie Night",
    date: "Friday Evening",
    location: "At Home",
    tags: ["home", "food"],
    image: "https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=1600",
    short: "Arrival, snacks, drinks, blankets, and a cozy first night.",
    description:
      "A relaxed welcome evening with charcuterie, drinks, soft lighting, music, blankets, and easy conversation.",
    details: ["Welcome drinks", "Charcuterie board", "Nostalgic movie", "Cozy living room setup"]
  },
  {
    id: 2,
    title: "Botanical Wandering",
    date: "Saturday",
    location: "South Carolina Botanical Garden",
    tags: ["out", "photos"],
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1600",
    short: "Flowers, garden paths, slow wandering, and pretty photos.",
    description:
      "A garden-centered outing made for walking slowly, taking photos, finding hidden corners, and enjoying the day without rushing.",
    details: ["Garden walk", "Polaroid photos", "Coffee or lunch after", "Golden-hour stop if time allows"]
  },
  {
    id: 3,
    title: "The Apothecary Hour",
    date: "Sunday",
    location: "At Home",
    tags: ["home"],
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1600",
    short: "Tea, skincare, candles, journals, and soft music.",
    description:
      "A quiet, pretty reset with tea, candles, skincare, soft music, and little rituals that make the evening feel intentional.",
    details: ["Tea", "Face masks", "Candles", "Journaling", "Relaxing playlist"]
  },
  {
    id: 4,
    title: "Golden Hour Portraits",
    date: "Flexible",
    location: "TBD",
    tags: ["photos", "out"],
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600",
    short: "Timeless photos that feel like heirlooms.",
    description:
      "A short portrait session during the prettiest light of the day, focused on photos that feel warm, elegant, and worth keeping.",
    details: ["Polaroids", "Group photos", "Solo portraits", "Heirloom-style shots"]
  },
  {
    id: 5,
    title: "Placeholder Activity",
    date: "TBD",
    location: "TBD",
    tags: ["out"],
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1600",
    short: "A future activity to add later.",
    description:
      "This is a placeholder activity so the layout is ready while you continue planning.",
    details: ["Add time", "Add location", "Add notes", "Add photos"]
  }
];

const filters = document.querySelectorAll(".filter-pill");
const grid = document.getElementById("experience-grid");
const heroButton = document.querySelector(".hero__button");
const progressFill = document.querySelector(".progress-bar__fill");
const daysRemaining = document.getElementById("daysRemaining");

let activeFilter = "all";

document.addEventListener("DOMContentLoaded", () => {
  initLenis();
  renderExperiences();
  bindFilters();
  bindHeroButton();
  initCountdown();
  initKittyAnimation();
  initMemoryHunt();
  initScrollAnimations();
  createModal();
});

function initLenis() {
  if (!window.Lenis) return;

  const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

function renderExperiences() {
  const filtered =
    activeFilter === "all"
      ? experiences
      : experiences.filter(item => item.tags.includes(activeFilter));

  grid.innerHTML = filtered
    .map(item => {
      return `
        <article class="experience-card" data-id="${item.id}">
          <div 
            class="experience-card__image" 
            style="background-image: url('${item.image}')">
          </div>

          <div class="experience-card__content">
            <p class="experience-card__meta">${item.date} · ${item.location}</p>
            <h3 class="experience-card__title">${item.title}</h3>
            <p>${item.short}</p>
          </div>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll(".experience-card").forEach(card => {
    card.addEventListener("click", () => {
      const id = Number(card.dataset.id);
      const experience = experiences.find(item => item.id === id);
      openModal(experience);
    });
  });

  if (window.gsap) {
    gsap.from(".experience-card", {
      opacity: 0,
      y: 35,
      duration: 0.7,
      stagger: 0.08,
      ease: "power3.out"
    });
  }
}

function bindFilters() {
  filters.forEach(button => {
    button.addEventListener("click", () => {
      filters.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      activeFilter = button.dataset.filter;
      renderExperiences();
    });
  });
}

function bindHeroButton() {
  if (!heroButton) return;

  heroButton.addEventListener("click", () => {
    document.querySelector(".filters").scrollIntoView({
      behavior: "smooth"
    });
  });
}

function createModal() {
  const modal = document.createElement("div");
  modal.className = "experience-modal";
  modal.innerHTML = `
    <div class="experience-modal__backdrop"></div>

    <div class="experience-modal__panel">
      <button class="experience-modal__close">×</button>

      <div class="experience-modal__image"></div>

      <div class="experience-modal__content">
        <p class="experience-modal__meta"></p>
        <h2 class="experience-modal__title"></h2>
        <p class="experience-modal__description"></p>

        <div class="experience-modal__details"></div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelector(".experience-modal__close").addEventListener("click", closeModal);
  modal.querySelector(".experience-modal__backdrop").addEventListener("click", closeModal);

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });
}

function openModal(item) {
  const modal = document.querySelector(".experience-modal");

  modal.querySelector(".experience-modal__image").style.backgroundImage = `url('${item.image}')`;
  modal.querySelector(".experience-modal__meta").textContent = `${item.date} · ${item.location}`;
  modal.querySelector(".experience-modal__title").textContent = item.title;
  modal.querySelector(".experience-modal__description").textContent = item.description;

  modal.querySelector(".experience-modal__details").innerHTML = item.details
    .map(detail => `<div class="experience-modal__detail">${detail}</div>`)
    .join("");

  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  if (window.gsap) {
    gsap.fromTo(
      ".experience-modal__panel",
      { y: 80, opacity: 0, scale: 0.96 },
      { y: 0, opacity: 1, scale: 1, duration: 0.55, ease: "power3.out" }
    );

    gsap.fromTo(
      ".experience-modal__content > *",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.45, stagger: 0.08, delay: 0.15 }
    );
  }
}

function closeModal() {
  const modal = document.querySelector(".experience-modal");
  if (!modal || !modal.classList.contains("active")) return;

  modal.classList.remove("active");
  document.body.style.overflow = "";
}

function initCountdown() {

    const revealDate = new Date(
        "2026-06-10T12:00:00-04:00"
    );

    const now = new Date();

    const countdownSection =
        document.getElementById("countdown-section");

    const mainContent =
        document.getElementById("main-content");

    if (now >= revealDate) {

        if (countdownSection) {
            countdownSection.style.display = "none";
        }

        if (mainContent) {
            mainContent.style.display = "block";
        }

        const subtitle =
            document.querySelector(".hero__subtitle");

        if (subtitle) {
            subtitle.textContent =
                "The Gathering Has Begun";
        }

        return;
    }

    if (mainContent) {
        mainContent.style.display = "none";
    }

    if (countdownSection) {
        countdownSection.style.display = "block";
    }

    function updateCountdown() {

        const now = new Date();

        const diff =
            revealDate - now;

        const days =
            Math.floor(
                diff / (1000 * 60 * 60 * 24)
            );

        const hours =
            Math.floor(
                (diff % (1000 * 60 * 60 * 24))
                /
                (1000 * 60 * 60)
            );

        const minutes =
            Math.floor(
                (diff % (1000 * 60 * 60))
                /
                (1000 * 60)
            );

        document.getElementById(
            "daysRemaining"
        ).innerHTML =
            `${days}<span> Days</span>`;

        const label =
            document.querySelector(
                ".countdown__label"
            );

        if (label) {

            label.innerHTML =
                `${hours} Hours · ${minutes} Minutes<br>Until We Gather`;

        }

    }

    updateCountdown();

    setInterval(
        updateCountdown,
        1000
    );
}

function initMemoryHunt() {
  const checks = document.querySelectorAll(".memory-item input");

  checks.forEach((check, index) => {
    const saved = localStorage.getItem(`memory-hunt-${index}`);

    if (saved === "true") {
      check.checked = true;
      check.closest(".memory-item").classList.add("complete");
    }

    check.addEventListener("change", () => {
      localStorage.setItem(`memory-hunt-${index}`, check.checked);

      check.closest(".memory-item").classList.toggle("complete", check.checked);
    });
  });
}

function initScrollAnimations() {
  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".progress-bar__fill", {
    width: "100%",
    ease: "none",
    scrollTrigger: {
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: true
    }
  });

  function initKittyAnimation() {
  
      const kitty = document.querySelector(".kitty-runner");
      const bow = document.querySelector(".kitty-bow");
  
      if (!kitty || !bow || !window.gsap) return;
  
      const leftFoot = document.querySelector(".kitty-foot-left");
      const rightFoot = document.querySelector(".kitty-foot-right");
      const kittySvg = document.querySelector(".kitty-svg");
  
      // Kill any previous animations
      gsap.killTweensOf([
          kitty,
          bow,
          leftFoot,
          rightFoot,
          kittySvg
      ]);
  
      // Running bounce
      if (kittySvg) {
          gsap.to(kittySvg, {
              y: -8,
              duration: 0.18,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut"
          });
      }
  
      // Feet movement
      if (leftFoot) {
          gsap.to(leftFoot, {
              rotation: 25,
              transformOrigin: "center center",
              duration: 0.12,
              repeat: -1,
              yoyo: true,
              ease: "none"
          });
      }
  
      if (rightFoot) {
          gsap.to(rightFoot, {
              rotation: -25,
              transformOrigin: "center center",
              duration: 0.12,
              repeat: -1,
              yoyo: true,
              ease: "none"
          });
      }
  
      // Bow floating
      gsap.to(bow, {
          y: -18,
          rotation: 10,
          duration: 0.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
      });
  
      // Kitty chase timeline
      const chase = gsap.timeline({
          repeat: -1,
          defaults: {
              ease: "power1.inOut"
          }
      });
  
      chase
  
          // Start positions
          .set(kitty, {
              x: -150,
              scaleX: 1
          })
  
          .set(bow, {
              x: window.innerWidth - 320
          })
  
          // Run toward bow
          .to(kitty, {
              x: () => window.innerWidth - 450,
              duration: 5
          })
  
          // Pause and "look"
          .to(kitty, {
              rotation: -12,
              duration: 0.2,
              repeat: 3,
              yoyo: true
          })
  
          // Bow escapes
          .to(bow, {
              x: () => window.innerWidth - 150,
              duration: 0.8
          }, "<")
  
          // Kitty turns around
          .set(kitty, {
              scaleX: -1
          })
  
          // Run back
          .to(kitty, {
              x: -150,
              duration: 5
          })
  
          // Bow moves to left side
          .to(bow, {
              x: 150,
              duration: 0.8
          }, "<")
  
          // Face right again
          .set(kitty, {
              scaleX: 1
          });
  
      // Make kitty speed up as countdown gets closer
      if (typeof daysRemaining !== "undefined") {
  
          const days = parseInt(
              document.getElementById("daysRemaining")?.textContent || "99"
          );
  
          if (days <= 7) {
              chase.timeScale(1.3);
          }
  
          if (days <= 3) {
              chase.timeScale(1.7);
          }
  
          if (days <= 1) {
              chase.timeScale(2.2);
          }
      }
  
  }

  gsap.from(".hero__eyebrow, .hero__title, .hero__subtitle, .hero__button", {
    opacity: 0,
    y: 35,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out"
  });

  gsap.from(".section-header", {
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".memory-hunt",
      start: "top 80%"
    }
  });

  gsap.utils.toArray(".memory-item, .gallery-card").forEach(element => {
    gsap.from(element, {
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%"
      }
    });
  });
}
