function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
console.log(countUniqueValues([1,2,2,5,7,7,99]));

function deleteDuplicates(arr) {
    if(arr.length === 0) return [];
    
    arr.sort((a, b) => a-b);

    let i = 0;
    for(let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return arr.slice(0, i+1);
}


console.log(deleteDuplicates([1, 2, 2, 3, 4, 5, 3, 2, 1, 2, 4, 5, 6, 7, 9, 55, 5, 555, 33, 33, 55, 55, 5]));



function rotLeft(a, d) {
    const end = [], start = [];
    let i = 0
    for (; i < d; i++) {
        end[i] = a[i];
    }
    
    for (; i < a.length; i++) {
        start[i] = a[i];
    }
    
    return [...start, ...end];
}


rotLeft([1, 2, 3, 4])