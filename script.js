var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
// inorder to change the background color of body first grab the 
// body 
var body=document.getElementById("gradient");
var button=document.querySelector(".random");

// inorder to change the background color we know use
// body .style. background property for the css

function setGradient(){
		 body.style.background= "linear-gradient( to right,"
		 +color1.value
		 +","
		 +color2.value
		 +") ";

		 css.textContent = body.style.background + ";";
}

//here we intializing the value to color1 picker and color2 picker

color1.value= "#00FF00";
color2.value= "#FF0000";
//then calling the setGradient function,so these value stored in the 
//background of body.when the page loads both color pickers and the 
//background renders the same color
setGradient();


function setRandomColor(){
//math.random() used with math.floor() can be used to return
//random integers
//returns a number between 0 and 255;

	color1.value = "#"+(Math.floor(Math.random()*(0x1000000))).
	toString(16); 
	color2.value = "#"+(Math.floor(Math.random()*(0x1000000))).
	toString(16); 
	setGradient();
	
}   
	
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
button.addEventListener("click", setRandomColor);


// color2.addEventListener("click", setGradient);
// onclick and oninput are just javascript events. The onclick 
// event on the color picker just means that whenever the user 
// select any color from the color picker then call the setGradient()
//  function. When using addEventListener we have to write the name of
//  the function without parenthesis(). But, when using events as 
//  attributes such as onclick we need to call the function with 
//  parenthesis().