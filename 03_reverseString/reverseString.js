const reverseString = function(str) {
    // turn str into arr
    // reverse arr
    // turn arr into string
    let arr = str.split("")
    return(arr.reverse().join(""))
};

// Do not edit below this line
module.exports = reverseString;
