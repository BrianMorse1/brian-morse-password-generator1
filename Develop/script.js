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


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button


generateBtn.addEventListener("click", writePassword);{

}
