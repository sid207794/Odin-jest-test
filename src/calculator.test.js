import { calculate } from './main.js';

test('Sum of the values are correct', () => {
  const calculateClass = new calculate();
  expect(calculateClass.add(2, 3)).toBe(5);
  expect(calculateClass.add(0, 1)).toBe(1);
  expect(calculateClass.add(5, -2)).toBe(3);
  expect(calculateClass.add(-5, -2)).toBe(-7);
  expect(calculateClass.add(-5, 2)).toBe(-3);
});

test('Subtraction of the values are correct', () => {
  const calculateClass = new calculate();
  expect(calculateClass.subtract(2, 3)).toBe(-1);
  expect(calculateClass.subtract(4, 2)).toBe(2);
  expect(calculateClass.subtract(5, -2)).toBe(7);
  expect(calculateClass.subtract(-5, -2)).toBe(-3);
  expect(calculateClass.subtract(-5, 2)).toBe(-7);
});

test('Multiplication of the values are correct', () => {
  const calculateClass = new calculate();
  expect(calculateClass.multiply(2, 3)).toBe(6);
  expect(calculateClass.multiply(0, 1)).toBe(0);
  expect(calculateClass.multiply(5, -2)).toBe(-10);
  expect(calculateClass.multiply(-5, -2)).toBe(10);
  expect(calculateClass.multiply(-5, 2)).toBe(-10);
});

test('Division of the values are correct', () => {
  const calculateClass = new calculate();
  expect(calculateClass.divide(2, 4)).toBeCloseTo(0.5);
  expect(calculateClass.divide(4, 2)).toBe(2);
  expect(calculateClass.divide(5, -2)).toBeCloseTo(-2.5);
  expect(calculateClass.divide(-5, -2)).toBeCloseTo(2.5);
  expect(calculateClass.divide(-5, 2)).toBeCloseTo(-2.5);
  expect(calculateClass.divide(0, 1)).toBe(0);
});

test('Division of the values are correct', () => {
  const calculateClass = new calculate();
  expect(calculateClass.add(0, 1)).toBe(3);
}); // Doomed to Fail

test('Division of the values are correct', () => {
  const calculateClass = new calculate();
  expect(calculateClass.subtract(0, 1)).toBe(3);
}); // Doomed to Fail

test('Division of the values are correct', () => {
  const calculateClass = new calculate();
  expect(calculateClass.multiply(0, 1)).toBe(3);
}); // Doomed to Fail

test('Division of the values are correct', () => {
  const calculateClass = new calculate();
  expect(calculateClass.divide(0, 1)).toBe(3);
}); // Doomed to Fail
