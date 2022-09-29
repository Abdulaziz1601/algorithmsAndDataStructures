function bubbleSort(arr) {
    let noSwap = true;
    for (let i = arr.length - 1; i > 0; i--) {
        noSwap = true;
        for (let j = 0; j <= i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1])
            if (arr[j] > arr[j + 1]) {
                let t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
                noSwap = false;
            }
        }
        if (noSwap) break;
    }
    return arr;
}

console.log(bubbleSort([9, 1, 3, 4]));