
let container = document.querySelector(".container");
for (let i = 1 ; i <= 100 ; i++){
    let button= document.createElement("button")

button.textContent = " i am button" + i;
container.append(button);
};