//1. Write a JavaScript program that displays the largest integer among two integers.
// function calculate_largest_integer(integer1, integer2) {
//   let result;
//   if (
//     Number.isInteger(integer1) &&
//     Number.isInteger(integer2) &&
//     integer1 === integer2
//   ) {
//     result = `${integer1} is equal than ${integer2}`;
//   } else if (Number.isInteger(integer1) && Number.isInteger(integer2)) {
//     result =
//       integer1 > integer2
//         ? `${integer1} is largest than ${integer2}`
//         : `${integer2} is largest than ${integer1}`;
//   } else {
//     result = `${integer1} and/or ${integer2} are not a integer number`;
//   }
//   return result;
// }

// console.log(calculate_largest_integer(1, 2));
// console.log(calculate_largest_integer(5, 1));
// console.log(calculate_largest_integer(5, 1.5));

// console.log(calculate_largest_integer(5, 5));

// // opción 2
// function calculate_largest_integer(integer1, integer2) {
//   let result;
//   if (Number.isInteger(integer1) && Number.isInteger(integer2)) {
//     integer1 > integer2
//       ? (result = `${integer1} is largest than ${integer2}`)
//       : (result = `${integer2} is largest than ${integer1}`);
//     if (integer1 === integer2) result = `${integer1} is equal than ${integer2}`;
//   } else {
//     result = `${integer1} and/or ${integer2} are not a integer number`;
//   }
//   return result;
// }

//2. Write a JavaScript conditional statement to find the sign of the product of three numbers.
//Display an alert box with the specified sign.
//Sample numbers : 3, -7, 2
//Output : The sign is -

// function find_sign() {
//   let num1 = parseFloat(prompt('Please, enter the first number'), 10);
//   let num2 = parseFloat(prompt('Please, enter the second number'), 10);
//   let num3 = parseFloat(prompt('Please, enter the third number'), 10);
//   const product = num1 * num2 * num3;
//   if (Number.isNaN(product)) {
//     alert("Can't found the sign");
//   } else {
//     alert(product >= 0 ? 'The sign is +' : 'The sign is -');
//   }
// }
// find_sign();

// 3. Write a JavaScript conditional statement to sort three numbers.
//Display an alert box to show the results.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1
// function sort_numbers() {
//   let num1 = parseFloat(prompt('Please, enter the first number'), 10);
//   let num2 = parseFloat(prompt('Please, enter the second number'), 10);
//   let num3 = parseFloat(prompt('Please, enter the third number'), 10);

//   if (num1 > num2 && num1 > num3 && num2 > num3) {
//     alert(`${num1}, ${num2}, ${num3}`);
//   } else if (num1 >= num2 && num1 >= num3 && num3 >= num2) {
//     alert(`${num1}, ${num3}, ${num2}`);
//   } else if (num2 >= num1 && num2 >= num3 && num1 >= num3) {
//     alert(`${num2}, ${num1}, ${num3}`);
//   } else if (num2 >= num1 && num2 >= num3 && num3 >= num1) {
//     alert(`${num2}, ${num3}, ${num1}`);
//   } else if (num3 >= num1 && num3 >= num2 && num1 >= num2) {
//     alert(`${num3}, ${num1}, ${num2}`);
//   } else if (num3 >= num1 && num3 >= num2 && num2 >= num1) {
//     alert(`${num3}, ${num2}, ${num1}`);
//   } else {
//     alert('Something´s wrong');
//   }
// }
// sort_numbers();

// 4. Write a JavaScript conditional statement to find the largest of five numbers.
//Display an alert box to show the results.
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0

// function find_largest_number() {
//   const num1 = parseFloat(prompt('Please, enter the first number'), 10);
//   const num2 = parseFloat(prompt('Please, enter the second number'), 10);
//   const num3 = parseFloat(prompt('Please, enter the third number'), 10);
//   const num4 = parseFloat(prompt('Please, enter the forth number'), 10);
//   const num5 = parseFloat(prompt('Please, enter the fifth number'), 10);

//   if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
//     alert(`The largest number is ${num1}`);
//   } else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
//     alert(`The largest number is ${num2}`);
//   } else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
//     alert(`The largest number is ${num3}`);
//   } else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
//     alert(`The largest number is ${num4}`);
//   } else if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4) {
//     alert(`The largest number is ${num5}`);
//   } else {
//     alert(`Something wrong`);
//   }
// }
// find_largest_number();

// el 4 no funciona

// 5. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

for (let i = 0; i <= 15; i++) {
  i % 2 === 0 ? console.log(`${i} is even`) : console.log(`${i} is odd`);
}
