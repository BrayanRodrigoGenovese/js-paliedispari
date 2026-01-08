function isPalindrome(word) {
  reversedUserWord = "";
  for (let i = userWord.length - 1; i >= 0; i--) {
    reversedUserWord += userWord[i];
  }
  return userWord === reversedUserWord;
}

console.log(isPalindrome(userWord));

const userWord = prompt(
  "Inserisci una parola o un numero per verificarne la palindromia"
).trim();
