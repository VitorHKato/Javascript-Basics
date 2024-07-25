/* Functions and parameters */
// Simple function
// Write a function called 'sum' that receives two numeric parameters and returns their sum
function sum(num1, num2) {
    return num1 + num2
}
console.log(sum(2, 3))

// Function with multiple parameters
// Create a function called 'calculator' that accepts three parameters: two numbers and a string representing the
// operation to be performed ('add', 'subtract', 'multiply', 'divide'). The function should return the result of the
// operation
function calculator(num1, num2, operation) {
    if (operation === 'add') {
        return num1 + num2
    } else if (operation === 'subtract') {
        return num1 - num2
    } else if (operation === 'multiply') {
        return num1 * num2
    } else if (operation === 'divide') {
        return num1 / num2
    }
}
console.log(calculator(20, 4, 'divide'))

// Function with default parameters
// Write a function called 'greeting' that accepts two parameters 'name' and 'message'. The 'message' parameters should
// have a default value of 'Hello'. The function should return a string that combines the message and the name
function greeting(name, message='Hello') {
    return message + ' ' + name
}
console.log(greeting('Vitor'))

// Function that return multiple values
// Create a function called 'operations' that receives two numbers and returns a list with the results of the addition,
// subtraction, multiplication, and division of the two numbers
function operations(num1, num2) {
    let listResult = []
    listResult.push(num1+num2)
    listResult.push(num1-num2)
    listResult.push(num1*num2)
    listResult.push(num1/num2)

    return listResult
}
console.log(operations(20, 4))

// Nested function
// Write a function called 'outerFunction' that contains another function called 'innerFunction'. The 'outerFunction'
// should receive a number as parameter, and the 'innerFunction' should return the square of that number. The
// 'outerFunction' should return the result of the 'innerFunction'
function outerFunction(num1) {

    function innerFunction() {
        return num1 * num1
    }

    return innerFunction(num1)
}
console.log(outerFunction(4))

// Function with optional parameters
// Create a function called 'converter' that accepts three parameters: 'value', 'sourceUnit' and 'targetUnit'. If
// 'targetUnit' is not provided, it should default to 'meters'. The function should perform the conversion from
// 'sourceUnit' to 'targetUnit' and return the converted value
function converter(value, sourceUnit, targetUnit='meters') {
    const conversionsRate = {
        'meters': {
            'meters': 1,
            'centimeters': 100,
            'millimeters': 1000
        },
        'centimeters': {
            'meters': 0.01,
            'centimeters': 1,
            'millimeters': 10
        },
        'millimeters': {
            'meters': 0.001,
            'centimeters': 0.1,
            'millimeters': 1
        }
    }

    let rate = conversionsRate[sourceUnit][targetUnit]

    return rate * value
}
console.log(converter(1000, 'millimeters'))

// Function that uses another function
// Write two functions: 'double' and 'triple'. The 'double' function should receive a number and return its double.
// The 'triple' should receive a number and return its triple. Then, create a third function called 'calculate' that
// receives a number and a function as a parameters, and returns the result of the passed function applied to the number
function double(num1) {
    return num1 * 2
}
function triple(num1) {
    return num1 * 3
}
function calculate(num1, func) {
    return func(num1)
}
console.log(calculate(4, triple))

// Recursive function
// Write a recursive function called 'factorial' that accepts non-negative integer and returns the factorial of that number
function factorial(num1) {
    if (num1 >= 0) {
        let previous = num1
        function sum() {
            previous--
            if (previous > 0) {
                num1 = num1 * previous
                sum()
            }
        }
        sum()
        return num1
    }

    return 'The number is negative'
}
console.log(factorial(4))