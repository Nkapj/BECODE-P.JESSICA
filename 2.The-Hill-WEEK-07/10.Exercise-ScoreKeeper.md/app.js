const score1 = document.querySelector(".score1 span");
const score2 = document.querySelector(".score2 span");

const button1 = document.querySelector(".jour1");
const button2 = document.querySelector(".jour2");
const resetbut = document.querySelector(".resetbut");

let tTScore1 = 0;
let tTScore2 = 0;

const totaljeu = 5;

score1.style.color='red'
score2.style.color='green'

button1.addEventListener("click",() => {
    tTScore1 +=1;
    score1.textContent = tTScore1;
    result();
    
});

button2.addEventListener("click",() => {
    tTScore2 +=1;
    score2.textContent = tTScore2;
    result();
});


function result(){
    
    if (tTScore1 >= totaljeu){
        button1.disabled = true;
        button2.disabled = true;
        alert("Joueur 1 gagne !");

    } else if (tTScore2 >= totaljeu){
        button1.disabled = true;
        button2.disabled = true;
        alert("Joueur 2 gagne !");
    }
};

resetbut.addEventListener("click", () => {
    tTScore1 = 0;
    tTScore2 = 0;
    score1.textContent = tTScore1;
    score2.textContent = tTScore2;
    button1.disabled = false;
    button2.disabled = false;

});
