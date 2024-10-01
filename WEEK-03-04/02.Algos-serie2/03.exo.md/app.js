function objectToArray() {
    // L'objet à convertir
    let obj = { a: 1, b: 2, c: 3 };
    
    // Convertir l'objet en un tableau de paires clé-valeur
    return Object.entries(obj);
}


console.log(objectToArray()); 