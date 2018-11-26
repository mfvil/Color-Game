var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode buttions event listeners
for(var i=0; i< modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
	});
}

for(var i=0; i < squares.length; i++){
	//addclick lisnteners for squares
	squares[i].addEventListener("click", function(){
		//grab color of cliked square
		var clickedColor = (this.style.backgroundColor);
		//compare colors of squares
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent ="Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}else {
			this.style.backgroundColor = "#232323"; 
			//changes the background color of the rectangle to hide the image
			messageDisplay.textContent = "Try again";
		}
	});
}
reset();
}

function reset(){
	colors= generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor= pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent ="New colors";
	//set the message to an empty string
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++)
	{
		if(colors[i]){
			squares[i].style.display ="block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
		
	}
	h1.style.backgroundColor ="steelblue"
}

resetButton.addEventListener("click", function(){
reset();
});

colorDisplay.textContent = pickedColor;


function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
	
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	// picks a random number thant multiplies it by the length of the color array. Rounds all the decimal answers.
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr= [];
	//repeat num times
	for(var i = 0; i<num; i++){
		//get random color and push into array
		arr.push(randomColor())
	}
	//return the array at the very end
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() *256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() *256);
	//pick a "blue" from 0 -255
	var b = Math.floor(Math.random() *256);
	return "rgb(" + r + ", " + g + ", " + b +")";
}