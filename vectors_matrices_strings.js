/* Vectors */
// Find the largest and the smallest element
// Write a function that takes and array of numbers and returns the largest and smallest elements of the array
function returnLargestSmallest(arr) {
    return [Math.max(...arr), Math.min(...arr)]                 //spread operator
}
let arr = [1, 5, 12, 3, 5, 4, 1, 8],
    response = returnLargestSmallest(arr)
console.log(`Largest: ${response[0]}, Smallest: ${response[1]}`)

// Concatenate arrays
// Write a function that takes two arrays and returns a new array containing all the elements of the two arrays
function sumArrays(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i])
    }
    return arr1
}
let arr1 = [2, 5, 3, 11, 8, 9, 8],
    arr2 = [8, 7, 5, 6, 12, 7, 2, 12, 54]
console.log(sumArrays(arr1, arr2))

// Reverse an array
// Write a function takes an array and returns a new array with the elements in reverse order
function reverseArray(arr) {
    let newArray = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i])
    }
    return newArray
}
let arr = [1, 2, 3, 4, 5]
console.log(reverseArray(arr))


/* Matrices */
// Sum os matrices
// Create a function that takes two matrices (two-dimensional arrays) of the same dimensions and returns a new matrix
// that is the sum of the two
function sumMatrices(m1, m2) {
    for (let i = 0; i < m1.length; i++) {
        for (let j = 0; j < m1[i].length; j++) {
            m1[i][j] += m2[i][j]
        }
    }
    return m1
}
let m1 = [
    [1, 2, 3, 4],
    [3, 2, 1, 0],
    [2, 2, 2, 2]
],
m2 = [
    [3, 2, 1, 0],
    [1, 2, 3, 4],
    [1, 1, 1, 1]
]
console.log(sumMatrices(m1, m2))

// Transpose matrix
// Write a function that takes a matrix and returns its transpose
function transposeMatrix(matrix) {
    let newMatrix = []

    for (let i = 0; i < matrix[0].length; i++) {
        newMatrix[i] = []
        for (let j = 0; j < matrix.length; j++) {
            newMatrix[i][j] = matrix[j][i]
        }
    }
    return newMatrix
}
let matrix = [
    [1, 2, 3, 7],
    [4, 5, 6, 1],
    [7, 8, 9, 6]
]
console.log(transposeMatrix(matrix))

// Matrix multiplication
// Create a function that receives two matrices and returns the product of the two matrices
function multiplyMatrices(m1, m2) {
    let newMatrix = []

    if (m1[0].length === m2.length) {
        for (let i = 0; i < m1.length; i++) {
            newMatrix[i] = [];
            for (let j = 0; j < m2[0].length; j++) {
                newMatrix[i][j] = 0;
                for (let k = 0; k < m1[0].length; k++) {
                    newMatrix[i][j] += m1[i][k] * m2[k][j];
                }
            }
        }

        return newMatrix
    }
    return false
}
let matrix1 = [
    [1, 2, 3],
    [4, 5, 6]
], matrix2 = [
    [7, 8],
    [9, 10],
    [11, 12]
]
let result = multiplyMatrices(matrix1, matrix2)
console.log(result === false ? "The two matrices can't be multiplied" : result)

// Sum of Matrix elements
// Write a function that receives a matrix and returns the sum of all its elements
function returnMatrixSum(matrix) {
    let sum = 0

    for (let i = 0; i < matrix.length; i ++) {
        for (let j = 0; j < matrix[0].length; j++) {
            sum += matrix[i][j]
        }
    }
    return sum
}
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(returnMatrixSum(matrix))

// Find the largest element in each row
// Create a function that receives a matrix and returns an array containing the largest element of each row of the matrix
function returnLargestEachRow(matrix) {
    let largestMatrix = []
    for (let i = 0; i < matrix.length; i ++) {
        let bigger = 0
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[i][j] > bigger ? bigger = matrix[i][j] : bigger
        }
        largestMatrix.push(bigger)
    }

    return largestMatrix
}
let matrix = [
    [1, 8, 5],
    [10, 5, 6],
    [7, 6, 9]
]
console.log(returnLargestEachRow(matrix))


/* Strings */
// Count vowels
// Create a function that receives a string and counts the number os vowels (a,e,i,o,u) in it
function countVowels(value) {
    let count = 0,
        vowels = 'aeiou'
    for (let i = 0; i < value.length; i++) {
        vowels.includes(value[i]) ? count++ : null
    }

    return count
}
console.log(countVowels('vitor'))

// Remove duplicate characters
// Write a function that receives a string and returns a new string with all duplicate characters removed
function removeDuplicateChars(value) {
    let newString = ''
    for (let i = 0; i < value.length; i++) {
        newString.includes(value[i]) ? newString.slice(0, -1) : newString += value[i]
    }

    return newString
}
console.log(removeDuplicateChars('vitorvitor'))

// Check palindrome
// Create a function that receives a string and checks if it is a palindrome (reads the same forward and backward)
function checkPalindrome(value) {
    // let invertedValue = ''
    // for (let i = value.length - 1; i >= 0; i--) {
    //     invertedValue += value[i]
    // }

    let invertedValue = value.split('').reverse().join('')

    return invertedValue === value
}
console.log(checkPalindrome('ana'))