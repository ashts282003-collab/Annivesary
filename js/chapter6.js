// ===============================================
// CHAPTER 6
// OUR ANNIVERSARY FINALE 🎆
// ===============================================


// ===============================================
// SCROLL REVEAL
// ===============================================

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        revealObserver.observe(element);

    });


// ===============================================
// ANNIVERSARY COUNTDOWN
// ===============================================

// Anniversary date
// 20 August 2026

const anniversaryDate =
    new Date(
        "2026-08-20T00:00:00+05:30"
    ).getTime();


function updateCountdown() {

    let difference =
        anniversaryDate - Date.now();


    // Anniversary reached
    if (difference <= 0) {

        document.getElementById("d").textContent = "00";
        document.getElementById("h").textContent = "00";
        document.getElementById("m").textContent = "00";
        document.getElementById("s").textContent = "00";

        document.getElementById("note").textContent =
            "Happy Anniversary ❤️";

        return;

    }


    const DAY =
        1000 * 60 * 60 * 24;

    const HOUR =
        1000 * 60 * 60;

    const MINUTE =
        1000 * 60;


    // Days
    const days =
        Math.floor(
            difference / DAY
        );

    difference %= DAY;


    // Hours
    const hours =
        Math.floor(
            difference / HOUR
        );

    difference %= HOUR;


    // Minutes
    const minutes =
        Math.floor(
            difference / MINUTE
        );

    difference %= MINUTE;


    // Seconds
    const seconds =
        Math.floor(
            difference / 1000
        );


    document.getElementById("d").textContent =
        String(days).padStart(2, "0");


    document.getElementById("h").textContent =
        String(hours).padStart(2, "0");


    document.getElementById("m").textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("s").textContent =
        String(seconds).padStart(2, "0");

}


// Start countdown
updateCountdown();


// Update every second
setInterval(
    updateCountdown,
    1000
);


// ===============================================
// MUSIC
// ===============================================

const audio =
    document.getElementById("song");

const playButton =
    document.getElementById("play");

const musicToggle =
    document.getElementById("musicToggle");

const vinyl =
    document.getElementById("vinyl");


async function toggleMusic() {

    try {

        // -------------------------------
        // PLAY
        // -------------------------------

        if (audio.paused) {

            await audio.play();


            playButton.textContent =
                "❚❚ Pause our song";


            musicToggle.innerHTML =
                "❚❚ <span>Our Song</span>";


            vinyl.classList.add(
                "playing"
            );

        }

        // -------------------------------
        // PAUSE
        // -------------------------------

        else {

            audio.pause();


            playButton.textContent =
                "▶ Play our song";


            musicToggle.innerHTML =
                "♪ <span>Our Song</span>";


            vinyl.classList.remove(
                "playing"
            );

        }

    }

    catch (error) {

        console.log(
            "Music could not be played:",
            error
        );


        playButton.textContent =
            "Add our-song.mp3";

    }

}


// Music buttons
playButton.addEventListener(
    "click",
    toggleMusic
);


musicToggle.addEventListener(
    "click",
    toggleMusic
);


// ===============================================
// FLOATING HEARTS
// ===============================================

const hearts =
    document.getElementById(
        "hearts"
    );


function createHeart() {

    const heart =
        document.createElement(
            "span"
        );


    heart.classList.add(
        "heart"
    );


    const symbols = [
        "♥",
        "❤",
        "♡"
    ];


    heart.textContent =
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];


    // Random horizontal position
    heart.style.left =
        Math.random() * 100 + "%";


    // Random size
    heart.style.fontSize =
        12 +
        Math.random() * 22 +
        "px";


    // Random floating speed
    heart.style.animationDuration =
        5 +
        Math.random() * 5 +
        "s";


    hearts.appendChild(
        heart
    );


    // Remove after animation
    setTimeout(
        () => {

            heart.remove();

        },
        10000
    );

}


// Create hearts continuously
setInterval(
    createHeart,
    800
);