import { capitalize } from './main.js';

test('First character is capital', () => {
  expect(capitalize('test')).toBe('Test');
});

test('First character is capital', () => {
  expect(capitalize('Test')).toBe('Test');
});

test('First character is capital', () => {
  expect(capitalize('TEST')).toBe('TEST');
});

test('First character is capital', () => {
  expect(capitalize('tEST')).toBe('TEST');
});

test('First character is capital', () => {
  expect(capitalize('let us test this function')).toBe(
    'Let us test this function'
  );
});

test('First character is capital', () => {
  expect(capitalize('Let us test this function')).toBe(
    'Let us test this function'
  );
});

test('First character is capital', () => {
  expect(capitalize('LET US TEST THIS FUNCTION')).toBe(
    'LET US TEST THIS FUNCTION'
  );
});

test('First character is capital', () => {
  expect(capitalize('lET US TEST THIS FUNCTION')).toBe(
    'LET US TEST THIS FUNCTION'
  );
});

test('First character is capital', () => {
  expect(capitalize('let us test this function')).toBe(
    'lET US TEST THIS FUNCTION'
  );
}); // Doomed to Fail
