

function updateLengthValue() {
    const lengthSlider = document.getElementById("lengthSlider");
    const lengthValue = document.getElementById("lengthValue");
    lengthValue.innerText = lengthSlider.value;
}

function generatePassword() {
    const lengthSlider = document.getElementById("lengthSlider");
    const length = parseInt(lengthSlider.value);
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+"; // 
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);  
        password += charset[randomIndex]; 
    }

    document.getElementById("password").innerText = password;
}

function copyToClipboard() {
    const passwordElement = document.getElementById("password");
    const passwordText = passwordElement.innerText;

    const textArea = document.createElement("textarea");
    textArea.value = passwordText;

    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    alert("Password copied to clipboard!");
}