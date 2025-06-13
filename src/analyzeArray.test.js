import { analyzeArray } from './main.js';

const array = [1, 8, 3, 4, 2, 6];

test('The average is correct', () => {
  expect(analyzeArray(array)).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

const array2 = [1, 8, 3, 4, 2, 6, -3, 3];

test('The average is correct', () => {
  expect(analyzeArray(array2)).toEqual({
    average: 3,
    min: -3,
    max: 8,
    length: 8,
  });
});
