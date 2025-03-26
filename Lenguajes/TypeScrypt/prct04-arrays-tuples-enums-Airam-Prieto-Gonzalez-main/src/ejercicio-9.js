"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyReverse = exports.MyReduce = exports.MyMap = exports.MyLenght = exports.MyFilter = exports.MyConcatenate = exports.MyAppend = void 0;
/**
 * Function that appends two lists
 * @param list1 First list
 * @param list2 Second list to append to the first list
 * @returns The final list that is the result of appending the two lists
 *
 * ```typescript
 * MyAppend([1,2,3],[4,5,6]) // Expected output [1,2,3,4,5,6]
 * ```
 *
 */
function MyAppend(list1, list2) {
    let final_list = [];
    for (let i = 0, j = 0; i < MyLenght(list1) + MyLenght(list2); ++i) {
        if (i < MyLenght(list1)) {
            final_list[i] = list1[i];
        }
        else {
            final_list[i] = list2[j];
            ++j;
        }
    }
    return final_list;
}
exports.MyAppend = MyAppend;
/**
 * Function that concatenates multiple lists
 * @param lists Lists to concatenate
 * @returns The final list that is the result of concatenating all the lists
 *
 * ```typescript
 * MyConcatenate([1,2],[3,4],[5,6]) // Expected output [1,2,3,4,5,6]
 * ```
 *
 */
function MyConcatenate(...lists) {
    let final_list = [];
    for (let i = 0; i < MyLenght(lists); ++i) {
        final_list = MyAppend(final_list, lists[i]);
    }
    return final_list;
}
exports.MyConcatenate = MyConcatenate;
/**
 * Function that filters a list
 * @param list List to filter
 * @param filter Function that filters the list
 * @returns The final list that is the result of filtering the list
 *
 * ```typescript
 * MyFilter([1,2,3,4,5,6,7,8,9,0], (item) => item % 2 === 0) // Expected output [false, true, false, true, false, true, false, true, false, true]
 * ```
 *
 */
function MyFilter(list, filter) {
    let final_list = [];
    for (let i = 0; i < list.length; ++i) {
        final_list.push(filter(list[i]));
    }
    return final_list;
}
exports.MyFilter = MyFilter;
/**
 * Function that returns the size of a list
 * @param list List to get the size
 * @returns The size of the list
 *
 * ```typescript
 * MyLenght([1,2,3,5]) // Expected output 4
 * ```
 *
 */
function MyLenght(list) {
    let size = 0;
    for (let item in list) {
        ++size;
    }
    return size;
}
exports.MyLenght = MyLenght;
/**
 * Function that maps a list
 * @param list List to map
 * @param operation Function that maps the list
 * @returns The final list that is the result of mapping the list
 *
 * ```typescript
 * MyMap([0, 1, 2, 3, 4], (item) => item * item) // Expected output [0, 1, 4, 9, 16]
 * ```
 *
 */
function MyMap(list, operation) {
    let final_list = [];
    for (let i = 0; i < MyLenght(list); ++i) {
        final_list[i] = operation(list[i]);
    }
    return final_list;
}
exports.MyMap = MyMap;
/**
 * Function that reduces a list
 * @param list List to reduce
 * @param operation Function that reduces the list
 * @returns The final value that is the result of reducing the list
 *
 * ```typescript
 * MyReduce([1,2,3,4], (acum, item) => acum += item) // Expected output 10
 * ```
 *
 */
function MyReduce(list, operation) {
    if (MyLenght(list) === 0) {
        return undefined;
    }
    let acumulator = list[0];
    for (let i = 1; i < MyLenght(list); ++i) {
        acumulator = operation(acumulator, list[i]);
    }
    return acumulator;
}
exports.MyReduce = MyReduce;
/**
 * Function that reverses a list
 * @param list List to reverse
 * @returns The final list that is the result of reversing the list
 *
 * ```typescript
 * MyReverse([0,1,2,3,4,5]) // Expected output [5,4,3,2,1,0]
 * ```
 *
 */
function MyReverse(list) {
    let size = MyLenght(list);
    if (size === 0) {
        return [];
    }
    let final_list = [];
    for (let i = 0, j = size - 1; i < size; ++i, --j) {
        final_list[i] = list[j];
    }
    return final_list;
}
exports.MyReverse = MyReverse;
console.log(MyAppend([1, 2, 3], [4, 5, 6]));
console.log(MyConcatenate([1, 2], [3, 4], [5, 6]));
console.log(MyFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], (item) => item % 2 === 0));
console.log(MyLenght([1, 2, 3, 5]));
console.log(MyMap([0, 1, 2, 3, 4], (item) => item * item));
console.log(MyReduce([1, 2, 3, 4], (acum, item) => (acum += item)));
console.log(MyReverse([0, 1, 2, 3, 4, 5]));
