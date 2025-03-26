"use strict";
// function ApplyOperation(first_op: String, second_op: String, operation: (x,y) => String);
// function ApplyOperation(first_op: Boolean, second_op: Boolean, operation: (x,y) => Boolean);
// function ApplyOperation(first_op: Number, second_op: Number, operation: (x,y) => Number);
function ApplyOperation(first_op, second_op, operation) {
    return operation(first_op.valueOf(), second_op.valueOf());
}
console.log(ApplyOperation(3, 8, (x, y) => x + y));
console.log(ApplyOperation(3, 8, (x, y) => x - y));
console.log(ApplyOperation(3, 8, (x, y) => x * y));
console.log(ApplyOperation(3, 8, (x, y) => x / y));
console.log(ApplyOperation(false, "23f", (x, y) => x + y));
console.log(ApplyOperation(false, "23f", (x, y) => x - y));
console.log(ApplyOperation(23, "23f", (x, y) => x * y));
console.log(ApplyOperation(89, true, (x, y) => x / y));
