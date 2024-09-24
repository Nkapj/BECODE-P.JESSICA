function cases(a,b){
   // var lanceDes = parseInt(Math.floor(Math.random) *6+1)
      //  for (i=1; i<=6; i++ )

        diff = b-a
            if (a===b){
                return false
            }else if ( diff >= 1 && diff <= 6){
                return { fact : true, message: "Bonus gagné pour tout les deux"}
            } else {
                return false
            }

            } 

console.log(cases(4,5));
console.log(cases(1,9));
console.log(cases(6,0));
console.log(cases(6,7));