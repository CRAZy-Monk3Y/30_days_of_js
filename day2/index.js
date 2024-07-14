// Operators

// Task1
function sum(num1, num2) {
  console.log("Sum: ", num1 + num2);
}

sum(20, 2);

// Task2
function subtract(num1, num2) {
  console.log("Subtraction:", Math.abs(num1 - num2));
}

subtract(22, 55);

// Task3
function multiply(num1, num2) {
  console.log("Multiplication", num1 * num2);
}

multiply(22, 2);

// Task4
function divide(num1, num2) {
  if (num1 != 0) {
    console.log("Division", num1 / num2);
  } else if (num1 === num2) {
    console.log("Division", num2 / num1);
  } else {
    console.log("Division not possible");
  }
}

divide(22, 55);

// Task5
function remainder(num1, num2) {
  console.log("Remainder", num1 % num2);
}

remainder(23, 2);

// Task6
let num1 = 1;
num1 += 1;
console.log(num1);

// Task7
num1 -= 1;
console.log(num1);

// Task8
let num2 = 11;

console.log(num1 > num2);
console.log(num1 < num2);

// Task9
console.log(num1 >= num2);
console.log(num1 <= num2);

// Task10
console.log(num1 === num2);
console.log(num1 == num2);

// Task11
if (num1 === 1 && num2 === 12) {
  console.log("Satisfy Task11");
} else {
  console.log("Does not Satisfy Task11");
}

// Task12
if (num1 === 1 || num2 === 12) {
  console.log("Satisfy Task12");
} else {
  console.log("Does not Satisfy Task12");
}

// Task13
if (!num2 === 12) {
  console.log("Satisfy Task13");
} else {
  console.log("Does not Satisfy Task13");
}

// Task14
num2 >= 0
  ? console.log("Number is Positive")
  : console.log("Number is Negative");
