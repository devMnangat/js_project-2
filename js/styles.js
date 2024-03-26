//String manipulation functions
  //reverse a string
    function reverseString(str) {
    return str.split('').reverse().join('');
}


console.log(reverseString("Hello, tagnanM!"));

  //count characters
    function countCharacters(str) {
    return str.length;
}

console.log(countCharacters("Hello, Mnangat!"));

  //capitalize words
  function capitalizeWords(sentence) {
    return sentence.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}

console.log(capitalizeWords("hello world"));




//Array Functions
    //max and min value
function findMax(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    return Math.max(...arr);
}

function findMin(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    return Math.min(...arr);
}

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log("Maximum value:", findMax(numbers));
console.log("Minimum value:", findMin(numbers));

//sum of numbers
function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const newNumbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log("Sum of all elements:", arraySum(newNumbers));

//filter array
function filterArray(arr, condition) {
    return arr.filter(condition);
}
    // Function to filter out even numbers
function isEven(num) {
    return num % 2 === 0;
}

const evenNumbers = filterArray(numbers, isEven);
console.log("Even numbers:", evenNumbers);




//Mathematical Functions
    //factorial
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }
    
    const number = 5;
    console.log("Factorial of", number, "is:", factorial(number));

    //prime number
    function isPrime(number) {
        if (number < 2) {
            return false;
        }
                for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
    
    console.log(isPrime(7));
    console.log(isPrime(20));
    console.log(isPrime(1));
    console.log(isPrime(0));
    
    //Fibonacci sequence
    function fibonacciSequence(numTerms) {
        let sequence = [0, 1];
        for (let i = 2; i < numTerms; i++) {
            let nextNum = sequence[i - 1] + sequence[i - 2];
            sequence.push(nextNum);
        }
        return sequence;
    }
    
    const numTerms = 10;
    const fibonacci = fibonacciSequence(numTerms);
    console.log("Fibonacci sequence with", numTerms, "terms:", fibonacci);
    
    