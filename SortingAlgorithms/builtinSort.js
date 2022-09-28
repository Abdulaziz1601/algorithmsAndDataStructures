// builtin sort() method accepts an optional comparator function 

// We can use this to tell JS, how to sort

// comparator looks at pairs of elements (a and b), 
// determines their sort order based return value
    // If it returns a negative number then, a should come before b
    // If it returns a positive number then, a should come after b
    // If it returns 0, a and b are the same as far as the sort is concerned

function numberCompare(num1, num2) {
    return num2 - num1;
}

console.log([6, 4, 15, 10].sort(numberCompare));

function compareByLen(str1, str2) {
    return str1.length - str2.length;
}

console.log(['Steele', 'Colt', 'Data Structures', 'Algorithms'].sort(compareByLen));