"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nevera = exports.Bebida = exports.Alimento = exports.Consumible = void 0;
/**
 * Clase abstracta que define a un consumible
 */
class Consumible {
    /**
     * Constructor de la clase
     * @param name nombre del consumible
     * @param id id del consumible
     * @param nutriscore puntuacion nutricional
     * @param info_nutricional info nutricional (grasas, hidratos, proteinas, fibra)
     */
    constructor(name, id, nutriscore, info_nutricional) {
        this._name = name;
        this._id = id;
        this._nutriscore = nutriscore;
        this._info_nutricional = info_nutricional;
    }
    /**
     * Getter de name
     */
    get name() {
        return this._name;
    }
    /**
     * Getter de id
     */
    get id() {
        return this._id;
    }
    /**
     * Getter de nutriscore
     */
    get nutriscore() {
        return this._nutriscore;
    }
    /**
     * Getter de la info nutricional
     */
    get info_nutricional() {
        return this._info_nutricional;
    }
    /**
     * Setter de name
     */
    set name(name) {
        this._name = name;
    }
    /**
     * Setter de id
     */
    set id(id) {
        this._id = id;
    }
    /**
     * Setter de nutriscore
     */
    set nutriscore(nutriscore) {
        this._nutriscore = nutriscore;
    }
    /**
     * Setter de información
     */
    set info_nutricional(info_nutricional) {
        this._info_nutricional = info_nutricional;
    }
}
exports.Consumible = Consumible;
/**
 * Clase alimento que hereda de la clase abstracta consumible
 */
class Alimento extends Consumible {
    /**
     * Constructor de la clase que inicializa la clase superior y añade gramos y si está rico
     * @param gramos peso del alimento
     * @param rico indica si está rico
     */
    constructor(name, id, nutriscore, info_nutricional, gramos, rico) {
        super(name, id, nutriscore, info_nutricional);
        this._gramos = gramos;
        this._rico = rico;
    }
    /**
     * Getter de gramos
     */
    get gramos() {
        return this._gramos;
    }
    /**
     * Getter de rico
     */
    get rico() {
        return this._rico;
    }
    /**
     * Setter de gramos
     */
    set gramos(gramos) {
        this._gramos = gramos;
    }
    /**
     * Setter de rico
     */
    set rico(rico) {
        this._rico = rico;
    }
    /**
     * Método que devuelve la string con la info nutricional
     * @returns string con la info
     */
    ShowInfo() {
        let result = "Alimento: " + this.name + "(" + this.id + ")\n" + "Nutriscore: " + this.nutriscore + "\nInfo: " + this.info_nutricional + "\nPeso (g): " + this._gramos;
        if (this._rico) {
            result += "\nEstoy buenisimo!";
        }
        else {
            result += "\nEstoy malísimo!";
        }
        return result;
    }
}
exports.Alimento = Alimento;
class Bebida extends Consumible {
    /**
     * Constructor de la clase que inicializa la clase superior y añade miliitros y si tiene gas
     * @param mililitros volumen del alimento
     * @param gas indica si tiene gas o no
     */
    constructor(name, id, nutriscore, info_nutricional, mililitros, gas) {
        super(name, id, nutriscore, info_nutricional);
        this._mililitros = mililitros;
        this._gas = gas;
    }
    /**
     * Getter de mililitros
     */
    get mililitros() {
        return this._mililitros;
    }
    /**
     * Getter de gas
     */
    get gas() {
        return this._gas;
    }
    /**
     * Setter de mililitros
     */
    set mililitros(mililitros) {
        this._mililitros = mililitros;
    }
    /**
     * Setter de gas
     */
    set gas(gas) {
        this._gas = gas;
    }
    /**
     * Método que devuelve string con la info del alimento
     * @returns string con la info
     */
    ShowInfo() {
        let result = "Bebida: " + this.name + "(" + this.id + ")\n" + "Nutriscore: " + this.nutriscore + "\nInfo: " + this.info_nutricional + "\nVolumen (g): " + this._mililitros;
        if (this._gas) {
            result += "\nTengo gas!";
        }
        else {
            result += "\nNo tengo gas!";
        }
        return result;
    }
}
exports.Bebida = Bebida;
/**
 * Clase que implementa una nevera inteligente
 */
class Nevera {
    /**
     * Constructor de la clase
     * @param Alimentos array de alimentos
     * @param Bebidas
     */
    constructor(Alimentos, Bebidas) {
        this._lista = [];
        this._alimentos = Alimentos;
        this._bebidas = Bebidas;
    }
    /**
     * Getter de alimentos
     */
    get alimentos() {
        return this._alimentos;
    }
    /**
     * Getter de bebidas
     */
    get bebidas() {
        return this._bebidas;
    }
    /**
     * Getter de lista
     */
    get lista() {
        return this._lista;
    }
    /**
     * Método que añade un alimento
     * @param alimento alimento a añadir
     * @param cantidad cantidad de este
     */
    AddAlimento(alimento, cantidad) {
        this._alimentos.push([alimento, cantidad]);
    }
    /**
     * Método que añade una bebida
     * @param bebida bebida a añadir
     * @param cantidad cantidad de esta
     */
    AddBebida(bebida, cantidad) {
        this._bebidas.push([bebida, cantidad]);
    }
    /**
     * Método que consume un alimento
     * @param alimento alimento a consumir
     */
    ConsumAlimento(alimento) {
        this._alimentos.forEach(item => {
            if (item[0].name === alimento && item[1] > 0) {
                --item[1];
                if (item[1] === 0) {
                    this._lista.push(item[0].name);
                }
            }
        });
    }
    /**
     * Método que consume una bebida
     * @param bebida bebida a consumir
     */
    ConsumBebida(bebida) {
        this._bebidas.forEach(item => {
            if (item[0].name === bebida && item[1] > 0) {
                --item[1];
                if (item[1] === 0) {
                    this._lista.push(item[0].name);
                }
            }
        });
    }
    /**
     * Método que devuelve el inventario de la nevera
     * @returns string que contiene la lista de alimentos y bebidas disponibles
     */
    Inventario() {
        let result = "Alimentos: ";
        this._alimentos.forEach(item => {
            if (item[1] > 0) {
                result += item[0].name + " ";
            }
        });
        result += "\nBebidas: ";
        this._bebidas.forEach(item => {
            if (item[1] > 0) {
                result += item[0].name + " ";
            }
        });
        return result;
    }
}
exports.Nevera = Nevera;
