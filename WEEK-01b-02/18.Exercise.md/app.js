


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


alert(`Félicitaition vous avez trouver ne nombre secret, qui est ${aleatoire} en ${attempts} tentative`);