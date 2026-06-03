const experiences = [
  {
    id: 1,
    title: "The Southern Hemp Social",
    location: "At Home",
    tags: ["estate", "fellowship", "heirloom"],
    image: "",
    duration: "30 Minutes",
    short: "A slow Southern evening of conversation, snacks, and shared memories.",
    description:
      "An easygoing gathering centered around comfort, laughter, good company, and unhurried conversation.",
    details: [
      "Conversation",
      "Relaxation",
      "Snacks & treats",
      "Time together"
    ]
  },

  {
    id: 2,
    title: "The Botanical Promenade",
    location: "Daniel Stowe Botanical Gardens",
    tags: ["town", "heirloom"],
    image: "",
    duration: "1-2 Hours",
    short: "Garden paths, flowers, wandering, and beautiful photographs.",
    description:
      "A leisurely stroll through blooming gardens, hidden pathways, and peaceful corners perfect for photographs and conversation.",
    details: [
      "Garden walk",
      "Polaroid photos",
      "Flower displays",
      "Slow wandering"
    ]
  },

  {
    id: 3,
    title: "The Boulevard Stroll",
    location: "South End, Charlotte",
    tags: ["town"],
    image: "",
    duration: "1-2 Hours",
    short: "Shops, cafés, murals, and an afternoon exploring together.",
    description:
      "A relaxed walk through South End enjoying local shops, coffee stops, murals, and the charm of the neighborhood.",
    details: [
      "Walking",
      "Coffee stop",
      "Local shops",
      "Exploration"
    ]
  },

  {
    id: 4,
    title: "The Matriarch's Apothecary Hour",
    location: "At Home",
    tags: ["estate", "fellowship", "heirloom"],
    image: "",
    duration: "3-5 Hours",
    short: "Candles, charcuterie, skincare, films, music, and comfort.",
    description:
      "An evening devoted to comfort and connection with candles, skincare, charcuterie, nostalgic films, music, mocktails, blankets, Polaroids, and meaningful conversation.",
    details: [
      "Candles",
      "Charcuterie",
      "Skincare",
      "Mocktails",
      "Nostalgic films",
      "Polaroids",
      "Music",
      "Blankets"
    ]
  },

  {
      id: 5,
      title: "Generations in Bloom",
      location: "The Lypps Estate",
      tags: ["estate", "heirloom"],
      image: "./images/generations-in-bloom.jpeg",
      duration: "2-3 Hours",
      short: "A series of heirloom-inspired portraits across five uniquely themed settings.",
      description:
        "A full portrait experience moving through five distinct scenes, each with its own atmosphere and story, creating a collection of photographs that feel timeless, whimsical, and deeply personal.",
      details: [
        "The Jungle Nursery",
        "The Baroque Drawing Room",
        "The Fairy Cove",
        "The Bamboo Grove & Grand Oak",
        "The Kawaii Garden Picnic"
      ]
  },

  {
    id: 6,
    title: "The Family Gathering",
    location: "FaceTime",
    tags: ["heirloom"],
    image: "",
    duration: "1 Hour",
    short: "An hour spent catching up with the people who matter most.",
    description:
      "A dedicated hour to connect, share stories, and spend time together with Danni, Sarah, Taz, and Zion.",
    details: [
      "Danni",
      "Sarah",
      "Taz",
      "Zion",
      "One hour together"
    ]
  },

  {
    id: 7,
    title: "An Afternoon by the Water",
    location: "Poolside",
    tags: ["estate", "heirloom"],
    image: "",
    duration: "2-3 Hours",
    short: "Relaxing poolside with laughter, sunshine, and family.",
    description:
      "A simple afternoon enjoying the pool, spending time together, and making memories with Taz.",
    details: [
      "Pool time",
      "Relaxation",
      "Family time",
      "Summer memories"
    ]
  }
];

const DEV_IPS = [
    "24.197.139.5", "172.59.217.234"
];

const filtersToggle =
    document.querySelector(".filters__toggle");

let completedExperiences =
    JSON.parse(localStorage.getItem("completedExperiences")) || [];

const filters = document.querySelectorAll(".filter-pill");
const grid = document.getElementById("experience-grid");
const heroButton = document.querySelector(".hero__button");
const progressFill = document.querySelector(".progress-bar__fill");
const daysRemaining = document.getElementById("daysRemaining");

let activeFilter = "all";

document.addEventListener("DOMContentLoaded", async () => {
  initLenis();
  renderExperiences();
  bindFilters();
  bindHeroButton();
  await initCountdown();
  initKittyAnimation();
  initMobileFilters();
  initMemoryHunt();
  initScrollAnimations();
  createModal();
});

function initLenis() {

    // Disable on phones/tablets
    if (window.innerWidth <= 768) {
        return;
    }

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

function initMobileFilters() {

    if (!filtersToggle) return;

    filtersToggle.addEventListener("click", () => {

        document
            .querySelector(".filters")
            .classList
            .toggle("open");

    });
}

function renderExperiences() {
    const filtered =
        activeFilter === "all"
            ? experiences
            : activeFilter === "completed"
                ? experiences.filter(item => completedExperiences.includes(item.id))
                : experiences.filter(item => item.tags.includes(activeFilter));

    grid.innerHTML = filtered
        .map(item => {
            const isComplete = completedExperiences.includes(item.id);

            return `
                <article class="experience-card ${isComplete ? "complete" : ""}" data-id="${item.id}">
                    <div 
                        class="experience-card__image" 
                        style="background-image: url('${item.image}')">
                    </div>

                    ${isComplete ? `<div class="experience-card__badge">✓ Completed</div>` : ""}

                    <div class="experience-card__content">
                        <p class="experience-card__meta">
                            ${item.location}
                        </p>
                    
                        <h3 class="experience-card__title">
                            ${item.title}
                        </h3>
                    
                        <p class="experience-card__short">
                            ${item.short}
                        </p>
                    
                        ${
                            isComplete
                            ? `<div class="experience-card__status">✓ Completed</div>`
                            : `<div class="experience-card__status">✦ ${item.duration}</div>`
                        }
                    
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
        gsap.fromTo(
            ".experience-card",
            {
                opacity: 0,
                y: 40,
                scale: 0.96
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.65,
                stagger: 0.08,
                ease: "power3.out"
            }
        );
    }
}

function toggleExperienceComplete(id) {
    if (completedExperiences.includes(id)) {
        completedExperiences =
            completedExperiences.filter(itemId => itemId !== id);
    } else {
        completedExperiences.push(id);
    }

    localStorage.setItem(
        "completedExperiences",
        JSON.stringify(completedExperiences)
    );

    renderExperiences();
}

function bindFilters() {
  filters.forEach(button => {
    button.addEventListener("click", () => {
      filters.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      activeFilter = button.dataset.filter;
      const toggle =
          document.querySelector(".filters__toggle");
      
      if (toggle) {
      
          toggle.textContent =
              `✦ ${button.textContent}`;
      
      }
      
      document
          .querySelector(".filters")
          .classList
          .remove("open");
      
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
      <button class="experience-modal__close">✦</button>

      <div class="experience-modal__image"></div>

      <div class="experience-modal__content">
        <p class="experience-modal__meta"></p>
        <h2 class="experience-modal__title"></h2>
        <p class="experience-modal__description"></p>

        <div class="experience-modal__details"></div>

        <button class="experience-modal__complete">
            Mark Complete
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  initModalSwipeClose();

  modal.querySelector(".experience-modal__close").addEventListener("click", closeModal);
  modal.querySelector(".experience-modal__backdrop").addEventListener("click", closeModal);

  modal.querySelector(".experience-modal__complete").addEventListener("click", () => {
    const id = Number(modal.dataset.id);
    toggleExperienceComplete(id);
    closeModal();
});

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });
}

function openModal(item) {
  const modal = document.querySelector(".experience-modal");

  modal.dataset.id = item.id;
  modal.querySelector(".experience-modal__image").style.backgroundImage = `url('${item.image}')`;
  modal.querySelector(".experience-modal__meta").textContent = item.location;
  modal.querySelector(".experience-modal__title").textContent = item.title;
  modal.querySelector(".experience-modal__description").textContent = item.description;

  modal.querySelector(".experience-modal__details").innerHTML = item.details
    .map(detail => `<div class="experience-modal__detail">${detail}</div>`)
    .join("");

  const completeButton =
    modal.querySelector(".experience-modal__complete");

completeButton.textContent =
    completedExperiences.includes(item.id)
        ? "Completed ✓"
        : "Mark Complete";

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

function initModalSwipeClose() {

    const modal =
        document.querySelector(".experience-modal");

    const panel =
        document.querySelector(".experience-modal__panel");

    if (!modal || !panel) return;

    let startY = 0;
    let currentY = 0;

    panel.addEventListener("touchstart", e => {

        startY =
            e.touches[0].clientY;

    }, { passive: true });

    panel.addEventListener("touchmove", e => {

        currentY =
            e.touches[0].clientY;

        const delta = Math.min(0,currentY - startY);

        panel.style.transform = `translateY(${delta}px)`;

    }, { passive: true });

    panel.addEventListener("touchend", () => {

        const delta = startY - currentY;

        if(delta > 120){
            closeModal();
        }
    });
}

async function initCountdown() {

    const countdownSection =
        document.getElementById("countdown-section");
    const mainContent =
        document.getElementById("main-content");
    let bypassReveal = false;

    try {

        const response =
            await fetch("https://api.ipify.org?format=json");

        const data =
            await response.json();

        if (DEV_IPS.includes(data.ip)) {
      
            bypassReveal = true;
        
            if (mainContent) {
                mainContent.style.display = "block";
            }
        }

    } catch (e) {
        console.log("IP check failed");
    }

    const revealDate = new Date(
        "2026-06-10T12:00:00-04:00"
    );

    const now = new Date();

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

    if (mainContent && !bypassReveal) {
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

        const seconds =
            Math.floor(
                (diff % (1000 * 60))
                /
                1000
            );

        document.getElementById(
            "daysRemaining"
        ).innerHTML =
            `<span>${days}</span><span> Days</span>`;

        const hoursEl =
            document.getElementById("hoursRemaining");
        
        const minutesEl =
            document.getElementById("minutesRemaining");
        
        const secondsEl =
            document.getElementById("secondsRemaining");
        
        if (
            hoursEl &&
            minutesEl &&
            secondsEl
        ) {
        
            hoursEl.textContent =
                String(hours).padStart(2, "0");
        
            minutesEl.textContent =
                String(minutes).padStart(2, "0");
        
            secondsEl.textContent =
                String(seconds).padStart(2, "0");
        
        }

        if (window.gsap && secondsEl) {
            gsap.killTweensOf(secondsEl);
        
            gsap.fromTo(
                secondsEl,
                {
                    scale: 1.12
                },
                {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                }
            );
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

function blowKiss() {

    const kitty =
        document.querySelector(".kitty-runner");

    if (!kitty) return;

    const rect =
        kitty.getBoundingClientRect();

    const heart =
        document.createElement("div");

    heart.innerHTML = `
      <svg width="60" height="60" viewBox="0 0 120 120">
      
        <path
          d="M60 108
             C18 76 8 52 8 32
             C8 14 24 2 42 2
             C52 2 58 10 60 15
             C62 10 68 2 78 2
             C96 2 112 14 112 32
             C112 52 102 76 60 108Z"
          fill="#f6a7b5"
          stroke="#b89a5e"
          stroke-width="4"
        />
      
        <circle
          cx="88"
          cy="25"
          r="8"
          fill="#e85d6f"
        />
      
        <path
          d="M88 25
             C70 10 62 15 70 32
             C62 45 80 45 88 25Z"
          fill="#e85d6f"
        />
      
        <path
          d="M88 25
             C106 10 114 15 106 32
             C114 45 96 45 88 25Z"
          fill="#e85d6f"
        />
      
      </svg>
      `;
    heart.className = "kitty-kiss";

    document.body.appendChild(heart);

    gsap.set(heart, {
        position: "fixed",
        left: rect.left + 75,
        top: rect.top + 45,
        xPercent: -50,
        yPercent: -50,
        scale: 0.3,
        opacity: 1
    });

    gsap.to(heart, {
        scale: 10,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        onComplete: () => {
            heart.remove();
        }
    });
}

function createSparkles() {

    for (let i = 0; i < 12; i++) {

        const sparkle =
            document.createElement("div");

        sparkle.className = "sparkle";

        document.body.appendChild(sparkle);

        gsap.set(sparkle, {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        });

        gsap.to(sparkle, {
            x: "+=" + gsap.utils.random(-250, 250),
            y: "+=" + gsap.utils.random(-250, 250),
            opacity: 0,
            scale: 0,
            duration: 1.2,
            onComplete: () => sparkle.remove()
        });
    }
}

function initKittyAnimation() {
    const kitty = document.querySelector(".kitty-runner");
    const bow = document.querySelector(".kitty-bow");

    if (!kitty || !bow || !window.gsap) return;

    const leftFoot = document.querySelector(".kitty-foot-left");
    const rightFoot = document.querySelector(".kitty-foot-right");
    const kittySvg = document.querySelector(".kitty-svg");

  const isMobile = window.innerWidth < 768;

  const kittyTargetX = isMobile
      ? () => window.innerWidth - 140
      : () => window.innerWidth - 450;
  
  const bowTargetX = isMobile
      ? () => window.innerWidth - 70
      : () => window.innerWidth - 150;

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
        repeatDelay: 0,
        defaults: {
            ease: "power1.inOut"
        }
    });

const leftSide = 20;
const rightSide = () => window.innerWidth - (isMobile ? 140 : 260);

chase

      .set(kitty, {
        x: leftSide,
        scaleX: 1
    })
    
    .set(bow, {
        x: rightSide()
    })
  
    // Run right
    .to(kitty, {
        x: rightSide,
        duration: 4.5
    })

    .call(() => blowKiss())

    .to(kitty, {
        rotation: -10,
        duration: 0.15,
        repeat: 2,
        yoyo: true
    })

    .set(kitty, {
        scaleX: -1
    })

    // Run left
    .to(kitty, {
        x: leftSide,
        duration: 4.5
    })

    .call(() => blowKiss())

    .to(kitty, {
        rotation: 10,
        duration: 0.15,
        repeat: 2,
        yoyo: true
    })

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
