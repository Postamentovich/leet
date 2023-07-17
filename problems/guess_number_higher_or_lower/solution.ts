/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {

    function checkRange(l: number, r: number): number {
        
        const middle = Math.floor((r - l) / 2) + l;
        const check = guess(middle);

        if (check === 0) {
            return middle;
        } else if (check === 1) {
            return checkRange(middle + 1, r);
        } else {
            return checkRange(l, middle - 1);
        }
    }

    return checkRange(1, n);
};