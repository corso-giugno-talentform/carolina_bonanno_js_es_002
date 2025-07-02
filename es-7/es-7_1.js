function calculator(x, y, operation) {
    switch(operation) {
        case '+':
            return x + y;
            break;
        case '-':
            return x - y;
            break;
        case '*':
            return x * y;
            break;
        case '/':
            return x / y;
            break;
    }
}

console.log("Il risultato è uguale a " + calculator(4, 5, '*'));