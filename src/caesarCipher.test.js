import { caesarCipher } from './main.js';

test('Shifts lowerCase letters to 1 place forward', () => {
  expect(caesarCipher('test', 1)).toBe('uftu');
});

test('Shifts lowerCase letters with one capitalized letter to 1 place forward', () => {
  expect(caesarCipher('Test', 1)).toBe('Uftu');
});

test('Shifts upperCase letters to 1 place forward', () => {
  expect(caesarCipher('TEST', 1)).toBe('UFTU');
});

test('Shifts mixed letters to 1 place forward', () => {
  expect(caesarCipher('tEsT', 1)).toBe('uFtU');
});

test('Shifts mixed letters to 3 place forward', () => {
  expect(caesarCipher('tEsT', 3)).toBe('wHvW');
});

test('Shifts and wraps letters to 10 place forward', () => {
  expect(caesarCipher('xyZ', 10)).toBe('hiJ');
});

test('Shifts and wraps letters to 5 place backwards', () => {
  expect(caesarCipher('aBc', -5)).toBe('vWx');
});

test('Shifts and wraps letters of a sentence to 7 place forward', () => {
  expect(
    caesarCipher(
      'Happy Henry likes Beans, Berries and Chocolates over Fridays Night.',
      7
    )
  ).toBe('Ohwwf Oluyf sprlz Ilhuz, Ilyyplz huk Jovjvshalz vcly Mypkhfz Upnoa.');
});

test('Shifts and wraps letters of a sentence to 7 place forward', () => {
  expect(
    caesarCipher(
      'Happy Henry likes Beans, Berries and Chocolates over Fridays Night.',
      7
    )
  ).toBe('oHWWg OLUYF SPRLZ ILHUZ, ILYYPLZ hUk JOVJVSHALZ VCLY MYPKHFZ upnoa.');
}); // Doomed to Fail
