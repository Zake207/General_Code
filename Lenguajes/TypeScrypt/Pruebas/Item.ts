type WeaponMaterial = "Acero"
| "Acero élfico"
| "Acero meteorítico"
| "Plata"
| "Plata reforzada"
| "Madera de ébano"
| "Hueso de monstruo"
| "Vidrio volcánico"
| "Mithril"
| "Adamantita"

type ArmorMaterial = "Cuero"
  | "Cuero endurecido"
  | "Malla de acero"
  | "Malla de plata"
  | "Escamas de dragón"
  | "Placas de adamantita"
  | "Mithril"
  | "Tela encantada"
  | "Hueso de monstruo"
  | "Chitin de insectoide"

type PotionMaterial =  
  | "Flor de celandina"  
  | "Mandrágora"  
  | "Vérvain"  
  | "Raíz de bryonia"  
  | "Cráneo de kikimora triturado"  
  | "Glándula de nekkers"  
  | "Esencia de espectro"  
  | "Médula de grifo"  
  | "Mucosidad de endriaga"  
  | "Sangre de ghoul";  
type GenericMaterial = ArmorMaterial | WeaponMaterial | PotionMaterial

type Effect = "Regeneración de vitalidad"  
| "Visión en la oscuridad"  
| "Resistencia al veneno"  
| "Aumento de fuerza"  
| "Aumento de velocidad"  
| "Aumento de daño con señales"  
| "Reducción de toxicidad"  
| "Detección de seres invisibles"  
| "Parálisis temporal de enemigos"  
| "Absorción de vida";  



abstract class Item {
        constructor(public readonly id: number, 
                public readonly name: string, 
                public readonly description: string, 
                public readonly material: GenericMaterial, 
                public readonly weight: number, 
                public readonly price: number) {}

}

class Armor extends Item {
        constructor(public readonly id: number, 
                public readonly name: string, 
                public readonly description: string, 
                public readonly material: ArmorMaterial, 
                public readonly weight: number, 
                public readonly price: number) {
                        super(10000 + id, name, description, material, weight, price)
                }
}

class Weapon extends Item {
        constructor(public readonly id: number, 
                public readonly name: string, 
                public readonly description: string, 
                public readonly material: WeaponMaterial, 
                public readonly weight: number, 
                public readonly price: number) {
                        super(11000 + id, name, description, material, weight, price)
                }
}

class Potion extends Item {
        constructor(public readonly id: number, 
                public readonly name: string, 
                public readonly description: string, 
                public readonly material: PotionMaterial, 
                public readonly weight: number, 
                public readonly price: number,
                public readonly effect: Effect) {
                        super(12000 + id, name, description, material, weight, price)
                }
}