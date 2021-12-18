const removeFromArray = function(arr, ...rest) {
    // find index of arg in arr
    // if index > -1

    for (let item in rest) {
        let index = arr.indexOf(rest[item])
        if (index > -1) {
            arr.splice(index, 1)
        }
    }
    return arr
};

removeFromArray([1, 2, 3], 3)

// Do not edit below this line
module.exports = removeFromArray;
