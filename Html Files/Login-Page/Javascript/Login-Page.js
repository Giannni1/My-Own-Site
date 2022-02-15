const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");


loginButton.addEventListener("click", (e) => { // Problem: AddEventListener Null (Missing a Element) ?? Not the variable. Never put the script
    // tag on the top of your html file... never 
	e.preventDefault();
	const username = loginForm.username.value;
	const password = loginForm.password.value;

	if (username === "1245512" && password === "123") {
	 window.location.replace('../Homepage/HomePage.html')
	} else {
	
	alert("Login Failed");

	};
});





