//function to generate random password
function generateRandomPassword() {
    var numberOfChar= window.prompt("Enter the length of the Password");
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var specialCase = "!@#$%^&*()_+";
    var passwordCharSet = "";
    var userPassword="";
    //validate if any number entered less than 8 or more than 128    
    if (numberOfChar < 8 || numberOfChar > 128 || numberOfChar == ""){
        window.alert("Password cannot be less than 8 characters or more than 128");
    }
    else {
        var num=window.confirm("Numbers must be included?");
        var upper=window.confirm("Upper Case characters must be included?");
        var lower= window.confirm("Lower case characters must be included?");
        var special=window.confirm("Special charaters must be included?");
        if (num){passwordCharSet += numbers;}
        if (upper){passwordCharSet += upperCase;}
        if (lower){passwordCharSet += lowerCase;}
        if (special){passwordCharSet += specialCase;}
        //loop through the length to generate random number using Math function
        for (var i=0;i< numberOfChar; i++) {
            userPassword = userPassword + passwordCharSet.charAt(Math.floor(Math.random() * Math.floor(passwordCharSet.length - 1)));
            document.getElementById("password").value=userPassword;
        }
    }
}

//function to copy password to clipboard
function copyPassword() {
    var textVal= document.getElementById("password").value;
    console.log(textVal);
    if (textVal== ""){ 
        alert("No Password to Copy");
    }
    else {
        document.getElementById("password").select();
        document.execCommand('copy');
        alert("Password copied to clipboard!");
    }

}

