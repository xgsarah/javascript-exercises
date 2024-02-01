const removeFromArray = function (arr, ...numbers) {
  return arr.filter((n) => numbers.indexOf(n) === -1);
};

// Do not edit below this line
module.exports = removeFromArray;
