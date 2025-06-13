export const capitalize = function (word) {
  const newWord = word.slice(0, 1).toUpperCase() + word.slice(1);
  return newWord;
};

export const reverse = function (word, reversedWord = '') {
  if (word.length === 0) return reversedWord;

  return reverse(word.slice(0, -1), reversedWord + word.slice(-1));
};

export class calculate {
  add(num1, num2) {
    return num1 + num2;
  }

  subtract(num1, num2) {
    return num1 - num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }

  divide(num1, num2) {
    return num1 / num2;
  }
}

export const caesarCipher = function (word, number) {
  let newWord = '';

  for (let i = 0; i < word.length; i++) {
    const charCode = word.charCodeAt(i);
    let newCharCode = charCode + number;

    if (charCode >= 65 && charCode <= 90) {
      if (newCharCode > 90) {
        newCharCode = 65 + (newCharCode - 91);
      } else if (newCharCode < 65) {
        newCharCode = 90 - (64 - newCharCode);
      }
      newWord += String.fromCharCode(newCharCode);
    } else if (charCode >= 97 && charCode <= 122) {
      if (newCharCode > 122) {
        newCharCode = 97 + (newCharCode - 123);
      } else if (newCharCode < 97) {
        newCharCode = 122 - (96 - newCharCode);
      }
      newWord += String.fromCharCode(newCharCode);
    } else {
      newWord += String.fromCharCode(charCode);
    }
  }

  return newWord;
};

export const analyzeArray = function (array) {
  const avg =
    array.reduce((previous, next) => {
      return previous + next;
    }) / array.length;

  const minimum = array.reduce((previous, next) => {
    if (previous < next) {
      return previous;
    } else {
      return next;
    }
  });

  const maximum = array.reduce((previous, next) => {
    if (previous < next) {
      return next;
    } else {
      return previous;
    }
  });

  const arrayLength = array.length;

  const object = {
    average: avg,
    min: minimum,
    max: maximum,
    length: arrayLength,
  };

  return object;
};
