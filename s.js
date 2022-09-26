var groupAnagrams = function (strs) {
    const same = (first, second) => {
        for (const key in first) {
            if (first[key] !== second[key]) {
                return false;
            }
        }
        for (const key in second) {
            if (second[key] !== first[key]) {
                return false;
            }
        }

        return true;
    }
    const toStr = (obj) => {
        let res = '';
        for (const key in obj) {
            res += key.repeat(obj[key]);
        }
        return res;
    }
    const resArr = [];
    for (let i = 0; i < strs.length; i++) {
        const arr = [];
        let res = {};
        for (let l of strs[i].split('')) {
            res[l] ? res[l] += 1 : res[l] = 1
        }
        
        for (let str of strs) {
            let counter = {};
            for (let l of str.split('')) {
                counter[l] ? counter[l] += 1 : counter[l] = 1
            }
            if (same(res, counter)) {
                arr.push(toStr(counter));
                strs = strs.filter(el => el !== toStr(counter));
            }
        }
        resArr.push(arr);
    }
    resArr.push(strs);
    return resArr;
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
