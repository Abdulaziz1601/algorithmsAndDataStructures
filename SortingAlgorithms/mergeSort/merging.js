function merge(first, second) {
    const res = [];
    let i = 0,
        j = 0;

    while (i < first.length && j < second.length) {
        if (first[i] < second[j]) res.push(first[i++]);
        else res.push(second[j++]);
        console.log(res);
    }

    i < first.length
        ? res.push(...first.slice(i))
        : res.push(...second.slice(j));

    return res;
}
console.log(merge([500, 600, 700], [100, 105, 800]));
