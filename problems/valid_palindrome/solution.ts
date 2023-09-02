function isPalindrome(s: string): boolean {

    const lowerCaseString = s.toLowerCase();

    let leftPointer = 0;
    let rightPointer = s.length - 1;

    while (leftPointer < rightPointer) {
        const left = lowerCaseString[leftPointer];
        if (!left.match(/[a-z0-9]/)) {
            leftPointer++;
            continue;
        }
        const right = lowerCaseString[rightPointer];
        if (!right.match(/[a-z0-9]/)) {
            rightPointer--;
            continue;
        }
        if (left !== right) {
            return false;
        }
        leftPointer++;
        rightPointer--;
    }

    return true;
};