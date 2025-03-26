"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const modi_1 = require("../src/modi/modi");
(0, vitest_1.describe)("modi", () => {
    (0, vitest_1.test)("Creación", () => {
        let num_a = new modi_1.ComplexNumber(5, 2);
        let num_b = new modi_1.ComplexNumber(2, 1);
        let coll = new modi_1.ArithmeticableCollection(num_a);
        coll.AddArithmeticable(num_b);
        (0, vitest_1.expect)(coll.GetNumberOfArithmeticables()).toStrictEqual(2);
        (0, vitest_1.expect)(coll.GetArithmeticable(1)).toEqual({ "r_num": 2, "i_num": 1 });
    });
    (0, vitest_1.test)("Suma", () => {
        let num_a = new modi_1.ComplexNumber(5, 2);
        let num_b = new modi_1.ComplexNumber(2, 1);
        let result = num_a.Add(num_b);
        (0, vitest_1.expect)(result).toEqual({ "i_num": 3, "r_num": 7 });
    });
    (0, vitest_1.test)("Resta", () => {
        let num_a = new modi_1.ComplexNumber(5, 2);
        let num_b = new modi_1.ComplexNumber(2, 1);
        let result = num_a.Substract(num_b);
        (0, vitest_1.expect)(result).toEqual({ "r_num": 3, "i_num": 1 });
    });
    (0, vitest_1.test)("Mult", () => {
        let num_a = new modi_1.ComplexNumber(5, 2);
        let num_b = new modi_1.ComplexNumber(2, -3);
        let result = num_a.Multiply(num_b);
        (0, vitest_1.expect)(result).toEqual({ "r_num": 16, "i_num": -11 });
    });
    (0, vitest_1.test)("Div", () => {
        let num_a = new modi_1.ComplexNumber(3, 2);
        let num_b = new modi_1.ComplexNumber(1, -2);
        let result = num_a.Divide(num_b);
        (0, vitest_1.expect)(result).toEqual({ "r_num": (-1 / 5), "i_num": (8 / 5) });
    });
});
