import { expect, test } from 'vitest';

export function multiply(a: number, b: number) {
  return a * b;
}

test('multiply', () => {
  expect(multiply(10, 5)).toBe(50);
});
