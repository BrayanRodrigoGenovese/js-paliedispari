function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function isEven(number) {
  return number % 2 === 0;
}

const userGuess = prompt("Pari o Dispari?").trim().toLowerCase();
console.log("userGuess:" + userGuess);
const userNumber = parseInt(prompt("inserisci un numero da 1 a 5"));
console.log("userNumber:" + userNumber);
const pcNumber = randomNumber(1, 5);
console.log("pcNumber:" + pcNumber);
const even = isEven(userNumber + pcNumber);
console.log("isEven:" + even);

const result = (userGuess === "pari") === even ? "hai vinto" : "hai perso";
console.log("result:" + result);
