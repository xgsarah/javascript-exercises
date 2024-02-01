const sumAll = function (x, y) {
  console.log(typeof x, typeof y);
  if (typeof x !== 'number' || typeof y !== 'number' || x < 0 || y < 0) {
    return 'ERROR';
  }
  let sum = 0;
  const max = x > y ? x : y;
  const min = x < y ? x : y;

  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
