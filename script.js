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

  // // Change Character set arrays to strings
  // var upperCharString = upperCasedCharacters.toString();
  // var lowerCharString = lowerCasedCharacters.toString();
  // var specCharString = specialCharacters.toString();
  // var numCharString = numericCharacters.toString();

  // console.log(upperCharString);
  // console.log(lowerCharString);
  // console.log(specCharString);
  // console.log(numCharString);

// Function to prompt user for password options
function getPasswordOptions() {
  
  
}

// Function for getting a random element from an array
function getRandom(arr) {
  let randElement = Math.floor(Math.random() * arr.length);

  return arr[randElement];
}

function getRandomChar(arrays) {
  let randChar = Math.floor(Math.random() * arrays.length);

  return arrays[randChar];
}

// Function for adding random element to array at a random point
function placeStringInArray(arr) {
  
  for (var i = 0; i < arr.length; i++) {
    const testArr = [getRandom(specialCharacters), getRandom(numericCharacters), getRandom(lowerCasedCharacters), getRandom(upperCasedCharacters)];
    arr[i] = getRandomChar(testArr);
  }

  return arr;
}

// Get random special character
var randSpecial = getRandom(specialCharacters);
console.log(randSpecial);

// Get random numeric character
var randNumber = getRandom(numericCharacters);
console.log(randNumber);

// Get random lowercase character
var randLower = getRandom(lowerCasedCharacters);
console.log(randLower);

// Get random uppercase character
var randUpper = getRandom(upperCasedCharacters);
console.log(randUpper);

// Function to generate password with user input
function generatePassword() {

  

  // // ask the user to enter how many characters they want their password to be
  // var passwordLength = prompt("How many characters would you like your password to be?");

  // // create empty string to store the password
  // var newPassword = "";

  // // create empty string to store possible characters
  // var possibleChar = [];

  // // let modifiedArray = placeStringInArray();
  // // console.log(modifiedArray);

  const testArray = new Array(6);
  console.log(placeStringInArray(testArray));

  // // Ask user for which types of characters to include in the password
  // var includeSpecial = confirm("Do you want to include special characters in your password?");
  // var includeUpper = confirm("Do you want to include uppercase letters in your password?");
  // var includeLower = confirm("Do you want to include lowercase letters in your password?");
  // var includeNumber = confirm("Do you want to include numbers in your password?");

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