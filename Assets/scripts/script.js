// Global Variables
var generateBtn = document.querySelector("#generate");

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-"];

// Collect user input
function userInput() {
  // Prompt the user for password length:
  var passLength = parseInt(
    prompt(
      "How many characters would you like in your password? The number of characters in your password must be between 8 and 128."
    )
  );

  // Confirm password is a number:
  if (isNaN(passLength)) {
    alert(
      "You must enter a number between 8 and 128 to generate password length."
    );
    return;
  }

  // Confirm password is a number between 8 and 128:
  if (passLength >= 8 && passLength <= 128) {
    alert("Your password will have " + passLength + " characters.");
  } else {
    alert(
      "You must enter a number between 8 and 128 to generate password length."
    );
    return;
  }

  // Boolean prompts to confirm if the following 4 character types are permitted in users password:
  // 1. Lower case?
  var confirmLower = confirm(
    "Would you like lowercase characters in your password?"
  );

  // 2. Upper case?
  var confirmUpper = confirm(
    "Would you like uppercase characters in your password?"
  );

  // 3. Numbers?
  var confirmNumber = confirm(
    "Would you like numeric characters in your password?"
  );

  // 4. Special characters
  var confirmSpecial = confirm(
    "Would you like special characters in your password?"
  );

  // If user answers false for all 4 character sets:
  if (
    !confirmSpecial &&
    !confirmNumber &&
    !confirmLower &&
    !confirmUpper
  ) {
    alert("You must choose at least one character type for your password.");
    return;
  }

  // All user data stored in userData object
  var userData = {
    passLength: passLength,
    confirmSpecial: confirmSpecial,
    confirmNumber: confirmNumber,
    confirmLower: confirmLower,
    confirmUpper: confirmUpper,
  };

  return userData;
}

// Conditionals for user character selections:
function generatePassword() {
  var passwordData = userInput();

  // Array to store final password characters
  var pword = [];
  // Array to store all character options based on user input
  var allSelectedChar = [];
  // Array to include at least one of every chosen character type in final password
  var mustIncludeChar = [];

  // Populate allSelectedChar and mustIncludeChar arrays based on user input
  if (passwordData.confirmLower) {
    allSelectedChar = allSelectedChar.concat(lower);
    mustIncludeChar.push(randomize(lower));
  };

  if (passwordData.confirmUpper) {
    allSelectedChar = allSelectedChar.concat(upper);
    mustIncludeChar.push(randomize(upper));
  };

  if (passwordData.confirmNumber) {
    allSelectedChar = allSelectedChar.concat(numbers);
    mustIncludeChar.push(randomize(numbers));
  };

  if (passwordData.confirmSpecial) {
    allSelectedChar = allSelectedChar.concat(special);
    mustIncludeChar.push(randomize(special));
  };

  // Get random characters from the allSelectedChar array to push to the pword array
  for (var i=0; i < passwordData.passLength; i++) {
    var selectedChar = randomize(allSelectedChar);
    pword.push(selectedChar);
  }

  // Check for at least one of every chosen character type in final password
  for (var i=0; i < mustIncludeChar.length; i++) {
    pword[i] = mustIncludeChar[i];
  }

  // Return final password by joining the pword array
  return pword.join("");

}

// Get random item from an array
function randomize(array) {
  var randomChar = array[Math.floor(Math.random() * array.length)];
  return randomChar;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button to call writePassword function
generateBtn.addEventListener("click", writePassword);