//your JS code here. If required.
// Check if there are saved login details in local storage
let savedUsername = localStorage.getItem("username");
let savedPassword = localStorage.getItem("password");

// If there are saved login details, show the "existing user" button
if (savedUsername && savedPassword) {
	let existingButton = document.createElement("button");
	existingButton.setAttribute("id", "existing");
	existingButton.textContent = "Login as existing user";
	document.body.appendChild(existingButton);
}

// When the form is submitted
document.querySelector("form").addEventListener("submit", function(e) {
	e.preventDefault(); // Prevent the default form submit

	let username = document.querySelector("#username").value;
	let password = document.querySelector("#password").value;
	let remember = document.querySelector("#remember").checked;

	// Save login details to local storage if "remember me" is checked
	if (remember) {
		localStorage.setItem("username", username);
		localStorage.setItem("password", password);
	} else {
		localStorage.removeItem("username");
		localStorage.removeItem("password");
	}

	alert("Logged in as " + username);
});

// When the "existing user" button is clicked
document.querySelector("#existing").addEventListener("click", function() {
	let savedUsername = localStorage.getItem("username");
	let savedPassword = localStorage.getItem("password");
	alert("Logged in as " + savedUsername);
});
