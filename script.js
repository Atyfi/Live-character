let text = document.querySelector(".text");
let character = document.querySelector(".character");
let limit = 120;


text.addEventListener("input",e=>{
    let textLenght = text.value.length;
    character.textContent = textLenght + "/" + limit;

    if(textLenght > limit){
        text.style.border = "1px solid red"; 
        character.style.color = "red";  
    }
    else{
        text.style.border = "0px solid red"; 
        character.style.color = "white";         
    }
})