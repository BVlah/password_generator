// Assignment code here

var chars = {
  lowAlpha: "abcdefghijklmnopqrstuvwxyz",
  upAlpha: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  num: "0123456789",
  special: "~!@#$%^*-_=+[{]}/;:,.?"
}
  
var generatePassword = function() {
  var password = "";
  // Get password length
  var getPasswordLength = function() {
    var passwordLength = "";
    while (passwordLength === "" || passwordLength === null) {
      passwordLength = prompt("How long do you want your password to be? Choose a number between 8 and 128.");
      if (passwordLength >=8 && passwordLength <= 128) {
        return passwordLength;
      }
      else {
        window.alert("Please entire a valid number between 8 and 128.");
        return getPasswordLength();
      }
    }
  };

  // Confirm password characters
  var getPasswordChars = function() {
    var passwordChars = "";
    // Confirm lower alphabet in password
    var confirmLowAlpha = window.confirm("Would you like to include lowercase letters in your password?");
    if (confirmLowAlpha) {
      passwordChars += chars.lowAlpha;
    }
    // Confirm upper alphabet in password
    var confirmUpperAlpha = window.confirm("Would you like to include uppercase letters in your password?");
    if (confirmUpperAlpha) {
      passwordChars += chars.upAlpha;
    }
    // Confirm numbers in password
    var confirmNum = window.confirm("Would you like to include numbers in your password?");
    if (confirmNum) {
      passwordChars += chars.num;
    }
    // Confirm special characters in password
    var confirmSpecial = window.confirm("Would you like to include special characters in your password?");
    if (confirmSpecial) {
      passwordChars += chars.special;
    }
    // Confirm characters were selected
    if (passwordChars === null || passwordChars === "") {
      window.alert("Please select at least 1 type of character to use for the password");
      return getPasswordChars();
    }
    else {
      return passwordChars;
    }
  };

  var passInfo = {
    length: getPasswordLength(),
    chars: getPasswordChars()
  };

  for (var i = 0; i < passInfo.length; i++) {
    password += passInfo.chars.charAt(Math.floor(Math.random() * passInfo.chars.length));
  };
  return password;
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);