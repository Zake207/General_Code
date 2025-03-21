import { describe, test, expect } from "vitest";
import { Arithmeticable, ArithmeticableCollection, ComplexNumber} from "../src/modi/modi"

describe("modi", () => {
        test("Creación", () => {
                let num_a = new ComplexNumber(5,2)
                let num_b = new ComplexNumber(2,1)

                let coll = new ArithmeticableCollection<ComplexNumber>(num_a)
                coll.AddArithmeticable(num_b)
                expect(coll.GetNumberOfArithmeticables()).toStrictEqual(2)
                expect(coll.GetArithmeticable(1)).toEqual({"r_num": 2,"i_num": 1})
        })

        test("Suma", () => {
                let num_a = new ComplexNumber(5,2)
                let num_b = new ComplexNumber(2,1)
                let result = num_a.Add(num_b)

                expect(result).toEqual({"i_num": 3,"r_num": 7})
        })
        test("Resta", () => {
                let num_a = new ComplexNumber(5,2)
                let num_b = new ComplexNumber(2,1)
                let result = num_a.Substract(num_b)

                expect(result).toEqual({"r_num": 3,"i_num": 1})
        })
        test("Mult", () => {
                let num_a = new ComplexNumber(5,2)
                let num_b = new ComplexNumber(2,-3)
                let result = num_a.Multiply(num_b)

                expect(result).toEqual({"r_num": 16,"i_num": -11}) 
        })
        test("Div", () => {
                let num_a = new ComplexNumber(3,2)
                let num_b = new ComplexNumber(1,-2)
                let result = num_a.Divide(num_b)

                expect(result).toEqual({"r_num": (-1/5),"i_num": (8/5)})
        })

})