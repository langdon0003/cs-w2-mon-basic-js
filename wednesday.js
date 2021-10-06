/**
 * 2. Arrays
 */
function arrays() {

  const programmers = []
  programmers.push('Bill')
  programmers.push('Mark')
  programmers.push('Elon')
  console.log('programmers :>> ', programmers);

  programmers.splice(1, 1, 'Alan')
  console.log('programmers :>> ', programmers);

  programmers.shift()
  console.log('programmers :>> ', programmers);

  const myCompanies = ['CoderSchool', 'SkyMavis']
  const theirCompanies = ["Apple", "Google"];
  const techCompanies = myCompanies.concat(theirCompanies);

  console.log(techCompanies);
}
// arrays()

/**
 * 3. Array Methods
 */
var arr = [1, 2, 3, 4, 5];

function reverseArray(array) {
  const newArray = []
  for (let i = 0; i < array.length; i++) {
    newArray.unshift(array[i])
  }
  console.log('newArray :>> ', newArray);
}

reverseArray(arr)

function evenOddArray(array) {
  const evenArray = []
  const oddArray = []

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenArray.push(array[i])
    } else {
      oddArray.push(array[i])
    }
  }
  console.log('evenArray :>> ', evenArray);
  console.log('oddArray :>> ', oddArray);
}

// evenOddArray(arr)

function filterEvenNumbers() {
  const array = []

  for (let i = 0; i <= 100; i++) {
    array.push(Math.floor(Math.random() * 100));
  }
  console.log('array :>> ', array);

  evenOddArray(array)
}

filterEvenNumbers()