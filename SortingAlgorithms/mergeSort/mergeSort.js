// PseudoCode
// Break up the array into halves until you have arrays
//  that are empty ,or have one element

// Once you have smaller sorted arrays, merge those arrays 
// with other sorted arrays until you are back at the full 
// length of the array

// Once array has been merged back together,
//return the merged (and sorted!) array

function merge(first, second) {
    const results = [];
    let i = 0,
        j = 0;

    while (i < first.length && j < second.length) {
        if (second[j] > first[i]) {
            results.push(first[i]);
            i++;
        } else {
            results.push(second[j]);
            j++;
        }
    }
    while (i < first.length) {
        results.push(first[i]);
        i++;
    }

    while (j < second.length) {
        results.push(second[j]);
        j++;
    }

    return results;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor((arr.length) / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergeSort());