fakeCallToAnAPI(
    // L'URL fictive de l'API
    "api/movies",
    // Le callback en cas de succès
    (data) => {
      console.log("SUCCÈS");
      console.log(data);
    },
    // Le callback en cas d'erreur
    (data) => {
      console.log("ERREUR");
      console.log(data);
    }
  );