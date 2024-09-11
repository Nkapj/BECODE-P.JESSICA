
/*
const nam = prompt('Entrez votre nom');
let animal = prompt('quel animal preferez vous, les chats ou chiens ?');

animal = animal.toLowerCase().trim();

if (animal === 'chats' || animal === 'chat') {
alert(`Bonjour ${nam}, je vois que vous aimez les chat, vous devez etre quelq'un de calme et patient`);

} else if (animal === 'chiens' || animal === 'chien') {
alert (`Bonjour ${nam}, un fan des chien!? vous avez raison ce sont les meilleur amis de l'homme`);

} else {
alert("c'est pas grave vous avez le droit d'avoir vos préférence :) ");
}


//---------------------------------------------------

const mystery = "Paris 7éme arrondissement "; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE

// LEAVE THIS CODE ALONE! (pretty please)
if (mystery[0] === "P" && mystery.length > 5 && mystery.indexOf("7") !== -1) 
{console.log("YOU GOT IT!!!");
} 
else {
console.log("TRY AGAIN");
}

//----------------------------------------------------

let age = prompt("Quel age avez-vous ?");

const legal = 18

if ( age < legal ){
alert("Sorry, you are too young to drive this car. Powering off")
} else if ( age == legal ){
    alert("Congratulations on your first year of driving. Enjoy the ride!")
} else{
    alert("Powering On. Enjoy the ride!")
}
*/
//----------------------------------------------------

let favFruit = prompt(" what is his favorite fruit?").toLowerCase().trim();

if (favFruit == "bananas" || favFruit == "banana" ){
    alert("tell him you like bananas as well")
}
else if ( favFruit === "framboise" || favFruit == "framboises" ){
    alert("tell him you LOVE strawberries")
}
    else if ( favFruit === "grapes" || favFruit == "grape"){
    let pref = prompt("do you prefer purple or green grapes")
        if (pref === "purple"){
            alert("tell him you don't like purple grapes")
        }
            else if (pref === "green"){ 
                alert("green grapes are ok...")
            } else if (pref !== "green" || pref !== "purple" ){
                alert("don't understand")
            } else {
                alerte( pref + "I understand" )
            }
        }
else {
    alert(favFruit + " I don't understand the word you said")
}
