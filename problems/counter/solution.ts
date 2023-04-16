function createCounter(n: number): () => number {
    let initialCounter = n;
    return function() {
        return initialCounter++;
    }
}


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */