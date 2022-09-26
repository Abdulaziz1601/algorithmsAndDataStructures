// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(s) {
    function reverse(str) {
        if (str.length === 0) return '';

        return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
    }

    return s === reverse(s);
}

console.log(isPalindrome('kitnamoreromantik'));