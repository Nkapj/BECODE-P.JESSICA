

const nam = prompt('Entrez votre nom');
let animal = prompt('quel animal preferez vous, les chats ou chiens ?');

animal = animal ? animal.toLocaleLowerCase().trim(): "";

if (animal === 'chats' || animal === 'chat') {
alert(`Bonjour ${nam}, je vois que vous aimez les chat, vous devez etre quelq'un de calme et patient`);

} else if (animal === 'chiens' || animal === 'chien') {
alert (`Bonjour ${nam}, un fan des chien!? vous avez raison ce sont les meilleur amis de l'homme`);

} else {
alert("c'est pas grave vous avez le droit d'avoir vos préférence :) ");
}


