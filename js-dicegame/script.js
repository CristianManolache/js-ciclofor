// Dichiarare variabili dell dice ed impostare i numeri random
var randomNumber = Math.floor(Math.random() * 6) + 1; // 1-6
var playerOneImages = "img/dice" + randomNumber +".png";
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
var playerOneImages1 = "img/dice" + randomNumber1 +".png";
// INSERIRE IMG E ATRIBUIRE

document.querySelector('.pl1').setAttribute('src', playerOneImages);
document.querySelector('.pl2').setAttribute('src', playerOneImages1);
// STATUS
if (playerOneImages > playerOneImages1) {
  document.querySelector('h1').innerHTML = 'Player 1 WIN';
} else if (playerOneImages < playerOneImages1) {
  document.querySelector('h1').innerHTML = 'Player 2 WIN';
} else {
  document.querySelector('h1').innerHTML = 'Roll Again - DRAW';
}
console.log('Player 1');
console.log(playerOneImages);
console.log('Player 2');
console.log(playerOneImages1);
