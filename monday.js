/**
 * 2. Area of a circle
 */
function areaOfCircle() {
  console.log('Area of a circle')
  var pi = 3.14
  console.log(typeof pi)
  var radius = 5
  console.log(typeof radius)
  var area = pi * radius * radius
  console.log(`The area of a circle given the radius ${radius} (m) is ${area} (m2)`)
}
// areaOfCircle()

/**
 * 3. Operators & Comparison
 */
function operatorsComparison() {
  // Part 1 : Operators expressions
  console.log(`10 + 24 === 34 >>>`, 10 + 24 === 34);
  console.log(`"10" + "24" === "1024" >>>`, "10" + "24" === "1024");
  console.log(`"Hello" + " " + 2021 === "Hello 2021" >>>`, "Hello" + " " + 2021 === "Hello 2021");
  console.log(`1 + 2 * 3 === 7 >>>`, 1 + 2 * 3 === 7);
  console.log(`(1 + 3) ** 2 === 16 >>>`, (1 + 3) ** 2 === 16);
  console.log(`1 / 0 === Infinity >>>`, 1 / 0 === Infinity);
  console.log(`6 % 2 === 0 >>>`, 6 % 2 === 0);
  console.log(`5.5 % 2 === 1.5 >>>`, 5.5 % 2 === 1.5);
  console.log(`Number("123") === 123 >>>`, Number("123") === 123);
  console.log(`typeof (1 + "") === "string" >>>`, typeof (1 + "") === "string");

  // Part 2 : Comparison expressions
  console.log(`5 == "5" === true >>>`, 5 == "5" === true);
  console.log(`5 === "5" === false >>>`, 5 === "5" === false);
  console.log(`8 != 8.0 === false >>>`, (8 != 8.0) === false);
  console.log(`(8 !== 8.0) === false >>>`, (8 !== 8.0) === true);
  console.log(`"true" === true === false >>>`, "true" === true === false);
  console.log(`4 <= 4.0 === true >>>`, 4 <= 4.0 === true);
  console.log(`7 >= 7 === true >>>`, 7 >= 7 === true);

  // Part 3 : Logical expressions
  console.log(`true && true === true >>>`, true && true === true);
  console.log(`true && false === false >>>`, true && false === false);
  console.log(`true || true === true >>>`, true || true === true);
  console.log(`false || true === true >>>`, false || true === true);
  console.log(`!true === false >>>`, !true === false);
  console.log(`!false === true >>>`, !false === true);
  console.log(`(false && (true || true)) === false >>>`, (false && (true || true)) === false);
  console.log(`false && true || true === true >>>`, false && true || true === true);
}
// operatorsComparison()

/**
 * 4. Conditionals
 */
function conditionals(x) {
  if (x === 0) {
    console.log(x, " is zero")
  } else if (x > 0) {
    console.log(x, " is a positive number")
  } else {
    console.log(x, " is a negative number")
  }
}

// conditionals(0);
// conditionals(-4);
// conditionals(2);

/**
 * 5. Loops
 */

function listOfNumberInOrder(x, y) {
  if (x > y) {
    for (y; y <= x; y++) {
      console.log(y)
    }
  } else {
    for (x; x <= y; x++) {
      console.log(x)
    }
  }
}
// listOfNumberInOrder(9,14)
// listOfNumberInOrder(9,1)

function sumAllFromStartToEnd(x, y) {
  var firstNo = x
  var secondNo = y

  if (firstNo >= secondNo) {
    console.log(`The second number must greater than first one!`)
  } else if (firstNo < secondNo) {
    var result = 0
    for (firstNo; firstNo < secondNo; firstNo++) {
      result += firstNo
    }
    console.log(`Sum of numbers from ${x} to ${y} is: ${result}.`)
  }
}
// sumAllFromStartToEnd(10, 5)
// sumAllFromStartToEnd(1, 5)
function sumOfDigits() {
  var number = 1024;
  var result = number%10 + number%100/10 + number%1000/100 + number%1000/1000
  console.log(result)


  for(let x = 1; x <=4; x++){
    var result = 0
    (number - result) % 10**x
  }
}
sumOfDigits()

/**
 * 6. Functions
 */
function problem1() {
  console.log(`Wow, it worked!`)
}
problem1()

function problem2() {
  var result = `Prison Break`
  console.log(result)
  return result
}
problem2()

function problem3(yourName) {
  var result = `My name is ${yourName}. GM!`
  console.log(result)
  return result
}
problem3()

function conditional() {
  if (x === 0) {
    console.log(x, " is zero")
  } else if (x > 0) {
    console.log(x, " is a positive number")
  } else {
    console.log(x, " is a negative number")
  }
}
conditional()

function listOfNumberInOrder(x, y) {
  if (x > y) {
    for (y; y <= x; y++) {
      console.log(y)
    }
  } else {
    for (x; x <= y; x++) {
      console.log(x)
    }
  }
}
// listOfNumberInOrder(9,14)
// listOfNumberInOrder(9,1)

function seriesOfNumber(x, y) {
  var firstNo = x
  var secondNo = y

  if (firstNo >= secondNo) {
    console.log(`The second number must greater than first one!`)
  } else if (firstNo < secondNo) {
    var result = 0
    for (firstNo; firstNo < secondNo; firstNo++) {
      result += firstNo
    }
    console.log(`Sum of numbers from ${x} to ${y} is: ${result}.`)
  }
}
// sumAllFromStartToEnd(10, 5)
// sumAllFromStartToEnd(1, 5)

function sumOfDigits() {
  var number = 1024;
  var result = number%10 + number%100/10 + number%1000/100 + number%1000/1000
  console.log(result)


  for(let x = 1; x <=4; x++){
    var result = 0
    (number - result) % 10**x
  }
}
sumOfDigits()