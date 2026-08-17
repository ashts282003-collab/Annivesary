// ==========================================
// CHAPTER THREE
// BECAUSE I CHOSE YOU ❤️
// ==========================================


// ==========================================
// PAGE LOAD
// ==========================================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

    const intro =
        document.querySelector(".chapter-intro");

    setTimeout(() => {

        intro.classList.add("show");

    }, 500);

});


// ==========================================
// LETTER REVEAL
// ==========================================

const letterLines =
    document.querySelectorAll(".letter-line");

const letterObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    letterObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


letterLines.forEach(line => {

    letterObserver.observe(line);

});


// ==========================================
// "THE ONE" ANIMATION
// ==========================================

const theOne =
    document.querySelector(".the-one");


if (theOne) {

    const theOneObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        theOneObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.25
            }

        );

    theOneObserver.observe(theOne);

}


// ==========================================
// MOON + STAR PARALLAX
// ==========================================

const moon =
    document.querySelector(".moon");

const stars =
    document.querySelector(".stars");

const stars2 =
    document.querySelector(".stars2");

const stars3 =
    document.querySelector(".stars3");


document.addEventListener("mousemove", (e) => {

    const x =
        e.clientX / window.innerWidth - 0.5;

    const y =
        e.clientY / window.innerHeight - 0.5;


    if (moon) {

        moon.style.transform =
            `translate(${x * 10}px, ${y * 10}px)`;

    }


    if (stars) {

        stars.style.transform =
            `translate(${x * 4}px, ${y * 4}px)`;

    }


    if (stars2) {

        stars2.style.transform =
            `translate(${x * 7}px, ${y * 7}px)`;

    }


    if (stars3) {

        stars3.style.transform =
            `translate(${x * 12}px, ${y * 12}px)`;

    }

});


// ==========================================
// PAGE TRANSITION
// ==========================================

const links =
    document.querySelectorAll("a");


links.forEach(link => {

    link.addEventListener("click", function(e) {

        const destination =
            this.getAttribute("href");


        if (
            !destination ||
            destination.startsWith("#")
        ) {

            return;

        }


        e.preventDefault();


        document.body.style.opacity = "0";


        setTimeout(() => {

            window.location.href =
                destination;

        }, 800);

    });

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
