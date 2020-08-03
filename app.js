var character = document.getElementById("character");
var block = document.getElementById("block");
var counter =0;

function jump(){
    if (character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}
var checkDead = setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation ="none";
        alert("Game Over player score: "+Math.floor(counter/100));
        counter =0;
        block.style.animation = "block ls infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }

    while(character > block){
        character++;
    }

},10);


$(document).ready(function(){
    window.addEventListener('keypress', checkKeyPress, false);
});

function checkKeyPress(key){
    if(key.keyCode =="32"){
        jump();
    }
}