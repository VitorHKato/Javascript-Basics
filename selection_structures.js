/* Selection structures */
// Triangle validation
// Write a program that asks the user for three numbers representing the sides of a triangle. The
// program should check if these three numbers can form a valid triangle (the sum of two sides must be greater
// than the third side). If valid, classify the triangle as equilateral, isosceles, or scalene.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Side 1: ", (side1) => {
    readline.question("Side 2: ", (side2) => {
        readline.question("Side 3: ", (side3) => {
            side1 = parseInt(side1)
            side2 = parseInt(side2)
            side3 = parseInt(side3)

            if (((side1 + side2) > side3) && ((side2 + side3) > side1) && ((side1 + side3) > side2)) {
                if (side1 === side2 && side2 === side3) {
                    console.log("Equilateral.")
                } else if (side1 === side2 || side2 === side3 || side1 === side3) {
                    console.log("Isosceles.")
                } else {
                    console.log("Scalene.")
                }
            } else {
                console.log("Invalid triangle.")
            }
            readline.close()
        })
    })
})


// Leap Year verification
// Implement a program that asks the user for a year and check if it is a leap year. A year is a leap year if it is
// divisible by 4, except for years that are divisible by 100 but not divisible by 400
readline.question("Type a year: ", (year) => {
    let leapYear = false
    if (parseInt(year) % 400 === 0 || (parseInt(year) % 4 === 0 && parseInt(year) % 100 !== 0)) {
        leapYear = true
    }
    let msg = leapYear ? "It is a leap year." : "It is not a leap year."
    console.log(msg)
    readline.close()
})


// Rock, Paper, Scissors Game
// Develop a program that allows the user to play Rock, Paper, Scissors against the computer. The program should
// prompt the user for their choice and generate a random choice for the computer. Display who the winner was
// or if there was a tie

const choices = ['Rock', 'Paper', 'Scissors']
readline.question(`Type one ${choices}: `, (choice) => {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)]

    if ((computerChoice === 'Rock' && choice === 'Scissors') || (computerChoice === 'Paper' && choice === 'Rock') ||
        (computerChoice === 'Scissors' && choice === 'Paper')) {
        console.log(`You choose ${choice} and the computer ${computerChoice}, you lost.`)
    } else if (computerChoice === choice){
        console.log(`You choose ${choice} and the computer ${computerChoice}, it is a tie.`)
    }
    else {
        console.log(`You choose ${choice} and the computer ${computerChoice}, you win.`)
    }
    readline.close()
})