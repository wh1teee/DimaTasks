const number = 5;

function getFactorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i
    }
    console.log(result)
}

getFactorial(number)