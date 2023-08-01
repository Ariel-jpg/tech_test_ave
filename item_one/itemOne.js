function multiplyWithoutMultiply(x, y){
    let result = 0, negativeResult = false;

    if(x < 0) { negativeResult = !negativeResult; x = Math.abs(x); }
    if(y < 0) { negativeResult = !negativeResult; y = Math.abs(y); }

    for(let i = 0; i < x; i++) result += y;
    
    negativeResult && (result -= (result + result))

    return result;
}

function correctValue(x, y, result) { return (x*y) == result; }

// controlled test
function testWithNegativeNumbers() { 
    let x = -10, y = -3, successTests = 0;
    let multiplication = multiplyWithoutMultiply(x, y);

    correctValue(x, y, multiplication) && (successTests++);
    
    x = -30, y = 50;
    multiplication = multiplyWithoutMultiply(x, y);

    correctValue(x, y, multiplication) && (successTests++);
    
    x = 90, y = -10;
    multiplication = multiplyWithoutMultiply(x, y);

    correctValue(x, y, multiplication) && (successTests++);


    console.log(`Test with negative numbers result: ${successTests} of 3`)
}

// uncontrolled test
function testWithRandomNumbers() { 
    let multiplication, random_x, random_y, successTests = 0;


    for(let i = 0; i < 100; i++){
        random_x = Math.floor(Math.random()*10000 + 1);
        random_y = Math.floor(Math.random()*10000 + 1);

        multiplication = multiplyWithoutMultiply(random_x, random_y);
        correctValue(random_x, random_y, multiplication) && (successTests++);
    }

    console.log(`Test with random numbers result: ${successTests} of 100`)
}


const x = 1, y = -10;
const multiplication = multiplyWithoutMultiply(x, y), testResult = correctValue(x, y, multiplication) ? "correct!" : "incorrect!";

console.log(`The result of multiplication is: ${multiplication}`)
console.log(`This result is ${testResult}`)

console.log("\n----------- Tests -----------")
testWithNegativeNumbers();
testWithRandomNumbers();