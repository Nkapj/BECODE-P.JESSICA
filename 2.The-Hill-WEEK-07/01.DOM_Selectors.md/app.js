const mainHeading = document.getElementById("main-heading");
mainHeading.style.color= "red";

const maListe = document.querySelector("ul");
const monElement = document.createElement("li");

maListe.appendChild(monElement);
monElement.remove();


// 1. Sélectionner le premier élément li
let firstLi = document.querySelector('.list-item').innerText;

// 2. Créer un nouvel élément li
let newLi = document.createElement('li');

// 3. Assigner le texte du premier li au nouvel élément li
newLi.innerText = firstLi;

// 4. Ajouter le nouvel élément li à la fin de la liste
document.querySelector('ul').appendChild(newLi);

// 5. Donner à tous les éléments li la couleur violette
let allLi = document.querySelectorAll('li');
allLi.forEach(li => {
    li.style.color = 'purple';
});

// 6. Donner au dernier li la couleur dorée
allLi[allLi.length - 1].style.color = 'gold';

// 7. Assurez-vous que le mot "Hall" de "Annie Hall" soit en rouge
let annieHallLi = Array.from(allLi).find(li => li.innerText.includes('Annie Hall'));
annieHallLi.innerHTML = annieHallLi.innerHTML.replace('Hall', '<span style="color: red;">Hall</span>');