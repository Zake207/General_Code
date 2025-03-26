"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Penguin = exports.Sparrow = void 0;
/**
 * Abstract class FlyingBird, implements Bird interface.
 */
class FlyingBird {
    /**
     * Constructor of the class FlyingBird.
     * @param name Name of the bird.
     * @param airSpeed Air speed of the bird.
     */
    constructor(name, airSpeed) {
        this.name = name;
        this.airSpeed = airSpeed;
    }
    /**
     * Method fly, returns a string with the bird name and its air speed.
     * @returns a string with the bird name and its air speed.
     */
    fly() {
        return `${this.name} is flying at ${this.airSpeed} km/h.`;
    }
}
/**
 * Abstract class NonFlyingBird, implements Bird interface.
 * It has a name property and an action method.
 */
class NonFlyingBird {
    /**
     * Constructor of the class NonFlyingBird.
     * @param name Name of the bird.
     */
    constructor(name) {
        this.name = name;
    }
    /**
     * Method action, returns a string with the bird name and an action.
     * @returns a string with the bird name and an action.
     */
    action() {
        return `${this.name} does everything, but fly.`;
    }
}
/**
 * Class Sparrow, extends FlyingBird.
 */
class Sparrow extends FlyingBird {
    constructor() {
        super("Sparrow", 20);
    }
}
exports.Sparrow = Sparrow;
/**
 * Class Penguin, extends NonFlyingBird.
 */
class Penguin extends NonFlyingBird {
    constructor() {
        super("Penguin");
    }
}
exports.Penguin = Penguin;
