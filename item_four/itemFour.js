// only natural set is considered 
function arrayMetrics(numericArray){
    const totalNumbers = numericArray.length;
    let evenCounter = 0, greaterThanThousand = 0, minNumber = numericArray[0], maxNumber = -1, average = 0;

    numericArray.forEach(number => {
        number > maxNumber && (maxNumber = number);
        number < minNumber && (minNumber = number);

        (number % 2 == 0) && evenCounter++;
        number > 1000 && greaterThanThousand++;

        average += number;
    })

    // Metrics
    average = average / totalNumbers;
    let percentageEven                = evenCounter         * 100 / totalNumbers, percentageOdd = 100 - percentageEven;
    let percentageGreaterThanThousand = greaterThanThousand * 100 / totalNumbers;
    let minNumberPercentage           = minNumber           * 100 / maxNumber;
    let averageNumberPercentage       = average             * 100 / maxNumber;

    // data format
    const dataToDisplay = {
        "Cantidad de elementos del arreglo": totalNumbers,
        "% pares": percentageEven, 
        "& impares": percentageOdd,
        "% mayores a 1000": percentageGreaterThanThousand,
        "Número máximo": maxNumber, 
        "Número mínimo":minNumber, 
        "% del número mínimo con respecto al máximo": minNumberPercentage,
        "% del promedio con respecto al máximo": averageNumberPercentage
    }

    console.table(dataToDisplay)
}


function generateRandomNumericArray(){
    const array = [];

    const length = Math.floor(Math.random()*1000 + 10);

    for(let i = 0; i < length; i++) array.push(Math.floor(Math.random()*10000 + 10));

    return array;
}

const numericArray = generateRandomNumericArray();

console.log("The numeric array is: ", numericArray);
arrayMetrics(numericArray);