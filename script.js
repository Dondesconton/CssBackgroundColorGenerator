var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");//grabing 1st input 
var color2 = document.querySelector(".color2");//grabing 2nd input
var body = document.getElementById("gradient");// grabing and caching the body element.


window.onload = function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", window.onload);

color2.addEventListener("input",window.onload);


//CHALLENGES

// 1. Write code so that the colour inputs match the background generated on the first page load. 

// 2. Display the initial CSS linear gradient property on page load.