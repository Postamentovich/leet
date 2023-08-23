const roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  const integers = s.split('').map(c => roman[c]);
  
  return integers.reduce((acc, x, i) => x < integers[i+1] ? acc - x : acc + x, 0);
};