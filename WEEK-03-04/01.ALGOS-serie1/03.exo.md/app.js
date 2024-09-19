function minMax(t) {
    //const olive = [5,45,658,74,2,65,8,7];
    const max = Math.max(...t)
    const min = Math.min(...t)

    //console.log(minMax(olive));
    return [min,max];
    
}
const olive = [5,45,658,74,2,65,8,7];
const tonton = [20,85,6,7485,255,6645,9,8];

console.log(minMax(olive));
console.log(minMax(tonton));
