const city = "Brussels";

let weatherCondition = "rainy";

let temperature = 24.16879;

const weatherText = `The weather in ${city} is ${weatherCondition} and it's ${parseInt(temperature)}°C outside`;

console.log(weatherText); // Prints : The weather in Brussels is rainy and it's 24°C outside.

//----------------------------------------------

const nam = prompt("quel est votre nom ?");
const age = prompt("quel âge avez-vous ?");
const home = prompt("où habitez-vous?");

alert(`Bienvenue à ${nam}, ${age} ans, qui habite à ${home}`);

//-----------------------------------------------

let price = prompt("Entrez prix HTVA");
let ttVta = price * 1.21 ;
alert(ttVta);

//-----------------------------------------------

let radiu = prompt(" Circonference d'un cercle")
let PI = 3.14
let calcul = PI * radiu * radiu
alert(calcul);

//-----------------------------------------------
let first = parseFloat(prompt("entrez un nombre"));
let seconde = parseFloat(prompt(" Entre un second nombre"))
alert(first + seconde);