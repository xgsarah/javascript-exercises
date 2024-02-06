const palindromes = function (string) {
  const arr = string
    .split('')
    .filter(
      (char) =>
        char !== '' &&
        char !== ',' &&
        char !== ' ' &&
        char !== '.' &&
        char !== '!'
    )
    .map((char) => char.toLowerCase());
  console.log('res:', arr.join(''), arr.reverse().join(''));

  return arr.join('') === arr.reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
