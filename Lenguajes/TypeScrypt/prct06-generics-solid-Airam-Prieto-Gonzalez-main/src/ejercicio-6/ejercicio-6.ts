/**
 * Interface Bird, has a name property.
 */
interface Bird {
  name: string;
}

/**
 * Abstract class FlyingBird, implements Bird interface.
 */
abstract class FlyingBird implements Bird {
  /**
   * Constructor of the class FlyingBird.
   * @param name Name of the bird.
   * @param airSpeed Air speed of the bird.
   */
  constructor(
    public readonly name: string,
    public readonly airSpeed: number,
  ) {}

  /**
   * Method fly, returns a string with the bird name and its air speed.
   * @returns a string with the bird name and its air speed.
   */
  fly(): string {
    return `${this.name} is flying at ${this.airSpeed} km/h.`;
  }
}

/**
 * Abstract class NonFlyingBird, implements Bird interface.
 * It has a name property and an action method.
 */
abstract class NonFlyingBird implements Bird {
  /**
   * Constructor of the class NonFlyingBird.
   * @param name Name of the bird.
   */
  constructor(public readonly name: string) {}

  /**
   * Method action, returns a string with the bird name and an action.
   * @returns a string with the bird name and an action.
   */
  action(): string {
    return `${this.name} does everything, but fly.`;
  }
}
/**
 * Class Sparrow, extends FlyingBird.
 */
export class Sparrow extends FlyingBird {
  constructor() {
    super("Sparrow", 20);
  }
}

/**
 * Class Penguin, extends NonFlyingBird.
 */
export class Penguin extends NonFlyingBird {
  constructor() {
    super("Penguin");
  }
}
