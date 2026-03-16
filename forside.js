const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");

const title1 = document.getElementById("title1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const section4 = document.getElementById("section4");
const endTitle = document.getElementById("endTitle");
const slideImg = document.querySelector(".slideImg");

const overlays = [title1, section2, section3, section4, endTitle];

// Varigheder i sekunder
const v1Duration = 100; // 1:40
const v2Duration = 35;

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / maxScroll;

    let currentVideoTime = 0;

    // Nulstil alle overlays før vi tjekker på ny
    overlays.forEach(el => el.classList.remove("show"));
    if (slideImg) slideImg.classList.remove("slide");

    if (scrollPercent < 0.7) {
        // --- VIDEO 1 LOGIK (0% - 70% af scroll) ---
        video1.style.display = "block";
        video2.style.display = "none";

        currentVideoTime = (scrollPercent / 0.7) * v1Duration;
        video1.currentTime = currentVideoTime;

        // Vis sektioner baseret på Video 1 tid
        if (currentVideoTime >= 0 && currentVideoTime <= 11) {
            title1.classList.add("show");
        }
        else if (currentVideoTime >= 22 && currentVideoTime <= 35) {
            section2.classList.add("show");
        }
        else if (currentVideoTime >= 45 && currentVideoTime <= 58) {
            section3.classList.add("show");
            if (slideImg) slideImg.classList.add("slide");
        }
        else if (currentVideoTime >= 67 && currentVideoTime <= 85) { // 1:07 - 1:25
            section4.classList.add("show");
        }

    } else {
        // --- VIDEO 2 LOGIK (70% - 100% af scroll) ---
        video1.style.display = "none";
        video2.style.display = "block";

        currentVideoTime = ((scrollPercent - 0.7) / 0.3) * v2Duration;
        video2.currentTime = currentVideoTime;

        // Vis slut-titel for Video 2 (f.eks. mellem 5 og 15 sekunder inde i video 2)
        if (currentVideoTime >= 5 && currentVideoTime <= 20) {
            endTitle.classList.add("show");
        }
    }
});