/* Loop structures */
// Print numbers from 1 to 100
// Write a program that prints all numbers from 1 to 100. Use a 'for' loop.
for (let i = 1; i <= 100; i++) {
    console.log(i)
}


// Sum of the first N numbers
// Create a function that takes a number 'n' and returns the sum of the first 'n' natural numbers using a while 'loop'
let n = 6,
    sum = 1,
    nextNumber = sum
if (n > 0) {
    while (n) {
        (nextNumber !== 1) ? sum += nextNumber : null

        nextNumber += 1
        n--
    }
    console.log(sum)
}


// Number of Digits
// Write a function that takes a number and returns the number of digits in that number using a 'while' loop
let n = 40000,
    countDigits = 0
while (n > 1) {
    n /= 10
    countDigits++
}
console.log(countDigits)


// Factorial os a Number
// Create a function that calculates the factorial of a given number using a 'for' loop
function calculateFactorial(n) {
    let result = 1

    for (let i = n; i > 0; i--) {
        result *= i
    }

    return result
}
console.log(calculateFactorial(5))


// Reverse a string
// Create a function that takes a string and returns its reverse using a 'for' loop
let string = 'vitor',
    result = ''

for (let i = string.length - 1; i >= 0; i--) {
    result += string[i]
}
console.log(result)


// Fibonacci
// Write a program that generates the first 'n' numbers of the Fibonacci sequence using a 'while' loop
let n = 10,
    firstNumber = 0,
    secondNumber = 1,
    auxNumber = 0

console.log(firstNumber)
while (n) {
    console.log(secondNumber)

    auxNumber = firstNumber
    firstNumber = secondNumber
    secondNumber += auxNumber
    n--
}


// Prime numbers
// Write a program that finds all prime numbers between 1 and 100 using nested loops ('for' inside 'for')
for (let i = 1; i <= 100; i++) {
    let countDivisibleTimes = 0
    for (let j = 2; j <= i; j++)
    {
        if (i % j === 0) {
            countDivisibleTimes++
        }
    }
    countDivisibleTimes === 1 && console.log(i)

}


// Remove duplicates from an array
// Create a function that removes duplicates from an array using loops ('for' inside 'for')
function removeDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            arr[i] === arr[j] ? arr.splice(i, 1) : arr
        }
    }

    return arr
}
console.log(removeDuplicates([1,1,2,4,5,6,6]))