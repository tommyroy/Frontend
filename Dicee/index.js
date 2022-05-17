var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var diceImage1 = "dice" + randomNumber1 + ".png";

var path1 = "images/"+diceImage1;

var diceImage2 = "dice" + randomNumber2 + ".png";

var path2 = "images/"+diceImage2;

var diceOne = document.querySelectorAll("img")[0];

var diceTwo = document.querySelectorAll("img")[1];

diceOne.setAttribute("src", path1);

diceTwo.setAttribute("src", path2);

