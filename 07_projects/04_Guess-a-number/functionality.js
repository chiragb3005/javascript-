let randomNumber = parseInt(Number(Math.random() * 100 + 1))

const userInput = document.querySelector('#guessFeild')
const submit = document.querySelector('#subt')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHigh')
const startOver = document.querySelector('.result')
// in case when user all 10 attempts done

const p = document.createElement('p')
p.style.color = 'black'
let prevGuess = [ ]
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', (event) => {
            event.preventDefault()
            const guess = parseInt(userInput.value)
            validateGuess(guess)
    })
}


// this function will check he give int between 1-100
function validateGuess(guess){
    if(guess === '' || guess < 1 || guess > 100 || isNaN(guess)){
        alert(`Enter a correct number bro!`)
    }
    else {
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`GAME OVER, random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

// will check guess with random number
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  }
   else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  }
   else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

// clean input and show the array
function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML = `${prevGuess}`;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;
}


// interact directly with DOM
function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}


function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', (event) => {
        randomNumber = parseInt(Number(Math.random() * 100 + 1))
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}
