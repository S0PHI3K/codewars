// Let's build a calculator.

// This is very basic Javascript kata.

// The test expects you to provide a Calculator object with the following methods:

// Calculator.add()
// Calculator.subtract()
// Calculator.multiply()
// Calculator.divide()
// Each method expects two arguments, so for instance:

// Calculator.add(1,4) should return 5.

// Only integers are expected to be passed in as arguments, and the divide method should return 'false' when trying the divide by zero.

var Calculator = {};
  
  Calculator.add = (num1, num2) => num1 + num2

  Calculator.subtract = (num1, num2) => num1 - num2

  Calculator.multiply = (num1, num2) => num1 * num2

  Calculator.divide = (num1, num2) => !num1 || !num2 ? false : num1 / num2


// A different example on solutions

var Calculator = {
    add:     (a, b) => a + b,
    subtract:(a, b) => a - b,
    multiply:(a, b) => a * b,
    divide:  (a, b) => b ? a / b : false
};