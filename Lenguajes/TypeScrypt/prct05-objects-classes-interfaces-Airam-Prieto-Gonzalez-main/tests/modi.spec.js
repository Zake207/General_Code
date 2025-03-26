"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const alimento_1 = require("../src/modi/alimento");
(0, vitest_1.describe)('Alimento test', () => {
    (0, vitest_1.test)('Creación de objeto', () => {
        const oreo = new alimento_1.Alimento("Oreo", 777, -2, [50, 100, 2, 1], 200, true);
        (0, vitest_1.expect)(oreo.name).toBe("Oreo");
        (0, vitest_1.expect)(oreo.id).toBe(777);
        (0, vitest_1.expect)(oreo.nutriscore).toBe(-2);
        (0, vitest_1.expect)(oreo.info_nutricional).toStrictEqual([50, 100, 2, 1]);
        (0, vitest_1.expect)(oreo.gramos).toBe(200);
        (0, vitest_1.expect)(oreo.rico).toBe(true);
    });
    (0, vitest_1.test)('Show Info', () => {
        const oreo = new alimento_1.Alimento("Oreo", 777, -2, [50, 100, 2, 1], 200, true);
        (0, vitest_1.expect)(oreo.ShowInfo()).toBe("Alimento: Oreo(777)\nNutriscore: -2\nInfo: 50,100,2,1\nPeso (g): 200\nEstoy buenisimo!");
    });
});
(0, vitest_1.describe)('Bebida test', () => {
    (0, vitest_1.test)('Creación de objeto', () => {
        const cola = new alimento_1.Bebida("Cola", 888, -500, [50, 200, 0, 0], 250, true);
        (0, vitest_1.expect)(cola.name).toBe("Cola");
        (0, vitest_1.expect)(cola.id).toBe(888);
        (0, vitest_1.expect)(cola.nutriscore).toBe(-500);
        (0, vitest_1.expect)(cola.info_nutricional).toStrictEqual([50, 200, 0, 0]);
        (0, vitest_1.expect)(cola.mililitros).toBe(250);
        (0, vitest_1.expect)(cola.gas).toBe(true);
    });
    (0, vitest_1.test)('Show Info', () => {
        const cola = new alimento_1.Bebida("Cola", 888, -500, [50, 200, 0, 0], 250, true);
        (0, vitest_1.expect)(cola.ShowInfo()).toBe("Bebida: Cola(888)\nNutriscore: -500\nInfo: 50,200,0,0\nVolumen (g): 250\nTengo gas!");
    });
});
(0, vitest_1.describe)('Nevera test', () => {
    (0, vitest_1.test)('Creacion de objeto', () => {
        let galletas = new alimento_1.Alimento("galletas", 777, -2, [50, 100, 2, 1], 200, true);
        let yogur = new alimento_1.Alimento("yogur", 777, -2, [50, 100, 2, 1], 200, true);
        let chocolate = new alimento_1.Alimento("choco", 777, -2, [50, 100, 2, 1], 200, true);
        let cola = new alimento_1.Bebida("Cola", 888, -500, [50, 200, 0, 0], 250, true);
        let juguito = new alimento_1.Bebida("Juguito", 888, -500, [50, 200, 0, 0], 250, true);
        let leche = new alimento_1.Bebida("Leche", 888, -500, [50, 200, 0, 0], 250, true);
        let nevera = new alimento_1.Nevera([[galletas, 4], [yogur, 1]], [[cola, 0], [juguito, 6]]);
        nevera.AddAlimento(chocolate, 3);
        nevera.AddBebida(leche, 1);
        (0, vitest_1.expect)(nevera.Inventario()).toBe("Alimentos: galletas yogur choco \nBebidas: Juguito Leche ");
        (0, vitest_1.expect)(nevera.lista).toStrictEqual([]);
        nevera.ConsumAlimento("yogur");
        nevera.ConsumBebida("Leche");
        (0, vitest_1.expect)(nevera.Inventario()).toBe("Alimentos: galletas choco \nBebidas: Juguito ");
        (0, vitest_1.expect)(nevera.lista).toStrictEqual(["yogur", "Leche"]);
    });
});
