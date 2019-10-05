function generateRandomPassword() {
    var numberOfChar= window.prompt("Enter the length of the Password");
    var valuesOfPwd = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
    console.log(numberOfChar);
    var passWd = "";
    if (numberOfChar < 8 || numberOfChar > 128){
        window.alert("Password cannot be less than 8 characters or more than 128");
    }
    else {
        for (var i=0;i< numberOfChar; i++) {
            passWd = passWd + valuesOfPwd.charAt(Math.floor(Math.random() * Math.floor(valuesOfPwd.length - 1)));
            document.getElementById("password").value=passWd;
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