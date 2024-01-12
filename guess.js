let randomNumber = (parseInt(Math.random() * 100 + 1));

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}





//This function aims to validate whether the user has entered a correct number and ensures that no negative numbers are inputted into the field. 
function validateGuess(guess){
 if(isNaN(guess)){
    alert("Please enter a valid number")
 } else if(guess < 1){
    alert("Please enter a number more than 1")
 } else if(guess > 100){
    alert("Please enter a number less than 100")
 } else {
    prevGuess.push(guess)
    
    
    if(numGuess === 10){
       displayGuess(guess)
       displayMessage(`Game over. Random number was ${randomNumber}`)
       endGame()
    } else {
        displayGuess(guess)
        checkGuess(guess)
    }
 }
}



//This function will output a message indicating whether the value is correct, low, or high.
function checkGuess(guess){
   if(guess === randomNumber){
   displayMessage(`You guessed it right it was ${randomNumber}`)
   endGame()
   } else if (guess < randomNumber) {
      displayMessage("Number is too LOW")
   } else if (guess > randomNumber){
      displayMessage("Number is too High")
   }
}




//This function is designed to clean the input value, update an array, and decrement the remaining guess count.
function displayGuess(guess) {
 userInput.value = ""
 guessSlot.innerHTML += `${guess} , `;
 numGuess++
 remaining.innerHTML = `${11 - numGuess}`
}





//This function interacts with the Document Object Model (DOM), clearing the input area and decreasing the remaining guess count.
function displayMessage(message) {
 lowOrHi.innerHTML = `<h2> ${message} </h2>`;
}




function endGame(){
    userInput.value = ""
    userInput.setAttribute("disabled", "")
    p.classList.add("button")
    p.innerHTML = `<h2 id ="newGame">Start New Game</h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame();
}
function newGame(){
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener("click", (e)=>{
      randomNumber = (parseInt(Math.random() * 100 + 1));
      prevGuess = []
       numGuess = 1
       guessSlot.innerHTML = ""
       remaining.innerHTML = `${11 - numGuess}`
       userInput.removeAttribute("disabled")
       startOver.removeChild(p)

       playGame = true; 
    })
}








