$(document).ready(function() {

var wins = 0;
var loses = 0;
var yourNumber = 0;
var randomNumber;
var images = ["assets/images/crystal1.png", "assets/images/crystal2.png", "assets/images/crystal3.png", "assets/images/crystal4.png"];


//generate randomNumber

function getRandomInt(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	};

function crystalValue(){

      $("#crystalImages").html("");

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


function playAgain(){
    crystalValue();
    randomNumber = getRandomInt(19,120);
    $("#currentNumber").html(randomNumber);
    yourNumber = 0;
    $("#your").html("Your total score is: " + yourNumber);
};


$("#wins").html("Wins: " + wins);
$("#loses").html("Loses: " + loses);



$(document).on("click", ".crystals", function() {
      var number = $(this).data("crystalvalue");
      console.log(number);
      yourNumber += parseInt(number);

    console.log(randomNumber);
    console.log(yourNumber);
    if (yourNumber == randomNumber){
      alert("You Win!");
      wins++;
      $("#wins").html("Wins: " + wins);
      playAgain();
    }
    else if (yourNumber > randomNumber){
      alert("You Lose!");
      loses++;
      $("#loses").html("Loses: " + loses);
      playAgain();
    }
  //if yourNumber > goal => you lose update losses

  //reset the game => set yourNumber back to 0 and get a new random number

      $("#your").html("Your total score is: " + yourNumber);
});

randomNumber = getRandomInt(19,120);



$("#scoreTracker").html(yourNumber);

$("#currentNumber").html(randomNumber);







});
