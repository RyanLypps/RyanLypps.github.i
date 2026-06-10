const experiences = [
  {
    id: 1,
    title: "The Southern Hemp Social",
    location: "Any Dispensary, Anderson",
    tags: ["estate"],
    image: "./images/weed-leaf.jpg",
    duration: "30 Minutes",
    short: "A quick excursion for provisions, fresh air, and good company.",
    description:
      "A brief trip to a local dispensary to pick up provisions, enjoy the drive, and return ready for an evening of fellowship.",
    details: [
      "Dispensary Hunt",
      "Blunt Selection",
      "Scenic Drive",
      "Good Company"
    ]
  },

  {
    id: 2,
    title: "The Botanical Promenade",
    location: "Daniel Stowe Botanical Gardens, Charlotte",
    tags: ["town", "heirloom"],
    image: "./images/garden-walk.jpg",
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
    image: "./images/south-end.jpg",
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
    location: "The Lypps Estate",
    tags: ["estate", "fellowship", "heirloom"],
    image: "./images/candle-photo.webp",
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
      "Music",
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
    title: "The Reunion Hour",
    location: "FaceTime at The Lypps Estate",
    tags: ["heirloom"],
    image: "./images/face-timig.avif",
    duration: "1 Hour",
    short: "An hour spent catching up with the people who matter most.",
    description:
      "A dedicated hour to connect, share stories, and spend time together with Danni, Sarah, Taz, and Zion. Give Danni notice ahead of time. Can use my laptop.",
    details: [
      "Danni",
      "Sarah",
      "Taz",
      "Zion",
      "Mocktails"
    ]
  },

  {
    id: 7,
    title: "An Afternoon by the Water",
    location: "KOA Public Pool, Anderson",
    tags: ["town", "heirloom"],
    image: "./images/pink-pool.jpg",
    duration: "2-3 Hours",
    short: "Relaxing poolside with laughter, sunshine, and family.",
    description:
      "A simple afternoon enjoying the pool, spending time together, and making memories together. Only during weekdays, 5 dollats entry.",
    details: [
      "Pool time",
      "Relaxation",
      "Summer memories"
    ]
  },

  {
    id: 8,
    title: "The Antiquarian's Circuit",
    location: "Anderson County",
    tags: ["town", "heirloom"],
    image: "./images/antique-shopping.jpeg",
    duration: "3-5 Hours",
    short: "A day spent exploring antique shops, hidden treasures, and local favorites.",
    description:
      "A leisurely tour through some of the area's most beloved antique stores and destinations, including The Vine, Apple Dumplin, Willows, Standpipe, Haven of Rest, and Bridge Center.",
    details: [
      "Antique Hunting",
      "Local Shops",
      "Hidden Treasures",
      "Scenic Drive"
    ]
  },

  {
    id: 9,
    title: "The Anderson Promenade",
    location: "Downtown Anderson",
    tags: ["town"],
    image: "./images/downtown-anderson.webp",
    duration: "1-2 Hours",
    short: "A relaxed stroll through the heart of Anderson.",
    description:
      "An afternoon exploring downtown Anderson's shops, historic buildings, public spaces, and small-town charm at an unhurried pace.",
    details: [
      "Historic Downtown",
      "Local Shops",
      "Walking",
      "Exploration"
    ]
  },

  {
    id: 10,
    title: "The Biltmore Excursion",
    location: "Biltmore Estate, Asheville",
    tags: ["town", "heirloom"],
    image: "./images/biltmore-estate.avif",
    duration: "Full Day",
    short: "A grand day exploring America's largest home and its gardens.",
    description:
      "A memorable journey through the Biltmore Estate, featuring historic architecture, beautiful gardens, scenic grounds, and timeless elegance.",
    details: [
      "Historic Estate",
      "Gardens",
      "Photography",
      "Exploration"
    ]
  },

  {
    id: 11,
    title: "The Matriarch's Grand Supper",
    location: "The Lypps Estate",
    tags: ["estate", "heirloom", "fellowship"],
    image: "./images/candlelit-dinner.jpg",
    duration: "2-3 Hours",
    short: "A candlelit evening of fine dining and conversation.",
    description:
      "An official estate dinner illuminated by candlelight, featuring a thoughtfully prepared meal, elegant table settings, meaningful conversation, and timeless Southern hospitality.",
    details: [
      "Candlelight",
      "Formal Dinner",
      "Conversation",
      "Estate Tradition"
    ]
  },

  {
    id: 12,
    title: "The Matriarch's Tea Service",
    location: "The Lypps Estate",
    tags: ["estate", "heirloom"],
    image: "./images/tea-time.webp",
    duration: "1-2 Hours",
    short: "Tea, pastries, conversation, and quiet refinement.",
    description:
      "A graceful afternoon tea featuring fine teas, sweet treats, conversation, and a slower pace inspired by classic Southern hospitality.",
    details: [
      "Tea Service",
      "Pastries",
      "Conversation",
      "Relaxation"
    ]
  },

  // {
  //     id: 13,
  //     title: "The Croquet Match",
  //     location: "The Lypps Estate",
  //     tags: ["estate", "heirloom"],
  //     image: "./images/croquet.jpg",
  //     duration: "1-2 Hours",
  //     short: "A classic lawn game played beneath the Carolina sky.",
  //     description:
  //       "An afternoon of friendly competition and laughter on the estate grounds, embracing one of the great traditions of garden gatherings.",
  //     details: [
  //       "Croquet",
  //       "Garden Lawn",
  //       "Friendly Competition",
  //       "Outdoor Fellowship"
  //     ]
  // },

  {
    id: 14,
    title: "The Bradbury Interlude",
    location: "The Bradbury Bistro",
    tags: ["town", "heirloom"],
    image: "./images/bradbury-bistro.png",
    duration: "1-2 Hours",
    short: "Coffee, pastries, conversation, and a slower pace.",
    description:
      "A charming visit to Bradbury Bistro for coffee, tea, pastries, and conversation in one of Anderson's most inviting gathering places.",
    details: [
      "Coffee",
      "Pastries",
      "Conversation",
      "Downtown Charm"
    ]
  },

  {
    id: 15,
    title: "The Scot-Irish Supper",
    location: "McGee's Scot-Irish Pub",
    tags: ["town", "fellowship"],
    image: "./images/mcgees-pub.webp",
    duration: "1-2 Hours",
    short: "A hearty meal, good company, and a touch of Celtic tradition.",
    description:
      "An evening spent enjoying classic pub fare, conversation, and the warm atmosphere of one of Anderson's most beloved gathering places.",
    details: [
      "Pub Fare",
      "Conversation",
      "Local Tradition",
      "Evening Out"
    ]
  },

  {
    id: 16,
    title: "Above the Electric City",
    location: "UP on the Roof",
    tags: ["town", "heirloom"],
    image: "./images/up-on-the-roof.webp",
    duration: "1-2 Hours",
    short: "Panoramic views, fresh air, and a beautiful Anderson afternoon.",
    description:
      "A visit to Anderson's rooftop destination to enjoy sweeping views of the city, conversation, and a memorable perspective of the Electric City.",
    details: [
      "Rooftop Views",
      "City Skyline",
      "Conversation",
      "Beautiful Weather"
    ]
  },

  {
    id: 17,
    title: "The Smokehouse Supper",
    location: "Fork Grove BBQ",
    tags: ["town", "fellowship"],
    image: "./images/fork-grove-bbq.webp",
    duration: "1-2 Hours",
    short: "Slow-smoked barbecue, Southern hospitality, and good conversation.",
    description:
      "An evening devoted to Carolina barbecue, comfort food, and fellowship around the table at one of the area's local favorites.",
    details: [
      "Barbecue",
      "Southern Cuisine",
      "Conversation",
      "Fellowship"
    ]
  },

  {
    id: 18,
    title: "The Cantina Gathering",
    location: "El Arriero Downtown",
    tags: ["town", "fellowship"],
    image: "./images/el-arriero.webp",
    duration: "1-2 Hours",
    short: "Authentic Mexican food, vibrant flavors, and shared laughter.",
    description:
      "A festive meal featuring classic Mexican cuisine, refreshing drinks, and an evening of conversation in the heart of downtown Anderson.",
    details: [
      "Mexican Cuisine",
      "Downtown Dining",
      "Conversation",
      "Celebration"
    ]
  },

  // {
  //   id: 19,
  //   title: "The Culinary Tour of Anderson",
  //   location: "Anderson County",
  //   tags: ["town", "heirloom"],
  //   image: "./images/anderson-dining.jpg",
  //   duration: "Flexible",
  //   short: "A collection of the area's finest dining destinations.",
  //   description:
  //     "An opportunity to visit some of Anderson's most beloved restaurants, including Sullivan's Metropolitan Grill, The Barnwood Grill & Market, Raines on Main, Mr. Rivers Breakfast Joint, and Maki Sushi Bar & Bistro.",
  //   details: [
  //     "Fine Dining",
  //     "Local Favorites",
  //     "Culinary Exploration",
  //     "Shared Meals"
  //   ]
  // },

  {
    id: 20,
    title: "The Metropolitan Supper",
    location: "Sullivan's Metropolitan Grill",
    tags: ["town", "fellowship"],
    image: "./images/sullivans.webp",
    duration: "1-2 Hours",
    short: "An elegant evening of fine dining and conversation.",
    description:
      "A refined dinner experience featuring exceptional cuisine, warm hospitality, and an atmosphere suited to meaningful conversation.",
    details: [
      "Fine Dining",
      "Elegant Atmosphere",
      "Conversation",
      "Evening Out"
    ]
  },

  {
    id: 21,
    title: "The Barnwood Feast",
    location: "The Barnwood Grill & Market",
    tags: ["town", "fellowship"],
    image: "./images/barnwood.webp",
    duration: "1-2 Hours",
    short: "Southern comfort food served in a welcoming setting.",
    description:
      "A relaxed meal featuring hearty Southern favorites, local flavors, and good company.",
    details: [
      "Southern Cuisine",
      "Comfort Food",
      "Local Favorite",
      "Conversation"
    ]
  },

  {
    id: 22,
    title: "An Evening on Main",
    location: "Raines on Main",
    tags: ["town", "fellowship"],
    image: "./images/raines-on-main.webp",
    duration: "1-2 Hours",
    short: "A sophisticated downtown dining experience.",
    description:
      "An evening spent enjoying thoughtfully prepared dishes, beautiful surroundings, and unhurried conversation.",
    details: [
      "Downtown Dining",
      "Fine Cuisine",
      "Conversation",
      "Evening Fellowship"
    ]
  },

  {
    id: 23,
    title: "The Breakfast Society",
    location: "Mr. Rivers Breakfast Joint",
    tags: ["town", "fellowship"],
    image: "./images/mr-rivers.webp",
    duration: "1 Hour",
    short: "A hearty breakfast and a wonderful start to the day.",
    description:
      "A morning gathering centered around breakfast classics, coffee, and cheerful conversation.",
    details: [
      "Breakfast",
      "Coffee",
      "Morning Fellowship",
      "Local Favorite"
    ]
  },

  {
    id: 24,
    title: "The Sushi Excursion",
    location: "Maki Sushi Bar & Bistro",
    tags: ["town", "fellowship"],
    image: "./images/maki-sushi.webp",
    duration: "1-2 Hours",
    short: "Fresh sushi, shared plates, and an evening together.",
    description:
      "A dining experience featuring handcrafted sushi, unique flavors, and relaxed conversation.",
    details: [
      "Sushi",
      "Shared Plates",
      "Conversation",
      "Evening Out"
    ]
  },

  // {
  //   id: 25,
  //   title: "The Rooftop Sunset",
  //   location: "UP on the Roof",
  //   tags: ["town", "heirloom"],
  //   image: "./images/up-on-the-roof.jpg",
  //   duration: "1-2 Hours",
  //   short: "A beautiful view of Anderson as the sun sets over the city.",
  //   description:
  //     "An evening spent overlooking the Electric City from above, enjoying the scenery, conversation, and a memorable sunset.",
  //   details: [
  //     "Rooftop Views",
  //     "Sunset",
  //     "Conversation",
  //     "City Skyline"
  //   ]
  // },

  {
    id: 26,
    title: "The Sweet Tooth Society",
    location: "Figs Cafe & Farmacy",
    tags: ["town", "fellowship"],
    image: "./images/ice-cream.webp",
    duration: "30-60 Minutes",
    short: "Ice cream, laughter, and a simple shared pleasure.",
    description:
      "A quick outing for a sweet treat, conversation, and a pleasant stroll together.",
    details: [
      "Ice Cream",
      "Sweet Treats",
      "Conversation",
      "Stroll"
    ]
  },

  {
    id: 29,
    title: "The Music & Merriment Society",
    location: "The Lypps Estate",
    tags: ["estate", "fellowship"],
    image: "./images/music-game-night.jpg",
    duration: "2-4 Hours",
    short: "Music, laughter, friendly competition, and an evening together.",
    description:
      "An evening devoted to music-themed games, conversation, snacks, and laughter as everyone gathers for a night of entertainment and fellowship.",
    details: [
      "Music Games",
      "Friendly Competition",
      "Conversation",
      "Laughter"
    ]
  },

  {
    id: 30,
    title: "The Veranda Retreat",
    location: "The Lypps Estate",
    tags: ["estate", "fellowship", "heirloom"],
    image: "./images/veranda-couch.webp",
    duration: "1-3 Hours",
    short: "A quiet evening on the upper patio enjoying the view and each other's company.",
    description:
      "A peaceful gathering on the second-floor veranda, relaxing on the couch, enjoying the fresh air, and spending unhurried time together.",
    details: [
      "Upper Veranda",
      "Fresh Air",
      "Conversation",
      "Relaxation"
    ]
  },

  {
    id: 31,
    title: "An Introduction to Fuji-San",
    location: "The Lypps Estate",
    tags: ["estate", "heirloom"],
    image: "./images/fuji-san.jpg",
    duration: "30-60 Minutes",
    short: "A memorable first meeting between Zion and the estate's most distinguished resident.",
    description:
      "A special introduction as Zion meets Fuji-San, the estate's beloved sulcata tortoise, creating a unique memory and perhaps the beginning of a lifelong friendship.",
    details: [
      "Fuji-San",
      "Zion",
      "Estate Tradition",
      "Photo Opportunity"
    ]
  },

  {
    id: 32,
    title: "The Vintner's Hour",
    location: "The Lypps Estate",
    tags: ["estate", "fellowship"],
    image: "./images/wine-night.webp",
    duration: "1-3 Hours",
    short: "Wine, conversation, and a slow Southern evening.",
    description:
      "A relaxed gathering centered around good wine, meaningful conversation, and enjoying the comfort of the estate together.",
    details: [
      "Wine",
      "Conversation",
      "Relaxation",
      "Fellowship"
    ]
  },

  {
    id: 33,
    title: "The Feline Drawing Room",
    location: "The Lypps Estate",
    tags: ["estate", "heirloom"],
    image: "./images/cat-room.webp",
    duration: "1-2 Hours",
    short: "An afternoon surrounded by cats, laughter, and family.",
    description:
      "A gathering in the cat room where Zion can meet the estate's feline residents, play, explore, and enjoy a room full of curious whiskers and personalities.",
    details: [
      "Estate Cats",
      "Zion",
      "Playtime",
      "Photo Opportunities"
    ]
  },

  {
    id: 34,
    title: "The Grand Tour of Anderson",
    location: "Anderson County",
    tags: ["town", "heirloom"],
    image: "./images/anderson-drive.jpg",
    duration: "1-2 Hours",
    short: "A scenic drive showcasing the charm of Anderson.",
    description:
      "A leisurely drive through Anderson's historic districts, downtown streets, notable landmarks, and favorite local spots, offering a proper introduction to the Electric City.",
    details: [
      "Scenic Drive",
      "Historic Districts",
      "Local Landmarks",
      "Electric City"
    ]
  },

  {
    id: 35,
    title: "The Estate Picnic",
    location: "The Lypps Estate",
    tags: ["estate", "heirloom"],
    image: "./images/estate-picnic.jpg",
    duration: "1-3 Hours",
    short: "A picnic beneath the Carolina sky.",
    description:
      "A relaxing afternoon picnic on the estate grounds with blankets, snacks, conversation, and plenty of time to simply enjoy the day together.",
    details: [
      "Picnic",
      "Fresh Air",
      "Conversation",
      "Relaxation"
    ]
  },

  {
    id: 36,
    title: "The Hartwell Excursion",
    location: "Lake Hartwell",
    tags: ["town", "heirloom"],
    image: "./images/lake-hartwell.jpg",
    duration: "1-3 Hours",
    short: "A peaceful visit to one of the Upstate's most beautiful lakes.",
    description:
      "A leisurely outing to Lake Hartwell to enjoy the scenery, fresh air, and waterfront views.",
    details: [
      "Lake Views",
      "Scenic Drive",
      "Relaxation",
      "Photography"
    ]
  },

  {
    id: 37,
    title: "The Bubble Garden",
    location: "The Lypps Estate",
    tags: ["estate", "heirloom"],
    image: "./images/bubbles.webp",
    duration: "30-60 Minutes",
    short: "Bubbles, laughter, and simple childhood joy.",
    description:
      "An afternoon of blowing bubbles indoors or outdoors as Zion chases, pops, and enjoys a little bit of magic.",
    details: [
      "Bubbles",
      "Zion",
      "Laughter",
      "Photos"
    ]
  },

  {
    id: 38,
    title: "The Little Artist's Studio",
    location: "The Lypps Estate",
    tags: ["estate", "heirloom"],
    image: "./images/little-artist.avif",
    duration: "30-60 Minutes",
    short: "Paint, color, create, and make a mess of memories.",
    description:
      "An afternoon of creativity where Zion can color, paint, draw, and create keepsakes worthy of display throughout the estate.",
    details: [
      "Arts & Crafts",
      "Creativity",
      "Keepsakes",
      "Zion"
    ]
  },

  {
    id: 39,
    title: "The Little Ballroom",
    location: "The Lypps Estate",
    tags: ["estate", "heirloom"],
    image: "./images/dance-party.jpeg",
    duration: "30-60 Minutes",
    short: "Music, dancing, laughter, and tiny feet in motion.",
    description:
      "A cheerful gathering filled with music and dancing as Zion twirls, wiggles, and enjoys a grand estate dance party.",
    details: [
      "Music",
      "Dancing",
      "Laughter",
      "Zion"
    ]
  },

  {
    id: 40,
    title: "The Storybook Society",
    location: "The Lypps Estate",
    tags: ["estate", "heirloom"],
    image: "./images/storybook.jpg",
    duration: "30-60 Minutes",
    short: "Stories, imagination, and quiet moments together.",
    description:
      "A cozy reading hour spent exploring favorite stories, turning pages, and sharing adventures from faraway lands.",
    details: [
      "Storybooks",
      "Imagination",
      "Reading",
      "Togetherness"
    ]
  },

  {
    id: 41,
    title: "The Pajama Society",
    location: "The Lypps Estate",
    tags: ["estate", "fellowship"],
    image: "./images/pajama-day.webp",
    duration: "All Day",
    short: "Pajamas, snacks, films, and absolutely no obligations.",
    description:
      "A day dedicated to comfort, featuring pajamas, favorite snacks, movies, blankets, and the freedom to enjoy the estate at the slowest possible pace.",
    details: [
      "Pajamas",
      "Snacks",
      "Films",
      "Relaxation"
    ]
},

{
    id: 42,
    title: "The Morning Coffee Club",
    location: "The Lypps Estate",
    tags: ["estate", "fellowship"],
    image: "./images/morning-coffee.jpg",
    duration: "1-2 Hours",
    short: "Coffee, conversation, and nowhere to be.",
    description:
      "A slow Southern morning spent enjoying coffee, sharing stories, and watching the day begin without any schedule to follow.",
    details: [
      "Coffee",
      "Conversation",
      "Slow Morning",
      "Comfort"
    ]
},

{
    id: 43,
    title: "The Porch Swing Fellowship",
    location: "The Lypps Estate",
    tags: ["estate", "fellowship", "heirloom"],
    image: "./images/porch-swing.avif",
    duration: "1-3 Hours",
    short: "Fresh air, gentle conversation, and a slower pace of life.",
    description:
      "An afternoon spent on the porch swing enjoying the breeze, reflecting on old memories, and sharing unhurried conversation.",
    details: [
      "Porch Swing",
      "Fresh Air",
      "Conversation",
      "Relaxation"
    ]
},

{
    id: 44,
    title: "The Photo Album Society",
    location: "The Lypps Estate",
    tags: ["estate", "heirloom"],
    image: "./images/photo-album.jpg",
    duration: "1-2 Hours",
    short: "Old photographs, treasured memories, and stories worth retelling.",
    description:
      "A leisurely gathering spent looking through photographs, revisiting favorite memories, and sharing stories from years gone by.",
    details: [
      "Photographs",
      "Memories",
      "Storytelling",
      "Togetherness"
    ]
}

];

const DEV_IPS = [
  "24.197.139.5", "172.59.217.234"
];

const filtersToggle =
  document.querySelector(".filters__toggle");

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
      : experiences.filter(item =>
        item.tags.includes(activeFilter)
      );

  grid.innerHTML = filtered
    .map(item => {
      const isComplete = false;

      return `
                <article class="experience-card ${isComplete ? "complete" : ""}" data-id="${item.id}">
                    <div 
                        class="experience-card__image" 
                        style="background-image: url('${item.image}')">
                    </div>

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
                    
                        <div class="experience-card__status">
                            ✦ ${item.duration}
                        </div>
                    
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

      document.querySelector(".experiences").scrollIntoView({
          behavior: "smooth",
          block: "start"
      });
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
        <div class="experience-modal__meta-row">
            <p class="experience-modal__meta"></p>
        </div>
        <h2 class="experience-modal__title"></h2>
        <p class="experience-modal__description"></p>

        <div class="experience-modal__details"></div>
        
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  initModalSwipeClose();

  modal.querySelector(".experience-modal__close").addEventListener("click", closeModal);
  modal.querySelector(".experience-modal__backdrop").addEventListener("click", closeModal);

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

    const delta = Math.min(0, currentY - startY);

    panel.style.transform = `translateY(${delta}px)`;

  }, { passive: true });

  panel.addEventListener("touchend", () => {

    const delta = startY - currentY;

    if (delta > 120) {
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
