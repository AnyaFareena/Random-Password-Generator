//function to generate random password
function generateRandomPassword() {
    var numberOfChar= window.prompt("Enter the length of the Password between 8 to 128");
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var specialCase = "!@#$%^&*()_+";
    var passwordCharSet = "";
    var userPassword="";
    //validate if any number entered less than 8 or more than 128    
    if (numberOfChar < 8 || numberOfChar > 128 || numberOfChar == ""){
        window.alert("Password cannot be less than 8 characters or more than 128");
        document.getElementById("password").value="";
    }
    else {
        var num=window.confirm("Should Numbers must be included in Password?  Click Ok for Yes and Cancel for No");
        var upper=window.confirm("Should Upper Case characters must be included in Password?  Click Ok for Yes and Cancel for No");
        var lower= window.confirm("Should Lower case characters must be included in Password?  Click Ok for Yes and Cancel for No");
        var special=window.confirm("Should Special charaters must be included in Password?  Click Ok for Yes and Cancel for No");
        if (num){passwordCharSet += numbers;}
        if (upper){passwordCharSet += upperCase;}
        if (lower){passwordCharSet += lowerCase;}
        if (special){passwordCharSet += specialCase;}
        
        //check is any of the options are selected if not display a message
        console.log('passwordCharSet:' + passwordCharSet);
        if (passwordCharSet != ""){
            //loop through the length to generate random number using Math function
            for (var i=0;i< numberOfChar; i++) {
                userPassword = userPassword + passwordCharSet.charAt(Math.floor(Math.random() * Math.floor(passwordCharSet.length - 1)));
                document.getElementById("password").value=userPassword;
        }
    }
        else {
            window.alert("None of the options are selected to generate the Password");
            document.getElementById("password").value="";
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

