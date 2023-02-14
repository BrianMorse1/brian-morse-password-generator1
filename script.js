// Assignment code here


// Functions to generate character types in password, calls random ASCII values with ranges determined by number of ASCII characters of a given type plus the position of the first item of a given character type in the ASCII chart.
function createRandomLowercase(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function createRandomUppercase(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function createRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

//creates set of symbols to pull from randomly

function createRandomSymbol(){
  const symbols = "!@#$%^&*(){}[]=<>/";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

//creates prompts for types of characters to use in password and how many and stores boolean values



function generatePassword(){

  
  var lowerBool = confirm("Do you want lowercase characters in your password?");

  var upperBool = confirm("Do you want uppercase characters in your password?");
  
  var numberBool = confirm("Do you want numbers in your password?");
  
  var symbolsBool = confirm("Do you want lower case characters in your password?");
  
  var length = prompt("How many characters would you like your password?");

  while (length < 8 || length > 128) {
    length = prompt("How many characters would you like your password?");
  }

  var validChars = []

  var password = ""

  if (lowerBool == true) {
      validChars.push(createRandomLowercase)
  }

  if (upperBool == true) {
    validChars.push(createRandomUppercase)
}
  if (numberBool == true) {
  validChars.push(createRandomNumber)
}
  if (symbolsBool == true) {
  validChars.push(createRandomSymbol)
}


for (let i = 0; i < length; i++){
  var character = validChars[Math.floor(Math.random() * validChars.length)];
  
  password = password + character();
     }
return password

}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  
  
    passwordText.value = password;


  
}

// Add event listener to generate button


generateBtn.addEventListener("click", writePassword);

  

