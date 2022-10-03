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
console.log(merge([100], [4, 6, 122, 244]));

