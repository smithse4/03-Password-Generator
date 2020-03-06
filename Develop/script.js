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
  var special = " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  var specialCharacters = confirm("Are special characters okay in your password?")

    // .2 Numbers
    var numbers = 0123456789
    var numCharacters = confirm("Are numeric characters okay in your password?")

    // 3. Lower case
    var lower = abcdefghijklmnopqrstuvwxyz
    var lowerCharacters = confirm("Are lowercase characters okay in your password?")

    // 4. upper case
    var upper = ABCDEFGHIJKLMNOPQRSTUVWXYZ
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
