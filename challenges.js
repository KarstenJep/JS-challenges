// Write a function that takes in an array of numbers and returns the sum of all 
// the numbers in the array.
function findSum (array){
    // array is passed into function as parameter
    console.log('in findSum. array is:', array)
    // declare variable for sum
    let sum = 0;
    // loop through array
    for (let num of array) {
        sum += num
    } // end for of loop
    // return sum
    return sum, console.log(sum);
} // end function findSum
// call function
// findSum([ 1, 3, 10]);



//Write a function that takes an array and returns the sum of all the positive 
// numbers in the array.
const findSumOfPos = (array) => {
    // array is passed into function as parameter
    console.log('in findSumOfPos. array is:', array)
    // declare variable for sum
    let sum = 0;
    // loop through array
    for (let i=0; i < array.length; i++ ){
        // check for positive number
        if ( array[i] > 0) {
            // add pos number to sum
            sum += array[i]
        } // end conditional
    } // end for loop
    return sum, console.log(sum);
} // end function
// findSumOfPos([3, 2, 1]);



// Write a function that takes in an array of numbers and returns a new array 
// with only the odd numbers.
const returnOddArray = (array) => {
    // array passed into function
    console.log('in returnOddArray. array is:', array);
    // declare new array
    let oddArray = [];
    // loop through array
    for (let i=0; i < array.length; i++) {
        // check each array index for odd number
        if (array[i] % 2 !== 0) {
             // push odd numbers into new array
             oddArray.push(array[i])
        } 
    } // end loop
    // return new array
    return oddArray, console.log(oddArray);
}
// returnOddArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);



// Write a function that takes in a number. If the number is divisible by 3, return "Fizz". If the number is divisible by 5, return "Buzz". 
// If the number is divisible by both 3 and 5, return "FizzBuzz". Otherwise, just return the number that was passed into the function.
const fizzBuzz = (number) => {
    // number passed into function
    console.log('in fizzBuzz. number is:', number);
    // check if number is divisible by both 3 AND 5, if so return fizzbuzz
    if (number % 3 === 0 && number % 5 === 0) {
        return 'FizzBuzz', console.log('fizzBuzz');
    } // check if number is divisble by 3, if so return fizz
    else if (number % 3 === 0) {
        return 'Fizz', console.log('Fizz');;
    } // check if number is divisible by 5, if so return buzz
    else if (number % 5 === 0) {
        return 'Buzz', console.log('Buzz');;
    } // if none of the above are true, return number
    else {
        return number, console.log(number);
    }
}
// fizzBuzz(4);
// fizzBuzz(9);
// fizzBuzz(30);



// Write a program that takes in a year (as an integer) and returns true if the year is a leap year. Years 
// that are divisible by 4 are leap years, but years that are divisible by 100 are not leap years, 
// but years that are divisible by 400 are leap years.
const leapYear = (year) => {
    // year passed into function as an integer
    console.log('in leapYear. year is:', year);
    // if divisible by 400, return true
    if (year % 400 === 0) {
        return true, console.log(true);
    }
    // if divisble by 100, return false
    else if (year % 100 === 0) {
        return false, console.log(false);
    }
    // if divisible by 4, return true
    else if (year % 4 === 0 ) {
        return true, console.log(true);
    }
    
    else {
        return false, console.log(false);
    }
}
// leapYear(2000);
// leapYear(2001);
// leapYear(2002);
// leapYear(2003);
// leapYear(2004);



// Write a function that accepts an array of ingredients, and determines whether they make a BLT sandwhich. 
// An array is a sandwhich if the first and last items are both "bread", and the middle contains "bacon", 
// "lettuce" and "tomatoes".
const blt = (array) => {
    // array passed into function as parameter
    console.log('in blt. array is:', array);
    // check if index 0 and last index are bread
    const breadOnEnds = (
        array[0] === 'bread' && array[array.length - 1] === "bread"
    );
    // declare variables
    let bacon = false;
    let lettuce = false;
    let tomato = false;
    // loop through array to analyze values
    for (item of array) {
        // check if b l t are included inside array
        if (item === 'bacon') {
            bacon = true;
        } else if (item === 'lettuce') {
            lettuce = true;
        } else if (item === 'tomato') {
            tomato = true;
        }
    } // end loop
    return breadOnEnds && bacon && tomato && lettuce, console.log(breadOnEnds, bacon, tomato, lettuce);
}
// blt(['bread', 'lettuce', 'bacon', 'tomato', 'cheese', 'bread']);
// blt(['lettuce', 'bread', 'bacon', 'tomato', 'cheese', 'bread']);



// Write a function that takes in an array of numbers and either the word 'odd' or 'even', 
// and then returns a new array containing the same numbers, in the same order, but with all odd or even numbers 
// (based on the word passed in) moved to the end of the array.
const moveOddOrEven = (array, oddOrEven) => {
    // passing array and odd or even argument into function
    console.log('in moveOddOrEven. array is:', array, 'argument:', oddOrEven);
    // declare new arrays
    let odds = [];
    let evens = [];
    // loop thru array analyzing values
    for (num of array) {
        // determine odd or even
        if (num%2 === 0) {
          evens.push(num);
        } else {
          odds.push(num);
        } // end conditional
      }
      // determine if odd 
      if (oddOrEven === 'odd') {
        return [...evens, ...odds], console.log(...evens, ...odds);
      } else {
        return [...odds, ...evens], console.log( ...odds, ...evens);;
      } // end conditional
}
// moveOddOrEven([1, 2, 3, 4, 5, 6], 'odd');
// moveOddOrEven([1, 2, 3, 4, 5, 6], 'even');

// alternate way to solve 
// const moveOddOrEven = (array, oddOrEven) => {
//     // passing array and odd or even argument into function
//     console.log('in moveOddOrEven. argument:', oddOrEven);
//     // declare new array
//     let newArray = []
//     for( i=0; i<array.length; i++) {
//         if (word === 'odd') {
//             {array[i] % 2 !== 0 ? 
//             newArray.push(array[i])
//             :
//             newArray.shift(array[i])
//             }
//         } else {
//             if (array[i] % 2 === 0) {
//                 newArray.push(array[i])
//             } else {
//                 newArray.shift(array[i])
//             }
//         }
//     }
//     return newArray;
// }



// Write a function that takes in two arguments, an array of strings and a string. The function should 
// return the number of times the string is found in the array.
const countString = (array, string) => {
    // array and string are passed into function 
    console.log('in countString. string is:', string);
    // declare counter variable
    let count = 0;
    // loop through array
    for (let index of array) {
        // check for matching string in array, count
        if (index === string) {
            count ++;
        } // end conditional
    } // end loop
    return count, console.log(count);
}
// countString(['yo', 'yoyo', 'yo', 'yao', 'y'], 'yo');



// Write a function that reverses a string.
const stringReverser = (string) => {
    let reversedString = "";
    for (let i=string.length-1; i>=0; i--){
        reversedString += string[i]
    } // end loop
    return reversedString, console.log(reversedString);
}
// stringReverser("helloworld");



// Write a function that takes in a number. Return the sum of all the numbers from 1 to the number you 
// passed in. For example, if we pass in 4, we'd return 1 + 2 + 3 + 4 = 10.
const sumNum = (num) => {
    // num is passed into function
    console.log('in sumNum', num);
    // declare variable for sum
    let sum = 0;
    // iterate up to num
    for( let i=1; i<=num; i++) {
        // add index value to sum
        sum += i;
    } // end loop
    return sum, console.log(sum)
}
// sumNum(5);
// sumNum(25);


// Given a string, find the first consecutively repeating character in it and return it's index. If there 
// are no repeating characters, return -1.
const findFirstRepeat = (stringToCheck) => {
    // string is passed into function
    for (let i=0; i<stringToCheck.length; i++) {
        // compare string character against next string character
        if (stringToCheck[i] == stringToCheck[i+1]) {
            // if equal, return index
            return i + 1, console.log(i + 1);
        } // end conditional
    } // end loop
    // return -1 if no repeats
    return -1, console.log(-1);
}
// findFirstRepeat('abccde');
// findFirstRepeat('1234567899');

// Given an array of 1s and 0s, find the maximum number of consecutive 1s in this array.
const countConsecutiveOnes = arrayToCheck => {
    let maxConsecutive = 0;
    let currentStreak = 0;
    for (let i = 0; i < arrayToCheck.length; i++) {
        if (arrayToCheck[i] == 1 && maxConsecutive == currentStreak) {
            maxConsecutive++;
            currentStreak++;
        } else if (arrayToCheck[i] == 1) {
            currentStreak++;
        } else {
            currentStreak = 0;
        }
    }
    return maxConsecutive;
}

