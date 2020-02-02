/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  const dict = new Set(J);

  let counter = 0;

  for (let j = 0; j < S.length; j++) {
    const stone = S[j];
    if (dict.has(stone)) {
      counter++;
    }
  }

  return counter;
};