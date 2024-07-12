/* Type conversion */
// Convert a decimal number to a string
console.log(typeof(13.10))
console.log(typeof(13.10.toString()))

// Convert a string containing a decimal number to a floating-point number
console.log(typeof("10.05"))
console.log(typeof(parseFloat("10.05")))


/* String manipulation */
// Create a function that returns the concatenation of two strings
console.log("Hello" + " World")
console.log("Hello".concat(" World"))

// Write a function that takes a string as input and returns its length
function returnStringLength(string) {
    return string.length
}
console.log(returnStringLength("vitor"))


/* Number manipulation */
// Create a function that rounds down a floating-point number
function roundsNumberDown(number) {
    return Math.floor(number)
}
console.log(roundsNumberDown(10.9))

// Create a function that converts a temperature from Celsius to Fahrenheit
function convertCelsiusToFahrenheit(celsius) {
    return 9/5 * celsius + 32
}
console.log(convertCelsiusToFahrenheit(25))


/* Array manipulation */
// Create a function that adds an element to the end of an array and returns the new array
function addElementToArray(element, array) {
    array.push(element)
    return array
}
arr = [10, 2, 3, 7]
console.log(addElementToArray(5, arr))

// Write a function that removes the first element of an array and returns the new array
function removeFirstElementArray(array) {
    //array.splice(0, 1)
    array.shift()
    return array
}
arr = ["test", "hello", "vitor"]
console.log(removeFirstElementArray(arr))