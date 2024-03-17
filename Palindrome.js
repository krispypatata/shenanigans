// a function to check if a given string is a palindrome or not
function checkIfPalindrome(toCheck) {
    let alphabetLetters = "abcdefghijklmnopqrstuvwxyz";
    let toCheckTrimmedAndLowercase = "";
    let reversedToCheck = "";

    // extract only the alphabetical characters from the given string
    for (let i=0; i<toCheck.length; i++) {
        if ( ( alphabetLetters.includes(toCheck.toLowerCase().charAt(i)) ) == true) {
            toCheckTrimmedAndLowercase += toCheck.toLowerCase().charAt(i);
        }
    }

    // reverse the string
    for (let i=toCheck.length-1; i>=0; i--) {
        reversedToCheck += toCheckTrimmedAndLowercase.charAt(i);
    }

    // compare the two strings
    isPalindrome =  toCheckTrimmedAndLowercase === reversedToCheck;

    // display the results
    if (isPalindrome) {
        console.log(toCheck + " is a PALINDROME.");
    } else {
        console.log(toCheck + " is NOT a PALINDROME.");
    }

}

let sampleString = "A man, a plan, a canal, Panama!";
let sampleString2 = "hello world";
checkIfPalindrome(sampleString);
checkIfPalindrome(sampleString2);

