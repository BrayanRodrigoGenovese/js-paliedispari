function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function isEven(number) {
  return number % 2 === 0;
}

console.log(randomNumber(1, 5));
