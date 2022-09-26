// function reverse(str) {
//     let sum = '';
//     function helper(inputStr) {
//         if (inputStr.length === 0) return;
//         sum += inputStr.at(-1)
//         return helper(inputStr.substring(0, inputStr.length - 1))
//     }

//     helper(str);
//     return sum;
// }

// console.log(reverse('abdulaziz'));
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(str) {
    if (str.length === 0) return '';
    

    return str.at(-1) + reverse(str.slice(0, str.length - 1));
}

console.log(reverse('rithmschool'));
