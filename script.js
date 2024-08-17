let navMenu = document.querySelector(".head");

const menuBars = document.querySelector(".menu-bars");
const menu= document.querySelector(".navigation-bar");

const menuBarsI = document.querySelector(".menu-bars i");

const navLink = document.querySelectorAll("li");

window.addEventListener("scroll", function() {
    if(window.scrollY > 600 ) {
        navMenu.classList.add('scrolled');
    } else {
        navMenu.classList.remove('scrolled');
    }
    menuBarsI.classList.remove("fa-times");
    menuBarsI.classList.add("fa-bars");
});


menuBars.addEventListener("click", () => {
    menuBars.classList.toggle("active");
    menu.classList.toggle("active"); 
});

menuBars.onclick = () => {
    menuBarsI.classList.toggle("fa-times");
 }
window.onscroll = () =>{
    menuBars.classList.remove("fa-times");
    menu.classList.remove("active");
}

navLink.addEventListener("click", () => {
    menuBars.classList.remove("active");
});