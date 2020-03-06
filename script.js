// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  console.log("Generating my password!");
}

// Prompt the user for password length
var passwordLength = prompt("How many characters would you like in your password?")

// Check to see if the user actually entered a length
// Using boolean prompts, confirm if the following 4 character types are permitted in users password.
  // 1. Special characters
  var special = [!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", "]", "^", "_", "{", "|", "}", "~"];
  var specialCharacters = confirm("Are special characters okay in your password?")

    // .2 Numbers
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    var numCharacters = confirm("Are numeric characters okay in your password?")

    // 3. Lower case
    var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var lowerCharacters = confirm("Are lowercase characters okay in your password?")

    // 4. upper case
    var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] 
    var upperCharacters = confirm("Are uppercase characters okay in your password?")

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