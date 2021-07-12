import { add as add, sub as sub, mul as mul, div as div } from './math.js';

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds 1 - 2 to equal -1', () => {
  expect(sub(1, 2)).toBe(-1);
});
test('adds 1 * 2 to equal 2', () => {
  expect(mul(1, 2)).toBe(2);
});
test('adds 1 / 2 to equal 0.5', () => {
  expect(div(1, 2)).toBe(0.5);
});

/* function compileAndroidCode() {
  throw new Error('you are using wrong JDK version');
}
test('cpmpiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);
  expect(() => compileAndroidCode()).toThrow('you are using wrong JDK version');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});
 */
/* function compileAndroidCode() {
  throw new Error('you are using wrong JDK version');
}
test('cpmpiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);
  expect(() => compileAndroidCode()).toThrow('you are using wrong JDK version');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});
 */
