// Assignment code here
var generateBtn = document.querySelector("#generate");
var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowercaseArray = ["a", "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(){
  var password = [];
  var length = 11;
  var includesNumbers = true;
  if(includesNumbers){
  var indexOfNumToUseInPassword = Math.floor(Math.random() * numArray.length);

  var numToUse = numArray[indexOfNumToUseInPassword];
  password.push(numToUse);
    length--;

    var uppercase = prompt("Enter number of desired uppercase characters. (0-3)", "3");
    var lowercase = prompt("Enter number of desired lowercase characters. (0-3)", "3");
    var special = prompt("Enter number of desired special characters. (0-2)", "2");
    var number = prompt("Enter number of desired special characters. (0-3)", "3");
    var amount = prompt("Enter desired length of password (8 - 128)", "11");

}

for(var i = 0; i < length; i++){
  var indexOfLowercaseLetterToUseInPassword = Math.floor(
    Math.random() * lowercaseArray.length);
  
    password.push(lowercaseArray[indexOfLowercaseLetterToUseInPassword]);

}

return password.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

