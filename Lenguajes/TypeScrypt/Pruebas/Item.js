"use strict";
class Item {
    constructor(id, name, description, material, weight, price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.material = material;
        this.weight = weight;
        this.price = price;
    }
}
class Armor extends Item {
    constructor(id, name, description, material, weight, price) {
        super(10000 + id, name, description, material, weight, price);
        this.id = id;
        this.name = name;
        this.description = description;
        this.material = material;
        this.weight = weight;
        this.price = price;
    }
}
class Weapon extends Item {
    constructor(id, name, description, material, weight, price) {
        super(11000 + id, name, description, material, weight, price);
        this.id = id;
        this.name = name;
        this.description = description;
        this.material = material;
        this.weight = weight;
        this.price = price;
    }
}
class Potion extends Item {
    constructor(id, name, description, material, weight, price, effect) {
        super(12000 + id, name, description, material, weight, price);
        this.id = id;
        this.name = name;
        this.description = description;
        this.material = material;
        this.weight = weight;
        this.price = price;
        this.effect = effect;
    }
}
