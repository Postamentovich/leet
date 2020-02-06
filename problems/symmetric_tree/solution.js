var isSymmetric = function(root) {

   if (root !== null) {
    if (root.left === null && root.right === null) return true;
    else if (root.left === null || root.right === null) return false;
  }

  let dic = {};

  let queue = [root];

  let lev = 1;

  while (queue.length) {
    const len = queue.length;

    let level = [];

    for (let i = 0; i < len; i++) {
      const node = queue.shift();

      level = node && node.val !== null ? [...level, node.val] : [...level, null];

      if (node && node.val !== null) {
        queue.push(node.left);
        queue.push(node.right);
      }
    }

    dic[lev] = level;
    lev++;
  }


  for (key in dic) {
    const item = dic[key];
    const itemLength = item.length;

    if (item instanceof Array && item.length >= 2) {
      for (let i = 0; i < item.length / 2; i++) {
        const firstValue = item[i];
        const lastValue = item[item.length - i - 1];
        if (firstValue !== lastValue) {
          return false;
        }
      }
    }
  }

  return true;
};