// If else Statements
const checkPositive = (number) => {
  if (number === 0) {
    console.log("Given number is zero");
  } else if (number > 0) {
    console.log("Given number is positive");
  } else if (number < 0) {
    console.log("Given number is negative");
  }
};

checkPositive(0);
checkPositive(-22);
checkPositive(20);

console.log("\n");

// Switch case
const checkNumber = (number) => {
  switch (true) {
    case number < 0:
      console.log("Given number is negative");
      break;
    case number > 0:
      console.log("Given number is positive");
      break;
    default:
      console.log("Given number is zero");
      break;
  }
};

checkNumber(20);
checkNumber(0);
checkNumber(-22);

console.log("\n");

const checkNumber1 = (number) => {
  return number > 0
    ? "Given number is positive"
    : number < 0
    ? "Given number is negative"
    : "Given number is zero";
};

console.log(checkNumber1(20));
console.log(checkNumber1(-22));
console.log(checkNumber1(0));
