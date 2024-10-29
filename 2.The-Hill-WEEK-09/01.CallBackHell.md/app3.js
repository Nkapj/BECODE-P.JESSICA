const body = document.getElementsByTagName("body")[0];


setTimeout(() => {
    
    body.style.backgroundColor ="orange";
    setTimeout(() => {
        body.style.backgroundColor ="yellow";

        setTimeout(() => {
            body.style.backgroundColor ="red";

            setTimeout(() =>{
                body.style.backgroundColor ="cyan";

                setTimeout(() => {
                    body.style.backgroundColor ="violet";

                    setTimeout(()  => {
                        body.style.backgroundColor ="green";

                        setTimeout(() => {
                            body.style.backgroundColor ="purple";

                            setTimeout(() => {
                                body.style.backgroundColor ="pink";
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);


