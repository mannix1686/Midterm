function add(char) {
	var display = document.getElementById('display');
	display.value = display.value +char
}
function subtract(char) {
	var display = document.getElementById('display');
	display.value = display.value -char
}

function multiply(char) {
	var display = document.getElementById('display');
	display.value = display.value *char
}
function divide(char) {
	document.getElementById('display');
	display.value = display.value /char
}
function calculate(char) {
	var display = document.getElementById('display');
	var result = eval(display.value);
	document.getElementById('result').value = result
}
function reset(char) {
	document.getElementById('display').value ="";
	document.getElementById('result').value ="";
	
}