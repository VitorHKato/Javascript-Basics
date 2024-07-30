
## Data Types:
### Type Conversion:
- Convert a decimal number to a string.
- Convert a string containing a decimal number to a floating-point number.
### String Manipulation:
- Create a function that returns the concatenation of two strings.
- Write a function that takes a string as input and returns its length.
### Number Manipulation:
- Create a function that rounds down a floating-point number.
- Develop a function that converts a temperature from Celsius to Fahrenheit.
### Array Manipulation:
- Create a function that adds an element to the end of an array and returns the new array.
- Write a function that removes the first element of an array and returns the new array.

## Variables, Types, Expressions and Assignments
### Variable Declaration:
- Declare a string variable to store your name.
- Declare a number variable to store your age.
- Declare a boolean variable to indicate if you are a student.
### Value Assignment:
- Assign your name to the variable name.
- Assign your age to the variable age.
- Assign true or false to the variable student.
### Data Types:
- Create variables for each of the primitive data types in JavaScript: string, number, boolean, null, undefined, symbol, and bigint.
### Arithmetic Expressions:
- Declare two variables with numbers and calculate the sum, subtraction, multiplication, and division of these numbers. Store each result in a separate variable.
### String Concatenation:
- Declare two string variables and concatenate them. Store the result in a new variable.
### String Interpolation:
- Use template literals to create a message that includes the variables name and age.
### Variable Reassignment:
- Reassign new values to the variables name, age, and student, and display the new values.
### Assignment Operators:
- Use assignment operators (+=, -=, *=, /=) to modify the values of the numeric variables.

## Standard Input and Output
### Simple Data Input:
- Ask the user for their name and display a welcome message.
### Number Input and Conversion:
- Ask the user for two numbers and display their sum.
### String Input and Manipulation:
- Ask the user for a string and display its length.
### Concatenation of Inputs:
- Ask the user for two strings and display their concatenation.
### String Interpolation with Inputs:
- Ask the user for their name and age, and display a message that includes this information using template literals.
### Mathematical Operations with Inputs:
- Ask the user for a number and display the square of that number.
### Array Input and Manipulation:
- Ask the user for a series of numbers separated by commas and display the average of those numbers.

## Logical and Arithmetic operations
- Ask the user for their age and display a message indicating whether they are of legal age (age 18 or older) or not.
- Ask the user for two numbers and display a message indicating which one is larger.
- Ask the user for a number and display a message indicating whether the number is odd or even.
- Ask the user for two boolean values (true or false) and display the result of the AND, OR, and NOT logical operations between them.
- Ask the user for two numbers and a logical operator (&& for AND, || for OR) and display the result of the logical expression.
- Ask the user for two strings and display a message indicating whether they are equal or different.

## Selection Structures
- Triangle Validation: Write a program that asks the user for three numbers representing the sides of a triangle. 
The program should check if these three numbers can form a valid triangle (the sum of any two sides must be greater than
the third side). If valid, classify the triangle as equilateral, isosceles, or scalene.
- Leap Year Verification: Implement a program that asks the user for a year and checks if it is a leap year. A year is a
leap year if it is divisible by 4, except for years that are divisible by 100 but not divisible by 400.
- Rock, Paper, Scissors Game: Develop a program that allows the user to play Rock, Paper, Scissors against the computer.
The program should prompt the user for their choice and generate a random choice for the computer. Display who the 
winner was or if there was a tie.

## Loop Structures
- Print Numbers from 1 to 100: Write a program that prints all numbers from 1 to 100. Use a for loop.
- Sum of the First N Numbers: Create a function that takes a number n and returns the sum of the first n natural numbers
using a while loop.
- Number of Digits: Write a function that takes a number and returns the number of digits in that number using a while 
loop.
- Factorial of a Number: Create a function that calculates the factorial of a given number using a for loop.
- Reverse a String: Create a function that takes a string and returns its reverse using a for loop.
- Fibonacci: Write a program that generates the first n numbers of the Fibonacci sequence using a while loop.
- Prime Numbers: Write a program that finds all prime numbers between 1 and 100 using nested loops (for inside for).
- Remove Duplicates from an Array: Create a function that removes duplicates from an array using loops (for inside for).

## Vectors, Matrices, Strings
### Vectors
- Find the Largest and Smallest Element: Write a function that receives an array of numbers and returns the largest and 
smallest elements of the array.
- Concatenate Arrays: Write a function that receives two arrays and returns a new array containing all the elements of 
the two arrays.
- Reverse an Array: Write a function that receives an array and returns a new array with the elements in reverse order.
### Matrices
- Matrix Addition: Create a function that receives two matrices (two-dimensional arrays) of the same dimension and 
returns a new matrix that is the sum of the two.
- Matrix Transposition: Write a function that receives a matrix and returns its transpose.
- Matrix Multiplication: Create a function that receives two matrices and returns the product of the two matrices.
- Sum of Matrix Elements: Write a function that receives a matrix and returns the sum of all its elements.
- Find the Largest Element in Each Row: Create a function that receives a matrix and returns an array containing the 
largest element of each row of the matrix.
### Strings
- Count Vowels: Create a function that receives a string and counts the number of vowels (a, e, i, o, u) in it.
- Remove Duplicate Characters: Write a function that receives a string and returns a new string with all duplicate 
characters removed.
- Check Palindrome: Create a function that receives a string and checks if it is a palindrome (reads the same forward 
and backward).

## Scope and identifiers
- Variable scope: Write a function variableScope that declares a variable in the global scope and another variable in 
the local scope of the function. Demonstrate how these variables behave differently.
- Block scope: Create a function blockScope that uses a for loop and demonstrate the use of block scope with let and var.
- Global and local variables: Complete the setName function so that the name variable defined outside the function is 
not overwritten. Explain the difference between the global name variable and the local name variable.
- Lexical scope: Create a function lexicalScope that contains another function inside it. The inner function should 
access and modify a variable declared in the outer function. Demonstrate how lexical scope works in JavaScript.
- Anonymous function identifiers: Write a function anonymousFunctions that assigns an anonymous function to a variable 
and calls that function. Show how identifiers work when using anonymous functions.

## Functions and parameters
- Simple Function: Write a function called sum that receives two numeric parameters and returns their sum.
- Function with Multiple Parameters: Create a function called calculator that accepts three parameters: two numbers and 
a string representing the operation to be performed ('add', 'subtract', 'multiply', 'divide'). The function should 
return the result of the operation.
- Function with Default Parameters: Write a function called greeting that accepts two parameters: name (string) and 
message (string). The message parameter should have a default value of 'Hello'. The function should return a string that
combines the message and the name.
- Function that Returns Multiple Values: Create a function called operations that receives two numbers and returns a 
list with the results of the addition, subtraction, multiplication, and division of the two numbers.
- Nested Function: Write a function called outerFunction that contains another function called innerFunction. The 
outerFunction should receive a number as a parameter, and the innerFunction should return the square of that number. 
The outerFunction should return the result of the innerFunction.
- Function with Optional Parameters: Create a function called converter that accepts three parameters: value (number), 
sourceUnit (string), and targetUnit (string). If targetUnit is not provided, it should default to 'meters'. The function
should perform the conversion from sourceUnit to targetUnit and return the converted value.
- Function that Uses Another Function: Write two functions: double and triple. The double function should receive a 
number and return its double. The triple function should receive a number and return its triple. Then, create a third 
function called calculate that receives a number and a function as parameters, and returns the result of the passed 
function applied to the number.
- Recursive Function: Write a recursive function called factorial that accepts a non-negative integer and returns the 
factorial of that number.

## Final project
### Income Tax Calculation System
- Collect information from users: Prompt for information from 3 users, such as name, age, and gross monthly salary, and 
store this information in an array of arrays (matrix).
- Calculate net monthly salary: Calculate the net monthly salary using the progressive income tax table for each user.
- Display results: Display the net salary, tax due, and applicable tax rate for each user using template literals.