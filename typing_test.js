const originText = document.querySelector("#text-provided p").innerHTML;
const typingArea = document.querySelector("#typing-area");
const clock = document.querySelector("#clock");
const resetButton = document.querySelector("#reset");

var timer = [0,0,0,0]

// spelling check of typed text with the originText
function spellCheck() {
	let textEntered = typingArea.value;
	console.log(textEntered);
}

//helper function to show proper timing for aesthetic reason
function timer(time) {

}

// clock math to show prper minute, second and thousand of a second
function runTimer(){
	let currentTime = timer[0] + ":" + timer[1] + ":" + timer[2];
	clock.innerHTML = currentTime;
	timer[3]++;

	timer[0] = Math.floor((timer[3] / 100) / 60);
	timer[1] = Math.floor((timer[3] / 100) - (timer[0] * 60));
	timer[2] = Math.floor((timer[3]) - (timer[1] * 100) - (timer[0] * 6000));
}

// clock starts with the first keypress
function startTimer(){
	let textEntered = typingArea.value.length;
	
	if(textEntered === 0) {
		setInterval(runTimer, 10);
	}
}

// resetButton resets the time
function reset() {
	console.log("reset button has been pressed")
}

// event listeners
typingArea.addEventListener("keypress", startTimer, false);
typingArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);
