const preloader =document.querySelector(".preloader")
const video =document.querySelector(".videoContainer")
const switchBtn = document.querySelector(".switch-btn")
const switchColor = document.querySelector(".switch")


window.addEventListener("load", ()=>{
    preloader.classList.add("hidePreloader")
})

console.log( switchBtn.classList)
console.log( switchBtn.classList)
switchBtn.addEventListener("click", ()=>{
    if(!switchColor.classList.contains("change")){
        switchColor.classList.add("change")
        video.pause();
    }
    else{
        switchColor.classList.remove("change")
        video.play();
    }
})

