const body = document.getElementsByTagName("body")[0];

const delay = ms => new Promise(resolve => setTimeout(resolve,ms));

async function changeBodyColor  () {

            body.style.backgroundColor ="blue";
            await delay(3000)
            body.style.backgroundColor ="yellow";
            await delay(1000);
            body.style.backgroundColor ="red";
            await delay(1000);
            body.style.backgroundColor ="cyan";
            await delay(1000);
            body.style.backgroundColor ="violet";
            await delay(1000);
            body.style.backgroundColor ="green";
            await delay(1000);
            body.style.backgroundColor ="purple";
            await delay(1000);
            body.style.backgroundColor ="pink";
            await delay(1000);



        };




changeBodyColor();