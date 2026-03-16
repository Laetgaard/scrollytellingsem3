const video1 = document.getElementById("video1")
const video2 = document.getElementById("video2")

const title1 = document.getElementById("title1")
const section2 = document.getElementById("section2")
const section3 = document.getElementById("section3")
const section4 = document.getElementById("section4")
const endTitle = document.getElementById("endTitle")

const slideImg = document.querySelector(".slideImg")

let video1Duration = 0
let video2Duration = 0

/* WAIT UNTIL VIDEO METADATA IS LOADED */

video1.addEventListener("loadedmetadata",()=>{
    video1Duration = video1.duration
})

video2.addEventListener("loadedmetadata",()=>{
    video2Duration = video2.duration
})

/* SCROLL CONTROLS VIDEO */

window.addEventListener("scroll",()=>{

    const scrollTop = window.scrollY
    const maxScroll = document.body.scrollHeight - window.innerHeight
    const scrollPercent = scrollTop / maxScroll

    if(scrollPercent < 0.7){

        video1.style.display = "block"
        video2.style.display = "none"

        video1.currentTime = video1Duration * (scrollPercent / 0.7)

    }else{

        video1.style.display = "none"
        video2.style.display = "block"

        video2.currentTime = video2Duration * ((scrollPercent - 0.7) / 0.3)

    }

})

/* VIDEO 1 CONTENT */

video1.addEventListener("timeupdate",()=>{

    const t = video1.currentTime

    title1.classList.toggle("show", t >= 0 && t <= 11)

    section2.classList.toggle("show", t >= 22 && t <= 35)

    if(t >= 45 && t <= 58){
        section3.classList.add("show")
        if(slideImg) slideImg.classList.add("slide")
    }else{
        section3.classList.remove("show")
        if(slideImg) slideImg.classList.remove("slide")
    }

    section4.classList.toggle("show", t >= 67 && t <= 85)

})

/* VIDEO 2 CONTENT */

video2.addEventListener("timeupdate",()=>{

    const t = video2.currentTime

    endTitle.classList.toggle("show", t >= 15 && t <= 20)

})
console.log(video1.currentTime)