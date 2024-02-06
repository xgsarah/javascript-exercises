const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (arr) {
  return arr.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((prev, curr) => {
    return prev * curr;
  }, 1);
};

const power = function (x, y) {
  return Array(y)
    .fill(x)
    .reduce((prev, curr) => prev * curr, 1);
};

const factorial = function (x) {
  return Array.from({ length: x }, (v, item) => item + 1).reduce(
    (prev, curr) => prev * curr,
    1
  );
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
