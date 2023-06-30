// service__animation

let serviceCards = document.querySelector(".service__cards")
let service = document.querySelector(".service")

window.addEventListener("scroll", () => {
        fadeRight(serviceCards, 2)
        fadeRight(service, 2)
})

function fadeRight(section) {
    let fadeRight = section.querySelectorAll(".fade-right")

    for (let i = 0; i < fadeRight.length; i++) {

        const speed = fadeRight[i].getAttribute("data-speed")

        fadeRight[i].style.transition = speed + "ms"

        if (this.scrollY >= section.offsetTop / 2.3) {
            fadeRight[i].classList.add("active")
        } else {
            fadeRight[i].classList.remove("active")
        }
    }
}

// service__animation

// client__animation

let clientImg = document.querySelector(".client__img")

window.addEventListener("scroll", () => {
    
    if (this.scrollY >= clientImg.offsetHeight * 7.6) {
        clientImg.classList.add("active2")
    }else{
        clientImg.classList.remove("active2")
    }
})

// client__animation

// illustration

let illustration = document.querySelector(".illustration")

window.addEventListener("scroll", () => {
    
    if (this.scrollY >= illustration.offsetHeight * 13.8) {
        illustration.classList.add("active3")
    }else{
        illustration.classList.remove("active3")
    }
})

// illustration

// design

let designImg = document.querySelector(".design__img")

window.addEventListener("scroll", () => {
    
    if (this.scrollY >= designImg.offsetHeight * 2.3) {
        designImg.classList.add("active3")
    }else{
        designImg.classList.remove("active3")
    }
})


// design

// teamwork

let teamworkImg = document.querySelector(".teamwork__img")

window.addEventListener("scroll", () => {
    
    if (this.scrollY >= teamworkImg.offsetHeight * 3.2) {
        teamworkImg.classList.add("active3")
    }else{
        teamworkImg.classList.remove("active3")
    }
})

// teamwork

// menu

let headerMenu = document.querySelector(".header__menu")
let headerMenuLine = document.querySelector(".header__menu-line")
let headerBurger = document.querySelector(".header__burger")

headerMenu.addEventListener("click", function(){
    headerMenuLine.classList.toggle("active")
    headerBurger.classList.toggle("active")
})

// menu