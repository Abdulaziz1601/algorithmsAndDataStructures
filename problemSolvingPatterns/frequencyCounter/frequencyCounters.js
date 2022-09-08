"use strict";
// [1, 2, 3] === [1, 4, 9]
// // Naive Approach
// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     for (const num of arr1) {
//         const correctIndex = arr2.indexOf(num * num); // this also a loop that looks into our second array
//         if (correctIndex === -1) {
//             return false;
//         }
//         console.log(arr2);
//         arr2.splice(correctIndex, 1)
//     }
//     return true;
// } // Solution O(N^2)


// console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));

// Frequency Counter
// Refactored

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    console.log(frequencyCounter1, frequencyCounter2);

    for (const key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

console.log(same([1, 5,  2, 3, 2], [9, 1, 4, 4, 25]));
