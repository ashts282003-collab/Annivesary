// ===============================================
// CHAPTER ONE
// Cinematic Intro + Shooting Stars
// ===============================================

const introTexts = document.querySelectorAll(".intro-text");
const introSequence = document.querySelector(".intro-sequence");
const hero = document.querySelector(".hero-main");
const heroSection = document.querySelector(".hero");
const heroImageWrapper = document.querySelector(".hero-image-wrapper");
const heroImage = document.querySelector(".hero-image");
const moon=document.querySelector(".moon");
const stars = document.querySelector(".stars");
const stars2 = document.querySelector(".stars2");
const stars3 = document.querySelector(".stars3");


// Hide hero at startup
hero.style.display = "none";

let current = 0;

// Duration for each sentence (milliseconds)
const timings = [
    2500, // I don't remember...
    2600, // how our story began.
    2200, // But somewhere...
    2600, // between all the conversations...
    2000, // the laughs...
    2200, // the prayers...
    2500, // and the distance...
    2800  // you quietly became...
];

// ===============================================
// Intro Animation
// ===============================================

function showSentence() {

    // Hide every sentence
    introTexts.forEach(text => {
        text.classList.remove("active");
    });

    // Show current sentence
    if (current < introTexts.length) {

        introTexts[current].classList.add("active");

        const duration = timings[current] || 2500;

        current++;

        setTimeout(showSentence, duration);

    } else {

        // Fade intro away
        introSequence.style.opacity = "0";

        setTimeout(() => {

            introSequence.style.display = "none";

            hero.style.display = "flex";

            requestAnimationFrame(() => {

                hero.classList.add("show");

                // Start shooting stars AFTER hero appears
                createFireflies();
                startShootingStars();

            });

        }, 1500);

    }

}

// ===============================================
// Shooting Stars
// ===============================================

function createShootingStar() {

    const star = document.createElement("div");
    star.className = "shooting-star";

    // Start somewhere in the top 40% of the screen
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * (window.innerHeight * 0.4);

    star.style.left = startX + "px";
    star.style.top = startY + "px";

    // Random length
    star.style.width = (80 + Math.random() * 120) + "px";

    // Random animation speed
    const duration = 0.8 + Math.random() * 0.8;
    star.style.animationDuration = duration + "s";

    // Random angle
    const angle = -20 - Math.random() * 30;
    star.style.setProperty("--angle", angle + "deg");

    heroSection.appendChild(star);

    star.addEventListener("animationend", () => {
        star.remove();
    });
}

function startShootingStars() {

    createShootingStar();

    const delay = 3000 + Math.random() * 5000;

    setTimeout(startShootingStars, delay);
}

// ===============================================
// Fireflies
// ===============================================


function createFireflies() {

    const wrapperWidth = heroImageWrapper.offsetWidth;
    const wrapperHeight = heroImageWrapper.offsetHeight;

    for (let i = 0; i < 20; i++) {

        const firefly = document.createElement("div");

        firefly.className = "firefly";

        // Random position around the image
        const angle = Math.random() * Math.PI * 2;
        const radius = 40 + Math.random() * 60;

        const x = wrapperWidth / 2 + Math.cos(angle) * radius;
        const y = wrapperHeight / 2 + Math.sin(angle) * radius;

        firefly.style.left = x + "px";
        firefly.style.top = y + "px";

        firefly.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        firefly.style.animationDelay =
            (Math.random() * 5) + "s";

        heroImageWrapper.appendChild(firefly);
    }
}


// ===============================================
// Mouse Parallax
// ===============================================


document.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth - 0.5);
    const y = (e.clientY / window.innerHeight - 0.5);

    // Moon
    moon.style.transform =
        `translate(${x * 10}px, ${y * 10}px)`;

    // Hero Image
    heroImageWrapper.style.transform =
        `translate(${x * 15}px, ${y * 15}px)`;

    // Stars
    stars.style.transform =
        `translate(${x * 5}px, ${y * 5}px)`;

    stars2.style.transform =
        `translate(${x * 8}px, ${y * 8}px)`;

    stars3.style.transform =
        `translate(${x * 12}px, ${y * 12}px)`;

});



// ===============================================
// Start Website
// ===============================================

window.addEventListener("load", () => {
    setTimeout(showSentence, 1000);
    
});

// ==========================================
// BACKGROUND MUSIC
// ==========================================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

if (music && musicBtn) {

    const savedTime = localStorage.getItem("loveStoryMusicTime");

    if (savedTime) {
        music.addEventListener("loadedmetadata", () => {
            music.currentTime = Number(savedTime);
        }, { once: true });
    }

    musicBtn.addEventListener("click", async () => {
        try {
            if (music.paused) {
                await music.play();
                musicBtn.textContent = "❚❚ Pause Our Song";
                musicBtn.classList.add("playing");
            } else {
                music.pause();
                musicBtn.textContent = "♪ Play Our Song";
                musicBtn.classList.remove("playing");
            }
        } catch (error) {
            console.log("Music could not be played:", error);
        }
    });

    music.addEventListener("timeupdate", () => {
        localStorage.setItem(
            "loveStoryMusicTime",
            music.currentTime.toString()
        );
    });

    music.addEventListener("ended", () => {
        musicBtn.textContent = "♪ Play Our Song";
        musicBtn.classList.remove("playing");
    });
}