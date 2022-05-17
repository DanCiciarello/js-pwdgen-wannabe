// User declares name
const userName = prompt("Insert your name");

// User declares surname
const userSurname = prompt("Insert your surname");

// User declares favourite color
const userFavColour = prompt("Insert your favuorite colour");

// Get the HTML element
const newPassword = document.getElementById("new-password");

// Assign value to HTML element
newPassword.innerHTML = `${userName}${userSurname}${userFavColour}22`