/* Income Tax Calculation System */
// Collect information from users: Prompt for information from 3 users, such as name, age, and gross monthly salary,
// and store this information in an array of arrays (matrix).
// Calculate net monthly salary: Calculate the net monthly salary using the progressive income tax table for each user.
// Display results: Display the net salary, tax due, and applicable tax rate for each user using template literals.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function readUser() {
    return new Promise((resolve) => {
        readline.question('Type your name: ', (value1) => {
            readline.question('Type your age: ', (value2) => {
                readline.question('Type your salary: ', (value3) => {
                    resolve([value1, value2, value3])
                })
            })
        })
    })
}

async function collectData() {
    const usersData = []
    console.log('Type name, age, salary: ')
    for (let i = 0; i < 3; i++) {
        const userData = await readUser()
        usersData.push(userData)
    }
    readline.close()

    return usersData
}

function calculateIncomeTax(usersData) {
    const taxTable = [
        { 'salary': 2259.20, 'taxRate': 0},
        { 'salary': 2826.65, 'taxRate': 7.5},
        { 'salary': 3751.05, 'taxRate': 15},
        { 'salary': 4664.68, 'taxRate': 22.5}
    ]

    const results = []
    usersData.map(([name, age, salary]) => {
        let originalSalary = Number(salary)
        salary = Number(salary)
        let taxDue = 0,
            taxRate = 0,
            diff = 0
        while (salary > 0) {
            for (let i = taxTable.length -1; i >= -1 ; i--) {
                if (i === -1) salary = 0
                else if (salary > taxTable[i]['salary']) {
                    diff = salary - taxTable[i]['salary']
                    taxTable[i]['taxRate'] > taxRate ? taxRate = taxTable[i]['taxRate'] : taxRate
                    salary = taxTable[i]['salary']
                    break
                }
            }
            taxDue += diff * (taxRate /100)
        }
        results.push([name, originalSalary - taxDue, taxDue, taxRate])
    })

    return results
}

async function main() {
    const usersData = await collectData()
    const results = calculateIncomeTax(usersData)

    for (let i = 0; i < 3; i++) {
        console.log(results[i][0] + '\n' +
            'Net Salary: ' + results[i][1] + '\n' +
            'Tax due: ' + results[i][2] + '\n' +
            'Tax rate: ' + results[i][3] + '\n')
    }
}

main()
