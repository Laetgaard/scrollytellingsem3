const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const scrollHint = document.getElementById("scroll-hint");

const title1 = document.getElementById("title1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const section4 = document.getElementById("section4");
const endTitle = document.getElementById("endTitle");
const slideImg = document.querySelector(".slideImg");

const overlays = [title1, section2, section3, section4, endTitle];

const v1Duration = 100; // 1:40 min
const v2Duration = 35;
const startOffset = 4; // Videoen skal starte ved 4 sekunder
const endOffset = 95; // Videoen skal stoppe ved 1:25 min (85 sekunder)

// Sæt videoen til 4 sekunder med det samme siden åbner
video1.currentTime = startOffset;

function handleScroll() {
    const scrollTop = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / maxScroll;

    // Skjul "Scroll ned" når man har scrollet lidt
    if (scrollTop > 50) {
        scrollHint.style.display = "none";
    } else {
        scrollHint.style.display = "block";
    }

    let currentVideoTime = 0;

    // Nulstil overlays
    overlays.forEach(el => el.classList.remove("show"));
    if (slideImg) slideImg.classList.remove("slide");

    if (scrollPercent < 0.7) {
        video1.style.display = "block";
        video2.style.display = "none";

        // Beregn tid: start ved 4 sek, slut ved v1Duration
        currentVideoTime = startOffset + (scrollPercent / 0.7) * (v1Duration - startOffset);
        video1.currentTime = currentVideoTime;

        // Vis sektioner
        if (currentVideoTime >= 0 && currentVideoTime <= 11) {
            title1.classList.add("show"); // Denne vil være synlig fra start (da 4s er < 11s)
        }
        else if (currentVideoTime >= 22 && currentVideoTime <= 35) {
            section2.classList.add("show");
        }
        else if (currentVideoTime >= 45 && currentVideoTime <= 58) {
            section3.classList.add("show");
            if (slideImg) slideImg.classList.add("slide");
        }
        else if (currentVideoTime >= 67 && currentVideoTime <= 85) {
            section4.classList.add("show");
        }

    } else {
        video1.style.display = "none";
        video2.style.display = "block";

        currentVideoTime = ((scrollPercent - 0.7) / 0.3) * v2Duration;
        video2.currentTime = currentVideoTime;

        if (currentVideoTime >= 5 && currentVideoTime <= 20) {
            endTitle.classList.add("show");
        }
    }
}

// Kør funktionen med det samme for at vise title1 og sætte videoen korrekt
window.addEventListener("scroll", handleScroll);
handleScroll();