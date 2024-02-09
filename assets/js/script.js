// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener('DOMContentLoaded', function(){
    // Get all button elements from the DOM
    let buttons = document.getElementsByTagName('button');
    // Loop through each button
    for (let button of buttons){
        // Add an event listener to the button that triggers when it's clicked
        button.addEventListener('click', function(){
            // Check if the clicked button has the "submit" data attribute
            if(this.getAttribute('data-type') === 'submit'){
                // If it does, display an alert saying "You clicked Submit!"
                alert('You clicked Submit!');
            } else {
                // If it doesn't, get the value of the "data-type" attribute
                let gameType = this.getAttribute('data-type');
                // Display an alert with the type of game that was clicked
                alert(`You clicked ${gameType}`);
            }
        })
    }


})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame() {
    //Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}


function checkAnswer() {}

function calculateCorrectAnswer() {}

function incrementScore() {}

function incrementWrongAnswer() {}

function displayAdditionQuestion() {}

function displaySubtractQuestion() {}

function displayMultiplyQuestion() {}
