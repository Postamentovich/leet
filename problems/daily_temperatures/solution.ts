function dailyTemperatures(temperatures: number[]): number[] {
  const result: number[] = [];

  loop1: for (let i = 0; i < temperatures.length; i++) {
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[j] > temperatures[i]) {
        result.push(j - i);
        continue loop1;
      }
    }
    result.push(0);
  }

  return result;
}