import { describe, expect, test } from 'vitest';
import { Alimento, Bebida, Nevera} from '../src/modi/alimento'

describe('Alimento test', () => {
        
        test('Creación de objeto', () => {
                const oreo = new Alimento("Oreo", 777, -2, [50, 100, 2, 1], 200, true)
                expect(oreo.name).toBe("Oreo")
                expect(oreo.id).toBe(777)
                expect(oreo.nutriscore).toBe(-2)
                expect(oreo.info_nutricional).toStrictEqual([50, 100, 2, 1])
                expect(oreo.gramos).toBe(200)
                expect(oreo.rico).toBe(true)
        })

        test('Show Info', () => {
                const oreo = new Alimento("Oreo", 777, -2, [50, 100, 2, 1], 200, true)
                expect(oreo.ShowInfo()).toBe("Alimento: Oreo(777)\nNutriscore: -2\nInfo: 50,100,2,1\nPeso (g): 200\nEstoy buenisimo!")
        })
})

describe('Bebida test', () => {
        
        test('Creación de objeto', () => {
                const cola = new Bebida("Cola", 888, -500, [50, 200, 0, 0], 250, true)
                expect(cola.name).toBe("Cola")
                expect(cola.id).toBe(888)
                expect(cola.nutriscore).toBe(-500)
                expect(cola.info_nutricional).toStrictEqual([50, 200, 0, 0])
                expect(cola.mililitros).toBe(250)
                expect(cola.gas).toBe(true)
        })

        test('Show Info', () => {
                const cola = new Bebida("Cola", 888, -500, [50, 200, 0, 0], 250, true)
                expect(cola.ShowInfo()).toBe("Bebida: Cola(888)\nNutriscore: -500\nInfo: 50,200,0,0\nVolumen (g): 250\nTengo gas!")
        })
})

describe('Nevera test', () => {
        test('Creacion de objeto', () => {
                let galletas = new Alimento("galletas", 777, -2, [50, 100, 2, 1], 200, true)
                let yogur = new Alimento("yogur", 777, -2, [50, 100, 2, 1], 200, true)
                let chocolate = new Alimento("choco", 777, -2, [50, 100, 2, 1], 200, true)
                let cola = new Bebida("Cola", 888, -500, [50, 200, 0, 0], 250, true)
                let juguito = new Bebida("Juguito", 888, -500, [50, 200, 0, 0], 250, true)
                let leche = new Bebida("Leche", 888, -500, [50, 200, 0, 0], 250, true)
                let nevera = new Nevera([[galletas, 4], [yogur, 1]], [[cola, 0], [juguito, 6]])
                nevera.AddAlimento(chocolate, 3)
                nevera.AddBebida(leche, 1)
                expect(nevera.Inventario()).toBe("Alimentos: galletas yogur choco \nBebidas: Juguito Leche ")
                expect(nevera.lista).toStrictEqual([])
                nevera.ConsumAlimento("yogur")
                nevera.ConsumBebida("Leche")
                expect(nevera.Inventario()).toBe("Alimentos: galletas choco \nBebidas: Juguito ")
                expect(nevera.lista).toStrictEqual(["yogur","Leche"])


        })
})