let randomNumber1 = Math.floor(Math.random()*6);
let randomNumber2 = Math.floor(Math.random()*6);

let randomPlayerImage1 = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"] 

let randomImg1 = randomPlayerImage1[randomNumber1];
let randomImg2 = randomPlayerImage1[randomNumber2];

document.querySelector(".img1").setAttribute("src",randomImg1);
document.querySelector(".img2").setAttribute("src",randomImg2);


if(randomImg1 > randomImg2) {
     document.querySelector("h1").innerHTML = "Player 1 WIN!!"
} else if (randomImg2 > randomImg1) {
     document.querySelector("h1").innerHTML = "Player 2 WIN!"
} else document.querySelector("h1").innerHTML = "DRAW!"