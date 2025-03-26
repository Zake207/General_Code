"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplexNumber = exports.ArithmeticableCollection = void 0;
/**
 * Clase que implementa una collección de aritméticos
 */
class ArithmeticableCollection {
    /**
     * Constructor de la clase
     * @param new_elements lista de inicialización
     */
    constructor(...new_elements) {
        this.elements = [];
        this.elements = new_elements;
    }
    /**
     * Añade un item
     * @param item Item a añadir
     * @returns La lista modificada
     */
    AddArithmeticable(item) {
        this.elements.push(item);
        return this.elements;
    }
    /**
     * Devuelve un objeto
     * @param iterator Indice del objeto
     * @returns El objeto
     */
    GetArithmeticable(iterator) {
        if (iterator < 0 || this.elements.length === 0 || iterator >= this.elements.length) {
            return undefined;
        }
        return this.elements[iterator];
    }
    /**
     * Mide el tamaño de la colección
     * @returns El tamaño del array
     */
    GetNumberOfArithmeticables() {
        return this.elements.length;
    }
}
exports.ArithmeticableCollection = ArithmeticableCollection;
/** Clase que implementa operaciones entre complejos */
class ComplexNumber {
    /**
     * Construcotor de la clase
     * @param num valor del numero principal
     */
    constructor(r_n, i_n) {
        this.r_num = 0;
        this.i_num = 0;
        this.r_num = r_n;
        this.i_num = i_n;
    }
    /**
     * Operación de suma
     * @param operand operando con el que se va a operar
     * @returns Resultado
     */
    Add(operand) {
        let result = new ComplexNumber(this.r_num + operand.r_num, this.i_num + operand.i_num);
        return result;
    }
    /**
     * Operación de resta
     * @param operand operando con el que se va a operar
     * @returns Resultado
     */
    Substract(operand) {
        let result = new ComplexNumber(this.r_num - operand.r_num, this.i_num - operand.i_num);
        return result;
    }
    /**
     * Operación de multiplicación
     * @param operand operando con el que se va a operar
     * @returns Resultado
     */
    Multiply(operand) {
        let real = this.r_num * operand.r_num - this.i_num * operand.i_num;
        let imagin = this.r_num * operand.i_num + this.i_num * operand.r_num;
        let result = new ComplexNumber(real, imagin);
        return result;
    }
    /**
     * Operación de división
     * @param operand operando con el que se va a operar
     * @returns Resultado
     */
    Divide(operand) {
        let divisor = operand.i_num ** 2 + operand.r_num ** 2;
        let div_a = this.r_num * operand.r_num + this.i_num * operand.i_num;
        let div_b = this.i_num * operand.r_num - this.r_num * operand.i_num;
        let result = new ComplexNumber(div_a / divisor, div_b / divisor);
        return result;
    }
}
exports.ComplexNumber = ComplexNumber;
let num_a = new ComplexNumber(5, 2);
let num_b = new ComplexNumber(2, 1);
let coll = new ArithmeticableCollection(num_a);
coll.AddArithmeticable(num_b);
coll.GetNumberOfArithmeticables();
coll.GetArithmeticable(0);
