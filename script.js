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

var passwordLength;
var shufflePassword;

// Function to prompt user for password options
function getPasswordOptions() {

  // Get password length from user
  passwordLength = prompt("How many characters do you want your password to be?");
  passwordLength = parseInt(passwordLength);

  // Make sure password length is between 10 and 64 characters
  //SCRIPT GOES HERE

  return passwordLength;

}

// Function to shuffle the characters in a string
function shuffle(string) {
  return string.split('').sort(() => Math.random() -0.5).join('');
}

 

// Function for getting a random element from an array
function getRandom(arr) {

  // Pick random index from array
  let randomIndex = Math.floor(Math.random() * arr.length);

  // Return element at that index
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {

  getPasswordOptions();

  // Initialise password as empty string
  let password = "";

  // Get special character preference from user
  let includeSpecial = confirm("Do you want to include special characters in your password?");

  // Get number preference from user
  let includeNumbers = confirm("Do you want to include numbers in your password?");

  // Get lowercase preference from user
  let includeLowercase = confirm("Do you want to include lowercase letters in your password?");

  // Get uppercase preference from user
  let includeUppercase = confirm("Do you want to include uppercase letters in your password?");

  // Initialise allCharacters as an empty string
  let allCharacters = " ";

  // If special characters requested, add to allCharacters
  if (includeSpecial) {
    allCharacters += specialCharacters;
    password += getRandom(specialCharacters);
  }

  // If lowercase requested, add to allCharacters
  if (includeLowercase) {
    allCharacters += lowerCasedCharacters;
    password += getRandom(lowerCasedCharacters);
  }

  // If uppercase requested, add to allCharacters
  if (includeUppercase) {
    allCharacters += upperCasedCharacters;
    password += getRandom(upperCasedCharacters);
  }

  // If numbers requested, add to allCharacters
  if (includeNumbers) {
    allCharacters += numericCharacters;
    password += getRandom(numericCharacters);
  }

  allCharacters = allCharacters.split(',').join('');

  // Generating the password

  for (let i = password.length; i < passwordLength; i++) {
    //Pick random character from allCharacters
    let randomCharacter = getRandom(allCharacters);

    // Add character to the password
    password += randomCharacter;
  }

  // Randomise generate password
  let shuffledPassword = shuffle(password);
  password = shuffledPassword;

  
  console.log(allCharacters);
  // Return the generated password
  return password;

  
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
