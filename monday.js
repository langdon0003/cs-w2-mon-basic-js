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
  console.log(`10 + 24 === 34 >>>`,10 + 24 === 34);
  console.log(`"10" + "24" === "1024" >>>`,"10" + "24" === "1024");
  console.log(`"Hello" + " " + 2021 === "Hello 2021" >>>`,"Hello" + " " + 2021 === "Hello 2021");
  console.log(`1 + 2 * 3 === 7 >>>`,1 + 2 * 3 === 7);
  console.log(`(1 + 3) ** 2 === 16 >>>`,(1 + 3) ** 2 === 16);
  console.log(`1 / 0 === Infinity >>>`,1 / 0 === Infinity);
  console.log(`6 % 2 === 0 >>>`,6 % 2 === 0);
  console.log(`5.5 % 2 === 1.5 >>>`,5.5 % 2 === 1.5);
  console.log(`Number("123") === 123 >>>`,Number("123") === 123);
  console.log(`typeof (1 + "") === "string" >>>`, typeof (1 + "") === "string");

  // Part 2 : Comparison expressions
  console.log(`5 == "5" === true >>>`,5 == "5" === true);
  console.log(`5 === "5" === false >>>`,5 === "5" === false);
  console.log(`8 != 8.0 === false >>>`,(8 != 8.0) === false);
  console.log(`(8 !== 8.0) === false >>>`,(8 !== 8.0) === true);
  console.log(`"true" === true === false >>>`,"true" === true === false);
  console.log(`4 <= 4.0 === true >>>`,4 <= 4.0 === true);
  console.log(`7 >= 7 === true >>>`,7 >= 7 === true);

  // Part 3 : Logical expressions
  console.log(`true && true === true >>>`,true && true === true);
  console.log(`true && false === false >>>`,true && false === false);
  console.log(`true || true === true >>>`,true || true === true);
  console.log(`false || true === true >>>`,false || true === true);
  console.log(`!true === false >>>`,!true === false);
  console.log(`!false === true >>>`,!false === true);
  console.log(`(false && (true || true)) === false >>>`,(false && (true || true)) === false);
  console.log(`false && true || true === true >>>`,false && true || true === true);
}
operatorsComparison()