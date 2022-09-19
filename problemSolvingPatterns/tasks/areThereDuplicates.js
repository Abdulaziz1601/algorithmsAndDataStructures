// My solution
function areThereDuplicates(...nums) {
    const frequencyCounter = {};
    for (const num of nums) {
        frequencyCounter[num] = frequencyCounter[num] ? frequencyCounter[num] + 1 : 1;
        if (frequencyCounter[num] > 1) return true;
    }

    return false;
}

function areThereDuplicates() {
    let collection = {}
    for (let val in arguments) {
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for (let key in collection) {
        if (collection[key] > 1) return true;
    }
    return false;
}
