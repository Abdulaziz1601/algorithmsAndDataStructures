function productOfArray(arr) {
    let product = 1;
    function inner(arr) {
        if (arr.length === 0) {
            return ;
        }
        product *= arr[0];
        inner(arr.slice(1));
    }
    inner(arr);
    return product;
}

console.log(productOfArray([1,2,3]));