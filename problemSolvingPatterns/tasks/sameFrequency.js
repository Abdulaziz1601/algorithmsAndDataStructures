// My solution

function sameFrequency(num, res) {
    const arr1 = num.toString().split(''),
        arr2 = res.toString().split('');

    if (arr2.length > arr1.length) return false;

    const frequencyCounter = {};

    for (const digit of arr1) {
        frequencyCounter[digit] = (frequencyCounter[digit] || 0) + 1;
    }
    for (const val of arr2) {
        if (!frequencyCounter[val]) {
            return false;
        } else {
            frequencyCounter[val]--;
        }
    }

    return true;
}


function sameFrequency(num1, num2)  {
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;

    let countNum1 = {};
    let countNum2 = {};

    for(let i = 0; i < strNum1.length; i++) {
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
    }

    for(let j = 0; j < strNum2.length; j++) {
        countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
    }

    for(let key in countNum1) {
        if(countNum1[key] !== countNum2[key]) return false;
    }

    return true;
}

console.log(sameFrequency(112, 221));