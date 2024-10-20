const body = document.querySelector("body");
const button = document.querySelector("button");
const titre = document.querySelector("h1")

button.addEventListener("click", () => {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const rgb = `rgb(${r},${g},${b})`;


    body.style.backgroundColor = rgb;

    titre.textContent = rgb;

});

