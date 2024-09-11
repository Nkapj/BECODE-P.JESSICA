const product = {
    name: 'Iphone 15',
    inStock: true,
    price: 1240.90,
    includedInPackage: ["case", "earphones", "charger"],

}

console.log(product.includedInPackage[1]);

//--------------------------------------------------------------



//PLEASE DON'T TOUCH THIS LINE!

const restaurant = {
    name: "Ichiran Ramen",
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: "Brooklyn",
    state: "NY",
    zipcode: "11206",
};

const fullAdress = `${restaurant.name}, ${restaurant.address}, ${restaurant.city}, ${restaurant.state},${restaurant.zipcode}`

console.log(fullAdress);

//--------------------------------------------------------------