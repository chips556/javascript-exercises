const add = function(num1, num2) {
  return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
  if (arr.length > 0) {
	return arr.reduce((a, b) => a + b)
  }
  return 0
};

const multiply = function(arr) {
  return arr.reduce((a, b) => a * b)
};

const power = function(num, pow) {
	return Math.pow(num, pow)
};

const factorial = function(num) {
	if (num <= 0) {
    return 1
  }

  return factorial(num - 1) * num
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
