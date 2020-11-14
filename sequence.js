//3) найти в массиве индекс начала и конца самой длинной последовательности 0. For example you have [1,1,0,1,0,0,0,0] => output is 4, 7

const arr = [0, 1, 1, 1, 1, 0, 0, 1, 0, 0];

function foo(arr) {
    let temp = 0,
        startIndex = 0,
        startIndexMax = 0,
        endIndex = 0,
        endIndexMax = 0,
        maxLengthCurrent = 0,
        maxLength = 0

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === arr[i + 1]) {
            if (temp === 0) startIndex = i
            temp++
        } else {
            temp = 0
        }

        if (temp > maxLengthCurrent) {
            maxLengthCurrent = temp
            endIndex = i
        }

        if (maxLengthCurrent > maxLength) {
            maxLength = maxLengthCurrent
            endIndexMax = i
            startIndexMax = endIndexMax - temp + 1
        }


    }
    return `start: ${startIndexMax}, end: ${endIndexMax + 1}`
}

console.log(foo(arr))