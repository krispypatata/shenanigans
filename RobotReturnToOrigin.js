/*
author: Keith Ginoel Gabinete
created: 18 July 2024 18:22:51
*/
/*
https://leetcode.com/problems/robot-return-to-origin/

657. Robot Return to Origin
Easy

There is a robot starting at the position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

You are given a string moves that represents the move sequence of the robot where moves[i] represents its ith move. Valid moves are 'R' (right), 'L' (left), 'U' (up), and 'D' (down).

Return true if the robot returns to the origin after it finishes all of its moves, or false otherwise.

Note: The way that the robot is "facing" is irrelevant. 'R' will always make the robot move to the right once, 'L' will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.

Example 1:
Input: moves = "UD"
Output: true
Explanation: The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.

Example 2:
Input: moves = "LL"
Output: false
Explanation: The robot moves left twice. It ends up two "moves" to the left of the origin. We return false because it is not at the origin at the end of its moves.

Constraints:
    1 <= moves.length <= 2 * 10^4
    moves only contains the characters 'U', 'D', 'L' and 'R'.
*/


/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    // to solve this problem, we need to keep track of the robot's position
    // best way to do this is to use two variables to represent the x and y coordinates of the robot's position
    let xCoordinate = 0, yCoordinate = 0;

    // loop through the moves and update the x and y coordinates based on the move
    for (let i=0; i<moves.length; i++) {
        // for simplicity, we can use a switch statement to update the x and y coordinates
        switch (moves[i]) {
            // 'U' and 'D' moves modify the y coordinate
            case 'U':
                yCoordinate ++;
                break;
            case 'D':
                yCoordinate --;
                break;
            // 'L' and 'R' moves modify the x coordinate
            case 'R':
                xCoordinate ++;
                break;
            default:
                xCoordinate --;
        }
    }

    // check if the robot's position is at the origin (0, 0)
    return xCoordinate === 0 && yCoordinate === 0;
};


// sample run
console.log('Input: moves = "UD"'); // expected output: true
console.log('Output: ', judgeCircle("UD"));
console.log();
console.log('Input: moves = "LL"'); // expected output: false
console.log('Output: ', judgeCircle("LL"));
