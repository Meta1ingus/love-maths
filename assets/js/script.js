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

    runGame('addition');
})

/**
 * The main game "loop" called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {
  // Game logic goes here
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;

  if (gameType === 'addition') {
    displayAdditionQuestion(num1, num2);
  } else {
    alert(`Unknown game type: ${gameType}`);
    throw `Unknown game type: ${gameType}. Aborting!`;
  }
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

function displayAdditionQuestion(operand1, operand2) {
    // Logic to display an addition question
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion(operand1, operand2) {
    // Logic to display a subtraction question
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '-';
}

function displayMultiplyQuestion(operand1, operand2) {
  // Logic to display a multiplication question
  document.getElementById('operand1').textContent = operand1;
  document.getElementById('operand2').textContent = operand2;
  document.getElementById('operator').textContent = '*';
}

function displayDivisionQuestion(operand1, operand2) {
  // Logic to display a division question
  document.getElementById('operand1').textContent = operand1;
  document.getElementById('operand2').textContent = operand2;
  document.getElementById('operator').textContent = '/';
}