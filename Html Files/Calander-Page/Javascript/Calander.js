// --------------------------------------------------------- Getting the Buttons Value -------------------------------

// Create a const variable that reads the button homepage
const home = document.getElementById('btn-return-homepage');

// Create a const variable that reads the button Journal
const journal = document.getElementById('btn-journal');

// Create a const variable that reads the button Calander
const calander = document.getElementById('btn-calander');

// Create a const variable that reads the button To do List 
const checklist = document.getElementById('btn-to-do-list');

// Create a const variable that reads the button Serivce 
const service = document.getElementById('btn-service');

// Create a const variable that reads the button Gmail Icon
const contactbtn = document.getElementById('user-icon-btn');

// --------------------------------------------------------- Changing the Tab depending on the value of the buttons ---------------

// Here we are putting in event listener to see if the button homepage was pressed
home.addEventListener("click", () => {
	window.location.replace("../Homepage/HomePage.html");
}); 

// Here we are putting in event listener to see if the button Journal was pressed
journal.addEventListener("click", () => {
	window.location.replace("../Journal-Page/Journal-Page.html");
});

/* Here we are putting in event listener to see if the button calander was pressed
calander.addEventListener("click", () => {
	window.location.replace("../Calander-Page/Calander-Page.html");
});
*/
// Here we are putting in event listener to see if the button checklist was pressed
checklist.addEventListener("click", () => {
	window.location.replace("../Checklist-Page/Checklist-Page.html");
});

// Here we are putting in event listener to see if the button service was pressed
service.addEventListener("click", () => {
	window.location.replace("../Service-Page/Service-Page.html");
});

// Here we are putting in event listener to see if the button contact was pressed
contactbtn.addEventListener("click", () => {
	window.location.replace("../Contact-Page/Contact-Page.html");
});