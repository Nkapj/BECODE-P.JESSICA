const ham = document.querySelector(".hamburger");

const slide = document.querySelector(".slide-menu");

ham.addEventListener("click",(e) => {
    e.stopPropagation();
    if (slide.style.left === "0px"){
        slide.style.left = "-100%"; // cache le menu endehors de l'ecran

    }else {
        slide.style.left ="0";
    }
});

document.addEventListener("click",(e) => {
    if (slide.style.left === "0px" && !slide.contains(e.target) && e.target !== ham) {
        slide.style.left = "-100%";
    }
});

