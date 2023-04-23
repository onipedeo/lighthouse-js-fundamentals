// for (let number = 100; number <= 200; number++) {
//   if (number % 3 === 0 && number % 4 === 0) {
//     console.log("LoopyLighthouse");
//   } else if (number % 4 === 0) {
//     console.log("Lighthouse");
//   } else if (number % 3 === 0) {
//     console.log("Loopy");
//   } else {
//     console.log(number);
//   }
// }

// const amounts = [61.00, 52.25, 112.99, 5.00];

// let total = 0;
// for (let amount of amounts) {
//   total += amount;
// }
// console.log(total);


// function laugh(num) {
//   let greet = "";
//   for (i = 0; i < num; i++) {
//     greet = greet + "ha";
//   }
//   return (greet + "!");
// }
// // console.log(laugh(3));
// w = laugh(3);
// console.log(w);

let catSays = function (max) {
  let catMessage = "";
  for (let i = 0; i < max; i++) {
    catMessage += "Meow";
  }
  return catMessage + '\n';
}

function catTriangle(num) {
  let catTriangle = "";

  let line = 1

  for (line = 1; line <= num; line++) {
    catTriangle = catTriangle + catSays(line);
  }
  return catTriangle;
}

console.log(catTriangle(7));

function helloCat(callBackFunc) {
  return "hello " + callBackFunc(2);
}

console.log(helloCat(catSays));

function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression
emotions("happy", function laugh(num) {
  let smile = "";
  for (let i = 0; i < num; i++) {
    smile += 'ha';
  }
  return smile + "!";
})