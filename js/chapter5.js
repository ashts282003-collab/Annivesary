/* =====================================================
   CHAPTER 5
   THE FUTURE CAPSULE 💌
===================================================== */


/* =====================================================
   PAGE LOAD
===================================================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

    const opening =
        document.querySelector(".c5-opening");

    setTimeout(() => {

        opening.classList.add("c5-visible");

    }, 400);

});


/* =====================================================
   FIVE YEAR LOCK
===================================================== */

/*
    Relationship started:

    19 August 2025

    Five-year capsule opens:

    19 August 2030
*/

const capsuleUnlockDate =
    new Date(
        "2030-08-19T00:00:00"
    ).getTime();


const openButton =
    document.getElementById(
        "c5OpenButton"
    );


const capsule =
    document.getElementById(
        "c5Capsule"
    );


const opening =
    document.querySelector(
        ".c5-opening"
    );


const capsuleContent =
    document.getElementById(
        "c5CapsuleContent"
    );


const lockStatus =
    document.getElementById(
        "c5LockStatus"
    );


const hint =
    document.getElementById(
        "c5Hint"
    );


let capsuleUnlocked = false;
let capsuleOpened = false;


/* =====================================================
   CHECK LOCK
===================================================== */

function checkCapsuleLock() {

    const now =
        new Date().getTime();


    const remaining =
        capsuleUnlockDate - now;


    /*
        FIVE YEARS HAVE PASSED
    */

    if (remaining <= 0) {

        unlockCapsule();

        return;

    }


    /*
        STILL LOCKED
    */

    capsuleUnlocked = false;

    openButton.disabled = true;

    openButton.innerHTML =
        "🔒 Locked";

    hint.textContent =
        "Come back when we're five years older. ❤️";

}


/* =====================================================
   UNLOCK CAPSULE
===================================================== */

function unlockCapsule() {

    if (capsuleUnlocked) {
        return;
    }


    capsuleUnlocked = true;


    openButton.disabled = false;

    openButton.innerHTML =
        "💌 Open the Capsule";


    hint.textContent =
        "It's finally time. ❤️";


    lockStatus.classList.add(
        "c5-unlocked"
    );

}


/* =====================================================
   OPEN CAPSULE
===================================================== */

function openCapsule() {

    /*
        Extra security check.
        Even if someone manually triggers
        the function, it won't open early.
    */

    const now =
        new Date().getTime();


    if (
        now <
        capsuleUnlockDate
    ) {

        return;

    }


    if (capsuleOpened) {

        return;

    }


    capsuleOpened = true;


    opening.classList.add(
        "c5-opened"
    );


    setTimeout(() => {

        capsuleContent.classList.add(
            "c5-content-visible"
        );


        setTimeout(() => {

            capsuleContent.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 300);


    }, 1100);

}


openButton.addEventListener(
    "click",
    openCapsule
);


capsule.addEventListener(
    "click",
    () => {

        if (capsuleUnlocked) {

            openCapsule();

        }

    }
);


/* =====================================================
   COUNTDOWN
===================================================== */

const daysElement =
    document.getElementById(
        "c5Days"
    );


const hoursElement =
    document.getElementById(
        "c5Hours"
    );


const minutesElement =
    document.getElementById(
        "c5Minutes"
    );


const secondsElement =
    document.getElementById(
        "c5Seconds"
    );


function updateCountdown() {

    const now =
        new Date().getTime();


    const difference =
        capsuleUnlockDate - now;


    /*
        Capsule unlocked
    */

    if (difference <= 0) {

        daysElement.textContent = "0";

        hoursElement.textContent = "0";

        minutesElement.textContent = "0";

        secondsElement.textContent = "0";


        unlockCapsule();

        return;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (
                difference %
                (1000 * 60 * 60 * 24)
            )
            /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (
                difference %
                (1000 * 60 * 60)
            )
            /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (
                difference %
                (1000 * 60)
            )
            /
            1000
        );


    daysElement.textContent =
        days;


    hoursElement.textContent =
        String(hours)
        .padStart(2, "0");


    minutesElement.textContent =
        String(minutes)
        .padStart(2, "0");


    secondsElement.textContent =
        String(seconds)
        .padStart(2, "0");

}


updateCountdown();


setInterval(
    updateCountdown,
    1000
);


/* =====================================================
   SCROLL REVEALS
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".c5-reveal"
    );


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "c5-show"
                    );


                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(
        element
    );

});


/* =====================================================
   FLOATING PARTICLES
===================================================== */

const particleContainer =
    document.querySelector(
        ".c5-particles"
    );


function createParticle() {

    if (!particleContainer) {
        return;
    }


    const particle =
        document.createElement(
            "span"
        );


    particle.classList.add(
        "c5-particle"
    );


    particle.style.left =
        `${Math.random() * 100}%`;


    particle.style.top =
        `${50 + Math.random() * 45}%`;


    const size =
        2 + Math.random() * 2;


    particle.style.width =
        `${size}px`;


    particle.style.height =
        `${size}px`;


    particle.style.animationDuration =
        `${6 + Math.random() * 8}s`;


    particleContainer.appendChild(
        particle
    );


    setTimeout(() => {

        particle.remove();

    }, 14000);

}


setInterval(
    createParticle,
    900
);


/* =====================================================
   PARALLAX
===================================================== */

const moon =
    document.querySelector(
        ".c5-moon"
    );


const stars =
    document.querySelector(
        ".c5-stars"
    );


const stars2 =
    document.querySelector(
        ".c5-stars-2"
    );


const stars3 =
    document.querySelector(
        ".c5-stars-3"
    );


document.addEventListener(
    "mousemove",
    (event) => {

        const x =
            event.clientX /
            window.innerWidth -
            0.5;


        const y =
            event.clientY /
            window.innerHeight -
            0.5;


        if (moon) {

            moon.style.marginLeft =
                `${x * 10}px`;

            moon.style.marginTop =
                `${y * 10}px`;

        }


        if (stars) {

            stars.style.marginLeft =
                `${x * 4}px`;

            stars.style.marginTop =
                `${y * 4}px`;

        }


        if (stars2) {

            stars2.style.marginLeft =
                `${x * 7}px`;

            stars2.style.marginTop =
                `${y * 7}px`;

        }


        if (stars3) {

            stars3.style.marginLeft =
                `${x * 12}px`;

            stars3.style.marginTop =
                `${y * 12}px`;

        }

    }
);


/* =====================================================
   PAGE TRANSITION
===================================================== */

const nextButton =
    document.querySelector(
        ".c5-next-button"
    );


if (nextButton) {

    nextButton.addEventListener(
        "click",
        function(event) {

            const destination =
                this.getAttribute(
                    "href"
                );


            if (!destination) {
                return;
            }


            event.preventDefault();


            document.body.style.opacity =
                "0";


            setTimeout(() => {

                window.location.href =
                    destination;

            }, 800);

        }
    );

}
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