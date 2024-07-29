/*
author: Keith Ginoel Gabinete
created: 30 July 2024 00:11:04
*/
/*
https://leetcode.com/problems/defanging-an-ip-address/

1108. Defanging an IP Address
Easy

Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

Example 1:
Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"

Example 2:
Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"

Constraints:
    The given address is a valid IPv4 address.
*/


/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let defangedAddress = ''; // will store the defanged IP address

    // iterate through the address string
    for (let i = 0; i < address.length; i++) {
        // if the current character is a period, append '[.]' to defangedAddress
        if (address[i] === '.') {
            defangedAddress += '[.]'
            continue; // skip the rest of the loop
        }

        // otherwise, append the current character to defangedAddress
        defangedAddress += address[i];
    }

    // return the result
    return defangedAddress;
};


// sample run
console.log('Input: address = "1.1.1.1"'); // expected output: "1[.]1[.]1[.]1"
console.log('Output: ', defangIPaddr("1.1.1.1"));
console.log();
console.log('Input: address = "255.100.50.0"'); // expected output: "255[.]100[.]50[.]0"
console.log('Output: ', defangIPaddr("255.100.50.0"));