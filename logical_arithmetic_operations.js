/* Logical and Arithmetic operations */
// Ask the user for their age and display a message indicating whether they are of legal age (age 18 or older) or not
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Type your age: ", (age) => {
    let msg =  parseInt(age) >= 18 ? "You are of legal age." : "You are not of legal age."
    console.log(msg)
    readline.close()
})

// Ask the user for two numbers and display a message indicating which one is larger
readline.question("Type a number: ", (number1) => {
    readline.question("Type another number:", (number2) => {
        let greater = parseFloat(number1) > parseFloat(number2) ? parseFloat(number1) : parseFloat(number2)
        console.log(`Number ${greater} is the largest.`)
        readline.close()
    })
})

// Ask the user for a number and display a message indicating whether the number is odd or even
readline.question("Type a number: ", (number) => {
    let msg = parseInt(number) % 2 === 0 ? "Even" : "Odd"
    console.log(msg)
    readline.close()
})

// Ask the user for two boolean values (true or false) and display the result of the AND, OR, and NOT logical
// operations between them
readline.question("Type a boolean value: ", (value1) => {
    readline.question("Type another boolean value: ", (value2) => {
        let vl1 = value1.toLowerCase() === 'true'
        let vl2 = value2.toLowerCase() === 'true'

        console.log(`Value for AND: ${vl1 && vl2}`)
        console.log(`Value for OR: ${vl1 || vl2}`)
        console.log(`Value for NOT: ${!(vl1 && vl2)}`)
        readline.close()
    })
})

// Ask the user for two numbers and a logical operator (&& for AND, || for OR) and display the result of the logical
// expression
readline.question("Type a number: ", (number1) => {
    readline.question("Type another number:", (number2) => {
        readline.question("Type a logical operator (&&, ||): ", (operator) => {
            let result = operator === "&&" ? number1 && number2 : number1 || number2
            console.log(result)
            readline.close()
        })
    })
})

// Ask the user for two strings and display a message indicating whether they are equal or different
readline.question("Type a string: ", (str1) => {
    readline.question("Type another string: ", (str2) => {
        let msg = str1 === str2 ? "Equal": "Different"
        console.log(msg)
        readline.close()
    })
})