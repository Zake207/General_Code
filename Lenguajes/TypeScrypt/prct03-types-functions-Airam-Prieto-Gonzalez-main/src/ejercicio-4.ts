function Collatz(positive_number: number): number | undefined {
    if (typeof positive_number !== "number") {
        return;
    } else if (positive_number < 0) {
        return;
    } else if (positive_number === 0) {
        return 0;
    }
    let iterations: number = 0;
    while (positive_number != 1) {
        if (positive_number % 2 == 0) {
            positive_number = positive_number / 2;
        } else {
            positive_number = 3 * positive_number + 1;
        }
        ++iterations
    }
    return iterations;
}

console.log(Collatz(10));
console.log(Collatz(1));
console.log(Collatz(0));
console.log(Collatz(21));
console.log(Collatz(-21))