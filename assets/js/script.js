//Wait for the DOM to load before running the game
// Get the button elements and add event listeners to them

document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'submit') {
                alert('You clicked Submit!');
            } else {
                let gameType = this.getAttribute('data-type');
                alert(`You clicked ${gameType}!`);                
            }
        });
    }
})

function runGame() {
  // Game logic goes here
}

function checkAnswer() {
  // Logic to check the player's answer
}

function calculateCorrectAnswer() {
  // Logic to calculate the number of correct answer
}

function incrementScore() {
  // Logic to increment the player's correct answer count
}

function incrementWrongAnswer() {
  // Logic to increment the player's wrong answer count
}

function displayAdditionQuestion() {
  // Logic to display an addition question
}

function displaySubtractQuestion() {
  // Logic to display a subtraction question
}

function displayMultiplyQuestion() {
  // Logic to display a multiplication question
}

function displayDivisionQuestion() {
  // Logic to display a division question
}