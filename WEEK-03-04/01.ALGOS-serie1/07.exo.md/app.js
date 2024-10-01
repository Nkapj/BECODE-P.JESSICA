
function calcul(probability,prize,pay) { 
    if (probability*prize - pay > 0 ){
        return true;
    }else {
        return false;
    } 

}
console.log(calcul(25,10,5));