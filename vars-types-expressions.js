/* Variables declaration and Value assignment */
// Declare a string variable to store your name and assign your name to the variable
let name = "Vitor"

// Declare a number variable and store your age and assign your age to the variable
let age = 28

// Declare a boolean variable to indicate if you are a student and assign 'true' or 'false'
let student = true


/* Data types */
// Create variables for each of the primitive data types in Javascript: string, number, boolean, null, undefined,
// symbol and bigint
let name2 = "Vitor",
    age2 = 28,
    student2 = true,
    city = null,
    country = undefined,
    key = Symbol('CPF'),
    //bank_balance = 1000000n
    bank_balance = BigInt(1000000)


/* Arithmetic expressions */
// Declare two variables with numbers and calculate the sum, subtraction, multiplication, and division of these numbers
// Store each result in a separate variable.
let value1 = 10.5,
    value2 = 7.3

console.log(value1 + value2)
console.log(value1 - value2)
console.log(value1 * value2)
console.log(value1 / value2)

/* String concatenation */
// Use template literals to create a message that includes the variables 'name' and 'age'
let message = `Hello my name is ${name}
and my age is ${age}`

console.log(message)


/* Variable reassignment */
//Reassing new values to the variables 'name', 'age', and 'student', and display the new values
name = 'Victor'
age = 29
student = false

console.log(name)
console.log(age)
console.log(student)


/* Assignment operators */
// Use assignment operators (+=, -=, *=, /=) to modify the values of the numeric variables
age += 10
console.log(age)

age -= 15
console.log(age)

age *= 3
console.log(age)

age /= 4
console.log(age)