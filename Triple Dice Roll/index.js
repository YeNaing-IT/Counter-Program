const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");

const min = 1
const max = 6

let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function() {
  randomNum1 = Math.floor(Math.random() * max) + min;
  randomNum2 = Math.floor(Math.random() * max) + min;
  randomNum3 = Math.floor(Math.random() * max) + min;
  label1.textContent = "Dice 1: " + randomNum1
  label2.textContent = "Dice 2: " + randomNum2
  label3.textContent = "Dice 3: " + randomNum3
}