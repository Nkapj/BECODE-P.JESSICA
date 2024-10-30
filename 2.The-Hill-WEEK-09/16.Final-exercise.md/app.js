const inputo = document.querySelector("#rech");
const result = document.querySelector(".results")


inputo.addEventListener("keydown", (e) =>{
    if (e.key === "Enter") {
        const query = inputo.value.trim();
        if (query) {
            const lien = `https://www.themealdb.com/api.php ${query}`
    
    fetch(lien)
        .then(response => response.json()) // On transforme la réponse en JSON
        .then(data => {
            console.log(data); // On affiche les données reçues dans la console
    })

        .catch(error => console.error("Erreur :", error)); // On gère les erreurs

 }
        console.log("Terme de recherche :", query);

    }

});
