// Ask the user to input name, surname and fav color to generate a custom password
const userName = prompt("Inserisci il tuo nome: ");
const userSurname = prompt("Inserisci il tuo cognome: ");
const userFavColor = prompt("Inserisci il tuo colore preferito ");

console.log(userName, userSurname, userFavColor);

// Create the password by combining the user's inputs
let userPassword;

userPassword = userName + userSurname + userFavColor + "22";

// Display the password in the proper section of the website
document.getElementById("psw").innerHTML = userPassword;

console.log(userPassword);

