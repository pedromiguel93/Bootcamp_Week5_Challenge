// Array of special characters to be included in password
var specialCharacters ="@%+\/'!#$^?:,)(}{][~-_."

// Array of numeric characters to be included in password
var numericCharacters = "0123456789";

// Array of lowercase characters to be included in password
var lowerCasedCharacters = "abcdefghijklmnopqrstuvwxyz";

// Array of uppercase characters to be included in password
var upperCasedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// User choices defaults
var pwLength = 0;
var spcChar = true;
var numChar = true;
var upperChar = true;
var lowerChar = true;

//variable to store randomly generated characters
var generatedPassword = [];

// Function to prompt user for password options
function getPasswordOptions() {
  pwLength = parseInt(prompt("How long would you like your password to be?"));
  while (pwLength<10 || pwLength>64){
  alert("Number must be between 10 and 64, please enter a new number.");
  getPasswordOptions();
  }
  function pwOptions() {
    spcChar = confirm("Would you like your password to have special characters?");
    numChar = confirm("Would you like your password to have numerical characters?");
    upperChar = confirm("Would you like your password to have upper case letters?");
    lowerChar = confirm("Would you like your password to have lower case letters?");
    if (spcChar !== true && numChar !== true && upperChar !== true &&lowerChar !== true) {
      alert("Please select at least one character type.");
      pwOptions();
    } else {}
  }
  pwOptions();
}

// Function for getting a random element from an array
function getRandom(a) {
  randomIndex = Math.floor(Math.random() * a.length);
  randomItem = a[randomIndex];
  generatedPassword.push(randomItem);
}

// Function to generate password with user input
function generatePassword() {
  if (spcChar == true && numChar !== true && upperChar !== true && lowerChar !== true) {
    console.log("selected spcChar");
    while (generatedPassword.length < pwLength)
    getRandom(specialCharacters);

    } else if (spcChar !== true && numChar == true && upperChar !== true && lowerChar !== true) {
      console.log("selected numChar");
      while (generatedPassword.length < pwLength)
      getRandom(numericCharacters);

    } else if (spcChar !== true && numChar !== true && upperChar == true && lowerChar !== true) {
      console.log("selected upperChar");
      while (generatedPassword.length < pwLength)
      getRandom(upperCasedCharacters);

    } else if (spcChar !== true && numChar !== true && upperChar !== true && lowerChar == true) {
      console.log("selected lowerChar");
      while (generatedPassword.length < pwLength)
      getRandom(lowerCasedCharacters);
      
    } else if (spcChar == true && numChar == true && upperChar !== true && lowerChar !== true) {
      console.log("selected spcChar & numChar");
      while (generatedPassword.length < pwLength)
      getRandom(specialCharacters + numericCharacters);

    } else if (spcChar == true && numChar !== true && upperChar == true && lowerChar !== true) {
      console.log("selected spcChar & upperChar");
      while (generatedPassword.length < pwLength)
      getRandom(specialCharacters + upperCasedCharacters);

    } else if (spcChar == true && numChar !== true && upperChar !== true && lowerChar == true) {
      console.log("selected spcChar & lowerChar");
      while (generatedPassword.length < pwLength)
      getRandom(specialCharacters + lowerCasedCharacters);

    } else if (spcChar !== true && numChar == true && upperChar == true && lowerChar !== true) {
      console.log("selected numChar & upperChar");
      while (generatedPassword.length < pwLength)
      getRandom(numericCharacters + upperCasedCharacters);

    } else if (spcChar !== true && numChar == true && upperChar !== true && lowerChar == true) {
      console.log("selected numChar & lowerChar");
      while (generatedPassword.length < pwLength)
      getRandom(numericCharacters + lowerCasedCharacters);

    } else if (spcChar !== true && numChar !== true && upperChar == true && lowerChar == true) {
      console.log("selected lowerChar & upperChar");
      while (generatedPassword.length < pwLength)
      getRandom(lowerCasedCharacters + upperCasedCharacters);

    }  else if (spcChar == true && numChar == true && upperChar == true && lowerChar !== true) {
      console.log("selected spcChar & numChar & upperChar");
      while (generatedPassword.length < pwLength)
      getRandom(specialCharacters + numericCharacters + upperCasedCharacters);   

    } else if (spcChar == true && numChar == true && upperChar !== true && lowerChar == true) {
      console.log("selected spcChar & numChar & lowerChar");
      while (generatedPassword.length < pwLength)
      getRandom(specialCharacters + numericCharacters + lowerCasedCharacters);

    } else if (spcChar == true && numChar !== true && upperChar == true && lowerChar == true) {
      console.log("selected spcChar & upperChar & lowerChar");
      while (generatedPassword.length < pwLength)
      getRandom(specialCharacters + upperCasedCharacters + lowerCasedCharacters);

    }  else if (spcChar !== true && numChar == true && upperChar == true && lowerChar == true) {
      console.log("selected numChar & upperChar & lowerChar");
      while (generatedPassword.length < pwLength)
      getRandom(numericCharacters + upperCasedCharacters + lowerCasedCharacters);
    } else {
      console.log("selected spcChar & numChar & upperChar & lowerChar");
      while (generatedPassword.length < pwLength)
      getRandom(specialCharacters + numericCharacters + upperCasedCharacters + lowerCasedCharacters);
    }
    
    return generatedPassword.join("");
  }


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  password = generatePassword();
  passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click',() => {
  getPasswordOptions();
  writePassword();
})