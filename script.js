
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
