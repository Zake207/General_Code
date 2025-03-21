/**
 * Calculate the filter of each pixel
 * @param image Matrix operand
 * @param pos_x index of the position x
 * @param pos_y index of the position y
 * @param rows number of rows
 * @param colunms number of columns
 * @returns the Final result
 */
function Calculate(
  image: number[][],
  pos_x: number,
  pos_y: number,
  rows: number,
  colunms: number,
): number {
  if (pos_x === 0) {
    if (pos_y === 0) {
      return Math.trunc(
        (image[pos_x][pos_y + 1] +
          image[pos_x + 1][pos_y + 1] +
          image[pos_x + 1][pos_y]) /
          3,
      );
    }
    if (pos_y === colunms - 1) {
      return Math.trunc(
        (image[pos_x][pos_y - 1] +
          image[pos_x + 1][pos_y - 1] +
          image[pos_x + 1][pos_y]) /
          3,
      );
    }
    return Math.trunc(
      (image[pos_x][pos_y - 1] +
        image[pos_x][pos_y + 1] +
        image[pos_x + 1][pos_y] +
        image[pos_x + 1][pos_y + 1] +
        image[pos_x + 1][pos_y - 1]) /
        5,
    );
  }
  if (pos_x === rows - 1) {
    if (pos_y === 0) {
      return Math.trunc(
        (image[pos_x - 1][pos_y] +
          image[pos_x - 1][pos_y + 1] +
          image[pos_x][pos_y + 1]) /
          3,
      );
    }
    if (pos_y === colunms - 1) {
      return Math.trunc(
        (image[pos_x][pos_y - 1] +
          image[pos_x - 1][pos_y - 1] +
          image[pos_x - 1][pos_y]) /
          3,
      );
    }
    return Math.trunc(
      (image[pos_x][pos_y - 1] +
        image[pos_x][pos_y + 1] +
        image[pos_x - 1][pos_y] +
        image[pos_x - 1][pos_y + 1] +
        image[pos_x - 1][pos_y - 1]) /
        5,
    );
  }
  if (pos_y === 0) {
    return Math.trunc(
      (image[pos_x - 1][pos_y] +
        image[pos_x + 1][pos_y] +
        image[pos_x][pos_y + 1] +
        image[pos_x + 1][pos_y + 1] +
        image[pos_x - 1][pos_y + 1]) /
        5,
    );
  }
  if (pos_y === colunms - 1) {
    return Math.trunc(
      (image[pos_x - 1][pos_y] +
        image[pos_x + 1][pos_y] +
        image[pos_x][pos_y - 1] +
        image[pos_x - 1][pos_y - 1] +
        image[pos_x - 1][pos_y - 1]) /
        5,
    );
  }
  return Math.trunc(
    (image[pos_x][pos_y - 1] +
      image[pos_x][pos_y + 1] +
      image[pos_x + 1][pos_y - 1] +
      image[pos_x + 1][pos_y] +
      image[pos_x + 1][pos_y + 1] +
      image[pos_x - 1][pos_y - 1] +
      image[pos_x - 1][pos_y] +
      image[pos_x - 1][pos_y - 1]) /
      8,
  );
}

/**
 * Applies a filter to an image
 * @param image image to apply the filter
 * @param rows number of rows
 * @param colunms number of columns
 * @returns the image with the filer applied
 */
export function MediaFilter(
  image: number[][],
  rows: number,
  colunms: number,
): number[][] | undefined {
  if (image.length !== rows) {
    return undefined;
  }
  image.forEach((row) => {
    if (row.length !== colunms) {
      return undefined;
    }
    row.forEach((item) => {
      if (item < 0 || item > 255) {
        return undefined;
      }
    });
  });
  let result: number[][] = image;

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < colunms; ++j) {
      result[i][j] = Calculate(image, i, j, rows, colunms);
    }
  }
  return result;
}
