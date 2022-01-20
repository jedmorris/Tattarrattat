// test js functionality  
function getTestMessage() {
	let userMessage = document.getElementById("userString").value;
	Swal.fire(
		'Button Clicked!',
		userMessage,
		'success!'
	)
}

function getValues() {
	let userStringInput = document.getElementById("userString").value;

	// check if user input is string
	if (typeof userStringInput === 'string') {

		let newString = reverseString(userStringInput);
		displayUserString(newString);
	} else {
		Swal.fire({
			icon: 'error',
			title: 'Whoops...',
			text: 'Only strings are allowed for Tattarrattat.'
		})
	}

}

function reverseString(userStringInput) {
	let returnString = "";

	// loop through user input and place chars in new array in reverse order
	for (let i = userStringInput.length - 1; i >= 0; i--) {
		returnString += userStringInput[i];
	}
	return returnString;
}

function checkForPalindrome() {
	userStringInput = userStringInput.toLowerCase();

	isPalindrome = false;

}

function displayString(newString) {
	document.getElementById("results").innerHTML = newString;

}