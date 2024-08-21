function playDice() {

var randomnumber1 = Math.floor(Math.random()*(6-1 +1)) + 1;

var randomnumber2 = Math.floor(Math.random()*(6-1 +1)) + 1;

      var randomDiceImage = "dice"+ randomnumber1 + ".png";
      var imageSrc = "./images/"+randomDiceImage;
     document.querySelectorAll("img")[0].setAttribute("src",imageSrc);
  
    var randomDiceImage2 = "dice"+ randomnumber2 + ".png";
    var imageSrc2 = "./images/"+randomDiceImage2;
     document.querySelectorAll("img")[1].setAttribute("src",imageSrc2);

     if (randomnumber1 > randomnumber2){
        document.querySelector("h1").textContent = "Player 1 wins!"
     } else if ( randomnumber2 > randomnumber1){
        document.querySelector("h1").textContent = "Player 2 wins!"
     }else {
        document.querySelector("h1").textContent = "it's a tie!"
     }

}
