/**
 * 2. Into Ziff Zubb
 */
function ziffZubb(start, end) {
  for (let num = start; num <= end; num++) {
    if (num % 5 === 0 && num % 3 === 0) {
      console.log("ZiffZubb")

    } else if (num % 3 === 0) {
      console.log("Ziff")

    } else if (num % 5 === 0) {
      console.log("Zubb")

    } else {
      console.log(num)

    }
  }
}
// ziffZubb(1, 20);

/**
 * 3. Greatest Common Divisor
 */
function gcd(num1, num2) {
  var result = 0
  if (num1 < num2) {
    for (let index = 0; index <= num1; index++) {
      if (num1 % index === 0 && num2 % index === 0 && index > result) {
        result = index
      }
    }
  }
  console.log(result)
}
// gcd(6, 12)
// gcd(12, 18)

/**
 * 4. Least Common Multiple
 */

function lcm(num1, num2) {
  var result = 0
  for (let index = 1; index < num1 * num2; index++) {
    if (index % num1 === 0 && index % num2 === 0) {
      result = index
    }
  }
  console.log(index)
  return result
}
// lcm(15, 20)

function isPrime(num) {
  var result

  if (num < 2) {

    result = false
    console.log(result)

  } else if (num === 2) {

    result = true
    console.log(result)

  } else {

    for (let index = 2; index < num; index++) {

      if (num % index === 0) {

        result = false
        console.log(result);
        return

      } else {

        result = true

      }
    }

  }
  console.log(result);
}

// isPrime(2)
// isPrime(3)
// isPrime(4)

function nthPrime(nth) {
  // var result = 0
  // var primeLocation = 0

  // if (primeLocation !== nth) {
  //   for (let index = 1; index < nth; index++) {
  //     if (primeLocation === nth)
  //       if (isPrime(index)) {
  //         primeLocation += 1
  //       }

  //   }

  // }


}

// nthPrime(2)

/**
 * 6. Capture Time
 */

function captureTime(params) {
  var dateNow = Date.now()

  console.log(dateNow.toString())
}
// captureTime()

/**
 * 7. Advanced Random Number
 */

function getRandom() {
  for (let index = 0; index < 5; index++) {
    console.log(Math.random());
  }
}
// getRandom()

function getRandomInt() {
  for (let index = 0; index < 100; index++) {
    console.log(Math.floor(Math.random() * 10));
  }
}
// getRandomInt()

function getRandomFromTo(num1, num2) {

  console.log(Math.floor(
    Math.random() * Math.abs(num1 - num2)
  ) + Math.min(num1, num2));

}
// getRandomFromTo(11, 19)

function getRandomItem(array) {
  var nthItem = Math.floor(
    Math.random() * array.length
  )
  console.log('array[nthItem] :>> ', array[nthItem]);
}
var arr = ["apple", "orange", "kiwi"];

// getRandomItem(arr)

/**
 * 8. Nested For Loop
 */
function printOut(params) {
  for (let i = 1; i <= params; i++) {

    console.log(i);

    for (let j = 1; j < i; j++) {
      console.log(i);

    }

  }
}

// printOut(3)

function grid() {}
/**
 * 9. Iterate over Arrays
 */

function iterateOverArrays(array) {
  var total = 0
  for (let i = 0; i < array.length; i++) {
    total +=array[i]
    console.log(`Peter earned $${array[i]} today!`);
  }
  console.log(`Total Peter earned $${total} this fist-half month`)

  for (let i = 0; i < 240; i++) {
    var estEarning = (Math.floor(Math.random()*3 + 6))
    array.push(estEarning)

  }
  console.log(array);
}

var workingHours = [6, 6, 7, 7, 8, 8, 6, 7, 8, 7];
iterateOverArrays(workingHours)