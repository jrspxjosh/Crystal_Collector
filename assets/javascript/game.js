$(document).ready(function() {

var wins = 0;
var loses = 0;
var yourNumber = 0;
var randomNumber;

function getRandomInt(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	}

randomNumber = getRandomInt(19,120);



$("#currentNumber").html(randomNumber)
});
