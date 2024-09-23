
distance = 0;


function fuel(distance) {
    let fuelNeed = distance*10;
 if (fuelNeed < 100 ){
  return 100;
 }
 return fuelNeed;
}
console.log(fuel(50));
console.log(fuel(10));