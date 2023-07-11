function findCircleNum(isConnected: number[][]): number {
  const visited = new Map<number, boolean>();
  let provinceCount = 0;

  for (let i = 0; i < isConnected.length; i++) {
    if (visited.get(i)) {
      continue;
    }

    const currentProvince = [i];

    while (currentProvince.length) {
      const currentNode = currentProvince.shift();
      visited.set(currentNode, true);
      for (let j = 0; j < isConnected.length; j++) {
        if (isConnected[currentNode][j] === 1 && !visited.get(j)) {
          currentProvince.push(j);
        }
      }
    }

    provinceCount++;
  }

  return provinceCount;
};