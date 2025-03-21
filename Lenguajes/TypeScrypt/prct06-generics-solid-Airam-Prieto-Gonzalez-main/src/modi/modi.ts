/**
 * Interfaz que define una clase con 3 operaciones
 */
export interface Arithmeticable<T> {
        /**
         * Operación de suma
         * @param operand primer operando
         * @returns El resultado de la operación
         */
        Add(operand: T): T | undefined

        /**
         * Operación de resta
         * @param operand primer operando
         * @returns El resultado de la operación
         */
        Substract(operand: T): T | undefined

        /**
         * Operación de multiplicación
         * @param operand primer operando
         * @returns El resultado de la operación
         */
        Multiply(operand: T): T | undefined

        /**
         * Operación de división
         * @param operand primer operando
         * @returns El resultado de la operación
         */
        Divide(operand: T): T | undefined
}

/**
 * Clase que implementa una collección de aritméticos
 */
export class ArithmeticableCollection<T extends Arithmeticable<T>> {
        public readonly elements: T[] = []

        /**
         * Constructor de la clase
         * @param new_elements lista de inicialización
         */
        constructor(...new_elements: T[]) {
                this.elements = new_elements
        }

        /**
         * Añade un item
         * @param item Item a añadir
         * @returns La lista modificada
         */
        AddArithmeticable(item: T): T[] {
                this.elements.push(item)
                return this.elements
        }

        /**
         * Devuelve un objeto
         * @param iterator Indice del objeto
         * @returns El objeto
         */
        GetArithmeticable(iterator: number): T | undefined {
                if (iterator < 0 || this.elements.length === 0 || iterator >= this.elements.length) {
                        return undefined
                }
                return this.elements[iterator]
        }

        /**
         * Mide el tamaño de la colección
         * @returns El tamaño del array
         */
        GetNumberOfArithmeticables(): number {
                return this.elements.length
        }
}

/** Clase que implementa operaciones entre complejos */
export class ComplexNumber implements Arithmeticable<ComplexNumber> {
        public readonly r_num: number = 0
        public readonly i_num: number = 0
        /**
         * Construcotor de la clase
         * @param num valor del numero principal
         */
        constructor(r_n: number, i_n: number) {
                this.r_num = r_n
                this.i_num = i_n
        }

        /**
         * Operación de suma
         * @param operand operando con el que se va a operar
         * @returns Resultado
         */
        Add (operand: ComplexNumber): ComplexNumber | undefined {
                let result =new ComplexNumber(this.r_num + operand.r_num, this.i_num + operand.i_num)
                return result
        }

        /**
         * Operación de resta
         * @param operand operando con el que se va a operar
         * @returns Resultado
         */
        Substract (operand: ComplexNumber): ComplexNumber | undefined {
                let result =new ComplexNumber(this.r_num - operand.r_num, this.i_num - operand.i_num)
                return result
        }

        /**
         * Operación de multiplicación
         * @param operand operando con el que se va a operar
         * @returns Resultado
         */
        Multiply (operand: ComplexNumber): ComplexNumber | undefined {
                let real: number = this.r_num * operand.r_num - this.i_num * operand.i_num
                let imagin: number = this.r_num * operand.i_num + this.i_num * operand.r_num
                let result = new ComplexNumber(real, imagin)
                return result
        }

        /**
         * Operación de división
         * @param operand operando con el que se va a operar
         * @returns Resultado
         */
        Divide (operand: ComplexNumber): ComplexNumber | undefined {
                let divisor: number = operand.i_num**2 + operand.r_num**2
                let div_a: number = this.r_num * operand.r_num + this.i_num * operand.i_num
                let div_b: number = this.i_num * operand.r_num - this.r_num * operand.i_num
                let result = new ComplexNumber(div_a/divisor, div_b/divisor)
                return result
        }
}

let num_a = new ComplexNumber(5,2)
let num_b = new ComplexNumber(2,1)

let coll = new ArithmeticableCollection<ComplexNumber>(num_a)
coll.AddArithmeticable(num_b)
coll.GetNumberOfArithmeticables()
coll.GetArithmeticable(0)

