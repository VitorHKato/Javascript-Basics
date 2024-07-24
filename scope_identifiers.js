/* Scopes and Identifiers */
// Variable scope
// Write a function 'variableScope' that declares a variable in the global scope and another variable in the local scope
// of the function. Demonstrate how these variables behave differently.
let globalVar = 10
function variableScope() {
    let localVar = 9
    console.log(globalVar, localVar)
}
//console.log(globalVar, localVar)    // Error
variableScope()

// Block scope
// Create a function 'blockScope' that uses a 'for' loop and demonstrates the use of block scope with 'let' and 'var'
function blockScope() {
    for (let i = 0; i < 3; i++) {
        console.log(i)
    }

    console.log(i)      // Undefined

    for (var i = 0; i < 3; i++) {
        console.log(i)
    }
    console.log(i)
}
blockScope()

// Global and local variables
// Complete the 'setName' function so that the 'name' variable defined outside the function is not overwritten
let name = 'Alice'
function setName() {
    let name = 'Bob'
    console.log(name)
}
setName()
console.log(name)

// Lexical scope
// Create a function called 'lexicalScope' that contains another function inside it. The inner function should access
// and modify a variable declared in the outer function. Demonstrate how lexical scope works in Javascript.
function parentFunction() {
    let var1 = 10

    console.log(var1)

    function childrenFunction() {
        var1 ++
    }

    childrenFunction()
    console.log(var1)
}
parentFunction()

// Anonymous function identifiers
// Write a function called 'anonymousFunctions' that assigns an anonymous function to a variable and calls this function.
// Show how identifiers work when using anonymous functions.
function anonymousFunctions() {

    let functionVariable = function() {
        console.log('Called anonymous function')
    }
    functionVariable()
}
anonymousFunctions()