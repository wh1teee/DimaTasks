// [1,1,1,2] => output 1,2
const arr = [1, 1, 1, 2, 2, 3, 4, 3, 4, 5, 5, 5, 6]

function getUnique(arr) {
    const arrSort = arr.sort()
    let result = []
    for (let i = 0; i < arrSort.length; i++) {
        if (arrSort[i] !== arrSort[i + 1]) {
            result += arrSort[i]
        } else {
            i++
        }
    }
    if (!result){
        return 'not have unique'
    }

    return result
}

console.log(getUnique(arr))