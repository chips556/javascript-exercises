function rangeOfNum(start, end) {
    // this function creates an arr [1, 2, 3, 4, 5] for inputs rangeOfNum(1, 5)
    if (end - start === 0) {
        return [end]
    }

    let numbers = rangeOfNum(start + 1, end)
    numbers.unshift(start)
    return numbers
}

const sumAll = function(arr) {
    // this function takes an arr such as [1, 3] and returns sum of all numbers in between (6)
    if (arr.some(elem => typeof elem != "number")) { // if not a number
        return 'ERROR'
    }
    if (arr.some(elem => elem < 0)) { // if negative num
        return 'ERROR'
    }
    let numbers = rangeOfNum(...arr.sort((a, b) => a - b)); // create arr with range of num
    return numbers.reduce((a, b) => a + b)
};

// Do not edit below this line
module.exports = {sumAll, rangeOfNum};
