const burgerMenu = document.querySelector('.menu-icon__mobile');
const overlay = document.querySelector('.header__nav__mobile');
overlay.style.zIndex = -1;
overlay.style.right = "-200px"
burgerMenu.addEventListener('click',function(){
    burgerMenu.classList.toggle("close");
   
    if (burgerMenu.classList.contains("close")) {
        overlay.classList.add("overlay");
        overlay.style.zIndex = 1
        overlay.style.right = "0px"
        burgerMenu.style.position = "absolute";
        burgerMenu.style.top = "7px"
    } else {
        overlay.style.zIndex = -1;
        overlay.style.right = "-200px"
        overlay.classList.remove("overlay");
        burgerMenu.style.position = "relative";
        burgerMenu.style.top = "-18px"
    }
});

window.addEventListener("click", (event) => {
    if (!burgerMenu.contains(event.target) && !overlay.contains(event.target)) {
        burgerMenu.classList.remove("close")
        overlay.style.zIndex = -1;
        overlay.style.right = "-200px"
        overlay.classList.remove("overlay");
        burgerMenu.style.position = "relative";
        burgerMenu.style.top = "-18px"
    }
})