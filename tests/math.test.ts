import { sum, substraction } from "../src/modules/math";

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 2 + 1 to equal 1', () => {
  expect(substraction(2, 1)).toBe(1);
});