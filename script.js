// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  console.log("Generating my password!");
}

// Input variables:
var confirmSpecialCharacters;
var confirmNumbers;
var confirmLowerLetters;
var confirmUpperLetters;

// Possible password character options:
var specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "|",];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// User clicks "Generate Password" button to start generate password functiom:
// function promptUser(){
// Prompt the user for password length:
  var passwordLength = prompt("How many characters would you like in your password? The number of characters in your password must be between 8 and 128.");

    if(parseInt(passwordLength) >= 8 && parseInt(passwordLength) <=128){
      alert("Your passwaord will have " + parseInt(passwordLength) + " characters.")
    } else {
      alert("You must enter a number to generate password length. Refresh page to try again.")
    }

   

// Make sure they entered a number:
  // if(userInput === "Left" || userInput === "Right"){
  //   console.log(userInput);
   
  // }else{
  //    promptUser("You must enter a number to generate password length.")
  // }

// Check to see if the user actually entered a length


// Boolean prompts to confirm if the following 4 character types are permitted in users password:
  // 1. Special characters
  var specialCharacters = confirm("Are special characters okay in your password?");

  // .2 Numbers?
  var numCharacters = confirm("Are numeric characters okay in your password?");

  // 3. Lower case?
  var lowerCharacters = confirm("Are lowercase characters okay in your password?");

  // 4. Upper case?
  var upperCharacters = confirm("Are uppercase characters okay in your password?");

    // Accomodate answers!generate password based on user specifications
    // NOTE: user specifications come from confirms
    // Save as variables: 
      // for(var i = 0; i <=USER #; i++){

      // }
      // problem: how to go get special charactors - SEE LINK IN README

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// // NOTES
// function generatePassword() {
//   var length = 8,
//       charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//       retVal = "";
//   for (var i = 0, n = charset.length; i < length; ++i) {
//       retVal += charset.charAt(Math.floor(Math.random() * n));
//   }
//   return retVal;
// }