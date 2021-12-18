const repeatString = function(str, num) {
    if (num < 0) {
        return 'ERROR'
    }
    if (num == 0) {
        return ''
    }
    let strCopy = str
    for (let i = 1; i < num; i++) {
        str += strCopy
    }
    return str
};

console.log(repeatString("hey", 5))
// Do not edit below this line
module.exports = repeatString;
