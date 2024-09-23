const arrays = [true, false, true, false, true, true,];
//const empty = ["","",""];

function tab(arrays) {
    let count = 0;
for( i=0 ; i < arrays.length; i++) {
    if (arrays[i] === true){
    count ++;
        }
    } return count; 
}
console.log(tab(arrays));
console.log(tab([]));