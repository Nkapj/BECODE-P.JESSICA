
function course () {
    let getTotal = 0;

    const produits =[
    {produit: "eau" , quantite : 6, prix : 2.50,},
    {produit: "the" , quantite : 1, prix : 2.50,},
    {produit: "proteine" , quantite : 2, prix : 13.50,},
    {produit: "saumon" , quantite : 3, prix : 11.99}
];

for (let i = 0; i < produits.length; i++ ) {
    getTotal += produits[i].quantite * produits[i].prix;
}
return getTotal; 
    

}
console.log(course());