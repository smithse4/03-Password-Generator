// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  console.log("Generating my password!");
}

// // Input variables:
// var confirmSpecialCharacters;
// var confirmNumbers;
// var confirmLowerLetters;
// var confirmUpperLetters;

// Possible password character options:
var specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "|",];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// User clicks "Generate Password" button to start generate password functiom:
// function promptUser(){
// Prompt the user for password length:
  var passwordLength = prompt("How many characters would you like in your password? The number of characters in your password must be between 8 and 128.");

  var userPWLength = parseInt(passwordLength)

// Confirm password is a number between 8 and 128:
    if(userPWLength >= 8 && userPWLength <=128){
      alert("Your passwaord will have " + userPWLength + " characters.")
    } else {
      alert("You must enter a number to generate password length. Refresh page to try again.")
    }

// Boolean prompts to confirm if the following 4 character types are permitted in users password:
  // 1. Special characters
  var confirmSpecialCharacters = confirm("Are special characters okay in your password?");

  // .2 Numbers?
  var confirmNumberCharacters = confirm("Are numeric characters okay in your password?");

  // 3. Lower case?
  var confirmLowerCharacters = confirm("Are lowercase characters okay in your password?");

  // 4. Upper case?
  var confirmUpperCharacters = confirm("Are uppercase characters okay in your password?");


// If user answers false for all 4 character sets:
if (!confirmSpecialCharacters && !confirmNumberCharacters && !confirmLowerCharacters && !confirmUpperCharacters) {
  alert("You must choose at least one character type.");
}

    // Accomodate answers!generate password based on user specifications
    // NOTE: user specifications come from confirms
    // Save as variables: 
      // for(var i = 0; i <=USER #; i++){

      // }
      // problem: how to go get special charactors - SEE LINK IN README

// Conditionals for password:

