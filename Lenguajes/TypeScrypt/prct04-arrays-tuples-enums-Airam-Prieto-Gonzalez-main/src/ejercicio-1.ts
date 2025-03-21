/**
 * Data type that represents a complex number
 */
export type ComplexNumber = [number, number];

/**
 * Addition operation between two complex numbers
 * @param op_a First operand of type ComplexNumber
 * @param op_b Second operand of type ComplexNumber
 * @returns The result of the addition of the complex numbers
 *
 * ```typescript
 * ComplexAdd([5,2], [0,2]) = [5,4]
 * ComplexAdd([5,2], [3,1]) = [8,3]
 * ComplexAdd([5,2], [0,0]) = [5,2]
 * ComplexAdd([5,2], [-3,-1]) = [2,1]
 * ```
 */
export function ComplexAdd(
  op_a: ComplexNumber,
  op_b: ComplexNumber,
): ComplexNumber {
  return [op_a[0] + op_b[0], op_a[1] + op_b[1]];
}

/**
 * Subtraction operation between two complex numbers
 * @param op_a First operand of type ComplexNumber
 * @param op_b Second operand of type ComplexNumber
 * @returns The result of the subtraction of the complex numbers
 *
 * ```typescript
 * ComplexSub([5,2], [0,2]) = [5,0]
 * ComplexSub([5,2], [3,1]) = [2,1]
 * ComplexSub([5,2], [0,0]) = [5,2]
 * ComplexSub([5,2], [-3,-1]) = [8,3]
 * ```
 */
export function ComplexSub(
  op_a: ComplexNumber,
  op_b: ComplexNumber,
): ComplexNumber {
  return [op_a[0] - op_b[0], op_a[1] - op_b[1]];
}

/**
 * Multiplication operation between two complex numbers
 * @param op_a First operand of type ComplexNumber
 * @param op_b Second operand of type ComplexNumber
 * @returns The result of the multiplication of the complex numbers
 *
 * ```typescript
 * ComplexMul([5,2], [0,2]) = [-4,10]
 * ComplexMul([5,2], [3,1]) = [13,11]
 * ComplexMul([5,2], [0,0]) = [0,0]
 * ComplexMul([5,2], [-3,-1]) = [-13,-11]
 * ```
 */
export function ComplexMul(
  op_a: ComplexNumber,
  op_b: ComplexNumber,
): ComplexNumber {
  return [
    op_a[0] * op_b[0] - op_a[1] * op_b[1],
    op_a[0] * op_b[1] + op_a[1] * op_b[0],
  ];
}

/**
 * Division operation between two complex numbers
 * @param op_a First operand of type ComplexNumber
 * @param op_b Second operand of type ComplexNumber
 * @returns The result of the division of the complex numbers
 *
 * ```typescript
 * ComplexDiv([5,2], [0,2]) = [1, -2.5]
 * ComplexDiv([5,2], [3,1]) = [2, -1]
 * ComplexDiv([5,2], [0,0]) = [Infinity, Infinity]
 * ComplexDiv([5,2], [-3,-1]) = [-1, 1]
 * ```
 */
export function ComplexDiv(
  op_a: ComplexNumber,
  op_b: ComplexNumber,
): ComplexNumber {
  const divisor: number = op_b[0] ** 2 + op_b[1] ** 2;
  console.log(divisor);
  if (divisor === 0) {
    return [Infinity, Infinity];
  }
  return [
    (op_a[0] * op_b[0] + op_a[1] * op_b[1]) / divisor,
    (op_a[1] * op_b[0] - op_a[0] * op_b[1]) / divisor,
  ];
}

/**
 * Product operation between a complex number and a real number
 * @param op_a First operand of type ComplexNumber
 * @param op_b Second operand of type number
 * @returns The result of the product between a complex number and a real number
 *
 * ```typescript
 * ComplexProd([5,2], 2) = [10,4]
 * ComplexProd([5,2], 0) = [0,0]
 * ComplexProd([5,2], -2) = [-10,-4]
 * ComplexProd([0,0], 1) = [0,0]
 * ```
 */
export function ComplexProd(op_a: ComplexNumber, op_b: number): ComplexNumber {
  return [op_a[0] * op_b, op_a[1] * op_b];
}

/**
 * Conjugate operation of a complex number
 * @param operator Operand of type ComplexNumber
 * @returns The conjugate of the complex number
 *
 * ```typescript
 * ComplexConj([5,2]) = [5,-2]
 * ComplexConj([0,0]) = [0,0]
 * ComplexConj([5,0]) = [5,0]
 * ComplexConj([0,5]) = [0,-5]
 * ```
 */
export function ComplexConj(operator: ComplexNumber): ComplexNumber {
  if (operator[1] === 0) {
    return operator;
  }
  return [operator[0], -operator[1]];
}

/**
 * Absolute value (modulus) operation of a complex number
 * @param operator Operand of type ComplexNumber
 * @returns The absolute value (modulus) of the complex number
 *
 * ```typescript
 * ComplexAbs([5,2]) = 5.385164807134504
 * ComplexAbs([0,0]) = 0
 * ComplexAbs([5,0]) = 5
 * ComplexAbs([0,5]) = 5
 * ```
 */
export function ComplexAbs(operator: ComplexNumber): number {
  return Math.sqrt(operator[0] ** 2 + operator[1] ** 2);
}
