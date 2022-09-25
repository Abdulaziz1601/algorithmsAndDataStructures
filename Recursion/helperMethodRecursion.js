function outer(input) {
    let outerScopedVariable = [];

    function helper(helperInput) {
        // modify the outerScopedVariable
        helper(helperInput--);
    }
    helper(input);

    return outerScopedVariable;
}

function collectOddValues(arr) {

    // we wanna store the odd values in the array, so we create outer result variable
    // And it is not reset at every function call, because there is no function call outside
    // It only recursion in helper function
    let result = [];

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }

        helper(helperInput.slice(1))
    }

    helper(arr);
    return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
