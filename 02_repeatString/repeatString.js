const repeatString = function (string, number) {
  if (number < 0) {
    return 'ERROR';
  }
  if (number === 0 || string === '') {
    return '';
  }

  let newString = [];
  for (let i = 0; i < number; i++) {
    newString.push(string);
  }

  return newString.join('');
};

// Do not edit below this line
module.exports = repeatString;
