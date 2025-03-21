/**
 * Clase abstracta que define a un consumible
 */
export abstract class Consumible {
        private _name: string
        private _id: number
        private _nutriscore: number
        private _info_nutricional: [grasas: number, hidratos: number, proteinas: number, fibra: number]

        /**
         * Constructor de la clase
         * @param name nombre del consumible
         * @param id id del consumible
         * @param nutriscore puntuacion nutricional
         * @param info_nutricional info nutricional (grasas, hidratos, proteinas, fibra)
         */
        constructor(name: string, id: number, nutriscore: number, info_nutricional: [grasas: number, hidratos: number, proteinas: number, fibra: number]) {
                this._name = name
                this._id = id
                this._nutriscore = nutriscore
                this._info_nutricional = info_nutricional
        }

        /**
         * Getter de name
         */
        get name() {
                return this._name
        }
        /**
         * Getter de id
         */
        get id() {
                return this._id
        }
        /**
         * Getter de nutriscore
         */
        get nutriscore() {
                return this._nutriscore
        }
        /**
         * Getter de la info nutricional
         */
        get info_nutricional() {
                return this._info_nutricional
        }

        /**
         * Setter de name
         */
        set name(name: string) {
                this._name = name
        }
        /**
         * Setter de id
         */
        set id(id: number) {
                this._id = id
        }
        /**
         * Setter de nutriscore
         */
        set nutriscore(nutriscore: number) {
                this._nutriscore = nutriscore
        }
        /**
         * Setter de información
         */
        set info_nutricional(info_nutricional: [grasas: number, hidratos: number, proteinas: number, fibra: number]) {
                this._info_nutricional = info_nutricional
        }

        /**
         * Método abstracto que retorna una string con la info del consumible
         */
        abstract ShowInfo(): string
}

/**
 * Clase alimento que hereda de la clase abstracta consumible
 */
export class Alimento extends Consumible {
        private _gramos: number
        private _rico: boolean

        /**
         * Constructor de la clase que inicializa la clase superior y añade gramos y si está rico
         * @param gramos peso del alimento
         * @param rico indica si está rico
         */
        constructor(name: string, id: number, nutriscore: number, info_nutricional: [grasas: number, hidratos: number, proteinas: number, fibra: number], gramos: number, rico: boolean) {
                super(name, id, nutriscore, info_nutricional)
                this._gramos = gramos
                this._rico = rico
        }

        /**
         * Getter de gramos
         */
        get gramos() {
                return this._gramos
        }
        /**
         * Getter de rico
         */
        get rico() {
                return this._rico
        }
        /**
         * Setter de gramos
         */
        set gramos(gramos: number) {
                this._gramos = gramos
        }
        /**
         * Setter de rico
         */
        set rico(rico: boolean) {
                this._rico = rico
        }

        /**
         * Método que devuelve la string con la info nutricional
         * @returns string con la info
         */
        ShowInfo(): string {
                let result: string = "Alimento: " + this.name + "(" + this.id + ")\n" + "Nutriscore: " + this.nutriscore + "\nInfo: " + this.info_nutricional + "\nPeso (g): " + this._gramos
                if (this._rico) {
                        result += "\nEstoy buenisimo!"
                }
                else {
                        result += "\nEstoy malísimo!"
                }
                return result
        }
}
export class Bebida extends Consumible {
        private _mililitros: number
        private _gas: boolean

        /**
         * Constructor de la clase que inicializa la clase superior y añade miliitros y si tiene gas
         * @param mililitros volumen del alimento
         * @param gas indica si tiene gas o no
         */
        constructor(name: string, id: number, nutriscore: number, info_nutricional: [grasas: number, hidratos: number, proteinas: number, fibra: number], mililitros: number, gas: boolean) {
                super(name, id, nutriscore, info_nutricional)
                this._mililitros = mililitros
                this._gas = gas
        }

        /**
         * Getter de mililitros
         */
        get mililitros() {
                return this._mililitros
        }
        /**
         * Getter de gas
         */
        get gas() {
                return this._gas
        }
        /**
         * Setter de mililitros
         */
        set mililitros(mililitros: number) {
                this._mililitros = mililitros
        }
        /**
         * Setter de gas
         */
        set gas(gas: boolean) {
                this._gas = gas
        }

        /**
         * Método que devuelve string con la info del alimento
         * @returns string con la info
         */
        ShowInfo(): string {
                let result: string = "Bebida: " + this.name + "(" + this.id + ")\n" + "Nutriscore: " + this.nutriscore + "\nInfo: " + this.info_nutricional + "\nVolumen (g): " + this._mililitros
                if (this._gas) {
                        result += "\nTengo gas!"
                }
                else {
                        result += "\nNo tengo gas!"
                }
                return result
        }
}

/**
 * Clase que implementa una nevera inteligente
 */
export class Nevera {
        private _alimentos: [alimento: Alimento, cantidad: number][]
        private _bebidas: [bebida: Bebida, cantidad: number][]
        private _lista: string[] = []

        /**
         * Constructor de la clase
         * @param Alimentos array de alimentos
         * @param Bebidas 
         */
        constructor(Alimentos: [alimento: Alimento, cantidad: number][], Bebidas: [bebida: Bebida, cantidad: number][]) {
                this._alimentos = Alimentos
                this._bebidas = Bebidas
        }

        /**
         * Getter de alimentos
         */
        get alimentos() {
                return this._alimentos
        }

        /**
         * Getter de bebidas
         */
        get bebidas() {
                return this._bebidas
        }

        /**
         * Getter de lista
         */
        get lista() {
                return this._lista
        }

        /**
         * Método que añade un alimento
         * @param alimento alimento a añadir
         * @param cantidad cantidad de este
         */
        AddAlimento(alimento: Alimento, cantidad: number) {
                this._alimentos.push([alimento, cantidad])
        }

        /**
         * Método que añade una bebida
         * @param bebida bebida a añadir
         * @param cantidad cantidad de esta
         */
        AddBebida(bebida: Bebida, cantidad: number) {
                this._bebidas.push([bebida, cantidad])
        }

        /**
         * Método que consume un alimento
         * @param alimento alimento a consumir
         */
        ConsumAlimento(alimento: string) {
                this._alimentos.forEach(item => {
                        if (item[0].name === alimento && item[1] > 0) {
                                --item[1]
                                if (item[1] === 0) {
                                        this._lista.push(item[0].name)
                                }
                        }
                })
        }

        /**
         * Método que consume una bebida
         * @param bebida bebida a consumir
         */
        ConsumBebida(bebida: string) {
                this._bebidas.forEach(item => {
                        if (item[0].name === bebida && item[1] > 0) {
                                --item[1]
                                if (item[1] === 0) {
                                        this._lista.push(item[0].name)
                                }
                        }
                })
        }

        /**
         * Método que devuelve el inventario de la nevera
         * @returns string que contiene la lista de alimentos y bebidas disponibles
         */
        Inventario(): string {
                let result: string = "Alimentos: "
                this._alimentos.forEach(item => {
                        if (item[1] > 0) {
                                result += item[0].name + " "
                        }
                })
                result += "\nBebidas: "
                this._bebidas.forEach(item => {
                        if (item[1] > 0) {
                                result += item[0].name + " "
                        }
                })
                return result
        }
}
