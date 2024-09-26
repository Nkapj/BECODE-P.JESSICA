function inver (nom) {

//for (i=0; i < nom.length; i++)
    if(nom.length %2 !== 0){
        return nom.split("").reverse().join("");
    }else {
        return nom;
    }
 
}

console.log(inver('oliva'))