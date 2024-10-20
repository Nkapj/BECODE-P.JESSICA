const button = document.querySelectorAll("button");
const para = document.querySelectorAll("p");

button.forEach((button,index) => {
    button.addEventListener("click",() => {

        para[index].classList.toggle("hidden")


        if (para[index].classList.contains("hidden")) {

            button.textContent="Open tab";
        } else {
            button.textContent="Close tab";
        }
    });
} );

