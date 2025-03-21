/**
 * Enum that represents the colour-code of the resistors with their respective values
 */
export enum ResistorColour {
  NEGRO = 0,
  MARRON = 1,
  ROJO = 2,
  NARANJA = 3,
  AMARILLO = 4,
  VERDE = 5,
  AZUL = 6,
  VIOLETA = 7,
  GRIS = 8,
  BLANCO = 9,
}

/**
 * Function that recieve two resistors colour at least and calculate the resistor total value
 * @param first_resistor The colour of the firs resistor
 * @param second_resistor The colour of the second resistor
 * @param unused_resistors A rest parameter that will be ignored
 * @returns The total resistance value
 *
 * ```typescript
 * DecodeResistor("Marron", "Verde") // 15
 * DecodeResistor("Marron", "Verde", "Violeta") // 15
 * DecodeResistor("Verde", "Lila") // undefined
 * ```
 *
 */
export function DecodeResistor(
  first_resistor: string,
  second_resistor: string,
  ...unused_resistors: string[]
): number | undefined {
  first_resistor = first_resistor.toUpperCase();
  second_resistor = second_resistor.toUpperCase();
  if (
    ResistorColour[first_resistor] === undefined ||
    ResistorColour[second_resistor] === undefined
  ) {
    return undefined;
  }
  let resistance: number = 0;
  resistance =
    10 * ResistorColour[first_resistor] + ResistorColour[second_resistor];
  return resistance;
}
