var randomNumber1 = Math.floor(Math.random() * 6) +1; // Random dice 1
var randomNumber2 = Math.floor(Math.random() * 6) +1; // Random dice 1

function setImages(sources, random){
  if (random === 1){
    document.querySelector(sources).setAttribute("src", "images/dice1.png");
  } else if (random === 2){
    document.querySelector(sources).setAttribute("src", "images/dice2.png");
  } else if (random === 3){
    document.querySelector(sources).setAttribute("src", "images/dice3.png");
  } else if (random === 4){
    document.querySelector(sources).setAttribute("src", "images/dice4.png");
  } else if (random === 5){
    document.querySelector(sources).setAttribute("src", "images/dice5.png");
  } else {
    document.querySelector(sources).setAttribute("src", "images/dice6.png");
  }
}

setImages(".img1", randomNumber1);
setImages(".img2", randomNumber2);

if (randomNumber1 > randomNumber2) {
  document.querySelector(".container h1").textContent = "Player 1 Wins 🚩";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector(".container h1").textContent = "🚩 Player 2 Wins";
} else {
  document.querySelector(".container h1").textContent = "Draw!";
}
