const arr = [1, 1, 2, 2, 3, 4, 3, 4, 5]

function getUnique(arr) {
    const arrSort = arr.sort()

    for (let i = 0; i < arrSort.length; i += 2) {
        if (arrSort[i] !== arrSort[i + 1]) {
            return arrSort[i]
        }
    }
    return 'not have unique'
}

console.log(getUnique(arr))