var subtractProductAndSum = function(n) {
  const string = String(n);

  let product = 1;

  let sum = 0;

  for (let i = 0; i < string.length; i++) {
    const item = Number(string[i]);

    product *= item;

    sum += item;
  }

  return product - sum;
};