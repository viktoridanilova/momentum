const burgerMenu = document.querySelector('.menu-icon__mobile');
const overlay = document.querySelector('.header__nav__mobile');
const links = document.querySelector('.header-nav__list__mobile');
overlay.style.zIndex = -1;
overlay.style.right = "-200px"
burgerMenu.addEventListener('click',function(){
    burgerMenu.classList.toggle("close");
   
    if (burgerMenu.classList.contains("close")) {
        showMenu()
    } else {
        hideMenu()
    }
});

window.addEventListener("click", (event) => {
    if (!burgerMenu.contains(event.target) && !overlay.contains(event.target)) {
        hideMenu()
    }
})

links.addEventListener("click", () => hideMenu())

function hideMenu() {
    burgerMenu.classList.remove("close")
    overlay.style.zIndex = -1;
    overlay.style.right = "-200px"
    overlay.classList.remove("overlay");
    burgerMenu.style.position = "relative";
    burgerMenu.style.top = "-18px";
}

function showMenu() {
    overlay.classList.add("overlay");
    overlay.style.zIndex = 1
    overlay.style.right = "0px"
    burgerMenu.style.position = "absolute";
    burgerMenu.style.top = "7px"
}

console.log("1.Вёрстка соответствует макету\n2.Не появляется горизонтальная полоса прокрутки, контент страницы при этом сохраняется\n3.Реализовано адаптивное меню\nОценка за выполненные пункты 85 баллов")
