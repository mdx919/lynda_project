const originText = document.querySelector("#text-provided p").innerHTML;
const typingArea = document.querySelector("#typing-area");
const clock = document.querySelector("#clock");
const resetButton = document.querySelector("#reset");

var timer = [0,0,0,0];
var interval;
var timerRunning = false;

// spelling check of typed text with the originText
function spellCheck() {
	let textEntered = typingArea.value;
	let originTextMatch = originText.substring(0, textEntered.length);

	if (textEntered == originText) {
		clearInterval(interval);
		typingArea.style.borderColor = "#00FA21";
	}
	else {
		if(textEntered == originTextMatch){
			typingArea.style.borderColor = "blue";
		}
		else {
			typingArea.style.borderColor = "red";
		}
	}
}

//helper function to show proper timing for aesthetic reason
function helperTimer(time) {
	if(time <= 9) {
		time = "0" + time;
	}
	return time;
}

// clock math to show prper minute, second and thousand of a second
function runTimer(){
	let currentTime = helperTimer(timer[0]) + ":" + helperTimer(timer[1]) + ":" + helperTimer(timer[2]);
	clock.innerHTML = currentTime;
	timer[3]++;

	timer[0] = Math.floor((timer[3] / 100) / 60);
	timer[1] = Math.floor((timer[3] / 100) - (timer[0] * 60));
	timer[2] = Math.floor((timer[3]) - (timer[1] * 100) - (timer[0] * 6000));
}

// clock starts with the first keypress
function startTimer(){
	let textEntered = typingArea.value.length;
	
	if(textEntered === 0 && !timerRunning) {
		timerRunning = true;
		interval = setInterval(runTimer, 10);
	}
}

// resetButton resets the time
function reset() {
	clearInterval(interval);
	interval = null;
	timer = [0,0,0,0];
	timerRunning = false;

	typingArea.value = "";
	clock.innerHTML = "00:00:00";
	typingArea.style.borderColor = "gray";
}

// event listeners
typingArea.addEventListener("keypress", startTimer, false);
typingArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);
