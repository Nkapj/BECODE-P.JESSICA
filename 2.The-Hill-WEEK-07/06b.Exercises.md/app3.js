const hight = document.querySelectorAll("li");

for (let i=0 ; i < hight.length ; i++ ){

if (hight[i].classList.contains("highlight")){

       hight[i].classList.remove("highlight");
    } else {
        hight[i].classList.add("highlight");
    };
  
} 


