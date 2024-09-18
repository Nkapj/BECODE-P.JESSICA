
/*

let nombMax = parseInt(prompt("Veuillez saisir un nombre maximal de votre choix"));

    while (isNaN(nombMax) || nombMax <= 0){
        nombMax = parseInt(prompt("Ceci n'est pas un nombre valide. Veuillez rentrer un nombre supérieur à 0"));
    }

    const aleatoire = Math50.floor(Math.random()* nombMax) +1;

    let guess = parseInt(prompt(`J'ai choisi un nombre entre 1 et ${nombMax}, essayez de le devinez :)` ));
    let attempts = 1;


    while(guess !== aleatoire){
        if (isNaN(guess)){
            guess = parseInt(prompt("Ceci n'est pas une réponse valide, veuillez entrer un autre nombre"));
        } else if ( guess > aleatoire){
            guess = parseInt(prompt("réessayez, le nombre à deviner est plus petit"));
        } else {
            guess = parseInt(prompt("toujours pas ça, le nombre à deviner est plus grand"));
        } attempts++;
    }


alert(`Félicitaition vous avez trouver ne nombre secret, qui est ${aleatoire} en ${attempts} tentative`);*/


///----------------------------------

let todos = [];
let command;
// on utlise hile car il ya que une condition/ demande...

while (command !== "quit") {
  command = prompt(`new to add a todo
list to see all the todos
delete to remove a specific todo
quit to exit the program`);

  if (command === 'new') {
    let newTodo = prompt("Enter a new todo:");
    todos.push(newTodo);
    console.log(`${newTodo} has been added to the list.`);


  } else if (command === 'list') {
    console.log("********* TODO LIST *********");
    todos.forEach((todo, index) => {
      console.log(`${index + 1}. ${todo}`);
    });


  } else if (command === 'delete') {
    let indexToDelete = prompt("Enter the number of the todo to delete:");
    indexToDelete = parseInt(indexToDelete) - 1; // Convert to 0-based index
    
    if (indexToDelete >= 0 && indexToDelete < todos.length) {
      let deletedTodo = todos.splice(indexToDelete, 1);
      console.log(`${deletedTodo} has been removed from the list.`);
    } else {
      console.log("Invalid number.");
    }
  } else if (command === 'quit') {
    console.log("Exiting the program...");
    break;
  } else {
    console.log("Invalid command.");
  }
}