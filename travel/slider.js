const sliderContanier = document.querySelector(".destinations-slider__items");
const slides = document.querySelectorAll(".destinations-slider__item");
const next = document.querySelector(".arrow__rigth");
const prev = document.querySelector(".arrow__left");

const sliderContanierMobile = document.querySelector(".destinations-slider__item__mobile");
const slidesMobile = document.querySelectorAll(".destinations-slider__element");
const nextMobile = document.querySelector('.arrow-img__right');
const prevMobile = document.querySelector('.arrow-img__left');
const sliderNav = document.querySelectorAll(".destinations__slider");
const sliderNavMobile = document.querySelectorAll(".destinations__slider__mobile")
let currentSlide = 1;
let currenSlideMobile = 0;

next.addEventListener("click", () => moveSlides("next"));
prev.addEventListener("click", () => moveSlides("prev"));




function moveSlides(direction) {
    const slideWidth = slides[1].clientWidth;
    const transformX = /\.*translateX\((.*)px\)/i.exec(sliderContanier.style.transform)
    
    let currentTransform = transformX ? transformX[1] : 0;
    
    if (direction === "next" && Number(currentTransform - slideWidth) >= -860) {
       
        sliderContanier.style.transform = `translateX(${Number(currentTransform) - slideWidth}px)`;
        sliderNav[currentSlide].classList.remove("active");
        currentSlide++
        sliderNav[currentSlide].classList.add("active");
        
        
    }

    if (direction === "prev" && Number(currentTransform + slideWidth) <= 860) {
        
        sliderContanier.style.transform = `translateX(${slideWidth + Number(currentTransform)}px)`
        sliderNav[currentSlide].classList.remove("active");
        currentSlide--;
        sliderNav[currentSlide].classList.add("active");
    }
};


function slideChange(event) {

    if (Number(event.target.getAttribute("slide-id")) === 0) {
        setSliderProperty(0, 860);
    }
    if (Number(event.target.getAttribute("slide-id")) === 1) {
        setSliderProperty(1, 0);
    }
    if (Number(event.target.getAttribute("slide-id")) === 2) {
        setSliderProperty(2, -860);
    }
}

function setSliderProperty(slidePosition, translateX) {
    sliderNav[currentSlide].classList.remove("active");
    currentSlide = slidePosition;
    sliderNav[currentSlide].classList.add("active");
    sliderContanier.style.transform = `translateX(${translateX}px)`
}

nextMobile.addEventListener("click", () => moveSlidesMobile("next"));
prevMobile.addEventListener("click", () => moveSlidesMobile("prev"));



function moveSlidesMobile(side) {

    const slideWidthMobile = slidesMobile[currenSlideMobile].clientWidth + 30;
    const transformX = /\.*translateX\((.*)px\)/i.exec(sliderContanierMobile.style.transform)
    let currentTransformMobile = transformX ? transformX[1] : 0;
    if (side === "next" && currenSlideMobile < 2) {
        
        sliderContanierMobile.style.transform = `translateX(${Number(currentTransformMobile) - slideWidthMobile}px)`;
        currentTransformMobile -= slideWidthMobile;
        sliderNavMobile[currenSlideMobile].classList.remove("active");
        currenSlideMobile++
        sliderNavMobile[currenSlideMobile].classList.add("active");
        prevMobile.style.opacity = "100%";
        if (currenSlideMobile === 2 ) nextMobile.style.opacity = "50%"
 
       
    }

    if (side === "prev" && currenSlideMobile > 0) {
        sliderContanierMobile.style.transform = `translateX(${slideWidthMobile + Number(currentTransformMobile)}px)`
        currentTransformMobile += slideWidthMobile;
        sliderNavMobile[currenSlideMobile].classList.remove("active");
        currenSlideMobile--
        sliderNavMobile[currenSlideMobile].classList.add("active");
        nextMobile.style.opacity = "100%";
        if (currenSlideMobile === 0 ) prevMobile.style.opacity = "50%"
    }

}
