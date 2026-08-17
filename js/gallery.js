// ==============================
// Chapter Three
// ==============================

// Fade in memories

const memories = document.querySelectorAll(".memory");

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.35
});

memories.forEach(memory=>{

observer.observe(memory);

});

// Moon Parallax

const moon=document.querySelector(".moon");

const stars=document.querySelector(".stars");
const stars2=document.querySelector(".stars2");
const stars3=document.querySelector(".stars3");

document.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-.5);

const y=(e.clientY/window.innerHeight-.5);

moon.style.transform=
`translate(${x*10}px,${y*10}px)`;

stars.style.transform=
`translate(${x*4}px,${y*4}px)`;

stars2.style.transform=
`translate(${x*8}px,${y*8}px)`;

stars3.style.transform=
`translate(${x*12}px,${y*12}px)`;

});

// Fade in page

window.addEventListener("load",()=>{

document.body.style.opacity="1";

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
