/*
/*
@author Keith Ginoel S. Gabinete
@date 2024-04-25 12:26:09
*/
/*
Reverse bits of a given 32 bits unsigned integer.

Note:

    Note that in some languages, such as Java, there is no unsigned integer type. 
    In this case, both input and output will be given as a signed integer type. 
    They should not affect your implementation, as the integer's internal binary 
    representation is the same, whether it is signed or unsigned.

    In Java, the compiler represents the signed integers using 2's complement notation. 
    Therefore, in Example 2 above, the input represents the signed integer -3 and the 
    output represents the signed integer -1073741825.


Example 1:

Input: n = 00000010100101000001111010011100
Output:    964176192 (00111001011110000010100101000000)
Explanation: The input binary string 00000010100101000001111010011100 
represents the unsigned integer 43261596, so return 964176192 which 
its binary representation is 00111001011110000010100101000000.

Example 2:

Input: n = 11111111111111111111111111111101
Output:   3221225471 (10111111111111111111111111111111)
Explanation: The input binary string 11111111111111111111111111111101 
represents the unsigned integer 4294967293, so return 3221225471 which 
its binary representation is 10111111111111111111111111111111.

Constraints:
    The input must be a binary string of length 32
*/


/**
 * @param {number} decimalNumber - a positive integer
 * @return {string}  - a 32-bit binary representation of the decimal number
 */
function convertDecimalTo32BitBinary(decimalNumber) {
    let binaryRepresentation = ''; // will store the binary representation of the decimal number

    // convert the decimal number to binary
    binaryRepresentation = decimalNumber.toString(2);

    // insert 0s to the left of the binary representation to make it 32-bit
    while (binaryRepresentation.length<32) {
        binaryRepresentation = '0' + binaryRepresentation;
    }

    // return the 32-bit binary representation
    return binaryRepresentation;
}


/**
 * @param {string} binaryString - a 32-bit binary string
 * @return {number} - a decimal representation of the 32-bit binary string
 */
function convert32BitBinaryToDecimal(binaryString) {
    return parseInt(binaryString, 2); // convert the binary string to decimal
                                      // parseInt(string, base)
}


/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    // convert the decimal number to 32-bit binary
    const nInBinary = convertDecimalTo32BitBinary(n);

    // reverse the bits of the 32-bit binary
    const reversedBitsOfBinaryN = nInBinary.split('').reverse().join('');

    // convert the reversed bits to decimal
    const reversedBitsDecimalReprentation = convert32BitBinaryToDecimal(reversedBitsOfBinaryN);

    // return the decimal representation of the reversed bits
    return reversedBitsDecimalReprentation;
};


// sample run
const sampleInputN1 = 43261596; // 43261596
const sampleInputN2 = 4294967293;

console.log(reverseBits(sampleInputN1));
console.log(reverseBits(sampleInputN2));


console.log(convertDecimalTo32BitBinary(sampleInputN1));
