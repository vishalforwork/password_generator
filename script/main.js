const generate = () =>{
    // GATHERING USER PREFERANCES
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').value;
    const includeLowercase = document.getElementById('lowercase').value;
    const includeNumbers = document.getElementById('numbers').value;
    const includeSymbols = document.getElementById('symbols').value;

    // SETTING POSSIBLE CHARACTERS
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%&*-_";

    // SETTING A NULL PASSWORD
    let allowedChars = "";
    let password = "";


    includeLowercase ? allowedChars += lowercaseChars : "";
    includeUppercase ? allowedChars += uppercaseChars : "";
    includeNumbers ? allowedChars += numberChars : "";
    includeSymbols ? allowedChars += symbolChars : "";




    let msg;
    if(length <= 0){
        msg = "password length must be at least 1"
    }

    // if(allowedChars.length === 0){
    //     msg = "at least 1 set of characters need to be selected"
    // }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    document.getElementById('msg').innerHTML = msg ;   

    console.log(password);
    document.getElementById('res').innerHTML = password ;   


}
