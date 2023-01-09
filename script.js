// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

  // Change Character set arrays to strings
  var upperCharString = upperCasedCharacters.toString();
  var lowerCharString = lowerCasedCharacters.toString();
  var specCharString = specialCharacters.toString();
  var numCharString = numericCharacters.toString();

  console.log(upperCharString);
  console.log(lowerCharString);
  console.log(specCharString);
  console.log(numCharString);

// Function to prompt user for password options
function getPasswordOptions() {
  
  
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  // ask the user to enter how many characters they want their password to be
  var passwordLength = prompt("How many characters would you like your password to be?");

  // create empty string to store the password
  var password = "";

  // create empty string to store possible characters
  var possibleChar = [];

  // Ask user for which types of characters to include in the password
  var includeSpecial = confirm("Do you want to include special characters in your password?");
  var includeUpper = confirm("Do you want to include uppercase letters in your password?");
  var includeLower = confirm("Do you want to include lowercase letters in your password?");
  var includeNumber = confirm("Do you want to include numbers in your password?");

  // Add characters to string if chosen

  // Change Character set arrays to strings
  upperCasedCharacters.toString();
  lowerCasedCharacters.toString();
  specialCharacters.toString();
  numericCharacters.toString();

  console.log(upperCasedCharacters);
  console.log(lowerCasedCharacters);
  console.log(specialCharacters);
  console.log(numericCharacters);

}



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);