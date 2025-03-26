"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecodeResistor = exports.ResistorColour = void 0;
/**
 * Enum that represents the colour-code of the resistors with their respective values
 */
var ResistorColour;
(function (ResistorColour) {
    ResistorColour[ResistorColour["NEGRO"] = 0] = "NEGRO";
    ResistorColour[ResistorColour["MARRON"] = 1] = "MARRON";
    ResistorColour[ResistorColour["ROJO"] = 2] = "ROJO";
    ResistorColour[ResistorColour["NARANJA"] = 3] = "NARANJA";
    ResistorColour[ResistorColour["AMARILLO"] = 4] = "AMARILLO";
    ResistorColour[ResistorColour["VERDE"] = 5] = "VERDE";
    ResistorColour[ResistorColour["AZUL"] = 6] = "AZUL";
    ResistorColour[ResistorColour["VIOLETA"] = 7] = "VIOLETA";
    ResistorColour[ResistorColour["GRIS"] = 8] = "GRIS";
    ResistorColour[ResistorColour["BLANCO"] = 9] = "BLANCO";
})(ResistorColour = exports.ResistorColour || (exports.ResistorColour = {}));
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
function DecodeResistor(first_resistor, second_resistor, ...unused_resistors) {
    first_resistor = first_resistor.toUpperCase();
    second_resistor = second_resistor.toUpperCase();
    if (ResistorColour[first_resistor] === undefined ||
        ResistorColour[second_resistor] === undefined) {
        return undefined;
    }
    let resistance = 0;
    resistance =
        10 * ResistorColour[first_resistor] + ResistorColour[second_resistor];
    return resistance;
}
exports.DecodeResistor = DecodeResistor;
