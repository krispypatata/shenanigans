/*
author: Keith Ginoel Gabinete
created: 05 August 2024 23:39:27
*/
/*
https://leetcode.com/problems/assign-cookies/

455. Assign Cookies
Easy

Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.


Example 1:

Input: g = [1,2,3], s = [1,1]
Output: 1
Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3. 
And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
You need to output 1.

Example 2:

Input: g = [1,2], s = [1,2,3]
Output: 2
Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2. 
You have 3 cookies and their sizes are big enough to gratify all of the children, 
You need to output 2.

Constraints:
    1 <= g.length <= 3 * 10^4
    0 <= s.length <= 3 * 10^4
    1 <= g[i], s[j] <= 2^31 - 1
*/


/**
 * @param {number[]} l 
 * @return {void}
 */
var sortListInAscendingOrder = function(l) {
    l.sort((a,b) => a-b); // No need to return the result since lists in javascript are mutable meaning their contents can be modified in place
}


/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    // Sort each list in ascending order to accurately assign cookies to children
    sortListInAscendingOrder(g);
    sortListInAscendingOrder(s);

    // Iterate through the greed list and assign cookies to children
    for (let i = 0; i < g.length; i++) {
        const childGreed = g[i]; // Get the greed factor of the current child

        // Iterate through the cookie list and assign the first cookie that is greater than or equal to the child's greed factor
        for (let j = 0; j < s.length; j++) {
            const cookie = s[j];

            
            if (cookie >= childGreed) {
                // Make sure to update the greed and cookie lists to indicate that the child is content and the cookie has been assigned
                g[i] = 0;
                s[j] = 0;

                // debug
                // console.log(`Greed ${i}: ${g[i]}, Cookie ${j}: ${s[j]}`);
                
                break; // Move on to the next child
            }
        }
    }

    let nContentChildren = 0; // Will store the number of content children
    
    // Count the number of content children (children with greed factor 0)
    g.forEach((childGreed) => {
        if (childGreed === 0) {
            nContentChildren++;
        }
    })

    // Return the result
    return nContentChildren;
};


// sample run
console.log('Input: g = [1,2,3], s = [1,1]'); // expected output: 1
console.log('Output: ', findContentChildren([1,2,3], [1,1]));
console.log();
console.log('Input: g = [1,2], s = [1,2,3]'); // expected output: 2
console.log('Output: ', findContentChildren([1,2], [1,2,3]));
