export const add = (a, b) => a + b;

export const subtract = (a, b) => a - b;

export const multiply = (a, b) => a * b;

export const divide = (a, b) => a / b;

export const percent = (number) => number / 100;

export const toggleSign = (number) => {
  if (number === 0) return 0;
  return -number;
};
