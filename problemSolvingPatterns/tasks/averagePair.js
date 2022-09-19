function averagePair(arr, res) {
    if(arr.length === 0) return false;
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let avg = (arr[left] + arr[right]) / 2;
        if (avg === res) {
            console.log(arr[left], arr[right]);
            return true;
        } else if (avg > res) {
            console.log(left, right, avg);
            right--;
        } else if(avg < res) {
            console.log(left, right, avg);
            left++;
        }
    }

    return false;
}

console.log(averagePair([-1,0,3,4,5,6], 4.1));