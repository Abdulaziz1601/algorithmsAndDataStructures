// // Adding numbers from 1 to n, including n
// function addUpTo(n) {
//     let total = 0;
//     for (let i = 1; i <= n; i++) {
//         total += i;
//     }
//     return total;
// }

// console.log(addUpTo(3));

// Second addUpTo, which is done by formula
function addUpTo(n) {
    return n * (n + 1) / 2;
}

console.log(addUpTo(6));

function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}

logAtMost10(5);


function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}

console.log(subtotals([1, 2, 3, 4]));