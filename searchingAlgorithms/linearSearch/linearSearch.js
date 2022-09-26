// My solution
function linearSearch(arr, s) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === s) {
            return i;
        }
    }
    return -1;
}

// Colt Solution
