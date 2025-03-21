import { describe, test, expect } from 'vitest';
import { Sparrow, Penguin} from '../src/ejercicio-6/ejercicio-6';

describe('Ejercicio 6 - Clases abstractas', () => {
  test('Sparrow class', () => {
    const sparrow = new Sparrow();
    expect(sparrow.name).toBe('Sparrow');
    expect(sparrow.airSpeed).toBe(20);
    expect(sparrow.fly()).toBe('Sparrow is flying at 20 km/h.');
  });

  test('Penguin class', () => {
    const penguin = new Penguin();
    expect(penguin.name).toBe('Penguin');
    expect(penguin.action()).toBe('Penguin does everything, but fly.');
  });
});