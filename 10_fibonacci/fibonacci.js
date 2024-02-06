const fibonacci = function (x) {
  const num = Number(x);

  if (num < 0) {
    return 'OOPS';
  }
  if (num === 0) {
    return num;
  }
  const arr = [1];
  for (let i = 0; i < num; i++) {
    if (i === 0) {
      arr.push(i + arr[i]);
    } else {
      arr.push(arr[i] + arr[i - 1]);
    }
  }
  return arr[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
