/**
 * Function CustomMap, that receives an array and a function, and applies the function to each element of the array
 * @param operator_array // The array to be modified
 * @param operation // The function to be applied to each element of the array
 * @returns The modified array
 *
 * ```typescript
 * CustomMap([0, 1, 2, 3, 4], (item) => item + 100)
 * // Expected output
 * [100, 101, 102, 103, 104]
 *
 * CustomMap([0, 1, 2, 3, 4], (item) => item - 2)
 * // Expected output
 * [-2, -1, 0, 1, 2]
 *
 * CustomMap([0, 1, 2, 3, 4], (item) => item * item)
 * // Expected output
 * [0, 1, 4, 9, 16]
 *
 * CustomMap([1, 2, 3, 4, 5], (item) => item / 4)
 * // Expected output
 * [0.25, 0.5, 0.75, 1, 1.25]
 * ```
 */
export function CustomMap(
  operator_array: number[],
  operation: (element) => number,
): number[];
export function CustomMap(
  operator_array: string[],
  operation: (element) => string,
): string[];
export function CustomMap(
  operator_array: boolean[],
  operation: (element) => boolean,
): boolean[];
export function CustomMap(
  operator_array: number[] | string[] | boolean[],
  operation: (element) => number | string | boolean,
): number[] | string[] | boolean[] {
  operator_array.forEach((element, index, array) => {
    array[index] = operation(element);
  });
  return operator_array;
}

console.log(CustomMap([0, 1, 2, 3, 4], (item) => item + 100));
console.log(CustomMap([0, 1, 2, 3, 4], (item) => item - 2));
console.log(CustomMap([0, 1, 2, 3, 4], (item) => item * item));
console.log(CustomMap([1, 2, 3, 4, 5], (item) => item / 4));
