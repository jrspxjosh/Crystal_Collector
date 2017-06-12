$(document).ready(function() {

var wins = 0;
var loses = 0;
var yourNumber = 0;
var randomNumber;
var images = ["assets/images/crystal1.png", "assets/images/crystal2.png", "assets/images/crystal3.png", "assets/images/crystal4.png"];




function getRandomInt(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	};

function crystalValue(){
  for (var i = 0; i < images.length; i++) {
    var assign = getRandomInt(1,12);
    var crystalImage = $("<img>");
    crystalImage.addClass("crystals");
    crystalImage.attr("src", images[i]);
    crystalImage.attr("data-crystalvalue",assign);
    $("#crystalImages").append(crystalImage);
  }
};

crystalValue();

$(document).on("click", ".crystals", function() {
  var number = $(this).data("crystalvalue");
  console.log(number);
  yourNumber += parseInt(number);

  //if yourNumber == goal => you win and update wins
  //if yourNumber > goal => you lose update losses

  //reset the game => set yourNumber back to 0 and get a new random number

  $("#your").html("Your total score is:" + yourNumber);
});

randomNumber = getRandomInt(19,120);



$("#scoreTracker").html(yourNumber);

$("#currentNumber").html(randomNumber);







});
