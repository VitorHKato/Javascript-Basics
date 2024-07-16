/* Simples data input */
// Ask the user for their name and display a welcome message
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Type your name: ", (name) => {
    console.log(`Welcome, ${name}`)
    readline.close()
})


/* Number input and conversion */
// Ask the user for two numbers and display their sum
readline.question("Type first number: ", (n1) => {
    readline.question("Type second number:", (n2) => {
        var sum = parseFloat(n1) + parseFloat(n2)
        console.log(`Sum: ${sum}`)
        readline.close()
        readline.close()
    })
})


/* String input and manipulation */
// Ask the user for a string and display its length
readline.question("Type a string: ", (value) => {
    console.log(value.length)
    readline.close()
})


/* Concatenation of inputs */
// Ask the user for two strings and display their concatenation
readline.question("Type first string: ", (str1) => {
    readline.question("Type second string: ", (str2) => {
        console.log(str1 + str2)
        readline.close()
    })
})


/* String interpolation with inputs */
// Ask the user for their name and age, and display a message that includes this information using template literals
readline.question("Type your name: ", (name) => {
    readline.question("Type your age: ", (age) => {
        let message = `Hi ${name},
your age is ${age}`
        console.log(message)
        readline.close()
    })
})


/* Mathematical operations with inputs*/
// Ask the user for a number and display the square of that number
readline.question("Type a number: ", (num) => {
    let square = num * num
    console.log(square)
    readline.close()
})


/* Array input and manipulation */
// Ask the user for a series of numbers separated by commas and display the average of those numbers
readline.question("Type various numbers separated by comma: ", (numbers) => {
    let arr = numbers.split(",")
    let sum = arr.reduce((previousValue, currentValue) => {
        return parseFloat(previousValue) + parseFloat(currentValue)
    }, 0)
    let avg = sum / arr.length
    console.log(`Average: ${avg}`)
    readline.close()
})