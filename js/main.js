const userWord = prompt("Inserisci la parola per verificare se è palindroma");
function isPalindrome(word) {
  reversedUserWord = "";
  for (let i = userWord.length - 1; i >= 0; i--) {
    reversedUserWord += userWord[i];
  }
  return userWord === reversedUserWord;
}

console.log(isPalindrome(userWord));
