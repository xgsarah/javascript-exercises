const convertToCelsius = function (x) {
  const celcius = (x - 32) * (5 / 9);
  return celcius % 1 === 0 ? celcius : Number(celcius.toFixed(1));
};

const convertToFahrenheit = function (x) {
  const fahrenheit = x * (9 / 5) + 32;
  return fahrenheit % 1 === 0 ? fahrenheit : Number(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
