const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function findEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}


function findOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}


console.log("Even numbers:", findEvenNumbers(numbers));
console.log("Odd numbers:", findOddNumbers(numbers));

// Pattern Printing: 5 rows
function printPattern() {
    for (let i = 1; i <= 5; i++) {
        console.log('*'.repeat(i));
    }
}

printPattern();

// Fixed bug in odd number filtering
function findOddNumbers(arr) {
    return arr.filter(num => num % 2 === 1); // Corrected the logic
}
