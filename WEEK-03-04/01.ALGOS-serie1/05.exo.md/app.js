const boisson = [
    {name: "fanta", price: 2, year:1999},
    {name: "coca", price: 3, year:1998},
    {name: "water", price: 1, year:1990}]

function drinks (tabl) {
    return tabl.sort((a,b) => a.price - b.price);
}






   function years(a,b) {
    return b.year - a.year;
    }

const eau  = (a,b) => a.price - b.price; // ou eau à la place comme parametre dans return(1)
    

console.log(drinks(boisson));


/*function saluer(nom) {
    return 'Bonjour ' + nom;
}
•	Arrow function (surtout pour des fonctions courtes) :
const saluer = (nom) => 'Bonjour ' + nom;*/
