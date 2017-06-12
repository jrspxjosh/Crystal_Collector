$(document).ready(function(){
	//declared vars
	var score = 0;
	$("#score").text(" " + score);
	var losses = 0;
	$("#losses").text(" " + losses);
	var min = Math.floor(19);
	var max = Math.ceil(120);
	var clientN = 0;
	$("#clientN").text(" " + clientN);
	var startNumber = 0;
	var endGame = false
	var coin = new Audio("http://themushroomkingdom.net/sounds/wav/smw/smw_coin.wav");
		function coins() {coin.play();}
	var yoshi = new Audio("http://themushroomkingdom.net/sounds/wav/sm64/sm64_yoshi.wav");
		function yoshis() {yoshi.play();}
	//declared functions

	function checkEnd() {
		if (clientN == startNumber) {
			endGame = true;
			clientN = 0;
			++score;
			$("#score").text(" " + score);
			coins();
			alert("Congratulations!");
			whileGems();
			}
		else if (clientN > startNumber) {
			endGame = true;
			clientN = 0;
			++losses;
			$("#losses").text(" " + losses);
			yoshis();
			alert("You can do better than that!");
			whileGems();
		}
	};


	function whileGems() {
	//I tried this after my first idea wouldn't work and was going to use 2 arrays to accomplish something one could do.
	//Then this kept going into an infinite loop for an extra long time.
	//Moving on. It's turning out to look like this was the meat+potatoes.
		startNumber = Math.floor(Math.random() * (max - min + 1)) + min;
		console.log(startNumber);

		$("#startN").text(" " + startNumber);
		$("#clientN").text(" " + clientN);


		var gems = [];
			while(gems.length < 4) {
				var gemNum = Math.floor((Math.random()*12)+1)
				if(gems.indexOf(gemNum) > -1) continue;
				gems[gems.length] = gemNum;
			}
			diamond = gems[0];
			ruby = gems[1];
			emerald = gems[2];
			amethyst = gems[3];
			console.log(gems);
			console.log("d:" + diamond, "r:" + ruby, "e:" + emerald, "a:" + amethyst);

	};
	//start the game
	whileGems();

		//clicks to + clientNumber
		$("#diamond").on("click", function() {
		clientN += diamond;
		$("#clientN").text(" " + clientN);
		console.log(clientN);
		checkEnd()
		});


		$("#ruby").on("click", function() {
		clientN += ruby;
		$("#clientN").text(" " + clientN);
		console.log(clientN);
		checkEnd();
		});


		$("#emerald").on("click", function() {
		clientN += emerald;
		$("#clientN").text(" " + clientN);
		console.log(clientN);
		checkEnd();
		});


		$("#amethyst").on("click", function() {
		clientN += amethyst;
		$("#clientN").text(" " + clientN);
		console.log(clientN);
		checkEnd();
		});
});
