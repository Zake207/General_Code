/**
 * Function that receives a list of numbers and returns a string with the ranges of numbers
 * @param list The list of numbers
 * @returns A string with the ranges of numbers
 *
 * ```typescript
 * console.log(FromArrayToRanges([5, 6, 7, 9, 12, 13, 14])) // Expected output: '5_7,9,12_14'
 * console.log(FromArrayToRanges([17])) // Expected output: '17'
 * console.log(FromArrayToRanges([-3, -2, -1, 3, 5, 6, 7])) // Expected output: '-3_-1,3,5_7'
 * console.log(FromArrayToRanges([3, 5, 6, 7, 9, 10])) // Expected output: '3,5_7,9_10'
 * ```
 *
 */
export function FromArrayToRanges(list: number[]): string {
  if (list.length === 0) {
    return "";
  } else if (list.length === 1) {
    return list[0].toString();
  }
  let ranges_list: string[] = [];
  let initial_value: number = list[0];
  let final_value: number = list[0];
  for (let i = 0; i < list.length - 1; ++i) {
    // If the next one is inmidietly greater than this continue acumulating
    if (list[i + 1] === list[i] + 1) {
      final_value = list[i + 1];
    } else {
      if (initial_value === final_value) {
        ranges_list.push(initial_value.toString());
      } else {
        ranges_list.push(
          initial_value.toString() + "_" + final_value.toString(),
        );
      }
      initial_value = list[i + 1];
      final_value = list[i + 1];
    }
  }
  ranges_list.push(initial_value.toString() + "_" + final_value.toString());

  return ranges_list.toString();
}

/**
 * Function that receives a string with ranges of numbers and returns an array of numbers
 * @param ranges The string with the ranges of numbers
 * @returns An array of numbers
 *
 * ```typescript
 * console.log(FromRangesToArray('5_7,9,12_14')) // Expected output: [5, 6, 7, 9, 12, 13, 14]
 * console.log(FromRangesToArray('17')) // Expected output: [17]
 * console.log(FromRangesToArray('-17,3')) // Expected output: [-17, 3]
 * console.log(FromRangesToArray('-3_-1,3,5_7')) // Expected output: [-3, -2, -1, 3, 5, 6, 7]
 * console.log(FromRangesToArray('3,5_7,9_10')) // Expected output: [3, 5, 6, 7, 9, 10]
 * ```
 *
 */
export function FromRangesToArray(ranges: string): number[] | undefined {
  if (!/^((-)?\d+(_(-)?\d+)?(,|$))+$/.test(ranges)) {
    return undefined;
  }
  const ranges_strings: string[] = ranges.split(",");
  let ranges_array: number[] = [];
  if (/(-?\d+,?)+$/.test(ranges) && !ranges.includes("_")) {
    ranges_strings.forEach((item) => {
      ranges_array.push(Number(item));
    });
    return ranges_array;
  }
  ranges_strings.forEach((range) => {
    if (range.length === 1) {
      ranges_array.push(Number(range));
    } else {
      let pivot_range: string[] = range.split("_");
      for (let i = Number(pivot_range[0]); i <= Number(pivot_range[1]); ++i) {
        ranges_array.push(i);
      }
    }
  });
  return ranges_array;
}

console.log(FromArrayToRanges([5, 6, 7, 9, 12, 13, 14]));
console.log(FromArrayToRanges([17]));
console.log(FromArrayToRanges([-3, -2, -1, 3, 5, 6, 7]));
console.log(FromArrayToRanges([3, 5, 6, 7, 9, 10]));

console.log(FromRangesToArray("5_7,9,12_14"));
console.log(FromRangesToArray("17"));
console.log(FromRangesToArray("-17,3"));
console.log(FromRangesToArray("-3_-1,3,5_7"));
console.log(FromRangesToArray("3,5_7,9_10"));
