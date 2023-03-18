let text = document.querySelector(".text");
let character = document.querySelector(".character");
let limit = 120;
let words = document.querySelector(".words");

text.addEventListener("input",e=>{
    // character
    let textLenght = text.value.trim().length;
    character.textContent = textLenght + "/" + limit;

    if(textLenght > limit){
        text.style.border = "1px solid red"; 
        character.style.color = "red";  
    }
    else{
        text.style.border = "0px solid red"; 
        character.style.color = "white";         
    }

    // word
    let txt = text.value.trim();
    words.textContent = "Words: " + txt.split(/\s+/).filter((word)=> word).length;
})