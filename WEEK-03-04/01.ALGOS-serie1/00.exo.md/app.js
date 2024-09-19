function makesTen(a,b) {
    if ( a === 10 || b === 10){
        return true;
    } else if (a+b === 10){
        return true;
    } else {
        return false;
    }
}

console.log(makesTen(4,6));
console.log(makesTen(5,10));
console.log(makesTen(8,9));