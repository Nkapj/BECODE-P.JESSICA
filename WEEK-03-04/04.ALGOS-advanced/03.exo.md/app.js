function ceasar (str,num) {
    str = str.toLowerCase();
     let result = "";

    for(let i=0; i < str.length; i++){

    if(str[i] >= "a" && str[i] <= "z" ){
        let asii = str.charCodeAt(i);
        
        let newAsii = asii + num;

        if (newAsii > 122){
            newAsii = (newAsii - 122) + 96;
        }

        result += String.fromCharCode(newAsii);

    } else {
        result += str[i];
    }
}
 return result;
}

console.log(ceasar("Jessica",-3));