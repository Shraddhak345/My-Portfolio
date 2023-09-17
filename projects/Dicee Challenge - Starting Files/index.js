var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomdiceimg = "dice" + randomnumber1 + ".png";
var randomimagesrc = "images/" + randomdiceimg;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimagesrc);

var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randomdiceimg2 = "dice" + randomnumber2 + ".png";
var randomimagesrc2 = "images/" + randomdiceimg2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimagesrc2);

// can be written as
// var randomimagesrc2 = "images/dice"+randomnumber2+".png"
// document.querySelectorAll("img")[1].setAttribute("src", randomimagesrc2);

if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML= "Player 1 wins!";
} else if (randomnumber1 < randomnumber2) {
  document.querySelector("h1").innerHTML="Player 2 wins!";
} else {
  document.querySelector("h1").innerHTML="Its a draw!";
}
