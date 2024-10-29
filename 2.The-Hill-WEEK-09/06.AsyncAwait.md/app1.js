const body = document.getElementsByTagName("body")[0];



    const generateBG =(color,delay) =>{
        return new Promise ((resolve,reject) =>{
            const num = Math.random();
            setTimeout(() =>{
                if (num < 0.5){
                    body.style.backgroundColor = color;
                    resolve();
                } else {
                    reject("une erreur")
                };
            }, delay);
        });
    };

async function msn() {
    try{
        await generateBG("blue",1000);
        await generateBG("yellow", 1000); 
        await generateBG("red", 1000);    
        await generateBG("cyan", 1000);   
        await generateBG("violet", 1000); 
        await generateBG("green", 1000);  
        await generateBG("purple", 1000); 

    }   catch(error){
        console.log("error");
    }
}

msn();