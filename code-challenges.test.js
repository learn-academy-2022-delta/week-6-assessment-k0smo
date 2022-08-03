// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" },]

describe("capitalize", () => {
  it("capitalize", () => {
    expect(capitalize(people)).toEqual(["Ford Prefect is a hitchhiker", "Zaphod Beeblebrox is president the galaxy", "Arthur Dent is a radio employee"])
  })
}
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]


// b) Create the function that makes the test pass.
// Psuedo code:
// 1. Create a function that takes in an array of people objects.
// 2. Create a new array.
// 3. Loop through the length array of people.
// 4. Create a new string.
// 5. Add the name and occupation to the string.
// 6. Add the string to the new array.
// 7. Return the new array.

  const capitalize = (people) => {
    let newArray = [];
    for (let i = 0; i < people.length; i++) {
      let newString = `${people[i].name} is ${people[i].occupation}`;
      newArray.push(newString);
  }


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]
describe("remainders", () => {
  it("should return an array of numbers", () => {
    expect(remainders(hodgepodge1)).toEqual([2, 0, -1, 0]);
    expect(remainders(hodgepodge2)).toEqual([2, 1, -1]);
})
})

// b) Create the function that makes the test pass.

// Psuedo code:
// 1. Create a function that takes in a mixed data array.
// 2. return hodgepodge.map(item => { 
// 3. if (typeof item === "number") {
// 4. return item % 3;
// 5. Else return item 0

  const remainders = (hodgepodge) => {
    return hodgepodge.map(item => {
      if (typeof item === "number") {
        return item % 3
      } else {
        return 0
      }
  })
  }

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

  describe("cubeAndSum", () => {
    it("should return a number", () => {
      expect(cubeAndSum(cubeAndSum1)).toEqual(99);
      expect(cubeAndSum(cubeAndSum2)).toEqual(1125);
    })

  })


// b) Create the function that makes the test pass.
// psuedocode:
// 1. Create a function that takes in an array of numbers.
// 2. Create a variable that is equal to 0.
// 3. Loop through the array.
// 4. Add the cube of the number to the variable.
// 5. Return the variable, the sum of the cubes of the numbers.
  
const cubeAndSum = (numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += Math.pow(numbers[i], 3);
    return sum;  
  }
}