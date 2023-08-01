function passwordValidator(password) {
    const passwordLength = password.length;

    if(passwordLength < 16) return "La contraseña debe tener al menos 16 caracteres"
    if(password.includes(" ")) return "La contraseña no puede contener espacio en blanco";
    if(password.includes("0")) return "La contraseña no puede contener el número 0";

    let lowerCaseCounter = 0, upperCaseCounter = 0, numberCounter = 0;
    let char;

    const specialCharsCounter = {
        "!": 0,
        "(": 0,
        "!": 0,
        "@": 0,
        "#": 0,
        "$": 0,
        "%": 0,
        "ˆ": 0,
        "&": 0,
        "*": 0,
        "-": 0,
        "_": 0,
        "+": 0,
        "=": 0,
        "?": 0,
        ")": 0,
        "total": 0
    }

    for(let indexChar in password){
        char = password[indexChar];

        if(specialCharsCounter.hasOwnProperty(char)) { 
            if(specialCharsCounter[char] > 0) return "La contraseña no puede repetir caracteres especiales";
            if(specialCharsCounter.hasOwnProperty(password[indexChar - 1])) return "La contraseña no puede tener dos caracteres especiales consecutivos";

            specialCharsCounter[char]++; 
            specialCharsCounter.total++;
            continue;
        }

        if(indexChar != 0 && password[indexChar - 1] === char) return "La contraseña no puede tener dos letras o números iguales consecutivas";
        if(!isNaN(parseInt(char))) { numberCounter++; continue; } 

        if(password.charCodeAt(indexChar) > 97 && password.charCodeAt(indexChar) < 122) lowerCaseCounter++;
        if(password.charCodeAt(indexChar) > 65 && password.charCodeAt(indexChar) < 90) upperCaseCounter++;
    }

    if(lowerCaseCounter === 0 || upperCaseCounter === 0) return "La contraseña debe mezclar mayúsculas y minúsculas";
    if(specialCharsCounter.total < 2) return "La contraseña debe tener al menos dos caracteres especiales";
    if(numberCounter < 4) return "La contraseña debe contener al menos cuatro (4) números";


    return "Contraseña válida";
}

const message1 = passwordValidator("monitor17"); // invalid
const message2 = passwordValidator("monitor17@._monitor19"); // invalid
const message3 = passwordValidator("moNiTor5003456@mm_"); // invalid
const message4 = passwordValidator("monitormonitormonitorMonitorMONITOR"); // invalid
const message5 = passwordValidator("monitor19monitorMonitor@s_"); // invalid
const message6 = passwordValidator("mmmmmonitorM@gmail.com"); // valid
const message7 = passwordValidator("$Monitor@_gmail_^com"); // valid
const message8 = passwordValidator("Monitor_8192@gmail.com"); // valid

console.log("Mensaje 1:", message1);
console.log("Mensaje 2:", message2)
console.log("Mensaje 3:", message3)
console.log("Mensaje 4:", message4)
console.log("Mensaje 5:", message5)
console.log("Mensaje 6:", message6)
console.log("Mensaje 7:", message7)
console.log("Mensaje 8:", message8)