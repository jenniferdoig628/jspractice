
alert("hello")

//Takes farenheit temp argument
function fahToCel(fahrenheit)
{
  var fahTemp = fahrenheit;

//Uses standard equation to convert from fahrenheit to celsius.
  var fToCelsius = (fahTemp - 32) * 5 / 9;

//Rounds the result to a whole number
  var roundNum = Math.round(fToCelsius);

//Concatenates strings and prints result to the console for user
  var message = fahTemp+' degrees farenheit is ' + roundNum + ' degrees celsius';
    console.log(message);
}


//takes celsius temp argument
function celToFah(celsius) {
var celTemp = celsius;

//uses standard equation to convert value
var celsiusToF = (celTemp * 9)/5 + 32;

// rounds to the nearest whole number
var roundNum = Math.round(celsiusToF);

//concatenates strings and prints to console for user
var message = celTemp+' degrees celsius is ' + roundNum + ' degrees fahrenheit';
  console.log(message);

}
