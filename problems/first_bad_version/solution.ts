/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        if (n === 0 || n === 1) {
            return n;
        }
        
        function getHalfVersion(min: number, max: number) {
            if (min === max) return min;
            
            const checkedVersion = Math.floor((max - min) / 2) + min;
            
            const isBad = isBadVersion(checkedVersion);

            if (isBad) {
                return getHalfVersion(min, checkedVersion);
            } 
            
            return getHalfVersion(checkedVersion + 1, max);
        }
        
        return getHalfVersion(0, n);
    };
};