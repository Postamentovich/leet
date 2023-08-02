const suggestedProducts = (
    products: string[],
    searchWord: string
  ): string[][] => {
    let matches = products.sort();

    const result: string[][] = [];

    let word = '';

    for (let i = 0; i < searchWord.length; i++) {
      word += searchWord[i];
      matches = matches.filter((w) => w.startsWith(word));

      result.push(matches.slice(0, 3));
    }

    return result;
  };