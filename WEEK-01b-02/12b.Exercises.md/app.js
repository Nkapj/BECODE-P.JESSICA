//Array access practice


const leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"]; //DON'T TOUCH THIS LINE!

// YOUR CODE BELOW HERE:


leaderboard.splice(1,1, "Luna");

console.log(leaderboard);


leaderboard.splice(3,1,"Draco");

console.log(leaderboard);





//--------------------------------------------------------------------------------

/*
Selection of elements

Create an array that should look like suche : ["one","two","three"] */

In order to do that, only do manipulations from this folowing array :

const initialArray = [
  null,
  true,
  ["Apple", "two", undefined],
  false,
  ["three", "BeCode"],
  4,
  "I am a big bad wolf",
  ["one"],
];

let newInfo = [initialArray[7][0],initialArray[2][1],initialArray[4][0]];

console.log(newInfo);



//-------------------------------------------------------------------------------------
/*Push/Pop/Shift/Unshift Practice

I've provided you with an array called planets. Unfortunately, I'm an idiot who doesn't know much about our solar system and I made some mistakes. Please help me fix the planets array! Using the array methods we just learned...

Remove the first element, The Moon, from the planets array. The moon is not a planet!

Add in Saturn at the very end of the planets array

Add Mercury as the first element in the planets array.

At the end of your hard work, planets should look like this: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn"]*/

const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"]; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:

planets.shift()
console.log(planets);

planets.push('Saturne')
console.log(planets)

planets.unshift('Mercury')
console.log(planets);