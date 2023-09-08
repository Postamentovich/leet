function evalRPN(tokens: string[]): number {
    const stack = [];

    for (let i = 0; i < tokens.length; i++) {
        const currentToken = tokens[i];
        const operators = ['+', '-', '*', '/'];
        if (!operators.includes(currentToken)) {
            stack.push(Number(currentToken))
            continue;
        }
        const num1 = stack.pop();
        const num2 = stack.pop();
        let result: number;
        switch (currentToken) {
            case '+':
                result = num1 + num2;
                break
            case '-':
                result = num2 - num1;
                break
            case '*':
                result = num1 * num2;
                break
            case '/':
                result = Math.trunc(num2 / num1);
                break
        }
        stack.push(result);
    }
    return stack[0];
};