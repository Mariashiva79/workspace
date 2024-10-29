// 1. Write a JavaScript program that displays the largest integer among two integers

let number1 = parseFloat(prompt("please enter the first number"), 10)
let number2 = parseFloat(prompt("please enter the second number"), 10)

while (!/^-?[0-9]+(\.[0-9]+)?$/.test(number1)) {
    alert('Please, enter a valid number');
    number1 = prompt('Enter the first number');
  }
while (!/^-?[0-9]+(\.[0-9]+)?$/.test(number2)) {
    alert('Please, enter a valid number');
    number2 = prompt('Enter the second number');
  }

function largest_one () {
    if (number1 > number2){
        alert (number1);
    } else if (number2 > number1) {
        alert (number2);
    } else {
      alert ("The numbers are the same")
    }
}
largest_one()