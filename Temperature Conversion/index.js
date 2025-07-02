const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;
const unitBox = document.getElementById("unitBox");

function convert() {
  if(toFahrenheit.checked) {
    temp = Number(textBox.value);
    unitBox.value = "°C"

    temp  = temp * 9 / 5 + 32;
    result.textContent =  temp.toFixed(1) + "°F";
  }
  else if(toCelsius.checked) {
    temp = Number(textBox.value);
    unitBox.value = "°F"

    temp  = (temp - 32) * (5/9);
    result.textContent =  temp.toFixed(1) + "°C";
  }
  else {
    result.textContent = "Select a unit"
  }
}