// 1. No base case, no stopping point 
function factorial(num) {
    // if(num === 1) return 1;
    return num * factorial(num - 1);
}

// 2. Forgetting to return or returning the wrong thing !
function factorial(num) {
    if(num === 1) return 1;
    return num * factorial(num); //  we had to return num * factorial(num - 1);
}

// 3. Stack overflow 
