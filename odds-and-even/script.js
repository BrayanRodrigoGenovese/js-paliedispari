function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function isEven(number) {
  return number % 2 === 0;
}

const computerNumber = randomNumber(1, 5);
const userGuess = prompt("Pari o Dispari?").trim().toLowerCase();
const userNumber = parseInt(prompt("inserisci un numero da 1 a 5"));
const even = isEven(userNumber + computerNumber);

console.log(userGuess);
console.log(computerNumber);
console.log(userNumber);
console.log(computerNumber + userNumber);

if ((userGuess === "pari") === even) {
  console.log("hai vinto");
} else {
  console.log("hai perso");
}
