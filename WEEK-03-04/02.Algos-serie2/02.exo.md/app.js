
function num(n) {
    str = Math.abs(n).toString();
    count = 0;

    for (let i = 0; i < str.length; i++){
        count++;

    } 
    return count;
} 

console.log(num(354));
console.log(num(-258418541841));
console.log(num(426226));
console.log(num(35));

