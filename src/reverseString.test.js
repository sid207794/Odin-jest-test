import { reverse } from './main.js';

test('The string is now reversed', () => {
  expect(reverse('test')).toBe('tset');
});

test('The string is now reversed', () => {
  expect(reverse('Test')).toBe('tseT');
});

test('The string is now reversed', () => {
  expect(reverse('TEST')).toBe('TSET');
});

test('The string is now reversed', () => {
  expect(reverse('tEST')).toBe('TSEt');
});

test('The string is now reversed', () => {
  expect(reverse('let us test this function')).toBe(
    'noitcnuf siht tset su tel'
  );
});

test('The string is now reversed', () => {
  expect(reverse('Let us test this function')).toBe(
    'noitcnuf siht tset su teL'
  );
});

test('The string is now reversed', () => {
  expect(reverse('LET US TEST THIS FUNCTION')).toBe(
    'NOITCNUF SIHT TSET SU TEL'
  );
});

test('The string is now reversed', () => {
  expect(reverse('LET US TEST THIS FUNCTION')).toBe(
    'LET US TEST THIS FUNCTION'
  );
}); // Doomed to Fail
