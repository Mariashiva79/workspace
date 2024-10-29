// 2. Write a JavaScript conditional statement to find the sign of the product of three numbers. 
// Display an alert box with the specified sign.
// Sample numbers : 3, -7, 2
// Output : The sign is - 

// const num1 = parseFloat(prompt("Enter the first number");
// const num2 = parseFloat(prompt("Enter the second number");
// const num3 = parseFloat(prompt("Enter the third number");

function found_sign (num1, num2, num3) {
    if (typeof num1 !== "number" || typeof num2 !== "number" || typeof num3 !== "number"){
        console.log ("Any number is not valid number")
    }
    const result = num1*num2*num3;
    if (result >= 0) {
        console.log (`The sign of ${result} is +`)
    } else {
        console.log (`The sign of ${result} is -`)
    }
}

found_sign ();

module.exports = { found_sign };
