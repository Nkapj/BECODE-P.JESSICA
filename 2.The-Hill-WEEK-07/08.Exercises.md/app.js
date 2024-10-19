const button = document.querySelectorAll("button");


button.forEach((button,index) => {
    button.addEventListener("click",() => {
    
    if (index !== 1) {
        alert("Oh my God ! You again !!!");
    }
    if (index === 1) {
        alert("Thank God ! I thought you'd' never leave !");
    }
});


});

/* const buttons = document.querySelectorAll("button");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {

    // Si c'est le bouton Goodbye (index 1)

    if (index === 1) {
        lert("Thank God ! I thought you'd never leave !");

    } else {
      // Sinon, pour tous les autres boutons
        alert("Oh my God ! You again !!!");
    }
  });
});*/