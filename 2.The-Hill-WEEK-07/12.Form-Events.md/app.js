///const input = document.querySelector('input')
///input.value;

///input.value = "Hello World"


let inputvalue = "";

const input1 = document.getElementById("change");


input1.addEventListener("change", () =>{
    inputvalue = input1.value;

    console.log(inputvalue);
});