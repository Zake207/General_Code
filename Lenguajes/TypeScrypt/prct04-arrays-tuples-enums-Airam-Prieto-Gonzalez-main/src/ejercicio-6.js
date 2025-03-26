"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomMap = void 0;
function CustomMap(operator_array, operation) {
    operator_array.forEach((element, index, array) => {
        array[index] = operation(element);
    });
    return operator_array;
}
exports.CustomMap = CustomMap;
console.log(CustomMap([0, 1, 2, 3, 4], (item) => item + 100));
console.log(CustomMap([0, 1, 2, 3, 4], (item) => item - 2));
console.log(CustomMap([0, 1, 2, 3, 4], (item) => item * item));
console.log(CustomMap([1, 2, 3, 4, 5], (item) => item / 4));
