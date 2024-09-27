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

console.log(calculate_largest_integer(1, 2));
console.log(calculate_largest_integer(5, 1));
console.log(calculate_largest_integer(5, 1.5));

console.log(calculate_largest_integer(5, 5));

// opción 2
function calculate_largest_integer(integer1, integer2) {
  let result;
  if (Number.isInteger(integer1) && Number.isInteger(integer2)) {
    integer1 > integer2
      ? (result = `${integer1} is largest than ${integer2}`)
      : (result = `${integer2} is largest than ${integer1}`);
    if (integer1 === integer2) result = `${integer1} is equal than ${integer2}`;
  } else {
    result = `${integer1} and/or ${integer2} are not a integer number`;
  }
  return result;
}

//2. Write a JavaScript conditional statement to find the sign of the product of three numbers.
//Display an alert box with the specified sign.
//Sample numbers : 3, -7, 2
//Output : The sign is -

function find_sign(num1, num2, num3) {
    if (typeof num1 === "number" && typeof num2 === "number" && typeof num3 === "number"){
  const product = num1 * num2 * num3;
  return product >= 0 ? 'The sign is +' : 'The sign is -';
} else {
    return "kk"
}
}
console.log(find_sign(15, -7, 3));
console.log(find_sign(15, -7, 'no'));
