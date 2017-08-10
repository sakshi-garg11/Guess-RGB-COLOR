var numSquares=3 ;
var colors= [];
var pickedColor;
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode"); 

init();

function init()
{
	 setUpModeButtons();
	 setUpSquares();
	 reset();
}

function setUpModeButtons()
{
	for(var i=0; i<modeButtons.length; i++)
	{
	    modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		modeButtons[2].classList.remove("selected");
		this.classList.add("selected");
        
         if(this.textContent==="Easy"){
        	numSquares=3;

        }else if(this.textContent==="Expert"){
        	numSquares=9;
         }else{
         	numSquares=6;
         }
        reset();
      });
   }
}

function setUpSquares()
{
   for(var i=0; i < squares.length ; i++)
	{
		//add initial colors to square
		//squares[i].style.background = colors[i];
	    //add click listeners to square
	   squares[i].addEventListener("click",function(){
	   //grab the color of clicked square
	   var clickedColor=this.style.background;
	   //compare color to picked color
	   if(clickedColor === pickedColor){
	   	messageDisplay.textContent= "Correct";
	   	resetButton.textContent="Play Again ";
	   	changeColor(clickedColor); 
	   	h1.style.background = clickedColor;
	   }
	   else{
	   	this.style.background="#232323";
	   	messageDisplay.textContent= "Try Again";
	     }
	   }); 
    }
}


function reset(){
	messageDisplay.textContent= "";
	colors=generateRandomColors(numSquares);
	//pick a new random color from array 
	pickedColor = pickColor();
	 //change colorDisplay to match pickedColor
    colorDisplay.textContent=pickedColor;
	 //change color of squares
    resetButton.textContent="new Colors";

    for(var i=0; i < squares.length ; i++)
    { 
	   if(colors[i])
	    {
	      squares[i].style.display="block";
		  squares[i].style.background = colors[i];
	    }
	  else
	    {
	      squares[i].style.display="none";
		}
    }
    h1.style.background = "steelblue";
}


resetButton.addEventListener("click", function(){
  reset();
});



function changeColor(color){
	//loop through all squares
  for(var i=0; i < squares.length ; i++)
    {
	 //change each color to match given color
	 squares[i].style.background = color;
    } 
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for(var i = 0; i < num; i++){
	  arr[i]	= randomColor();
      //get random color and push into array
	}
	//return that array 
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random()*256);
	//pick a green from 0 - 255
    var g = Math.floor(Math.random()*256);
    //pick a blue from 0 - 255
    var b = Math.floor(Math.random()*256);
    
    return "rgb(" + r + ", " + g + ", " + b +")";
}
 



