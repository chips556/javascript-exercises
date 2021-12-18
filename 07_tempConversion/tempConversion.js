const ftoc = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    celsius = parseFloat(celsius.toFixed(1), 10)
    return celsius
};
const ctof = function (celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    fahrenheit = parseFloat(fahrenheit.toFixed(1), 10)
    return fahrenheit
};
// Do not edit below this line
module.exports = {
    ftoc,
    ctof
};
