/* 
author: Keith Ginoel Gabinete
created: 23 June 2024 00:42:27
*/
/*
409. Longest Palindrome
Easy

Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome.

Example 1:
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

Example 2:
Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.

Constraints:
    1 <= s.length <= 2000
    s consists of lowercase and/or uppercase English letters only.
*/


/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    /* 
    The solution I came up with involves two main steps:
    1. Count the occurences of each element in the string s
    2. Determine the longest palindrome that can be built with the elements in s b
        a. If the occurence of an element is even, add the occurence to the count of the longest palindrome
        b. If the occurence of an element is odd, add the occurence - 1 to the count of the longest palindrome (since we can only use one odd occurence element in the palindrome)
    Note: The reason why we only need the maximum odd occurence is because the one extra element of the maximum odd occurence will be placed in the middle of the palindrome (if there is actually an odd occurence element in the string s)
    */

    // convert the string s into an array of characters for easier element manipulation
    const sAsList = s.split('');

    // STEP 1
    // create a map to store the occurences of each element in s
    let occurencesOfEachElementInS = new Map();

    // iterate through the elements of s and store the occurences of each element in the map
    sAsList.forEach(charAtS => {
        // if the character is already in the map, increment its count value
        if (occurencesOfEachElementInS.has(charAtS)) {
            const count = occurencesOfEachElementInS.get(charAtS);
            occurencesOfEachElementInS.set(charAtS, count+1);
        } 
        // else, add the character to the map with a count value of 1
        else {
            occurencesOfEachElementInS.set(charAtS, 1);
        }
    });

    // STEP 2
    // initialize the necessary variables for counting the characters of the longest palindrome and the maximum odd occurence of a character
    let longestPalindromeCharCount = 0;
    let maxOddCharOccurence = 0;

    // iterate through the occurences of each element in sAsList
    for (const countOfCharAtS of occurencesOfEachElementInS.values()) {
        // if the occurence of the element is even, add the occurence to the count of the longest palindrome
        if (countOfCharAtS%2===0) {
            longestPalindromeCharCount += countOfCharAtS;
            continue;
        }

        // if the iteration reaches this point, the occurence of the element is odd
        // check if the current odd occurence is greater than the maximum odd occurence
        if (maxOddCharOccurence<countOfCharAtS) {
            // if the current odd occurence is greater than the maximum odd occurence, update the longest palindrome count
            // but first, add the maximum odd occurence to the longest palindrome count (except for the first odd occurence since it will be used as the current maximum odd occurence)
            if (maxOddCharOccurence!==0) longestPalindromeCharCount += maxOddCharOccurence - 1;
            maxOddCharOccurence = countOfCharAtS;
        } 
        // else, add the occurence of the element to the longest palindrome count
        else {
            longestPalindromeCharCount += countOfCharAtS -1 ;
        }
    }

    // don't forget to add the maximum odd occurence to the longest palindrome count
    longestPalindromeCharCount += maxOddCharOccurence;

    // return the result
    return longestPalindromeCharCount;
};


// sample run
console.log('Input: s = "abccccdd"'); // expected output: 7
console.log('Output:', longestPalindrome("abccccdd"));
console.log();
console.log('Input: s = "a"'); // expected output: 1
console.log('Output:', longestPalindrome("a"));
console.log();
console.log('Input: s = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"'); // expected output: 983
console.log('Output:', longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"));
