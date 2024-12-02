// Generating a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;//variable of the total attempts
// making a function to check the guess number to a random number  
function checkGuess() {
    //Calling the elements by their ID 
    const userGuess = parseInt(document.getElementById('guess').value);
    const result = document.getElementById('result');
    const attemptsElement = document.getElementById('attempts');
    attempts++;//making increment in the attempts

     // making the condition of if else that user have to input a number between 1 to 100
     // making the three condition that:
     // 1. user do not have the input the empty label
     // 2. user do not have to input negative number 
     // 3. user do not have to input number greater than 100
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        //showing the text if user does not follow the above statement
        result.textContent = 'Please enter a valid number between 1 and 100.';
       //Telling how many attempts you ave done OR counting the number of attempts  
        attemptsElement.textContent = `Attempts: ${attempts}`;
        //User guess number is less than the random number
    } else if (userGuess < randomNumber) {
        //than print this 
        result.textContent = 'Too low! Try again.';
        // and add 1 number to the total number of attempts  
        attemptsElement.textContent = `Attempts: ${attempts}`;
        //User guess number is greater than the random number
    } else if (userGuess > randomNumber) {
        //than print this 
        result.textContent = 'Too high! Try again.';
        // and add 1 number to the total number of attempts  
        attemptsElement.textContent = `Attempts: ${attempts}`;
    } else {
        // userguess number is same as the random number than print this 
        result.textContent = `Congratulations! You guessed it in ${attempts} attempt(s). The number was ${randomNumber}.`;
        // and than show the total number of attempts
        attemptsElement.textContent = `Attempts: ${attempts}`;
    }
}