//  for loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// while loop
let itr1 = 1;
while (itr1 <= 10) {
  console.log(itr1);
  itr1 += 1;
}

// do while
itr1 = 1;
do {
  console.log(itr1);
  itr1 += 1;
} while (itr1 <= 10);

// nested loop
for (let row = 1; row <= 5; row++) {
  let lineVal = "";
  for (let col = 1; col <= row; col++) {
    lineVal += " * ";
  }
  console.log(lineVal + "\n");
}

//  xcontrol statement
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  if (i === 7) {
    break;
  }
  console.log(i);
}
